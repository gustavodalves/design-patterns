import Car from "../vehicles/Car";

export default class CarFactory {
    generate(name: string) {
        return new Car(name)
    }
}