
let navItems = document.getElementsByClassName('main-nav');
let active = false;


function myFunction(){
  // for (let i = 0; i < navItems.length; i++){
  //   console.log(navItems);
  // }

  if (active){
    for (let i = 0; i < navItems.length; i++) {
      navItems[i].className = navItems[i].className.replace(" responsive", "");
     }
     active = false;

  } else {
    for (let i = 0; i < navItems.length; i++) {
      navItems[i].className += " responsive";
     }
     active = true;

  }




console.log(navItems);





}
