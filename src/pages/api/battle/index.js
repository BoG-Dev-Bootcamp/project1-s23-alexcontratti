import axios from "axios"

export default async function handler(req, res) {
    const pokemon1 = req.body.pokemon1;
    const pokemon2 = req.body.pokemon2;
    let url1 = 'https://pokeapi.co/api/v2/pokemon/' + pokemon1;
    let url2 = 'https://pokeapi.co/api/v2/pokemon/' + pokemon2;
    console.log("hi");
    try {
        const data = await axios.get(url1);
        const data2 = await axios.get(url2);
        res.status(200);
        if (data.data.stats[0].base_stat == data2.data.stats[0].base_stat) {
            return res.json({"winner": "Tie."});
        } else if (data.data.stats[0].base_stat < data2.data.stats[0].base_stat){
            return res.json({"winner": pokemon2});
        } else {
            return res.json({ "winner": pokemon1 });

        }
    } catch (error) {
        res.status(400);
        console.log(error);
    }
}