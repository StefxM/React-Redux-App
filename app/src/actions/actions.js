import axios from "axios"
// API URL "https://picsum.photos/v2/list"

export const FETCH_PHOTO_START = 'FETCH_PHOTO_START';
export const FETCH_PHOTO_SUCCESS = 'FETCH_PHOTO_SUCCESS';
export const FETCH_PHOTO_FAIL = 'FETCH_PHOTO_FAIL';

export const getPhoto = () => dispatch => {
    dispatch({ type: FETCH_PHOTO_START });
    axios
        .get("https://picsum.photos/v2/list")
        .then(res =>
            dispatch({ type: FETCH_PHOTO_SUCCESS, payload: res.data.results}))
            .catch(err => dispatch({ type: FETCH_PHOTO_FAIL, payload: err}));
        
}