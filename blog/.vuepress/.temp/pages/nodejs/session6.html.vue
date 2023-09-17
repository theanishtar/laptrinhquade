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
<h1 id="bai-6-xay-dung-restful-api" tabindex="-1"><a class="header-anchor" href="#bai-6-xay-dung-restful-api" aria-hidden="true">#</a> Bài 6. Xây dựng Restful API</h1>
<p>Sử dụng Restful API NodeJS hướng dẫn cách gọi API trong trang web. Có thể gọi bằng hàm fetch, xmlHttpRequest, hay dùng thư viện Jquery, Axios, AngularJS, ReactJS …</p>
<p>Bài viết này hướng dẫn bạn dùng Fetch API (hàm fetch) và thư viện axios</p>
<h2 id="chuan-bi-đe-su-dung-restful-api" tabindex="-1"><a class="header-anchor" href="#chuan-bi-đe-su-dung-restful-api" aria-hidden="true">#</a> Chuẩn bị để sử dụng restful api</h2>
<p>Bạn phải có 1 bộ restful API cái đã rồi mới gọi được, ở bài hướng dẫn RESTful API trong NodeJS , bạn đã thực hiện với một bộ restful API cho <strong>product</strong>. Bây giờ bạn tạo nhanh một bộ khác (<strong>users</strong>) để phục vụ bài này nhé, cũng là dịp để ôn lại restful đã học ở bài trước.</p>
<h3 id="_1-tao-database-va-table" tabindex="-1"><a class="header-anchor" href="#_1-tao-database-va-table" aria-hidden="true">#</a> 1. Tạo database và table</h3>
<ul>
<li>Vào phpmyadmin, tạo 1 database tên shop (nếu  có rồi thì khỏi tạo)</li>
<li>Vào database shop, tạo table tên users như sau:</li>
</ul>
<p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/nodejs/session6/table-users-structure.png?raw=true" alt="object-class-diagrame-1.png"></p>
<h3 id="_2-cai-module-express-va-express-generator" tabindex="-1"><a class="header-anchor" href="#_2-cai-module-express-va-express-generator" aria-hidden="true">#</a> 2. Cài module express và express-generator</h3>
<p>Nếu máy của bạn đã cài rồi thì thôi bỏ qua, còn chưa thì mở command line rồi gõ  lệnh npm install -g express , tiếp theo gõ lệnh  npm -g install express-generator</p>
<h3 id="_3-tao-project-đe-thuc-tap" tabindex="-1"><a class="header-anchor" href="#_3-tao-project-đe-thuc-tap" aria-hidden="true">#</a> 3. Tạo project để thực tập</h3>
<p>Vẫn trong command line rồi chạy lệnh:</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>express --ejs SuDungAPI
</code></pre></div><p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/nodejs/session6/tao-project-voi-express-generator.png?raw=true" alt="object-class-diagrame-1.png"></p>
<p>Chuyển vào folder SuDungAPI mới tạo và chạy lệnh cài đặt các module cần thiết</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span>
<span class="token function">npm</span> <span class="token function">install</span> mysql
</code></pre></div><h3 id="_4-tao-model-ket-noi-db" tabindex="-1"><a class="header-anchor" href="#_4-tao-model-ket-noi-db" aria-hidden="true">#</a> 4. Tạo model kết nối db</h3>
<ul>
<li>Tạo folder models trong project</li>
<li>Tạo file models/database.js</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> mysql <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'mysql'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token keyword">var</span> db <span class="token operator">=</span> mysql<span class="token punctuation">.</span><span class="token function">createConnection</span><span class="token punctuation">(</span><span class="token punctuation">{</span>   
    <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">'localhost'</span><span class="token punctuation">,</span>     
    <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token string">'root'</span><span class="token punctuation">,</span>     
    <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>     
    <span class="token literal-property property">database</span><span class="token operator">:</span> <span class="token string">'shop'</span> 
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
db<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>    
   <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> err<span class="token punctuation">;</span>    
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Da ket noi database'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 

<span class="token comment">//lệnh exports để xuất (public) ra cho bên ngoài module có thể dùng được db</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> db<span class="token punctuation">;</span> 
</code></pre></div><ul>
<li>Tạo file models/users.js code định nghĩa các hàm để tương tác vào mysql</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> db<span class="token operator">=</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./database'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
exports<span class="token punctuation">.</span><span class="token function-variable function">list</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span> <span class="token parameter">callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token keyword">let</span> sql <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">SELECT *  FROM users</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
    db<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> d</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">callback</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
