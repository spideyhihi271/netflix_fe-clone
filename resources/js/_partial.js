import Swiper from "../../node_modules/swiper/swiper-bundle.esm.browser.min.js";
let headerPcContainer = document.querySelector('header');
let headerMobileContainer = document.querySelector('.header_mobile');
let bannerContainer = document.querySelector('.main_banner');
let movieBox = document.querySelector('.movies_box');
let moviesForListContainer = document.querySelector('.movies_list');
let selectsFilterContainer = document.querySelector('.products_list-type');
let packListContainer = document.querySelector('.purchase_ser-list');
let packInPayment = document.querySelector('.payment_credit-card');
let logFormContainer = document.querySelector('.log_form-login');
let watchBox = document.querySelector('.detail_container-banner');
let infoMovieDetail = document.querySelector('.detail_container_info');
class Render {
    header() {
        let headerContentPc = `
            <div class="header_logo">
                <a href="./home.html" class="header_logo-link">
                    <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="">
                </a>
            </div>
            <div class="header_navigator">
                <ul class="navigator_list">
                    <li class="navigator-item">
                        <a href="./home.html" class="nav_item-link">Trang chủ</a>
                    </li>
                    <li class="navigator-item">
                        <a href="./movies.html?type=1" class="nav_item-link">Phim chiếu rạp</a>
                    </li>
                    <li class="navigator-item">
                        <a href="./movies.html?type=2" class="nav_item-link">TV Series</a>
                    </li>
                    <li class="navigator-item">
                        <a href="./purchase.html" class="nav_item-link">Gói dịch vụ</a>
                    </li>
                    <li class="navigator-item">
                        <a href="" class="nav_item-link">Nhiều hơn</a>
                    </li>
                </ul>
            </div>
            <div class="header_utils">
                <div class="header_utils-search">
                    <div class="utils_search-container">
                        <button><i class="fa-regular fa-magnifying-glass"></i></button>
                        <input type="text" placeholder="Tìm phim của bạn">
                    </div>
                </div>
                <div class="header_utils-anothers">
                    <div class="header_utils-side">
                        <button>
                            <i class="fa-solid fa-messages"></i>
                        </button>
                    </div>
                    <div class="header_utils-side">
                        <button>
                            <i class="fa-solid fa-bell"></i>
                        </button>
                    </div>
                    <div class="header_utils-users">
                        <a href="" class="utils_users-container">
                            <div class="utils_users-img">
                                <img src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg" alt="">
                            </div>
                            <p class="utils_user-name"> Nguyên</p>
                        </a>
                    </div>
                </div>
            </div>
        `;
        let headerContentMobile = `
            <div class="header_mobile-nav">
                <div class="header_mobile-item">
                    <a href="./movies.html" class="header_mobile-link">
                        <p class="mobile_link-icon">
                            <i class="fa-thin fa-house"></i>
                        </p>
                        <p class="mobile_link-title">
                            Trang chủ
                        </p>
                    </a>
                </div>
                <div class="header_mobile-item">
                    <a href="./movies.html?type=1" class="header_mobile-link">
                        <p class="mobile_link-icon">
                            <i class="fa-light fa-popcorn"></i>
                        </p>
                        <p class="mobile_link-title">
                            Phim chiếu rạp
                        </p>
                    </a>
                </div>
                <div class="header_mobile-item">
                    <a href="./movies.html?type=2" class="header_mobile-link">
                        <p class="mobile_link-icon">
                            <i class="fa-light fa-tv-retro"></i>
                        </p>
                        <p class="mobile_link-title">
                            TV Series
                        </p>
                    </a>
                </div>
                <div class="header_mobile-item">
                    <a href="./service.html" class="header_mobile-link">
                        <p class="mobile_link-icon">
                            <i class="fa-thin fa-ticket"></i>
                        </p>
                        <p class="mobile_link-title">
                            Gói dịch vụ
                        </p>
                    </a>
                </div>
                <div class="header_mobile-item">
                    <a href="" class="header_mobile-link">
                        <p class="mobile_link-icon">
                            <i class="fa-thin fa-user"></i>
                        </p>
                        <p class="mobile_link-title">
                            Users
                        </p>
                    </a>
                </div>
            </div>
        `;
        headerPcContainer.innerHTML = headerContentPc;
        headerMobileContainer.innerHTML = headerContentMobile;
    }
    gender(genders) {
        let content = '';
        genders.map((gender, idx) => {
            content += `${gender.name} ${idx === genders.length - 1 ? '' : ','} `;
        });
        return content;
    }
    cast(actors) {
        let content = '';
        actors.map(actor => {
            content += `
                <div class="detail_cast-item">
                    <div class="cast_item-img">
                    <img src="${actor.avt}"alt="">
                    <div class="cast_item-filter"></div>
                    </div>
                    <div class="cast_item-name">${actor.name}</div>
                </div>
            `;
        });
        return content;
    }
    bannerSlider(pictures) {
        let content = '';
        pictures.map(pic => {
            content += `
                <div class="swiper-slide slide_in-screen">
                    <img src="${pic}" alt="">
                </div>
            `;
        });
        return content;
    }
    banner(data) {
        let content = '';
        data.map(movie => {
            content += `
                <div class="swiper-slide">
                    <div class="detail_banner">
                        <div class="detail_banner-bg">
                            <img src="${movie.banner}"  alt="">
                        </div>
                        <div class="detail_banner-filter"></div>
                        <div class="detail_banner_info">
                            <p class="detail_banner-name">${movie.name}</p>
                            <div class="detail_banner-review">
                                <p class="detail_review-mark">
                                    <i class="fa-sharp fa-solid fa-star"></i>
                                    <span>${movie.rating}</span>
                                    /10
                                </p>
                                <p class="detail_review-total">
                                    <span>${movie.lenght} m</span>
                                    |
                                    <span> ${this.gender(movie.genders)}</span>
                                    |
                                    <span>${movie.public}</span>
                                </p>
                            </div>
                            <p class="detail_banner-description">${movie.description}</p>
                            <a href="/detail.html?id=${movie._id}" class="detail_btn-box">
                                <button class="detail_btn-play">
                                    <i class="fa-sharp fa-solid fa-play"></i>
                                </button>
                                <div class="detail_btn-title">Watch now</div>
                            </a>
                        </div>
                        <div class="detail_banner-another">
                            <div class="detail_banner-poster">
                            <p class="detail_poster-title">Poster</p>
                            <div class="detail_poster-container">
                                <div class="swiper mySwiper1">
                                    <div class="swiper-wrapper">
                                       ${this.bannerSlider(movie.pictures)}
                                    </div>
                                </div>
                            </div>
                                <div class="detail_banner-cast">
                                    <div class="detail_cast-title">Actors</div>
                                    <div class="detail_cast-list">
                                        ${this.cast(movie.actors)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
        content = content;
        bannerContainer.innerHTML = content;
        const progressCircle = document.querySelector(".autoplay-progress svg");
        const progressContent = document.querySelector(".autoplay-progress span");
        new Swiper(".mySwiper", {
            spaceBetween: 30,
            centeredSlides: true,
            loop: true,
            autoplay: {
                delay: 15000,
                disableOnInteraction: false
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            on: {
                autoplayTimeLeft(s, time, progress) {
                    progressCircle.style.setProperty("--progress", (1 - progress));
                    progressContent.textContent = `${Math.ceil(time / 1000)}s`;
                }
            }
        });
        new Swiper(".mySwiper1", {
            slidesPerView: "auto",
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            spaceBetween: 8,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }
    movieItem(data) {
        let content = '';
        data.map(movie => {
            content +=
                `<div class="swiper-slide slide_movies">
                <a href="./detail.html?id=${movie._id}" class="slider_movie-link">
                    <img src="${movie.banner}" alt="">
                </a>
            </div>`;
        });
        return content;
    }
    movieList({ data, title, filter }) {
        let content = '';
        content =
            `
            <div class="movies_container">
                <div class="movies_header">
                    <p class="movies_header-title">${title}</p>
                    <a href='./movies.html?${filter}' class="movies_header-link">
                        VIEW ALL
                        <i class="fa-regular fa-chevron-right"></i>
                    </a>
                </div>
                <ul class="movies_link-list">
                    <li class="movies_link-item">
                        <a href="./movies.html?${filter}&view=asc">#NỔI BẬT</a>
                    </li>
                    <li class="movies_link-item">
                        <a href="./movies.html?${filter}&rating=asc">#MỚI RA MẮT</a>
                    </li>
                    <li class="movies_link-item">
                        <a href="./movies.html?${filter}&rating=1">#TOP ĐÁNH GIÁ</a>
                    </li>
                    <li class="movies_link-item">
                        <a href="./movies.html?${filter}&view=asc">#ĐƯỢC XEM NHIỀU</a>
                    </li>
                </ul>
                <div class="movies_list">
                    <div class="swiper mySwiper2">
                        <div class="swiper-wrapper">
                           ${this.movieItem(data)}
                        </div>
                    </div>
                </div>
            </div>
        `;
        return content;
    }
    moviesUseForList(data) {
        let content = '';
        data.map(movie => {
            content +=
                `
                <div class="col l-2 m-3 c-6">
                    <a href="./detail.html?id=${movie._id}" class="movies_item">
                        <div class="movies_item-image">
                            <img src="${movie.poster}" alt="">
                        </div>
                        <div class="movies_item-info">
                            <div class="item-info-name">${movie.name}</div>
                            <p class="item_info-gender"> ${movie.lenght} min | ${movie.public}</p>
                        </div>
                    </a>
                </div>
            `;
        });
        moviesForListContainer.innerHTML = content;
    }
    movieBox(data) {
        let content = '';
        data.map(item => {
            content += this.movieList(item);
        });
        movieBox.innerHTML = content;
        var swiper2 = new Swiper(".mySwiper2", {
            slidesPerView: "auto",
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            spaceBetween: 8,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }
    optionItem(values) {
        let content = '';
        values.map(value => {
            content += `<option value="${value._id}">${value.name}</option> `;
        });
        return content;
    }
    selectItem(select) {
        let content = `
            <select class="list_type-item" name="${select.key}" id="">
               ${this.optionItem(select.values)}        
            </select>
        `;
        return content;
    }
    selectList(data) {
        let content = '';
        data.map(selector => {
            content += this.selectItem(selector);
        });
        content += `<button  class="list_type-filter">Lọc</button>`;
        selectsFilterContainer.innerHTML = content;
    }
    deviceItem(data) {
        let devices = [
            {
                name: 'Mobile',
                icon: 'fa-light fa-mobile',
            },
            {
                name: 'Tablet',
                icon: 'fa-light fa-tablet',
            },
            {
                name: 'Laptop',
                icon: 'fa-light fa-laptop',
            },
            {
                name: 'TV',
                icon: 'fa-light fa-tv',
            }
        ];
        let content = '';
        data.map(idx => {
            content +=
                `
                <div class="devies_item">
                    <i class="${devices[idx].icon}"></i>
                    <p>${devices[idx].name}</p>
                </div>
            `;
        });
        return content;
    }
    packItem(data, isActive) {
        let content = `
            <div class="purchase_ser-item ${isActive === true ? 'active' : ""}" _id="${data._id}">
                <div class="ser_item-title">
                    <div class="item_title-border">
                        ${data.name}
                    </div>
                </div>
                <div class="ser_item-info">${data.price.toLocaleString('vi')} VND</div>
                <div class="ser_item-info">${data.quality}</div>
                <div class="ser_item-info">${data.resolution}</div>
                <div class="ser_item-devices">
                    <div class="devives_list">
                        ${this.deviceItem(data.devices)}
                    </div>
                </div>
            </div>
        `;
        return content;
    }
    packList(data) {
        let content = '';
        data.map((pack, idx) => {
            if (idx === 0)
                content += this.packItem(pack, true);
            else
                content += this.packItem(pack);
        });
        packListContainer.innerHTML = content;
    }
    packInPayment(data) {
        let content = `
            <div class="credit_card-container">
                <div class="cart_container-header">
                    <p class="title">Bạn sẽ thanh toán</p>
                    <p class="price payment_pack-price">${data.price.toLocaleString('vi')} VND</p>
                </div>
                <div class="cart_container-body">
                    <div class="cart_body-content">
                        <p class="title">
                            <i class="fa-regular fa-check"></i>
                            Mở khóa toàn bộ nội dung
                        </p>
                        <div class="des">
                            Mở khóa tất cả các nội dung, bạn có thể truy cập vào toàn bộ nội dung của trang web một cách dễ dàng.
                        </div>
                    </div>
                    <div class="cart_body-content">
                        <p class="title">
                            <i class="fa-regular fa-check"></i>
                            Đề xuất riêng cho bạn
                        </p>
                        <div class="des">
                            Đề xuất các phim mới dựa trên sở thích và lịch sử xem phim của của riêng bạn.
                        </div>
                    </div>
                    <div class="cart_body-content">
                        <p class="title">
                            <i class="fa-regular fa-check"></i>
                            Dễ dàng thay đổi gói dịch vụ
                        </p>
                        <div class="des">
                            Bạn có thể dễ dàng thay đổi hoặc hủy gói dịch vụ tùy theo yêu cầu và nhu cầu của mình mà không gặp bất kỳ rào cản nào.
                        </div>
                    </div>
                    <div class="cart_body-content">
                        <a href="" class="title_return-link">Xem lại chi tiết gói</a>
                    </div>
                </div>
            </div>
        `;
        packInPayment.innerHTML = content;
    }
    formLogin(data) {
        let content = `
                <p class="log_title">${data.title}</p>
                <div class="log_description">${data.description1}</div>
                <div class="log_description">${data.description2}</div>
                <div class="form_container">
                    <div class="form_control">
                        <label for="">Email</label>
                        <input type="text" class="form_control-input" value=${data.email} name="email" placeholder="Nhập mật khẩu">
                        <p class="form_control-error"></p>
                    </div>
                    <div class="form_control">
                        <label for="">Mật khẩu</label>
                        <input type="password" class="form_control-input" name="password" placeholder="Nhập mật khẩu">
                        <p class="form_control-error"></p>
                    </div>
                    <div class="form_control">
                        <div class="form_control-massage">
                            <i class="fa-regular fa-spinner-third fa-spin"></i>
                            Đang xử lí
                        </div>
                    </div>
                    <div class="form_control">
                        <button class="form_control-but ${data.typeAction}">Tiếp tục</button>
                    </div>
                </div>
            `;
        logFormContainer.innerHTML = content;
    }
    detailCastInMovie(data) {
        let content = '';
        data.map(cast => {
            content +=
                `
                    <div class="main_cast-item">
                        <div class="cast_item-image">
                            <img src="${cast.avt}" alt="">
                        </div>
                        <div class="cast_item-name">${cast.name}</div>
                    </div>
                `;
        });
        return content;
    }
    detailWatchBox(data) {
        console.log(data);
        let content = `
            <div class="container_banner-img">
                <img src="${data.banner}" alt="">
                <div class="banner_img-bg"></div>
                <button class="container_banner-play">
                    <i class="fa-sharp fa-solid fa-play"></i>
                </button>
            </div>
            <iframe class="container_watch" src="https://www.youtube.com/embed/${data.link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        `;
        watchBox.innerHTML = content;
    }
    detailInfoMovie(data) {
        let content = `
            <div class="container_info-side">
                <div class="info_side-poster">
                    <img src="${data.poster}" alt="">
                </div>
            </div>
            <div class="container_info-main">
                <p class="info_main-name">${data.name}</p>
                <div class="info_main-short">
                    <div class="main_short-mark">
                        ${data.rating}
                        <div class="mark_icon">
                            IMBb
                        </div>
                    </div>
                    <div class="main_short-country"> ${data.country.name}</div>
                    <div class="main_short-year">${data.public}</div>
                </div>
                <div class="info_main-categlory">
                    Thể loại: ${data.genders.map(gen => " " + gen.name)}
                </div>
                <p class="info_main-description">
                    ${data.description}
                </p>
                <div class="info_main-cast">
                    <p class="main_cast-title">Cast:</p>
                    <div class="main_cast-list">
                        ${this.detailCastInMovie(data.actors)}
                    </div>
                </div>
            </div>
        `;
        infoMovieDetail.innerHTML = content;
    }
}
let component = new Render();
export { component };
