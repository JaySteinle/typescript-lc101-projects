import {Astronaut } from './Astronaut';
import {Payload} from './Payload';
import {Cargo} from './Cargo';

export class Rocket extends Payload {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name: string, totalCapacityKg: number){
        super()
            this.name = name;
        super()
            this.totalCapacityKg = totalCapacityKg;
    }

    sumMass(items: Payload[] ): number{
        let totalMassKg: number = 0;
        for(let i = 0; i < items.length; i++){
            totalMassKg += items[i].massKg;
        }
        return totalMassKg;
    }

    currentMassKg(): number{
        let currentMassKgValue: number = 0;
        currentMassKgValue = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems)
        return currentMassKgValue
    }

    canAdd(items: Payload): boolean{
        if(this.currentMassKg() + items.massKg <= this.totalCapacityKg)
        return true
    }

    addCargo(cargo: Cargo): boolean{
        if(this.canAdd(cargo)){
            this.cargoItems.push(cargo);
            return true;
        }else{
            return false
        }
    }

    addAstronaut(astronaut: Astronaut): boolean{
        if(this.canAdd(astronaut)){
            this.astronauts.push(astronaut);
            return true;
        }else{
            return false;
        }
    }
}