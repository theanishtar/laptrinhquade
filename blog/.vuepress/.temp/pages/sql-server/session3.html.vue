<template><div><!-- ---
layout: Post
title: Bài 3. Các hàm hệ thống & xử lý chuỗi
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
<h1 id="cac-ham-he-thong-va-xu-ly-chuoi" tabindex="-1"><a class="header-anchor" href="#cac-ham-he-thong-va-xu-ly-chuoi" aria-hidden="true">#</a> Các hàm hệ thống và xử lý chuỗi</h1>
<p>Nội dung: <br></p>
<ul>
<li>Các hàm hệ thống Sql</li>
<li>Xử lý chuỗi</li>
</ul>
<!-- more -->
<h2 id="_1-cac-ham-chuyen-đoi-kieu-du-lieu" tabindex="-1"><a class="header-anchor" href="#_1-cac-ham-chuyen-đoi-kieu-du-lieu" aria-hidden="true">#</a> 1. Các hàm chuyển đổi kiểu dữ liệu</h2>
<div class="custom-container info"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M13 1.188C6.477 1.188 1.188 6.477 1.188 13S6.477 24.813 13 24.813 24.813 19.523 24.813 13c0-6.523-5.29-11.812-11.813-11.812Zm2.459 18.307c-.608.24-1.092.422-1.455.548a3.838 3.838 0 0 1-1.262.189c-.736 0-1.309-.18-1.717-.539a1.74 1.74 0 0 1-.611-1.367c0-.215.015-.435.045-.659a8.23 8.23 0 0 1 .147-.759l.761-2.688c.067-.258.125-.503.171-.731.046-.23.068-.441.068-.633 0-.342-.071-.582-.212-.717-.143-.135-.412-.201-.813-.201-.196 0-.398.029-.605.09-.205.063-.383.12-.529.176l.201-.828c.498-.203.975-.377 1.43-.521a4.225 4.225 0 0 1 1.29-.218c.731 0 1.295.178 1.692.53.395.353.594.812.594 1.376 0 .117-.014.323-.041.617a4.129 4.129 0 0 1-.152.811l-.757 2.68a7.582 7.582 0 0 0-.167.736 3.892 3.892 0 0 0-.073.626c0 .356.079.599.239.728.158.129.435.194.827.194.185 0 .392-.033.626-.097.232-.064.4-.121.506-.17l-.203.827Zm-.134-10.878a1.807 1.807 0 0 1-1.275.492c-.496 0-.924-.164-1.28-.492a1.57 1.57 0 0 1-.533-1.193c0-.465.18-.865.533-1.196a1.812 1.812 0 0 1 1.28-.497c.497 0 .923.165 1.275.497.353.331.53.731.53 1.196 0 .467-.177.865-.53 1.193Z" style="fill:#157ffb;fill-rule:nonzero" transform="translate(-1.257 -1.257) scale(1.0582)"/></svg><p class="custom-container-title">INFO</p>
<ul>
<li>Khi làm việc với các biểu thức chứa nhiều kiểu dữ liệu khác nhau, phải thực hiện chuyển đổi giữa các kiểu dữ liệu.</li>
<li>Hai loại chuyển đổi kiểu dữ liệu <br>
Chuyển đổi ngầm (do SQL server tự thực hiện) <br>
Chuyển đổi tường minh (sử dụng các hàm thư viện)</li>
</ul>
</div>
<p><strong>- Chuyển đổi ngầm</strong></p>
<div class="custom-container info"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M13 1.188C6.477 1.188 1.188 6.477 1.188 13S6.477 24.813 13 24.813 24.813 19.523 24.813 13c0-6.523-5.29-11.812-11.813-11.812Zm2.459 18.307c-.608.24-1.092.422-1.455.548a3.838 3.838 0 0 1-1.262.189c-.736 0-1.309-.18-1.717-.539a1.74 1.74 0 0 1-.611-1.367c0-.215.015-.435.045-.659a8.23 8.23 0 0 1 .147-.759l.761-2.688c.067-.258.125-.503.171-.731.046-.23.068-.441.068-.633 0-.342-.071-.582-.212-.717-.143-.135-.412-.201-.813-.201-.196 0-.398.029-.605.09-.205.063-.383.12-.529.176l.201-.828c.498-.203.975-.377 1.43-.521a4.225 4.225 0 0 1 1.29-.218c.731 0 1.295.178 1.692.53.395.353.594.812.594 1.376 0 .117-.014.323-.041.617a4.129 4.129 0 0 1-.152.811l-.757 2.68a7.582 7.582 0 0 0-.167.736 3.892 3.892 0 0 0-.073.626c0 .356.079.599.239.728.158.129.435.194.827.194.185 0 .392-.033.626-.097.232-.064.4-.121.506-.17l-.203.827Zm-.134-10.878a1.807 1.807 0 0 1-1.275.492c-.496 0-.924-.164-1.28-.492a1.57 1.57 0 0 1-.533-1.193c0-.465.18-.865.533-1.196a1.812 1.812 0 0 1 1.28-.497c.497 0 .923.165 1.275.497.353.331.53.731.53 1.196 0 .467-.177.865-.53 1.193Z" style="fill:#157ffb;fill-rule:nonzero" transform="translate(-1.257 -1.257) scale(1.0582)"/></svg><p class="custom-container-title">INFO</p>
<ul>
<li>Gán giá trị cho một cột có kiểu dữ liệu <strong>khác</strong> với giá trị được gán.</li>
<li>Biểu thức tính toán có sự tham gia cuả nhiều loại dữ liệu khác nhau (SQL chuyển kiểu có độ <strong>ưu tiên thấp sang kiểu có độ ưu tiên cao</strong> hơn)</li>
</ul>
</div>
<div class="custom-container warning"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.65 123.32C133.27 123.32 0 256.58 0 421c0 164.42 133.27 297.6 297.65 297.6 164.38 0 297.64-133.26 297.64-297.6 0-164.34-133.29-297.68-297.64-297.68Zm-.6 483.32c-22.591 0-41.18-18.589-41.18-41.18s18.589-41.18 41.18-41.18 41.18 18.589 41.18 41.18-18.589 41.18-41.18 41.18Zm42.38-164.27h-.23c-.139 22.489-18.681 40.916-41.17 40.916-22.586 0-41.171-18.585-41.171-41.171l.001-.255c0-1 .05-1.93.11-2.88V276.73h.03v-.27a45.8 45.8 0 0 1-.005-.642c0-22.59 18.589-41.18 41.18-41.18s41.18 18.59 41.18 41.18c0 .214-.002.428-.005.642v.27h.06l.02 165.64Z" style="fill:#f3cc2e;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.18)"/></svg><p class="custom-container-title">WARNING</p>
<ul>
<li>Lập trình viên cần nắm chuyển đổi ngầm tránh lỗi</li>
<li>Việc chuyển đổi xả ra tự động.</li>
</ul>
</div>
<ul>
<li>
<p>Thứ tự ưu tiên của các kiểu dữ liệu phổ biến trong SQL Server
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_3/Hinh_1.png?raw=true" alt="pic1"></p>
</li>
<li>
<p>Xét ví dụ: SELECT 100 * .5 =&gt; Kết quả có kiểu dữ liệu gì?
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_3/Hinh_2.png?raw=true" alt="pic1"></p>
</li>
<li>
<p>Kết là 50.0 vì .5 có độ ưu tiên cao hơn**</p>
</li>
<li>
<p>Xét ví dụ: SELECT 'Today is ' + GETDATE()=&gt;Kết quả kiểu dữ liệu là gì?
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_3/Hinh_3.png?raw=true" alt="pic1"></p>
</li>
<li>
<p>Không thể chuyển “Today is” thành kiểu DateTime</p>
</li>
</ul>
<p><strong>- Chuyển đổi tường minh</strong></p>
<div class="custom-container info"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M13 1.188C6.477 1.188 1.188 6.477 1.188 13S6.477 24.813 13 24.813 24.813 19.523 24.813 13c0-6.523-5.29-11.812-11.813-11.812Zm2.459 18.307c-.608.24-1.092.422-1.455.548a3.838 3.838 0 0 1-1.262.189c-.736 0-1.309-.18-1.717-.539a1.74 1.74 0 0 1-.611-1.367c0-.215.015-.435.045-.659a8.23 8.23 0 0 1 .147-.759l.761-2.688c.067-.258.125-.503.171-.731.046-.23.068-.441.068-.633 0-.342-.071-.582-.212-.717-.143-.135-.412-.201-.813-.201-.196 0-.398.029-.605.09-.205.063-.383.12-.529.176l.201-.828c.498-.203.975-.377 1.43-.521a4.225 4.225 0 0 1 1.29-.218c.731 0 1.295.178 1.692.53.395.353.594.812.594 1.376 0 .117-.014.323-.041.617a4.129 4.129 0 0 1-.152.811l-.757 2.68a7.582 7.582 0 0 0-.167.736 3.892 3.892 0 0 0-.073.626c0 .356.079.599.239.728.158.129.435.194.827.194.185 0 .392-.033.626-.097.232-.064.4-.121.506-.17l-.203.827Zm-.134-10.878a1.807 1.807 0 0 1-1.275.492c-.496 0-.924-.164-1.28-.492a1.57 1.57 0 0 1-.533-1.193c0-.465.18-.865.533-1.196a1.812 1.812 0 0 1 1.28-.497c.497 0 .923.165 1.275.497.353.331.53.731.53 1.196 0 .467-.177.865-.53 1.193Z" style="fill:#157ffb;fill-rule:nonzero" transform="translate(-1.257 -1.257) scale(1.0582)"/></svg><p class="custom-container-title">INFO</p>
<ul>
<li>Chuyển dữ liệu có kiểu dữ liệu với độ ưu tiên cao hơn về kiểu dữ liệu có độ ưu tiên thấp hơn.</li>
<li>Sử dụng hàm <strong>CAST</strong> hoặc <strong>CONVERT</strong> để thực hiện phép chuyển đổi tường minh.</li>
</ul>
</div>
<p>-Ví dụ: chuyển kiểu có độ ưu tiên cao DateTime về kiểu có độ ưu tiên thấp hơn varchar:
<strong>SELECT 'Today is ' + cast(GETDATE() as varchar)</strong>
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_3/Hinh_4.png?raw=true" alt="pic1"></p>
<ul>
<li><strong>Sử dụng hàm chuyển đổi dữ liệu Hàm CAST</strong>
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_3/Hinh_5.png?raw=true" alt="pic1"></li>
</ul>
<div class="custom-container tip"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/><path d="M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/></svg><p class="custom-container-title">TIP</p>
<ul>
<li>Hàm CAST dùng để chuyển đổi tường minh, hay ép kiểu, một biểu thức từ kiểu dữ liệu này sang kiểu dữ liệu khác</li>
</ul>
</div>
<ul>
<li>
<p>Một số ví dụ
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_3/Hinh_6.png?raw=true" alt="pic1"></p>
</li>
<li>
<p><strong>Sử dụng hàm chuyển đổi dữ liệu Hàm CONVERT</strong>
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_3/Hinh_7.png?raw=true" alt="pic1"></p>
</li>
</ul>
<div class="custom-container tip"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/><path d="M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/></svg><p class="custom-container-title">TIP</p>
<ul>
<li>Dùng để chuyển đổi tường minh một biểu thức từ kiểu dữ liệu này sang kiểu dữ liệu khác</li>
<li>Khi chuyển đổi sang kiểu dữ liệu kí tự và cần định dạng hiển thị cho dữ liệu.</li>
<li>Tham số định dạng: định dạng cho các giá trị ngày/giờ, số thực, tiền tệ khi chuyển đổi sang kiểu kí tự</li>
</ul>
</div>
<ul>
<li>
<p>Một số ví dụ
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_3/Hinh_8.png?raw=true" alt="pic1"></p>
</li>
<li>
<p><strong>So sánh giữa Cast và CONVERT:</strong></p>
</li>
<li>
<p>SELECT 'Today''s date is ' + CAST(GETDATE() as varchar)
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_3/Hinh_9.png?raw=true" alt="pic1"></p>
</li>
<li>
<p>SELECT 'Today''s date is ' + CONVERT(VARCHAR, GETDATE(), 101)
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_3/Hinh_10.png?raw=true" alt="pic1"></p>
</li>
</ul>
<hr>
<h2 id="_2-cac-ham-toan-hoc" tabindex="-1"><a class="header-anchor" href="#_2-cac-ham-toan-hoc" aria-hidden="true">#</a> 2. Các hàm toán học</h2>
<ul>
<li>PI: trả về số Pi</li>
<li>SQRT: tính căn bậc 2, trả về dữ liệu kiểu float - SELECT SQRT(25) =&gt; 5</li>
<li>SQUARE: bình phương - SELECT SQUARE(3)=&gt; 9</li>
<li>CEILING và FLOOR</li>
<li>ROUND: làm tròn giá trị theo vị trí thập phân xác định</li>
<li>ABS: Lấy giá trị tuyệt đối <br>
Ví dụ lương trung bình của nv là 31000, thống kê mức độ chênh lệch lương của các nv so với lương trung bình =&gt; không quan tâm số âm hay dương
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_3/Hinh_11.png?raw=true" alt="pic1"></li>
</ul>
<h2 id="_3-cac-ham-xu-ly-chuoi" tabindex="-1"><a class="header-anchor" href="#_3-cac-ham-xu-ly-chuoi" aria-hidden="true">#</a> 3. Các hàm xử lý chuỗi</h2>
<p><strong>Làm việc với kiểu dữ liệu chuỗi</strong>
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_3/Hinh_12.png?raw=true" alt="pic1"></p>
<ul>
<li>Ví dụ
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_3/Hinh_13.png?raw=true" alt="pic1"></li>
</ul>
<p><strong>Hàm CHARINDEX</strong></p>
<div class="custom-container info"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M13 1.188C6.477 1.188 1.188 6.477 1.188 13S6.477 24.813 13 24.813 24.813 19.523 24.813 13c0-6.523-5.29-11.812-11.813-11.812Zm2.459 18.307c-.608.24-1.092.422-1.455.548a3.838 3.838 0 0 1-1.262.189c-.736 0-1.309-.18-1.717-.539a1.74 1.74 0 0 1-.611-1.367c0-.215.015-.435.045-.659a8.23 8.23 0 0 1 .147-.759l.761-2.688c.067-.258.125-.503.171-.731.046-.23.068-.441.068-.633 0-.342-.071-.582-.212-.717-.143-.135-.412-.201-.813-.201-.196 0-.398.029-.605.09-.205.063-.383.12-.529.176l.201-.828c.498-.203.975-.377 1.43-.521a4.225 4.225 0 0 1 1.29-.218c.731 0 1.295.178 1.692.53.395.353.594.812.594 1.376 0 .117-.014.323-.041.617a4.129 4.129 0 0 1-.152.811l-.757 2.68a7.582 7.582 0 0 0-.167.736 3.892 3.892 0 0 0-.073.626c0 .356.079.599.239.728.158.129.435.194.827.194.185 0 .392-.033.626-.097.232-.064.4-.121.506-.17l-.203.827Zm-.134-10.878a1.807 1.807 0 0 1-1.275.492c-.496 0-.924-.164-1.28-.492a1.57 1.57 0 0 1-.533-1.193c0-.465.18-.865.533-1.196a1.812 1.812 0 0 1 1.28-.497c.497 0 .923.165 1.275.497.353.331.53.731.53 1.196 0 .467-.177.865-.53 1.193Z" style="fill:#157ffb;fill-rule:nonzero" transform="translate(-1.257 -1.257) scale(1.0582)"/></svg><p class="custom-container-title">INFO</p>
<ul>
<li>Cú pháp <br>
CHARINDEX(find, search[, start])</li>
</ul>
</div>
<p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_3/Hinh_14.png?raw=true" alt="pic1"></p>
<p><strong>Hàm SubString</strong></p>
<div class="custom-container info"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M13 1.188C6.477 1.188 1.188 6.477 1.188 13S6.477 24.813 13 24.813 24.813 19.523 24.813 13c0-6.523-5.29-11.812-11.813-11.812Zm2.459 18.307c-.608.24-1.092.422-1.455.548a3.838 3.838 0 0 1-1.262.189c-.736 0-1.309-.18-1.717-.539a1.74 1.74 0 0 1-.611-1.367c0-.215.015-.435.045-.659a8.23 8.23 0 0 1 .147-.759l.761-2.688c.067-.258.125-.503.171-.731.046-.23.068-.441.068-.633 0-.342-.071-.582-.212-.717-.143-.135-.412-.201-.813-.201-.196 0-.398.029-.605.09-.205.063-.383.12-.529.176l.201-.828c.498-.203.975-.377 1.43-.521a4.225 4.225 0 0 1 1.29-.218c.731 0 1.295.178 1.692.53.395.353.594.812.594 1.376 0 .117-.014.323-.041.617a4.129 4.129 0 0 1-.152.811l-.757 2.68a7.582 7.582 0 0 0-.167.736 3.892 3.892 0 0 0-.073.626c0 .356.079.599.239.728.158.129.435.194.827.194.185 0 .392-.033.626-.097.232-.064.4-.121.506-.17l-.203.827Zm-.134-10.878a1.807 1.807 0 0 1-1.275.492c-.496 0-.924-.164-1.28-.492a1.57 1.57 0 0 1-.533-1.193c0-.465.18-.865.533-1.196a1.812 1.812 0 0 1 1.28-.497c.497 0 .923.165 1.275.497.353.331.53.731.53 1.196 0 .467-.177.865-.53 1.193Z" style="fill:#157ffb;fill-rule:nonzero" transform="translate(-1.257 -1.257) scale(1.0582)"/></svg><p class="custom-container-title">INFO</p>
<ul>
<li>Cú pháp <br>
<strong>SubString(find, start, length)</strong></li>
</ul>
</div>
<p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_3/Hinh_15.png?raw=true" alt="pic1"></p>
<p><strong>Hàm REPLACE</strong></p>
<div class="custom-container info"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M13 1.188C6.477 1.188 1.188 6.477 1.188 13S6.477 24.813 13 24.813 24.813 19.523 24.813 13c0-6.523-5.29-11.812-11.813-11.812Zm2.459 18.307c-.608.24-1.092.422-1.455.548a3.838 3.838 0 0 1-1.262.189c-.736 0-1.309-.18-1.717-.539a1.74 1.74 0 0 1-.611-1.367c0-.215.015-.435.045-.659a8.23 8.23 0 0 1 .147-.759l.761-2.688c.067-.258.125-.503.171-.731.046-.23.068-.441.068-.633 0-.342-.071-.582-.212-.717-.143-.135-.412-.201-.813-.201-.196 0-.398.029-.605.09-.205.063-.383.12-.529.176l.201-.828c.498-.203.975-.377 1.43-.521a4.225 4.225 0 0 1 1.29-.218c.731 0 1.295.178 1.692.53.395.353.594.812.594 1.376 0 .117-.014.323-.041.617a4.129 4.129 0 0 1-.152.811l-.757 2.68a7.582 7.582 0 0 0-.167.736 3.892 3.892 0 0 0-.073.626c0 .356.079.599.239.728.158.129.435.194.827.194.185 0 .392-.033.626-.097.232-.064.4-.121.506-.17l-.203.827Zm-.134-10.878a1.807 1.807 0 0 1-1.275.492c-.496 0-.924-.164-1.28-.492a1.57 1.57 0 0 1-.533-1.193c0-.465.18-.865.533-1.196a1.812 1.812 0 0 1 1.28-.497c.497 0 .923.165 1.275.497.353.331.53.731.53 1.196 0 .467-.177.865-.53 1.193Z" style="fill:#157ffb;fill-rule:nonzero" transform="translate(-1.257 -1.257) scale(1.0582)"/></svg><p class="custom-container-title">INFO</p>
<ul>
<li>Cú pháp <br>
<strong>REPLACE(search, find, replace)</strong></li>
<li>REPLACE</li>
</ul>
</div>
<p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_3/Hinh_16.png?raw=true" alt="pic1"></p>
<p><strong>Các hàm khác</strong>
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_3/Hinh_17.png?raw=true" alt="pic1"></p>
<ul>
<li>Demo các hàm xử lý chuỗi
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_3/Hinh_18.png?raw=true" alt="pic1"></li>
</ul>
<div class="custom-container warning"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.65 123.32C133.27 123.32 0 256.58 0 421c0 164.42 133.27 297.6 297.65 297.6 164.38 0 297.64-133.26 297.64-297.6 0-164.34-133.29-297.68-297.64-297.68Zm-.6 483.32c-22.591 0-41.18-18.589-41.18-41.18s18.589-41.18 41.18-41.18 41.18 18.589 41.18 41.18-18.589 41.18-41.18 41.18Zm42.38-164.27h-.23c-.139 22.489-18.681 40.916-41.17 40.916-22.586 0-41.171-18.585-41.171-41.171l.001-.255c0-1 .05-1.93.11-2.88V276.73h.03v-.27a45.8 45.8 0 0 1-.005-.642c0-22.59 18.589-41.18 41.18-41.18s41.18 18.59 41.18 41.18c0 .214-.002.428-.005.642v.27h.06l.02 165.64Z" style="fill:#f3cc2e;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.18)"/></svg><p class="custom-container-title">WARNING</p>
<ul>
<li>Vấn đề thường xảy ra với dữ liệu chuỗi <br>
Sắp thứ tự: Khi sắp xếp một cột kiểu chuỗi chứa số, bạn có thể nhận được kết quả không mong đợi <br>
Phân tách kí tự: Nếu chuỗi gồm hai hay nhiều thành phần, bạn có thể phân
tách chuỗi thành những thành phần độc lập.</li>
</ul>
</div>
<div class="custom-container tip"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/><path d="M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/></svg><p class="custom-container-title">TIP</p>
<ul>
<li>Giải quyết vấn đề <br>
Để tránh điều đó, bạn chuyển đổi cột kiểu chuỗi thành giá trị
số trong mệnh đề ORDER BY <br>
Sử dụng hàm CHARINDEX để định vị những ký tự phân tách.
Sau đó, dùng hàm LEFT, RIGHT, SUBSTRING và LEN để trích ra
những thành phần độc lập</li>
</ul>
</div>
<ul>
<li>Ví dụ <br>
Bảng NhanVien được sắp xếp bởi cột MaNV khi có dùng Cast
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_3/Hinh_19.png?raw=true" alt="pic1"></li>
</ul>
<p><strong>Các hàm ngày tháng năm</strong></p>
<ul>
<li>
<p>GETDATE trả về ngày tháng năm hiện tại (bao gồm ngày,tháng năm,giờ, phút,giây)
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_3/Hinh_20.png?raw=true" alt="pic1"></p>
</li>
<li>
<p>DATENAME: truy cập tới các thành phần liên quan ngày tháng
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_3/Hinh_21.png?raw=true" alt="pic1"></p>
</li>
</ul>
<div class="custom-container warning"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.65 123.32C133.27 123.32 0 256.58 0 421c0 164.42 133.27 297.6 297.65 297.6 164.38 0 297.64-133.26 297.64-297.6 0-164.34-133.29-297.68-297.64-297.68Zm-.6 483.32c-22.591 0-41.18-18.589-41.18-41.18s18.589-41.18 41.18-41.18 41.18 18.589 41.18 41.18-18.589 41.18-41.18 41.18Zm42.38-164.27h-.23c-.139 22.489-18.681 40.916-41.17 40.916-22.586 0-41.171-18.585-41.171-41.171l.001-.255c0-1 .05-1.93.11-2.88V276.73h.03v-.27a45.8 45.8 0 0 1-.005-.642c0-22.59 18.589-41.18 41.18-41.18s41.18 18.59 41.18 41.18c0 .214-.002.428-.005.642v.27h.06l.02 165.64Z" style="fill:#f3cc2e;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.18)"/></svg><p class="custom-container-title">WARNING</p>
<ul>
<li>Trong SQL Server dữ liệu ngày/giờ được xử lý dưới định dạng tháng/ngày/năm</li>
<li>Để sử dụng định dạng ngày/giờ dưới dạng ngày/tháng/năm. Cần chú ý: <br>
Khi sử dụng câu lệnh INSERT phải truyền dữ liệu ngày/giờ
theo định dạng tháng/ngày/năm <br>
Khi truy vấn dữ liệu, để lấy về giá trị có định dạng
ngày/tháng/năm có thể sử dụng hàm CONVERT với mã định
dạng 3 hoặc 103</li>
</ul>
</div>
</div></template>
