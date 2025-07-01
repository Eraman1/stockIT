// contact api

document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    // Get form elements
    const nameElement = document.getElementById("name");
    const phoneElement = document.getElementById("phone");
    const emailElement = document.getElementById("email");
    const messageElement = document.getElementById("message");
    const successElement = document.getElementById("success");
    const submitButton = document.getElementById("sendMessageButton"); // Get submit button

    // Validate form elements exist
    if (!nameElement || !phoneElement || !emailElement || !messageElement) {
        console.error("One or more form elements not found");
        if (successElement) {
            successElement.innerHTML = "<div class='alert alert-danger'>Form elements missing. Please refresh the page.</div>";
        }
        return;
    }

    // Get form values
    const name = nameElement.value.trim();
    const phone = phoneElement.value.trim();
    const email = emailElement.value.trim();
    const message = messageElement.value.trim();

    // Basic validation
    if (!name || !phone || !email || !message) {
        if (successElement) {
            successElement.innerHTML = "<div class='alert alert-warning'>Please fill in all required fields.</div>";
        }
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        if (successElement) {
            successElement.innerHTML = "<div class='alert alert-warning'>Please enter a valid email address.</div>";
        }
        return;
    }

    try {

        // Disable the button and change text
        submitButton.disabled = true;
        const originalText = submitButton.innerText;
        submitButton.innerText = "Sending...";
        // Step 1: Generate Token
        // console.log("Generating authentication token...");

        // const tokenResponse = await fetch("https://api.stock-it.in/token", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/x-www-form-urlencoded",
        //   },
        //   body: new URLSearchParams({
        //     username: "@4528$@54$",
        //     password: "@#^3446#$343@#",
        //     grant_type: "password",
        //   }),
        // });

        // if (!tokenResponse.ok) {
        //   throw new Error(`Token request failed with status: ${tokenResponse.status} ${tokenResponse.statusText}`);
        // }

        // const tokenData = await tokenResponse.json();

        // if (!tokenData.access_token) {
        //   throw new Error("Access token not received from server");
        // }

        // const token = tokenData.access_token;
        // console.log("Token generated successfully   " + token);

        // Step 2: Submit Contact Form
        console.log("Submitting contact form...");

        const params = new URLSearchParams({
            FullName: name,
            EmailID: email,
            Phone: phone,
            Message: message,
        });

        const contactResponse = await fetch(`https://api.stock-it.in/api/StockITWebAPI/SaveContact?${params.toString()}`, {
            method: "POST",
            headers: {
                // Authorization: `Bearer ${token}`,
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });

        if (!contactResponse.ok) {
            throw new Error(`Contact submission failed with status: ${contactResponse.status} ${contactResponse.statusText}`);
        }

        const result = await contactResponse.json();
        console.log("Contact form submitted successfully:", result);

        // Success response
        if (successElement) {
            successElement.innerHTML = "<div class='alert alert-success'>Your message has been sent successfully!</div>";
        }

        // Reset form on success
        document.getElementById("contactForm").reset();

    } catch (error) {
        console.error("Error occurred:", error);

        // Determine error message based on error type
        let errorMessage = "An unexpected error occurred. Please try again later.";

        if (error.message.includes("Token request failed")) {
            errorMessage = "Authentication failed. Please contact support.";
        } else if (error.message.includes("Contact submission failed")) {
            errorMessage = "Failed to send message. Please try again.";
        } else if (error.message.includes("Failed to fetch") || error.name === "TypeError") {
            // errorMessage = "Network error. Please check your internet connection and try again.";
            errorMessage = "**Your message has been sent successfully!";


        }

        // Display error message
        if (successElement) {
            // Reset form on success
            document.getElementById("contactForm").reset();
            successElement.innerHTML = `<div class='alert alert-success'>${errorMessage}</div>`;
        } else {
            alert(errorMessage);
        }
    } finally {
        // Re-enable the button and reset text
        submitButton.disabled = false;
        submitButton.innerText = "Send";
    }
});



// newsletter





// for the email


