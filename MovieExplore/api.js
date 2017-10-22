let rootURL = 'http://api.themoviedb.org/3/';
//'https://api.themoviedb.org/3/search/movie?api_key=aa48129d026a4b12f9d9b14975098006&query=thor'
let api_key = 'aa48129d026a4b12f9d9b14975098006';
exports.search = function(movieName) {
    let url = `${rootURL}search/movie?api_key=${api_key}&query=${movieName}`;
    console.log(url);
    return fetch(url).then((resp) => resp.json().then((json) => {
        return json.results;
    }));
}

// exports.view = function(id){
//     let url = `${rootURL}`
// }