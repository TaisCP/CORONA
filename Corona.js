let table;
let count=5;

function preload() {
  table = loadTable('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv', 'csv','header');
}
let Countries = ["Belarus","Belgium","Brazil","Egypt", "Finland", "Germany","Iran","Japan","Norway","Russia","Spain","Italy","South Sudan","Libya","Zimbabwe","Vietnam","Uzbekistan","Uruguay","Uruguay","Uruguay","Uruguay","Uruguay","Uruguay","Uruguay","Uruguay","Uruguay"];
let Provinces = ["Hubei","Hong Kong","Queensland","Ontario","Beijing",];

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0,100,200);
  head = table.columns;
  textSize(60);
  fill(200);
  frameRate(5);

}

//var b;
//var c;
//let y = 0;
//  for (c = 0, b = 1, i = 0; i < Countries.length; i++, b++, c++) {
//    if c > 14 {
//      let y = 200;
//  } if (c > 28) {
//      let y = 300;
//  } else {
//    let y = 100;
//  }
function tilføjland() {
  boxvalue = document.getElementById('box').value;
  Countries.push(boxvalue);
  if (table.findRow(boxvalue,'Country/Region').arr[3] = null){
      Countries.splice(Countries.length-1);
    }
  return false;
}
function tilføjprovins() {
  boxvalue2 = document.getElementById('box2').value;
  Provinces.push(boxvalue2);
    if (table.findRow(boxvalue2,'Province/State').arr[3] = null){
        Provinces.splice(Provinces.length-1);
    }
  return false;
}

function fjernland(){
  Countries.splice(Countries.length-1);
  return false;
}

function draw(){
  background(0,100,200);
  let d;
  let p;
  var i;
  var b;
  var c;
  var kordinat = 100;
  var laengde = Countries.length + Provinces.length;
    for (c = 0, b = 1, i = 0; i < laengde; i++, b++, c++) {
      if (c == 14){
        kordinat += 150;
        b -= 14;
      } else if (c == 28) {
        kordinat += 150;
        b -= 14;
      } else if (c == 42) {
        kordinat += 150;
        b -= 14;
      }
      if (i < Countries.length){
        p = color(200, 200-20*log(table.findRow(Countries[i],'Country/Region').arr[count]), 100-20*log(table.findRow(Countries[i],'Country/Region').arr[count]));
        fill(p);
        ellipse(b*100,kordinat,10*log(table.findRow(Countries[i],'Country/Region').arr[count]),10*log(table.findRow(Countries[i],'Country/Region').arr[count]));
        textSize(10);
        fill(color(10));
        text(Countries[i], b*100-20, kordinat+80);
    }
      else {
          d = color(200, 200-20*log(table.findRow(Provinces[i - Countries.length],'Province/State').arr[count]), 100-20*log(table.findRow(Provinces[i - Countries.length],'Province/State').arr[count]));
          fill(d);
          ellipse(b*100,kordinat,10*log(table.findRow(Provinces[i - Countries.length],'Province/State').arr[count]),10*log(table.findRow(Provinces[i - Countries.length],'Province/State').arr[count]));
          fill(color(10));
          textSize(10)
          text(Provinces[i-Countries.length], b*100-20, kordinat+80);
        }
      }
  textSize(50);
  text(head[count],700,600);

  count +=1;
  if (count>table.getColumnCount()-1){
    count = 5;
    return false;
  }
}

