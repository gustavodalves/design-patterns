import Address from "./prototypes/Address"
import Person from "./prototypes/Person"

const gustavo = new Person("Gustavo", "123")

const ny = new Address('ny')
const houston = new Address('houston')

gustavo.addAddress(ny)
gustavo.addAddress(houston)

const steve = gustavo.clone()
steve.name = "steve"

console.log(gustavo, steve)
