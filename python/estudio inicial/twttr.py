#programa para extraer las vocales y espacions a una palabra y/o frase cualquiera:
def main ():
    palabra = input( " ingresa una palabra: ")
    resultado = twttrr(palabra)
    print("la palabra abreviada es: " + '' .join(resultado))

def twttrr(pal):
    pal= pal.lower()
    sal = []
    for z in range (len(pal)):
        if pal[z] not in ["a", "e", "i", "o", "u", " "]:
                sal.append(pal[z])
    return sal
    
if __name__ == "__main__":
    main()