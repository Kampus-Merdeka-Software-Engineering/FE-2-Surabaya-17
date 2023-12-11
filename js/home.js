let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 5000); // Change image every 5 seconds
}

function bigImg(x) {
  x.style.height = "200px";
  x.style.width = "250px";
}

function normalImg(x) {
  x.style.height = "150px";
  x.style.width = "200px";
}

async function renderMenu() {
  const menuContainer = document.getElementById("menu-container1");
  try {
    const response = await fetch('https://be-2-surabaya-17-production.up.railway.app/api/specialties');
    const json = await response.json();
    
    const specialties = json.data.map((specialties) => {
      const container = `
      <div>
          <img src="${specialties.imageURL}">
          <p>${specialties.name}</p>
          <p>Price: IDR${specialties.price}</p>
        </div>
      `;
    return container;
    }).join("");
    console.log(specialties)
    menuContainer.innerHTML = specialties;

  } catch(err) {
    console.log(err);
  }
};

renderMenu();

 async function renderFood() {
  const menuContainer = document.getElementById("menu-container2");
  try {
    const response  = await fetch('https://be-2-surabaya-17-production.up.railway.app/api/menu');
    const json = await response.json();

    const menu = json.data.map((menu) => {
      const container = `
      <div>
          <img src="${menu.imageURL}">
          <p>${menu.name}</p>
          <p>Price: IDR${menu.price}</p>
        </div>
      `;
    return container;
    }).join("");
    console.log(menu)
    menuContainer.innerHTML = menu;

  } catch(err) {
    console.log(err);
  }
};

renderFood();

async function createReservation() {
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const time = document.getElementById('time').value;
  const date = document.getElementById('date').value;
  const people = document.getElementById('people').value;
  const branch = document.getElementById('branch-selection').value;
  const subject = document.getElementById('message').value;

  try {
    const response = await fetch(`https://be-2-surabaya-17-production.up.railway.app/api/reservation`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, phone, time, date, people, branch, subject })
    })
  } catch(err) {
    console.error(err);
  }
}
