import { BrowserRouter } from "react-router-dom";
import "./../../../../app/styles/index.scss";

export const RouterDecorator = (Story: any) => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
);
