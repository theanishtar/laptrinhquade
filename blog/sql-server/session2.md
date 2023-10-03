<!-- ---
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

# Tạo CSDL quan hệ và T-SQL

Nội dung: <br>
- Tổng quan về SQL Server.
- SQL SERVER MANAGEMENT STUDIO.

<!-- more -->

## 1. Kiểu dữ liệu

::: info
- Kiểu dữ liệu SQL là một thuộc tính xác định Kiểu
dữ liệu cho các đối tượng: biến, cột…
:::
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_2/Hinh_1.png?raw=true)

- Kiểu dữ liệu chuỗi
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_2/Hinh_2.png?raw=true)

::: tip
- Kiểu char và nchar dùng để lưu trữ chuỗi có độ dài cố định.
<br> Ví dụ: Mã sinh viên
- Kiểu varchar, nvarchar dùng để lưu trữ chuỗi có độ
dài thay đổi.
- Kiểu nchar, nvarchar dùng để lưu trữ kí tự Unicode.
Hệ thống hỗ trợ đa ngôn ngữ nên sử dụng kiểu này
:::

- Kiểu dữ liệu số
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_2/Hinh_3.png?raw=true)
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_2/Hinh_4.png?raw=true)
::: tip
- Dùng lưu trữ các dữ liệu số, sử dụng trong tính toán
- Trong một số trường hợp thường sử dụng kiểu chuỗi
làm kiểu dữ liệu thay thế khi lưu trữ dữ liệu số như: số
điện thoại, số chứng minh, mã ZipCode
:::

- Kiểu dữ liệu thời gian.
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_2/Hinh_5.png?raw=true)

---

## 2. Tạo CSDL quan hệ

- Một database bao gồm tối thiểu hai file <br>
mdf: lưu trữ các đối tượng trong database như table,
view, … <br>
ldf: lưu trữ quá trình cập nhật/thay đổi dữ liệu
- Các thông số về kích thước file <br>
Initial size
File growth
Maximum file size
- Tạo database <br>
Sử dụng công cụ Sql server management studio 
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_2/Hinh_6.png?raw=true)
- Tạo database <br>
Sử dụng câu query
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_2/Hinh_7.png?raw=true)
- Tạo bảng <br>
Sử dụng công cụ Sql server management studio
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_2/Hinh_8.png?raw=true)
- Tạo bảng <br>
Sử dụng câu query
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_2/Hinh_9.png?raw=true)
- Chỉnh sửa bảng
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_2/Hinh_10.png?raw=true)
- Xóa bảng
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_2/Hinh_11.png?raw=true)
- Thiết lập khóa ngoại
Click vào button Relationships trên thanh công cụ
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_2/Hinh_12.png?raw=true)
- Thiết lập khóa ngoại
Sử dụng câu query
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_2/Hinh_13.png?raw=true)

tham khảo các lệnh đầy đủ [tại đây](https://www.w3schools.com/sql/sql_foreignkey.asp)

## 3. Khái niệm biến

::: info
- **Biến (Variable)** dùng để lưu trữ các giá trị tạm thời trong quá trình thực thi chương trình.
:::
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_2/Hinh_14.png?raw=true)

**Biến vô hướng**
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_2/Hinh_15.png?raw=true)
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_2/Hinh_16.png?raw=true)
- Ví dụ biến vô hướng
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_2/Hinh_17.png?raw=true)

**Biến bảng**: lưu trữ dữ liệu dạng bảng
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_2/Hinh_18.png?raw=true)
::: tip
Có thể tham chiếu đến biến bảng trong câu lệnh **SELECT, INSERT, UPDATE, DELETE**
:::

::: warning
- Không thể sử dụng câu lệnh **SELECT INTO** với biến bảng
:::

- Ví dụ biến bảng <br>
Tạo biến chứa các nhân viên ở HCM
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_2/Hinh_19.png?raw=true)
---

## 4. Ngôn ngữ truy vấn T-SQL
::: info
- **Transact-SQL (còn gọi là T-SQL)** là một ngôn ngữ lập trình database hướng thủ tục độc quyền của **Microsoft** sử dụng trong SQL Server.
- T-SQL tổ chức theo từng khối lệnh
- Một khối lệnh có thể lồng bên trong một khối lệnh khác
- Một khối lệnh bắt đầu bởi **BEGIN** và kết thúc bởi **END**, bên trong khối lệnh có nhiều lệnh, và các lệnh ngăn cách nhau bởi **dấu chấm phẩy**
:::
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_2/Hinh_20.png?raw=true)

- Ví dụ <br>
Sử dụng biến để tính diện tích, chu vi hình chữ nhật khi biết chiều dài và chiều rộng.
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_2/Hinh_21.png?raw=true)

