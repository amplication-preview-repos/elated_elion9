import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { TRAINEE_TITLE_FIELD } from "../trainee/TraineeTitle";
import { TRAINER_TITLE_FIELD } from "../trainer/TrainerTitle";

export const TrainingSessionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"TrainingSessions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <TextField label="venue" source="venue" />{" "}
      </Datagrid>
    </List>
  );
};
