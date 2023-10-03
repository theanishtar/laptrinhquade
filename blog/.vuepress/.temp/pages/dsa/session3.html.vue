<template><div><!-- ---
layout: Post
title: Danh sách liên kết
subtitle: Cấu trúc dữ liệu và giải thuật
author: Theanishtar
date: 2023-06-11
useHeaderImage: false
headerImage: https://github.com/dangtranhuu/images/blob/main/angurvad/dsa/session3/banner.png?raw=true
headerMask: rgba(39, 64, 112, 0.599)
permalinkPattern: /ebook/dsa/:slug/
tags:
  - Data structures 
  - DSA
--- -->
<p>Danh sách đặc là cấu trúc bạn gặp phải rất nhiều, nhưng có lẽ bạn sẽ không biết nếu chưa học về DSA.</p>
<!-- more -->
<hr>
<h2 id="danh-sach-lien-ket-la-gi" tabindex="-1"><a class="header-anchor" href="#danh-sach-lien-ket-la-gi" aria-hidden="true">#</a> Danh sách liên kết là gì?</h2>
<p>Danh sách liên kết là một cấu trúc dữ liệu <a href="">tuyến tính</a>, trong đó các phần tử không được lưu trữ tại một vị trí liền kề, thay vào đó chúng <strong><em>được liên kết</em></strong> bằng cách sử dụng <a href="">con trỏ</a>.</p>
<p>Danh sách liên kết tạo thành một loạt các nút được kết nối, trong đó mỗi nút lưu trữ dữ liệu và địa chỉ của nút tiếp theo.</p>
<p>Cấu trúc nút: Một nút trong danh sách liên kết thường bao gồm hai thành phần:</p>
<ul>
<li>Dữ liệu: Nó giữ giá trị thực tế hoặc dữ liệu được liên kết với nút.</li>
<li>Con trỏ tiếp theo: Nó lưu trữ địa chỉ bộ nhớ (tham chiếu) của nút tiếp theo trong chuỗi.</li>
</ul>
<p>Head and Tail: Danh sách liên kết được truy cập thông qua nút head, trỏ đến nút đầu tiên trong danh sách.</p>
<p>Nút cuối cùng trong danh sách trỏ đến NULL hoặc nullptr, cho biết kết thúc danh sách. Nút này được gọi là nút đuôi.</p>
<h2 id="tai-sao-can-cau-truc-du-lieu-danh-sach-lien-ket" tabindex="-1"><a class="header-anchor" href="#tai-sao-can-cau-truc-du-lieu-danh-sach-lien-ket" aria-hidden="true">#</a> Tại sao cần cấu trúc dữ liệu danh sách liên kết?</h2>
<p>Dưới đây là một vài lợi thế của danh sách liên kết được liệt kê dưới đây, nó sẽ giúp bạn hiểu tại sao cần phải biết.</p>
<ul>
<li>Cấu trúc dữ liệu động: Kích thước của bộ nhớ có thể được cấp phát hoặc hủy phân bổ tại thời điểm chạy dựa trên thao tác chèn hoặc xóa.</li>
<li>Dễ dàng chèn / xóa: Việc chèn và xóa các phần tử đơn giản hơn mảng vì không cần phải dịch chuyển các phần tử sau khi chèn và xóa, Chỉ cần cập nhật địa chỉ.</li>
<li>Sử dụng bộ nhớ hiệu quả: Như chúng ta đã biết, Danh sách liên kết là một cấu trúc dữ liệu động, kích thước tăng hoặc giảm theo yêu cầu, vì vậy điều này tránh lãng phí bộ nhớ.</li>
<li>Thực hiện: Các cấu trúc dữ liệu nâng cao khác nhau có thể được thực hiện bằng cách sử dụng danh sách liên kết như ngăn xếp, hàng đợi, đồ thị, bản đồ băm, v.v.</li>
</ul>
<details class="custom-container details"><summary>Ví dụ</summary>
<p>Trong một hệ thống, nếu chúng ta duy trì một danh sách các ID được sắp xếp trong một mảng</p>
<ul>
<li>id[] = [1000, 1010, 1050, 2000, 2040].</li>
</ul>
<p>Nếu chúng ta muốn chèn ID 1005 mới, thì để duy trì thứ tự được sắp xếp, chúng ta phải di chuyển tất cả các phần tử sau 1000 (ngoại trừ 1000).</p>
<p>Xóa cũng tốn kém với các mảng cho đến khi trừ khi một số kỹ thuật đặc biệt được sử dụng. Ví dụ: để xóa 1010 trong id [], mọi thứ sau 1010 phải được di chuyển do quá nhiều công việc đang được thực hiện ảnh hưởng đến hiệu quả của mã.</p>
</details>
<h2 id="cac-loai-danh-sach-lien-ket" tabindex="-1"><a class="header-anchor" href="#cac-loai-danh-sach-lien-ket" aria-hidden="true">#</a> Các loại danh sách liên kết:</h2>
<p>Chủ yếu có ba loại danh sách liên kết:</p>
<ul>
<li>Danh sách liên kết đơn</li>
<li>Danh sách liên kết kép</li>
<li>Danh sách liên kết vòng tròn</li>
</ul>
<h3 id="_1-danh-sach-lien-ket-đon" tabindex="-1"><a class="header-anchor" href="#_1-danh-sach-lien-ket-đon" aria-hidden="true">#</a> 1. Danh sách liên kết đơn:</h3>
<p>Trong một danh sách liên kết đơn lẻ, mỗi nút chứa một tham chiếu đến nút tiếp theo trong chuỗi.</p>
<p>Đi qua một danh sách liên kết đơn lẻ được thực hiện theo hướng chuyển tiếp.</p>
<p>Hình minh họa:
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/dsa/session2/Singlelinkedlist.png?raw=true" alt="pic1"></p>
<h3 id="_2-danh-sach-lien-ket-kep" tabindex="-1"><a class="header-anchor" href="#_2-danh-sach-lien-ket-kep" aria-hidden="true">#</a> 2. Danh sách liên kết kép:</h3>
<p>Trong một danh sách liên kết kép, mỗi nút chứa các tham chiếu đến cả nút tiếp theo và trước đó.</p>
<p>Điều này cho phép di chuyển theo cả hai hướng tiến và lùi, nhưng nó đòi hỏi bộ nhớ bổ sung cho tham chiếu lùi.</p>
<p>Hình minh họa:
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/dsa/session2/Doublylinkedlist.png?raw=true" alt="pic1"></p>
<h3 id="_3-danh-muc-lien-ket-thong-tu" tabindex="-1"><a class="header-anchor" href="#_3-danh-muc-lien-ket-thong-tu" aria-hidden="true">#</a> 3. Danh mục liên kết thông tư:</h3>
<p>Trong một danh sách liên kết tròn, nút cuối cùng trỏ trở lại nút đầu, tạo ra một cấu trúc tròn.</p>
<p>Nó có thể được liên kết đơn lẻ hoặc gấp đôi.</p>
<p>Hình minh họa:
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/dsa/session2/Circularlinkedlist.png?raw=true" alt="pic1"></p>
<h2 id="hoat-đong-tren-danh-sach-lien-ket" tabindex="-1"><a class="header-anchor" href="#hoat-đong-tren-danh-sach-lien-ket" aria-hidden="true">#</a> Hoạt động trên danh sách liên kết</h2>
<p><strong><em>Chèn</em></strong>: Thêm một nút mới vào danh sách liên kết liên quan đến việc điều chỉnh con trỏ của các nút hiện có để duy trì trình tự thích hợp. Việc chèn có thể được thực hiện ở đầu, cuối hoặc bất kỳ vị trí nào trong danh sách</p>
<p><strong><em>Xóa</em></strong>: Xóa một nút khỏi danh sách liên kết yêu cầu điều chỉnh con trỏ của các nút lân cận để thu hẹp khoảng cách do nút đã xóa để lại. Xóa có thể được thực hiện ở đầu, cuối hoặc bất kỳ vị trí nào trong danh sách.</p>
<p><strong><em>Tìm kiếm</em></strong>: Tìm kiếm một giá trị cụ thể trong danh sách liên kết liên quan đến việc đi qua danh sách từ nút đầu cho đến khi tìm thấy giá trị hoặc đạt đến cuối danh sách.</p>
<h2 id="uu-điem-cua-danh-sach-lien-ket" tabindex="-1"><a class="header-anchor" href="#uu-điem-cua-danh-sach-lien-ket" aria-hidden="true">#</a> Ưu điểm của danh sách liên kết</h2>
<p><strong><em>Kích thước động</em></strong>: Danh sách liên kết có thể tăng hoặc thu nhỏ động, vì phân bổ bộ nhớ được thực hiện trong thời gian chạy.</p>
<p><strong><em>Chèn và xóa</em></strong>: Thêm hoặc xóa các yếu tố khỏi danh sách  liên kết là hiệu quả, đặc biệt là đối với các danh sách lớn.</p>
<p><strong><em>Linh hoạt</em></strong>: Danh sách liên kết có thể dễ dàng tổ chức lại và sửa đổi mà không yêu cầu khối bộ nhớ liền kề.
Nhược điểm của danh sách liên kết</p>
<p><strong><em>Truy cập ngẫu nhiên</em></strong>: Không giống như mảng, danh sách liên kết không cho phép truy cập trực tiếp vào các phần tử theo chỉ mục. Traversal là cần thiết để đạt được một nút cụ thể.</p>
<p><strong><em>Bộ nhớ thêm</em></strong>: Danh sách nối kết yêu cầu bộ nhớ bổ sung để lưu trữ con trỏ, so với mảng.</p>
<h2 id="thuc-hanh" tabindex="-1"><a class="header-anchor" href="#thuc-hanh" aria-hidden="true">#</a> Thực hành</h2>
<h3 id="su-dung-linkedlist-h" tabindex="-1"><a class="header-anchor" href="#su-dung-linkedlist-h" aria-hidden="true">#</a> Sử dụng linkedList.h</h3>
<p>Cấu trúc của DSLK</p>
<details class="custom-container details"><summary>Code</summary>
<div class="language-c ext-c"><pre v-pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">NODE</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> data<span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">NODE</span><span class="token operator">*</span> Next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">NODE</span> Node<span class="token punctuation">;</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span><span class="token punctuation">{</span>
    Node <span class="token operator">*</span>Head<span class="token punctuation">;</span>
    Node <span class="token operator">*</span>Tail<span class="token punctuation">;</span>
    <span class="token keyword">int</span> Size<span class="token punctuation">;</span>
