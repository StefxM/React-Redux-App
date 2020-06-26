import { FETCH_PHOTO_START, FETCH_PHOTO_SUCCESS, FETCH_PHOTO_FAIL } from '../actions/actions';

const initialState = {
    url: [],
    error: '',
    isFetching: false
};

export const reducer = ( state = initialState, action) => {
    //console.log('reducer', action);
    //console.log(state);
    switch (action.type) {
        case FETCH_PHOTO_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case FETCH_PHOTO_SUCCESS:
            return {
                ...state,
                url: action.payload.url,
                isFetching: false,
                error: ''
            };
        case FETCH_PHOTO_FAIL:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}

