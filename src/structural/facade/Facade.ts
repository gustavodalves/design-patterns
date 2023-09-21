import { DoAction1, DoAction2, DoAction3 } from "./Operations";

export default class Facade {
    private doAction1 = new DoAction1()
    private doAction2 = new DoAction2()
    private doAction3 = new DoAction3()

    public operation1() {
        this.doAction1.execute()
    }

    public operation2() {
        this.doAction2.execute()
    }

    public operation3() {
        this.doAction3.execute()
    }
}