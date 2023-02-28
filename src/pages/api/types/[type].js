import axios from "axios"

export default async function handler(req, res) {
    let str = req.query.type;
    let url = 'https://pokeapi.co/api/v2/type/' + str;
    console.log(url);
    try {
        const data = await axios.get(url);
        let arr = new Array();
        for(let pokemon of data.data.pokemon) {
            arr.push(pokemon.pokemon.name);
        }
        res.status(200);
        return res.json({ "pokemon": arr });
    } catch (error) {
        res.status(400);
        console.log(error);
    }
}