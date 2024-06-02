def permutaciones(lista):
    if len(lista) == 0:
        return []
    if len(lista) == 1:
        return [lista]
    l=[]
    for i in range(len(lista)):
        m=lista[i]
        print (m)
        lista_remanente = lista[:i]+ lista[i+1:]
        for p in permutaciones(lista_remanente):
            l.append([m]+p)
    return l

nums = [1, 2, 3]
print(permutaciones(nums))
print(len(permutaciones(nums)))