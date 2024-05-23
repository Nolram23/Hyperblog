def ordenacion_burbuja(lista):
    n = len(lista)
    for i in range(n - 1):
        for j in range(n - 1 - i):
            if lista[j] > lista[j + 1]:
                lista[j], lista[j + 1] = lista[j + 1], lista[j]
# Ejemplo de uso
mi_lista = [4, 2, 6, 1, 8, 3]
ordenacion_burbuja(mi_lista)
print (mi_lista)