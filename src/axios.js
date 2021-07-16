import axios from 'axios';

/*const config = {
    method: "GET",
    mode:"cors",

    url: "https://api.themoviedb.org/3/movie/76341",
  
    headers: {
      "Authorization" : "Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDIxNmViMWU3NzM0MzU4NmEzM2U5ZTQzNTc4NjFjYyIsInN1YiI6IjYwZDMyMTRhZTU0ZDVkMDAyZWJmOTIyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.296x5L-7fTw6N6_bxqFkmyYObnD60gFkVjP5RDPr8XI",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json; charset=utf-8",
    
    },
  };*/

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    //https: config,
});

export default instance;