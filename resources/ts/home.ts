import { component } from "./_partial.js";
import { api } from "./_api.js";
import { utils } from "./_utils.js";

let start: Function = async () => {
    try {

        // Check log
        utils.checkLogger()
        const getMovieMostView =  fetch(api.getAllMoviesWithFilter(['views=asc']));
        const getTVSeries =  fetch(api.getAllMoviesWithFilter(['type=1']));
        const getTheaterMovie =  fetch(api.getAllMoviesWithFilter(['type=2']));
        const getPayToWatch =  fetch(api.getAllMoviesWithFilter(['pay=true']));
        const getNonPayToWatch =  fetch(api.getAllMoviesWithFilter(['pay=false']));
        let [ mostView, tvSeries, theaterMovie, payMovies, nonPayMovies] 
            = await Promise.all(
                [
                    getMovieMostView.then((response) => response.json()),
                    getTVSeries.then((response) => response.json()),
                    getTheaterMovie.then((response) => response.json()),
                    getPayToWatch.then((response) => response.json()),
                    getNonPayToWatch.then((response) => response.json())
                ]
            )
       
        interface infoBoxMovie{
            data: any,
            title: string,
            filter: string
        }
        let listBox: Array<infoBoxMovie> 
            = [
                {
                    data: tvSeries,
                    title: 'TV Series hay nhất!',
                    filter: 'type=1'
                },
                {
                    data: theaterMovie,
                    title: 'Phim chiếu rạp hay nhất!',
                    filter: 'type=2'
                },
                {
                    data: payMovies,
                    title: 'Nội dung trả phí hay nhất!',
                    filter: 'pay=true'
                },
                {
                    data: nonPayMovies,
                    title: 'Nội dung miễn phí hay nhất!',
                    filter: 'pay=false'
                },
            ]
        // Render
        component.header();
        component.banner( mostView);
        component.movieBox(listBox)
    } catch (err) {
    
    }
}
start()


