<template><div><!-- ---
layout: Post
title: Bài 8. Quản trị CSDL với SQL Server
subtitle: Cơ sở dữ liệu
author: KhanhDan
date: 2023-07-22
useHeaderImage: false
headerImage: https://github.com/dangtranhuu/images/blob/main/angurvad/java-core/session1/banner.png?raw=true
headerMask: rgba(39, 77, 61, 0.61)
permalinkPattern: /ebook/sql-server/:slug/
tags:
  - SQL Server
--- -->
<h1 id="sao-luu-va-phuc-hoi-csdl" tabindex="-1"><a class="header-anchor" href="#sao-luu-va-phuc-hoi-csdl" aria-hidden="true">#</a> Sao lưu và phục hồi CSDL</h1>
<p>Nội dung: <br></p>
<ul>
<li>Sao lưu và phục hồi cơ sở dữ liệu</li>
<li>Đặt lịch sao lưu tự động</li>
</ul>
<!-- more -->
<h2 id="_1-sao-luu-csdl" tabindex="-1"><a class="header-anchor" href="#_1-sao-luu-csdl" aria-hidden="true">#</a> 1. Sao lưu CSDL</h2>
<div class="custom-container info"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M13 1.188C6.477 1.188 1.188 6.477 1.188 13S6.477 24.813 13 24.813 24.813 19.523 24.813 13c0-6.523-5.29-11.812-11.813-11.812Zm2.459 18.307c-.608.24-1.092.422-1.455.548a3.838 3.838 0 0 1-1.262.189c-.736 0-1.309-.18-1.717-.539a1.74 1.74 0 0 1-.611-1.367c0-.215.015-.435.045-.659a8.23 8.23 0 0 1 .147-.759l.761-2.688c.067-.258.125-.503.171-.731.046-.23.068-.441.068-.633 0-.342-.071-.582-.212-.717-.143-.135-.412-.201-.813-.201-.196 0-.398.029-.605.09-.205.063-.383.12-.529.176l.201-.828c.498-.203.975-.377 1.43-.521a4.225 4.225 0 0 1 1.29-.218c.731 0 1.295.178 1.692.53.395.353.594.812.594 1.376 0 .117-.014.323-.041.617a4.129 4.129 0 0 1-.152.811l-.757 2.68a7.582 7.582 0 0 0-.167.736 3.892 3.892 0 0 0-.073.626c0 .356.079.599.239.728.158.129.435.194.827.194.185 0 .392-.033.626-.097.232-.064.4-.121.506-.17l-.203.827Zm-.134-10.878a1.807 1.807 0 0 1-1.275.492c-.496 0-.924-.164-1.28-.492a1.57 1.57 0 0 1-.533-1.193c0-.465.18-.865.533-1.196a1.812 1.812 0 0 1 1.28-.497c.497 0 .923.165 1.275.497.353.331.53.731.53 1.196 0 .467-.177.865-.53 1.193Z" style="fill:#157ffb;fill-rule:nonzero" transform="translate(-1.257 -1.257) scale(1.0582)"/></svg><p class="custom-container-title">INFO</p>
<ul>
<li>Khi làm việc với CSDL, đặc biệt là những tác vụ dễ xảy ra
sự cố như: <br>
Thử nghiệm tính năng mới <br>
Sửa hoặc xóa dữ liệu quan trọng. <br>
=&gt; Bạn nên tạo một bản sao CSDL để phục hồi khi có sự cố</li>
</ul>
</div>
<div class="custom-container tip"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/><path d="M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/></svg><p class="custom-container-title">TIP</p>
<p><strong>Các kiểu sao lưu CSDL</strong> <br></p>
<ul>
<li>Full backup <br>
Sao lưu toàn bộ dữ liệu (kể cả các stored procedure, view,
hàm người dùng định nghĩa, transaction log…). <br>
File tạo ra có phần mở rộng .bak <br></li>
<li>Differential backup <br>
Sao lưu các dữ liệu mới được cập nhật kể từ lần full backup trước đó <br>
File tạo ra có phần mở rộng .bak <br></li>
<li>Differential backup <br>
Sao lưu các bản ghi transaction log (các thao tác xảy ra trên
CSDL, không sao lưu dữ liệu) <br>
File tạo ra có phần mở rộng .trn <br></li>
</ul>
</div>
<hr>
<p><strong>Các bước sao lưu CSDL</strong>
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_8/Hinh_1.png?raw=true" alt="pic1">
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_8/Hinh_2.png?raw=true" alt="pic1">
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_8/Hinh_3.png?raw=true" alt="pic1"></p>
<p><strong>Các bước phục hồi CSDL</strong>
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_8/Hinh_4.png?raw=true" alt="pic1">
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_8/Hinh_5.png?raw=true" alt="pic1">
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_8/Hinh_6.png?raw=true" alt="pic1">
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_8/Hinh_7.png?raw=true" alt="pic1"></p>
<div class="custom-container tip"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/><path d="M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/></svg><p class="custom-container-title">TIP</p>
<ul>
<li>
<p>Càng thực hiện sao lưu nhiều càng giảm rủi ro khi có sự cố.</p>
</li>
<li>
<p>Với các CSDL quan trọng, thực hiện nhiều thay đổi trong ngày. Nên thực hiện nhiều lần sao lưu trong một ngày</p>
</li>
<li>
<p>Full Backup là phương pháp an toàn nhất, nhưng thực hiện</p>
</li>
<li>
<p>Full Backup nhiều sẽ tốn dung lượng bộ nhớ.</p>
</li>
<li>
<p>Nên: <br>
Thực hiện sao lưu Full Backup một lần vào lúc bắt đầu một
ngày (chuẩn bị làm việc với CSDL) <br>
Thực hiện nhiều sao lưu Differential backup trong ngày (định kì khoảng một vài tiếng một lần) <br>
Thực hiện nhiều sao lưu Transaction log backup trong ngày</p>
</li>
<li>
<p>Khi có sự cố, tiến hành phục hồi như sau: <br>
Thực hiện sao lưu Full Backup một lần vào lúc bắt đầu một ngày (chuẩn bị làm việc với CSDL) <br>
Thực hiện nhiều sao lưu Differential backup trong ngày (định kì khoảng một vài tiếng một lần) <br>
Thực hiện nhiều sao lưu Transaction log backup trong ngày</p>
</li>
</ul>
</div>
<h2 id="_2-đat-lich-sao-luu-tu-đong" tabindex="-1"><a class="header-anchor" href="#_2-đat-lich-sao-luu-tu-đong" aria-hidden="true">#</a> 2. Đặt lịch sao lưu tự động</h2>
<div class="custom-container info"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M13 1.188C6.477 1.188 1.188 6.477 1.188 13S6.477 24.813 13 24.813 24.813 19.523 24.813 13c0-6.523-5.29-11.812-11.813-11.812Zm2.459 18.307c-.608.24-1.092.422-1.455.548a3.838 3.838 0 0 1-1.262.189c-.736 0-1.309-.18-1.717-.539a1.74 1.74 0 0 1-.611-1.367c0-.215.015-.435.045-.659a8.23 8.23 0 0 1 .147-.759l.761-2.688c.067-.258.125-.503.171-.731.046-.23.068-.441.068-.633 0-.342-.071-.582-.212-.717-.143-.135-.412-.201-.813-.201-.196 0-.398.029-.605.09-.205.063-.383.12-.529.176l.201-.828c.498-.203.975-.377 1.43-.521a4.225 4.225 0 0 1 1.29-.218c.731 0 1.295.178 1.692.53.395.353.594.812.594 1.376 0 .117-.014.323-.041.617a4.129 4.129 0 0 1-.152.811l-.757 2.68a7.582 7.582 0 0 0-.167.736 3.892 3.892 0 0 0-.073.626c0 .356.079.599.239.728.158.129.435.194.827.194.185 0 .392-.033.626-.097.232-.064.4-.121.506-.17l-.203.827Zm-.134-10.878a1.807 1.807 0 0 1-1.275.492c-.496 0-.924-.164-1.28-.492a1.57 1.57 0 0 1-.533-1.193c0-.465.18-.865.533-1.196a1.812 1.812 0 0 1 1.28-.497c.497 0 .923.165 1.275.497.353.331.53.731.53 1.196 0 .467-.177.865-.53 1.193Z" style="fill:#157ffb;fill-rule:nonzero" transform="translate(-1.257 -1.257) scale(1.0582)"/></svg><p class="custom-container-title">INFO</p>
<ul>
<li>Đặt lịch sao lưu tự động là: <br>
Tạo một kế hoạch cho SQL Server để SQL Server tự động
thực hiện sao lưu CSDL tại một thời điểm được ấn định sẵn.</li>
<li>Để tạo lịch sao lưu tự động người dùng phải đăng nhập
bằng Login ID có vai trò “sysadmin”</li>
</ul>
</div>
<p><strong>Các bước đặt lịch sao lưu tự động</strong></p>
<ul>
<li>
<p>Bước 1: Nhấn chuột phải vào Maintenance Plans. Chọn New Maintenance Plan
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_8/Hinh_8.png?raw=true" alt="pic1"></p>
</li>
<li>
<p>Bước 2: Đặt tên cho Maintenance Plan
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_8/Hinh_9.png?raw=true" alt="pic1"></p>
</li>
<li>
<p>Cấu hình
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_8/Hinh_10.png?raw=true" alt="pic1"></p>
</li>
<li>
<p>Bước 3: Ấn định thời gian thực hiện sao lưu CSDL
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_8/Hinh_11.png?raw=true" alt="pic1"></p>
</li>
<li>
<p>Bước 4: Thêm Back Up Database Task <br>
Back Up Database Task: thực hiện sao lưu CSDL theo thời
gian đã ấn định
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_8/Hinh_12.png?raw=true" alt="pic1"></p>
</li>
<li>
<p>Bước 5: Cấu hình Back Up Database Task <br>
=&gt; Nhấn đúp chuột vào Back Up Database Task
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_8/Hinh_13.png?raw=true" alt="pic1"></p>
</li>
</ul>
<p>-B6: Thêm Maintenance Cleanup Task vì sao lưu được thực hiện thường xuyên, dẫn đến đầy bộ nhớ server <br>
=&gt; Maintenance Cleanup Task: Xóa các bản sao, mà có thời gian sao lưu cũ hơn một khoảng thời gian cho trước.
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_8/Hinh_14.png?raw=true" alt="pic1"></p>
<ul>
<li>Bước 7: Cấu hình cho Maintenance Cleanup Task <br>
=&gt; Nhấn đúp chuột vào Maintenance Cleanup Task
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_8/Hinh_15.png?raw=true" alt="pic1"></li>
</ul>
<div class="custom-container tip"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/><path d="M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/></svg><p class="custom-container-title">TIP</p>
<ul>
<li>SQL Server chỉ thực hiện sao lưu tự động thành công
khi SQL Server Agent đang chạy</li>
<li>Nếu SQL Server Agent bị tắt. Có thể khởi động lại trong <br>
SQL Server Management Studio <br>
SQL Server Configuration Management</li>
</ul>
</div>
</div></template>
