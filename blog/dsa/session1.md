---
layout: Post
title: Giới thiệu về cấu trúc dữ liệu và giải thuật
subtitle: Cấu trúc dữ liệu và giải thuật
author: Theanishtar
date: 2023-06-21
useHeaderImage: false
headerImage: https://github.com/dangtranhuu/images/blob/main/angurvad/dsa/session1/banner.png?raw=true
headerMask: rgba(39, 64, 112, 0.599)
permalinkPattern: /ebook/dsa/:slug/
tags:
  - Data structures 
  - Algorithms
  - DSA
---

Cấu trúc dữ liệu và giải thuật là cụm từ đáng sợ nhất của những sinh viên chưa biết tới website này khi học lập trình.

<!-- more -->

---
Cấu trúc dữ liệu và giải thuật là cụm từ đáng sợ nhất của những sinh viên chưa biết tới website này khi học lập trình.

Tại sao lại là chưa biết tới website này ? 🤔

Vì khi học xong loạt bài giảng của mình. Bạn sẽ không còn sợ CTDL&GT nữa !!! Không tin á? Vậy cùng mình tìm hiểu nha 

Nhưng trước tiên mình cần nói một số điều:
- Cấu trúc dữ liệu và giải thuật là môn học khó, vì vậy tốt nhất bạn hãy học thật chăm chỉ. Nếu có vấn đề gì bạn cứ để lại bình luận bên dưới mình hoặc các bạn khác sẽ hỗ trợ bạn
- Đây là môn học cần có tư tuy lập trình vì vậy bạn phải biết lập trình trước mới học được nhá
- Mình sẽ viết chủ yếu về C hoặc C++ nên bạn cần có kiến thức về ngôn ngữ này nhá

Tham khảo bảng sau đây

| Điều kiện tiên quyết     | Mức độ      | Kiến thức cần có      | Tham khảo      |
| ------------------------ | --------------------------- | ------------| ----------------------| ---------------|
| lập trình căn bản | Xử lý các vấn đề cơ bản | Thao tác được với các kiểu dữ liệu và toán tử, vòng lặp, rẽ nhánh |[link]()| 
| Lập trình C/C++ | Hiểu được câu lệnh | Mảng, Chuỗi, Hàm |[link]()| 

Trước tiên thì ta sẽ tìm hiểu về thuật ngữ DSA trước nhá 

## DSA là gì?

DSA được định nghĩa là sự kết hợp của hai chủ đề riêng biệt nhưng có liên quan đến nhau - Cấu trúc dữ liệu và Thuật toán. DSA là một trong những kỹ năng quan trọng nhất mà mọi sinh viên khoa học máy tính phải có. Người ta thường thấy rằng những người có kiến thức tốt về các công nghệ này là những lập trình viên giỏi hơn những người khác và do đó, bẻ khóa các cuộc phỏng vấn của hầu hết mọi gã khổng lồ công nghệ.

:::details Mẫu đầy đủ DSA
Thuật ngữ DSA là viết tắt của **_Cấu trúc dữ liệu và giải thuật_**, trong bối cảnh Khoa học Máy tính.
:::


<!-- ![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/dsa/session1/Introduction-to-Data-Structures-and-Algorithms-DSA.png?raw=true) -->

## Cấu trúc dữ liệu là gì?

Cấu trúc dữ liệu được định nghĩa là một cách cụ thể để lưu trữ và tổ chức dữ liệu trong các thiết bị của chúng tôi để sử dụng dữ liệu một cách hiệu quả và hiệu quả. Ý tưởng chính đằng sau việc sử dụng cấu trúc dữ liệu là giảm thiểu sự phức tạp về thời gian và không gian. Một cấu trúc dữ liệu hiệu quả chiếm không gian bộ nhớ tối thiểu và yêu cầu thời gian tối thiểu để thực thi dữ liệu.

:::details Bonus
Nói theo mình hiểu thì người ta se tìm ra những cách để tổ chức dữ liệu sao cho được sắp xếp và quản lí để tiện lợi truy xuất và tối ưu xử lí nhất. Thì đó là **_cấu trúc dữ liệu_**
:::

Các cấu trúc dữ liệu có trong khuôn khổ bài giảng này
| Tên          | Việt hóa      |
| ------------ | ------------- |
| Array        | Mảng     | 
| String       | Chuỗi hay Xâu   | 
| Linked List  | Danh sách liên kết    | 
| Matrix/Grid  | Ma trận hay Lưới             | 
| Stack        | Ngăn xếp         | 
| Queue        | Hàng đợi             | 
| Heap         | Vun Đống             | 
| Hash         | Bảng Băm             | 
| Tree         | Cây             | 
| Graph        | Đồ thị              | 

## Thuật toán là gì?

Thuật toán được định nghĩa là một quá trình hoặc tập hợp các hướng dẫn được xác định rõ thường được sử dụng để giải quyết một nhóm vấn đề cụ thể hoặc thực hiện một loại tính toán cụ thể. Để giải thích một cách đơn giản hơn, nó là một tập hợp các hoạt động được thực hiện theo cách từng bước để thực hiện một tác vụ.

