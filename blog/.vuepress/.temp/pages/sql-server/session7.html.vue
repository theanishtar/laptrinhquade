<template><div><!-- ---
layout: Post
title: Bài 7. Hàm người dùng định nghĩa & VIEW
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
<h1 id="function-va-view" tabindex="-1"><a class="header-anchor" href="#function-va-view" aria-hidden="true">#</a> Function và View</h1>
<p>Nội dung: <br></p>
<ul>
<li>Hàm người dùng định nghĩa</li>
<li>Khung nhìn View</li>
</ul>
<!-- more -->
<h2 id="_1-ham-nguoi-dung-đinh-nghia" tabindex="-1"><a class="header-anchor" href="#_1-ham-nguoi-dung-đinh-nghia" aria-hidden="true">#</a> 1. Hàm người dùng định nghĩa</h2>
<div class="custom-container info"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M13 1.188C6.477 1.188 1.188 6.477 1.188 13S6.477 24.813 13 24.813 24.813 19.523 24.813 13c0-6.523-5.29-11.812-11.813-11.812Zm2.459 18.307c-.608.24-1.092.422-1.455.548a3.838 3.838 0 0 1-1.262.189c-.736 0-1.309-.18-1.717-.539a1.74 1.74 0 0 1-.611-1.367c0-.215.015-.435.045-.659a8.23 8.23 0 0 1 .147-.759l.761-2.688c.067-.258.125-.503.171-.731.046-.23.068-.441.068-.633 0-.342-.071-.582-.212-.717-.143-.135-.412-.201-.813-.201-.196 0-.398.029-.605.09-.205.063-.383.12-.529.176l.201-.828c.498-.203.975-.377 1.43-.521a4.225 4.225 0 0 1 1.29-.218c.731 0 1.295.178 1.692.53.395.353.594.812.594 1.376 0 .117-.014.323-.041.617a4.129 4.129 0 0 1-.152.811l-.757 2.68a7.582 7.582 0 0 0-.167.736 3.892 3.892 0 0 0-.073.626c0 .356.079.599.239.728.158.129.435.194.827.194.185 0 .392-.033.626-.097.232-.064.4-.121.506-.17l-.203.827Zm-.134-10.878a1.807 1.807 0 0 1-1.275.492c-.496 0-.924-.164-1.28-.492a1.57 1.57 0 0 1-.533-1.193c0-.465.18-.865.533-1.196a1.812 1.812 0 0 1 1.28-.497c.497 0 .923.165 1.275.497.353.331.53.731.53 1.196 0 .467-.177.865-.53 1.193Z" style="fill:#157ffb;fill-rule:nonzero" transform="translate(-1.257 -1.257) scale(1.0582)"/></svg><p class="custom-container-title">INFO</p>
<ul>
<li>Là một đối tượng CSDL chứa các câu lệnh SQL, được biên dịch sẵn và lưu trữ trong CSDL.</li>
<li>Thực hiện một hành động như các tính toán phức tạp và trả về kết quả là một giá trị.</li>
<li>Giá trị trả về có thể là: <strong>giá trị vô hướng</strong> hoặc <strong>một bảng</strong></li>
</ul>
</div>
<p><strong>So sánh với thủ tục</strong></p>
<ul>
<li>
<p>Tương tự như Stored Procedure <br>
Là một đối tượng CSDL chứa các câu lệnh SQL, được biên dịch sẵn và lưu trữ trong CSDL.</p>
</li>
<li>
<p>Khác với Stored Procedure <br>
Các hàm luôn phải trả về một giá trị, sử dụng câu lệnh RETURN <br>
Hàm không có tham số đầu ra <br>
Không được chứa các câu lệnh INSERT, UPDATE, DELETE một bảng hoặc view đang tồn tại trong CSDL <br>
Có thể tạo bảng, bảng tạm, biến bảng và thực hiện các câu lệnh INSERT, UPDATE, DELETE trên các bảng, bảng tạm, biến bảng vừa tạo trong thân hàm <br></p>
</li>
<li>
<p>Ví dụ: <br>
Viết hàm tính tuổi của người có năm sinh là @ns:
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_7/Hinh_1.png?raw=true" alt="pic1"></p>
</li>
</ul>
<p><strong>Các loại hàm</strong></p>
<ul>
<li><strong>Hàm giá trị vô hướng:</strong> Trả về giá trị đơn của mọi kiểu dữ liệu T-SQL</li>
<li><strong>Hàm giá trị bảng đơn giản:</strong> Trả về bảng, là kết quả của một câu lệnh SELECT đơn giản</li>
<li><strong>Hàm giá trị bảng nhiều câu lệnh:</strong> Trả về bảng, là kết quả của nhiều câu lệnh</li>
</ul>
<p><strong>Hàm giá trị vô hướng</strong></p>
<ul>
<li>Cú pháp
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_7/Hinh_2.png?raw=true" alt="pic1"></li>
</ul>
<div class="custom-container warning"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.65 123.32C133.27 123.32 0 256.58 0 421c0 164.42 133.27 297.6 297.65 297.6 164.38 0 297.64-133.26 297.64-297.6 0-164.34-133.29-297.68-297.64-297.68Zm-.6 483.32c-22.591 0-41.18-18.589-41.18-41.18s18.589-41.18 41.18-41.18 41.18 18.589 41.18 41.18-18.589 41.18-41.18 41.18Zm42.38-164.27h-.23c-.139 22.489-18.681 40.916-41.17 40.916-22.586 0-41.171-18.585-41.171-41.171l.001-.255c0-1 .05-1.93.11-2.88V276.73h.03v-.27a45.8 45.8 0 0 1-.005-.642c0-22.59 18.589-41.18 41.18-41.18s41.18 18.59 41.18 41.18c0 .214-.002.428-.005.642v.27h.06l.02 165.64Z" style="fill:#f3cc2e;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.18)"/></svg><p class="custom-container-title">WARNING</p>
<ul>
<li>Không thể truyền tham số theo tên</li>
<li>Truyền đầy đủ các tham số theo vị trí. Kể cả tham số tùy chọn, nếu muốn sử dụng giá trị mặc định, phải đặt từ khóa DEFAULT tại đúng vị trí tham số tùy chọn đó.</li>
</ul>
</div>
<ul>
<li>
<p>Ví dụ 1: <br>
Câu lệnh tạo hàm giá trị vô hướng trả về tổng số lượng nhân viên:
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_7/Hinh_3.png?raw=true" alt="pic1"></p>
</li>
<li>
<p>Ví dụ 2: <br>
Câu lệnh tạo hàm giá trị vô hướng trả về tổng số lượng nhân viên theo giới tính:
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_7/Hinh_4.png?raw=true" alt="pic1"></p>
</li>
</ul>
<p><strong>Hàm giá trị bảng đơn giản</strong></p>
<div class="custom-container info"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M13 1.188C6.477 1.188 1.188 6.477 1.188 13S6.477 24.813 13 24.813 24.813 19.523 24.813 13c0-6.523-5.29-11.812-11.813-11.812Zm2.459 18.307c-.608.24-1.092.422-1.455.548a3.838 3.838 0 0 1-1.262.189c-.736 0-1.309-.18-1.717-.539a1.74 1.74 0 0 1-.611-1.367c0-.215.015-.435.045-.659a8.23 8.23 0 0 1 .147-.759l.761-2.688c.067-.258.125-.503.171-.731.046-.23.068-.441.068-.633 0-.342-.071-.582-.212-.717-.143-.135-.412-.201-.813-.201-.196 0-.398.029-.605.09-.205.063-.383.12-.529.176l.201-.828c.498-.203.975-.377 1.43-.521a4.225 4.225 0 0 1 1.29-.218c.731 0 1.295.178 1.692.53.395.353.594.812.594 1.376 0 .117-.014.323-.041.617a4.129 4.129 0 0 1-.152.811l-.757 2.68a7.582 7.582 0 0 0-.167.736 3.892 3.892 0 0 0-.073.626c0 .356.079.599.239.728.158.129.435.194.827.194.185 0 .392-.033.626-.097.232-.064.4-.121.506-.17l-.203.827Zm-.134-10.878a1.807 1.807 0 0 1-1.275.492c-.496 0-.924-.164-1.28-.492a1.57 1.57 0 0 1-.533-1.193c0-.465.18-.865.533-1.196a1.812 1.812 0 0 1 1.28-.497c.497 0 .923.165 1.275.497.353.331.53.731.53 1.196 0 .467-.177.865-.53 1.193Z" style="fill:#157ffb;fill-rule:nonzero" transform="translate(-1.257 -1.257) scale(1.0582)"/></svg><p class="custom-container-title">INFO</p>
<ul>
<li>Hàm giá trị bảng đơn giản còn gọi là hàm giá trị bảng nội tuyến</li>
<li>Hàm giá trị bảng đơn giản có thể được dùng trong câu lệnh truy vấn thay thế cho tên bảng hoặc tên view</li>
</ul>
</div>
<ul>
<li>
<p>Cú pháp
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_7/Hinh_5.png?raw=true" alt="pic1"></p>
</li>
<li>
<p>Ví dụ: <br>
Viết hàm trả về bảng các nhân viên làm việc ở phòng số 5
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_7/Hinh_6.png?raw=true" alt="pic1"></p>
</li>
</ul>
<p><strong>Hàm giá trị bảng đa câu lệnh</strong></p>
<ul>
<li>
<p>Cú pháp
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_7/Hinh_7.png?raw=true" alt="pic1"></p>
</li>
<li>
<p>Ví dụ: <br>
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_7/Hinh_8.png?raw=true" alt="pic1"></p>
</li>
</ul>
<p><strong>Xóa nội dung một hàm</strong></p>
<div class="custom-container tip"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/><path d="M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/></svg><p class="custom-container-title">TIP</p>
<ul>
<li>Cú pháp <br>
<strong>DROP FUNCTION [&lt;tên schema&gt;.]&lt;tên hàm&gt;[,...]</strong></li>
</ul>
</div>
<hr>
<h2 id="_2-loi-ich-cua-view" tabindex="-1"><a class="header-anchor" href="#_2-loi-ich-cua-view" aria-hidden="true">#</a> 2. Lợi ích của VIEW</h2>
<ul>
<li>Che dấu và bảo mật dữ liệu</li>
<li>Hiển thị dữ liệu một cách tùy biến</li>
<li>Lưu trữ câu lệnh truy vấn phức tạp và thường xuyên sử dụng</li>
<li>Thực thi nhanh hơn các câu lệnh truy vấn do đã được biên dịch sẵn</li>
<li>Đảm bảo tính toàn vẹn dữ liệu</li>
</ul>
<p><strong>Cú pháp tạo VIEW</strong>
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_7/Hinh_9.png?raw=true" alt="pic1"></p>
<blockquote>
<p>Tên view không được trùng với tên bảng hoặc view đã tồn tại <br><br>
<strong>Câu lệnh SELECT tạo VIEW</strong> không được chứa mệnh đề INTO, hoặc ORDER BY trừ khi chứa từ khóa TOP <br><br>
Đặt tên cột:</p>
<ul>
<li>Cột chứa giá trị được tính toán từ nhiều cột khác phải được đặt tên <br></li>
<li>Nếu cột không được đặt tên, tên cột sẽ được mặc định giống tên cột của bảng cơ sở <br></li>
</ul>
</blockquote>
<ul>
<li>Ví dụ: <br>
Tạo view chứa 2 thông tin là tên nhân viên và tên phòng ban
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_7/Hinh_10.png?raw=true" alt="pic1"></li>
</ul>
<p><strong>Phân loại VIEW</strong></p>
<ul>
<li>
<p>VIEW chỉ đọc (read-only view) <br>
View này chỉ dùng để xem dữ liệu</p>
</li>
<li>
<p>VIEW có thể cập nhật (updatable view) <br>
Xem dữ liệu <br>
Có thể sử dụng câu lệnh INSERT, UPDATE, DELETE để cập nhật dữ liệu trong các bảng cơ sở qua View</p>
</li>
</ul>
<div class="custom-container warning"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.65 123.32C133.27 123.32 0 256.58 0 421c0 164.42 133.27 297.6 297.65 297.6 164.38 0 297.64-133.26 297.64-297.6 0-164.34-133.29-297.68-297.64-297.68Zm-.6 483.32c-22.591 0-41.18-18.589-41.18-41.18s18.589-41.18 41.18-41.18 41.18 18.589 41.18 41.18-18.589 41.18-41.18 41.18Zm42.38-164.27h-.23c-.139 22.489-18.681 40.916-41.17 40.916-22.586 0-41.171-18.585-41.171-41.171l.001-.255c0-1 .05-1.93.11-2.88V276.73h.03v-.27a45.8 45.8 0 0 1-.005-.642c0-22.59 18.589-41.18 41.18-41.18s41.18 18.59 41.18 41.18c0 .214-.002.428-.005.642v.27h.06l.02 165.64Z" style="fill:#f3cc2e;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.18)"/></svg><p class="custom-container-title">WARNING</p>
<ul>
<li><strong>Câu lệnh select không được chứa</strong> <br>
Mệnh đề DISTINCT hoặc TOP <br>
Một hàm kết tập (Aggregate function) <br>
Một giá trị được tính toán <br>
Mệnh đề GROUP BY và HAVING <br>
Toán tử UNION <br>
Nếu câu lệnh tạo View vi phạm một trong số điều kiện trên. VIEW được tạo ra là VIEW chỉ đọc</li>
</ul>
</div>
<p><strong>VIEW có thể cập nhật</strong></p>
<ul>
<li>Ví dụ: <br>
Tạo View có thể cập nhật được, hiển thị tên phòng có mã phòng 6
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_7/Hinh_11.png?raw=true" alt="pic1"></li>
</ul>
<p><strong>VIEW chỉ đọc</strong></p>
<ul>
<li>Ví dụ: <br>
Tạo View có thể cập nhật được, hiển thị tên phòng có mã phòng 6
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_7/Hinh_12.png?raw=true" alt="pic1"></li>
</ul>
<p><strong>Xóa và chỉnh sửa VIEW</strong></p>
<ul>
<li>
<p>Câu lệnh xóa <br>
<strong>DROP VIEW &lt;tên View&gt;</strong></p>
</li>
<li>
<p>Câu lệnh chỉnh sửa <br>
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_7/Hinh_13.png?raw=true" alt="pic1"></p>
</li>
<li>
<p>Ví dụ:
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_7/Hinh_14.png?raw=true" alt="pic1"></p>
</li>
</ul>
</div></template>
