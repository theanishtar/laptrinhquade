<!-- ---
layout: Post
title: Tìm hiểu về NodeJS và xử lý request đơn giản
subtitle: Lập trình NodeJS
author: Theanishtar
date: 2023-05-31
useHeaderImage: true
headerImage: /img/in-post/2020-08-22/header.jpg
headerMask: rgba(33, 77, 92, 0.599)
permalinkPattern: /ebook/nodejs/:slug/
tags:
  - NodeJS
---

NodeJS là một thư viện (đôi khi còn được xem như một framework) của ngôn ngữ lập trình JavaScript. Cùng mình xây dựng server đơn giản với NodeJS nha -->


<!-- more -->

# Bài 1. Setup môi trường

---
<!-- NodeJS được thịnh hành dạo gần đây và được rất nhiều lập trình viên ưa chuộng, với cú pháp ngắn gọn, đơn giản NodeJS ngày càng được cộng đồng phát triển và học tập một cách mạnh mẻ.

Khi học NodeJS bạn có thể phát triển các webapp phía BackEnd bằng NestJS (một framework của NodeJS) -->


## Git là gì?

Git là một trong những Hệ thống Quản lý Phiên bản Phân tán, vốn được phát triển nhằm quản lý mã nguồn (source code) của Linux.

Trên Git, ta có thể lưu trạng thái của file dưới dạng lịch sử cập nhật. Vì thế, có thể đưa file đã chỉnh sửa về trạng thái cũ hay có thể biết được file đã được chỉnh sửa chỗ nào do ai đã chỉnh sửa.

## GitHub là gì?

Là máy chủ cung cấp dịch vụ lưu trữ mã nguồn lớn nhất thế giới.

- Cho phép xây dựng chung mã nguồn với 
bất kì người nào có tài khoản Github.

- Các chức năng thêm vào của Github: UI, Document, bug tracking, feature request, pull request… và nhiều hơn!

:::info
Tóm lại :
- **Git** là phần mềm quản lí mã nguồn
- **GitHub** là website để mọi người sử dụng trên nền tảng của **Git**
:::

## Cài đặt Git và Tạo tài khoản GitHub

### Cài đặt Git

**Bước 1: Truy cập [Git](https://git-scm.com/downloads) để cài đặt phiên bản tương thích với máy bạn**

![Tải Git](https://github.com/dangtranhuu/images/blob/main/angurvad/nodejs/session2/image.png?raw=true)

**Bước 2: Cài đặt phần mềm vào máy**

![Cài Git](https://github.com/dangtranhuu/images/blob/main/angurvad/nodejs/session2/image.png?raw=true)

Khi nào *click chuột phải* và thấy 2 dòng này thì đã cài **Git** thành công

![Check Git](https://github.com/dangtranhuu/images/blob/main/angurvad/nodejs/session2/image.png?raw=true)

## Tạo tài khoản GitHub

Tạo tài khoản GitHub [tại đây](https://github.com/signup?source=login)

Khi tạo xong tiến hành đăng nhập vào GitHub luôn nhé

### Đăng nhập vào Git

**Bước 1: Click chuột phải vào màn hình và chọn =Git Bash Here=**

![Bash Git](https://github.com/dangtranhuu/images/blob/main/angurvad/nodejs/session2/image.png?raw=true)

**Bước 2: Tiến hành gõ lần lượt các lệnh sau**

```bash
$ git config --global user.name myname	
$ git config --global user.email myemail@example.com
$ git config --global user.password mypassword
```

:::warning
Thay thế các từ sau:
- **myname** -> Username đã đăng ký GitHub
- **myemail@example.com** -> Địa chỉ email đã đăng ký tài khoản
- **mypassword** -> Mật khẩu tài khoản GitHub của bạn

:::

![Bash Git](https://github.com/dangtranhuu/images/blob/main/angurvad/nodejs/session2/image.png?raw=true)

**Bước 3: Kiểm tra đã đăng nhập thành công hay chưa**

Gõ lệnh sau và **enter**:

```bash
$ git config --list
```

Nếu dữ liệu hiện ra như sau (và đúng với thông tin tài khoản GitHub của bạn) thì đã đăng nhập thành công!

![Bash Git](https://github.com/dangtranhuu/images/blob/main/angurvad/nodejs/session2/image.png?raw=true)
