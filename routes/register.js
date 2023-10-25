const express = require('express');
// const RegistrationModel = require('../models/RegisterModel');
const router = express.Router();

router.get('/register', (req, res) => {
  res.render('register'); // Hiển thị trang đăng ký
});

router.post('/register', async (req, res) => {
  const { email, password, passwordConfirmation } = req.body;

  // Kiểm tra xác nhận mật khẩu
  if (password !== passwordConfirmation) {
    return res.render('register', { error: 'Mật khẩu và xác nhận mật khẩu không khớp' });
  }

  try {
    // Tạo một bản ghi người dùng mới trong cơ sở dữ liệu
    const user = new RegistrationModel({ username, password });

    // Mã hóa mật khẩu trước khi lưu vào cơ sở dữ liệu
    // (sử dụng bcrypt hoặc thư viện mã hóa mật khẩu khác)
    // Ví dụ: user.password = await bcrypt.hash(password, 10);

    await user.save();
    res.redirect('/'); // Đăng ký thành công, chuyển hướng về trang đăng nhập
  } catch (error) {
    // Xử lý lỗi, ví dụ: email đã tồn tại
    console.error(error);
    res.render('register', { error: 'Lỗi đăng ký, vui lòng thử lại.' });
  }
});

module.exports = router;