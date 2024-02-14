const input = document.querySelector('input');
const btn = document.querySelector('#agregar');
const ul = document.querySelector('#tareas');
const ulId = document.querySelector('#idUL');
const cantidadTotal = document.querySelector('.cantidad')
const totalTareasRealizadas = document.querySelector('.realizadas')
const tareas = [];

//Agregamos la funcion del BtN
btn.addEventListener('click', () => {
    let  li = input.value; //creamos una nueva Tarea con el valor de lo que se encuentra en el Input
    tareas.push({id: Date.now(), nombre: li}); //Lo agregamos a nuestro Array de Tareas,
    input.value = '';
    contadorTotal()
    //tareasRealizada()
    pintamos()
});


//Agregamos la funcion que pintara en el DOM
let pintamos = () =>{
    let html = '';
    let htmlIde = '';

    for(let tarea of tareas){
        html += `<li>${tarea.nombre} <input type="checkbox" onclick="tareasRealizada()"> <button onclick="borrar(${tarea.id})"></button></li>`;
        htmlIde += `<li>${tarea.id}</li>`;
    };

    

    ul.innerHTML = html;
    ulId.innerHTML= htmlIde;
};


//Creamos la variable del contador
let contadorTotal =  () => {    
    let valoresTotales = parseInt(cantidadTotal.innerHTML); 
    cantidadTotal.innerHTML = valoresTotales + 1;
}


//Creamos la variable de tareas Realizadas
let tareasRealizada = () => {
    let valoresRealizados = parseInt(totalTareasRealizadas.innerHTML) || 0;
    if (confirm("¿Desea marcar como realizada esta tarea?")) {
        totalTareasRealizadas.innerHTML = valoresRealizados+1;
    } else {
        return false;
    }

}


//Creamos la funcion de eliminar o borrar una tarea
let borrar = (id) => {
    let indice = tareas.findIndex((e) => e.id === id);
    tareas.splice(indice, 1);
    alert("Se elimino correctamente");
    pintamos()
};


