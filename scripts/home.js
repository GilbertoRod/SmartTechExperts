document.getElementById('flooring').addEventListener('click',function(){
  window.location.href='gallery.html#flooring-section';
});
document.getElementById('painting').addEventListener('click',function(){
  window.location.href='gallery.html';
});

document.getElementById('electrical').addEventListener('click',function(){
  window.location.href='gallery.html#electrical';
});
document.getElementById('plumbing').addEventListener('click',function(){
  window.location.href='gallery.html#plumbing-section';
});
document.getElementById('bathroom').addEventListener('click',function(){
  window.location.href='gallery.html#bathroom-section';
});
document.getElementById('additional').addEventListener('click',function(){
  window.location.href='gallery.html#additional-section';
});

function hamburger(){
  const sidebar=document.querySelector(".js-sidebar");
  const icon=document.querySelector(".x-icon");
  const icon2=document.querySelector(".js-ham");
  const sep=document.querySelector(".js-menu-sep");
  const sep1=document.querySelector(".js-menu-sep-1")
  
  if (sidebar.classList.contains("sidebar")){
    sidebar.classList.remove("sidebar");
    icon.classList.remove("x-icon-display");
    icon2.classList.remove("ham-js-icon");
    sep.classList.remove("menu-sep");
    sep.classList.add("temp-hr");
    sep1.classList.add("temp-hr-1");
    sep1.classList.remove("menu-sep-1");
    document.querySelector(".js-home").innerHTML="";
    document.querySelector(".js-gallery").innerHTML="";
    document.querySelector(".js-contact").innerHTML="";
    

  }
  else{
    sidebar.classList.add("sidebar");
    icon.classList.add("x-icon-display");
    icon2.classList.add("ham-js-icon");
    sep.classList.add("menu-sep");
    sep.classList.remove("temp-hr");
    sep1.classList.remove("temp-hr-1");
    sep1.classList.add("menu-sep-1");
    document.querySelector(".js-home").innerHTML="<a href=\"index.html\" class='ham-anchor'>Home</a>";
    document.querySelector(".js-gallery").innerHTML="<a href=\"gallery.html\" class='ham-anchor'>Gallery</a>";
    document.querySelector(".js-contact").innerHTML="<a href=\"contact.html\" class='ham-anchor'>Contact</a>";
    

  }
}