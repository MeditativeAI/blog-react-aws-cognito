import React from "react";

import Amplify from "aws-amplify";
import {
  AmplifyAuthenticator,
  AmplifySignIn,
  AmplifySignUp,
  AmplifyForgotPassword,
} from "@aws-amplify/ui-react";

import cognito from "./cognito";
Amplify.configure(cognito);

const App = () => {
  return (
    <div>
      <AmplifyAuthenticator>
        <AmplifySignIn headerText="Custom Sign-in Text" slot="sign-in" />
        <AmplifySignUp headerText="Custom Sign-up Text" slot="sign-up" />
        <AmplifyForgotPassword
          headerText="Custom Forgot Password Text"
          slot="forgot-password"
        />
      </AmplifyAuthenticator>
    </div>
  );
};

export default App;
