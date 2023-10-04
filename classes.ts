interface PersonInterfacce {
    id: number,
    name: string,
    register(): string

}

class Person implements PersonInterfacce {
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

const vaidik = new Person(1, "vaidik");
console.log(vaidik);
