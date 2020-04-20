export default async id => {
    return fetch(`https://deckofcardsapi.com/api/deck/` + id + `/draw/?count=2`)
    .then(res => res.json())
    .then(async ({cards, remaining}) => ({
        value: [(cards[0].value), " " ,(cards[0].suit), ", " ,(cards[1].value)," ",(cards[0].suit)],
        remaining
    }))
}