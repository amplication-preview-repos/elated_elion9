import { TrainingSession } from "../trainingSession/TrainingSession";

export type Feedback = {
  comments: string | null;
  createdAt: Date;
  id: string;
  rating: number | null;
  trainingSession?: TrainingSession | null;
  updatedAt: Date;
};
