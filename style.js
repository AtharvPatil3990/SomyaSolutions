document.getElementById("bookingForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Booking submitted! Somya will contact you soon.");
    this.reset();
});