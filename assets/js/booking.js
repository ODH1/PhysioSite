window.addEventListener('load', function () {
  calendar.schedulingButton.load({
    url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3mQ014q6cvBlF69ElwyuoFeuNUZNMQmDJe37G2hDa32UJ3AvmkKPSFTR9YD-T400RmAAz9jhgf?gv=true',
    class: 'button',
    label: 'Check Availability',
    target: document.getElementById('booking-button'),
  });
});
