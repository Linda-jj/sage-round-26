#include<iostream>
using namespace std;

string vawol(){
	char vawols[5]={'a','e','i','o','u'};
	char letter;
	cout<<"Enter your letter "<< endl;
	cin>>letter;
	if(letter==vawols[0] || letter==vawols[1] || letter==vawols[2] || letter==vawols[3]  || letter==vawols[4] ){
		return "Vawol";
}

else{
	return "Consonat";
}
}
int main(){
char letter;
cout<< vawol();
return 0;
}