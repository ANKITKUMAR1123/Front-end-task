class Eveodd
{
public static void main(String[] args)
{
int []number={2,3,8,4,9,10};
int ecount=0;
int ocount=0;
int i;
for(i=0;i<number.length;i++)
{
if(number[i]%2==0)
{
ecount++;
}
else
{
ocount++;
}
}
System.out.println("total even number"+ecount);
System.out.println("total odd number"+ocount);
}
}