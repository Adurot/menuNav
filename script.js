
// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;


var elements = document.getElementById('dropDownMain').children;
elements.item(3).style.display = "none";

/*const third = document.getElementById('dropDownMain').firstElementChild;
console.log('hello ' + third);
third.style.display = "none"; 



let 1Child=document.getElementById('dropDownMain').firstElementChild;
${height}
1Child */

var distLeft = $('#dropDownMain:nth-child(2)').position().top; 
//console.log(document.getElementById("#dropDownMain").style.borderWidth);
console.log(distLeft+" top");

//console.log(elements.item(2).postion().top);


//The 6 is to account for the border size.  



let bWidth=document.getElementById("dropDownMain").style.borderWidth;

bWidth = '20px';
bWidthString= bWidth-'px';
console.log(document.getElementById("dropDownMain").style.borderWidth+'borderwidth');

let height= elements.item(2).clientHeight+bWidth;

console.log(height+' height');
let i=2;
elements.item(i).style.transform = "translate(0,"+ -i*height +"px)"