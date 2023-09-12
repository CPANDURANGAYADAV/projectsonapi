
function getCountrdet(){
    event.preventDefault();
    const country=document.getElementById("country").value;
  var url='https://restcountries.com/v3.1/all';
  let cuntry="India";
  if(country.length!=0){
    cuntry=country;
  }
  fetch(url)
  .then((res) => res.json())
    .then((data) => {
    let c=0;
    for(let i=0;i<data.length;i++){
if(cuntry==data[i].name.common){
    c=i;
    break;
}
    }
     document.getElementById("capital").innerHTML= "capital :"+data[c].capital;
     document.getElementById("region").innerHTML= "region :"+data[c].region;
     document.getElementById("population").innerHTML= "population :"+parseFloat(data[c].population/10000000)+" Crores";
     document.getElementById("borders").innerHTML= "border :"+data[c].borders;
     document.getElementById("area").innerHTML= "area : "+parseFloat(data[c].area/1000000)+" million sq.km";
     document.getElementById("common").innerHTML= "Country :"+data[c].name.common;
    //  document.getElementById("capital").innerHTML= data[c].area;
    });
}