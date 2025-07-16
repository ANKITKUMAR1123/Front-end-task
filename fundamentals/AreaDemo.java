class AreaCalculation
{

    void area(int side)
    {
      
       int area=side*side;
       System.out.println("area of Square " +area);
      
       }
    
 void area(int l,int b)
    {
      
       int area=l*b;
       System.out.println("area of Ractangle " +area);
      
       }
  void area(float radius)
    {
      
       float area=3.4f*radius*radius;
       System.out.println("area of circle " +area);
      
       }


}///

class AreaDemo
{
public static void main(String[] args)
{

  AreaCalculation  ac=new AreaCalculation();
     ac.area(2.3f);
     ac.area(2);
     ac.area(3,4);



  }
}