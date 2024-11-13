import { TrainingSessionWhereUniqueInput } from "../trainingSession/TrainingSessionWhereUniqueInput";

export type FeedbackUpdateInput = {
  comments?: string | null;
  rating?: number | null;
  trainingSession?: TrainingSessionWhereUniqueInput | null;
};
