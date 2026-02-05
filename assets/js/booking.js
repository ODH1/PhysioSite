window.addEventListener('load', function () {
  const bookingBtn = document.getElementById('booking-button');

  if (!bookingBtn) {
    console.error('Booking button element not found');
    return;
  }

  // Make sure Google script is loaded
  if (!window.calendar || !calendar.schedulingButton) {
    console.error('Google scheduling script not loaded');
    return;
  }

  // Attach the scheduler to the existing button without changing styling
  calendar.schedulingButton.load({
    url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3mQ014q6cvBlF69ElwyuoFeuNUZNMQmDJe37G2hDa32UJ3AvmkKPSFTR9YD-T400RmAAz9jhgf?gv=true',
    target: bookingBtn  // your button stays exactly as is
    // do NOT pass `class` or `label` here
  });
});
