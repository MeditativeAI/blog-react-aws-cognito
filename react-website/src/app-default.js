import React from "react";

import Amplify from "aws-amplify";
import { AmplifyAuthenticator } from "@aws-amplify/ui-react";

import cognito from "./cognito";
Amplify.configure(cognito);

const App = () => {
  return <AmplifyAuthenticator />;
};

export default App;
