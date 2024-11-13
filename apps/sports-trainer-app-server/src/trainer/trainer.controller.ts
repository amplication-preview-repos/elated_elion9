import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TrainerService } from "./trainer.service";
import { TrainerControllerBase } from "./base/trainer.controller.base";

@swagger.ApiTags("trainers")
@common.Controller("trainers")
export class TrainerController extends TrainerControllerBase {
  constructor(protected readonly service: TrainerService) {
    super(service);
  }
}
