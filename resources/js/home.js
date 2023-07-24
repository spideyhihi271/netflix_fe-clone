var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { component } from "./_partial.js";
import { api } from "./_api.js";
import { utils } from "./_utils.js";
let start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        utils.checkLogger();
        const getMovieMostView = fetch(api.getAllMoviesWithFilter(['views=asc']));
        const getTVSeries = fetch(api.getAllMoviesWithFilter(['type=1']));
        const getTheaterMovie = fetch(api.getAllMoviesWithFilter(['type=2']));
        const getPayToWatch = fetch(api.getAllMoviesWithFilter(['pay=true']));
        const getNonPayToWatch = fetch(api.getAllMoviesWithFilter(['pay=false']));
        let [mostView, tvSeries, theaterMovie, payMovies, nonPayMovies] = yield Promise.all([
            getMovieMostView.then((response) => response.json()),
            getTVSeries.then((response) => response.json()),
            getTheaterMovie.then((response) => response.json()),
            getPayToWatch.then((response) => response.json()),
            getNonPayToWatch.then((response) => response.json())
        ]);
        let listBox = [
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
        ];
        component.header();
        component.banner(mostView);
        component.movieBox(listBox);
    }
    catch (err) {
    }
});
start();
