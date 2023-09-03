<template><div><!-- ---
layout: Post
title: Bài 6. Chuỗi trong Java
subtitle:  Lập trình Java căn bản
author: Theanishtar
date: 2023-06-07
useHeaderImage: false
headerImage: https://github.com/dangtranhuu/images/blob/main/angurvad/java-core/session6/banner.png?raw=true
headerMask: rgba(30, 69, 110, 0.61)
permalinkPattern: /ebook/java/java-core/:slug/
tags:
  - Java Core
---

Chuỗi là kiểu dữ liệu được sử dụng nhiều nhất trong lập trình. Mình sẽ cùng tìm hiểu về kiểu dữ liệu thú vị này nhé -->
<!-- more -->
<h1 id="bai-6-chuoi" tabindex="-1"><a class="header-anchor" href="#bai-6-chuoi" aria-hidden="true">#</a> Bài 6. Chuỗi</h1>
<h2 id="_1-khai-niem" tabindex="-1"><a class="header-anchor" href="#_1-khai-niem" aria-hidden="true">#</a> 1. Khái niệm</h2>
<p>Chuỗi hay String là một class được xây dựng sẵn trong Java.
Chuỗi được sử dụng để lưu trữ văn bản.</p>
<p>String có rất nhiều phương thức giúp xử lý chuỗi một cách thuận tiện và hiệu quả.</p>
<p>Một biến chứa một tập hợp các ký tự được bao quanh bởi dấu ngoặc kép ví dụ như: &quot;Tôi là Đang&quot;</p>
<h2 id="_2-khai-bao-chuoi" tabindex="-1"><a class="header-anchor" href="#_2-khai-bao-chuoi" aria-hidden="true">#</a> 2. Khai báo chuỗi</h2>
<p>Để khai báo một chuỗi, hãy khai báo như một biến có <RouterLink to="/post/2023/06/02/java-core-session2/#_1-cac-kieu-du-lieu-nguyen-thuy">kiểu dữ liệu nguyên thủy</RouterLink> :</p>
<h3 id="khai-bao-khong-khoi-tao-gia-tri" tabindex="-1"><a class="header-anchor" href="#khai-bao-khong-khoi-tao-gia-tri" aria-hidden="true">#</a> Khai báo không khởi tạo giá trị</h3>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token class-name">String</span> myName<span class="token punctuation">;</span>	
<span class="token comment">// Trong trường hợp này giá trị của myName được hiểu là "null"</span>
</code></pre></div><h3 id="khai-bao-co-khoi-tao-gia-tri" tabindex="-1"><a class="header-anchor" href="#khai-bao-co-khoi-tao-gia-tri" aria-hidden="true">#</a> Khai báo có khởi tạo giá trị</h3>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token class-name">String</span> myName <span class="token operator">=</span> <span class="token string">"Đang Hữu Trần"</span><span class="token punctuation">;</span> 
<span class="token comment">// Trường hợp này giá trị của myName là: Đang Hữu Trần\n</span>
</code></pre></div><hr>
<h2 id="_3-cac-tinh-chat" tabindex="-1"><a class="header-anchor" href="#_3-cac-tinh-chat" aria-hidden="true">#</a> 3. Các tính chất</h2>
<h3 id="ky-tu-đac-biet" tabindex="-1"><a class="header-anchor" href="#ky-tu-đac-biet" aria-hidden="true">#</a> Ký tự đặc biệt</h3>
<p>Chúng ta có thể kết hợp các ký tự đặc biệt trong câu lệnh print. Chú ý các kỹ tự khác Java sẽ hiểu như một ký tự bình thường trong bảng mã ASCII.</p>
<p>Các ký tự đặc biệt gồm:</p>
<table>
<thead>
<tr>
<th>Ký tự</th>
<th>Giá trị</th>
<th>Diễn giải</th>
</tr>
</thead>
<tbody>
<tr>
<td>\t</td>
<td>Ký tự tab</td>
<td>Theo quy ước: 1Tab = 3 khoảng trắng</td>
</tr>
<tr>
<td>\r</td>
<td>Về đầu dòng</td>
<td>Trở về đầu dòng</td>
</tr>
<tr>
<td>\n</td>
<td>Xuống dòng</td>
<td>Tương tự phím <mark>Enter</mark> hay ký tự <mark>\n</mark></td>
</tr>
<tr>
<td>\\</td>
<td>\</td>
<td>Để hiện thị các ký tự đặc biệt bạn cần dùng <mark>\</mark> ở trước</td>
</tr>
<tr>
<td>\&quot;</td>
<td>&quot;</td>
<td></td>
</tr>
</tbody>
</table>
<p>Ví dụ:</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"\t+ Họ và tên: Đang\r\n\t+ Tuổi: 20"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* 
		Output: + Họ và tên: Đang
			    + Tuổi: 20
