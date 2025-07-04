document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio chargé avec succès !");
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const confirmation = document.getElementById("confirmation");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Empêche l'envoi réel
    confirmation.style.display = "block";
    form.reset(); // Vide les champs
  });
});
