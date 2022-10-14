import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000/api/'
});

export function getMembers() {
    instance.get('/crewMembers')
    .then((res) => { this.members = res.data })
};

export function postMember() {
    let crewMember = {
        crewname: this.crewname
    }
    if (crewNameCheck(this.crewname)) {
        instance.post('/crewMembers', crewMember)
        .then(() => {
            this.getMembers()
            this.crewname = ''
        }) 
    }
}

function crewNameCheck(inputCrewName) {
    let crewNameRegExp = new RegExp('^[a-zA-Z0-9.-_]{1,}$')
    let testCrewName = crewNameRegExp.test(inputCrewName)
    if (testCrewName === false) {
      console.log('Nom incorrect')
    } else {
      return true
    }
}
