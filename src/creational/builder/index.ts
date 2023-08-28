import { GalaxyBuilder } from "./builders/galaxy";
import { IPhonAppleBuilder } from "./builders/iPhone";

const iPhoneBuilder = new IPhonAppleBuilder()
iPhoneBuilder.setBattery().setBody().setModel()
const iPhone = iPhoneBuilder.build()

const galaxyBuilder = new GalaxyBuilder()
galaxyBuilder.setBattery().setBody().setModel()
const galaxy = galaxyBuilder.build()

console.log(iPhone.description())
console.log(galaxy.description())
