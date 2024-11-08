// projects.js
// Manages webapp projects and associated properties and methods

class Project {
    // Private properties
    #createdDate;

    // Public properties
    name;
    id;
    description;
    lastUpdatedDate;
    dueDate;
    status;
    notes;
    customImage;
    taskObjectsArray = [];

    // Constructor
    constructor(name, id) {
        // Name
        this.name = name;

        // ID
        this.id = id;

        // Desscription
        this.description = "Test description";

        // Created Date
        // This date is set upon instantiation of the class object and 
        // cannot be changed later.
        this.#createdDate = Date();

        // Last Updated Date
        this.lastUpdatedDate = Date();
    };    

    // Getters
    get createdDate() {return this.#createdDate;};

    // Setters

    // Methods
    getProjectDetails() {
        console.log(JSON.stringify(this, null, 4));
    };

    createJSONString() {
        return JSON.stringify(this, null, 4);
    };
};

export {Project};

        // projects.js
        {
            // Project
            {
                // PROPERTIES
                // ok Name
                // - Description
                // ok Created Date
                // - Due Date
                // - Last Updated Date
                // - Status [o]
                // - Notes [o]
                // - Custom image [o]
                // - Quick-access list of contained tasks[o]

                // METHODS
                // - Create project (constructor)
                // - Delete project (needs to escalate)
                // - Edit project details
                // - Mark project complete [o]
            };
        };