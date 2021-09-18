/* Constantes de ambos elementos */
const menu_hamburguer = document.querySelector('.menu-icon')
const menu_navegacion = document.querySelector('.menu-navegacion')
/* Prueba si funciona */
console.log(menu_hamburguer)
console.log(menu_navegacion)
/* Funcion para aparecer el menu al oprimir el icono hamburguesa */
menu_hamburguer.addEventListener('click', ()=>{
  menu_navegacion.classList.toggle('spread')
}
)
window.addEventListener('click', e=>{
  if(menu_navegacion.classList.contains('spread')
        && e.target != menu_navegacion && e.target != menu_hamburguer) 
        {
          menu_navegacion.classList.toggle('spread')
  }
}
)