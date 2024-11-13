import { TrainingSession } from "../trainingSession/TrainingSession";

export type Trainer = {
  contactDetails: string | null;
  createdAt: Date;
  expertise: string | null;
  id: string;
  name: string | null;
  trainingSessions?: Array<TrainingSession>;
  updatedAt: Date;
};
