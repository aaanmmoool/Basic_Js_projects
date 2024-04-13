const buttons = document.querySelectorAll('.button');
const bgbody = document.querySelector('body');

buttons.forEach((button)=>{
  button.addEventListener('click',(e)=>{
    if(e.target.id=== 'cyan'){
        bgbody.style.backgroundColor=e.target.id;
    }
    if(e.target.id=== 'purple'){
        bgbody.style.backgroundColor=e.target.id;
    }
    if(e.target.id=== 'yellow'){
        bgbody.style.backgroundColor=e.target.id;
    }
    if(e.target.id=== 'aqua'){
        bgbody.style.backgroundColor=e.target.id;
    }
  });
});