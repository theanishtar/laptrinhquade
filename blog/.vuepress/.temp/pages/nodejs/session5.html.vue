<template><div><!-- ---
layout: Post
title: Restfull API đơn giản với NodeJS
subtitle: Lập trình NodeJS
author: Theanishtar
date: 2023-05-31
useHeaderImage: true
headerImage: /img/in-post/2017-06-09/header.jpeg
headerMask: rgba(39, 64, 112, 0.599)
permalinkPattern: /ebook/nodejs/:slug/
tags:
  - NodeJS 
  - RestAPI
---

Công cuộc cuối cùng để tới với một Lập trình viên BackEnd NodeJS lad xây dựng APIs. Cùng mình thực hiện nhá
 -->
<!-- more -->
<hr>
<!-- Với Restful, bạn sẽ tạo nên khả năng truy cập tài nguyên cho client thông qua các URI. Dữ liệu trả về sẽ trong dạng json, xml, html nhưng chủ yếu là json. Restful sử dụng HTTP như cỗ xe chuyên chở dữ liệu giữa server và client qua các method GET, HEAD, POST, PUT, PATCH, DELETE… -->
<h1 id="bai-5-gioi-thieu-restful-api" tabindex="-1"><a class="header-anchor" href="#bai-5-gioi-thieu-restful-api" aria-hidden="true">#</a> Bài 5. Giới thiệu Restful API</h1>
<h2 id="cac-quy-đinh-http-method-trong-restful" tabindex="-1"><a class="header-anchor" href="#cac-quy-đinh-http-method-trong-restful" aria-hidden="true">#</a> Các quy định http method trong restful</h2>
<table>
<thead>
<tr>
<th>HTTP method</th>
<th>Mô tả</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>GET</strong></td>
<td>Dùng để lấy một tài nguyên hoặc danh sách các tài nguyên từ server (đã representation lại theo dạng json, xml…)</td>
</tr>
<tr>
<td><strong>POST</strong></td>
<td>Gửi đến server tài nguyên để xử lý (thường dùng cho thêm mới record)</td>
</tr>
<tr>
<td><strong>PUT</strong></td>
<td>Ấn định trạng thái mới cho tài nguyên trên server (thường dùng cho update record)</td>
</tr>
<tr>
<td><strong>DELETE</strong></td>
<td>Xóa tài nguyên chỉ định trên server</td>
</tr>
</tbody>
</table>
<h2 id="khi-request-đen-mot-tai-nguyen-cac-status-code-se-tra-ve-client" tabindex="-1"><a class="header-anchor" href="#khi-request-đen-mot-tai-nguyen-cac-status-code-se-tra-ve-client" aria-hidden="true">#</a> Khi request đến một tài nguyên, các status code sẽ trả về client :</h2>
<ul>
<li>200 OK – Tra về trong các phương thức GET, PUT, PATCH, DELETE.</li>
<li>201 Created – Trả về khi tạo xong tài nguyên</li>
<li>204 No Content – Trả về khi xoá xong 1 tài nguyên</li>
<li>304 Not Modified – Tài nguyên không có thay đổi, client có thể dùng cache.</li>
<li>400 Bad Request – Request không hợp lệ</li>
<li>401 Unauthorized – Request không quyền truy cập.</li>
<li>403 Forbidden – Request bị bẻ gãy, từ chối truy cập.</li>
<li>404 Not Found – Không tìm thấy tài nguyên trong từ URI</li>
<li>405 Method Not Allowed – Phương thức không được phép</li>
<li>410 Gone – Tài nguyên không tồn tại</li>
<li>415 Unsupported Media Type – Không hỗ trợ kiểu tài nguyên</li>
<li>422 Unprocessable Entity – Dữ liệu không được xử lý</li>
<li>429 Too Many Requests – Có quá nhiều request</li>
</ul>
<h2 id="thuc-hien-restful-api-trong-nodejs" tabindex="-1"><a class="header-anchor" href="#thuc-hien-restful-api-trong-nodejs" aria-hidden="true">#</a> Thực hiện restful api trong nodejs</h2>
<h3 id="chuan-bi-database" tabindex="-1"><a class="header-anchor" href="#chuan-bi-database" aria-hidden="true">#</a> Chuẩn bị database</h3>
<p>Tạo table tên sach như sau: <br>
<img src="https://github.com/Theanishtar/WEB503-NODEJS/blob/main/lab05/imgs/image-13.png?raw=true" alt="text">
Nhập dữ liệu
<img src="https://github.com/Theanishtar/WEB503-NODEJS/blob/main/lab05/imgs/image-14.png?raw=true" alt="text"></p>
<h3 id="cai-module-express-va-express-generator" tabindex="-1"><a class="header-anchor" href="#cai-module-express-va-express-generator" aria-hidden="true">#</a> Cài module express và express-generator</h3>
<p>Nếu máy của bạn đã cài rồi thì thôi bỏ qua, còn chưa thì</p>
<ol>
<li>Mở command line</li>
<li>Gõ  lệnh npm install -g express</li>
<li>Tiếp theo gõ lệnh  npm -g install express-generator</li>
</ol>
<h3 id="tao-project-đe-thuc-tap" tabindex="-1"><a class="header-anchor" href="#tao-project-đe-thuc-tap" aria-hidden="true">#</a> Tạo project để thực tập</h3>
<ol>
<li>Vào command line rồi chạy lệnh:</li>
</ol>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>express <span class="token operator">--</span><span class="token operator">=</span>ejs RestfulTest
</code></pre></div><ol start="2">
<li>Chuyển vào folder RestfulTest mới tạo và chạy các lệnh cài đặt module cần thiết</li>
</ol>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>npm install
npm install mysql
</code></pre></div><h3 id="tao-model-ket-noi-db" tabindex="-1"><a class="header-anchor" href="#tao-model-ket-noi-db" aria-hidden="true">#</a> Tạo model kết nối db</h3>
<ol>
<li>
<p>Tạo folder models trong project</p>
</li>
<li>
<p>Tạo file file models/database.js</p>
</li>
</ol>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> mysql <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'mysql'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> db <span class="token operator">=</span> mysql<span class="token punctuation">.</span><span class="token function">createConnection</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
   <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">'localhost'</span><span class="token punctuation">,</span> 
   <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token string">'root'</span><span class="token punctuation">,</span> 
   <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> 
   <span class="token literal-property property">database</span><span class="token operator">:</span> <span class="token string">'labnodejs'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
