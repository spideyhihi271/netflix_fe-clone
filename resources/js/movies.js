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
import { handelEvent } from "./_interacr.js";
import { utils } from "./_utils.js";
let start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        utils.checkLogger();
        let getMoviesByURL = fetch(api.getMoviesByURL());
        let getAllCountry = fetch(api.getAllCountry());
        let getAllGender = fetch(api.getAllGenders());
        let getAllClassify = fetch(api.getAllClassify());
        let [movies, countries, genders, classifies] = yield Promise.all([
            getMoviesByURL.then((response) => response.json()),
            getAllCountry.then((response) => response.json()),
            getAllGender.then((response) => response.json()),
            getAllClassify.then((response) => response.json()),
        ]);
        component.header();
        component.moviesUseForList(movies);
        component.selectList([
            {
                key: "gender",
                values: [
                    {
                        _id: '',
                        name: "Thể loại"
                    },
                    ...genders
                ]
            },
            {
                key: "country",
                values: [
                    {
                        _id: '',
                        name: "Quốc gia"
                    },
                    ...countries
                ]
            },
            {
                key: "public",
                values: [
                    {
                        _id: '',
                        name: "Năm phát hành"
                    },
                    {
                        _id: 2023,
                        name: 2023
                    },
                    {
                        _id: 2022,
                        name: 2022
                    },
                    {
                        _id: 2021,
                        name: 2021
                    },
                    {
                        _id: 2020,
                        name: 2020
                    },
                    {
                        _id: 2019,
                        name: 2019
                    },
                    {
                        _id: 2018,
                        name: 2018
                    },
                    {
                        _id: 2017,
                        name: 2017
                    },
                    {
                        _id: 2016,
                        name: 2016
                    },
                    {
                        _id: 2015,
                        name: 2015
                    },
                    {
                        _id: "Khác",
                        name: "Khác"
                    },
                ]
            },
            {
                key: "classify",
                values: [
                    {
                        _id: '',
                        name: "Phân loại nội dung"
                    },
                    ...classifies
                ]
            }
        ]);
        handelEvent.clickFilterBtn();
    }
    catch (error) {
    }
});
start();
