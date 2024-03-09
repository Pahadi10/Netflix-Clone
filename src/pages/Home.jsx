import React, { useState } from "react";
import HomeNav from "../components/HomeNav";
import Banner from "../components/Banner";
import Row from "../components/Row";
import requests from "../requests";

const rowSection = []

const Home = () => {
  return (
    <div> 
      <HomeNav />
      <Banner />
      <Row title="Trending" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Netflix Originals" fetchURL={requests.fetchNetflixOriginals}/>
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanticMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
};

export default Home;
