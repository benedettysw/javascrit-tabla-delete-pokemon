#ciclo repetitivo

'''
for x in "mango"
print(x)

for i in range(2,30,):
    print(i)


for i in range(2,30,3):
    print(i)

for x in range(6):
    if x ==3:break
    print(x)
else:
    print("finish")
    

i =1 
while i<=6:
    print(i)
    i+=1

i = 1 
while i<6:
    print(i)
    if i ==3:
        break
    i+=1

i = 0
while i<6:
    i+=1
    if i ==3:
        continue
    print(i)

i = 1
while i<6:
    print(i)
    i+=1
else:
    print("i no es menor a 6")
 
a = "hola"
print(a[1])

for x in "banana":
    print(x)

#ciclo repetitivo fin del 

#numero de carateres
a = "holas"
print(len(a))

#falso o verdadero
txt = "the best in life free"
print("free" in txt)


txt = "the best in life free"
if "free" in txt:
    print("yes, 'free' is present")

txt = "the best in life free"
print("expensive" not in txt)

b = "hello world"
print(b[2:5])

#sacar texto numero de rango 
b = "hello world"
print(b[2:])

#derecha a izuierdad
b = "hello world"
print(b[:5])

b = "hello world"
print(b[-5:-2])



#MAYUSCULA
a ="hola mundo"
print(a.upper())


a ="HOla mundo"
print(a.strip())


#MINUSCULA
a ="HOla mundo"
print(a.lower())


a ="HOla mundo"
print(a.replace("H" , "J"))
  
#concadenar
age = 21
txt = "soy el bene y tengo {}" 
print(txt.format(age))


quantity = 3
itemno = 567
preci = 55.5
myorder=" i want {} cantidad {} for {} dolares"
print(myorder.format(quantity, itemno, preci))

'''


print("ingresa la frase")
q=input()

if q==''.join(reversed(q)):
    print("es palindromo")
else:
    print("no es palindromo")
