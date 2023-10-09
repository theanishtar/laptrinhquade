<template><div><h1 id="bai-3-undo-khi-gap-mot-commit-sai" tabindex="-1"><a class="header-anchor" href="#bai-3-undo-khi-gap-mot-commit-sai" aria-hidden="true">#</a> Bài 3 Undo khi gặp một commit sai</h1>
<p>Ta đã biết làm sao để lưu một lịch sử thay đổi (commit) trong repo.</p>
<p>Trên thực tế sẽ có một vài trường hợp ta commit nhầm và muốn trở lại lần commit trước đó.</p>
<p>Git hỗ trợ ta 2 lệnh sau để thực hiện thao tác đó:     <code v-pre>git reset</code> và <code v-pre>git reverse</code></p>
<h3 id="vi-du" tabindex="-1"><a class="header-anchor" href="#vi-du" aria-hidden="true">#</a> Ví dụ</h3>
<p>Ta có 4 lần commit lần lượt là <code v-pre>A</code>, <code v-pre>B</code>, <code v-pre>C</code>, <code v-pre>D</code> (các id phía trên) và <code v-pre>D</code> là lượt commit hiện tại (HEAD), nhận thấy <code v-pre>C</code> và <code v-pre>D</code> là một commit sai (lỗi code hoặc bug) và ta muốn quay lại commit <code v-pre>B</code></p>
<p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/github/session3/pic1.1.png?raw=true" alt="Tạo repo GitHub"></p>
<p>Ta có thể giải quyết vấn đề trên bằng 2 lệnh là: <RouterLink to="/github/session3.html#_3-1-git-reset">git reset</RouterLink> và <RouterLink to="/session3.html#_3-2-git-revert">git revert</RouterLink></p>
<h2 id="_3-1-git-reset" tabindex="-1"><a class="header-anchor" href="#_3-1-git-reset" aria-hidden="true">#</a> 3.1 Git Reset</h2>
<p><code v-pre>git reset</code> được dùng để quay về một điểm commit nào đó, đồng thời xóa lịch sử của các commit trước nó.</p>
<p>Với <RouterLink to="/github/session3.html#vi-du">ví dụ trên</RouterLink> ta có thể quay lại commit B bằng câu lệnh</p>
<div class="custom-container tip"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/><path d="M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/></svg><p class="custom-container-title">TIP</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> reset --hard 06e109
</code></pre></div><ul>
<li><code v-pre>06e109</code>: là chỉ số id của một commit (bạn có thể truy cập vào GitHub để xem id này nhé, trên thực tế có thể nó sẽ rất dài)</li>
</ul>
<p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/github/session3/pic2.1.png?raw=true" alt="Tạo repo GitHub"></p>
</div>
<p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/github/session3/pic2.4.png?raw=true" alt="Tạo repo GitHub"></p>
<div class="custom-container info"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M13 1.188C6.477 1.188 1.188 6.477 1.188 13S6.477 24.813 13 24.813 24.813 19.523 24.813 13c0-6.523-5.29-11.812-11.813-11.812Zm2.459 18.307c-.608.24-1.092.422-1.455.548a3.838 3.838 0 0 1-1.262.189c-.736 0-1.309-.18-1.717-.539a1.74 1.74 0 0 1-.611-1.367c0-.215.015-.435.045-.659a8.23 8.23 0 0 1 .147-.759l.761-2.688c.067-.258.125-.503.171-.731.046-.23.068-.441.068-.633 0-.342-.071-.582-.212-.717-.143-.135-.412-.201-.813-.201-.196 0-.398.029-.605.09-.205.063-.383.12-.529.176l.201-.828c.498-.203.975-.377 1.43-.521a4.225 4.225 0 0 1 1.29-.218c.731 0 1.295.178 1.692.53.395.353.594.812.594 1.376 0 .117-.014.323-.041.617a4.129 4.129 0 0 1-.152.811l-.757 2.68a7.582 7.582 0 0 0-.167.736 3.892 3.892 0 0 0-.073.626c0 .356.079.599.239.728.158.129.435.194.827.194.185 0 .392-.033.626-.097.232-.064.4-.121.506-.17l-.203.827Zm-.134-10.878a1.807 1.807 0 0 1-1.275.492c-.496 0-.924-.164-1.28-.492a1.57 1.57 0 0 1-.533-1.193c0-.465.18-.865.533-1.196a1.812 1.812 0 0 1 1.28-.497c.497 0 .923.165 1.275.497.353.331.53.731.53 1.196 0 .467-.177.865-.53 1.193Z" style="fill:#157ffb;fill-rule:nonzero" transform="translate(-1.257 -1.257) scale(1.0582)"/></svg><p class="custom-container-title">NHẬN XÉT</p>
<p>Sau thi thực hiện câu lệnh ta có thể thấy rằng:</p>
<ul>
<li>Các commit sau B lần lượt là C và D sẽ bị xóa đi và danh sách commit sẽ trở về như lúc vừa commit B xong</li>
<li>Con trỏ hiện tại (HEAD) sẽ quay về commit B, biểu thị B là commit cuối cùng</li>
</ul>
</div>
<h2 id="_3-2-git-revert" tabindex="-1"><a class="header-anchor" href="#_3-2-git-revert" aria-hidden="true">#</a> 3.2 Git Revert</h2>
<p><code v-pre>git revert</code> không làm mất các <code v-pre>commit</code>, thay vào đó sẽ tạo thêm <code v-pre>commit</code> mới, có nội dung giống hệt với <code v-pre>commit</code> bạn muốn quay trở về.</p>
<p>Với <RouterLink to="/github/session3.html#vi-du">ví dụ trên</RouterLink>, ta sẽ thực hiện như sau:</p>
<p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/github/session3/pic3.png?raw=true" alt="Tạo repo GitHub"></p>
<p>Sơ đồ git sau khi Revert sẽ như sau:
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/github/session3/pic3.2.png?raw=true" alt="Tạo repo GitHub"></p>
<div class="custom-container info"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M13 1.188C6.477 1.188 1.188 6.477 1.188 13S6.477 24.813 13 24.813 24.813 19.523 24.813 13c0-6.523-5.29-11.812-11.813-11.812Zm2.459 18.307c-.608.24-1.092.422-1.455.548a3.838 3.838 0 0 1-1.262.189c-.736 0-1.309-.18-1.717-.539a1.74 1.74 0 0 1-.611-1.367c0-.215.015-.435.045-.659a8.23 8.23 0 0 1 .147-.759l.761-2.688c.067-.258.125-.503.171-.731.046-.23.068-.441.068-.633 0-.342-.071-.582-.212-.717-.143-.135-.412-.201-.813-.201-.196 0-.398.029-.605.09-.205.063-.383.12-.529.176l.201-.828c.498-.203.975-.377 1.43-.521a4.225 4.225 0 0 1 1.29-.218c.731 0 1.295.178 1.692.53.395.353.594.812.594 1.376 0 .117-.014.323-.041.617a4.129 4.129 0 0 1-.152.811l-.757 2.68a7.582 7.582 0 0 0-.167.736 3.892 3.892 0 0 0-.073.626c0 .356.079.599.239.728.158.129.435.194.827.194.185 0 .392-.033.626-.097.232-.064.4-.121.506-.17l-.203.827Zm-.134-10.878a1.807 1.807 0 0 1-1.275.492c-.496 0-.924-.164-1.28-.492a1.57 1.57 0 0 1-.533-1.193c0-.465.18-.865.533-1.196a1.812 1.812 0 0 1 1.28-.497c.497 0 .923.165 1.275.497.353.331.53.731.53 1.196 0 .467-.177.865-.53 1.193Z" style="fill:#157ffb;fill-rule:nonzero" transform="translate(-1.257 -1.257) scale(1.0582)"/></svg><p class="custom-container-title">NHẬN XÉT</p>
<p>Sau thi thực hiện câu lệnh ta có thể thấy rằng:</p>
<ul>
<li>Commit B' được tạo ra từ commit B</li>
<li>Commit B sẽ được tái commit với tên gọi là B'</li>
<li>Các commit C và D sẽ không bị xóa đi</li>
<li>Con trỏ HEAD sẽ đứng ở Commit B'</li>
</ul>
</div>
</div></template>
