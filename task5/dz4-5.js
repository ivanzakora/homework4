//console.log("test");
var colors = ['#121212', '#2d2f32', '#3a474a','#ad00b5','#ffbd00', '#fff100', '#ff314c', '#191b1d', '#2e353c', '#4c5c5f', '#ed00fe', '#fe005d', '#d90010', '#ff0419', '#0c31bc', '#4561a1', '#2c5bdd', '#00c4d8', '#007e6c', '#009a48', '#00b16b', '#1b408b', '#384e8c', '#5b96fd', '#a8e4e3', '#2fc660', '#00ba42', '#00893d'];

window.onload = funonload;

function funonload () {
	for (i=0; i < 28; i++) {
	document.getElementById('grid').innerHTML += `<div class ="gr" id="cell${i}" onclick="colorOn(${i})"></div>`;
	document.getElementById(`cell${i}`).style.background = colors[i];
	
	}
}

function colorOn(num) {
    
	nob.style.backgroundColor = colors[num];
        
}


// document.getElementById('cell1').onclick = show;

// function show() {
// 	document.body.style.background = 'red';
// }



// document.getElementById(`cell1`).addEventListener('click', (e) => {

// 	document.body.style.background = 'red';
// })

// document.getElementById('grid').addEventListener('click', (e) => {
// 	dbody.style.background = 'red';
// })

