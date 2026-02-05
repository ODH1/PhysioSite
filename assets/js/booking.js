function initBookingButton() {
  const bookingBtn = document.getElementById('booking-button');

  if (!bookingBtn) return console.error('Booking button not found');
  if (!window.calendar || !calendar.schedulingButton) {
    // Retry after a short delay if script not yet loaded
    setTimeout(initBookingButton, 100);
    return;
  }

  calendar.schedulingButton.load({
    url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3mQ014q6cvBlF69ElwyuoFeuNUZNMQmDJe37G2hDa32UJ3AvmkKPSFTR9YD-T400RmAAz9jhgf?gv=true',
    target: bookingBtn
  });
}

// Run on load
window.addEventListener('load', initBookingButton);
