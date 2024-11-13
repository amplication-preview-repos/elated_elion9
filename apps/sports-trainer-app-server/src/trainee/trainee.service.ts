import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TraineeServiceBase } from "./base/trainee.service.base";

@Injectable()
export class TraineeService extends TraineeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
