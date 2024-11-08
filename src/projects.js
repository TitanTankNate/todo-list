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
    priority;
    notes;
    customImage;
    taskObjectsArray = ["task1", "task2", "task3"];

    // Constructor
    constructor(name, id) {
        // Name
        this.name = name;

        // ID
        this.id = id;

        // Description
        this.description = "Test description";

        // Created Date
        // This date is set upon instantiation of the class object and 
        // cannot be changed later.
        this.#createdDate = Date();

        // Due Date
        this.dueDate = "No Due Date Assigned";

        // Last Updated Date
        this.lastUpdatedDate = Date();

        // Status
        this.status = "Incomplete";

        // Priority
        this.status = "Normal";

        // Notes
        this.notes = "No notes yet";
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
                // PROPERTIES                                   | Sidebar?  | Card?     | Details?
                // ok Name                                      | Y         | Y         | Y
                // - Description                                | (clipped) | (short)   | Y
                // ok Created Date                              | N         | N         | Y
                // - Due Date                                   | N         | Y         | Y
                // - Last Updated Date                          | N         | N         | Y
                // - Status [o]                                 | Y         | Y         | Y
                // - Priority                                   | N         | Y         | Y
                // - Notes [o]                                  | N         | N         | Y 
                // - Quick-access list of contained tasks[o]    | N         | Y         | Y

                // METHODS
                // - Create project (constructor)
                // - Delete project (needs to escalate)
                // - Edit project details
                // - Mark project complete [o]
            };
        };