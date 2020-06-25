import { FETCH_PHOTO_START, FETCH_PHOTO_SUCCESS, FETCH_PHOTO_FAIL } from '../actions/actions';

const initialState = {
    photo: [],
    error: '',
    isFetching: false
};

function reducer( state = initialState, action) {
    console.log('reducer', action);
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
                photo: action.payload,
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

export default reducer;