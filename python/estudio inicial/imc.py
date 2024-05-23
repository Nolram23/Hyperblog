
peso = float(input("introduzca su peso en 'kg': "))
altura = float(input("introduza su peso en 'metros': "))

IMC = peso / (altura**2)

if IMC < 18.5:
    resultado = "Bajo peso"
elif IMC > 25:
    resultado = "Sobrepeso"
else: resultado = "Peso normal"
print (F"su 'IMC' es: ", IMC, "Usted tiene: ", resultado)