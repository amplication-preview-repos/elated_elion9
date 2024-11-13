import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { TRAINEE_TITLE_FIELD } from "../trainee/TraineeTitle";
import { TRAINER_TITLE_FIELD } from "./TrainerTitle";

export const TrainerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="contactDetails" source="contactDetails" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="expertise" source="expertise" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="TrainingSession"
          target="trainerId"
          label="TrainingSessions"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="dateTime" source="dateTime" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Trainee"
              source="trainee.id"
              reference="Trainee"
            >
              <TextField source={TRAINEE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Trainer"
              source="trainer.id"
              reference="Trainer"
            >
              <TextField source={TRAINER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="venue" source="venue" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};