
let template = document.querySelector('script[type="template"]').innerHTML;
let mainRow = document.querySelector('#mainRow');
let pt = new RegExp('{{productTitle}}','ig');
let dataCols = document.querySelectorAll('a[data-col]')
let xxx = "";

console.log(dataCols);

window.addEventListener('load',function () {
  let xml = new XMLHttpRequest();
  xml.open("get","https://raw.githubusercontent.com/Danilovesovic/shop/master/shop.json");

  xml.onreadystatechange = function () {
    if (xml.readyState == 4 && xml.status == 200) {
      displayData(JSON.parse(xml.responseText));
    }
  }

  xml.send();
})



function displayData(data) { // ?????? START MY APP

  // ?????
  renderView(data);

  dataCols.forEach(function (el) {
    el.addEventListener('click',function (e) {
      e.preventDefault();
      let col = this.getAttribute('data-col'); // action
      console.log(col);
if (col == "female" || col == "male") {
  xxx = "colection";
  console.log(xxx);
}else {
  xxx=col;
  console.log(xxx);
}
      let dataSet = data.filter(function (element) {
        if(xxx == "colection"){
          return element.colection == col;
        }else{
          return element[xxx];
        }
      });
      for (var i = 0; i < dataCols.length; i++) {
        dataCols[i].classList.remove('active');
      }
      this.classList.add('active');
      renderView(dataSet)
    })
  })
}
function renderView(dataSet) {
   let text = '';
  for (let i = 0; i < dataSet.length; i++) {
    text += template.replace('{{imgSrc}}',dataSet[i].imgSrc)
                        .replace(pt,dataSet[i].productTitle)
                        .replace('{{model}}',dataSet[i].model)
                        .replace('{{price}}',dataSet[i].price)
  }
    mainRow.innerHTML = text;
}
