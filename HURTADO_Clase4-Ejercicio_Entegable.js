function Taxi(tipoMotor,capacidad) { //modificar el código para que generar un alert que diga:
    this.tipoMotor=tipoMotor;
    this.capacidad=capacidad;
    alert('Se ha creado un objeto taxi con tipo motor: ' + this.tipoMotor);
}
function ejemploObjetos() {
    //...agregar las propiedades y los métodos
    const coche1=new Taxi('Diesel',40);
    const coche2=new Taxi('Gasolina',35);
    //generar los alert()
    alert(`El coche 1 tiene capacidad ${coche1.capacidad} litros.`)
    alert(`El coche 2 tiene capacidad ${coche2.capacidad} litros.`) 
}  
ejemploObjetos();