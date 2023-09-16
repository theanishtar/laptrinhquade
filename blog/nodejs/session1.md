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

# Bài 1. Tìm hiểu về NodeJS

---
<!-- NodeJS được thịnh hành dạo gần đây và được rất nhiều lập trình viên ưa chuộng, với cú pháp ngắn gọn, đơn giản NodeJS ngày càng được cộng đồng phát triển và học tập một cách mạnh mẻ.

Khi học NodeJS bạn có thể phát triển các webapp phía BackEnd bằng NestJS (một framework của NodeJS) -->


## NodeJS là gì

- NodeJS là một nền tảng được tạo ra để phát triển các ứng dụng web có tốc độ thực thi và hiệu suất cao. Nó cho phép web deverloper triển khai ngôn ngữ javascript ở phía server, tạo nội dung động cho trang web.

- Nodejs tạo ra bởi Ryan Dahl vào 2009, ban đầu được phát triển trên Linux, Mac OS. Bản chạy trên Windows phát hành vào 2011.

- NodeJS sử dụng kỹ thuật điều khiển theo sự kiện và bất đồng bộ giúp code chạy nhanh và hiệu quả.

- NodeJS được sử dụng nhiều trong các lĩnh vực I/O bound Applications, Data Streaming Applications, Data Intensive Real-time Applications (DIRT), JSON APIs based Applications, Single Page Applications

- Cơ bản về NodeJS sẽ đề cập đến các kiến thức sơ khời về NodeJS để bạn bắt đầu tìm hiểu và lập trình NodeJS để phát triển ứng dụng web.

## Mô hình hoạt động của NodeJS

- NodeJS hoạt động ở phía server, giúp tạo ra các trang web động. Viết bằng ngôn ngữ Javascript. Ưu điểm của NodeJS là hướng sự kiện, bất đồng bộ, chạy rất nhanh.

