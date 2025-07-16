class Gretestnum
{
public static void main(String[] args)
{
int []number={78,45,10,89,90};
int i;
int max=number[0];
for(i=0;i<number.length;i++)
{
if(number[i]>max)
{
max=number[i];
}
}
System.out.println("the greatest number is "+max);
}
}
