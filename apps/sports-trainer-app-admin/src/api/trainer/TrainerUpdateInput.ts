import { TrainingSessionUpdateManyWithoutTrainersInput } from "./TrainingSessionUpdateManyWithoutTrainersInput";

export type TrainerUpdateInput = {
  contactDetails?: string | null;
  expertise?: string | null;
  name?: string | null;
  trainingSessions?: TrainingSessionUpdateManyWithoutTrainersInput;
};
