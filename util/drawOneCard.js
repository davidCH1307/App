export default async id => {
    return fetch(`https://deckofcardsapi.com/api/deck/` + id + `/draw/?count=2`)
    .then(res => res.json())
    .then(async ({cards, remaining, image}) => ({
        value: cards[0].value,
        image1: cards[0].image,
        remaining
    }))
}