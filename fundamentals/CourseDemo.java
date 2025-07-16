import java.util.Scanner;
class CourseDemo
{
public static void main(String[] args)
{
Scanner sc=new Scanner(System.in);

System.out.println("enter Course name ");
String name=sc.nextLine();


System.out.println("enter Course duration ");
String duration=sc.nextLine();

System.out.println("enter Course fees");
float fees=sc.nextFloat();


Course c=new Course();
c.setDetails(name,duration,fees);
c.getScholarship();
c. printDetails();
sc.close();
}
}
