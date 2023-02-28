import axios from "axios";

function randNum(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum) + minimum);
}

export default async function handler(req, res) {
    let pokemon = req.body.pokemon;
    let caughtOrNot;
    try {
        const data = await axios.get("https://pokeapi.co/api/v2/pokemon/" + pokemon);
        let N = randNum(1, 255);
        let BALL = randNum(1, 255);
        let maxHP = data.data.stats[0].base_stat;
        let currentHP = randNum(1, maxHP);
        let f = (maxHP * 255 * 4) / (currentHP * BALL);
        if (f >= N) {
            caughtOrNot = true;
        } else {
            caughtOrNot = false;
        }
        res.status(200);
        return res.json({"caught": caughtOrNot});
    } catch (error) {
        res.status(400);
        console.log(error);
    }
}