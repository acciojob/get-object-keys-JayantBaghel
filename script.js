// Create the student object
let student = {
    name: 'John Doe'
};

// Add getKeys method to the Object prototype
Object.prototype.getKeys = function() {
    return Object.keys(this);
};

// Example usage
console.log(student.getKeys()); // Output: ['name']
