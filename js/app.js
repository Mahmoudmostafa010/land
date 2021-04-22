//global var to crreat nav bar list
const navList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

//creating navbar menu list
function createNavbar() {
    for (let element of sections) {
        let List = document.createElement('li');
        let ancher = document.createElement('a');
        ancher.className = 'menu__link';
        ancher.dataset.nav = element.id;
        ancher.innerText = element.dataset.nav;
        List.appendChild(ancher);
        navList.appendChild(List);
    }
}




//add active class 
let observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("your-active-class");
    
      const menu= document.querySelectorAll('li');
      menu.forEach((element) =>{
        if (entry.target.getAttribute('data-nav')===element.textContent){
          element.classList.add('active');
        }
        else {
          element.classList.remove('active');
        }
      })
    }
    else { 
     entry.target.classList.remove("your-active-class");
    }

  });
},{threshold:[0.5]});

sections.forEach(section => {
observer.observe(section);
});


// creat navbar 
createNavbar();

//scroll to section
scrollToSection();

//creat scrolling function 
function scrollToSection() {
  navList.addEventListener('click', (e) => {
       document.getElementById (e.target.dataset.nav).scrollIntoView({behavior: "smooth"});
        
    });
}