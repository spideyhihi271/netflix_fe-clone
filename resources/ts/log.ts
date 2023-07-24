
import { component } from "./_partial.js";
import { api } from "./_api.js";
import { handelEvent } from "./_interacr.js";

let start = async () => {
    try {
        const urlParams = new URL(window.location.href).searchParams;
        const account = urlParams.get('account');
        const checkAccount = await fetch(api.getAccountByEmail());
        const response = await checkAccount.json();
        let data;
        if(response.isExist){
            data = {
                title: "Chào mừng bạn quay lại! Tham gia Netflix thật đơn giản.",
                description1: "",
                description2: "Chỉ cần nhập mật khẩu và bạn sẽ được xem ngay lập tức.",
                email: account,
                typeAction: "login"
            }
        }else{
            data = {
                title: "Tạo mật khẩu để bắt đầu tư cách thành viên của bạn",
                description1: "Chỉ cần vài bước nữa là bạn sẽ hoàn tất!",
                description2: "Chúng tôi cũng chẳng thích thú gì với các loại giấy tờ.",
                email: account,
                typeAction: "signup"
            }
        }

        // Render
        component.formLogin(data);
        // HandelEvent
        handelEvent.handelLogging(data.typeAction);
        
        
        
        
    } catch (error) {
        
    }
}
start()