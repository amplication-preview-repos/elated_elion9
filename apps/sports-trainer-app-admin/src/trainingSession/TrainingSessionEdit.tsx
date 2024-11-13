import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { FeedbackTitle } from "../feedback/FeedbackTitle";
import { TraineeTitle } from "../trainee/TraineeTitle";
import { TrainerTitle } from "../trainer/TrainerTitle";

export const TrainingSessionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="dateTime" source="dateTime" />
        <ReferenceArrayInput source="feedbacks" reference="Feedback">
          <SelectArrayInput
            optionText={FeedbackTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput source="trainee.id" reference="Trainee" label="Trainee">
          <SelectInput optionText={TraineeTitle} />
        </ReferenceInput>
        <ReferenceInput source="trainer.id" reference="Trainer" label="Trainer">
          <SelectInput optionText={TrainerTitle} />
        </ReferenceInput>
        <TextInput label="venue" multiline source="venue" />
      </SimpleForm>
    </Edit>
  );
};
