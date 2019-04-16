require("../common/service-worker");
import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "../components/Hello";

ReactDOM.render(
  <Hello compiler="TypeScript" framework="React Antd!!!" />,
  document.getElementById("main")
);
