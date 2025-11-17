#include <iostream>
using namespace std;
int main(){
	int age=17;
	if(age>=18){
	cout<<"Adult";
	}
	else if(age>=13 && age<18){
		cout<<"teen";
	}
	else{
		cout<<"child";
	}
	return 0;
}