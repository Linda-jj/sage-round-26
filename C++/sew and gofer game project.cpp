#include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std;

int main() {
    srand(time(0));

    int user, comp ,aWin;

    cout << "Sew and Gofer Game\n";
    cout << "------------------------\n";
    cout << "0 = Gofer\n1 = Sew\n ";
    cout << "Enter your a win choice: ";
    cin >>aWin;
    cout << "Enter your choice: ";
    cin >> user;

    if (user < 0 || user > 2) {
        cout << "Invalid choice!";
        return 0;
    }

    comp = rand() % 2;

    cout << "Computer chose: ";
    if (comp == 0) cout << "Gofer\n";
    else if (comp == 1) cout << "Sew\n";
 

    if (user == aWin && comp== aWin)
        cout << "Result: Draw!";
    else if (user == aWin) 
            
        cout << "Result: You win!";
    else
        cout << "Result: You lose!";

    return 0;
}


