import { TrainingSession } from "../trainingSession/TrainingSession";

export type Trainee = {
  contactDetails: string | null;
  createdAt: Date;
  fitnessGoals: string | null;
  id: string;
  name: string | null;
  trainingSessions?: Array<TrainingSession>;
  updatedAt: Date;
};
