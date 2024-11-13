import { TrainingSessionCreateNestedManyWithoutTrainersInput } from "./TrainingSessionCreateNestedManyWithoutTrainersInput";

export type TrainerCreateInput = {
  contactDetails?: string | null;
  expertise?: string | null;
  name?: string | null;
  trainingSessions?: TrainingSessionCreateNestedManyWithoutTrainersInput;
};
