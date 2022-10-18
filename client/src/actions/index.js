import axios from 'axios';

export function getCharacters(){
    return async function(dispatch) {
        let json = await axios.get("http://localhost:3001/characters");
        return dispatch({
            type: 'GET_CHARACTERS',
            payload: json.data
        })
    }
}