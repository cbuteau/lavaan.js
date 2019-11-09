
# lavaan.js

## Concept

Lavaan is a Latent Variable Analysis library used in R.
We will try to port its functionality.
The first step is to port its model format.

## Plan

Build simple model parser.
Build RData reader.
Get tutorial SEM running.

## Status

### 10/24/2019

Now thinking we should just test CFA with MODEL objects and DATA and swicth back to MODEL parsing later.


```plantuml
Alice -> Bob: Authentication Request
Bob --> Alice: Authentication Response

Alice -> Bob: Another authentication Request
Alice <-- Bob: Another authentication Response
```

### 10/26/2019

Write a test for this tutorial on CFA then bring the code to it passing.

http://lavaan.ugent.be/tutorial/cfa.html


### 11/9/2019

Damon indicated this might be a better tutorial to get up and running.

http://lavaan.ugent.be/tutorial/sem.html
