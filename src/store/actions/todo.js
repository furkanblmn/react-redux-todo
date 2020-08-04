import { ADD_NOTE, REMOVE_NOTE } from "../types";

export const add = (note) => {
    return {
        type: ADD_NOTE,
        payload: note
    }
}

export const remove = (note_id) => {
    return {
        type: REMOVE_NOTE,
        payload: note_id
    }
}