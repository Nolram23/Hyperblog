"""import calculadora
print (calculadora.suma(4, 4))
print (calculadora.resta(4, 4))
print (calculadora.multiplicacion (4, 4))
print (calculadora.division ( 4, 4))"""

class animal: 
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad
    def hacer_sonido(self):
        print (f"hola,soy un {self.nombre} y tengo {self.edad} años")

class perro(animal):
    def __init__(self, nombre, edad, raza):
        self.raza = raza
        super().__init__(nombre, edad)
    def hacer_sonido(self):
        print ( "guau, guau")
perro = perro('juan', 30, perro)
'perro.hacer_sonido()'

class gato (animal):
    def __init__(self, nombre, color):
        self.nombre = nombre
        self.color = color
    def hacer_sonido(self):
        print (f" soy un {self.nombre}, miau, miau y soy de color {self.color}")
gato = gato("gato","azul")
'gato.hacer_sonido()'

def presentar_animal (nombre):
    if nombre == "gato":
        gato.hacer_sonido()
    elif nombre == "perro":
        perro.hacer_sonido()
presentar_animal("perro")

