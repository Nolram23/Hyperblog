def busqueda_binaria(lista, valor):
    inicio = 0
    fin = len(lista) - 1
    while inicio <= fin:
        medio = (inicio + fin) // 2
        if lista[medio] == valor:
            return True
        elif lista[medio] < valor:
            inicio = medio + 1
            print (medio)
        else:
            fin = medio - 1
            print (medio)
    return False
# Ejemplo de uso
mi_lista = [1, 2, 3, 4, 6, 8]
resultado = busqueda_binaria(mi_lista, 3)
print (resultado)
