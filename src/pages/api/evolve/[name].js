import axios from "axios"

export default async function handler(req, res) {
    let str = req.query.name;
    let pokeurl = 'https://pokeapi.co/api/v2/pokemon-species/' + str;
    try {
        const data = await axios.get(pokeurl);
        let finalurl = data.data.evolution_chain.url;
        const data2 = await axios.get(finalurl)
        res.status(200);
        if(data2.data.is_baby) {
            return res.json({"evolution": data2.data.chain.evolves_to[0].species.name});
        } else {
            return res.json({"evolution": data2.data.chain.evolves_to[0].evolves_to[0].species.name});
        }
    } catch (error) {
        res.status(400);
        console.log(error);

    }
}