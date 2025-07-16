class Course
{
String name,duration;
float fees;

void setDetails(String name,String duration , float fees)
{
  
this.name=name;
this.duration=duration;
this.fees=fees;



}

void printDetails()
{

System.out.println("Course Name is " + name);
System.out.println("Course fee is " + fees);
System.out.println("Course duration is " + duration);
}

void getScholarship()
{

if(name.equalsIgnoreCase("BCA")==true||name.equalsIgnoreCase("BTECH"))
{

    float scholarship_fees=fees*.30f;
    System.out.println("Scholarship we offer " +scholarship_fees);



}
}
}
