#include <stdio.h>
#include <stdlib.h>


// Define the structure for a node
struct Node {
    int data;
    struct Node* next;
};

struct LinkedList {
    int size;
};

struct LinkedList list = {0};

struct Node* Head = NULL;

void append(int data); //insertion at end O(n)
void endRemoval(void);   //remove last node O(n)
void prepend(int data); //append at start  O(1)
void insertAt(int data, int index); //insert at given index  O(n)
void removeAt(int index); //remove at given idnex  O(n)
void freeList(void);

int main() {
    // Create the first node (head)
    append(10);
    append(20);
    append(30);
    append(40);
    endRemoval();
    //endRemoval();
    //prepend(10);
    //insertAt(25, 2);
    //freeList();


    // Traversing the linked list
    struct Node* current = Head;
    printf("Linked List: ");
    while (current != NULL) {
        printf("%d -> ", current->data);
        current = current->next;
    }
    printf("NULL\n");
    printf("Size of Linked List: %d", list.size);
    return 0;
}

void append(int data){

    struct Node* new_node = malloc(sizeof(struct Node));
    new_node->data = data;
    new_node->next = NULL;

    if(Head == NULL){
        Head = new_node;
        list.size += 1;
    }
    else{
        struct Node* current = Head;
        while(current->next != NULL){
            current = current -> next;
        }
        current -> next = new_node;
        list.size += 1;
    }
}

void endRemoval(void){

    if(Head == NULL){
        printf("Linked List is currently empty\n");
        return;
    }
    if (Head->next == NULL) { // Case where there's only one node
        free(Head);
        Head = NULL;
        list.size -= 1;
        return;
    }
    struct Node* current = Head;
    while(current->next->next != NULL){
        current = current->next;
    }
    struct Node* lastNode = current->next;
    current->next = NULL;
    free(lastNode);
    list.size -= 1;
}

void prepend(int data){
    struct Node* new_node = malloc(sizeof(struct Node));
    new_node->data = data;
    new_node->next = NULL;

    new_node->next = Head;
    Head = new_node;
    list.size += 1;
}

void insertAt(int data, int index){

    if (index == 0) {
        prepend(data);
        return;
    }
    if (index == list.size) {
        append(data);
        return;
    }
    if (index < 0 || index > list.size) {
        printf("Enter Valid index!\n");
        return;
    }
    struct Node* new_node = malloc(sizeof(struct Node));
    new_node->data = data;
    new_node->next = NULL;
    
    struct Node* current = Head;
    int i = 0;
    while(i < index - 1){
        current = current -> next;
        i++;
    }
    struct Node* previousNode = current;
    struct Node* nextNode = current -> next;

    previousNode->next = new_node;
    new_node->next = nextNode; 
    list.size += 1;
}

void removeAt(int index){
    if(index < 0 || index >= list.size){
        printf("Enter Valid index!\n");
        return;
    }

    if(index == 0){
        struct Node* current = Head;
        Head = Head->next;
        free(current);
        list.size -= 1;
        return;
    }
    if(index == list.size - 1){
        struct Node* current = Head;
        while(current -> next -> next != NULL){
            current = current -> next;
        }
        struct Node* lastNode = current -> next-> next;
        current->next = NULL;
        free(lastNode);
        list.size -= 1;
        return;
    }
    int i = 0;
    struct Node* current = Head;
    while(i < index - 1){
        current = current -> next;
        i++;
    }
    struct Node* nextNode = current -> next -> next;
    free(current-> next);
    current-> next = nextNode;
    list.size -= 1;
}

void freeList(void) {
    struct Node* current = Head;
    struct Node* nextNode;
    while (current != NULL) {
        nextNode = current->next;
        free(current);
        current = nextNode;
    }
    Head = NULL;
    list.size = 0;
}