db<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Da ket noi database !'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> db<span class="token punctuation">;</span> 
</code></pre></div><h3 id="tao-route" tabindex="-1"><a class="header-anchor" href="#tao-route" aria-hidden="true">#</a> Tạo route</h3>
<ol>
<li>Mở file app.js và định nghĩa route sach dẫn vào controller routes/sach</li>
</ol>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> sachRouter <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./routes/sach'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">'/sach'</span><span class="token punctuation">,</span> sachRouter<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ol start="2">
<li>Tạo file routes/sach.js và code</li>
</ol>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token keyword">var</span> router <span class="token operator">=</span> express<span class="token punctuation">.</span><span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token keyword">var</span> db <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./../models/database'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
 router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token comment">//chức năng trả về danh sách các record</span>
     <span class="token comment">//phương thức request: get</span>
     <span class="token comment">//lấy ra các record trong table</span>
     <span class="token comment">//trả về danh sách sách dạng json</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 router<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token comment">//chức năng thêm mới record vào table</span>
     <span class="token comment">//phương thức request: post</span>
     <span class="token comment">//tiếp nhận dữ liệu gửi trong body request</span>
     <span class="token comment">//thực hiện chèn record mới vào table </span>
     <span class="token comment">//trả về thông báo đã chèn dạng json </span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/:id'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token comment">//chức năng trả về chi tiết 1 record</span>
     <span class="token comment">//phương thức request: get</span>
     <span class="token comment">//tiếp nhận id của reord trong url</span>
     <span class="token comment">//lấy ra record theo id từ table</span>
     <span class="token comment">//trả về chi tiết record dạng json</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 router<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">'/:id'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token comment">//chức năng cập nhật record trong table </span>
     <span class="token comment">//phương thức request: put</span>
     <span class="token comment">//tiếp nhận dữ liệu gửi trong body request</span>
     <span class="token comment">//thực hiện cập nhật record vào table </span>
     <span class="token comment">//trả về thông báo json đã cập nhật</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 router<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">'/:id'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
     <span class="token comment">//chức năng xóa 1 record trong table</span>
     <span class="token comment">//phương thức request: delete</span>
     <span class="token comment">//tiếp nhận id trong url</span>
     <span class="token comment">//thực hiện xóa record</span>
     <span class="token comment">//trả về thông báo json đã xóa</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 module<span class="token punctuation">.</span>exports <span class="token operator">=</span> router<span class="token punctuation">;</span>
</code></pre></div><h3 id="thuc-hien-chuc-nang-danh-sach-record" tabindex="-1"><a class="header-anchor" href="#thuc-hien-chuc-nang-danh-sach-record" aria-hidden="true">#</a> Thực hiện chức năng danh sách record</h3>
<ol>
<li>Trong routes/sach.js, code lại chức năng trả về danh sách các record để được như sau</li>
</ol>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> sql <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">SELECT id, tenSach, moTa, urlHinh FROM sach</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
    db<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ol start="2">
