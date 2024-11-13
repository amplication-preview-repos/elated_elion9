import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TrainingSessionServiceBase } from "./base/trainingSession.service.base";

@Injectable()
export class TrainingSessionService extends TrainingSessionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
