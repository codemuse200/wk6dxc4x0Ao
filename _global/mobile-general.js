const mbl_mainIcon = document.getElementById('mblMainIcon');
const mbl_mainColumn = document.getElementById('mblMainColumn');

const mbl_langImage1 = document.getElementById('mblLangImage1');
const mbl_langOptionMenu1 = document.getElementById('mblLangOptionMenu1');
const mbl_langImage2 = document.getElementById('mblLangImage2');
const mbl_langOptionMenu2 = document.getElementById('mblLangOptionMenu2');

mbl_mainIcon.addEventListener("click", (event) => {   
  event.stopPropagation();
  mbl_mainColumn.classList.add("active"); 
});

// Esto evita que se cierre el si se hace clic dentro del menú
mbl_mainColumn.addEventListener("click", (event) => {
  mbl_langOptionMenu1.classList.remove("active"); 
  mbl_langOptionMenu2.classList.remove("active"); 
  event.stopPropagation();
});

document.body.addEventListener("click", (event) => {
  event.stopPropagation();
  mbl_langOptionMenu1.classList.remove("active"); 
  mbl_langOptionMenu2.classList.remove("active"); 
  mbl_mainColumn.classList.remove("active");
});

mbl_langImage1.addEventListener("click", (event) => {
  event.stopPropagation();
  mbl_langOptionMenu1.classList.add("active"); 
  mbl_langOptionMenu2.classList.remove("active"); 
});

mbl_langImage2.addEventListener("click", (event) => {
  event.stopPropagation();
  mbl_langOptionMenu2.classList.add("active"); 
  mbl_langOptionMenu1.classList.remove("active"); 
});
