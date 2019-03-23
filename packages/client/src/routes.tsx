import React from "react";
import { mount, route } from "navi";

import Landing from "./components/containers/Landing";

const routes = mount({
  "/": route(() => {
    return {
      title: "YuNo",
      view: <Landing />
    };
  })
});

export { routes };