*/</span>			   
</code></pre></div><hr>
<h2 id="_4-cac-phuong-thuc-cua-chuoi" tabindex="-1"><a class="header-anchor" href="#_4-cac-phuong-thuc-cua-chuoi" aria-hidden="true">#</a> 4. Các phương thức của Chuỗi</h2>
<p>Java xây dựng cho chuỗi các phương thức có sẵng, bạn hoàn toàn có thê tự xây dựng các chức năng như vậy nhưng vì Java dùng để xây dựng các bài toán lớn nên việc dùng các phương thức dựng sẵng sép giúp tối ưu thời gian lập tình hơn.</p>
<p>Sau đây là các phương thức Java xâu dựng sẵng cho String gọi là String API</p>
<!-- ⟹ -->
<table>
<thead>
<tr>
<th>Phương thức</th>
<th>Ví dụ</th>
<th>Sử dụng</th>
<th>Kết quả</th>
</tr>
</thead>
<tbody>
<tr>
<td>toLowerCase()</td>
<td>s1 = &quot;aBc&quot;</td>
<td>s2 = s1.toLowerCase()</td>
<td>s2 = &quot;abc&quot;</td>
</tr>
<tr>
<td>toUpperCase()</td>
<td>s1 = &quot;aBc&quot;</td>
<td>s2 = s1.totoUpperCase()</td>
<td>s2 = &quot;ABC&quot;</td>
</tr>
<tr>
<td>trim()</td>
<td>s1 = &quot;  abc  &quot;</td>
<td>s2 = s1.trim()</td>
<td>s2 = &quot;abc&quot;</td>
</tr>
<tr>
<td>length()</td>
<td>s1 = &quot;abc&quot;</td>
<td>n  = s1.length()</td>
<td>n  = 3</td>
</tr>
<tr>
<td>substring()</td>
<td>s1 = &quot;abc&quot;</td>
<td>s2 = s1.substring(1,2)</td>
<td>s2 = &quot;b&quot;</td>
</tr>
<tr>
<td></td>
<td>s1 = &quot;abc&quot;</td>
<td>s2 = s1.substring(0)</td>
<td>s2 = &quot;abc&quot;</td>
</tr>
<tr>
<td></td>
<td>s1 = &quot;abc&quot;</td>
<td>s2 = s1.substring(2)</td>
<td>s2 = &quot;c&quot;</td>
</tr>
<tr>
<td>charAt (index)</td>
<td>s1 = &quot;abc&quot;</td>
<td>c  = s1.charAt(1)</td>
<td>c  = 'b'</td>
</tr>
<tr>
<td>replaceAll(find, replace)</td>
<td>s1 = &quot;abcada&quot;</td>
<td>s2 = s1.replaceAll('a','z')</td>
<td>s2 = &quot;zbczdz&quot;</td>
</tr>
<tr>
<td>split(separator)</td>
<td>s1 = &quot;a.cd.fgh&quot;</td>
<td>arr = s1.split(&quot;.&quot;)</td>
<td>arr = [&quot;a&quot;, &quot;cd&quot;, &quot;fgh&quot;]</td>
</tr>
</tbody>
</table>
<p>Dài quá mình tách làm 2 nha</p>
<table>
<thead>
<tr>
<th>Phương thức</th>
<th>Ví dụ</th>
<th>Sử dụng</th>
<th>Kết quả</th>
</tr>
</thead>
<tbody>
<tr>
<td>equals()</td>
<td>s1 = &quot;aBc&quot;; s2 = &quot;abc&quot;</td>
<td>bl = s1.equals(s2)</td>
<td>bl = false</td>
</tr>
<tr>
<td>equals()</td>
<td>s1 = &quot;aBc&quot;; s2 = &quot;aBc&quot;</td>
<td>bl = s1.equals(s2)</td>
<td>bl = true</td>
</tr>
<tr>
<td>equalsIgnoreCase()</td>
<td>s1 = &quot;aBC&quot;; s2 = &quot;abc&quot;</td>
<td>bl = s1.equalsIgnoreCase(s2)</td>
<td>bl = true</td>
</tr>
<tr>
<td>equalsIgnoreCase()</td>
<td>s1 = &quot;aBC&quot;; s2 = &quot;aBC&quot;</td>
<td>bl = s1.equalsIgnoreCase(s2)</td>
<td>bl = true</td>
</tr>
<tr>
<td>contains()</td>
<td>s1 = &quot;abc&quot;</td>
<td>bl = s1.contains(&quot;bc&quot;)</td>
<td>bl = true</td>
</tr>
<tr>
<td>startsWith()</td>
<td>s1 = &quot;abc&quot;</td>
<td>bl = s1.startsWith(&quot;ab&quot;)</td>
<td>bl = true</td>
</tr>
<tr>
<td>endsWith()</td>
<td>s1 = &quot;abc&quot;</td>
<td>bl = s1.endsWith(&quot;bc&quot;)</td>
<td>bl = true</td>
</tr>
<tr>
<td>matches()</td>
<td><a href="">Xem thêm</a></td>
<td><a href="">Xem thêm</a></td>
<td><a href="">Xem thêm</a></td>
</tr>
<tr>
<td>indexOf()</td>
<td>s1 = &quot;abc&quot;</td>
<td>n  = s1.indexOf(&quot;b&quot;)</td>
<td>n  = 1</td>
</tr>
<tr>
<td></td>
<td>s1 = &quot;abc&quot;</td>
<td>n  = s1.indexOf(&quot;a&quot;)</td>
<td>n  = 0</td>
</tr>
<tr>
<td></td>
<td>s1 = &quot;abc&quot;</td>
<td>n  = s1.indexOf(&quot;x&quot;)</td>
<td>n  = -1</td>
</tr>
<tr>
<td>lastIndexOf()</td>
<td>s1 = &quot;abc&quot;</td>
<td>n  = s1.lastIndexOf(&quot;b&quot;)</td>
<td>n  = 1</td>
</tr>
<tr>
<td></td>
<td>s1 = &quot;abc&quot;</td>
<td>n  = s1.lastIndexOf(&quot;a&quot;)</td>
<td>n  = 0</td>
</tr>
<tr>
<td></td>
<td>s1 = &quot;abc&quot;</td>
<td>n  = s1.lastIndexOf(&quot;x&quot;)</td>
<td>n  = -1</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ở <strong>String</strong> là <em>length()</em> còn <strong>Arrays</strong> là <em>length</em></p>
</blockquote>
<hr>
<h2 id="_5-xuat-chuoi" tabindex="-1"><a class="header-anchor" href="#_5-xuat-chuoi" aria-hidden="true">#</a> 5. Xuất chuỗi</h2>
<p>Bạn có thể xuất từng phần tử bằng cách <a href="">Duyệt chuỗi</a> hoặc xuất cả chuỗi bằng cách:</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token class-name">String</span> myName <span class="token operator">=</span> <span class="token string">"Tran Huu Dang"</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"Tên tôi là: "</span> <span class="token operator">+</span> myName<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Output: Tên tôi là: Tran Huu Dang</span>
</code></pre></div><h2 id="_6-duyet-chuoi" tabindex="-1"><a class="header-anchor" href="#_6-duyet-chuoi" aria-hidden="true">#</a> 6. Duyệt chuỗi</h2>
<p>Bạn có thể xem Chuỗi là một mảng ký tự, khi này:</p>
<ul>
<li>Ký tự đầu của chuỗi cũng như mảng (nằm ở vị trí 0)</li>
<li>Ký tự cuối với Mảng là length còn chuỗi là length()</li>
</ul>
<p>Bạn vẫn có thể dùng for hoặc forEach để duyệt chuỗi</p>
<h3 id="vong-lap-for" tabindex="-1"><a class="header-anchor" href="#vong-lap-for" aria-hidden="true">#</a> Vòng lặp for</h3>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token class-name">String</span> myName <span class="token operator">=</span> <span class="token string">"Đang"</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">;</span> i <span class="token operator">&lt;</span> myName<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>myName<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// charAt(i) sẽ trả về ký tự (char) tại vị trí i</span>
<span class="token punctuation">}</span>
<span class="token comment">//output : Đ a n g </span>
</code></pre></div><h3 id="vong-lap-foreach" tabindex="-1"><a class="header-anchor" href="#vong-lap-foreach" aria-hidden="true">#</a> Vòng lặp forEach</h3>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token class-name">String</span> myName <span class="token operator">=</span> <span class="token string">"Đang"</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">char</span> c <span class="token operator">:</span> myName<span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>c <span class="token operator">+</span> <span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//output : Đ a n g</span>
</code></pre></div><hr>
<h2 id="_7-noi-chuoi" tabindex="-1"><a class="header-anchor" href="#_7-noi-chuoi" aria-hidden="true">#</a> 7. Nối chuỗi</h2>
<p>Bạn có thể tạo ra một chuỗi mới với hai chuỗi ban đầu bằng toán tử cộng (+) hay các phương thức bên trên</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> first <span class="token operator">=</span> <span class="token string">"Đang học "</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> last <span class="token operator">=</span> <span class="token string">"Java"</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>firstName<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>last<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Output: Đang học Java</span>
</code></pre></div><div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> first <span class="token operator">=</span> <span class="token string">"Đang học "</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> last <span class="token operator">=</span> <span class="token string">"Java"</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>first <span class="token operator">+</span> last<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// Output: Đang học Java</span>
</code></pre></div><h2 id="_8-luu-y" tabindex="-1"><a class="header-anchor" href="#_8-luu-y" aria-hidden="true">#</a> 8. Lưu ý</h2>
<p>Chuỗi không thể thay đổi giá trị bằng phép gán như Mảng</p>
<p>Ví dụ</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token string">"Đang"</span><span class="token punctuation">;</span>
name<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token char">'D'</span><span class="token punctuation">;</span>
<span class="token comment">// LỖI</span>
</code></pre></div><p>Bạn không thể thực thi như thế được mà phải kết hợp các phương thức lại với nhau</p>
<h2 id="_9-bai-tap" tabindex="-1"><a class="header-anchor" href="#_9-bai-tap" aria-hidden="true">#</a> 9. Bài tập</h2>
<h3 id="_9-1-xuat-ten-chuan-hoa-cap-đo-1" tabindex="-1"><a class="header-anchor" href="#_9-1-xuat-ten-chuan-hoa-cap-đo-1" aria-hidden="true">#</a> 9.1 Xuất tên chuẩn hóa cấp độ 1</h3>
<p>Nhập vào họ tên một người, in hoa các ký tự đầu trong mỗi thành phần tên</p>
<p>Ví dụ:    &quot;trần hữu đang&quot; ⟹ &quot;Trần Hữu Đang&quot;
Nâng cấp: &quot;tRầN hữU đAnG&quot; ⟹ &quot;Trần Hữu Đang&quot;</p>
<details class="custom-container details"><summary>Bài giải</summary>
<ul>
<li>Tự làm đi chòi 😆😆</li>
</ul>
</details>
<h3 id="_9-2-xuat-ten-chuan-hoa-cap-đo-2" tabindex="-1"><a class="header-anchor" href="#_9-2-xuat-ten-chuan-hoa-cap-đo-2" aria-hidden="true">#</a> 9.2 Xuất tên chuẩn hóa cấp độ 2</h3>
<p>Nhập vào họ tên một người, xóa các khoảng trắng thừa</p>
<p>Ví dụ:    &quot;   trần     hữu    đang&quot; ⟹ &quot;Trần Hữu Đang&quot;
Nâng cấp: &quot;    tRầN   hữU    đAnG  &quot; ⟹ &quot;Trần Hữu Đang&quot;</p>
<details class="custom-container details"><summary>Bài giải</summary>
<ul>
<li>Tự làm đi chòi 😆😆</li>
</ul>
</details>
<h3 id="_9-3-xuat-ten-chuan-hoa-cap-đo-3" tabindex="-1"><a class="header-anchor" href="#_9-3-xuat-ten-chuan-hoa-cap-đo-3" aria-hidden="true">#</a> 9.3 Xuất tên chuẩn hóa cấp độ 3</h3>
<p>Nhập vào họ tên một người, xóa các ký tự thừa</p>
<p>Ví dụ:    &quot;   trầ35n $^  hữ%^99u  đa498%%ng&quot; ⟹ &quot;Trần Hữu Đang&quot;</p>
<details class="custom-container details"><summary>Bài giải</summary>
<ul>
<li>Tự làm đi chòi 😆😆</li>
</ul>
</details>
<h3 id="_9-4-xuat-ten-chuan-hoa-cap-đo-4" tabindex="-1"><a class="header-anchor" href="#_9-4-xuat-ten-chuan-hoa-cap-đo-4" aria-hidden="true">#</a> 9.4 Xuất tên chuẩn hóa cấp độ 4</h3>
<p>Nhập vào họ tên một người, chuẩn hóa theo tiếng Việt</p>
<p>Ví dụ:    &quot;   trrrrầnnnn     hhữuuuu    đaaang&quot; ⟹ &quot;Trần Hữu Đang&quot;</p>
<details class="custom-container details"><summary>Bài giải</summary>
<ul>
<li>Tự làm đi chòi 😆😆</li>
</ul>
</details>
</div></template>
