import * as graphql from "@nestjs/graphql";
import { TrainerResolverBase } from "./base/trainer.resolver.base";
import { Trainer } from "./base/Trainer";
import { TrainerService } from "./trainer.service";

@graphql.Resolver(() => Trainer)
export class TrainerResolver extends TrainerResolverBase {
  constructor(protected readonly service: TrainerService) {
    super(service);
  }
}
