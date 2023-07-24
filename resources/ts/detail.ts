import { component } from "./_partial.js";
import { api } from "./_api.js";
import { handelEvent } from "./_interacr.js";
import { utils } from "./_utils.js";

let start = async () => {
    try {
        // Check log
        utils.checkLogger();

        const getMovieById = await fetch(api.getMovieById());
        const movie = await getMovieById.json();
        // Sau này sẽ filter theo key word
        const getAllMoviesSameGender = await fetch(api.getAllMoviesWithFilter([`gender=${movie.genders[0]._id}`]));
        const movies = await getAllMoviesSameGender.json();      
        // Render
        component.header();
        component.detailWatchBox(movie);
        component.detailInfoMovie(movie)
        component.movieBox([
            {
                data: movies,
                title: 'Những nội dung cùng thể loại',
                filter: `gender=${movie.genders[0]._id}`
            }
        ]);

        // Handle Event
        handelEvent.handlePlayVideo(movie);
    } catch (error) {
        
    }
}
start()