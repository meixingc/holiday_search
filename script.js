const countries = `https://holidayapi.com/v1/countries?pretty&key=d194ebca-ea3d-4c62-84f4-0898e8fc9701`
let flagIMG = document.querySelector('#flag');
const error = document.querySelector('.err')
const search = document.querySelector('#searchButton');
const random = document.querySelector('#random')
const list = document.querySelector('.list')
let cName  = document.querySelector('#cName')
let hide = document.querySelector('.hide')
const option = document.querySelector('.option')
const title = document.querySelector('#title')
let hideTrack = 0;
let tracker = 0;

async function searched(event) {
    event.preventDefault();
    error.innerText = '';
    flagIMG.src = ''
    cName.innerText = ''
    if (tracker == 1){
        document.querySelector('.list').innerText = ''
    }
    let userCode = document.querySelector('#country-code').value.toUpperCase();
    fetch(countries)
        .then(res => {
            return res.json()
        })
        .then(res => {
            for (i = 0; i < res.countries.length; i++){
                if (res.countries[i].code == userCode){
                    cName.innerText = res.countries[i].name
                }
            }
        })
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

async function randomed(event){
    event.preventDefault();
    error.innerText = '';
    if (tracker == 1){
        document.querySelector('.list').innerText = ''
    }
    fetch(countries)
        .then(res => {
            return res.json()
        })
        .then(res => {
            let countriesLength = res.countries.length
            let userIndex = Math.floor(Math.random() * countriesLength);
            let userCode = res.countries[userIndex].code
            fetch(countries)
                .then(res => {
                    return res.json()
                })
                .then(res => {
                    for (i = 0; i < res.countries.length; i++){
                        if (res.countries[i].code == userCode){
                            cName.innerText = res.countries[i].name
                        }
                    }
                 })
            flagIMG.style.display = 'flex';
            flagIMG.src = `https://www.countryflagicons.com/FLAT/64/${userCode}.png`
            let holidayCountryUrl = `https://holidayapi.com/v1/holidays?pretty&key=d194ebca-ea3d-4c62-84f4-0898e8fc9701&country=${userCode}&year=2022`;
            fetch(holidayCountryUrl)
                .then(res => {
                    return res.json()
                })
                .then(res => {
                    let holidayLength = res.holidays.length
                    let holidayIndex = Math.floor(Math.random() * holidayLength)
                    let holidayName = document.createElement('h4')
                    holidayName.className = 'hName'
                    holidayName.innerText = res.holidays[holidayIndex].name
                    list.append(holidayName);
                    let holidayDate = document.createElement('h5')
                    holidayDate.className = 'hDate'
                    holidayDate.innerHTML = res.holidays[holidayIndex].date
                    list.append('Date: ');
                    list.append(holidayDate);
                    let holidayObserved = document.createElement('h5')
                    holidayObserved.className = 'hObserved'
                    holidayObserved.innerHTML = res.holidays[holidayIndex].observed
                    list.append('Observed: ');
                    list.append(holidayObserved);
                    let holidayPub = document.createElement('h5')
                    holidayPub.className = 'hPub'
                    holidayPub.innerHTML = res.holidays[holidayIndex].public
                    list.append('Public: ');
                    list.append(holidayPub);
                })
            
    })
    tracker = 1;
}

function hidden () {
    if (hideTrack == 0) {
        option.style.transition = 'opacity 0.3s'
        option.style.opacity = '0'
        option.style.height = '0'
        title.style.marginBottom = '-20px';
        option.style.paddingBottom = '0px'
        document.querySelector('#random').style.display = 'none'
        document.querySelector('#country-code').style.display = 'none'
        document.querySelector('#holiday-name').style.display = 'none'
        document.querySelector('#date').style.display = 'none'
        document.querySelector('#searchButton').style.display = 'none'
        hideTrack = 1;
        hide.innerText = 'show'
        option.style.display = none;
    }
    else {
        title.style.margin = '40px';
        option.style.transition = ''
        option.style.transition = 'opacity 0.3s'
        option.style.opacity = ''
        option.style.height = ''
        option.style.paddingBottom = '40px'
        random.disabled = false;
        document.querySelector('#random').style.display = 'inline'
        document.querySelector('#country-code').style.display = 'inline'
        document.querySelector('#holiday-name').style.display = 'inline'
        document.querySelector('#date').style.display = 'inline'
        document.querySelector('#searchButton').style.display = 'inline'
        hideTrack = 0;
        hide.innerText = 'hide'
        option.style.display = inline;
    }
}

search.addEventListener('click', searched);
random.addEventListener('click', randomed)
hide.addEventListener('click', hidden)



