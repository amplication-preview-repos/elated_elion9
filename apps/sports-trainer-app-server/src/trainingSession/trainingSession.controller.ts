import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TrainingSessionService } from "./trainingSession.service";
import { TrainingSessionControllerBase } from "./base/trainingSession.controller.base";

@swagger.ApiTags("trainingSessions")
@common.Controller("trainingSessions")
export class TrainingSessionController extends TrainingSessionControllerBase {
  constructor(protected readonly service: TrainingSessionService) {
    super(service);
  }
}
