//imports
import './sass/style.scss';
// import Page from "./ts/page";
// import mainPage from "./ts/mainPage";

//------------delete example for check----------------
// import {Phone, call} from "./ts/page";
// const iphone: Phone = new Phone("iPhone X");
// call(iphone);

// import SmartWatch from "./ts/smartwatch";
// const watch: SmartWatch = new SmartWatch("Apple Watch");
// watch.printModel();

import { App } from './ts/pages/app/index';

const app = new App();

app.run()