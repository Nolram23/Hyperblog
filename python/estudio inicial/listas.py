def main ():
    shopping_listas = []
    while True :
        print ("\n ---- lista de compras ---- ")
        print ("1. Agregar articulo ")
        print ("2. Eliminar articulo ")
        print ("3. Ver lista ")
        print ("4. Salir ")
        option = input ( " Por favor elija una opcion: ")
        if option == "1":
            item = input(" Introduce el articulo a agregar: ")
            shopping_listas.append(item)
        elif option == "2" :
            item = input(" Introduce el nombre del articulo a eliminar: ")
            shopping_listas.remove(item)
        elif option == "3" :
            print("\n tu lista de compras es: ")
            for item in shopping_listas:
                print("- "+item)
        elif option == "4":
            break
        else:
            print ("Opcion invalida, por favor intenta de nuevo ")
if __name__ == "__main__":
    main()
