var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Veicolo = /** @class */ (function () {
    function Veicolo(marca, modello, velMax, targa) {
        this.marca = marca;
        this.modello = modello;
        this.velMax = velMax;
        this.targa = targa;
    }
    Veicolo.prototype.descrizione = function () {
        return "L'autoveicolo marca ".concat(this.marca, " modello ").concat(this.modello, " raggiunge velocit\u00E0 massima ").concat(this.velMax, " km/h. Targata ").concat(this.targa);
    };
    return Veicolo;
}());
var Auto = /** @class */ (function (_super) {
    __extends(Auto, _super);
    function Auto(marca, modello, velMax, targa, numeroPorte) {
        var _this = _super.call(this, marca, modello, velMax, targa) || this;
        _this.numeroPorte = numeroPorte;
        return _this;
    }
    Auto.prototype.descrizione = function () {
        return "".concat(_super.prototype.descrizione.call(this), ". Numero porte: ").concat(this.numeroPorte);
    };
    return Auto;
}(Veicolo));
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(marca, modello, velMax, targa, tipoManubrio) {
        var _this = _super.call(this, marca, modello, velMax, targa) || this;
        _this.tipoManubrio = tipoManubrio;
        return _this;
    }
    Moto.prototype.descrizione = function () {
        return "".concat(_super.prototype.descrizione.call(this), ". Tipo manubrio: ").concat(this.tipoManubrio);
    };
    return Moto;
}(Veicolo));
var auto = new Auto("Fiat Lancia", "Ypsilon", 140, "FE235KG", 5);
var moto = new Moto("Kymko", "Agility", 100, "CA564BR", "sportivo");
console.log(auto.descrizione());
console.log(moto.descrizione());
