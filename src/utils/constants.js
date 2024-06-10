export const NTFX_LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const LGIN_BG = "https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

export const API_OPTION = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: process.env.REACT_APP_TMDB_KEY
    }
  };

  export const TMDB_NOWPLAYING_API = 'https://api.themoviedb.org/3/movie/now_playing?page=1';

  export const TMDB_POPULAR_API = "https://api.themoviedb.org/3/movie/popular?page=1";

  export const TMDB_TOPRATED_API = "https://api.themoviedb.org/3/movie/top_rated?page=1";

  export const TMDB_UPCOMING_API = "https://api.themoviedb.org/3/movie/upcoming?page=1";

  export const IMG_API_URL = "https://image.tmdb.org/t/p/w500/";

  export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;