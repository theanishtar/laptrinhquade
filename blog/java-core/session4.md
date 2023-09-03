<!-- ---
layout: Post
title: Bài 4. Vòng lặp trong Java
subtitle: Lập trình Java căn bản
author: Theanishtar
date: 2023-06-05
useHeaderImage: false
headerImage: https://github.com/dangtranhuu/images/blob/main/angurvad/java-core/session4/banner.png?raw=true
headerMask: rgba(30, 69, 110, 0.61)
permalinkPattern: /ebook/java/java-core/:slug/
tags:
  - Java Core
---

Cùng mình tìm hiểu về vòng lặp **for, forEach, while và do while** trong Java nha ^^ -->

<!-- more -->

# Bài 4. Vòng lặp

# Vòng lặp

Cũng như bài [Điều kiện](), thì đây là một vấn đề có trong mọi ngôn ngữ lập trình.

*Vậy vòng lặp là gì?*

> **Vòng lặp là cấu trúc lặp đi lặp lại một biểu thức nào đó đến khi nào điều kiện dừng là sai**
>
> **Vòng lặp dùng để làm một vấn đề gì đó lặp đi lặp lại**

Có các kiểu vòng lặp sau :

- **while**
- **do..while**
- **for**
- **for..Each**

---

## 1. Vòng lặp **while**

Như mọi ngôn ngữ đây là vòng lặp lại lặp lại miễn điều kiện là **true**, sẽ thoát khi điều kiện là **false**

**Ví dụ** : 

```java
int i = 0;
while (i < 4){
	System.out.print(i + " ");
	i++; //có này để dần dẫn cho điều kiện thành false
}
// output : 0 1 2 3
```

---

## 2. Vòng lặp **do..while**

Đây là một biến thể của vòng lặp **while**, sẽ thực hiện trước một lần với lệnh **do** và sau đó kiểm tra điều kiện.

**Ví dụ**: 

```java
int i = 0; 
do{
   System.out.print(i + " ");
}while(i < 0)
// output : 0
```

---

## 3. Vòng lặp **for**

Nó là một dạng vòng lặp ngắn gọn nhất,bao gồm 3 phần chính :

- **Initaliztion** : *khởi tạo vòng lặp*
- **Test Statement** : *điều kiện kiểm tra*
- **Iteration Statement** : *bước nhảy của vòng lặp*

**Ví dụ** : 

```java
int [] myArray = {4,5,7,2};
for (int i = 0 ; i < array.length; i++){
   System.out.print(i + " ");
}
// output : 4 5 7 2
```

---

## 4. Vòng lặp **for..Each**

Được sử dụng riêng để lặp ra các phần tử trong 1 **Array**, (*có thể dùng **for** như bình thường*)

**Ví dụ** :

```java
int[] myArray = {5,3,2,6};
for(int index : myArray){
   System.out.print(index + " ");
}
// output : 5 3 2 6
```

---

## 5. Điều khiển vòng lặp

Vậy ta tự hỏi thế này :

> 🤔 Nếu trong một **array** có **10** phần tử, ta **for** từ **0 tới 10**, và ta muốn nó dừng tại 5 thì thế nào ?

Đơn giản là ta có thể dùng **break** để thoát khỏi vòng lặp : 

### Lệnh **break** để thoát vòng lặp

```java
int[] array = {5,3,8,6};
for(int i : array){
   if(i == 8){
      break;
   }
   System.out.print(i + " ");
}
//output : 5 3
```

> 🤔 Nếu trong một **array** có **10** phần tử, ta **for** từ **0 tới 10**, và muốn tới 5 thì bỏ qua nó thì thể nào ?

Đơn giản là ta có thể dùng **continue** để bỏ qua trường hợp đó :

### Lệnh **continue** để thoát thực hiện lần lặp tiếp

```java
int[] array = {5,3,8,6};
for(int i : array){
   if(i == 8){
      continue;
   }
   System.out.print(i + " ");
}
//output : 5 3 6
```

## 6. Gắn nhãn vòng lặp

Ta sẽ đúng tới **Label** để điều khiển vòng lặp một cách tốt nhất :

```java
int[] array = {5,3,8,6};
loop:
for(int i in array){
   if(i == 8){
      continue loop;
   }
   System.out.print(i + " ");
}
//output : 5 3 6
```

>  🚀 Tức là nó sẽ đánh dấu vòng lặp đó là **loop**, còn bạn dùng **continue** và **break** lên chính vòng lặp đó.


## 7. Bài tập
### 7.1 Tìm bội chung nhỏ nhất Java bằng vòng lặp while
Bước 1: Sử dụng class Scanner để nhận dữ liệu từ bàn phím, hãy import thư viện nhé:
Bước 1: Sử dụng class Scanner để nhận dữ liệu từ bàn phím, hãy import thư viện nhé:
Bước 1: Sử dụng class Scanner để nhận dữ liệu từ bàn phím, hãy import thư viện nhé:
Bước 4: Sử dụng vòng lặp while với điều kiển True để lặp cho đến khi tìm thấy giá trị BCNN. Bên trong vòng lặp while sẽ là điều kiện của BCNN: lcm % n1 == 0 && lcm % n2 == 0.

Số bắt đầu kiểm tra sẽ là số lớn nhất trong hai số a và b. Sau khi kiểm tra nếu không thỏa mãn với điều kiện thì tăng lcm lên 1 rồi tiếp tục kiểm tra.

