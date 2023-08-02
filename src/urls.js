import { API_KEY } from "./constants/constants"
export const originals = `discover/tv?api_key=${API_KEY}&with_networks=213`
export const action = `discover/movie?api_key=${API_KEY}&with_genres=28`
export const comedy =`discover/movie?api_key=${API_KEY}&with_genres=35`
export const toprated=`movie/top_rated?api_key=${API_KEY}`
export const upcoming=`movie/upcoming?api_key=${API_KEY}`
export const nowplaying=`movie/now_playing?api_key=${API_KEY}`
export const horror=`discover/movie?api_key=${API_KEY}&with_genres=27`