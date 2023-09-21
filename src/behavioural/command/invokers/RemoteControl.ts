import Command from '../commands/Protocol';

export class RemoteControl {
    private command: Command | null = null;

    setCommand(command: Command) {
        this.command = command;
    }

    pressButton() {
        if (this.command) {
            this.command.execute();
        } else {
            console.log('Nenhum comando configurado');
        }
    }
}
