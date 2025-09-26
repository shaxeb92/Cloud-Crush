document.addEventListener('DOMContentLoaded', function() {
    // Counter for button clicks
    let count = 0;
    const button = document.getElementById('clickButton');
    const counter = document.getElementById('counter');

    // Add click event listener to button
    button.addEventListener('click', function() {
        count++;
        counter.textContent = `Button clicked: ${count} times`;
    });
});

// Function to be tested in our test file
function add(a, b) {
    return a + b;
}

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { add };
}

