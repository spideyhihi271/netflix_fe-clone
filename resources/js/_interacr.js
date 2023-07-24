var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { api } from "./_api.js";
import { component } from "./_partial.js";
class HandelEvent {
    clickFilterBtn() {
        let filterButton = document.querySelector('.list_type-filter');
        let movieListMassage = document.querySelector('.movies_massage');
        let selectorGender = document.querySelector('.list_type-item[name=gender]');
        let selectorCountry = document.querySelector('.list_type-item[name=country]');
        let selectorYear = document.querySelector('.list_type-item[name=public]');
        let selectorClassify = document.querySelector('.list_type-item[name=classify]');
        filterButton.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
            let selectors = [selectorGender, selectorCountry, selectorYear, selectorClassify];
            let valueSelectors = [];
            selectors.map(selector => {
                if (selector.value != "") {
                    let name = selector.getAttribute('name');
                    let value = selector.value;
                    valueSelectors.push(`${name}=${value}`);
                }
            });
            const url = window.location.href;
            let index = url.indexOf('?');
            if (index != -1) {
                let params = url.slice(index + 1, url.length);
                valueSelectors.unshift(params);
            }
            let getMovieByFilter = yield fetch(api.getAllMoviesWithFilter(valueSelectors));
            let data = yield getMovieByFilter.json();
            console.log(data);
            movieListMassage.classList.remove('active');
            if (data.length === 0) {
                component.moviesUseForList(data);
                movieListMassage.classList.add('active');
            }
            else
                component.moviesUseForList(data);
        }));
    }
    clickChoseService() {
        let allService = document.querySelectorAll('.purchase_ser-item');
        let serviceList = Array.from(allService);
        serviceList.map((serItem) => {
            serItem.addEventListener('click', (event) => {
                serviceList.map((service) => {
                    service.classList.remove('active');
                });
                serItem.classList.add('active');
            });
        });
    }
    clickNextToPayment() {
        let nextToPaymentBtn = document.querySelector('.purchase_next-btn');
        nextToPaymentBtn.addEventListener('click', () => {
            let serviceWasChoose = document.querySelector('.purchase_ser-item.active');
            let _id = serviceWasChoose.getAttribute('_id');
            window.location.assign(`./payment.html?pack=${_id}`);
        });
    }
    onChangeFormPayment() {
        let emailAddressInput = document.querySelector('.control_item-input[name=email]');
        let numberCardInput = document.querySelector('.control_item-input[name=cardNumber]');
        let experiDataInput = document.querySelector('.control_item-input[name=experi]');
        let cvvInput = document.querySelector('.control_item-input[name=cvv]');
        let paymentBut = document.querySelector('.payment_btn');
        let paymentMassage = document.querySelector('.payment_form-massage');
        let value;
        let activeErrorMassage = (target, massage) => {
            let parent = target.parentElement;
            let massageBox = parent.querySelector('.control_item-massage');
            massageBox.innerHTML = massage;
            parent.classList.add('active');
        };
        let unActiveErrorMassage = (target) => {
            let parent = target.parentElement;
            parent.classList.remove('active');
        };
        let checkDisableButton = () => {
            let controlList = document.querySelectorAll('.form_controls-item');
            let controls = Array.from(controlList);
            let isValid = true;
            controls.map((control) => {
                if (control.classList.contains('active') || control.classList.contains('init'))
                    isValid = false;
            });
            if (isValid === true)
                paymentBut.disabled = false;
            else
                paymentBut.disabled = true;
        };
        emailAddressInput.addEventListener('focusout', () => {
            emailAddressInput.parentElement.classList.remove('init');
            value = emailAddressInput.value;
            let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (value.length === 0)
                activeErrorMassage(emailAddressInput, 'Thông tin này không được để trống');
            else if (!emailRegex.test(value))
                activeErrorMassage(emailAddressInput, 'Sai định dạng email');
            else
                unActiveErrorMassage(emailAddressInput);
            checkDisableButton();
        });
        numberCardInput.addEventListener('focusout', () => {
            numberCardInput.parentElement.classList.remove('init');
            value = numberCardInput.value.replace(/\s/g, '');
            let sum = 0;
            if (value.length > 0) {
                sum = value.split('').reduce((sum, cur) => Number(sum) + Number(cur));
                console.log(sum);
            }
            let numberRegex = /^[0-9]+$/;
            if (value.length === 0)
                activeErrorMassage(numberCardInput, 'Thông tin này không được để trống');
            else if (!numberRegex.test(value))
                activeErrorMassage(numberCardInput, 'Sai định dạng số thẻ');
            else if (sum % 10 != 0)
                activeErrorMassage(numberCardInput, 'Số thẻ không hợp lệ');
            else if (value.length > 16)
                activeErrorMassage(numberCardInput, 'Số thẻ không hợp lệ');
            else
                unActiveErrorMassage(numberCardInput);
            checkDisableButton();
        });
        numberCardInput.addEventListener('keyup', () => {
            if (numberCardInput.value.length > 0) {
                value = numberCardInput.value.replace(/\s/g, '');
                let newValue = value.match(/.{1,4}/g);
                newValue = newValue.join(' ');
                numberCardInput.value = newValue;
            }
        });
        experiDataInput.addEventListener('focusout', () => {
            experiDataInput.parentElement.classList.remove('init');
            value = experiDataInput.value;
            let experiInCard = value.split(' / ');
            let monthInCard = Number(experiInCard[0]);
            let yearInCard = Number(experiInCard[1]) + 2000;
            let nowYear = new Date().getFullYear();
            if (monthInCard > 0 && monthInCard <= 12 && yearInCard >= nowYear) {
                unActiveErrorMassage(experiDataInput);
            }
            else {
                activeErrorMassage(experiDataInput, 'Thẻ không hợp lệ');
            }
            checkDisableButton();
        });
        experiDataInput.addEventListener('keyup', () => {
            if (experiDataInput.value.length > 0) {
                value = experiDataInput.value.replace(/ \/ /g, '');
                let newValue = value.match(/.{1,2}/g);
                newValue = newValue.join(' / ');
                experiDataInput.value = newValue;
            }
        });
        cvvInput.addEventListener('focusout', () => {
            cvvInput.parentElement.classList.remove('init');
            value = cvvInput.value;
            let numberRegex = /^[0-9]+$/;
            if (value.length === 0)
                activeErrorMassage(cvvInput, 'Thông tin này không được để trống');
            else if (!numberRegex.test(value))
                activeErrorMassage(cvvInput, 'CVV không hợp lệ');
            else if (value.length > 3)
                activeErrorMassage(cvvInput, 'CVV không hợp lệ');
            else
                unActiveErrorMassage(cvvInput);
            checkDisableButton();
        });
        paymentBut.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
            paymentBut.disabled = true;
            paymentMassage.innerHTML =
                `
                <i class="fa-regular fa-spinner-third fa-spin"></i>
                Đang xử lí thanh toán của bạn
            `;
            paymentMassage.classList.add('process');
            const urlParams = new URL(window.location.href).searchParams;
            const _idPack = urlParams.get('pack');
            let user = localStorage.getItem('loggerAccount');
            user = JSON.parse(user);
            console.log('This is user, ', user);
            let data = {
                user: user._id,
                pack: _idPack,
                card: numberCardInput.value.replace(/\s/g, '')
            };
            let option = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            };
            fetch(api.createBillInPayment(), option)
                .then((response) => response.json())
                .then((data) => {
                setTimeout(() => {
                    paymentMassage.innerHTML =
                        `
                            <i class="fa-sharp fa-light fa-circle-check"></i>
                            Thanh toán thành công. 
                        `;
                    paymentMassage.classList.remove('process');
                    paymentMassage.classList.add('success');
                }, 3000);
            })
                .catch((error) => {
                paymentMassage.innerHTML = 'Thanh toán thất bại. Vui lòng thử lại sau.';
                paymentMassage.classList.add('active');
            });
        }));
    }
    interactInLogin() {
        let controlContainer = document.querySelector('.login_body-control');
        let inputEmail = document.querySelector('.login_body-control > input');
        let massageContainer = document.querySelector('.login_body-massage');
        let nextButton = document.querySelector('.login_body-control > button');
        let value;
        let activeMassage = (massage) => {
            massageContainer.innerHTML = massage;
            massageContainer.classList.add('active');
            controlContainer.classList.add('active');
        };
        let unActiveMassage = () => {
            massageContainer.classList.remove('active');
            controlContainer.classList.remove('active');
        };
        inputEmail.addEventListener('focusout', () => {
            value = inputEmail.value;
            let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (value.length === 0)
                activeMassage('Thông tin này không được để trống');
            else if (!emailRegex.test(value))
                activeMassage('Sai định dạng email');
            else
                unActiveMassage();
        });
        nextButton.addEventListener('click', () => {
            value = inputEmail.value;
            let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (value.length === 0)
                activeMassage('Thông tin này không được để trống');
            else if (!emailRegex.test(value))
                activeMassage('Sai định dạng email');
            else {
                unActiveMassage();
                window.location.replace(`./log.html?account=${value}`);
            }
        });
    }
    handelLogging(type) {
        let emailAddressInput = document.querySelector('.form_control-input[name=email]');
        let passwordInput = document.querySelector('.form_control-input[name=password]');
        let actionButton = document.querySelector('.form_control-but');
        let logMassage = document.querySelector('.form_control-massage');
        let activeErrorMassage = (target, massage) => {
            let parent = target.parentElement;
            let massageBox = parent.querySelector('.form_control-error');
            massageBox.innerHTML = massage;
            parent.classList.add('active');
        };
        let unActiveErrorMassage = (target) => {
            let parent = target.parentElement;
            parent.classList.remove('active');
        };
        let value;
        emailAddressInput.addEventListener('focusout', () => {
            value = emailAddressInput.value;
            let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (value.length === 0)
                activeErrorMassage(emailAddressInput, 'Thông tin này không được để trống');
            else if (!emailRegex.test(value))
                activeErrorMassage(emailAddressInput, 'Sai định dạng email');
            else
                unActiveErrorMassage(emailAddressInput);
        });
        passwordInput.addEventListener('focusout', () => {
            value = passwordInput.value;
            switch (type) {
                case "signup":
                    if (value.length === 0)
                        activeErrorMassage(passwordInput, 'Thông tin này không được để trống');
                    else if (value.length < 8)
                        activeErrorMassage(passwordInput, 'Mật khẩu phải có ít nhất 8 ký tự.');
                    else
                        unActiveErrorMassage(emailAddressInput);
                    break;
                default:
                    if (value.length === 0)
                        activeErrorMassage(passwordInput, 'Thông tin này không được để trống');
                    else
                        unActiveErrorMassage(emailAddressInput);
                    break;
            }
        });
        actionButton.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
            value = emailAddressInput.value;
            let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (value.length === 0)
                activeErrorMassage(emailAddressInput, 'Thông tin này không được để trống');
            else if (!emailRegex.test(value))
                activeErrorMassage(emailAddressInput, 'Sai định dạng email');
            else
                unActiveErrorMassage(emailAddressInput);
            value = passwordInput.value;
            switch (type) {
                case "signup":
                    if (value.length === 0)
                        activeErrorMassage(passwordInput, 'Thông tin này không được để trống');
                    else if ((value.length < 8))
                        activeErrorMassage(passwordInput, 'Mật khẩu phải có ít nhất 8 ký tự.');
                    else
                        unActiveErrorMassage(emailAddressInput);
                    break;
                default:
                    if (value.length === 0)
                        activeErrorMassage(passwordInput, 'Thông tin này không được để trống');
                    else
                        unActiveErrorMassage(emailAddressInput);
                    break;
            }
            let isValid = true;
            if (emailAddressInput.parentElement.classList.contains('active')
                || passwordInput.parentElement.classList.contains('active')) {
                isValid = false;
            }
            if (isValid) {
                logMassage.innerHTML = `<i class="fa-regular fa-spinner-third fa-spin"></i> Đang xử lí `;
                logMassage.classList.add('process');
                let data = {
                    email: emailAddressInput.value,
                    password: passwordInput.value,
                    pack: ""
                };
                switch (type) {
                    case "signup":
                        let option = {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(data),
                        };
                        fetch(api.createAccount(), option)
                            .then((response) => response.json())
                            .then((data) => {
                            logMassage.innerHTML = `<i class="fa-light fa-circle-check"></i> Tạo tài khoản thành công. Vui lòng đăng nhập lại`;
                            logMassage.classList.remove('process');
                            logMassage.classList.add('success');
                            setTimeout(() => {
                                window.location.replace('./index.html');
                            }, 3000);
                        })
                            .catch((error) => { });
                        break;
                    default:
                        let logging = yield fetch(api.loggingAccount(), {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(data),
                        });
                        let response = yield logging.json();
                        console.log(response);
                        if (response === false) {
                            logMassage.innerHTML = `Sai tài khoản hoặc mật khẩu đăng nhập. Vui lòng kiểm tra lại `;
                        }
                        else {
                            localStorage.setItem('loggerAccount', JSON.stringify(response));
                            setTimeout(() => {
                                logMassage.innerHTML = `<i class="fa-light fa-circle-check"></i> Đăng nhập thành công. `;
                                logMassage.classList.remove('process');
                                logMassage.classList.add('success');
                                window.location.replace('./home.html');
                            }, 3000);
                        }
                        break;
                }
            }
        }));
    }
    handlePlayVideo(movie) {
        let watchBox = document.querySelector('.detail_container-banner');
        let btnPlay = document.querySelector('.container_banner-play');
        let massageBox = document.querySelector('.detail_massage');
        let massageContentBox = document.querySelector('.detail_massage-content');
        let cancelBtn1 = document.querySelector('.massage_but-cancle');
        let cancelBtn2 = document.querySelector('.massage-cancle-top');
        let activeMassageBox = (massage) => {
            massageContentBox.innerHTML = massage;
            massageBox.classList.add('active');
        };
        let unActiveMassageBox = () => {
            massageBox.classList.remove('active');
        };
        cancelBtn1.addEventListener('click', unActiveMassageBox);
        cancelBtn2.addEventListener('click', unActiveMassageBox);
        btnPlay.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
            if (movie.pay === false) {
                watchBox.classList.add('active');
            }
            else {
                let getUserById = yield fetch(api.getAccountById());
                let dataUser = yield getUserById.json();
                if (dataUser.pack === "")
                    activeMassageBox('Đây là nội dung trả phí. Bạn cần nâng cấp gói dịch vụ để xem nội dung này');
                else {
                    let getBillById = yield fetch(api.getBillById(dataUser.pack));
                    let dataBill = yield getBillById.json();
                    let endDate = new Date(dataBill.end);
                    let nowDate = new Date();
                    const oneDay = 24 * 60 * 60 * 1000;
                    const diffTime = endDate.getTime() - nowDate.getTime();
                    const diffDays = Math.round(diffTime / oneDay);
                    if (diffDays <= 0)
                        activeMassageBox('Gói cước của bạn đã hết hạn. Vui lòng gia hạn gói cước để tiếp tục xem nội dung này');
                    else {
                        unActiveMassageBox();
                        watchBox.classList.add('active');
                    }
                }
            }
        }));
    }
}
const handelEvent = new HandelEvent();
export { handelEvent };
