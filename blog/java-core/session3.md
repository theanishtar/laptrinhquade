<!-- ---
layout: Post
title: Bài 3. Cấu trúc rẽ nhánh trong Java
subtitle: Lập trình Java căn bản
author: Theanishtar
date: 2023-06-04
useHeaderImage: false
headerImage: https://github.com/dangtranhuu/images/blob/main/angurvad/java-core/session3/banner.png?raw=true
headerMask: rgba(39, 71, 77, 0.61)
permalinkPattern: /ebook/java/java-core/:slug/
tags:
  - Java Core
---

IF ELSE thì ngôn ngữ nào cũng có, mà không biết trong Java có khác gì không ta 🤔 -->

<!-- more -->
# Bài 3. Cấu trúc rẽ nhánh
## Câu lệnh điều kiện

Trong các ngôn ngữ thì luôn luôn có cái này, mình sẽ không nhiều mà đi thẳng đến chi tiết

Có **2** loại câu điều kiện :

- **if..else** : xem [tại đây](https://www.youtube.com/watch?v=h3fgxLlmnUQ)
- **switch..case** : xem [tại đây](https://www.youtube.com/watch?v=IgNvSHjWxfY)

---

## 1. Lệnh if..else

Nó cũng giống như các ngôn ngữ khác thôi, **if** là nếu, **else if** là còn nếu, **else** là các trường hợp còn lại, cụ thể sau đây : 

- Sử dụng **if** để xác định điều kiện **đúng** để thực thi
- Sử dụng **else if** để xác định các điều **đúng** tiếp theo kiểm tra, sau khi **if** sai
- Sử dụng **else** để xác định các điều kiện **sai**

```java
int date = 2; 
if(date == 2){
   System.out.println("Date của bạn là 2");
}
else if(date == 3){
   System.out.println("Date của bạn là thứ 3");
}
else{
   System.out.println("Date của bạn khác mọi cái trên");
}
// output : Date của bạn là 2
```

 Có 1 loại kiểu rút gọn của **if..else** là **toán tử 3 ngôi** (*có thể tham khảo*), có cú pháp :

 Biến **=** (điều kiện ) **?** Thực thi  **true** **:** Thực thi **false** **;**

**Dạng** [if..else]() : 

```java
int date = 2;
if(date == 2)
   System.out.println("Date là thứ 2");
else
   System.out.println("Date không phải là thứ 2")
// Output : Date là thứ 2
 ```

 **Dạng** [toán tử 3 ngôi]() : 
 
 ```java
 nt date = 2;
String result = (date == 2) ? "Date là thứ 2" : "Date là thứ 2";
System.out.println(result);
// Output : Date là thứ 2
```

---

## 2. Lệnh switch..case

Nó cũng tương đương với **if..else**, nhưng nếu bạn đặt điều kiện chỉ so sánh với **giá trị nguyên** thì đây sẽ thích hợp cho bạn như sau;

```java
int date = 3;
switch(date){
   case 1 : "Date là 1"; break;
   case 2 : "Date là 2"; break;
   case 3 : "Date là 3"; break;
   case 4 : "Date là 4"; break;
default:
   "Các Date còn lại";
   break;
}
// output : Date là 3
```
::: warning
 🚀 Như bạn có thể thấy thì **switch..case** có những lưu ý sau :

 - Các **case** là trường hợp của biến **date** và chỉ chấp nhận **số nguyên**
 - Cuối **case** phải có **break** để thoát vòng điều kiện
 - **default** tương ứng với **else** là các trường hợp còn lại
 - Có thể gộp nhiều **case** lại, như **case 1,2,3:**
:::

## 3. Bài tập 
Cùng mình giải quyết các bài tập sau nhé, để hiệu quả hơn bạn nên code trước rồi quay lại xem kết quả có giống mình không nha
### If..Else
#### Kiểm tra số N nhập từ bàn phím là số âm hay dương.
::: details Cách 1: Sử dụng If..Else lồng nhau 
``` java
public class CauLenhReNhanh {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("a = ");
        int a = sc.nextInt();

        // CACH 1: IF ELSE LONG NHAU
        if (a > 0) {
            System.out.println(a + " la so duong");
        } else {
            // a <= 0
            if (a < 0) {
                System.out.println(a + " la so am");
            } else {
                System.out.println(a + " la so 0!");
            }
        }
    }
}
```
:::


::: details Cách 2: Sử dụng If..Else if..Else 
``` java
public class CauLenhReNhanh {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("a = ");
        int a = sc.nextInt();

        // CACH 1: IF ELSE LONG NHAU
        //if = nếu; else = ngược lại; elseif = ngược lại nếu
        if (a > 0) {
            System.out.println(a + " la so duong");
        } else if (a == 0) {
            System.out.println(a + " la so 0!");
        } else {
            System.out.println(a + " la so am");
        }
    }
}
```
:::

#### Kiểm tra số chẵn hay số lẻ

:::details Bài giải
```java
public class KiemTraSoChanLe {
    public static void main(String[] args) {
        int n = 10;
        if(n%2==0)
        {
            System.out.println("Đây là số chẵn!");
        }
        else
        {
            System.out.println("Đây là số lẻ!");
        }
    }
}
```
:::


#### Kiểm tra năm nhuận
:::details Bài giải
```java
import java.util.Scanner;
public class NamNhuan {
    public static void main(String[] args) {
        int year;
        Scanner scan = new Scanner(System.in);
        System.out.println("Nhập vào năm bạn cần kiểm tra:");
        year = scan.nextInt();
        scan.close();
        boolean isLeap = false;
        if(year % 4 == 0)//chia hết cho 4 là năm nhuận
        {
            if( year % 100 == 0)
            //nếu vừa chia hết cho 4 mà vừa chia hết cho 100 thì không phải năm nhuận
            {
                if ( year % 400 == 0)//chia hết cho 400 là năm nhuận
                    isLeap = true;
                else
                    isLeap = false;//không chia hết cho 400 thì không phải năm nhuận
            }
            else//chia hết cho 4 nhưng không chia hết cho 100 là năm nhuận
                isLeap = true;
        }
        else {
            isLeap = false;
        }
        if(isLeap==true)
            System.out.println(year + " là năm nhuận.");
        else
            System.out.println(year + " không phải là năm nhuận.");
    }
}
```
:::

### Switch..Case
#### Đọc số từ 0 đến 10
Nhập vào số a, nếu 0<=a<=10 xuất ra phát âm của số đó, ngược lại xuất ra "khong doc duoc"
::: details Bài giải
``` java
public class CauLenhReNhanh {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a;

        System.out.print("a = ");
        a = sc.nextInt();

        //nhập vào số a, nếu 0<=a<=10 xuất ra phát âm của số đó, ngược lại xuất ra "khong doc duoc"
        switch (a) {
            case 0:
                System.out.println("Khong");
                break;
            case 1:
                System.out.println("Mot");
                break;
            case 2:
                System.out.println("Hai");
                break;
            case 3:
                System.out.println("Ba");
                break;
            case 4:
                System.out.println("Bon");
                break;
            case 5:
                System.out.println("Nam");
                break;
            case 6:
                System.out.println("Sau");
                break;
            case 7:
                System.out.println("Bay");
                break;
            case 8:
                System.out.println("Tam");
                break;
            case 9:
                System.out.println("Chin");
                break;
            case 10:
                System.out.println("Muoi");
                break;
            default:
                System.out.println("Khong doc duoc");
        }
    }
}
```
:::



## Video bài giảng
----
<!-- https://youtu.be/TZ7O5JL35zk -->
<iframe width="100%" height="450" src="https://www.youtube.com/embed/TZ7O5JL35zk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

