import React, { useState, useEffect } from 'react';
import axios from '../axios';
import SingleCard from './SingleCard';

const Row = (props) => {
    
    const [rowItems, setRowItems] = useState([]);
    const base_url = 'https://image.tmdb.org/t/p/original/';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(props.fetchURL);
                setRowItems(res.data.results);
            } catch (error) {
                console.error(error); 
            }
        };
    
        fetchData(); 
    }, [props.fetchURL]);
    

    return (
        <div className='row-of-cards-box relative'>
            <h2 className='row-heading'>{props.title}</h2>
            <div className='flex row-of-cards-container pl-10'>
                {rowItems.map(item => (
                    <SingleCard 
                        key={item.id}
                        id = {item.id} 
                        image={`${base_url}${item.backdrop_path}`} 
                        title={item.original_title ? item.original_title : item.name} // Corrected ternary operation syntax
                        desc={item.overview}
                        vote = {item.vote_average}
                        genere = {item.genre_ids} />
                ))}
            </div>
        </div>
    );
};

export default Row;
