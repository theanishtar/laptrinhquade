

# Bài 2. Đẩy code lên GitHub

## Tạo Repository tại GitHub.com

:::details Repository là gì
Repository là một kho lưu trữ của GitHub, bạn có thể xem Repository là một nơi chứa project của bạn trực tuyến
:::

**Bước 1: Tạo Repo mới [tại đây](https://github.com/new)**

![Tạo repo GitHub](https://github.com/dangtranhuu/images/blob/main/angurvad/github/session2/taorepo.png?raw=true)

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

![Tạo repo GitHub](https://github.com/dangtranhuu/images/blob/main/angurvad/github/session2/clonerepo.png?raw=true)

Vào [Git Bash](/github/session1.html#đang-nhap-vao-git) và gõ lệnh sau:

```bash
$ git clone //dán đường dẫn vừa coppy vào đây
```

**Bước 3: Paste code vào Repo clone**

Bạn sẽ thấy một thư mục trống như này:

![Tạo repo GitHub](https://github.com/dangtranhuu/images/blob/main/angurvad/github/session2/pastecode.png?raw=true)

Sau đó cứ tiến hành paste hết những đoạn code bạn muốn đẩy lên Git vào thư mục trống này

![Tạo repo GitHub](https://github.com/dangtranhuu/images/blob/main/angurvad/github/session2/pastedone.png?raw=true)


**Bước 4: Đẩy code lên GitHub**

Tại thư mục, click chuột phải để mở [Git Bash](/github/session1.html#đang-nhap-vao-git)

Gõ lần lượt các lệnh sau

```bash
$ git add .
$ git commit -m "add code"
$ git push 
```

**Bước 5: Lên GitHub và kiểm tra**

- Bạn sẽ thấy src code mình trên repo GitHub.
- Nếu chưa thấy thì thực hiện lại các bước. Nếu vẫn không được thì để lại comment phía dưới nhé!



<iframe width="100%" height="450" src="https://www.youtube.com/embed/RV_jojt_2bo?si=KhYiTBJdNeHYFfMa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>