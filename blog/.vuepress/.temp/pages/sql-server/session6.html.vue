<template><div><!-- ---
layout: Post
title: Bài 6. Trigger
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
<h1 id="trigger" tabindex="-1"><a class="header-anchor" href="#trigger" aria-hidden="true">#</a> Trigger</h1>
<p>Nội dung: <br></p>
<ul>
<li>Tổng quan Trigger</li>
<li>Làm việc với trigger</li>
</ul>
<!-- more -->
<h2 id="_1-gioi-thieu-ve-trigger" tabindex="-1"><a class="header-anchor" href="#_1-gioi-thieu-ve-trigger" aria-hidden="true">#</a> 1. Giới thiệu về Trigger</h2>
<div class="custom-container info"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M13 1.188C6.477 1.188 1.188 6.477 1.188 13S6.477 24.813 13 24.813 24.813 19.523 24.813 13c0-6.523-5.29-11.812-11.813-11.812Zm2.459 18.307c-.608.24-1.092.422-1.455.548a3.838 3.838 0 0 1-1.262.189c-.736 0-1.309-.18-1.717-.539a1.74 1.74 0 0 1-.611-1.367c0-.215.015-.435.045-.659a8.23 8.23 0 0 1 .147-.759l.761-2.688c.067-.258.125-.503.171-.731.046-.23.068-.441.068-.633 0-.342-.071-.582-.212-.717-.143-.135-.412-.201-.813-.201-.196 0-.398.029-.605.09-.205.063-.383.12-.529.176l.201-.828c.498-.203.975-.377 1.43-.521a4.225 4.225 0 0 1 1.29-.218c.731 0 1.295.178 1.692.53.395.353.594.812.594 1.376 0 .117-.014.323-.041.617a4.129 4.129 0 0 1-.152.811l-.757 2.68a7.582 7.582 0 0 0-.167.736 3.892 3.892 0 0 0-.073.626c0 .356.079.599.239.728.158.129.435.194.827.194.185 0 .392-.033.626-.097.232-.064.4-.121.506-.17l-.203.827Zm-.134-10.878a1.807 1.807 0 0 1-1.275.492c-.496 0-.924-.164-1.28-.492a1.57 1.57 0 0 1-.533-1.193c0-.465.18-.865.533-1.196a1.812 1.812 0 0 1 1.28-.497c.497 0 .923.165 1.275.497.353.331.53.731.53 1.196 0 .467-.177.865-.53 1.193Z" style="fill:#157ffb;fill-rule:nonzero" transform="translate(-1.257 -1.257) scale(1.0582)"/></svg><p class="custom-container-title">INFO</p>
<ul>
<li><strong>Trigger</strong> là một dạng đặc biệt của thủ tục lưu trữ
(store procedure), được thực thi một cách tự
động khi có sự thay đổi dữ liệu (do tác động của
câu lệnh <strong>INSERT, UPDATE, DELETE</strong>) trên một
bảng nào đó.</li>
<li>Không thể gọi thực hiện trực tiếp Trigger bằng lệnh EXECUTE</li>
<li>Trigger là một stored procedure không có tham số.</li>
<li>Trigger được lưu trữ trong DB Server và thường
hay được dùng để kiểm tra ràng buộc toàn vẹn
dữ liệu.</li>
<li>Thông thường dữ liệu các thao tác insert,
update, delete được sao lưu vào bảng tạm
inserted và deleted</li>
</ul>
</div>
<p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_6/Hinh_1.png?raw=true" alt="pic1"></p>
<p><strong>Các loại trigger thường dùng</strong>
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_6/Hinh_2.png?raw=true" alt="pic1"></p>
<p><strong>So sánh trigger DDL và trigger DML</strong></p>
<ul>
<li>Các trigger
DDL và DML có cách sử dụng khác nhau và được
thực thi với các sự kiện cơ sở dữ liệu khác nhau.
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_6/Hinh_3.png?raw=true" alt="pic1"></li>
</ul>
<hr>
<h2 id="_2-tao-trigger-dml" tabindex="-1"><a class="header-anchor" href="#_2-tao-trigger-dml" aria-hidden="true">#</a> 2. Tạo trigger DML</h2>
<div class="custom-container tip"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/><path d="M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/></svg><p class="custom-container-title">TIP</p>
<ul>
<li>Các trigger DML được thực thi khi sự kiện DML xảy ra trong các bảng hoặc khung nhìn.</li>
<li>Trigger DML này bao gồm các câu lệnh INSERT, UPDATE và DELETE.</li>
<li>Các trigger DML gồm ba loại chính:Trigger INSERT, Trigger UPDATE, Trigger DELETE</li>
</ul>
</div>
<p><strong>Các bảng Inserted và Deleted</strong></p>
<ul>
<li>Các trigger DML sử dụng hai loại bảng đặc biệt để sửa đổi dữ liệu trong cơ sở dữ liệu</li>
<li>Các bảng tạm thời lưu trữ dữ liệu ban đầu cũng như
dữ liệu đã sửa đổi. Những bảng này gồm Inserted và
Deleted.</li>
<li>Bảng Inserted:chứa bản sao các bản ghi được sửa đổi
với hoạt động INSERT và UPDATE trên bảng trigger.
Hoạt động INSERT và UPDATE sẽ tiến hành chèn các
bản ghi mới vào bảng Inserted và bảng trigger</li>
<li>Bảng Deleted:chứa bản sao của các bản ghi được sửa
đổi với hoạt động DELETE và UPDATE trên bảng
trigger</li>
</ul>
<p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_6/Hinh_4.png?raw=true" alt="pic1">
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_6/Hinh_5.png?raw=true" alt="pic1"></p>
<p><strong>Trigger INSERT</strong></p>
<ul>
<li>Trigger INSERT được thực thi khi một bản ghi mới
được chèn vào bảng</li>
<li>Trigger INSERT đảm bảo rằng giá trị đang được nhập
phù hợp với các ràng buộc được định nghĩa trên bảng
đó.</li>
<li>Bảng Inserted và Deleted về khía cạnh vật lý chúng
không tồn tại trong cơ sở dữ liệu</li>
<li>Trigger INSERT được tạo ra bằng cách sử dụng từ
khóa INSERT trong câu lệnh CREATE TRIGGER và
ALTER TRIGGER.</li>
</ul>
<div class="custom-container tip"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/><path d="M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/></svg><p class="custom-container-title">TIP</p>
<p>Cú pháp <br>
<strong>CREATE TRIGGER</strong> trigger_name
<strong>ON</strong> table_name
<strong>FOR</strong>  {INSERT,UPDATE,DELETE}
<strong>AS</strong>
{sql_statements}</p>
</div>
<ul>
<li>Ví dụ <br>
Kiểm tra dữ liệu chèn vào bảng nhân viên có lương phai lớn hơn 5000
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_6/Hinh_6.png?raw=true" alt="pic1"></li>
</ul>
<p><strong>Trigger UPDATE</strong></p>
<ul>
<li>Trigger UPDATE sao chép bản ghi gốc vào bảng
Deleted và bản ghi mới vào bảng Inserted</li>
<li>Nếu các giá trị mới là hợp lệ thì bản ghi từ bảng
Inserted sẽ được sao chép vào bảng dữ liệu</li>
<li>Trigger UPDATE được tạo ra bằng cách sử dụng từ
khóa UPDATE trong câu lệnh CREATE TRIGGER và
ALTER TRIGGER</li>
</ul>
<div class="custom-container tip"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/><path d="M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/></svg><p class="custom-container-title">TIP</p>
<p>Cú pháp <br>
<strong>CREATE TRIGGER</strong> trigger_name
<strong>ON</strong> table_name
<strong>FOR</strong>  {INSERT,UPDATE,DELETE}
<strong>AS</strong>
{sql_statements}</p>
</div>
<ul>
<li>Ví dụ <br>
Cập nhật lương cho nhân viên, quy định lương &gt;5000
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_6/Hinh_7.png?raw=true" alt="pic1"></li>
</ul>
<p><strong>Trigger Delete</strong></p>
<ul>
<li>Ta có thể tạo ra trigger DELETE để hạn chế người
dùng không xoá một bản ghi cụ thể trong bảng</li>
<li>Khi người dùng cố gắng xóa bản ghi:<br>
Bản ghi bị xóa khỏi bảng trigger và chèn vào bảng Deleted <br>
Kiểm tra các ràng buộc liên quan khi xóa <br>
Nếu có ràng buộc trên bản ghi để ngăn chặn việc xóa, trigger
DELETE sẽ hiển thị thông báo lỗi <br>
Bản ghi đã xóa được lưu trữ trong bảng Deleted được sao
chép ngược lại bảng trigger. <br></li>
</ul>
<div class="custom-container tip"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/><path d="M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/></svg><p class="custom-container-title">TIP</p>
<p>Cú pháp <br>
<strong>CREATE TRIGGER</strong> trigger_name
<strong>ON</strong> table_name
<strong>FOR</strong>  {INSERT,UPDATE,DELETE}
<strong>AS</strong>
{sql_statements}</p>
</div>
<ul>
<li>Ví dụ <br>
Tạo trigger Delete không cho phép xóa nhân viên có mã 005
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_6/Hinh_8.png?raw=true" alt="pic1"></li>
</ul>
<h2 id="_3-trigger-after" tabindex="-1"><a class="header-anchor" href="#_3-trigger-after" aria-hidden="true">#</a> 3. Trigger AFTER</h2>
<div class="custom-container info"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M13 1.188C6.477 1.188 1.188 6.477 1.188 13S6.477 24.813 13 24.813 24.813 19.523 24.813 13c0-6.523-5.29-11.812-11.813-11.812Zm2.459 18.307c-.608.24-1.092.422-1.455.548a3.838 3.838 0 0 1-1.262.189c-.736 0-1.309-.18-1.717-.539a1.74 1.74 0 0 1-.611-1.367c0-.215.015-.435.045-.659a8.23 8.23 0 0 1 .147-.759l.761-2.688c.067-.258.125-.503.171-.731.046-.23.068-.441.068-.633 0-.342-.071-.582-.212-.717-.143-.135-.412-.201-.813-.201-.196 0-.398.029-.605.09-.205.063-.383.12-.529.176l.201-.828c.498-.203.975-.377 1.43-.521a4.225 4.225 0 0 1 1.29-.218c.731 0 1.295.178 1.692.53.395.353.594.812.594 1.376 0 .117-.014.323-.041.617a4.129 4.129 0 0 1-.152.811l-.757 2.68a7.582 7.582 0 0 0-.167.736 3.892 3.892 0 0 0-.073.626c0 .356.079.599.239.728.158.129.435.194.827.194.185 0 .392-.033.626-.097.232-.064.4-.121.506-.17l-.203.827Zm-.134-10.878a1.807 1.807 0 0 1-1.275.492c-.496 0-.924-.164-1.28-.492a1.57 1.57 0 0 1-.533-1.193c0-.465.18-.865.533-1.196a1.812 1.812 0 0 1 1.28-.497c.497 0 .923.165 1.275.497.353.331.53.731.53 1.196 0 .467-.177.865-.53 1.193Z" style="fill:#157ffb;fill-rule:nonzero" transform="translate(-1.257 -1.257) scale(1.0582)"/></svg><p class="custom-container-title">INFO</p>
<ul>
<li><strong>Trigger AFTER</strong> thực thi khi hoàn thành các hoạt động <strong>INSERT, UPDATE và DELETE</strong>.</li>
<li>Trigger AFTER chỉ có thể được tạo ra trên các bảng.</li>
</ul>
</div>
<p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_6/Hinh_9.png?raw=true" alt="pic1"></p>
<div class="custom-container tip"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/><path d="M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/></svg><p class="custom-container-title">TIP</p>
<p>Cú pháp <br>
<strong>CREATE TRIGGER</strong> trigger_name
<strong>ON</strong> table_name
<strong>FOR | AFTER</strong>  {INSERT,UPDATE,DELETE}
<strong>AS</strong>
{sql_statements}</p>
</div>
<ul>
<li>Ví dụ <br>
Viết trigger đếm số lượng nhân viên bị xóa khi có câu lệnh xóa trên bảng nhân viên
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_6/Hinh_10.png?raw=true" alt="pic1"></li>
</ul>
<h2 id="_4-trigger-instead-of" tabindex="-1"><a class="header-anchor" href="#_4-trigger-instead-of" aria-hidden="true">#</a> 4. Trigger INSTEAD OF</h2>
<div class="custom-container info"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M13 1.188C6.477 1.188 1.188 6.477 1.188 13S6.477 24.813 13 24.813 24.813 19.523 24.813 13c0-6.523-5.29-11.812-11.813-11.812Zm2.459 18.307c-.608.24-1.092.422-1.455.548a3.838 3.838 0 0 1-1.262.189c-.736 0-1.309-.18-1.717-.539a1.74 1.74 0 0 1-.611-1.367c0-.215.015-.435.045-.659a8.23 8.23 0 0 1 .147-.759l.761-2.688c.067-.258.125-.503.171-.731.046-.23.068-.441.068-.633 0-.342-.071-.582-.212-.717-.143-.135-.412-.201-.813-.201-.196 0-.398.029-.605.09-.205.063-.383.12-.529.176l.201-.828c.498-.203.975-.377 1.43-.521a4.225 4.225 0 0 1 1.29-.218c.731 0 1.295.178 1.692.53.395.353.594.812.594 1.376 0 .117-.014.323-.041.617a4.129 4.129 0 0 1-.152.811l-.757 2.68a7.582 7.582 0 0 0-.167.736 3.892 3.892 0 0 0-.073.626c0 .356.079.599.239.728.158.129.435.194.827.194.185 0 .392-.033.626-.097.232-.064.4-.121.506-.17l-.203.827Zm-.134-10.878a1.807 1.807 0 0 1-1.275.492c-.496 0-.924-.164-1.28-.492a1.57 1.57 0 0 1-.533-1.193c0-.465.18-.865.533-1.196a1.812 1.812 0 0 1 1.28-.497c.497 0 .923.165 1.275.497.353.331.53.731.53 1.196 0 .467-.177.865-.53 1.193Z" style="fill:#157ffb;fill-rule:nonzero" transform="translate(-1.257 -1.257) scale(1.0582)"/></svg><p class="custom-container-title">INFO</p>
<ul>
<li><strong>Trigger INSTEAD OF</strong> được thực thi <strong>thay thế</strong> cho các hoạt động I<strong>NSERT, UPDATE hoặc DELETE</strong>.</li>
<li>Các trigger INSTEAD OF có thể được tạo ra trên các bảng cũng như khung nhìn.</li>
</ul>
</div>
<div class="custom-container tip"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/><path d="M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/></svg><p class="custom-container-title">TIP</p>
<p>Cú pháp <br>
<strong>CREATE TRIGGER</strong> trigger_name
<strong>ON</strong> &lt;table_name&gt; | &lt;view_name&gt;
<strong>FOR | AFTER | INSTEAD OF</strong>  {INSERT,UPDATE,DELETE}
<strong>AS</strong>
{sql_statements}</p>
</div>
<ul>
<li>Ví dụ: <br>
Xóa nhân viên có mã 017, các thân nhân của nhân viên này tự động bị xóa theo trên bảng thân nhân
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_6/Hinh_11.png?raw=true" alt="pic1"></li>
</ul>
</div></template>
