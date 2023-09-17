<template><div><h1 id="bai-2-đay-code-len-github" tabindex="-1"><a class="header-anchor" href="#bai-2-đay-code-len-github" aria-hidden="true">#</a> Bài 2. Đẩy code lên GitHub</h1>
<h2 id="tao-repository-tai-github-com" tabindex="-1"><a class="header-anchor" href="#tao-repository-tai-github-com" aria-hidden="true">#</a> Tạo Repository tại GitHub.com</h2>
<details class="custom-container details"><summary>Repository là gì</summary>
<p>Repository là một kho lưu trữ của GitHub, bạn có thể xem Repository là một nơi chứa project của bạn trực tuyến</p>
</details>
<p><strong>Bước 1: Tạo Repo mới <a href="https://github.com/new" target="_blank" rel="noopener noreferrer">tại đây</a></strong></p>
<p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/github/session2/taorepo.png?raw=true" alt="Tạo repo GitHub"></p>
<div class="custom-container info"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M13 1.188C6.477 1.188 1.188 6.477 1.188 13S6.477 24.813 13 24.813 24.813 19.523 24.813 13c0-6.523-5.29-11.812-11.813-11.812Zm2.459 18.307c-.608.24-1.092.422-1.455.548a3.838 3.838 0 0 1-1.262.189c-.736 0-1.309-.18-1.717-.539a1.74 1.74 0 0 1-.611-1.367c0-.215.015-.435.045-.659a8.23 8.23 0 0 1 .147-.759l.761-2.688c.067-.258.125-.503.171-.731.046-.23.068-.441.068-.633 0-.342-.071-.582-.212-.717-.143-.135-.412-.201-.813-.201-.196 0-.398.029-.605.09-.205.063-.383.12-.529.176l.201-.828c.498-.203.975-.377 1.43-.521a4.225 4.225 0 0 1 1.29-.218c.731 0 1.295.178 1.692.53.395.353.594.812.594 1.376 0 .117-.014.323-.041.617a4.129 4.129 0 0 1-.152.811l-.757 2.68a7.582 7.582 0 0 0-.167.736 3.892 3.892 0 0 0-.073.626c0 .356.079.599.239.728.158.129.435.194.827.194.185 0 .392-.033.626-.097.232-.064.4-.121.506-.17l-.203.827Zm-.134-10.878a1.807 1.807 0 0 1-1.275.492c-.496 0-.924-.164-1.28-.492a1.57 1.57 0 0 1-.533-1.193c0-.465.18-.865.533-1.196a1.812 1.812 0 0 1 1.28-.497c.497 0 .923.165 1.275.497.353.331.53.731.53 1.196 0 .467-.177.865-.53 1.193Z" style="fill:#157ffb;fill-rule:nonzero" transform="translate(-1.257 -1.257) scale(1.0582)"/></svg><p class="custom-container-title">INFO</p>
<p>Repository name: là tên kho lưu trữ của bạn</p>
<p>Public hay Private là trạng thái của Repo</p>
<ul>
<li>Public là ai cũng xem được</li>
<li>Private là chỉ bạn và những người được thêm vào repo mới được xem</li>
</ul>
</div>
<p><strong>Bước 2: Clone Repo về máy tính của bạn</strong></p>
<p>Khi tạo xong repo giao diện sẽ thay đổi thành thế này:</p>
<p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/nodejs/session2/image.png?raw=true" alt="Tạo repo GitHub"></p>
<p>Bạn hãy coppy đường link sau:</p>
<p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/github/session2/clonerepo.png?raw=true" alt="Tạo repo GitHub"></p>
<p>Vào <RouterLink to="/github/session1.html#%C4%91ang-nhap-vao-git">Git Bash</RouterLink> và gõ lệnh sau:</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> clone //dán đường dẫn vừa coppy vào đây
</code></pre></div><p><strong>Bước 3: Paste code vào Repo clone</strong></p>
<p>Bạn sẽ thấy một thư mục trống như này:</p>
<p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/github/session2/pastecode.png?raw=true" alt="Tạo repo GitHub"></p>
<p>Sau đó cứ tiến hành paste hết những đoạn code bạn muốn đẩy lên Git vào thư mục trống này</p>
<p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/github/session2/pastedone.png?raw=true" alt="Tạo repo GitHub"></p>
<p><strong>Bước 4: Đẩy code lên GitHub</strong></p>
<p>Tại thư mục, click chuột phải để mở <RouterLink to="/github/session1.html#%C4%91ang-nhap-vao-git">Git Bash</RouterLink></p>
<p>Gõ lần lượt các lệnh sau</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
$ <span class="token function">git</span> commit -m <span class="token string">"add code"</span>
$ <span class="token function">git</span> push 
</code></pre></div><p><strong>Bước 5: Lên GitHub và kiểm tra</strong></p>
<ul>
<li>Bạn sẽ thấy src code mình trên repo GitHub.</li>
<li>Nếu chưa thấy thì thực hiện lại các bước. Nếu vẫn không được thì để lại comment phía dưới nhé!</li>
</ul>
<iframe width="100%" height="450" src="https://www.youtube.com/embed/RV_jojt_2bo?si=KhYiTBJdNeHYFfMa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div></template>
