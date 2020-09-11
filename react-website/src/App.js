import React from "react";
import Menu from "./menu";

import Amplify from "aws-amplify";
import { AmplifyAuthenticator } from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";

import cognito from "./cognito";
Amplify.configure(cognito);

const App = () => {
  const [authState, setAuthState] = React.useState();
  const [user, setUser] = React.useState();

  React.useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  if (
    authState === AuthState.SignedIn &&
    !(
      user === undefined ||
      user.attributes === undefined ||
      user.attributes.email === null
    )
  ) {
    return <Menu user={user.attributes.email} />;
  } else {
    return <AmplifyAuthenticator />;
  }
};

export default App;
