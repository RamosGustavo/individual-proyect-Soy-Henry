const initialState = {
    characters : []
}

function rootReducer(state = initialState, actions) {
    switch (actions.type) {
        case 'GET_CHARACTERS':
            return {
                ...state,
                characters: actions.payload
            }
            default: return state;
    }
}

export default rootReducer;