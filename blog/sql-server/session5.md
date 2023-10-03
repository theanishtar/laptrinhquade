<!-- ---
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
# Stored Procedures
Nội dung: <br>
- Tổng quan SQL Stored Procedures
- Làm việc với stored procedures

<!-- more -->

## 1. Giới thiệu

::: info
- **Stored Procedure** lưu trữ một tập hợp các câu
lệnh SQL và các câu lệnh lập trình đi kèm trong
cơ sở dữ liệu, cho phép tái sử dụng khi cần.
- Hỗ trợ các ứng dụng tương tác nhanh, chính xác
:::
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_1.png?raw=true)

**Các thuận lợi**
- Stored procedure cho phép điều chỉnh chương trình cho phù hợp, mang tính tái sử dụng.
- Stored procedure cho phép thực thi nhanh hơn cách viết từng câu lệnh sql
- Stored procedure làm giảm bớt vấn đề kẹt đường truyền mạng, dữ liệu được gởi theo gói.
- Stored procedure có thể sử dụng trong vấn đề bảo mật, phân quyền

**Có 2 loại**
- System stored procedures 
- User stored procedures

 **Stored-procedure trong SQL Server bao gồm:**
- Inputs: nhận các tham số đầu vào khi cần
- Execution: kết hợp giữa các yêu cầu nghiệp vụ với các lệnh lập trình như IF..ELSE, WHILE...
- Outputs: trả ra các đơn giá trị (số, chuỗi…) hoặc một tập kết
quả.
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_2.png?raw=true)

**Ví dụ**
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_3.png?raw=true)


---

## 2. Tạo Stored-procedure

**Cú pháp**
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_4.png?raw=true)

::: tip
- Tên hàm, tên biến trong SQL Server không phân biệt hoa thường.
- Có thể thay thế Create Procedure bằng Create Proc
- Tham số đầu vào <br>
Tham số bắt buộc: bắt buộc phải truyền <br>
Tham số tuỳ chọn: gán giá trị mặc định, giá trị mặc định nếu không gọi.
:::

**Ví dụ** <br>
 VD1: Tạo stored-procedure tính tổng của 2 số nguyên
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_5.png?raw=true)

 VD2: Tạo stored-procedure tính tổng của 2 số nguyên có tham số đầu ra
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_6.png?raw=true)

Tạo stored-procedure có return dữ liệu <br>
**Cú pháp**
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_7.png?raw=true)

**Ví dụ**
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_8.png?raw=true)

Biên dịch và gọi thực thi một stored-procedure <br>
- Biên dịch : Chọn toàn bộ mã lệnh Tạo storedprocedure => Nhấn F5
- Gọi thực thi một store-Procedure đã được biên dịch bằng lệnh exec
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_9.png?raw=true)

**Ví dụ**
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_10.png?raw=true)

Làm việc với thủ tục có tham số mặc định <br>
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_11.png?raw=true)
## 3. Cập nhật Store procedure

**Cú pháp**
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_12.png?raw=true)

**Ví dụ**
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_13.png?raw=true)

**Lệnh xóa Procedure**
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_14.png?raw=true)

## 4. Lệnh điều kiện trong điều khiển các rẽ nhánh trong Proc
**Sử dụng câu lệnh điều kiện giúp điều khiển các rẽ nhánh trong Proc**
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_15.png?raw=true)

**Xét ví dụ trước về việc thêm phòng ban, kiểm tra Maphg có tồn tại hay chưa**
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_16.png?raw=true)

## 5. Store procedure template
**Sử dụng công cụ tạo store proc dưới dạng template**
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_17.png?raw=true)

**Ví dụ**
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_18.png?raw=true)

## 6. Kiến thức thêm
**Dùng công cụ Execute a Store procedure**
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_19.png?raw=true)

**System Store procedure**
- Là những stored procedure chứa trong Master
Database, thường bắt đầu bằng tiếp đầu ngữ
sp_

- Chủ yếu dùng trong việc quản lý cơ sở dữ liệu
(administration) và bảo mật (security).

- Ví dụ: sp_helptext <tên của đối tượng> : để lấy
định nghĩa của đối tượng (thông số tên đối
tượng truyền vào) trong Database
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_20.png?raw=true)

- Một số System stored procedures thông dụng
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_21.png?raw=true)
