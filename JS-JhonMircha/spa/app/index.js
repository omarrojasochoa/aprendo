import api from "./helpers/wp_api.js"
import { App } from "./app.js";

document.addEventListener("DOMContentLoaded",App)
window.addEventListener("hashchange",()=>{
    api.page=1;
    App();
})