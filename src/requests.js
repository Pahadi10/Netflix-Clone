const API_KEY = "988f159785003ace7692edecea7a55a2"
const YOUTUBE_DATA_API = "AIzaSyDj1ZIO6eXYMuvBhf_vEIzISNrWYpc7UCY"


const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with-genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with-genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with-genres=27`,
    fetchRomanticMovies: `/discover/movie?api_key=${API_KEY}&with-genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with-genres=99`,
}



export default requests;

// `https://api.themoviedb.org/3/discover/tv?api_key=988f159785003ace7692edecea7a55a2&with_networks=213`

// https://api.themoviedb.org/3/movie/${movieId}/videos