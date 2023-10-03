<!-- ---
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
# Các hàm hệ thống và xử lý chuỗi
Nội dung: <br>
- Các hàm hệ thống Sql
- Xử lý chuỗi

<!-- more -->

## 1. Các hàm chuyển đổi kiểu dữ liệu

::: info
- Khi làm việc với các biểu thức chứa nhiều kiểu dữ liệu khác nhau, phải thực hiện chuyển đổi giữa các kiểu dữ liệu.
- Hai loại chuyển đổi kiểu dữ liệu <br>
Chuyển đổi ngầm (do SQL server tự thực hiện) <br>
Chuyển đổi tường minh (sử dụng các hàm thư viện)
:::

**- Chuyển đổi ngầm**
::: info
- Gán giá trị cho một cột có kiểu dữ liệu **khác** với giá trị được gán.
- Biểu thức tính toán có sự tham gia cuả nhiều loại dữ liệu khác nhau (SQL chuyển kiểu có độ **ưu tiên thấp sang kiểu có độ ưu tiên cao** hơn)
:::

::: warning
- Lập trình viên cần nắm chuyển đổi ngầm tránh lỗi
- Việc chuyển đổi xả ra tự động.
:::

- Thứ tự ưu tiên của các kiểu dữ liệu phổ biến trong SQL Server
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_3/Hinh_1.png?raw=true)

- Xét ví dụ: SELECT 100 * .5 => Kết quả có kiểu dữ liệu gì?
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_3/Hinh_2.png?raw=true)
- Kết là 50.0 vì .5 có độ ưu tiên cao hơn**

- Xét ví dụ: SELECT 'Today is ' + GETDATE()=>Kết quả kiểu dữ liệu là gì?
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_3/Hinh_3.png?raw=true)
- Không thể chuyển “Today is” thành kiểu DateTime

**- Chuyển đổi tường minh**
::: info
- Chuyển dữ liệu có kiểu dữ liệu với độ ưu tiên cao hơn về kiểu dữ liệu có độ ưu tiên thấp hơn.
- Sử dụng hàm **CAST** hoặc **CONVERT** để thực hiện phép chuyển đổi tường minh.
:::

-Ví dụ: chuyển kiểu có độ ưu tiên cao DateTime về kiểu có độ ưu tiên thấp hơn varchar:
**SELECT 'Today is ' + cast(GETDATE() as varchar)**
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_3/Hinh_4.png?raw=true)

- **Sử dụng hàm chuyển đổi dữ liệu Hàm CAST**
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_3/Hinh_5.png?raw=true)
::: tip
- Hàm CAST dùng để chuyển đổi tường minh, hay ép kiểu, một biểu thức từ kiểu dữ liệu này sang kiểu dữ liệu khác
:::

- Một số ví dụ
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_3/Hinh_6.png?raw=true)

- **Sử dụng hàm chuyển đổi dữ liệu Hàm CONVERT**
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_3/Hinh_7.png?raw=true)
::: tip
- Dùng để chuyển đổi tường minh một biểu thức từ kiểu dữ liệu này sang kiểu dữ liệu khác
- Khi chuyển đổi sang kiểu dữ liệu kí tự và cần định dạng hiển thị cho dữ liệu.
- Tham số định dạng: định dạng cho các giá trị ngày/giờ, số thực, tiền tệ khi chuyển đổi sang kiểu kí tự
:::
- Một số ví dụ
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_3/Hinh_8.png?raw=true)

- **So sánh giữa Cast và CONVERT:**
- SELECT 'Today''s date is ' + CAST(GETDATE() as varchar)
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_3/Hinh_9.png?raw=true)
- SELECT 'Today''s date is ' + CONVERT(VARCHAR, GETDATE(), 101)
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_3/Hinh_10.png?raw=true)

---

## 2. Các hàm toán học

- PI: trả về số Pi
- SQRT: tính căn bậc 2, trả về dữ liệu kiểu float - SELECT SQRT(25) => 5
- SQUARE: bình phương - SELECT SQUARE(3)=> 9
- CEILING và FLOOR
- ROUND: làm tròn giá trị theo vị trí thập phân xác định
- ABS: Lấy giá trị tuyệt đối <br>
Ví dụ lương trung bình của nv là 31000, thống kê mức độ chênh lệch lương của các nv so với lương trung bình => không quan tâm số âm hay dương
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_3/Hinh_11.png?raw=true)

## 3. Các hàm xử lý chuỗi

**Làm việc với kiểu dữ liệu chuỗi**
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_3/Hinh_12.png?raw=true)

- Ví dụ
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_3/Hinh_13.png?raw=true)

**Hàm CHARINDEX**
::: info
- Cú pháp <br>
CHARINDEX(find, search[, start])
:::
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_3/Hinh_14.png?raw=true)

**Hàm SubString**
::: info
- Cú pháp <br>
**SubString(find, start, length)**
:::
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_3/Hinh_15.png?raw=true)

**Hàm REPLACE**
::: info
- Cú pháp <br>
**REPLACE(search, find, replace)**
- REPLACE
:::
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_3/Hinh_16.png?raw=true)

**Các hàm khác**
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_3/Hinh_17.png?raw=true)

- Demo các hàm xử lý chuỗi
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_3/Hinh_18.png?raw=true)

::: warning
- Vấn đề thường xảy ra với dữ liệu chuỗi <br>
Sắp thứ tự: Khi sắp xếp một cột kiểu chuỗi chứa số, bạn có thể nhận được kết quả không mong đợi <br>
Phân tách kí tự: Nếu chuỗi gồm hai hay nhiều thành phần, bạn có thể phân
tách chuỗi thành những thành phần độc lập.
:::

::: tip
- Giải quyết vấn đề <br>
Để tránh điều đó, bạn chuyển đổi cột kiểu chuỗi thành giá trị
số trong mệnh đề ORDER BY <br>
Sử dụng hàm CHARINDEX để định vị những ký tự phân tách.
Sau đó, dùng hàm LEFT, RIGHT, SUBSTRING và LEN để trích ra
những thành phần độc lập
:::

- Ví dụ <br>
Bảng NhanVien được sắp xếp bởi cột MaNV khi có dùng Cast
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_3/Hinh_19.png?raw=true)

**Các hàm ngày tháng năm**

- GETDATE trả về ngày tháng năm hiện tại (bao gồm ngày,tháng năm,giờ, phút,giây)
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_3/Hinh_20.png?raw=true)

- DATENAME: truy cập tới các thành phần liên quan ngày tháng
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_3/Hinh_21.png?raw=true)

::: warning
- Trong SQL Server dữ liệu ngày/giờ được xử lý dưới định dạng tháng/ngày/năm
- Để sử dụng định dạng ngày/giờ dưới dạng ngày/tháng/năm. Cần chú ý: <br>
Khi sử dụng câu lệnh INSERT phải truyền dữ liệu ngày/giờ
theo định dạng tháng/ngày/năm <br>
Khi truy vấn dữ liệu, để lấy về giá trị có định dạng
ngày/tháng/năm có thể sử dụng hàm CONVERT với mã định
dạng 3 hoặc 103
:::