:::details Bài giải
```java
import java.util.Scanner;
public class Main {
  public static void main(String[] args) {
    //sử dụng class Scanner để lấy dữ liệu từ bàn phím
    Scanner sc = new Scanner(System.in);
    //khai báo n1, n2 là hai số cần tính bội chung nhỏ nhất
    //lcm là bội chung nhỏ nhất của a và b
    int n1, n2, lcm;
    System.out.println("\n\nNhập vào số thứ nhất: ");
    n1 = sc.nextInt();
    System.out.println("Nhập vào số thứ hai: ");
    n2 = sc.nextInt();
    //sử dụng toán tử ba ngôi để gán giá trị lớn nhất giữa a và b cho lcm
    //->> vì bcnn của a và b luôn luôn lớn hơn a và b
    lcm = (n1 > n2) ? n1 : n2;
    //sử dụng vòng lặp while với điều kiện true để lặp đến khi nào gặp lệnh break;
    while(true) {
      //nếu lcm chia hết cho n1 và n2, tức là lcm chính là bcnn của a và b
      if( lcm % n1 == 0 && lcm % n2 == 0 ) {
        System.out.printf("Bội chung nhỏ nhất của %d và %d là %d.", n1, n2, lcm);
        break;
      }
      //lcm bắt đầu từ giá trị lớn nhất giữa a và b, nếu không phải là bcnn thì tăng lên 1 rồi tiếp tục kiểm tra, cứ như vậy cho đến khi tìm được
      ++lcm;
    }
  }
}

/*
Kết quả:
	Nhập số thứ nhất: 6
	Nhập số thứ hai: 12
	Bội chung nhỏ nhất của 6 và 12 là 12
*/
```
:::

### 7.2 Đảo ngược một số nguyên N
Giả sử chúng ta có reversed = 0 và num1 = 1234 là số cần đảo ngược. Bây giờ mình sẽ chạy vòng lặp while này từng bước cho các bạn thấy cách thức thuật toán này hoạt động nhé.

Bước 1: Thực hiện vòng lặp lần 1, num1 = 1234, reversed = 0.

Kiểm tra điều kiện vòng lặp num1 != 0, nên chúng ta sẽ thực hiện các câu lệnh bên trong vòng lặp.

digit = num1 % 10 = 1234 % 10 = 4, như vậy digit = 4.
reversed = reversed * 10 + digit = 0 * 10 + 4 = 4, như vậy reversed = 4.
num1 = num1 / 10 = 1234 / 10 = 123, như vậy num1 = 123.
Kết thúc vòng lặp lần 1 ta có: reversed = 4, num1 = 123. Biến digit chỉ là biến trung gian vậy nên chúng ta không cần quan tâm đến nó.

Bước 2: Thực hiện vòng lặp lần 2, num1 = 123, reversed = 4.

Tương tự như vòng lặp thứ nhất, sau khi kết thúc vòng lặp lần hai ta được kết quả: num1 = 12, reversed = 43.

Bước 3: Thực hiện vòng lặp lần 3, num1 =12, reversed = 43. Sau khi vòng lặp kết thúc ra được: num1 = 1, reversed = 432.
Bước 4: Thực hiện vòng lặp lần 4, num1 = 1, reversed = 432. Kết thúc vòng lặp ta được kết quả: num1 = 0, reversed = 4321.

Đến đây, num1 = 0 không thỏa mãn điều kiện vòng lặp while nên kết thúc vòng lặp. Ta được kết quả cuối cùng là reversed = 4321 là số đảo ngược của num1 = 1234.

:::details Bài giải
```java
import java.util.Scanner;
public class Main {
  public static void main(String[] args) {
    //sử dụng class Scanner để lấy dữ liệu từ bàn phím
    Scanner sc = new Scanner(System.in);
    //khai báo biến num1 là số cần đảo ngược, reversed là số sau khi đảo ngược
    int num1,num2, reversed = 0;
    System.out.println("\n\nNhập vào số cần đảo ngược: ");
    num1 = sc.nextInt();
    //sở dĩ mình gán num1 cho num2 chỉ để hiển thị ra màn hình
    num2 = num1;
    //sử dụng vòng lặp while để đảo ngược num1
    while(num1 != 0) {
      int digit = num1 % 10;
      reversed = reversed * 10 + digit;
      num1 /= 10;
    }
    //hiển thị số sau khi đảo ngược ra màn hình
    System.out.printf("Số %d sau khi đảo ngược là: %d", num2, reversed);
  }
}

/*
	Kết quả:
		Nhập vào số cần đảo ngược: 11122003
		Số sau khi đảo ngược là: 30022111
*/
```
:::

### 7.3 Tính căn bậc hai

Trong ví dụ này chúng ta sẽ tạo một phương thức là CanBacHai() để tính căn bậc hai, sau đó gọi nó ra ở phương thức main() để thực hiện công việc tính căn của số được nhập vào từ người dùng.

::: details Bài giải
```java
import java.util.Scanner;
class CanBacHai {
    public static double squareRoot(int number) {
        double temp;
 
        double sr = number / 2;
 
        do {
            temp = sr;
            sr = (temp + (number / temp)) / 2;
        } while ((temp - sr) != 0);
 
        return sr;
    }
    public static void main(String[] args)
    {
        System.out.print("Nhập vào số num: ");
        Scanner scanner = new Scanner(System.in);
        int num = scanner.nextInt();
        scanner.close();
        System.out.println("Căn bậc hai của "+ num+ " là: "+squareRoot(num));
    }
}
/*
	Kết quả:
		Nhập vào số num: 3
		Căn bậc hai của 3 là: 1.73205
*/
```
:::