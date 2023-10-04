interface PersonInterfacces {
    id: number,
    name: string,
    register(): string

}

class Persons implements PersonInterfacces {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name

    }
    register() {
        return `${this.name} is now register`
    }
}



class Employee extends Persons {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}


const emp = new Employee(3, "vitus", "developer");

console.log(emp)