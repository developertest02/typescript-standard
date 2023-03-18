// Import stylesheets
import "./style.css";
import { run } from "./whiteboards/whiteboard";

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

run();
