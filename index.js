function renderMovies(movieArray) {
	const movieHtmlArray = movieArray.map(currentMovie => {
        return `
        <div class="card-2 col-md-4" style="width: 10rem;">
            <img src="${currentMovie.Poster}" class="card-img-top" alt="Poster for ${currentMovie.Title}">
            <div class="card-body">
                <p class="card-text">${currentMovie.Title}</p>
                <p class="card-text">${currentMovie.Year}</p>
                <button class="btn">Add!</button>
            </div>
        </div>`
    })

    const moviesContainer = document.querySelector('#movies-container');
    
    moviesContainer.innerHTML = movieHtmlArray.join('');
};

// code will execute after the document is loaded
document.addEventListener('DOMContentLoaded', function(){
    const searchForm = document.querySelector('#search-form');
    searchForm.addEventListener('submit', function(e){
        e.preventDefault();
        renderMovies(movieData);
    })
});

