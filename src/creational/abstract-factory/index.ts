import HighLevelCreateVehicleEmployeeFactory from './factories/HighLevel';
import LowLevelCreateVehicleEmployeeFactory from './factories/LowLevel';

const lowLevelFactory = new LowLevelCreateVehicleEmployeeFactory();
const highLevelFactory = new HighLevelCreateVehicleEmployeeFactory();

const lowLevelVehicle = lowLevelFactory.createVehicle('Gustavo');
const highLevelVehicle = highLevelFactory.createVehicle('Fernando');

console.log(lowLevelVehicle, highLevelVehicle);
