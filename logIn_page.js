
var str_id = "";
var str_pw = "";

var input_id;
var input_pw;

var now = new Date();
    document.write(now.getFullYear()+"년 " + (now.getMonth()+1) +"월 " + now.getDate() + "일 " + now.getHours() + "시 " + now.getMinutes() + "분 " + now.getMilliseconds() + "밀리초 "); br();
    

window.onload = function () {
    

    input_id = document.getElementById("id");
    input_pw = document.getElementById("pw");


}

function logIn() {

    alert("id:" + input_id.value + " pw:" + input_pw.value);
    if (input_id.value == "rigel9327" && input_pw.value == "12345678") {
        alert("로그인 성공");
        login_box.innerHTML = "회원님 반갑습니다.";
    } else {
        alert("로그인 실패");
    }
}

