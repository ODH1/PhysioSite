
// Attach event to your existing button
window.addEventListener('load', function () {
  const btn = document.getElementById('booking-button');
  if (!btn || !window.calendar) return;

  calendar.schedulingButton.load({
    url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3mQ014q6cvBlF69ElwyuoFeuNUZNMQmDJe37G2hDa32UJ3AvmkKPSFTR9YD-T400RmAAz9jhgf?gv=true',
    color: '#474747',
    label: 'Check Availability',
    target: btn,
  });
});
