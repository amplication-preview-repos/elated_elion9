import * as graphql from "@nestjs/graphql";
import { TraineeResolverBase } from "./base/trainee.resolver.base";
import { Trainee } from "./base/Trainee";
import { TraineeService } from "./trainee.service";

@graphql.Resolver(() => Trainee)
export class TraineeResolver extends TraineeResolverBase {
  constructor(protected readonly service: TraineeService) {
    super(service);
  }
}
