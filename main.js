const navdropdown=document.querySelector(".nav__menu")
const open_btn= document.querySelector('#nav__open-btn')
const close_btn=document.querySelector('#nav__close-btn')


let scrollYposition;

window.addEventListener('scroll', () => {
  console.log("scrolled")
  console.log(window.scrollY)
  document.querySelector('nav').classList.toggle("nav_color_change_onscroll", window.scrollY > 100)

})
   
    open_btn.addEventListener('click',()=>{
      navdropdown.style.display='flex';
      open_btn.style.display='none';
      close_btn.style.display='inline-block'
    })
    
    close_btn.addEventListener('click',()=>{
        close_btn.style.display='none'
        open_btn.style.display='inline-block'
        navdropdown.style.display='none';
    })

    // the hamburger and close buttons show up even if switched to desktop view but,this functions prevents the display
    addEventListener("resize", (event) => {
      console.log(window.innerWidth)
      if(window.innerWidth>1024)
      {
        location.reload();
        open_btn.style.display='none';
        close_btn.style.display='none';
      }
      else if(window.innerWidth<=1024)
      {
        close_btn.style.display='none'
        open_btn.style.display='inline-block'
        navdropdown.style.display='none';
      }
    });