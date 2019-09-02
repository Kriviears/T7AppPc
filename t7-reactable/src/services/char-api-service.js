import config from '../config';

const CharApiService = {
    getCharacters(){
        return fetch(`${config.API_ENDPOINT}/characters`,{
        })
          .then(res =>
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    },

    getMoves(name){
        return fetch(`${config.API_ENDPOINT}/moves/${name}`,{

        })
          .then(res =>
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    }
}

export default CharApiService;