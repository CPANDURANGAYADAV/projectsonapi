function getWeather(){
  event.preventDefault();
  let city=document.getElementById("i").value;
var c='https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=f3f1545f79861467179b8e92868d2b43';
var url=c;
fetch(url)
.then((res) => res.json())
.then((data) => {
  let d=parseInt(data.main.temp-273.15);
  let p=parseInt(data.main.pressure)
  let e="Weather in "+city+" is  "+"temperature :"+d+" C"+" and Pressure : "+p+" Pascal";
  document.getElementById("result").innerHTML=e});
}
    