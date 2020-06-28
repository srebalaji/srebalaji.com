---
title: "Code Challenge: Find whether the given expression is balanced"
description: "This problem is so simple. For every opening brackets, you have to check whether the corresponding closing brackets are present in order. We can solve this problem using Stack. If you want a recap…"
date: "2017-11-05T18:45:49.133Z"
categories: 
  - Programming
  - Data Structures
  - Software Development
  - Code
  - Code Challenge

published: true
canonicalLink: https://hackernoon.com/code-challenge-find-whether-the-given-expression-is-balanced-d9cb9793bcf0
---

Stacks!!

Hey folks

Lately, I was solving some algorithm challenges in hackerrank.com.

I just has a thought of sharing this simple challenge.

### Problem Statement

Given a string expression, find whether the given expression is balanced or not.

**Sample-1**

```bash
Input:
{ [ ( ) ] }

Output:
True
```

**Sample-2**

```bash
Input:
{ [ } ]

Output:
False
```

**Sample-3**

```bash
Input:
{ { [ ]

Output:
False
```

_Try to solve this problem before looking in to the solution._

### Solution

This problem is so simple. For every opening brackets, you have to check whether the corresponding closing brackets are present in order.

We can solve this problem using Stack. If you want a recap about stack no problem take a look at [this](https://www.youtube.com/watch?v=wjI1WNcIntg).

First, we start by iterating through the string and if we find an opening bracket we push it to the stack. And if we find a closing bracket we are popping the top element from the stack to check whether the closing bracket is associated with the opening bracket (top element popped). If not, we are returning false or else we continue.

And remember after iterating through the entire string, we have to check the size of the stack. If the size of the stack is not zero (i.e) not empty it means that some closing brackets are missing.

If you don’t get it stay with me :)

**Pseudo Code:**

```bash
expression = { [ ( ) ] }

for each element in the string
i=0
We have an opening braces so we push it to the stack. 
Stack: {

i=1
We have an opening braces so we push it to the stack.
Stack:  [
        {
i=2
We have an opening braces so we push it to the stack.
Stack: (
       [
       {
i=3
We have an closing braces so we pop the element from stack.
Popped element: (
Closing braces: )
We continue to iterate because the opening braces is associated with the closed braces.
Stack: [
       {
i=4
We have an closing braces so we pop the element from stack.
Popped element: [
Closing braces: ]
We continue to iterate because the opening braces is associated with the closed braces.
Stack: {

i=5
We have an closing braces so we pop the element from stack.
Popped element: {
Closing braces: }
We continue to iterate because the opening braces is associated with the closed braces.
Stack: Empty

The stack is empty which means that we have an equal equal number of closing braces for all opening braces. 


```

**Code Implementation In Java:**

```java
import java.util.*;

class BalancedExpression {
 public static void main(String args[]) {
  System.out.println("Balanced Expression");
  Scanner in = new Scanner(System.in);
  String input = in.next();
  if (isExpressionBalanced(input)) {
   System.out.println("The expression is balanced");
  }
  else {
   System.out.println("The expression is not balanced");
  }

static boolean isExpressionBalanced(String input) {
   Stack stack = new Stack();
   for (int i=0; i<input.length(); i++) {
    if (input.charAt(i) == '(' || input.charAt(i) == '{'|| input.charAt(i) == '[') {
     stack.push(input.charAt(i));
    }
    if (input.charAt(i) == ')' || input.charAt(i) == '}'|| input.charAt(i) == ']') {
     if (stack.empty()) {
      return false;
     }
     char top_char = (char) stack.pop();
     
     if ( (top_char == '(' && input.charAt(i) != ')') || (top_char == '{' && input.charAt(i) != '}') || (top_char == '[' && input.charAt(i) != ']') ) {
      return false;
     }   
    }
   }
   return stack.empty();
  }
 }
}
```

You can see the [source code here](https://github.com/srebalaji/Data-Structures-And-Algorithms/blob/master/stacks/BalancedExpression.java)

If you are interested in more competitive challenges you can subscribe to my newsletter [DS Weekly](https://www.getrevue.co/profile/srebalaji) to get a solved competitive programming challenge weekly. :) :)