interface UserInterface {
    id: number,
    name: string
}

const user1: UserInterface = {
    id: 1,
    name: 'john'
}

console.log(user1);


type Point = number | string
const p1: Point = 1