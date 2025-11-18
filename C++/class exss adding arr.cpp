#include<iostream>
using namespace std;
int main(){
	int num1[3]={23,56,89};
	int num2[3]={23,96,69};
	int num3[3]={23,66,79};
	int sum1,sum2,sum3;
	
	for(int i=0;i<3;i++){
		sum1=num1[i]+sum1;
	}
		for(int x=0;x<3;x++){
		sum2=num2[x]+sum2;
	}
	
		for(int y=0;y<3;y++){
		sum3=num3[y]+sum3;
	}
	
	
	cout<<sum1<<endl;
	cout<<sum2<< endl;
	cout<<sum3<<endl;
	return 0;
}