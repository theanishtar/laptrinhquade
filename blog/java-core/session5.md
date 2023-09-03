<!-- ---
layout: Post
title: Bài 5. Mảng trong Java
subtitle: Lập trình Java căn bản
author: Theanishtar
date: 2023-06-06
useHeaderImage: false
headerImage: https://github.com/dangtranhuu/images/blob/main/angurvad/java-core/session5/banner.png?raw=true
headerMask: rgba(30, 69, 110, 0.61)
permalinkPattern: /ebook/java/java-core/:slug/
tags:
  - Java Core
---

Mảng là cấu trúc có các phần tử cùng kiểu và liền kề nhau trong bộ nhớ. Cùng mình tìm hiểu thông qua bài viết này nhé !!! -->

<!-- more -->

# Bài 5. Mảng

## 1. Khái niệm

mảng dùng để lưu trữ nhiều giá trị trong một biến duy nhất, thay vì khai báo nhiều biến, khác với [danh sách liên kết]() thì Mảng có các phần tử liền kề nhau trên thanh Ram vì vậy tiện lợi cho việc truy xuất dữ liệu !!! 


## 2. Khai báo mảng

Để khai báo một mảng, hãy xác định loại biến bằng dấu ngoặc vuông :

### Khai báo không khởi tạo phần tử

```java
int[] myNums; //mảng số nguyên 
float[] myFloatNums; //mảng số thực
String myName; //mảng chuỗi ký tự
```

### Khai báo có khởi tạo phần tử

khai báo các giá trị bằng dấu ngoặc nhọn:

```java
int[] myNums = {5, 4, 2}; //mảng số nguyên có 3 phần tử 
float[] myFloatNums = {3.45, 1.23, 6.74, 8.4}; //mảng số thực có 4 phần tử
String myName = {"Đang","Hữu","Trần"}; //mảng chuỗi gồm 3 phần tử
```

---
## 3. Các tính chất

::: details 1. Vị trí bắt đầu là 0
- Hình như có mỗi [Passcal](). là bắt đầu từ 1 đúng không ta 😆
:::

::: details 2. Mảng không thể tự co dãn (có nghĩa là không thêm hay bớt phần tử được)
- Các phần tử là cố định vì vậy bạn phải xác định đúng số lượng ngay từ khi khai báo mảng, để tránh việc dư thừa hay thiếu bộ nhớ nhé!!
:::

::: details 3. Dữ liệu của mảng nằm liền kề nhau
- Các địa chỉ phần tử nằm tuần tự thanh ghi và cách nhau **4 byte**, vì kích thước của **int** là **4 byte** ([*xem thêm*](/post/2023/06/02/java-core-session2/))
- Vì vậy bạn hoàn toàn có thể truy xuất tới phần tử bất kì trong mảng khi biết vị trí (index) của phần tử đó
:::

Chúng ta có thể thay đổi giá trị bằng cách truy xuất lại phần tử đó như sau : 

```java
int[] myNums = {5,3,7,1,9,4};
mmNums[1] = 2;
for(int i : myNum){
   System.out.print(i + " ");
}
//output : 5 2 7 1 9 4
```

---

## 4. Độ dài của mảng 

::: details 🤔 Như mình đã nói ở trên Mảng có chỉ số phần tử đầu tiên là 0. Vậy chỉ số cuối cùng là mấy ? 
- Java cung cấp cho ta một phương thức xác định vị trí cuối cùng của Mảng đó là **length**
:::
Sử dụng *phương thức* **length** để kiểm tra độ dài của mảng như sau :

```java
int[] myNums = {5, 3, 7, 1, 9, 4};
System.out.println("Mảng có " + myNums.length + " phần tử");
// output : Mảng có 6 phần tử
```

> Ở **String** là *length()* còn **Arrays** là *length*

---

## 5. Duyệt mảng

Mảng là [cấu trúc dữ liệu]() có thể xác định được giá trị đầu (*0*) và giá trị cuối (*length*) vì vậy sẽ thuận tiện hơn nếu bạn dùng vòng lặp **for** hoặc **forEach** để duyệt mảng

### Vòng lặp for

```java
int[] myNums = {5, 3, 7, 1, 9, 4};
for(int i = 0 ; i < myNums.length() ; i++){
   System.out.print(i + " ");
}
//output : 5 3 7 1 9 4
```

### Vòng lặp forEach

```java
int[] myNums = {5, 3, 7, 1, 9, 4};
for(int i : myNums){
   System.out.print(i + " ");
}
//output : 5 3 7 1 9 4
```

> 💡 Cả 2 đều có thể sử dụn nhưng tôi khuyên bạn nên xài ***for..Each** trong trường hợp dễ.

---

## 6. Mảng đa chiều

Có nghĩa là 1 mảng, mỗi phần tử trong mảng đó đều chứa thêm 1 mảng.

> 💡 Nói đơn giản **Ma trận** là mảng 2 chiều, và chúng ta chỉ học tới mảng 2 chiều thôi

### Ví dụ mảng 2 chiều

```java
int[][] myNumbers = { {1, 2, 3, 4}, {5, 6, 7} };
```

