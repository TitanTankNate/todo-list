// Entry point JavaScript

// IMPORTS ------------------------------------------------------------
import "./css-reset.css";
import "./theme.css";
import "./style.css";
import {createDivElement,
    createTextElement,
    createButtonElement,
    createImageElement
} from "./helper-modules.js";




// FUNCTION:    createDynamicDOM()
// DESCRIPTION: This function lays out the dynamic DOM tree, with the 
// intent that this function will be called when the page/tab loads or 
// is reset/refresh.
function createPage() {
    // NOTE: This function is arranged in DOM tree hierarchy, for 
    // readability

        console.log("pikopiko-repo-template successfully loaded.");

};

createPage();
