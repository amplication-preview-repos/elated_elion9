import { Trainer as TTrainer } from "../api/trainer/Trainer";

export const TRAINER_TITLE_FIELD = "name";

export const TrainerTitle = (record: TTrainer): string => {
  return record.name?.toString() || String(record.id);
};
