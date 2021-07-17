import React, { Component } from "react";

import MovieReviews from "./pages/MovieReviews";
import { Route, Switch } from "react-router";

import { Container } from "reactstrap";
import Home from "./pages/Home";
import Navi from "./components/Navi";
import { useEffect } from "react";
import { useState } from "react";
import MovieDetails from "./pages/MovieDetails";
import { withRouter} from 'react-router-dom';


const App = () => {
  const [movies,setMovies] = useState([]);
  const [searchValue,setSearchValue] = useState('star wars');
  const [upData,setUpData] = useState({});
  const getMoviesRequest = async (searchValue) => {
    const url = `http://omdbapi.com/?s=${searchValue}&apikey=263d22d8`
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    if(responseJson.Search)
    setMovies(responseJson.Search);
  }
  useEffect(()=>{
    getMoviesRequest(searchValue);
  },[searchValue])
  return (
    <div>
      <Container>
        <Navi searchValue={searchValue} setSearchValue={setSearchValue}/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movies"><MovieReviews movies={movies}  setUpData={setUpData}></MovieReviews></Route>
          <Route path="/moviedetails"><MovieDetails upData={upData} /></Route>
        </Switch>
      </Container>
    </div>
  );
};
export default withRouter(App);
