const host = 'https://netflix-be-clone-gspx.vercel.app/api/';
class Api {
    getAllMovies() {
        return host + 'movie';
    }
    getAllMoviesWithFilter(filters) {
        let filter = filters.join('&');
        filter = '?' + filter;
        return host + 'movie' + filter;
    }
    getMovieById() {
        const urlParams = new URL(window.location.href).searchParams;
        const idMovie = urlParams.get('id');
        return host + 'movie/' + idMovie;
    }
    getMoviesByURL() {
        const url = window.location.href;
        let index = url.indexOf('?');
        let footApi = "";
        if (index > -1)
            footApi = url.slice(index, url.length);
        return host + 'movie' + footApi;
    }
    getAllGenders() {
        return host + 'gender';
    }
    getAllCountry() {
        return host + 'country';
    }
    getAllClassify() {
        return host + 'classify';
    }
    getAllPack() {
        return host + 'pack';
    }
    getPackInPayment() {
        const urlParams = new URL(window.location.href).searchParams;
        const _id = urlParams.get('pack');
        return host + 'pack/' + _id;
    }
    createBillInPayment() {
        return host + 'bill';
    }
    getBillById(data) {
        return host + 'bill/' + data;
    }
    getAccountByEmail() {
        const urlParams = new URL(window.location.href).searchParams;
        const account = urlParams.get('account');
        return host + 'user/' + account;
    }
    createAccount() {
        return host + 'user/create';
    }
    loggingAccount() {
        return host + 'user/login';
    }
    getAccountById() {
        let user = localStorage.getItem('loggerAccount');
        user = JSON.parse(user);
        return host + '/user/get/' + user._id;
    }
}
const api = new Api();
export { api };
