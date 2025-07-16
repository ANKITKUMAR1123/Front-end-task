class Primenumber
{
public static void main(String[] args)
{
int num=20;
int i,count,j;
for(i=1;i<=20;i++)
{
count=0;
for(j=1;j<=i;j++)
{
if(i%j==0)
{
count++;
}
if(count==2)
{
System.out.println(i);
}
}
}
}
}
