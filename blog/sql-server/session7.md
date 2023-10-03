<!-- ---
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

# Function và View

Nội dung: <br>

- Hàm người dùng định nghĩa
- Khung nhìn View

<!-- more -->

## 1. Hàm người dùng định nghĩa

::: info

- Là một đối tượng CSDL chứa các câu lệnh SQL, được biên dịch sẵn và lưu trữ trong CSDL.
- Thực hiện một hành động như các tính toán phức tạp và trả về kết quả là một giá trị.
- Giá trị trả về có thể là: **giá trị vô hướng** hoặc **một bảng**
:::

**So sánh với thủ tục**
- Tương tự như Stored Procedure <br>
Là một đối tượng CSDL chứa các câu lệnh SQL, được biên dịch sẵn và lưu trữ trong CSDL.

- Khác với Stored Procedure <br>
Các hàm luôn phải trả về một giá trị, sử dụng câu lệnh RETURN <br>
Hàm không có tham số đầu ra <br>
Không được chứa các câu lệnh INSERT, UPDATE, DELETE một bảng hoặc view đang tồn tại trong CSDL <br>
Có thể tạo bảng, bảng tạm, biến bảng và thực hiện các câu lệnh INSERT, UPDATE, DELETE trên các bảng, bảng tạm, biến bảng vừa tạo trong thân hàm <br>

- Ví dụ: <br>
Viết hàm tính tuổi của người có năm sinh là @ns:
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_7/Hinh_1.png?raw=true)

**Các loại hàm**
- **Hàm giá trị vô hướng:** Trả về giá trị đơn của mọi kiểu dữ liệu T-SQL
- **Hàm giá trị bảng đơn giản:** Trả về bảng, là kết quả của một câu lệnh SELECT đơn giản
- **Hàm giá trị bảng nhiều câu lệnh:** Trả về bảng, là kết quả của nhiều câu lệnh

**Hàm giá trị vô hướng**
- Cú pháp
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_7/Hinh_2.png?raw=true)

::: warning
- Không thể truyền tham số theo tên
- Truyền đầy đủ các tham số theo vị trí. Kể cả tham số tùy chọn, nếu muốn sử dụng giá trị mặc định, phải đặt từ khóa DEFAULT tại đúng vị trí tham số tùy chọn đó.
:::

- Ví dụ 1: <br>
Câu lệnh tạo hàm giá trị vô hướng trả về tổng số lượng nhân viên:
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_7/Hinh_3.png?raw=true)

- Ví dụ 2: <br>
Câu lệnh tạo hàm giá trị vô hướng trả về tổng số lượng nhân viên theo giới tính:
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_7/Hinh_4.png?raw=true)

**Hàm giá trị bảng đơn giản**

::: info
- Hàm giá trị bảng đơn giản còn gọi là hàm giá trị bảng nội tuyến
- Hàm giá trị bảng đơn giản có thể được dùng trong câu lệnh truy vấn thay thế cho tên bảng hoặc tên view
:::

- Cú pháp
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_7/Hinh_5.png?raw=true)

- Ví dụ: <br>
Viết hàm trả về bảng các nhân viên làm việc ở phòng số 5
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_7/Hinh_6.png?raw=true)

**Hàm giá trị bảng đa câu lệnh**

- Cú pháp
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_7/Hinh_7.png?raw=true)

- Ví dụ: <br>
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_7/Hinh_8.png?raw=true)

**Xóa nội dung một hàm**

::: tip
- Cú pháp <br>
**DROP FUNCTION [<tên schema>.]<tên hàm>[,...]**
:::
---

## 2. Lợi ích của VIEW

- Che dấu và bảo mật dữ liệu
- Hiển thị dữ liệu một cách tùy biến
- Lưu trữ câu lệnh truy vấn phức tạp và thường xuyên sử dụng
- Thực thi nhanh hơn các câu lệnh truy vấn do đã được biên dịch sẵn
- Đảm bảo tính toàn vẹn dữ liệu

**Cú pháp tạo VIEW**
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_7/Hinh_9.png?raw=true)

>Tên view không được trùng với tên bảng hoặc view đã tồn tại <br><br>
> **Câu lệnh SELECT tạo VIEW** không được chứa mệnh đề INTO, hoặc ORDER BY trừ khi chứa từ khóa TOP <br><br>
>Đặt tên cột: 
> - Cột chứa giá trị được tính toán từ nhiều cột khác phải được đặt tên <br>
> - Nếu cột không được đặt tên, tên cột sẽ được mặc định giống tên cột của bảng cơ sở <br>

- Ví dụ: <br>
Tạo view chứa 2 thông tin là tên nhân viên và tên phòng ban
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_7/Hinh_10.png?raw=true)

**Phân loại VIEW**
- VIEW chỉ đọc (read-only view) <br>
View này chỉ dùng để xem dữ liệu

- VIEW có thể cập nhật (updatable view) <br>
Xem dữ liệu <br>
Có thể sử dụng câu lệnh INSERT, UPDATE, DELETE để cập nhật dữ liệu trong các bảng cơ sở qua View

::: warning
- **Câu lệnh select không được chứa** <br>
Mệnh đề DISTINCT hoặc TOP <br>
Một hàm kết tập (Aggregate function) <br>
Một giá trị được tính toán <br>
Mệnh đề GROUP BY và HAVING <br>
Toán tử UNION <br>
Nếu câu lệnh tạo View vi phạm một trong số điều kiện trên. VIEW được tạo ra là VIEW chỉ đọc
:::

**VIEW có thể cập nhật**
- Ví dụ: <br> 
Tạo View có thể cập nhật được, hiển thị tên phòng có mã phòng 6
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_7/Hinh_11.png?raw=true)

**VIEW chỉ đọc**
- Ví dụ: <br> 
Tạo View có thể cập nhật được, hiển thị tên phòng có mã phòng 6
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_7/Hinh_12.png?raw=true)

**Xóa và chỉnh sửa VIEW**
- Câu lệnh xóa <br> 
**DROP VIEW <tên View>**

- Câu lệnh chỉnh sửa <br>
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_7/Hinh_13.png?raw=true)

- Ví dụ:
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_7/Hinh_14.png?raw=true)