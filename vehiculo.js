    // Propiedades:
    // Vehiculo.prototype.fabricante = null;
    // Vehiculo.prototype.modelo     = null;
    // Vehiculo.prototype.tipo       = 0;
    // // Propiedades (Constantes):
    // Vehiculo.NO_ESPECIFICADO = 0;
    // Vehiculo.COCHE  = 1;
    // Vehiculo.CAMION = 2;
    // Vehiculo.MOTO   = 3;
    // ------------------ CONSTRUCTORES -----------------------
    // Constructor vacío
    // function Vehiculo() {
    // }
    // Constructor
    function Vehiculo( fabricante, modelo, tipo )
    {
        this.fabricante = fabricante;
        this.modelo        = modelo;
        this.tipo        = tipo;
    }
    // --------------------- MÉTODOS --------------------------
    Vehiculo.prototype.setFabricante = function( fabricante ) {
        this.fabricante = fabricante;
    }
    Vehiculo.prototype.getFabricante = function() {
        return this.fabricante;
    }
    Vehiculo.prototype.setModelo = function( modelo ) {
        this.modelo = modelo;
    }
    Vehiculo.prototype.getModelo = function() {
        return this.modelo;
    }
    Vehiculo.prototype.setTipo = function( tipo ) {
        this.tipo = tipo;
    }
    Vehiculo.prototype.getTipo = function() {
        return this.tipo;
    }


    var objVehiculo1 = new Vehiculo( "Toyota", "Corolla", Vehiculo.CAMION );
    console.log( objVehiculo1.getFabricante());
    objVehiculo1.setFabricante("Ford");
    console.log(objVehiculo1.getFabricante());