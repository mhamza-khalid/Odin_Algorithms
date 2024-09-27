#include <stdio.h>
#include <stdlib.h>
#include <assert.h>
#include <stdbool.h>

#include "stack.h"

struct Node {
    int data;
    struct Node* next;
};

struct Stack{
    struct Node* top;
    int size;
};

struct Stack* createStack(){
    // Allocate memory for the Stack struct on the heap
    struct Stack* pStack = (struct Stack*) malloc(sizeof(struct Stack));

    // Ensure that memory allocation succeeded
    assert(pStack != NULL);

    // Initialize the stack (top is NULL, size is 0)
    pStack->top  = NULL;
    pStack->size = 0;

    return pStack;  // Return the pointer to the dynamically allocated stack
}
void push(int item, struct Stack* pStack){

    struct Node* new_node = (struct Node *) malloc(sizeof(struct Node));

    new_node->data = item;
    new_node->next = NULL;

    //if new node malloc returns NULL (i.e it fails to allocate memory on heap)
    //then assert(false) results in program exit specifying the line number and file 
    assert(new_node != NULL);
    // can also write as assert(new_node);


    //get first node address from current stack
    struct Node* firstNode = pStack->top;

    //new node now points to this first node
    new_node->next = firstNode;

    //top pointer now points to the new node making it the first node
    pStack->top = new_node;
    
    pStack->size += 1;
}

int pop(struct Stack* pStack){
    assert(!isStackEmpty(pStack));
    //get first node address from current stack (this node will be removed)
    struct Node* firstNode  = pStack->top;

    //get second node of stack, this will become the first node now in stack
    struct Node* secondNode = firstNode->next;

    int value = firstNode->data;
    pStack->top = secondNode;
    free(firstNode);

    pStack->size -= 1;
    return value;
}

int peek(struct Stack* pStack){
    assert(!isStackEmpty(pStack));

    return (pStack->top -> data);
}

bool isStackEmpty(struct Stack* pStack){
    return pStack->size == 0;
}

void clear(struct Stack* pStack){
    struct Node* current = pStack->top;
    struct Node* nextNode;

    while (current != NULL) {
        nextNode = current->next;
        free(current);
        current = nextNode;
    }
    free(pStack);
}
