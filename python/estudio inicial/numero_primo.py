print ("calculo de numero primo")
es_primo = True
numero = int(input("ingrese el numero a verificar: "))
if numero <= 1:
    es_primo = False
else:
    for i in range (2, (numero // 2)+1):
        if numero % i == 0:
            es_primo = False
            break
if es_primo:
    print ("el numero es primo.")
else: 
    print ("el numero no es primo.")