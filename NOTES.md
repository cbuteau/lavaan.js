
# Notes

## 11/9/2019

Opening the RData file in a hex editor we see the opening sequence as

1F 8B 08 00

According to the R internals documentation
https://cran.r-project.org/doc/manuals/r-release/R-ints.html

THe file opens with RDX2 sequence and then proceeds with the serialization standard.
Maybe it is gzip format lets try to uncopress buffer and see if it tells us anything.

That worked...
http://www.asciitable.com/

82 68 88 50
R  D  X  2

Now we have to figure out the serialization format...

https://cran.r-project.org/doc/manuals/r-release/R-ints.html#R-Internal-Structures

Reading structs but now an exception if we run to end.
