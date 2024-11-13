import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TrainingSessionTitle } from "../trainingSession/TrainingSessionTitle";

export const FeedbackEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
