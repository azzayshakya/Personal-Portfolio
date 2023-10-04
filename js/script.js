//toggle icon navbar

let mobile_nav =document.querySelector(".mobile-navbar-btn");
let mobile_header = document.querySelector('.header');
const toggleNavbar =()=>{
    mobile_header.classList.toggle("active");
}
mobile_nav.addEventListener('click',()=>toggleNavbar())







// scroll section


let section =document.querySelectorAll('section');
let navlinks =document.querySelectorAll('header nav a');


window.onscroll=()=>{
   //  sections.forEach(sec =>{
    //     let top =window.scrollY;
    //     let offset = sec.offsetTop -100;
       
    //     let height =sec.offsetHeight;
    //     let id=sec.getAttribute('id');

    //     if(top >= offset  && top <offset + height){ 
    //         navlinks.forEach(links =>{
    //             links.classList.remove('active');
    //             document.querySelector('header nav a[href*='+id+']').classList.add('active');
    //         })
    //     }

    // });
    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);
}

//script for tpogle when we click then it should close too
// in video 1:22:00 

//two line code only
