import * as graphql from "@nestjs/graphql";
import { TrainingSessionResolverBase } from "./base/trainingSession.resolver.base";
import { TrainingSession } from "./base/TrainingSession";
import { TrainingSessionService } from "./trainingSession.service";

@graphql.Resolver(() => TrainingSession)
export class TrainingSessionResolver extends TrainingSessionResolverBase {
  constructor(protected readonly service: TrainingSessionService) {
    super(service);
  }
}
