import Amplify from "aws-amplify";

Amplify.configure({
  Auth: {
    identityPoolId: "",
    region: "",
    userPoolId: "",
    userPoolWebClientId: ""
  }
});
