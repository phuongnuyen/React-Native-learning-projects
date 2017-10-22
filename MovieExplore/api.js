let rootURL = 'http://theapache64.xyz:8080/movie_db/';

exports.search = function(q) {
    let url = `${rootURL}search?keyword=${q}`;
    console.log(url);
    return fetch(url).then((resp) => resp.json().then((json) => {
        return json.Search;
    }));
}

// exports.view = function(id){
//     let url = `${rootURL}`
// }