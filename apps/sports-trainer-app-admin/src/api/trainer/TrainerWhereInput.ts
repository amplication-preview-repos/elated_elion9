import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TrainingSessionListRelationFilter } from "../trainingSession/TrainingSessionListRelationFilter";

export type TrainerWhereInput = {
  contactDetails?: StringNullableFilter;
  expertise?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  trainingSessions?: TrainingSessionListRelationFilter;
};
