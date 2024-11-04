




// METHODS ------------------------------------------------------------
// FUNCTION:    createDivElement()
// DESCRIPTION: <>
function createDivElement(elementClass, elementID, elementParentSelector) {
    // Select parent element
    const parentElement = document.querySelector(elementParentSelector);

    // Create child element
    const elemToCreate = document.createElement("div");

    // Assign class(es)
    if (Array.isArray(elementClass)) {
        elementClass.forEach(element => {
            elemToCreate.classList.add(element);
        });
    } else {
        elemToCreate.classList.add(elementClass);        
    };

    // Assign ID
    elemToCreate.id = elementID;

    // Append child element to parent
    parentElement.appendChild(elemToCreate);

};



// FUNCTION:    createTextElement()
// DESCRIPTION: <>
function createTextElement(elementType, elementClass, elementID, elementTextContent, elementParentSelector) {
    // Select parent element
    const parentElement = document.querySelector(elementParentSelector);

    // Create child element
    const elemToCreate = document.createElement(elementType);
    
    // Assign class(es)
    if (Array.isArray(elementClass)) {
        elementClass.forEach(element => {
            elemToCreate.classList.add(element);
        });
    } else {
        elemToCreate.classList.add(elementClass);        
    };
    
    // Assign ID
    elemToCreate.id = elementID;
    
    // Edit text content
    elemToCreate.textContent = elementTextContent;

    // Append child element to parent
    parentElement.appendChild(elemToCreate);
};



// FUNCTION:    createButtonElement()
// DESCRIPTION: <>
function createButtonElement(elementClass, elementId, elementTextContent, elementParentSelector) {
    // Select parent element
    const parentElement = document.querySelector(elementParentSelector);

    // Create child element
    const elemToCreate = document.createElement("button");
    
    // Assign class(es)
    if (Array.isArray(elementClass)) {
        elementClass.forEach(element => {
            elemToCreate.classList.add(element);
        });
    } else {
        elemToCreate.classList.add(elementClass);        
    };
    
    // Assign ID
    elemToCreate.id = elementId;
    
    // Edit button text
    elemToCreate.textContent = elementTextContent;

    // Append child element to parent
    parentElement.appendChild(elemToCreate);
};



// FUNCTION:    createImageElement()
// DESCRIPTION: This function accepts the variable name for an 
// imported image path, a class specification (singular), 
// assignable element ID, alternate text for the image, and a 
// parent element, and creates a new HTML <img> element.
function createImageElement(imgImportVar, elementClass, elementID, elementAltText, elementParentSelector) {
    // Select parent element
    const parentElement = document.querySelector(elementParentSelector);
    
    // Create child element
    const elemToCreate = document.createElement("img");
    elemToCreate.src = imgImportVar;
    elemToCreate.classList.add(elementClass);
    elemToCreate.id = elementID;
    elemToCreate.alt = elementAltText;
        
    // Append child element to parent
    parentElement.appendChild(elemToCreate);
};





// EXPORTS ------------------------------------------------------------
export { 
    createDivElement,
    createTextElement,
    createButtonElement,
    createImageElement 
};