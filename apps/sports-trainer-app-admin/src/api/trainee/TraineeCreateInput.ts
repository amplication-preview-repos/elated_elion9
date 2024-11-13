import { TrainingSessionCreateNestedManyWithoutTraineesInput } from "./TrainingSessionCreateNestedManyWithoutTraineesInput";

export type TraineeCreateInput = {
  contactDetails?: string | null;
  fitnessGoals?: string | null;
  name?: string | null;
  trainingSessions?: TrainingSessionCreateNestedManyWithoutTraineesInput;
};
