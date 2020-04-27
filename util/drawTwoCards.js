export default async id => {
    return fetch(`https://deckofcardsapi.com/api/deck/` + id + `/draw/?count=2`)
    .then(res => res.json())
    .then(async ({cards, remaining, image}) => ({
        value: [(cards[0].value), " " ,(cards[0].suit), ", " ,(cards[1].value)," ",(cards[0].suit)],
        image1: cards[0].image,
        image2: cards[1].image,
        remaining
    }))
}