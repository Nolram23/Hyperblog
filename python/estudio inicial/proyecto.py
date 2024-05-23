grades = []
while True:
     grade = input("ingresa una calificación ( o 'salir' para terminar): ")
     if grade.lower() == 'salir':
        break
     else:
        grades.append(float(grade))

average = sum(grades)/len(grades)
print ("el promedio de notas es: ", average)


              