window.onload = function() {
    const myForm = document.getElementById("contact-form");
    const myModal = document.getElementById("captcha-modal");

    if (myForm) {
        myForm.addEventListener("submit", function(event) {
            // MOVE THIS TO THE TOP - stops the refresh immediately!
            event.preventDefault(); 
            
            // Check if Google reCAPTCHA is actually loaded
            if (typeof grecaptcha !== 'undefined') {
                var response = grecaptcha.getResponse();

                if (response.length === 0) {
                    alert("Please check the 'I am not a robot' box.");
                } else {
                    myModal.style.display = "none";
                    alert("Verification successful!");
                }
            } else {
                // If Google script failed to load, we just hide the modal anyway
                console.log("reCAPTCHA not loaded, closing anyway.");
                myModal.style.display = "none";
            }
        });
    }
};
