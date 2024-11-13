import { TrainingSessionUpdateManyWithoutTraineesInput } from "./TrainingSessionUpdateManyWithoutTraineesInput";

export type TraineeUpdateInput = {
  contactDetails?: string | null;
  fitnessGoals?: string | null;
  name?: string | null;
  trainingSessions?: TrainingSessionUpdateManyWithoutTraineesInput;
};
