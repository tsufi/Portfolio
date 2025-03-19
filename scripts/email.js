// Alustetaan EmailJS
(function() {
    emailjs.init("RrwNx85bJRxGt9uue"); // KORVAA EmailJS käyttäjä-ID:lläsi
})();

document.getElementById("contactform").addEventListener("submit", function(event) {
    event.preventDefault(); // Estetään sivun uudelleenlataus

    emailjs.send("service_1ayf7we", "template_5xgrf1m", {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    })
    .then(function(response) {
        console.log("Sähköposti lähetetty!", response.status, response.text);
        document.getElementById("response-message").textContent = "Message send successful.";
    }, function(error) {
        console.log("Virhe!", error);
        document.getElementById("response-message").textContent = "error on message send.";
    });

    // Tyhjennetään lomake
    document.getElementById("contact-form").reset();
});
