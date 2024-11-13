import { TrainingSessionWhereUniqueInput } from "../trainingSession/TrainingSessionWhereUniqueInput";

export type FeedbackCreateInput = {
  comments?: string | null;
  rating?: number | null;
  trainingSession?: TrainingSessionWhereUniqueInput | null;
};
