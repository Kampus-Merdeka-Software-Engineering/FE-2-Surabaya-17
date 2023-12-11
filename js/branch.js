const searchcontainer = document.getElementById("searchcontainer");
const city = document.getElementById("city");

searchcontainer.addEventListener("keyup", function(e){
  const city = e.target.value.toLowerCase();
  for(let i = 0; i <city.length; i++) {
    const text = city[i].textContent.toLowerCase();
    if(text.includes(city)) {
      city[i].style.display = "block";
    } else{
      city[i].style.display="none";
    }
  }
})