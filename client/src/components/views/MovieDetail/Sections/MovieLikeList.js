import React from 'react';
import Axios from 'axios'
import { useHistory } from 'react-router-dom';
import '../MovieDetail.css';

function MovieLikeList(props) {

    let history = useHistory();

    const movieId = props.movieId;
    const userId = "kim";
    // const userId = props.userId;
    const movieTitle = props.movieInfo.title;
    const moviePost = props.movieInfo.poster_path;
    const movieRuntime = props.movieInfo.runtime;

    const onSubmit = () => {

        var frmData = new FormData(document.frmInsert);
        console.log(movieTitle)
        Axios.post('http://localhost:8080/movie/insertLikeList/', frmData)
            .then(
                response => {
                    alert("찜 완료");
                }
            )

    }


    return (
        <div>
            <form name="frmInsert" onSubmit={onSubmit}>
                <input type='hidden' name='movieId' value={movieId} />
                <input type='hidden' name='userId' value={userId} />
                <input type='hidden' name='movieTitle' value={movieTitle} />
                <input type='hidden' name='moviePost' value={moviePost} />
                <input type='hidden' name='movieRuntime' value={movieRuntime} />
                <input className='likeBtn' type='submit' value="좋아요" />
            </form>
        </div>
    );
}

export default MovieLikeList;