exports<span class="token punctuation">.</span><span class="token function-variable function">create</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> callback</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//hàm chèn user mới vào table </span>
    <span class="token keyword">let</span> sql <span class="token operator">=</span> <span class="token string">'INSERT INTO users SET ?'</span><span class="token punctuation">;</span>
    db<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> data<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> d</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">callback</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span> <span class="token punctuation">}</span>  <span class="token punctuation">)</span><span class="token punctuation">;</span>    
<span class="token punctuation">}</span> 
exports<span class="token punctuation">.</span><span class="token function-variable function">update</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">id<span class="token punctuation">,</span> data<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token keyword">let</span> sql <span class="token operator">=</span> <span class="token string">'UPDATE users  SET ? WHERE idUser = ?'</span><span class="token punctuation">;</span>
    db<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token punctuation">[</span>data<span class="token punctuation">,</span> id<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> d</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
        <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    
<span class="token punctuation">}</span> 
exports<span class="token punctuation">.</span><span class="token function-variable function">read</span><span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">id<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> sql <span class="token operator">=</span> <span class="token string">'SELECT * FROM users WHERE idUser = ?'</span>    
    db<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> id<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> d</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        data <span class="token operator">=</span> d<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span> 
        <span class="token function">callback</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> 
</code></pre></div><h3 id="_5-tao-controller" tabindex="-1"><a class="header-anchor" href="#_5-tao-controller" aria-hidden="true">#</a> 5. Tạo controller</h3>
<ul>
<li>
<p>Mở file app.js, bạn sẽ thấy lệnh app.use(‘/users‘, usersRouter); . Đường route users đã được express tạo sẵn cho bạn dẫn vào router(controller) users. Cứ để vậy khỏi tạo nữa (nhưng nếu muốn có thể sửa hoặc tạo mới)</p>
</li>
<li>
<p>Mở file routes/users.js và code:</p>
</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> router <span class="token operator">=</span> express<span class="token punctuation">.</span><span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> db <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./../models/database'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> modelUsers <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./../models/users'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 

router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">,</span>  <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> 
    modelUsers<span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">listusers</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>listusers<span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
router<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> data <span class="token operator">=</span> req<span class="token punctuation">.</span>body<span class="token punctuation">;</span> 
	  modelUsers<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>data <span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">thongbao</span><span class="token operator">:</span><span class="token string">"Đã thêm  xong một user mới"</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/:id'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> id <span class="token operator">=</span> req<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">;</span>    
    modelUsers<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">u</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>u<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 router<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">'/:id'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span><span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> data <span class="token operator">=</span> req<span class="token punctuation">.</span>body<span class="token punctuation">;</span>
      <span class="token keyword">let</span> id <span class="token operator">=</span> req<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
      modelUsers<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> data<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">thongbao</span><span class="token operator">:</span> <span class="token string">'Đã cập nhật user '</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 module<span class="token punctuation">.</span>exports <span class="token operator">=</span> router<span class="token punctuation">;</span>
