import { SortOrder } from "../../util/SortOrder";

export type TraineeOrderByInput = {
  contactDetails?: SortOrder;
  createdAt?: SortOrder;
  fitnessGoals?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
