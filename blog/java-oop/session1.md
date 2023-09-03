<!-- ---
layout: Post
title: Giới thiệu về lập trình hướng đối tượng trong Java
subtitle: Lập trình hướng đối tượng với Java
author: Theanishtar
date: 2023-06-09
useHeaderImage: false
headerImage: /img/in-post/2020-10-07/header.jpg
headerMask: rgba(30, 69, 110, 0.61)
permalinkPattern: /ebook/java/java-oop/:slug/
tags:
  - Java OOP
---

Hướng đối tượng là phương pháp lập trình phổ biến nhất hiện nay!!! Cùng mình tìm hiểu về OOP trog bài viết này nhé  -->
<!-- more -->

# Bài 1. Lập trình hướng đối tượng
## 1. Khái niệm

==OOP== là viết tắt của **Object-Oriented Programing** (*Lập trình hướng đối tượng*), nó cấu trúc code phân chia theo **Classes** → **Objects** → **Attributes** → **Methods**

## 2. Phân biệt lập trình cấu trúc và hướng đối tượng

### Lập trình cấu trúc là gì

Cách viết code trước đây (sử dụng các hàm trong một file duy nhất) là lập trình theo hướng cấu trúc.

Bạn có thể thấy khi viết code theo kiểu này sẽ không có sự liên kết giữa các file trong một thư mục vì vậy code sẽ không tối ưu và phải viết rất nhiều.

### Tại sao hướng đối tượng có ưu thế hơn

So với lập trình cấu trúc thì hướng đối tượng sẽ: 
- Nhanh hơn và dễ hơn

- Cấu trúc rõ ràng dễ hiểu, dễ bảo trì, sửa lỗi

- Có thể tái sử dụng giúp thời gian phát triển code ngắn hơn

## 3. Lập trình hướng đối tượng

