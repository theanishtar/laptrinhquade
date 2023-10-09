

# Bài 2. Đẩy code lên GitHub

## Quy trình đẩy code 

Để đưa code lên GitHub ta cần hiểu về khai niệm Repo Remote và Repo Server 
- Đầu tiên ta tạo một Repository tại server của GitHub (Repo Server), tiếp đó clone Repo đó về laptop cá nhân (Repo Remote)
- Khi đã clone xong một Repository, ta có thể code trực tiếp tại thư mục đã clone
- Khi muốn thực hiện đẩy code lên GitHub ta sẽ thực hiện các lệnh sau:
	- `git add .` để thêm toàn bộ các file, folder vào git trên local
	- `git commit –m "<mô tả>"` để thực hiện một thay đổi trên git
	- `git push` để đẩy code lên nhánh chính (***main*** hoặc ***master***)

![Tạo repo GitHub](https://github.com/dangtranhuu/images/blob/main/angurvad/github/session2/quytrinh.png?raw=true)

## Tạo Repository tại GitHub.com

:::details Repository là gì
Repository là một kho lưu trữ của GitHub, bạn có thể xem Repository là một nơi chứa project của bạn trực tuyến
:::

**Tạo Repo mới [tại đây](https://github.com/new)**

![Tạo repo GitHub](https://github.com/dangtranhuu/images/blob/main/angurvad/github/session2/taorepo.png?raw=true)

:::info
Repository name: là tên kho lưu trữ của bạn

Public hay Private là trạng thái của Repo
- Public là ai cũng xem được
- Private là chỉ bạn và những người được thêm vào repo mới được xem
:::

## Clone Repo về máy tính của bạn

Khi tạo xong repo giao diện sẽ thay đổi thành thế này:

![Tạo repo GitHub](https://github.com/dangtranhuu/images/blob/main/angurvad/github/session2/07b786ea9711424f1b00.jpg?raw=true)

Bạn hãy coppy đường link sau:

![Tạo repo GitHub](https://github.com/dangtranhuu/images/blob/main/angurvad/github/session2/5d7a5c5a4ea19bffc2b0.jpg?raw=true)

Vào [Git Bash](/github/session1.html#đang-nhap-vao-git) và gõ lệnh sau:

```bash
$ git clone //dán đường dẫn vừa coppy vào đây
```
![Tạo repo GitHub](https://github.com/dangtranhuu/images/blob/main/angurvad/github/session2/clonerepo.png?raw=true)

**Paste code vào Repo clone**

Bạn sẽ thấy một thư mục trống như này:

![Tạo repo GitHub](https://github.com/dangtranhuu/images/blob/main/angurvad/github/session2/pastecode.png?raw=true)

Sau đó cứ tiến hành paste hết những đoạn code bạn muốn đẩy lên Git vào thư mục trống này

![Tạo repo GitHub](https://github.com/dangtranhuu/images/blob/main/angurvad/github/session2/pastedone.png?raw=true)


**Đẩy code lên GitHub**

Tại thư mục, click chuột phải để mở [Git Bash](/github/session1.html#đang-nhap-vao-git)

Gõ lần lượt các lệnh sau

```bash
$ git add .
$ git commit -m "add code"
$ git push 
```

**Lên GitHub và kiểm tra**

- Bạn sẽ thấy src code mình trên repo GitHub.
- Nếu chưa thấy thì thực hiện lại các bước. Nếu vẫn không được thì để lại comment phía dưới nhé!


## Lấy lại toàn bộ code từ repo về máy tính

Với trường hợp bạn đã clone repo và muốn cập nhật lại các code trên GitHub bạn có thể dùng lệnh sau:

```bash
$ git pull
```
![Tạo repo GitHub](https://github.com/dangtranhuu/images/blob/main/angurvad/github/session2/pull.png?raw=true)

<iframe width="100%" height="450" src="https://www.youtube.com/embed/RV_jojt_2bo?si=KhYiTBJdNeHYFfMa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>