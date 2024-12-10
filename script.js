document.addEventListener("DOMContentLoaded", () => {
    const currentPage = document.body.id; // Set a unique ID for each page's `<body>` tag

    // Logic for the Contacts page
    if (currentPage === "contacts-page") {
        console.log("Contacts page loaded");
        // Add your contact management logic here
    }

    // Logic for the Projects page
    if (currentPage === "projects-page") {
        console.log("Projects page loaded");
        // Add your project management logic here
    }

    // Common functionality for all pages
    console.log("Script loaded for all pages");
});
