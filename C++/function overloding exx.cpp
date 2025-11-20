# include<iostream>
using namespace std;
int adding(int x, int y){
	return x+y;
}

using namespace std;
int adding(int x, int y, int z){
	return x+y+z;
}

using namespace std;
int adding(int x, int y,int z,int a){
	return x+y+z+a;
}

int main(){
	int result;
	cout<<adding(3,5);
	return 0;
}