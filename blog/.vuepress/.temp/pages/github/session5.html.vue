<template><div><h1 id="bai-5-lam-viec-voi-nhanh" tabindex="-1"><a class="header-anchor" href="#bai-5-lam-viec-voi-nhanh" aria-hidden="true">#</a> Bài 5. Làm việc với nhánh</h1>
<p>Một dự án gồm rất nhiều chức năng, trong thực tế mỗi thành viên sẽ đảm nhận ít nhất một chức năng.</p>
<p>Để dễ dàng quản lí mã nguồn Git cung cấp khái niệm về nhánh, tùy theo mục đích và quy mô dự án ta sẽ phân ra các nhánh thích hợp.</p>
<p>Việc chia ra các nhánh giúp ta dễ dàng quản lí, làm việc độc lập không ảnh hưởng đến các thành viên khác</p>
<h2 id="tao-nhanh" tabindex="-1"><a class="header-anchor" href="#tao-nhanh" aria-hidden="true">#</a> Tạo nhánh</h2>
<p>Bạn có thể tạo một nhánh mới bằng lệnh sau:</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> branch <span class="token operator">&lt;</span>tên_nhánh<span class="token operator">></span>
</code></pre></div><p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/github/session5/pic1.png?raw=true" alt="Tạo repo GitHub"></p>
<p>Xem danh sách các nhánh bằng lệnh:</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> branch
</code></pre></div><p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/github/session5/pic2.png?raw=true" alt="Tạo repo GitHub"></p>
<h2 id="di-chuyen-qua-lai-giua-cac-nhanh" tabindex="-1"><a class="header-anchor" href="#di-chuyen-qua-lai-giua-cac-nhanh" aria-hidden="true">#</a> Di chuyển qua lại giữa các nhánh</h2>
<p>Trước khi đẩy code lên GitHub ta cần checkout qua nhánh muốn lưu trữ code:</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> checkout <span class="token operator">&lt;</span>tên_nhánh<span class="token operator">></span>

// hoặc

<span class="token function">git</span> switch <span class="token operator">&lt;</span>tên_nhánh<span class="token operator">></span>
</code></pre></div><p>Sau đó thao tác add, commit để thêm code.</p>
<p>Lưu ý: sử dụng lệnh <code v-pre>git push origin &lt;tên nhánh&gt;</code> để đẩy code lên đúng nhánh</p>
<p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/github/session5/pic3.png?raw=true" alt="Tạo repo GitHub"></p>
<p>Sơ đồ git sau khi tiến hành tạo nhánh</p>
<p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/github/session5/pic4.png?raw=true" alt="Tạo repo GitHub"></p>
<h2 id="gop-nhanh" tabindex="-1"><a class="header-anchor" href="#gop-nhanh" aria-hidden="true">#</a> Gộp nhánh</h2>
<p>Việc tạo ra nhiều nhánh trong thời gian dài sẽ khó quản lí, vì vậy khi hoàn tất một chức năng ta nên có hành động gộp nhánh và xóa đi các nhánh thừa không còn dùng nữa.</p>
<p>Đầu tiên ta checkout sang nhánh muốn gộp vào và nhập lệnh:</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> merge <span class="token operator">&lt;</span>tên_nhánh_gộp<span class="token operator">></span>
</code></pre></div><p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/github/session5/pic5.png?raw=true" alt="Tạo repo GitHub"></p>
<p>Với trường hợp trên, ta đang thực hiện gộp nhánh có tên <code v-pre>nhanh-moi</code> vào trong nhánh <code v-pre>main</code> (main sẽ chứa toàn bộ code của nhanh-moi)</p>
<p>Sơ đồ git sau khi gộp nhánh</p>
<p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/github/session5/pic6.png?raw=true" alt="Tạo repo GitHub"></p>
<h2 id="xoa-nhanh" tabindex="-1"><a class="header-anchor" href="#xoa-nhanh" aria-hidden="true">#</a> Xóa nhánh</h2>
<p>Sau khi gộp nhánh xong, ta nên xóa nhánh để kho lưu trữ được gọn gàng hơn</p>
<p>Chỉ nên xóa các nhánh không dùng nữa</p>
<p>Dùng lệnh:</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> branch –d <span class="token operator">&lt;</span>tên_nhánh<span class="token operator">></span>
</code></pre></div><details class="custom-container details">
<p><code v-pre>-d</code> mang ý nghĩa <code v-pre>delete</code></p>
</details>
<p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/github/session5/pic7.png?raw=true" alt="Tạo repo GitHub"></p>
<p>Thao tác với nhánh cần phải nắm vững các lệnh vì rất dễ xảy ra xung đột (conflict) trong quá trình gộp nhánh</p>
<p>Nếu xảy ra xung đột ta phải xử lý bằng tay (xóa hết các code thừa và gộp lại từ đầu)</p>
<p>Tuyệt đối không gộp lung tung, sẽ có thể dẫn đến việc mất hết source code</p>
</div></template>
