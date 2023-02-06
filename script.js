
let flagIMG = document.querySelector('#flag');
const error = document.querySelector('.err')
const search = document.querySelector('#searchButton');

async function searched() {
    error.innerText = '';
    let userCode = document.querySelector('#country-code').value;
    let name = document.querySelector('#holiday-name').value;
    let date = document.querySelector('#date').value;
    if (userCode.length === 0){
        error.innerText = 'Error! Please enter a country code.';
    }
    else {
        flagIMG.style.display = 'flex';
        flagIMG.src = `https://www.countryflagicons.com/FLAT/64/${userCode}.png`
        document.querySelector('#country-code').value = "";
        
        if (name.length != 0){
            let holidayUrl = `https://holidayapi.com/v1/holidays?pretty&key=d194ebca-ea3d-4c62-84f4-0898e8fc9701&country=${userCode}&year=2022&search=${name}`;
            document.querySelector('#holiday-name').value = '';
        }
        else if (date.length != 0){
            let month = date.slice(0,2);
            let day = date.slice(3,5);
            let holidayUrl = `https://holidayapi.com/v1/holidays?pretty&key=d194ebca-ea3d-4c62-84f4-0898e8fc9701&country=${userCode}&year=2022&month=${month}&day=${day}`;
            document.querySelector('#date').value = '';
        }
        else {
            let holidayUrl = `https://holidayapi.com/v1/holidays?pretty&key=d194ebca-ea3d-4c62-84f4-0898e8fc9701&country=${userCode}&year=2022&month=${month}&day=${day}`
        }
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

