//加载完成后执行
window.addEventListener('load', function () {

    //载入动画
    $("#loading-box").fadeOut();

}, false)

//回到顶部
window.onscroll = function () {
    if (document.documentElement.scrollTop + document.body.scrollTop > 100) {
        $("#topup").css({
            display: 'block',
            transform: 'translateX(0px)',
            transition: '0.3s',
        });
    } else {
        $("#topup").css({
            transform: 'translateX(60px)',
            transition: '0.3s',
        });
    }
}

//夜间模式切换
function dark() {
    document.body.classList.add('night');
    document.cookie = "night=1;path=/";
    document.getElementById("fk_service_text").innerHTML = "切换日间模式";
    iziToast.info({
        timeout: 4000,
        icon: 'Fontawesome',
        closeOnEscape: 'true',
        transitionOut: 'fadeOutRight',
        displayMode: 'replace',
        layout: '2',
        transitionIn: 'bounceInLeft',
        position: 'topRight',
        icon: 'fa-solid fa-moon',
        backgroundColor: '#fff',
        title: '夜间模式切换',
        message: '已切换为夜间模式'
    });
}

function light() {
    document.body.classList.remove('night');
    document.cookie = "night=0;path=/";
    document.getElementById("fk_service_text").innerHTML = "切换夜间模式";
    iziToast.info({
        timeout: 4000,
        icon: 'Fontawesome',
        closeOnEscape: 'true',
        transitionOut: 'fadeOutRight',
        displayMode: 'replace',
        layout: '2',
        transitionIn: 'bounceInLeft',
        position: 'topRight',
        icon: 'fa-solid fa-sun',
        backgroundColor: '#fff',
        title: '日间模式切换',
        message: '已切换为日间模式'
    });
}

function switchNightMode() {
    var night = document.cookie.replace(/(?:(?:^|.*;\s*)night\s*\=\s*([^;]*).*$)|^.*$/, "$1") || '0';
    if (night == '0') {
        dark();
    } else {
        light();
    }
}

window.matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', event => {
        if (event.matches) {
            dark();
        } else {
            light();
        }
    })