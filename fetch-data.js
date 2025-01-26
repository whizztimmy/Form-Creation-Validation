document.addEventListener("DOMContentLoaded", function () {
    async function fetchUserData() {
        // Define the API URL
        const apiUrl = "https://jsonplaceholder.typicode.com/users";

        // Select the data container element
        const dataContainer = document.getElementById("api-data");

        try {
            // Fetch data from the API
            const response = await fetch(apiUrl);
            const users = await response.json();

            // Clear the loading message
            dataContainer.innerHTML = "";

            // Create and append user list
            const userList = document.createElement("ul");

            users.forEach(user => {
                const listItem = document.createElement("li");
                listItem.textContent = user.name;
                userList.appendChild(listItem);
            });

            // Append the user list to the data container
            dataContainer.appendChild(userList);
        } catch (error) {
            // Handle errors
            dataContainer.innerHTML = "Failed to load user data.";
        }
    }

    // Invoke fetchUserData when the DOM is fully loaded
    fetchUserData();
});
