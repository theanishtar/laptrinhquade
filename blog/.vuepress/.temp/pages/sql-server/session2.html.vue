<template><div><!-- ---
layout: Post
title: Bài 2. Tạo CSDL quan hệ & ngôn ngữ truy vấn T-SQL
subtitle: Cơ sở dữ liệu
author: KhanhDan
date: 2023-07-21
useHeaderImage: false
headerImage: https://github.com/dangtranhuu/images/blob/main/angurvad/java-core/session1/banner.png?raw=true
headerMask: rgba(39, 77, 61, 0.61)
permalinkPattern: /ebook/sql-server/:slug/
tags:
  - SQL Server
--- -->
<h1 id="tao-csdl-quan-he-va-t-sql" tabindex="-1"><a class="header-anchor" href="#tao-csdl-quan-he-va-t-sql" aria-hidden="true">#</a> Tạo CSDL quan hệ và T-SQL</h1>
<p>Nội dung: <br></p>
<ul>
<li>Tổng quan về SQL Server.</li>
<li>SQL SERVER MANAGEMENT STUDIO.</li>
</ul>
<!-- more -->
<h2 id="_1-kieu-du-lieu" tabindex="-1"><a class="header-anchor" href="#_1-kieu-du-lieu" aria-hidden="true">#</a> 1. Kiểu dữ liệu</h2>
<div class="custom-container info"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M13 1.188C6.477 1.188 1.188 6.477 1.188 13S6.477 24.813 13 24.813 24.813 19.523 24.813 13c0-6.523-5.29-11.812-11.813-11.812Zm2.459 18.307c-.608.24-1.092.422-1.455.548a3.838 3.838 0 0 1-1.262.189c-.736 0-1.309-.18-1.717-.539a1.74 1.74 0 0 1-.611-1.367c0-.215.015-.435.045-.659a8.23 8.23 0 0 1 .147-.759l.761-2.688c.067-.258.125-.503.171-.731.046-.23.068-.441.068-.633 0-.342-.071-.582-.212-.717-.143-.135-.412-.201-.813-.201-.196 0-.398.029-.605.09-.205.063-.383.12-.529.176l.201-.828c.498-.203.975-.377 1.43-.521a4.225 4.225 0 0 1 1.29-.218c.731 0 1.295.178 1.692.53.395.353.594.812.594 1.376 0 .117-.014.323-.041.617a4.129 4.129 0 0 1-.152.811l-.757 2.68a7.582 7.582 0 0 0-.167.736 3.892 3.892 0 0 0-.073.626c0 .356.079.599.239.728.158.129.435.194.827.194.185 0 .392-.033.626-.097.232-.064.4-.121.506-.17l-.203.827Zm-.134-10.878a1.807 1.807 0 0 1-1.275.492c-.496 0-.924-.164-1.28-.492a1.57 1.57 0 0 1-.533-1.193c0-.465.18-.865.533-1.196a1.812 1.812 0 0 1 1.28-.497c.497 0 .923.165 1.275.497.353.331.53.731.53 1.196 0 .467-.177.865-.53 1.193Z" style="fill:#157ffb;fill-rule:nonzero" transform="translate(-1.257 -1.257) scale(1.0582)"/></svg><p class="custom-container-title">INFO</p>
<ul>
<li>Kiểu dữ liệu SQL là một thuộc tính xác định Kiểu
dữ liệu cho các đối tượng: biến, cột…</li>
</ul>
</div>
<p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_2/Hinh_1.png?raw=true" alt="pic1"></p>
<ul>
<li>Kiểu dữ liệu chuỗi
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_2/Hinh_2.png?raw=true" alt="pic1"></li>
</ul>
<div class="custom-container tip"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/><path d="M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/></svg><p class="custom-container-title">TIP</p>
<ul>
<li>Kiểu char và nchar dùng để lưu trữ chuỗi có độ dài cố định.
<br> Ví dụ: Mã sinh viên</li>
<li>Kiểu varchar, nvarchar dùng để lưu trữ chuỗi có độ
dài thay đổi.</li>
<li>Kiểu nchar, nvarchar dùng để lưu trữ kí tự Unicode.
Hệ thống hỗ trợ đa ngôn ngữ nên sử dụng kiểu này</li>
</ul>
</div>
<ul>
<li>Kiểu dữ liệu số
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_2/Hinh_3.png?raw=true" alt="pic1">
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_2/Hinh_4.png?raw=true" alt="pic1"></li>
</ul>
<div class="custom-container tip"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/><path d="M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/></svg><p class="custom-container-title">TIP</p>
<ul>
<li>Dùng lưu trữ các dữ liệu số, sử dụng trong tính toán</li>
<li>Trong một số trường hợp thường sử dụng kiểu chuỗi
làm kiểu dữ liệu thay thế khi lưu trữ dữ liệu số như: số
điện thoại, số chứng minh, mã ZipCode</li>
</ul>
</div>
<ul>
<li>Kiểu dữ liệu thời gian.
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_2/Hinh_5.png?raw=true" alt="pic1"></li>
</ul>
<hr>
<h2 id="_2-tao-csdl-quan-he" tabindex="-1"><a class="header-anchor" href="#_2-tao-csdl-quan-he" aria-hidden="true">#</a> 2. Tạo CSDL quan hệ</h2>
<ul>
<li>Một database bao gồm tối thiểu hai file <br>
mdf: lưu trữ các đối tượng trong database như table,
view, … <br>
ldf: lưu trữ quá trình cập nhật/thay đổi dữ liệu</li>
<li>Các thông số về kích thước file <br>
Initial size
File growth
Maximum file size</li>
<li>Tạo database <br>
Sử dụng công cụ Sql server management studio
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_2/Hinh_6.png?raw=true" alt="pic1"></li>
<li>Tạo database <br>
Sử dụng câu query
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_2/Hinh_7.png?raw=true" alt="pic1"></li>
<li>Tạo bảng <br>
Sử dụng công cụ Sql server management studio
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_2/Hinh_8.png?raw=true" alt="pic1"></li>
<li>Tạo bảng <br>
Sử dụng câu query
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_2/Hinh_9.png?raw=true" alt="pic1"></li>
<li>Chỉnh sửa bảng
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_2/Hinh_10.png?raw=true" alt="pic1"></li>
<li>Xóa bảng
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_2/Hinh_11.png?raw=true" alt="pic1"></li>
<li>Thiết lập khóa ngoại
Click vào button Relationships trên thanh công cụ
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_2/Hinh_12.png?raw=true" alt="pic1"></li>
<li>Thiết lập khóa ngoại
Sử dụng câu query
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_2/Hinh_13.png?raw=true" alt="pic1"></li>
</ul>
<p>tham khảo các lệnh đầy đủ <a href="https://www.w3schools.com/sql/sql_foreignkey.asp" target="_blank" rel="noopener noreferrer">tại đây</a></p>
<h2 id="_3-khai-niem-bien" tabindex="-1"><a class="header-anchor" href="#_3-khai-niem-bien" aria-hidden="true">#</a> 3. Khái niệm biến</h2>
<div class="custom-container info"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M13 1.188C6.477 1.188 1.188 6.477 1.188 13S6.477 24.813 13 24.813 24.813 19.523 24.813 13c0-6.523-5.29-11.812-11.813-11.812Zm2.459 18.307c-.608.24-1.092.422-1.455.548a3.838 3.838 0 0 1-1.262.189c-.736 0-1.309-.18-1.717-.539a1.74 1.74 0 0 1-.611-1.367c0-.215.015-.435.045-.659a8.23 8.23 0 0 1 .147-.759l.761-2.688c.067-.258.125-.503.171-.731.046-.23.068-.441.068-.633 0-.342-.071-.582-.212-.717-.143-.135-.412-.201-.813-.201-.196 0-.398.029-.605.09-.205.063-.383.12-.529.176l.201-.828c.498-.203.975-.377 1.43-.521a4.225 4.225 0 0 1 1.29-.218c.731 0 1.295.178 1.692.53.395.353.594.812.594 1.376 0 .117-.014.323-.041.617a4.129 4.129 0 0 1-.152.811l-.757 2.68a7.582 7.582 0 0 0-.167.736 3.892 3.892 0 0 0-.073.626c0 .356.079.599.239.728.158.129.435.194.827.194.185 0 .392-.033.626-.097.232-.064.4-.121.506-.17l-.203.827Zm-.134-10.878a1.807 1.807 0 0 1-1.275.492c-.496 0-.924-.164-1.28-.492a1.57 1.57 0 0 1-.533-1.193c0-.465.18-.865.533-1.196a1.812 1.812 0 0 1 1.28-.497c.497 0 .923.165 1.275.497.353.331.53.731.53 1.196 0 .467-.177.865-.53 1.193Z" style="fill:#157ffb;fill-rule:nonzero" transform="translate(-1.257 -1.257) scale(1.0582)"/></svg><p class="custom-container-title">INFO</p>
<ul>
<li><strong>Biến (Variable)</strong> dùng để lưu trữ các giá trị tạm thời trong quá trình thực thi chương trình.</li>
</ul>
</div>
<p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_2/Hinh_14.png?raw=true" alt="pic1"></p>
<p><strong>Biến vô hướng</strong>
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_2/Hinh_15.png?raw=true" alt="pic1">
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_2/Hinh_16.png?raw=true" alt="pic1"></p>
<ul>
<li>Ví dụ biến vô hướng
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_2/Hinh_17.png?raw=true" alt="pic1"></li>
</ul>
<p><strong>Biến bảng</strong>: lưu trữ dữ liệu dạng bảng
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_2/Hinh_18.png?raw=true" alt="pic1"></p>
<div class="custom-container tip"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/><path d="M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/></svg><p class="custom-container-title">TIP</p>
<p>Có thể tham chiếu đến biến bảng trong câu lệnh <strong>SELECT, INSERT, UPDATE, DELETE</strong></p>
</div>
<div class="custom-container warning"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.65 123.32C133.27 123.32 0 256.58 0 421c0 164.42 133.27 297.6 297.65 297.6 164.38 0 297.64-133.26 297.64-297.6 0-164.34-133.29-297.68-297.64-297.68Zm-.6 483.32c-22.591 0-41.18-18.589-41.18-41.18s18.589-41.18 41.18-41.18 41.18 18.589 41.18 41.18-18.589 41.18-41.18 41.18Zm42.38-164.27h-.23c-.139 22.489-18.681 40.916-41.17 40.916-22.586 0-41.171-18.585-41.171-41.171l.001-.255c0-1 .05-1.93.11-2.88V276.73h.03v-.27a45.8 45.8 0 0 1-.005-.642c0-22.59 18.589-41.18 41.18-41.18s41.18 18.59 41.18 41.18c0 .214-.002.428-.005.642v.27h.06l.02 165.64Z" style="fill:#f3cc2e;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.18)"/></svg><p class="custom-container-title">WARNING</p>
<ul>
<li>Không thể sử dụng câu lệnh <strong>SELECT INTO</strong> với biến bảng</li>
</ul>
</div>
<ul>
<li>Ví dụ biến bảng <br>
Tạo biến chứa các nhân viên ở HCM
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_2/Hinh_19.png?raw=true" alt="pic1"></li>
</ul>
<hr>
<h2 id="_4-ngon-ngu-truy-van-t-sql" tabindex="-1"><a class="header-anchor" href="#_4-ngon-ngu-truy-van-t-sql" aria-hidden="true">#</a> 4. Ngôn ngữ truy vấn T-SQL</h2>
<div class="custom-container info"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M13 1.188C6.477 1.188 1.188 6.477 1.188 13S6.477 24.813 13 24.813 24.813 19.523 24.813 13c0-6.523-5.29-11.812-11.813-11.812Zm2.459 18.307c-.608.24-1.092.422-1.455.548a3.838 3.838 0 0 1-1.262.189c-.736 0-1.309-.18-1.717-.539a1.74 1.74 0 0 1-.611-1.367c0-.215.015-.435.045-.659a8.23 8.23 0 0 1 .147-.759l.761-2.688c.067-.258.125-.503.171-.731.046-.23.068-.441.068-.633 0-.342-.071-.582-.212-.717-.143-.135-.412-.201-.813-.201-.196 0-.398.029-.605.09-.205.063-.383.12-.529.176l.201-.828c.498-.203.975-.377 1.43-.521a4.225 4.225 0 0 1 1.29-.218c.731 0 1.295.178 1.692.53.395.353.594.812.594 1.376 0 .117-.014.323-.041.617a4.129 4.129 0 0 1-.152.811l-.757 2.68a7.582 7.582 0 0 0-.167.736 3.892 3.892 0 0 0-.073.626c0 .356.079.599.239.728.158.129.435.194.827.194.185 0 .392-.033.626-.097.232-.064.4-.121.506-.17l-.203.827Zm-.134-10.878a1.807 1.807 0 0 1-1.275.492c-.496 0-.924-.164-1.28-.492a1.57 1.57 0 0 1-.533-1.193c0-.465.18-.865.533-1.196a1.812 1.812 0 0 1 1.28-.497c.497 0 .923.165 1.275.497.353.331.53.731.53 1.196 0 .467-.177.865-.53 1.193Z" style="fill:#157ffb;fill-rule:nonzero" transform="translate(-1.257 -1.257) scale(1.0582)"/></svg><p class="custom-container-title">INFO</p>
<ul>
<li><strong>Transact-SQL (còn gọi là T-SQL)</strong> là một ngôn ngữ lập trình database hướng thủ tục độc quyền của <strong>Microsoft</strong> sử dụng trong SQL Server.</li>
<li>T-SQL tổ chức theo từng khối lệnh</li>
<li>Một khối lệnh có thể lồng bên trong một khối lệnh khác</li>
<li>Một khối lệnh bắt đầu bởi <strong>BEGIN</strong> và kết thúc bởi <strong>END</strong>, bên trong khối lệnh có nhiều lệnh, và các lệnh ngăn cách nhau bởi <strong>dấu chấm phẩy</strong></li>
</ul>
</div>
<p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_2/Hinh_20.png?raw=true" alt="pic1"></p>
<ul>
<li>Ví dụ <br>
Sử dụng biến để tính diện tích, chu vi hình chữ nhật khi biết chiều dài và chiều rộng.
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_2/Hinh_21.png?raw=true" alt="pic1"></li>
</ul>
</div></template>