<li>Test: Mở Postman để test
Trình Postman download từ https://www.postman.com/downloads/ , giúp bạn tạo các loại request khác nhau (get, post, put, delete…) đến server. Nếu bạn chưa cài thì down rồi cài vào máy nhé.</li>
</ol>
<p>Mở chương trình postman, chọn method GET và nhập url rồi nhắp Send như hình</p>
<p><img src="https://github.com/Theanishtar/WEB503-NODEJS/blob/main/lab05/imgs/postman-test-list.png?raw=true" alt="text"></p>
<h3 id="thuc-hien-lay-chi-tiet-record" tabindex="-1"><a class="header-anchor" href="#thuc-hien-lay-chi-tiet-record" aria-hidden="true">#</a> Thực hiện lấy chi tiết record</h3>
<ol>
<li>Trong routes/sach.js, code lại chức năng trả về chi tiết 1 record để được như sau</li>
</ol>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/:id'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> id<span class="token operator">=</span>req<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">;</span>      
    <span class="token keyword">let</span> sql <span class="token operator">=</span> <span class="token string">'SELECT * FROM sach WHERE id = ?'</span>    
    db<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> id<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> d</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
       res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>d<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ol start="2">
<li>Test: Mở Postman để test</li>
</ol>
<p>Trong tool postman, chọn method GET và nhập url rồi nhắp Send như hình</p>
<p><img src="https://github.com/Theanishtar/WEB503-NODEJS/blob/main/lab05/imgs/postman-test-read.png?raw=true" alt="text"></p>
<h3 id="thuc-hien-chuc-nang-them-record" tabindex="-1"><a class="header-anchor" href="#thuc-hien-chuc-nang-them-record" aria-hidden="true">#</a> Thực hiện chức năng thêm record</h3>
<ol>
<li>Trong routes/sach.js, code lại chức năng thêm mới record vào table để được như sau:</li>
</ol>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>router<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> data <span class="token operator">=</span> req<span class="token punctuation">.</span>body<span class="token punctuation">;</span>  
    <span class="token keyword">let</span> sql <span class="token operator">=</span> <span class="token string">'INSERT INTO sach SET ?'</span><span class="token punctuation">;</span>
    db<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> data<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> d</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
        res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string-property property">"thongbao"</span><span class="token operator">:</span><span class="token string">"Đã chèn xong sách"</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ol start="2">
<li>Test: Mở Postman để test</li>
</ol>
<p>Trong tool postman, chọn method POST và nhập url rồi nhắp Send như hình</p>
<p><img src="https://github.com/Theanishtar/WEB503-NODEJS/blob/main/lab05/imgs/postman-test-create.png?raw=true" alt="text"></p>
<h3 id="thuc-hien-chuc-nang-cap-nhat-record" tabindex="-1"><a class="header-anchor" href="#thuc-hien-chuc-nang-cap-nhat-record" aria-hidden="true">#</a> Thực hiện chức năng cập nhật record</h3>
<ol>
<li>Trong routes/sach.js, code lại chức năng cập nhật record trong table để được như sau:</li>
</ol>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>router<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">'/:id'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> data <span class="token operator">=</span> req<span class="token punctuation">.</span>body<span class="token punctuation">;</span>
    <span class="token keyword">let</span> id <span class="token operator">=</span> req<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
    <span class="token keyword">let</span> sql <span class="token operator">=</span> <span class="token string">'UPDATE sach SET ? WHERE id = ?'</span><span class="token punctuation">;</span>
    db<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token punctuation">[</span>data<span class="token punctuation">,</span> id<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> d</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
        res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string-property property">"thongbao"</span><span class="token operator">:</span> <span class="token string">'Đã cập nhật sách'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ol start="2">
<li>Test: Mở Postman để test</li>
</ol>
<p>Trong tool postman, chọn method PUT và nhập url rồi nhắp Send như hình
<img src="https://github.com/Theanishtar/WEB503-NODEJS/blob/main/lab05/imgs/postman-test-update.png?raw=true" alt="text"></p>
<h3 id="thuc-hien-chuc-nang-xoa-record" tabindex="-1"><a class="header-anchor" href="#thuc-hien-chuc-nang-xoa-record" aria-hidden="true">#</a> Thực hiện chức năng xóa record</h3>
<ol>
<li>Trong routes/sach.js, code lại chức năng xóa record trong table để được như sau:</li>
</ol>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>router<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">'/:id'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token keyword">let</span> id <span class="token operator">=</span> req<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
    <span class="token keyword">let</span> sql <span class="token operator">=</span> <span class="token string">'DELETE FROM sach WHERE id = ?'</span>
    db<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> id <span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> d</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
        res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string-property property">"thongbao"</span><span class="token operator">:</span> <span class="token string">'Đã xóa thành công'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ol start="2">
<li>Test: Mở Postman để test</li>
</ol>
<p>Trong tool postman, chọn method DELETE và nhập url rồi nhắp Send như hình</p>
<p><img src="https://github.com/Theanishtar/WEB503-NODEJS/blob/main/lab05/imgs/postman-test-delete.png?raw=true" alt="text"></p>
<p>Trên đây là phần hướng dẫn RESTful API trong NodeJS, bao gồm các khái niệm, cách tạo api, cách test. Các vấn đề liên quan vẫn còn, đó là authentication trong restful, validation, kết hợp với phần front end… sẽ được trình bày tiếp sau.</p>
<p>Bài tập: mời bạn thực hiện tạo bộ các hàm restful api tương tự như trình bày ở trên nhưng với table loai.</p>
</div></template>
