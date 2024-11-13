import { Module } from "@nestjs/common";
import { TrainingSessionModuleBase } from "./base/trainingSession.module.base";
import { TrainingSessionService } from "./trainingSession.service";
import { TrainingSessionController } from "./trainingSession.controller";
import { TrainingSessionResolver } from "./trainingSession.resolver";

@Module({
  imports: [TrainingSessionModuleBase],
  controllers: [TrainingSessionController],
  providers: [TrainingSessionService, TrainingSessionResolver],
  exports: [TrainingSessionService],
})
export class TrainingSessionModule {}
