
    
     
     var header = document.querySelectorAll(".header__container__list__item");
    
     for(let i = 0; i< header.length; i++) {
     header[i].onclick = () =>{
        
         document.querySelector(".active").classList.remove("active");
         header[i].classList.add("active");

         }
     }
     var param = [
        {
        url:'/',
        title: ''
        },
        {
        url: '/cong-nghe',
        title: 'Công nghệ - '
        },
        {
        url:'/tai-chinh',
        title: 'Tài chính - '
        },
        {
        url:'/lap-trinh',
        title: 'Lập trình - '
        },
        {
        url:'/du-lich',
        title: 'Du lịch - '
        },
        {
        url:'/khoa-hoc',
        title:'Khoa học - '
        },
        {
        url:'/tin-tuc',
        title: 'Tin tức - '
        },  
        {
        url:'/giao-duc',
        title: 'Giáo dục - '
        },
        {
        url:'/tao-bai-viet',
        title:'Tạo bài viết - '
        },
        {
        url:'/am-thuc',
        title:'Ẩm thực - '
        }];
        var filedElement = document.getElementById("link__field");
        var urlLocation = window.location.pathname;
   
     for(let u = 0; u < param.length ; u++) {
         if (urlLocation === '/') {
             header[0].classList.toggle("active");
             //document.getElementById('title').innerHTML = `${param[u].title} Kiến thức online`;
            
         }
        if( filedElement.href.split('/')[3] === param[u].url.split('/')[1]) {
            header[u].classList.toggle("active");
            filedElement.innerText = `${param[u].title.split("-",1)}`;
            document.getElementById('title').innerHTML = `${param[u].title} Kiến thức online`;
        }
    }
    var menu = document.querySelector(".header__container__list__item__menu");
    var menuCircle = document.querySelector(".header__container__list__item__circle");
    var menuAll = document.querySelector(".header__container__menu-all");
    var iconMenu = document.querySelector(".menu-all");
            menu.onclick = () => {
                menu.style.display = "none";
                iconMenu.style.borderBottom = "none"
                menuCircle.style.display = "block";
                menuAll.style.display = "flex";
        }
    
            menuCircle.onclick = () => {
                menu.style.display = "block";
                menuCircle.style.display = "none";
                menuAll.style.display = "none";
            }
    
    // window.onload = function() {
    //     document.getElementById("focus").focus();
    //   };
    var menuTablet = document.querySelector(".navbar__container__brand__menu__item");
    var menuCircleTablet = document.querySelector(".navbar__container__brand__menu__circle");
   
   
            menuTablet.onclick = () => {
                menuTablet.style.display = "none";
                menuCircleTablet.style.display = "block";
                menuAll.style.display = "flex";
                menuAll.style.transform = "translateX(0%)"
        }
    
            menuCircleTablet.onclick = () => {
                menuTablet.style.display = "block";
                menuCircleTablet.style.display = "none";
                menuAll.style.transform = "translateX(-100%)"
                
            }
    
        
    

   