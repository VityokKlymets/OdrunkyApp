import registerServiceWorker from "./registerServiceWorker";
import React from 'react';
import { render } from "react-dom";
import App from "./Components/App";

render(<App />, document.getElementById("root"));

registerServiceWorker();