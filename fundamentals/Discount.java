class Product_discount
{
public static void main(String[] args)
{
double price=4000.00;
if(price>=3000.00)
{
double discount=price*0.2;
double discountPrice=price-discount;
System.out.println("actual price is "+price+"and after discount price"+discountPrice);
}
else if(price>1000 &&  price<3000)
{
double discount=price*0.1;
double discountPrice=price-discount;
System.out.println("actual price is "+price+"and after discount price"+discountPrice);
}
else
{
double discount=price*0.05;
double discountPrice=price-discount;
System.out.println("actual price is "+price+"and after discount price"+discountPrice);

}
}
}