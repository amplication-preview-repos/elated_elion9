import { TrainingSessionWhereInput } from "./TrainingSessionWhereInput";
import { TrainingSessionOrderByInput } from "./TrainingSessionOrderByInput";

export type TrainingSessionFindManyArgs = {
  where?: TrainingSessionWhereInput;
  orderBy?: Array<TrainingSessionOrderByInput>;
  skip?: number;
  take?: number;
};
