alert(`En este programa se resolvera una operacion matematica misteriosa
(20+10)/5+3∗2−4(20+10)/5+3*2-4(20+10)/5+3∗2−4`);
let resultado = (20+10)/5+3*2-4*(20+10)/5+3*2-4*(20+10)/5+3*2-4;
alert("El resultado es:" + " " + resultado);
// El orden de prioridad de operaciones  extablece que se  
// resuelven primero los parentesis, exponentes y raices, 
// multiplicación y division, sumas y restas, en ese orden 
// de izquierda a derecha, en este caso solo hay, parentesis, 
// multiplicación, division, sumas y restas, se resolvieron todos 
// los parentesis=(30)/5+3*2-4*(30)/5+3*2-4*(30)/5+3*2-4, luego 
// divisiones y multiplicaciones de izquierda a derecha, 
// 6+6-120/5+6-120/5+6-4, luego divisiones restantes, 
// 6+6-24+6-24+6-4, suma de signos iguales
//24-52=-28