:::details Bonus
Đơn giản hơn thì những cách thức để giải quyết một vấn đề gì đó, thì đó gọi là thuât toán hay giải thuật
:::

Các thuật toán có trong khuôn khổ bài giảng này
| Tên          | Việt hóa      |
| ------------ | ------------- |
| Searching Algorithm | Thuật toán tìm kiếm |
| Sorting Algorithm | Thuật toán sắp xếp |
| Divide and Conquer Algorithm |Thuật toán chia và chinh phục|
| Greedy Mehtodology | Thuật toán tham lam |
| Recursion | Đệ quy |
| Backtracking Algorithm | Thuật toán backtracking |
| Dynamic Programming | Lập trình động |
| Pattern Searching | Tìm kiếm mẫu |
| Mathematical Algorithms | Thuật toán toán học |
| Geometric Algorithms | Thuật toán hình học |
| Bitwise Algorithms | Thuật toán backtracking|
| Randomized Algorithms | Thuật toán ngẫu nhiên |
| Branch and Bound Algorithm | Thuật toán nhánh và ràng buộc |

## Làm thế nào để bắt đầu học DSA?

Điều đầu tiên và quan trọng nhất là chia toàn bộ quy trình thành các phần nhỏ cần được thực hiện tuần tự.

Quá trình hoàn chỉnh để học DSA từ đầu có thể được chia thành 4 phần:

- Tìm hiểu về sự phức tạp của Thời gian và Không gian
- Tìm hiểu thông tin cơ bản về các cấu trúc dữ liệu riêng lẻ
- Tìm hiểu kiến thức cơ bản về Thuật toán
- Các vấn đề thực hành trên DSA

### 1. Tìm hiểu về Sự phức tạp
Đây là một trong những chủ đề thú vị và quan trọng. Động cơ chính để sử dụng DSA là để giải quyết vấn đề một cách hiệu quả và hiệu quả. Làm thế nào bạn có thể quyết định xem một chương trình do bạn viết có hiệu quả hay không? Điều này được đo lường bằng sự phức tạp. 

Độ phức tạp có hai loại:

Độ phức tạp về thời gian: Độ phức tạp về thời gian được sử dụng để đo lượng thời gian cần thiết để thực thi mã.
Độ phức tạp của không gian: Độ phức tạp của không gian có nghĩa là lượng không gian cần thiết để thực thi thành công các chức năng của mã.
Bạn cũng sẽ bắt gặp thuật ngữ Không gian phụ trợ rất phổ biến trong DSA, đề cập đến không gian bổ sung được sử dụng trong chương trình ngoài cấu trúc dữ liệu đầu vào.
Cả hai độ phức tạp trên đều được đo lường liên quan đến các tham số đầu vào. Nhưng ở đây phát sinh một vấn đề. Thời gian cần thiết để thực thi mã phụ thuộc vào một số yếu tố, chẳng hạn như:

- Số lượng hoạt động được thực hiện trong chương trình,
- Tốc độ của thiết bị
- Tốc độ truyền dữ liệu nếu được thực hiện trên nền tảng trực tuyến.

Vậy làm thế nào chúng ta có thể xác định cái nào hiệu quả? Câu trả lời là việc sử dụng ký hiệu tiệm cận.
*[Ký hiệu tiệm cận](https://www.geeksforgeeks.org/types-of-asymptotic-notations-in-complexity-analysis-of-algorithms/) là một công cụ toán học tính toán thời gian cần thiết về kích thước đầu vào và không yêu cầu thực thi mã.*

Nó bỏ qua các hằng số phụ thuộc vào hệ thống và chỉ liên quan đến số lượng các hoạt động mô-đun được thực hiện trong toàn bộ chương trình. 3 ký hiệu tiệm cận sau đây chủ yếu được sử dụng để biểu diễn độ phức tạp về thời gian của các thuật toán:

- Ký hiệu Big-O (Ο) - Ký hiệu Big-O mô tả cụ thể tình huống xấu nhất.
- Ký hiệu Omega (Ω) - Ký hiệu Omega (Ω) mô tả cụ thể tình huống tốt nhất.
- Ký hiệu Theta (θ) - Ký hiệu này thể hiện độ phức tạp trung bình của một thuật toán.

Xem hình ảnh sau đây để biết thêm về Tốc độ tăng trưởng của thuật toán

![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/dsa/session1/mypic.png?raw=true)

Ký hiệu được sử dụng nhiều nhất trong phân tích mã là Ký hiệu Big O, cung cấp giới hạn trên của thời gian chạy mã (hoặc dung lượng bộ nhớ được sử dụng về kích thước đầu vào).

## Tổng kết
 
Vậy là chúng ta đã tìm hiểu tổng quan về DSA hay Cấu trúc dữ liệu và giải thuật

Tiếp theo ta sẽ tìm hiểu kĩ hơn về các Cấu trúc dữ liệu phổ biến hay các Thuật toán thịnh hành hiện nay trong các bài học sau nhé