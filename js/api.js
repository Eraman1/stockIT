// contact api





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








// demo api
