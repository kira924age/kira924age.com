import { render } from "preact";
import { BrowserRouter } from "react-router";

import { App } from "./app.tsx";

const domElement: HTMLElement | null = document.getElementById("app");

if (domElement) {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    domElement,
  );
}
