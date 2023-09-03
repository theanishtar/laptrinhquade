<!-- ---
layout: Post
title: Bài 2. Sử dụng biến, toán tử và các kiểu dữ liệu trong Java 
subtitle: Lập trình Java căn bản
author: Theanishtar
date: 2023-06-03
useHeaderImage: false
headerImage: https://github.com/dangtranhuu/images/blob/main/angurvad/java-core/session2/banner.png?raw=true
headerMask: rgba(39, 62, 77, 0.61)
permalinkPattern: /ebook/java/java-core/:slug/
tags:
  - Java Core
---

 Biến là đối tượng cơ bản nhất trong lập trình, dùng để lưu giá trị. Vậy biến trong Java là gì ta 🤔 -->

<!-- more -->

# Bài 2. Sử dụng biến, toán tử và các kiểu dữ liệu
## 1. Các kiểu dữ liệu nguyên thủy

::: info
- Kiểu dữ liệu nguyên thủy là kiểu dữ liệu cơ bản nhất (chỉ dùng để lưu giá trị)
- Nâng cấp hơn ta có kiểu dữ liệu hướng đối tượng, là các kiểu dữ liệu cung cấp các phương thức cho sẵng để tính toán các giá trị
:::

### Tổng hợp các kiểu dữ liệu nguyên thủy trong Java
---
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

| Kiểu dữ liệu | Kích thước    | Mô tả                                        |
| ------------ | ------------- | -------------------------------------------- |
| byte         | **1** *bytes* | chứa từ **[-128,127]**                       |
| short        | **2** *bytes* | chứa từ **[-32,768,32,767]**                 |
| int          | **4** *bytes* | chứa từ **[-2 tỷ, 2 tỷ]**                    |
| long         | **8** *bytes* | chứa từ **[-9 tỷ tỷ, 9 tỷ tỷ]**              |
| float        | **4** *bytes* | chứa số thực, tối đa **7** chữ số thập phân  |
| double       | **8** *bytes* | chứa số thực, tối đa **15** chữ số thập phân |
| boolean      | **1** bit     | Chứa giá trị **true** hoặc **false**         |
| char         | **2** *bytes* | Chứa 1 ký tự **ASCII**                       |
---

::: info
 **1 Byte** = **8bit** và **1MB = 1024B** nhé các bạn 
:::

::: warning
**B** là viết tắt của **Byte**, còn **b** là viết tắt của **bit**, vậy nên **4GB** với **4Gb** khác nhau hoàn toàn nhé.
:::

::: tip
Bên trên có khá nhiều kiểu, nhưng bạn chỉ cần nhớ **int**, **boolean**, **char**, **double**. vì những thứ này hay dùng nhất
:::

#### Nên sử dụng số thực là **float** hay **double** : 

 Tuỳ vào mục đích sử dụng của bạn, nếu bạn muốn độ chính xác cao tuyệt đối hãy sử dụng **double** , nếu bạn không cần độ chính xác quá tỉ mỉ như *điểm số sinh viên* thì sử dụng **float**.

 Bạn có thể sử dụng **e** để biểu thị cho luỹ thừa của 10

 ```java
 float f1 = 35e3f;
double d1 = 12E4d;
System.out.println(f1);
System.out.println(d1);
/*35000.0
 120000.0 */
```

##  2. Kiểu dữ liệu không nguyên thuỷ

Được gọi là kiểu **tham chiếu** vì chúng **tham chiếu** đến các **Objects** (*đối tượng*).

>  Thật ra **String** *(chuỗi)* là một kiểu dữ liệu không nguyên thuỷ, bởi vì nó như một **Object** (*đối tượng*), và nó có thể chứa nhiều kiểu dữ liệu.

**Sử khác nhau giữa nguyên thuỷ và không nguyên thuỷ**:

|            | Nguyên thuỷ                                          | Không Nguyên thuỷ                                  |
| ---------- | ---------------------------------------------------- | -------------------------------------------------- |
| Khởi tạo   | được xác định trước trong **Java**                   | được tạo bởi lập trình viên                        |
| Giá trị    | luôn luôn có giá trị                                 | có thể không có giá trị gọi là **null**            |
| Cú pháp    | bắt đầu bằng chữ **thường** : **int**, **float** ... | bắt đầu bằng chữ **hoa** : **String**,**Array**... |
| Kích thước | Phụ thuộc vào **kiểu dữ liệu**                       | Có cùng kích thước với nhau                        |

⚠️ Đó là lý do bạn khai báo **String** phải viết hoa chữ cái đầu đấy.

----
## 3. Biến

**Variables** (*Biến*) : là vùng chứa giá trị của dữ liệu

Trong **Java** có các biến cơ bản sau : 

