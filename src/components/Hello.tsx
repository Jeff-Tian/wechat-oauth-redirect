import * as React from "react";
import { Button } from "antd";
export interface HelloProps {
  compiler: string;
  framework: string;
}

export const Hello = (props: HelloProps) => (
  <div>
    <h1>
      Hello from {props.compiler} and {props.framework}! changed{" "}
      {location.pathname}
    </h1>
    <Button type="primary">Button</Button>
  </div>
);
