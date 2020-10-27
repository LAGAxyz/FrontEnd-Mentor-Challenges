import {data} from "./data.js";

const mostrarData = ()=>{
    const contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = "";

    data.forEach((dato)=>{
        let col = document.createElement("div");
        let card = document.createElement("div");
        let img = document.createElement("img");
        let body = document.createElement("div");
        let titulo = document.createElement("h5");
        let hr = document.createElement("hr");
        let descripcion = document.createElement("p");
        let vinculo = document.createElement("a");
    
        col.classList.add("col-lg-4", "col-md-6","col-sm-12");
        card.classList.add("card", "shadow", "text-center", "m-2");
        img.classList.add("card-img-top");
        body.classList.add("card-body");
        titulo.classList.add("card-title");
        descripcion.classList.add("card-text");
        vinculo.classList.add("btn", "btn-dark");
    
        img.src = dato.imageDesktop;
        titulo.innerText = dato.title;
        descripcion.innerText = dato.description;
        vinculo.innerText = "Ver Sitio"
        vinculo.href = dato.url;
    
        body.appendChild(titulo);
        body.appendChild(hr);
        body.appendChild(descripcion);
        body.appendChild(vinculo);
    
        card.appendChild(img);
        card.appendChild(body);
    
        col.appendChild(card);
    
        contenedor.appendChild(col);
    });
};

mostrarData();
