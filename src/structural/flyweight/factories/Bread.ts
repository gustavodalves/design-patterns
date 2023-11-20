import { CommonBread } from "../breads/CommomBread";
import { BreadType } from "../protocols/BreadType";

export class FlyweightBreadFactory {
    private breadTypes: { [key: string]: BreadType } = {};

    getBreadType(name: string): BreadType {
        if (!this.breadTypes[name]) {
            this.breadTypes[name] = new CommonBread();
        }
        return this.breadTypes[name];
    }
}