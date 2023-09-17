<template><div><!-- ---
layout: Post
title: Tìm hiểu về Ejs - view engine template tiện lợi của NodeJS
subtitle: Lập trình NodeJS
author: Theanishtar
date: 2023-05-31
useHeaderImage: true
headerImage: /img/in-post/2018-02-17/header.jpg
headerMask: rgba(52, 55, 33, 0.473)
permalinkPattern: /ebook/nodejs/:slug/
tags:
  - NodeJS
---

EJS là template engine server của NodeJS. Một trang giao diện với EJS nhé -->
<!-- more -->
<h1 id="bai-2-tim-hieu-ve-ejs" tabindex="-1"><a class="header-anchor" href="#bai-2-tim-hieu-ve-ejs" aria-hidden="true">#</a> Bài 2. Tìm hiểu về Ejs</h1>
<p>Sử dụng template EJS trong NodeJS giúp bạn code với các views một cách nhanh chóng. EJS là một template được dùng phổ biến trong nodejs.</p>
<h2 id="cai-đat-ejs" tabindex="-1"><a class="header-anchor" href="#cai-đat-ejs" aria-hidden="true">#</a> Cài đặt EJS</h2>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> ejs
</code></pre></div><p>Khai báo sử dụng EJS
Khai báo view engine và chỉ định folder chứa các view:</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>//index.js
const express = require("express");
const app = express();
const port = 3000;

app.set("view engine","ejs");
app.set("views","./views");

app.listen(port, () => { 
	console.log(`Project dang chay o port ${port}`)
})
</code></pre></div><p>Nạp view: Mỗi file phải đạt trong folder views đã khai báo, và có tên mở rộng là .ejs. Để nạp view và response, bạn dùng lệnh render như sau:</p>
<p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/nodejs/session2/image.png?raw=true" alt="object-class-diagrame-1.png"></p>
<p>Để nạp view và truyền biến cho view, dùng cú pháp như sau:</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>res<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">"chao"</span><span class="token punctuation">,</span> 
	<span class="token punctuation">{</span>
		<span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">"Anh"</span> <span class="token punctuation">,</span> 
		<span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"Tèo"</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Để hiện giá trị biến trong view, bạn dùng lệnh: <strong>&lt;%= tên biến %&gt;.</strong></p>
<p>Ví dụ:</p>
<p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/nodejs/session2/image-1.png?raw=true" alt="object-class-diagrame-1.png"></p>
<p>Code trong view ejs
Để viết code trong view ejs, bạn dùng cú pháp &lt;% code js %&gt; .</p>
<h3 id="su-dung-lenh-if" tabindex="-1"><a class="header-anchor" href="#su-dung-lenh-if" aria-hidden="true">#</a> Sử dụng lệnh if</h3>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>Chào bạn! 
&lt;% if (day=='Thứ bảy' || day=='Chủ nhật') { %>
&lt;h3>Hôm nay là cuối tuần&lt;/h3>
&lt;% } else { %>
&lt;h3>Hôm nay là ngày &lt;%= day%>&lt;/h3>
&lt;% }%>
</code></pre></div><h3 id="vong-lap-for-trong-ejs-view" tabindex="-1"><a class="header-anchor" href="#vong-lap-for-trong-ejs-view" aria-hidden="true">#</a> Vòng lặp for trong ejs view</h3>
<p>Trong ejs view, bạn có thể lặp qua mảng rất dễ dàng</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"/sp"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span> 
    <span class="token keyword">var</span> sp<span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'HTC M9'</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span><span class="token number">6000000</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'Samsung S8'</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span><span class="token number">750000</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
    res<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">"sp"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">sp</span><span class="token operator">:</span>sp<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-text ext-text"><pre v-pre class="language-text"><code>&lt;% for (let p of sp)  {%>
    &lt;p>
        Tên SP: &lt;b> &lt;%=p.name%> &lt;/b> &lt;br> 
        Giá &lt;%=p.price %> 
    &lt;/p>
    &lt;hr>
&lt;% } %>
</code></pre></div><h3 id="su-dung-css-trong-view-ejs" tabindex="-1"><a class="header-anchor" href="#su-dung-css-trong-view-ejs" aria-hidden="true">#</a> Sử dụng CSS trong view ejs</h3>
<p>Chỉ định folder public như là folder gốc cho view truy cập</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">//index.js</span>
<span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"express"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> port <span class="token operator">=</span> <span class="token number">3000</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"view engine"</span><span class="token punctuation">,</span><span class="token string">"ejs"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"views"</span><span class="token punctuation">,</span><span class="token string">"./views"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token string">'public'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Trong view<span class="token punctuation">,</span> nhúng file css đã tạo trong folder <span class="token keyword">public</span>
</code></pre></div><div class="language-text ext-text"><pre v-pre class="language-text"><code>&lt;link href="css/c1.css" rel="stylesheet">
&lt;% for (let p of sp)  {%>
    &lt;p>
        Tên SP: &lt;b> &lt;%=p.name%> &lt;/b> &lt;br> 
        Giá &lt;%=p.price %> 
    &lt;/p>
    &lt;hr>
&lt;% } %>
</code></pre></div><h2 id="nhan-tham-so-dang-tu-url" tabindex="-1"><a class="header-anchor" href="#nhan-tham-so-dang-tu-url" aria-hidden="true">#</a> Nhận tham số dạng từ url</h2>
<p>Các tham số trong url có thể truyền bằng 2 cách.</p>
<ul>
<li>Cách 1 là các giá trị truyền trực tiếp trong thành phần của url, https://localhost:3000/search/abc/3</li>
</ul>
<p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/nodejs/session2/image-3.png?raw=true" alt="object-class-diagrame-1.png"></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/search/:keyword/:page'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>   
    <span class="token keyword">let</span> str <span class="token operator">=</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">keyword= </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>req<span class="token punctuation">.</span>params<span class="token punctuation">.</span>keyword<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;br></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
    str<span class="token operator">+=</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">page= </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>req<span class="token punctuation">.</span>params<span class="token punctuation">.</span>page<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span> <span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/nodejs/session2/image-4.png?raw=true" alt="object-class-diagrame-1.png"></p>
