import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TrainingSessionTitle } from "../trainingSession/TrainingSessionTitle";

export const FeedbackCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="comments" multiline source="comments" />
        <NumberInput step={1} label="rating" source="rating" />
        <ReferenceInput
          source="trainingSession.id"
          reference="TrainingSession"
          label="TrainingSession"
        >
          <SelectInput optionText={TrainingSessionTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
