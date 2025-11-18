#include<iostream>
using namespace std;
int main(){
int num[3];
int small;
for(int i=0;i<3;i++){
	cin>>num[i];
}
small=num[0];
for (int i=0;i<3;i++){
	if(small>num[i]){
	small=num[i];	
	}

}
	
	cout<< small;
return 0;

}