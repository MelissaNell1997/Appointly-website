// Stores the token when reCAPTCHA is completed
var captchaToken = '';

// Called automatically by reCAPTCHA when user ticks the box
function onCaptchaSuccess(token) {
    captchaToken = token;
    var err = document.getElementById("captcha-error");
    if (err) err.remove();
}

// Called if the reCAPTCHA token expires after ~2 minutes
function onCaptchaExpired() {
    captchaToken = '';
}

window.onload = function() {
    const myForm = document.getElementById("contact-form");
    const myModal = document.getElementById("captcha-modal");

    // Show the modal on page load
    if (myModal) {
        myModal.style.display = "flex";
    }

    if (myForm) {
        myForm.addEventListener("submit", function(event) {
            event.preventDefault();

            if (captchaToken && captchaToken.length > 0) {
                // User has verified — close the modal
                myModal.style.display = "none";
                captchaToken = '';
            } else {
                // Not verified — show inline error
                var existing = document.getElementById("captcha-error");
                if (!existing) {
                    var err = document.createElement("p");
                    err.id = "captcha-error";
                    err.style.cssText = "color:#e74c3c;font-size:.85rem;margin-top:10px;";
                    err.textContent = "Please check the 'I am not a robot' box first.";
                    myForm.appendChild(err);
                }
            }
        });
    }
};
