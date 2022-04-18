// The 'load' event fires when everything has been loaded.
window.addEventListener('load', () => {
    // Find the button element by its id.
    const buttonElement = document.getElementById("submitButton");
    // Bind to the button element
    buttonElement.addEventListener('click', () => {
        // Get the input element with the id of 'username'.
        const usernameInputElement = document.getElementById('username');
        // Get the input element with the id of 'password'.
        const passwordInputElement = document.getElementById('password');
        // Find element with id of 'log'
        const logElement = document.getElementById("log");
        // Get the username value.
        // This will either be an empty string or whatever the user input.
        const username = usernameInputElement.value;
        // Get the username value.
        // This will either be an empty string or whatever the user input.
        const password = passwordInputElement.value;
        // Check if each is more than an empty string.
        if(username.length > 0 && password.length > 0) {
            // fetch() makes HTTP requests and handles the response.
            // Because JSON is so common as a response type of data,
            //  the Response class has a json() method for processing it.
            //
            // Once done with processing, it will pass data to the next part.
            fetch(`api.php?username=${username}&password=${password}`)
            .then(response => response.json())
            .then(data => {
                // Reset username.
                usernameInputElement.value = "";
                // Reset password.
                passwordInputElement.value = "";
                // Show message to user.
                logElement.innerHTML = `<p>The correct combination is ${data.username} and ${data.password}</p>`;
            });
        } else {
            // Change content of log element.
            logElement.innerHTML = "<p>Supply both username <em>and</em> password.</p>";
        }
    });
});