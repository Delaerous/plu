document.addEventListener("DOMContentLoaded", onDOMReady);

function onDOMReady() {
  window.addEventListener('scroll', onWindowScroll);



  function onWindowScroll() {
    if(window.document.scrollingElement.scrollTop > header.offsetHeight){
        header.classList.add("header--fixed");
    }
    else { 
        header.classList.remove("header--fixed")
    }
  }
}