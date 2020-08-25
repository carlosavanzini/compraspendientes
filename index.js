/*
    LISTA DE COMPRAS: 

        Crear un programa que controle el "click" del boton "Agregar". 
        El mismo debe tomar el valor ingresado en el campo "pendiente" y agregarlo en la lista de pendientes ("listaPendientes").

        Extra: Una vez ingresado el valor, se debe "limpiar" el campo "pendiente" (Dejar vacio el mismo).

        Herramientas disponibles: 

        document.querySelector("selector");
        element.addEventListener("click",handler);
        element.value;
        createElement;
        appendChild;
        innerHTML;



    **Recomendacion** 
        Ir guardando los datos ingresados en alguna estructura de datos. Es una `lista` de productos (Arreglo). 
        Esto te podrá servir mas adelante. 



*/
 // Nos ubicamos en el DOM
  let btnAgregar= document.querySelector("#agregar");
  let arrProductos=[];

  //eventos
   btnAgregar.addEventListener("click", agregarHandler);

function  agregarHandler(){ 
    let producto=document.querySelector("#producto");
    if(producto.value===""){
        return;
    }



    let lista= document.querySelector("#listaPendientes");
    
    console.log("Agregar a la lista " + producto.value);
    let li= document.createElement("li");
    li.innerText=producto.value;
    lista.appendChild(li);

    //lista.innerHTML+='<li>' + producto.value + '</li>';
    //arrProductos.push(producto.value);
    producto.value="";
}



