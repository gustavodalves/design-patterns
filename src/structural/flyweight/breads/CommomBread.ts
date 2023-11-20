import { BreadType } from "../protocols/BreadType";

export class CommonBread implements BreadType {
    make(): string {
        return "Common bread";
    }
}
