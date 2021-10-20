//Inicializo el array con diferentes numeros
const numbers=[12,123,325,657,433,12,75,8,23,74];
//Creo una variable que posee el maximo numero del array
const numMax = () => 

    numbers.reduce((acc,num) =>{
        return acc=Math.max(acc,num);//comparo el entre los numeros entre si
    }, 0);
//Imprimo el numero maximo del array
console.log(numMax()); // 657
