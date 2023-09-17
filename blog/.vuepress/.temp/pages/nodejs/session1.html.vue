<template><div><!-- ---
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
<h1 id="bai-1-tim-hieu-ve-nodejs" tabindex="-1"><a class="header-anchor" href="#bai-1-tim-hieu-ve-nodejs" aria-hidden="true">#</a> Bài 1. Tìm hiểu về NodeJS</h1>
<hr>
<!-- NodeJS được thịnh hành dạo gần đây và được rất nhiều lập trình viên ưa chuộng, với cú pháp ngắn gọn, đơn giản NodeJS ngày càng được cộng đồng phát triển và học tập một cách mạnh mẻ.

Khi học NodeJS bạn có thể phát triển các webapp phía BackEnd bằng NestJS (một framework của NodeJS) -->
<h2 id="nodejs-la-gi" tabindex="-1"><a class="header-anchor" href="#nodejs-la-gi" aria-hidden="true">#</a> NodeJS là gì</h2>
<ul>
<li>
<p>NodeJS là một nền tảng được tạo ra để phát triển các ứng dụng web có tốc độ thực thi và hiệu suất cao. Nó cho phép web deverloper triển khai ngôn ngữ javascript ở phía server, tạo nội dung động cho trang web.</p>
</li>
<li>
<p>Nodejs tạo ra bởi Ryan Dahl vào 2009, ban đầu được phát triển trên Linux, Mac OS. Bản chạy trên Windows phát hành vào 2011.</p>
</li>
<li>
<p>NodeJS sử dụng kỹ thuật điều khiển theo sự kiện và bất đồng bộ giúp code chạy nhanh và hiệu quả.</p>
</li>
<li>
<p>NodeJS được sử dụng nhiều trong các lĩnh vực I/O bound Applications, Data Streaming Applications, Data Intensive Real-time Applications (DIRT), JSON APIs based Applications, Single Page Applications</p>
</li>
<li>
<p>Cơ bản về NodeJS sẽ đề cập đến các kiến thức sơ khời về NodeJS để bạn bắt đầu tìm hiểu và lập trình NodeJS để phát triển ứng dụng web.</p>
</li>
</ul>
<h2 id="mo-hinh-hoat-đong-cua-nodejs" tabindex="-1"><a class="header-anchor" href="#mo-hinh-hoat-đong-cua-nodejs" aria-hidden="true">#</a> Mô hình hoạt động của NodeJS</h2>
<ul>
<li>NodeJS hoạt động ở phía server, giúp tạo ra các trang web động. Viết bằng ngôn ngữ Javascript. Ưu điểm của NodeJS là hướng sự kiện, bất đồng bộ, chạy rất nhanh.</li>
</ul>
<p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/nodejs/session1/mo-hinh-hoat-dong-cua-nodejs.png?raw=true" alt="object-class-diagrame-1.png"></p>
<ul>
<li>So sánh với mô hình PHP, NodeJS tương ứng với Apache + PHP. NodeJS cũng giúp tạo website động như PHP: tính toán, quản lý file, tương tác database, quản lý session..</li>
</ul>
<p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/nodejs/session1/mo-hinh-hoat-dong-php.png?raw=true" alt="object-class-diagrame-1.png"></p>
<h2 id="download-va-cai-đat-nodejs" tabindex="-1"><a class="header-anchor" href="#download-va-cai-đat-nodejs" aria-hidden="true">#</a> Download và cài đặt NodeJS</h2>
<h3 id="_1-download-nodejs" tabindex="-1"><a class="header-anchor" href="#_1-download-nodejs" aria-hidden="true">#</a> 1. Download NodeJS</h3>
<ul>
<li>Truy cập vào địa chỉ: <a href="https://nodejs.org/en/download/" target="_blank" rel="noopener noreferrer">Node.js</a></li>
</ul>
<p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/nodejs/session1/download-nodejs.png?raw=true" alt="object-class-diagrame-1.png"></p>
<ul>
<li>Download xong bạn có một file .msi. Chạy file này để bắt đầu cài.</li>
</ul>
<h3 id="_2-cai-đat-nodejs" tabindex="-1"><a class="header-anchor" href="#_2-cai-đat-nodejs" aria-hidden="true">#</a> 2. Cài đặt NodeJS</h3>
<ul>
<li>Cài đặt là việc cơ bản về NodeJS đầu tiên. Bạn chạy file download và cứ nhắp tuần tự các nút Next, không có gì quá đặt biệt.  Trong quá trình cài NodeJS, phần mềm NPM(Node Package Manager)  cũng được cài luôn vào máy của bạn (tốt),  đây là tool cần thiết quản lý các thư viện cho bạn.</li>
</ul>
<p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/nodejs/session1/cai-dat-nodejs.png?raw=true" alt="object-class-diagrame-1.png"></p>
<h3 id="_3-kiem-tra-va-cau-hinh" tabindex="-1"><a class="header-anchor" href="#_3-kiem-tra-va-cau-hinh" aria-hidden="true">#</a> 3. Kiểm tra và cấu hình</h3>
<p>Mở cửa sổ CMD và thực thi các lệnh sau để kiểm tra phiên bản của NodeJS và NPM:</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">node</span> -v
<span class="token function">npm</span> -v
</code></pre></div><h3 id="_4-test-hoat-đong-cua-nodejs" tabindex="-1"><a class="header-anchor" href="#_4-test-hoat-đong-cua-nodejs" aria-hidden="true">#</a> 4. Test họat động của NodeJS</h3>
<p>a. Tạo 1 folder  tên tùy ý</p>
<p>b. Trong folder mới tạo, tạo 1 file tên chao.js và mở lên gõ code</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">//chao.js</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Chao ban! Chuc an lanh'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>c. Mở command line chuyển vào folder mới tạo</p>
<p>d. Gõ lệnh thực thi file chao.js</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">node</span> chao.js
</code></pre></div><p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/nodejs/session1/node-chao.png?raw=true" alt="object-class-diagrame-1.png"></p>
<p>Thấy dòng chữ Chao ban! Chuc an lanh là thành công</p>
<h2 id="module-trong-nodejs" tabindex="-1"><a class="header-anchor" href="#module-trong-nodejs" aria-hidden="true">#</a> Module trong NodeJS</h2>
<p>Node.js dùng module để đơn giản hóa các ứng dụng phức tạp. Module giống như các thư viện trong C, Java… Mỗi module chứa một số hàm chức năng. Các module là tách biệt với nhau và với code chính, khi nào cần thì gọi chúng ra (bằng lệnh require) để dùng.</p>
<ul>
<li>
<p>Built-in Module: là những module có sẵn trong NodeJS, có thể gọi ra và sử dụng mà khỏi cần cài thêm, ví dụ như các module http, https, fs, path…vv… Các module có sẵn liệt kê ở đây: https://www.w3schools.com/nodejs/ref_modules.asp</p>
</li>
<li>
<p>External Module: Là các module mã nguồn mở được cung cấp bởi cộng đồng Nodejs, bạn cần cài thêm để dùng. Việc cài đặt các module bên ngoài thông qua tool NPM hoặc trang https://www.npmjs.com.</p>
</li>
</ul>
<p>Ví dụ: cài module express:</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> express
</code></pre></div><p>Khi muốn sử dụng module thì bạn gọi bằng lệnh require, ví dụ:  <mark>require(“express”);</mark></p>
<p>Và bạn cũng có thể tự viết ra các module mới nếu muốn.</p>
<h2 id="tao-project" tabindex="-1"><a class="header-anchor" href="#tao-project" aria-hidden="true">#</a> Tạo project</h2>
<p>Tạo project là để bắt đầu 1 dự án – tức website – với NodeJS.</p>
<p><strong>Tạo 1 folder tên tùy ý, ví dụ Node1</strong></p>
<p><strong>Mở command line và chuyển vào folder mới tạo</strong></p>
<p><strong>Chạy lệnh npm init để khai báo thông tin cho project Bạn sẽ được yêu cầu nhập các thông tin như: name, version, description, … hãy nhập vào hoặc nhấn Enter để dùng giá trị mặc định. Khi hoàn tất thì sẽ có 1 file tên package.json chứa thông tin bạn vừa nhập,hãy mở file này lên xem thử nhé.</strong></p>
<p><strong>Tạo file index.js sử dụng module http</strong></p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>var http <span class="token operator">=</span> require<span class="token punctuation">(</span><span class="token string">'http'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
var app <span class="token operator">=</span> http.createServer<span class="token punctuation">(</span>function <span class="token punctuation">(</span>req, res<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res.writeHead<span class="token punctuation">(</span><span class="token number">200</span>, <span class="token punctuation">{</span><span class="token string">'Content-Type'</span><span class="token builtin class-name">:</span> <span class="token string">'text/html;charset=utf-8'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    res.end<span class="token punctuation">(</span><span class="token string">'Chào bạn chúc an lành'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app.listen<span class="token punctuation">(</span><span class="token number">8080</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ul>
<li>Chạy server:</li>
</ul>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">node</span> index
</code></pre></div><ul>
<li>Test:  http://localhost:8080</li>
</ul>
<p>Việc tiếp theo là cài đặt module Express</p>
<h4 id="cai-đat-express" tabindex="-1"><a class="header-anchor" href="#cai-đat-express" aria-hidden="true">#</a> Cài đặt express</h4>
<p>Express là một tập hợp các module quan trọng cho 1 project nodejs. Express hỗ trợ các phương thức HTTP và API vô cùng mạnh mẽ . Có thể tổng hợp một số chức năng chính của express như sau:</p>
<p>Thiết lập các lớp trung gian để trả về các HTTP request
Định nghĩa router cho phép sử dụng với các hành động khác nhau dựa trên phương thức HTTP và URL
Cho phép trả về các trang HTML dựa vào các tham số
Để cài đặt express, trong folder project, bạn gõ lệnh sau:</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save express
</code></pre></div><p>Option <mark>–save</mark> để đảm bảo ExpressJs được thêm vào package.json như là một dependency (một package cần để ứng dụng chạy được).  Chạy xong,  hãy xem trong folder project của bạn, sẽ thấy các module được thêm vào</p>
<h4 id="tao-file-server-js-su-dung-module-express" tabindex="-1"><a class="header-anchor" href="#tao-file-server-js-su-dung-module-express" aria-hidden="true">#</a> Tạo file server.js sử dụng module express</h4>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> exp <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"express"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">exp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> port <span class="token operator">=</span> <span class="token number">3000</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
     res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">"&lt;h1>Đây là trang home&lt;/h1>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"/gt"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
     res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">"&lt;h1>Đây là trang giới thiệu&lt;/h1>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span>port<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span><span class="token punctuation">{</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Ung dung dang chay voi port </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>port<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="chay-server-js" tabindex="-1"><a class="header-anchor" href="#chay-server-js" aria-hidden="true">#</a> Chạy server.js</h4>
<ul>
<li>Trong command line, chạy lệnh</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>node server<span class="token punctuation">.</span>js
</code></pre></div><ul>
<li>Test:  http://localhost:3000</li>
</ul>
<p>Cơ bản về NodeJS đã trình bày các các vấn đề download, cài đặt NodeJS, tạo project, các khái niệm cơ bản trong NodeJS, làm nền tảng để bạn chuẩn bị các kiến thức tiếp theo.</p>
<p>Các em có thể đọc thêm tài liệu ở link :</p>
<ul>
<li>https://www.w3schools.com/nodejs/</li>
<li>https://nodejs.dev/learn</li>
</ul>
</div></template>
