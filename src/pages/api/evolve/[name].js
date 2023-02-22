import axios from "axios"

export default async function handler(req, res) {
    let str = req.query.name;
    let pokeurl = 'https://pokeapi.co/api/v2/pokemon/' + str;
    console.log(url);
    try {
        const data = await axios.get(pokeurl);
        let finalurl = 'https://pokeapi.co/api/v2/evolution-chain/' + data.data.id;
        const data2 = await axios.get(finalurl)
        let pokemon = data2.data.chain.evolves_to[0].evolves_to;
        return res.json({ "evolution": pokemon });
    } catch (error) {
        console.log(error);
    }
}