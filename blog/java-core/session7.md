<!-- ---
layout: Post
title: Bài 7. Phương thức trong Java
subtitle: Lập trình Java căn bản
author: Theanishtar
date: 2023-06-08
useHeaderImage: false
headerImage: https://github.com/dangtranhuu/images/blob/main/angurvad/java-core/session7/banner.png?raw=true
headerMask: rgba(30, 69, 110, 0.61)
permalinkPattern: /ebook/java/java-core/:slug/
tags:
  - Java Core
---

Phương thức là cấu trúc chương trình thú vị do chính bản thân ta có thể xây dựng được. Cùng mình tìm hiểu về **Phương thức** nhé!! -->

<!-- more -->

<!-- Trong các bài học về [Mảng](/post/2023/06/05/java-core-session5/) hay [Chuỗi](/post/2023/06/05/java-core-session6/) chúng ta đã được biết về phương thức tính độ dài là Length. Vậy **phương thức** là gì và hoạt động như thế nào ? -->

# Bài 7. Phương thức
## 1. Khái niệm

**Methods** (*phương thức*) : là một tập hợp các câu lệnh để xử lý một số tác vụ cụ thể và trả lại phản hồi cho nơi đã gọi phương thức. Các **phương thức** cho phép chúng ta viết mã có thể tái sử dụng và chia chương trình của chúng ta thành một số đơn vị công việc nhỏ. Phương thức Java thúc đẩy mã sạch và dễ đọc hơn.
> Với các ngôn ngữ lập trình khác như: **C**, **C++**, **JavaScript** thì phương thức còn được gọi là **Function** (*hàm*)

Nói toàn định nghĩa thì khô khan lắm, cùng mình tìm hiểu cụ thể qua mỗi bài tập về phương thức nhá...

## 2. Khai báo

### Phương thức không có dữ liệu trả về

```java
public class DangHocJava {

	public static void say(String s) {
		System.out.println("Say: " + s);
	}
	
	public static void main(String[] args) {
		String hel = "Hello";
		say(hel);
	}
	
}

// Output: Say: Hello 
```
Những phương thức có từ **void** là những phương thức không có dữ liệu trả về. 

Bạn có thể gọi các phương thức này như một câu lệnh bình thường.

:::details Bonus
- Như các bạn có thể thấy, ở trên mình đề cập tới từ khóa **static** phía trước tên phương thức (say). Nói nôm na là **static** giúp cho ta có thể gọi phương thức đó trong bất kì phương thức nào
:::

### Phương thức có dữ liệu trả về


```java
public class DangHocJava {

	public static int sum(int a, int b) {
		return a + b;
	}
	
	public static void main(String[] args) {
		System.out.println("Sum: " + sum(3, 8));
	}
	
}
// Output: Sum: 11 
```

Những phương thức có các từ khóa biểu thị kiểu dữ liệu phía trước như **int, float, double, String, char, ...** là những phương thức có dữ liệu trả về. 

