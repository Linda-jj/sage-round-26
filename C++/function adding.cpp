#include<iostream>
using namespace std;

int adding(int x,int y){

	return(x+y);
}
int main(){
	int x,y;
	
	cout<<"Enter you num1 "<<endl;
	cin>>x;
	cout<<"Enter you num2 "<<endl;
	cin>>y;
	
	cout<<adding(x,y);
return 0;
}