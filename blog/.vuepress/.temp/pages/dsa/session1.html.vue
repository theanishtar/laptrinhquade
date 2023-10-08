<template><div><!-- ---
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
--- -->
<p>Cấu trúc dữ liệu và giải thuật là cụm từ đáng sợ nhất của những sinh viên chưa biết tới website này khi học lập trình.</p>
<!-- more -->
<hr>
<p>Cấu trúc dữ liệu và giải thuật là cụm từ đáng sợ nhất của những sinh viên chưa biết tới website này khi học lập trình.</p>
<p>Tại sao lại là chưa biết tới website này ? 🤔</p>
<p>Vì khi học xong loạt bài giảng của mình. Bạn sẽ không còn sợ CTDL&amp;GT nữa !!! Không tin á? Vậy cùng mình tìm hiểu nha</p>
<p>Nhưng trước tiên mình cần nói một số điều:</p>
<ul>
<li>Cấu trúc dữ liệu và giải thuật là môn học khó, vì vậy tốt nhất bạn hãy học thật chăm chỉ. Nếu có vấn đề gì bạn cứ để lại bình luận bên dưới mình hoặc các bạn khác sẽ hỗ trợ bạn</li>
<li>Đây là môn học cần có tư tuy lập trình vì vậy bạn phải biết lập trình trước mới học được nhá</li>
<li>Mình sẽ viết chủ yếu về C hoặc C++ nên bạn cần có kiến thức về ngôn ngữ này nhá</li>
</ul>
<p>Tham khảo bảng sau đây</p>
<p>| Điều kiện tiên quyết     | Mức độ      | Kiến thức cần có      | Tham khảo      |
| ------------------------ | --------------------------- | ------------| ----------------------| ---------------|
| lập trình căn bản | Xử lý các vấn đề cơ bản | Thao tác được với các kiểu dữ liệu và toán tử, vòng lặp, rẽ nhánh |<a href="">link</a>|
| Lập trình C/C++ | Hiểu được câu lệnh | Mảng, Chuỗi, Hàm |<a href="">link</a>|</p>
<p>Trước tiên thì ta sẽ tìm hiểu về thuật ngữ DSA trước nhá</p>
<h2 id="dsa-la-gi" tabindex="-1"><a class="header-anchor" href="#dsa-la-gi" aria-hidden="true">#</a> DSA là gì?</h2>
<p>DSA được định nghĩa là sự kết hợp của hai chủ đề riêng biệt nhưng có liên quan đến nhau - Cấu trúc dữ liệu và Thuật toán. DSA là một trong những kỹ năng quan trọng nhất mà mọi sinh viên khoa học máy tính phải có. Người ta thường thấy rằng những người có kiến thức tốt về các công nghệ này là những lập trình viên giỏi hơn những người khác và do đó, bẻ khóa các cuộc phỏng vấn của hầu hết mọi gã khổng lồ công nghệ.</p>
<details class="custom-container details"><summary>Mẫu đầy đủ DSA</summary>
<p>Thuật ngữ DSA là viết tắt của <strong><em>Cấu trúc dữ liệu và giải thuật</em></strong>, trong bối cảnh Khoa học Máy tính.</p>
</details>
<!-- ![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/dsa/session1/Introduction-to-Data-Structures-and-Algorithms-DSA.png?raw=true) -->
<h2 id="cau-truc-du-lieu-la-gi" tabindex="-1"><a class="header-anchor" href="#cau-truc-du-lieu-la-gi" aria-hidden="true">#</a> Cấu trúc dữ liệu là gì?</h2>
<p>Cấu trúc dữ liệu được định nghĩa là một cách cụ thể để lưu trữ và tổ chức dữ liệu trong các thiết bị của chúng tôi để sử dụng dữ liệu một cách hiệu quả và hiệu quả. Ý tưởng chính đằng sau việc sử dụng cấu trúc dữ liệu là giảm thiểu sự phức tạp về thời gian và không gian. Một cấu trúc dữ liệu hiệu quả chiếm không gian bộ nhớ tối thiểu và yêu cầu thời gian tối thiểu để thực thi dữ liệu.</p>
<details class="custom-container details"><summary>Bonus</summary>
<p>Nói theo mình hiểu thì người ta se tìm ra những cách để tổ chức dữ liệu sao cho được sắp xếp và quản lí để tiện lợi truy xuất và tối ưu xử lí nhất. Thì đó là <strong><em>cấu trúc dữ liệu</em></strong></p>
</details>
<p>Các cấu trúc dữ liệu có trong khuôn khổ bài giảng này</p>
<table>
<thead>
<tr>
<th>Tên</th>
<th>Việt hóa</th>
</tr>
</thead>
<tbody>
<tr>
<td>Array</td>
<td>Mảng</td>
</tr>
<tr>
<td>String</td>
<td>Chuỗi hay Xâu</td>
</tr>
<tr>
<td>Linked List</td>
<td>Danh sách liên kết</td>
</tr>
<tr>
<td>Matrix/Grid</td>
<td>Ma trận hay Lưới</td>
</tr>
<tr>
<td>Stack</td>
<td>Ngăn xếp</td>
</tr>
<tr>
<td>Queue</td>
<td>Hàng đợi</td>
</tr>
<tr>
<td>Heap</td>
<td>Vun Đống</td>
</tr>
<tr>
<td>Hash</td>
<td>Bảng Băm</td>
</tr>
<tr>
<td>Tree</td>
<td>Cây</td>
</tr>
<tr>
<td>Graph</td>
<td>Đồ thị</td>
</tr>
</tbody>
</table>
<h2 id="thuat-toan-la-gi" tabindex="-1"><a class="header-anchor" href="#thuat-toan-la-gi" aria-hidden="true">#</a> Thuật toán là gì?</h2>
<p>Thuật toán được định nghĩa là một quá trình hoặc tập hợp các hướng dẫn được xác định rõ thường được sử dụng để giải quyết một nhóm vấn đề cụ thể hoặc thực hiện một loại tính toán cụ thể. Để giải thích một cách đơn giản hơn, nó là một tập hợp các hoạt động được thực hiện theo cách từng bước để thực hiện một tác vụ.</p>
<details class="custom-container details"><summary>Bonus</summary>
<p>Đơn giản hơn thì những cách thức để giải quyết một vấn đề gì đó, thì đó gọi là thuât toán hay giải thuật</p>
</details>
<p>Các thuật toán có trong khuôn khổ bài giảng này</p>
<table>
<thead>
<tr>
<th>Tên</th>
<th>Việt hóa</th>
</tr>
</thead>
<tbody>
<tr>
<td>Searching Algorithm</td>
<td>Thuật toán tìm kiếm</td>
</tr>
<tr>
<td>Sorting Algorithm</td>
<td>Thuật toán sắp xếp</td>
</tr>
<tr>
<td>Divide and Conquer Algorithm</td>
<td>Thuật toán chia và chinh phục</td>
</tr>
<tr>
<td>Greedy Mehtodology</td>
<td>Thuật toán tham lam</td>
</tr>
<tr>
<td>Recursion</td>
<td>Đệ quy</td>
</tr>
<tr>
<td>Backtracking Algorithm</td>
<td>Thuật toán backtracking</td>
</tr>
<tr>
<td>Dynamic Programming</td>
<td>Lập trình động</td>
</tr>
<tr>
<td>Pattern Searching</td>
<td>Tìm kiếm mẫu</td>
</tr>
<tr>
<td>Mathematical Algorithms</td>
<td>Thuật toán toán học</td>
</tr>
<tr>
<td>Geometric Algorithms</td>
<td>Thuật toán hình học</td>
</tr>
<tr>
<td>Bitwise Algorithms</td>
<td>Thuật toán backtracking</td>
</tr>
<tr>
<td>Randomized Algorithms</td>
<td>Thuật toán ngẫu nhiên</td>
</tr>
<tr>
<td>Branch and Bound Algorithm</td>
<td>Thuật toán nhánh và ràng buộc</td>
</tr>
</tbody>
</table>
<h2 id="lam-the-nao-đe-bat-đau-hoc-dsa" tabindex="-1"><a class="header-anchor" href="#lam-the-nao-đe-bat-đau-hoc-dsa" aria-hidden="true">#</a> Làm thế nào để bắt đầu học DSA?</h2>
<p>Điều đầu tiên và quan trọng nhất là chia toàn bộ quy trình thành các phần nhỏ cần được thực hiện tuần tự.</p>
<p>Quá trình hoàn chỉnh để học DSA từ đầu có thể được chia thành 4 phần:</p>
<ul>
<li>Tìm hiểu về sự phức tạp của Thời gian và Không gian</li>
<li>Tìm hiểu thông tin cơ bản về các cấu trúc dữ liệu riêng lẻ</li>
<li>Tìm hiểu kiến thức cơ bản về Thuật toán</li>
<li>Các vấn đề thực hành trên DSA</li>
</ul>
<h3 id="_1-tim-hieu-ve-su-phuc-tap" tabindex="-1"><a class="header-anchor" href="#_1-tim-hieu-ve-su-phuc-tap" aria-hidden="true">#</a> 1. Tìm hiểu về Sự phức tạp</h3>
<p>Đây là một trong những chủ đề thú vị và quan trọng. Động cơ chính để sử dụng DSA là để giải quyết vấn đề một cách hiệu quả và hiệu quả. Làm thế nào bạn có thể quyết định xem một chương trình do bạn viết có hiệu quả hay không? Điều này được đo lường bằng sự phức tạp.</p>
<p>Độ phức tạp có hai loại:</p>
<p>Độ phức tạp về thời gian: Độ phức tạp về thời gian được sử dụng để đo lượng thời gian cần thiết để thực thi mã.
Độ phức tạp của không gian: Độ phức tạp của không gian có nghĩa là lượng không gian cần thiết để thực thi thành công các chức năng của mã.
Bạn cũng sẽ bắt gặp thuật ngữ Không gian phụ trợ rất phổ biến trong DSA, đề cập đến không gian bổ sung được sử dụng trong chương trình ngoài cấu trúc dữ liệu đầu vào.
Cả hai độ phức tạp trên đều được đo lường liên quan đến các tham số đầu vào. Nhưng ở đây phát sinh một vấn đề. Thời gian cần thiết để thực thi mã phụ thuộc vào một số yếu tố, chẳng hạn như:</p>
<ul>
<li>Số lượng hoạt động được thực hiện trong chương trình,</li>
<li>Tốc độ của thiết bị</li>
<li>Tốc độ truyền dữ liệu nếu được thực hiện trên nền tảng trực tuyến.</li>
</ul>
<p>Vậy làm thế nào chúng ta có thể xác định cái nào hiệu quả? Câu trả lời là việc sử dụng ký hiệu tiệm cận.
<em><a href="https://www.geeksforgeeks.org/types-of-asymptotic-notations-in-complexity-analysis-of-algorithms/" target="_blank" rel="noopener noreferrer">Ký hiệu tiệm cận</a> là một công cụ toán học tính toán thời gian cần thiết về kích thước đầu vào và không yêu cầu thực thi mã.</em></p>
<p>Nó bỏ qua các hằng số phụ thuộc vào hệ thống và chỉ liên quan đến số lượng các hoạt động mô-đun được thực hiện trong toàn bộ chương trình. 3 ký hiệu tiệm cận sau đây chủ yếu được sử dụng để biểu diễn độ phức tạp về thời gian của các thuật toán:</p>
<ul>
<li>Ký hiệu Big-O (Ο) - Ký hiệu Big-O mô tả cụ thể tình huống xấu nhất.</li>
<li>Ký hiệu Omega (Ω) - Ký hiệu Omega (Ω) mô tả cụ thể tình huống tốt nhất.</li>
<li>Ký hiệu Theta (θ) - Ký hiệu này thể hiện độ phức tạp trung bình của một thuật toán.</li>
</ul>
<p>Xem hình ảnh sau đây để biết thêm về Tốc độ tăng trưởng của thuật toán</p>
<p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/dsa/session1/mypic.png?raw=true" alt="pic1"></p>
<p>Ký hiệu được sử dụng nhiều nhất trong phân tích mã là Ký hiệu Big O, cung cấp giới hạn trên của thời gian chạy mã (hoặc dung lượng bộ nhớ được sử dụng về kích thước đầu vào).</p>
<h2 id="tong-ket" tabindex="-1"><a class="header-anchor" href="#tong-ket" aria-hidden="true">#</a> Tổng kết</h2>
<p>Vậy là chúng ta đã tìm hiểu tổng quan về DSA hay Cấu trúc dữ liệu và giải thuật</p>
<p>Tiếp theo ta sẽ tìm hiểu kĩ hơn về các Cấu trúc dữ liệu phổ biến hay các Thuật toán thịnh hành hiện nay trong các bài học sau nhé</p>
</div></template>
