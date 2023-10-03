<!-- ---
layout: Post
title: Bài 4. Điều kiện & Vòng lặp
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
# Điều kiện và vòng lặp

Nội dung: <br>
- Điều kiện
- Vòng lặp
- Quản lý lỗi

<!-- more -->

## 1. Các xử lý điều kiện

**Câu lệnh IF - ELSE**
::: info
- Sử dụng đến câu lệnh if-else/case là là câu lệnh
điều kiện được sử dụng khi cần đưa ra một
quyết định nào đó
:::

::: tip
- Cú pháp <br>
**IF<biểu thức điều kiện>{<Câu lệnh> | BEGIN...END} ELSE {<Câu lệnh> | BEGIN...END}**
:::

::: warning
- Nếu thực thi hai hoặc nhiều câu lệnh trong mệnh đề IF hoặc ELSE. Bạn cần bao các câu lệnh này trong khối **BEGIN…END**
:::

- Ví dụ:
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_4/Hinh_1.png?raw=true)
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_5/Hinh_2.png?raw=true)

**Lệnh If Exists**
::: tip
- Cú pháp <br>
**IF EXISTS (Câu_lệnh_SELECT) <br> Câu_lệnh1 | Khối_lệnh1 [ELSE Câu_lệnh2| Khối_lệnh2]**
:::

- Ví dụ
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_4/Hinh_3.png?raw=true)

**Lệnh IIF Function**
::: tip
- Cú pháp <br>
**IIF (expression, expr_true, expr_false)**
:::

- Ví dụ
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_4/Hinh_4.png?raw=true)

**Hàm CASE trong SQL Server**
::: info
- Hàm CASE kiểm định giá trị dựa trên danh sách điều
kiện đưa ra và trả về một hoặc nhiều kết quả.

- CASE rất đa dạng, linh hoạt và rất hữu ích, ứng dụng trong nhiều trường hợp.

- CASE có 2 định dạng: <br>
Simple CASE là so sánh một biểu thức với một bộ các biểu
thức đơn giản để xác định kết quả <br>
Searched CASE là đánh giá một bộ các biểu thức Boolean để
xác định kết quả
:::

**Simple CASE**

- Cú pháp
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_4/Hinh_5.png?raw=true)

- Ví dụ
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_4/Hinh_6.png?raw=true)

**Searched CASE:**
- Cú pháp
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_4/Hinh_7.png?raw=true)

- Ví dụ
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_4/Hinh_8.png?raw=true)

**So sánh Simple CASE và Searched CASE**
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_4/Hinh_9.png?raw=true)
---

## 2. Vòng lặp

::: info
- Vòng lặp được sử dụng nếu muốn chạy lặp đi
lặp lại một đoạn mã khi điều kiện cho trước trả
về giá trị là TRUE
:::
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_4/Hinh_10.png?raw=true)
- Cú pháp
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_4/Hinh_11.png?raw=true)

- Cú pháp
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_4/Hinh_12.png?raw=true)

**Lệnh Break (Ngắt điều khiển)**

::: info
- Dùng để thoát khỏi vòng lặp
- Không có tham số và đối số nào nằm trong câu lệnh BREAK
- Nếu trong đoạn code có WHILE LOOP lồng nhau, BREAK sẽ chấm dứt vòng lặp WHILE gần nhất
:::

- Ví dụ
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_4/Hinh_13.png?raw=true)

**Lệnh Continue:**
::: info
- Thực hiện bước lặp tiếp theo, bỏ qua các lệnh trong bước lặp hiện tại.
- Không có tham số và đối số nào nằm trong câu lệnh CONTINUE
:::

- Ví dụ
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_4/Hinh_14.png?raw=true)


## 3. Quản lý lỗi

**Xử lý lỗi TRY…CATCH**

::: info
- Thực hiện các lệnh trong khối TRY, nếu gặp lỗi sẽ
chuyển qua xử lý bằng các lệnh trong khối CATCH
:::
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_4/Hinh_15.png?raw=true)

::: warning
- TRY và CATCH phải cùng lô xử lý
- Sau khối TRY phải là khối CATCH
- Có thể lồng nhiều cấp
:::

- Một số hàm ERROR thường dùng
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_4/Hinh_16.png?raw=true)

- Ví dụ 1
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_4/Hinh_17.png?raw=true)

- Ví dụ 2
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_4/Hinh_18.png?raw=true)

**Thủ tục RAISERROR**
::: info
- Trả thông báo lỗi về cho ứng dụng
:::

- Cú pháp
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_4/Hinh_19.png?raw=true)

- Ví dụ
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_4/Hinh_20.png?raw=true)