import { FeedbackCreateNestedManyWithoutTrainingSessionsInput } from "./FeedbackCreateNestedManyWithoutTrainingSessionsInput";
import { TraineeWhereUniqueInput } from "../trainee/TraineeWhereUniqueInput";
import { TrainerWhereUniqueInput } from "../trainer/TrainerWhereUniqueInput";

export type TrainingSessionCreateInput = {
  dateTime?: Date | null;
  feedbacks?: FeedbackCreateNestedManyWithoutTrainingSessionsInput;
  trainee?: TraineeWhereUniqueInput | null;
  trainer?: TrainerWhereUniqueInput | null;
  venue?: string | null;
};
