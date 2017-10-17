"""import random
class Account:
    def __init__(self):
        self.Account_List = {}
        self.MINIMUM_BALANCE = 5000
    def create(self, amount):
        if amount < self.MINIMUM_BALANCE:
            print("AMOUNT BELOW MINIMUM BALANCE. ACCOUNT CAN'T BE CREATED.")
        else:
            while True:
                c = round(random.random()*100000)
                if c not in self.Account_List:
                    self.Account_List[c] = self.MINIMUM_BALANCE
                    print("Account Created with Account No. ", c)
                    break
    def withdraw(self, id, amount):
        if(self.Account_List[id] < amount):
            print("INSUFFICIENT BALANCE")
        else:
            self.Account_List[id] -= amount
            print("TRANSACTION SUCCESSFUL")
    def deposit(self, id, amount):
        if id in self.Account_List:
            self.Account_List[id] += amount
        else:
            print("NO SUCH ACCOUNT")
    def close(self, id):
        del self.Account_List[id]
        print("ACCOUNT DELETED")
if __name__ == '__main__':
    ADMIN = Account()
    choice = 'Y'
    while True:
        print("ENTER YOUR CHOICE:\n1.CREATE\n2.WITHDRAW\n3.DEPOSIT\n4.CLOSE")
        c = int(input())
        if(c == 1):
            ADMIN.create(int(input()))
        elif(c == 2):
            ADMIN.withdraw(int(input()), int(input()))
        elif(c == 3):
            ADMIN.deposit(int(input()), int(input()))
        elif(c == 4):
            ADMIN.close(int(input()))
        print('Do you want to continue?')
        if(input() != 'Y'):
            break"""
def main():
	lol()
	
def lol():
	main()
	
main()
