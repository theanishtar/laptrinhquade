<template><div><p>Phương thức là cấu trúc chương trình thú vị do chính bản thân ta có thể xây dựng được. Cùng mình tìm hiểu về <strong>Phương thức</strong> nhé!!</p>
<!-- more -->
<p>Trong các bài học về <RouterLink to="/post/2023/06/05/java-core-session5/">Mảng</RouterLink> hay <RouterLink to="/post/2023/06/05/java-core-session6/">Chuỗi</RouterLink> chúng ta đã được biết về phương thức tính độ dài là Length. Vậy <strong>phương thức</strong> là gì và hoạt động như thế nào ?</p>
<h2 id="_1-khai-niem" tabindex="-1"><a class="header-anchor" href="#_1-khai-niem" aria-hidden="true">#</a> 1. Khái niệm</h2>
<p><strong>Methods</strong> (<em>phương thức</em>) : là một tập hợp các câu lệnh để xử lý một số tác vụ cụ thể và trả lại phản hồi cho nơi đã gọi phương thức. Các <strong>phương thức</strong> cho phép chúng ta viết mã có thể tái sử dụng và chia chương trình của chúng ta thành một số đơn vị công việc nhỏ. Phương thức Java thúc đẩy mã sạch và dễ đọc hơn.</p>
<blockquote>
<p>Với các ngôn ngữ lập trình khác như: <strong>C</strong>, <strong>C++</strong>, <strong>JavaScript</strong> thì phương thức còn được gọi là <strong>Function</strong> (<em>hàm</em>)</p>
</blockquote>
<p>Nói toàn định nghĩa thì khô khan lắm, cùng mình tìm hiểu cụ thể qua mỗi bài tập về phương thức nhá...</p>
<h2 id="_2-khai-bao" tabindex="-1"><a class="header-anchor" href="#_2-khai-bao" aria-hidden="true">#</a> 2. Khai báo</h2>
<h3 id="phuong-thuc-khong-co-du-lieu-tra-ve" tabindex="-1"><a class="header-anchor" href="#phuong-thuc-khong-co-du-lieu-tra-ve" aria-hidden="true">#</a> Phương thức không có dữ liệu trả về</h3>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DangHocJava</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">say</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Say: "</span> <span class="token operator">+</span> s<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">String</span> hel <span class="token operator">=</span> <span class="token string">"Hello"</span><span class="token punctuation">;</span>
		<span class="token function">say</span><span class="token punctuation">(</span>hel<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
<span class="token punctuation">}</span>

