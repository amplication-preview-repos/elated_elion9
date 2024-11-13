import { SortOrder } from "../../util/SortOrder";

export type TrainerOrderByInput = {
  contactDetails?: SortOrder;
  createdAt?: SortOrder;
  expertise?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
