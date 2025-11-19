#include<iostream>
using namespace std;
string  evenOrOdd(int x){
	if(x%2==0){
		return "Even";
	}
	else{
		return "Odd";
	}
}

int main(){
cout<<evenOrOdd(6);

return 0;	
}
