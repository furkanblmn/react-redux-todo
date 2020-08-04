import { ADD_NOTE, REMOVE_NOTE } from "../types";

const default_state = {
    item: []
};

const reducer = (state = default_state, action) => {
    switch (action.type) {
        case ADD_NOTE:
            return {
                item: [...state.item, { text: action.payload }]
            };
        case REMOVE_NOTE:
            state.item.splice(action.payload, 1)
            return {
                item: [...state.item]
            }
        default:
            return state;
    }
}

export default reducer;