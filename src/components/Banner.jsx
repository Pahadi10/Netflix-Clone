import React from "react";
import requests from "../requests";
import axios from "../axios";
import { useState, useEffect } from "react";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  const [movieId, setMovieId] = useState(null);
  // const [youtubeVideoId, setYoutubeVideoId] = useState(null);
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    const fetchNetflixOriginals = async () => {
      try {
        const response = await axios.get(requests.fetchComedyMovies);
        const randomIndex = Math.floor(
          Math.random() * response.data.results.length
        );
        const selectedMovie = response.data.results[randomIndex];
        // setMovie(selectedMovie);
        // if (selectedMovie) {
        //     fetchYouTubeVideo(selectedMovie.title || selectedMovie.name || selectedMovie.original_title || selectedMovie.original_name);
        // }
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODhmMTU5Nzg1MDAzYWNlNzY5MmVkZWNlYTdhNTVhMiIsInN1YiI6IjY1ZTA1ZTU2OWRlZTU4MDE3YzdjNDZhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7BHEQowZAdh9g5B5gCFIyMiSo57iycN95DASWHUjIq8",
          },
        };
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/movie/${selectedMovie.id}/videos?language=en-US`,
            options
          );
          const data = await response.json();
          // console.log(data);
          if (data.results.length === 0) {
            await fetchNetflixOriginals();
          } else {
            setMovieId(data.results[0].key);
            // console.log(data.id);
            setMovie(selectedMovie);
          }
        } catch (error) {
          console.error("Error fetching video:", error);
        }
      } catch (error) {
        console.error("Error fetching Netflix Originals:", error);
      }
    };

    fetchNetflixOriginals();
  }, []);

  // const fetchYouTubeVideo = async (movieTitle) => {
  //     try {
  //         const res = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(movieTitle)}&key=${"AIzaSyDj1ZIO6eXYMuvBhf_vEIzISNrWYpc7UCY"}&type=video`);
  //         const data = await res.json();
  //         if (data.items.length > 0) {
  //             setYoutubeVideoId(data.items[0].id.videoId);
  //         }
  //         console.log(youtubeVideoId)

  //     } catch (error) {
  //         console.log("Error fetching YouTube video:", error);
  //     }
  // };

  const truncateDescription = (str, n) => {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
  };

  const handlePlayVideo = () => {
    setPlayVideo(!playVideo);
  };

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        position: "relative", 
      }}
    >
      {playVideo && (
        <div className="youtube-video-container absolute" style={{ width: '100%', height: '800px', overflow: 'hidden' }}>
          <iframe
            title="YouTube Video"
            width="100%"
            height="600"
            src={`https://www.youtube.com/embed/${movieId}?autoplay=1&controls=0&autohide=1&showinfo=0&rel=0&modestbranding=1&vq=hd1080`}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowfullscreen = "allowfullscreen"

          ></iframe>
        </div>
      )}
  
      <div className="banner_contents" style={{ position: "relative", zIndex: "1" }}>
        <h1 className="banner_title">
          {movie?.title ||
            movie?.name ||
            movie?.original_title ||
            movie?.original_name}
        </h1>
        <div className="banner_buttons">
        {!playVideo? (<button className="banner_button" onClick={handlePlayVideo}>
            Play
          </button> ):(<button className="banner_button" onClick={handlePlayVideo}>
            Pause
          </button>)
          }
          
          <button className="banner_button">More Info</button>
        </div>
        <h1 className="banner_description">
          {truncateDescription(movie?.overview, 200)}
        </h1>
      </div>
      <div className="banner-fadeBottom" />
    </header>
  );
};

export default Banner;
