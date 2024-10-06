$(document).ready(function () {
    const nextButton = $("#nextPayment");

    nextButton.on("click", function () {
        $("#profile-tab").addClass("active ");
        $("#profile").addClass("active show");
        $("#home").removeClass("active show");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const fileInputs = document.querySelectorAll(
        '.booking-input-group input[type="file"]'
    );

    fileInputs.forEach(function (fileInput) {
        const label = fileInput.nextElementSibling;
        const labelText = label.querySelector(".icon-container");

        // Handle file upload
        fileInput.addEventListener("change", function (e) {
            const fileName = e.target.files[0].name;

            // Truncate file name to 10 characters if longer and append '...'
            const truncatedFileName =
                fileName.length > 10
                    ? fileName.substring(0, 10) + "..."
                    : fileName;

            // Replace icon with file name after upload
            label.classList.add("uploaded");
            labelText.textContent = truncatedFileName;
        });
    });
});