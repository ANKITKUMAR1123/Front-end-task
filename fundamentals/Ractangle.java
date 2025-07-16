class Ractangle
{ 

   int width,hight;
   

   void setDem(int w,int h)
   {   

        width=w;
        hight=h;

   
     }
   void area()
  { 

    int a=width*hight;
    System.out.println("area of ractagle is " +a);
     
     }

public static void main(String[] args)
{ 

Ractangle rect=new Ractangle();//dynamic memory allocation
rect.setDem(20,10);
rect.area();

}

  

}//class close
