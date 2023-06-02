<template><div><p>Biến là đối tượng cơ bản nhất trong lập trình, dùng để lưu giá trị.</p>
<!-- more -->
<h2 id="_1-cac-kieu-du-lieu-nguyen-thuy" tabindex="-1"><a class="header-anchor" href="#_1-cac-kieu-du-lieu-nguyen-thuy" aria-hidden="true">#</a> 1. Các kiểu dữ liệu nguyên thủy</h2>
<div class="custom-container info"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M13 1.188C6.477 1.188 1.188 6.477 1.188 13S6.477 24.813 13 24.813 24.813 19.523 24.813 13c0-6.523-5.29-11.812-11.813-11.812Zm2.459 18.307c-.608.24-1.092.422-1.455.548a3.838 3.838 0 0 1-1.262.189c-.736 0-1.309-.18-1.717-.539a1.74 1.74 0 0 1-.611-1.367c0-.215.015-.435.045-.659a8.23 8.23 0 0 1 .147-.759l.761-2.688c.067-.258.125-.503.171-.731.046-.23.068-.441.068-.633 0-.342-.071-.582-.212-.717-.143-.135-.412-.201-.813-.201-.196 0-.398.029-.605.09-.205.063-.383.12-.529.176l.201-.828c.498-.203.975-.377 1.43-.521a4.225 4.225 0 0 1 1.29-.218c.731 0 1.295.178 1.692.53.395.353.594.812.594 1.376 0 .117-.014.323-.041.617a4.129 4.129 0 0 1-.152.811l-.757 2.68a7.582 7.582 0 0 0-.167.736 3.892 3.892 0 0 0-.073.626c0 .356.079.599.239.728.158.129.435.194.827.194.185 0 .392-.033.626-.097.232-.064.4-.121.506-.17l-.203.827Zm-.134-10.878a1.807 1.807 0 0 1-1.275.492c-.496 0-.924-.164-1.28-.492a1.57 1.57 0 0 1-.533-1.193c0-.465.18-.865.533-1.196a1.812 1.812 0 0 1 1.28-.497c.497 0 .923.165 1.275.497.353.331.53.731.53 1.196 0 .467-.177.865-.53 1.193Z" style="fill:#157ffb;fill-rule:nonzero" transform="translate(-1.257 -1.257) scale(1.0582)"/></svg><p class="custom-container-title">INFO</p>
<ul>
<li>Kiểu dữ liệu nguyên thủy là kiểu dữ liệu cơ bản nhất (chỉ dùng để lưu giá trị)</li>
<li>Nâng cấp hơn ta có kiểu dữ liệu hướng đối tượng, là các kiểu dữ liệu cung cấp các phương thức cho sẵng để tính toán các giá trị</li>
</ul>
</div>
<h3 id="tong-hop-cac-kieu-du-lieu-nguyen-thuy-trong-java" tabindex="-1"><a class="header-anchor" href="#tong-hop-cac-kieu-du-lieu-nguyen-thuy-trong-java" aria-hidden="true">#</a> Tổng hợp các kiểu dữ liệu nguyên thủy trong Java</h3>
<hr>
<!-- | Tên gọi trong Java        | Tên kiểu dữ liệu    |  Mô tả   |   Miền giá trị |
|---------------------------|---------------------|----------|----------------|
| byte                      | Số nguyên           |  Dùng để lưu dữ liệu kiểu số nguyên có kích thước một byte (8 bít). Giá trị măc j định là 0       | Các 128 đến 127       |
| char                      | Ký tự               |   Dùng để lưu dữ liệu kiểu kí tự hoặc số nguyên không âm có kích thước 2 byte (16 bít). Giá trị mặc định là 0.        | từ 0 đến u\ffff      |
| boolean                      | Logic               |   Dùng để lưu dữ liệu chỉ có hai trạng thái đúng hoặc sai (độ lớn chỉ có 1 bít). Giá trị mặc định là False.        | {“True”, “False”}     |
| short                      | Số nguyên               |   	Dùng để lưu dữ liệu có kiểu số nguyên, kích cỡ 2 byte (16 bít). Giá trị mặc định là 0.        | từ 32768 đến 32767    |
| int                      | Số nguyên               |   	Dùng để lưu dữ liệu có kiểu số nguyên,  kích cỡ 4 byte (32 bít). Giá trị mặc định là 0.        | từ 2,147,483,648 đến 2,147,483,647    |
| long                      | Số nguyên               |   	Dùng để lưu dữ liệu có kiểu số nguyên có kích thước lên đến 8 byte. Giá trị mặc định là 0L.        |    |
| float                    | Số thực               |   	Dùng để lưu dữ liệu có kiểu số thực có kích thước lên đến 8 byte. Giá trị mặc định là 0.00D       |   |
| double                    | Số thực               |   	Dùng để lưu dữ liệu có kiểu số thực có kích thước lên đến 8 byte. Giá trị mặc định là 0.00D      |   | -->
<table>
<thead>
<tr>
<th>Kiểu dữ liệu</th>
<th>Kích thước</th>
<th>Mô tả</th>
</tr>
</thead>
<tbody>
<tr>
<td>byte</td>
<td><strong>1</strong> <em>bytes</em></td>
<td>chứa từ <strong>[-128,127]</strong></td>
</tr>
<tr>
<td>short</td>
<td><strong>2</strong> <em>bytes</em></td>
<td>chứa từ <strong>[-32,768,32,767]</strong></td>
</tr>
<tr>
<td>int</td>
<td><strong>4</strong> <em>bytes</em></td>
<td>chứa từ <strong>[-2 tỷ, 2 tỷ]</strong></td>
</tr>
<tr>
<td>long</td>
<td><strong>8</strong> <em>bytes</em></td>
<td>chứa từ <strong>[-9 tỷ tỷ, 9 tỷ tỷ]</strong></td>
</tr>
<tr>
<td>float</td>
<td><strong>4</strong> <em>bytes</em></td>
<td>chứa số thực, tối đa <strong>7</strong> chữ số thập phân</td>
</tr>
<tr>
<td>double</td>
<td><strong>8</strong> <em>bytes</em></td>
<td>chứa số thực, tối đa <strong>15</strong> chữ số thập phân</td>
</tr>
<tr>
<td>boolean</td>
<td><strong>1</strong> bit</td>
<td>Chứa giá trị <strong>true</strong> hoặc <strong>false</strong></td>
</tr>
<tr>
<td>char</td>
<td><strong>2</strong> <em>bytes</em></td>
<td>Chứa 1 ký tự <strong>ASCII</strong></td>
</tr>
</tbody>
</table>
<hr>
<div class="custom-container info"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M13 1.188C6.477 1.188 1.188 6.477 1.188 13S6.477 24.813 13 24.813 24.813 19.523 24.813 13c0-6.523-5.29-11.812-11.813-11.812Zm2.459 18.307c-.608.24-1.092.422-1.455.548a3.838 3.838 0 0 1-1.262.189c-.736 0-1.309-.18-1.717-.539a1.74 1.74 0 0 1-.611-1.367c0-.215.015-.435.045-.659a8.23 8.23 0 0 1 .147-.759l.761-2.688c.067-.258.125-.503.171-.731.046-.23.068-.441.068-.633 0-.342-.071-.582-.212-.717-.143-.135-.412-.201-.813-.201-.196 0-.398.029-.605.09-.205.063-.383.12-.529.176l.201-.828c.498-.203.975-.377 1.43-.521a4.225 4.225 0 0 1 1.29-.218c.731 0 1.295.178 1.692.53.395.353.594.812.594 1.376 0 .117-.014.323-.041.617a4.129 4.129 0 0 1-.152.811l-.757 2.68a7.582 7.582 0 0 0-.167.736 3.892 3.892 0 0 0-.073.626c0 .356.079.599.239.728.158.129.435.194.827.194.185 0 .392-.033.626-.097.232-.064.4-.121.506-.17l-.203.827Zm-.134-10.878a1.807 1.807 0 0 1-1.275.492c-.496 0-.924-.164-1.28-.492a1.57 1.57 0 0 1-.533-1.193c0-.465.18-.865.533-1.196a1.812 1.812 0 0 1 1.28-.497c.497 0 .923.165 1.275.497.353.331.53.731.53 1.196 0 .467-.177.865-.53 1.193Z" style="fill:#157ffb;fill-rule:nonzero" transform="translate(-1.257 -1.257) scale(1.0582)"/></svg><p class="custom-container-title">INFO</p>
<p><strong>1 Byte</strong> = <strong>8bit</strong> và <strong>1MB = 1024B</strong> nhé các bạn</p>
</div>
<div class="custom-container warning"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.65 123.32C133.27 123.32 0 256.58 0 421c0 164.42 133.27 297.6 297.65 297.6 164.38 0 297.64-133.26 297.64-297.6 0-164.34-133.29-297.68-297.64-297.68Zm-.6 483.32c-22.591 0-41.18-18.589-41.18-41.18s18.589-41.18 41.18-41.18 41.18 18.589 41.18 41.18-18.589 41.18-41.18 41.18Zm42.38-164.27h-.23c-.139 22.489-18.681 40.916-41.17 40.916-22.586 0-41.171-18.585-41.171-41.171l.001-.255c0-1 .05-1.93.11-2.88V276.73h.03v-.27a45.8 45.8 0 0 1-.005-.642c0-22.59 18.589-41.18 41.18-41.18s41.18 18.59 41.18 41.18c0 .214-.002.428-.005.642v.27h.06l.02 165.64Z" style="fill:#f3cc2e;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.18)"/></svg><p class="custom-container-title">WARNING</p>
<p><strong>B</strong> là viết tắt của <strong>Byte</strong>, còn <strong>b</strong> là viết tắt của <strong>bit</strong>, vậy nên <strong>4GB</strong> với <strong>4Gb</strong> khác nhau hoàn toàn nhé.</p>
</div>
<div class="custom-container tip"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/><path d="M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/></svg><p class="custom-container-title">TIP</p>
<p>Bên trên có khá nhiều kiểu, nhưng bạn chỉ cần nhớ <strong>int</strong>, <strong>boolean</strong>, <strong>char</strong>, <strong>double</strong>. vì những thứ này hay dùng nhất</p>
</div>
<h4 id="nen-su-dung-so-thuc-la-float-hay-double" tabindex="-1"><a class="header-anchor" href="#nen-su-dung-so-thuc-la-float-hay-double" aria-hidden="true">#</a> Nên sử dụng số thực là <strong>float</strong> hay <strong>double</strong> :</h4>
<p>Tuỳ vào mục đích sử dụng của bạn, nếu bạn muốn độ chính xác cao tuyệt đối hãy sử dụng <strong>double</strong> , nếu bạn không cần độ chính xác quá tỉ mỉ như <em>điểm số sinh viên</em> thì sử dụng <strong>float</strong>.</p>
<p>Bạn có thể sử dụng <strong>e</strong> để biểu thị cho luỹ thừa của 10</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">float</span> f1 <span class="token operator">=</span> <span class="token number">35e3f</span><span class="token punctuation">;</span>
<span class="token keyword">double</span> d1 <span class="token operator">=</span> <span class="token number">12E4d</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>f1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>d1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*35000.0
120000.0 */</span>
</code></pre></div><h2 id="_2-kieu-du-lieu-khong-nguyen-thuy" tabindex="-1"><a class="header-anchor" href="#_2-kieu-du-lieu-khong-nguyen-thuy" aria-hidden="true">#</a> 2. Kiểu dữ liệu không nguyên thuỷ</h2>
<p>Được gọi là kiểu <strong>tham chiếu</strong> vì chúng <strong>tham chiếu</strong> đến các <strong>Objects</strong> (<em>đối tượng</em>).</p>
<blockquote>
<p>Thật ra <strong>String</strong> <em>(chuỗi)</em> là một kiểu dữ liệu không nguyên thuỷ, bởi vì nó như một <strong>Object</strong> (<em>đối tượng</em>), và nó có thể chứa nhiều kiểu dữ liệu.</p>
</blockquote>
<p><strong>Sử khác nhau giữa nguyên thuỷ và không nguyên thuỷ</strong>:</p>
<table>
<thead>
<tr>
<th></th>
<th>Nguyên thuỷ</th>
<th>Không Nguyên thuỷ</th>
</tr>
</thead>
<tbody>
<tr>
<td>Khởi tạo</td>
<td>được xác định trước trong <strong>Java</strong></td>
<td>được tạo bởi lập trình viên</td>
</tr>
<tr>
<td>Giá trị</td>
<td>luôn luôn có giá trị</td>
<td>có thể không có giá trị gọi là <strong>null</strong></td>
</tr>
<tr>
<td>Cú pháp</td>
<td>bắt đầu bằng chữ <strong>thường</strong> : <strong>int</strong>, <strong>float</strong> ...</td>
<td>bắt đầu bằng chữ <strong>hoa</strong> : <strong>String</strong>,<strong>Array</strong>...</td>
</tr>
<tr>
<td>Kích thước</td>
<td>Phụ thuộc vào <strong>kiểu dữ liệu</strong></td>
<td>Có cùng kích thước với nhau</td>
</tr>
</tbody>
</table>
<p>⚠️ Đó là lý do bạn khai báo <strong>String</strong> phải viết hoa chữ cái đầu đấy.</p>
<hr>
<h2 id="_3-bien" tabindex="-1"><a class="header-anchor" href="#_3-bien" aria-hidden="true">#</a> 3. Biến</h2>
<p><strong>Variables</strong> (<em>Biến</em>) : là vùng chứa giá trị của dữ liệu</p>
<p>Trong <strong>Java</strong> có các biến cơ bản sau :</p>
<ul>
<li><strong>String</strong> (chuỗi) : <em>chứa văn bản như &quot;Kiệt đẹp trai&quot;</em></li>
<li><strong>int</strong> &amp; <strong>long</strong> (số nguyên) : <em>chứa số nguyên như 1,2,3...</em></li>
<li><strong>float</strong> &amp; <strong>double</strong> (số thực) : <em>chứa số thực như 2.343...</em></li>
<li><strong>char</strong> (Ký tự) : <em>chứa ký tự như a,b,c...</em></li>
<li><strong>boolean</strong> : <em>chứa 2 trạng thái là</em> <strong>true</strong> <em>và</em> <strong>false</strong></li>
</ul>
<hr>
<h3 id="khoi-tao-bien" tabindex="-1"><a class="header-anchor" href="#khoi-tao-bien" aria-hidden="true">#</a> Khởi tạo biến</h3>
<p>Ta có thể tạo một biến bằng cú pháp sau  :  <strong>kiểu dữ liệu = giá trị</strong></p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> myNum <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">float</span> myFloatNum <span class="token operator">=</span> <span class="token number">5.32f</span><span class="token punctuation">;</span> <span class="token comment">// cuối có f</span>
<span class="token keyword">double</span> myDoubleNum <span class="token operator">=</span> <span class="token number">5.23d</span><span class="token punctuation">;</span> <span class="token comment">// cuối có d</span>
<span class="token keyword">char</span> myLetter <span class="token operator">=</span> <span class="token char">'D'</span><span class="token punctuation">;</span>
<span class="token keyword">boolean</span> myBool <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> myName <span class="token operator">=</span> <span class="token string">"Tran Huu Dang"</span><span class="token punctuation">;</span> <span class="token comment">// String viết hoa</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"number = "</span> <span class="token operator">+</span> myNum<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"floatNumber = "</span> <span class="token operator">+</span> myFloatNum<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"DoubleNumber  = "</span> <span class="token operator">+</span> myDoubleNum<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"name = "</span> <span class="token operator">+</span> myName<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Letter = "</span> <span class="token operator">+</span> myLetter<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"bool = "</span> <span class="token operator">+</span> myBool<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token comment">// output:</span>
number <span class="token operator">=</span> <span class="token number">3</span>
floatNumber <span class="token operator">=</span> <span class="token number">5.32</span>
<span class="token class-name">DoubleNumber</span>  <span class="token operator">=</span> <span class="token number">5.23</span>
name <span class="token operator">=</span> <span class="token class-name">Tran</span> <span class="token class-name">Huu</span> <span class="token class-name">Dang</span>
<span class="token class-name">Letter</span> <span class="token operator">=</span> <span class="token class-name">D</span>
bool <span class="token operator">=</span> <span class="token boolean">true</span>
</code></pre></div><hr>
<h3 id="quy-tac-đat-bien" tabindex="-1"><a class="header-anchor" href="#quy-tac-đat-bien" aria-hidden="true">#</a> Quy tắc đặt biến</h3>
<p>Bạn phải tuân thủ những quy tắc đặt biến sau đây :</p>
<ul>
<li><strong>Không</strong> bắt đầu bằng số</li>
<li><strong>Không</strong> có khoảng trắng (<em>sử dụng _ như bien_1</em>)</li>
<li><strong>Không</strong> chứa ký tự đặt biệt (<em>như #,+,-....</em>)</li>
<li><strong>Không</strong> trùng với <strong>keyword</strong> (<em>như if,for,class...</em>)</li>
</ul>
<p>Những quy tắt ngầm (<em>Không buộc nhưng làm theo cho có quy chuẩn</em>) :</p>
<ul>
<li>
<p>Viết tên hàm theo quy tắc <strong>camelCase</strong> : <em>nghĩa là chữ đầu viết thường, các chữ sau viết hoa chữ cái đầu</em>, như sau:</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">tenHam</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">checkNguyenTo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">char</span> <span class="token function">checkChuHoa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre></div></li>
<li>
<p>Viết hoa toàn bộ ghi đặt tên biến là hằng số và sử dụng <strong>final</strong></p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">final</span> <span class="token keyword">float</span> <span class="token constant">PI</span> <span class="token operator">=</span> <span class="token number">3.14f</span><span class="token punctuation">;</span>
<span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">SOTUCHON</span> <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
</code></pre></div></li>
</ul>
<p>Nếu bạn không muốn chỉnh sửa biến đó về sau, cho nó là hằng số và chỉ được phép <em>đọc</em>, thì hãy dùng <strong>final</strong>:</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">PI</span> <span class="token operator">=</span> <span class="token number">3.14</span><span class="token punctuation">;</span>
<span class="token constant">PI</span> <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">//hàm này sẽ lỗi vì PI không thể thay đổi</span>
</code></pre></div><hr>
<h3 id="hien-thi-bien" tabindex="-1"><a class="header-anchor" href="#hien-thi-bien" aria-hidden="true">#</a> Hiển thị biến</h3>
<p>Sử dụng <code v-pre>System.out.println</code> để hiển thị ra màn hình, và để kết hợp đoạn văn bản và biến hãy sử dụng dấu <code v-pre>+</code> như sau :</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token class-name">String</span> firstName <span class="token operator">=</span> <span class="token string">"Tran"</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> middleName <span class="token operator">=</span> <span class="token string">"Huu"</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> lastName <span class="token operator">=</span> <span class="token string">"Dang"</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Tên tôi là : "</span> <span class="token operator">+</span> firstName <span class="token operator">+</span> <span class="token string">" "</span> <span class="token operator">+</span> middleName <span class="token operator">+</span> <span class="token string">" "</span> <span class="token operator">+</span> lastName<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output:</span>
<span class="token class-name">T</span>ên tôi là <span class="token operator">:</span> <span class="token class-name">Tran</span> <span class="token class-name">Huu</span> <span class="token class-name">Dang</span>
</code></pre></div><p>Như bạn đã thấy tôi đã tự động thêm chuỗi <mark>&quot; &quot;</mark> để tạo khoảng cách cho tên của tôi.</p>
<p>Và bạn cũng có thể tính toán thẳng trong đó như sau :</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"a + b = "</span> <span class="token operator">+</span> <span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// output : a + b = 9</span>
</code></pre></div><p>Với những phép toán bạn phải bọc nó lại bằng dấu <mark>()</mark> nha.</p>
<h2 id="_4-toan-tu" tabindex="-1"><a class="header-anchor" href="#_4-toan-tu" aria-hidden="true">#</a> 4. Toán tử</h2>
<p>Được sử dụng để thực hiện trên phép tính của các biến với nhau, có <strong>5</strong> nhóm sau :</p>
<ul>
<li><strong>Arithmetic</strong> : <em>Toán tử số học</em></li>
<li><strong>Assignment</strong> : <em>Toán tử gán</em></li>
<li><strong>Comparsion</strong> : <em>Toán tử so sánh</em></li>
<li><strong>Logical</strong> : <em>Toán tử logic</em></li>
<li><strong>Bitwise</strong> : <em>Toán tử thao tác bit</em></li>
</ul>
<hr>
<h3 id="toan-tu-so-hoc-arithmetic" tabindex="-1"><a class="header-anchor" href="#toan-tu-so-hoc-arithmetic" aria-hidden="true">#</a> Toán tử số học (<strong>Arithmetic</strong>)</h3>
<p>Có các loại toán tử sau đây :</p>
<table>
<thead>
<tr>
<th>Toán tử</th>
<th>Miêu tả</th>
<th>Ví dụ</th>
</tr>
</thead>
<tbody>
<tr>
<td>+</td>
<td>Phép cộng</td>
<td>2 + 3 ⇨ 5</td>
</tr>
<tr>
<td>-</td>
<td>Phép trừ</td>
<td>2 - 3 ⇨ -1</td>
</tr>
<tr>
<td>*</td>
<td>Phép nhân</td>
<td>2 * 3 ⇨ 6</td>
</tr>
<tr>
<td>/</td>
<td>Phép chia</td>
<td>2 / 3 ⇨ 0</td>
</tr>
<tr>
<td>%</td>
<td>Phép chia lấy dư</td>
<td>2 % 3 ⇨ 2</td>
</tr>
<tr>
<td>++</td>
<td>tăng thêm 1</td>
<td>2++ ⇨ 3</td>
</tr>
<tr>
<td>--</td>
<td>giảm lại 1</td>
<td>2-- ⇨ 1</td>
</tr>
</tbody>
</table>
<blockquote>
<p>🤔 Bạn chỉ cần nhớ toán tử số học là <strong>cộng, trừ, nhân, chia</strong></p>
</blockquote>
<hr>
<h3 id="toan-tu-gan-assignment" tabindex="-1"><a class="header-anchor" href="#toan-tu-gan-assignment" aria-hidden="true">#</a> Toán tử gán (<strong>Assignment</strong>)</h3>
<p>Có các loại toán tử sau :</p>
<table>
<thead>
<tr>
<th>Toán tử</th>
<th>Miêu tả</th>
<th>Ví dụ (<em>a = 2</em>)</th>
</tr>
</thead>
<tbody>
<tr>
<td>=</td>
<td>phép gán</td>
<td>a = 2</td>
</tr>
<tr>
<td>+=<br>-=<br>*=<br>/=<br>%=</td>
<td>phép cộng và gán<br>phép trừ và gán<br>phép nhân và gán<br>phép chia và gán<br>phép chia lấy dư vá gán</td>
<td>a <strong>+=</strong> 3  ⇨ <strong>a = 5</strong><br>a -= 3   ⇨ <strong>a = -1</strong><br>a *<strong>=</strong> 3  ⇨ <strong>a = 6</strong><br>a <strong>/=</strong> 3   ⇨ <strong>a = 0</strong><br>a <strong>%=</strong> 3 ⇨ <strong>a = 2</strong><br></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="toan-tu-so-sanh-comparision" tabindex="-1"><a class="header-anchor" href="#toan-tu-so-sanh-comparision" aria-hidden="true">#</a> Toán tử so sánh (<strong>Comparision</strong>)</h3>
<p>Có các loại toán tử sau :</p>
<table>
<thead>
<tr>
<th>Toán tử</th>
<th>Miêu tả</th>
<th>Ví dụ (<em>a = 2</em>)</th>
</tr>
</thead>
<tbody>
<tr>
<td>==<br>!=</td>
<td>bằng<br>không bằng</td>
<td>a <strong>==</strong> 2<br>a <strong>!=</strong> 3</td>
</tr>
<tr>
<td>&gt;<br>&lt;</td>
<td>lớn hơn<br>nhỏ hơn</td>
<td>a <strong>&gt;</strong> 1<br>a <strong>&lt;</strong> 3</td>
</tr>
<tr>
<td>&gt;=<br>&lt;=</td>
<td>lớn hơn hoặc bằng<br>nhỏ hơn hoặc bằng</td>
<td>a <strong>&gt;=</strong> 2<br>a <strong>&lt;=</strong> 2</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="toan-tu-logic-logical" tabindex="-1"><a class="header-anchor" href="#toan-tu-logic-logical" aria-hidden="true">#</a> Toán tử logic (<strong>Logical</strong>)</h3>
<p>Có các loại toán tử sau :</p>
<table>
<thead>
<tr>
<th>Toán tử</th>
<th>Miêu tả</th>
<th>Ví dụ (<em>a = 2</em>)</th>
</tr>
</thead>
<tbody>
<tr>
<td>&amp;&amp;</td>
<td>Phép <strong>và</strong> : <em>nếu cả hai true thì true</em> <br><em>một trong hai false thì false</em></td>
<td>a <strong>&gt;</strong> 1 <strong>&amp;&amp;</strong> a <strong>==</strong> 2</td>
</tr>
<tr>
<td>||</td>
<td>Phép <strong>hoặc</strong> : <em>nếu cả 2 false thì false</em><br><em>một trong hai true thì true</em></td>
<td>a <strong>&lt;</strong> 1 <strong>||</strong> a <strong>==</strong> 2</td>
</tr>
<tr>
<td>!</td>
<td>Phép <strong>phủ</strong> : <em>true thành false</em> và <em>false thành true</em></td>
<td><strong>!a</strong></td>
</tr>
</tbody>
</table>
<blockquote>
<p>🔥 Phép phủ tức là ngược lại : <strong>true</strong> ⇨ <strong>false</strong> và <strong>false</strong> ⇨ <strong>true</strong></p>
</blockquote>
<hr>
<h3 id="toan-tu-bit-bitwise" tabindex="-1"><a class="header-anchor" href="#toan-tu-bit-bitwise" aria-hidden="true">#</a> Toán tử Bit (<strong>Bitwise</strong>)</h3>
<p>Đây là thao tác trên <strong>Bit</strong>, các bạn không cần phải hiểu nó quá kỹ, biết là có là được.</p>
<table>
<thead>
<tr>
<th>Toán tử</th>
<th>Miêu tả</th>
<th>Ví dụ (<em>A = 2 và B = 3</em>)</th>
</tr>
</thead>
<tbody>
<tr>
<td>&amp;</td>
<td>Phép <strong>And bit</strong></td>
<td>A <strong>&amp;</strong> B ⇨ 2</td>
</tr>
<tr>
<td>!</td>
<td>Phép <strong>OR bit</strong></td>
<td>A <strong>|</strong> B ⇨ 3</td>
</tr>
<tr>
<td>^</td>
<td>Phép <strong>XOR bit</strong></td>
<td>A <strong>^</strong> B ⇨ 1</td>
</tr>
<tr>
<td>~</td>
<td>Phép <strong>phủ bit</strong></td>
<td>~B  ⇨ -4</td>
</tr>
<tr>
<td>&lt;&lt;</td>
<td>Phép <strong>dịch trái</strong></td>
<td>A <strong>&lt;&lt;</strong> 1 ⇨ 4</td>
</tr>
<tr>
<td>&gt;&gt;</td>
<td>Phép <strong>dịch phải</strong></td>
<td>A <strong>&gt;&gt;</strong> 1 ⇨ 1</td>
</tr>
<tr>
<td>&gt;&gt;&gt;</td>
<td>Phép <strong>dịch phải với Zero</strong></td>
<td>A <strong>&gt;&gt;&gt;</strong> 1 ⇨ 1</td>
</tr>
</tbody>
</table>
<div class="custom-container tip"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/><path d="M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/></svg><p class="custom-container-title">TIP</p>
<p>Bạn không cần phải hiểu quá nhiều về vấn đề này</p>
<p>Nếu bạn muốn tìm hiểu, hãy xem <a href="https://openplanning.net/12281/cac-toan-tu-bitwise" target="_blank" rel="noopener noreferrer">tại đây</a></p>
</div>
</div></template>
