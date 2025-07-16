class Cammand_ageDemo
{
public static void main(String[] args)
{  
   int count=0;
   int nc=0;
   int len=args.length;
   for(int i=0;i<len;i++)
    {
       String num=args[i];
       int age=Integer.parseInt(num);

       if(age>=18)
       {
          count++;
       // System.out.println("you can vote");
         }
          else
             {
               nc++;
               //System.out.println("you can not vote");
               }

     }

     System.out.println("total eligble person "+count);
     System.out.println("total not aligble person "+nc); 

}

}