<span class="token punctuation">}</span>List<span class="token punctuation">;</span>
</code></pre></div></details>
<p>Khởi tạo danh sách rỗng</p>
<details class="custom-container details"><summary>Code</summary>
<div class="language-c ext-c"><pre v-pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">makeNullList</span><span class="token punctuation">(</span>List <span class="token operator">*</span>L<span class="token punctuation">)</span><span class="token punctuation">{</span>
    L<span class="token operator">-></span>Head <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    L<span class="token operator">-></span>Tail <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    L<span class="token operator">-></span>Size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></details>
<p>Hiển thị danh sách</p>
<details class="custom-container details">
<div class="language-c ext-c"><pre v-pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">displayList</span><span class="token punctuation">(</span>List L<span class="token punctuation">)</span><span class="token punctuation">{</span>
    Node <span class="token operator">*</span>temp <span class="token operator">=</span> L<span class="token punctuation">.</span>Head<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>temp <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d "</span><span class="token punctuation">,</span>temp<span class="token operator">-></span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        temp <span class="token operator">=</span> temp<span class="token operator">-></span>Next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Size = %d"</span><span class="token punctuation">,</span>L<span class="token punctuation">.</span>Size<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></details>
<p>Tạo node (nút)</p>
<details class="custom-container details"><summary>Code</summary>
<div class="language-c ext-c"><pre v-pre class="language-c"><code>Node <span class="token operator">*</span><span class="token function">createNode</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span><span class="token punctuation">{</span>
    Node <span class="token operator">*</span>newnode <span class="token operator">=</span> <span class="token punctuation">(</span>Node <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>Node<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    newnode<span class="token operator">-></span>data <span class="token operator">=</span> x<span class="token punctuation">;</span>
    newnode<span class="token operator">-></span>Next <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> newnode<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></details>
<p>Thêm node vào đầu hoặc cuối danh sách</p>
<details class="custom-container details"><summary>Code</summary>
<div class="language-c ext-c"><pre v-pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">insertList_Frist</span><span class="token punctuation">(</span>Node <span class="token operator">*</span>newNode<span class="token punctuation">,</span>List <span class="token operator">*</span>L<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>L<span class="token operator">-></span>Head <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        L<span class="token operator">-></span>Head <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
        L<span class="token operator">-></span>Tail <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span><span class="token punctuation">{</span>
        newNode<span class="token operator">-></span>Next <span class="token operator">=</span> L<span class="token operator">-></span>Head<span class="token punctuation">;</span>
        L<span class="token operator">-></span>Head <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    L<span class="token operator">-></span>Size<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">insertList_End</span><span class="token punctuation">(</span>Node <span class="token operator">*</span>newNode<span class="token punctuation">,</span>List <span class="token operator">*</span>L<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>L<span class="token operator">-></span>Head <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        L<span class="token operator">-></span>Head <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
        L<span class="token operator">-></span>Tail <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span><span class="token punctuation">{</span>
        L<span class="token operator">-></span>Tail<span class="token operator">-></span>Next <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
        L<span class="token operator">-></span>Tail<span class="token operator">=</span>newNode<span class="token punctuation">;</span>
        newNode<span class="token operator">-></span>Next <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    L<span class="token operator">-></span>Size<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></details>
<p>Thêm node vào vị trí P trong danh sách</p>
<details class="custom-container details"><summary>Code</summary>
<div class="language-c ext-c"><pre v-pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">insertList_byPos</span><span class="token punctuation">(</span><span class="token keyword">int</span> p<span class="token punctuation">,</span>Node <span class="token operator">*</span>newNode<span class="token punctuation">,</span>List <span class="token operator">*</span>L<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>p <span class="token operator">&lt;</span> <span class="token number">1</span> <span class="token operator">||</span> L<span class="token operator">-></span>Head <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">insertList_Frist</span><span class="token punctuation">(</span>newNode<span class="token punctuation">,</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>p <span class="token operator">>=</span> L<span class="token operator">-></span>Size<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">insertList_End</span><span class="token punctuation">(</span>newNode<span class="token punctuation">,</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span><span class="token punctuation">{</span>
        Node <span class="token operator">*</span>temp <span class="token operator">=</span> L<span class="token operator">-></span>Head<span class="token punctuation">;</span>
        <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>temp <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>p <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">==</span> i<span class="token punctuation">)</span><span class="token punctuation">{</span>
                newNode<span class="token operator">-></span>Next <span class="token operator">=</span> temp<span class="token operator">-></span>Next<span class="token punctuation">;</span>
                temp<span class="token operator">-></span>Next <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
                L<span class="token operator">-></span>Size<span class="token operator">++</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            i<span class="token operator">++</span><span class="token punctuation">;</span>
            temp <span class="token operator">=</span> temp<span class="token operator">-></span>Next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></details>
<p>Thêm N Node vào danh sách</p>
<details class="custom-container details"><summary>Code</summary>
<div class="language-c ext-c"><pre v-pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">inputList</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">,</span>List <span class="token operator">*</span>L<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> x<span class="token punctuation">;</span>
    Node <span class="token operator">*</span>temp<span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
        temp <span class="token operator">=</span> <span class="token function">createNode</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">insertList_byPos</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span>temp<span class="token punctuation">,</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></details>
<p>Kiểm tra X trong danh sách</p>
<details class="custom-container details"><summary>Code</summary>
<div class="language-c ext-c"><pre v-pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">memberList</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span>List L<span class="token punctuation">)</span><span class="token punctuation">{</span>
    Node <span class="token operator">*</span>temp <span class="token operator">=</span> L<span class="token punctuation">.</span>Head<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>temp <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>temp<span class="token operator">-></span>data <span class="token operator">==</span> x<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        temp <span class="token operator">=</span> temp<span class="token operator">-></span>Next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></details>
<p>Tìm vị trí Node chứa X</p>
<details class="custom-container details"><summary>Code</summary>
<div class="language-c ext-c"><pre v-pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">locateList</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span>List L<span class="token punctuation">)</span><span class="token punctuation">{</span>
    Node <span class="token operator">*</span>temp <span class="token operator">=</span> L<span class="token punctuation">.</span>Head<span class="token punctuation">;</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>temp <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>temp<span class="token operator">-></span>data <span class="token operator">=</span> x<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">free</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span><span class="token punctuation">{</span>
            i<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        temp <span class="token operator">=</span> temp<span class="token operator">-></span>Next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">free</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></details>
<p>Xóa Node có vị trí P trong danh sách</p>
<details class="custom-container details"><summary>Code</summary>
<div class="language-c ext-c"><pre v-pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">deleteList_byPos</span><span class="token punctuation">(</span><span class="token keyword">int</span> p<span class="token punctuation">,</span>List <span class="token operator">*</span>L<span class="token punctuation">)</span><span class="token punctuation">{</span>
    Node <span class="token operator">*</span>temp <span class="token operator">=</span> L<span class="token operator">-></span>Head<span class="token punctuation">;</span>
    Node <span class="token operator">*</span>prev <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>temp <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>p <span class="token operator">==</span> i<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>prev<span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                L<span class="token operator">-></span>Head<span class="token operator">=</span>temp<span class="token operator">-></span>Next<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">else</span><span class="token punctuation">{</span>
                prev<span class="token operator">-></span>Next<span class="token operator">=</span>temp<span class="token operator">-></span>Next<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            L<span class="token operator">-></span>Size<span class="token operator">--</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span><span class="token punctuation">{</span>
            i<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        prev <span class="token operator">=</span> temp<span class="token punctuation">;</span>
        temp <span class="token operator">=</span> temp<span class="token operator">-></span>Next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></details>
<p>Xóa node trong danh sách</p>
<details class="custom-container details"><summary>Code</summary>
<div class="language-c ext-c"><pre v-pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">deleteList_byNode</span><span class="token punctuation">(</span>Node<span class="token operator">*</span> newNode<span class="token punctuation">,</span>List <span class="token operator">*</span>L<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    Node <span class="token operator">*</span>temp <span class="token operator">=</span> L<span class="token operator">-></span>Head<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>temp <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>newNode <span class="token operator">==</span> temp<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">deleteList_byPos</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span><span class="token punctuation">{</span>
            i<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        temp <span class="token operator">=</span> temp<span class="token operator">-></span>Next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></details>
<p>Xóa Node có phần tử X trong danh sách</p>
<details class="custom-container details"><summary>Code</summary>
<div class="language-c ext-c"><pre v-pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">deleteList_byNode</span><span class="token punctuation">(</span>Node<span class="token operator">*</span> newNode<span class="token punctuation">,</span>List <span class="token operator">*</span>L<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    Node <span class="token operator">*</span>temp <span class="token operator">=</span> L<span class="token operator">-></span>Head<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>temp <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>newNode <span class="token operator">==</span> temp<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">deleteList_byPos</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span><span class="token punctuation">{</span>
            i<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        temp <span class="token operator">=</span> temp<span class="token operator">-></span>Next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></details>
<p>Tối ưu danh sách 121 -&gt; 12</p>
<details class="custom-container details"><summary>Code</summary>
<div class="language-c ext-c"><pre v-pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">optimizeList</span><span class="token punctuation">(</span>List <span class="token operator">*</span>L<span class="token punctuation">)</span><span class="token punctuation">{</span>
    Node <span class="token operator">*</span>temp1 <span class="token operator">=</span> L<span class="token operator">-></span>Head<span class="token punctuation">;</span>
    Node <span class="token operator">*</span>temp2 <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>temp1<span class="token operator">-></span>Next <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        temp2 <span class="token operator">=</span> temp1<span class="token operator">-></span>Next<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>temp2 <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>temp1<span class="token operator">-></span>data <span class="token operator">==</span> temp2<span class="token operator">-></span>data<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token function">deleteList_byNode</span><span class="token punctuation">(</span>temp2<span class="token punctuation">,</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            temp2 <span class="token operator">=</span> temp2<span class="token operator">-></span>Next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        temp1 <span class="token operator">=</span> temp1<span class="token operator">-></span>Next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></details>
<p>Tìm Node có phần tử lớn nhất hoặc nhỏ nhất</p>
<details class="custom-container details"><summary>Code</summary>
<div class="language-c ext-c"><pre v-pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">Find_Max</span><span class="token punctuation">(</span>List L<span class="token punctuation">)</span><span class="token punctuation">{</span>
    Node <span class="token operator">*</span>temp<span class="token operator">=</span>L<span class="token punctuation">.</span>Head<span class="token punctuation">;</span>
    <span class="token keyword">int</span> max<span class="token operator">=</span>temp<span class="token operator">-></span>data<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>temp<span class="token operator">!=</span><span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>max<span class="token operator">&lt;</span>temp<span class="token operator">-></span>data<span class="token punctuation">)</span><span class="token punctuation">{</span>
            max<span class="token operator">=</span>temp<span class="token operator">-></span>data<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        temp<span class="token operator">=</span>temp<span class="token operator">-></span>Next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">free</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> max<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">Find_Min</span><span class="token punctuation">(</span>List L<span class="token punctuation">)</span><span class="token punctuation">{</span>
    Node <span class="token operator">*</span>temp<span class="token operator">=</span>L<span class="token punctuation">.</span>Head<span class="token punctuation">;</span>
    <span class="token keyword">int</span> min<span class="token operator">=</span>temp<span class="token operator">-></span>data<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>temp<span class="token operator">!=</span><span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>min<span class="token operator">></span>temp<span class="token operator">-></span>data<span class="token punctuation">)</span><span class="token punctuation">{</span>
            min<span class="token operator">=</span>temp<span class="token operator">-></span>data<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        temp<span class="token operator">=</span>temp<span class="token operator">-></span>Next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">free</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> min<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></details>
<p>Chuyển sang danh sách khác</p>
<details class="custom-container details"><summary>Code</summary>
<div class="language-c ext-c"><pre v-pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">Find_Max</span><span class="token punctuation">(</span>List L<span class="token punctuation">)</span><span class="token punctuation">{</span>
    Node <span class="token operator">*</span>temp<span class="token operator">=</span>L<span class="token punctuation">.</span>Head<span class="token punctuation">;</span>
    <span class="token keyword">int</span> max<span class="token operator">=</span>temp<span class="token operator">-></span>data<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>temp<span class="token operator">!=</span><span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>max<span class="token operator">&lt;</span>temp<span class="token operator">-></span>data<span class="token punctuation">)</span><span class="token punctuation">{</span>
            max<span class="token operator">=</span>temp<span class="token operator">-></span>data<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        temp<span class="token operator">=</span>temp<span class="token operator">-></span>Next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">free</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> max<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">Find_Min</span><span class="token punctuation">(</span>List L<span class="token punctuation">)</span><span class="token punctuation">{</span>
    Node <span class="token operator">*</span>temp<span class="token operator">=</span>L<span class="token punctuation">.</span>Head<span class="token punctuation">;</span>
    <span class="token keyword">int</span> min<span class="token operator">=</span>temp<span class="token operator">-></span>data<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>temp<span class="token operator">!=</span><span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>min<span class="token operator">></span>temp<span class="token operator">-></span>data<span class="token punctuation">)</span><span class="token punctuation">{</span>
            min<span class="token operator">=</span>temp<span class="token operator">-></span>data<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        temp<span class="token operator">=</span>temp<span class="token operator">-></span>Next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">free</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> min<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></details>
<p>Gộp hai danh sách thành 1 danh sách</p>
<details class="custom-container details"><summary>Code</summary>
<div class="language-c ext-c"><pre v-pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">mergeList</span><span class="token punctuation">(</span>List L1<span class="token punctuation">,</span>List L2<span class="token punctuation">,</span>List <span class="token operator">*</span>L<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">changeList</span><span class="token punctuation">(</span>L1<span class="token punctuation">,</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">changeList</span><span class="token punctuation">(</span>L2<span class="token punctuation">,</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></details>
<p>Lọc số chẵn lẽ qua danh sách</p>
<details class="custom-container details"><summary>Code</summary>
<div class="language-c ext-c"><pre v-pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">filter_evenNumber</span><span class="token punctuation">(</span>List L1<span class="token punctuation">,</span> List <span class="token operator">*</span>L<span class="token punctuation">)</span><span class="token punctuation">{</span>
    Node <span class="token operator">*</span>temp <span class="token operator">=</span> L1<span class="token punctuation">.</span>Head<span class="token punctuation">;</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> L<span class="token operator">-></span>Size<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>temp <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>temp<span class="token operator">-></span>data <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">insertList_byPos</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span><span class="token function">createNode</span><span class="token punctuation">(</span>temp<span class="token operator">-></span>data<span class="token punctuation">)</span><span class="token punctuation">,</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        i<span class="token operator">++</span><span class="token punctuation">;</span>
        temp <span class="token operator">=</span> temp<span class="token operator">-></span>Next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">filter_oddNumber</span><span class="token punctuation">(</span>List L1<span class="token punctuation">,</span> List <span class="token operator">*</span>L<span class="token punctuation">)</span><span class="token punctuation">{</span>
    Node <span class="token operator">*</span>temp <span class="token operator">=</span> L1<span class="token punctuation">.</span>Head<span class="token punctuation">;</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> L<span class="token operator">-></span>Size<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>temp <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>temp<span class="token operator">-></span>data <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">insertList_byPos</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span><span class="token function">createNode</span><span class="token punctuation">(</span>temp<span class="token operator">-></span>data<span class="token punctuation">)</span><span class="token punctuation">,</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        i<span class="token operator">++</span><span class="token punctuation">;</span>
        temp <span class="token operator">=</span> temp<span class="token operator">-></span>Next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></details>
<p>Tính tổng số trung bình phần tử trong danh sách</p>
<details class="custom-container details"><summary>Code</summary>
<div class="language-c ext-c"><pre v-pre class="language-c"><code><span class="token keyword">double</span> <span class="token function">averageList</span><span class="token punctuation">(</span>List L<span class="token punctuation">)</span><span class="token punctuation">{</span>
    Node <span class="token operator">*</span>temp <span class="token operator">=</span> L<span class="token punctuation">.</span>Head<span class="token punctuation">;</span>
    <span class="token keyword">double</span> result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>temp <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        result <span class="token operator">+=</span> temp<span class="token operator">-></span>data<span class="token punctuation">;</span>
        temp <span class="token operator">=</span> temp<span class="token operator">-></span>Next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result<span class="token operator">/</span>L<span class="token punctuation">.</span>Size<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></details>
<h3 id="su-dung-sentencelist-h" tabindex="-1"><a class="header-anchor" href="#su-dung-sentencelist-h" aria-hidden="true">#</a> Sử dụng sentenceList.h</h3>
<p>Chưa cập nhật</p>
<h2 id="ket-thuc" tabindex="-1"><a class="header-anchor" href="#ket-thuc" aria-hidden="true">#</a> Kết thúc:</h2>
<p>Danh sách liên kết là các cấu trúc dữ liệu linh hoạt cung cấp phân bổ bộ nhớ động và các hoạt động chèn và xóa hiệu quả.</p>
<p>Hiểu những điều cơ bản của danh sách liên kết là điều cần thiết cho bất kỳ lập trình viên hoặc người đam mê khoa học máy tính nào.</p>
<p>Với kiến thức này, bạn có thể triển khai các danh sách liên kết để giải quyết các vấn đề khác nhau và mở rộng hiểu biết về cấu trúc dữ liệu và thuật toán.</p>
</div></template>
