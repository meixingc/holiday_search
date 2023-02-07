
let flagIMG = document.querySelector('#flag');
const error = document.querySelector('.err')
const search = document.querySelector('#searchButton');
const list = document.querySelector('.list')
let tracker = 0;

async function searched(event) {
    event.preventDefault();
    error.innerText = '';
    if (tracker == 1){
        document.querySelector('.list').innerText = ''
    }
    let userCode = document.querySelector('#country-code').value.toUpperCase();
    let name = document.querySelector('#holiday-name').value;
    let date = document.querySelector('#date').value;
    document.querySelector('#country-code').value = "";
    document.querySelector('#holiday-name').value = '';
    document.querySelector('#date').value = '';
    if (userCode.length === 0){
        error.innerText = 'Error! Please enter a country code.';
    }
    else {
        if (name.length === 0 && date.length === 0){
            flagIMG.style.display = 'flex';
            flagIMG.src = `https://www.countryflagicons.com/FLAT/64/${userCode}.png`
            let holidayUrl = `https://holidayapi.com/v1/holidays?pretty&key=d194ebca-ea3d-4c62-84f4-0898e8fc9701&country=${userCode}&year=2022`;
            fetch(holidayUrl)
                .then(res => {
                    return res.json()
                })
                .then(res => {
                    for (i = 0; i < res.holidays.length; i++ ){
                    let holidayName = document.createElement('h4')
                    holidayName.className = 'hName'
                    holidayName.innerText = res.holidays[i].name
                    list.append(holidayName);
                    let holidayDate = document.createElement('h5')
                    holidayDate.className = 'hDate'
                    holidayDate.innerHTML = res.holidays[i].date
                    list.append('Date: ');
                    list.append(holidayDate);
                    let holidayObserved = document.createElement('h5')
                    holidayObserved.className = 'hObserved'
                    holidayObserved.innerHTML = res.holidays[i].observed
                    list.append('Observed: ');
                    list.append(holidayObserved);
                    let holidayPub = document.createElement('h5')
                    holidayPub.className = 'hPub'
                    holidayPub.innerHTML = res.holidays[i].public
                    list.append('Public: ');
                    list.append(holidayPub);
                    }
                })
                .catch(err => {
                    console.log('nope', err)
            })
        }
        else if (name.length != 0){
            flagIMG.style.display = 'flex';
            flagIMG.src = `https://www.countryflagicons.com/FLAT/64/${userCode}.png`
            let holidayUrl = `https://holidayapi.com/v1/holidays?pretty&key=d194ebca-ea3d-4c62-84f4-0898e8fc9701&country=${userCode}&year=2022&search=${name}`;
            fetch(holidayUrl)
                .then(res => {
                    return res.json()
                })
                .then(res => {
                    for (i = 0; i < res.holidays.length; i++ ){
                    let holidayName = document.createElement('h4')
                    holidayName.className = 'hName'
                    holidayName.innerText = res.holidays[i].name
                    list.append(holidayName);
                    let holidayDate = document.createElement('h5')
                    holidayDate.className = 'hDate'
                    holidayDate.innerHTML = res.holidays[i].date
                    list.append('Date: ');
                    list.append(holidayDate);
                    let holidayObserved = document.createElement('h5')
                    holidayObserved.className = 'hObserved'
                    holidayObserved.innerHTML = res.holidays[i].observed
                    list.append('Observed: ');
                    list.append(holidayObserved);
                    let holidayPub = document.createElement('h5')
                    holidayPub.className = 'hPub'
                    holidayPub.innerHTML = res.holidays[i].public
                    list.append('Public: ');
                    list.append(holidayPub);
                    }
                })
                .catch(err => {
                    console.log('nope', err)
            })
        }
        else if (date.length != 0){
            flagIMG.style.display = 'flex';
            flagIMG.src = `https://www.countryflagicons.com/FLAT/64/${userCode}.png`
            let month = date.slice(0,2);
            let day = date.slice(3,5);
            let holidayUrl = `https://holidayapi.com/v1/holidays?pretty&key=d194ebca-ea3d-4c62-84f4-0898e8fc9701&country=${userCode}&year=2022&month=${month}&day=${day}`;
            fetch(holidayUrl)
                .then(res => {
                    return res.json()
                })
                .then(res => {
                    for (i = 0; i < res.holidays.length; i++ ){
                    let holidayName = document.createElement('h4')
                    holidayName.className = 'hName'
                    holidayName.innerText = res.holidays[i].name
                    list.append(holidayName);
                    let holidayDate = document.createElement('h5')
                    holidayDate.className = 'hDate'
                    holidayDate.innerHTML = res.holidays[i].date
                    list.append('Date: ');
                    list.append(holidayDate);
                    let holidayObserved = document.createElement('h5')
                    holidayObserved.className = 'hObserved'
                    holidayObserved.innerHTML = res.holidays[i].observed
                    list.append('Observed: ');
                    list.append(holidayObserved);
                    let holidayPub = document.createElement('h5')
                    holidayPub.className = 'hPub'
                    holidayPub.innerHTML = res.holidays[i].public
                    list.append('Public: ');
                    list.append(holidayPub);
                    }
                })
                .catch(err => {
                    console.log('nope', err)
            })
        }
        tracker = 1;
    }
    }

search.addEventListener('click', searched);



