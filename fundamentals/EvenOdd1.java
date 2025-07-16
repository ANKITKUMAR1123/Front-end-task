class EvenOdd
{
public static void main(String[] args)
{
 int i; 
 int evensum=0;
int oddsum=0;
 for(i=0;i<args.length;i++)
 {  
   String num=args[i];
   int eveodd=Integer.parseInt(num);
   if(eveodd%2==0)
   {
       evensum=evensum+eveodd;
     
    }
   else
     {
       oddsum=oddsum+eveodd;
         
        }

     
    
}
System.out.println(evensum);
System.out.println(oddsum);
}


 


}
