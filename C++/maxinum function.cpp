#include<iostream>
using namespace std;
void maxNum(int x, int y){
	if(x>y){
	cout<< x;	
	}
	else if(x==y){
	 cout<<"Enqual"	;
	}
	else{
		cout<< y;
	}
}

int main(){
	int x,y;
	cout<<"enter num1 "<<endl;
	cin>>x;
	cout<<"enter num2 "<<endl;
	cin>>y;
	maxNum(x,y);
return 0;	
}
