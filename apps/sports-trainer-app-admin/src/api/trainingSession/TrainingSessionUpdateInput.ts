import { FeedbackUpdateManyWithoutTrainingSessionsInput } from "./FeedbackUpdateManyWithoutTrainingSessionsInput";
import { TraineeWhereUniqueInput } from "../trainee/TraineeWhereUniqueInput";
import { TrainerWhereUniqueInput } from "../trainer/TrainerWhereUniqueInput";

export type TrainingSessionUpdateInput = {
  dateTime?: Date | null;
  feedbacks?: FeedbackUpdateManyWithoutTrainingSessionsInput;
  trainee?: TraineeWhereUniqueInput | null;
  trainer?: TrainerWhereUniqueInput | null;
  venue?: string | null;
};
