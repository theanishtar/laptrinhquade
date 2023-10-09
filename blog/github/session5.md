# Bài 5. Làm việc với nhánh

Một dự án gồm rất nhiều chức năng, trong thực tế mỗi thành viên sẽ đảm nhận ít nhất một chức năng. 

Để dễ dàng quản lí mã nguồn Git cung cấp khái niệm về nhánh, tùy theo mục đích và quy mô dự án ta sẽ phân ra các nhánh thích hợp.

Việc chia ra các nhánh giúp ta dễ dàng quản lí, làm việc độc lập không ảnh hưởng đến các thành viên khác

## Tạo nhánh

Bạn có thể tạo một nhánh mới bằng lệnh sau: 

```bash
git branch <tên_nhánh>
```

![Tạo repo GitHub](https://github.com/dangtranhuu/images/blob/main/angurvad/github/session5/pic1.png?raw=true)

Xem danh sách các nhánh bằng lệnh: 
```bash
git branch
```

![Tạo repo GitHub](https://github.com/dangtranhuu/images/blob/main/angurvad/github/session5/pic2.png?raw=true)

## Di chuyển qua lại giữa các nhánh

Trước khi đẩy code lên GitHub ta cần checkout qua nhánh muốn lưu trữ code:                      
```bash
git checkout <tên_nhánh>

// hoặc

git switch <tên_nhánh>
```
Sau đó thao tác add, commit để thêm code.

Lưu ý: sử dụng lệnh `git push origin <tên nhánh>` để đẩy code lên đúng nhánh

![Tạo repo GitHub](https://github.com/dangtranhuu/images/blob/main/angurvad/github/session5/pic3.png?raw=true)

Sơ đồ git sau khi tiến hành tạo nhánh

![Tạo repo GitHub](https://github.com/dangtranhuu/images/blob/main/angurvad/github/session5/pic4.png?raw=true)

## Gộp nhánh

Việc tạo ra nhiều nhánh trong thời gian dài sẽ khó quản lí, vì vậy khi hoàn tất một chức năng ta nên có hành động gộp nhánh và xóa đi các nhánh thừa không còn dùng nữa.

Đầu tiên ta checkout sang nhánh muốn gộp vào và nhập lệnh:          
```bash 
git merge <tên_nhánh_gộp>
```

![Tạo repo GitHub](https://github.com/dangtranhuu/images/blob/main/angurvad/github/session5/pic5.png?raw=true)

Với trường hợp trên, ta đang thực hiện gộp nhánh có tên `nhanh-moi` vào trong nhánh `main` (main sẽ chứa toàn bộ code của nhanh-moi)

Sơ đồ git sau khi gộp nhánh

![Tạo repo GitHub](https://github.com/dangtranhuu/images/blob/main/angurvad/github/session5/pic6.png?raw=true)


## Xóa nhánh

Sau khi gộp nhánh xong, ta nên xóa nhánh để kho lưu trữ được gọn gàng hơn

Chỉ nên xóa các nhánh không dùng nữa

Dùng lệnh:                                      
```bash
git branch –d <tên_nhánh>
```

:::details
`-d` mang ý nghĩa `delete`
:::


![Tạo repo GitHub](https://github.com/dangtranhuu/images/blob/main/angurvad/github/session5/pic7.png?raw=true)

Thao tác với nhánh cần phải nắm vững các lệnh vì rất dễ xảy ra xung đột (conflict) trong quá trình gộp nhánh

Nếu xảy ra xung đột ta phải xử lý bằng tay (xóa hết các code thừa và gộp lại từ đầu)

Tuyệt đối không gộp lung tung, sẽ có thể dẫn đến việc mất hết source code






