import { PhoneBuilder } from "./builders/Phone";

const iPhone = new PhoneBuilder().setModel("iPhone 14 pro max").setBattery(2000).setBody("plastic").build()
const galaxy = new PhoneBuilder().setModel("galaxy s23").setBattery(2000).setBody("titanium").build()

console.log(iPhone.getDescription(), galaxy.getDescription())
