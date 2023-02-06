const holidayUrl = "https://holidayapi.com/v1/holidays?pretty&key=d194ebca-ea3d-4c62-84f4-0898e8fc9701&country=US&year=2022";
const flagUrl = "https://holidayapi.com/v1/countries?pretty&key=d194ebca-ea3d-4c62-84f4-0898e8fc9701";
let userInput = document.querySelector('#country-code').values;
let flagIMG = document.querySelector('#flag');
let code = document.querySelector('#country-code');
// async function getData (event) {
//     event.preventDefault();


// fetch(holidayUrl)
//     .then(res => {
//         return res.json()
//     })
//     .then(res => {
//         console.log('yay', res)
//     })
//     .catch(nope => {
//         console.log('ugh', nope)
//     })
// }
flagIMG.src = `https://www.countryflagicons.com/FLAT/64/${code}.png`
fetch(flagUrl)
.then(res => {
    return res.json()
})
.then(res => {
    console.log('yay', res)
})
.catch(nope => {
    console.log('ugh', nope)
})