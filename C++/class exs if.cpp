#include<iostream>
using namespace std;
int main(){
int num;
cout<<"Enter you num ";
cin>> num;

if((num%5==0) && (num%11==0) ){
	cout << true;
}
else{
	cout<< false;
}
return 0;

}