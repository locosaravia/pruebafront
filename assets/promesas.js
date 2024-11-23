import { db } from "./firebase.js";
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js"; 
export let agregarSerie = async(serie)=>{
    const docRef = await addDoc(collection(db, "Serie"),serie);
}
// esta parte busca obtener los datos de la series igresadas y enviarlas a la base de datos
export let obtenerSeries = async()=>{
    const querySnapshot = await getDocs(collection(db, "Serie"));
    var series = []
    querySnapshot.forEach((doc) => {
  let serie = {
    'id':doc.id,
    'nombre':doc.data().nombre,
    'director':doc.data().director,
    'anio':doc.data().anio,
    'valoracion':doc.data().valoracion,
    'genero':doc.data().genero,
    'episodio':doc.data().Episodio,
    'Edad':doc.data().Edad,
    'opinion':doc.data().opinion
  }
  series.push(serie)
  console.log(doc.id, " => ", doc.data());
});
    return series; 
}
