// web_dynamic/static/scripts/2-hbnb.js

document.addEventListener('DOMContentLoaded', function () {
    // will add more JavaScript code here..later

    // Request to check the API status
    fetch('http://0.0.0.0:5001/api/v1/status/')
        .then(response => response.json())
        .then(data => {
            const apiStatusDiv = document.getElementById('api_status');
            if (data.status === 'OK') {
                apiStatusDiv.classList.add('available');
            } else {
                apiStatusDiv.classList.remove('available');
            }
        })
        .catch(error => {
            console.error('Error checking API status:', error);
        });
});
