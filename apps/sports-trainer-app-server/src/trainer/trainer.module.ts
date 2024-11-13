import { Module } from "@nestjs/common";
import { TrainerModuleBase } from "./base/trainer.module.base";
import { TrainerService } from "./trainer.service";
import { TrainerController } from "./trainer.controller";
import { TrainerResolver } from "./trainer.resolver";

@Module({
  imports: [TrainerModuleBase],
  controllers: [TrainerController],
  providers: [TrainerService, TrainerResolver],
  exports: [TrainerService],
})
export class TrainerModule {}
