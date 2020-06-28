import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPhoto } from '../actions/actions';


const PhotoCard = ({ getPhoto, photo, isFetching, error }) => {
    useEffect(() => {
        getPhoto();
    }, [getPhoto]);
   // console.log(url);
    return (
        <div>
            {/*<img src={photo} alt="api call pic"/>*/}
            {isFetching && (<div>is loading</div>)}
            <div>
                {photo.map(photos => {
                    return (
                        <div key={photos.id}>
                            <img src={photos.download_url} style={{height:"200px", width:"200px"}} alt="api pics"/>
                            <p>Author:{photos.author}</p>
                        
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    console.log("photos from call", state.photo);
    return {
        photo: state.photo,
        author:state.author,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(
    mapStateToProps, {getPhoto})(PhotoCard);