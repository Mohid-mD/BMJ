var a = 10;

document.write("Result");
document.write("<br/>");
document.write("The value of a is: " + a);
document.write("<br/>");
document.write("......................");
document.write("<br/>");
document.write("<br/>");

document.write("The value of ++a is: " + ++a);
document.write("<br/>");
document.write("Now the value of a is: " + a);
document.write("<br/>");
document.write("<br/>");
document.write("The value of a++ is: " + a++);
document.write("<br/>");
document.write("Now the value of a is: " + a);
document.write("<br/>");
document.write("<br/>");
document.write("The value of --a is: " + --a);
document.write("<br/>");
document.write("Now the value of a is: " + a);
document.write("<br/>");
document.write("<br/>");
document.write("The value of a-- is: " + a--);
document.write("<br/>");
document.write("Now the value of a is: " + a);

document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("......................xxxxxxxxxxxxxxxxxxxxxxxxxx......................");
document.write("<br/>");
// Question 2
var a = 2;
var b = 1;

document.write("1st Step");
document.write("--a = " + --a);
document.write("<br/>");
document.write("<br/>");
document.write("2nd Step");
document.write("<br/>");
document.write("(--a) - (--b) = " +(--a - --b));
document.write("<br/>");
document.write("<br/>");
document.write("3rd Step");
document.write("<br/>");
document.write("(--a) - (--b) + (++b) = " + (--a - --b + ++b));
document.write("<br/>");
document.write("<br/>");
document.write("4th Step");
document.write("<br/>");
document.write("(--a) - (--b) + (++b) + (b--) = " + (--a - --b + ++b + b--));



// Name & Greet
var name = prompt("please enter your name");
alert("Hello " + name);


document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("......................xxxxxxxxxxxxxxxxxxxxxxxxxx......................");
document.write("<br/>");
Table
var Table = prompt("please enter a number");
if (Table == ""){Table = 5};
document.write(Table+" x 1 = "+ (Table*1));
document.write("<br/>");
document.write(Table+" x 2 = "+ (Table*2));
document.write("<br/>");
document.write(Table+" x 3 = "+ (Table*3));
document.write("<br/>");
document.write(Table+" x 4 = "+ (Table*4));
document.write("<br/>");
document.write(Table+" x 5 = "+ (Table*5));
document.write("<br/>");
document.write(Table+" x 6 = "+ (Table*6));
document.write("<br/>");

document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("......................xxxxxxxxxxxxxxxxxxxxxxxxxx......................");
// Result
var total = 100
var urdu = 50
var eng = 80
var Maths = 90
document.write(`<table>
<tr>
    <th>Subject</th>
    <th>Total Marks</th>
    <th>Obtained Marks</th>
    <th>Percentage</th>
</tr>
<tr>
    <td>English</td>
    <td>${total}</td>
    <td>${eng}</td>
    <td>${(eng*total/100)}</td>
</tr>
<tr>
    <td>Maths</td>
    <td>${total}</td>
    <td>${Maths}</td>
    <td>${(Maths*total/100)}</td>
</tr>
<tr>
    <td>Urdu</td>
    <td>${total}</td>
    <td>${urdu}</td>
    <td>${(urdu*total/100)}</td>
</tr>
</table>`)



