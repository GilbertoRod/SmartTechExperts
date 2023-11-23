document.getElementById('garage').addEventListener('click',function(){
  window.location.href='gallery.html#garages-section';
});
document.getElementById('garage-re').addEventListener('click',function(){
  window.location.href='gallery.html#garages-section';
});

document.getElementById('bathroom').addEventListener('click',function(){
  window.location.href='gallery.html';
});
document.getElementById('bathroom-re').addEventListener('click',function(){
  window.location.href='gallery.html';
});

function hamburger(){
  const sidebar=document.querySelector(".js-sidebar");
  const icon=document.querySelector(".x-icon")
  const icon2=document.querySelector(".js-ham")
  
  if (sidebar.classList.contains("sidebar")){
    sidebar.classList.remove("sidebar");
    icon.classList.remove("x-icon-display");
    icon2.classList.remove("ham-js-icon");
    document.querySelector(".js-resume").innerHTML="";
    document.querySelector(".js-gallery").innerHTML="";
    document.querySelector(".js-contact").innerHTML="";
    

  }
  else{
    sidebar.classList.add("sidebar");
    icon.classList.add("x-icon-display");
    icon2.classList.add("ham-js-icon");
    document.querySelector(".js-resume").innerHTML="<a href=\"index.html\" class='ham-anchor'>Home</a>";
    document.querySelector(".js-gallery").innerHTML="<a href=\"gallery.html\" class='ham-anchor'>Gallery</a>";
    document.querySelector(".js-contact").innerHTML="<a href=\"contact.html\" class='ham-anchor'>Contact</a>";
    

  }
}