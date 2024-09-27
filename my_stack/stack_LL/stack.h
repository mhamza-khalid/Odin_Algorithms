#ifndef STACK_H
#define STACK
#include <stdbool.h>

typedef int STACK_ITEM_T;

struct Stack;

struct Stack* createStack(void);
void push(int item, struct Stack* pStack);
int pop(struct Stack* pStack);
int peek(struct Stack* pStack);
bool isStackEmpty(struct Stack* pStack);
void clear(struct Stack* pStack);

#endif