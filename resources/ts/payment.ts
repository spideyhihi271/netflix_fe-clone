import { component } from "./_partial.js";
import { api } from "./_api.js";
import { handelEvent } from "./_interacr.js";
import { utils } from "./_utils.js";

let start = async () => {
    try {
        // Check logger
        utils.checkLogger();

        let getPack = await fetch(api.getPackInPayment());        
        let pack = await getPack.json();
       
        // Render
        component.header();
        component.packInPayment(pack);

        // Handel
        handelEvent.onChangeFormPayment();
        
    } catch (error) {
        
    }
}
start()