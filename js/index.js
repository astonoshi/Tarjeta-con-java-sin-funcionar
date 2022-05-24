const color = ['red', 'violet', 'green'];
color.forEach(function(color) {
    console.log(color);
});

const talle = [37, 38, 39, 40, 41, 42];
talle.forEach(function(talle) {
    console.log(talle);
    });




// segundo ejercicio




const colores=document.querySelectorAll('.colores .span');
const imagenes=document.querySelector('.imagenes img');
const imagenMostrada=document.querySelector('#card .imagen.mostrada');
const talles=document.querySelectorAll('.talles talle');


colores.forEach(color=>{
    color.addEventListener('click',() =>{
    id =colorgetAttribute('id');
    imagenMostrada.setAttribute('src',`img/${id}.jpg`);
        });
    } );

     const eliminarActive= () =>{
        talles.forEach(talle =>{
            talle.classList.remove('active');
        })
    }          

talles.forEach(talle =>{
    talle.addEventListener('click',() =>{
        eliminarActive();
    talle.classlist.add('active');
           })
    } );

imagenes.forEach(img =>{
    img.addEventListener('click',(e) =>{
        const rutaimagen=e.target.scr
        imagenMostrada.setAttribute('src',rutaimagen);
    })
} );
    
    

    








    
