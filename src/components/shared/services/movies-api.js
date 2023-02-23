import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: 'd91911ebb88751cf9e5c4b8fdf4412c9',
    }
})

export const searchMovies = async (query) => {
    const {data} = await instance.get('search/movie', {
        params: {
            query,
           
        }
    })
   
    return data;
}

export const getMostPopular = async () => {
    const { data } = await instance.get('movie/popular')
    
    return data;
}


export const getMovieById = async id => {
  const { data } = await instance.get(`movie/${id}`);
  return data;
}


export const getCastById = async id => {
    const { data } = await instance.get(`/movie/${id}/credits`);
    
  return data;
};

export const getReviewsById = async id => {
    const { data } = await instance.get(`/movie/${id}/reviews`);
    return data;
}