- **String** (chuỗi) : *chứa văn bản như "Kiệt đẹp trai"* 
- **int** & **long** (số nguyên) : *chứa số nguyên như 1,2,3...* 
- **float** & **double** (số thực) : *chứa số thực như 2.343...*
- **char** (Ký tự) : *chứa ký tự như a,b,c...*
- **boolean** : *chứa 2 trạng thái là* **true** *và* **false**

---

### Khởi tạo biến

Ta có thể tạo một biến bằng cú pháp sau  :  **kiểu dữ liệu = giá trị**

```java
int myNum = 3;
float myFloatNum = 5.32f; // cuối có f
double myDoubleNum = 5.23d; // cuối có d
char myLetter = 'D';
boolean myBool = true;
String myName = "Tran Huu Dang"; // String viết hoa

System.out.println("number = " + myNum);
System.out.println("floatNumber = " + myFloatNum);
System.out.println("DoubleNumber  = " + myDoubleNum);
System.out.println("name = " + myName);
System.out.println("Letter = " + myLetter);
System.out.println("bool = " + myBool);
   }
}
```

``` java
// output:
number = 3
floatNumber = 5.32
DoubleNumber  = 5.23
name = Tran Huu Dang
Letter = D
bool = true
```

--- 

### Quy tắc đặt biến

Bạn phải tuân thủ những quy tắc đặt biến sau đây : 

