import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TraineeList } from "./trainee/TraineeList";
import { TraineeCreate } from "./trainee/TraineeCreate";
import { TraineeEdit } from "./trainee/TraineeEdit";
import { TraineeShow } from "./trainee/TraineeShow";
import { TrainerList } from "./trainer/TrainerList";
import { TrainerCreate } from "./trainer/TrainerCreate";
import { TrainerEdit } from "./trainer/TrainerEdit";
import { TrainerShow } from "./trainer/TrainerShow";
import { TrainingSessionList } from "./trainingSession/TrainingSessionList";
import { TrainingSessionCreate } from "./trainingSession/TrainingSessionCreate";
import { TrainingSessionEdit } from "./trainingSession/TrainingSessionEdit";
import { TrainingSessionShow } from "./trainingSession/TrainingSessionShow";
import { FeedbackList } from "./feedback/FeedbackList";
import { FeedbackCreate } from "./feedback/FeedbackCreate";
import { FeedbackEdit } from "./feedback/FeedbackEdit";
import { FeedbackShow } from "./feedback/FeedbackShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"SportsTrainerApp"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Trainee"
          list={TraineeList}
          edit={TraineeEdit}
          create={TraineeCreate}
          show={TraineeShow}
        />
        <Resource
          name="Trainer"
          list={TrainerList}
          edit={TrainerEdit}
          create={TrainerCreate}
          show={TrainerShow}
        />
        <Resource
          name="TrainingSession"
          list={TrainingSessionList}
          edit={TrainingSessionEdit}
          create={TrainingSessionCreate}
          show={TrainingSessionShow}
        />
        <Resource
          name="Feedback"
          list={FeedbackList}
          edit={FeedbackEdit}
          create={FeedbackCreate}
          show={FeedbackShow}
        />
      </Admin>
    </div>
  );
};

export default App;
