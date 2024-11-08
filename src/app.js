// Web app Javascript

// Imports
import { Project } from "./projects.js";
import {createDivElement,
    createTextElement,
    createButtonElement,
    createImageElement, 
    createListElement
} from "./helper-modules.js";





// Classes
class Application {
    constructor() {
        console.log("Initializing web app.");
    };

    // Private properties
    #projectsArray = [];
    #currentIdToAssign = 0;

    // Public properties

    // Getters
    get projectsArray() { return this.#projectsArray};

    // Methods
    // FUNCTION:    createProject
    // DESCRIPTION: <>
    createProject(projectName) {
        // Create new Project instance
        const newProject = new Project(projectName, this.#currentIdToAssign);
        
        // Add project to temp array
        this.#projectsArray.push(newProject);
        // this.updateContentDOM(newProject);

        // Create project JSON
        localStorage.setItem(["Projects"],JSON.stringify(this.#projectsArray, null, 4));

        
        // Advance to next available ID
        this.#currentIdToAssign++;
    }

    checkForStorageAvailable(type) {
        let storage;
        try {
            storage = window[type];
            const testVar = "__storage_test__";
            storage.setItem(testVar, testVar);
            storage.removeItem(testVar);
            return true;
        } catch (error) {
            return (
                error instanceof DOMException &&
                error.name === "QuotaExceededError" &&
                storage &&
                this.storageAvailable.length !== 0
            );
        };
    };

    updateContentDOM(elementToUpdate) {
        // Select parent element
        switch (elementToUpdate) {
            case "sidebar":
                this.#projectsArray.forEach((object) => {
                    updateSidebarDOM(object,"#sidebar-dynamic");
                });
                break;
            case "content":
                this.#projectsArray.forEach((object) => {
                    updateContentDOM(object,"#content-dynamic");
                });                
                break;
        };


        // DOM Update Methods
        function updateSidebarDOM(objectToImport, parentElement) {
            // NOTE: Might be worth limiting the size of this list 
            // while ordering by "most recent"
            // Container div
            createDivElement(["sidebar-container"],`sidebar-project-container-${objectToImport.id}`, parentElement);
                // Text container div and child elements
                createDivElement(["sidebar-project-text-container"],`sidebar-project-text-container-${objectToImport.id}`,`#sidebar-project-container-${objectToImport.id}`);
                    createTextElement("h3",["sidebar-header-h3", "sidebar-project-title"],`sidebar-project-title-${objectToImport.id}`,`${objectToImport.name}`,`#sidebar-project-text-container-${objectToImport.id}`);
                    createTextElement("p",["sidebar-project-description"],`sidebar-project-description-${objectToImport.id}`,`${objectToImport.description}`,`#sidebar-project-text-container-${objectToImport.id}`);
                
                // Button container div and child elements
                createDivElement(["sidebar-project-button-container"],`sidebar-project-button-container-${objectToImport.id}`,`#sidebar-project-container-${objectToImport.id}`);
                    createButtonElement(["sidebar-quickaction-button", "quickaction-addtask"],`sidebar-addtask-button-${objectToImport.id}`,`AT`,`#sidebar-project-button-container-${objectToImport.id}`);
                    createButtonElement(["sidebar-quickaction-button", "quickaction-open"],`sidebar-open-button-${objectToImport.id}`,`OP`,`#sidebar-project-button-container-${objectToImport.id}`);
                    createButtonElement(["sidebar-quickaction-button", "quickaction-delete"],`sidebar-delete-button-${objectToImport.id}`,`DEL`,`#sidebar-project-button-container-${objectToImport.id}`);
        };

        function updateContentDOM(objectToImport, parentElement) {
            console.log("updateContentDOM()");

            // Container div
            createDivElement(["content-card-container", "project-card"],`project-card-${objectToImport.id}`, parentElement);
                // Header container
                // Title, created date, and text description
                // DEPRECATED createDivElement(["content-project-header-container"],`content-project-header-container-${objectToImport.id}`,`#project-card-${objectToImport.id}`);
                createTextElement("h3",["content-header-h3", "content-project-header"],`content-project-title-${objectToImport.id}`,`${objectToImport.name}`,`#project-card-${objectToImport.id}`);
                // DEPRECATED createTextElement("p", ["content-project-date-p", "created-date"], `content-project-createdDate-${objectToImport.id}`,`${objectToImport.createdDate}`,`#project-card-${objectToImport.id}`);
                createTextElement("p", ["content-project-date-p", "due-date"], `content-project-dueDate-${objectToImport.id}`,`${objectToImport.dueDate}`,`#project-card-${objectToImport.id}`);
                createTextElement("p",["content-project-description-p"],`content-project-description-${objectToImport.id}`,`${objectToImport.description}`,`#project-card-${objectToImport.id}`);
                createButtonElement(["content-project-details-button"],`content-project-details-button-${objectToImport.id}`,"Show More",`#project-card-${objectToImport.id}`);  
                
                // DEPRECATED Dates container
                // DEPRECATED createDivElement(["content-project-dates-container"], `content-project-dates-container-${objectToImport.id}`, `#project-card-${objectToImport.id}`);
                
                // Task list
                createListElement(["content-project-tasklist-ul"],`content-project-tasklist-${objectToImport.id}`,"ul",objectToImport.taskObjectsArray,`#project-card-${objectToImport.id}`);
        }

    };
}

export { Application };