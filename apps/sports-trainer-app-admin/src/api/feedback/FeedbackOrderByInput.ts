import { SortOrder } from "../../util/SortOrder";

export type FeedbackOrderByInput = {
  comments?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  rating?: SortOrder;
  trainingSessionId?: SortOrder;
  updatedAt?: SortOrder;
};
