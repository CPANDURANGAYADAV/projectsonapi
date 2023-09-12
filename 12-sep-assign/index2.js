function getQuote(){
    event.preventDefault();
  var url='https://type.fit/api/quotes';
  fetch(url)
  .then((res) => res.json())
    .then((data) => {
      let i=Math.floor(Math.random()*data.length);
      let d=data[i].text;
     document.getElementById("Quote").innerHTML=d;
     let a=data[i].author;
     const subst="type.fit";
const au=a.split(subst);
     document.getElementById("author").innerHTML=au;
    });
}
