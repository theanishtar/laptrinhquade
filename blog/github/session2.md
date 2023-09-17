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

# Bài 2. Đẩy code lên GitHub

---
<!-- NodeJS được thịnh hành dạo gần đây và được rất nhiều lập trình viên ưa chuộng, với cú pháp ngắn gọn, đơn giản NodeJS ngày càng được cộng đồng phát triển và học tập một cách mạnh mẻ.

Khi học NodeJS bạn có thể phát triển các webapp phía BackEnd bằng NestJS (một framework của NodeJS) -->


## Tạo Repository tại GitHub.com

:::details Repository là gì
Repository là một kho lưu trữ của GitHub, bạn có thể xem Repository là một nơi chứa project của bạn trực tuyến
:::

**Bước 1: Tạo Repo mới [tại đây](https://github.com/new)**

![Tạo repo GitHub](https://github.com/dangtranhuu/images/blob/main/angurvad/nodejs/session2/image.png?raw=true)

:::info
Repository name: là tên kho lưu trữ của bạn

Public hay Private là trạng thái của Repo
- Public là ai cũng xem được
- Private là chỉ bạn và những người được thêm vào repo mới được xem
:::

**Bước 2: Clone Repo về máy tính của bạn**

Khi tạo xong repo giao diện sẽ thay đổi thành thế này:

![Tạo repo GitHub](https://github.com/dangtranhuu/images/blob/main/angurvad/nodejs/session2/image.png?raw=true)

Bạn hãy coppy đường link sau:

![Tạo repo GitHub](https://github.com/dangtranhuu/images/blob/main/angurvad/nodejs/session2/image.png?raw=true)

Vào [Git Bash]() và gõ lệnh sau:

```bash
$ git clone //dán đường dẫn vừa coppy vào đây
```

**Bước 3: Paste code vào Repo clone**

Bạn sẽ thấy một thư mục trống như này:

![Tạo repo GitHub](https://github.com/dangtranhuu/images/blob/main/angurvad/nodejs/session2/image.png?raw=true)

Sau đó cứ tiến hành paste hết những đoạn code bạn muốn đẩy lên Git vào thư mục trống này

![Tạo repo GitHub](https://github.com/dangtranhuu/images/blob/main/angurvad/nodejs/session2/image.png?raw=true)


**Bước 4: Đẩy code lên GitHub**

Tại thư mục, click chuột phải để mở [Git Bash]()

Gõ lần lượt các lệnh sau

```bash
$ git add .
$ git commit -m "add code"
$ git push 
```

**Bước 5: Lên GitHub và kiểm tra**

- Bạn sẽ thấy src code mình trên repo GitHub.
- Nếu chưa thấy thì thực hiện lại các bước. Nếu vẫn không được thì để lại comment phía dưới nhé!