<ul>
<li>Cách 2: là các giá trị truyền đến như tham số , mỗi giá trị có tên. http://localhost:3000/cat?idcat=10&amp;page=3</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/cat'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>  
    str<span class="token operator">=</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">idcat= </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>req<span class="token punctuation">.</span>query<span class="token punctuation">.</span>idcat<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> &lt;br></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
    str<span class="token operator">+=</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">page= </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>req<span class="token punctuation">.</span>query<span class="token punctuation">.</span>page<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="su-dung-form" tabindex="-1"><a class="header-anchor" href="#su-dung-form" aria-hidden="true">#</a> Sử dụng form</h2>
<p>a. Trong index.js, nạp module body-parser và use</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> bodyParser <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"body-parser"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>bodyParser<span class="token punctuation">.</span><span class="token function">urlencoded</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">extended</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre></div><p>b. Tạo 1 view chứa form. Tag form phải có thuộc tính action trỏ lên 1 route sẽ nhận dữ liệu khi user submit</p>
<div class="language-html ext-html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/addEmail<span class="token punctuation">"</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>post<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Add Email<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
</code></pre></div><p>c. Tạo route để nạp view</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/addEmail'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">"addEmail.ejs"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>d. Tạo route tiếp nhận dữ liệu</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'/addEmail'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> email  <span class="token operator">=</span> req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>email<span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>email<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="upload-hinh-trong-form" tabindex="-1"><a class="header-anchor" href="#upload-hinh-trong-form" aria-hidden="true">#</a> Upload hình trong form</h2>
<p>Để thực hiện upload hình từ form, bạn cần thực hiện :</p>
<p><strong>Cài đặt module formidable</strong></p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> formidable
</code></pre></div><p><strong>Nhúng module vào trang, nên nhúng luôn module file sytem (fs) để tiện các thao tác trên file đã upload</strong></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> formidable <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'formidable'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>Tạo 1 view chứa form. Tag form phải có thuộc tính  <code v-pre>enctype=”multipart/form-data</code> , trong form có tag <code v-pre>&lt;input type=”file”&gt;</code> và form phải có thuộc tính action trỏ lên 1 route sẽ nhận dữ liệu</strong></p>
<div class="language-html ext-html"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- addproduct.ejs --></span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/addnewprod<span class="token punctuation">"</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>post<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form<span class="token punctuation">"</span></span> <span class="token attr-name">enctype</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>multipart/form-data<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">></span></span>Tên sản phẩm<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>productName<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">></span></span>Hình sản phẩm<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>file<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>productImage<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Thêm sản phẩm<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
</code></pre></div><p><strong>Tạo route nạp view chứa form</strong></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/addprod'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">"addproduct.ejs"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p><strong>Tạo folder để chứa hình:</strong></p>
<p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/nodejs/session2/image-5.png?raw=true" alt="object-class-diagrame-1.png"></p>
<p><strong>Tạo route nhận dữ liệu</strong></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">"/addnewprod"</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> form <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">formidable<span class="token punctuation">.</span>IncomingForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    form<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> fields<span class="token punctuation">,</span> files</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">let</span> name <span class="token operator">=</span> fields<span class="token punctuation">.</span>productName<span class="token punctuation">;</span>      
     <span class="token keyword">let</span> tmpPath <span class="token operator">=</span> files<span class="token punctuation">.</span>productImage<span class="token punctuation">.</span>filepath<span class="token punctuation">;</span>     
     <span class="token keyword">let</span> tenFile <span class="token operator">=</span> files<span class="token punctuation">.</span>productImage<span class="token punctuation">.</span>originalFilename<span class="token punctuation">;</span>
     <span class="token keyword">let</span> destPath <span class="token operator">=</span>  __dirname <span class="token operator">+</span><span class="token string">'\\public\\images\\'</span> <span class="token operator">+</span> tenFile<span class="token punctuation">;</span> 
     fs<span class="token punctuation">.</span><span class="token function">rename</span><span class="token punctuation">(</span>tmpPath<span class="token punctuation">,</span> destPath<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">//copyFile</span>
       <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
       res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">'File đã upload'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">//res.end(JSON.stringify({ fields, files }, null, 2));</span>
      res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">"Name="</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p><strong>Xem thêm: <a href="https://www.w3schools.com/nodejs/nodejs_uploadfiles.asp" target="_blank" rel="noopener noreferrer">tại đây</a></strong></p>
<h2 id="xoa-anh" tabindex="-1"><a class="header-anchor" href="#xoa-anh" aria-hidden="true">#</a> Xoá ảnh</h2>
<p>Sử dụng module fs :</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> fs<span class="token operator">=</span><span class="token function">require</span><span class="token punctuation">(</span>‘fs’<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Dùng hàm unlink để thực hiện xoá</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"/delete"</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    pathfile<span class="token operator">=</span><span class="token string">"/images/a.png"</span><span class="token punctuation">;</span>
   fs<span class="token punctuation">.</span><span class="token function">unlink</span><span class="token punctuation">(</span>pathfile<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'File deleted!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">"File đã xóa"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Đọc thêm tài liệu ejs: <a href="https://www.npmjs.com/package/ejs" target="_blank" rel="noopener noreferrer">tại đây</a></p>
</div></template>
