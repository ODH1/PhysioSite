
// Attach event to your existing button
window.addEventListener('load', function() {
  const btn = document.getElementById('booking-button');
  if (!btn) return console.error('Booking button not found');

  btn.addEventListener('click', function() {
    window.open(
      'booking.html',        // the page with the embedded scheduler
      'BookAppointment',     // window name
      'width=600,height=800,resizable=yes,scrollbars=yes'
    );
  });
});
