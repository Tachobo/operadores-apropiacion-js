alert("En este programa se va calcular el area y perimetro de un terreno rectangular");
let base = parseFloat(prompt("Por favor digitar la base del terreno"));
let altura = parseFloat(prompt("Por favor digitar la altura del terreno"));
let perimetro = (base * 2) + (altura * 2);
let area = (base * altura);
alert(`El perimetro del terreno es ${perimetro} metros 
El area del terreno es ${area} metros`);
// Los pasos que segui en este punto fue, pedirle a la persona
// valor de la altura y la base
// saque el perimetro multiplicando base por dos y altura por 2 y
// el resultado lo sume, para el area multiplique base por altura,
// por ultimo mostre el resultado de perimetro y area