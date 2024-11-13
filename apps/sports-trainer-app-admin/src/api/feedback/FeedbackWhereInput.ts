import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { TrainingSessionWhereUniqueInput } from "../trainingSession/TrainingSessionWhereUniqueInput";

export type FeedbackWhereInput = {
  comments?: StringNullableFilter;
  id?: StringFilter;
  rating?: IntNullableFilter;
  trainingSession?: TrainingSessionWhereUniqueInput;
};
