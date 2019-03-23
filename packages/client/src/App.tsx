import styled from "@emotion/styled";
import React, { Suspense } from "react";
import { Router, View } from "react-navi";

import { routes } from "./routes";
import Layout from "./components/containers/Layout";

const Container = styled.div`
  height: 100%;
`;

const App = () => {
  // const state = useState();

  return (
    <Container>
      <Router routes={routes}>
        <Suspense fallback={null}>
          <Layout>
            <View />
          </Layout>
        </Suspense>
      </Router>
    </Container>
  );
};

export default App;