![object-class-diagrame-1.png](https://github.com/dangtranhuu/images/blob/main/angurvad/nodejs/session1/mo-hinh-hoat-dong-cua-nodejs.png?raw=true)

- So sánh với mô hình PHP, NodeJS tương ứng với Apache + PHP. NodeJS cũng giúp tạo website động như PHP: tính toán, quản lý file, tương tác database, quản lý session..

![object-class-diagrame-1.png](https://github.com/dangtranhuu/images/blob/main/angurvad/nodejs/session1/mo-hinh-hoat-dong-php.png?raw=true)

## Download và cài đặt NodeJS

### 1. Download NodeJS

- Truy cập vào địa chỉ: [Node.js](https://nodejs.org/en/download/)

![object-class-diagrame-1.png](https://github.com/dangtranhuu/images/blob/main/angurvad/nodejs/session1/download-nodejs.png?raw=true)

- Download xong bạn có một file .msi. Chạy file này để bắt đầu cài.

### 2. Cài đặt NodeJS

- Cài đặt là việc cơ bản về NodeJS đầu tiên. Bạn chạy file download và cứ nhắp tuần tự các nút Next, không có gì quá đặt biệt.  Trong quá trình cài NodeJS, phần mềm NPM(Node Package Manager)  cũng được cài luôn vào máy của bạn (tốt),  đây là tool cần thiết quản lý các thư viện cho bạn.

![object-class-diagrame-1.png](https://github.com/dangtranhuu/images/blob/main/angurvad/nodejs/session1/cai-dat-nodejs.png?raw=true)

### 3. Kiểm tra và cấu hình
Mở cửa sổ CMD và thực thi các lệnh sau để kiểm tra phiên bản của NodeJS và NPM:

```bash
node -v
npm -v
```

### 4. Test họat động của NodeJS

a. Tạo 1 folder  tên tùy ý

b. Trong folder mới tạo, tạo 1 file tên chao.js và mở lên gõ code

```js
//chao.js
console.log('Chao ban! Chuc an lanh');
```
c. Mở command line chuyển vào folder mới tạo

d. Gõ lệnh thực thi file chao.js

```bash
node chao.js
```

![object-class-diagrame-1.png](https://github.com/dangtranhuu/images/blob/main/angurvad/nodejs/session1/node-chao.png?raw=true)

Thấy dòng chữ Chao ban! Chuc an lanh là thành công

## Module trong NodeJS
Node.js dùng module để đơn giản hóa các ứng dụng phức tạp. Module giống như các thư viện trong C, Java… Mỗi module chứa một số hàm chức năng. Các module là tách biệt với nhau và với code chính, khi nào cần thì gọi chúng ra (bằng lệnh require) để dùng.

- Built-in Module: là những module có sẵn trong NodeJS, có thể gọi ra và sử dụng mà khỏi cần cài thêm, ví dụ như các module http, https, fs, path…vv… Các module có sẵn liệt kê ở đây: https://www.w3schools.com/nodejs/ref_modules.asp

- External Module: Là các module mã nguồn mở được cung cấp bởi cộng đồng Nodejs, bạn cần cài thêm để dùng. Việc cài đặt các module bên ngoài thông qua tool NPM hoặc trang https://www.npmjs.com. 

Ví dụ: cài module express: 
```bash
npm install express
```
Khi muốn sử dụng module thì bạn gọi bằng lệnh require, ví dụ:  ==require(“express”);==

Và bạn cũng có thể tự viết ra các module mới nếu muốn.

## Tạo project
Tạo project là để bắt đầu 1 dự án – tức website – với NodeJS.

**Tạo 1 folder tên tùy ý, ví dụ Node1**

**Mở command line và chuyển vào folder mới tạo**

**Chạy lệnh npm init để khai báo thông tin cho project Bạn sẽ được yêu cầu nhập các thông tin như: name, version, description, … hãy nhập vào hoặc nhấn Enter để dùng giá trị mặc định. Khi hoàn tất thì sẽ có 1 file tên package.json chứa thông tin bạn vừa nhập,hãy mở file này lên xem thử nhé.**

**Tạo file index.js sử dụng module http**
```bash
var http = require('http');
var app = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});  
    res.end('Chào bạn chúc an lành');
});
app.listen(8080);
```

- Chạy server:
```bash
node index
```

- Test:  http://localhost:8080

Việc tiếp theo là cài đặt module Express

#### Cài đặt express

Express là một tập hợp các module quan trọng cho 1 project nodejs. Express hỗ trợ các phương thức HTTP và API vô cùng mạnh mẽ . Có thể tổng hợp một số chức năng chính của express như sau:

Thiết lập các lớp trung gian để trả về các HTTP request
Định nghĩa router cho phép sử dụng với các hành động khác nhau dựa trên phương thức HTTP và URL
Cho phép trả về các trang HTML dựa vào các tham số
Để cài đặt express, trong folder project, bạn gõ lệnh sau:

```bash
npm install --save express
```
Option ==–save== để đảm bảo ExpressJs được thêm vào package.json như là một dependency (một package cần để ứng dụng chạy được).  Chạy xong,  hãy xem trong folder project của bạn, sẽ thấy các module được thêm vào

#### Tạo file server.js sử dụng module express

```js
const exp = require("express");
const app = exp();
const port = 3000;
app.get("/", (req, res) => {
     res.send("<h1>Đây là trang home</h1>");
});
app.get("/gt", (req, res) => {
     res.send("<h1>Đây là trang giới thiệu</h1>");
});

app.listen(port, () =>{
     console.log(`Ung dung dang chay voi port ${port}`);
});
```

#### Chạy server.js

- Trong command line, chạy lệnh
```js
node server.js
```
- Test:  http://localhost:3000

Cơ bản về NodeJS đã trình bày các các vấn đề download, cài đặt NodeJS, tạo project, các khái niệm cơ bản trong NodeJS, làm nền tảng để bạn chuẩn bị các kiến thức tiếp theo.

Các em có thể đọc thêm tài liệu ở link : 
- https://www.w3schools.com/nodejs/ 
- https://nodejs.dev/learn
