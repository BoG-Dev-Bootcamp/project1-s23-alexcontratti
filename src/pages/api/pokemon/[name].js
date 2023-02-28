import axios from "axios"

export default async function handler(req, res) {
    let str = req.query.name;

    let url = 'https://pokeapi.co/api/v2/pokemon/' + str;
    console.log(url);
    try {
        const data = await axios.get(url);
        let arr = new Array();
        for(let types of data.data.types) {
            arr.push(types.type.name)
        }
        res.status(200);
        return res.json({ "pokemonName": data.data.name, "sprite": data.data.sprites.front_default, "types": arr });
    } catch (error) {
        res.status(400);
        console.log(error);
    }
}