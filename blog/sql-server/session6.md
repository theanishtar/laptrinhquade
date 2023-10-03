<!-- ---
layout: Post
title: Bài 6. Trigger
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
# Trigger
Nội dung: <br>

- Tổng quan Trigger
- Làm việc với trigger

<!-- more -->

## 1. Giới thiệu về Trigger

::: info

- **Trigger** là một dạng đặc biệt của thủ tục lưu trữ
  (store procedure), được thực thi một cách tự
  động khi có sự thay đổi dữ liệu (do tác động của
  câu lệnh **INSERT, UPDATE, DELETE**) trên một
  bảng nào đó.
- Không thể gọi thực hiện trực tiếp Trigger bằng lệnh EXECUTE
- Trigger là một stored procedure không có tham số.
- Trigger được lưu trữ trong DB Server và thường
  hay được dùng để kiểm tra ràng buộc toàn vẹn
  dữ liệu.
- Thông thường dữ liệu các thao tác insert,
update, delete được sao lưu vào bảng tạm
inserted và deleted
:::
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_6/Hinh_1.png?raw=true)

**Các loại trigger thường dùng**
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_6/Hinh_2.png?raw=true)

**So sánh trigger DDL và trigger DML**

- Các trigger
DDL và DML có cách sử dụng khác nhau và được
thực thi với các sự kiện cơ sở dữ liệu khác nhau.
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_6/Hinh_3.png?raw=true)

---

## 2. Tạo trigger DML

::: tip
- Các trigger DML được thực thi khi sự kiện DML xảy ra trong các bảng hoặc khung nhìn.
- Trigger DML này bao gồm các câu lệnh INSERT, UPDATE và DELETE.
- Các trigger DML gồm ba loại chính:Trigger INSERT, Trigger UPDATE, Trigger DELETE
:::

**Các bảng Inserted và Deleted**

- Các trigger DML sử dụng hai loại bảng đặc biệt để sửa đổi dữ liệu trong cơ sở dữ liệu
- Các bảng tạm thời lưu trữ dữ liệu ban đầu cũng như
  dữ liệu đã sửa đổi. Những bảng này gồm Inserted và
  Deleted.
- Bảng Inserted:chứa bản sao các bản ghi được sửa đổi
  với hoạt động INSERT và UPDATE trên bảng trigger.
  Hoạt động INSERT và UPDATE sẽ tiến hành chèn các
  bản ghi mới vào bảng Inserted và bảng trigger
- Bảng Deleted:chứa bản sao của các bản ghi được sửa
đổi với hoạt động DELETE và UPDATE trên bảng
trigger

![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_6/Hinh_4.png?raw=true)
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_6/Hinh_5.png?raw=true)

**Trigger INSERT**
- Trigger INSERT được thực thi khi một bản ghi mới
được chèn vào bảng
- Trigger INSERT đảm bảo rằng giá trị đang được nhập
phù hợp với các ràng buộc được định nghĩa trên bảng
đó.
- Bảng Inserted và Deleted về khía cạnh vật lý chúng
không tồn tại trong cơ sở dữ liệu
- Trigger INSERT được tạo ra bằng cách sử dụng từ
khóa INSERT trong câu lệnh CREATE TRIGGER và
ALTER TRIGGER.

::: tip
Cú pháp <br>
**CREATE TRIGGER** trigger_name
**ON** table_name
**FOR**  {INSERT,UPDATE,DELETE}
**AS**
{sql_statements}
:::

- Ví dụ <br>
Kiểm tra dữ liệu chèn vào bảng nhân viên có lương phai lớn hơn 5000
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_6/Hinh_6.png?raw=true)

**Trigger UPDATE**
- Trigger UPDATE sao chép bản ghi gốc vào bảng
Deleted và bản ghi mới vào bảng Inserted
- Nếu các giá trị mới là hợp lệ thì bản ghi từ bảng
Inserted sẽ được sao chép vào bảng dữ liệu
- Trigger UPDATE được tạo ra bằng cách sử dụng từ
khóa UPDATE trong câu lệnh CREATE TRIGGER và
ALTER TRIGGER

::: tip
Cú pháp <br>
**CREATE TRIGGER** trigger_name
**ON** table_name
**FOR**  {INSERT,UPDATE,DELETE}
**AS**
{sql_statements}
:::

- Ví dụ <br>
Cập nhật lương cho nhân viên, quy định lương >5000
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_6/Hinh_7.png?raw=true)

**Trigger Delete**
- Ta có thể tạo ra trigger DELETE để hạn chế người
dùng không xoá một bản ghi cụ thể trong bảng
- Khi người dùng cố gắng xóa bản ghi:<br>
 Bản ghi bị xóa khỏi bảng trigger và chèn vào bảng Deleted <br>
 Kiểm tra các ràng buộc liên quan khi xóa <br>
 Nếu có ràng buộc trên bản ghi để ngăn chặn việc xóa, trigger
DELETE sẽ hiển thị thông báo lỗi <br>
 Bản ghi đã xóa được lưu trữ trong bảng Deleted được sao
chép ngược lại bảng trigger. <br>

::: tip
Cú pháp <br>
**CREATE TRIGGER** trigger_name
**ON** table_name
**FOR**  {INSERT,UPDATE,DELETE}
**AS**
{sql_statements}
:::

- Ví dụ <br>
Tạo trigger Delete không cho phép xóa nhân viên có mã 005
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_6/Hinh_8.png?raw=true)

## 3. Trigger AFTER

::: info
- **Trigger AFTER** thực thi khi hoàn thành các hoạt động **INSERT, UPDATE và DELETE**.
- Trigger AFTER chỉ có thể được tạo ra trên các bảng.
:::
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_6/Hinh_9.png?raw=true)
::: tip
Cú pháp <br>
**CREATE TRIGGER** trigger_name
**ON** table_name
**FOR | AFTER**  {INSERT,UPDATE,DELETE}
**AS**
{sql_statements}
:::

- Ví dụ <br>
Viết trigger đếm số lượng nhân viên bị xóa khi có câu lệnh xóa trên bảng nhân viên
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_6/Hinh_10.png?raw=true)

## 4. Trigger INSTEAD OF

::: info
- **Trigger INSTEAD OF** được thực thi **thay thế** cho các hoạt động I**NSERT, UPDATE hoặc DELETE**.
- Các trigger INSTEAD OF có thể được tạo ra trên các bảng cũng như khung nhìn.
:::

::: tip
Cú pháp <br>
**CREATE TRIGGER** trigger_name
**ON** <table_name> | <view_name>
**FOR | AFTER | INSTEAD OF**  {INSERT,UPDATE,DELETE}
**AS**
{sql_statements}
:::

- Ví dụ: <br>
Xóa nhân viên có mã 017, các thân nhân của nhân viên này tự động bị xóa theo trên bảng thân nhân
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/sql-server/session_6/Hinh_11.png?raw=true)