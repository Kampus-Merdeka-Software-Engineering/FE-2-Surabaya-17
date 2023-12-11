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
  const menuContainer = document.getElementById('menu-container');
  try {
    const response = await fetch('https://be-2-surabaya-17-production.up.railway.app/api/specialties');
    const json = await data.json();
    
    const specialties = json.data.map((specialties) => {
      const container = `
      <div>
          <imageURL src="${specialties.imageURL}">
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
 try {
    const response  = await fetch('https://be-2-surabaya-17-production.up.railway.app/api/specialties');
    const json = await data.json();
    const menuContainer = document.getElementById('menu-container2');

    const specialties = json.map((specialties) => {
      const container = `
      <div>
          <imageURL src="${specialties.imageURL}">
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

renderFood();