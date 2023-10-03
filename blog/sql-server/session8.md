<!-- ---
layout: Post
title: Bài 8. Quản trị CSDL với SQL Server
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

# Sao lưu và phục hồi CSDL

Nội dung: <br>

- Sao lưu và phục hồi cơ sở dữ liệu
- Đặt lịch sao lưu tự động

<!-- more -->

## 1. Sao lưu CSDL

::: info

- Khi làm việc với CSDL, đặc biệt là những tác vụ dễ xảy ra
sự cố như: <br>
Thử nghiệm tính năng mới <br>
Sửa hoặc xóa dữ liệu quan trọng. <br>
=> Bạn nên tạo một bản sao CSDL để phục hồi khi có sự cố
:::

::: tip

**Các kiểu sao lưu CSDL** <br>
- Full backup <br>
Sao lưu toàn bộ dữ liệu (kể cả các stored procedure, view,
hàm người dùng định nghĩa, transaction log…). <br>
File tạo ra có phần mở rộng .bak <br>
- Differential backup <br>
Sao lưu các dữ liệu mới được cập nhật kể từ lần full backup trước đó <br>
File tạo ra có phần mở rộng .bak <br>
- Differential backup <br>
Sao lưu các bản ghi transaction log (các thao tác xảy ra trên
CSDL, không sao lưu dữ liệu) <br>
File tạo ra có phần mở rộng .trn <br>
:::
---

**Các bước sao lưu CSDL**
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_8/Hinh_1.png?raw=true)
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_8/Hinh_2.png?raw=true)
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_8/Hinh_3.png?raw=true)

**Các bước phục hồi CSDL**
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_8/Hinh_4.png?raw=true)
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_8/Hinh_5.png?raw=true)
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_8/Hinh_6.png?raw=true)
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_8/Hinh_7.png?raw=true)

::: tip

- Càng thực hiện sao lưu nhiều càng giảm rủi ro khi có sự cố.

- Với các CSDL quan trọng, thực hiện nhiều thay đổi trong ngày. Nên thực hiện nhiều lần sao lưu trong một ngày

- Full Backup là phương pháp an toàn nhất, nhưng thực hiện

- Full Backup nhiều sẽ tốn dung lượng bộ nhớ.

- Nên: <br>
Thực hiện sao lưu Full Backup một lần vào lúc bắt đầu một
ngày (chuẩn bị làm việc với CSDL) <br>
Thực hiện nhiều sao lưu Differential backup trong ngày (định kì khoảng một vài tiếng một lần) <br>
Thực hiện nhiều sao lưu Transaction log backup trong ngày

- Khi có sự cố, tiến hành phục hồi như sau: <br>
Thực hiện sao lưu Full Backup một lần vào lúc bắt đầu một ngày (chuẩn bị làm việc với CSDL) <br>
Thực hiện nhiều sao lưu Differential backup trong ngày (định kì khoảng một vài tiếng một lần) <br>
Thực hiện nhiều sao lưu Transaction log backup trong ngày
:::

## 2. Đặt lịch sao lưu tự động

::: info

- Đặt lịch sao lưu tự động là: <br>
Tạo một kế hoạch cho SQL Server để SQL Server tự động
thực hiện sao lưu CSDL tại một thời điểm được ấn định sẵn.
- Để tạo lịch sao lưu tự động người dùng phải đăng nhập
bằng Login ID có vai trò “sysadmin”

:::

**Các bước đặt lịch sao lưu tự động**
- Bước 1: Nhấn chuột phải vào Maintenance Plans. Chọn New Maintenance Plan
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_8/Hinh_8.png?raw=true)

- Bước 2: Đặt tên cho Maintenance Plan
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_8/Hinh_9.png?raw=true)

 - Cấu hình
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_8/Hinh_10.png?raw=true)

 - Bước 3: Ấn định thời gian thực hiện sao lưu CSDL
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_8/Hinh_11.png?raw=true)

- Bước 4: Thêm Back Up Database Task <br>
Back Up Database Task: thực hiện sao lưu CSDL theo thời
gian đã ấn định
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_8/Hinh_12.png?raw=true)
 
- Bước 5: Cấu hình Back Up Database Task <br>
=> Nhấn đúp chuột vào Back Up Database Task
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_8/Hinh_13.png?raw=true)

-B6: Thêm Maintenance Cleanup Task vì sao lưu được thực hiện thường xuyên, dẫn đến đầy bộ nhớ server <br>
=> Maintenance Cleanup Task: Xóa các bản sao, mà có thời gian sao lưu cũ hơn một khoảng thời gian cho trước.
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_8/Hinh_14.png?raw=true)

- Bước 7: Cấu hình cho Maintenance Cleanup Task <br>
=> Nhấn đúp chuột vào Maintenance Cleanup Task
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_8/Hinh_15.png?raw=true)

::: tip
- SQL Server chỉ thực hiện sao lưu tự động thành công
khi SQL Server Agent đang chạy
- Nếu SQL Server Agent bị tắt. Có thể khởi động lại trong <br>
SQL Server Management Studio <br>
SQL Server Configuration Management
:::
