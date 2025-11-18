#include<iostream>
using namespace std;
int main(){
	int markes[7];
	int largest;
	
	cout<<"Enter 7 markes"<<endl;
	for(int i=0;i<7;i++){
	cin>>markes[i];	
	}
		cout<<"The larger markes is  "<<endl;
	for(int i=0;i<7;i++){
		if(markes[i]>largest){
			largest=markes[i];
		}	
}
cout<<largest <<endl;
return 0;

}