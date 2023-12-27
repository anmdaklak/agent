// nhap thong tin vao localStorage
    const inputUsernameRegister = document.querySelector(".form-input1");
    const inputPasswordRegister = document.querySelector(".form-input2");
    const btnLogin = document.querySelector(".form-submit");

    btnLogin.addEventListener("click", (e) => {
        e.preventDefault();
        if (inputUsernameRegister.value === "" || inputPasswordRegister.value === "")
            {
                alert ("Vui lòng không để trống");
            }
        else {
                //array user    
                const user = {
                    username: inputUsernameRegister.value,
                    password: inputPasswordRegister.value,
                };
                let json = JSON.stringify(user);
                localStorage.setItem(inputUsernameRegister.value, json);
                alert ("Đăng nhập thành công");
                //chuyen qua trang Bong88 that 
                }
    });