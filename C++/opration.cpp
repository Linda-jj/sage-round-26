#include<iostream>
using namespace std;
int main(){
	int x=5,y=2;
	int sum=x+y;
	int diff=x-y;
	int mult=x*y;
	double div=x/y;
	int rem=x%y;
	bool result=x<y;
	bool cond=x<y && true;
	bool condOr=x>y || true;
	
	
	

	

cout<< "the sum is "<<sum<<endl;
cout<< "the diff is "<<diff<<endl;
cout<< "the mult is "<<mult<<endl;
cout<< "the div is "<<div<<endl;
cout<< "the rem is "<<rem<<endl;
cout<< "the result is "<<result<<endl;
cout<< "the cond is "<<cond<<endl;
cout<< "the cond Or is "<<condOr<<endl;
return 0;
}