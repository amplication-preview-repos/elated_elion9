import { TrainingSession as TTrainingSession } from "../api/trainingSession/TrainingSession";

export const TRAININGSESSION_TITLE_FIELD = "id";

export const TrainingSessionTitle = (record: TTrainingSession): string => {
  return record.id?.toString() || String(record.id);
};
