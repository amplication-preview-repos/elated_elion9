import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TraineeService } from "./trainee.service";
import { TraineeControllerBase } from "./base/trainee.controller.base";

@swagger.ApiTags("trainees")
@common.Controller("trainees")
export class TraineeController extends TraineeControllerBase {
  constructor(protected readonly service: TraineeService) {
    super(service);
  }
}
