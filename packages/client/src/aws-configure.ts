import Amplify from "aws-amplify";

Amplify.configure({
  Auth: {
    identityPoolId: "ap-northeast-1:d1494030-ae17-4fab-b550-256d69dc0d16",
    region: "ap-northeast-1",
    userPoolId: "ap-northeast-1_3YDAWLjMc",
    userPoolWebClientId: "4rc1hufv4k1f52v6agt11d4rvt"
  }
});
