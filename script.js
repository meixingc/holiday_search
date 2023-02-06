const holidayUrl = "https://holidayapi.com/v1/holidays?pretty&key=d194ebca-ea3d-4c62-84f4-0898e8fc9701&country=US&year=2022";
const flagUrl = "https://holidayapi.com/v1/countries?pretty&key=d194ebca-ea3d-4c62-84f4-0898e8fc9701";
let flagIMG = document.querySelector('#flag');
const error = document.querySelector('.err')
const search = document.querySelector('#searchButton');



function searched() {
    error.innerText = '';
    let userCode = document.querySelector('#country-code').value;
    if (userCode.length === 0){
        // error.style.display = 
        error.innerText = 'Error! Please enter a country code.';
    }
    else {
        flagIMG.style.opacity = '1';
        flagIMG.src = `https://www.countryflagicons.com/FLAT/64/${userCode}.png`
    }
}
    

search.addEventListener('click', searched);





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

// fetch(flagUrl)
// .then(res => {
//     return res.json()
// })
// .then(res => {
//     console.log('yay', res)
// })
// .catch(nope => {
//     console.log('ugh', nope)
// })

