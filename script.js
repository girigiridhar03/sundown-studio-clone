
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

const elems = document.querySelectorAll(".elem");
const fixedImage = document.querySelector(".fixed-image");
const elemContainer = document.querySelector(".elem-container");
const allElem = document.querySelectorAll(".big-div-left .left-h1 h1");
const bigImg = document.querySelector(".big-img");
const bigBoxPara = document.querySelector(".big-box-para");
const menu = document.querySelector(".menu");
const fullScreen = document.querySelector("#full-screen");
const navImage = document.querySelector(".nav-image");
const loader = document.querySelector("#loader");

let flag = 0;
elemContainer.addEventListener("mouseenter",()=>{
    fixedImage.style.display = "block"
})
elemContainer.addEventListener("mouseleave",()=>{
    fixedImage.style.display = "none"
})
elems.forEach(item=>{
    item.addEventListener("mouseenter",(e)=>{
           fixedImage.style.display = "block"
          const imgaes = item.getAttribute("data-image");
           fixedImage.style.backgroundImage = `url(${imgaes})`
    })
})

fixedImage.addEventListener("mouseenter",()=>{
    fixedImage.style.display = "block"
})
fixedImage.addEventListener("mouseleave",()=>{
    fixedImage.style.display = "none"
})

allElem.forEach(item=>{
   item.addEventListener("click",(e)=>{
    for(let i=0;i<allElem.length;i++){
        allElem[i].classList.remove("active")
    }
    e.target.classList.add("active")

    if(e.target.innerHTML === "Design"){
        bigImg.src = "https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15e1_Project-p-1080.jpg";
        bigBoxPara.innerHTML = "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings."
    }
    else if(e.target.innerHTML === "Project"){
        bigImg.src = "https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d0_Project.webp";
        bigBoxPara.innerHTML = "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need."
    }
    else if(e.target.innerHTML === "Excution"){
        bigImg.src = "https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15cd_Execution-p-1080.jpg";
        bigBoxPara.innerHTML = "Were with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience."
    }

   })
})

menu.addEventListener("click",()=>{
    if(flag == 0){
        fullScreen.style.top = "0"
        navImage.style.opacity = "0"
        flag = 1
    }
    else{
        fullScreen.style.top = "-100%";
        navImage.style.opacity = "1"
        flag = 0
    }
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
  });

  setTimeout(() => {
    loader.style.top = "-100%"
  }, 4000);