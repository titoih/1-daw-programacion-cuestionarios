import './App.css';
import Question from './components/Question';

const App = () => {
  return (
    <div className="App-header">
      <header className="App-header">
        <h1>1º DAW Programación</h1>
        <h2>Cuestionarios Resueltos - Libro Programación (Paraninfo, ciclos formativos.</h2>
        <h2>Autores: Alfonso Jiménez Marín y Francisco Manuel Pérez Montes)</h2>
        <h2>y Cuestionarios de Clase</h2>
      </header>
      <section>
        <div className="container-lg">
          <h1>Tema 1: Conceptos básicos</h1>
          <Question
            texto="1.1 ¿Cuál de los siguientes identificadores no puede emplearse para una variable?"
            a="language"
            b="ultimo"
            c="final"
            d="fin"
            correct="c) final"
          />
          <hr></hr>
          <Question
            texto="1.2 De todos los tipos primitivos disponibles en Java, selecciona cuál
            o cuáles son los que tienen un mayor tamaño y, por los tanto, pueden albergar un
            mayor número de valores:"
            a="long"
            b="long y double"
            c="long, double, short"
            d="En Java todos los primitivos tienen el mismo tamaño"
            correct="b) long y double"
          />
          <hr></hr>
          <Question
            texto="1.3 ¿Mediante qué símbolo es posible añadir un comentario en nuestro código?"
            a="#"
            b="//"
            c="<!--"
            d="Cualquiera de los anteriores"
            correct="c) //"
          />
          <hr></hr>
          <Question
            texto="1.4 ¿Qué paquete se importa automáticamente en cualquier programa sin necesidad de
            tener que utilizar una sentencia import?"
            a="java.util"
            b="java.time"
            c="java.Scanner"
            d="java.lang"
            correct="a) java.util"
          />
          <hr></hr>
          <Question
            texto="1.5 ¿Cuáles de las siguientes instrucciones nos permiten 
            mostrar información por consola?"
            a="new Scanner()"
            b="Math.sqrt()"
            c="System.out.println()"
            d="Message()"
            correct="c) System.out.println()"
          />
          <hr></hr>
          <Question
            texto="1.6 ¿Qué instrucción es equivalente a: i++"
            a="i = i + 1"
            b="i = 1 + i"
            c="i += 1"
            d="Cualquiera de las anteriores"
            correct="d) cualquiera de las anteriores "
          />
          <hr></hr>
          <Question
            texto="1.7 Si evalúas la siguiente expresión: 2 < 1 || 2 != 1, 
            el resultado de dicha expresión es:"
            a="1"
            b="2"
            c="true"
            d="false"
            correct="c) true"
          />
          <hr></hr>
          <Question
            texto="1.8 ¿Qué valor toma la variable a, tras la ejecución de la instrucción:
            int a = 1 < 2 ? 3 : 4;?"
            a="1"
            b="2"
            c="3"
            d="4"
            correct="c) 3"
          />
          <hr></hr>
          <Question
            texto="1.9 Selecciona la expresión cuya evaluación resulta 3:"
            a="3 + 2 * 6 / 5"
            b="(3+2) * 6 / 5"
            c="(3+2*6)/5"
            d="3+2*(6/5)"
            correct="c) (3+2*6)/5"
          />
          <hr></hr>
          <Question
            texto="1.10 En las siguientes conversiones de tipo, ¿cuál de ellas produce un error?"
            a="int a = (int) 1.23;"
            b="int a = 12.3;"
            c="double a = (double) 123"
            d="double a = 123;"
            correct="b) int a = 12.3"
          />
          <hr></hr>
          <h1>Cuestionarios de Clase 1º DAW, Tema 1</h1>
          <Question
            texto="El programa principal en una aplicación java es:"
            a="El método invocado por todos los demás."
            b="El método más largo."
            c="El método main()."
            d="El método run()."
            correct="c) EL método main()"
          />
          <hr></hr>
          <Question
            texto="¿Cuáles de los siguientes operadores en java son aritméticos? (verdadero o falso)"
            a="&&"
            b="%"
            c="="
            d="--"
            e="/"
            correct="a) falsa / b) verdadera / c) falsa / d) verdadera / e) verdadera"
          />
          <hr></hr>
          <Question
            texto="El archivo de texto con el conjunto de instrucciones de un programa, escrito por un programador, se llama:"
            a="Código objeto"
            b="Código ejecutable"
            c="Código fuente"
            d="Código máquina"
            correct="c) Código fuente"
          />
          <hr></hr>
          <Question
            texto="¿Qué es la API de java?"
            a="Una aplicación para la depuración de errores."
            b="Una biblioteca de herramientas de programación diseñada por los desarrolladores de java."
            c="Sitio de internet."
            d="Un entorno de desarrollo."
            correct="b) Una biblioteca de herramientas de programación diseñada por los desarrolladores de java."
          />
          <hr></hr>
          <Question
            texto="¿Cuáles de los siguientes operadores en java son relacionales?"
            a="<"
            b="=="
            c="="
            d="!"
            e="+"
            correct="a) verdadera / b) verdadera / c) falsa / d) falsa / e) falsa"
          />
          <hr></hr>
          <Question
            texto="El código bytecode es leído y ejecutado por:"
            a="El compilador"
            b="El intérprete"
            c="La máquina virtual de Java"
            d="El procesador de texto"
            correct="c) La máquina virtual de Java"
          />
          <hr></hr>
          <Question
            texto="¿Qué es la clase Scanner?"
            a="Una herramienta de la API que sirve para leer e interpretar texto."
            b="Una clase cuyos objetos sirven para interpretar archivos de imagen."
            c="Una clase creada por el usuario."
            correct="a) Una herramienta de la API que sirve para leer e interpretar texto."
          />
          <hr></hr>
          <Question
            texto="La operación de conversión del código fuente de un programa completo en un archivo escrito en código ejecutable se llama: compilación/interpretación. 
            El proceso de traducción de un código fuente, instrucción a instrucción a medida que se ejecuta, se llama: compilación/intepretación"
            a=""
            b=""
            c=""
            d=""
            correct="1) compilación / 2) interpretación"
          />
          <hr></hr>
          <Question
            texto="El compilador de java genera un código:"
            a="Bytecode"
            b="En inglés"
            c="En lenguaje de programación Java"
            d="En lenguaje fortran"
            correct="a) Bytecode"
          />
          <hr></hr>
          <Question
            texto="Son entornos de desarrollo:"
            a="Office"
            b="Windows 10"
            c="Ubuntu"
            d="Netbeans"
            e="Eclipse"
            correct="a) falsa / b) falsa / c) falsa / d) verdadera / e) verdadera"
          />
          <hr></hr>
          <Question
            texto="En lenguaje java son palabras reservadas:"
            a="Las que tienen un significado especial y no se pueden usar para otros fines."
            b="Las del sistema operativo."
            c="Las que no se pueden usar."
            d="Las de lenguaje máquina."
            correct="a) Las que tienen un significado especial y no se pueden usar para otros fines."
          />
          <hr></hr>
          <Question
            texto="En java, una magnitud identificada con un nombre y que tiene asignado un valor que puede cambiar, se llama: variable/constante/asignación. ¿Cómo llamamos a aquellas variables que, una vez inicializadas, no pueden cambiar su valor? variable/constante/asignació
            ¿Cómo llamamos a la operación por la cual se guarda un valor en una variable? variable/constante/asignación"
            a="variable/constante/asignación"
            b=""
            c=""
            d=""
            correct="1) variable / 2) constantes / 3) asignación"
          />
          <hr></hr>
          <Question
            texto="En el mundo de la programación se conoce como plataforma a sistema operativo/ a combinación del equipo hardware y el sistema operativo donde se ejecuta un programa."
            a=""
            b=""
            c=""
            d=""
            correct="2) combinación del equipo hardware y el sistema operativo"
          />
          <hr></hr>
          <Question
            texto="El código resultante del proceso de compilación de un programa en código fuente se llama:"
            a="Código natural."
            b="Código máquina."
            c="Código final."
            d="Código programable."
            correct="b) Código máquina"
          />
          <hr></hr>
          <Question
            texto="Son lenguajes de programación:"
            a="inglés"
            b="java"
            c="esperanto"
            d="C"
            e="Fortran"
            correct="a) falsa / b) verdadera / c) falsa / d) verdadera / verdadera"
          />
          <hr></hr>
        </div>
        <div className="container-lg">
          <h1>Tema 2: Condicionales</h1>
          <Question
            texto="2.1 Los operadores lógicos operan con valores booleanos, resultado:"
            a="valores enteros"
            b="valores enteros y booleanos"
            c="otro tipo de valores"
            d="solo valores booleanos"
            correct="d) solo valores booleanos"
          />
          <hr></hr>
          <Question
            texto="2.2 La evaluación de una expresión relacional puede generar un valor de tipo:"
            a="Entero"
            b="Real"
            c="Booleano"
            d="Todos los anteriores"
            correct="c) Booleano"
          />
          <hr></hr>
          <Question
            texto="2.3 La expresión 3==3 && 2<3 && 1!=2"
            a="cierto"
            b="falso"
            c="no se puede evaluar"
            d="no genera un booleano, ya que la expresión es artimética"
            correct="a) cierto"
          />
          <hr></hr>
          <Question
            texto="2.4 La siguiente expresión, donde interviene la variable booleana a: 3!=3 || a || 1<2, resulta:"
            a="Dependerá del valor de a"
            b="Cierto"
            c="Falso"
            d="No se puede evaluar"
            correct="b) cierto"
          />
          <hr></hr>
          <Question
            texto="2.5 Elige los valores de las variables enteras (a,b,c) que permiten que la evaluación de la siguiente expresión sea cierta: a<b && b!=c && b<=c"
            a="a=1, b=1, c=2"
            b="a=2, b=1, c=2"
            c="a=1, b=2, c=2"
            d="a=1, b=2, c=3"
            correct="d) a=1, b=2, c=3"
          />
          <hr></hr>
          <Question
            texto="2.6 El bloque de instrucciones de una sentencia if se ejecutará:"
            a="siempre"
            b="nunca"
            c="dependerá de la evaluación de la expresión utilizada"
            d="todas las respuestas anteriores son correctas"
            correct="c) dependerá de la evaluación de la expresión utilizada"
          />
          <hr></hr>
          <Question
            texto="2.7 En una sentencia if-else los bloques de instrucciones (bloque true y bloque false) pueden ejecutarse:"
            a="simultáneamente"
            b="es posible, dependiendo de la condición utilizada, que no se ejecute ninguno"
            c="siempre se ejecutará al menos uno y son expluyentes"
            d="todas las anteriores son incorrectas"
            correct="b) es posible, dependiendo de la condición utilizada, que no se ejecute ninguno"
          />
          <hr></hr>
          <Question
            texto="2.8 ¿Qué valor toma la variable a en la siguiente expresión: a= 1<2 ? 3: 4?"
            a="1"
            b="2"
            c="3"
            d="4"
            correct="c) 3"
          />
          <hr></hr>
          <Question
            texto="2.9 La cláusula default de la sentencia switch es:"
            a="obligatorio y tiene que ser la última que aparezca"
            b="obligatoria, pero puede aparecer en cualquier lugar"
            c="opcional y tiene que ser la última que aparezca"
            d="opcional y puede usarse en cualquier lugar"
            correct="c) opcional y tiene que ser la última que aparezca"
          />
          <hr></hr>
          <Question
            texto="2.10 Realiza una traza del siguiente fragmento de código y selecciona el valor que toma
            finalmente la variable a:
            a = 0;
            switch a+1 {
            case 0:
              a = 2;
            case 1:
              a = 3;
            case 2:
              a++;
              break;
            case 3:
              a--;
              break
            }"
            a="1"
            b="2"
            c="3"
            d="4"
            correct="d) 4"
          />
          <hr></hr>
          <h1>Cuestionarios de Clase 1º DAW, Tema 2</h1>
          <Question
            texto='En el bloque de código, 
            if(x==0){ 
            System.out.println("mensaje1"); 
            }else if(x<0){ 
            System.out.println("mensaje2"); 
            }else if(x%3==0){  
            System.out.println("mensaje3"); 
            }else{ 
            System.out.println("mensaje4"); 
            }
            -¿Qué mensaje se mostrará por consola si x vale 10?-'
            a="Mensaje 1"
            b="Mensaje 2"
            c="Mensaje 3"
            d="Mensaje 4"
            correct="d) Mensaje 4"
          />
          <hr></hr>
          <Question
            texto='En el bloque de código, if(x<=0){ System.out.println("mensaje1"); }else{ System.out.println("mensaje2"); } ¿Para qué valores de x se mostrará por consola el mensaje “mensaje2”?'
            a="0"
            b="-1"
            c="3"
            d="10"
            e="-2"
            correct="a) 0 falsa /b) -1 falsa /c) verdadera / d) verdadera / e) falsa "
          />
          <hr></hr>
          <Question
            texto=""
            a=""
            b=""
            c=""
            d=""
            correct=""
          />
          <hr></hr>
          <Question
            texto='En el bloque de código, if(x==0){ System.out.println("mensaje1"); }else if(x<0){ System.out.println("mensaje2"); }else if(x%3==0 && x%2==0){ System.out.println("mensaje3"); }else{ System.out.println("mensaje4"); ¿Qué mensaje se mostrará por consola si x vale 12?'
            a="mensaje 1"
            b="mensaje 2"
            c="mensaje 3"
            d="mensaje 4"
            correct="c) mensaje 3"
          />
          <hr></hr>
          <Question
            texto='En el bloque de código, if(x==0){ System.out.println("mensaje1"); }else if(x<0){ System.out.println("mensaje2"); }else if(x%3==0 || x%2==0){ System.out.println("mensaje3"); }else{ System.out.println("mensaje4"); } ¿Qué mensaje se mostrará por consola si x vale 10?'
            a="mensaje 1"
            b="mensaje 2"
            c="mensaje 3"
            d="mensaje 4"
            correct="b) mensaje 3"
          />
          <hr></hr>
          <Question
            texto='En el bloque de código, if(x>0 op x==0){ System.out.println("x es no negativo"); } ¿Con qué operador debo sustituir op para que el mensaje mostrado por pantalla sea correcto?'
            a="=="
            b="||"
            c="&&"
            d="!"
            correct="b) ||"
          />
          <hr></hr>
          <Question
            texto='En el bloque de código, if(x==0){ System.out.println("mensaje1"); }else if(x<0){ System.out.println("mensaje2"); }else if(!(x%3==0 || x%2==0)){ System.out.println("mensaje3"); }else{ System.out.println("mensaje4"); } ¿Qué mensaje se mostrará por consola si x vale 7?'
            a="mensaje 4"
            b="mensaje 3"
            c="mensaje 1"
            d="mensaje 2"
            correct="b) mensaje 3"
          />
          <hr></hr>
          <Question
            texto="¿Qué resultado da la evaluación de la expresión, p && q || r cuando p es false, q es true y r es true? False/True. ¿Qué resultado da la evaluación de la expresión, p && (q || r) cuando p es false, q es false y r es true? False/True"
            a=""
            b=""
            c=""
            d=""
            correct="1) True / 2) False"
          />
          <hr></hr>
          <Question
            texto='En el bloque de código, if(x==0){ System.out.println("mensaje1"); }else if(x<0){ System.out.println("mensaje2"); }else if(x%3==0){ System.out.println("mensaje3"); }else{ System.out.println("mensaje4"); } ¿Para qué valores de x se mostrará por consola el mensaje “mensaje4”?'
            a="0"
            b="-1"
            c="3"
            d="10"
            e="-2"
            correct="a) 0 falsa / b) -1 falsa / c) 3 falsa / d) 10 verdadera / e) -2 falsa"
          />
          <hr></hr>
          <Question
            texto='En el bloque de código, int x = 0; if(ǃexp){ System.out.println("x es negativo"); } ¿con qué expresión debo sustituir exp para que se muestre por pantalla la cadena “x es negativo”?'
            a="false"
            b="x<0"
            c="x>=0"
            d="x>0"
            e="true"
            correct="a) false verdadera / b) x<0 verdadera / c) x>=0 falsa / d) x>0 verdadera / e) true falsa"
          />
          <hr></hr>
          <Question
            texto="¿Cuáles de los siguientes operadores en java son lógicos?"
            a="<="
            b="=="
            c="="
            d="!"
            e="&&"
            correct="a) <= falsa / b) == falsa / c) = falsa / d) ! verdadera / e) && verdadera"
          />
          <hr></hr>
          <Question
            texto='¿Qué resultado da la evaluación de la expresión, p && ǃ(q || r) cuando p es true, q es false y r es true? True / False. ¿Qué mensaje aparecerá por consola si se ejecuta la sentencia, System.out.println(x%2==0?"mens1":"mens2"); siendo x=7? mens1/mens2'
            a="true"
            b="false"
            c="mens1"
            d="mens2"
            correct="1) False / 2) mens2"
          />
          <hr></hr>
          <Question
            texto="¿Por qué el operador ternario (también llamado condicional) tiene ese nombre?"
            a="Porque tiene dos operandos"
            b="Porque devuelve tres valores"
            c="Porque tiene tres operandos"
            d="Porque devuelve dos valores de entre tres posibles"
            correct="c) Porque tiene tres operandos"
          />
          <hr></hr>
          <Question
            texto='En el bloque de código, if(x==0){ System.out.println("mensaje1"); }else if(x<0){ System.out.println("mensaje2"); }else{ System.out.println("mensaje3"); } ¿Para qué valores de x se mostrará por consola el mensaje “mensaje3”?'
            a="0"
            b="-1"
            c="3"
            d="10"
            e="-2"
            correct="a) 0 falsa / b) -1 falsa / c) 3 verdadera / d) 10 verdadera / e) -2 falsa"
          />
          <hr></hr>
          <Question
            texto='En el bloque de código, if(x%2==0){ System.out.println("hola!"); } ¿Para qué valores de x se muestra “hola!”?'
            a="1"
            b="2"
            c="3"
            d="4"
            e="0"
            correct="a) 1 falsa / b) 2 verdadera / c) 3 falsa / d) 4 verdadera / e) 0 verdadera"
          />
          <hr></hr>
          <Question
            texto='En el bloque de código, if(x%2!=0 || x==0){ System.out.println("hola!"); } ¿Para qué valores de x se muestra “hola!”?'
            a="1"
            b="2"
            c="3"
            d="4"
            e="0"
            correct="a) 1 verdadera/ b) 2 falsa / c) 3 verdadera / d) 4 falsa / e) 0 verdadera"
          />
          <hr></hr>
          <Question
            texto='¿Por qué operador lógico debo sustituir op para que la expresión, p || q op r valga false, si p es true, q es false y r es false?'
            a="||"
            b="!"
            c="Por ninguno. Siempre dará true"
            d="&&"
            correct="Por ninguno. Siempre dará true"
          />
          <hr></hr>
          <Question
            texto='En el bloque de código, int x=0; int y=x+1; if(exp) { System.out.println("x vale 0"); } ¿Con qué expresión debo sustituir exp para que se muestre por pantalla la cadena “x vale 0”?'
            a="y==0"
            b="x==0"
            c="y==1"
            d="false"
            e="true"
            correct="a) y==0 falsa/ b) x==0 verdadera / c) y==1 verdadera / d) false falsa / e) true verdadera"
          />
          <hr></hr>
        </div>
        <div className="container-lg">
          <h1>Tema 3: Bucles</h1>
          <Question
            texto="3.1 Un bucle do-while se ejecutará, como mínimo:"
            a="cero veces"
            b="una vez"
            c="infinitas veces"
            d="ninguna de las opciones anteriores es correcta"
            correct="b) una vez"
          />
          <hr></hr>
          <Question
            texto="3.2 El uso de llaves para encerrar el bloque de instrucciones de un bucle:"
            a="es siempre opcional"
            b="es opcional, si el bloque está formado por una única instrucción"
            c="en cualquier caso, su uso es obligatorio"
            d="el programador decide su uso"
            correct="b) es opcional, si el bloque está formado por una única instrucción"
          />
          <hr></hr>
          <Question
            texto="3.3 La instrucción que permite detener completamente las iteraciones de un bucle es:"
            a="stop"
            b="break"
            c="continue"
            d="finish"
            correct="b) break"
          />
          <hr></hr>
          <Question
            texto="3.4 La instrucción que permite detener la iteración actual de un bucle, continuando con la siguinte, si procede, es:"
            a="stop"
            b="break"
            c="continue"
            d="finish"
            correct="c) continue"
          />
          <hr></hr>
          <Question
            texto="3.5 De un bucle do-while, cuya condición depende de una serie de variables que en el bloque de instrucciones no se modifican, se puede afirmar:"
            a="que su número de iteraciones será siempre una"
            b="que el número de iteraciones será siempre par"
            c="que las variables cambiarán automáticamente en cualquier momento"
            d="ninguna de las opciones anteriores es correcta"
            correct="d) niguna de las opciones anteriores es correcta"
          />
          <hr></hr>
          <Question
            texto="3.6 ¿Cuántas veces se ejecutará el bloque de instruccines del bucle más interno en el siguiente fragmento de código? for (i=i: i<=10; i++) {for(i=1; i<=5; i++){System.out.println('Hola')}}"
            a="10 veces"
            b="5 veces"
            c="50 veces"
            d="infinitas veces"
            correct="c) 50 veces"
          />
          <hr></hr>
          <Question
            texto="3.7 Analiza el siguiente código y busca qué valores de a y b implican un menor número de iteraciones: for(int i=a; i<=a+b; i++) {for(int j=a+b; j>=0; j--)}}"
            a="a=1 y b=3"
            b="a=3 y b=1"
            c="a=1 y b=1"
            d="a=3 y b=3"
            correct=""
          />
          <hr></hr>
          <Question
            texto="3.8 En cada iteración, el incremento de un bucle for se ejecuta:"
            a="en primer lugar"
            b="después de la inicialización"
            c="después de evaluar la condición"
            d="justo al finalizar cada iteración"
            correct="d) justo al finalizar cada iteración"
          />
          <hr></hr>
          <Question
            texto="3.9 Una variable que se declara dentro de su bloque de instrucciones solo se podrá utilizar:"
            a="en cualquier parte del programa"
            b="en todos los bucles"
            c="dentro del bloque de instrucciones donde se ha declarado"
            d="todas las opciones anteriores son correctas"
            correct="c) dentro del bloque de instrucciones donde se ha declarado"
          />
          <hr></hr>
          <Question
            texto="3.10 En un bucle for, la inicialización, condición e incremento son:"
            a="todos obligatorios"
            b="todos opcionales"
            c="la inicialización siempre es obligatoria"
            d="la condición siempre es obligatoria"
            correct="b) todas opcionales"
          />
          <hr></hr>
          <h1>Cuestionarios de Clase 1º DAW, Tema 3: Bucles</h1>
          <Question
            texto="Si queremos que, a mitad de una iteración, la ejecución salte a la primera sentencia que sigue al bucle, usaremos:"
            a="jump"
            b="continue"
            c="break"
            d="finish"
            correct="c) break"
          />
          <hr></hr>
          <Question
            texto='Cuántas veces se ejecuta el bloque de instrucciones del bucle interior en el código: for (int i = 0; i < 6; i++) { for (int j = 0; j < 3; j++) { System.out.println(" i: " + i + " j: " + j); } }'
            a="18"
            b="9"
            c="6"
            d="3"
            correct="a) 18"
          />
          <hr></hr>
          <Question
            texto='¿Qué condición debo poner en el bucle del siguiente código, int x = 1; while (condición) { System.out.println(x); x++; } para que se muestren por consola todos los números enteros entre 1 y 10 inclusive?'
            a="x<10"
            b="x<=10"
            c="x>=10"
            d="x<11"
            e="x==10"
            correct="a) x<10 falsa / b) x<=10 verdadera / c) x>=10 falsa / d) x<11 verdadera / e) x==10 falsa"
          />
          <hr></hr>
          <Question
            texto="¿Cuáles de las siguientes estructuras corresponden a bucles?"
            a="do while"
            b="switch"
            c="if-then-else"
            d="while"
            e="for"
            correct="a) do-while verdadera / b) switch falsa / c) if-then-else falsa / d) while verdadera / e) for verdadera"
          />
          <hr></hr>
          <Question
            texto="¿Cuándo se evalúa la condición de un bucle while?"
            a="A la entrada de la propia estructura y después de cada ejecución de la última línea del cuerpo del bucle"
            b="Antes de ejecutarse la última línea del cuerpo del bucle"
            c="Antes de ejecutar cada instrucción del cuerpo del bucle"
            d="Después de ejecutarse la primera línea del cuerpo del bucle"
            correct="a) A la entrada de la propia estructura y después de cada ejecución de la última línea del cuerpo del bucle"
          />
          <hr></hr>
          <Question
            texto="Qué ocurre si dejamos vacía la condición en un bucle for:"
            a="El bucle solo puede terminar con una salida anticipada"
            b="No se ejecuta ninguna iteración"
            c="El bloque de instrucciones solo se ejecuta una vez"
            d="Se produce un bucle finito y el ordenador se queda “colgado”"
            correct="a) El bucle solo puede terminar con una salida anticipada"
          />
          <hr></hr>
          <Question
            texto="Cuántas veces se ejecuta el bloque de instrucciones del bucle interior en el código: for (int i = 0; i < 4; i++) { for (int j = 0; j < i; j++) { … } }"
            a="16"
            b="4"
            c="6"
            d="8"
            correct="c) 6"
          />
          <hr></hr>
          <Question
            texto="¿Qué condición debo poner en el bucle del siguiente código, int x=1 do { System.out.println(x); x++; } while (condición); para que se muestren por consola todos los números enteros entre 1 y 10 inclusive?"
            a="x<10"
            b="x<=10"
            c="x>=10"
            d="x<11"
            e="x==10"
            correct="a) x<10 falsa / b) x<=10 verdadera / c) x>=10 falsa / d) x<11 verdadera / e) x==10 falsa"
          />
          <hr></hr>
          <Question
            texto="¿Qué diferencia hay entre los bucles while y los bucles do-while?"
            a="El código de un bucle while siempre está controlado por un contador"
            b="El código de un bucle while puede no ejecutarse nunca, mientras que en un bucle do-while se ejecuta al menos una vez"
            c="El código de un bucle do-while puede no ejecutarse nunca, mientras que en un bucle while se ejecuta al menos una vez"
            d="Ninguna"
            correct="b) El código de un bucle while puede no ejecutarse nunca, mientras que en un bucle do-while se ejecuta al menos una vez"
          />
          <hr></hr>
          <Question
            texto="Si queremos que, a mitad del bloque de instrucciones de un bucle, la ejecución salte al principio de la siguiente iteración, usaremos la instrucción:"
            a="jump"
            b="break"
            c="goto"
            d="continue"
            correct="d) continue"
          />
          <hr></hr>
          <Question
            texto="¿En cuáles de las siguientes expresiones de la condición2 los bucles anidados son dependientes? for (int i = 0; condición1; i++) { for (int j = 0; condición2; j++) { … } }"
            a="j<10"
            b="j<i"
            c="i+j<10"
            d="j>0"
            e="j<1-i"
            correct="a) j<10 falsa / b) j<i verdadera / c) i+j<10 verdadera / d) j>0 falsa / e) j<1-i verdadera"
          />
          <hr></hr>
          <Question
            texto="¿Qué diferencia hay entre declarar los índices de control del bucle dentro de la estructura for y declararlas fuera, antes de ejecutarse el bucle?"
            a="ninguna"
            b="si se declaran dentro, son varaibles locales al bucle. SI no, siguen existiendo fuera del bucle"
            c="si se declaran fuera no existen dentro del bucle"
            d="hay que declararlas dos veces, dentro y fuera"
            correct=""
          />
          <hr></hr>
          <Question
            texto="De las tres partes, que forman el paréntesis de control de un bucle for, son obligatorias:"
            a="las tres"
            b="ninguna"
            c="la de la condición"
            d="la de incrementos"
            correct="b) ninguna"
          />
          <hr></hr>
          <Question
            texto="¿Cuántos índices se pueden declarar dentro de la zona de inicialización de un bucle for?"
            a="dos"
            b="los que se quieran"
            c="uno"
            d="ninguno"
            correct="b) los que se quieran"
          />
          <hr></hr>
          <Question
            texto="Si dejamos vacía la zona de incrementos en el paréntesis de control de un bucle for:"
            a="Se produce un bucle finito"
            b="Se incrementan automáticamente los índices"
            c="No se ejecuta el bucle ninguna vez"
            d="Hay que alterar los índices dentro del bloque de instrucciones para que no se produzca un bucle infinito"
            correct="d) Hay que alterar los índices dentro del bloque de instrucciones para que no se produzca un bucle infinito"
          />
          <hr></hr>
          <Question
            texto="Cuántas veces se ejecuta el bloque de instrucciones del bucle interior en el código: for (int i = 0; i < 4; i++) { for (int j = 0; j + i < 4; j++) { … } }"
            a="16"
            b="9"
            c="6"
            d="10"
            correct="d) 10"
          />
          <hr></hr>
          <Question
            texto="¿Cuándo deja de ejecutarse el cuerpo de un bucle while?"
            a="Cuando se llega a la última línea de código"
            b="Cuando la condición toma el valor false"
            c="Cuando la condición toma el valor true"
            d="Cuando la condición toma el valor 0"
            correct="b) Cuando la condición toma el valor false"
          />
          <hr></hr>
        </div>
        <div className="container-lg">
          <h1>Tema 4: Funciones</h1>
          <Question
            texto="4.1 Los parámetros en la llamada a una función en Java pueden ser opcionales si:"
            a="todos los parámetros son del mismo tipo"
            b="todos los parámetros son de distinto tipo"
            c="nunca pueden ser opcionales"
            d="siempre que el tipo devuelto no sea void"
            correct=""
          />
          <hr></hr>
          <Question
            texto="4.2 Una variable local (declarada dentro de una función) puede usarse:"
            a="en cualquier lugar del código"
            b="solo dentro del main"
            c="solo en la función donde se ha declarado"
            d="ninguna de las opciones anteriores es correcta"
            correct=""
          />
          <hr></hr>
          <Question
            texto="4.3 El tipo devuelto de todas las funciones definidas en nuestro programa tiene que ser siempre:"
            a="int"
            b="double"
            c="void"
            d="ninguna de las anteriores es correcta"
            correct="d) ninguna de las anteriores es correcta"
          />
          <hr></hr>
          <Question
            texto="4.4 ¿Qué instrucción permite a una función devolver un valor?"
            a="value"
            b="return"
            c="static"
            d="function"
            correct="b) return"
          />
          <hr></hr>
          <Question
            texto="4.5 La forma de distinguir entre dos o más funciones sobrecargadas es: "
            a="mediante su nombe"
            b="mediante el tipo devuelto"
            c="mediante el nombre de sus parámetros"
            d="mediante su lista de parámetros: número o tipos"
            correct="d) mediante su lista de parámetros: número o tipos"
          />
          <hr></hr>
          <Question
            texto="4.6 ¿Cuál es la definición de una función recursiva?"
            a="es aquella que se invoca desde dentro de su propio bloque de instrucciones"
            b="es aquella cuyo nombre permite la sobrecarga y además realiza alguna comprobación mediante if"
            c="es aquella cuyo bloque de instrucciones utiliza alguna sentencia if (lo que llamamos caso base)"
            d="es aquella que genera un bucle infinito"
            correct="a) es aquella que se invoca desde dentro de su propio bloque de instrucciones"
          />
          <hr></hr>
          <Question
            texto="4.7 El paso de parámetros a una función en Java es siempre: "
            a="un paso de parámetros por copia"
            b="un paso de parámetros por desplazamiento"
            c="un paso de parámetros recursivo"
            d="un paso de parámetros funcional"
            correct="a) un paso de parámetros por copia"
          />
          <hr></hr>
          <Question
            texto="4.8 En el caso de que una función devuelva un valor, ¿cuál es la recomendación con respecto a la instrucción return?"
            a="utilizar tantos como hagan falta"
            b="emplear tntos como hagan falta, pero siempre que se encuentren en bloques de instrucciones distintos"
            c="usar solo uno"
            d="utilizar solo uno, ue será siempre la primera instrucción de la función"
            correct="c) usar solo uno"
          />
          <hr></hr>
          <Question
            texto="4.9 ¿Cuáles de las siguientes operaciones se pueden implementar fácilmente mediante funciones recursivas?"
            a="an = a x an-1"
            b="esPar(n) = esImpar(n-1) y esImpar(n) = esPar(n-1)"
            c="suma(a,b) = suma(a+1, b-1)"
            d="todas las respuestas son correctas"
            correct="d) todas las respuestas son correctas"
          />
          <hr></hr>
          <Question
            texto="4.10 En los identificadores de las funciones, al igual que en los de las variables, se recomienda utilizar la siguiente nomenclatura: "
            a="suma_notas_alumnos()"
            b="sumanotasalumnos()"
            c="SumaNotasAlumnos()"
            d="sumaNotasAlumnos()"
            correct="d) sumaNotasAlumnos()"
          />
          <hr></hr>
          <h1>Cuestionarios de Clase 1º DAW, Tema 4: Funciones</h1>
          <Question
            texto="¿En qué orden deben pasarse los valores de los parámetros de entrada al invocar una función?"
            a="En el mismo de la definición de la función"
            b="Por orden alfabético"
            c="Por el orden en que se van a usar dentro del cuerpo de la función"
            d="Da igual"
            correct="a) En el mismo de la definición de la función"
          />
          <Question
            texto="En el siguiente código, int x = 1; {//bloque 1 int y = 2; {//bloque 2 int z = 3; System.out.println(z); int t = 4; {//bloque 3 int u=5; } } } la variable z existe en:"
            a="El bloque 1"
            b="El bloque 2"
            c="El bloque 3"
            d="En todo el código"
            correct="a) EL bloque 1 falsa / b) El bloque 2 verdadera / c) El bloque 3 verdadera / d) En todo el código falsa"
          />
          <Question
            texto="En el siguiente código, ¿cuál es el ámbito de la variable x? int x = 1; {//bloque 1 int y = 2; {//bloque 2 int z = 3; System.out.println(z); int t = 4; {//bloque 3 int u=5; } } }"
            a="Solo en el bloque 2"
            b="Solo en el bloque 1"
            c="Todo el código"
            d="Solo en el bloque 3"
            correct="c) Todo el código"
          />
          <Question
            texto="Sustituye los puntos suspensivos por la lista de parámetros en la siguiente definición: static double mediaPonderada(…) { return x * 0.4 + y * 0.6; }"
            a="int x, int y"
            b="double x, double y"
            c="String x, String y"
            d="boolean x, boolean y"
            e="byte x, byte y"
            correct="a) int x, int y verdadera / b) double x, double y verdadera / c) String x, String y falsa / d) boolean x, boolean y falsa / e) byte x, byte y verdadera"
          />
          <Question
            texto="Elige la palabra que completa la siguiente afirmación: Al bloque de instrucciones que se ejecutan cuando se invoca una función se le llama _____________ de la función."
            a="progrma"
            b="cabecera"
            c="bloque"
            d="cuerpo"
            correct="d) cuerpo"
          />
          <Question
            texto="La declaración de una función, con el tipo devuelto, el nombre y la lista de parámetros, pero sin el cuerpo, se llama:"
            a="resumen"
            b="nombre"
            c="declaración"
            d="prototipo"
            correct="d) prototipo"
          />
          <Question
            texto="¿Qué valor devuelve la siguiente función, int f(int x, int y) { int m = x; if (x < y) { m = y; } return m; } a partir de los valores que se le pasan como parámetros?"
            a="El máximo"
            b="La suma"
            c="La media"
            d="El mínimo"
            correct="a) El máximo"
          />
          <Question
            texto="¿Qué error hay en el siguiente código? int x = 1; {//bloque 1 {//bloque 2 int z = 3; int x = 5; System.out.println(x); int t = 4; {//bloque 3 int u=5; } } }"
            a="Se declara x dos veces"
            b="Se invoca x fuera de ámbito"
            c="El bloque 3 no es necesario"
            d="Se declara t en un lugar prohibido"
            correct="Se declara x dos veces"
          />
          <Question
            texto="¿Qué valor devuelve la siguiente función, int f(int x) { int p = x; for (int i = x-1; i > 0; i--) { p *= i; } return p; } a partir del valor que se le pasa como parámetro?"
            a="El producto de sus divisores"
            b="El factorial"
            c="El cuadrado"
            d="El cubo"
            correct="b) El factorial"
          />
          <Question
            texto="¿Qué valor devuelve la siguiente función, int f(int x, int n) { int p = 1; for (int i = 0; i < n; i++) { p *= x; } return p; } a partir de los valores que se le pasan como parámetros?"
            a="El producto de ambos"
            b="El primero elevado al segundo"
            c="La suma de ambos"
            d="El factorial del primero"
            correct="b) El primero elevado al segundo"
          />
          <Question
            texto="¿Qué valor devuelve la siguiente función, int f(int n) { int suma = 0; for (int i = 1; i <= n; i++) { suma += i; } return suma; } a partir del valor que se le pasa como parámetro?"
            a="El cuadrado de n"
            b="El doble de n"
            c="El factorial de n"
            d="La suma de todos los enteros positivos menores o iguales a n"
            correct="d) La suma de todos los enteros positivos menores o iguales a n"
          />
          <Question
            texto="Se llama función estática:"
            a="La que no cambia nunca"
            b="La que trabaja con variables que no se modifican"
            c="La que no devuelve ningún valor"
            d="La que se invoca desde una clase y no desde un objeto"
            correct="d) La que se invoca desde una clase y no desde un objeto"
          />
          <Question
            texto="En java, llamamos método a:"
            a="Una función que no admite parámetros de entrada"
            b="Una función que no devuelve ningún valor"
            c="Una función sin cuerpo"
            d="Una función"
            correct="d) Una función"
          />
          <Question
            texto="¿Qué son funciones sobrecargadas?"
            a="Son funciones invocadas desde más de un lugar del código"
            b="Son funciones con el mismo nombre y distinta lista de parámetros de entrada"
            c="Son funciones con más de un parámetro de entrada"
            d="Son funciones con el mismo nombre y la misma lista de parámetros de entrada"
            correct="b) Son funciones con el mismo nombre y distinta lista de parámetros de entrada"
          />
          <Question
            texto="¿Qué hace la siguiente función int f(int x, int y) { int m = y; if (x < y) { m = x; } return m; } con los valores que se le pasan como parámetros?"
            a="Devuelve la media"
            b="Devuelve la suma"
            c="Devuelve el máximo"
            d="Devuelve el mínimo"
            correct="d) Devuelve el mínimo"
          />
          <Question
            texto="¿Qué es una función recursiva?"
            a="Una función con muchos recursos"
            b="Una función que repite la misma tarea muchas veces"
            c="Una función que se invoca a sí misma"
            d="Una función que usa bucles en su definición"
            correct="c) Una función que se invoca a sí misma"
          />
          <Question
            texto="En el siguiente código, ¿cuál es el ámbito de la variable t? int x = 1; {//bloque 1 int y = 2; {//bloque 2 int z = 3; System.out.println(z); int t = 4; {//bloque 3 int u=5; } t++; } }"
            a="El bloque 1"
            b="Todo el código"
            c="Solo en el bloque 3"
            d="Desde su definición hasta el final del bloque 2"
            correct="d) Desde su definición hasta el final del bloque 2"
          />
          <Question
            texto="En java, llamamos ámbito de una variable a:"
            a="El nombre"
            b="La parte del código donde puede utilizarse"
            c="El conjunto de valores que puede tomar"
            d="Los valores máximo y mínimo que puede tomar"
            correct="b) La parte del código donde puede utilizarse"
          />
          <Question
            texto="¿Hasta cuántos parámetros de entrada puede tener una función?"
            a="ninguno"
            b="uno"
            c="dos"
            d="tantos como queramos"
            correct="d) tantos como queramos"
          />
          <Question
            texto="Cuando una función no devuelve ningún valor, su tipo devuelto se declara:"
            a="null"
            b="0"
            c="void"
            d="false"
            correct="c) void"
          />
          <Question
            texto="¿Qué error hay en el siguiente código? int x = 1; {//bloque 1 {//bloque 2 int z = 3; System.out.println(x); int t = 4; {//bloque 3 int u=5; } } }"
            a="Se invoca x fuera de ámbito"
            b="Se declara t en un lugar prohibido"
            c="Ninguno. Es correcto"
            d="El bloque 3 no es necesario"
            correct="c) Ninguno. Es correcto"
          />
        </div>
        <div className="container-lg">
          <h1>Tema 5: Tablas</h1>
          <Question
            texto="5.1 Una tabla puede almacenar datos de distintos tipos, como por ejemplo enteros, booleanos, reales, etc:"
            a="Cierto, las tablas siempre pueden almacenar datos de distintos tipos"
            b="Falso, las tablas solo pueden almacenar datos de un único tipo"
            c="Puede almacenar datos de distintos tipos siempre que estos sean numéricos"
            d="Puede almacenar datos de distintos tipos siempre que la longitud de los datos sea idéntica"
            correct="a) Cierto, las tablas siempre pueden almacenar datos de distintos tipos"
          />
          <hr></hr>
          <Question
            texto="5.2 En Java, la numeración de los índices que determina la identificación de cada elemento de una tabla comienza en:"
            a="cero"
            b="uno"
            c="depende del tipo de dato de la tabla"
            d="es configurable por el usuario"
            correct="a) cero"
          />
          <hr></hr>
          <Question
            texto="5.3 Si en una tabla de 10 elementos utilizamos el elemento con índice 11 (que se encuentra fuera de rango):"
            a="al salir del rango de la longitud, Java redimensiona la talba de forma automática"
            b="no es posible y produce un error"
            c="las tablas tienen un comportamiento circular y utilizar el indice 11 es idéntico a utilizar el índice 1"
            d="ninguna de las anteriores respuesta es cierta"
            correct="b) no es posible y produce un error"
          />
          <hr></hr>
          <Question
            texto="5.4 ¿Qué método de la clase Arrays permite realizar una búsqueda dicotómica en una tabla?"
            a="Arrays.search()"
            b="Arrays.find()"
            c="Arrays.binarySearch()"
            d="cualquiera de los métodos anteriores realiza una búsqueda"
            correct="c) Arrays.binarySearch()"
          />
          <hr></hr>
          <Question
            texto="5.5 Con respecto a las tablas, el operador new:"
            a="destruye, crea y redimensiona tablas"
            b="destruye y crea tablas"
            c="crea tablas"
            d="destruye tablas"
            correct="c) crea tablas"
          />
          <hr></hr>
          <Question
            texto="5.6 La forma de invocar al recolector de basura es:"
            a="mediante System.garbageCollector()"
            b="mediante el operador new"
            c="mediante Arrays.garbageCollector()"
            d="ninguna de las anteriores respuestas es correcta"
            correct="d) ninguna de las anteriores respuestas es correcta"
          />
          <hr></hr>
          <Question
            texto="5.7 La forma de conocer la longitud de ua tabla t es mediante:"
            a="t.size"
            b="t.elements"
            c="t.length"
            d="Arryas.size(t)"
            correct="c) t.length"
          />
          <hr></hr>
          <Question
            texto="5.8 La comparación del contenido (los elementos) de dos tablas se realiza utilizando:"
            a="Arrays.compare()"
            b="El operador =="
            c="Arrays.equals()"
            d="Arrays.same()"
            correct="b) El operador =="
          />
          <hr></hr>
          <Question
            texto="¿Qué condición tiene que cumplir una tabla para que podamos realizar búsquedas dicotómicas en ella?"
            a="que esté ordenada"
            b="que esté ordenada y sea una tabla de enteros"
            c="que no esté ordenada"
            d="no importa si la tabla está ordenada, lo realmente importante es que sea de algún tipo numérico"
            correct="a) que esté ordenada"
          />
          <hr></hr>
          <Question
            texto="¿Cuál es la principal diferencia entre Arrays.copyOf() y System.arraycopy()?"
            a="no existe diferencia alguna, ambos métodos son idénticos"
            b="Arrays.copyOf() copia miemtras System.arraycopy() copia y compara"
            c="Arrays.copyOf() copia entre tablas existentes mientras System.arraycopy() crea una nueva talva y copia en ella"
            d="Arrays.copyOf() crea una nueva tabla y copia en ella mientras System.arraycopy() solo copia entre tablas ya creadas"
            correct="d) Arrays.copyOf() crea una nueva tabla y copia en ella mientras System.arraycopy() solo copia entre tablas ya creadas"
          />
          <hr></hr>
          <h1>Cuestionarios de Clase 1º DAW, Tema 5 Tablas</h1>
          <Question
            texto="¿Qué valor se muestra por pantalla cuando se ejecuta el siguiente código? int[] t=new int[3]; for (int i = 0; i < t.length; i++) { t[i] = i + 1; } System.out.println(t[0]);"
            a="-1"
            b="1"
            c="0"
            d="null"
            correct="b) 1"
          />
          <hr></hr>
          <Question
            texto="¿Qué valor se muestra por pantalla cuando se ejecuta el siguiente código? int[] t=new int[3]; for (int i = 0; i < t.length; i++) { t[i] = i + 1; } System.out.println(t[3]);"
            a="Ninguno. Da error porque el índice 3 está fuera de rango"
            b="-1"
            c="1"
            d="0"
            correct="a) Ninguno. Da error porque el índice 3 está fuera de rango"
          />
          <hr></hr>
          <Question
            texto="¿Hasta cuántos índices puede tener una tabla?"
            a="1"
            b="2"
            c="Tantos como queramos"
            d="3"
            correct="c) Tantos como queramos"
          />
          <hr></hr>
          <Question
            texto="¿Qué hace el recolector de basura?"
            a="borra las variables que no se usan en el resto del código"
            b="recicla los bloques de memoria sin referenciar"
            c="borra las variables inútiles"
            d="borra las variables que no referencian ningún dato"
            correct="b) recicla los bloques de memoria sin referenciar"
          />
          <hr></hr>
          <Question
            texto="Arrays es:"
            a="Una clase con una serie de métodos estáticos útiles para la manipulación de tablas"
            b="Nada. Lo que tiene sentido es Array"
            c="Una función"
            d="Un tipo de datos"
            correct="a) Una clase con una serie de métodos estáticos útiles para la manipulación de tablas"
          />
          <hr></hr>
          <Question
            texto="¿Qué rango de valores (inclusive) puede tomar el índice de la tabla definida en la siguiente sentencia? int[] t = new int[10]"
            a="entre 0 y 9"
            b="entre 1 y 10"
            c="entre 0 y 10"
            d="entre 1 y 9"
            correct="a) entre 0 y 9"
          />
          <hr></hr>
          <Question
            texto="En el siguiente código, int[] f(int[] t) { int[] dobles = new int[t.length]; for (int i = 0; i < t.length; i++) { dobles[i] = 2 * t[i]; } return dobles; } ¿De qué tipo es el valor devuelto por la función f()?"
            a="char"
            b="referencia a tabla de enteros"
            c="int"
            d="booleano"
            correct="b) referencia a tabla de enteros"
          />
          <hr></hr>
          <Question
            texto="¿Qué valor se muestra por pantalla cuando se ejecuta el siguiente código? int[] t=new int[3]; System.out.println(t[0]);"
            a="-1"
            b="1"
            c="null"
            d="0"
            correct="d) 0"
          />
          <hr></hr>
          <Question
            texto="Cuando escribimos, int[] t = new int[3]; la variable t contiene:"
            a="una cadena de caracteres"
            b="un valor int"
            c="un valor byte"
            d="una referencia"
            correct="d) una referencia"
          />
          <hr></hr>
          <Question
            texto="La búsqueda _____ está especialmente diseñada para buscar un valor dado en una tabla cuyos elementos están ordenados."
            a="binaria"
            b="compuesta"
            c="secuencial"
            d="ninguna es correcta"
            correct="a) binaria"
          />
          <hr></hr>
          <Question
            texto="En el siguiente código, ¿cuál de las condiciones daría error? for (int i = 0; condición ; i ++) { System.out.println(t[i]); }"
            a="i <= t.length - 1"
            b="i < = t.length"
            c="i < t.length"
            d="i < t.length - 1"
            correct="b) i < = t.length"
          />
          <hr></hr>
          <Question
            texto="La búsqueda ______ sirve para buscar un valor dado en una tabla cuyos elementos no están ordenados."
            a="secuencial"
            b="binaria"
            c="compuesta"
            d="alternativa"
            correct="a) secuencial"
          />
          <hr></hr>
          <Question
            texto="La longitud de la tabla t se obtiene con:"
            a="t.length"
            b="length(t)"
            c="t.length()"
            d="t.size()"
            correct="a) t.length"
          />
          <hr></hr>
          <Question
            texto="En el siguiente código, int[] t = {1,2,3}; int n = f(t); ¿De qué tipo es el valor pasado como parámetro a la función f()?"
            a="int"
            b="char"
            c="referencia"
            d="booleano"
            correct="c) referencia"
          />
          <hr></hr>
        </div>
        <div className="container-lg">
          <h1>Tema 6: Cadenas de caracteres</h1>
          <Question
            texto="6.1 En Java, al igual que en otros muchos lenguajes de programación, las secuencias de escape se escriben mediante:"
            a="dos puntos (:)"
            b="el carácter u mayúscula (U)"
            c="el carácter u minúscula (u)"
            d="una barra invertida (\)"
            correct="d) una barra invertida (\)"
          />
          <hr></hr>
          <Question
            texto="6.2 La clase Character se encuentra ubicada en el paquete:"
            a="java.util"
            b="java.Character"
            c="java.lang"
            d="java.unicode"
            correct="c) java.lang"
          />
          <hr></hr>
          <Question
            texto="6.3 La aritmética de caracteres permite que existe una fuerte relación entre el tipo char y el tipo int. Sabiendo que el carácter 'a' tiene una representción numérica de 61hex, ¿cómo conseguiremos mostrar el carácter 'i' por consola, a partir de la siguiente variable? int codepoint = 0x61;"
            a="System.out.println((char) (codepoint + '8'));"
            b="System.out.println((char) (codepoint - '8'));"
            c="System.out.println((char) (codepoint - 8));"
            d="System.out.println((char) (codepoint + 8));"
            correct="d) System.out.println((char) (codepoint + 8));"
          />
          <hr></hr>
          <Question
            texto="6.4 Marca la opción que devuelve true:"
            a="Character.isLetter('2');"
            b="Character.isUpperCase('2');"
            c="Character.isLowerCase('2');"
            d="Character.isLetterOrDigit('2');"
            correct="d) Character.isLetterOrDigit('2');"
          />
          <hr></hr>
          <Question
            texto="6.5 Señala qué opción es cierta:"
            a="'a' es un carácter"
            b="'a' es una cadena de caracteres"
            c=" &quot;a&quot; es un carácter"
            d="todas las opciones anteriores son ciertas"
            correct="a) 'a' es un carácter"
          />
          <hr></hr>
          <Question
            texto="6.6 La forma correcta de comparar alfabéticamente dos cadenas es mediante:"
            a="el operador =="
            b="el método equal() de String"
            c="el método equal() de Character"
            d="todas permiten comparar cadenas"
            correct="b) el método equal() de String"
          />
          <hr></hr>
          <Question
            texto="6.7 La forma de extraer el cuarto carácter de la cadena contenida en la variable cad es mediante:"
            a="cad.indexOf(3)"
            b="cad.charAt(3)"
            c="cad.position(3)"
            d="cad.extract(3)"
            correct="b) cad.charAt(3)"
          />
          <hr></hr>
          <Question
            texto="6.8 La forma de concatenar dos cadenas es mediante:"
            a="el operador +"
            b="el operador +="
            c="el método concat()"
            d="todas permiten concatenar cadenas"
            correct="d) todas permiten concatenar cadenas"
          />
          <hr></hr>
          <Question
            texto="6.9 El método que permite eliminar los caracteres blancos del principio y el final de una cadena es:"
            a="isWhiteSpace()"
            b="deleteWhiteSpace()"
            c="strip()"
            d="stripLeading()"
            correct="c) strip()"
          />
          <hr></hr>
          <Question
            texto="6.10 Existe una relación entre las cadenas (clase String) y las tablas de caracteres (char[]). ¿Qué métodos permiten convertir un String en un char[]?"
            a="toCharArray()"
            b="valueOf()"
            c="convertString()"
            d="empty()"
            correct="a) toCharArray()"
          />
          <hr></hr>
          <h1>Cuestionarios de Clase 1º DAW, Tema 6 Cadenas de caracteres</h1>
          <Question
            texto="Cuál de las siguientes secuencias de escape es correcta:"
            a="Nueva línea: \l"
            b="Tabulador: \t '"
            c="Comilla simple: \singlequote"
            d="Retorno de carro: \c"
            correct="b) Tabulador: \t '"
          />
          <hr></hr>
          <Question
            texto="Relaciona cada método de String con el tipo de comparación que realiza."
            a="Comparación alfabética"
            b="Comparación de igualdad"
            c="Comparación alfabética sin distinguir entre mayúsculas ni minúsculas"
            d=""
            correct="a) Comparación alfabética compreTo() / b) Comparación de igualdad equals() / c) Comparación alfabética sin distinguir entre mayúsculas ni minúsculas compareToIgnoreCase()"
          />
          <hr></hr>
          <Question
            texto="Qué método de String permite concatenar dos cadenas:"
            a="add()"
            b="concat()"
            c="plus()"
            d="join()"
            correct="b) concat()"
          />
          <hr></hr>
          <Question
            texto="Cómo convierto valores de otros tipos a una cadena de caracteres:"
            a="con valueOf()"
            b="con convert()"
            c="con transform()"
            d="con values()"
            correct="a) con valueOf()"
          />
          <hr></hr>
          <Question
            texto="Elige la palabra que completa la siguiente afirmación: El método _____ de String separa una cadena en distintas partes a partir de un separador."
            a="split()"
            b="values()"
            c="charAt()"
            d="Todas son correctas"
            correct="a) split()"
          />
          <hr></hr>
          <Question
            texto="Cuáles de los siguientes literales puede contener una variable de tipo String:"
            a="1234"
            b="1234.0"
            c="'1234'"
            d="&quot;1234&quot;"
            e="uno dos tres cuatro"
            correct="d) &quot;1234&quot; verdadera / e) uno dos tres cuatro verdaderas / a), b), c) falsas"
          />
          <hr></hr>
          <Question
            texto="Para conocer qué carácter se encuentra en una posición determinada de una cadena disponemos del método de String:"
            a="position()"
            b="charAt()"
            c="index()"
            d="char()"
            correct=") charAt()"
          />
          <hr></hr>
          <Question
            texto="Cuál será el resultado de la siguiente operación de aritmética de caracteres: 'e' - 2"
            a="'c'"
            b="3"
            c="'g'"
            d="'e'"
            correct="a) 'c'"
          />
          <hr></hr>
          <Question
            texto="Cuáles de los siguientes conceptos engloba un carácter:"
            a="Cualquier letra"
            b="Una frase"
            c="Un número"
            d="Un ideograma"
            e="Una palabra"
            f="Cualquier símbolo"
            correct="a) / c) / f) verdaderas | b) / d) / e) falsas"
          />
          <hr></hr>
          <Question
            texto="Cuáles de las siguientes maneras permite comprobar si la variable cad de tipo String es una cadena vacía:"
            a="if (cad == &quot;&quot;)"
            b="if (cad.isEmpty())"
            c="f (cad.length() == 0)"
            d="if (cad.equals(0))"
            correct="b) / c) verdaderas | a) / d) falsas"
          />
          <hr></hr>
          <Question
            texto="Elige la palabra que completa la siguiente afirmación: La clase ______ puede almacenar secuencias de caracteres."
            a="String"
            b="Object"
            c="Array"
            d="Char"
            correct="a) String"
          />
          <hr></hr>
          <Question
            texto="En el caso de no encontrar lo que se busca, qué devuelve el método indexOf():"
            a="Un número indeterminado"
            b="null"
            c="-1"
            d="0"
            correct="c) -1"
          />
          <hr></hr>
          <Question
            texto="Selecciona la forma correcta con la que se puede comparar cadenas (de tipo String)"
            a="=="
            b="equals()"
            c="equalsIgnoreCase()"
            d="<="
            e="<"
            f="compareTo()"
            correct="b) / c) / f) verdaderas | a) / d) / e) "
          />
          <hr></hr>
          <Question
            texto="Cuáles son las formas de representar un code point en un código Java:"
            a="En hexadecimal. Por ejemplo \u1234"
            b="En decimal. Por ejemplo 1234"
            c="Con un mega-carácter. Por ejemplo @1234"
            d="Entrecomillado simple. Por ejemplo '1234'"
            correct="a) / b) verdaderas | c) / d) falsa"
          />
          <hr></hr>
          <Question
            texto='Qué mostrará en consola el siguiente fragmento de código: String num = "1234"; System.out.println(num.strlen());'
            a="&quot;1234&quot;"
            b="1234"
            c="4"
            d="3"
            correct="c) 4"
          />
          <hr></hr>
          <Question
            texto="Qué funcionalidad realiza el método Character.isDigit(char c)"
            a="Todas las anteriores son ciertas"
            b="Especifica si el carácter c es una letra"
            c="Indica si el carácter c contiene un dígito"
            d="Especifica si la variable c es digital"
            correct="c) Indica si el carácter c contiene un dígito"
          />
          <hr></hr>
          <Question
            texto="Elige el operador que completa la siguiente afirmación: El operador ____ sirve para unir o concatenar dos cadenas."
            a="+"
            b="-"
            c="=="
            d="todas son correctas"
            correct="a) +"
          />
          <hr></hr>
          <Question
            texto="Con cuál de las siguientes opciones tiene la clase String una conversión directa:"
            a="Con el tipo primitivo char"
            b="Con las tablas de caracteres: char[]"
            c="Con la clase Scanner"
            d="Con cualquier tipo primitivo"
            correct="b) Con las tablas de caracteres: char[]"
          />
          <hr></hr>
          <Question
            texto="Elige la palabra que completa la siguiente afirmación: El método _____ de String permite buscar en una cadena desde el final."
            a="lastIndexOf()"
            b="indexOf()"
            c="index()"
            d="lastIndex()"
            correct="a) lastIndexOf()"
          />
          <hr></hr>
          <Question
            texto="Elige la palabra que completa la siguiente afirmación: El método ________ de Character distingue si una variable de tipo char contiene el espacio en blanco que se consigue con la barra espaciadora."
            a="Ninguna de los anteriores"
            b="isSpaceChar()"
            c="spaceBar()"
            d="isEmpty()"
            correct="b) isSpaceChar()"
          />
          <hr></hr>
        </div>
        <div className="container-lg">
          <h1>Tema 7: Clases</h1>
          <Question
            texto="7.1 Dos clases se consideran vecinas siempre y cuando:"
            a="sean visibles"
            b="ambas dispongan del mismo número de constructores"
            c="pertenezcan al mismo paquete"
            d="todo lo anterior ha de cumplirse para que dos clases sean vecinas"
            correct="c) pertenezcan al mismo paquete"
          />
          <hr></hr>
          <Question
            texto="7.2 Un miembro cuyo modificador de acceso es private será visible desde:"
            a="todas las clases vecinas"
            b="todas las clases externas"
            c="es indistinto el paquete, pero será visible siempre que se importe la clase que lo contiene"
            d="ninguna de las respuesta anteriores"
            correct=""
          />
          <hr></hr>
          <Question
            texto="7.3 Si desde un constructor queremos invocar a otro constructor de la misma clase, tendremos que usar:"
            a="set()"
            b="get()"
            c="this()"
            d="this"
            correct="c) this()"
          />
          <hr></hr>
          <Question
            texto="7.4 Si por error dejamos un objeto sin ninguna referencia, siempre podremos volver a referenciarlo mediante."
            a="la referencia this"
            b="la referencia null"
            c="utilizando new"
            d="es imposible"
            correct="d) es imposible"
          />
          <hr></hr>
          <Question
            texto="7.5 ¿Qué hace el operador new?"
            a="construye un objeto, invoca al constructor y devuelve su referencia"
            b="construye un objeto, comprueba que su clase esté importada y devuelve su referencia"
            c="busca en memoria un objecto del mismo tipo, invoca al constructor y devuelve su referencia"
            d="busca en memoria un objecto del mismo tipo y devuelve su referencia"
            correct="a) construye un objecto, invoca al constructor y devuelve su referencia"
          />
          <hr></hr>
          <Question
            texto="7.6 Cuando hablamos de miembros de una clase, nos estamos refiriendo a:"
            a="todos los atributos"
            b="todos los métodos"
            c="todos los atribuos y métodos, indistintamente de los modificadores de acceso utilizados"
            d="todos los atributos y métodos que son visibles por sus clases"
            correct="c) todos los atribuos y métodos, indistintamente de los modificadores de acceso utilizados"
          />
          <hr></hr>
          <Question
            texto="7.7 En la definición de una clase, los únicos modificadores de acceso que se pueden utilizar son:"
            a="public"
            b="public y el modificador de acceso por defecto"
            c="public, el modificador de acceso por defecto y private"
            d="el modificador class"
            correct="b) public y el modificador de acceso por defecto"
          />
          <hr></hr>
          <Question
            texto="7.8 ¿Qué diferencia un atributo estático definido en una clase de otro que no lo es?"
            a="el atributo estático es visible por todas las clases vecinas, mientras que el no estático solo será visible para las clases que usen importación"
            b="solo existe una copia del atributo estático en la clase, mientras que el atributo no estático tendrá una copia en cada uno de los objectos"
            c="existe una copia del atributo estático en todos y cada uno de los objetos, mientras que el atributo no estático solo existe una copia en la clase "
            d="ambos disponen de copias en cada objeto, pero el atributo no estático es accesible mediante la clase y el no estático es accesible mediante los objetos"
            correct="b) solo existe una copia del atributo estático en la clase, mientras que el atributo no estático tendrá una copia en cada uno de los objectos"
          />
          <hr></hr>
          <Question
            texto="7.9 ¿Qué efecto tienen las siguientes líneas de código: Cliente c; c.nombre = &quot;Pepita&quot;"
            a="inicializar el atributo nombre de Cliente con el valor <<Pepita>>"
            b="invoca al constructor y posteriormente asigna el valor <<Pepita>> al atributo nombre, siempre y cuando este sea público"
            c="si el atributo nombre es público, se le asigna un valor, pero si el atributo es privado, producirá un error."
            d="siempre produce un error"
            correct="d) siempre produce un error"
          />
          <hr></hr>
          <Question
            texto="7.10 La ocultación de atributos puede definirse como:"
            a="el proceso en el que un atributo pasa de ser público a privado"
            b="el proceso en el que se define una variable local (en un método) con el mismo identificador que un atributo"
            c="el proceso en el que un atributo estático deja de serlo"
            d="todas las respuestas son correctas"
            correct="b) el proceso en el que se define una variable local (en un método) con el mismo identificador que un atributo"
          />
          <hr></hr>
          <h1>Cuestionarios de Clase 1º DAW, Tema 7 Clases</h1>
          <Question
            texto="A partir de la siguiente situación de la referencia de las variables a y b, podemos afirmar:"
            a='Las modificaciones realizadas en el objeto a partir de la variable "a" son independiente de las modificaciones realizadas con la variable "b".'
            b='Si asigno null a la variable "b", el recolector de basura destruirá el objeto.'
            c="Cualquier modificación realizada en el objeto con una variable será visible usando la otra variable."
            d='Si asigno null a la variable "a", el recolector de basura destruirá el objeto.'
            correct="c) Cualquier modificación realizada en el objeto con una variable será visible usando la otra variable."
          />
          <hr></hr>
          <Question
            texto="Selecciona la frase correcta."
            a="Una clase puede tener muchos objetos de su tipo"
            b="Pueden existir objetos que no pertenezcan a ninguna clase"
            c="Las clases y los objetos no tienen relación alguna"
            d="Un objeto puede ser del tipo de muchas clases"
            correct="a) Una clase puede tener muchos objetos de su tipo"
          />
          <hr></hr>
          <Question
            texto="El recolector de basura destruye los objetos que son inútiles liberando la memoria que ocupa. ¿Cada cuánto tiempo se ejecuta el recolector de basura?"
            a="Cada vez que se crea un nuevo objeto mediante el operador new."
            b="Cada segundo."
            c="Cada cinco segundos."
            d="No sabemos cuándo entrará en juego el recolector de basura."
            correct="d) No sabemos cuándo entrará en juego el recolector de basura."
          />
          <hr></hr>
          <Question
            texto="Un constructor"
            a="Debe tener el mismo nombre que la clase a la que pertenece"
            b="Puede tener cualquier nombre siempre que se especifique en la definición de la clase: "
            c="Puede sobrecargarse"
            d="Puede ser invocado durante cualquier momento de la vida del objeto"
            e="En el caso de que no se defina uno, Java definirá uno por defecto para la clase"
            correct="a) / c) / e) verdaders | b) / d) falsas "
          />
          <hr></hr>
          <Question
            texto="Ordena las fases del proceso de creación de un objeto, paso a paso, que lleva a cabo el operador new:"
            a="Busca en memoria un espacio suficientemente grande para albergar un objeto del tipo indicado"
            b="Invoca el constructor"
            c="Invoca el constructor"
            d="Devuelve la referencia del objeto recién creado"
            correct="1) Busca en memoria un espacio suficientemente grande para albergar un objeto del tipo indicado / 2) Construye el objeto / 3) Invoca el constructor / 4) Devuelve la referencia del objeto recién creado"
          />
          <hr></hr>
          <Question
            texto="Relaciona cada concepto con la definición que le corresponde."
            a="Clases vecinas"
            b="Clases externas"
            c=""
            d=""
            correct="clases vecinas: clases que pertenecen al mismo paquete / clases externas: clases que se han definido en paquetes distintos"
          />
          <hr></hr>
          <Question
            texto="Elige la palabra que completa la siguiente afirmación: Para permitir que un atributo no sea visible por ninguna otra clase tendrá que estar definido con el modificador de acceso"
            a="private"
            b="public"
            c="static"
            d="null"
            correct="a) private"
          />
          <hr></hr>
          <Question
            texto="A partir del siguiente diagrama de clases. ¿Qué métodos, como mínimo, tendremos que definir para garantizar que todos los atributos pueden ser modificados y su valor puede ser conocido, tanto para clases externas como vecinas?"
            a="getA(), setA(), getB(), setB(), getC() y setC()"
            b="getA() y setA()"
            c="getA(), setA(), getC() y setC()"
            d="getA(), setA(), getB() y setB()"
            correct="c) getA(), setA(), getC() y setC()"
          />
          <hr></hr>
          <Question
            texto="Indica las frases correctas con respecto a this()"
            a="Permite invocar cualquier método de una clase"
            b="Permite invocar, desde un constructor, a otros constructores"
            c="Siempre tiene que ser utilizado en la primera línea de un constructor"
            d="Puede usarse tanto en minúsculas, this(), como en mayúsculas, This()"
            e="Sustituye al operador new en clases con atributos estáticos"
            correct="b) / c) verdaderas | a) / d) / e) falsas"
          />
          <hr></hr>
          <Question
            texto="Qué es una clase envoltorio o wrapper."
            a="Son clases que internamente tienen otras clases públicas."
            b="Son clases que internamente contienen un dato de tipo primitivo"
            c="Son clases que solo contienen atributos de tipo primitivo"
            d="Aunque se les llama clases, en realidad son paquetes"
            correct="b) Son clases que internamente contienen un dato de tipo primitivo"
          />
          <hr></hr>
          <Question
            texto="Elige la palabra que completa la siguiente afirmación: Un ____ es aquel del que no existe una copia en cada objeto."
            a="atributo final"
            b="variable final"
            c="atributo estático"
            d="atributo no estático"
            correct="c) atributo estático"
          />
          <hr></hr>
          <Question
            texto="Qué diferencia existe entre: Integer n1; int n2;"
            a="Son exactamente iguales"
            b="Ninguna de las anteriores es cierta"
            c="Ambos almacenarán un valor entero, pero n1 es un objeto mientras n2 es un tipo primitivo"
            d="la variable n1 puede guardar cualquier tipo primitivo, mientras que n2 solo puede almacenar enteros"
            correct="c) Ambos almacenarán un valor entero, pero n1 es un objeto mientras n2 es un tipo primitivo"
          />
          <hr></hr>
          <Question
            texto="Cuáles son los modificadores de acceso para miembros de una clase."
            a="public"
            b="por defecto"
            c="private"
            d="static"
            e="final"
            correct="a) / b) / c) verdaderas | d) / e) falsa"
          />
          <hr></hr>
          <Question
            texto="Elige la palabra que completa la siguiente afirmación: La clase Character es un envoltorio del tipo primitivo char."
            a="String"
            b="Char"
            c="Character"
            d="Object"
            correct="c) Character"
          />
          <hr></hr>
          <Question
            texto="Elige la palabra que completa la siguiente afirmación: Una _____ puede entenderse como la ubicación (o identificación) de un objeto en memoria."
            a="referencia"
            b="secuencia"
            c="clase"
            d="ninguna es corecta"
            correct="a) referencia"
          />
          <hr></hr>
          <Question
            texto="Un paquete se define como:"
            a="Un contenedor de miembros."
            b="Un contenedor de atributos."
            c="Un contenedor de métodos."
            d="Un contenedor de clases."
            correct="d) Un contenedor de clases."
          />
          <hr></hr>
          <Question
            texto="Elige la palabra que completa la siguiente afirmación: La palabra reservada ____ hace referencia al objeto actual."
            a="this"
            b="new"
            c="contructor"
            d="super"
            correct="a) this"
          />
          <hr></hr>
          <Question
            texto="Relaciona cada concepto con la definición que le corresponde"
            a="Variable de bloque"
            b="Variable local"
            c="atributo"
            d=""
            correct="Variable de bloque → Variable cuyo ámbito es el bloque de instrucciones de una estructura de control / Variable local → Variable cuyo ámbito es un método / Atributo → Variable cuyo ámbito es una clase"
          />
          <hr></hr>
          <Question
            texto="Cuáles son los elementos que componen una clase:"
            a="Atributos"
            b="Habilidades"
            c="Métodos"
            d="Paquetes"
            e="Carpetas"
            correct="a) / c) verdaderas | b) / d) / e) falsas"
          />
          <hr></hr>
          <Question
            texto="En el caso de que una variable local o de bloque oculte un atributo, ¿cómo podemos acceder a él?"
            a="objecto.atributo"
            b="this.atributo"
            c="class.atributo"
            d="global.atributo"
            correct="b) this.atributo"
          />
          <hr></hr>
        </div>
        <div className="container-lg">
          <h1>Tema 8: Herencias</h1>
          <Question
            texto="8.1 Sobre una subclase es correcto afirmar que:"
            a="tiene menos atributos que su superclase"
            b="tiene menos miembros que su superclase"
            c="hereda los miembros no privados de su superclase"
            d="hereda todos los miembros de su superclase"
            correct="c) hereda los miembros no privados de su superclase"
          />
          <hr></hr>
          <Question
            texto="8.2 En relación con las clases abstractas, es correcto señalar que: "
            a="implementan todos sus métodos"
            b="no implementan ningún método"
            c="no tienen atributos"
            d="tienen algún método abstracto"
            correct="d) tienen algún método abstracto"
          />
          <hr></hr>
          <Question
            texto="8.3 ¿En qué consiste la sustitución u overriding?"
            a="en sustituir un método heredado por otro implementado en la propia clase"
            b="en sustituir un atributo por otro del mismo nombre"
            c="en sustitui una clase por una subclase"
            d="en sustitui el valor de una variable por otro"
            correct="a) en sustituir un método heredado por otro implementado en la propia clase"
          />
          <hr></hr>
          <Question
            texto="8.4 Sobre la clase Object es cierto indicar que:"
            a="es abstracta"
            b="hereda de todas las demás"
            c="tiene todos sus métodos abstractos"
            d="es superclase de todas las demás clases"
            correct="d) es superclase de todas las demás clases"
          />
          <hr></hr>
          <Question
            texto="8.5 ¿Cuál de las siguientes afirmaciones es correcta sobre el método equals()?"
            a="hay que implementarlo, ya que es abstracto"
            b="sirve para comparar solo objectos de las clase Object"
            c="se hereda de Object, pero debemos reimplementarlo al definirlo en una clase"
            d="no hay que implementarlo, ya que se hereda de Object"
            correct="c) se hereda de Object, pero debemos reimplementarlo al definirlo en una clase"
          />
          <hr></hr>
          <Question
            texto="8.6 ¿Cuál de las siguientes afirmaciones sobre el método toString() es correcta?"
            a="sirve para mostrar la información que nos interesade un objecto"
            b="convierte automáticamente un objeto en una cadena"
            c="encadena varios objetos"
            d="es un método abstracto de Object que tenemos que implementar"
            correct="a) sirve para mostrar la información que nos interesa de un objeto"
          />
          <hr></hr>
          <Question
            texto="8.7 ¿Cuál de las siguientes afirmaciones sobre el método getClass es correcta?"
            a="convierte los objetos en clases"
            b="obtiene la clase a la que pertenece un objeto"
            c="obtiene la superclase de una clase"
            d="obtiene una clase a partir de su nombre"
            correct="b) obtiene la clase a la que pertenece un objeto"
          />
          <hr></hr>
          <Question
            texto="8.8 Una clase puede heredar:"
            a="de una clase"
            b="de dos clases"
            c="de todas las clases que queramos"
            d="solo de la clase Object"
            correct="a) de una clase"
          />
          <hr></hr>
          <Question
            texto="8.9 La selección dinámica de métodos:"
            a="se produce cuando una variable cambia de valor durante la ejecución de un programa "
            b="es el cambio de tipo de una variable en tiempo de ejecución"
            c="es la asignación de un mismo objecto a más de una variable en tiempo de ejecución"
            d="es la ejecución de distintas implementaciones de un mismo método, asignando objetos de distintas clases a una misma variable, en tiempo de ejecución "
            correct="d) es la ejecución de distintas implementaciones de un mismo método, asignando objetos de distintas clases a una misma variable, en tiempo de ejecución"
          />
          <hr></hr>
          <Question
            texto="8.10 ¿Cuál de las siguientes afirmaciones sobre el método super() es correcta?"
            a="sirve para llamar al constructor de la superclase"
            b="sirve para invocar un método escrito más arriba en el código"
            c="sirve para llamar a cualquier método de la superclase"
            d="sirve para hacer referencia a un atributo de la superclase"
            correct="c) sirve para llamar a cualquier método de la superclase"
          />
          <hr></hr>
          <h1>Cuestionarios de Clase 1º DAW, Tema 8 Herencias</h1>
          <Question
            texto="El método super():"
            a="Hace overriding de un método definido en una superclase"
            b="Es el constructor de la superclase"
            c="Es el constructor de la superclase"
            d="No existe en java"
            correct="b) Es el constructor de la superclase"
          />
          <hr></hr>
          <Question
            texto="¿Cómo puedo hacer en java que una clase A herede directamente de las clases B y C, entre las cuales no hay relación de herencia?"
            a="Escribiendo A implements B, C"
            b="Escribiendo A extends B, C"
            c="Escribiendo B, C extends A"
            d="De ninguna manera. En java no existe la herencia múltiple entre clases"
            correct="d) De ninguna manera. En java no existe la herencia múltiple entre clases"
          />
          <hr></hr>
          <Question
            texto="La palabra reservada super permite acceder a:"
            a="Cualquier miembro de la superclase"
            b="A nada, no existe en java"
            c="El constructor de la superclase"
            d="Cualquier miembro visible de la superclase"
            correct="d) Cualquier miembro visible de la superclase"
          />
          <hr></hr>
          <Question
            texto="Si la clase B hereda de A, escribiremos:"
            a="A inherits B"
            b="A extends B"
            c="B hereda de A"
            d="B extends A"
            correct="d) B extends A"
          />
          <hr></hr>
          <Question
            texto="El método toString(): (verdadero o falso)"
            a="Es un método estático definido en la clase Object"
            b="Es un método que devuelve una representación de tipo String de un objeto"
            c="Es un método estático definido en la clase String"
            d="Es un método definido en la clase Object y que podemos sustituir en cualquier clase de usuario"
            correct="b) / d) verdaderas  | a) / c) falsas"
          />
          <hr></hr>
          <Question
            texto="Elige la palabra que completa la siguiente afirmación: ___ es la técnica por la que se decide en tiempo de ejecución la versión de un método que se ejecuta."
            a="selección dinámica de métodos"
            b="recolector de basura"
            c="ninguna es correcta"
            d=""
            correct="a) selección dinámina de métodos"
          />
          <hr></hr>
          <Question
            texto="El atributo protected int edad, definido en la clase A, es visible por la clase B si:"
            a="A es importada desde otro paquete"
            b="B hereda de A y pertenece al mismo paquete o bien a otro desde el que se importa A"
            c="B está definido en otro paquete dentro del mismo proyecto"
            d="A hereda de B"
            correct="b) B hereda de A y pertenece al mismo paquete o bien a otro desde el que se importa A"
          />
          <hr></hr>
          <Question
            texto="¿En qué circunstancia puede una clase C heredar de las clases A y B? (verdadero o falso)"
            a="Si A hereda de B"
            b="Si B hereda de A"
            c=""
            d=""
            correct="a) y b) verdaderas"
          />
          <hr></hr>
          <Question
            texto="Elige la palabra que completa la siguiente afirmación: El método _________ , definido en la clase Object, sirve para obtener una cadena con la información que consideramos relevante en los objetos de una clase."
            a="String toString()"
            b="String equals()"
            c="String concat()"
            d=""
            correct="a) String toString()"
          />
          <hr></hr>
          <Question
            texto="Si queremos que el método miMetodo(), que B hereda de A, haga algo distinto:"
            a="Deberemos cambiar su lista de parámetros, respetando el nombre"
            b="Debemos cambiar el nombre"
            c="Respetaremos el prototipo y cambiaremos su implementación, haciendo overriding"
            d="Deberemos cambiar el tipo devuelto"
            correct="c) Respetaremos el prototipo y cambiaremos su implementación, haciendo overriding"
          />
          <hr></hr>
          <Question
            texto="Supongamos que la clase B hereda de A. Si en A está definido el método int miMetodo() y definimos en B el método String miMetodo(). Este último:"
            a="Dará error de compilación"
            b="Heredará de A, ejecutando el código definido en B"
            c="Heredará del de A, haciendo lo mismo"
            d="No tiene ninguna relación con el método definido en A"
            correct="a) Dará error de compilación"
          />
          <hr></hr>
          <Question
            texto="Un método abstracto es:"
            a="Un método implementado en una superclase"
            b="Un método absurdo"
            c="Un método incomprensible"
            d="Un método declarado con su prototipo, pero no implementado"
            correct="d) Un método declarado con su prototipo, pero no implementado"
          />
          <hr></hr>
          <Question
            texto="El método toString(), tal y como está implementado en la clase Object, devuelve una cadena con:"
            a="Una expresión que contiene la referencia del objeto que lo invoca"
            b="Los valores de los atributos del objeto que lo invoca"
            c="Una descripción del objeto que lo invoca"
            d="El nombre de la clase del objeto que lo invoca"
            correct="a) Una expresión que contiene la referencia del objeto que lo invoca"
          />
          <hr></hr>
          <Question
            texto="El método equals(), tal y como está implementado en la clase Object, devuelve true cuando los objetos comparados:"
            a="Tienen los mismos métodos"
            b="Tienen la misma dirección en la memoria"
            c="Tienen atributos con los mismos valores"
            d="Tienen los mismos atributos"
            correct="b) Tienen la misma dirección en la memoria"
          />
          <hr></hr>
          <Question
            texto="Para obtener la clase a la que pertenece un objeto se invoca el método:"
            a="class()"
            b="myClass()"
            c="getClass()"
            d="clase()"
            correct="c) getClass()"
          />
          <hr></hr>
          <Question
            texto="¿La imagen siguiente representa una herencia múltiple?"
            a="No, ya que tanto B como C tienen una única clase padre"
            b="Sí, ya que C hereda tanto de B, como de A"
            c="tal vez"
            d=""
            correct="a) No, ya que tanto B como C tienen una única clase padre"
          />
          <hr></hr>
          <Question
            texto="En el constructor de una subclase B podemos invocar el de su clase padre A por medio de: (verdadero o falso)"
            a="super;"
            b="new A();"
            c="super();"
            d="Nada. No se puede invocar "
            correct="c) verdadera | a) / b) / d) falsas"
          />
          <hr></hr>
          <Question
            texto="Una clase abstracta: verdadero o falso)"
            a="No está implementada"
            b="Tiene al menos un método abstracto"
            c="No se puede instanciar"
            d="No se puede heredar de ella "
            correct="b) / c) verdadera | a) / d) falsas"
          />
          <hr></hr>
          <Question
            texto="Elige la palabra que completa la siguiente afirmación: El método _______ , definido en la clase Object, sirve para comparar objetos."
            a="boolean equals()"
            b="String toString()"
            c="boolena comparingObjects()"
            d=""
            correct="a) boolean equals()"
          />
          <hr></hr>
          <Question
            texto="El método equals(): (verdadero o falso)"
            a="Es un método definido en la clase Object"
            b="Sirve para comparar dos clases"
            c="Sirve para comparar dos objetos, devolviendo true si son iguales y false, si son distintos "
            d="Es un método que tenemos que implementar nosotros, si queremos que compare objetos y no referencias"
            correct="a) / c) / d) verdaderas | b) falsa"
          />
          <hr></hr>
          <Question
            texto="Si quiero acceder a un atributo privado de la clase A desde código de la clase B, que hereda de A:"
            a="Podré hacerlo a través de un método privado de A"
            b="Nunca se puede"
            c="Podré hacerlo a través de un método no privado heredado de A"
            d="Podré hacerlo directamente escribiendo el nombre del atributo"
            correct="c) Podré hacerlo a través de un método no privado heredado de A"
          />
          <hr></hr>
        </div>
        <div className="container-lg">
          <h1>Tema 9: Ficheros de texto (tema 10 del libro*)</h1>
          <Question
            texto="10.1 Una excepción en Java: "
            a="se produce cuando un disco está defectuoso"
            b="es un valor único de una variable"
            c="se arroja al sistema cuando se produce una condición anómala durante la ejecución de un programa"
            d="tiene lugar cuando un código es sintácticamente incorrecto"
            correct="c) se arroja al sistema cuando se produce una condición anómala durante la ejecución de un programa"
          />
          <hr></hr>
          <Question
            texto="10.2 Una excepción comprobada es: "
            a="Una excepción que hemos reparado"
            b="Una excepción que no detiene la ejecución del programa"
            c="Una excepción previsible, que el propio compilador nos obligar a gestionar"
            d="Una excepción muy conocida"
            correct="c) Una excepción previsible, que el propio compilador nos obligar a gestionar"
          />
          <hr></hr>
          <Question
            texto="10.3 Cuando llegamos al final de un flujo de entrada de tipo FileReader, el método read(): "
            a="muestra el mensaje: end of file"
            b="devuelve null"
            c="produce una excepción EOFException"
            d="devuelve -1"
            correct="d) devuelve -1"
          />
          <hr></hr>
          <Question
            texto="10.4 La palabra reservada finally "
            a="termina la ejecución de un programa"
            b="termian la ejecución de un método"
            c="en una estructura try-catch, fuerza la ejecución de su bloque antes de que se ejecute una sentencia return e independientemente de si se produce una excepción"
            d="indica el final de un método"
            correct="c) en una estructura try-catch, fuerza la ejecución de su bloque antes de que se ejecute una sentencia return e independientemente de si se produce una excepción"
          />
          <hr></hr>
          <Question
            texto="10.5 Un flujo de tipo BufferedReader:"
            a="crea un archivo de texto con búfer"
            b="solo sirve para leer cadenas de caracteres"
            c="nos prmite acceder a archivos binarios"
            d="accede a un archivo de texto para lectura con búfer"
            correct="d) accede a un archivo de texto para lectura con búfer"
          />
          <hr></hr>
          <Question
            texto="10.6 La clase Scanner:"
            a="solo permite leer texto de cualquier de cualquier flujo de texto"
            b="permite digitalizar imágenes"
            c="permite leer y analizar texto de cualquier flujo de entrada de texto"
            d="solo nos permite leer de la consula"
            correct="c) permite leer y analizar texto de cualquier flujo de entrada de texto"
          />
          <hr></hr>
          <Question
            texto="10.7 Para cambiar de línea al escribir en el flujo salida de tipo BufferedWriter debemos ejecutar:"
            a="salida.write(&quot;n&quot;)"
            b="salida.write(&quot;\r\n&quot;)"
            c="salida.write(&quot;newLine&quot;)"
            d="salida.newLine()"
            correct="d) salida.newLine()"
          />
          <hr></hr>
          <Question
            texto="10.8 Nos tenemos que asegurar de que todos los flujos abiertos deben cerrarse antes de que termine la aplicación..."
            a="porque se quedarían abiertos hasta que se apague el ordenador"
            b="porque otra aplicación podría alterarlos"
            c="porque se deben liberar los recursos asociados, como los archivos. Además, podrían quedar caracteres del búfer sin escribir"
            d="porque se pueden borrar datos de un archivo"
            correct="c) porque se deben liberar los recursos asociados, como los archivos. Además, podrían quedar caracteres del búfer sin escribir"
          />
          <hr></hr>
          <Question
            texto="10.9 Los flujos se cierran:"
            a="con el método close()"
            b="apagando el ordenador"
            c="abortando el programa"
            d="con el método cerrar()"
            correct="a) con el método close()"
          />
          <hr></hr>
          <Question
            texto="10.10 Apertura de flujos con recursos:"
            a="consiste en abrir flujos asociados con varios archivos a la vez"
            b="es abrir archivos recurriendo a una tabla"
            c="es una nueva forma de abrir flujos en Java, que permite prescindir del cierre explícito de los archivos y del método close()"
            d="consiste en abrir flujos sin peligro de que se produzcan excpeciones"
            correct="c) es una nueva forma de abrir flujos en Java, que permite prescindir del cierre explícito de los archivos y del método close()"
          />
          <hr></hr>
          <h1>Cuestionarios de Clase 1º DAW, Tema 9 Ficheros de texto</h1>
          <Question
            texto="El método close(), invocado por un flujo BufferedReader, sirve para:"
            a="Borrar el archivo de texto"
            b="Cerrar el entorno de desarrollo"
            c="Cerrar la aplicación"
            d="Leer todos los caracteres pendientes que haya en el buffer y cerrar el flujo"
            correct="d) Leer todos los caracteres pendientes que haya en el buffer y cerrar el flujo"
          />
          <hr></hr>
          <Question
            texto="En un bloque catch se puede recoger:"
            a="Dos tipos de excepciones"
            b="Ningún tipo de excepción"
            c="Todos los tipos de excepción que queramos"
            d="Un solo tipo de excepción"
            correct="c) Todos los tipos de excepción que queramos"
          />
          <hr></hr>
          <Question
            texto="Elige la palabra que completa la siguiente afirmación: Las excepciones comprobadas están sometidas al requisito de _______"
            a="captura o especificación"
            b="throwables"
            c="error()"
            d=""
            correct="a) captura o especificación"
          />
          <hr></hr>
          <Question
            texto="En java, se llama excepción a:"
            a="Cualquier cosa que no sea frecuente"
            b="Un número muy grande"
            c="Una cadena de caracteres"
            d="Un error"
            correct="d) Un error"
          />
          <hr></hr>
          <Question
            texto="Los flujos de tipo BufferedReader sirven para leer:"
            a="Caracteres individuales y líneas de texto"
            b="Cualquier cadena de caracteres"
            c="Solo líneas de texto"
            d=""
            correct="a) Caracteres individuales y líneas de texto"
          />
          <hr></hr>
          <Question
            texto="¿Qué tipo de excepciones captura la siguiente secuencia de bloques catch? catch(Exception ex){ … } catch(IOException ex){ … } (verdadero o falso)"
            a="ninguna"
            b="Solo las de entrada y salida"
            c="Las de usuario "
            d="Cualquiera"
            e="Las aritméticas"
            correct="c) / d) / e) | a) / b) falsas"
          />
          <hr></hr>
          <Question
            texto="¿Cómo nos aseguramos de que, al finalizar un programa, se graban en disco todos los datos que quedan pendientes en el buffer de un flujo BufferedWriter? (verdadero o falso)"
            a="Haciendo una apertura del flujo con recursos (trycatch-resources) "
            b="Cerrando el flujo con el método close()"
            c="Esperando un tiempo antes de cerrar la aplicación "
            d="Ejecutando el método finally() "
            e="Ejecutando el método close() dentro de un bloque finally"
            correct="a) / e) verdaderas | b) / c) falsas"
          />
          <hr></hr>
          <Question
            texto="Elige la palabra que completa la siguiente afirmación: El método read(), invocado por un flujo de tipo FileReader, lee _______ en cada llamada."
            a="un carácter"
            b="una línea de texto"
            c="una cadena de caracteres"
            d="nada"
            correct="a) un carácter"
          />
          <hr></hr>
          <Question
            texto="En un flujo de texto, se transmiten datos de tipo:"
            a="booleano"
            b="byte"
            c="numérico"
            d="carácter"
            correct="d) carácter"
          />
          <hr></hr>
          <Question
            texto="Para tratar una excepción lanzada en un método: (verdadero o falso)"
            a="Esperamos que desaparezca ella sola"
            b="La tiramos a la papelera "
            c="La capturamos en una estructura try-catch"
            d="La capturamos en una estructura try-catch"
            correct="c) / d) verdaderas | a) / b) falsas"
          />
          <hr></hr>
          <Question
            texto="Las excepciones de usuario pueden ser arrojadas por medio de la palabra reservada:"
            a="throws"
            b="throw"
            c="try"
            d="catch"
            correct="b) throw"
          />
          <hr></hr>
          <Question
            texto="La clase Scanner sirve para:(verdadero o falso)"
            a="Leer datos introducidos por teclado"
            b="Leer datos interpretados a partir de una cadena de caracteres "
            c="Escribir datos en un fichero de texto"
            d="Leer datos interpretados a partir de un fichero de texto"
            e="Leer objetos de cualquier tipo"
            correct="a) / b) / d) | c) / e) "
          />
          <hr></hr>
          <Question
            texto="La clase BufferedWriter sirve para: (Verdadero o falso)"
            a="Escribir datos de cualquier tipo en un fichero de texto"
            b="Leer caracteres de un fichero de texto"
            c="Escribir caracteres individuales en un fichero de texto"
            d="Escribir cadenas en un fichero de texto"
            e="Cerrar un flujo de salida de texto"
            correct="c) / d) | a) / b) / e) "
          />
          <hr></hr>
          <Question
            texto="Una estructura try-catch debe constar de:"
            a="Un bloque try obligatorio y un bloque catch opcional"
            b="Uno o más bloques try opcionales y un bloque finally obligatorio"
            c="Un bloque try, un bloque catch y uno o más bloques finally"
            d="Un bloque try obligatorio, tantos bloques catch como queramos y un solo bloque finally opcional"
            correct="d) Un bloque try obligatorio, tantos bloques catch como queramos y un solo bloque finally opcional"
          />
          <hr></hr>
        </div>
        <div className="container-lg">
          <h1>Tema 10: Ficheros binarios  (tema 11 libro)</h1>
          <Question
            texto="11.1 Los ficheros binarios se diferencian de los de texto en que:"
            a="solo tienen ceros y unos"
            b="sirven tanto para escribir como para leer"
            c="no sirven para guardar texto"
            d="permiten guardar todo tipo de datos, incluidos primitivos y objetos"
            correct="d) permiten guardar todo tipo de datos, incluidos primitivos y objetos"
          />
          <hr></hr>
          <Question
            texto="11.2 Si queremos guardar una cadena de caracteres en un flujo binario de tipo ObjectOutputStream, usaremos:"
            a="writeString()"
            b="writeChar()"
            c="writeObject()"
            d="nada, no se puede"
            correct="c) writeObject()"
          />
          <hr></hr>
          <Question
            texto="11.3 Para guardar una tabla del tipo int[] en un fichero binario de tipo ObjectOutputStream, usaremos"
            a="writeInt()"
            b="wirteArrayInt()"
            c="readObject()"
            d="writeObject()"
            correct="d) writeObject()"
          />
          <hr></hr>
          <Question
            texto="11.4 Si queremos leer una tabla de Cadenas de caracteres del flujo binario entrada de tipo ObjectInputStream, escribiremos:"
            a="String[] tabla = (String[]) entrada.readObject();"
            b="String tabla = (String) entrada.readObject();"
            c="String[] tabla = entrada.readObject();"
            d="String[] tabla = (object).readObject();"
            correct="a) String[] tabla = (String[]) entrada.readObject()"
          />
          <hr></hr>
          <Question
            texto="11.5 Un flujo de tipo ObjectInputStream permite leer de:"
            a="cualquir archivo windows"
            b="archivos de imagen con extensión JPG"
            c="archivos creados con un flujo ObjectOutputStream"
            d="archivos creados con un flujo BufferedReader"
            correct="c) archivos creados con un flujo ObjectOutputStream"
          />
          <hr></hr>
          <Question
            texto="11.6 Un flujo de tipo ObjectInputStream permite acceder a:"
            a="solo archivos del disco duro"
            b="cualquier fuente de datos primitivos u objectos de Java"
            c="únicamente a conexiones de red"
            d="solo nos permite leer de la consola"
            correct="b) cualquier fuente de datos primitivos u objectos de Java"
          />
          <hr></hr>
          <Question
            texto="11.7 Si guardamos una cadena de caracteres usando un flujo ObjectOutputStream, podemos leerla directamente del archivo:"
            a="usando un procesador de texto"
            b="usando un editor de texto"
            c="usando una hoja de cálculo"
            d="usando un flujo ObjectInutStream"
            correct="d) usando un flujo ObjectInutStream"
          />
          <hr></hr>
          <Question
            texto="11.8 Si guardamos una serie de objetos de la clase Cliente con un flujo ObjectOutputStream , los recuperaremos:"
            a="en el mismo orden en que se guardaron"
            b="en un orden inverso"
            c="en un orden aleatorio"
            d="nunca se pueden recuperar"
            correct="a) en el mismo orden en que se guardaron"
          />
          <hr></hr>
          <Question
            texto="11.9 Los flujos binarios se cierran:"
            a="con el método close()"
            b="apagando el ordenador"
            c="abortando el programa"
            d="con el método cerrar()"
            correct="a) con el método close()"
          />
          <hr></hr>
          <Question
            texto="11.10 Hay que cerrar los flujos binarios:"
            a="siempre"
            b="una vez al día"
            c="solo si no se han abierto con una estructura try-catch con recursos"
            d="nunca"
            correct="c) solo si no se han abierto con una estructura try-catch con recursos"
          />
          <hr></hr>
          <h1>Cuestionarios de Clase 1º DAW, Tema 10 Ficheros binarios</h1>
          <Question
            texto="Los ficheros binarios sirven para almacenar: (verdadero o falso)"
            a="bytes"
            b="datos numéricos"
            c="cadenas de caracteres"
            d="objetos de clase definidas por el programador"
            e="tablas"
            f="caracteres individuales"
            correct="todas verdaderas"
          />
          <hr></hr>
          <Question
            texto="Para que los objetos de una clase puedan ser enviados por un flujo binario, dicha clase debe tener implementada la interfaz:"
            a="comparator"
            b="comparable"
            c="recordable"
            d="serializable"
            correct="d) serializable"
          />
          <hr></hr>
          <Question
            texto="Para leer una cadena de un fichero binario se usa el método:"
            a="readChar()"
            b="readCharacter()"
            c="readString()"
            d="readObject()"
            correct="d) readObject()"
          />
          <hr></hr>
          <Question
            texto="Si queremos guardar números del tipo int en un archivo binario usaremos un flujo de la clase:"
            a="ObjectOutputStream"
            b="IOException"
            c="ObjectInputStream"
            d="FileOutputStream"
            correct="a) ObjectOutputStream"
          />
          <hr></hr>
          <Question
            texto="Cuando escribimos en un flujo de salida binario una tabla de objetos de la clase Persona, se guardará: (verdadero o falso)"
            a="Solo la referencia de la tabla original"
            b="Solo las referencias de los objetos Persona originales"
            c="Los valores y referencias de los atributos de los objetos Persona"
            d="Toda la información necesaria para reconstruir la tabla cuando se la recupere con el método readObject()"
            e="Nada, no se puede guardar una tabla de objetos "
            correct="c) / d) verdaderas | a) / b) / e) falsas"
          />
          <hr></hr>
          <Question
            texto="Si queremos recuperar una serie de valores de tipo double de un fichero binario, pero no sabemos cuántos hay, podremos: (verdadero o falso)"
            a="Leer los valores con readDouble() hasta que devuelva el valor -1"
            b="Leer los valores con readDouble() hasta que devuelva el valor EOF"
            c="Nada, no se puede"
            d="Leer los valores con readDouble() hasta que salte la excepción EOFException al llegar al fin de fichero"
            e="Medir el tamaño del archivo y calcular cuántos valores caben. Después leemos los valores con un bucle controlado por contador "
            correct="d) verdadera | a) / b) / c) / e) falsas"
          />
          <hr></hr>
          <Question
            texto="En la expresión, (int[]) entrada.readObject() el cast es necesario porque el método readObject():"
            a="Devuelve un objeto Object"
            b="Devuelve un entero"
            c="No devuelve nada"
            d="Devuelve un objeto Integer"
            correct="a) Devuelve un objeto Object"
          />
          <hr></hr>
          <Question
            texto="Con el método writeObject() de la clase ObjectOutputStream, podemos guardar datos de tipo: (verdadero o falso)"
            a="String "
            b="Object"
            c="int"
            d="int[]"
            e="Integer"
            f="char"
            correct="a) / b) / d) / e) verdaderas | c) / f)"
          />
          <hr></hr>
          <Question
            texto="Para leer una tabla de tipo String[] del flujo entrada de tipo ObjectInputStream y asignarlo a la variable lista escribiremos la sentencia:"
            a="String[] lista = (String[])entrada.readObject();"
            b="String[] lista = entrada.readObject();"
            c="String lista = entrada.readObject();"
            d="String[] lista = entrada.readString();"
            correct="a) String[] lista = (String[])entrada.readObject();"
          />
          <hr></hr>
          <Question
            texto="El método writeDouble() de la clase ObjectOutputStream sirve para escribir:"
            a="Datos de tipo primitivo double"
            b="Cualquier dato primitivo"
            c="Cualquier dato numérico"
            d=""
            correct="a) Datos de tipo primitivo double"
          />
          <hr></hr>
          <Question
            texto="Para escribir una tabla de tipo int[] en un flujo ObjectOutputStream, se usa el método:"
            a="writeObject()"
            b="writeInteger()"
            c="wirteInt()"
            d="wirteInt[]()"
            correct="a) writeObject()"
          />
          <hr></hr>
          <Question
            texto="Para estar seguros de que un fichero binario se cierre correctamente antes de salir de la aplicación:"
            a="Debe ejecutarse el método close(), incluido dentro de un bloque finally"
            b="No hay que hacer nada. Java se encarga de todo"
            c="Debemos esperar un tiempo antes de cerrar la aplicación "
            d="Debe abrirse el flujo con recursos: en un bloque trycatch-resources"
            correct="a) / d) verdaderas | b) / c) falsas"
          />
          <hr></hr>
        </div>
        <div className="container-lg">
          <h1>Tema 11: Colecciones (tema 12 libro*)</h1>
          <Question
            texto="12.1 ¿Qué es Collection?"
            a="una interfaz"
            b="una clase"
            c="un sistema operativo"
            d="un método"
            correct="a) una interfaz"
          />
          <hr></hr>
          <Question
            texto="12.2 Los tipos genéricos sirven para:"
            a="usar objetos de la clase Object"
            b="usar variables primitivas"
            c="usar tipos parametrizados"
            d="no tener que usar ningún tipo"
            correct="c) usar tipos parametrizados"
          />
          <hr></hr>
          <Question
            texto="12.3 ¿Para que sirve una lista?"
            a="guardar datos primitivos"
            b="guardar datos que no se pueden repetir"
            c="no tener que ordenar un conjunto de datos"
            d="guardar, de forma dinámina, datos que se pueden repetir y ordenar"
            correct="d) guardar, de forma dinámina, datos que se pueden repetir y ordenar"
          />
          <hr></hr>
          <Question
            texto="12.4 Un conjunto es una colección de elementos:"
            a="que no admiten orden"
            b="que no admiten repeticiones"
            c="que no se pueden alterar"
            d="cuyo criterio principal es el de pertenecer al conjunto"
            correct="d) cuyo criterio principal es el de pertenecer al conjunto"
          />
          <hr></hr>
          <Question
            texto="12.5 ArrayList y LinkedList se diferencian en:"
            a="en el núemero de elementos"
            b="en el rendimiento"
            c="en el orden de los elementos"
            d="en nada"
            correct="b) en el rendimiento"
          />
          <hr></hr>
          <Question
            texto="12.6 Los métodos de la interfaz Set:"
            a="son los mismos que los de List"
            b="son los mismos que los de Collection"
            c="son implementados en la clase ArrayList"
            d="esta interfaz no tiene métodos"
            correct="b) son los mismos que los de Collection"
          />
          <hr></hr>
          <Question
            texto="12.7 Si la variable a referencia un objeto ArrayList, la expresión new TreeSet(a)"
            a="devuelve un conjunto ordenado con los elementos de a"
            b="es incorrecta"
            c="devuelve una lista ordenada"
            d="devuelve una tabla"
            correct="a) devuelve un conjunto ordenado con los elementos de a"
          />
          <hr></hr>
          <Question
            texto="12.8 ¿Qué es Collections?"
            a="una clase cuyos objetos están repetidos "
            b="una interfaz de la que heredan todas las colecciones"
            c="una clase con métodos estáticos que sirven para gestionar colecciones "
            d="nada, le sobra la s"
            correct="c) una clase con métodos estáticos que sirven para gestionar colecciones "
          />
          <hr></hr>
          <Question
            texto="12.9 Un mapa en Java es:"
            a="un gráfico con las relaciones de herencia entre interfaces"
            b="una colección"
            c="una representación de los datos por pantalla"
            d="una estructura dinámica cuyos elementos son parejas clave-valor"
            correct="d) una estructura dinámica cuyos elementos son parejas clave-valor"
          />
          <hr></hr>
          <Question
            texto="12.10 Si queremos cambiar el valor de una entrada en un mapa, usaremos el método:"
            a="put()"
            b="set()"
            c="add()"
            d="insert()"
            correct="a) put()"
          />
          <hr></hr>
          <h1>Cuestionarios de Clase 1º DAW, Tema 11 Colecciones</h1>
          <Question
            texto="Dentro del framework Collection, las listas son:"
            a="cadenas"
            b="tablas"
            c="estructuras dinámicas cuyos elementos no se pueden repetir"
            d="estructuras dinámicas cuyos elementos se pueden repetir"
            correct="d) estructuras dinámicas cuyos elementos se pueden repetir"
          />
          <hr></hr>
          <Question
            texto="La interfaz Set añade a Collection el método:"
            a="boolean addAll(Collection<E> c)"
            b="Object[] toArray()"
            c="No añade ningún método"
            d="String toString()"
            correct="c) No añade ningún método"
          />
          <hr></hr>
          <Question
            texto="Implementaciones de Set en la API de Java son: (verdadero o falso)"
            a="HashSet"
            b="ListSet"
            c="ArraySet"
            d="TreeSet"
            e="LinkedHashSet"
            correct="a) / d) / e) verdaderas | b) / c) falsas"
          />
          <hr></hr>
          <Question
            texto="Collection es: (verdadero o falso)"
            a="Una interfaz "
            b="Una clase"
            c="Un objeto "
            d="Un conjunto de datos "
            e="Un marco de trabajo "
            correct="a) / e) verdaderas | b) / c) / d) falsas"
          />
          <hr></hr>
          <Question
            texto="En programación, la estructura Pila se caracteriza porque:"
            a="El primer elemento que entra es el primero en salir"
            b="No admite elementos repetidos"
            c="El primer elemento que entra es el último en salir"
            d="Sus elementos están ordenados"
            correct="c) El primer elemento que entra es el último en salir"
          />
          <hr></hr>
          <Question
            texto="Implementaciones de List en la API de Java son: (verdadero o falso)"
            a="HashList"
            b="ObjectList"
            c="ArrayList"
            d="IntegerList"
            e="LinkedList"
            correct="c) / e) verdaderas | a) / b) / d) falsas "
          />
          <hr></hr>
          <Question
            texto="Collections es:"
            a="Una interfaz"
            b="Un paquete de utilidades"
            c="Una clase con utilidades para el marco de trabajo Collection"
            d="Una variable"
            correct="c) Una clase con utilidades para el marco de trabajo Collection"
          />
          <hr></hr>
          <Question
            texto="Elige la palabra que completa la siguiente afirmación: Respecto al resto de las colecciones, las listas aportan _______"
            a="la inserción y eliminación dinámica de elementos"
            b="el acceso a los elementos por medio de un índice"
            c="el acceso a otros métodos de las colecciones"
            d=""
            correct="b) el acceso a los elementos por medio de un índice"
          />
          <hr></hr>
          <Question
            texto="En java, Map es:"
            a="Una clase"
            b="Una interfaz"
            c="Un método"
            d="Una variable"
            correct="b) Una interfaz"
          />
          <hr></hr>
          <Question
            texto="Map hereda de:"
            a="de nadie"
            b="Object"
            c="List"
            d="Collection"
            correct="a) de nadie"
          />
          <hr></hr>
          <Question
            texto="En programación, la estructura Cola se caracteriza porque:"
            a="No admite elementos repetidos"
            b="El primer elemento que entra es el último en salir"
            c="Sus elementos no se pueden eliminar"
            d="El primer elemento que entra es el primero en salir"
            correct="d) El primer elemento que entra es el primero en salir"
          />
          <hr></hr>
          <Question
            texto="Las entradas de un mapa en java consisten en:"
            a="Una pareja de valores de tipo int"
            b="Una pareja formada por una clave y un valor"
            c="Una tabla de dos elementos"
            d="Una cadena"
            correct="b) Una pareja formada por una clave y un valor"
          />
          <hr></hr>
          <Question
            texto="Los iteradores se usan para:"
            a="Recorrer cadenas"
            b="Insertar elementos en una colección"
            c="Recorrer colecciones"
            d="Recorrer tablas"
            correct="c) Recorrer colecciones"
          />
          <hr></hr>
          <Question
            texto="La estructura, for(Cliente c: listaClientes){…} se llama:"
            a="bucle ilimitado"
            b="for extendido"
            c="bucle infinito"
            d="for informal"
            correct="b) for extendido"
          />
          <hr></hr>
          <Question
            texto="¿Qué texto deberemos escribir en lugar de la interrogación?"
            a="List"
            b="Set"
            c="Map"
            d="ArrayList"
            correct="a) List"
          />
          <hr></hr>
          <Question
            texto="Elige la palabra que completa la siguiente afirmación: Respecto al resto de las colecciones, los conjuntos aportan ______"
            a="la eliminación automática de elementos repetidos"
            b="la ordenación de elementos por orden alfabético"
            c="la ordenación y agrupación de objetos"
            d=""
            correct="a) la eliminación automática de elementos repetidos"
          />
          <hr></hr>
          <Question
            texto="En un TreeMap, las entradas se van añadiendo por orden:"
            a="natural de los valores"
            b="natural de las claves"
            c="de inserción"
            d="aleatorio"
            correct="b) natural de las claves"
          />
          <hr></hr>
          <Question
            texto="Elige la palabra que completa la siguiente afirmación: Los tipos _______ permiten definir clases, interfaces y métodos capaces de funcionar con diversos tipos de datos."
            a="Object"
            b="Integer"
            c="Genéricos"
            d="Globales"
            correct="c) genéricos"
          />
          <hr></hr>
          <Question
            texto="Si queremos obtener una tabla con los elementos de una colección usaremos el método: (verdadero o falso)"
            a="T[] toTabla()"
            b="T toArray()"
            c="T[] toArray()"
            d="Object[] toArray()"
            e="T[] toArray(T[] tabla)"
            correct="d) / e) verdaderas | a) / b) / c) falsas"
          />
          <hr></hr>
          <Question
            texto="Una colección es:"
            a="Una interfaz"
            b="Un objeto cuya clase implementa la interfaz Collection"
            c="Un método"
            d="Una clase"
            correct="b) Un objeto cuya clase implementa la interfaz Collection"
          />
          <hr></hr>
          <Question
            texto="En el marco de trabajo Collection, una lista es:"
            a="Un fichero de texto "
            b="Una tabla "
            c="Una colección cuya clase implementa la interfaz List "
            d="Una estructura dinámica de datos"
            e="Un tipo primitivo de datos "
            correct="c) / d) verdaderas | a) / b) / e) falsas"
          />
          <hr></hr>
          <Question
            texto=""
            a=""
            b=""
            c=""
            d=""
            correct=""
          />
          <hr></hr>
          <Question
            texto=""
            a=""
            b=""
            c=""
            d=""
            correct=""
          />
          <hr></hr>
          <Question
            texto=""
            a=""
            b=""
            c=""
            d=""
            correct=""
          />
          <hr></hr>
          <Question
            texto=""
            a=""
            b=""
            c=""
            d=""
            correct=""
          />
          <hr></hr>
          <Question
            texto=""
            a=""
            b=""
            c=""
            d=""
            correct=""
          />
          <hr></hr>
          <Question
            texto=""
            a=""
            b=""
            c=""
            d=""
            correct=""
          />
          <hr></hr>
          <Question
            texto=""
            a=""
            b=""
            c=""
            d=""
            correct=""
          />
          <hr></hr>
          <Question
            texto=""
            a=""
            b=""
            c=""
            d=""
            correct=""
          />
          <hr></hr>
          <Question
            texto=""
            a=""
            b=""
            c=""
            d=""
            correct=""
          />
          <hr></hr>
          <Question
            texto=""
            a=""
            b=""
            c=""
            d=""
            correct=""
          />
          <hr></hr>
          <Question
            texto=""
            a=""
            b=""
            c=""
            d=""
            correct=""
          />
          <hr></hr>
          <Question
            texto=""
            a=""
            b=""
            c=""
            d=""
            correct=""
          />
          <hr></hr>
          <Question
            texto=""
            a=""
            b=""
            c=""
            d=""
            correct=""
          />
          <hr></hr>
          <Question
            texto=""
            a=""
            b=""
            c=""
            d=""
            correct=""
          />
          <hr></hr>
          <Question
            texto=""
            a=""
            b=""
            c=""
            d=""
            correct=""
          />
          <hr></hr>
          <Question
            texto=""
            a=""
            b=""
            c=""
            d=""
            correct=""
          />
          <hr></hr>
          <Question
            texto=""
            a=""
            b=""
            c=""
            d=""
            correct=""
          />
          <hr></hr>
          <Question
            texto=""
            a=""
            b=""
            c=""
            d=""
            correct=""
          />
          <hr></hr>
          <Question
            texto=""
            a=""
            b=""
            c=""
            d=""
            correct=""
          />
          <hr></hr>
          <Question
            texto=""
            a=""
            b=""
            c=""
            d=""
            correct=""
          />
          <hr></hr>
          <Question
            texto=""
            a=""
            b=""
            c=""
            d=""
            correct=""
          />
          <hr></hr>
        </div>
      </section>
    </div>
  );
}

export default App;
{/* <Question
  texto=""
  a=""
  b=""
  c=""
  d=""
  correct=""
/> */}