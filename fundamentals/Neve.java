class Nivennumber
{
public static void main(String[] args)
{
int num=22;
int temp=num;
int rem,reverse=0;
while(num!=0)
{
rem=num%10;
reverse=reverse*10+rem;
num=num/10;
}
if(reverse%2==0)
{
System.out.println(temp+"is neve number");
}
else
{
System.out.println("not neve");
}
}
}




