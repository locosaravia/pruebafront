import { obtenerSeries } from "./promesas.js"

window.addEventListener("load",()=>{
    var series = obtenerSeries()
    var eTBody = document.getElementById("tabla");
//aqui se busca mostrar en la tabla las distintas series que fueron ingresadas
    series.then((listado)=>{

        let filas = ""
        listado.forEach((p)=>{
            filas += "<tr>"
            filas += "<td>"+p.nombre+"</td>"
            filas += "<td>"+p.director+"</td>"
            filas += "<td>"+p.anio+"</td>"
            filas += "<td>"+p.valoracion+"</td>"
            filas += "<td>"+p.genero+"</td>"
            filas += "<td>"+p.Episodios+"</td>"
            filas += "<td>"+p.Recomedacion+"</td>"
            filas += "</tr>"
        })
        console.log(filas)
        eTBody.innerHTML = filas;
    })
}
)