</code></pre></div><p>Test: Dùng postman để thực hiện test : xem danh sách user, xem chi tiết 1 user, thêm 1 user , cập nhật 1 user. Tất cả phải thành công nhé.</p>
<p>Việc chuẩn bị đã xong. Giờ thì gọi nó trong trang web thế nào? Mời bạn xem tiếp để biết sử dụng Restful API NodeJS.</p>
<h2 id="dung-ham-fetch-đe-goi-api" tabindex="-1"><a class="header-anchor" href="#dung-ham-fetch-đe-goi-api" aria-hidden="true">#</a> Dùng hàm fetch() để gọi API</h2>
<p>Trong Javascript, hàm <code v-pre>fetch(url,options)</code> là một hàm dùng để gửi và nhận request  đến tài nguyên ở xa. Bạn dùng hàm này để thực hiện gọi các API đã tạo</p>
<h3 id="tao-request-voi-method-get" tabindex="-1"><a class="header-anchor" href="#tao-request-voi-method-get" aria-hidden="true">#</a> Tạo request với method get</h3>
<p>Dưới đây là cấu trúc cơ bản của hàm fetch để gọi 1 tài nguyên ở xa với method get. Nếu khi request mà có lỗi gì đó thì phần .catch sẽ chạy. Còn kết quả từ server sẽ truyền tới .then trong biến response, Bạn sử dụng biến response này để đánh giá kết quả trả về có ok không rồi chuyển nó thành các dạng dữ liệu cần thiết để xử lý ở các .then sau</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'http://…'</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//đánh giá response và chuyển dữ liệu cho .then sau</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// xử lý dữ liệu và chuyển dữ liệu cho .then sau</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// xử lý dữ liệu </span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Co loi : \n'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="vi-du-1-goi-ham-api" tabindex="-1"><a class="header-anchor" href="#vi-du-1-goi-ham-api" aria-hidden="true">#</a> Ví dụ 1: Gọi hàm API</h4>
<p><strong>1. Tạo route: Mở routes/index.js và code</strong></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/danhsachuser'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">"listusers"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>2. Tạo views/listusers.ejs</strong></p>
<div class="language-ejs ext-ejs"><pre v-pre class="language-ejs"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Danh sách users<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
</code></pre></div><p><strong>3. Test: Chạy project (npm start) rồi mở trình duyệt gõ http://localhost:3000/danhsachuser , nếu thấy chữ Danh sách users là OK</strong></p>
<p><strong>4. Code gọi API trong views mới tạo (sau tag h1)</strong></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">></span> 
<span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"http://localhost:3000/users/"</span><span class="token punctuation">)</span>  
<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//xem thử trong console của trình duyệt nhé</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>res<span class="token punctuation">.</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"Lỗi = "</span> <span class="token operator">+</span> res<span class="token punctuation">.</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//hiện data ra web (dùng foreach)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span> 
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Lỗi: "</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre></div><p>Xem lại thử trang http://localhost:3000/danhsachuser , sẽ thấy trong console</p>
<p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/nodejs/session6/vidu-1-goi-api.png?raw=true" alt="object-class-diagrame-1.png"></p>
<p><strong>5. Hiện dữ liệu danh sách userra web</strong></p>
<ul>
<li>
<p>Trong trang listuser.ejs (sau h1) , tạo div <code v-pre>&lt;div id=”listuser”&gt;&lt;/div&gt;</code> để chứa kết quả danh sách user</p>
</li>
<li>
<p>Code tại vị trí hiện data ra web ở trên:</p>
</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> kq <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'listuser'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
data<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span> <span class="token parameter">u</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
   kq<span class="token punctuation">.</span>innerHTML<span class="token operator">+=</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;p></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>u<span class="token punctuation">.</span>ho<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>u<span class="token punctuation">.</span>ten<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/p></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Xem thử kết quả: http://localhost:3000/danhsachuser , sẽ thấy kết quả, định dạng thêm cho đẹp nhé.</p>
