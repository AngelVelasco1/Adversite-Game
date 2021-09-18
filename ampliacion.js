const imagenes = document.querySelectorAll('.img-galeria')
const aparecer_imagen = document.querySelector('.agregar-imagen')
const contenedor_aparecer = document.querySelector('.imagen-ampliada')

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=> {
  aparecerImagen(imagen.getAttribute('src')
  )

})
}
  )
contenedor_aparecer.addEventListener('click', (e)=>{
  if(e.target != aparecer_imagen){
    contenedor_aparecer.classList.toggle('show')
    aparecer_imagen.classList.toggle('showImage')

  }
}


)

const aparecerImagen = (imagen)=>{
  aparecer_imagen.src = imagen;
  contenedor_aparecer.classList.toggle('show')
  aparecer_imagen.classList.toggle('showImage')
}