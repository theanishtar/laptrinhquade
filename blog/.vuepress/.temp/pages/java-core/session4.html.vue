<template><div><!-- ---
layout: Post
title: Bài 4. Vòng lặp trong Java
subtitle: Lập trình Java căn bản
author: Theanishtar
date: 2023-06-05
useHeaderImage: false
headerImage: https://github.com/dangtranhuu/images/blob/main/angurvad/java-core/session4/banner.png?raw=true
headerMask: rgba(30, 69, 110, 0.61)
permalinkPattern: /ebook/java/java-core/:slug/
tags:
  - Java Core
---

Cùng mình tìm hiểu về vòng lặp **for, forEach, while và do while** trong Java nha ^^ -->
<!-- more -->
<h1 id="bai-4-vong-lap" tabindex="-1"><a class="header-anchor" href="#bai-4-vong-lap" aria-hidden="true">#</a> Bài 4. Vòng lặp</h1>
<h1 id="vong-lap" tabindex="-1"><a class="header-anchor" href="#vong-lap" aria-hidden="true">#</a> Vòng lặp</h1>
<p>Cũng như bài <a href="">Điều kiện</a>, thì đây là một vấn đề có trong mọi ngôn ngữ lập trình.</p>
<p><em>Vậy vòng lặp là gì?</em></p>
<blockquote>
<p><strong>Vòng lặp là cấu trúc lặp đi lặp lại một biểu thức nào đó đến khi nào điều kiện dừng là sai</strong></p>
<p><strong>Vòng lặp dùng để làm một vấn đề gì đó lặp đi lặp lại</strong></p>
</blockquote>
<p>Có các kiểu vòng lặp sau :</p>
<ul>
<li><strong>while</strong></li>
<li><strong>do..while</strong></li>
<li><strong>for</strong></li>
<li><strong>for..Each</strong></li>
</ul>
<hr>
<h2 id="_1-vong-lap-while" tabindex="-1"><a class="header-anchor" href="#_1-vong-lap-while" aria-hidden="true">#</a> 1. Vòng lặp <strong>while</strong></h2>
<p>Như mọi ngôn ngữ đây là vòng lặp lại lặp lại miễn điều kiện là <strong>true</strong>, sẽ thoát khi điều kiện là <strong>false</strong></p>
<p><strong>Ví dụ</strong> :</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	i<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">//có này để dần dẫn cho điều kiện thành false</span>
<span class="token punctuation">}</span>
<span class="token comment">// output : 0 1 2 3</span>
</code></pre></div><hr>
<h2 id="_2-vong-lap-do-while" tabindex="-1"><a class="header-anchor" href="#_2-vong-lap-do-while" aria-hidden="true">#</a> 2. Vòng lặp <strong>do..while</strong></h2>
<p>Đây là một biến thể của vòng lặp <strong>while</strong>, sẽ thực hiện trước một lần với lệnh <strong>do</strong> và sau đó kiểm tra điều kiện.</p>
<p><strong>Ví dụ</strong>:</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> 
<span class="token keyword">do</span><span class="token punctuation">{</span>
   <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token keyword">while</span><span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// output : 0</span>
</code></pre></div><hr>
<h2 id="_3-vong-lap-for" tabindex="-1"><a class="header-anchor" href="#_3-vong-lap-for" aria-hidden="true">#</a> 3. Vòng lặp <strong>for</strong></h2>
<p>Nó là một dạng vòng lặp ngắn gọn nhất,bao gồm 3 phần chính :</p>
<ul>
<li><strong>Initaliztion</strong> : <em>khởi tạo vòng lặp</em></li>
<li><strong>Test Statement</strong> : <em>điều kiện kiểm tra</em></li>
<li><strong>Iteration Statement</strong> : <em>bước nhảy của vòng lặp</em></li>
</ul>
<p><strong>Ví dụ</strong> :</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> myArray <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">;</span> i <span class="token operator">&lt;</span> array<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// output : 4 5 7 2</span>
</code></pre></div><hr>
<h2 id="_4-vong-lap-for-each" tabindex="-1"><a class="header-anchor" href="#_4-vong-lap-for-each" aria-hidden="true">#</a> 4. Vòng lặp <strong>for..Each</strong></h2>
<p>Được sử dụng riêng để lặp ra các phần tử trong 1 <strong>Array</strong>, (<em>có thể dùng <strong>for</strong> như bình thường</em>)</p>
<p><strong>Ví dụ</strong> :</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> myArray <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> index <span class="token operator">:</span> myArray<span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// output : 5 3 2 6</span>
</code></pre></div><hr>
<h2 id="_5-đieu-khien-vong-lap" tabindex="-1"><a class="header-anchor" href="#_5-đieu-khien-vong-lap" aria-hidden="true">#</a> 5. Điều khiển vòng lặp</h2>
<p>Vậy ta tự hỏi thế này :</p>
<blockquote>
<p>🤔 Nếu trong một <strong>array</strong> có <strong>10</strong> phần tử, ta <strong>for</strong> từ <strong>0 tới 10</strong>, và ta muốn nó dừng tại 5 thì thế nào ?</p>
</blockquote>
<p>Đơn giản là ta có thể dùng <strong>break</strong> để thoát khỏi vòng lặp :</p>
<h3 id="lenh-break-đe-thoat-vong-lap" tabindex="-1"><a class="header-anchor" href="#lenh-break-đe-thoat-vong-lap" aria-hidden="true">#</a> Lệnh <strong>break</strong> để thoát vòng lặp</h3>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">:</span> array<span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//output : 5 3</span>
</code></pre></div><blockquote>
<p>🤔 Nếu trong một <strong>array</strong> có <strong>10</strong> phần tử, ta <strong>for</strong> từ <strong>0 tới 10</strong>, và muốn tới 5 thì bỏ qua nó thì thể nào ?</p>
</blockquote>
<p>Đơn giản là ta có thể dùng <strong>continue</strong> để bỏ qua trường hợp đó :</p>
<h3 id="lenh-continue-đe-thoat-thuc-hien-lan-lap-tiep" tabindex="-1"><a class="header-anchor" href="#lenh-continue-đe-thoat-thuc-hien-lan-lap-tiep" aria-hidden="true">#</a> Lệnh <strong>continue</strong> để thoát thực hiện lần lặp tiếp</h3>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">:</span> array<span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">continue</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//output : 5 3 6</span>
</code></pre></div><h2 id="_6-gan-nhan-vong-lap" tabindex="-1"><a class="header-anchor" href="#_6-gan-nhan-vong-lap" aria-hidden="true">#</a> 6. Gắn nhãn vòng lặp</h2>
<p>Ta sẽ đúng tới <strong>Label</strong> để điều khiển vòng lặp một cách tốt nhất :</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
loop<span class="token operator">:</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i in array<span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">continue</span> loop<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//output : 5 3 6</span>
</code></pre></div><blockquote>
<p>🚀 Tức là nó sẽ đánh dấu vòng lặp đó là <strong>loop</strong>, còn bạn dùng <strong>continue</strong> và <strong>break</strong> lên chính vòng lặp đó.</p>
</blockquote>
<h2 id="_7-bai-tap" tabindex="-1"><a class="header-anchor" href="#_7-bai-tap" aria-hidden="true">#</a> 7. Bài tập</h2>
<h3 id="_7-1-tim-boi-chung-nho-nhat-java-bang-vong-lap-while" tabindex="-1"><a class="header-anchor" href="#_7-1-tim-boi-chung-nho-nhat-java-bang-vong-lap-while" aria-hidden="true">#</a> 7.1 Tìm bội chung nhỏ nhất Java bằng vòng lặp while</h3>
<p>Bước 1: Sử dụng class Scanner để nhận dữ liệu từ bàn phím, hãy import thư viện nhé:
Bước 1: Sử dụng class Scanner để nhận dữ liệu từ bàn phím, hãy import thư viện nhé:
Bước 1: Sử dụng class Scanner để nhận dữ liệu từ bàn phím, hãy import thư viện nhé:
Bước 4: Sử dụng vòng lặp while với điều kiển True để lặp cho đến khi tìm thấy giá trị BCNN. Bên trong vòng lặp while sẽ là điều kiện của BCNN: lcm % n1 == 0 &amp;&amp; lcm % n2 == 0.</p>
<p>Số bắt đầu kiểm tra sẽ là số lớn nhất trong hai số a và b. Sau khi kiểm tra nếu không thỏa mãn với điều kiện thì tăng lcm lên 1 rồi tiếp tục kiểm tra.</p>
<details class="custom-container details"><summary>Bài giải</summary>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//sử dụng class Scanner để lấy dữ liệu từ bàn phím</span>
    <span class="token class-name">Scanner</span> sc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//khai báo n1, n2 là hai số cần tính bội chung nhỏ nhất</span>
    <span class="token comment">//lcm là bội chung nhỏ nhất của a và b</span>
    <span class="token keyword">int</span> n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> lcm<span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"\n\nNhập vào số thứ nhất: "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    n1 <span class="token operator">=</span> sc<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Nhập vào số thứ hai: "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    n2 <span class="token operator">=</span> sc<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//sử dụng toán tử ba ngôi để gán giá trị lớn nhất giữa a và b cho lcm</span>
    <span class="token comment">//->> vì bcnn của a và b luôn luôn lớn hơn a và b</span>
    lcm <span class="token operator">=</span> <span class="token punctuation">(</span>n1 <span class="token operator">></span> n2<span class="token punctuation">)</span> <span class="token operator">?</span> n1 <span class="token operator">:</span> n2<span class="token punctuation">;</span>
    <span class="token comment">//sử dụng vòng lặp while với điều kiện true để lặp đến khi nào gặp lệnh break;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//nếu lcm chia hết cho n1 và n2, tức là lcm chính là bcnn của a và b</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span> lcm <span class="token operator">%</span> n1 <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> lcm <span class="token operator">%</span> n2 <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Bội chung nhỏ nhất của %d và %d là %d."</span><span class="token punctuation">,</span> n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> lcm<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">//lcm bắt đầu từ giá trị lớn nhất giữa a và b, nếu không phải là bcnn thì tăng lên 1 rồi tiếp tục kiểm tra, cứ như vậy cho đến khi tìm được</span>
      <span class="token operator">++</span>lcm<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
Kết quả:
	Nhập số thứ nhất: 6
	Nhập số thứ hai: 12
	Bội chung nhỏ nhất của 6 và 12 là 12
*/</span>
</code></pre></div></details>
<h3 id="_7-2-đao-nguoc-mot-so-nguyen-n" tabindex="-1"><a class="header-anchor" href="#_7-2-đao-nguoc-mot-so-nguyen-n" aria-hidden="true">#</a> 7.2 Đảo ngược một số nguyên N</h3>
<p>Giả sử chúng ta có reversed = 0 và num1 = 1234 là số cần đảo ngược. Bây giờ mình sẽ chạy vòng lặp while này từng bước cho các bạn thấy cách thức thuật toán này hoạt động nhé.</p>
<p>Bước 1: Thực hiện vòng lặp lần 1, num1 = 1234, reversed = 0.</p>
<p>Kiểm tra điều kiện vòng lặp num1 != 0, nên chúng ta sẽ thực hiện các câu lệnh bên trong vòng lặp.</p>
<p>digit = num1 % 10 = 1234 % 10 = 4, như vậy digit = 4.
reversed = reversed * 10 + digit = 0 * 10 + 4 = 4, như vậy reversed = 4.
num1 = num1 / 10 = 1234 / 10 = 123, như vậy num1 = 123.
Kết thúc vòng lặp lần 1 ta có: reversed = 4, num1 = 123. Biến digit chỉ là biến trung gian vậy nên chúng ta không cần quan tâm đến nó.</p>
<p>Bước 2: Thực hiện vòng lặp lần 2, num1 = 123, reversed = 4.</p>
<p>Tương tự như vòng lặp thứ nhất, sau khi kết thúc vòng lặp lần hai ta được kết quả: num1 = 12, reversed = 43.</p>
<p>Bước 3: Thực hiện vòng lặp lần 3, num1 =12, reversed = 43. Sau khi vòng lặp kết thúc ra được: num1 = 1, reversed = 432.
Bước 4: Thực hiện vòng lặp lần 4, num1 = 1, reversed = 432. Kết thúc vòng lặp ta được kết quả: num1 = 0, reversed = 4321.</p>
<p>Đến đây, num1 = 0 không thỏa mãn điều kiện vòng lặp while nên kết thúc vòng lặp. Ta được kết quả cuối cùng là reversed = 4321 là số đảo ngược của num1 = 1234.</p>
<details class="custom-container details"><summary>Bài giải</summary>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//sử dụng class Scanner để lấy dữ liệu từ bàn phím</span>
    <span class="token class-name">Scanner</span> sc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//khai báo biến num1 là số cần đảo ngược, reversed là số sau khi đảo ngược</span>
    <span class="token keyword">int</span> num1<span class="token punctuation">,</span>num2<span class="token punctuation">,</span> reversed <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"\n\nNhập vào số cần đảo ngược: "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    num1 <span class="token operator">=</span> sc<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//sở dĩ mình gán num1 cho num2 chỉ để hiển thị ra màn hình</span>
    num2 <span class="token operator">=</span> num1<span class="token punctuation">;</span>
    <span class="token comment">//sử dụng vòng lặp while để đảo ngược num1</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>num1 <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">int</span> digit <span class="token operator">=</span> num1 <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">;</span>
      reversed <span class="token operator">=</span> reversed <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> digit<span class="token punctuation">;</span>
      num1 <span class="token operator">/=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//hiển thị số sau khi đảo ngược ra màn hình</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Số %d sau khi đảo ngược là: %d"</span><span class="token punctuation">,</span> num2<span class="token punctuation">,</span> reversed<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
	Kết quả:
		Nhập vào số cần đảo ngược: 11122003
		Số sau khi đảo ngược là: 30022111
*/</span>
</code></pre></div></details>
<h3 id="_7-3-tinh-can-bac-hai" tabindex="-1"><a class="header-anchor" href="#_7-3-tinh-can-bac-hai" aria-hidden="true">#</a> 7.3 Tính căn bậc hai</h3>
<p>Trong ví dụ này chúng ta sẽ tạo một phương thức là CanBacHai() để tính căn bậc hai, sau đó gọi nó ra ở phương thức main() để thực hiện công việc tính căn của số được nhập vào từ người dùng.</p>
<details class="custom-container details"><summary>Bài giải</summary>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">CanBacHai</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">double</span> <span class="token function">squareRoot</span><span class="token punctuation">(</span><span class="token keyword">int</span> number<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">double</span> temp<span class="token punctuation">;</span>
 
        <span class="token keyword">double</span> sr <span class="token operator">=</span> number <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
 
        <span class="token keyword">do</span> <span class="token punctuation">{</span>
            temp <span class="token operator">=</span> sr<span class="token punctuation">;</span>
            sr <span class="token operator">=</span> <span class="token punctuation">(</span>temp <span class="token operator">+</span> <span class="token punctuation">(</span>number <span class="token operator">/</span> temp<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>temp <span class="token operator">-</span> sr<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
        <span class="token keyword">return</span> sr<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"Nhập vào số num: "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Scanner</span> scanner <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> num <span class="token operator">=</span> scanner<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        scanner<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Căn bậc hai của "</span><span class="token operator">+</span> num<span class="token operator">+</span> <span class="token string">" là: "</span><span class="token operator">+</span><span class="token function">squareRoot</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
	Kết quả:
		Nhập vào số num: 3
		Căn bậc hai của 3 là: 1.73205
*/</span>
</code></pre></div></details>
</div></template>
