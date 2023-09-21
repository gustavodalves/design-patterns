import { Light } from '../receiver/Light';
import Command from './Protocol';

export class LightOnCommand implements Command {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    execute() {
        this.light.on();
    }
}
