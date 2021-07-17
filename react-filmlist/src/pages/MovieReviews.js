import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
//http://omdbapi.com/?s=pokemon&apikey=263d22d8

const MovieReviews = (props) => {
  let history = useHistory();
  const [currentYear, setYear] = useState(0);
  const [currentType, setType] = useState("");
  
  
   const sendMovie = (movie) => {
    props.setUpData(movie);
    console.log("movei",movie);
      history.push("/moviedetails");
     
   }
  return (
    <div>
      <div id="site-content">
        <header className="site-header">
          <div className="container">
            <a href="index.html" id="branding">
              <img src="images/logo.png" alt="" className="logo" />
              <div className="logo-copy">
                <h1 className="site-title">Badem Film</h1>
                <small className="site-description">Filmin adresi</small>
              </div>
            </a>

            <div className="mobile-navigation"></div>
          </div>
        </header>
        <main className="main-content">
          <div className="container">
            <div className="page">
              <div className="breadcrumbs">
                <a href="index.html">Home</a>
                <span>Movie Review</span>
              </div>

              <div className="filters">
                <select
                  onChange={(e) => {
                    const selectedType = e.target.value;
                    setType(selectedType);
                  }}
                >
                  
                   <option value="series">series</option>
                   <option value="movies">movies</option>
                  
                </select>
                <select
                  onChange={(e) => {
                    const selectedYear = e.target.value;
                    setYear(selectedYear);
                  }}
                >
                  {props.movies.map((movie) => (
                    <option value={movie.Year}>{movie.Year}</option>
                  ))}
                </select>
              </div>
              <div className="movie-list">
                {props.movies.map((movie) => {
                  if (movie.Year == currentYear && movie.Type == currentType)
                    return (
                      <div className="movie" key={movie.imdbID}>
                        <figure className="movie-poster">
                          <img src={movie.Poster} alt="#" />
                        </figure>
                        <div className="movie-title">
                          <a  onClick={()=>sendMovie(movie)}>{movie.Title}</a>
                        </div>
                        <p>{movie.Type}</p>
                        <p>{movie.Year}</p>
                        <p>{movie.imdbID}</p>
                        {console.log("not", movie)}
                      </div>
                    );
                  return <div></div>;
                })}
              </div>

              <div className="pagination">
                <a href="#" className="page-number prev">
                  <i className="fa fa-angle-left"></i>
                </a>
                <span className="page-number current">1</span>
                <a href="#" className="page-number">
                  2
                </a>
                <a href="#" className="page-number">
                  3
                </a>
                <a href="#" className="page-number">
                  4
                </a>
                <a href="#" className="page-number">
                  5
                </a>
                <a href="#" className="page-number next">
                  <i className="fa fa-angle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </main>
        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-2">
                <div className="widget">
                  <h3 className="widget-title">About Us</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quia tempore vitae mollitia nesciunt saepe cupiditate
                  </p>
                </div>
              </div>
              <div className="col-md-2">
                <div className="widget">
                  <h3 className="widget-title">Recent Review</h3>
                  <ul className="no-bullet">
                    <li>Lorem ipsum dolor</li>
                    <li>Sit amet consecture</li>
                    <li>Dolorem respequem</li>
                    <li>Invenore veritae</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2">
                <div className="widget">
                  <h3 className="widget-title">Help Center</h3>
                  <ul className="no-bullet">
                    <li>Lorem ipsum dolor</li>
                    <li>Sit amet consecture</li>
                    <li>Dolorem respequem</li>
                    <li>Invenore veritae</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2">
                <div className="widget">
                  <h3 className="widget-title">Join Us</h3>
                  <ul className="no-bullet">
                    <li>Lorem ipsum dolor</li>
                    <li>Sit amet consecture</li>
                    <li>Dolorem respequem</li>
                    <li>Invenore veritae</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2">
                <div className="widget">
                  <h3 className="widget-title">Social Media</h3>
                  <ul className="no-bullet">
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Google+</li>
                    <li>Pinterest</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2">
                <div className="widget">
                  <h3 className="widget-title">Newsletter</h3>
                  <form action="#" className="subscribe-form">
                    <input type="text" placeholder="Email Address" />
                  </form>
                </div>
              </div>
            </div>

            <div className="colophon">
              Copyright 2014 Company name, Designed by Themezy. All rights
              reserved
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
export default MovieReviews;
