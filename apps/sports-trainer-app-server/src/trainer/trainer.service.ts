import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TrainerServiceBase } from "./base/trainer.service.base";

@Injectable()
export class TrainerService extends TrainerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