<span class="token comment">// Output: Say: Hello </span>
</code></pre></div><p>Những phương thức có từ <strong>void</strong> là những phương thức không có dữ liệu trả về.</p>
<p>Bạn có thể gọi các phương thức này như một câu lệnh bình thường.</p>
<details class="custom-container details"><summary>Bonus</summary>
<ul>
<li>Như các bạn có thể thấy, ở trên mình đề cập tới từ khóa <strong>static</strong> phía trước tên phương thức (say). Nói nôm na là <strong>static</strong> giúp cho ta có thể gọi phương thức đó trong bất kì phương thức nào</li>
</ul>
</details>
<h3 id="phuong-thuc-co-du-lieu-tra-ve" tabindex="-1"><a class="header-anchor" href="#phuong-thuc-co-du-lieu-tra-ve" aria-hidden="true">#</a> Phương thức có dữ liệu trả về</h3>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DangHocJava</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Sum: "</span> <span class="token operator">+</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
<span class="token punctuation">}</span>
<span class="token comment">// Output: Sum: 11 </span>
</code></pre></div><p>Những phương thức có các từ khóa biểu thị kiểu dữ liệu phía trước như <strong>int, float, double, String, char, ...</strong> là những phương thức có dữ liệu trả về.</p>
<p>Bạn có thể xem các phương thức này như một <RouterLink to="/post/2023/06/02/java-core-session2/#_3-bien">biến</RouterLink> lưu giá trị.</p>
<h2 id="_3-tham-so-va-đoi-so-trong-phuong-thuc" tabindex="-1"><a class="header-anchor" href="#_3-tham-so-va-đoi-so-trong-phuong-thuc" aria-hidden="true">#</a> 3. Tham số và đối số trong phương thức</h2>
<h3 id="tham-so" tabindex="-1"><a class="header-anchor" href="#tham-so" aria-hidden="true">#</a> Tham số</h3>
<p>Tham số là những giá trị được định nghĩa sẵng trong phương thức, nằm trong dấu <mark>()</mark> và cách nhau bởi dấu <mark>,</mark>. Phía trước tham số sẽ chứa kiểu dữ liệu.</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// Các tham số gồm: a và b ⟹ (int a, int b)</span>
</code></pre></div><h3 id="đoi-so" tabindex="-1"><a class="header-anchor" href="#đoi-so" aria-hidden="true">#</a> Đối số</h3>
<p>Đối số là những câu lệnh dùng truyền dữ liệu vào phương thức, do người gọi phương thức truyền vào</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Các đối số gồm: 3 và 3 ⟹ (3, 5)</span>
</code></pre></div><details class="custom-container details"><summary>Bonus</summary>
<p>Quá trình đặt các đối số vào phương thức gọi là <strong><em>Truyền tham số</em></strong></p>
</details>
<h2 id="_4-gia-tri-tra-ve" tabindex="-1"><a class="header-anchor" href="#_4-gia-tri-tra-ve" aria-hidden="true">#</a> 4. Giá trị trả về</h2>
<p>Mình đã nói các phương thức có dữ liệu trả về sẽ mang dữ liệu như một biến. Vậy cụ thể giá trị đó được xác định như lào ?</p>
<p>Để biết phương thức trả về giá trị gì bạn chỉ cần xem <em>kiểu dữ liệu</em> được khai báo trước tên phương thức nha.</p>
<p>Trong lúc xây dựng, bạn có thể trả về giá trị cho phương thức bất cứ lúc nào bằng lệnh <strong><em>&quot;return&quot;</em></strong></p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">fullname</span><span class="token punctuation">(</span><span class="token class-name">String</span> firstname<span class="token punctuation">,</span> <span class="token class-name">String</span> lastname<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">return</span> firstname <span class="token operator">+</span> <span class="token string">" "</span> <span class="token operator">+</span> lastname<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
	<span class="token function">fullname</span><span class="token punctuation">(</span><span class="token string">"Tran"</span><span class="token punctuation">,</span> <span class="token string">"Huu Dang"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Output: "Tran Huu Dang"</span>
</code></pre></div><p>Phương thức sẽ <strong><em>dừng</em></strong> và <strong><em>trả về giá trị</em></strong> ngay lặp tức khi thấy lệnh <mark>return</mark></p>
<details class="custom-container details"><summary>Bonus</summary>
<ul>
<li>Các lệnh sau return là vô nghĩa vì vậy Java sẽ báo lỗi nếu sau return là một lệnh khi return không nằm trong IF</li>
<li>Cái này bạn nào tư duy tốt sẽ hiểu, còn không cứ nghiền ngẫm nhá 😭</li>
</ul>
</details>
<h2 id="_5-pham-vi-cua-bien" tabindex="-1"><a class="header-anchor" href="#_5-pham-vi-cua-bien" aria-hidden="true">#</a> 5. Phạm vi của biến</h2>
<p>Vấn đề này làm nhiều bạn sẽ nhớ. Chỉ cần nhớ ngắn gọn là <em>Biến nằm trong cặp dấu {} thì chỉ dùng được phía trong cặp dấu đó</em></p>
<p>Ngoài ra thì có những từ khóa như <em>public</em>, <em>private</em> có thể cấu hình được phạm vi của biến trong một <a href="">lớp</a> (<em>mình sẽ giới thiệu trong bài viết sau</em>)</p>
<h2 id="_6-ham-đe-quy" tabindex="-1"><a class="header-anchor" href="#_6-ham-đe-quy" aria-hidden="true">#</a> 6. Hàm đệ quy</h2>
<p>Đệ quy là một khái niệm về ngôn ngữ lập trình đang được sử dụng vô cùng phổ biến hiện nay. Có thể hiểu về đệ quy chính là hàm tự gọi chính nó. Theo đó, các đối tượng muốn được gọi là đệ quy thì nó hay một phần của nó phải thông qua khái niệm về chính nó</p>
<p><em>Chưa hiểu hả 😆😆. Xem ảnh sau và suy ngẫm nhen...</em></p>
<p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/java-core/session7/01-12-45-30-b29.gif?raw=true" alt="b29.gif"></p>
<blockquote>
<p>😭 Đệ quy rất khó để hiểu, và cách duy nhất để làm tốt nó là <mark>thực hành thật nhiều với nó</mark>.</p>
</blockquote>
<h3 id="thanh-phan-trong-ham-đe-quy-gom-nhung-gi" tabindex="-1"><a class="header-anchor" href="#thanh-phan-trong-ham-đe-quy-gom-nhung-gi" aria-hidden="true">#</a> Thành phần trong hàm đệ quy gồm những gì?</h3>
<ul>
<li>
<p>Đối với phần cơ sở: Đây chính là điều kiện để có thể thoát phần đệ quy. Nếu như thiếu đi nó thì hàm đệ quy sẽ luôn gây ra vấn đề tràn khỏi bộ nhớ Stack.</p>
</li>
<li>
<p>Đối với phần đệ quy: Đối với phần này thì ở thân hàm sẽ có chứa đệ quy, nó được thực hiện đến khi thỏa mãn được điều kiện ở phần trên.</p>
</li>
</ul>
<h3 id="cac-uu-điem-han-che-va-đieu-kien-đe-thuc-hien-đe-quy" tabindex="-1"><a class="header-anchor" href="#cac-uu-điem-han-che-va-đieu-kien-đe-thuc-hien-đe-quy" aria-hidden="true">#</a> Các ưu điểm, hạn chế và điều kiện để thực hiện đệ quy</h3>
<h4 id="uu-điem-cua-đe-quy" tabindex="-1"><a class="header-anchor" href="#uu-điem-cua-đe-quy" aria-hidden="true">#</a> Ưu điểm của đệ quy</h4>
<ul>
<li>
<p>Chương trình đệ quy thường dễ hiểu, không phức tạp</p>
</li>
<li>
<p>Người dùng có thể làm được nhiều thao tác để tính toán bằng 1 đoạn chương trình dễ hiểu</p>
</li>
<li>
<p>Có thể giải nghĩa được tập hợp vô hạn những đối tượng qua các hữu hạn được phát biểu.</p>
</li>
</ul>
<h4 id="ve-nhuoc-điem-cua-đe-quy" tabindex="-1"><a class="header-anchor" href="#ve-nhuoc-điem-cua-đe-quy" aria-hidden="true">#</a> Về nhược điểm của đệ quy</h4>
<ul>
<li>
<p>Chương trình này bị tiêu tốn khá nhiều dung lượng</p>
</li>
<li>
<p>Hoạt động chậm</p>
</li>
</ul>
<h3 id="đe-viet-đuoc-đe-quy-can-đam-bao-yeu-to-gi" tabindex="-1"><a class="header-anchor" href="#đe-viet-đuoc-đe-quy-can-đam-bao-yeu-to-gi" aria-hidden="true">#</a> Để viết được đệ quy cần đảm bảo yếu tố gì?</h3>
<p>Các yếu tố cơ bản để có thể viết đệ quy như sau:</p>
<ul>
<li>
<p>Các vấn đề cần phải xử lý được giải quyết bằng đệ quy
Ngôn ngữ sử dụng để viết chương trình cần phải có sự hỗ trợ đệ quy ( hỗ trợ hàm)</p>
</li>
<li>
<p>Cần hạn chế việc khai báo biến, hàng nằm trong hàm đệ quy nếu như nó không quan trọng.</p>
</li>
</ul>
<h3 id="ung-dung-cu-the-cua-đe-quy" tabindex="-1"><a class="header-anchor" href="#ung-dung-cu-the-cua-đe-quy" aria-hidden="true">#</a> Ứng dụng cụ thể của Đệ quy</h3>
<details class="custom-container details"><summary>Tính tổng từ 1 đến n</summary>
<div class="language-java ext-java"><pre v-pre class="language-java"><code>  <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">sum1toN</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span> result <span class="token operator">=</span> n <span class="token operator">+</span> <span class="token function">sum1toN</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//nên sử dụng thêm biến để debug tốt</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token function">sum1toN</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//nên sử dụng thêm biến này để debug tốt</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// output : 15</span>
</code></pre></div></details>
<details class="custom-container details"><summary>Tính giai thừa</summary>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">factorial</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">int</span> result <span class="token operator">=</span> n <span class="token operator">*</span> <span class="token function">factorial</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//khai báo biến thêm để dễ debug</span>
      <span class="token keyword">return</span> result<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token function">factorial</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//khai báo biến thêm đễ dễ debug</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//Output : 120</span>
</code></pre></div></details>
<details class="custom-container details"><summary>Tính dãy fibonacci</summary>
<div class="language-java ext-java"><pre v-pre class="language-java"><code>  <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">fibonacci</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">||</span> n <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token function">fibonacci</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">fibonacci</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//khai báo biến thêm đễ dễ debug </span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token function">fibonacci</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//khai báo biến thêm đễ dễ debug</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// Output : 13</span>
</code></pre></div></details>
</div></template>
