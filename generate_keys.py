import secrets
import string
from datetime import datetime

alphabet = string.ascii_letters + string.digits
flag1 = 'Flag{'+''.join(secrets.choice(alphabet) for i in range(24)) + '}'
flag2 = 'Flag{'+''.join(secrets.choice(alphabet) for i in range(24)) + '}'
flag3 = 'Flag{'+''.join(secrets.choice(alphabet) for i in range(24)) + '}'

date = datetime.now().strftime("%Y_%m_%d-%H_%M")


with open(f"keys_{date}.txt", "w") as file:
    # Writing data to a file
    file.write('Flag1: '+flag1 + '\n')
    file.write('Flag2: '+flag2 + '\n')
    file.write('Flag3: '+flag3 + '\n')
