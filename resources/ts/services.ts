import { component } from "./_partial.js";
import { api } from "./_api.js";
import { handelEvent } from "./_interacr.js";
import { utils } from "./_utils.js";

let start = async () => {
    try {
        // Check logger
        utils.checkLogger();

        // Get Data
        const getAllPacks = await fetch(api.getAllPack());
        const packs = await getAllPacks.json();
            
        // Render
        component.header();
        component.packList(packs);

        // HandleEvent
        handelEvent.clickChoseService();
        handelEvent.clickNextToPayment();
    } catch (error) {
        
    }
}
start()