I tried to build the solution as modular as possible. So all ```answer.js``` files are using ```passThrough``` module that calls a ```worker``` function on every line of given file. Also ```workers``` have additional parameters (i. e. splitting patterns in Q1 and Q4; weekday and its count in Q3), which makes them re-usable for other situations. 

When it comes to using external libraries I only decided to use ```moment``` in Q3, as it really simplifies working with dates.

I also added comments with links in two places where I decided to use external help. I always try to follow the rule "don't re-invent the wheel" (in particullar when it comes to mathematical algorithms ;) )

If I could spend more time on the tasks I'd added unit testing suite, because I never written any tests myself yet, and I really feel keen to finally learn it ;)