import { ADD_NOTE, REMOVE_NOTE } from "../types";

const default_state = ["example todo"];

const reducer = (state = default_state, action) => {
    switch (action.type) {
        case ADD_NOTE:
            return [...state, action.payload];
        case REMOVE_NOTE:
            state.splice(action.payload, 1);
            return [...state]
        default:
            return state;
    }
}

export default reducer;