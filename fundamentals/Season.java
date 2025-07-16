class Season
{
public static void main(String[] args)
{
int month=4;
switch(month)
{
case 4:
case 5:
case 6:
System.out.println("summer seasion");
break;

case 7:
case 8:
case 9:
System.out.println("Rainy seasion");
break;

case 10:
case 11:
case 12:
case 1:

System.out.println("Winter season");
break;

case 2:
case 3:

System.out.println("Spring season");
break;

default :
System.out.println("Invalid input");
}
}
}