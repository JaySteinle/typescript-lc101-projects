"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Rocket = void 0;
var Payload_1 = require("./Payload");
var Rocket = /** @class */ (function (_super) {
    __extends(Rocket, _super);
    function Rocket(name, totalCapacityKg) {
        var _this = _super.call(this) || this;
        _this.cargoItems = [];
        _this.astronauts = [];
        _this.name = name;
        _this = _super.call(this) || this;
        _this.totalCapacityKg = totalCapacityKg;
        return _this;
    }
    Rocket.prototype.sumMass = function (items) {
        var totalMassKg = 0;
        for (var i = 0; i < items.length; i++) {
            totalMassKg += items[i].massKg;
        }
        return totalMassKg;
    };
    Rocket.prototype.currentMassKg = function () {
        var currentMassKgValue = 0;
        currentMassKgValue = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
        return currentMassKgValue;
    };
    Rocket.prototype.canAdd = function (items) {
        if (this.currentMassKg() + items.massKg <= this.totalCapacityKg) ///////////////////////////////////////////
            return true;
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}(Payload_1.Payload));
exports.Rocket = Rocket;
