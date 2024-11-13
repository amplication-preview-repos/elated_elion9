import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TrainingSessionListRelationFilter } from "../trainingSession/TrainingSessionListRelationFilter";

export type TraineeWhereInput = {
  contactDetails?: StringNullableFilter;
  fitnessGoals?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  trainingSessions?: TrainingSessionListRelationFilter;
};
