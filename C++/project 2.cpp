#include <iostream>
using namespace std;
int main(){
	int num;
	cout<<"Enter your Number"<<endl;
	cin>>num;
	
	if(num<0){
	cout<<"your number is negative";
	}
	else if(num==0){
		cout<<"your number is 0";
	}
	else{
cout<< "your number is positive";
	}
	return 0;
}