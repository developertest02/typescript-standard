// Import stylesheets
import './style.css';
import { runWhitebaord } from './whiteboard';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

runWhitebaord();
