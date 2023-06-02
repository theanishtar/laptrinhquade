<template><div><p>Cùng mình tìm hiểu về Cấu trúc rẽ nhánh trong Java nha</p>
<!-- more -->
<h2 id="cau-lenh-đieu-kien" tabindex="-1"><a class="header-anchor" href="#cau-lenh-đieu-kien" aria-hidden="true">#</a> Câu lệnh điều kiện</h2>
<p>Trong các ngôn ngữ thì luôn luôn có cái này, mình sẽ không nhiều mà đi thẳng đến chi tiết</p>
<p>Có <strong>2</strong> loại câu điều kiện :</p>
<ul>
<li><strong>if..else</strong> : xem <a href="https://www.youtube.com/watch?v=h3fgxLlmnUQ" target="_blank" rel="noopener noreferrer">tại đây</a></li>
<li><strong>switch..case</strong> : xem <a href="https://www.youtube.com/watch?v=IgNvSHjWxfY" target="_blank" rel="noopener noreferrer">tại đây</a></li>
</ul>
<hr>
<h2 id="_1-lenh-if-else" tabindex="-1"><a class="header-anchor" href="#_1-lenh-if-else" aria-hidden="true">#</a> 1. Lệnh if..else</h2>
<p>Nó cũng giống như các ngôn ngữ khác thôi, <strong>if</strong> là nếu, <strong>else if</strong> là còn nếu, <strong>else</strong> là các trường hợp còn lại, cụ thể sau đây :</p>
<ul>
<li>Sử dụng <strong>if</strong> để xác định điều kiện <strong>đúng</strong> để thực thi</li>
<li>Sử dụng <strong>else if</strong> để xác định các điều <strong>đúng</strong> tiếp theo kiểm tra, sau khi <strong>if</strong> sai</li>
<li>Sử dụng <strong>else</strong> để xác định các điều kiện <strong>sai</strong></li>
</ul>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> date <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> 
<span class="token keyword">if</span><span class="token punctuation">(</span>date <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Date của bạn là 2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>date <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Date của bạn là thứ 3"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">else</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Date của bạn khác mọi cái trên"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// output : Date của bạn là 2</span>
</code></pre></div><p>Có 1 loại kiểu rút gọn của <strong>if..else</strong> là <strong>toán tử 3 ngôi</strong> (<em>có thể tham khảo</em>), có cú pháp :</p>
<p>Biến <strong>=</strong> (điều kiện ) <strong>?</strong> Thực thi  <strong>true</strong> <strong>:</strong> Thực thi <strong>false</strong> <strong>;</strong></p>
<p><strong>Dạng</strong> <a href="">if..else</a> :</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> date <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>date <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span>
   <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Date là thứ 2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">else</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Date không phải là thứ 2"</span><span class="token punctuation">)</span>
<span class="token comment">// Output : Date là thứ 2</span>
</code></pre></div><p><strong>Dạng</strong> <a href="">toán tử 3 ngôi</a> :</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> date <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> result <span class="token operator">=</span> <span class="token punctuation">(</span>date <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token string">"Date là thứ 2"</span> <span class="token operator">:</span> <span class="token string">"Date là thứ 2"</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Output : Date là thứ 2</span>
</code></pre></div><hr>
<h2 id="_2-lenh-switch-case" tabindex="-1"><a class="header-anchor" href="#_2-lenh-switch-case" aria-hidden="true">#</a> 2. Lệnh switch..case</h2>
<p>Nó cũng tương đương với <strong>if..else</strong>, nhưng nếu bạn đặt điều kiện chỉ so sánh với <strong>giá trị nguyên</strong> thì đây sẽ thích hợp cho bạn như sau;</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> date <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">switch</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token string">"Date là 1"</span><span class="token punctuation">;</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">2</span> <span class="token operator">:</span> <span class="token string">"Date là 2"</span><span class="token punctuation">;</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">3</span> <span class="token operator">:</span> <span class="token string">"Date là 3"</span><span class="token punctuation">;</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">4</span> <span class="token operator">:</span> <span class="token string">"Date là 4"</span><span class="token punctuation">;</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token keyword">default</span><span class="token operator">:</span>
    <span class="token string">"Các Date còn lại"</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// output : Date là 3</span>
</code></pre></div><div class="custom-container warning"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.65 123.32C133.27 123.32 0 256.58 0 421c0 164.42 133.27 297.6 297.65 297.6 164.38 0 297.64-133.26 297.64-297.6 0-164.34-133.29-297.68-297.64-297.68Zm-.6 483.32c-22.591 0-41.18-18.589-41.18-41.18s18.589-41.18 41.18-41.18 41.18 18.589 41.18 41.18-18.589 41.18-41.18 41.18Zm42.38-164.27h-.23c-.139 22.489-18.681 40.916-41.17 40.916-22.586 0-41.171-18.585-41.171-41.171l.001-.255c0-1 .05-1.93.11-2.88V276.73h.03v-.27a45.8 45.8 0 0 1-.005-.642c0-22.59 18.589-41.18 41.18-41.18s41.18 18.59 41.18 41.18c0 .214-.002.428-.005.642v.27h.06l.02 165.64Z" style="fill:#f3cc2e;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.18)"/></svg><p class="custom-container-title">WARNING</p>
<p>🚀 Như bạn có thể thấy thì <strong>switch..case</strong> có những lưu ý sau :</p>
<ul>
<li>Các <strong>case</strong> là trường hợp của biến <strong>date</strong> và chỉ chấp nhận <strong>số nguyên</strong></li>
<li>Cuối <strong>case</strong> phải có <strong>break</strong> để thoát vòng điều kiện</li>
<li><strong>default</strong> tương ứng với <strong>else</strong> là các trường hợp còn lại</li>
<li>Có thể gộp nhiều <strong>case</strong> lại, như <strong>case 1,2,3:</strong></li>
</ul>
</div>
<!-- https://youtu.be/TZ7O5JL35zk -->
<iframe width="100%" height="450" src="https://www.youtube.com/embed/TZ7O5JL35zk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div></template>
