// Entry point JavaScript

// IMPORTS ------------------------------------------------------------
// CSS
import "./css-reset.css";
import "./theme.css";
import "./style.css";

// JavaScript
import {createDivElement,
    createTextElement,
    createButtonElement,
    createImageElement
} from "./helper-modules.js";
import { Application } from "./app.js";
import { Project } from "./projects.js";
import {} from "./tasks.js";

// Webpack | date-fns
import { constructNow, isSameDay } from "date-fns";




// FUNCTION:    createDynamicDOM()
// DESCRIPTION: This function lays out the dynamic DOM tree, with the 
// intent that this function will be called when the page/tab loads or 
// is reset/refresh.
function createPage() {
    // NOTE: This function is arranged in DOM tree hierarchy, for 
    // readability

    // Create Sidebar

    // Create primary content container
};

createPage();

// Create new web app instance
const newAppInstance = new Application();
newAppInstance.checkForStorageAvailable();
newAppInstance.createProject("Dog");
newAppInstance.createProject("Cat");
newAppInstance.createProject("Bird");
newAppInstance.createProject("Fish");






// O R I G I N A L   W R I T E - U P
{
// OVERALL OJECTIVE
// Create to-do list task manager
// // To-do list items should be dynamically created or destroyed
// // To do lists should consist of the following features:
// // - Title
// // - Description
// // - Custom icon/image (optional)
// // - Due Date
// // - Priority
// // - Notes (or comments?) (optional)
// // - Checklist (optional)
// // Each "list" should be separate, and storable within a folder of 
// // its own, allowing for easy user interaction
};





// USER INTERFACE CONCEPTS
{
    // HEADER (permanently static)
    {
        // Include title and logo
        // Include navlinks
        // // Home - take the user to their "dashboard"
        // // Projects - take the user to their projects/todo lists
        // // Create New - create a new project/list or task
        // Potentially use icons to represent navlinks, and allow 
        // expansion of icon to icon + text? (optional)
    };

    // SIDEBAR (dynamic)
    {
        // If working on dashboard, include list of projects as 
        // separate elements.
        // If working within an existing project, include list of
        // separate tasks.
        // // Include name of current project?
        // // Highlight currently-being-edited task?
    };

    // CONTENT (dynamic)
    {
        // Title of current location (Dashboard, current project, 
        // or current task)
        // If viewing projects, list of projects with associated
        // properties.
        // If viewing tasks, list of tasks with associated properties
        // Maybe include option for viewing tasks as cards or as list? 
        // (This might be overkill)
    };

    // FOOTER (permanently static)
};





// DATA DESIGN
{
    // SCRIPT FILES
    {
        // index.js
        // Entry-point, handles dynamic DOM creation

        // helper-modules.js
        // Handles dynamic DOM element creation (components)

        // projects.js
        // Handles project-related tasks such as creating or deleting 
        // projects, or editing their contents (?)

        // tasks.js
        // Handles task-related tasks such as creating or deleting 
        // tasks, or editing their contents (?)

        // Painting/rendering changes to elements should be handled in 
        // index.js, likely.
    };



    // CLASSES
    {
        // index.js
        {
            // Sidebar
            {
                // PROPERTIES
                // - Current Location
                // - 

                // METHODS
                // - 
            };

            // Footer
        };

        // helper-modules.js
        {

        };

        // projects.js
        {
            // Project
            {
                // PROPERTIES
                // - Name
                // - Description
                // - Created Date
                // - Due Date
                // - Last Updated Date
                // - Status [o]
                // - Notes [o]
                // - Custom image [o]
                // - Quick-access list of contained tasks[o]

                // METHODS
                // - Create project
                // - Delete project
                // - Edit project details
                // - Mark project complete [o]
            };
        };

        // tasks.js
        {
            // Task
            {
                // PROPERTIES
                // - Name
                // - Description
                // - Created Date
                // - Due Date
                // - Last Updated Date
                // - Status [o]
                // - Notes [o]
                // - Custom image [o]
                // - Checklist of task line items [o]

                // METHODS
                // - Create task
                // - Delete task
                // - Edit task details
                // - Add checklist item [o]
                // - Delete checklist item [o]
                // - Mark task complete [o]
            };
        };
    };
};