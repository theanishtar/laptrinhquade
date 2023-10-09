<template><div><p>Trong mô hình <a href="">CSR</a> hay Client-Side-Rendering việc lưu thông tin người dùng thường được xác định thông qua giá trị của Session...</p>
<!-- more -->
<p>Vậy Session là gì và Cookie là thế nào? Sao lại phải cần đến tận hai khái niệm cho một công việc</p>
<p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/backend/session-cookie/banner.png?raw=true" alt=""></p>
<h2 id="khai-niem" tabindex="-1"><a class="header-anchor" href="#khai-niem" aria-hidden="true">#</a> Khái niệm</h2>
<p>Trước hết chúng ta sẽ tìm hiểu về các khái niệm trước và sẽ đi qua từng trường hợp cụ thể nhé!</p>
<h3 id="session" tabindex="-1"><a class="header-anchor" href="#session" aria-hidden="true">#</a> Session</h3>
<p><strong>Session</strong> là một khái niệm quan trọng được sử dụng để theo dõi và quản lý trạng thái của một người dùng trong suốt thời gian họ tương tác với ứng dụng web.</p>
<p><strong>Session</strong> cho phép lưu trữ thông tin tạm thời liên quan đến một người dùng cụ thể giữa các yêu cầu HTTP (các lần truy cập trang web).</p>
<div class="custom-container info"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M13 1.188C6.477 1.188 1.188 6.477 1.188 13S6.477 24.813 13 24.813 24.813 19.523 24.813 13c0-6.523-5.29-11.812-11.813-11.812Zm2.459 18.307c-.608.24-1.092.422-1.455.548a3.838 3.838 0 0 1-1.262.189c-.736 0-1.309-.18-1.717-.539a1.74 1.74 0 0 1-.611-1.367c0-.215.015-.435.045-.659a8.23 8.23 0 0 1 .147-.759l.761-2.688c.067-.258.125-.503.171-.731.046-.23.068-.441.068-.633 0-.342-.071-.582-.212-.717-.143-.135-.412-.201-.813-.201-.196 0-.398.029-.605.09-.205.063-.383.12-.529.176l.201-.828c.498-.203.975-.377 1.43-.521a4.225 4.225 0 0 1 1.29-.218c.731 0 1.295.178 1.692.53.395.353.594.812.594 1.376 0 .117-.014.323-.041.617a4.129 4.129 0 0 1-.152.811l-.757 2.68a7.582 7.582 0 0 0-.167.736 3.892 3.892 0 0 0-.073.626c0 .356.079.599.239.728.158.129.435.194.827.194.185 0 .392-.033.626-.097.232-.064.4-.121.506-.17l-.203.827Zm-.134-10.878a1.807 1.807 0 0 1-1.275.492c-.496 0-.924-.164-1.28-.492a1.57 1.57 0 0 1-.533-1.193c0-.465.18-.865.533-1.196a1.812 1.812 0 0 1 1.28-.497c.497 0 .923.165 1.275.497.353.331.53.731.53 1.196 0 .467-.177.865-.53 1.193Z" style="fill:#157ffb;fill-rule:nonzero" transform="translate(-1.257 -1.257) scale(1.0582)"/></svg><p class="custom-container-title">TÓM LẠI</p>
<p>Nói rõ hơn thì <strong>Session</strong> chính là một vùng nhớ của <a href="">Server</a> và vùng nhớ này chỉ mất đi khi chạy lại Server hoặc bị xóa đi do hết hạn.</p>
</div>
<p>Sau đây là một số thuộc tính của Session. Chỉ một số thôi nhé (vì nó khá nhiều và bạn hoàn toàn có thể tìm hiểu thêm).</p>
<table>
<thead>
<tr>
<th>Session ID (Session Identifier)</th>
<th>Thời Gian Tồn Tại (Session Timeout)</th>
<th>Path</th>
<th>Domain</th>
<th>Session Cluster</th>
</tr>
</thead>
<tbody>
<tr>
<td>Đây là một giá trị duy nhất được sử dụng để xác định session cụ thể. Session ID thường được tạo ngẫu nhiên và được gắn vào mỗi session để máy chủ có thể nhận biết session của người dùng. Session ID thường được lưu trữ trong cookie hoặc trong URL.</td>
<td>Đây là khoảng thời gian mà một session sẽ tồn tại sau khi người dùng cuối cùng tương tác với trang web. Khi thời gian này hết, session sẽ bị hủy và thông tin trong session bị xóa.</td>
<td>Path xác định đường dẫn trên trang web mà session cookie áp dụng. Chỉ các yêu cầu đến các đường dẫn này mới gửi cookie session đi cùng.</td>
<td>Domain xác định tên miền mà session cookie áp dụng. Nếu không xác định, cookie session chỉ áp dụng cho tên miền của trang web hiện tại.</td>
<td>Nếu ứng dụng của bạn hoạt động trên một môi trường có nhiều máy chủ, session cluster cho phép bạn chia sẻ session data giữa các máy chủ, đảm bảo tính nhất quán trong trạng thái của người dùng.</td>
</tr>
</tbody>
</table>
<h3 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie" aria-hidden="true">#</a> Cookie</h3>
<p><strong>Cookie</strong> là một vùng nhớ được lưu trong <strong>Browser</strong> (<em>Chorme, Cốc Cốc, Edge,...</em>). <strong>Cookie</strong> cũng giống như <em>local storage</em> hay <em>ssession storage</em> điều khác biệt lớn nhất là <strong>Cookie</strong> có thể tự xóa đi nếu vượt quá thời hạn cho phép của nó.</p>
<p>Ví dụ: Mình tạo một <strong>Cookie</strong> có tên là <mark>dangdepzai</mark> và <em>set</em> thời gian tồn tại của nó là <mark>20m</mark>. Thì sau đúng 20 phút nó sẽ bị xóa khỏi trình duyệt.</p>
<p>Sau đây là một số thuộc tính của <strong>Cookie</strong>. Chỉ một số thôi nhé (vì nó khá nhiều và bạn hoàn toàn có thể tìm hiểu thêm).</p>
<table>
<thead>
<tr>
<th>Tên (Name)</th>
<th>Giá Trị (Value)</th>
<th>Thời Gian Tồn Tại (Expires hoặc Max-Age)</th>
<th>Path</th>
<th>Domain</th>
</tr>
</thead>
<tbody>
<tr>
<td>-ây là tên của cookie, được sử dụng để xác định cookie khi nó được gửi giữa máy chủ và trình duyệt. Tên cookie phải là duy nhất trong mỗi tên miền.</td>
<td>Đây là dữ liệu được lưu trữ bên trong cookie. Giá trị này có thể là bất kỳ dữ liệu nào bạn muốn lưu trữ, ví dụ: thông tin đăng nhập, giỏ hàng mua sắm, hoặc cài đặt ngôn ngữ.</td>
<td>Thuộc tính này xác định thời gian mà cookie sẽ tồn tại trên máy tính của người dùng. Cookie có thể được đặt để tồn tại trong một khoảng thời gian cố định (Expires) hoặc tồn tại trong một số giây tính từ thời điểm tạo (Max-Age). Khi thời gian này hết, cookie sẽ bị xóa.</td>
<td>Path xác định đường dẫn trên trang web mà cookie áp dụng. Cookie chỉ được gửi trong các yêu cầu đến các đường dẫn này.</td>
<td>Domain xác định tên miền mà cookie áp dụng. Nếu không xác định, cookie áp dụng cho tên miền của trang web hiện tại.</td>
</tr>
</tbody>
</table>
<h2 id="vi-du-ve-web-mua-thit" tabindex="-1"><a class="header-anchor" href="#vi-du-ve-web-mua-thit" aria-hidden="true">#</a> Ví dụ về Web mua thịt</h2>
<blockquote>
<p>OK Vậy là chúng ta đã hiểu về Session và Cookie bây giờ mình sẽ cùng nhau giải quyết các vấn đề sau nhé!</p>
</blockquote>
<hr>
<p><strong>Bước 1</strong>. Mình truy cập vào một website mua thịt lợn, có tên là <a href="">webconlon.com</a> và tiến hành đăng nhập với thông tin như sau:</p>
<table>
<thead>
<tr>
<th>Họ và tên</th>
<th>Username</th>
<th>Password</th>
</tr>
</thead>
<tbody>
<tr>
<td>Trần Hữu Đang</td>
<td><strong>dangdepzai</strong></td>
<td><em>vodichvutru</em></td>
</tr>
</tbody>
</table>
<p><strong>Bước 2</strong>. Khi đăng nhập xong mình mua 2kg thịt vai lợn và tiến hành thanh toán như bình thường.</p>
<table>
<thead>
<tr>
<th>Tên sản phẩm</th>
<th>Số lượng</th>
<th>Thành tiền</th>
</tr>
</thead>
<tbody>
<tr>
<td>Vai lon <em>(thịt vai lợn)</em></td>
<td><strong>2kg</strong></td>
<td><em>200.000 VNĐ</em></td>
</tr>
<tr>
<td>Ma lon <em>(thịt má lợn)</em></td>
<td><strong>1kg</strong></td>
<td><em>90.000 VNĐ</em></td>
</tr>
</tbody>
</table>
<p><strong>Bước 3</strong>. Khi mua hàng xong, mình bấm vào nút <em><strong>Đăng xuất</strong></em></p>
<hr>
<blockquote>
<p>Nếu bạn là một lập trình viên, bạn sẽ làm thế nào để biết là ai đang đăng nhập ở bước số 1 và ai đặt hàng ở bước số 2 ?</p>
</blockquote>
<div class="custom-container tip"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/><path d="M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/></svg><p class="custom-container-title">MẸO</p>
<p>Nếu bạn hiểu về Session thì có lẻ bạn trả lời được ngay rằng <mark>Ta sẽ lưu dữ liệu User vào Session</mark> và các <strong>Request</strong> sau đó <em>(mua hàng, đăng xuất)</em> ta cứ việc lấy Session đó ra.</p>
</div>
<p>Đúng! rất đúng, nhưng có bao giờ bạn tự hỏi rằng vì sao Server có thể biết được Session nào sẽ lưu dữ liệu của User nào hay chưa ?</p>
<p>Bạn hiểu như này nhé, khi hệ thống chúng ta được đưa ra cho mọi người sử dụng sẽ có rất nhiều người mua sắm cùng lúc:</p>
<table>
<thead>
<tr>
<th>Họ và tên</th>
<th>Username</th>
<th>Password</th>
</tr>
</thead>
<tbody>
<tr>
<td>Trần Hữu Đang</td>
<td><strong>dangdepzai</strong></td>
<td><em>vodichvutru</em></td>
</tr>
<tr>
<td>Đỗ Đạt Cao</td>
<td><strong>datcao123</strong></td>
<td><em>passwordxyz</em></td>
</tr>
<tr>
<td>Mai Thanh Toán</td>
<td><strong>thanhtoancc</strong></td>
<td><em>password12</em></td>
</tr>
</tbody>
</table>
<p>Bạn thấy đấy, nếu cùng một lúc tất cả các người dùng trên thực hiện mua hàng, thì Server làm sao có thể biết được ai đang mua?</p>
<details class="custom-container details"><summary>🤔 Vậy rốt cuộc làm sao Server có thể biết được ai đang đăng nhập và dùng chức năng ?</summary>
<ul>
<li>Đó là nhờ vào <strong>Cookie</strong> và cơ chế <em>response</em> <mark>SESSIONID</mark> tự động của mọi Server.</li>
<li>Điều này được thực thi một các tự động nên nếu không tìm hiểu bạn sẽ không thể nhận ra. <em>(Cơ chế này hoàn toàn có thể tắt đi bởi các cấu hình phía server)</em></li>
</ul>
</details>
<h2 id="qua-trinh-thuc-thi" tabindex="-1"><a class="header-anchor" href="#qua-trinh-thuc-thi" aria-hidden="true">#</a> Quá trình thực thi</h2>
<p>Cơ chế trên được thự thi tự động hết sức đơn giản như sau:</p>
<h3 id="đang-nhap-va-luu-thong-tin" tabindex="-1"><a class="header-anchor" href="#đang-nhap-va-luu-thong-tin" aria-hidden="true">#</a> Đăng nhập và lưu thông tin</h3>
<ul>
<li>Ở bước 1 client sẽ gửi thông tin gồm (Username và Password) lên Server
<ul>
<li>Server tiến hành kiểm tra trong DB. Nếu có sẽ trả về thông báo <em>đăng nhập thành công!</em> cùng lúc đó sẽ tiến hành lưu thông tin User vào một <strong>Session</strong> <em>(có thông tin như bảng bên dưới)</em>.</li>
</ul>
</li>
</ul>
<table>
<thead>
<tr>
<th>SESSIONID</th>
<th>Name</th>
<th>Value</th>
<th>Expires</th>
</tr>
</thead>
<tbody>
<tr>
<td>527735892654</td>
<td>CurrentUser</td>
<td>là một Object hoặc Json chứa thông tin User vừa đăng nhập</td>
<td>10h</td>
</tr>
</tbody>
</table>
<ul>
<li>
<ul>
<li>Lúc này Server sẽ tự động gửi một <strong>Response</strong> về cho <strong>Browser</strong> chứa thông tin về SESSIONID của Session vừa tạo.</li>
</ul>
</li>
<li>
<p>Browser sẽ lưu SESSIONID đó vào trong <strong>Cookie</strong> <em>(có thông tin như bảng bên dưới)</em>. và các Request sau cứ việc gửi kèm SESSIONID thì Server sẽ biết được User đó là ai.</p>
</li>
</ul>
<table>
<thead>
<tr>
<th>Name</th>
<th>Value</th>
<th>Expires</th>
</tr>
</thead>
<tbody>
<tr>
<td>SESSIONID</td>
<td>527735892654</td>
<td>10h</td>
</tr>
</tbody>
</table>
<h3 id="xac-đinh-user-thong-qua-sessionid" tabindex="-1"><a class="header-anchor" href="#xac-đinh-user-thong-qua-sessionid" aria-hidden="true">#</a> Xác định User thông qua SESSIONID</h3>
<ul>
<li>Ở bước số 2 ta sẽ cần lấy ra <strong>Session</strong> đó <em>(Server sẽ lấy SESSIONID có trong phần Header của Request)</em> và so sánh với dữ liệu được lưu trên <strong>Server</strong>.</li>
</ul>
<blockquote>
<p>Việc này sẽ xảy ra tự động, việc bạn cần làm là lấy Session từ Request là được!</p>
</blockquote>
<h3 id="xoa-thong-tin-user-khoi-server" tabindex="-1"><a class="header-anchor" href="#xoa-thong-tin-user-khoi-server" aria-hidden="true">#</a> Xóa thông tin User khỏi Server</h3>
<ul>
<li>Và tương tự như vậy ở bước số 3 việc chúng ta cần làm là Xóa Session đó khỏi <strong>Server</strong></li>
</ul>
<blockquote>
<p>Lưu ý: Các dữ liệu trên là mình mô phỏng thôi, trên thực tế sẽ còn nhiều dữ liệu hơn</p>
</blockquote>
<p>Nếu vẫn chưa hiểu thì tham khảo ảnh sau đây:</p>
<p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/backend/session-cookie/jshgvrr.png?raw=true" alt=""></p>
<h2 id="tong-ket" tabindex="-1"><a class="header-anchor" href="#tong-ket" aria-hidden="true">#</a> Tổng kết</h2>
<p>Đó là toàn bộ nội dung mình muốn chia sẽ, các bạn có thể để lại bình luận phía dưới 👇. Và hoàn toàn có thể góp ý nếu bài viết mình còn chưa đúng.</p>
<p>Cảm ơn các bạn! Chúc các bạn một ngày tốt lành!</p>
</div></template>