💡 Muốn truy xuất trong mảng 2 chiều ta vẫn dùng như trên, ví dụ lấy số 3 ⇨ **myNumbers = [0][2]**
 
💡 Nếu bạn muốn duyệt qua mảng 2 chiều phải dòng 2 vòng lặp lồng nhau như sau có 2 cách như sau : 

```java
int[][] myNumbers = { { 1, 2, 3, 4 }, { 5, 6, 7 } };
for(int i = 0; i < myNumbers.length; i++){
   for(int j = 0; j < myNumbers[i].length; j++){
   	System.out.print(myNumbers[i][j] + " ");
   }
}
// output : 1 2 3 4 5 6 7
```

```java
int[][] myNumbers = { { 1, 2, 3, 4 }, { 5, 6, 7 } };
for(int[] subArray : myNumbers) {
   for (int i : subArray) {
      System.out.print(i + " ");
   }
}
// output : 1 2 3 4 5 6 7
```

### Ví dụ mảng 3 chiều

```java
int[][][] myNumbers = { { {1,2,3}, {1,2,3} }, { {2,4,6}, {1,6,8}, {1,5,7} } };
```

> 🚀 Mảng 3 chiều biết cho có thôi nhé, Mảng 2 chiều đã đủ rồi


## 7. Bài tập

### 7.1 Dùng vòng lặp For để tính tổng các số trong mảng

Đơn giản nhất các bạn chỉ cần dùng dòng lặp For hoặc ForEach để duyệt qua mảng, và dùng một biến tổng để cộng dồn các giá trị sau mỗi lần duyệt là xong

::: details Bài giải 7.1
```java
class TinhTongTrongMang{
    public static void main(String args[]){
        int[] array = {10, 20, 30, 40, 50, 10};
        int sum = 0;
        //Advanced for loop
        for( int num : array) {
            sum = sum+num;
        }
        System.out.println("Kết quả là:"+sum);
    }
}

// Ouput: Tổng là 160
```
:::

### 7.2 Đảo ngược các phần tử trong mảng.

Trong bài tập này chúng ta sẽ thực hiện chương trình đảo ngược các phần tử trong mảng Java. Với bài tập này giúp các bạn hiểu rõ hơn về mảng để có thể làm các bài tập phức tạp hơn.

Cụ thể trong chương trình này chúng ta sẽ thực hiện một chương trình đảo ngược các phần tử, ví dụ người dùng nhập vào các số 1,2,3,4,5 thì chương trình sẽ đảo ngược thành 5,4,3,2,1. Để hiểu được chương trình này các bạn phải biết về mảng, vòng lặp For và While.

Ở ví dụ này chúng ta sẽ sử dụng vòng lặp For để yêu cầu người dùng nhập vào giá trị cho các phần tử, sau đó dùng vòng lặp While để đảo ngược các vị trí của các phần tử trong mảng.

::: details Bài giải 7.2
```java
public class DaoNguocTrongMang{
    public static void main(String args[]){
        int counter, i=0, j=0, temp;
        int number[] = {10, 20, 30, 40, 50, 10};
        counter = scanner.nextInt();
        j = i - 1;
        i = 0;
        while(i<j){
            temp = number[i];
            number[i] = number[j];
            number[j] = temp;
            i++;
            j--;
        }
        System.out.print("Mảng sau khi đảo ngược: ");
        for(i=0; i<counter; i++){
            System.out.print(number[i]+ "  ");
        }
    }
}
// Output: Mảng sau khi đảo ngược: 10 50 40 30 20 10
```
:::

### 7.3 In các phần tử trùng nhau trong mảng
Để in ra các phần tử trùng nhau thì chúng ta thực hiện trong 4 bước:

- Bước 1: Khởi tạo mảng arr[] = {1, 2, 3, 4, 2, 7, 8, 8, 3}.
- Bước 2: Triển khai vòng for i tăng dần, duyệt từ đầu đến cuối mảng arr[].
- Bước 3: Triển khai vòng for j(ở trong vòng for i) bắt đầu tăng dần từ i đến hết.
- Bước 4: Duyệt 2 vòng for, nếu arr[i] == arr[j] thì in arr[j]
- Trên đây là 4 bước cơ bản của thuật toán xử lí bài toán: In các phần tử trùng lặp trong Java.

Tiếp theo chúng ta triển khai code theo thuật toán vừa nêu.

::: details Bài giải 7.3

```java
public class DuplicateElement {   
public static void  main(String[] args) {    
        //Khởi tạo mảng  
        int[] arr =  new int[] { 1 ,  2 ,  3 ,  4 ,  2 ,  7 ,  8 ,  8 ,  3 };   
        System.out.println( "Các phần tử trùng nhau trong mảng đã cho: " );  
        //Tìm kiếm phần tử trùng lặp  
        for(int i = 0; i < arr.length; i++) {  
            for(int j = i + 1; j < arr.length; j++) {  
                if(arr[i] == arr[j])  
                    System.out.print(arr[j]);  
            }  
        }  
    }  
}

// Output: Các phần tử trùng nhau trong mảng đã cho: 2 3 8
```
:::
