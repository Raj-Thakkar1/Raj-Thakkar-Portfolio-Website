document.getElementById("contactForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const responseMessage = document.getElementById("responseMessage");

    try {
        const response = await fetch("/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, message }),
        });

        if (response.ok) {
            responseMessage.textContent = "Message sent successfully!";
            responseMessage.style.color = "green";
            document.getElementById("contactForm").reset(); // Reset form fields
        } else {
            throw new Error("There was a problem sending your message.");
        }
    } catch (error) {
        responseMessage.textContent = error.message;
        responseMessage.style.color = "red";
    }
});