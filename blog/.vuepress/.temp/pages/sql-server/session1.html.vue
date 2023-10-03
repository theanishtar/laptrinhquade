<template><div><!-- ---
layout: Post
title: Bài 1. Giới thiệu về SQL Server
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
<p>Nội dung:</p>
<ul>
<li>Tổng quan về SQL Server.</li>
<li>SQL SERVER MANAGEMENT STUDIO.</li>
</ul>
<!-- more -->
<h1 id="tong-quan-ve-he-qt-csdl" tabindex="-1"><a class="header-anchor" href="#tong-quan-ve-he-qt-csdl" aria-hidden="true">#</a> Tổng quan về hệ QT-CSDL</h1>
<h2 id="_1-đoi-net-ve-sql-server" tabindex="-1"><a class="header-anchor" href="#_1-đoi-net-ve-sql-server" aria-hidden="true">#</a> 1. Đôi nét về SQL Server</h2>
<div class="custom-container info"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M13 1.188C6.477 1.188 1.188 6.477 1.188 13S6.477 24.813 13 24.813 24.813 19.523 24.813 13c0-6.523-5.29-11.812-11.813-11.812Zm2.459 18.307c-.608.24-1.092.422-1.455.548a3.838 3.838 0 0 1-1.262.189c-.736 0-1.309-.18-1.717-.539a1.74 1.74 0 0 1-.611-1.367c0-.215.015-.435.045-.659a8.23 8.23 0 0 1 .147-.759l.761-2.688c.067-.258.125-.503.171-.731.046-.23.068-.441.068-.633 0-.342-.071-.582-.212-.717-.143-.135-.412-.201-.813-.201-.196 0-.398.029-.605.09-.205.063-.383.12-.529.176l.201-.828c.498-.203.975-.377 1.43-.521a4.225 4.225 0 0 1 1.29-.218c.731 0 1.295.178 1.692.53.395.353.594.812.594 1.376 0 .117-.014.323-.041.617a4.129 4.129 0 0 1-.152.811l-.757 2.68a7.582 7.582 0 0 0-.167.736 3.892 3.892 0 0 0-.073.626c0 .356.079.599.239.728.158.129.435.194.827.194.185 0 .392-.033.626-.097.232-.064.4-.121.506-.17l-.203.827Zm-.134-10.878a1.807 1.807 0 0 1-1.275.492c-.496 0-.924-.164-1.28-.492a1.57 1.57 0 0 1-.533-1.193c0-.465.18-.865.533-1.196a1.812 1.812 0 0 1 1.28-.497c.497 0 .923.165 1.275.497.353.331.53.731.53 1.196 0 .467-.177.865-.53 1.193Z" style="fill:#157ffb;fill-rule:nonzero" transform="translate(-1.257 -1.257) scale(1.0582)"/></svg><p class="custom-container-title">INFO</p>
<ul>
<li><strong>SQL Server</strong> Là hệ quản trị cơ sở dữ liệu quan hệ <strong>(RDBMS)</strong> do <strong>Microsoft</strong> phát triển.</li>
<li>Hoạt động theo mô hình <strong>khách chủ</strong> cho phép đồng thời cùng lúc có nhiều người dùng truy xuất đến dữ liệu.
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_1/Hinh_1.jpg?raw=true" alt="pic1"></li>
</ul>
</div>
<div class="custom-container tip"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/><path d="M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/></svg><p class="custom-container-title">TIP</p>
<p><strong>SQL Server</strong> có thể xây dựng cơ sở dữ liệu. <br>
Duy trì cơ sở dữ liệu. <br>
Hỗ trợ các thao tác dữ liệu: truy vấn, phân tích dữ liệu, tạo báo cáo, trích xuất và tổng hợp dữ liệu.</p>
</div>
<hr>
<h2 id="_2-cac-cong-cu-su-dung-sql-server" tabindex="-1"><a class="header-anchor" href="#_2-cac-cong-cu-su-dung-sql-server" aria-hidden="true">#</a> 2. Các công cụ sử dụng SQL Server</h2>
<ul>
<li>Database Engine.</li>
<li>Analysis Services.</li>
<li>Analysis Services.</li>
<li>Reporting Services.</li>
<li><strong>Sql server management studio</strong>.</li>
</ul>
<h2 id="_3-luu-y-khi-cai-đat" tabindex="-1"><a class="header-anchor" href="#_3-luu-y-khi-cai-đat" aria-hidden="true">#</a> 3. Lưu ý khi cài đặt</h2>
<p>Xác định các tính năng cần sử dụng, tránh cài full các tính năng gây lãng phí tài nguyên.</p>
<p>Xác định các yêu cầu phần cứng, phần mềm <a href="https://learn.microsoft.com/en-us/sql/sql-server/install/hardware-and-software-requirements-for-installing-sql-server?view=sql-server-2017" target="_blank" rel="noopener noreferrer">sau đây</a></p>
<p>Download bản cài đặt: <a href="https://www.microsoft.com/en-us/sql-server/sql-server-downloads" target="_blank" rel="noopener noreferrer">sau đây</a></p>
<hr>
<h2 id="_4-sql-server-management-studio" tabindex="-1"><a class="header-anchor" href="#_4-sql-server-management-studio" aria-hidden="true">#</a> 4. Sql server management studio</h2>
<ul>
<li>SQL Server Management Studio là công cụ trong SQL Server</li>
<li>Giúp kết nối và quản lý SQL Server trên giao diện đồ họa thay vì phải dùng tới dòng lệnh.</li>
<li>Khi khởi động Management Studio, một hộp thoại hiện lên yêu cầu nhập thông tin kết nối tới SQL Server.</li>
</ul>
<div class="custom-container tip"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/><path d="M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/></svg><p class="custom-container-title">TIP</p>
<p>Hai loại xác thực khi kết nối SQL Server</p>
<ul>
<li>Windows Authentication: Sử dụng Windows Login ID</li>
<li>SQL Server Authentication: Sử dụng SQL Login ID.</li>
</ul>
</div>
<p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_1/Hinh_2.png?raw=true" alt="pic1">
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_1/Hinh_3.png?raw=true" alt="pic1"></p>
<p>Ở các bài viết sau về SQL Server mình sẽ sử dụng <a href="https://learn.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver16" target="_blank" rel="noopener noreferrer">Sql server management studio</a> nhé, các bạn tải và cài đặt phần mềm tại <a href="https://www.microsoft.com/en-us/sql-server/sql-server-downloads" target="_blank" rel="noopener noreferrer">đây</a></p>
<hr>
<h2 id="_5-cai-đat-sql-server-management-studio" tabindex="-1"><a class="header-anchor" href="#_5-cai-đat-sql-server-management-studio" aria-hidden="true">#</a> 5. Cài đặt Sql server management studio</h2>
<div class="custom-container warning"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.65 123.32C133.27 123.32 0 256.58 0 421c0 164.42 133.27 297.6 297.65 297.6 164.38 0 297.64-133.26 297.64-297.6 0-164.34-133.29-297.68-297.64-297.68Zm-.6 483.32c-22.591 0-41.18-18.589-41.18-41.18s18.589-41.18 41.18-41.18 41.18 18.589 41.18 41.18-18.589 41.18-41.18 41.18Zm42.38-164.27h-.23c-.139 22.489-18.681 40.916-41.17 40.916-22.586 0-41.171-18.585-41.171-41.171l.001-.255c0-1 .05-1.93.11-2.88V276.73h.03v-.27a45.8 45.8 0 0 1-.005-.642c0-22.59 18.589-41.18 41.18-41.18s41.18 18.59 41.18 41.18c0 .214-.002.428-.005.642v.27h.06l.02 165.64Z" style="fill:#f3cc2e;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.18)"/></svg><p class="custom-container-title">WARNING</p>
<p>Hãy đảm bảo máy tính bạn dùng để cài đặt SQL Server phải được kết nối với Internet.</p>
</div>
<ul>
<li><strong>B1</strong> : Truy cập <a href="https://www.microsoft.com/en-us/sql-server/sql-server-downloads" target="_blank" rel="noopener noreferrer">tại đây</a></li>
</ul>
<h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> <img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_1/Hinh_4.png?raw=true" alt="pic1"></h2>
<ul>
<li>
<p><strong>B2</strong> : Chọn như bình bên dưới để download file dạng media về máy:
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_1/Hinh_5.png?raw=true" alt="pic1">
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_1/Hinh_6.png?raw=true" alt="pic1"></p>
</li>
<li>
<p><strong>B3</strong> : Nhấn nút đownload, đợi nó tải đầy cây màu xanh:
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_1/Hinh_7.png?raw=true" alt="pic1"></p>
</li>
<li>
<p><strong>B4</strong> : Chạy file cài đặt:
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_1/Hinh_8.png?raw=true" alt="pic1"></p>
</li>
<li>
<p>Chọn nơi cần giản nén để cài:
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_1/Hinh_9.png?raw=true" alt="pic1"></p>
</li>
<li>
<p><strong>B5</strong> : Chọn new sql server stand-alone installation
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_1/Hinh_10.png?raw=true" alt="pic1"></p>
</li>
<li>
<p><strong>Tiến hành cài đặt bình thường, một số màn hình quan trọng:</strong>
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_1/Hinh_11.png?raw=true" alt="pic1">
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_1/Hinh_12.png?raw=true" alt="pic1">
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_1/Hinh_13.png?raw=true" alt="pic1">
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_1/Hinh_14.png?raw=true" alt="pic1"></p>
</li>
</ul>
<hr>
<h2 id="_6-attach-file-co-so-du-lieu" tabindex="-1"><a class="header-anchor" href="#_6-attach-file-co-so-du-lieu" aria-hidden="true">#</a> 6. Attach File cơ sở dữ liệu</h2>
<ul>
<li>Tạo một CSDL mới sử dụng file CSDL đã có.</li>
<li>Tạo một CSDL mới sử dụng file CSDL đã có. <br>
mdf: File chứa dữ liệu <br>
ldf: File log</li>
<li>Trong cửa sổ Object Explorer Click chuột phải vào mục Databases Chọn Attach.
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_1/Hinh_15.png?raw=true" alt="pic1"></li>
<li>Nhắn nút Add để duyệt đến file nơi lưu dữ liệu
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_1/Hinh_16.png?raw=true" alt="pic1"></li>
<li>Attach File cơ sở dữ liệu <br>
Chọn đường dẫn
Chọn tên file CSDL
Nhấn nút OK
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_1/Hinh_17.png?raw=true" alt="pic1"></li>
</ul>
<hr>
<h2 id="_7-detach-file-co-so-du-lieu" tabindex="-1"><a class="header-anchor" href="#_7-detach-file-co-so-du-lieu" aria-hidden="true">#</a> 7. Detach File cơ sở dữ liệu</h2>
<div class="custom-container warning"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.65 123.32C133.27 123.32 0 256.58 0 421c0 164.42 133.27 297.6 297.65 297.6 164.38 0 297.64-133.26 297.64-297.6 0-164.34-133.29-297.68-297.64-297.68Zm-.6 483.32c-22.591 0-41.18-18.589-41.18-41.18s18.589-41.18 41.18-41.18 41.18 18.589 41.18 41.18-18.589 41.18-41.18 41.18Zm42.38-164.27h-.23c-.139 22.489-18.681 40.916-41.17 40.916-22.586 0-41.171-18.585-41.171-41.171l.001-.255c0-1 .05-1.93.11-2.88V276.73h.03v-.27a45.8 45.8 0 0 1-.005-.642c0-22.59 18.589-41.18 41.18-41.18s41.18 18.59 41.18 41.18c0 .214-.002.428-.005.642v.27h.06l.02 165.64Z" style="fill:#f3cc2e;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.18)"/></svg><p class="custom-container-title">WARNING</p>
<ul>
<li>Khi attach một file CSDL, ta không thể di chuyển file đó đến vị trí mới</li>
<li>Để di chuyển file CSDL tới vị trí mới
Detach file CSDL
Di chuyển file CSDL tới vị trí mới. Sau đó attach lại CSDL</li>
</ul>
</div>
<ul>
<li>Mở rộng mục Databases trong cửa sổ Object Explorer</li>
<li>Click chuột phải vào CSDL cần detach.
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_1/Hinh_18.png?raw=true" alt="pic1"></li>
</ul>
<hr>
<h2 id="_8-huong-dan-hien-thi-luoc-đo-csdl" tabindex="-1"><a class="header-anchor" href="#_8-huong-dan-hien-thi-luoc-đo-csdl" aria-hidden="true">#</a> 8. Hướng dẫn hiển thị lược đồ CSDL</h2>
<ul>
<li>Lược đồ CSDL hiển thị các bảng CSDL, các cột của bảng và quan hệ giữa các bảng trong CSDL</li>
<li>Mở rộng database cần tạo lược đồ, phải chuột database
diagrams chọn new database diagrams =&gt; chọn các table cần
thiết =&gt; chọn Add
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_1/Hinh_19.png?raw=true" alt="pic1"></li>
</ul>
<hr>
<h2 id="_9-thao-tac-voi-co-so-du-lieu-tren-query-editor" tabindex="-1"><a class="header-anchor" href="#_9-thao-tac-voi-co-so-du-lieu-tren-query-editor" aria-hidden="true">#</a> 9. Thao tác với cơ sở dữ liệu trên Query Editor</h2>
<ul>
<li>Sử dụng lệnh use chọn database cần thao tác</li>
</ul>
<div class="custom-container tip"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/><path d="M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/></svg><p class="custom-container-title">TIP</p>
<ul>
<li>Câu lệnh SQL không phân biệt chữ hoa, chữ thường.</li>
<li>Câu lệnh SQL có thể viết trên 1 hoặc nhiều dòng.</li>
<li>Các từ khóa không được viết tắt hoặc tách ra thành nhiều dòng.</li>
<li>Các mệnh đề khác nhau nên đặt trên những dòng khác nhau.</li>
</ul>
</div>
<ul>
<li>Dạng đơn giản, cú pháp của lệnh SELECT như sau:
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_1/Hinh_20.png?raw=true" alt="pic1"></li>
<li>Dạng đầy đủ, cú pháp của lệnh SELECT trong SQL Server:
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_1/Hinh_21.png?raw=true" alt="pic1"></li>
<li>Sử dụng nhiều bảng dữ liệu
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_1/Hinh_22.png?raw=true" alt="pic1"></li>
</ul>
</div></template>
