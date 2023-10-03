<template><div><!-- ---
layout: Post
title: Bài 5. Stored Procedures
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
<h1 id="stored-procedures" tabindex="-1"><a class="header-anchor" href="#stored-procedures" aria-hidden="true">#</a> Stored Procedures</h1>
<p>Nội dung: <br></p>
<ul>
<li>Tổng quan SQL Stored Procedures</li>
<li>Làm việc với stored procedures</li>
</ul>
<!-- more -->
<h2 id="_1-gioi-thieu" tabindex="-1"><a class="header-anchor" href="#_1-gioi-thieu" aria-hidden="true">#</a> 1. Giới thiệu</h2>
<div class="custom-container info"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M13 1.188C6.477 1.188 1.188 6.477 1.188 13S6.477 24.813 13 24.813 24.813 19.523 24.813 13c0-6.523-5.29-11.812-11.813-11.812Zm2.459 18.307c-.608.24-1.092.422-1.455.548a3.838 3.838 0 0 1-1.262.189c-.736 0-1.309-.18-1.717-.539a1.74 1.74 0 0 1-.611-1.367c0-.215.015-.435.045-.659a8.23 8.23 0 0 1 .147-.759l.761-2.688c.067-.258.125-.503.171-.731.046-.23.068-.441.068-.633 0-.342-.071-.582-.212-.717-.143-.135-.412-.201-.813-.201-.196 0-.398.029-.605.09-.205.063-.383.12-.529.176l.201-.828c.498-.203.975-.377 1.43-.521a4.225 4.225 0 0 1 1.29-.218c.731 0 1.295.178 1.692.53.395.353.594.812.594 1.376 0 .117-.014.323-.041.617a4.129 4.129 0 0 1-.152.811l-.757 2.68a7.582 7.582 0 0 0-.167.736 3.892 3.892 0 0 0-.073.626c0 .356.079.599.239.728.158.129.435.194.827.194.185 0 .392-.033.626-.097.232-.064.4-.121.506-.17l-.203.827Zm-.134-10.878a1.807 1.807 0 0 1-1.275.492c-.496 0-.924-.164-1.28-.492a1.57 1.57 0 0 1-.533-1.193c0-.465.18-.865.533-1.196a1.812 1.812 0 0 1 1.28-.497c.497 0 .923.165 1.275.497.353.331.53.731.53 1.196 0 .467-.177.865-.53 1.193Z" style="fill:#157ffb;fill-rule:nonzero" transform="translate(-1.257 -1.257) scale(1.0582)"/></svg><p class="custom-container-title">INFO</p>
<ul>
<li><strong>Stored Procedure</strong> lưu trữ một tập hợp các câu
lệnh SQL và các câu lệnh lập trình đi kèm trong
cơ sở dữ liệu, cho phép tái sử dụng khi cần.</li>
<li>Hỗ trợ các ứng dụng tương tác nhanh, chính xác</li>
</ul>
</div>
<p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_1.png?raw=true" alt="pic1"></p>
<p><strong>Các thuận lợi</strong></p>
<ul>
<li>Stored procedure cho phép điều chỉnh chương trình cho phù hợp, mang tính tái sử dụng.</li>
<li>Stored procedure cho phép thực thi nhanh hơn cách viết từng câu lệnh sql</li>
<li>Stored procedure làm giảm bớt vấn đề kẹt đường truyền mạng, dữ liệu được gởi theo gói.</li>
<li>Stored procedure có thể sử dụng trong vấn đề bảo mật, phân quyền</li>
</ul>
<p><strong>Có 2 loại</strong></p>
<ul>
<li>System stored procedures</li>
<li>User stored procedures</li>
</ul>
<p><strong>Stored-procedure trong SQL Server bao gồm:</strong></p>
<ul>
<li>Inputs: nhận các tham số đầu vào khi cần</li>
<li>Execution: kết hợp giữa các yêu cầu nghiệp vụ với các lệnh lập trình như IF..ELSE, WHILE...</li>
<li>Outputs: trả ra các đơn giá trị (số, chuỗi…) hoặc một tập kết
quả.
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_2.png?raw=true" alt="pic1"></li>
</ul>
<p><strong>Ví dụ</strong>
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_3.png?raw=true" alt="pic1"></p>
<hr>
<h2 id="_2-tao-stored-procedure" tabindex="-1"><a class="header-anchor" href="#_2-tao-stored-procedure" aria-hidden="true">#</a> 2. Tạo Stored-procedure</h2>
<p><strong>Cú pháp</strong>
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_4.png?raw=true" alt="pic1"></p>
<div class="custom-container tip"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/><path d="M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/></svg><p class="custom-container-title">TIP</p>
<ul>
<li>Tên hàm, tên biến trong SQL Server không phân biệt hoa thường.</li>
<li>Có thể thay thế Create Procedure bằng Create Proc</li>
<li>Tham số đầu vào <br>
Tham số bắt buộc: bắt buộc phải truyền <br>
Tham số tuỳ chọn: gán giá trị mặc định, giá trị mặc định nếu không gọi.</li>
</ul>
</div>
<p><strong>Ví dụ</strong> <br>
VD1: Tạo stored-procedure tính tổng của 2 số nguyên
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_5.png?raw=true" alt="pic1"></p>
<p>VD2: Tạo stored-procedure tính tổng của 2 số nguyên có tham số đầu ra
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_6.png?raw=true" alt="pic1"></p>
<p>Tạo stored-procedure có return dữ liệu <br>
<strong>Cú pháp</strong>
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_7.png?raw=true" alt="pic1"></p>
<p><strong>Ví dụ</strong>
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_8.png?raw=true" alt="pic1"></p>
<p>Biên dịch và gọi thực thi một stored-procedure <br></p>
<ul>
<li>Biên dịch : Chọn toàn bộ mã lệnh Tạo storedprocedure =&gt; Nhấn F5</li>
<li>Gọi thực thi một store-Procedure đã được biên dịch bằng lệnh exec
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_9.png?raw=true" alt="pic1"></li>
</ul>
<p><strong>Ví dụ</strong>
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_10.png?raw=true" alt="pic1"></p>
<p>Làm việc với thủ tục có tham số mặc định <br>
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_11.png?raw=true" alt="pic1"></p>
<h2 id="_3-cap-nhat-store-procedure" tabindex="-1"><a class="header-anchor" href="#_3-cap-nhat-store-procedure" aria-hidden="true">#</a> 3. Cập nhật Store procedure</h2>
<p><strong>Cú pháp</strong>
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_12.png?raw=true" alt="pic1"></p>
<p><strong>Ví dụ</strong>
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_13.png?raw=true" alt="pic1"></p>
<p><strong>Lệnh xóa Procedure</strong>
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_14.png?raw=true" alt="pic1"></p>
<h2 id="_4-lenh-đieu-kien-trong-đieu-khien-cac-re-nhanh-trong-proc" tabindex="-1"><a class="header-anchor" href="#_4-lenh-đieu-kien-trong-đieu-khien-cac-re-nhanh-trong-proc" aria-hidden="true">#</a> 4. Lệnh điều kiện trong điều khiển các rẽ nhánh trong Proc</h2>
<p><strong>Sử dụng câu lệnh điều kiện giúp điều khiển các rẽ nhánh trong Proc</strong>
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_15.png?raw=true" alt="pic1"></p>
<p><strong>Xét ví dụ trước về việc thêm phòng ban, kiểm tra Maphg có tồn tại hay chưa</strong>
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_16.png?raw=true" alt="pic1"></p>
<h2 id="_5-store-procedure-template" tabindex="-1"><a class="header-anchor" href="#_5-store-procedure-template" aria-hidden="true">#</a> 5. Store procedure template</h2>
<p><strong>Sử dụng công cụ tạo store proc dưới dạng template</strong>
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_17.png?raw=true" alt="pic1"></p>
<p><strong>Ví dụ</strong>
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_18.png?raw=true" alt="pic1"></p>
<h2 id="_6-kien-thuc-them" tabindex="-1"><a class="header-anchor" href="#_6-kien-thuc-them" aria-hidden="true">#</a> 6. Kiến thức thêm</h2>
<p><strong>Dùng công cụ Execute a Store procedure</strong>
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_19.png?raw=true" alt="pic1"></p>
<p><strong>System Store procedure</strong></p>
<ul>
<li>
<p>Là những stored procedure chứa trong Master
Database, thường bắt đầu bằng tiếp đầu ngữ
sp_</p>
</li>
<li>
<p>Chủ yếu dùng trong việc quản lý cơ sở dữ liệu
(administration) và bảo mật (security).</p>
</li>
<li>
<p>Ví dụ: sp_helptext &lt;tên của đối tượng&gt; : để lấy
định nghĩa của đối tượng (thông số tên đối
tượng truyền vào) trong Database
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_20.png?raw=true" alt="pic1"></p>
</li>
<li>
<p>Một số System stored procedures thông dụng
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_21.png?raw=true" alt="pic1"></p>
</li>
</ul>
</div></template>
