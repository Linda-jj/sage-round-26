#include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std;

int toWin(int user, int comp, int aWin) {

    if (comp == 0){
     cout << "Computer chose: Gofer"<<endl;	
	}
       
    else if(comp==1){
        cout << "Computer chose: Sew"<<endl;	
	}
    

    if (user == comp){
    	cout<<"You Draw";
	}
    
    else if (user == aWin){
    	cout<<"You Win";
	}
       
    else{
    	cout<<"you Lose";
	}
     return 0;   
}

void toInvalid(int user) {
    if (user < 0 || user > 1){
    cout << "Invalid choice!"<<endl;
	
	}
        
}

void toDraw() {
	 int user, comp, aWin;
	if(user==aWin && comp==aWin){
	   cout << "Result: Draw!"<<endl;	
	}
 
 
}

int main() {
    srand(time(0));

    int user, comp, aWin;

	cout <<"Welcome to Sew and Gofer game. Please read the below instruction to play!"<<endl;
    cout << "Sew and Gofer Game"<<endl;
    cout << "------------------------"<<endl;
    cout << "0 = Gofer\n1 = Sew\n";
    cout << "Enter your winning symbol (0 = Gofer, 1 = Sew): ";
    cin >> aWin;

    cout << "Enter your choice: ";
    cin >> user;

    toInvalid(user);

    comp = rand() % 2;

    int result = toWin(user, comp, aWin);

    if (result == 0)
        toDraw();
    else if (result == 1)
        cout << "Result: You win!\n";
    else
        cout << "Result: You lose!\n";

    return 0;
}

