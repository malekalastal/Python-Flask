let otpCode = "1234"; // محاكاة OTP

document.getElementById("sendOTP").onclick = () => {
    alert("رمز التحقق: " + otpCode);
    document.getElementById("otp-section").style.display = "block";
};

document.getElementById("verifyOTP").onclick = () => {
    let entered = document.getElementById("otp").value;
    if(entered === otpCode){
        document.querySelector(".login-container").style.display = "none";
        document.querySelector(".main-container").style.display = "block";
    } else {
        alert("رمز غير صحيح");
    }
};

document.getElementById("addPost").onclick = () => {
    let text = document.getElementById("newPost").value;
    if(text.trim() !== ""){
        let div = document.createElement("div");
        div.className = "post";
        div.innerText = text;
        document.getElementById("posts").prepend(div);
        document.getElementById("newPost").value = "";
    }
};