<p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/nodejs/session6/ket-qua-request-api-doc-array-json.png?raw=true" alt="object-class-diagrame-1.png"></p>
<h3 id="đoc-du-lieu-tu-1-object-json" tabindex="-1"><a class="header-anchor" href="#đoc-du-lieu-tu-1-object-json" aria-hidden="true">#</a> Đọc dữ liệu từ 1 object json</h3>
<p>Object dữ liệu json đổ về từ server là dữ liệu dạng text có cấu trúc , được trình duyệt hỗ trợ nên rất dễ đọc.</p>
<p>Bạn hãy thử: Dùng trình duyệt xem API http://localhost:3000/users/1 sẽ thấy chi tiết user 1 ở dạng json. Request API rồi hiện ra rất dễ dàng</p>
<p><strong>1. Tạo route: Mở routes/index.js và code</strong></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/chitietuser'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">"chitietuser"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>2. Tạo views/chitietuser.ejs</strong></p>
<div class="language-ejs ext-ejs"><pre v-pre class="language-ejs"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Chi tiết user<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
</code></pre></div><p><strong>3. Test: Chạy project (npm start) rồi mở trình duyệt gõ http://localhost:3000/chitietuser , nếu thấy chữ Chi tiết user là OK</strong></p>
<p><strong>4. Code gọi API trong views mới tạo (sau tag h1)</strong></p>
<div class="language-html ext-html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Chi tiết user<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>chitietuser<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"> 
    <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"http://localhost:3000/users/1"</span><span class="token punctuation">)</span>  
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>res<span class="token punctuation">.</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"Lỗi = "</span> <span class="token operator">+</span> res<span class="token punctuation">.</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
        <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> str<span class="token operator">=</span><span class="token string">""</span><span class="token punctuation">;</span>
        str<span class="token operator">+=</span> <span class="token string">"&lt;p>Username: "</span> <span class="token operator">+</span> data<span class="token punctuation">.</span>username<span class="token operator">+</span><span class="token string">"&lt;/p>"</span><span class="token punctuation">;</span>
        str<span class="token operator">+=</span> <span class="token string">"&lt;p>Họ: "</span> <span class="token operator">+</span> data<span class="token punctuation">.</span>ho <span class="token operator">+</span> <span class="token string">"&lt;/p>"</span><span class="token punctuation">;</span>
        str<span class="token operator">+=</span> <span class="token string">"&lt;p>Tên: "</span> <span class="token operator">+</span> data<span class="token punctuation">.</span>ten <span class="token operator">+</span> <span class="token string">"&lt;/p>"</span><span class="token punctuation">;</span>
        str<span class="token operator">+=</span> <span class="token string">"&lt;p>Tỉnh: "</span> <span class="token operator">+</span> data<span class="token punctuation">.</span>tinh <span class="token operator">+</span> <span class="token string">"&lt;/p>"</span><span class="token punctuation">;</span>
        str<span class="token operator">+=</span> <span class="token string">"&lt;p>Email: "</span> <span class="token operator">+</span> data<span class="token punctuation">.</span>email <span class="token operator">+</span> <span class="token string">"&lt;/p>"</span><span class="token punctuation">;</span>
        str<span class="token operator">+=</span> <span class="token string">"&lt;p>Sở thích: &lt;br>"</span> <span class="token operator">+</span> data<span class="token punctuation">.</span>sothich <span class="token operator">+</span> <span class="token string">"&lt;/p>"</span><span class="token punctuation">;</span>
        document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"chitietuser"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML<span class="token operator">=</span>str<span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Lỗi: "</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div><p>Kết quả bạn sẽ thấy dữ liệu thân thiện , theo cách bạn muốn trình bày cho user xem.</p>
<p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/nodejs/session6/ket-qua-request-api-doc-array-json.png?raw=true" alt="object-class-diagrame-1.png"></p>
<h3 id="goi-api-voi-method-post" tabindex="-1"><a class="header-anchor" href="#goi-api-voi-method-post" aria-hidden="true">#</a> Gọi API với method POST</h3>
<p>Hàm fetch(url,options) giúp gửi request  đến tài nguyên ở xa, trong đó options là các cấu hình chi tiết cho hàm. Cách sử dụng thể hiện qua ví dụ sau:</p>
<ul>
<li>File routes/index.js</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/dangky'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">"dangky"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ul>
<li>Tạo file views/dangky.ejs</li>
</ul>
<div class="language-html ext-html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>frmdk<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Username: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Password: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Email: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">dangky</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>Đăng ký<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">function</span> <span class="token function">dangky</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token keyword">let</span> un <span class="token operator">=</span> document<span class="token punctuation">.</span>frmdk<span class="token punctuation">.</span>username<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
   <span class="token keyword">let</span> pw <span class="token operator">=</span> document<span class="token punctuation">.</span>frmdk<span class="token punctuation">.</span>password<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
   <span class="token keyword">let</span> em <span class="token operator">=</span> document<span class="token punctuation">.</span>frmdk<span class="token punctuation">.</span>email<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
   <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">username</span><span class="token operator">:</span> un<span class="token punctuation">,</span>
        <span class="token literal-property property">password</span><span class="token operator">:</span> pw<span class="token punctuation">,</span> 
        <span class="token literal-property property">email</span><span class="token operator">:</span>em
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> url <span class="token operator">=</span><span class="token string">"http://localhost:3000/users/"</span><span class="token punctuation">;</span>
    <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">"POST"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token string-property property">"Content-type"</span><span class="token operator">:</span> <span class="token string">"application/json; charset=UTF-8"</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=></span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> 
    <span class="token punctuation">.</span><span class="token function">then</span> <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        document<span class="token punctuation">.</span>frmdk<span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div><ul>
