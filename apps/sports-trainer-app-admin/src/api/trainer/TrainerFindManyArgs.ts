import { TrainerWhereInput } from "./TrainerWhereInput";
import { TrainerOrderByInput } from "./TrainerOrderByInput";

export type TrainerFindManyArgs = {
  where?: TrainerWhereInput;
  orderBy?: Array<TrainerOrderByInput>;
  skip?: number;
  take?: number;
};