- **Không** bắt đầu bằng số
- **Không** có khoảng trắng (*sử dụng _ như bien_1*)
- **Không** chứa ký tự đặt biệt (*như #,+,-....*)
- **Không** trùng với **keyword** (*như if,for,class...*)

Những quy tắt ngầm (*Không buộc nhưng làm theo cho có quy chuẩn*) : 

- Viết tên hàm theo quy tắc **camelCase** : *nghĩa là chữ đầu viết thường, các chữ sau viết hoa chữ cái đầu*, như sau: 
  
  ```java
  void tenHam(){}
  int checkNguyenTo(){}
  char checkChuHoa(){}
  ```

- Viết hoa toàn bộ ghi đặt tên biến là hằng số và sử dụng **final**
  
  ```java
  final float PI = 3.14f;
  final int SOTUCHON = 123;
  ```

 Nếu bạn không muốn chỉnh sửa biến đó về sau, cho nó là hằng số và chỉ được phép *đọc*, thì hãy dùng **final**: 
 
 ```java
 final int PI = 3.14;
 PI = 3; //hàm này sẽ lỗi vì PI không thể thay đổi
```

---

### Hiển thị biến

Sử dụng `System.out.println` để hiển thị ra màn hình, và để kết hợp đoạn văn bản và biến hãy sử dụng dấu `+` như sau : 

```java
String firstName = "Tran";
String middleName = "Huu";
String lastName = "Dang";
System.out.println("Tên tôi là : " + firstName + " " + middleName + " " + lastName);

// output:
Tên tôi là : Tran Huu Dang
```



 Như bạn đã thấy tôi đã tự động thêm chuỗi ==" "== để tạo khoảng cách cho tên của tôi.

Và bạn cũng có thể tính toán thẳng trong đó như sau : 

```java
int a = 3;
int b = 6;
System.out.println("a + b = " + (a + b));
// output : a + b = 9
```

Với những phép toán bạn phải bọc nó lại bằng dấu ==()== nha.


## 4. Toán tử

Được sử dụng để thực hiện trên phép tính của các biến với nhau, có **5** nhóm sau : 

- **Arithmetic** : *Toán tử số học*
- **Assignment** : *Toán tử gán*
- **Comparsion** : *Toán tử so sánh*
- **Logical** : *Toán tử logic*
- **Bitwise** : *Toán tử thao tác bit*

---

### Toán tử số học (**Arithmetic**)

Có các loại toán tử sau đây :

| Toán tử | Miêu tả          | Ví dụ      |
| ------- | ---------------- | ---------- |
| +       | Phép cộng        | 2 + 3 ⇨ 5  |
| -       | Phép trừ         | 2 - 3 ⇨ -1 |
| *       | Phép nhân        | 2 * 3 ⇨ 6  |
| /       | Phép chia        | 2 / 3 ⇨ 0  |
| %       | Phép chia lấy dư | 2 % 3 ⇨ 2  |
| ++      | tăng thêm 1      | 2++ ⇨ 3    |
| --      | giảm lại 1       | 2-- ⇨ 1    |

>  🤔 Bạn chỉ cần nhớ toán tử số học là **cộng, trừ, nhân, chia**

---

### Toán tử gán (**Assignment**)

Có các loại toán tử sau : 

| Toán tử                    | Miêu tả                                                                                                | Ví dụ (*a = 2*)                                                                                                                       |
| -------------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| =                          | phép gán                                                                                               | a = 2                                                                                                                                 |
| +=<br>-=<br>*=<br>/=<br>%= | phép cộng và gán<br>phép trừ và gán<br>phép nhân và gán<br>phép chia và gán<br>phép chia lấy dư vá gán | a **+=** 3  ⇨ **a = 5**<br>a -= 3   ⇨ **a = -1**<br>a ***=** 3  ⇨ **a = 6**<br>a **/=** 3   ⇨ **a = 0**<br>a **%=** 3 ⇨ **a = 2**<br> |

---

### Toán tử so sánh (**Comparision**)

Có các loại toán tử sau : 

| Toán tử  | Miêu tả                                | Ví dụ (*a = 2*)          |
| -------- | -------------------------------------- | ------------------------ |
| ==<br>!= | bằng<br>không bằng                     | a **==** 2<br>a **!=** 3 |
| ><br><   | lớn hơn<br>nhỏ hơn                     | a **>** 1<br>a **<** 3   |
| >=<br><= | lớn hơn hoặc bằng<br>nhỏ hơn hoặc bằng | a **>=** 2<br>a **<=** 2 |

---

### Toán tử logic (**Logical**)

Có các loại toán tử sau : 

| Toán tử | Miêu tả                                                                      | Ví dụ (*a = 2*)               |
| ------- | ---------------------------------------------------------------------------- | ----------------------------- |
| &&      | Phép **và** : *nếu cả hai true thì true* <br>*một trong hai false thì false* | a **>** 1 **&&** a **==** 2   |
| \|\|    | Phép **hoặc** : *nếu cả 2 false thì false*<br>*một trong hai true thì true*  | a **<** 1 **\|\|** a **==** 2 |
| !       | Phép **phủ** : *true thành false* và *false thành true*                      | **!a**                        |

> 🔥 Phép phủ tức là ngược lại : **true** ⇨ **false** và **false** ⇨ **true**

---

### Toán tử Bit (**Bitwise**)

Đây là thao tác trên **Bit**, các bạn không cần phải hiểu nó quá kỹ, biết là có là được.

| Toán tử | Miêu tả                     | Ví dụ (*A = 2 và B = 3*) |
| ------- | --------------------------- | ------------------------ |
| &       | Phép **And bit**            | A **&** B ⇨ 2            |
| !       | Phép **OR bit**             | A **\|** B ⇨ 3           |
| ^       | Phép **XOR bit**            | A **^** B ⇨ 1            |
| ~       | Phép **phủ bit**            | ~B  ⇨ -4                 |
| <<      | Phép **dịch trái**          | A **<<** 1 ⇨ 4           |
| >>      | Phép **dịch phải**          | A **>>** 1 ⇨ 1           |
| >>>     | Phép **dịch phải với Zero** | A **>>>** 1 ⇨ 1          |


::: tip
 Bạn không cần phải hiểu quá nhiều về vấn đề này

 Nếu bạn muốn tìm hiểu, hãy xem [tại đây](https://openplanning.net/12281/cac-toan-tu-bitwise)
:::

## 5. Bài tập

Nếu bạn chưa biết gì về Java có thể note các bài này và giải quyết sau, còn nếu đã từng học lập trình thì hãy xem qua và giải thử nhé

### Tính lãi xuất kép
Trong bài này chúng ta sẽ viết một chương trình để tính lãi xuất kép bằng ngôn ngữ Java, đây là công thức được sử dụng nhiều trong ngành kế toán tài chính.
:::info
P (1 + R/n) (nt) - P
:::
Ở đây chúng ta có :

P là số tiền gốc.
R là lãi xuất hàng năm.
t là thời gian tiền được đầu tư hoặc vay.
n là số lần lãi được gộp trên mỗi đơn vị t, nếu lãi được gộp hàng tháng và t tính bằng năm thì n bằng 12. Nếu lãi được gộp hành quý và t tính bằng năm thì n bằng 4.
Trước khi bắt đầu hãy cùng xem qua một ví dụ thực tế dưới đây:

Ví dụ thực tế: Chúng ta có một khoản tiền 2000$ được gửi vào ngân hàng dưới dạng tiền gửi cố định với lãi xuất hàng năm là 8%, cộng gộp hàng tháng, lãi kép sau 5 năm sẽ là:

Bài viết này được đăng tại [free tuts .net]

P = 2000

R = 8/100 = 0.08

n = 12

t = 5

Lãi kép = 2000(1 + 0.08 / 12)(12 x 5) - 2000 = 979.69$.


:::details Bài giải
```java
public class TinhLaiKep {
    public void calculate(int p, int t, double r, int n) {
        double amount = p * Math.pow(1 + (r / n), n * t);
        double cinterest = amount - p;
        System.out.println("Lãi kép sau " + t + " năm là : "+cinterest);
        System.out.println("Số tiền có được sau " + t + " năm là: "+amount);
    }
    public static void main(String args[]) {
        TinhLaiKep obj = new TinhLaiKep();
        obj.calculate(2000, 5, .08, 12);
    }
}

/* Output:
	Lãi kép sau 5 năm là: 979.102
	Số tiền có được sau 5 năm là: 2979.321
*/
```
:::
