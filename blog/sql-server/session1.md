<!-- ---
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

Nội dung: 
- Tổng quan về SQL Server.
- SQL SERVER MANAGEMENT STUDIO.

<!-- more -->
# Tổng quan về hệ QT-CSDL

## 1. Đôi nét về SQL Server

::: info
- **SQL Server** Là hệ quản trị cơ sở dữ liệu quan hệ **(RDBMS)** do **Microsoft** phát triển.
- Hoạt động theo mô hình **khách chủ** cho phép đồng thời cùng lúc có nhiều người dùng truy xuất đến dữ liệu.
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_1/Hinh_1.jpg?raw=true)
:::

::: tip
**SQL Server** có thể xây dựng cơ sở dữ liệu. <br>
Duy trì cơ sở dữ liệu. <br>
Hỗ trợ các thao tác dữ liệu: truy vấn, phân tích dữ liệu, tạo báo cáo, trích xuất và tổng hợp dữ liệu.
:::

---

## 2. Các công cụ sử dụng SQL Server

- Database Engine.
- Analysis Services.
- Analysis Services.
- Reporting Services.
- **Sql server management studio**.

## 3. Lưu ý khi cài đặt 

Xác định các tính năng cần sử dụng, tránh cài full các tính năng gây lãng phí tài nguyên.

Xác định các yêu cầu phần cứng, phần mềm [sau đây](https://learn.microsoft.com/en-us/sql/sql-server/install/hardware-and-software-requirements-for-installing-sql-server?view=sql-server-2017)

Download bản cài đặt: [sau đây](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)

---

## 4. Sql server management studio
- SQL Server Management Studio là công cụ trong SQL Server
- Giúp kết nối và quản lý SQL Server trên giao diện đồ họa thay vì phải dùng tới dòng lệnh.
- Khi khởi động Management Studio, một hộp thoại hiện lên yêu cầu nhập thông tin kết nối tới SQL Server.
::: tip
Hai loại xác thực khi kết nối SQL Server
- Windows Authentication: Sử dụng Windows Login ID
- SQL Server Authentication: Sử dụng SQL Login ID.
:::

![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_1/Hinh_2.png?raw=true)
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_1/Hinh_3.png?raw=true)

Ở các bài viết sau về SQL Server mình sẽ sử dụng [Sql server management studio](https://learn.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver16) nhé, các bạn tải và cài đặt phần mềm tại [đây](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)

---

## 5. Cài đặt Sql server management studio

::: warning
Hãy đảm bảo máy tính bạn dùng để cài đặt SQL Server phải được kết nối với Internet. 
:::

- **B1** : Truy cập [tại đây](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)

![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_1/Hinh_4.png?raw=true)
---

- **B2** : Chọn như bình bên dưới để download file dạng media về máy:
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_1/Hinh_5.png?raw=true)
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_1/Hinh_6.png?raw=true)

- **B3** : Nhấn nút đownload, đợi nó tải đầy cây màu xanh:
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_1/Hinh_7.png?raw=true)

- **B4** : Chạy file cài đặt:
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_1/Hinh_8.png?raw=true)

- Chọn nơi cần giản nén để cài:
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_1/Hinh_9.png?raw=true)

- **B5** : Chọn new sql server stand-alone installation
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_1/Hinh_10.png?raw=true)

- **Tiến hành cài đặt bình thường, một số màn hình quan trọng:**
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_1/Hinh_11.png?raw=true)
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_1/Hinh_12.png?raw=true)
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_1/Hinh_13.png?raw=true)
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_1/Hinh_14.png?raw=true)
---


## 6. Attach File cơ sở dữ liệu

- Tạo một CSDL mới sử dụng file CSDL đã có.
- Tạo một CSDL mới sử dụng file CSDL đã có. <br>
 mdf: File chứa dữ liệu <br>
 ldf: File log
- Trong cửa sổ Object Explorer Click chuột phải vào mục Databases Chọn Attach.
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_1/Hinh_15.png?raw=true)
- Nhắn nút Add để duyệt đến file nơi lưu dữ liệu
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_1/Hinh_16.png?raw=true)
- Attach File cơ sở dữ liệu <br>
Chọn đường dẫn
Chọn tên file CSDL
Nhấn nút OK
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_1/Hinh_17.png?raw=true)

---

## 7. Detach File cơ sở dữ liệu

::: warning
- Khi attach một file CSDL, ta không thể di chuyển file đó đến vị trí mới
- Để di chuyển file CSDL tới vị trí mới
Detach file CSDL
Di chuyển file CSDL tới vị trí mới. Sau đó attach lại CSDL
:::

- Mở rộng mục Databases trong cửa sổ Object Explorer
- Click chuột phải vào CSDL cần detach.
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_1/Hinh_18.png?raw=true)

---

## 8. Hướng dẫn hiển thị lược đồ CSDL

- Lược đồ CSDL hiển thị các bảng CSDL, các cột của bảng và quan hệ giữa các bảng trong CSDL
- Mở rộng database cần tạo lược đồ, phải chuột database
diagrams chọn new database diagrams => chọn các table cần
thiết => chọn Add
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_1/Hinh_19.png?raw=true)
---

## 9. Thao tác với cơ sở dữ liệu trên Query Editor

- Sử dụng lệnh use chọn database cần thao tác
::: tip
- Câu lệnh SQL không phân biệt chữ hoa, chữ thường.
- Câu lệnh SQL có thể viết trên 1 hoặc nhiều dòng.
- Các từ khóa không được viết tắt hoặc tách ra thành nhiều dòng.
- Các mệnh đề khác nhau nên đặt trên những dòng khác nhau.
:::
- Dạng đơn giản, cú pháp của lệnh SELECT như sau:
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_1/Hinh_20.png?raw=true)
- Dạng đầy đủ, cú pháp của lệnh SELECT trong SQL Server:
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_1/Hinh_21.png?raw=true)
- Sử dụng nhiều bảng dữ liệu
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_1/Hinh_22.png?raw=true)