Bạn có thể xem các phương thức này như một [biến](/post/2023/06/02/java-core-session2/#_3-bien) lưu giá trị.

## 3. Tham số và đối số trong phương thức

### Tham số

Tham số là những giá trị được định nghĩa sẵng trong phương thức, nằm trong dấu ==()== và cách nhau bởi dấu ==,==. Phía trước tham số sẽ chứa kiểu dữ liệu.

```java
public static int sum(int a, int b) {
	return a + b;
}
// Các tham số gồm: a và b ⟹ (int a, int b)
```

### Đối số

Đối số là những câu lệnh dùng truyền dữ liệu vào phương thức, do người gọi phương thức truyền vào

```java
int a = sum(3,5);

// Các đối số gồm: 3 và 3 ⟹ (3, 5)
```

:::details Bonus
Quá trình đặt các đối số vào phương thức gọi là **_Truyền tham số_**
:::

## 4. Giá trị trả về

Mình đã nói các phương thức có dữ liệu trả về sẽ mang dữ liệu như một biến. Vậy cụ thể giá trị đó được xác định như lào ?

Để biết phương thức trả về giá trị gì bạn chỉ cần xem *kiểu dữ liệu* được khai báo trước tên phương thức nha.

Trong lúc xây dựng, bạn có thể trả về giá trị cho phương thức bất cứ lúc nào bằng lệnh **_"return"_**

```java
public static String fullname(String firstname, String lastname){
	return firstname + " " + lastname;
}
	fullname("Tran", "Huu Dang");
// Output: "Tran Huu Dang"
```

Phương thức sẽ **_dừng_** và **_trả về giá trị_** ngay lặp tức khi thấy lệnh ==return==

:::details Bonus
- Các lệnh sau return là vô nghĩa vì vậy Java sẽ báo lỗi nếu sau return là một lệnh khi return không nằm trong IF
- Cái này bạn nào tư duy tốt sẽ hiểu, còn không cứ nghiền ngẫm nhá 😭
:::

## 5. Phạm vi của biến

Vấn đề này làm nhiều bạn sẽ nhớ. Chỉ cần nhớ ngắn gọn là *Biến nằm trong cặp dấu {} thì chỉ dùng được phía trong cặp dấu đó*

Ngoài ra thì có những từ khóa như *public*, *private* có thể cấu hình được phạm vi của biến trong một [lớp]() (*mình sẽ giới thiệu trong bài viết sau*)

## 6. Hàm đệ quy 

Đệ quy là một khái niệm về ngôn ngữ lập trình đang được sử dụng vô cùng phổ biến hiện nay. Có thể hiểu về đệ quy chính là hàm tự gọi chính nó. Theo đó, các đối tượng muốn được gọi là đệ quy thì nó hay một phần của nó phải thông qua khái niệm về chính nó

*Chưa hiểu hả 😆😆. Xem ảnh sau và suy ngẫm nhen...*

![b29.gif](https://github.com/dangtranhuu/images/blob/main/angurvad/java-core/session7/01-12-45-30-b29.gif?raw=true)

> 😭 Đệ quy rất khó để hiểu, và cách duy nhất để làm tốt nó là ==thực hành thật nhiều với nó==.


### Thành phần trong hàm đệ quy gồm những gì?
- Đối với phần cơ sở: Đây chính là điều kiện để có thể thoát phần đệ quy. Nếu như thiếu đi nó thì hàm đệ quy sẽ luôn gây ra vấn đề tràn khỏi bộ nhớ Stack.

- Đối với phần đệ quy: Đối với phần này thì ở thân hàm sẽ có chứa đệ quy, nó được thực hiện đến khi thỏa mãn được điều kiện ở phần trên.

### Các ưu điểm, hạn chế và điều kiện để thực hiện đệ quy

#### Ưu điểm của đệ quy
- Chương trình đệ quy thường dễ hiểu, không phức tạp

- Người dùng có thể làm được nhiều thao tác để tính toán bằng 1 đoạn chương trình dễ hiểu

- Có thể giải nghĩa được tập hợp vô hạn những đối tượng qua các hữu hạn được phát biểu.
#### Về nhược điểm của đệ quy
- Chương trình này bị tiêu tốn khá nhiều dung lượng

- Hoạt động chậm

### Để viết được đệ quy cần đảm bảo yếu tố gì?
Các yếu tố cơ bản để có thể viết đệ quy như sau:

- Các vấn đề cần phải xử lý được giải quyết bằng đệ quy
Ngôn ngữ sử dụng để viết chương trình cần phải có sự hỗ trợ đệ quy ( hỗ trợ hàm)

- Cần hạn chế việc khai báo biến, hàng nằm trong hàm đệ quy nếu như nó không quan trọng.

### Ứng dụng cụ thể của Đệ quy


:::details Tính tổng từ 1 đến n

```java
  public class Demo {
    static int sum1toN(int n){
        if(n == 0){
            return 0;
        }
        int result = n + sum1toN(n-1); //nên sử dụng thêm biến để debug tốt
        return result;
    }
  
    public static void main(String[] args) {
        int result = sum1toN(5);//nên sử dụng thêm biến này để debug tốt
        System.out.println(result);
    }
  }
  // output : 15
  ```
:::



:::details Tính giai thừa

  ```java
  public class Demo {
    static int factorial(int n){
        if(n == 1){
            return 1;
        }
        int result = n * factorial(n-1); //khai báo biến thêm để dễ debug
        return result;
    }
  
    public static void main(String[] args) {
        int result = factorial(5); //khai báo biến thêm đễ dễ debug
        System.out.println(result);
    }
  }
  //Output : 120
  ```
:::


:::details Tính dãy fibonacci
```java
  public class Demo {
    static int fibonacci(int n){
        if(n == 1 || n == 2){
            return 1;
        }
        int result = fibonacci(n-1) + fibonacci(n-2); //khai báo biến thêm đễ dễ debug 
        return result;
    }
    public static void main(String[] args) {
        int result = fibonacci(7); //khai báo biến thêm đễ dễ debug
        System.out.println(result);
    }
  }
  // Output : 13
  ```

:::