import { LightOffCommand } from './commands/LightOff';
import { LightOnCommand } from './commands/LightOn';
import { RemoteControl } from './invokers/RemoteControl';
import { Light } from './receiver/Light';

const light = new Light();
const lightOnCommand = new LightOnCommand(light);
const lightOffCommand = new LightOffCommand(light);

const remoteControl = new RemoteControl();

remoteControl.setCommand(lightOnCommand);
remoteControl.pressButton();

remoteControl.setCommand(lightOffCommand);
remoteControl.pressButton();
