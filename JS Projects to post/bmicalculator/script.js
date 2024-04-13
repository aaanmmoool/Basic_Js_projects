const form = document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();

const hieght = parseInt(document.querySelector('#hieght').value);
const wieght = parseInt(document.querySelector('#wieght').value);
const result = document.querySelector('.result');
 if (hieght===' '|| hieght<0 || isNaN(hieght)){
    result.innerHTML = 'Please give a valid ';
 }
 else if (wieght===' '|| wieght<0 || isNaN(wieght)){
    result.innerHTML = 'Please give a valid ';
 }
 else{
   const bmi =  (wieght/((hieght*hieght)/10000)).toFixed(2);
   result.innerHTML = `<span>${bmi}</span>`;
 }

})


