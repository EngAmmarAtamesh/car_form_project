const form = document.getElementById("carForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    clearErrors();

    let carName = document.getElementById("carName").value.trim();
    let model = document.getElementById("model").value.trim();
    let price = document.getElementById("price").value.trim();
    let serviceType = document.getElementById("serviceType").value;
    let image = document.getElementById("carImage").value;

    let isValid = true;

    if (carName === "") {
        showError("carName", "Car name is required");
        isValid = false;
    } else if (carName.length < 3) {
        showError("carName", "Car name must be at least 3 characters");
        isValid = false;
    }

    if (model === "") {
        showError("model", "Model is required");
        isValid = false;
    }

    if (price === "") {
        showError("price", "Price is required");
        isValid = false;
    } else if (isNaN(price)) {
        showError("price", "Price must be a number");
        isValid = false;
    }

    if (serviceType === "") {
        showError("serviceType", "Service type is required");
        isValid = false;
    }

    if (image === "") {
        showError("carImage", "Image is required");
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
        form.reset();
    }
});

function showError(inputId, message) {
    const input = document.getElementById(inputId);
    const error = document.createElement("small");
    error.className = "error-message";
    error.innerText = message;
    input.parentElement.appendChild(error);
}

function clearErrors() {
    const errors = document.querySelectorAll(".error-message");
    errors.forEach(error => error.remove());
}