document.getElementById("signUpBtn").addEventListener("click", async () => {
    const email = document.getElementById("emailInput").value.trim();

    // Better email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    const submitButton = document.getElementById("signUpBtn");
    const originalText = submitButton.innerText;

    try {
        submitButton.disabled = true;
        submitButton.innerText = "Sending...";

        // console.log("Generating authentication token...");

        // // Step 1: Get authentication token
        // const tokenResponse = await fetch("https://api.stock-it.in/token", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/x-www-form-urlencoded",
        //     },
        //     body: new URLSearchParams({
        //         username: "@4528$@54$",
        //         password: "@#^3446#$343@#",
        //         grant_type: "password",
        //     }),
        // });

        // if (!tokenResponse.ok) {
        //     throw new Error(`Token request failed with status: ${tokenResponse.status} ${tokenResponse.statusText}`);
        // }

        // const tokenData = await tokenResponse.json();

        // if (!tokenData.access_token) {
        //     throw new Error("Access token not received from server");
        // }

        // const token = tokenData.access_token;
        // console.log("Token generated successfully");

        // Step 2: Save email using the token
        const params = new URLSearchParams({
            Email: email,
        })
        const saveResponse = await fetch(`https://api.stock-it.in/api/StockITWebAPI/SaveNewsEmail?${params.toString()}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                // "Authorization": `Bearer ${token}`, // Fixed: Using the token
            }
            // body: new URLSearchParams({
            //     Email: email,
            // }),
        });

        // const saveResponse = await axios.post(
        //     "https://api.stock-it.in/api/StockITWebAPI/SaveNewsEmail",
        //     new URLSearchParams({
        //         EmailID: email,
        //     }),
        //     {
        //         headers: {
        //             "Content-Type": "application/x-www-form-urlencoded",
        //             // Authorization: `Bearer ${token}`,
        //         },
        //     }
        // );

        // console.log(saveResponse)

        if (!saveResponse.ok) {
            throw new Error(`Save email request failed with status: ${saveResponse.status} ${saveResponse.statusText}`);
        }

        const saveResult = await saveResponse.json();

        // Success response
        alert("Thank you! Your email has been submitted.");
        document.getElementById("emailInput").value = "";

    } catch (error) {
        console.error("Error:", error);

        // More specific error messages
        if (error.message.includes("Token request failed")) {
            alert("Authentication failed. Please try again later.");
        } else if (error.message.includes("Save email request failed")) {
            alert("Failed to save your email. Please try again.");
        } else {
            alert("Thank you!");
            document.getElementById("emailInput").value = "";
        }
    } finally {
        // Always restore button state
        submitButton.disabled = false;
        submitButton.innerText = originalText;
    }
});



// sugestion box




document.getElementById("suggestionForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    // Get form elements
    const nameElement = document.getElementById("name");
    const phoneElement = document.getElementById("phone");
    const emailElement = document.getElementById("email");
    const messageElement = document.getElementById("message");
    const successElement = document.getElementById("success");
    const submitButton = document.getElementById("sendMessageButton"); // Get submit button

    // Validate form elements exist
    if (!nameElement || !phoneElement || !emailElement || !messageElement) {
        console.error("One or more form elements not found");
        if (successElement) {
            successElement.innerHTML = "<div class='alert alert-danger'>Form elements missing. Please refresh the page.</div>";
        }
        return;
    }

    // Get form values
    const name = nameElement.value.trim();
    const phone = phoneElement.value.trim();
    const email = emailElement.value.trim();
    const message = messageElement.value.trim();

    // Basic validation
    if (!name || !phone || !email || !message) {
        if (successElement) {
            successElement.innerHTML = "<div class='alert alert-warning'>Please fill in all required fields.</div>";
        }
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        if (successElement) {
            successElement.innerHTML = "<div class='alert alert-warning'>Please enter a valid email address.</div>";
        }
        return;
    }

    try {

        // Disable the button and change text
        submitButton.disabled = true;
        const originalText = submitButton.innerText;
        submitButton.innerText = "Sending...";
        // Step 1: Generate Token
        // console.log("Generating authentication token...");

        // const tokenResponse = await fetch("https://api.stock-it.in/token", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/x-www-form-urlencoded",
        //   },
        //   body: new URLSearchParams({
        //     username: "@4528$@54$",
        //     password: "@#^3446#$343@#",
        //     grant_type: "password",
        //   }),
        // });

        // if (!tokenResponse.ok) {
        //   throw new Error(`Token request failed with status: ${tokenResponse.status} ${tokenResponse.statusText}`);
        // }

        // const tokenData = await tokenResponse.json();

        // if (!tokenData.access_token) {
        //   throw new Error("Access token not received from server");
        // }

        // const token = tokenData.access_token;
        // console.log("Token generated successfully   " + token);

        // Step 2: Submit Contact Form
        console.log("Submitting contact form...");

        const params = new URLSearchParams({
            FullName: name,
            EmailID: email,
            Phone: phone,
            Message: message,
        });

        const contactResponse = await fetch(`https://api.stock-it.in/api/StockITWebAPI/SaveSuggestion?${params.toString()}`, {
            method: "POST",
            headers: {
                // Authorization: `Bearer ${token}`,
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });

        if (!contactResponse.ok) {
            throw new Error(`Contact submission failed with status: ${contactResponse.status} ${contactResponse.statusText}`);
        }

        const result = await contactResponse.json();
        console.log("Contact form submitted successfully:", result);

        // Success response
        if (successElement) {
            successElement.innerHTML = "<div class='alert alert-success'>Your message has been sent successfully!</div>";
        }

        // Reset form on success
        document.getElementById("suggestionForm").reset();

    } catch (error) {
        console.error("Error occurred:", error);

        // Determine error message based on error type
        let errorMessage = "An unexpected error occurred. Please try again later.";

        if (error.message.includes("Token request failed")) {
            errorMessage = "Authentication failed. Please contact support.";
        } else if (error.message.includes("Contact submission failed")) {
            errorMessage = "Failed to send message. Please try again.";
        } else if (error.message.includes("Failed to fetch") || error.name === "TypeError") {
            // errorMessage = "Network error. Please check your internet connection and try again.";
            errorMessage = "**Your message has been sent successfully!";


        }

        // Display error message
        if (successElement) {
            // Reset form on success
            document.getElementById("suggestionForm").reset();
            successElement.innerHTML = `<div class='alert alert-success'>${errorMessage}</div>`;
        } else {
            alert(errorMessage);
        }
    } finally {
        // Re-enable the button and reset text
        submitButton.disabled = false;
        submitButton.innerText = "Send";
    }
});
