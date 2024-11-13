import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { TRAININGSESSION_TITLE_FIELD } from "./TrainingSessionTitle";
import { TRAINEE_TITLE_FIELD } from "../trainee/TraineeTitle";
import { TRAINER_TITLE_FIELD } from "../trainer/TrainerTitle";

export const TrainingSessionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="dateTime" source="dateTime" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Trainee" source="trainee.id" reference="Trainee">
          <TextField source={TRAINEE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Trainer" source="trainer.id" reference="Trainer">
          <TextField source={TRAINER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="venue" source="venue" />
        <ReferenceManyField
          reference="Feedback"
          target="trainingSessionId"
          label="Feedbacks"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="comments" source="comments" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="rating" source="rating" />
            <ReferenceField
              label="TrainingSession"
              source="trainingsession.id"
              reference="TrainingSession"
            >
              <TextField source={TRAININGSESSION_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
