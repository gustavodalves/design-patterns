interface DoAction {
    execute(): void
}

export class DoAction1 implements DoAction {
    execute() {
        console.log('do action 1');
    }
}

export class DoAction2 implements DoAction {
    execute() {
        console.log('do action 1');
    }
}

export class DoAction3 implements DoAction {
    execute() {
        console.log('do action 1');
    }
}
