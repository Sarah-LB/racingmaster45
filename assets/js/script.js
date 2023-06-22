const contactForm = document.querySelector("#contact-form");
const submitBtn = document.querySelector(".submit-btn");
const nameInput = document.querySelector("#user_name");
const emailInput = document.querySelector("#user_email");
const messageInput = document.querySelector("#message");

const publicKey = "VLMZigXcO5Upo8sX1";
const serviceID = "contact_service";
const templateID = "contact_form";

emailjs.init(publicKey);

contactForm.addEventListener("submit", e => {
    e.preventDefault();
    submitBtn.innerHTML = "Sending...";
    const inputFields = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value
    }
    emailjs.send(serviceID, templateID, inputFields)
    .then(() => {
        submitBtn.innerHTML="Message Sent";
        nameInput.value="";
        emailInput.value="";
        messageInput.value="";
    }, (error) => {
    submitBtn.innerHTML = "Something went wrong";
    });
});