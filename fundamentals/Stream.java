class Student
{
public static void main(String[] args)
{
int hindimarks=89;
int engmarks=90;
int mathsmarks=99;

int rollno1=1234;

double average=hindimarks+engmarks+mathsmarks/3;
if(average>90)
{
System.out.println(rollno1+"this roll number  get computer and science");
}
else if(average>=80|| average>=89)
{
System.out.println(rollno1+"This roll number get Science without coputer");
}
else if(average>=70|| average>=79)
{
System.out.println(rollno1+"this roll number get commerse with maths");
}
else
{
System.out.println(rollno1+"This roll number get commerse without maths ");
}
}
}

