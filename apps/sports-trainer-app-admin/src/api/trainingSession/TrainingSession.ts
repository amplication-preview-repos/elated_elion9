import { Feedback } from "../feedback/Feedback";
import { Trainee } from "../trainee/Trainee";
import { Trainer } from "../trainer/Trainer";

export type TrainingSession = {
  createdAt: Date;
  dateTime: Date | null;
  feedbacks?: Array<Feedback>;
  id: string;
  trainee?: Trainee | null;
  trainer?: Trainer | null;
  updatedAt: Date;
  venue: string | null;
};
