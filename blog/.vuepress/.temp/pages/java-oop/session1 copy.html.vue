<template><div><!-- ---
layout: Post
title: Giới thiệu về lập trình hướng đối tượng trong Java
subtitle: Lập trình hướng đối tượng với Java
author: Theanishtar
date: 2023-06-09
useHeaderImage: false
headerImage: /img/in-post/2020-10-07/header.jpg
headerMask: rgba(30, 69, 110, 0.61)
permalinkPattern: /ebook/java/java-oop/:slug/
tags:
  - Java OOP
---

Hướng đối tượng là phương pháp lập trình phổ biến nhất hiện nay!!! Cùng mình tìm hiểu về OOP trog bài viết này nhé  -->
<!-- more -->
<h1 id="bai-1-lap-trinh-huong-đoi-tuong" tabindex="-1"><a class="header-anchor" href="#bai-1-lap-trinh-huong-đoi-tuong" aria-hidden="true">#</a> Bài 1. Lập trình hướng đối tượng</h1>
<h2 id="_1-khai-niem" tabindex="-1"><a class="header-anchor" href="#_1-khai-niem" aria-hidden="true">#</a> 1. Khái niệm</h2>
<p><mark>OOP</mark> là viết tắt của <strong>Object-Oriented Programing</strong> (<em>Lập trình hướng đối tượng</em>), nó cấu trúc code phân chia theo <strong>Classes</strong> → <strong>Objects</strong> → <strong>Attributes</strong> → <strong>Methods</strong></p>
<h2 id="_2-phan-biet-lap-trinh-cau-truc-va-huong-đoi-tuong" tabindex="-1"><a class="header-anchor" href="#_2-phan-biet-lap-trinh-cau-truc-va-huong-đoi-tuong" aria-hidden="true">#</a> 2. Phân biệt lập trình cấu trúc và hướng đối tượng</h2>
<h3 id="lap-trinh-cau-truc-la-gi" tabindex="-1"><a class="header-anchor" href="#lap-trinh-cau-truc-la-gi" aria-hidden="true">#</a> Lập trình cấu trúc là gì</h3>
<p>Cách viết code trước đây (sử dụng các hàm trong một file duy nhất) là lập trình theo hướng cấu trúc.</p>
<p>Bạn có thể thấy khi viết code theo kiểu này sẽ không có sự liên kết giữa các file trong một thư mục vì vậy code sẽ không tối ưu và phải viết rất nhiều.</p>
<h3 id="tai-sao-huong-đoi-tuong-co-uu-the-hon" tabindex="-1"><a class="header-anchor" href="#tai-sao-huong-đoi-tuong-co-uu-the-hon" aria-hidden="true">#</a> Tại sao hướng đối tượng có ưu thế hơn</h3>
<p>So với lập trình cấu trúc thì hướng đối tượng sẽ:</p>
<ul>
<li>
<p>Nhanh hơn và dễ hơn</p>
</li>
<li>
<p>Cấu trúc rõ ràng dễ hiểu, dễ bảo trì, sửa lỗi</p>
</li>
<li>
<p>Có thể tái sử dụng giúp thời gian phát triển code ngắn hơn</p>
</li>
</ul>
<h2 id="_3-lap-trinh-huong-đoi-tuong" tabindex="-1"><a class="header-anchor" href="#_3-lap-trinh-huong-đoi-tuong" aria-hidden="true">#</a> 3. Lập trình hướng đối tượng</h2>
<p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/java-oop/session1/Picture4.png?raw=true" alt="object-class-diagrame-1.png"></p>
<p>Nhìn ảnh trên có lẽ bạn đã hiểu khá tổng quát về hướng đối tượng rồi</p>
<p>Mình sẽ nói theo cách mình hiểu nhé:</p>
<details class="custom-container details"><summary><b>Object</b> <i>(đối tượng)</i></summary>
<ul>
<li>Object là một đối tượng cụ thể (ở đây là Mèo Crosby)</li>
<li>Đối tượng phải là cụ thể nhé, nghĩa là phải rõ ràng 1 đối tượng nào đó chứ các đối tượng như <strong>Dog</strong> <em>(chó)</em>, <strong>Tree</strong> <em>(cây cối)</em> là các <a href="">lớp</a> vì nó không chỉ rõ một sự vật nào cả mà nói chung chung</li>
</ul>
</details>
<details class="custom-container details"><summary><b>Attribute</b> <i>(thuộc tính)</i></summary>
<ul>
<li>Là các thuộc tính của đối tượng (thường là danh từ)
<ul>
<li>Tên: Crosby</li>
<li>Tuổi: 3</li>
<li>Giới tính: cái</li>
<li>Màu mắt: đen vàng</li>
</ul>
</li>
<li>Lưu ý: Các thuộc tính này là thuộc tính của đối tượng Cat Crosby bên trên</li>
</ul>
</details>
<details class="custom-container details"><summary><b>Methods</b>  <i>(phương thức)</i></summary>
<ul>
<li>Methods là các phương thức của đối tượng (thường là động từ)
<ul>
<li>Chạy:</li>
<li>Bắt chuột:</li>
<li>Kêu: Meow-meow</li>
</ul>
</li>
<li>Lưu ý: Các phương thức này là phương thức của đối tượng Cat Crosby bên trên</li>
</ul>
</details>
<details class="custom-container details"><summary><b>Classes</b> <i>(lớp)</i></summary>
<ul>
<li>Classes là một lớp (gồm nhiều đối tượng)
<ul>
<li>Đối tượng: Bronson</li>
<li>Đối tượng: Chester</li>
<li>Đối tượng: Bobby</li>
</ul>
</li>
<li>Lưu ý: các lớp là gồm nhiều các đối tượng Cat bên trên</li>
<li>Có thể gọi đây là &quot;lớp Cat&quot; chứa các đối tượng Bronson, Chester, Bobby</li>
</ul>
</details>
<h3 id="vi-du" tabindex="-1"><a class="header-anchor" href="#vi-du" aria-hidden="true">#</a> Ví dụ:</h3>
<p>Lớp Hoa gồm: hoa lan, hoa hồng, hoa cẩm tú cầu, ...</p>
<p>Lớp Động vật gồm: heo, chó, gà, dê, ...</p>
<p>Lớp Người đẹp trai gồm: Trần Đang, Hữu Đang, Đang Trần, ...</p>
<h2 id="_4-bieu-dien-bang-code" tabindex="-1"><a class="header-anchor" href="#_4-bieu-dien-bang-code" aria-hidden="true">#</a> 4. Biểu diễn bằng code</h2>
<p>Nãy giờ chỉ là lý thuyết thôi <em>(dài mún chét 😭)</em> và bây giờ là vào code nhá</p>
<p>Bây giờ chúng ta cùng nhau xây dựng các đối tượng, lớp, phương thức và thuộc tính bằng code Java nhé</p>
<h3 id="tao-project" tabindex="-1"><a class="header-anchor" href="#tao-project" aria-hidden="true">#</a> Tạo project</h3>
<p>Đầu tiên các bạn tạo <strong><em>project</em></strong> và các <strong><em>packages</em></strong> như hình sau nhé
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/java-oop/session1/create-project.png?raw=true" alt="object-class-diagrame-1.png"></p>
<p>Giải thích:</p>
<ul>
<li><strong><em>javaoop.objects</em></strong> sẽ chứa các đối tượng trong project</li>
<li><strong><em>javaoop.main</em></strong> sẽ chứa phương thức main để hạy cương trình</li>
</ul>
<h3 id="tao-lop-đoi-tuong" tabindex="-1"><a class="header-anchor" href="#tao-lop-đoi-tuong" aria-hidden="true">#</a> Tạo lớp đối tượng</h3>
<p>Tạo một Java Class trong package <strong><em>javaoop.objects</em></strong>, ví dụ ở đây mình tạo lớp <em>Cat</em></p>
<ul>
<li>Lưu ý: tên lớp phải viết hoa chữ đầu tiên nha <mark>Cat.java</mark></li>
</ul>
<p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/java-oop/session1/create-obj.png?raw=true" alt="object-class-diagrame-1.png"></p>
<h3 id="tao-thuoc-tinh-cho-đoi-tuong" tabindex="-1"><a class="header-anchor" href="#tao-thuoc-tinh-cho-đoi-tuong" aria-hidden="true">#</a> Tạo thuộc tính cho đối tượng</h3>
<p>Các bạn tạo thuộc tính giống như tạo biến vậy nha</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token string">"Crosby"</span><span class="token punctuation">;</span>         <span class="token comment">// thuộc tinh tên</span>
    <span class="token keyword">int</span> age <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>                    <span class="token comment">// thuộc tính tuổi</span>
    <span class="token class-name">String</span> eyesColor <span class="token operator">=</span> <span class="token string">"Đen vàng"</span><span class="token punctuation">;</span>  <span class="token comment">// thuộc tính màu mắt</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="tao-phuong-thuc-cho-đoi-tuong" tabindex="-1"><a class="header-anchor" href="#tao-phuong-thuc-cho-đoi-tuong" aria-hidden="true">#</a> Tạo phương thức cho đối tượng</h3>
