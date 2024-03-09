import React, { useEffect, useState } from 'react';
import { FaRegPlayCircle } from "react-icons/fa";
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';

const SingleCard = (props) => {

    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [playVideoId, setPlayVideoId] = useState(null);
    const [video, setVideo] = useState(null);

    const videoId = props.id;
    const title = props.title;
    const image = props.image;
    const desc = props.desc;
    const vote = props.vote;
    const genere = props.genere;

    const idis = [28, 12, 16, 35, 80, 99, 18, 10751, 14, 36, 27, 10402, 9648, 10749, 878, 10770, 53, 10752, 37];
    const generes = ["Action", "Adventure", "Animation", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "History", "Horror", "Music", "Mystery", "Romance", "Science Fiction", "TV Movie", "Thriller", "War", "Western"];
    
    let outputGenere = [];
    for (let i = 0; i < idis.length; i++) {
        if (genere.includes(idis[i])) {
            outputGenere.push(generes[i]);
            outputGenere.push(', ');
        }
    }

    outputGenere.pop();

    const handleShowPopper = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
        setPlayVideoId(videoId);
    };

    const handleHidePopper = (event) => {
        if (!anchorEl.contains(event.relatedTarget)) {
            setOpen(false);
            setPlayVideoId(null);
        }
    };

    const playVideoHandler = () =>{
        fetchVideo()
    }

      
      const fetchVideo = async () =>{
        const options = {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODhmMTU5Nzg1MDAzYWNlNzY5MmVkZWNlYTdhNTVhMiIsInN1YiI6IjY1ZTA1ZTU2OWRlZTU4MDE3YzdjNDZhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7BHEQowZAdh9g5B5gCFIyMiSo57iycN95DASWHUjIq8",
            },
          };
          try{
            console.log(playVideoId)
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${playVideoId}/videos?language=en-US`,
                options
              );
              const data = await response.json();
                // console.log(data)
                setVideo(data.results[0].key)
          }
          catch(error){
            console.error("Error fetching video:", error);
          }
      }
        

    return (
        <div className='single-card'>

            <div>
                <div className='zoom-out relative' >
                    <img src={image} alt="thumbnail" onClick={handleShowPopper}/>
                </div>
                <Popper open={open} anchorEl={anchorEl} transition className='popper' onMouseLeave={handleHidePopper} >
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={600}>
                            <Box sx={{ p: 1, bgcolor: 'transparent' }}>
                                <Card className='zoom-in' sx={{ maxWidth: 300, height: 'auto', padding: 0, cursor: 'default' }}>
                                    <CardActionArea>
                                        <div className='flex justify-center items-center'>
                                        {!video ? (
                                            <div className='relative flex justify-center items-center'>
                                                <CardMedia
                                                    className='card-image'
                                                    component="img"
                                                    height="50"
                                                    image={image}
                                                    alt="thumbnail"
                                                />
                                                <FaRegPlayCircle className='play-button' onClick={playVideoHandler}/>
                                            </div>
                                            ) : (
                                                <iframe
                                                    title="video"
                                                    width="300"
                                                    height="190"
                                                    src={`https://www.youtube.com/embed/${video}?autoplay=1&controls=1&autohide=1&showinfo=0&rel=0&modestbranding=1&vq=hd1080`}
                                                    frameBorder="0"
                                                    // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                                                    allowFullScreen = "allowfullscreen"
                                                />
                                            )}
                                        </div>

                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {(desc?.length > 100) ? desc.substring(0, 100 - 1) + '...' : desc}
                                            </Typography>

                                            <Typography variant="body2" color="text.primary">
                                                Ratings: {vote}
                                            </Typography>

                                            <Typography variant="body2" color="text.primary">
                                                Genre: {outputGenere}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Box>
                        </Fade>
                    )}
                </Popper>
            </div>

        </div>
    );
};

export default SingleCard;
