const url = "https://holidayapi.com/v1/holidays?pretty&key=d194ebca-ea3d-4c62-84f4-0898e8fc9701&country=US&year=2022"

fetch(url)
    .then(res => {
        return res.json()
    })
    .then(res => {
        console.log('yay', res)
    })
    .catch(nope => {
        console.log('ugh', nope)
    })