<p>Các bạn tạo phương thức phía dưới thuộc tính</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token string">"Crosby"</span><span class="token punctuation">;</span>         <span class="token comment">// thuộc tinh tên</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> age <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>                    <span class="token comment">// thuộc tính tuổi</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> eyesColor <span class="token operator">=</span> <span class="token string">"Đen vàng"</span><span class="token punctuation">;</span>  <span class="token comment">// thuộc tính màu mắt</span>
    
    <span class="token comment">// phương thức bắt chuột</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">mice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Mèo đang bắt chuột"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
	 <span class="token comment">// phương thức kêu</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">squeaks</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Meow meow !!!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><details class="custom-container details"><summary>Giải thích về <b>public</b></summary>
<ul>
<li>Từ khóa <strong>public</strong> giúp mình có thể gọi trực tiếp thuộc tính trong lớp khác</li>
</ul>
</details>
<h3 id="tao-đoi-tuong-tu-lop-khac" tabindex="-1"><a class="header-anchor" href="#tao-đoi-tuong-tu-lop-khac" aria-hidden="true">#</a> Tạo đối tượng từ lớp khác</h3>
<p>Đầu tiên mình sẽ tạo lớp Main bên package <strong><em>javaoop.main</em></strong> nhé</p>
<p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/java-oop/session1/createmain.png?raw=true" alt="object-class-diagrame-1.png"></p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// viết code ở đây</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="goi-lai-đoi-tuong" tabindex="-1"><a class="header-anchor" href="#goi-lai-đoi-tuong" aria-hidden="true">#</a> Gọi lại đối tượng</h4>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// khởi tạo đối tượng Cat bằng cách gọi từ lớp Cat</span>
        <span class="token class-name">Cat</span> cat1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="xuat-gia-tri-thuoc-tinh" tabindex="-1"><a class="header-anchor" href="#xuat-gia-tri-thuoc-tinh" aria-hidden="true">#</a> Xuất giá trị thuộc tính</h4>
