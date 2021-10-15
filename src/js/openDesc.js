

let descBigs = document.querySelectorAll(".project-desc");
let cross = document.querySelectorAll(".box__cross"),
i, btn;

let buttons = document.querySelectorAll('[data-plus]'),
    index, button;

for (index = 0; index < buttons.length; index++) {
    button = buttons[index];
    button.addEventListener('click', clickHandler);
}

function clickHandler(event) {
    event.preventDefault();
    let plusId= event.target.dataset['plus'];
    descBigs.forEach(elem => {
        elem.classList.remove( 'h100'); 
        if (elem.classList.contains(plusId)) {
            elem.classList.add('h100');
        }
    });
}



const buttonItems = document.querySelectorAll('.box__cross');
for (let buttonItem of buttonItems) {
  buttonItem.addEventListener('click', closeDesc);
}
function closeDesc(event) {
    event.preventDefault();
    for (let descBig of descBigs) {
        descBig.classList.remove('h100');
      }
    

}

