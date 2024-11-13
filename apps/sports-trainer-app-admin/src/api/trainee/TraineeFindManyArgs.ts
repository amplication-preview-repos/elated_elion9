import { TraineeWhereInput } from "./TraineeWhereInput";
import { TraineeOrderByInput } from "./TraineeOrderByInput";

export type TraineeFindManyArgs = {
  where?: TraineeWhereInput;
  orderBy?: Array<TraineeOrderByInput>;
  skip?: number;
  take?: number;
};
