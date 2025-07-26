document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const successPage = document.getElementById("successPage");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual form submission

        // Show success message
        successPage.style.display = "flex"; 
        successPage.style.justifyContent = "center"; 
        successPage.style.alignItems = "center"; 
        successPage.style.height = "100vh";
        
        // Clear form fields
    function closeSuccessPage() {
    document.getElementById("successPage").style.display = "none";
}
    });
});
