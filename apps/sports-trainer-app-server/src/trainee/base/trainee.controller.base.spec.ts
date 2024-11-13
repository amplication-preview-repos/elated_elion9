import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { TraineeController } from "../trainee.controller";
import { TraineeService } from "../trainee.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  contactDetails: "exampleContactDetails",
  createdAt: new Date(),
  fitnessGoals: "exampleFitnessGoals",
  id: "exampleId",
  name: "exampleName",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  contactDetails: "exampleContactDetails",
  createdAt: new Date(),
  fitnessGoals: "exampleFitnessGoals",
  id: "exampleId",
  name: "exampleName",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    contactDetails: "exampleContactDetails",
    createdAt: new Date(),
    fitnessGoals: "exampleFitnessGoals",
    id: "exampleId",
    name: "exampleName",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  contactDetails: "exampleContactDetails",
  createdAt: new Date(),
  fitnessGoals: "exampleFitnessGoals",
  id: "exampleId",
  name: "exampleName",
  updatedAt: new Date(),
};

const service = {
  createTrainee() {
    return CREATE_RESULT;
  },
  trainees: () => FIND_MANY_RESULT,
  trainee: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Trainee", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: TraineeService,
          useValue: service,
        },
      ],
      controllers: [TraineeController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /trainees", async () => {
    await request(app.getHttpServer())
      .post("/trainees")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /trainees", async () => {
    await request(app.getHttpServer())
      .get("/trainees")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /trainees/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/trainees"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /trainees/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/trainees"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /trainees existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/trainees")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/trainees")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
