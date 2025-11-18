#include<iostream>
using namespace std;
int main(){
	int num [7] ;
	int even=0;
	int odd=0;
	
	cout<<"Enter your number ";
	for(int i=0;i<7;i++){
			cin>>num[i];
	}
for(int i=0;i<7;i++){
	if(num[i]%2==0){
	even++;
	}
	else {
	odd++;	
	}
}
	cout<<"this is even Num count "<<even<<endl;
	cout<<"this is even Num count "<< odd<<endl;

return 0;	
}
