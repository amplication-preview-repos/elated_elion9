import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TrainerList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Trainers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="contactDetails" source="contactDetails" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="expertise" source="expertise" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};