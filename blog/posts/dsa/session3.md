---
layout: Post
title: Danh sách liên kết
subtitle: Cấu trúc dữ liệu và giải thuật
author: Theanishtar
date: 2023-06-11
useHeaderImage: false
headerImage: https://github.com/dangtranhuu/images/blob/main/angurvad/dsa/session3/banner.png?raw=true
headerMask: rgba(39, 64, 112, 0.599)
permalinkPattern: /ebook/dsa/:slug/
tags:
  - Data structures 
  - DSA
---

Danh sách đặc là cấu trúc bạn gặp phải rất nhiều, nhưng có lẽ bạn sẽ không biết nếu chưa học về DSA.
<!-- more -->

---


## Danh sách liên kết là gì?

Danh sách liên kết là một cấu trúc dữ liệu [tuyến tính](), trong đó các phần tử không được lưu trữ tại một vị trí liền kề, thay vào đó chúng **_được liên kết_** bằng cách sử dụng [con trỏ]().

Danh sách liên kết tạo thành một loạt các nút được kết nối, trong đó mỗi nút lưu trữ dữ liệu và địa chỉ của nút tiếp theo.

Cấu trúc nút: Một nút trong danh sách liên kết thường bao gồm hai thành phần: 
- Dữ liệu: Nó giữ giá trị thực tế hoặc dữ liệu được liên kết với nút.
- Con trỏ tiếp theo: Nó lưu trữ địa chỉ bộ nhớ (tham chiếu) của nút tiếp theo trong chuỗi.

Head and Tail: Danh sách liên kết được truy cập thông qua nút head, trỏ đến nút đầu tiên trong danh sách. 

Nút cuối cùng trong danh sách trỏ đến NULL hoặc nullptr, cho biết kết thúc danh sách. Nút này được gọi là nút đuôi.

## Tại sao cần cấu trúc dữ liệu danh sách liên kết?

Dưới đây là một vài lợi thế của danh sách liên kết được liệt kê dưới đây, nó sẽ giúp bạn hiểu tại sao cần phải biết.

- Cấu trúc dữ liệu động: Kích thước của bộ nhớ có thể được cấp phát hoặc hủy phân bổ tại thời điểm chạy dựa trên thao tác chèn hoặc xóa.
- Dễ dàng chèn / xóa: Việc chèn và xóa các phần tử đơn giản hơn mảng vì không cần phải dịch chuyển các phần tử sau khi chèn và xóa, Chỉ cần cập nhật địa chỉ.
- Sử dụng bộ nhớ hiệu quả: Như chúng ta đã biết, Danh sách liên kết là một cấu trúc dữ liệu động, kích thước tăng hoặc giảm theo yêu cầu, vì vậy điều này tránh lãng phí bộ nhớ.
- Thực hiện: Các cấu trúc dữ liệu nâng cao khác nhau có thể được thực hiện bằng cách sử dụng danh sách liên kết như ngăn xếp, hàng đợi, đồ thị, bản đồ băm, v.v.

:::details Ví dụ
Trong một hệ thống, nếu chúng ta duy trì một danh sách các ID được sắp xếp trong một mảng 
- id[] = [1000, 1010, 1050, 2000, 2040].

Nếu chúng ta muốn chèn ID 1005 mới, thì để duy trì thứ tự được sắp xếp, chúng ta phải di chuyển tất cả các phần tử sau 1000 (ngoại trừ 1000).

Xóa cũng tốn kém với các mảng cho đến khi trừ khi một số kỹ thuật đặc biệt được sử dụng. Ví dụ: để xóa 1010 trong id [], mọi thứ sau 1010 phải được di chuyển do quá nhiều công việc đang được thực hiện ảnh hưởng đến hiệu quả của mã.
:::

## Các loại danh sách liên kết:
Chủ yếu có ba loại danh sách liên kết:

- Danh sách liên kết đơn
- Danh sách liên kết kép
- Danh sách liên kết vòng tròn

### 1. Danh sách liên kết đơn:
Trong một danh sách liên kết đơn lẻ, mỗi nút chứa một tham chiếu đến nút tiếp theo trong chuỗi. 

Đi qua một danh sách liên kết đơn lẻ được thực hiện theo hướng chuyển tiếp.

Hình minh họa:
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/dsa/session2/Singlelinkedlist.png?raw=true)

### 2. Danh sách liên kết kép:

Trong một danh sách liên kết kép, mỗi nút chứa các tham chiếu đến cả nút tiếp theo và trước đó. 

Điều này cho phép di chuyển theo cả hai hướng tiến và lùi, nhưng nó đòi hỏi bộ nhớ bổ sung cho tham chiếu lùi.

Hình minh họa:
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/dsa/session2/Doublylinkedlist.png?raw=true)

### 3. Danh mục liên kết thông tư:
Trong một danh sách liên kết tròn, nút cuối cùng trỏ trở lại nút đầu, tạo ra một cấu trúc tròn. 

