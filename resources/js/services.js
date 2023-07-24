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
        const getAllPacks = yield fetch(api.getAllPack());
        const packs = yield getAllPacks.json();
        component.header();
        component.packList(packs);
        handelEvent.clickChoseService();
        handelEvent.clickNextToPayment();
    }
    catch (error) {
    }
});
start();