![object-class-diagrame-1.png](https://github.com/dangtranhuu/images/blob/main/angurvad/java-oop/session1/Picture4.png?raw=true)

Nhìn ảnh trên có lẽ bạn đã hiểu khá tổng quát về hướng đối tượng rồi

Mình sẽ nói theo cách mình hiểu nhé:
:::details  <b>Object</b> <i>(đối tượng)</i>
- Object là một đối tượng cụ thể (ở đây là Mèo Crosby)
- Đối tượng phải là cụ thể nhé, nghĩa là phải rõ ràng 1 đối tượng nào đó chứ các đối tượng như **Dog** *(chó)*, **Tree** *(cây cối)* là các [lớp]() vì nó không chỉ rõ một sự vật nào cả mà nói chung chung
:::

:::details <b>Attribute</b> <i>(thuộc tính)</i> 
- Là các thuộc tính của đối tượng (thường là danh từ)
	- Tên: Crosby
	- Tuổi: 3
	- Giới tính: cái
	- Màu mắt: đen vàng
- Lưu ý: Các thuộc tính này là thuộc tính của đối tượng Cat Crosby bên trên
:::

:::details <b>Methods</b>  <i>(phương thức)</i> 
- Methods là các phương thức của đối tượng (thường là động từ)
	- Chạy: 
	- Bắt chuột:
	- Kêu: Meow-meow
- Lưu ý: Các phương thức này là phương thức của đối tượng Cat Crosby bên trên
:::

:::details <b>Classes</b> <i>(lớp)</i> 
- Classes là một lớp (gồm nhiều đối tượng)
	- Đối tượng: Bronson
	- Đối tượng: Chester
	- Đối tượng: Bobby
- Lưu ý: các lớp là gồm nhiều các đối tượng Cat bên trên
- Có thể gọi đây là "lớp Cat" chứa các đối tượng Bronson, Chester, Bobby 
:::

### Ví dụ: 
Lớp Hoa gồm: hoa lan, hoa hồng, hoa cẩm tú cầu, ...

Lớp Động vật gồm: heo, chó, gà, dê, ...

Lớp Người đẹp trai gồm: Trần Đang, Hữu Đang, Đang Trần, ...

## 4. Biểu diễn bằng code

Nãy giờ chỉ là lý thuyết thôi *(dài mún chét 😭)* và bây giờ là vào code nhá

Bây giờ chúng ta cùng nhau xây dựng các đối tượng, lớp, phương thức và thuộc tính bằng code Java nhé

### Tạo project

Đầu tiên các bạn tạo **_project_** và các **_packages_** như hình sau nhé
![object-class-diagrame-1.png](https://github.com/dangtranhuu/images/blob/main/angurvad/java-oop/session1/create-project.png?raw=true)

Giải thích: 
- **_javaoop.objects_** sẽ chứa các đối tượng trong project
- **_javaoop.main_** sẽ chứa phương thức main để hạy cương trình

### Tạo lớp đối tượng

Tạo một Java Class trong package **_javaoop.objects_**, ví dụ ở đây mình tạo lớp *Cat*

- Lưu ý: tên lớp phải viết hoa chữ đầu tiên nha ==Cat.java==

![object-class-diagrame-1.png](https://github.com/dangtranhuu/images/blob/main/angurvad/java-oop/session1/create-obj.png?raw=true)

### Tạo thuộc tính cho đối tượng

Các bạn tạo thuộc tính giống như tạo biến vậy nha 
```java
public class Cat {
    String name = "Crosby";         // thuộc tinh tên
    int age = 3;                    // thuộc tính tuổi
    String eyesColor = "Đen vàng";  // thuộc tính màu mắt
}
```

### Tạo phương thức cho đối tượng
Các bạn tạo phương thức phía dưới thuộc tính 
```java
public class Cat {
    public String name = "Crosby";         // thuộc tinh tên
    public int age = 3;                    // thuộc tính tuổi
    public String eyesColor = "Đen vàng";  // thuộc tính màu mắt
    
    // phương thức bắt chuột
    public void mice(){
        System.out.println("Mèo đang bắt chuột");
    }
    
	 // phương thức kêu
    public void squeaks(){
        System.out.println("Meow meow !!!");
    }
}
```

:::details Giải thích về <b>public</b>
- Từ khóa **public** giúp mình có thể gọi trực tiếp thuộc tính trong lớp khác
:::

### Tạo đối tượng từ lớp khác 

Đầu tiên mình sẽ tạo lớp Main bên package **_javaoop.main_** nhé

![object-class-diagrame-1.png](https://github.com/dangtranhuu/images/blob/main/angurvad/java-oop/session1/createmain.png?raw=true)

```java
public class Main {
    public static void main(String[] args) {
        // viết code ở đây
    }
}
```

#### Gọi lại đối tượng
```java
public class Main {
    public static void main(String[] args) {
        // khởi tạo đối tượng Cat bằng cách gọi từ lớp Cat
        Cat cat1 = new Cat();
    }
}
```

#### Xuất giá trị thuộc tính
Bên Cat hiện đã có giá trị mặc định cho các thuộc tính
- name = Crosby        
- age = 3                  
- eyesColor = Đen vàng

chúng ta có thể xuất ra xem thử nhé
```java
public class Main {
    public static void main(String[] args) {
        // khởi tạo đối tượng Cat bằng cách gọi từ lớp Cat
        Cat cat1 = new Cat();
        
        System.out.println("tên mèo là: " + cat1.name);
    }
}
// Output: tên mèo là: Crosby
```

> Các bạn nhớ để đặc tả **public** phía trước thuộc tính nha, không thôi lỗi đó 

#### Gọi phương thức của đối tượng

Bên Cat hiện đã có các phương thức
- mice(): phương thức bắt chuột     
- squeaks(): phương thức kêu

```java
public class Main {
    public static void main(String[] args) {
        // khởi tạo đối tượng Cat bằng cách gọi từ lớp Cat
        Cat cat1 = new Cat();
        
        cat1.mice();
        cat1.squeaks();
    }
}
/* Output:
		Mèo đang bắt chuột
		Meow meow !!!
*/
```