Nó có thể được liên kết đơn lẻ hoặc gấp đôi.

Hình minh họa:
![pic1](https://github.com/dangtranhuu/images/blob/main/angurvad/dsa/session2/Circularlinkedlist.png?raw=true)



## Hoạt động trên danh sách liên kết

**_Chèn_**: Thêm một nút mới vào danh sách liên kết liên quan đến việc điều chỉnh con trỏ của các nút hiện có để duy trì trình tự thích hợp. Việc chèn có thể được thực hiện ở đầu, cuối hoặc bất kỳ vị trí nào trong danh sách

**_Xóa_**: Xóa một nút khỏi danh sách liên kết yêu cầu điều chỉnh con trỏ của các nút lân cận để thu hẹp khoảng cách do nút đã xóa để lại. Xóa có thể được thực hiện ở đầu, cuối hoặc bất kỳ vị trí nào trong danh sách.

**_Tìm kiếm_**: Tìm kiếm một giá trị cụ thể trong danh sách liên kết liên quan đến việc đi qua danh sách từ nút đầu cho đến khi tìm thấy giá trị hoặc đạt đến cuối danh sách.

## Ưu điểm của danh sách liên kết

**_Kích thước động_**: Danh sách liên kết có thể tăng hoặc thu nhỏ động, vì phân bổ bộ nhớ được thực hiện trong thời gian chạy.

**_Chèn và xóa_**: Thêm hoặc xóa các yếu tố khỏi danh sách  liên kết là hiệu quả, đặc biệt là đối với các danh sách lớn.

**_Linh hoạt_**: Danh sách liên kết có thể dễ dàng tổ chức lại và sửa đổi mà không yêu cầu khối bộ nhớ liền kề.
Nhược điểm của danh sách liên kết

**_Truy cập ngẫu nhiên_**: Không giống như mảng, danh sách liên kết không cho phép truy cập trực tiếp vào các phần tử theo chỉ mục. Traversal là cần thiết để đạt được một nút cụ thể.

**_Bộ nhớ thêm_**: Danh sách nối kết yêu cầu bộ nhớ bổ sung để lưu trữ con trỏ, so với mảng.

## Thực hành

### Sử dụng linkedList.h

Cấu trúc của DSLK
:::details Code
```c
struct NODE{
    int data;
    struct NODE* Next;
};
typedef struct NODE Node;
typedef struct{
    Node *Head;
    Node *Tail;
    int Size;
}List;
```
:::

Khởi tạo danh sách rỗng
:::details Code
```c
void makeNullList(List *L){
    L->Head = NULL;
    L->Tail = NULL;
    L->Size = 0;
}
```
:::

Hiển thị danh sách
:::details
```c
void displayList(List L){
    Node *temp = L.Head;
    while(temp != NULL){
        printf("%d ",temp->data);
        temp = temp->Next;
    }
    printf("\n");
    printf("Size = %d",L.Size);
    printf("\n");
}
```
:::

Tạo node (nút)
:::details Code
```c
Node *createNode(int x){
    Node *newnode = (Node *)malloc(sizeof(Node));
    newnode->data = x;
    newnode->Next = NULL;
    return newnode;
}
```
:::


Thêm node vào đầu hoặc cuối danh sách
:::details Code
```c
void insertList_Frist(Node *newNode,List *L){
    if(L->Head == NULL){
        L->Head = newNode;
        L->Tail = newNode;
    }
    else{
        newNode->Next = L->Head;
        L->Head = newNode;
    }
    L->Size++;
}

void insertList_End(Node *newNode,List *L){
    if(L->Head == NULL){
        L->Head = newNode;
        L->Tail = newNode;
    }
    else{
        L->Tail->Next = newNode;
        L->Tail=newNode;
        newNode->Next = NULL;
    }
    L->Size++;
}
```
:::

Thêm node vào vị trí P trong danh sách
:::details Code
```c
void insertList_byPos(int p,Node *newNode,List *L){
    if(p < 1 || L->Head == NULL){
        insertList_Frist(newNode,L);
    }
    else if(p >= L->Size){
        insertList_End(newNode,L);
    }
    else{
        Node *temp = L->Head;
        int i = 0;
        while(temp != NULL){
            if(p - 1 == i){
                newNode->Next = temp->Next;
                temp->Next = newNode;
                L->Size++;
                return;
            }
            i++;
            temp = temp->Next;
        }
    }
}
```
:::

Thêm N Node vào danh sách
:::details Code
```c
void inputList(int n,List *L){
    int x;
    Node *temp;
    for (int i = 0; i < n; i++){
        scanf("%d",&x);
        temp = createNode(x);
        insertList_byPos(i,temp,L);
    }
}
```
:::


Kiểm tra X trong danh sách
:::details Code
```c
int memberList(int x,List L){
    Node *temp = L.Head;
    while (temp != NULL){
        if(temp->data == x){
            return 1;
        }
        temp = temp->Next;
    }
    return 0;
}
```
:::


Tìm vị trí Node chứa X
:::details Code
```c
int locateList(int x,List L){
    Node *temp = L.Head;
    int i = 0;
    while (temp != NULL){
        if(temp->data = x){
            free(temp);
            return i;
        }
        else{
            i++;
        }
        temp = temp->Next;
    }
    free(temp);
    return -1;
}
```

:::


Xóa Node có vị trí P trong danh sách
:::details Code
```c
void deleteList_byPos(int p,List *L){
    Node *temp = L->Head;
    Node *prev = NULL;
    int i = 0;
    while (temp != NULL) {
        if(p == i){
            if (prev==NULL) {
                L->Head=temp->Next;
            }
            else{
                prev->Next=temp->Next;
            }
            L->Size--;
            return;
        }
        else{
            i++;
        }
        prev = temp;
        temp = temp->Next;
    }
}
```
:::


Xóa node trong danh sách
:::details Code
```c
void deleteList_byNode(Node* newNode,List *L){
    int i = 0;
    Node *temp = L->Head;
    while (temp != NULL){
        if(newNode == temp){
            deleteList_byPos(i,L);
        }
        else{
            i++;
        }
        temp = temp->Next;
    }
}
```
:::


Xóa Node có phần tử X trong danh sách
:::details Code
```c
void deleteList_byNode(Node* newNode,List *L){
    int i = 0;
    Node *temp = L->Head;
    while (temp != NULL){
        if(newNode == temp){
            deleteList_byPos(i,L);
        }
        else{
            i++;
        }
        temp = temp->Next;
    }
}
```
:::


Tối ưu danh sách 121 -> 12
:::details Code
```c
void optimizeList(List *L){
    Node *temp1 = L->Head;
    Node *temp2 = NULL;
    while (temp1->Next != NULL){
        temp2 = temp1->Next;
        while (temp2 != NULL){
            if(temp1->data == temp2->data){
                deleteList_byNode(temp2,L);
            }
            temp2 = temp2->Next;
        }
        temp1 = temp1->Next;
    }
}
```
:::


Tìm Node có phần tử lớn nhất hoặc nhỏ nhất
:::details Code
```c
int Find_Max(List L){
    Node *temp=L.Head;
    int max=temp->data;
    while (temp!=NULL) {
        if(max<temp->data){
            max=temp->data;
        }
        temp=temp->Next;
    }
    free(temp);
    return max;
}

int Find_Min(List L){
    Node *temp=L.Head;
    int min=temp->data;
    while (temp!=NULL) {
        if(min>temp->data){
            min=temp->data;
        }
        temp=temp->Next;
    }
    free(temp);
    return min;
}
```
:::

Chuyển sang danh sách khác
:::details Code
```c
int Find_Max(List L){
    Node *temp=L.Head;
    int max=temp->data;
    while (temp!=NULL) {
        if(max<temp->data){
            max=temp->data;
        }
        temp=temp->Next;
    }
    free(temp);
    return max;
}

int Find_Min(List L){
    Node *temp=L.Head;
    int min=temp->data;
    while (temp!=NULL) {
        if(min>temp->data){
            min=temp->data;
        }
        temp=temp->Next;
    }
    free(temp);
    return min;
}
```
:::

Gộp hai danh sách thành 1 danh sách
:::details Code
```c
void mergeList(List L1,List L2,List *L){
    changeList(L1,L);
    changeList(L2,L);
}
```
:::



Lọc số chẵn lẽ qua danh sách
:::details Code
```c
void filter_evenNumber(List L1, List *L){
    Node *temp = L1.Head;
    int i = L->Size;
    while (temp != NULL){
        if(temp->data % 2 == 0){
            insertList_byPos(i,createNode(temp->data),L);
        }
        i++;
        temp = temp->Next;
    }
}

void filter_oddNumber(List L1, List *L){
    Node *temp = L1.Head;
    int i = L->Size;
    while (temp != NULL){
        if(temp->data % 2 != 0){
            insertList_byPos(i,createNode(temp->data),L);
        }
        i++;
        temp = temp->Next;
    }
}
```
:::

Tính tổng số trung bình phần tử trong danh sách

:::details Code
```c
double averageList(List L){
    Node *temp = L.Head;
    double result = 0;
    while (temp != NULL){
        result += temp->data;
        temp = temp->Next;
    }
    return result/L.Size;
}
```
:::

### Sử dụng sentenceList.h

Chưa cập nhật





## Kết thúc:
Danh sách liên kết là các cấu trúc dữ liệu linh hoạt cung cấp phân bổ bộ nhớ động và các hoạt động chèn và xóa hiệu quả. 

Hiểu những điều cơ bản của danh sách liên kết là điều cần thiết cho bất kỳ lập trình viên hoặc người đam mê khoa học máy tính nào. 

Với kiến thức này, bạn có thể triển khai các danh sách liên kết để giải quyết các vấn đề khác nhau và mở rộng hiểu biết về cấu trúc dữ liệu và thuật toán.
