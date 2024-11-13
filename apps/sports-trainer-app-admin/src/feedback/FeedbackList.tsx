import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { TRAININGSESSION_TITLE_FIELD } from "../trainingSession/TrainingSessionTitle";

export const FeedbackList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Feedbacks"}
      perPage={50}
      pagination={<Pagination />}
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
