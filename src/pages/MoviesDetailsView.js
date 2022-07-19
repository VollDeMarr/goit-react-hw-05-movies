import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FetchById } from "components/Fetch's/Fetch's";


export default function MoviesDetailsView() {
    const { movieId } = useParams();
    // const {movie, setMovie} = useState(null)



    useEffect(() => {
      FetchById(movieId).then(r=>(console.log(r)))

      
    }, [movieId]);

}
