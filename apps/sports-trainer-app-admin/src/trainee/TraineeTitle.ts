import { Trainee as TTrainee } from "../api/trainee/Trainee";

export const TRAINEE_TITLE_FIELD = "name";

export const TraineeTitle = (record: TTrainee): string => {
  return record.name?.toString() || String(record.id);
};
