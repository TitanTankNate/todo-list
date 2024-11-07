// Web app Javascript

// Imports
import { Project } from "./projects.js";





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
}

export { Application };