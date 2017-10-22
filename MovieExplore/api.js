let rootURL = 'http://api.themoviedb.org/3/';
//search: 'https://api.themoviedb.org/3/search/movie?api_key=[xxx]&query=[movie name]'
//detail: 'https://api.themoviedb.org/3/movie/[movie id]?api_key=[xxx]'

let api_key = 'xxx'; // your api_key
exports.search = function(movieName) {
    let url = `${rootURL}search/movie?api_key=${api_key}&query=${movieName}`;
    console.log(url);
    return fetch(url).then((resp) => resp.json().then((json) => {
        return json.results;
    }));
}

exports.detail = function(movieId){
    let url = `${rootURL}movie/${movieId}?api_key=${api_key}`;
    console.log(url);
    return fetch(url).then((resp) => resp.json());
}

exports.genres = function(movieId){
    let url = `${rootURL}movie/${movieId}?api_key=${api_key}`;
    return fetch(url).then((resp) => resp.json().then((json) => {
        let list = [];
        for (i = 0; i < json.genres.length; i++)
            list.push(json.genres[i].name);
        return list;
    }));
}
exports.imgRootURL = 'http://image.tmdb.org/t/p/w185/';