<p>Bên Cat hiện đã có giá trị mặc định cho các thuộc tính</p>
<ul>
<li>name = Crosby</li>
<li>age = 3</li>
<li>eyesColor = Đen vàng</li>
</ul>
<p>chúng ta có thể xuất ra xem thử nhé</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// khởi tạo đối tượng Cat bằng cách gọi từ lớp Cat</span>
        <span class="token class-name">Cat</span> cat1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"tên mèo là: "</span> <span class="token operator">+</span> cat1<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// Output: tên mèo là: Crosby</span>
</code></pre></div><blockquote>
<p>Các bạn nhớ để đặc tả <strong>public</strong> phía trước thuộc tính nha, không thôi lỗi đó</p>
</blockquote>
<h4 id="goi-phuong-thuc-cua-đoi-tuong" tabindex="-1"><a class="header-anchor" href="#goi-phuong-thuc-cua-đoi-tuong" aria-hidden="true">#</a> Gọi phương thức của đối tượng</h4>
<p>Bên Cat hiện đã có các phương thức</p>
<ul>
<li>mice(): phương thức bắt chuột</li>
<li>squeaks(): phương thức kêu</li>
</ul>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// khởi tạo đối tượng Cat bằng cách gọi từ lớp Cat</span>
        <span class="token class-name">Cat</span> cat1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        cat1<span class="token punctuation">.</span><span class="token function">mice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        cat1<span class="token punctuation">.</span><span class="token function">squeaks</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/* Output:
		Mèo đang bắt chuột
		Meow meow !!!
*/</span>
</code></pre></div></div></template>
