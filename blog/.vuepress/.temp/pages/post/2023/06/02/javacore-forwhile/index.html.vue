<template><div><p>Cùng mình tìm hiểu về vòng lặp <strong>for, forEach, while và do while</strong> trong Java nha ^^</p>
<!-- more -->
<h1 id="vong-lap" tabindex="-1"><a class="header-anchor" href="#vong-lap" aria-hidden="true">#</a> Vòng lặp</h1>
<p>Cũng như bài <a href="">Điều kiện</a>, thì đây là một vấn đề có trong mọi ngôn ngữ lập trình.</p>
<blockquote>
<p>Vậy vòng lặp là gì?</p>
</blockquote>
<p><strong>Vòng lặp là cấu trúc lặp đi lặp lại một biểu thức nào đó đến khi nào điều kiện dừng là sai</strong></p>
<p>Dùng để làm một vấn đề gì đó lặp đi lặp lại, có các kiểu vòng lặp sau :</p>
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
</div></template>
