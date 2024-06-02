def suma_naturales(n):
 # Caso base
    if n == 0:
        return 0
 # Caso recursivo
    else:
        return n + suma_naturales(n - 1)
# Ejemplo de uso
resultado = suma_naturales(5)
print(resultado)