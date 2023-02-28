import axios from "axios"

function randNum(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum) + minimum);
}

export default async function handler(req, res) {
    let randN = randNum(1, 1009);
    let url = 'https://pokeapi.co/api/v2/pokemon/' + randN;
    try {
        const data = await axios.get(url);
        let arr = new Array();
        for (let types of data.data.types) {
            arr.push(types.type.name)
        }
        res.status(200);
        return res.json({"name": data.data.name, "sprite": data.data.sprites.front_default, "types": arr});
    } catch(error) {
        res.status(400);
        console.log(error);
    }
}