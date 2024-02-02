
// Function to perform specific complex calculations with Web Workers
function performComplexCalculationsWithWorkers(data) {
    // Replace this with your actual complex calculation logic
    return data.map(value => Math.sqrt(value)); // Example: calculating the square root of each value in the array
}

// Listen for messages from the main thread
self.onmessage = function (event) {
    const data = event.data;
    const startTime = performance.now();

    // Perform specific complex calculations in the Web Worker
    const processedData = performComplexCalculationsWithWorkers(data);

    const endTime = performance.now();
    const elapsedTime = endTime - startTime;

    // Send the result and execution time back to the main thread
    self.postMessage({ processedData: processedData, elapsedTime: elapsedTime });
};
