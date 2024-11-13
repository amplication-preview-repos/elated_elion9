import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TrainingSessionTitle } from "../trainingSession/TrainingSessionTitle";

export const TraineeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="contactDetails" multiline source="contactDetails" />
        <TextInput label="fitnessGoals" multiline source="fitnessGoals" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="trainingSessions"
          reference="TrainingSession"
        >
          <SelectArrayInput
            optionText={TrainingSessionTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
