const host = 'https://netflix-be-clone-gspx.vercel.app/api/';

class Api {
    public getAllMovies(): string {
        return host + 'movie';
    }
    public getAllMoviesWithFilter(filters): string{
        let filter = filters.join('&');
        filter = '?'+ filter;
        return host + 'movie' + filter;
    }
    public getMovieById(): string {
        const urlParams = new URL(window.location.href).searchParams;
        const idMovie = urlParams.get('id');
        return host + 'movie/' + idMovie;
    }
    public getMoviesByURL(): string {
        const url = window.location.href;
        let index = url.indexOf('?');
        let footApi = "";
        if(index > -1) footApi = url.slice(index, url.length);
        return host + 'movie' + footApi;
    }
    public getAllGenders(): string {
        return host + 'gender';
    }
    public getAllCountry(): string {
        return host + 'country';
    }
    public getAllClassify(): string {
        return host + 'classify';
    }
    public getAllPack(): string {
        return host + 'pack';
    }
    public getPackInPayment(): string {
        const urlParams = new URL(window.location.href).searchParams;
        const _id = urlParams.get('pack');
        return host + 'pack/' + _id;
    }
    public createBillInPayment(): string {
        return host + 'bill';
    }
    public getBillById(data): string {
        return host + 'bill/' + data;
    }
    public getAccountByEmail(): string {
        const urlParams = new URL(window.location.href).searchParams;
        const account = urlParams.get('account');
        return host + 'user/' + account;
    }
    public createAccount(): string {
        return host + 'user/create'
    }
    public loggingAccount(): string {
        return host + 'user/login'
    }
    public getAccountById(): string {
        let user: any = localStorage.getItem('loggerAccount');
        user = JSON.parse(user);
        return host + '/user/get/' + user._id; 
    }
}

const api = new Api();

export { api }
