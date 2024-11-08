// Web app Javascript

// Imports
import { Project } from "./projects.js";
import {createDivElement,
    createTextElement,
    createButtonElement,
    createImageElement
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
                updateContentDOM("#content-dynamic");
                break;
        };


        // DOM Update Methods
        function updateSidebarDOM(objectToImport, parentElement) {
            // Container div
            createDivElement(["sidebar-container"],`sidebar-project-container-${objectToImport.id}`, parentElement);
                // Text container div and child elements
                createDivElement(["sidebar-project-text-container"],`sidebar-project-text-container-${objectToImport.id}`,`#sidebar-project-container-${objectToImport.id}`);
                    createTextElement("h3",["sidebar-title-h3"],`sidebar-project-title-${objectToImport.id}`,`${objectToImport.name}`,`#sidebar-project-text-container-${objectToImport.id}`);
                    createTextElement("p",["sidebar-project-description"],`sidebar-project-description-${objectToImport.id}`,`${objectToImport.description}`,`#sidebar-project-text-container-${objectToImport.id}`);
                
                // Button container div and child elements
                createDivElement(["sidebar-project-button-container"],`sidebar-project-button-container-${objectToImport.id}`,`#sidebar-project-container-${objectToImport.id}`);
                    createButtonElement(["sidebar-quickaction-button", "quickaction-addtask"],`sidebar-addtask-button-${objectToImport.id}`,`AT`,`#sidebar-project-button-container-${objectToImport.id}`);
                    createButtonElement(["sidebar-quickaction-button", "quickaction-open"],`sidebar-open-button-${objectToImport.id}`,`OP`,`#sidebar-project-button-container-${objectToImport.id}`);
                    createButtonElement(["sidebar-quickaction-button", "quickaction-delete"],`sidebar-delete-button-${objectToImport.id}`,`DEL`,`#sidebar-project-button-container-${objectToImport.id}`);
        };

        function updateContentDOM(parentElement) {
            console.log("updateContentDOM()");

        }

    };
}

export { Application };