class Utils {
    clearLogger(){
        localStorage.clear()
    }
    checkLogger(){
        let logger = localStorage.getItem('loggerAccount');
        logger = JSON.parse(logger);
        if(logger === null) window.location.replace('./index.html');
    }
}

const utils = new Utils();

export { utils }
