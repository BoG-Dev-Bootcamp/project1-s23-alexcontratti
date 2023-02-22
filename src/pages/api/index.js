import axios from "axios"

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}
let randNum = getRandomInt(1, 1009)

export default async function handler(req, res) {
    let url = 'https://pokeapi.co/api/v2/pokemon/' + randNum;
    console.log(url);
    try {
        const data = await axios.get(url);
        let arr = new Array();
        for (let types of data.data.types) {
            arr.push(types.type.name)
        }
        return res.json({"name": data.data.name, "sprite": data.data.sprites.front_default, "types": arr});
    } catch(error) {
        console.log(error);
    }
}