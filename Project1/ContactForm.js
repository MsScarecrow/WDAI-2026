const contactForm = document.getElementById("ContactForm");

contactForm.addEventListener("submit", function(event) {

    const emailValue = document.getElementById("email").value;
    const subjectValue = document.getElementById("subject").value;
    const messageValue = document.getElementById("message").value;

    const formData = {
        email: emailValue,
        subject: subjectValue,
        message: messageValue
    };
    if (!emailValue.includes("@") || !emailValue.includes("."))
    {
        event.preventDefault();
        alert(`Incorrect e-mail address`);
    }
    else
    {
        alert(`Thanks for reaching out!`);
        contactForm.reset();
    }
    
});