<li>Test: http://localhost:3000/dangky ==&gt; nhập thông tin rồi nhắp Đăng ký sẽ lưu thành công vào database.</li>
</ul>
<h2 id="su-dung-thu-vien-axios" tabindex="-1"><a class="header-anchor" href="#su-dung-thu-vien-axios" aria-hidden="true">#</a> Sử dụng thư viện Axios</h2>
<p>Axios là một thư viện giúp bạn gửi http request đến các ứng dụng API. Axios được dùng cả ở trình duyệt hay Node.js. Sử dụng Restful API NodeJS sẽ dễ hơn với thư viện này.</p>
<h3 id="cai-đat-axios" tabindex="-1"><a class="header-anchor" href="#cai-đat-axios" aria-hidden="true">#</a> Cài đặt axios</h3>
<p>Cài Axios trong NodeJS đơn giản như bạn đã biết:</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> axios
</code></pre></div><p>Trong trang html, nhúng axios:</p>
<div class="language-html ext-html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span> “https://unpkg.com/axios/dist/axios.min.js”</span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div><p>Tạo một request với Axios</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'post'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/login'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token string">'test'</span><span class="token punctuation">,</span> <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">'test1'</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Thực hiện request với phương thức <strong>GET</strong></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
 <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Thực hiện request với phương thức <strong>POST</strong></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">'First name'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">'Last name'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Các alias tạo request tương ứng với các http method</p>
<ul>
<li>axios.request(config)</li>
<li>axios.get(url[, config])</li>
<li>axios.delete(url[, config])</li>
<li>axios.head(url[, config])</li>
<li>axios.options(url[, config])</li>
<li>axios.post(url[, data[, config]])</li>
<li>axios.put(url[, data[, config]])</li>
<li>axios.patch(url[, data[, config]])</li>
</ul>
<p>Cấu trúc của dữ liệu trả về
Cấu trúc của response trả về từ server bao gồm các thông tin:</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// dữ liệu trả về từ server</span>
    <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>   <span class="token comment">// mã HTTP status trả về từ server</span>
    <span class="token literal-property property">statusText</span><span class="token operator">:</span> <span class="token string">'OK'</span><span class="token punctuation">,</span>   <span class="token comment">// text mô tả status từ server</span>
    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>   <span class="token comment">// các header mà server phản hồi</span>
    <span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>   <span class="token comment">// các cấu hình khi thực hiện request</span>
    <span class="token literal-property property">request</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>  <span class="token comment">// là request thực hiện để nhận được response này</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="vi-du-su-dung-axios" tabindex="-1"><a class="header-anchor" href="#vi-du-su-dung-axios" aria-hidden="true">#</a> Ví dụ sử dụng axios</h2>
<p><strong>1. file routes/index.js</strong></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code> router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/ax1'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">"ax1_listusers"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>2. Tạo file views/ax1_listusers.ejs</strong></p>
<div class="language-html ext-html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://unpkg.com/axios/dist/axios.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>listuser<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
 <span class="token keyword">var</span> url <span class="token operator">=</span> <span class="token string">"http://localhost:3000/users/"</span><span class="token punctuation">;</span>
 axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">// console.log(response);</span>
    <span class="token keyword">let</span> str<span class="token operator">=</span><span class="token string">""</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token keyword">in</span> response<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> motuser <span class="token operator">=</span> response<span class="token punctuation">.</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>motuser<span class="token punctuation">)</span><span class="token punctuation">;</span>
        str <span class="token operator">+=</span>  <span class="token string">"&lt;p>"</span><span class="token operator">+</span>  motuser<span class="token punctuation">.</span>ho <span class="token operator">+</span> <span class="token string">" "</span> <span class="token operator">+</span> motuser<span class="token punctuation">.</span>ten  <span class="token operator">+</span><span class="token string">"&lt;/p>"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token comment">//for    </span>
    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"listuser"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">+=</span> str<span class="token punctuation">;</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div><p><strong>3. Test: http://localhost:3000/ax1 , sẽ thấy danh sách users</strong></p>
<p><strong>Luyện tập: Mời bạn thực hiện luyện tập nhé:</strong></p>
<ul>
<li>
<p>Bài 1: Tạo form đăng ký, khi nhắp vào sẽ lưu vào database. Định dạng form cho đẹp nhé</p>
</li>
<li>
<p>Bài 2: Tạo trang xem chi tiết user có id là 1. Sau đó cải tiến thêm: lấy id của user từ địa chỉ để hiện thông tin của user đó trong trang. (Định dạng cho đẹp nhé)</p>
</li>
<li>
<p>Bài 3: Tạo form cập nhật user với id user là 1, khi nhắp vào sẽ cập nhật vào database</p>
</li>
<li>
<p>Bài 4: Tạo trang hiện danh sách users</p>
</li>
</ul>
</div></template>
