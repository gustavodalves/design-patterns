import Bike from '../vehicles/Bike';

export default class BikeFactory {
    generate(name: string) {
        return new Bike(name);
    }
}
