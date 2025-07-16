class City
{
public static void main(String[] args)
{
   int vcount=0;
    int ccount=0;
    String name=args[0].toLowerCase();
  for(int i=0;i<name.length(); i++)
   {  
      //String char=args[i];
      //char vc=Charcter.parseChar(char);
      
      char ch=name.charAt(i);
      if(ch=='a'||ch=='i'||ch=='o'||ch=='e'||ch=='u')
       {
          vcount++; 
          
         }
         else
           {
               ccount++;               
            } 

    
     }
      
   System.out.println(vcount);
   System.out.println(ccount);
   
  
}


}
