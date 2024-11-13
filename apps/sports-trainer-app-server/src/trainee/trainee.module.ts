import { Module } from "@nestjs/common";
import { TraineeModuleBase } from "./base/trainee.module.base";
import { TraineeService } from "./trainee.service";
import { TraineeController } from "./trainee.controller";
import { TraineeResolver } from "./trainee.resolver";

@Module({
  imports: [TraineeModuleBase],
  controllers: [TraineeController],
  providers: [TraineeService, TraineeResolver],
  exports: [TraineeService],
})
export class TraineeModule {}
