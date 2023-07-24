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
let start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const urlParams = new URL(window.location.href).searchParams;
        const account = urlParams.get('account');
        const checkAccount = yield fetch(api.getAccountByEmail());
        const response = yield checkAccount.json();
        let data;
        if (response.isExist) {
            data = {
                title: "Chào mừng bạn quay lại! Tham gia Netflix thật đơn giản.",
                description1: "",
                description2: "Chỉ cần nhập mật khẩu và bạn sẽ được xem ngay lập tức.",
                email: account,
                typeAction: "login"
            };
        }
        else {
            data = {
                title: "Tạo mật khẩu để bắt đầu tư cách thành viên của bạn",
                description1: "Chỉ cần vài bước nữa là bạn sẽ hoàn tất!",
                description2: "Chúng tôi cũng chẳng thích thú gì với các loại giấy tờ.",
                email: account,
                typeAction: "signup"
            };
        }
        component.formLogin(data);
        handelEvent.handelLogging(data.typeAction);
    }
    catch (error) {
    }
});
start();
