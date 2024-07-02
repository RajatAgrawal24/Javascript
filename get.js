let data1 = document.getElementById("a").innerText;
let data2 = document.getElementById("a").innerHTML;
let data3 = document.getElementById("a").getAttribute("style");
let data4 = document.getElementById("a").getAttributeNode("style");
let data5 = document.getElementById("a").attributes[0];

console.log(data1, data2, data3, data4, data5);
