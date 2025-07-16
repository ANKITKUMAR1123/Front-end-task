class Perfectnumer
{
public static void main(String[] args)
{
int num=6;
int i,sum=0;
for(i=1;i<num;i++)
{
if(num%i==0)
{
sum=sum+i;
}
}
if(sum==num)
{
System.out.println("the number is perfect number ");
}
else{
System.out.println("not perfect");
}

}
}
