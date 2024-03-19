/*点击下拉菜单 */
function myFunction() {
    document.getElementById("dropdownContent").classList.toggle("show");
    document.getElementById("emailContent").classList.remove("show");
    document.getElementById("autoSelectContent").classList.remove("show");    /* 3 */
}

window.onclick = function (event) {
    if ((!event.target.matches('.dropbtn')) && (!event.target.matches('.emai-dropdown')) && (!event.target.matches('.autoSelectBtn'))) {
        const dropdowns = document.getElementById("dropdownContent");
        const dropdown2s = document.getElementById("emailContent");
        const dropdown3s = document.getElementById("autoSelectContent");
        dropdowns.classList.remove("show");
        dropdown2s.classList.remove("show");
        dropdown3s.classList.remove("show");
    }
}



function myFunctiontwo() {
    document.getElementById("emailContent").classList.toggle("show");
    document.getElementById("dropdownContent").classList.remove("show");
    document.getElementById("autoSelectContent").classList.remove("show");
    /* 2 */
}




function myFunctionthree() {
    document.getElementById("autoSelectContent").classList.toggle("show");
    document.getElementById("emailContent").classList.remove("show");
    document.getElementById("dropdownContent").classList.remove("show");      /* 1 */
}


/*记住用户名*/
const remember = document.getElementById("remember");
function tagFunction() {
    remember.classList.toggle("icon-fangkuangweixuan");
    remember.classList.toggle("icon-tongyixuanzhong");
}




/*选中变色*/
const username = document.getElementById("username");
username.onfocus = function () {
    const icon1 = document.getElementById("icon1");
    icon1.style.color = "black";
}
username.onblur = function () {
    const icon1 = document.getElementById("icon1");
    icon1.style.color = "gray";
}
const password = document.getElementById("password");
password.onfocus = function () {
    const icon2 = document.getElementById("icon2");
    icon2.style.color = "black";
}
password.onblur = function () {
    const icon2 = document.getElementById("icon2");
    icon2.style.color = "gray";
}



/*下拉菜单（切换功能）*/
const option3s = document.querySelectorAll(".option3");
const dropbtn = document.querySelector(".dropbtn");
Array.from(option3s).forEach((element) => {
    element.addEventListener("click", () => {
        dropbtn.innerHTML = element.innerHTML;
    })
})


//下拉菜单Email
const box2s = document.querySelectorAll(".box2");
const emaiBtn = document.querySelector(".emai-dropdown");
Array.from(box2s).forEach((element) => {
    element.addEventListener("click", () => {
        emaiBtn.innerHTML = element.querySelector(".option2").innerHTML;
        Array.from(box2s).forEach((element) => { element.querySelector(".box0").classList.remove("icon-duigou") });
        element.querySelector(".box0").classList.add("icon-duigou");
    })
})





const box1s = document.querySelectorAll(".box1");
const select = document.querySelector(".fourSelect");
box1s.forEach((boxcut) => {
    boxcut.addEventListener("click", () => {
        select.querySelector(".autoSelectBtn").innerHTML = boxcut.querySelector(".option1").innerHTML;
        box1s.forEach((boxcut2) => { boxcut2.querySelector(".box").classList.remove("icon-duigou") });
        boxcut.querySelector(".box").classList.add("icon-duigou");
    })
})





