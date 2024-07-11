//lấy phần tử từ form login
const formInput = document.getElementById('formInput');
const userId = document.getElementById('userId');
const userPassword = document.getElementById('userPassword');

//lấy phần từ từ form changepassword
const formChangePassword = document.getElementById('formChangePassword');

//lấy phần tử lỗi
const userIdError = document.getElementById('userIdError');
const userPasswordError = document.getElementById('userPasswordError');

formInput.addEventListener('submit', function (e) {
    e.preventDefault();//Ngăn load lại trang khi submid
    
    //check bỏ trống input
    if (!userId.value) {
        document.getElementById('userIdError').style.display = 'block';
        document.getElementById('userId').style.border = '1px red solid';
    }
    else {
        document.getElementById('userIdError').style.display = 'none';
        document.getElementById('userId').style.border = '';
    }
    if (!userPassword.value) {
        document.getElementById('userPasswordError').style.display = 'block';
        document.getElementById('userPassword').style.border = '1px red solid';
    }
    else {
        document.getElementById('userPasswordError').style.display = 'none';
        document.getElementById('userPassword').style.border = '';
    }

    if (userId.value && userPassword.value) {
        let account = 0;
        //sai tài khoản hoặc password
        if (userId.value !== 'admin@gmail.com') {
            document.getElementById('errorMessage').style.display = 'flex';
            setTimeout(() => {
                document.getElementById('errorMessage').style.display = 'none';
            }, 3000);
            account++;
        }
        else {
            document.getElementById('errorMessage').style.display = 'none';
        }
        if (userPassword.value !== '123456') {
            document.getElementById('errorMessage').style.display = 'flex';
            setTimeout(() => {
                document.getElementById('errorMessage').style.display = 'none';
            }, 3000);
            account++;
        }
        else {
            document.getElementById('errorMessage').style.display = 'none';
        }
        //check để dẫn tới form đổi mật khẩu
        if (account >= 1) {
            console.log('account : ', account);
        }
        else {
            document.getElementById('formChangePassword').style.display = '';
            document.getElementById('formLogin').style.display = 'none';
        }
    }
});

