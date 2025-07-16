class Circle
{

float radius;

void setRadius(float r)
{

  radius=r;

}

void area()
{
 
 float rad =3.14f*radius*radius;
 System.out.println("area of circle " + rad);

 
}
public static void main(String[] args)
{
   Circle cir=new Circle();
   cir.setRadius(8.1f);
   cir.area();

}


}