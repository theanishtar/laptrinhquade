# Bài 3 Undo khi gặp một commit sai

Ta đã biết làm sao để lưu một lịch sử thay đổi (commit) trong repo.

Trên thực tế sẽ có một vài trường hợp ta commit nhầm và muốn trở lại lần commit trước đó.

Git hỗ trợ ta 2 lệnh sau để thực hiện thao tác đó:     `git reset` và `git reverse`

### Ví dụ
Ta có 4 lần commit lần lượt là `A`, `B`, `C`, `D` (các id phía trên) và `D` là lượt commit hiện tại (HEAD), nhận thấy `C` và `D` là một commit sai (lỗi code hoặc bug) và ta muốn quay lại commit `B`

![Tạo repo GitHub](https://github.com/dangtranhuu/images/blob/main/angurvad/github/session3/pic1.1.png?raw=true)

Ta có thể giải quyết vấn đề trên bằng 2 lệnh là: [git reset](/github/session3.html#_3-1-git-reset) và [git revert](/session3.html#_3-2-git-revert)
## 3.1 Git Reset

`git reset` được dùng để quay về một điểm commit nào đó, đồng thời xóa lịch sử của các commit trước nó.

Với [ví dụ trên](/github/session3.html#vi-du) ta có thể quay lại commit B bằng câu lệnh

::: tip
```bash
git reset --hard 06e109
```
- `06e109`: là chỉ số id của một commit (bạn có thể truy cập vào GitHub để xem id này nhé, trên thực tế có thể nó sẽ rất dài) 

![Tạo repo GitHub](https://github.com/dangtranhuu/images/blob/main/angurvad/github/session3/pic2.1.png?raw=true)
:::



![Tạo repo GitHub](https://github.com/dangtranhuu/images/blob/main/angurvad/github/session3/pic2.4.png?raw=true)

::: info NHẬN XÉT
Sau thi thực hiện câu lệnh ta có thể thấy rằng:

- Các commit sau B lần lượt là C và D sẽ bị xóa đi và danh sách commit sẽ trở về như lúc vừa commit B xong
- Con trỏ hiện tại (HEAD) sẽ quay về commit B, biểu thị B là commit cuối cùng
:::

## 3.2 Git Revert

`git revert` không làm mất các `commit`, thay vào đó sẽ tạo thêm `commit` mới, có nội dung giống hệt với `commit` bạn muốn quay trở về.

Với [ví dụ trên](/github/session3.html#vi-du), ta sẽ thực hiện như sau:

![Tạo repo GitHub](https://github.com/dangtranhuu/images/blob/main/angurvad/github/session3/pic3.png?raw=true)

Sơ đồ git sau khi Revert sẽ như sau:
![Tạo repo GitHub](https://github.com/dangtranhuu/images/blob/main/angurvad/github/session3/pic3.2.png?raw=true)

::: info NHẬN XÉT
Sau thi thực hiện câu lệnh ta có thể thấy rằng:

- Commit B' được tạo ra từ commit B
- Commit B sẽ được tái commit với tên gọi là B'
- Các commit C và D sẽ không bị xóa đi
- Con trỏ HEAD sẽ đứng ở Commit B'
:::








