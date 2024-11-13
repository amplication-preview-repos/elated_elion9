import { SortOrder } from "../../util/SortOrder";

export type TrainingSessionOrderByInput = {
  createdAt?: SortOrder;
  dateTime?: SortOrder;
  id?: SortOrder;
  traineeId?: SortOrder;
  trainerId?: SortOrder;
  updatedAt?: SortOrder;
  venue?: SortOrder;
};
