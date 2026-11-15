/* Bloque 0. Generado a partir de src/b0/ */
(function(){
var LECCIONES=[];

/* ---- l01.js ---- */
LECCIONES.push({
  id: "b0-l1", num: "0.1",
  titulo: "La inflación: el enemigo silencioso",
  resumen: "La inflación es la subida generalizada de los precios. Reduce lo que puedes comprar con tu dinero, actúa todos los años y se compone como el interés. Por eso el punto de partida de cualquier inversión es, como mínimo, no perder contra ella.",
  esencial: `
La **inflación** es el ritmo al que suben, de media, los precios de lo que compran los hogares. Una inflación del 4,9 % significa que la misma cesta de la compra cuesta hoy un 4,9 % más que hace un año.

Su efecto sobre el ahorro es directo: el dinero parado conserva su cifra, pero pierde **poder adquisitivo**, es decir, lo que puedes comprar con él. Con una inflación del 4,9 % sostenida, 10.000 € guardados en una cuenta al 0 % solo comprarán dentro de 10 años lo que hoy cuestan unos 6.200 €.

Tres ideas para quedarse:

- **Se compone.** Los precios suben sobre lo ya subido. Un 4,9 % anual durante 10 años no es un 49 %, sino un 61 %.
- **No es igual para todos.** El dato oficial (el IPC) es una media. Tu inflación depende de en qué gastas: alquiler, energía y alimentación han subido más que otras partidas en los últimos años.
- **Tiene un objetivo.** El Banco Central Europeo (BCE) intenta mantenerla cerca del 2 % en la zona euro. Cuando se aleja, sube o baja los tipos de interés, y eso mueve el precio de casi todos los activos: depósitos, hipotecas, bonos y acciones. Lo verás a lo largo de todo el curso.

> El riesgo de la bolsa se ve cada día en la cotización. El de la inflación no aparece en ningún extracto, pero actúa todos los años. No invertir no elimina el riesgo: lo cambia por una pérdida lenta y casi segura.
`,
  entender: `
### Cómo se mide en España
El INE calcula cada mes el **Índice de Precios de Consumo (IPC)**. Sigue los precios de una cesta de unos 750 artículos (casi 500 recogidos en tiendas y el resto con datos de cajas registradoras, el *scanner data*) en 177 municipios. Cada artículo pesa según lo que gastan de verdad los hogares. Desde enero de 2026 se usa la **base 2025**, con una clasificación europea nueva de 13 grandes grupos. Algunos pesos de 2026:

| Grupo | Peso en el IPC |
|---|---|
| Alimentos y bebidas no alcohólicas | 17,4 % |
| Vivienda (alquiler, agua, electricidad, gas) | 12,3 % |
| Muebles y artículos del hogar | 4,7 % |
| Vestido y calzado | 3,6 % |
| Bebidas alcohólicas y tabaco | 3,5 % |

La **tasa interanual** compara el índice de este mes con el del mismo mes del año anterior.

### Los apellidos de la inflación
- **IPC general**: la cesta completa.
- **Subyacente**: sin energía ni alimentos no elaborados, que son muy volátiles. Muestra la tendencia de fondo y es la que más se parece a lo que la política monetaria puede controlar.
- **IPCA**: la versión «armonizada», calculada igual en toda la zona euro. El BCE fija su objetivo sobre el IPCA del conjunto de la zona euro, no sobre el de España.

En octubre de 2026: IPC de España 4,9 % (subyacente 3,1 %); IPCA de la zona euro 4,0 % (subyacente 2,5 %). Casi la mitad de la inflación de la zona euro viene directamente de la energía, que sube un 20,8 % interanual.

### Por qué el objetivo es un 2 % y no un 0 %
1. **Margen frente a la deflación.** Con precios que bajan, la gente aplaza compras y las deudas pesan más en términos reales. Japón vivió casi dos décadas así.
2. **Sesgo de medida.** El IPC tiende a exagerar algo la inflación real (lo verás en «A fondo»). Un 0 % medido podría ser deflación de verdad.
3. **Margen para el banco central.** Con algo de inflación, los tipos de interés están por encima de cero en tiempos normales, y hay espacio para bajarlos en una crisis.
4. **Ajustes de salarios.** Es más fácil que un sector pierda competitividad con salarios que suben menos que la inflación que con bajadas nominales de sueldo.

### Cuánto pesa con los años

| Inflación anual | El dinero pierde la mitad de su valor en… | 10.000 € a 10 años equivalen a… |
|---|---|---|
| 2 % | 35 años | 8.200 € de hoy |
| 4,9 % | 14,5 años | 6.200 € de hoy |
| 10 % | 7,3 años | 3.860 € de hoy |
| 24,4 % (España, 1977) | 3,2 años | 1.130 € de hoy |

### Quién gana y quién pierde
- **Pierden**: quien guarda efectivo o depósitos que pagan menos que la inflación, quien cobra rentas fijas sin actualizar y quien ha prestado a tipo fijo (por ejemplo, el dueño de un bono a 10 años).
- **Ganan**: quien debe a tipo fijo (la deuda se «encoge» en términos reales) y, en general, el Estado, que es el gran deudor y además recauda más si no actualiza los tramos del IRPF.

### Adelanto: los activos frente a la inflación
- **Acciones**: a largo plazo la han batido de largo, porque los beneficios de las empresas son nominales y suben con los precios. A corto plazo, la inflación inesperada suele hundirlas (por qué, en «A fondo»).
- **Bonos a tipo fijo**: son los grandes perdedores cuando la inflación sorprende al alza, como en 2022.
- **Liquidez**: depende de que los tipos de interés suban tanto como la inflación. Hoy no lo hacen.
- **Oro**: según el anuario de Dimson, Marsh y Staunton (UBS, 2026), ha conservado poder adquisitivo a muy largo plazo (un 1,3 % real anual desde 1900), pero cayó en 13 de los 28 años en que la inflación de EE. UU. superó el 3 %. Protege mal a corto plazo.
`,
  fondo: `
### 1. Cómo se construye un índice de precios
El IPC es, en esencia, un **índice de Laspeyres**: compara cuánto cuesta hoy la cesta del periodo base con lo que costaba entonces.

$$ Laspeyres = Σ p₁·q₀ / Σ p₀·q₀
$$ Paasche = Σ p₁·q₁ / Σ p₀·q₁
$$ Fisher = √(Laspeyres × Paasche)

donde p son precios, q cantidades, el subíndice 0 el periodo base y el 1 el actual. Laspeyres usa las cantidades antiguas; Paasche, las nuevas; Fisher (el «índice ideal») es su media geométrica. El INE usa un Laspeyres **encadenado**: actualiza los pesos cada año con el gasto del año anterior, lo que reduce los problemas que verás a continuación.

### 2. Los sesgos del IPC
En 1996 la comisión Boskin, encargada por el Senado de EE. UU., estimó que el IPC estadounidense exageraba la inflación en torno a 1,1 puntos al año. Las fuentes del sesgo:

- **Sustitución**: cuando algo se encarece, compramos menos de eso y más de otra cosa. Laspeyres, con cantidades fijas, no lo recoge y sobrestima la subida.
- **Calidad**: un móvil de 800 € de hoy no es el de hace cinco años. Separar «subida de precio» de «mejora de producto» es difícil. Los institutos usan métodos **hedónicos** (regresiones que valoran cada característica).
- **Productos nuevos**: entran en la cesta tarde, cuando ya han bajado de precio.
- **Establecimientos**: el paso a tiendas más baratas (o a internet) se recoge mal.

Desde entonces los institutos estadísticos han corregido buena parte de estos sesgos (pesos actualizados cada año, *scanner data*, ajustes hedónicos), pero esta es una de las razones del objetivo del 2 % en lugar del 0 %.

### 3. Teorías: por qué hay inflación
**La teoría cuantitativa.** Parte de una identidad contable:

$$ M · V = P · Y

M es la cantidad de dinero, V su velocidad de circulación (cuántas veces cambia de manos al año), P el nivel de precios e Y la producción real. En tasas de crecimiento:

$$ π ≈ m + v − y

Si el dinero crece un 8 %, la producción un 2 % y la velocidad es estable, la inflación tiende al 6 %. Es la base del **monetarismo** de Milton Friedman: «la inflación es siempre y en todas partes un fenómeno monetario». Funciona bien a muy largo plazo y en hiperinflaciones. Falla a corto plazo porque V no es estable: entre 2008 y 2019 los bancos centrales multiplicaron la base monetaria y la inflación siguió baja, porque ese dinero no circuló.

**La curva de Phillips.** En 1958 A. W. Phillips encontró que en el Reino Unido los salarios subían más cuando el paro era bajo. En los años 60 se interpretó como un menú: un poco más de inflación a cambio de menos paro.

**La crítica de Friedman (1968) y Phelps (1967).** El menú solo existe a corto plazo. Si el banco central mantiene el paro artificialmente bajo, la gente acaba esperando más inflación, pide salarios más altos y la curva se desplaza. Solo queda más inflación con el mismo paro. Introdujeron la **tasa natural de paro** (o NAIRU: la tasa de paro que no acelera la inflación) y la curva de Phillips **aumentada con expectativas**:

$$ π = πᵉ − β · (u − u*) + choques de oferta

donde πᵉ es la inflación esperada, u el paro y u* la tasa natural. La estanflación de los años 70 (paro e inflación altos a la vez) les dio la razón.

**Expectativas.** Con expectativas **adaptativas**, la gente proyecta la inflación pasada. Con expectativas **racionales** (Lucas, Sargent, años 70), usa toda la información disponible, incluido lo que hará el banco central. Por eso hoy los bancos centrales dan tanta importancia a la **credibilidad**: si todos creen que la inflación volverá al 2 %, los salarios y los precios se fijan en consecuencia y la inflación vuelve antes.

**Tres orígenes en la práctica**:
- **De demanda**: más gasto (dinero barato, gasto público, ahorro acumulado) que capacidad de producir.
- **De costes u oferta**: energía, materias primas, cuellos de botella. Es el caso de 2022 y en buena parte el de 2026.
- **De expectativas**: la espiral precios-salarios.

### 4. Cómo responde un banco central: la regla de Taylor
En 1993 John Taylor propuso una regla sencilla que describía bien lo que hacía la Reserva Federal:

$$ i = r* + π + 0,5 · (π − π*) + 0,5 · (brecha de producción)

i es el tipo de interés oficial recomendado; r* el tipo real «neutral» (ni estimula ni frena); π la inflación; π* el objetivo; la brecha de producción, cuánto produce la economía por encima o por debajo de su potencial. La clave es el **principio de Taylor**: ante un punto más de inflación, el tipo oficial debe subir **más de un punto**, para que el tipo real suba y frene la economía.

Aplicada al BCE en noviembre de 2026 (supuestos: r* = 0,5 %, brecha nula):
- con la inflación general (4,0 %): i ≈ 0,5 + 4,0 + 0,5 · 2,0 = **5,5 %**;
- con la subyacente (2,5 %): i ≈ 0,5 + 2,5 + 0,5 · 0,5 = **3,25 %**.

El tipo de depósito del BCE está hoy en el 2,50 %. Que el BCE esté mucho más cerca del segundo cálculo no es casual: ante un choque de **oferta** (la energía), los bancos centrales suelen «mirar a través» del dato general y vigilar la subyacente y las expectativas. Aun así, ambos cálculos dicen que la política es todavía laxa, coherente con que el mercado espere subidas hasta el 3,00 % en 2027. El bloque 5 desarrolla todo esto.

### 5. Inflación y valoración de activos
**Bonos.** El tipo nominal de un bono incorpora la inflación esperada (ecuación de Fisher, lección 0.4). Si la inflación sorprende al alza, los tipos suben y el precio de los bonos ya emitidos cae. Comparando un bono normal con uno **ligado a la inflación** (en España, las Obligaciones €i) del mismo plazo se obtiene la **inflación implícita** (*breakeven*): la inflación media que el mercado espera.

$$ breakeven ≈ (1 + tipo nominal) / (1 + tipo real) − 1

**Acciones: la ilusión monetaria.** En 1979 Franco Modigliani y Richard Cohn sostuvieron que, con inflación alta, el mercado infravalora las acciones: los inversores suben el tipo con el que descuentan los beneficios futuros (porque los tipos nominales suben), pero siguen proyectando beneficios con el crecimiento antiguo, como si no fueran a subir con los precios. Mezclan una tasa nominal con un crecimiento real. El resultado es un PER demasiado bajo. Es una de las explicaciones de los PER de un dígito de finales de los 70. Lo calculas en el ejercicio 3.

### 6. Tres episodios que todo inversor debería conocer
- **Alemania, 1923.** Hiperinflación de la República de Weimar: en su peor momento, octubre de 1923, los precios se duplicaban aproximadamente cada 3,7 días (cálculo de Steve Hanke y Nicholas Krus). El ahorro de la clase media desapareció; quien tenía activos reales (tierras, empresas) los conservó.
- **EE. UU., 1979–1982.** Tras una década de inflación alta, Paul Volcker, presidente de la Reserva Federal, subió los tipos hasta cerca del 20 %. Provocó una recesión dura, pero rompió las expectativas de inflación y abrió dos décadas de inflación baja y bolsa al alza.
- **España, 1977.** La inflación media del año fue del 24,4 %. Los Pactos de la Moncloa (octubre de 1977) acordaron, entre otras medidas, que los salarios se pactaran según la inflación prevista y no la pasada. Es un ejemplo de manual de cómo romper una espiral de expectativas.
`,
  caso: {
    titulo: "España, 2020–2026: dos oleadas",
    md: `
- **Primera oleada.** La inflación media de 2022 fue del 8,4 %, empujada por la energía tras la invasión de Ucrania. Quien guardó 10.000 € sin rentabilidad desde finales de 2020 tenía en junio de 2026 la misma cifra, pero con ella solo podía comprar lo que antes costaba unos 7.935 €: casi un 21 % menos. Habría necesitado ganar un 26 % en total (un 4,3 % anual) solo para no perder.
- **Segunda oleada.** En 2026 la inflación ha vuelto a subir: 4,9 % en septiembre y octubre, el nivel más alto desde febrero de 2023, por el gas, los combustibles y los paquetes turísticos. En la zona euro, el 4,0 % de octubre es el más alto desde 2023, con la energía subiendo un 20,8 %.
- **La respuesta.** El BCE subió los tipos en septiembre de 2026 del 2,00 % al 2,50 % y el mercado espera más subidas.

> Lo que enseña: la inflación llega en oleadas y es difícil de prever. Una sola oleada se comió una quinta parte del ahorro parado. Protegerse no exige adivinar la próxima, sino tener el dinero de largo plazo en activos que históricamente la han batido.
`
  },
  ejercicios: [
    {
      t: "Laspeyres frente a Paasche",
      p: `
Una cesta con dos productos. En el año base, un hogar compra 100 barras de pan a 1 € y 50 litros de gasolina a 1,50 €. Un año después el pan cuesta 1,10 € y la gasolina 2,10 €. Ante la subida, el hogar compra 105 barras de pan y solo 35 litros de gasolina. Calcula la inflación según Laspeyres, Paasche y Fisher.
`,
      s: `
1. **Laspeyres** (cantidades antiguas): coste de la cesta antigua a precios nuevos = 100 × 1,10 + 50 × 2,10 = 215 €. Coste en el año base = 100 × 1 + 50 × 1,50 = 175 €. Índice = 215 / 175 = 1,2286 → **inflación del 22,9 %**.
2. **Paasche** (cantidades nuevas): cesta nueva a precios nuevos = 105 × 1,10 + 35 × 2,10 = 189 €. Cesta nueva a precios antiguos = 105 × 1 + 35 × 1,50 = 157,50 €. Índice = 189 / 157,5 = 1,20 → **20,0 %**.
3. **Fisher**: √(1,2286 × 1,20) = 1,2142 → **21,4 %**.

Laspeyres da la cifra más alta porque supone que el hogar sigue comprando tanta gasolina como antes, cuando en realidad ha sustituido parte por pan. Es el **sesgo de sustitución**.
`
    },
    {
      t: "La regla de Taylor",
      p: `
Supón que la inflación de la zona euro baja al 3 %, el objetivo es el 2 %, el tipo neutral real es el 0,5 % y la economía produce un 1 % por debajo de su potencial (brecha de −1 %). ¿Qué tipo oficial recomienda la regla? ¿Qué haría el BCE si el tipo actual fuera el 2,50 %?
`,
      s: `
1. Fórmula: i = r* + π + 0,5 · (π − π*) + 0,5 · brecha.
2. Sustituye: i = 0,5 + 3,0 + 0,5 · (3,0 − 2,0) + 0,5 · (−1) = 0,5 + 3,0 + 0,5 − 0,5 = **3,5 %**.
3. Con el tipo en el 2,50 %, la regla diría que la política es un punto demasiado laxa: el BCE tendería a subir tipos, aunque la brecha negativa (economía floja) modera la subida.

Úsala como brújula, no como predicción: el BCE no la sigue de forma mecánica y r* no se observa, se estima.
`
    },
    {
      t: "La ilusión monetaria de Modigliani y Cohn",
      p: `
Una empresa paga 4 € de dividendo por acción, que crece un 4 % anual, y los inversores exigen un 8 %. Con el **modelo de Gordon** (lo verás en la lección 0.2), el precio es P = D / (k − g). Ahora la inflación sube 2 puntos de forma permanente. Calcula el precio (a) si los inversores ajustan correctamente tanto la rentabilidad exigida como el crecimiento, y (b) si solo suben la rentabilidad exigida.
`,
      s: `
1. **Antes**: P = 4 / (0,08 − 0,04) = **100 €**.
2. **(a) Ajuste correcto**: con 2 puntos más de inflación, tanto k (8 % → 10 %) como el crecimiento nominal de los dividendos (4 % → 6 %) suben. P = 4 / (0,10 − 0,06) = **100 €**. El precio no cambia: la inflación es neutral para una empresa que puede trasladarla a sus precios.
3. **(b) Ilusión monetaria**: k sube al 10 % pero se mantiene g = 4 %. P = 4 / (0,10 − 0,04) = **66,7 €**. Un 33 % menos.

Esta es la tesis de Modigliani y Cohn: parte de las caídas bursátiles con inflación alta serían un error de cálculo del mercado. Es un tema debatido; otros autores lo atribuyen a que la inflación alta sí daña los beneficios reales y aumenta la incertidumbre.
`
    }
  ],
  errores: [
    "Pensar que «si no invierto, no pierdo». Pierdes poder de compra, solo que no aparece en el extracto.",
    "Creer que si «baja la inflación» bajan los precios. Solo suben más despacio.",
    "Usar el IPC general como si fuera tu inflación personal.",
    "Confundir el IPC español con el IPCA de la zona euro, que es el que vigila el BCE.",
    "Pensar que el oro protege de la inflación a corto plazo. A muy largo plazo sí ha conservado valor; año a año, no."
  ],
  test: [
    { p: "La inflación pasa del 5 % al 3 %. ¿Qué hacen los precios?", o: ["Bajan", "Siguen subiendo, más despacio", "Se quedan igual"], c: 1, e: "La inflación es la velocidad a la que suben. Bajar del 5 % al 3 % es frenar, no retroceder." },
    { p: "¿Por qué un índice de Laspeyres tiende a sobrestimar la inflación?", o: ["Porque usa precios antiguos", "Porque mantiene fijas las cantidades y no recoge que sustituimos lo que se encarece", "Porque incluye impuestos"], c: 1, e: "Es el sesgo de sustitución. Paasche, con las cantidades nuevas, da una cifra menor." },
    { p: "Según la curva de Phillips aumentada con expectativas, ¿qué pasa si el banco central mantiene el paro por debajo de su tasa natural durante años?", o: ["El paro se queda bajo para siempre con la misma inflación", "La inflación esperada sube y acaba habiendo más inflación sin menos paro", "La inflación baja"], c: 1, e: "Es la crítica de Friedman y Phelps: el menú inflación-paro solo existe a corto plazo." },
    { p: "Según el principio de Taylor, si la inflación sube un punto, el tipo oficial debería…", o: ["Subir menos de un punto", "Subir más de un punto", "No moverse"], c: 1, e: "Solo así sube el tipo real y se enfría la economía." },
    { p: "¿Qué mide la inflación implícita (breakeven)?", o: ["La inflación del último año", "La inflación media que el mercado espera, a partir de bonos normales y bonos ligados a la inflación", "La inflación subyacente"], c: 1, e: "Se obtiene comparando el tipo nominal y el real de bonos del mismo plazo." }
  ],
  lecturas: [
    { t: "Una historia monetaria de los Estados Unidos", a: "Milton Friedman y Anna Schwartz, 1963", n: "La obra clásica del monetarismo." },
    { t: "The Role of Monetary Policy", a: "Milton Friedman, American Economic Review, 1968", n: "El discurso que introdujo la tasa natural de paro." },
    { t: "Discretion versus Policy Rules in Practice", a: "John B. Taylor, 1993", n: "El artículo de la regla de Taylor. Corto y legible." },
    { t: "Inflation, Rational Valuation and the Market", a: "Franco Modigliani y Richard Cohn, Financial Analysts Journal, 1979" },
    { t: "Metodología del IPC base 2025", a: "INE, 2026", n: "Cómo se calcula el IPC español, explicado por quien lo hace." }
  ]
});


/* ---- l02.js ---- */
LECCIONES.push({
  id: "b0-l2", num: "0.2",
  titulo: "El valor temporal del dinero",
  resumen: "Un euro hoy vale más que un euro dentro de unos años. Llevar dinero del futuro al presente se llama descontar, y es la herramienta con la que se valora cualquier activo: un bono, una acción o un piso valen lo que valen hoy sus pagos futuros. Por eso, cuando suben los tipos de interés, baja el precio de casi todo.",
  esencial: `
¿Prefieres 10.000 € hoy o 10.000 € dentro de 5 años? Hoy, por tres razones:

1. **Coste de oportunidad**: si los tienes hoy, puedes invertirlos y tener más dentro de 5 años.
2. **Inflación**: dentro de 5 años, 10.000 € comprarán menos.
3. **Incertidumbre**: una promesa futura puede no cumplirse.

De ahí salen dos operaciones que usarás en todo el curso:

- **Capitalizar** (llevar al futuro): 10.000 € al 4 % durante 10 años se convierten en 14.802 €.
- **Descontar** (traer al presente): 10.000 € que recibirás dentro de 10 años, con un 4 % de alternativa, **valen hoy 6.756 €**. Ese es su **valor presente**.

El porcentaje con el que descuentas se llama **tipo de descuento**: es lo que podrías ganar en otra inversión de riesgo parecido. Cuanto más alto el tipo y más lejano el pago, menos vale hoy.

**La idea clave del curso**: cualquier activo financiero vale el valor presente de lo que pagará en el futuro. Un bono, sus cupones y su devolución. Una acción, sus dividendos o beneficios futuros. Un piso, sus alquileres. Por eso, cuando los tipos de interés suben, el valor presente de esos pagos baja, y caen a la vez los bonos, la bolsa y, con algo de retraso, la vivienda. Lo verás pasar en 2022.
`,
  entender: `
### Las fórmulas básicas
Con un tipo r por periodo y n periodos:

$$ Valor futuro:   VF = VP × (1 + r)ⁿ
$$ Valor presente: VP = VF / (1 + r)ⁿ

Son la misma ecuación despejada de dos maneras. El factor 1 / (1 + r)ⁿ se llama **factor de descuento**.

### El tipo de descuento: dónde se mira
El tipo de descuento se construye por capas:

$$ tipo de descuento = tipo sin riesgo + prima por el riesgo concreto

- **Tipo sin riesgo**: lo que paga el Estado al plazo que te interesa. En noviembre de 2026, el BCE tiene el tipo de depósito en el 2,50 % y el bono español a 10 años rondaba el 4 % en septiembre.
- **Prima de riesgo**: lo que se exige de más por la incertidumbre. Pequeña para un depósito, grande para una acción de una empresa pequeña.

### Cuánto pesa la distancia
Valor presente de 100 € según cuándo se cobran y cómo cambia si el tipo pasa del 3 % al 4 %:

| Se cobran dentro de… | VP al 3 % | VP al 4 % | Cambio |
|---|---|---|---|
| 1 año | 97,09 € | 96,15 € | −1,0 % |
| 5 años | 86,26 € | 82,19 € | −4,7 % |
| 10 años | 74,41 € | 67,56 € | −9,2 % |
| 30 años | 41,20 € | 30,83 € | −25,2 % |

Un punto más de tipos apenas afecta a un pago cercano, pero recorta un cuarto el valor de uno lejano. Por eso los activos cuyo valor depende de pagos lejanos (bonos largos, empresas de crecimiento que aún no ganan dinero) son los que más sufren cuando suben los tipos.

### Rentas: muchos pagos seguidos
Para una serie de n pagos iguales C (una **anualidad**: una pensión, la cuota de una hipoteca, un premio fraccionado):

$$ VP = C × [1 − (1 + r)⁻ⁿ] / r

Si los pagos no terminan nunca (**perpetuidad**):

$$ VP = C / r

Y si crecen a un ritmo g constante (**perpetuidad creciente**, o **modelo de Gordon**):

$$ VP = C / (r − g)     (solo si r > g)

Ejemplo: 100 € al año para siempre al 4 % valen hoy 2.500 €. Si esos 100 € crecen un 2 % anual, valen 5.000 €. El modelo de Gordon es la base de la valoración de acciones del bloque 4.
`,
  fondo: `
### 1. De dónde sale el tipo de interés: Irving Fisher
En *The Theory of Interest* (1930), Irving Fisher explicó el tipo de interés como el punto de equilibrio entre dos fuerzas:
- la **impaciencia**: preferimos consumir antes que después;
- las **oportunidades de inversión**: el capital invertido hoy produce más mañana.

Quien ahorra renuncia a consumir hoy y exige a cambio un tipo de interés; quien invierte puede pagarlo porque su proyecto rinde. El tipo real es el precio que equilibra ambas cosas. Fisher también formuló la relación entre tipo nominal, tipo real e inflación esperada que verás en la lección 0.4.

### 2. VAN y TIR: decidir con el valor presente
- **Valor actual neto (VAN)**: suma de todos los flujos de un proyecto descontados, con signo (los pagos negativos, los cobros positivos). Si el VAN es positivo al tipo de descuento adecuado, el proyecto crea valor.

$$ VAN = Σ Fₜ / (1 + r)ᵗ

- **Tasa interna de rentabilidad (TIR)**: el tipo que hace VAN = 0. Es la rentabilidad anual implícita del proyecto.

La TIR es intuitiva, pero tiene trampas: supone que los flujos intermedios se reinvierten a la propia TIR, puede haber varias TIR si los flujos cambian de signo más de una vez, y no distingue el tamaño (un 30 % sobre 100 € frente a un 15 % sobre 100.000 €). Para decidir, el criterio sólido es el VAN.

### 3. Duración: la sensibilidad a los tipos
La **duración de Macaulay** es la media ponderada del momento en que llegan los pagos de un activo, ponderando cada pago por su valor presente. La **duración modificada** mide cuánto cambia su precio ante un cambio de tipos:

$$ D_Macaulay = Σ t · VP(Fₜ) / Σ VP(Fₜ)
$$ D_mod = D_Macaulay / (1 + y)
$$ ΔP / P ≈ −D_mod × Δy

Un bono a 10 años con cupón del 4 % tiene una duración de unos 8,4 años: si su rentabilidad sube un punto, su precio cae alrededor de un 8 %. Un pago único a 30 años tiene una duración de 30: con un punto más de tipos, la aproximación lineal da −29 %, y el cálculo exacto, −25 %. La diferencia es la **convexidad**: la curva precio-tipo no es una recta, y ayuda al tenedor del bono.

La duración no es solo cosa de bonos. Una empresa que reparte casi todo su beneficio hoy tiene «duración corta»; una que no ganará dinero hasta dentro de 10 años, «duración larga». Esto explica gran parte de por qué las tecnológicas de crecimiento cayeron mucho más que las empresas maduras en 2022.

### 4. Descuento exponencial frente a descuento hiperbólico
La teoría financiera descuenta de forma **exponencial**: el factor entre hoy y dentro de un año es el mismo que entre dentro de 10 años y dentro de 11. Las personas no funcionamos así. Preferimos 100 € hoy a 110 € dentro de un mes, pero preferimos 110 € dentro de 13 meses a 100 € dentro de 12. Descontamos mucho lo inmediato y poco lo lejano: es el **descuento hiperbólico** (David Laibson, 1997).

Consecuencia práctica: siempre parece buena idea empezar a ahorrar «el mes que viene». Por eso las herramientas que eliminan la decisión (aportaciones automáticas, lección 0.10) funcionan tan bien.

### 5. Cuando el dinero futuro valía más: los tipos negativos
Entre 2014 y 2022 el BCE tuvo el tipo de depósito por debajo de cero (llegó al −0,50 %). Con un tipo del −0,5 %, 100 € dentro de 10 años valían hoy 105,14 €: el futuro valía más que el presente. Fue una situación anómala que disparó el precio de los activos de duración larga. La vuelta a tipos positivos a partir de 2022 deshizo buena parte de ese efecto, como muestra el caso real.
`,
  caso: {
    titulo: "De −0,5 % a 3,2 %: el euríbor y el precio del tiempo",
    md: `
| Fecha | Euríbor a 12 meses (media mensual) |
|---|---|
| Enero de 2021 | −0,505 % (mínimo histórico) |
| Octubre de 2023 | 4,160 % (máximo del ciclo 2022–2023) |
| Octubre de 2025 | 2,187 % |
| Octubre de 2026 | 3,239 % |

Lo que significó para el valor presente:
- Una **hipoteca variable** de 100.000 € a 25 años con euríbor + 1 % que se revise ahora pasa de unos **484 € a 539 € al mes**: el mismo dinero prestado cuesta más porque el tiempo «se ha encarecido».
- Un **bono** comprado cuando los tipos eran casi cero valía mucho menos al subir los tipos: su cupón fijo, descontado a tipos más altos, tiene un valor presente menor.
- En septiembre de 2026, el bono español a 10 años rendía en torno al **4,0 %**, frente al 3,2 % de un año antes. Para los ahorradores, nuevos bonos con rentabilidades decentes; para los que ya tenían bonos largos, pérdidas de precio.

> Lo que enseña: el tipo de interés es el precio del tiempo. Cuando cambia, cambia el valor de todo lo que promete pagos futuros.
`
  },
  ejercicios: [
    {
      t: "¿Hoy o dentro de cinco años?",
      p: `
Te ofrecen 10.000 € hoy o 12.000 € dentro de 5 años, con total seguridad. ¿Qué eliges si tu alternativa sin riesgo rinde un 3 %? ¿Y si rinde un 4 %? ¿A partir de qué tipo te da igual?
`,
      s: `
1. Al **3 %**: VP de 12.000 = 12.000 / 1,03⁵ = **10.351 €**. Vale más que 10.000: eliges los 12.000 € futuros.
2. Al **4 %**: VP = 12.000 / 1,04⁵ = **9.863 €**. Vale menos: eliges los 10.000 € de hoy.
3. **Tipo de indiferencia**: 10.000 × (1 + r)⁵ = 12.000 → (1 + r)⁵ = 1,2 → r = 1,2^(1/5) − 1 = **3,71 %**. Esa es la TIR de esperar.
`
    },
    {
      t: "El premio: pago único o anualidad",
      p: `
Ganas un premio. Puedes cobrar 1.000.000 € hoy o 70.000 € al año durante 20 años (primer pago dentro de un año). ¿Qué te conviene con un tipo del 3 %? ¿Y del 5 %?
`,
      s: `
1. Fórmula de la anualidad: VP = C × [1 − (1 + r)⁻ⁿ] / r.
2. Al **3 %**: VP = 70.000 × (1 − 1,03⁻²⁰) / 0,03 = **1.041.423 €** → mejor la renta.
3. Al **5 %**: VP = 70.000 × (1 − 1,05⁻²⁰) / 0,05 = **872.355 €** → mejor el pago único.
4. La TIR de la renta es el **3,44 %**: si crees que puedes invertir por encima de eso con un riesgo parecido, quédate el millón hoy.

Nota: 70.000 × 20 = 1.400.000 € parece mucho más que 1.000.000 €, pero sumar euros de fechas distintas es sumar cosas que no valen lo mismo.
`
    },
    {
      t: "Placas solares: VAN y TIR",
      p: `
Instalar placas solares cuesta 6.000 € y te ahorra 900 € al año en la factura durante 12 años. ¿Merece la pena si tu alternativa rinde un 4 %? ¿Y si rinde un 8 %? ¿Cuál es la TIR?
`,
      s: `
1. **VAN al 4 %**: −6.000 + 900 × (1 − 1,04⁻¹²) / 0,04 = −6.000 + 8.447 = **+2.447 €**. Crea valor.
2. **VAN al 8 %**: −6.000 + 900 × (1 − 1,08⁻¹²) / 0,08 = **+782 €**. Sigue mereciendo la pena, con menos margen.
3. **TIR**: el tipo que hace VAN = 0 es el **10,4 %**. Es la rentabilidad anual implícita de la inversión.
4. Matiz: el ahorro de la factura no tributa, y si la luz sube con la inflación, el ahorro real es mayor. Pero si la instalación dura menos de lo previsto o baja el precio de la electricidad, la TIR cae. El VAN obliga a hacer explícitos esos supuestos.
`
    }
  ],
  errores: [
    "Sumar euros de fechas distintas como si valieran lo mismo.",
    "Elegir entre opciones por la TIR sin mirar el tamaño ni el riesgo.",
    "Usar un tipo de descuento sin riesgo para pagos que tienen mucho riesgo.",
    "Pensar que un bono «seguro» no puede perder valor: si suben los tipos, su precio cae."
  ],
  test: [
    { p: "Cobras 10.000 € dentro de 10 años. Con un tipo del 4 %, ¿cuánto valen hoy?", o: ["Unos 9.600 €", "Unos 6.756 €", "Unos 14.802 €"], c: 1, e: "10.000 / 1,04¹⁰ ≈ 6.756 €. 14.802 € es el valor futuro de 10.000 € de hoy." },
    { p: "Si los tipos suben un punto, ¿qué pago pierde más valor presente?", o: ["Uno dentro de 1 año", "Uno dentro de 30 años", "Pierden lo mismo"], c: 1, e: "El efecto se compone con el plazo: −1 % a un año, −25 % a treinta años." },
    { p: "¿Qué dice el modelo de Gordon?", o: ["VP = C / r", "VP = C / (r − g) para un flujo que crece a un ritmo g", "VP = C × (1 + r)ⁿ"], c: 1, e: "Es la perpetuidad creciente, base de la valoración por dividendos." },
    { p: "Un bono tiene duración modificada 8. Su rentabilidad sube del 4 % al 5 %. ¿Qué pasa con su precio, aproximadamente?", o: ["Sube un 8 %", "Cae un 8 %", "Cae un 1 %"], c: 1, e: "ΔP / P ≈ −D_mod × Δy = −8 × 1 % = −8 %." },
    { p: "¿Por qué se tiende a dejar el ahorro «para el mes que viene»?", o: ["Por el descuento hiperbólico: valoramos mucho lo inmediato y poco lo lejano", "Por la inflación", "Por los impuestos"], c: 0, e: "Es un sesgo bien documentado; automatizar el ahorro lo neutraliza." }
  ],
  lecturas: [
    { t: "The Theory of Interest", a: "Irving Fisher, 1930", n: "Disponible gratis en línea. Los primeros capítulos se leen bien." },
    { t: "Principios de finanzas corporativas", a: "Brealey, Myers y Allen", n: "El manual de referencia. Capítulos 2 y 3 sobre valor presente." },
    { t: "Golden Eggs and Hyperbolic Discounting", a: "David Laibson, Quarterly Journal of Economics, 1997" }
  ]
});


/* ---- l03.js ---- */
LECCIONES.push({
  id: "b0-l3", num: "0.3",
  titulo: "El interés compuesto en la práctica",
  resumen: "Cuando las ganancias se reinvierten, generan a su vez ganancias y el crecimiento se acelera con los años. Los tres factores que lo deciden son el tiempo, lo que aportas y lo que pierdes por el camino (costes e impuestos). El tiempo es el más potente y el único que no se puede recuperar.",
  esencial: `
Con **interés simple**, 10.000 € al 7 % ganan 700 € cada año. Con **interés compuesto**, lo ganado se reinvierte: el segundo año ganas el 7 % de 10.700 €, el tercero el 7 % de 11.449 €, y así. Tras 30 años: 31.000 € con interés simple; **76.123 € con compuesto**.

La forma de la curva es lo importante. Al principio parece que no pasa nada; al final se dispara: entre los años 30 y 40 se gana más que en los 30 primeros juntos.

**Regla del 72**: divide 72 entre la rentabilidad anual y obtendrás, aproximadamente, los años que tarda tu dinero en duplicarse. Al 7 %, unos 10 años; al 3 %, unos 24; al 10 %, algo más de 7.

Tres palancas, por orden de importancia:

1. **Tiempo.** Empezar diez años antes puede valer más que aportar el triple. Es la palanca que no se puede comprar después.
2. **Aportaciones.** En los primeros años, lo que aportas pesa mucho más que lo que rinde. A partir de cierto momento (unos 11 años en el ejemplo de esta lección) la cartera gana cada año más de lo que tú metes.
3. **Fugas.** Comisiones e impuestos también se componen, en tu contra. Una diferencia de costes de 1,6 puntos al año se come más de un tercio del resultado a 30 años.
`,
  entender: `
### La fórmula y la tabla
$$ VF = VP × (1 + r)ⁿ

10.000 € al 7 %:

| Años | Capital | Ganado en ese tramo de 10 años |
|---|---|---|
| 10 | 19.672 € | 9.672 € |
| 20 | 38.697 € | 19.025 € |
| 30 | 76.123 € | 37.426 € |
| 40 | 149.745 € | 73.622 € |

### Con aportaciones mensuales: el punto de cruce
300 € al mes con un 7 % anual:

| Años | Aportado | Capital | Ganancia acumulada | Lo que gana la cartera en un año |
|---|---|---|---|---|
| 10 | 36.000 € | 51.316 € | 15.316 € | ≈ 3.600 € |
| 20 | 72.000 € | 152.261 € | 80.261 € | ≈ 10.700 € |
| 30 | 108.000 € | 350.836 € | 242.836 € | ≈ 24.600 € |
| 40 | 144.000 € | 741.463 € | 597.463 € | ≈ 51.900 € |

Tú aportas 3.600 € al año. A partir del **año 11**, la cartera gana cada año más de lo que tú metes. Antes de ese punto, lo que más importa es ahorrar; después, sobre todo, no interrumpir.

Si en lugar de 300 € fijos subes la aportación un 2 % cada año (con tu sueldo), a los 30 años tienes unos **431.000 €** en vez de 351.000 €.

### Ana y Benito
Ana aporta 200 € al mes de los 25 a los 35 años y para: 24.000 € en total. Benito aporta 200 € al mes de los 35 a los 65: 72.000 €. A los 65, con un 7 %, **Ana tiene unos 260.000 € y Benito unos 234.000 €**. Los diez años de ventaja de Ana compensan los treinta de aportaciones de Benito.

### Las fugas: costes
10.000 € durante 30 años con un mercado que rinde un 7 % bruto:

| Coste anual total | Rentabilidad neta | Capital a 30 años |
|---|---|---|
| 0,2 % (fondo indexado barato) | 6,8 % | 71.968 € |
| 1,0 % | 6,0 % | 57.435 € |
| 1,8 % (fondo activo caro, típico en banca) | 5,2 % | 45.759 € |

Con un 1,8 % de costes pierdes el **36 %** del resultado frente al fondo barato, aunque la diferencia anual parezca pequeña. El bloque 3 entra a fondo.

### Las fugas: impuestos y el valor de diferir
Si pagas impuestos cada año sobre lo que ganas, lo pagado deja de componer. Si los pagas solo al final, el dinero de Hacienda trabaja para ti mientras tanto. 10.000 € al 7 % durante 30 años, con un impuesto del 19 %:

| Cuándo pagas | Capital neto final |
|---|---|
| Cada año (rentabilidad neta del 5,67 %) | 52.306 € |
| Solo al final, sobre la ganancia total | 63.559 € |

Es la base de la ventaja de los **fondos de inversión traspasables** en España frente a los depósitos o los dividendos: bloque 8.
`,
  fondo: `
### 1. La matemática del crecimiento exponencial
Tomando logaritmos en VF = VP × (1 + r)ⁿ:

$$ n = ln(VF / VP) / ln(1 + r)

Sirve para cualquier pregunta de tipo «¿cuánto tardo en…?». Para duplicar: n = ln 2 / ln(1 + r) ≈ 0,693 / r. Las reglas del 69, 70 y 72 son aproximaciones de esto; el 72 se usa porque tiene muchos divisores y compensa el error para tipos del 5 al 10 %. Al 7 %, el valor exacto es 10,24 años; la regla del 72 da 10,29.

### 2. Capitalización continua y rentabilidades logarítmicas
Si un 7 % anual se capitaliza n veces al año, el factor es (1 + 0,07/n)ⁿ. Cuando n tiende a infinito:

$$ lím (1 + r/n)ⁿ = eʳ

Un 7 % continuo equivale a un 7,25 % anual. Al revés, un 7 % anual equivale a una rentabilidad continua (o **logarítmica**) de ln(1,07) = 6,77 %.

Las rentabilidades logarítmicas tienen una propiedad muy útil: **se suman** en el tiempo. La rentabilidad logarítmica de 10 años es la suma de las 10 anuales. Por eso los modelos financieros trabajan con ellas, y por eso aparecerán en la lección 0.7 al estudiar el riesgo a distintos plazos.

### 3. Aportaciones periódicas: de dónde sale la fórmula
Si aportas C al final de cada periodo, la primera aportación capitaliza n − 1 periodos, la segunda n − 2, y la última, ninguno. La suma es una serie geométrica:

$$ VF = C × [(1 + r)ⁿ⁻¹ + … + (1 + r) + 1] = C × [(1 + r)ⁿ − 1] / r

Con aportaciones que crecen a un ritmo g (por ejemplo, con tu sueldo):

$$ VF = C × [(1 + r)ⁿ − (1 + g)ⁿ] / (r − g)

3.600 € anuales al 7 % durante 30 años dan 340.059 € planos y 417.664 € si crecen un 2 % al año (cálculo anual; con aportaciones mensuales sale algo más).

### 4. Los límites del compuesto
Nada compone a tasas altas para siempre:
- **Tamaño.** Cuanto más grande es un capital, menos oportunidades hay donde rendir mucho. Buffett obtuvo rentabilidades altísimas con poco dinero en los años 50 y 60 y bastante más moderadas cuando Berkshire Hathaway se hizo gigante.
- **La economía.** A muy largo plazo, los beneficios empresariales no pueden crecer indefinidamente más deprisa que la economía en la que operan: si lo hicieran, acabarían siendo mayores que toda ella.
- **r frente a g.** Thomas Piketty (*El capital en el siglo XXI*, 2013) sostuvo que cuando la rentabilidad del capital (r) supera el crecimiento de la economía (g), la riqueza heredada tiende a concentrarse. Es un debate abierto en economía, pero es, en el fondo, un argumento sobre el interés compuesto a escala de toda la sociedad.

### 5. El dato histórico más largo
Según el anuario de Dimson, Marsh y Staunton (UBS, 2026), 1 dólar invertido en acciones en 1900 se había convertido en **124.854 dólares** nominales a final de 2025; en bonos largos, en 284 dólares, y en letras del Tesoro, en 69. Esos 124.854 dólares equivalen a una rentabilidad del 9,8 % anual durante 126 años. Ninguna otra clase de activo líquido se acerca, y ese diferencial (lo que se gana por asumir el riesgo de la bolsa) es la **prima de riesgo de la renta variable**, protagonista del bloque 2.
`,
  caso: {
    titulo: "Warren Buffett: el ingrediente es el tiempo",
    md: `
Buffett compró su primera acción con 11 años. En *La psicología del dinero* (2020), Morgan Housel calculó que, de los 84.500 millones de dólares que tenía entonces, **81.500 millones llegaron después de cumplir 65 años**.

Housel plantea un experimento: si Buffett hubiera empezado a invertir a los 30 en lugar de a los 10 y se hubiera retirado a los 60, con las mismas rentabilidades extraordinarias, su fortuna habría sido una fracción minúscula de la real.

> Lo que enseña: el mejor inversor de su generación debe su fortuna tanto a sus décadas invirtiendo como a su acierto. Para un inversor normal, el tiempo es la palanca más fiable.
`
  },
  ejercicios: [
    {
      t: "¿Cuánto tardo?",
      p: `
Tienes 20.000 € invertidos y quieres llegar a 100.000 € sin aportar más. Si obtienes un 6 % anual, ¿cuántos años necesitas?
`,
      s: `
1. Planteamiento: 20.000 × 1,06ⁿ = 100.000 → 1,06ⁿ = 5.
2. Logaritmos: n = ln 5 / ln 1,06 = 1,609 / 0,0583 = **27,6 años**.
3. Comprobación con la regla del 72: al 6 % se duplica cada 12 años. 20.000 → 40.000 (12 años) → 80.000 (24 años) → 100.000 unos 4 años después. Unos 28 años: cuadra.
`
    },
    {
      t: "El precio de un 1,6 % de comisión",
      p: `
Inviertes 10.000 € durante 30 años. El mercado da un 7 % anual. Comparas un fondo indexado con un coste total del 0,2 % y un fondo de gestión activa con un 1,8 % que, de media, rinde lo mismo que el mercado antes de costes. ¿Cuánto tienes con cada uno? ¿Qué rentabilidad extra tendría que conseguir el fondo caro, cada año, solo para empatar?
`,
      s: `
1. Indexado: 10.000 × 1,068³⁰ = **71.968 €**.
2. Activo: 10.000 × 1,052³⁰ = **45.759 €**.
3. Diferencia: 26.209 €, un 36 % menos.
4. Para empatar, el gestor tendría que batir al mercado en 1,6 puntos al año, todos los años, durante 30 años. Muy pocos lo consiguen (bloque 3).
`
    },
    {
      t: "Pagar impuestos cada año o al final",
      p: `
Comparas dos formas de invertir 10.000 € al 7 % durante 30 años, con un impuesto del 19 %: (a) un producto que tributa cada año por lo que gana; (b) un producto que solo tributa cuando vendes, al final. ¿Cuánto tienes neto en cada caso?
`,
      s: `
1. **(a)** Rentabilidad neta anual: 7 % × (1 − 0,19) = 5,67 %. Final: 10.000 × 1,0567³⁰ = **52.306 €**.
2. **(b)** Bruto final: 10.000 × 1,07³⁰ = 76.123 €. Ganancia: 66.123 €. Impuesto: 19 % × 66.123 = 12.563 €. Neto: **63.559 €**.
3. Diferir te da **11.253 € más**, con el mismo tipo de impuesto. Ojo: es una simplificación; con ganancias grandes al final entrarías en tramos más altos de la escala del ahorro (lección 0.4), lo que reduce algo la ventaja.
`
    }
  ],
  errores: [
    "Esperar a «tener más dinero» para empezar.",
    "Interrumpir la bola de nieve: vender en pánico o sacar dinero sin necesidad.",
    "Mirar la comisión anual y no lo que supone a 30 años.",
    "Olvidar que los impuestos pagados cada año también dejan de componer.",
    "Extrapolar una rentabilidad alta reciente a 30 años."
  ],
  test: [
    { p: "Según la regla del 72, ¿cuánto tarda en duplicarse el dinero al 6 %?", o: ["6 años", "12 años", "72 meses"], c: 1, e: "72 / 6 = 12. El cálculo exacto da 11,9." },
    { p: "Aportas 300 € al mes al 7 %. ¿Hacia qué año la cartera empieza a ganar al año más de lo que aportas?", o: ["Hacia el año 3", "Hacia el año 11", "Hacia el año 30"], c: 1, e: "Con unos 51.000 € acumulados, un 7 % ya supera los 3.600 € que aportas al año." },
    { p: "Un 7 % de rentabilidad anual equivale a una rentabilidad logarítmica de…", o: ["7,25 %", "6,77 %", "7 %"], c: 1, e: "ln(1,07) = 0,0677. El 7,25 % es la anual equivalente a un 7 % continuo." },
    { p: "¿Por qué tiene valor diferir impuestos?", o: ["Porque se paga un tipo menor", "Porque el dinero que aún no has pagado sigue componiendo a tu favor", "Porque desaparecen los impuestos"], c: 1, e: "Con el mismo tipo, pagar al final deja más capital neto." },
    { p: "¿Qué rentabilidad anual implica que 1 dólar de 1900 se convirtiera en 124.854 en 2025?", o: ["Un 4,3 %", "Un 9,8 %", "Un 15 %"], c: 1, e: "124.854^(1/126) − 1 ≈ 9,8 % nominal anual." }
  ],
  lecturas: [
    { t: "La psicología del dinero", a: "Morgan Housel, 2020", n: "Capítulo 4, «Confusing compounding»." },
    { t: "El inversor inteligente", a: "Benjamin Graham, 1949 (edición comentada por Jason Zweig)" },
    { t: "Global Investment Returns Yearbook 2026 (resumen público)", a: "Dimson, Marsh y Staunton para UBS", n: "126 años de rentabilidades por país y activo." }
  ]
});


/* ---- l04.js ---- */
LECCIONES.push({
  id: "b0-l4", num: "0.4",
  titulo: "Rentabilidad: nominal, real, neta y la tuya",
  resumen: "La rentabilidad que importa es la real neta: la que queda después de costes, impuestos e inflación. Además, la media de las rentabilidades engaña cuando hay volatilidad, y la rentabilidad de un fondo no es la de quien lo tiene si entra y sale. Medir bien es el primer paso para invertir bien.",
  esencial: `
Cuatro rentabilidades distintas que conviene no confundir:

1. **Nominal**: la del extracto. «Mi depósito da un 3,5 %».
2. **Real**: descontada la inflación. Con inflación del 4,9 %, ese 3,5 % es un −1,3 % real: pierdes poder de compra.
3. **Neta**: después de comisiones e impuestos. Tras la retención del 19 %, el 3,5 % se queda en un 2,84 %, que en términos reales es un −2,0 %.
4. **La tuya**: la que obtienes tú según cuándo metes y sacas dinero, que puede ser muy distinta de la del producto.

Dos trampas frecuentes:

- **La media engaña.** Si ganas un 50 % un año y pierdes un 50 % el siguiente, la media es 0 %, pero has perdido un 25 %. La cifra útil es la **rentabilidad anualizada**: el ritmo constante que da el mismo resultado.
- **Los impuestos van sobre lo nominal.** Hacienda cobra sobre toda la ganancia nominal, también sobre la parte que solo compensa la inflación. Con inflación alta, el impuesto efectivo sobre tu ganancia real puede ser el doble del tipo oficial.

Como referencia a muy largo plazo (1900–2025), las acciones españolas han dado un 3,7 % real anual y las de EE. UU. un 6,9 %. Los bonos españoles, un 1,0 % real, y las letras, un −0,2 %. Ese es el orden de magnitud realista: no el 10 % de los anuncios.
`,
  entender: `
### La ecuación de Fisher
$$ (1 + nominal) = (1 + real) × (1 + inflación)
$$ real = (1 + nominal) / (1 + inflación) − 1 ≈ nominal − inflación

La resta simple funciona bien con cifras pequeñas. Con inflaciones altas, usa la exacta: un 30 % nominal con un 25 % de inflación no es un 5 % real, sino un 4 %.

### La cadena completa
1. Rentabilidad bruta del activo.
2. − Costes: comisión de gestión, de depósito, de compraventa, diferencia entre precio de compra y venta.
3. − Impuestos.
4. − Inflación.
5. = **Rentabilidad real neta**.

### Los impuestos en España (2026)
Intereses, dividendos y ganancias tributan en la **base del ahorro**:

| Base del ahorro del año | Tipo |
|---|---|
| Hasta 6.000 € | 19 % |
| De 6.000 a 50.000 € | 21 % |
| De 50.000 a 200.000 € | 23 % |
| De 200.000 a 300.000 € | 27 % |
| Más de 300.000 € | 30 % |

Es progresiva por tramos: solo la parte que supera cada umbral paga el tipo superior.

**Ejemplo de por qué duele la inflación**: ganas un 5 % con una inflación del 3 % y un impuesto del 19 %.
- Ganancia real antes de impuestos: 1,05 / 1,03 − 1 = 1,94 %.
- Después de impuestos: ganas un 4,05 % nominal, que en real es 1,0405 / 1,03 − 1 = 1,02 %.
- El impuesto se ha llevado el **47 %** de tu ganancia real, aunque el tipo sea del 19 %.

### Cien años de rentabilidades reales
Según el anuario de Dimson, Marsh y Staunton (UBS, 2026), con datos de 1900 a 2025:

| | Acciones | Bonos | Letras |
|---|---|---|---|
| España (real anual) | 3,7 % | 1,0 % | −0,2 % |
| EE. UU. (real anual) | 6,9 % | 1,7 % | 0,5 % |
| Rango de los 21 países con datos completos (acciones) | de 3 % a 6,9 % | | |
| Volatilidad media anual (real), promedio entre países | 23,0 % | 13,1 % | 7,5 % |

En los 21 países, las acciones batieron a los bonos, las letras y la inflación. Pero fíjate en el rango: el país donde inviertes importa mucho. Un 3,7 % real durante 126 años multiplica el poder de compra por 97; un 6,9 %, por casi 4.500. Esa diferencia es un argumento para diversificar globalmente (bloque 2).

### Media aritmética frente a media geométrica
- **Aritmética**: suma de rentabilidades dividida entre años. Útil para estimar el resultado esperado de un año cualquiera.
- **Geométrica (o anualizada, TACC, CAGR)**: la tasa constante que lleva del valor inicial al final.

$$ geométrica = (VF / VP)^(1/n) − 1

La geométrica siempre es menor o igual que la aritmética, y la diferencia crece con la volatilidad. Es la que describe lo que de verdad le pasó a tu dinero.
`,
  fondo: `
### 1. El lastre de la volatilidad
Si las rentabilidades logarítmicas se distribuyen de forma aproximadamente normal (el supuesto habitual), se cumple:

$$ geométrica ≈ aritmética − σ² / 2

donde σ es la volatilidad (desviación típica anual). Con una media aritmética del 9 % y una volatilidad del 18 %, la geométrica ronda el 7,4 %. A esta diferencia se la llama **lastre de la volatilidad** (*volatility drag*). Dos carteras con la misma media aritmética no acaban igual: la más volátil acaba con menos.

### 2. Media frente a mediana: el inversor típico no es el inversor medio
Con rentabilidades que se componen, la distribución de la riqueza final es **asimétrica** (lognormal): unos pocos escenarios muy buenos tiran de la media hacia arriba. Con un 9 % de media aritmética y un 18 % de volatilidad, a 30 años:

| | Multiplicador del capital |
|---|---|
| Media de todos los escenarios | 13,3 veces |
| Mediana (el escenario «típico») | 8,2 veces |
| Probabilidad de quedar por debajo de la media | 69 % |

Cuando alguien proyecta tu jubilación con la rentabilidad media, está calculando un resultado que la mayoría de los escenarios no alcanzan. Para planificar, usa la geométrica (mejor aún, varios escenarios).

### 3. Rentabilidad ponderada por tiempo frente a ponderada por dinero
- **Ponderada por tiempo (TWR)**: encadena las rentabilidades de cada periodo sin importar cuánto dinero había. Mide la habilidad del gestor o el comportamiento del producto. Es la que publican los fondos.
- **Ponderada por dinero (MWR, o TIR)**: el tipo que iguala lo que aportaste y retiraste con lo que tienes. Mide lo que ganaste **tú**.

Se separan cuando aportas o retiras mucho en momentos concretos. Los inversores tienden a meter dinero después de las subidas y a sacarlo después de las caídas, así que su MWR suele ser peor. El estudio *Mind the Gap* de Morningstar lo cuantifica cada año: en los 10 años hasta 2025, fondos y ETFs estadounidenses rindieron un 9,9 % anual y sus inversores, un 8,7 % (lección 0.8).

### 4. Los impuestos sobre ganancias nominales: la fórmula
Con tipo nominal i, inflación π y tipo impositivo t:

$$ real después de impuestos = [1 + i·(1 − t)] / (1 + π) − 1

El tipo efectivo sobre la ganancia real es mayor que t siempre que haya inflación, y puede superar el 100 % (pagar impuestos perdiendo dinero en términos reales). Martin Feldstein lo estudió en los años 70 y 80 como una de las vías por las que la inflación daña la inversión.

### 5. La divisa
El MSCI World o el S&P 500 se suelen dar en dólares. Para un inversor en euros:

$$ (1 + R_€) = (1 + R_$) × (1 + variación del dólar frente al euro)

Si el índice sube un 10 % en dólares y el dólar se deprecia un 8 % frente al euro, tú ganas un 1,2 %. A largo plazo, los tipos de cambio tienden a compensar las diferencias de inflación entre países (paridad del poder adquisitivo), pero a 5 o 10 años pueden mover mucho el resultado. El bloque 5 lo desarrolla.

### 6. Rentabilidad pasada frente a esperada
Las tablas de cien años son la mejor muestra disponible, pero tienen dos problemas: el **sesgo de supervivencia** (estudiamos los mercados que siguen existiendo; Rusia en 1917 o China en 1949 perdieron todo) y la **dependencia del punto de partida** (empezar con valoraciones bajas o altas cambia mucho el resultado). Por eso los profesionales construyen la rentabilidad esperada a partir de componentes (rentabilidad por dividendo, crecimiento, cambios de valoración) y no solo con la media histórica. Bloque 4.
`,
  caso: {
    titulo: "Los depósitos en noviembre de 2026",
    md: `
Con el BCE al 2,50 %, los mejores depósitos y cuentas remuneradas rondan el **3–3,75 % TAE**. Con un depósito al 3,5 %:

| Paso | Resultado |
|---|---|
| Rentabilidad nominal | 3,5 % |
| Tras la retención del 19 % | 2,84 % |
| Inflación (IPC de octubre de 2026) | 4,9 % |
| Rentabilidad real neta | **≈ −2,0 %** |

Esto no hace malos a los depósitos: para el colchón de emergencia (lección 0.5) y el dinero que necesitarás pronto, son lo adecuado. Significa que en este momento no protegen el poder de compra, y que su papel es dar liquidez y seguridad, no hacer crecer el patrimonio.
`
  },
  ejercicios: [
    {
      t: "El fondo ganó, el inversor perdió",
      p: `
Inviertes 10.000 € en un fondo. El primer año el fondo sube un 20 % y, animado, aportas 50.000 € más. El segundo año el fondo cae un 10 %. Calcula la rentabilidad anualizada del fondo (TWR) y la tuya (MWR).
`,
      s: `
1. **Valores**: tras el año 1, 10.000 × 1,20 = 12.000 €. Aportas 50.000 € → 62.000 €. Tras el año 2, 62.000 × 0,90 = **55.800 €**.
2. **TWR del fondo**: (1,20 × 0,90)^(1/2) − 1 = 1,08^0,5 − 1 = **+3,9 % anual**. El fondo lo hizo razonablemente bien.
3. **MWR tuya**: buscas el tipo r que cumple 10.000 × (1 + r)² + 50.000 × (1 + r) = 55.800. Resolviendo, r = **−6,1 % anual**.
4. Comprobación sencilla: has puesto 60.000 € y tienes 55.800 €. Has perdido dinero en un fondo que ha ganado. La diferencia la explica el momento de tu aportación.
`
    },
    {
      t: "El impuesto efectivo sobre la ganancia real",
      p: `
Un bono te da un 5 % nominal. La inflación es del 4 % y pagas un 19 % de impuestos. ¿Cuál es tu rentabilidad real antes y después de impuestos? ¿Qué porcentaje de tu ganancia real se lleva el impuesto?
`,
      s: `
1. Real antes de impuestos: 1,05 / 1,04 − 1 = **0,96 %**.
2. Nominal después de impuestos: 5 % × 0,81 = 4,05 %. Real después de impuestos: 1,0405 / 1,04 − 1 = **0,05 %**.
3. El impuesto se lleva (0,96 − 0,05) / 0,96 = **95 %** de tu ganancia real.

Con la inflación al 4 %, un bono al 5 % apenas protege el poder de compra después de impuestos.
`
    },
    {
      t: "La rentabilidad de un índice extranjero en euros",
      p: `
Un año, el índice estadounidense S&P 500 sube un 12 % en dólares. En ese año el euro se aprecia de 1,08 a 1,17 dólares. ¿Cuánto ha ganado un inversor europeo sin cobertura de divisa?
`,
      s: `
1. Valor del dólar en euros al principio: 1 / 1,08 = 0,9259 €. Al final: 1 / 1,17 = 0,8547 €. Variación del dólar: 0,8547 / 0,9259 − 1 = **−7,7 %**.
2. Rentabilidad en euros: 1,12 × (1 − 0,077) − 1 = 1,12 × 0,923 − 1 = **+3,4 %**.
3. Tres cuartas partes de la subida se han perdido por la divisa. En otros años ocurre lo contrario.
`
    }
  ],
  errores: [
    "Comparar rentabilidades de épocas o países distintos sin descontar la inflación.",
    "Planificar con la media aritmética en lugar de la geométrica.",
    "Creer que tu rentabilidad es la que publica el fondo.",
    "Olvidar que Hacienda cobra también sobre la parte de la ganancia que solo compensa la inflación.",
    "Ignorar el efecto de la divisa en los índices extranjeros."
  ],
  test: [
    { p: "Un 30 % nominal con un 25 % de inflación es una rentabilidad real de…", o: ["5 %", "4 %", "55 %"], c: 1, e: "1,30 / 1,25 − 1 = 4 %. La resta simple solo vale con cifras pequeñas." },
    { p: "Media aritmética del 9 % y volatilidad del 18 %. ¿Rentabilidad geométrica aproximada?", o: ["9 %", "7,4 %", "5 %"], c: 1, e: "9 % − 0,18² / 2 = 9 % − 1,6 % ≈ 7,4 %." },
    { p: "¿Qué rentabilidad publica un fondo?", o: ["La ponderada por dinero", "La ponderada por tiempo", "La media aritmética"], c: 1, e: "La TWR no depende de cuándo entra o sale cada inversor." },
    { p: "Entre 1900 y 2025, ¿qué rentabilidad real anual dieron las acciones españolas?", o: ["Un 1 %", "Un 3,7 %", "Un 6,9 %"], c: 1, e: "Un 3,7 %, frente al 6,9 % de EE. UU. y el 1,0 % de los bonos españoles." },
    { p: "A 30 años, con rentabilidades volátiles, ¿qué es más probable?", o: ["Acabar por encima de la media", "Acabar por debajo de la media", "Acabar justo en la media"], c: 1, e: "La distribución es asimétrica: en el ejemplo, el 69 % de los escenarios queda por debajo." }
  ],
  lecturas: [
    { t: "Triumph of the Optimists", a: "Elroy Dimson, Paul Marsh y Mike Staunton, 2002", n: "El origen de la base de datos de 1900 en adelante." },
    { t: "Expected Returns", a: "Antti Ilmanen, 2011", n: "Cómo pensar en rentabilidades esperadas y no solo pasadas. Avanzado." },
    { t: "Mind the Gap 2025", a: "Morningstar", n: "La brecha entre la rentabilidad de los fondos y la de sus inversores." }
  ]
});


/* ---- l05.js ---- */
LECCIONES.push({
  id: "b0-l5", num: "0.5",
  titulo: "El colchón de emergencia",
  resumen: "Antes de invertir, hay que tener dinero para imprevistos: entre 3 y 6 meses de gastos, seguro y disponible. Su rentabilidad es lo de menos. Su función es que nunca tengas que vender inversiones, ni endeudarte caro, en el peor momento.",
  esencial: `
El **colchón de emergencia** es dinero reservado para lo inesperado: una avería, una baja, quedarte sin trabajo, un gasto médico o familiar.

**Cuánto.** Entre 3 y 6 meses de **gastos** (no de sueldo). Si tu hogar gasta 2.000 € al mes, entre 6.000 y 12.000 €. Más cerca de 3 meses si tus ingresos son muy estables; más cerca de 6 (o más) si son variables o dependen de un solo sueldo.

**Dónde.** En productos sin riesgo de mercado y que puedas usar en días:
- cuentas remuneradas y depósitos que se puedan cancelar sin penalización, en entidades cubiertas por un **fondo de garantía de depósitos** (100.000 € por titular y entidad);
- fondos monetarios o Letras del Tesoro para una parte.

Nunca en bolsa, ni en cripto, ni en nada cuyo valor pueda caer justo cuando lo necesitas.

**Por qué es la base de todo lo demás.** Las crisis suelen traer a la vez despidos y caídas de bolsa. Sin colchón, un imprevisto te obliga a vender inversiones cuando han caído o a tirar de una tarjeta al 23 %. Con colchón, la caída de la bolsa es una molestia y no un problema.

> El colchón no es una inversión: es un seguro. Se paga con la rentabilidad que dejas de ganar, y protege de algo mucho más caro.
`,
  entender: `
### Ajusta el tamaño a tu riesgo real
| Factor | Te permite menos (≈ 3 meses) | Te pide más (6–12 meses) |
|---|---|---|
| Estabilidad del ingreso | Funcionario con plaza, contrato muy estable | Autónomo, comisiones, temporalidad |
| Ingresos en el hogar | Dos sueldos independientes | Un solo sueldo |
| Personas a cargo | Ninguna | Hijos, familiares dependientes |
| Vivienda | Alquiler (el casero arregla) | Propiedad (reparaciones, derramas) |
| Sector | Poco cíclico | Despide mucho en las crisis |
| Salud y edad | Sin cargas previsibles | Cargas previsibles |

En España, la tasa de paro era del **10,18 %** en el tercer trimestre de 2026 (2,59 millones de personas), y subió en 95.900 personas ese trimestre. La prestación por desempleo cubre una parte del sueldo, con topes, durante un tiempo limitado: ayuda, pero rara vez sustituye todo el ingreso.

### Dónde guardarlo
| Opción | Disponibilidad | Protección | Comentario |
|---|---|---|---|
| Cuenta remunerada | Inmediata | Fondo de garantía hasta 100.000 € | Ideal para el primer mes |
| Depósito a plazo | Al vencimiento (o cancelando con penalización) | Fondo de garantía hasta 100.000 € | Mejor tipo, menos flexible |
| Fondo monetario | 1–3 días hábiles | Sin garantía; riesgo muy bajo | Se puede traspasar a otros fondos sin tributar (bloque 8) |
| Letras del Tesoro | Al vencer (3 a 12 meses) o vendiéndolas antes | Respaldo del Estado | Venderlas antes de tiempo puede tener un pequeño coste |

Hoy, con el BCE al 2,50 %, las mejores cuentas y depósitos rondan el 3–3,75 % TAE. No bate la inflación, pero la diferencia con no remunerarlo es real.

### Estructura escalonada
1. **Un mes de gastos** en la cuenta corriente o una remunerada: para lo urgente.
2. **El resto** en depósitos con vencimientos escalonados (por ejemplo, cada 3 meses) o en un fondo monetario: rinde algo más y sigue siendo accesible en días.

### El coste del seguro
10.000 € de colchón al 3 % en lugar de invertidos con una rentabilidad esperada del 7 % cuestan unos **400 € al año**. Es el precio del seguro. A cambio te evita: vender con pérdidas en mitad de una crisis, financiarte al 20 % o más, y la presión psicológica que lleva a decisiones malas.

### Reponerlo y revisarlo
- Si lo usas, reponerlo es la prioridad siguiente (escalera, lección 0.10).
- Revísalo cuando cambien tus gastos o tu situación: un hijo, una hipoteca, un cambio de trabajo.
- Un colchón demasiado grande también es un error: 20 meses de gastos parados pierden contra la inflación sin necesidad.
`,
  fondo: `
### 1. La teoría del ahorro precautorio
¿Por qué ahorramos más cuando el futuro es incierto? La economía lo formalizó en tres pasos:
- **Leland (1968)** mostró que la incertidumbre sobre los ingresos futuros lleva a ahorrar más de lo que se ahorraría con ingresos seguros, siempre que la utilidad cumpla cierta condición.
- **Kimball (1990)** llamó a esa condición **prudencia**: matemáticamente, que la tercera derivada de la función de utilidad sea positiva (u‴ > 0). Intuitivamente: el miedo a quedarse corto pesa más que la ilusión por tener de sobra.
- **Carroll (1997)**, con su modelo de **ahorro amortiguador** (*buffer-stock*), explicó por qué muchos hogares mantienen un colchón objetivo de riqueza respecto a sus ingresos: son lo bastante impacientes para no ahorrar mucho más, pero lo bastante prudentes para no bajar de ese nivel. Cuando el colchón cae por debajo, ahorran; cuando lo supera, gastan.

El colchón de emergencia es la versión práctica de este resultado teórico.

### 2. Dimensionar con escenarios malos, no medios
El error habitual es pensar en lo esperado. El colchón no está para el caso medio, sino para un caso malo razonable. Un método sencillo:
1. Estima tu **déficit mensual** si ocurre el problema (gastos − ingresos que mantendrías, incluida la prestación).
2. Estima una **duración pesimista** del problema (por ejemplo, el tiempo que tardarías en encontrar trabajo en una recesión, no en un año bueno).
3. Colchón ≈ déficit mensual × duración pesimista + un gasto extraordinario típico (coche, reparación).

Es la misma lógica que usan los bancos para su riesgo (cubrir un percentil malo, no la media).

### 3. Por qué la bolsa no sirve como colchón: correlación en las colas
En tiempos normales, el empleo y la bolsa se mueven con bastante independencia. En las recesiones, ambos empeoran a la vez: es la **correlación en las colas**. Esto convierte la bolsa en un mal colchón justo por la razón por la que tendrías que usarlo. El mismo argumento aparece en la lección 0.8 al hablar del **capital humano**.

### 4. Los fondos monetarios por dentro
Un fondo monetario invierte en deuda a muy corto plazo y de alta calidad (letras, pagarés de grandes empresas, depósitos bancarios). Su rentabilidad sigue de cerca al tipo del BCE, menos las comisiones. En Europa, el reglamento de fondos monetarios de 2017 los clasifica según cómo calculan su valor (de valor liquidativo constante, de baja volatilidad o variable) y les impone límites de liquidez y plazo.

No tienen garantía de depósitos y en situaciones extremas pueden perder. En septiembre de 2008, tras la quiebra de Lehman Brothers, el Reserve Primary Fund estadounidense, que tenía pagarés de Lehman, cayó a 0,97 dólares por participación («rompió el dólar») y congeló reembolsos. Provocó retiradas masivas en todo el sector hasta que el Tesoro de EE. UU. lo garantizó temporalmente. Las reglas posteriores, en EE. UU. y en Europa, buscan que no se repita.

### 5. El colchón como opción
En lenguaje financiero, el colchón es una **opción**: te da el derecho, no la obligación, de no vender en el peor momento y de aprovechar oportunidades sin endeudarte. Las opciones valen más cuanto más incierto es el entorno. Por eso tiene sentido revisar al alza el colchón cuando la economía se enfría, como en 2026, con el paro repuntando.
`,
  caso: {
    titulo: "Marzo de 2020 y otoño de 2026",
    md: `
**2020.** Con el COVID-19, el MSCI World cayó en torno a un 30 % en pocas semanas, mientras millones de trabajadores en España pasaban a un ERTE con menos ingresos. Quien necesitó dinero en marzo y solo tenía inversiones tuvo que vender abajo y convertir una caída temporal en pérdida definitiva. Quien tenía colchón pudo esperar: el índice recuperó su máximo en unos seis meses.

**2026.** El empleo sigue en máximos (22,85 millones de ocupados), pero el paro ha repuntado al 10,18 % en el tercer trimestre. Con la inflación alta y los tipos subiendo, es un entorno en el que revisar el colchón tiene más sentido que en un año tranquilo.

> Lo que enseña: el colchón no se nota los años buenos. Se nota una vez cada muchos años, y ese año decide si el resto del plan sobrevive.
`
  },
  ejercicios: [
    {
      t: "Dimensionar el colchón de un hogar",
      p: `
Una pareja gasta 2.400 € al mes. Ella es funcionaria con plaza (1.900 € netos) y él trabaja en una empresa privada de un sector cíclico (1.700 € netos). Si él perdiera el empleo, calculan que cobraría una prestación de unos 1.100 € durante un año. Viven de alquiler y no tienen hijos. Dimensiona su colchón y propón dónde guardarlo.
`,
      s: `
1. **Escenario malo razonable**: él pierde el trabajo. Ingresos: 1.900 + 1.100 = 3.000 € al mes. Cubren los 2.400 € de gasto: **no hay déficit mensual** mientras dure la prestación.
2. **Escenario más duro**: la prestación termina y él sigue sin trabajo. Ingresos 1.900 €, déficit de 500 € al mes. En 6 meses: 3.000 €.
3. **Imprevisto típico** (avería, viaje urgente): unos 2.500 €.
4. **Propuesta**: 3 meses de gastos = **7.200 €**, que cubre con holgura los escenarios 2 y 3 juntos (5.500 €). El sueldo estable de ella permite no ir a 6 meses.
5. **Dónde**: 2.400 € en una cuenta remunerada (un mes) y 4.800 € en dos depósitos de 2.400 € con vencimientos alternos cada 3 meses, o en un fondo monetario.
`
    },
    {
      t: "¿Es caro el seguro?",
      p: `
Sin colchón, supón que cada año hay un 10 % de probabilidad de un imprevisto de 8.000 €, y que en un 30 % de esos casos coincide con una caída de bolsa del 25 % que te obliga a vender. Si no hay caída, igualmente tienes que vender acciones (sin pérdida). Compara el coste esperado de no tener colchón con los 400 € al año que cuesta tenerlo. ¿Qué te dice el resultado?
`,
      s: `
1. **Pérdida si vendes tras una caída del 25 %**: para obtener 8.000 € vendes acciones que antes de la caída valían 8.000 / 0,75 = 10.667 €. Si el mercado se recupera, has perdido 2.667 € de valor.
2. **Coste esperado anual**: 0,10 × 0,30 × 2.667 = **80 €**.
3. Comparado con los 400 € del colchón, en valor esperado el seguro parece caro.
4. **Pero el valor esperado no lo es todo.** Faltan tres cosas: (a) si no tienes acciones suficientes o no quieres vender, la alternativa es una tarjeta o un préstamo al 20 % o más; (b) el daño se concentra en los peores momentos de tu vida, y la teoría del ahorro precautorio dice que esos euros valen más que los demás; (c) el riesgo de que el pánico te lleve a vender **todo**, no solo 8.000 €.
5. Conclusión: un colchón razonable compensa; uno exagerado, no. Por eso se dimensiona con escenarios, no se maximiza.
`
    }
  ],
  errores: [
    "Guardar el colchón en bolsa o en cripto porque «rinde más».",
    "Contar el colchón como parte de la cartera de inversión.",
    "Calcularlo sobre el sueldo y no sobre los gastos.",
    "No reponerlo después de usarlo.",
    "Tener demasiado: un seguro sobredimensionado también es una pérdida."
  ],
  test: [
    { p: "¿Sobre qué se calcula el colchón?", o: ["El sueldo neto", "Los gastos y el déficit que tendrías en un escenario malo", "El patrimonio total"], c: 1, e: "Lo que hay que cubrir es lo que te faltaría si algo va mal." },
    { p: "¿Qué es la «prudencia» en el sentido de Kimball?", o: ["Invertir solo en depósitos", "La propiedad de la utilidad (u‴ > 0) que lleva a ahorrar más cuando el futuro es incierto", "Tener seguro de vida"], c: 1, e: "El temor a quedarse corto pesa más que la ilusión por tener de sobra." },
    { p: "¿Por qué la bolsa sirve mal como colchón?", o: ["Porque cobra comisiones", "Porque los despidos y las caídas de bolsa tienden a coincidir en las recesiones", "Porque tarda un mes en devolver el dinero"], c: 1, e: "Es la correlación en las colas: cuando más lo necesitas, más probable es que esté abajo." },
    { p: "¿Cuánto cubre un fondo de garantía de depósitos en la UE?", o: ["100.000 € por titular y entidad", "Todo, sin límite", "50.000 € por cuenta"], c: 0, e: "Por titular y por entidad. Si superas esa cifra, reparte entre entidades." },
    { p: "Un fondo monetario…", o: ["Tiene garantía de depósitos", "No tiene garantía, aunque su riesgo es muy bajo", "Invierte en acciones de bajo riesgo"], c: 1, e: "Invierte en deuda a muy corto plazo. En 2008 uno llegó a perder un 3 %." }
  ],
  lecturas: [
    { t: "Precautionary Saving in the Small and in the Large", a: "Miles Kimball, Econometrica, 1990", n: "El concepto de prudencia. Técnico." },
    { t: "Buffer-Stock Saving and the Life Cycle/Permanent Income Hypothesis", a: "Christopher Carroll, Quarterly Journal of Economics, 1997" },
    { t: "Too Big to Fail", a: "Andrew Ross Sorkin, 2009", n: "Crónica de septiembre de 2008, incluido el pánico en los fondos monetarios." }
  ]
});


/* ---- l06.js ---- */
LECCIONES.push({
  id: "b0-l6", num: "0.6",
  titulo: "Las deudas: la inversión con rentabilidad garantizada",
  resumen: "Devolver una deuda equivale a invertir con una rentabilidad segura igual a su tipo de interés, y libre de impuestos. Las deudas caras se eliminan antes de invertir; las baratas pueden convivir con la inversión. Y la deuda usada para invertir multiplica tanto las ganancias como las pérdidas.",
  esencial: `
Si debes dinero al 23 % y lo inviertes esperando ganar un 7 %, pierdes la diferencia. Amortizar esa deuda te «rinde» un 23 % **garantizado** y sin pagar impuestos.

**Regla práctica**
- **Deuda cara** (por encima de un 7–8 %): tarjetas revolving, préstamos al consumo caros, compras aplazadas. Se elimina **antes** de invertir.
- **Deuda intermedia** (4–7 %): se puede repartir entre amortizar e invertir.
- **Deuda barata** (hipoteca fija baja): puede convivir con la inversión.

**Las tarjetas revolving** son el caso extremo: cobraban de media un **23,34 % TAE** a finales de 2025. Con una cuota baja, casi todo lo que pagas son intereses: 3.000 € a 60 € al mes tardan unos 10 años en pagarse y cuestan más de 4.300 € de intereses.

**Hipotecas variables**: con el euríbor en el 3,239 % en octubre de 2026 (un punto más que hace un año), quien revisa ahora paga unos 55 € más al mes por cada 100.000 € de deuda.

**Invertir con deuda** (apalancamiento) multiplica las ganancias y las pérdidas, y tiene un coste que se suele subestimar. En este curso, la regla es clara: no se invierte con dinero prestado.
`,
  entender: `
### Por qué el umbral está en el 7–8 %
Es, más o menos, la rentabilidad que se espera a largo plazo de la bolsa. Pero:
- la bolsa **no lo garantiza** y la deuda sí garantiza su coste;
- la ganancia de la inversión **tributa** y el interés que te ahorras al amortizar, no. Un 7 % bruto se queda en un 5,67 % tras el 19 %;
- comparar un 7 % con riesgo con un 7 % seguro no es comparar lo mismo.

Por eso, en la práctica, cualquier deuda por encima de un 5–6 % ya compite muy bien con invertir.

### La revolving por dentro
Deuda de 3.000 € al 23,34 % TAE (un 1,76 % al mes). El primer mes generas unos **53 €** de intereses.

| Cuota mensual | Tiempo para pagarla | Intereses totales |
|---|---|---|
| 60 € | ≈ 10 años | ≈ 4.300 € |
| 80 € | ≈ 5 años | ≈ 1.950 € |
| 100 € | ≈ 3,7 años | ≈ 1.300 € |
| 150 € | ≈ 2 años | ≈ 730 € |

### Salir de varias deudas
- **Avalancha**: pagas el mínimo en todas y todo lo extra va a la de **mayor tipo**. Es lo que menos intereses cuesta.
- **Bola de nieve**: todo lo extra va a la de **menor saldo**. Cuesta algo más, pero cerrar deudas rápido motiva. Los estudios de comportamiento (por ejemplo, Gal y McShane, 2012) muestran que cerrar cuentas enteras aumenta la probabilidad de acabar de pagar.

### Cómo se calcula la cuota de una hipoteca: el sistema francés
En España casi todas las hipotecas usan cuota constante (**sistema francés**). Al principio la cuota es casi todo intereses; al final, casi todo capital.

$$ cuota = P · i / [1 − (1 + i)⁻ⁿ]

P es el capital prestado, i el tipo mensual (tipo anual / 12) y n el número de cuotas. Ejemplo: 150.000 € a 25 años al 3 % → cuota de **711 €**; intereses totales a lo largo de la vida del préstamo: unos **63.400 €**.

### ¿Amortizar la hipoteca o invertir?
- Compara el **tipo de la hipoteca** con la **rentabilidad esperada neta de impuestos** de invertir, y pon un descuento por el riesgo.
- Hipoteca **fija baja** (2–2,5 %): invertir suele ganar con claridad a largo plazo.
- Hipoteca **variable** con euríbor + diferencial por encima del 4 %: amortizar es muy competitivo, sobre todo si tu tolerancia al riesgo es baja.
- Si amortizas, **reducir plazo** ahorra más intereses que reducir cuota (ejercicio 2). Reducir cuota da más margen mensual.
- Nunca amortices a costa del colchón: el dinero metido en la hipoteca no se recupera.
`,
  fondo: `
### 1. De dónde sale la fórmula de la cuota
El banco presta P hoy. Tú pagas n cuotas C. En equilibrio, el valor presente de las cuotas descontadas al tipo del préstamo debe ser igual a P (lección 0.2):

$$ P = C · [1 − (1 + i)⁻ⁿ] / i   ⟹   C = P · i / [1 − (1 + i)⁻ⁿ]

En cada mes, el interés es i · saldo pendiente, y el resto de la cuota amortiza capital. Como el saldo baja, la parte de intereses baja y la de capital sube.

### 2. TIN, TAE y el coste real de un préstamo
El **TIN** solo recoge el tipo pactado. La **TAE** incluye la capitalización y las comisiones obligatorias, y se calcula como la TIR de los flujos reales del préstamo. Un préstamo de 100.000 € a 25 años con TIN del 2,5 % tiene una TAE del 2,53 %; si cobra una comisión de apertura del 1 % (recibes 99.000 € pero devuelves como si fueran 100.000 €), la TAE sube al **2,62 %**. Productos vinculados (seguros, nómina) suben el coste real aunque no siempre entren en la TAE.

### 3. Deuda, inflación y tipos reales
Una deuda a tipo fijo pierde valor real con la inflación. Una cuota de 1.000 € dentro de 10 años, con un 4,9 % de inflación, equivale a 620 € de hoy. Por eso la inflación transfiere riqueza de acreedores a deudores, y por eso los bancos centrales suben tipos cuando la inflación sube: para que el tipo **real** no se vuelva negativo. En las hipotecas variables, el euríbor recoge esas subidas y la ventaja del deudor desaparece.

### 4. Apalancamiento: la matemática que casi nadie hace
Si inviertes L veces tu capital (L = 1 sin deuda, L = 2 pidiendo prestado lo mismo que tienes), con una rentabilidad esperada μ, una volatilidad σ y un coste de la deuda r, la rentabilidad **geométrica** (la que de verdad compone, lección 0.4) es aproximadamente:

$$ g(L) ≈ r + L·(μ − r) − L²·σ² / 2

El término negativo crece con el **cuadrado** del apalancamiento. Con un exceso de rentabilidad μ − r del 4 % y una volatilidad del 18 %:

| Apalancamiento L | Exceso de crecimiento geométrico sobre r |
|---|---|
| 1 | 2,38 % |
| 1,5 | 2,36 % |
| 2 | 1,52 % |
| 3 | −2,58 % |

A partir de cierto punto, más deuda reduce el crecimiento esperado, aunque aumente la media aritmética. El óptimo teórico es L* = (μ − r) / σ² ≈ 1,23, que es el **criterio de Kelly** (John Kelly, 1956) aplicado a la inversión. En la práctica:
- μ y σ no se conocen con precisión, y equivocarse por exceso es mucho peor que por defecto;
- el coste real de la deuda para un particular es bastante mayor que r;
- con deuda pueden obligarte a vender: con un apalancamiento de 2, una caída del 50 % borra todo el capital propio, y el bróker te liquida mucho antes (**llamada de margen**).

Por eso incluso los defensores de Kelly recomiendan usar una fracción («medio Kelly»). Para un particular, la conclusión razonable es no apalancarse.

### 5. Los ETF apalancados y la erosión por volatilidad
Un ETF que replica 2 veces un índice **cada día** no da 2 veces la rentabilidad del índice a largo plazo. Si el índice sube un 10 % y luego cae un 9,09 %, vuelve a donde estaba; el ETF ×2 sube un 20 % y cae un 18,18 %, y acaba un 1,8 % abajo. Con mucha volatilidad y sin tendencia, se erosiona aunque el índice no se mueva. Es la fórmula anterior en acción.

### 6. Usura y revolving en España
- En 2023 el Tribunal Supremo fijó que un interés revolving es usurario si supera en más de 6 puntos el tipo medio de ese tipo de tarjetas que publica el Banco de España.
- En febrero de 2026 el Supremo admitió por primera vez una demanda colectiva contra tarjetas revolving.
- Un anteproyecto de ley aprobado en enero de 2026 fija un tope transitorio del 22 % TAE. A noviembre de 2026, no está en vigor.
`,
  caso: {
    titulo: "Revolving y euríbor en 2026",
    md: `
**Revolving.** Según el barómetro de la asociación Asufin (diciembre de 2025), la TAE media de las tarjetas revolving era del **23,34 %**, frente al **6,63 %** de los préstamos personales a 1–5 años. Financiarse con revolving costaba casi 17 puntos más al año.

**Euríbor.** La media del euríbor a 12 meses de octubre de 2026 fue del **3,239 %**, frente al 2,187 % de un año antes. Para una hipoteca de 100.000 € a 25 años con euríbor + 1 % que se revisa ahora, la cuota pasa de unos **484 € a 539 €** al mes.

> Lo que enseña: el coste de la deuda no es fijo en el tiempo. Una hipoteca variable que era barata en 2021 hoy compite con invertir; una revolving nunca lo hace.
`
  },
  ejercicios: [
    {
      t: "La trampa de la cuota baja",
      p: `
Debes 3.000 € en una tarjeta revolving al 23,34 % TAE. ¿Qué parte de una cuota de 60 € se va en intereses el primer mes? ¿Cuánto tardas en pagarla con 60 € y con 150 € al mes?
`,
      s: `
1. **Tipo mensual**: (1,2334)^(1/12) − 1 = 1,76 %.
2. **Intereses del primer mes**: 3.000 × 1,76 % = **52,90 €**. De tus 60 €, solo 7,10 € reducen la deuda.
3. **Con 60 €/mes**: unos **123 meses (10,2 años)**, con unos 4.330 € de intereses. Pagas más del doble de lo que debías.
4. **Con 150 €/mes**: unos **25 meses**, con unos 730 € de intereses.
5. Subir la cuota de 60 a 150 € te ahorra unos 3.600 € y ocho años.
`
    },
    {
      t: "Amortizar: ¿reducir plazo o cuota?",
      p: `
Tienes una hipoteca de 150.000 € a 25 años al 3 % fijo. A los 5 años amortizas 10.000 €. Compara reducir la cuota (mismo plazo) con reducir el plazo (misma cuota).
`,
      s: `
1. **Cuota inicial**: 150.000 · 0,0025 / (1 − 1,0025⁻³⁰⁰) = **711,32 €**.
2. **Saldo a los 5 años**: 128.258 €. Tras amortizar: 118.258 €. Quedan 240 cuotas.
3. **Sin amortizar**, los intereses restantes serían 711,32 × 240 − 128.258 = 42.458 €.
4. **Reducir cuota**: nueva cuota 655,86 € (−55 €/mes). Intereses restantes: 39.148 €. **Ahorro: 3.310 €**.
5. **Reducir plazo**: mantienes 711,32 € y terminas en unos 215 meses en lugar de 240 (dos años antes). Intereses restantes: 34.787 €. **Ahorro: 7.671 €**.
6. Reducir plazo ahorra más del doble. Reducir cuota te da liquidez mensual. La elección depende de si quieres rentabilidad o margen.
`
    },
    {
      t: "¿Amortizar o invertir?",
      p: `
Tienes 10.000 € y dos hipotecas posibles: (a) fija al 2 %; (b) variable a euríbor + 0,8 %, con el euríbor en el 3,24 %. La alternativa es invertir en bolsa con una rentabilidad esperada del 7 % bruto, que tributa al 19 % al vender. ¿Qué harías en cada caso?
`,
      s: `
1. **Rentabilidad esperada neta de invertir**: aproximadamente 7 % × 0,81 = **5,7 %**, pero con riesgo (puede ser negativa durante años).
2. **(a) Fija al 2 %**: amortizar «rinde» un 2 % seguro. La diferencia esperada (3,7 puntos) compensa el riesgo para alguien con horizonte largo y colchón. **Invertir** suele tener sentido.
3. **(b) Variable al 4,04 %**: amortizar rinde un 4,04 % seguro (y puede subir si sube el euríbor). La ventaja esperada de invertir baja a 1,6 puntos, con riesgo. Es una zona gris: con poca tolerancia al riesgo, **amortizar** es muy razonable; con mucha, se puede repartir.
4. Ajuste fino: una parte del 7 % de la bolsa es compensación por riesgo. Comparar con un tipo seguro sin restarlo sobrevalora invertir.
`
    }
  ],
  errores: [
    "Invertir mientras se arrastra deuda de tarjeta o de consumo cara.",
    "Pagar solo la cuota mínima de una revolving.",
    "Comparar el tipo de la hipoteca con la rentabilidad bruta de la bolsa, sin impuestos ni riesgo.",
    "Amortizar y quedarse sin colchón.",
    "Pedir prestado para invertir porque «la bolsa siempre sube a largo plazo»."
  ],
  test: [
    { p: "Tienes 2.000 € ahorrados y 2.000 € de revolving al 23 %. ¿Qué haces?", o: ["Invertirlos en un indexado", "Pagar la deuda (manteniendo un mínimo de colchón)", "Repartir mitad y mitad"], c: 1, e: "Ninguna inversión ofrece un 23 % seguro y libre de impuestos." },
    { p: "En el sistema francés, al principio de la hipoteca la cuota es…", o: ["Casi toda capital", "Casi toda intereses", "Mitad y mitad"], c: 1, e: "El interés se calcula sobre el saldo pendiente, que al principio es máximo." },
    { p: "Al amortizar anticipadamente, ¿qué ahorra más intereses?", o: ["Reducir cuota", "Reducir plazo", "Es igual"], c: 1, e: "En el ejemplo, 7.671 € frente a 3.310 €." },
    { p: "Con la fórmula g(L) ≈ r + L(μ − r) − L²σ²/2, ¿qué pasa al aumentar mucho el apalancamiento?", o: ["El crecimiento geométrico sube sin límite", "El término de volatilidad, que crece con L², acaba reduciendo el crecimiento", "No cambia nada"], c: 1, e: "Por eso existe un óptimo (Kelly) y pasarse es peor que quedarse corto." },
    { p: "¿Por qué un ETF ×2 diario puede perder aunque el índice acabe igual?", o: ["Por las comisiones", "Por la erosión por volatilidad al reajustar cada día", "Porque replica mal"], c: 1, e: "+10 % y −9,09 % deja el índice igual y el ETF ×2 un 1,8 % abajo." }
  ],
  lecturas: [
    { t: "Fortune's Formula", a: "William Poundstone, 2005", n: "La historia del criterio de Kelly. Divulgación excelente." },
    { t: "Can Small Victories Help Win the War?", a: "David Gal y Blakeley McShane, Journal of Marketing Research, 2012", n: "La evidencia sobre el método bola de nieve." },
    { t: "Portal del Cliente Bancario", a: "Banco de España", n: "Explicaciones oficiales sobre TAE, hipotecas y revolving." }
  ]
});


/* ---- l07.js ---- */
LECCIONES.push({
  id: "b0-l7", num: "0.7",
  titulo: "El horizonte: cuándo necesitarás el dinero",
  resumen: "El plazo decide dónde puede ir cada euro. A más plazo, más probable ha sido históricamente acabar en positivo con la bolsa, pero el riesgo no desaparece: cambia de forma. Lo que necesitarás en menos de 2–3 años no debe depender del mercado.",
  esencial: `
Divide tu dinero por **objetivos con fecha**: la entrada de un piso en 2 años, un coche en 4, la jubilación en 30. Cada objetivo tiene su horizonte, y el horizonte decide el riesgo que puede asumir.

| Lo necesitarás en… | Dónde suele tener sentido |
|---|---|
| Menos de 2–3 años | Cuentas, depósitos, monetarios, letras |
| 3 a 7 años | Mezcla, con bastante renta fija |
| Más de 7–10 años | La renta variable puede ser la mayor parte |

**Por qué.** La bolsa puede caer un 30–50 % y tardar años en recuperarse. El MSCI World cayó en torno a un 46 % entre 2000 y 2002 y tardó unos 5 años en volver. Si la caída te pilla con el plazo encima, tendrás que vender abajo.

**Lo que dicen los datos.** Con el MSCI World entre 1970 y 2023, el 12 % de los periodos de 5 años acabaron en pérdidas; el 2 % de los de 10 años, y ninguno de los de 15 o 20 años.

**El matiz importante.** El largo plazo reduce la probabilidad de perder, pero no el riesgo: el abanico de resultados finales posibles se hace más ancho con los años, no más estrecho. Y lo que funcionó con un índice mundial no funcionó con un solo país: quien invirtió en la bolsa japonesa en 1989 tardó 34 años en recuperar su dinero.

**El horizonte se acorta solo.** Lo que hoy necesitarás dentro de 10 años, dentro de 7 lo necesitarás en 3. A medida que se acerca la fecha, hay que ir pasándolo a activos más tranquilos.
`,
  entender: `
### Las grandes caídas del MSCI World
| Crisis | Caída máxima aprox. | Tiempo hasta recuperar |
|---|---|---|
| Burbuja puntocom (2000–2002) | −46 % | ≈ 5 años |
| Crisis financiera (2008–2009) | −40 % | ≈ 4 años |
| COVID-19 (2020) | −30 % | ≈ 6 meses |
| Inflación y subida de tipos (2022) | −18 % | ≈ 18 meses |

### Las pérdidas cuestan más de recuperar
$$ subida necesaria = 1 / (1 − caída) − 1

| Caída | Subida necesaria | Años para recuperar al 7 % anual |
|---|---|---|
| 20 % | 25 % | 3,3 |
| 40 % | 67 % | 7,6 |
| 50 % | 100 % | 10,2 |
| 80 % | 400 % | 23,8 |

### Cubos por plazo
Una forma práctica de organizarlo:
1. **Cubo 1, liquidez** (0–2 años): colchón y gastos previstos.
2. **Cubo 2, renta fija** (2–7 años): objetivos a medio plazo.
3. **Cubo 3, renta variable** (más de 7 años): crecimiento.

Cuando el cubo 3 ha tenido años buenos, se usa para rellenar los cubos 1 y 2. Cuando ha tenido años malos, se tira de los cubos 1 y 2 y se espera.

### Senda de reducción del riesgo
Los fondos de **ciclo de vida** (*target date*) bajan automáticamente el peso de la renta variable a medida que se acerca la fecha objetivo. Puedes hacer lo mismo a mano: por ejemplo, empezar a pasar a renta fija entre 5 y 7 años antes del objetivo, en tramos.

### Riesgo de secuencia
El orden de las rentabilidades no importa si inviertes de una vez y no tocas nada: 100 × 1,1 × 0,7 = 100 × 0,7 × 1,1. Sí importa cuando **aportas o retiras**. Una caída fuerte justo antes de jubilarte, o de comprar la casa, hace mucho más daño que la misma caída al principio, cuando tenías poco invertido o mucho tiempo por delante. El ejercicio 2 lo cuantifica.
`,
  fondo: `
### 1. Un modelo para pensar el riesgo a distintos plazos
Supongamos que las rentabilidades logarítmicas anuales (lección 0.3) son independientes, con media μ y volatilidad σ. Como los logaritmos se suman:

$$ media a T años = μ · T
$$ desviación típica a T años = σ · √T

La media crece con T y la dispersión con √T: con el tiempo, la media «gana» a la dispersión. La probabilidad de acabar en pérdidas (rentabilidad acumulada negativa) es:

$$ P(pérdida) = Φ(−μ · √T / σ)

donde Φ es la función de distribución normal estándar. Con μ = 5 % real y σ = 17 % (valores razonables para la bolsa mundial):

| Horizonte | P(pérdida real) | Volatilidad anualizada | Abanico del capital final (percentiles 5 y 95) |
|---|---|---|---|
| 1 año | 38 % | 17 % | |
| 5 años | 26 % | 7,6 % | |
| 10 años | 18 % | 5,4 % | de 0,68 a 4,0 veces |
| 15 años | 13 % | 4,4 % | |
| 20 años | 9 % | 3,8 % | de 0,78 a 9,5 veces |
| 30 años | 5 % | 3,1 % | de 0,97 a 20,7 veces |

Dos lecturas opuestas, las dos correctas:
- La **rentabilidad anualizada** se concentra: su volatilidad cae como σ / √T.
- El **capital final** se dispersa: a 30 años, el escenario malo y el bueno están a 20 veces de distancia.

### 2. ¿Por qué el modelo da más riesgo que la historia?
El modelo dice un 13 % de probabilidad de perder a 15 años; la historia del MSCI World 1970–2023, un 0 %. Tres razones:
- El modelo mide pérdidas **reales**; los datos históricos citados, **nominales** en dólares.
- Entre 1970 y 2023 solo hay unos **3,6 periodos de 15 años independientes** (sin solaparse). Con tan pocas observaciones, «nunca ha pasado» es poca evidencia.
- Puede haber cierta **reversión a la media**: tras caídas fuertes, las acciones baratas tienden a rendir más. Si existe, reduce el riesgo a largo plazo. Si no, el modelo es más realista.

### 3. El gran debate: ¿la bolsa es menos arriesgada a largo plazo?
- **Paul Samuelson (1963)**, «Risk and Uncertainty: A Fallacy of Large Numbers»: aceptar muchas apuestas sucesivas no hace buena una apuesta que no aceptarías una vez. En 1969 demostró que, con ciertas preferencias (aversión al riesgo relativa constante) y rentabilidades independientes, la proporción óptima en bolsa **no depende del horizonte**.
- **Zvi Bodie (1995)**, «On the Risk of Stocks in the Long Run»: si el riesgo bajara con el plazo, asegurarse contra quedar por debajo del tipo sin riesgo sería más barato a más plazo. Pero el precio de ese seguro (una opción de venta) **sube** con el plazo. Conclusión: el riesgo no desaparece.
- **Jeremy Siegel** (*Stocks for the Long Run*, 1994 y ediciones posteriores) defiende lo contrario con datos de EE. UU.: a largo plazo, la volatilidad de las acciones cae más de lo que predice el modelo independiente, por la reversión a la media.
- **Pástor y Stambaugh (2012)**, «Are Stocks Really Less Volatile in the Long Run?»: incluso aceptando algo de reversión, como no conocemos con certeza la rentabilidad esperada futura, esa incertidumbre se acumula con el plazo. Para un inversor real, la volatilidad por año **no** baja a largo plazo.

¿Por qué entonces el consejo de más renta variable con más plazo? El argumento sólido no es la estadística de la bolsa, sino el **capital humano** (lección 0.8): de joven tienes muchos años de sueldo por delante, que funcionan como un bono, y puedes ajustar ahorro, gasto o jubilación si las cosas van mal. Con la edad, ese margen se reduce.

### 4. Japón: el riesgo de un solo país
El Nikkei alcanzó su máximo en diciembre de 1989 y no lo superó hasta febrero de 2024. Japón era entonces una de las mayores bolsas del mundo y su valoración parecía justificada por el crecimiento. Es el contraejemplo de manual: el horizonte largo ayuda sobre una cartera diversificada globalmente; sobre un solo país, sector o empresa, puede no bastar.
`,
  caso: {
    titulo: "Japón, 1989–2024",
    md: `
En diciembre de 1989 la bolsa japonesa era una de las más grandes del mundo y su economía parecía imparable. Quien invirtió todo en el Nikkei en ese momento tardó **34 años** en volver a ver la misma cifra (sin contar dividendos, que acortan algo el plazo).

En ese mismo periodo, un índice mundial que incluía a Japón junto con decenas de países se multiplicó varias veces.

> Lo que enseña: el tiempo juega a tu favor cuando el riesgo está repartido. Con el riesgo concentrado, incluso 30 años pueden no ser suficientes.
`
  },
  ejercicios: [
    {
      t: "Probabilidad de perder según el plazo",
      p: `
Una cartera mixta tiene una rentabilidad logarítmica real esperada del 4 % y una volatilidad del 15 %. Con el modelo de esta lección, ¿qué probabilidad hay de acabar con pérdidas reales a 3 años? ¿Y a 8 años?
`,
      s: `
1. Fórmula: P = Φ(−μ√T / σ).
2. **3 años**: −0,04 × √3 / 0,15 = −0,46. Φ(−0,46) ≈ **32 %**.
3. **8 años**: −0,04 × √8 / 0,15 = −0,75. Φ(−0,75) ≈ **23 %**.
4. Incluso a 8 años, casi una de cada cuatro veces acabarías perdiendo poder de compra. Por eso el dinero con fecha cercana no se arriesga.
`
    },
    {
      t: "Riesgo de secuencia",
      p: `
Tienes 100.000 € y retiras 5.000 € al principio de cada año durante 10 años. Las rentabilidades de esos 10 años son un −30 % y nueve años de +10 %. Compara el resultado si el −30 % llega el primer año y si llega el último. ¿Y sin retiradas?
`,
      s: `
1. **Sin retiradas**, el orden no importa: 100.000 × 0,70 × 1,10⁹ = **165.056 €** en ambos casos.
2. **Con retiradas y la caída el primer año**: acabas con **82.116 €**.
3. **Con retiradas y la caída el último año**: acabas con **109.275 €**.
4. Mismas rentabilidades, mismas retiradas: **27.000 € de diferencia** solo por el orden. Cuando la caída llega pronto, vendes participaciones baratas para vivir y ya no se recuperan.
5. Defensas: tener 1–2 años de gastos en liquidez al empezar a retirar (cubos) y flexibilidad para retirar menos en años malos.
`
    },
    {
      t: "¿Cuánto se tarda en recuperar?",
      p: `
Tu cartera cae un 40 %. Si después sube un 7 % anual, ¿cuántos años tardas en volver al punto de partida?
`,
      s: `
1. Necesitas pasar de 0,60 a 1: 0,60 × 1,07ⁿ = 1 → n = ln(1 / 0,60) / ln(1,07).
2. n = 0,511 / 0,0677 = **7,6 años**.
3. Si la caída fuera del 50 %, serían 10,2 años. Por eso las caídas grandes se evitan más con diversificación y con el reparto entre activos que intentando adivinar cuándo llegarán.
`
    }
  ],
  errores: [
    "Invertir en bolsa el dinero de la entrada del piso o de un gasto cercano.",
    "No ir reduciendo riesgo a medida que se acerca la fecha del objetivo.",
    "Leer «nunca ha perdido en 15 años» como una garantía.",
    "Confundir menos probabilidad de pérdida con menos riesgo: el abanico de resultados se ensancha con el tiempo.",
    "Aplicar los datos de un índice mundial a una cartera concentrada en un país o en pocas empresas."
  ],
  test: [
    { p: "Necesitas 20.000 € dentro de 18 meses. ¿Dónde?", o: ["Fondo indexado mundial", "Depósitos o cuentas remuneradas", "Acciones de pequeñas empresas"], c: 1, e: "Con ese plazo no hay tiempo de recuperarse de una caída." },
    { p: "Tras una caída del 50 %, ¿cuánto hay que subir para recuperar?", o: ["50 %", "75 %", "100 %"], c: 2, e: "1 / (1 − 0,5) − 1 = 100 %." },
    { p: "Con rentabilidades independientes, la dispersión del capital final con el plazo…", o: ["Se reduce", "Aumenta", "No cambia"], c: 1, e: "La volatilidad acumulada crece como σ√T; lo que se reduce es la de la rentabilidad anualizada." },
    { p: "¿Qué argumentó Zvi Bodie en 1995?", o: ["Que la bolsa no tiene riesgo a largo plazo", "Que asegurarse contra quedar por debajo del tipo sin riesgo cuesta más cuanto más largo es el plazo", "Que hay que invertir todo en bonos"], c: 1, e: "Si el riesgo desapareciera con el plazo, ese seguro sería cada vez más barato, y no lo es." },
    { p: "¿Cuál es el argumento más sólido para tener más renta variable de joven?", o: ["Que la bolsa nunca pierde a largo plazo", "El capital humano: muchos años de sueldo por delante y margen para ajustar", "Que los jóvenes toleran mejor el riesgo"], c: 1, e: "Es el argumento de Bodie, Merton y Samuelson (1992), que verás en la lección 0.8." }
  ],
  lecturas: [
    { t: "Risk and Uncertainty: A Fallacy of Large Numbers", a: "Paul Samuelson, Scientia, 1963", n: "Breve y famoso." },
    { t: "On the Risk of Stocks in the Long Run", a: "Zvi Bodie, Financial Analysts Journal, 1995" },
    { t: "Stocks for the Long Run", a: "Jeremy Siegel", n: "La defensa clásica de la bolsa a largo plazo, con datos desde 1802." },
    { t: "Are Stocks Really Less Volatile in the Long Run?", a: "Ľuboš Pástor y Robert Stambaugh, Journal of Finance, 2012", n: "Técnico." }
  ]
});


/* ---- l08.js ---- */
LECCIONES.push({
  id: "b0-l8", num: "0.8",
  titulo: "Tu perfil de riesgo",
  resumen: "El riesgo adecuado sale de tres cosas: cuánto puedes perder sin que afecte a tu vida (capacidad), cuánto aguantas sin cometer errores (tolerancia) y cuánto necesitas ganar (necesidad). La teoría financiera lo formaliza con la aversión al riesgo, y la evidencia muestra que equivocarse por exceso cuesta caro.",
  esencial: `
Tres preguntas distintas:

- **Capacidad**: ¿cuánto puedes perder sin que cambie tu vida? Depende de tus finanzas: estabilidad de ingresos, colchón, deudas y plazo.
- **Tolerancia**: ¿cuánto puedes ver caer tu dinero sin vender ni perder el sueño? Depende de ti.
- **Necesidad**: ¿cuánta rentabilidad necesitas para llegar a tus objetivos? Si con poco riesgo ya llegas, asumir más no aporta.

**Manda la más baja de las tres.** Una cartera que tus finanzas soportan pero tus nervios no acabará vendida en el peor momento.

**Una prueba sincera.** Imagina que tienes 20.000 € invertidos y en seis meses valen 12.000 €. Las noticias son malas y nadie sabe cuándo acabará. ¿Venderías, esperarías o comprarías más? Si nunca has vivido algo así con dinero dentro, sé prudente con la respuesta: la tolerancia se sobreestima en épocas buenas.

**Traducirlo a una cartera.** La palanca principal es el reparto entre renta variable (acciones) y renta fija o liquidez. Si la bolsa cae un 40 %, una cartera 100 % acciones cae un 40 %; una 60/40, alrededor de un 24 %; una 30/70, alrededor de un 12 % (suponiendo que la parte de renta fija aguanta, que no siempre ocurre).

**El comportamiento cuesta dinero.** En los 10 años hasta 2025, los fondos estadounidenses rindieron un 9,9 % anual, pero sus inversores, que entraban y salían, un 8,7 %. Elegir un riesgo que puedas mantener es parte de la rentabilidad.
`,
  entender: `
### Capacidad: qué la aumenta y qué la reduce
| Aumenta la capacidad | La reduce |
|---|---|
| Ingresos estables y previsibles | Ingresos variables o de un solo sueldo |
| Colchón completo y sin deudas caras | Colchón escaso, deudas |
| Horizonte largo | Objetivos cercanos |
| Pensión pública o patrimonio de respaldo | Dependencia total de la cartera |

### Tolerancia: cómo medirla mejor
- **Pregunta en euros, no en porcentajes.** «Perder 8.000 €» se siente distinto que «−40 %».
- **Recuerda tu comportamiento real** en caídas pasadas (2020, 2022), no el que crees que tuviste.
- **El test del banco** (de idoneidad, por la normativa MiFID) es un punto de partida, pero es genérico y fácil de responder con lo que quieres oír.

### Necesidad: el cálculo
¿Qué rentabilidad real necesitas para llegar a tu objetivo con lo que puedes aportar? Si la respuesta es un 2 %, no tiene sentido una cartera que busca un 6 % con caídas del 50 %. Si es un 7 %, quizás el objetivo no sea realista y haya que ajustarlo (más aportación, más plazo o menos meta). Ejercicio 3.

### La brecha del inversor (Morningstar)
| Tipo de fondo (EE. UU., 10 años hasta 2025) | Brecha anual entre el fondo y sus inversores |
|---|---|
| Media de fondos y ETFs | 1,2 puntos (9,9 % frente a 8,7 %) |
| Fondos indexados | 1,1 puntos |
| Fondos más volátiles | 2,1 puntos |
| Fondos menos volátiles | 0,4 puntos |

Cuanto más volátil el producto, mayor la tentación de entrar y salir, y mayor la brecha.

### Concentración
Las acciones individuales y las empresas pequeñas (*small caps*) son bastante más volátiles que un índice mundial. Una cartera con mucho peso en ellas tiene un perfil de riesgo mayor que lo que sugiere el simple reparto acciones/renta fija. Bloques 2 y 4.
`,
  fondo: `
### 1. Utilidad y aversión al riesgo
La teoría de la decisión modela las preferencias con una **función de utilidad** u(riqueza). Si es cóncava (cada euro extra da menos satisfacción que el anterior), la persona es **aversa al riesgo**: prefiere una cantidad segura a una apuesta con el mismo valor esperado. La medida estándar es la **aversión relativa al riesgo** γ:

$$ γ = −W · u″(W) / u′(W)

La familia más usada es la de **aversión relativa constante** (CRRA):

$$ u(W) = W^(1−γ) / (1−γ)     (y u = ln W cuando γ = 1)

Con γ = 0 eres neutral al riesgo; γ = 1 corresponde a la utilidad logarítmica; la mayoría de las estimaciones para personas reales están entre 2 y 10.

**Equivalente cierto**: la cantidad segura que te da la misma utilidad que una apuesta. Para una apuesta 50/50 de ganar un 50 % o perder un 30 % (valor esperado +10 %):

| Aversión γ | Equivalente cierto |
|---|---|
| 1 | +2,5 % |
| 2 | −4,5 % |
| 4 | −14,6 % |

Con γ = 2 preferirías perder un 4,5 % seguro antes que jugar una apuesta con un +10 % esperado.

Para riesgos pequeños, la prima que exigirías es aproximadamente:

$$ prima de riesgo ≈ ½ · γ · σ²

### 2. Cuánto invertir en bolsa: la regla de Merton
Robert Merton (1969) resolvió el reparto óptimo entre un activo con riesgo (rentabilidad esperada μ, volatilidad σ) y uno sin riesgo (r) para un inversor CRRA:

$$ w* = (μ − r) / (γ · σ²)

Con una prima de la bolsa sobre el activo sin riesgo de 4,5 puntos y una volatilidad del 18 %:

| γ | Proporción óptima en bolsa |
|---|---|
| 1 | 139 % (con deuda) |
| 2 | 69 % |
| 3 | 46 % |
| 4 | 35 % |
| 6 | 23 % |
| 10 | 14 % |

Tres lecciones de la fórmula: la proporción **no depende del horizonte** (con sus supuestos, lección 0.7); sube con la prima de riesgo y **baja con el cuadrado de la volatilidad**; y con γ = 1 coincide con el criterio de Kelly de la lección 0.6.

### 3. El enigma de la prima de riesgo
Mehra y Prescott (1985) mostraron que la diferencia histórica entre la rentabilidad de las acciones y la de los activos sin riesgo es demasiado grande para lo que predicen los modelos con aversiones al riesgo razonables: haría falta un γ altísimo para justificarla. Es el **equity premium puzzle**, uno de los grandes enigmas de las finanzas. Una de las explicaciones más aceptadas viene de la psicología.

### 4. Teoría de las perspectivas y aversión miope a las pérdidas
Kahneman y Tversky (1979) mostraron que las personas no evaluamos la riqueza total, sino **ganancias y pérdidas respecto a un punto de referencia**, y que las pérdidas pesan más: en su versión de 1992 estimaron que una pérdida duele unas **2,25 veces** lo que alegra una ganancia del mismo tamaño (coeficiente de aversión a las pérdidas λ).

Benartzi y Thaler (1995) combinaron esa aversión con la frecuencia con que miramos la cartera: si un inversor evalúa sus resultados cada año, las pérdidas frecuentes de la bolsa le duelen tanto que exige una prima enorme. Lo llamaron **aversión miope a las pérdidas**. Consecuencia práctica: mirar la cartera menos a menudo reduce el sufrimiento y los errores.

### 5. Capital humano: el activo que no aparece en el extracto
Bodie, Merton y Samuelson (1992) incorporaron el **capital humano** (el valor presente de tus ingresos futuros por trabajo) al problema de la cartera. Si tu sueldo es estable y poco relacionado con la bolsa (un profesor o un funcionario con plaza), tu capital humano se parece a un gran **bono**: puedes permitirte más renta variable en la cartera financiera. Si tu sueldo depende de los mercados (banca de inversión, una empresa cíclica, una *startup*), tu capital humano ya es una apuesta por la bolsa: compénsalo con menos.

Como el capital humano se va gastando con los años, el peso razonable de la renta variable tiende a bajar con la edad. Este es el fundamento sólido del consejo «más bolsa de joven», no la idea de que la bolsa deje de tener riesgo a largo plazo.
`,
  caso: {
    titulo: "La brecha del inversor, año tras año",
    md: `
El estudio *Mind the Gap* de Morningstar compara cada año la rentabilidad de los fondos con la que obtiene el dinero real de sus inversores. En la edición con datos de los 10 años hasta diciembre de 2025:
- Fondos y ETFs estadounidenses: **9,9 % anual**. El dinero de sus inversores: **8,7 %**.
- Incluso en fondos indexados, la brecha fue de **1,1 puntos**.
- En los fondos más volátiles, **2,1 puntos**; en los más tranquilos, **0,4**.

A 30 años, una brecha de 1,2 puntos anuales se lleva más de una cuarta parte del resultado final (un 28 %).

> Lo que enseña: la rentabilidad que se pierde por asumir un riesgo que no aguantas puede ser mayor que la que se gana por asumirlo.
`
  },
  ejercicios: [
    {
      t: "El equivalente cierto",
      p: `
Te ofrecen invertir en algo que, con un 50 % de probabilidad, gana un 50 %, y con un 50 % pierde un 30 %. Si tu utilidad es logarítmica (γ = 1), ¿qué cantidad segura te resultaría igual de atractiva? ¿Y con γ = 2?
`,
      s: `
1. **Valor esperado**: 0,5 × 1,50 + 0,5 × 0,70 = 1,10 → +10 %.
2. **γ = 1 (logarítmica)**: utilidad esperada = 0,5 · ln 1,5 + 0,5 · ln 0,7 = 0,5 · 0,405 + 0,5 · (−0,357) = 0,024. Equivalente cierto = e^0,024 = 1,0247 → **+2,5 %**.
3. **γ = 2**: u(W) = −1/W. Utilidad esperada = 0,5 · (−1/1,5) + 0,5 · (−1/0,7) = −1,0476. Equivalente cierto = 1 / 1,0476 = 0,9545 → **−4,5 %**.
4. Con γ = 2, la apuesta te parece peor que perder un 4,5 % seguro, aunque su valor esperado sea positivo. La aversión al riesgo explica que mucha gente no invierta aunque «compense de media».
`
    },
    {
      t: "Estimar tu aversión y tu reparto",
      p: `
Una persona dice que le daría igual quedarse con un −3 % seguro que aceptar una apuesta 50/50 de +20 % o −20 %. Estima su γ con la aproximación de la prima de riesgo y, con la regla de Merton (prima de la bolsa del 4,5 %, volatilidad del 18 %), su proporción óptima en bolsa.
`,
      s: `
1. La apuesta tiene media 0 y volatilidad σ = 20 %. La prima que exige es 3 %.
2. Prima ≈ ½ · γ · σ² → 0,03 = 0,5 · γ · 0,04 → **γ ≈ 1,5**.
3. Merton: w* = 0,045 / (1,5 × 0,18²) = 0,045 / 0,0486 = **93 %**.
4. Lectura crítica: estas preguntas hipotéticas suelen dar aversiones más bajas que el comportamiento real en una caída. Con un γ de 3 (bastante habitual), la proporción sería del 46 %. La diferencia muestra lo sensible que es la respuesta y por qué conviene ser conservador al estimarte.
`
    },
    {
      t: "La necesidad de riesgo",
      p: `
Quieres tener 300.000 € (en euros de hoy) dentro de 25 años y puedes aportar 400 € al mes. ¿Qué rentabilidad real anual necesitas? ¿Qué tendrías con un 2 % y con un 5 % real?
`,
      s: `
1. Buscas r tal que el valor futuro de 400 €/mes durante 25 años sea 300.000 €. Resolviendo numéricamente: **r ≈ 6,7 % real**.
2. Es más de lo que ha dado la bolsa mundial en términos reales a largo plazo (6,9 % en EE. UU., 3,7 % en España desde 1900). El objetivo, con esa aportación, es optimista.
3. Con un **2 % real**: unos **155.000 €**. Con un **5 % real**: unos **234.000 €**.
4. Opciones realistas: aportar más, alargar el plazo o rebajar la meta. Subir el riesgo para compensar suele acabar mal.
`
    }
  ],
  errores: [
    "Elegir el perfil según lo que ha subido la bolsa últimamente.",
    "Asumir más riesgo del que necesitas para tus objetivos.",
    "Pasarse a un perfil más conservador justo después de una caída, vendiendo abajo.",
    "Ignorar el capital humano: no es lo mismo un sueldo estable que uno ligado a los mercados.",
    "Mirar la cartera a diario: aumenta el dolor de las pérdidas y las malas decisiones."
  ],
  test: [
    { p: "Capacidad de riesgo alta y tolerancia baja. ¿Qué manda?", o: ["La capacidad", "La tolerancia", "Ninguna"], c: 1, e: "Manda la más baja: una cartera que no aguantas acabará vendida en el peor momento." },
    { p: "En la regla de Merton w* = (μ − r) / (γσ²), si la volatilidad se duplica, la proporción óptima en bolsa…", o: ["Se reduce a la mitad", "Se reduce a la cuarta parte", "No cambia"], c: 1, e: "Depende del cuadrado de la volatilidad." },
    { p: "¿Qué es la aversión miope a las pérdidas?", o: ["Miedo a perder de vista la cartera", "Sufrir mucho las pérdidas y además mirar la cartera con frecuencia, lo que hace exigir una prima enorme", "No ver las pérdidas a largo plazo"], c: 1, e: "Benartzi y Thaler (1995) la propusieron para explicar el enigma de la prima de riesgo." },
    { p: "Según Kahneman y Tversky (1992), una pérdida duele aproximadamente…", o: ["Lo mismo que alegra una ganancia igual", "Unas 2,25 veces lo que alegra una ganancia igual", "La mitad"], c: 1, e: "Es el coeficiente de aversión a las pérdidas." },
    { p: "Un profesor con plaza y un empleado de banca de inversión con el mismo sueldo. ¿Quién puede permitirse más renta variable?", o: ["El de banca de inversión", "El profesor, porque su capital humano se parece a un bono", "Los dos igual"], c: 1, e: "El sueldo del banquero ya depende de los mercados." }
  ],
  lecturas: [
    { t: "Pensar rápido, pensar despacio", a: "Daniel Kahneman, 2011", n: "La aversión a las pérdidas y mucho más." },
    { t: "Lifetime Portfolio Selection under Uncertainty", a: "Robert Merton, Review of Economics and Statistics, 1969", n: "Técnico." },
    { t: "The Equity Premium: A Puzzle", a: "Rajnish Mehra y Edward Prescott, Journal of Monetary Economics, 1985" },
    { t: "Myopic Loss Aversion and the Equity Premium Puzzle", a: "Shlomo Benartzi y Richard Thaler, Quarterly Journal of Economics, 1995" },
    { t: "Labor Supply Flexibility and Portfolio Choice in a Life Cycle Model", a: "Zvi Bodie, Robert Merton y William Samuelson, 1992" }
  ]
});


/* ---- l09.js ---- */
LECCIONES.push({
  id: "b0-l9", num: "0.9",
  titulo: "El ciclo vital: cuánto ahorrar y para qué",
  resumen: "Ahorrar sirve para repartir el consumo a lo largo de la vida. La pregunta clave es cuánto capital necesitas para que tu cartera complemente tu pensión, y la respuesta depende sobre todo de tu tasa de ahorro y de una tasa de retirada realista, que fuera de EE. UU. es menor que el famoso 4 %.",
  esencial: `
La vida financiera tiene tres fases:
1. **Acumulación**: trabajas, ahorras e inviertes.
2. **Consolidación**: el capital ya es grande; importa protegerlo y ajustar el riesgo.
3. **Disfrute**: retiras de la cartera para complementar la pensión.

**¿Cuánto capital necesitas?** Si quieres retirar cada año una cantidad fija, actualizada con la inflación, una referencia clásica es:

$$ capital necesario ≈ gasto anual a cubrir / tasa de retirada

Con la famosa **regla del 4 %**, necesitas 25 veces lo que quieres retirar al año. Con un 3,5 %, unas 29 veces; con un 3 %, unas 33. Si quieres complementar tu pensión con 10.000 € al año, entre 250.000 y 333.000 €.

**Cuidado con el 4 %.** Sale de datos de EE. UU., el mercado que mejor lo hizo en el siglo XX. Con datos de 17 países desarrollados, un 4 % habría sido seguro en solo 4 de ellos. Para un inversor europeo, un 3–3,5 % es una referencia más prudente.

**Lo que más pesa: la tasa de ahorro.** Con una rentabilidad real del 5 %, partiendo de cero y apuntando a 25 veces tu gasto:

| Ahorras de tu ingreso neto… | Años hasta poder vivir de la cartera |
|---|---|
| 10 % | 52 |
| 20 % | 37 |
| 30 % | 28 |
| 50 % | 17 |

Ahorrar más hace dos cosas a la vez: acumulas más y te acostumbras a vivir con menos, así que necesitas menos capital.

**La pensión pública** sigue siendo en España la base de la jubilación para la mayoría, pero el sistema afronta presión demográfica. Planificar como complemento, y no como sustituto, es lo razonable.
`,
  entender: `
### Planifica en euros de hoy
Trabaja con **euros de hoy y rentabilidades reales** (descontada la inflación). Así no tienes que adivinar la inflación de los próximos 30 años y las cifras se entienden: «necesito 10.000 € al año de los de hoy».

### Los pasos del cálculo
1. **Gasto anual previsto en la jubilación** (en euros de hoy). Suele ser algo menor que el actual: sin hipoteca, sin gastos de trabajo, sin aportar a la cartera.
2. **Menos la pensión pública estimada** (en euros de hoy). La Seguridad Social ofrece un simulador con tus datos.
3. = **Hueco a cubrir con la cartera**.
4. **Capital necesario** = hueco / tasa de retirada (3–4 %).
5. **Aportación necesaria**: con la fórmula de aportaciones periódicas de la lección 0.3, a una rentabilidad real prudente.

### Los impuestos en la fase de disfrute
Al retirar de un fondo o vender acciones, tributas por la **ganancia** de lo que vendes, no por todo lo retirado. Al principio de la jubilación, buena parte de cada retirada es capital aportado, y el impuesto efectivo es bajo. Con los años, la parte de ganancia crece. Bloque 8.

### Flexibilidad: la mejor protección
La tasa de retirada «segura» supone que retiras lo mismo pase lo que pase. En la práctica, poder recortar un 10 % el gasto en los años malos (o retrasar un año la jubilación) mejora mucho las probabilidades de que el plan aguante, y permite tasas iniciales algo mayores.

### Riesgo de longevidad
No sabes cuántos años vivirás. Planificar hasta una edad media es planificar para quedarte sin dinero con un 50 % de probabilidad si superas la media. Lo prudente es planificar hasta una edad alta (por ejemplo, 95 años) o asegurar una parte del ingreso con una **renta vitalicia**.
`,
  fondo: `
### 1. La teoría: ciclo vital y renta permanente
- **Franco Modigliani y Richard Brumberg (1954)**, la **hipótesis del ciclo vital**: las personas planifican su consumo para toda la vida y ahorran en la etapa de ingresos altos para consumir en la de ingresos bajos (la jubilación). El ahorro de un país depende, por tanto, de su estructura de edades y de su crecimiento. Modigliani recibió el Nobel en 1985, en parte por esta idea.
- **Milton Friedman (1957)**, la **hipótesis de la renta permanente**: el consumo depende de la renta que esperamos tener de forma estable, no de la de este mes. Un ingreso extraordinario se ahorra en gran parte; una subida de sueldo permanente se consume.

Ambas predicen que la gente **suaviza el consumo**. La evidencia muestra que lo hacemos solo en parte: muchos hogares reducen su consumo al jubilarse más de lo que predice la teoría (el *retirement-consumption puzzle*), en parte por falta de planificación.

### 2. De dónde sale la regla del 4 %
- **William Bengen (1994)** usó datos de EE. UU. desde 1926 y buscó la mayor tasa inicial de retirada, ajustada después por inflación, que habría aguantado 30 años en **todos** los periodos históricos con una cartera de entre 50 % y 75 % en acciones. La llamó *SAFEMAX* y le salió alrededor del 4 %.
- **El estudio Trinity (Cooley, Hubbard y Walz, 1998)** expresó lo mismo como probabilidades de éxito.
- **Wade Pfau (2010)** repitió el análisis con datos de 17 países desarrollados desde 1900: el 4 % solo habría sido seguro en 4 de ellos, y una cartera 50/50 fijo habría fallado en algún momento en los 17. La experiencia de EE. UU. en el siglo XX fue excepcional.

### 3. Reglas de retirada dinámicas
Retirar una cantidad fija pase lo que pase es sencillo, pero rígido. Alternativas estudiadas:
- **Porcentaje fijo de la cartera**: nunca te arruinas, pero tu ingreso fluctúa con el mercado.
- **Barandillas** (*guardrails*, Guyton y Klinger, 2006): empiezas con una tasa, la recortas si la cartera cae mucho y la subes si crece mucho. Permite empezar algo por encima del 4 % a cambio de aceptar recortes.
- **Suelo y extra**: cubres los gastos básicos con ingresos seguros (pensión, renta vitalicia, escalera de bonos) y el resto se arriesga en la cartera.

### 4. El enigma de las rentas vitalicias
Menahem Yaari (1965) demostró que, con ciertos supuestos, a un jubilado sin motivo de herencia le conviene convertir **todo** su capital en una renta vitalicia, porque elimina el riesgo de longevidad. En la práctica casi nadie lo hace: es el *annuity puzzle*. Las explicaciones incluyen el deseo de dejar herencia, la desconfianza, el precio (márgenes del asegurador) y la necesidad de liquidez para imprevistos. Una solución intermedia es asegurar solo una parte.

### 5. Por qué la tasa de ahorro pesa tanto
Si ahorras una fracción s de tu ingreso neto, gastas 1 − s. El objetivo es acumular k veces tu gasto anual (k = 25 con el 4 %). La tasa de ahorro aparece **dos veces**: en lo que acumulas cada año (s) y en lo que necesitas acumular (k · (1 − s)). Por eso la relación entre tasa de ahorro y años de trabajo es tan fuerte y tan poco lineal: pasar del 10 % al 20 % ahorra 15 años; del 40 % al 50 %, cinco.
`,
  caso: {
    titulo: "El 4 % fuera de EE. UU.",
    md: `
El estudio de Wade Pfau (2010) con 109 años de datos de 17 países desarrollados concluyó que una retirada real del 4 % es **sorprendentemente arriesgada** fuera de EE. UU.: con supuestos incluso optimistas, solo habría sido segura en 4 de los 17 países, y una cartera 50 % acciones y 50 % bonos habría fallado en algún momento en todos ellos.

Encaja con los datos de rentabilidad de la lección 0.4: las acciones españolas han dado un 3,7 % real anual desde 1900, frente al 6,9 % de las estadounidenses. Una regla calibrada con el mejor mercado del siglo no se puede trasladar sin ajustes.

> Lo que enseña: los números redondos y famosos vienen de un contexto concreto. Para un inversor europeo, planificar con un 3–3,5 % y con flexibilidad es más prudente.
`
  },
  ejercicios: [
    {
      t: "El capital que necesitas",
      p: `
Calculas que en la jubilación gastarás 24.000 € al año (en euros de hoy) y que tu pensión pública será de unos 14.000 €. ¿Qué capital necesitas con una tasa de retirada del 4 %? ¿Y del 3,5 %?
`,
      s: `
1. Hueco a cubrir: 24.000 − 14.000 = **10.000 € al año**.
2. Al 4 %: 10.000 / 0,04 = **250.000 €**.
3. Al 3,5 %: 10.000 / 0,035 = **285.714 €**.
4. Los 35.700 € de diferencia son el precio de la prudencia. La flexibilidad para recortar en años malos permite acercarse al 4 % con menos riesgo.
`
    },
    {
      t: "La aportación necesaria",
      p: `
Quieres llegar a esos 250.000 € (o 285.714 €) en 25 años, partiendo de cero, con una rentabilidad real del 4 % anual. ¿Cuánto tienes que aportar al mes?
`,
      s: `
1. Tipo mensual equivalente: i = 1,04^(1/12) − 1 = 0,327 %.
2. Despejas la aportación de VF = C · [(1 + i)ⁿ − 1] / i, con n = 300: C = VF · i / [(1 + i)ⁿ − 1].
3. Para 250.000 €: **491 € al mes**. Para 285.714 €: **561 € al mes**.
4. Si empiezas 10 años más tarde (15 años de plazo), la aportación necesaria para 250.000 € sube a más del doble. El tiempo, otra vez.
`
    },
    {
      t: "Tasa de ahorro y años de trabajo",
      p: `
Ganas 2.500 € netos al mes. Comparas ahorrar el 20 % o el 40 %. Con una rentabilidad real del 5 % y el objetivo de acumular 25 veces tu gasto anual, ¿cuántos años necesitas en cada caso?
`,
      s: `
1. **Ahorro del 20 %**: gastas 2.000 €/mes = 24.000 €/año. Objetivo: 600.000 €. Aportas 6.000 €/año. Con un 5 % real, tardas unos **37 años**.
2. **Ahorro del 40 %**: gastas 1.500 €/mes = 18.000 €/año. Objetivo: 450.000 €. Aportas 12.000 €/año. Tardas unos **22 años**.
3. Doblar la tasa de ahorro no reduce el plazo a la mitad, pero casi: 15 años menos, porque a la vez acumulas el doble y necesitas un 25 % menos.
`
    }
  ],
  errores: [
    "Aplicar la regla del 4 % como si fuera una ley natural y no un resultado de datos de EE. UU.",
    "Planificar en euros nominales y mezclar rentabilidades nominales con gastos de hoy.",
    "Calcular hasta la esperanza de vida media: la mitad de la gente la supera.",
    "Olvidar la pensión pública o, al contrario, contar solo con ella.",
    "Ignorar la tasa de ahorro y obsesionarse con la rentabilidad."
  ],
  test: [
    { p: "Con una tasa de retirada del 4 %, ¿cuántas veces tu gasto anual necesitas?", o: ["4", "25", "40"], c: 1, e: "1 / 0,04 = 25." },
    { p: "Según Pfau (2010), ¿en cuántos de 17 países desarrollados habría sido seguro un 4 %?", o: ["En los 17", "En 4", "En ninguno"], c: 1, e: "La experiencia de EE. UU. fue excepcional." },
    { p: "¿Qué dice la hipótesis de la renta permanente de Friedman?", o: ["Que se consume según la renta de cada mes", "Que el consumo depende de la renta que esperamos de forma estable", "Que hay que ahorrar el 10 %"], c: 1, e: "Un ingreso puntual se ahorra en gran parte; uno permanente se consume." },
    { p: "¿Por qué pesa tanto la tasa de ahorro en los años necesarios?", o: ["Porque reduce impuestos", "Porque aumenta lo que acumulas y a la vez reduce lo que necesitas acumular", "Porque sube la rentabilidad"], c: 1, e: "Aparece dos veces en el cálculo." },
    { p: "¿Qué protege mejor un plan de retirada?", o: ["Una cartera 100 % bolsa", "La flexibilidad para recortar el gasto en años malos", "Retirar siempre lo mismo"], c: 1, e: "Las reglas dinámicas, como las barandillas, mejoran mucho la probabilidad de éxito." }
  ],
  lecturas: [
    { t: "Determining Withdrawal Rates Using Historical Data", a: "William Bengen, Journal of Financial Planning, 1994", n: "El origen del 4 %." },
    { t: "An International Perspective on Safe Withdrawal Rates", a: "Wade Pfau, 2010", n: "Libre en internet. Clave para inversores fuera de EE. UU." },
    { t: "Utility Analysis and the Consumption Function", a: "Franco Modigliani y Richard Brumberg, 1954" },
    { t: "Simulador de pensión de jubilación", a: "Seguridad Social (Tu Seguridad Social)", n: "Para estimar tu pensión pública con tus datos." }
  ]
});


/* ---- l10.js ---- */
LECCIONES.push({
  id: "b0-l10", num: "0.10",
  titulo: "La escalera: en qué orden hacer las cosas",
  resumen: "Antes de decidir qué comprar, hay que decidir a dónde va cada euro: conocer los gastos, un mini-colchón, eliminar deudas caras, completar el colchón, apartar lo que se necesita pronto y, entonces, invertir a largo plazo. Detrás del orden hay una idea simple: cada euro va donde más rinde con seguridad. Es la parte A del Mapa de decisiones.",
  esencial: `
Recorre la escalera de arriba abajo. Mientras un escalón no esté resuelto, el dinero nuevo va ahí.
`,
  flujo: {
    pasos: [
      { q: "¿Sabes cuánto gastas al mes y te sobra algo?", d: "Sin margen no hay ahorro posible.", no: "Apunta dos o tres meses de gastos y busca de dónde sacar margen." },
      { q: "¿Tienes al menos 1 mes de gastos ahorrado?", d: "Un mini-colchón para que un imprevisto pequeño no acabe en deuda cara.", no: "Ahorra ese primer mes en una cuenta remunerada." },
      { q: "¿Estás libre de deudas caras (más de un 7–8 %)?", d: "Revolving, préstamos al consumo caros, aplazados.", no: "Págalas, de mayor a menor tipo. Rinden más que cualquier inversión y sin riesgo." },
      { q: "¿Tienes el colchón completo (3–6 meses de gastos)?", d: "Ajustado a la estabilidad de tus ingresos (lección 0.5).", no: "Complétalo en cuentas, depósitos o un monetario." },
      { q: "¿Tienes apartado lo que necesitarás en menos de 3 años?", d: "Entrada de un piso, coche, estudios…", no: "Guárdalo sin riesgo, con plazos que encajen con la fecha." }
    ],
    fin: { t: "Invierte a largo plazo", d: "Diversificado, barato, con un riesgo que puedas mantener y automatizado. Las deudas intermedias (4–7 %) se pueden repartir entre amortizar e invertir." }
  },
  entender: `
### Por qué este orden
| Escalón | Qué «rinde» | Por qué va antes que el siguiente |
|---|---|---|
| Conocer los gastos | Todo se calcula a partir de ellos | Sin ese dato no puedes dimensionar nada |
| Mini-colchón | Evita endeudarte al 20 % por un imprevisto pequeño | Protege el escalón siguiente |
| Deudas caras | Su tipo de interés, seguro y sin impuestos | Ninguna inversión ofrece un 20 % seguro |
| Colchón completo | Un seguro contra vender en mal momento | Sin él, la inversión es frágil |
| Objetivos cercanos | Certeza de tener el dinero en la fecha | La bolsa no da certeza a 2–3 años |
| Invertir a largo plazo | La prima de riesgo de la bolsa (≈ 3–7 % real histórico) | Es el único escalón que necesita tiempo y aguante |

### Automatízalo
- **Págate primero**: una transferencia automática el día que cobras, a la cuenta del colchón o a la inversión. Lo que no ves, no lo gastas.
- **Aportaciones periódicas**: una cantidad fija cada mes al mismo fondo. Evita tener que decidir «cuándo es buen momento» (bloque 6).
- **Sube el ahorro con cada subida de sueldo**: si destinas al ahorro la mitad de cada aumento, ahorras más sin notar un recorte.

### Revisa una vez al año
- ¿En qué escalón estás?
- ¿Han cambiado tus gastos, tus ingresos o tus objetivos?
- ¿Tu reparto entre activos sigue siendo el que decidiste? (Rebalanceo, bloque 3.)

### Núcleo y satélites
Una vez en el último escalón, una estructura muy usada:
- **Núcleo** (la mayor parte, por ejemplo el 70–90 %): inversión diversificada y barata, como fondos indexados mundiales.
- **Satélites** (el resto): apuestas concretas, como acciones individuales, small caps, sectores o cripto.

Si un satélite sale mal, el plan general sigue en pie. Lo desarrollarás en el bloque 9 y lo convertirás en reglas propias en el bloque 10.
`,
  fondo: `
### 1. La lógica de fondo: el siguiente euro va donde más rinde, ajustado por riesgo
La escalera es una regla práctica para un problema de optimización: repartir el ahorro entre destinos con rentabilidades distintas, riesgos distintos y liquidez distinta. Ordenados por rentabilidad **segura, después de impuestos**:
- amortizar una revolving: ≈ 23 % seguro, sin impuestos;
- amortizar un préstamo personal: ≈ 6–7 % seguro;
- amortizar una hipoteca variable: ≈ 4 % seguro (hoy);
- invertir en bolsa: ≈ 5–7 % esperado bruto, con riesgo y con impuestos;
- un depósito: ≈ 3–3,5 % seguro, con impuestos.

El colchón no encaja en esta lista porque su rendimiento no es una rentabilidad, sino un seguro: su valor está en los escenarios malos (lección 0.5). Por eso se coloca por delante de destinos que rinden más de media.

### 2. Contabilidad mental: cuándo ayuda y cuándo engaña
Richard Thaler (1985) describió la **contabilidad mental**: tratamos el dinero de forma distinta según la «cuenta» en la que lo colocamos (el dinero de las vacaciones, el del colchón, el de la inversión), aunque el dinero sea intercambiable.

- **Ayuda** cuando impone disciplina: un colchón en una cuenta aparte se respeta; los cubos de la lección 0.7 dan tranquilidad para no vender.
- **Engaña** cuando lleva a errores caros: tener 6.000 € «ahorrados» al 2,5 % mientras se arrastran 3.000 € de revolving al 23 % es pagar por mantener una etiqueta (ejercicio 2).

La escalera usa la contabilidad mental a favor (cuentas separadas, objetivos con nombre) y la corrige donde engaña (las deudas caras van antes que «ahorrar»).

### 3. Arquitectura de decisiones: diseñar para no depender de la fuerza de voluntad
- **Thaler y Sunstein** (*Nudge*, 2008) mostraron que los valores por defecto deciden gran parte de nuestro comportamiento: cuando la aportación al plan de pensiones de empresa es automática salvo que digas lo contrario, la participación se dispara.
- **Save More Tomorrow** (Thaler y Benartzi, 2004): los empleados se comprometían a destinar al ahorro una parte de sus **futuras** subidas de sueldo. Como no sentían pérdida en el presente (la subida aún no existía), aceptaban. En el primer programa, la tasa de ahorro media de los participantes pasó del 3,5 % al 13,6 % en 40 meses.

Es la respuesta práctica al descuento hiperbólico de la lección 0.2: si tu yo de hoy siempre prefiere gastar, decide una vez y deja que la decisión se ejecute sola.

### 4. Matices de la escalera
- **Zonas grises**: con una deuda al 5 % y un horizonte largo, repartir entre amortizar e invertir es razonable.
- **Aportaciones de empresa**: si tu empleador aporta a un plan de pensiones de empleo cuando tú aportas, esa aportación es una rentabilidad inmediata que puede justificar adelantarlo en la escalera (detalles fiscales en el bloque 8).
- **Hogar**: en pareja, la escalera se piensa en conjunto. Colchón y objetivos suelen ser del hogar, aunque las inversiones sean de cada uno.

### 5. Lo que viene en el Mapa de decisiones
Esta escalera es la **parte A del Mapa de decisiones** (bloque 9): tu situación personal, la parte que más pesa en tus resultados y la única que no depende de lo que haga el mercado. Las partes B (el entorno económico) y C (la foto de 2026 a 2031) se construirán sobre ella y solo servirán para ajustar el reparto de forma moderada.
`,
  caso: {
    titulo: "Dos personas, la misma caída",
    md: `
Ejemplo ilustrativo con las cifras de este bloque. Laura y Marcos tienen 15.000 € y la bolsa cae un 30 %.

| | Laura | Marcos |
|---|---|---|
| Colchón | 6 meses (10.000 €) | Ninguno |
| Deudas | Ninguna | 2.500 € en revolving al 23 % |
| Invertido | 5.000 € | 15.000 € |
| Le surge un gasto de 3.000 € | Lo paga del colchón | Vende acciones con un 30 % de pérdida |
| Al año siguiente | La bolsa se recupera y su inversión también | Ha perdido unos 1.300 € al vender y sigue pagando intereses |

> Marcos tenía más dinero invertido, pero Laura tenía mejor plan. Al final le va mejor a Laura.
`
  },
  ejercicios: [
    {
      t: "Aplicar la escalera",
      p: `
Sara gasta 1.800 € al mes y ahorra 500 €. Tiene 2.000 € en la cuenta, 4.000 € de un préstamo de coche al 8 % y quiere cambiar de ordenador (1.200 €) dentro de un año. Su trabajo es estable. ¿Qué hace con su ahorro, mes a mes?
`,
      s: `
1. **Mini-colchón**: ya tiene 2.000 € (más de un mes de gastos). Hecho.
2. **Deuda cara**: el préstamo al 8 % está por encima del umbral. Los 500 € mensuales van a amortizarlo. Con 4.000 € tarda unos 8 meses.
3. **Colchón completo**: con trabajo estable, 3 meses = 5.400 €. Tiene 2.000 €; le faltan 3.400 €: unos 7 meses de ahorro.
4. **Objetivo cercano**: el ordenador (1.200 €) en un año. Para no retrasar el colchón, puede reservar 100 € al mes desde el principio y los 400 € restantes seguir el orden anterior.
5. **Inversión**: empieza en algo más de un año, con aportaciones automáticas.
`
    },
    {
      t: "El coste de la contabilidad mental",
      p: `
Tienes 6.000 € «ahorrados» en una cuenta al 2,5 % y, a la vez, 3.000 € de revolving al 23 %. Prefieres no tocar el ahorro «porque es para emergencias». ¿Cuánto te cuesta al año esa decisión? ¿Qué harías?
`,
      s: `
1. Los 3.000 € de revolving cuestan unos 3.000 × 23 % = **690 € al año**.
2. Esos mismos 3.000 €, en la cuenta, rinden 3.000 × 2,5 % = 75 € brutos.
3. Coste neto de mantener las dos cosas: unos **615 € al año**.
4. Solución: usar 3.000 € del ahorro para cancelar la revolving, quedarte con 3.000 € de colchón y reconstruirlo con lo que antes iba a pagar intereses. Si surge una emergencia, la tarjeta sigue disponible: lo que cambia es que ya no pagas el 23 % mientras tanto.
`
    },
    {
      t: "Ahorrar más sin notarlo",
      p: `
Ganas 2.200 € netos y ahorras el 10 %. Cada año tu sueldo neto sube un 3 % y destinas al ahorro la mitad de cada subida. ¿Qué tasa de ahorro tendrás en 5 años?
`,
      s: `
1. Año 0: sueldo 2.200 €, ahorro 220 €, gasto 1.980 €.
2. Cada año el sueldo sube un 3 %; la mitad de la subida va al ahorro y la otra mitad al gasto.
3. Año 5: sueldo = 2.200 × 1,03⁵ = 2.550 €. Subida total: 350 €. Al ahorro van 175 €.
4. Ahorro = 220 + 175 = 395 €. Tasa de ahorro = 395 / 2.550 = **15,5 %**.
5. Tu gasto ha seguido subiendo (de 1.980 a 2.155 €), así que no notas un recorte. Es el principio de *Save More Tomorrow*.
`
    }
  ],
  errores: [
    "Empezar por la pregunta «¿qué acción compro?» en lugar de por la escalera.",
    "Saltarse el colchón porque «la bolsa está barata».",
    "Mantener ahorro al 2 % mientras se paga deuda al 20 %.",
    "Pensar que la escalera se hace una vez: tu vida cambia y hay que revisarla.",
    "Dedicar a los satélites tanto dinero que dejan de serlo."
  ],
  test: [
    { p: "3.000 € de revolving y ningún ahorro. ¿Qué va primero?", o: ["Pagar toda la deuda", "Un mes de gastos ahorrado y después la deuda", "Invertir para ganar más rápido"], c: 1, e: "El mini-colchón evita que el próximo imprevisto genere más deuda cara." },
    { p: "¿Por qué el colchón va antes que invertir, si invertir rinde más de media?", o: ["Porque los depósitos rinden más", "Porque su valor es de seguro: protege en los escenarios malos", "Porque lo exige la ley"], c: 1, e: "Su rendimiento no se mide en rentabilidad media." },
    { p: "¿Qué es la contabilidad mental?", o: ["Llevar la contabilidad de cabeza", "Tratar el dinero distinto según la «cuenta» en la que lo colocamos", "Un método de presupuesto"], c: 1, e: "Thaler (1985). Ayuda a la disciplina, pero puede llevar a errores caros." },
    { p: "¿En qué consiste Save More Tomorrow?", o: ["Ahorrar todo lo que sobre a fin de mes", "Comprometerse a ahorrar parte de las subidas de sueldo futuras", "Invertir en bolsa mañana"], c: 1, e: "Evita sentir una pérdida hoy y eleva mucho la tasa de ahorro." },
    { p: "¿Qué parte del Mapa de decisiones es esta escalera?", o: ["La parte A, tu situación personal", "La parte B, el entorno", "La parte C, la foto actual"], c: 0, e: "Es la que más pesa y la única que no depende del mercado." }
  ],
  lecturas: [
    { t: "Un pequeño empujón (Nudge)", a: "Richard Thaler y Cass Sunstein, 2008" },
    { t: "Save More Tomorrow", a: "Richard Thaler y Shlomo Benartzi, Journal of Political Economy, 2004" },
    { t: "Mental Accounting and Consumer Choice", a: "Richard Thaler, Marketing Science, 1985" }
  ]
});


var META = {
  id: 0,
  titulo: "Antes de invertir",
  intro: `
Este bloque no trata de qué comprar, sino de los cimientos: por qué el dinero parado pierde valor, cómo se valora el dinero en el tiempo, cómo crece y cómo se mide de verdad su rentabilidad, y qué tiene que estar en orden (colchón, deudas, plazos, perfil de riesgo y objetivos) para que invertir funcione.

Cada lección tiene tres niveles. El **esencial** basta para tener una base sólida. **Entenderlo** añade los mecanismos, los datos y los ejemplos con números. **A fondo** recoge la teoría que hay detrás (Fisher, Friedman, Taylor, Merton, Kahneman y Tversky, Modigliani…), explicada desde cero. Todas incluyen ejercicios resueltos.

La última lección ordena todo en una escalera de prioridades: la parte A del **Mapa de decisiones** del bloque 9.
`,
  foto: {
    titulo: "La foto del momento",
    fecha: "13 nov 2026",
    md: `
| Indicador | Dato | Qué significa |
|---|---|---|
| Inflación España (IPC, octubre) | 4,9 % (subyacente 3,1 %) | Máximo desde febrero de 2023 |
| Inflación zona euro (IPCA, octubre) | 4,0 % (subyacente 2,5 %) | El doble del objetivo del BCE; la energía sube un 20,8 % |
| Tipo de depósito del BCE | 2,50 % | Subió del 2 % en septiembre; el mercado espera 2,75 % en diciembre |
| Euríbor a 12 meses (octubre) | 3,239 % | Un punto más que hace un año: las hipotecas variables se encarecen |
| Bono español a 10 años (septiembre) | ≈ 4,0 % | Frente al 3,2 % de un año antes |
| Mejores depósitos y cuentas | ≈ 3–3,75 % TAE | Rentabilidad real negativa tras impuestos |
| Tasa de paro España (3.er trimestre) | 10,18 % | Repunta 0,3 puntos, con el empleo en máximos |
| Tarjetas revolving (TAE media) | 23,34 % | Pagarlas rinde más que casi cualquier inversión |

> Con la inflación por encima de los tipos, guardar dinero «seguro» supone una pérdida real casi garantizada. Eso no significa que todo deba ir a bolsa: significa que cada euro necesita un destino según su plazo y su función. Es lo que ordena este bloque.
`
  },
  glosario: [
    { t: "Inflación", d: "Subida generalizada y sostenida de los precios. Se mide como variación anual de un índice de precios." },
    { t: "IPC", d: "Índice de Precios de Consumo. El INE lo calcula con una cesta de unos 750 artículos ponderada por el gasto de los hogares. Base 2025 desde enero de 2026." },
    { t: "IPCA", d: "IPC armonizado, calculado igual en toda la zona euro. El objetivo del BCE se fija sobre el IPCA de la zona euro." },
    { t: "Inflación subyacente", d: "IPC sin energía ni alimentos no elaborados. Muestra la tendencia de fondo." },
    { t: "Deflación", d: "Bajada generalizada de los precios. Frena el consumo y encarece las deudas en términos reales." },
    { t: "Poder adquisitivo", d: "Lo que puedes comprar con tu dinero. La inflación lo reduce." },
    { t: "Índice de Laspeyres", d: "Índice de precios que mantiene fijas las cantidades del periodo base. Tiende a sobrestimar la inflación (sesgo de sustitución)." },
    { t: "Índice de Paasche", d: "Índice de precios que usa las cantidades del periodo actual." },
    { t: "Índice de Fisher", d: "Media geométrica de Laspeyres y Paasche." },
    { t: "Sesgo de sustitución", d: "Error del IPC al no recoger que compramos menos de lo que se encarece." },
    { t: "Teoría cuantitativa del dinero", d: "M·V = P·Y. Relaciona dinero, velocidad de circulación, precios y producción." },
    { t: "Curva de Phillips", d: "Relación entre paro e inflación. Con expectativas, solo existe a corto plazo." },
    { t: "Tasa natural de paro (NAIRU)", d: "Tasa de paro que no acelera la inflación." },
    { t: "Regla de Taylor", d: "Regla para el tipo oficial: i = r* + π + 0,5·(π − π*) + 0,5·brecha de producción." },
    { t: "Tipo neutral (r*)", d: "Tipo de interés real que ni estimula ni frena la economía. No se observa: se estima." },
    { t: "Inflación implícita (breakeven)", d: "Inflación media que descuenta el mercado al comparar bonos nominales y bonos ligados a la inflación." },
    { t: "Ilusión monetaria", d: "Confundir magnitudes nominales y reales. Modigliani y Cohn la usaron para explicar PER bajos con inflación alta." },
    { t: "Valor presente", d: "Lo que vale hoy un pago futuro, descontado a un tipo de interés." },
    { t: "Tipo de descuento", d: "Tipo con el que se descuentan pagos futuros: tipo sin riesgo más una prima por el riesgo concreto." },
    { t: "Anualidad", d: "Serie de pagos iguales durante un número de periodos." },
    { t: "Perpetuidad", d: "Serie de pagos que no termina. Su valor presente es C / r." },
    { t: "Modelo de Gordon", d: "Valor de un flujo que crece a un ritmo g para siempre: C / (r − g)." },
    { t: "VAN", d: "Valor actual neto: suma de los flujos de un proyecto descontados." },
    { t: "TIR", d: "Tasa interna de rentabilidad: el tipo que hace el VAN igual a cero." },
    { t: "Duración", d: "Plazo medio ponderado de los pagos de un activo; mide su sensibilidad a los tipos de interés." },
    { t: "Convexidad", d: "Curvatura de la relación precio-tipo de un bono. Hace que la duración sobrestime las caídas." },
    { t: "Descuento hiperbólico", d: "Tendencia a valorar mucho lo inmediato y poco lo lejano. Explica la procrastinación del ahorro." },
    { t: "Interés compuesto", d: "Los intereses se reinvierten y generan a su vez intereses." },
    { t: "Regla del 72", d: "72 dividido entre la rentabilidad anual ≈ años para duplicar el capital." },
    { t: "Rentabilidad logarítmica", d: "ln(1 + r). Se suma en el tiempo; base de los modelos de riesgo." },
    { t: "TIN", d: "Tipo de interés nominal. No incluye capitalización ni comisiones." },
    { t: "TAE", d: "Tasa anual equivalente. Incluye capitalización y comisiones obligatorias; sirve para comparar." },
    { t: "Rentabilidad real", d: "(1 + nominal) / (1 + inflación) − 1." },
    { t: "Rentabilidad real neta", d: "La que queda tras costes, impuestos e inflación." },
    { t: "Rentabilidad anualizada (TACC o CAGR)", d: "Ritmo constante que lleva del valor inicial al final. Es la media geométrica." },
    { t: "Lastre de la volatilidad", d: "Diferencia entre media aritmética y geométrica: aproximadamente σ² / 2." },
    { t: "Rentabilidad ponderada por tiempo (TWR)", d: "Mide el comportamiento del producto. Es la que publican los fondos." },
    { t: "Rentabilidad ponderada por dinero (MWR)", d: "La TIR de tus aportaciones y retiradas. Mide lo que ganaste tú." },
    { t: "Base del ahorro", d: "Parte del IRPF donde tributan intereses, dividendos y ganancias: del 19 % al 30 % en 2026." },
    { t: "Diferimiento fiscal", d: "Pagar impuestos más tarde, de modo que lo no pagado sigue componiendo." },
    { t: "Colchón de emergencia", d: "Ahorro para imprevistos, en productos seguros y disponibles." },
    { t: "Ahorro precautorio", d: "Ahorro motivado por la incertidumbre sobre el futuro." },
    { t: "Prudencia (Kimball)", d: "Propiedad de la utilidad (u‴ > 0) que lleva a ahorrar más con incertidumbre." },
    { t: "Ahorro amortiguador (buffer-stock)", d: "Modelo de Carroll: los hogares mantienen un colchón objetivo de riqueza respecto a su renta." },
    { t: "Fondo de garantía de depósitos", d: "Protege hasta 100.000 € por titular y entidad." },
    { t: "Fondo monetario", d: "Fondo que invierte en deuda a muy corto plazo y alta calidad. Riesgo muy bajo, pero no nulo." },
    { t: "Letras del Tesoro", d: "Deuda del Estado español a 3, 6, 9 o 12 meses." },
    { t: "Tarjeta revolving", d: "Tarjeta de crédito de cuota baja en la que la deuda pendiente genera intereses muy altos." },
    { t: "Método avalancha", d: "Pagar primero la deuda de mayor tipo de interés." },
    { t: "Método bola de nieve", d: "Pagar primero la deuda de menor saldo." },
    { t: "Sistema francés", d: "Amortización con cuota constante: al principio, casi todo intereses." },
    { t: "Euríbor", d: "Tipo al que se prestan los bancos europeos; referencia de las hipotecas variables." },
    { t: "Apalancamiento", d: "Invertir con dinero prestado. Multiplica ganancias y pérdidas." },
    { t: "Criterio de Kelly", d: "Apalancamiento o apuesta que maximiza el crecimiento geométrico: (μ − r) / σ²." },
    { t: "Llamada de margen", d: "Exigencia del bróker de aportar dinero o vender cuando una posición apalancada cae." },
    { t: "Horizonte temporal", d: "Tiempo hasta que necesitarás el dinero." },
    { t: "Caída máxima (drawdown)", d: "Mayor pérdida desde un máximo hasta un mínimo posterior." },
    { t: "Riesgo de secuencia", d: "Daño extra de una caída cuando ocurre mientras aportas o retiras mucho." },
    { t: "Diversificación temporal", d: "Idea, debatida, de que el riesgo de la bolsa disminuye con el plazo." },
    { t: "Reversión a la media", d: "Tendencia a que tras periodos extremos lleguen periodos en sentido contrario." },
    { t: "Capacidad de riesgo", d: "Cuánto puedes perder sin que afecte a tu vida." },
    { t: "Tolerancia al riesgo", d: "Cuánta caída soportas sin tomar malas decisiones." },
    { t: "Necesidad de riesgo", d: "Rentabilidad que necesitas para llegar a tus objetivos." },
    { t: "Aversión relativa al riesgo (γ)", d: "Medida de cuánto te desagrada el riesgo en proporción a tu riqueza." },
    { t: "Equivalente cierto", d: "Cantidad segura que te resulta igual de atractiva que una apuesta." },
    { t: "Regla de Merton", d: "Proporción óptima en bolsa: (μ − r) / (γ · σ²)." },
    { t: "Prima de riesgo de la renta variable", d: "Rentabilidad extra de las acciones sobre los activos sin riesgo." },
    { t: "Aversión a las pérdidas", d: "Las pérdidas duelen más que alegran las ganancias del mismo tamaño (unas 2,25 veces)." },
    { t: "Aversión miope a las pérdidas", d: "Aversión a las pérdidas combinada con mirar la cartera con frecuencia." },
    { t: "Capital humano", d: "Valor presente de tus ingresos futuros por trabajo." },
    { t: "Brecha del inversor", d: "Diferencia entre lo que rinde un fondo y lo que ganan sus inversores al entrar y salir." },
    { t: "Hipótesis del ciclo vital", d: "Modigliani y Brumberg: se ahorra en la etapa de ingresos altos para consumir en la de ingresos bajos." },
    { t: "Renta permanente", d: "Friedman: el consumo depende de la renta estable esperada, no de la de cada mes." },
    { t: "Tasa de retirada segura", d: "Porcentaje inicial que se puede retirar cada año, ajustado por inflación, sin agotar la cartera en el periodo previsto." },
    { t: "Riesgo de longevidad", d: "Riesgo de vivir más de lo previsto y quedarse sin dinero." },
    { t: "Renta vitalicia", d: "Pago periódico garantizado mientras vivas, a cambio de un capital." },
    { t: "Contabilidad mental", d: "Tratar el dinero de forma distinta según la «cuenta» en la que lo colocamos." },
    { t: "Núcleo y satélites", d: "Cartera con un núcleo diversificado y barato y una parte pequeña de apuestas concretas." },
    { t: "MSCI World", d: "Índice de grandes y medianas empresas de 23 países desarrollados." },
    { t: "Renta variable", d: "Inversiones con rendimiento no fijado de antemano, sobre todo acciones." },
    { t: "Renta fija", d: "Préstamos a Estados o empresas (bonos, letras) con un interés pactado." },
    { t: "Facilidad de depósito del BCE", d: "Tipo que paga el BCE a los bancos por su dinero. Su tipo de referencia: 2,50 % en noviembre de 2026." }
  ],
  fuentes: [
    { t: "INE: IPC adelantado de octubre de 2026 (vía FashionUnited)", u: "https://fashionunited.es/noticias/empresas/la-inflacion-se-mantiene-disparada-al-4-9-por-ciento-en-octubre/2026103051080", n: "IPC 4,9 %" },
    { t: "CaixaBank Research: la inflación se mantiene en el 4,9 % en octubre", u: "https://www.caixabankresearch.com/es/node/14742/printable/print", n: "Subyacente 3,1 %" },
    { t: "CaixaBank Research: la energía lleva la inflación de la eurozona al 4,0 %", u: "https://www.caixabankresearch.com/ca/publicacions/notas-breves-actualidad-economica-y-financiera/internacional/energia-lleva-inflacion", n: "IPCA zona euro, subyacente y expectativas de tipos" },
    { t: "Finanzas Digital: la inflación de la eurozona se sitúa en el 4 % (Eurostat)", u: "https://finanzasdigital.com/inflacion-anual-eurozona-se-situa-en-4-por-ciento-octubre-eurostat/", n: "Energía +20,8 %" },
    { t: "INE: novedades del IPC base 2025", u: "https://ine.es/dyngs/Prensa/adIPC0126.htm", n: "Ponderaciones de 2026" },
    { t: "INE: IPC de enero de 2026", u: "https://ine.es/dyngs/Prensa/IPC0126.htm", n: "Muestra: 177 municipios, 487 + 263 artículos" },
    { t: "Banco de España / BCE: decisiones de política monetaria, 29 de octubre de 2026", u: "https://www.bde.es/f/webbe/GAP/Secciones/SalaPrensa/ComunicadosBCE/DecisionesPoliticaMonetaria/26/mp261029.pdf" },
    { t: "Raisin: los tipos del BCE en octubre de 2026", u: "https://www.raisin.com/es-es/noticias/tipos-de-interes-del-bce-octubre/", n: "Depósitos hasta 3,75 % TAE; garantía de 100.000 €" },
    { t: "Futurfinances: evolución histórica del euríbor", u: "https://futurfinances.com/blog/evolucion-euribor-2000-hoy/", n: "Mínimo −0,505 %, octubre 2026 3,239 %" },
    { t: "Futurfinances: previsiones del euríbor", u: "https://futurfinances.com/blog/prevision-euribor-futuro/", n: "Cuota de 484 € a 539 € por 100.000 €" },
    { t: "Bankinter: rentabilidad de los bonos a 10 años", u: "https://www.bankinter.com/blog/economia/rentabilidad-bonos-paises-subidas", n: "Bono español al 4,01 % en septiembre de 2026" },
    { t: "La República / INE: EPA del tercer trimestre de 2026", u: "https://www.larepublica.co/globoeconomia/tasa-de-desempleo-en-espana-supera-barrera-de-10-en-septiembre-con-10-18-4511834", n: "Paro del 10,18 %" },
    { t: "Funcas: IPC diciembre 2022", u: "https://www.funcas.es/wp-content/uploads/2023/01/IPC2212.pdf", n: "Media de 2022: 8,4 %" },
    { t: "Global-rates: inflación media de 1977", u: "https://www.global-rates.com/es/inflacion/historico/1977/?id=54", n: "España: 24,4 %" },
    { t: "Estrategias de Inversión: la inflación acumulada en España", u: "https://www.estrategiasdeinversion.com/analisis/bolsa-y-mercados/informes/la-inflacion-acumulada-en-espana-ya-alcanza-el-n-936327" },
    { t: "UBS: Global Investment Returns Yearbook 2026", u: "https://www.ubs.com/global/en/media/display-page-ndp/en-20260303-global-investment-returns-yearbook-2026.html", n: "1 $ de 1900 → 124.854 $; oro" },
    { t: "Ara: la bolsa española desde 1900 (anuario UBS 2026)", u: "https://en.ara.cat/economy/in-the-long-run-the-stock-market-always-wins_1_5671860.html", n: "España: acciones 3,7 %, bonos 1,0 %, letras −0,2 % reales" },
    { t: "PWL Capital: resumen del anuario 2026", u: "https://parkyndoyonlarochelle.pwlcapital.com/?p=15032", n: "EE. UU. 6,9 % real; rango de 3 % a 6,9 %; volatilidades" },
    { t: "Wade Pfau: An International Perspective on Safe Withdrawal Rates (2010)", u: "https://econpapers.repec.org/RePEc:ngi:dpaper:10-12" },
    { t: "Asufin, IX Barómetro Revolving (vía Lawandtrends)", u: "https://www.lawandtrends.com/noticias/bancos/las-navidades-abren-la-puerta-al-uso-masivo-de-las-tarjetas-revolving-con-un-interes-de-23-34-de-media-segun-asufin-1.html" },
    { t: "Finantres: el tope del 22 % para las revolving sigue pendiente", u: "https://finantresnoticias.com/bancos/tarjetas-revolving-por-encima-22-por-ciento-ley-debe-limitar-coste-sigue-pendiente/" },
    { t: "Guía Fiscal: tramos del IRPF 2026", u: "https://guiafiscal.es/irpf/tramos-irpf/" },
    { t: "Bankkers: rentabilidad histórica del MSCI World", u: "https://bankkers.com/rentabilidad-historica-msci-world/", n: "Caídas y recuperaciones (aproximadas)" },
    { t: "Inversora con 30: ventanas del MSCI World 1970–2023", u: "https://inversoracon30.substack.com/p/la-mejor-inversion-a-largo-plazo" },
    { t: "CNBC: la fortuna de Buffett después de los 65", u: "https://www.cnbc.com/2024/05/03/most-of-warren-buffetts-wealth-came-after-age-65-heres-why.html" },
    { t: "Morningstar Australia: Mind the Gap (10 años hasta 2025)", u: "https://www.morningstar.com.au/personal-finance/young-invested-are-you-sabotaging-your-etf-returns" },
    { t: "Advisor Perspectives: la brecha del inversor y la volatilidad", u: "https://www.advisorperspectives.com/commentaries/2026/08/21/what-advisors-can-learn-from-the-investor-return-gap" }
  ]
};

META.lecciones=LECCIONES;
CURSO.registrar(META);
})();
