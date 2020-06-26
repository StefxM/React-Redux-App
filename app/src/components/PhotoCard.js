import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPhoto } from '../actions/actions';


const PhotoCard = ({ getPhoto, url, isFetching, error }) => {
    useEffect(() => {
        getPhoto();
    }, [getPhoto]);
    console.log(url);
    return (
        <div>
            <img src={url} alt="api call pic"/>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        photo: state.url,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(
    mapStateToProps, {getPhoto})(PhotoCard);