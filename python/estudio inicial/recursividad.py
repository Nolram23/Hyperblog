def funcion_recursiva(n):
# Caso base
    if n == 0:
        return 1
# Caso recursivo
    else:
        return n * funcion_recursiva(n - 1)

# Ejemplo de uso
resultado = funcion_recursiva(0)
print (resultado)