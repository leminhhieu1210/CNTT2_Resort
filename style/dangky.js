function login() {
	var check_ten = /^[a-zA-Z ]{1,}$/;
	var str_ten = document.getElementById("name").value;

	var check_phone = /^[0-9]{10}/;
	var str_phone = document.getElementById("phone").value;

	var check_email = /^[a-z0-9]{5,32}@[a-z0-9]{2,}\.[a-z0-9]{2,4}$/;
	var str_email = document.getElementById("email").value;

	var check_bank = /^[0-9]{12}/;
	var str_bank = document.getElementById("bank").value;

	var str_thon = document.getElementById("thon").value;

	var str_xa = document.getElementById("xa").value;

	var str_huyen = document.getElementById("huyen").value;

	var str_city = document.getElementById("city").value;

	var check_acount = /^\w{3,}$/;
	var str_acount = document.getElementById("acount").value;

	var check_pass1 = /^\w{8,}$/;
	var str_pass1 = document.getElementById("pass1").value;

	var str_pass2 = document.getElementById("pass2").value;

	if (str_ten == "")
	{
		document.getElementById('error_name').innerHTML = "Ban chua nhap ho ten.";
		document.getElementById('name').style.border = '1px solid red';
	}
	else if (!check_ten.test(str_ten))
	{
		document.getElementById('error_name').innerHTML = "Ban nhap sai ho ten.";
		document.getElementById('name').style.border = '1px solid red';
	}

	else if (str_email == "")
	{
		document.getElementById('error_email').innerHTML = "Ban chua nhap email.";
		document.getElementById('email').style.border = '1px solid red';
	}
	else if (!check_email.test(str_email))
	{
		document.getElementById('error_email').innerHTML = "Ban nhap sai email.";
		document.getElementById('email').style.border = '1px solid red';
	}

	else if (str_phone == "")
	{
		document.getElementById('error_phone').innerHTML = "Ban chua nhap so dien thoai.";
		document.getElementById('phone').style.border = '1px solid red';
	}
	else if (!check_phone.test(str_phone))
	{
		document.getElementById('error_phone').innerHTML = "Ban nhap sai so dien thoai.";
		document.getElementById('phone').style.border = '1px solid red';
	}

	else if (str_bank == "")
	{
		document.getElementById('error_bank').innerHTML = "Ban chua nhap so tai khoan.";
		document.getElementById('bank').style.border = '1px solid red';
	}
	else if (!check_bank.test(str_bank))
	{
		document.getElementById('error_bank').innerHTML = "Ban nhap sai so tai khoan.";
		document.getElementById('bank').style.border = '1px solid red';
	}

	else if (str_thon == "")
	{
		document.getElementById('error_thon').innerHTML = "Ban chua nhap thon.";
		document.getElementById('thon').style.border = '1px solid red';
	}

	else if (str_xa == "")
	{
		document.getElementById('error_xa').innerHTML = "Ban chua nhap xa.";
		document.getElementById('xa').style.border = '1px solid red';
	}

	else if (str_huyen == "")
	{
		document.getElementById('error_huyen').innerHTML = "Ban chua nhap huyen.";
		document.getElementById('huyen').style.border = '1px solid red';
	}

	else if (str_city == 0)
	{
		document.getElementById('error_city').innerHTML = "Ban chua chon tinh.";
		document.getElementById('city').style.border = '1px solid red';
	}

	else if (str_acount == "")
	{
		document.getElementById('error_acount').innerHTML = "Ban chua nhap ten tai khoan.";
		document.getElementById('acount').style.border = '1px solid red';
	}
	else if (!check_acount.test(str_acount))
	{
		document.getElementById('error_acount').innerHTML = "Ban nhap sai ten tai khoan.";
		document.getElementById('acount').style.border = '1px solid red';
	}

	else if (str_pass1 == "")
	{
		document.getElementById('error_pass1').innerHTML = "Ban chua nhap mat khau.";
		document.getElementById('pass1').style.border = '1px solid red';
	}
	else if (!check_pass1.test(str_pass1))
	{
		document.getElementById('error_pass1').innerHTML = "Ban nhap sai mat khau.";
		document.getElementById('pass1').style.border = '1px solid red';
	}

	else if (str_pass2 == "")
	{
		document.getElementById('error_pass2').innerHTML = "Ban chua xac nhan mat khau.";
		document.getElementById('pass2').style.border = '1px solid red';
	}
	else if (str_pass1 != str_pass2)
	{
		document.getElementById('error_pass2').innerHTML = "Ban nhap mat khau khong khop.";
		document.getElementById('pass2').style.border = '1px solid red';
	}

	else
	{
		alert("Ban dang ky thanh cong.");

		document.getElementById('error_name').innerHTML = "";
		document.getElementById('name').style.border = '1px solid #a4a4a4';
		document.getElementById('error_email').innerHTML = "";
		document.getElementById('email').style.border = '1px solid #a4a4a4';
		document.getElementById('error_phone').innerHTML = "";
		document.getElementById('phone').style.border = '1px solid #a4a4a4';
		document.getElementById('error_bank').innerHTML = "";
		document.getElementById('bank').style.border = '1px solid #a4a4a4';
		document.getElementById('error_thon').innerHTML = "";
		document.getElementById('thon').style.border = '1px solid #a4a4a4';
		document.getElementById('error_xa').innerHTML = "";
		document.getElementById('xa').style.border = '1px solid #a4a4a4';
		document.getElementById('error_huyen').innerHTML = "";
		document.getElementById('huyen').style.border = '1px solid #a4a4a4';
		document.getElementById('error_city').innerHTML = "";
		document.getElementById('city').style.border = '1px solid #a4a4a4';
		document.getElementById('error_acount').innerHTML = "";
		document.getElementById('acount').style.border = '1px solid #a4a4a4';
		document.getElementById('error_pass1').innerHTML = "";
		document.getElementById('pass1').style.border = '1px solid #a4a4a4';
		document.getElementById('error_pass2').innerHTML = "";
		document.getElementById('pass2').style.border = '1px solid #a4a4a4';
	}
}