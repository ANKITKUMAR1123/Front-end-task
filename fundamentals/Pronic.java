class Pronic
{
public static void main(String[] args)
{
int num=12,flag=0;
int i;
for(i=1;i<=num;i++)
{
if(i*(i+1)==num)
{
flag=1;
break;
}
}
if(flag==1)
{
System.out.println(num+"  is pronic number ");
}
else
{
System.out.println("not pronic");
}
}
}
