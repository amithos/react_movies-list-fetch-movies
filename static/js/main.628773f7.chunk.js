(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],[,,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,,,function(e,t,a){e.exports=a(23)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),l=a(6),o=a.n(l),m=(a(18),a(11)),s=a(7),c=a(8),r=a(12),d=a(10),u=(a(19),a(20),a(21),function(e){var t=e.title,a=e.description,i=void 0===a?"":a,l=e.imgUrl,o=e.imdbUrl;return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-image"},n.a.createElement("figure",{className:"image is-4by3"},n.a.createElement("img",{src:l,alt:"Film logo"}))),n.a.createElement("div",{className:"card-content"},n.a.createElement("div",{className:"media"},n.a.createElement("div",{className:"media-left"},n.a.createElement("figure",{className:"image is-48x48"},n.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),n.a.createElement("div",{className:"media-content"},n.a.createElement("p",{className:"title is-8"},t))),n.a.createElement("div",{className:"content"},i,n.a.createElement("br",null),n.a.createElement("a",{href:o},"IMDB"))))}),h=function(e){var t=e.movies,a=void 0===t?[]:t;return n.a.createElement("div",{className:"movies"},a.map((function(e){return n.a.createElement(u,Object.assign({key:e.imdbId},e))})))},v=a(3),p=a(4),g=a.n(p);a(22);var b=function(e){var t=e.onHasMovie,a=e.onAddMovie,l=Object(i.useState)(""),o=Object(v.a)(l,2),m=o[0],s=o[1],c=Object(i.useState)(null),r=Object(v.a)(c,2),d=r[0],h=r[1],p=Object(i.useState)(!1),b=Object(v.a)(p,2),f=b[0],M=b[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("form",{className:"find-movie",onSubmit:function(e){e.preventDefault(),d&&!t(d.imdbId)&&(a(d),h(null))}},n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label",htmlFor:"movie-title"},"Movie title"),n.a.createElement("div",{className:"control"},n.a.createElement("input",{name:"movieTitle",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:g()({input:!0,"is-danger":f}),value:m,onChange:function(e){s(e.target.value)}})),f&&n.a.createElement("p",{className:"help is-danger"},"Can't find a movie with such a title")),n.a.createElement("div",{className:"field is-grouped"},n.a.createElement("div",{className:"control"},n.a.createElement("button",{type:"button",className:"button is-light",onClick:function(){var e;(e=m,fetch("".concat("https://www.omdbapi.com/?apikey=8d990354","&t=").concat(e)).then((function(e){return e.json()}))).then((function(e){if("False"===e.Response)return Promise.reject(h(null));var t=e.Title,a=e.Plot,i=e.Poster,n=e.imdbID,l={title:t,description:a,imgUrl:i,imdbId:n,imdbUrl:'"https://www.imdb.com/title/'.concat(n)};return h(l),s(""),Promise.resolve(M(!1))})).catch((function(){return M(!0)}))}},"Find a movie")),n.a.createElement("div",{className:"control"},n.a.createElement("button",{type:"submit",className:g()({button:!0,"is-primary":d})},"Add to the list")))),d&&n.a.createElement("div",{className:"container"},n.a.createElement("h2",{className:"title"},"Preview"),n.a.createElement(u,d)))},f=a(9),M=function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var i=arguments.length,n=new Array(i),l=0;l<i;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).state={movies:f},e.hasMovie=function(t){return e.state.movies.find((function(e){return e.imdbId===t}))},e.addMovie=function(t){e.setState((function(e){return{movies:[].concat(Object(m.a)(e.movies),[t])}}))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state.movies,t=this.hasMovie,a=this.addMovie;return n.a.createElement("div",{className:"page"},n.a.createElement("div",{className:"page-content"},n.a.createElement(h,{movies:e})),n.a.createElement("div",{className:"sidebar"},n.a.createElement(b,{onHasMovie:t,onAddMovie:a})))}}]),a}(i.Component);o.a.render(n.a.createElement(M,null),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.628773f7.chunk.js.map