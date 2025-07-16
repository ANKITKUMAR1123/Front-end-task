class SumOffall 
{
public static void main(String[] args)
{

int i;
int sum =0;

for(i=0;i<args.length;i++)
{
String num=args[i];
int sumnumber=Integer.parseInt(num);
sum=sum+sumnumber;
}
System.out.println(sum);
}
}
 
