class Sort
{
public static void main(String[] args)
{
int []arr={8,9,5,8,10};
int i;
int temp=arr[0];
for(i=0;i<arr.length;i++)
{
if(arr[i]>arr[0])
{
temp=arr[i];
arr[i+1]=arr[i];
arr[i]=temp;
}
else
{
  arr[i]>arr.length;
  break;
}
System.out.println(arr[i]);
}
}



