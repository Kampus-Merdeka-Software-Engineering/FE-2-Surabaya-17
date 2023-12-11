var currentDateTime = new Date();
var year = currentDateTime.getFullYear();
var month = (currentDateTime.getMonth() + 1);
var date = (currentDateTime.getDate() + 1);

if(date < 10) {
  date = '0' + date;
}
if(month < 10) {
  month = '0' + month;
}

var dateTomorrow = year + "-" + month + "-" + date;
var dateElem = document.querySelector("#date");

dateElem.setAttribute("min", dateTomorrow);

async function createReservation() {
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const time = document.getElementById('time').value;
  const date = document.getElementById('date').value;
  const people = document.getElementById('people').value;
  const branch = document.getElementById('branch-selection').value;
  const subject = document.getElementById('message').value;

  try {
    const response = await fetch(`https://be-2-surabaya-17-production.up.railway.app/api/reservations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, phone, time, date, people, branch, subject })
    })
    Swal.fire("Reservation Created Successfully!");
  } catch(err) {
    console.error(err);
  }
}