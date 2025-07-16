class Armstrong
{
public static void main(String[] args)
{
int num=153,i,sum=0,rem;
while(num>0)
{
rem=num%10;
sum=sum+rem*rem*rem;
num=num/10;
}
if(sum==num)
{
System.out.println("Armstrong number");
}
else
{
System.out.println("not armstrong");
}
}
}




