
export default async () => {
    return fetch("https://api.kanye.rest")
    .then(res => res.json())
    .then(async ({quote}) => ({
        quote
    }))
}
