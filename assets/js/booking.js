window.addEventListener('load', function () {
  calendar.schedulingButton.load({
    url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3mQ014q6cvBlF69ElwyuoFeuNUZNMQmDJe37G2hDa32UJ3AvmkKPSFTR9YD-T400RmAAz9jhgf?gv=true',
    color: '#039BE5',
    label: 'Book an appointment',
    target: document.getElementById('booking-button'),
  });
});
