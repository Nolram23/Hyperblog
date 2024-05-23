precio = 50
denominaciones = [25, 10, 5]
adeudado = precio
ingresado = 0

while adeudado > 0:
    moneda = int(input("ingrese una moneda (25 10 o 5 centavos): ")) 
    if moneda in denominaciones :
          ingresado += moneda
          adeudado -= moneda
          print ("monto adeudado: {} centavos".format (adeudado))
    else:
         print ("moneda no aceptada, ingrese una moneda de 25, 10 o 5 centavos")
      

if ingresado > precio:

    cambio = ingresado - precio 
print ("Cambio: {} centavos".format (cambio)) 
print ("tienes una coca-cola")