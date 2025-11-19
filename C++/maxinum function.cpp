#include<iostream>
using namespace std;
string maxNum(int x, int y){
	if(x>y){
	return to_string(x);	
	}
	else if(x==y){
	 return "Enqual"	;
	}
	else{
 return to_string(y);
	}
}

int main(){
	int x,y;
	cout<<"enter num1 "<<endl;
	cin>>x;
	cout<<"enter num2 "<<endl;
	cin>>y;
	cout<<maxNum(x,y);
return 0;	
}
