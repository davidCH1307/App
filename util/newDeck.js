export default async () => {
    return fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then(res => res.json())
    .then(async ({deck_id, remaining}) => ({
        deck_id,
        remaining
    }))
}