const filterBox = document.querySelectorAll('.project');
let category = document.querySelector('.category')

category.addEventListener('click', (event) => {

    if (event.target.tagName !== 'BUTTON') 
    {return false, console.log("bddddddd");}
    let filterClass = event.target.dataset['filter'];
    console.log(filterClass);

    filterBox.forEach(elem => {
        elem.classList.remove( 'hide'); 
        if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
            elem.classList.add('hide');
        }
    });

});

