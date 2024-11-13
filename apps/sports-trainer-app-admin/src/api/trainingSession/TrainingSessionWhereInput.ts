import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FeedbackListRelationFilter } from "../feedback/FeedbackListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { TraineeWhereUniqueInput } from "../trainee/TraineeWhereUniqueInput";
import { TrainerWhereUniqueInput } from "../trainer/TrainerWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TrainingSessionWhereInput = {
  dateTime?: DateTimeNullableFilter;
  feedbacks?: FeedbackListRelationFilter;
  id?: StringFilter;
  trainee?: TraineeWhereUniqueInput;
  trainer?: TrainerWhereUniqueInput;
  venue?: StringNullableFilter;
};
