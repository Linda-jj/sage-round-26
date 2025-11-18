#include<iostream>
using namespace std;
int main(){
	int markes[5];
	int sum=0;
	
	cout<<"Enter 5 markes"<<endl;
	for(int i=0;i<5;i++){
	cin>>markes[i];	
	}
		cout<<"The sum markes is  "<<endl;
	for(int i=0;i<5;i++){
	
	sum=sum +markes[i]	;//sum+=markes[i]
	}
	
	
cout<<sum <<endl;
return 0;

}