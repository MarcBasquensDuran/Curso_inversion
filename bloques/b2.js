/* Bloque 2. Generado a partir de src/b2/ */
(function(){
var LECCIONES=[];

/* ---- l01.js ---- */
LECCIONES.push({
  id: "b2-l1", num: "2.1",
  titulo: "Qué es el riesgo (y qué no es)",
  resumen: "Riesgo no es lo mismo que volatilidad. La volatilidad es cuánto se mueve el camino; el riesgo que importa es acabar con menos de lo que necesitas: perder dinero de forma permanente o no llegar a tu objetivo. La volatilidad se convierte en pérdida permanente cuando te obliga a vender, cuando pagaste demasiado o cuando el negocio se deteriora.",
  esencial: `
En finanzas se usa la palabra **riesgo** para tres cosas distintas, y mezclarlas lleva a decisiones malas:

1. **Volatilidad**: cuánto sube y baja el valor por el camino. Es fácil de medir y es la que aparece en las fichas de los fondos.
2. **Pérdida permanente**: dinero que no se recupera nunca. Una empresa que quiebra, un activo comprado muy caro que no vuelve a ese precio, una venta en el peor momento.
3. **No llegar al objetivo**: acabar con menos de lo que necesitas para tu jubilación, tu casa o tu colchón, aunque no hayas «perdido» nada. Un depósito que rinde menos que la inflación no se mueve, pero te empobrece.

**La idea clave**: para quien invierte a largo plazo, la volatilidad no es en sí misma el riesgo, sino el precio de la entrada. Se convierte en riesgo de verdad cuando te obliga a vender en una caída: porque necesitas el dinero, porque usaste deuda o porque los nervios pueden contigo.

**Tres fuentes de pérdida permanente**
- **Pagar demasiado**: comprar un activo muy caro; aunque el negocio vaya bien, puedes tardar décadas en recuperar el precio.
- **Que el activo se deteriore**: la empresa pierde su negocio, el emisor no paga.
- **Verse obligado a vender**: falta de colchón, apalancamiento o pánico.

Diversificar protege de la segunda; un precio razonable, de la primera; el colchón y no endeudarse para invertir, de la tercera.

**Un ejemplo cercano**: el IBEX 35 tardó casi 18 años en recuperar su máximo de 2007 sin contar dividendos. Con dividendos, menos de 10. Quien siguió invirtiendo vio volatilidad; quien vendió en 2012, una pérdida permanente.
`,
  entender: `
#### Volatilidad, caída y pérdida: tres cosas distintas
| Concepto | Qué mide | Ejemplo |
|---|---|---|
| Volatilidad | Dispersión de las rentabilidades por periodo | La bolsa mundial se mueve en torno a un 15–18 % anual |
| Caída máxima (*drawdown*) | Lo que pierdes desde un máximo hasta el mínimo siguiente | IBEX 35: −62,6 % entre noviembre de 2007 y julio de 2012 |
| Pérdida permanente | Lo que no se recupera | Las acciones de Banco Popular en 2017 (lección 1.2) |
| Riesgo de déficit (*shortfall*) | Probabilidad de no llegar a una cifra objetivo | Que tu cartera valga menos de lo que necesitas a los 65 |

La volatilidad es simétrica: cuenta igual subir que bajar. A nadie le preocupa que su cartera suba un 20 %. Por eso hay medidas que solo miran el lado malo (lección 2.2).

#### La matemática de las caídas
Recuperar una caída exige una subida mayor que la caída:

| Caída | Subida necesaria para volver |
|---|---|
| −10 % | +11,1 % |
| −25 % | +33,3 % |
| −50 % | +100 % |
| −62,6 % (IBEX, 2007–2012) | +167,7 % |

$$ subida necesaria = 1 / (1 − caída) − 1

Al 7 % anual, recuperar un −62,6 % lleva unos **14,6 años**. Por eso evitar las caídas muy grandes (más que las medianas) es tan importante: no por el susto, sino por el tiempo que te comen.

#### El riesgo depende de quién eres
La misma cartera es arriesgada o no según tu situación:
- A los 30 años, con colchón y sueldo estable, una caída del 40 % es una mala noticia temporal; incluso te permite comprar más barato.
- A los 64, a punto de empezar a vivir de la cartera, la misma caída puede ser una pérdida permanente si tienes que vender para vivir (riesgo de secuencia, lección 0.7).
- Con deuda, cualquier caída puede convertirse en venta forzosa.

Por eso no existe «la cartera de poco riesgo» en abstracto: existe la cartera de poco riesgo **para ti**.

#### La probabilidad de perder baja con el plazo (pero no a cero)
Con una cartera de acciones que tiene una media aritmética del 7 % y una volatilidad del 16 %, y un modelo lognormal (lección 0.7), la probabilidad de acabar con menos dinero del que pusiste es:

| Plazo | Probabilidad de pérdida nominal |
|---|---|
| 1 año | 36,6 % |
| 5 años | 22,2 % |
| 10 años | 13,9 % |
| 20 años | 6,3 % |

Baja, pero no desaparece. Y si el objetivo es batir a una inflación del 2,5 %, a 10 años la probabilidad de no conseguirlo sube al **27,6 %**.
`,
  fondo: `
#### 1. Riesgo frente a incertidumbre: Frank Knight (1921)
El economista Frank Knight distinguió entre:
- **Riesgo**: situaciones en las que conoces las probabilidades (un dado, una ruleta, la mortalidad de una población grande).
- **Incertidumbre**: situaciones en las que ni siquiera conoces las probabilidades (si una tecnología nueva funcionará, si habrá una guerra).

Los modelos financieros tratan casi todo como riesgo: estiman una media y una volatilidad con datos pasados y suponen que el futuro sale de la misma distribución. Pero los mercados están llenos de incertidumbre knightiana: cambios de régimen, crisis sin precedentes, empresas nuevas. Elroy Dimson lo resumió en una frase muy citada: el riesgo significa que **pueden pasar más cosas de las que van a pasar**. La historia que has vivido es solo una de las que podían haber ocurrido.

#### 2. El riesgo como función de tus objetivos: *safety first* (Roy, 1952)
El mismo año que Markowitz publicó su teoría de carteras, Andrew Roy propuso otro criterio: elegir la cartera que **minimiza la probabilidad de quedar por debajo de un mínimo** (r_min) que no te puedes permitir. Con rentabilidades normales, eso equivale a maximizar:

$$ ratio de Roy = (μ − r_min) / σ

Si el mínimo es la rentabilidad sin riesgo, el ratio coincide con el de Sharpe (lección 2.3). Lo interesante es que la mejor cartera cambia según tu mínimo: el ejercicio 2 lo muestra con números.

#### 3. La probabilidad de déficit con un modelo lognormal
Si el logaritmo del valor de la cartera sigue un paseo aleatorio con deriva m por año y volatilidad σ, el logaritmo del valor a T años se distribuye como una normal con media m·T y desviación σ·√T. La probabilidad de acabar por debajo de un objetivo K (en logaritmos, k) es:

$$ P(déficit) = Φ( (k − m·T) / (σ·√T) )   con   m ≈ ln(1 + μ) − σ² / 2

- La deriva crece con T y la dispersión con √T: por eso la probabilidad de pérdida baja con el plazo.
- Pero el **tamaño** de la peor pérdida posible crece con el plazo (Bodie, lección 0.7): la probabilidad baja, la gravedad del mal escenario no.
- El modelo supone que no hay cambios de régimen ni colas gruesas (lección 2.2). Es un punto de partida, no una garantía.

#### 4. Cuándo la volatilidad se convierte en pérdida
Tres mecanismos, que verás repetidos en todo el curso:
- **Liquidez**: necesitar el dinero en el peor momento. El colchón (lección 0.5) existe para esto.
- **Apalancamiento**: con deuda, una caída temporal puede obligarte a vender (lección 0.6 y lección 1.10).
- **Comportamiento**: vender por miedo. Los estudios de Morningstar sobre la diferencia entre la rentabilidad de los fondos y la de sus inversores lo cuantifican año tras año (bloque 6).

Mientras ninguno de los tres actúe, una caída es una pérdida **en el papel**. No es un consuelo psicológico: es una diferencia económica real, porque conservas los activos que se recuperan.

#### 5. Las medidas de riesgo son modelos, no el riesgo
Volatilidad, caída máxima, probabilidad de déficit… todas resumen el riesgo en un número a partir de datos pasados. Nassim Taleb insiste en que los sucesos que más importan (los «cisnes negros») son precisamente los que no están en los datos. La consecuencia práctica no es dejar de medir, sino **no apostar nunca tu supervivencia** a que el modelo acierte: evitar posiciones que te arruinan si ocurre lo improbable.
`,
  caso: {
    titulo: "El IBEX 35: 18 años para volver al máximo (sin dividendos)",
    md: `
- **8 de noviembre de 2007**: el IBEX 35 cierra en **15.945,7** puntos, máximo histórico en plena burbuja inmobiliaria.
- **24 de julio de 2012**: con la prima de riesgo en máximos, toca **5.956,3** puntos. Caída del **62,6 %**.
- **Noviembre de 2023**: unos 9.200 puntos, todavía un 42 % por debajo del máximo.
- **27 de octubre de 2025**: cierra en **16.000,2** puntos y bate el récord de 2007, casi **18 años** después. En precio, la rentabilidad anual de esos 18 años es prácticamente cero.
- **Agosto de 2026**: supera por primera vez los 20.000 puntos. A finales de octubre cerraba en **18.652,9**.

Pero el IBEX que dan las noticias no incluye dividendos. El **IBEX 35 con dividendos** que calcula BME ya marcaba máximos en **mayo de 2017**, unos nueve años y medio después del pico. La bolsa española pagaba dividendos altos, y quien los reinvirtió recuperó mucho antes.

> Lo que enseña: el mismo índice fue una pérdida permanente para quien vendió en 2012 y una caída temporal para quien siguió dentro y reinvirtió los dividendos. La diferencia no la puso el mercado, sino la situación y el comportamiento de cada inversor.
`
  },
  ejercicios: [
    {
      t: "Probabilidad de perder dinero según el plazo",
      p: `
Una cartera de acciones tiene una rentabilidad media aritmética del 7 % y una volatilidad del 16 %. Una cartera 60/40 tiene un 5,5 % y un 10 %. Con un modelo lognormal, calcula la probabilidad de terminar con menos dinero del invertido a 1, 10 y 20 años en cada caso.
`,
      s: `
1. **Deriva logarítmica** de las acciones: m = ln(1,07) − 0,16² / 2 = 0,0677 − 0,0128 = **0,0549**. De la 60/40: ln(1,055) − 0,10² / 2 = **0,0485**.
2. **Acciones**, P = Φ(−m·T / (σ·√T)):
   - 1 año: Φ(−0,0549 / 0,16) = Φ(−0,343) = **36,6 %**.
   - 10 años: Φ(−0,549 / 0,506) = Φ(−1,08) = **13,9 %**.
   - 20 años: **6,3 %**.
3. **60/40**: 1 año **31,4 %**; 10 años **6,2 %**; 20 años **1,5 %**.
4. La cartera menos volátil reduce mucho la probabilidad de pérdida, a cambio de un resultado mediano menor. Es el intercambio central de todo este bloque.
`
    },
    {
      t: "La mejor cartera depende de tu mínimo",
      p: `
La cartera A tiene una rentabilidad esperada del 8 % y una volatilidad del 18 %. La B, un 5 % y un 8 %. Con el criterio de Roy, ¿cuál elegirías si tu mínimo aceptable es 0 %? ¿Y si necesitas al menos un 4 % anual para llegar a tu objetivo?
`,
      s: `
1. **Mínimo 0 %**: A = (8 − 0) / 18 = 0,44; B = (5 − 0) / 8 = **0,63**. Gana **B**: es menos probable que acabe en negativo.
2. **Mínimo 4 %**: A = (8 − 4) / 18 = **0,22**; B = (5 − 4) / 8 = 0,13. Gana **A**.
3. Si necesitas una rentabilidad alta, la cartera «segura» te hace casi seguro no llegar. El riesgo relevante no es la volatilidad, sino no alcanzar el objetivo.
`
    },
    {
      t: "Recuperar una caída",
      p: `
El IBEX 35 cayó de 15.945,7 a 5.956,3 puntos. ¿Cuánto tenía que subir para volver al máximo? Si el índice subiera un 7 % al año, ¿cuántos años tardaría? ¿Por qué el inversor que reinvirtió dividendos recuperó antes?
`,
      s: `
1. **Caída**: 5.956,3 / 15.945,7 − 1 = **−62,6 %**.
2. **Subida necesaria**: 15.945,7 / 5.956,3 − 1 = **+167,7 %**.
3. **Años al 7 %**: ln(2,677) / ln(1,07) = **14,6 años**.
4. Con dividendos reinvertidos, la rentabilidad anual del inversor era varios puntos mayor que la del índice de precios, y además compraba acciones baratas con esos dividendos durante la caída. Por eso el índice con dividendos recuperó su máximo en 2017, unos ocho años antes.
`
    }
  ],
  errores: [
    "Confundir volatilidad con riesgo y huir de un activo volátil que encaja con tu plazo.",
    "Creer que un depósito «no tiene riesgo» cuando rinde menos que la inflación.",
    "Mirar el índice sin dividendos para juzgar una caída y su recuperación.",
    "Diseñar la cartera sin pensar en qué situaciones te obligarían a vender.",
    "Pensar que, a largo plazo, la probabilidad de pérdida es cero."
  ],
  test: [
    { p: "¿Cuándo se convierte la volatilidad en pérdida permanente?", o: ["Siempre que el precio baja", "Cuando te obliga a vender en una caída, o el activo se deteriora o pagaste demasiado", "Nunca, a largo plazo"], c: 1, e: "Mientras no vendas y el activo siga sano, una caída es una pérdida en el papel." },
    { p: "Una caída del 50 % exige para recuperarse una subida de…", o: ["+50 %", "+100 %", "+75 %"], c: 1, e: "1 / (1 − 0,5) − 1 = 100 %." },
    { p: "¿Qué distinguió Frank Knight en 1921?", o: ["Acciones y bonos", "Riesgo (probabilidades conocidas) e incertidumbre (desconocidas)", "Rentabilidad nominal y real"], c: 1, e: "Muchos fenómenos de mercado son incertidumbre, no riesgo medible." },
    { p: "El IBEX 35 con dividendos recuperó su máximo de 2007…", o: ["En 2025, igual que el de precios", "Hacia mayo de 2017", "Nunca"], c: 1, e: "Los dividendos reinvertidos acortaron unos ocho años la recuperación." },
    { p: "Según el criterio de Roy, la mejor cartera…", o: ["Es siempre la de menor volatilidad", "Depende de la rentabilidad mínima que necesites", "Es siempre la de mayor rentabilidad"], c: 1, e: "Se maximiza (μ − r_min) / σ: cambia con tu mínimo." }
  ],
  lecturas: [
    { t: "Risk, Uncertainty and Profit", a: "Frank Knight, 1921", n: "El origen de la distinción. Gratis en internet." },
    { t: "Lo más importante (The Most Important Thing)", a: "Howard Marks", n: "Varios capítulos sobre qué es de verdad el riesgo. Muy legible." },
    { t: "Safety First and the Holding of Assets", a: "Andrew Roy, Econometrica, 1952" },
    { t: "El cisne negro", a: "Nassim Nicholas Taleb", n: "Los límites de medir el riesgo con datos pasados." }
  ]
});


/* ---- l02.js ---- */
LECCIONES.push({
  id: "b2-l2", num: "2.2",
  titulo: "Medir el riesgo: volatilidad, caídas, VaR y colas gruesas",
  resumen: "La volatilidad resume en un número cuánto se mueve un activo, y el VaR traduce eso a euros que podrías perder. Ambos suponen, casi siempre, que los movimientos siguen una campana de Gauss. Los mercados reales tienen colas mucho más gruesas: las caídas extremas son miles de veces más frecuentes de lo que predice la normal. Por eso conviene mirar también la caída máxima y la pérdida media en los peores casos.",
  esencial: `
**Volatilidad.** Es la desviación típica de las rentabilidades: cuánto se separan, de media, de su promedio. Se expresa en porcentaje anual. Orientativamente:

| Activo | Volatilidad anual típica |
|---|---|
| Letras del Tesoro | < 1 % |
| Bonos del Estado a 5–7 años | 4–6 % |
| Bolsa mundial | 15–18 % |
| Una acción individual | 25–50 % |
| Oro | 15–17 % |
| Bitcoin | 50–70 % |

Una regla rápida: con una volatilidad del 16 %, en un año normal la bolsa puede acabar fácilmente entre un −10 % y un +25 %. Y uno de cada tres años saldrá de ese rango.

**Caída máxima** (*drawdown*): la mayor pérdida desde un máximo hasta el mínimo siguiente. Es la medida que mejor conecta con lo que se siente: «llegué a perder un 35 %».

**VaR** (valor en riesgo): «con un 95 % de confianza, en un mes no perderás más de X euros». Lo usan bancos y gestoras. Su problema: no dice nada de cuánto pierdes en ese 5 % de casos malos. La **pérdida esperada en la cola** (*expected shortfall*) responde a eso: la pérdida media en los peores casos.

**El VIX** es la volatilidad que el mercado de opciones espera para el S&P 500 en los próximos 30 días. Por eso se le llama «índice del miedo». El 5 de noviembre de 2026 subió un **69,7 % en un día**, de 16,61 a 28,18, la tercera mayor subida desde 1990.

**La advertencia más importante**: casi todas estas medidas suponen que los movimientos siguen una distribución normal. En los mercados reales, las caídas extremas son mucho más frecuentes de lo que esa campana predice. Un día de −6 desviaciones típicas «debería» ocurrir una vez cada cuatro millones de años; en la bolsa ocurre varias veces por década.
`,
  entender: `
#### Calcular y anualizar la volatilidad
Con rentabilidades diarias, se calcula su desviación típica y se multiplica por la raíz del número de periodos al año (unos 252 días de bolsa, o 12 meses):

$$ σ anual ≈ σ diaria × √252 ≈ σ mensual × √12

Un 1 % de volatilidad diaria es un **15,9 %** anual. Al revés: un VIX de 28,18 implica movimientos diarios esperados de 28,18 / √252 ≈ **1,78 %** y mensuales de ≈ **8,1 %**. Con el VIX en 16,61, el movimiento diario esperado era del 1,05 %.

La regla de la raíz supone que las rentabilidades de cada periodo son independientes. Si hay inercia (rachas), la volatilidad a largo plazo es mayor que la anualizada; si hay reversión a la media, menor (lección 0.7).

#### VaR y pérdida esperada en la cola, con números
Cartera de 100.000 € con volatilidad anual del 15 %. Volatilidad mensual: 15 % / √12 = 4,33 %. Suponiendo normalidad y media cero:

| Medida | Cálculo | Resultado |
|---|---|---|
| VaR 95 % a 1 mes | 1,645 × 4,33 % | 7,1 % ≈ **7.100 €** |
| VaR 99 % a 1 mes | 2,326 × 4,33 % | 10,1 % ≈ **10.100 €** |
| Pérdida esperada en el 5 % peor | 2,063 × 4,33 % | 8,9 % ≈ **8.900 €** |

Lectura: uno de cada 20 meses perderás más de 7.100 €; cuando ocurra, la pérdida media será de unos 8.900 €… si los mercados fueran normales. Con colas gruesas, la cifra real es mayor.

#### Caída máxima y tiempo bajo el agua
La caída máxima se calcula recorriendo la serie y guardando el máximo alcanzado hasta cada momento:

$$ caída en t = valor(t) / máximo hasta t − 1     caída máxima = mínimo de esas caídas

Junto a ella conviene mirar el **tiempo bajo el agua**: cuánto tardó en recuperar el máximo anterior (en el IBEX 35 sin dividendos, casi 18 años; lección 2.1).

#### Medidas que solo miran el lado malo
- **Semidesviación** (*downside deviation*): como la volatilidad, pero solo con las rentabilidades por debajo de un umbral (0 % o la rentabilidad mínima que necesitas). Base del ratio de Sortino (lección 2.3).
- **Peor año, peor mes, peor día**: crudas, pero muy informativas.
- **Asimetría** (*skewness*): si las sorpresas grandes suelen ser a la baja (asimetría negativa) o al alza. Vender seguros y opciones tiene asimetría negativa (lección 1.10).
`,
  fondo: `
#### 1. Colas gruesas: los mercados no son normales
Benoit Mandelbrot (1963), estudiando el precio del algodón, mostró que los cambios de precio tenían muchos más movimientos extremos de los que permite una normal. La medida estadística es la **curtosis**: la normal tiene curtosis 3; las rentabilidades diarias de la bolsa tienen curtosis mucho mayores. Una forma de verlo es comparar la normal con una **t de Student con 3 grados de libertad**, reescalada para tener la misma varianza:

| Caída diaria | Normal: un día así cada… | t de Student (3 g.l.): un día así cada… |
|---|---|---|
| −3 σ | 741 días (unos 3 años) | 0,6 años |
| −5 σ | 13.800 años | 2,5 años |
| −6 σ | 4 millones de años | 4,2 años |

La t de Student se ajusta bastante mejor a lo que se observa. **El lunes negro** (19 de octubre de 1987) el S&P 500 cayó un **20,5 %** en un día: con una volatilidad diaria del 1 %, unas 20 desviaciones típicas. Con una normal, la probabilidad es del orden de 10⁻⁹³: no habría pasado nunca en la vida del universo.

#### 2. La volatilidad se agrupa
Los días agitados vienen seguidos de días agitados, y los tranquilos de tranquilos. Robert Engle (1982) y Tim Bollerslev (1986) modelaron este fenómeno con los modelos **ARCH y GARCH**, en los que la varianza de mañana depende de la de hoy y del último susto:

$$ σ²(t) = ω + α · r²(t−1) + β · σ²(t−1)

Engle recibió el Nobel en 2003. Dos consecuencias prácticas: la volatilidad es en parte **predecible** a corto plazo (no así la dirección), y una medida calculada con un periodo tranquilo subestima el riesgo justo antes de que cambie el régimen. Parte de las colas gruesas se explica por esto: una mezcla de días normales con volatilidades distintas produce una distribución con colas gruesas.

#### 3. Los problemas del VaR
- **No dice nada más allá del umbral**: dos carteras con el mismo VaR pueden tener pérdidas extremas muy diferentes.
- **No siempre premia diversificar**: Artzner, Delbaen, Eber y Heath (1999) definieron las medidas de riesgo **coherentes** y mostraron que el VaR puede violar la subaditividad (el VaR de dos posiciones juntas puede ser mayor que la suma de sus VaR). La pérdida esperada en la cola sí es coherente.
- **Incentiva esconder riesgo en la cola**: una estrategia que vende protección contra catástrofes tiene un VaR bajo… hasta que llega la catástrofe.

Por eso la regulación bancaria (el marco de Basilea para la cartera de negociación) pasó del VaR al 99 % a la **pérdida esperada en la cola al 97,5 %**.

#### 4. Volatilidad implícita y realizada
El VIX se calcula con los precios de las opciones sobre el S&P 500 a 30 días: es una volatilidad **implícita** (lo que el mercado paga por protegerse). De media es mayor que la volatilidad que luego ocurre (la **prima de riesgo de volatilidad**, lección 1.10). El VIX sube mucho en las caídas: la volatilidad y la bolsa tienen correlación negativa (el «efecto apalancamiento» de Black, 1976).

#### 5. Elegir horizonte y frecuencia
Medir con datos diarios, mensuales o anuales cambia los números: con datos mensuales, una caída de varios días puede no verse; con datos de activos que se valoran poco (inmuebles, capital riesgo), la volatilidad aparece artificialmente baja (lección 2.3). Regla práctica: mide el riesgo con la frecuencia y el horizonte en que de verdad podrías tener que vender.
`,
  caso: {
    titulo: "Abril de 2025 y noviembre de 2026: dos sustos fuera de la campana",
    md: `
**Abril de 2025.** Tras el anuncio de aranceles generalizados del 2 de abril:
- El S&P 500 cayó un **10,5 % en dos sesiones** (3 y 4 de abril), la mayor caída de dos días desde marzo de 2020. El Nasdaq perdió un 11,4 % y el DAX un 7,8 %.
- El lunes 7 de abril el VIX superó los **60 puntos** durante la sesión; solo había ocurrido antes en 2008 y 2020.
- El 9 de abril, tras anunciarse una pausa en parte de los aranceles, el S&P 500 **subió un 9,5 %**, su mayor subida desde octubre de 2008. Fueron cuatro sesiones seguidas con movimientos intradía de más del 5 %.

**5 de noviembre de 2026.** Dos días después de las elecciones de mitad de mandato en EE. UU., las acciones ligadas a la inteligencia artificial se desplomaron:
- El S&P 500 cayó un **4,4 %**, su peor día desde abril de 2025, y el Nasdaq 100 un 6,4 %.
- El VIX subió un **69,7 %**, de 16,61 a 28,18. Solo dos sesiones desde 1990 tuvieron una subida porcentual mayor: el 5 de febrero de 2018 (lección 1.10) y el 18 de diciembre de 2024.

Con una volatilidad diaria normal del 1 %, una caída del 6 % es un suceso de 6 desviaciones típicas: «una vez cada cuatro millones de años» con la campana de Gauss. En la práctica, días así llegan cada pocos años, y las mayores subidas suelen estar pegadas a las mayores caídas.

> Lo que enseña: no diseñes tu cartera para el riesgo «medio», sino para soportar sin vender los días que los modelos llaman imposibles. Y no salgas del mercado tras una gran caída: los mejores días suelen llegar justo después.
`
  },
  ejercicios: [
    {
      t: "VaR y pérdida esperada de tu cartera",
      p: `
Tienes 100.000 € en una cartera con volatilidad anual del 15 %. Suponiendo normalidad y media cero, calcula el VaR al 95 % y al 99 % a un mes, y la pérdida esperada en el 5 % de los peores meses. Después, explica qué cambia si las rentabilidades tienen colas gruesas.
`,
      s: `
1. **Volatilidad mensual**: 15 % / √12 = **4,33 %**.
2. **VaR 95 %**: 1,645 × 4,33 % = 7,12 % → **7.123 €**.
3. **VaR 99 %**: 2,326 × 4,33 % = 10,07 % → **10.072 €**.
4. **Pérdida esperada en la cola (95 %)**: con la normal, φ(1,645) / 0,05 = 2,063 desviaciones típicas → 8,93 % → **8.930 €**.
5. Con colas gruesas, el VaR al 95 % cambia poco, pero el VaR al 99 % y sobre todo la pérdida esperada en la cola son mayores: la diferencia está en los casos extremos, que es justo lo que el VaR no mira.
`
    },
    {
      t: "Normal o t de Student: ¿cada cuánto un día de −5 σ?",
      p: `
Compara la probabilidad de un día con una caída de más de 5 desviaciones típicas con una normal y con una t de Student de 3 grados de libertad reescalada a varianza 1. Expresa el resultado en «un día así cada cuántos años», con 252 sesiones al año.
`,
      s: `
1. **Normal**: P(Z < −5) = 2,87 × 10⁻⁷. Años entre sucesos: 1 / (2,87 × 10⁻⁷ × 252) ≈ **13.800 años**.
2. **t de Student (3 g.l.)**: su varianza es ν / (ν − 2) = 3, así que la variable con varianza 1 es T / √3, y P(X < −5) = P(T < −5√3) = P(T < −8,66) ≈ 1,6 × 10⁻³. Años entre sucesos: ≈ **2,5 años**.
3. La diferencia es de un factor de más de 5.000. La forma de la cola, no la volatilidad, decide cuántas veces vivirás un desastre.
`
    },
    {
      t: "Caída máxima de una serie",
      p: `
Un fondo ha tenido estos valores a final de cada año: 100, 120, 90, 110, 70, 95, 130. Calcula su caída máxima, cuándo empezó y terminó, y cuánto tuvo que subir para recuperar el máximo anterior.
`,
      s: `
1. Máximo acumulado en cada año: 100, 120, 120, 120, 120, 120, 130.
2. Caída en cada año: 0 %, 0 %, −25 %, −8,3 %, **−41,7 %**, −20,8 %, 0 %.
3. **Caída máxima**: −41,7 %, del máximo de 120 (año 2) al mínimo de 70 (año 5).
4. **Subida necesaria**: 120 / 70 − 1 = **+71,4 %**. Lo logró en el año 7, cinco años después del máximo.
5. La volatilidad anual de esta serie no te dice nada de este «tiempo bajo el agua»: por eso conviene mirar las dos medidas.
`
    }
  ],
  errores: [
    "Creer que el VaR es la pérdida máxima posible.",
    "Usar la volatilidad de un periodo tranquilo para estimar el riesgo futuro.",
    "Suponer que los movimientos extremos son tan raros como dice la campana de Gauss.",
    "Leer un VIX alto como una predicción de que la bolsa va a caer: mide movimiento esperado, no dirección.",
    "Salir del mercado tras una gran caída y perderse los grandes rebotes, que suelen llegar justo después."
  ],
  test: [
    { p: "Una volatilidad diaria del 1 % equivale aproximadamente a una anual de…", o: ["1 %", "15,9 %", "25,2 %"], c: 1, e: "1 % × √252 ≈ 15,9 %." },
    { p: "¿Qué no dice el VaR al 95 %?", o: ["La pérdida que se supera uno de cada 20 periodos", "Cuánto pierdes cuando superas ese umbral", "Nada: lo dice todo"], c: 1, e: "Para eso está la pérdida esperada en la cola (expected shortfall)." },
    { p: "Con una t de Student de 3 grados de libertad, un día de −6 σ ocurre aproximadamente…", o: ["Cada 4 millones de años", "Cada 4 años", "Nunca"], c: 1, e: "Con la normal sería cada 4 millones de años: así de distintas son las colas." },
    { p: "¿Qué describen los modelos GARCH?", o: ["Que la volatilidad se agrupa en el tiempo", "Que los precios siguen una tendencia", "Que la bolsa siempre sube"], c: 0, e: "Engle y Bollerslev: la varianza de mañana depende de la de hoy." },
    { p: "El 5 de noviembre de 2026 el VIX subió…", o: ["Un 12 %", "Un 69,7 %, de 16,61 a 28,18", "Por encima de 60"], c: 1, e: "La tercera mayor subida porcentual diaria desde 1990." }
  ],
  lecturas: [
    { t: "Fractales y finanzas (The (Mis)behavior of Markets)", a: "Benoit Mandelbrot y Richard Hudson", n: "Las colas gruesas contadas por su descubridor. Muy legible." },
    { t: "Coherent Measures of Risk", a: "Artzner, Delbaen, Eber y Heath, Mathematical Finance, 1999", n: "Técnico. Por qué el VaR no basta." },
    { t: "Risk and Volatility: Econometric Models and Financial Practice", a: "Robert Engle, conferencia Nobel, 2003", n: "GARCH explicado por su autor." },
    { t: "Cboe: metodología del VIX", a: "cboe.com", n: "Cómo se calcula el índice a partir de las opciones." }
  ]
});


/* ---- l03.js ---- */
LECCIONES.push({
  id: "b2-l3", num: "2.3",
  titulo: "Rentabilidad ajustada al riesgo: Sharpe, Sortino y compañía",
  resumen: "Comparar rentabilidades sin mirar el riesgo es comparar coches por la velocidad sin mirar los frenos. El ratio de Sharpe mide cuánta rentabilidad extra obtienes por cada unidad de volatilidad; Sortino y Calmar se fijan solo en el lado malo. Son útiles, pero con pocos años de datos son muy imprecisos, y un ratio demasiado bueno puede ser una señal de alarma.",
  esencial: `
Dos fondos: uno ganó un 9 % al año y otro un 6,5 %. ¿Cuál es mejor? Depende de cuánto riesgo asumió cada uno para conseguirlo.

**El ratio de Sharpe** (William Sharpe, 1966) responde a esa pregunta:

$$ Sharpe = (rentabilidad − rentabilidad sin riesgo) / volatilidad

Mide cuánta rentabilidad **extra** (por encima de una Letra del Tesoro) obtienes por cada punto de volatilidad. A largo plazo, la bolsa mundial ha tenido un Sharpe de alrededor de 0,3–0,4; un 0,5 sostenido durante décadas ya es muy bueno; por encima de 1, durante muchos años, es rarísimo.

**Otras medidas parecidas**
- **Sortino**: como Sharpe, pero divide solo por la volatilidad de las rentabilidades **malas**. No castiga las subidas.
- **Calmar**: rentabilidad anual entre la **caída máxima**. Responde a «cuánto gano por cada punto de caída que tengo que aguantar».
- **Alfa**: rentabilidad por encima de lo que «tocaba» según el riesgo de mercado asumido (lección 2.7).
- **Ratio de información**: cuánto bate un fondo a su índice, dividido por cuánto se separa de él.

**Tres advertencias**
1. **Con pocos años, el ratio es casi ruido.** Un Sharpe de 0,5 medido con 10 años de datos es compatible, estadísticamente, con uno de 0 o con uno de 1,1.
2. **Las cosas que se valoran poco parecen menos arriesgadas.** Inmuebles, capital riesgo o fondos que se valoran de forma «suave» muestran poca volatilidad y Sharpe alto que no son reales.
3. **Un Sharpe demasiado bueno es una señal de alarma.** El de Bernie Madoff era casi perfecto: 2,75, con solo 14 meses en negativo en 16 años. Era un fraude.
`,
  entender: `
#### Comparar dos fondos de verdad
Tipo sin riesgo: 3 % (las Letras a 12 meses rinden hoy un 3,07 %).

| | Fondo A | Fondo B |
|---|---|---|
| Rentabilidad anual | 9 % | 6,5 % |
| Volatilidad | 18 % | 8 % |
| Semidesviación (a la baja) | 12 % | 5 % |
| Caída máxima | −35 % | −12 % |
| **Sharpe** | (9 − 3) / 18 = **0,33** | (6,5 − 3) / 8 = **0,44** |
| **Sortino** | 6 / 12 = **0,50** | 3,5 / 5 = **0,70** |
| **Calmar** | 9 / 35 = **0,26** | 6,5 / 12 = **0,54** |

A rinde más, pero B rinde más **por unidad de riesgo** con las tres medidas.

#### ¿Por qué importa el ratio y no la rentabilidad?
Porque, si puedes combinar un fondo con liquidez (o pedir prestado), puedes llevarlo al nivel de riesgo que quieras **sin cambiar su Sharpe**:
- 50 % en un fondo que da un 7 % con volatilidad del 10 % y 50 % en Letras al 3 %: rentabilidad del 5 % con volatilidad del 5 %. El Sharpe sigue siendo (5 − 3) / 5 = 0,4, igual que el del fondo solo.
- Al revés, el fondo B apalancado 2,25 veces (si pudieras pedir prestado al 3 %) tendría la volatilidad de A (18 %) y una rentabilidad del **10,9 %**, más que el 9 % de A.

En la práctica, un particular no se apalanca barato, así que la rentabilidad absoluta también importa. Pero el Sharpe dice qué gestor hace un uso más eficiente del riesgo.

#### Anualizar el Sharpe
Con datos mensuales, el Sharpe anual es el mensual por √12 (si los meses son independientes). Un Sharpe mensual de 0,2 equivale a uno anual de 0,69.

#### La tabla del ratio de información
Para un fondo activo, la pregunta no es si gana dinero, sino si bate a su índice de forma **consistente**:

$$ ratio de información = (rentabilidad del fondo − rentabilidad del índice) / error de seguimiento

Un fondo que bate a su índice un 1 % al año con un error de seguimiento del 4 % tiene un ratio de 0,25. Grinold y Kahn, en su manual clásico, consideran «bueno» un 0,5 y «excepcional» un 1 antes de costes.
`,
  fondo: `
#### 1. El error de estimación del Sharpe
Andrew Lo (2002) calculó cuánto se equivoca el Sharpe estimado. Con rentabilidades independientes y normales y T años de datos:

$$ error típico del Sharpe ≈ √( (1 + SR² / 2) / T )

| Sharpe medido | Años de datos | Intervalo al 95 % |
|---|---|---|
| 0,5 | 10 | de −0,16 a 1,16 |
| 0,6 | 5 | de −0,35 a 1,55 |
| 0,3 | 20 | de −0,15 a 0,75 |

Con 10 años no puedes distinguir un gestor excelente de uno sin habilidad. Para que un ratio de información de 0,3 sea estadísticamente significativo (t = 2) necesitas (2 / 0,3)² ≈ **44 años**. Ningún gestor tiene tanto historial con la misma estrategia.

Lo también mostró que, si las rentabilidades mensuales están **autocorrelacionadas** (rachas), la regla de √12 sobreestima el Sharpe anual; en algunos *hedge funds*, hasta un 65 %.

#### 2. Rentabilidades suavizadas: el Sharpe ficticio de los activos ilíquidos
Getmansky, Lo y Makarov (2004) mostraron que los fondos con activos poco líquidos tienen rentabilidades **suavizadas**: el valor de hoy se basa en parte en valoraciones antiguas. Si la rentabilidad publicada es la media de la de este mes y la del anterior, la volatilidad medida cae a un 71 % de la real (√(0,5² + 0,5²)) y el Sharpe sube en la misma proporción. Pasa con el capital riesgo, la deuda privada, los inmuebles no cotizados o algunos fondos de rentabilidad objetivo. La señal: autocorrelación positiva y muy pocos meses negativos.

#### 3. Cuando la volatilidad no es buena medida: asimetría y opciones
El Sharpe supone que la volatilidad resume todo el riesgo. Las estrategias que **venden opciones** (lección 1.10) tienen Sharpe altos durante años y caídas enormes de golpe: su riesgo está en la cola, no en la volatilidad. Goetzmann, Ingersoll, Spiegel y Welch (2007) mostraron que se puede **manipular** el Sharpe vendiendo opciones fuera de dinero: sube el ratio sin añadir habilidad. Medidas como Sortino, Calmar o la pérdida en la cola ayudan, pero ninguna sustituye a entender de dónde sale la rentabilidad.

#### 4. Sharpe y Treynor: qué riesgo dividir
- **Sharpe** divide por la volatilidad total: es la medida correcta si ese fondo es **toda** tu cartera.
- **Treynor** divide por la **beta** (riesgo de mercado, lección 2.7): es la correcta si el fondo es una pieza pequeña de una cartera diversificada, porque su riesgo propio se diluye.
- El **alfa de Jensen** (1968) es la rentabilidad sobre la que predice el CAPM. Jensen, analizando fondos estadounidenses de 1945 a 1964, ya encontró que de media no tenían alfa positivo después de costes, un antecedente del análisis de la lección 1.6.

#### 5. Elegir el periodo es elegir el resultado
Un Sharpe calculado entre 2009 y 2021 (bolsa al alza y tipos bajando) favorece a cualquier estrategia con acciones y bonos largos. Calculado desde 2022, cambia mucho. Desconfía de los ratios que solo cubren un régimen de mercado y pregunta siempre por los años malos.
`,
  caso: {
    titulo: "Madoff: el Sharpe demasiado perfecto",
    md: `
Fairfield Sentry era el mayor fondo que canalizaba dinero hacia Bernard L. Madoff Investment Securities. Su documentación comercial presumía de estas cifras frente al S&P 500:

| | Fairfield Sentry | S&P 500 |
|---|---|---|
| Volatilidad anual | 2,50 % | 14,11 % |
| Ratio de Sharpe | **2,75** | 0,51 |
| Peor caída | **−0,64 %** | −49,37 % |

Hablaba de solo 14 meses negativos en 16 años. En 2001, un artículo de Michael Ocrant en la revista del sector MARHedge ya destacaba que, por rentabilidad ajustada al riesgo, sería el mejor de los fondos comparables. Harry Markopolos, analista de un competidor, avisó durante años a la SEC de que esos números eran imposibles con la estrategia declarada: según él, bastaban unos minutos mirando la serie, que subía como una línea recta de 45 grados. Señaló además que el fondo apenas tenía correlación con el índice en el que decía invertir.

En diciembre de 2008 Madoff confesó que todo era un esquema piramidal.

> Lo que enseña: un ratio de rentabilidad ajustada al riesgo excepcional no es una prueba de habilidad; puede ser suavizado, apalancamiento oculto, venta de opciones o, en el extremo, fraude. Cuanto mejor es el número, más hay que entender cómo se consigue.
`
  },
  ejercicios: [
    {
      t: "Sharpe, Sortino y Calmar de dos fondos",
      p: `
Fondo A: rentabilidad anual del 9 %, volatilidad del 18 %, semidesviación del 12 %, caída máxima del 35 %. Fondo B: 6,5 %, 8 %, 5 % y 12 %. Tipo sin riesgo: 3 %. Calcula los tres ratios. Si pudieras endeudarte al 3 %, ¿cuánto rendiría B con la misma volatilidad que A?
`,
      s: `
1. **Sharpe**: A = 6 / 18 = **0,33**; B = 3,5 / 8 = **0,44**.
2. **Sortino**: A = 6 / 12 = **0,50**; B = 3,5 / 5 = **0,70**.
3. **Calmar**: A = 9 / 35 = **0,26**; B = 6,5 / 12 = **0,54**.
4. **Apalancar B hasta el 18 %**: multiplicador 18 / 8 = 2,25. Rentabilidad: 3 % + 2,25 × (6,5 % − 3 %) = **10,9 %**, frente al 9 % de A con el mismo riesgo.
5. B es el gestor más eficiente. Si no te puedes apalancar, A puede seguir siendo preferible si necesitas su rentabilidad.
`
    },
    {
      t: "¿Es significativo ese Sharpe?",
      p: `
Un fondo presume de un Sharpe de 0,6 en sus 5 años de vida. Calcula su error típico y un intervalo de confianza del 95 %. ¿Cuántos años necesitarías para que un ratio de información de 0,5 fuera significativo (t = 2)?
`,
      s: `
1. **Error típico**: √((1 + 0,6² / 2) / 5) = √(1,18 / 5) = **0,486**.
2. **Intervalo**: 0,6 ± 1,96 × 0,486 = de **−0,35 a 1,55**. Incluye el cero: el dato no demuestra nada.
3. **Años para t = 2 con un ratio de 0,5**: (2 / 0,5)² = **16 años**. Con 0,3, unos 44.
4. Por eso cinco años de buenos resultados no bastan para elegir un fondo activo (lección 1.6).
`
    },
    {
      t: "El efecto del suavizado",
      p: `
Un fondo inmobiliario no cotizado publica cada mes la media de la rentabilidad real de ese mes y la del anterior. Si la volatilidad real es del 15 %, ¿qué volatilidad mostrará? Si su rentabilidad extra sobre las Letras es del 4 %, ¿qué Sharpe aparente y real tiene?
`,
      s: `
1. Rentabilidad publicada: 0,5 · r(t) + 0,5 · r(t − 1). Con rentabilidades independientes, su volatilidad es √(0,5² + 0,5²) = **0,71** veces la real.
2. **Volatilidad mostrada**: 0,71 × 15 % = **10,6 %**.
3. **Sharpe real**: 4 / 15 = **0,27**. **Aparente**: 4 / 10,6 = **0,38**, un 41 % más.
4. La rentabilidad media no cambia; solo parece menos arriesgada. Por eso los activos que se valoran poco suelen «mejorar» las carteras sobre el papel más que en la realidad.
`
    }
  ],
  errores: [
    "Elegir fondos por la rentabilidad sin mirar cuánto riesgo asumieron.",
    "Fiarse de un Sharpe calculado con pocos años o en un solo tipo de mercado.",
    "Comparar el Sharpe de activos cotizados con el de activos que se valoran poco.",
    "Ver un Sharpe altísimo como una oportunidad en vez de como una pregunta.",
    "Usar el Sharpe para estrategias que venden opciones: su riesgo está en la cola."
  ],
  test: [
    { p: "¿Qué mide el ratio de Sharpe?", o: ["La rentabilidad total", "La rentabilidad extra sobre el activo sin riesgo por unidad de volatilidad", "La caída máxima"], c: 1, e: "(R − Rf) / σ." },
    { p: "¿En qué se diferencia el ratio de Sortino?", o: ["Usa la caída máxima", "Divide solo por la volatilidad de las rentabilidades malas", "Usa la beta"], c: 1, e: "No penaliza las subidas." },
    { p: "Un Sharpe de 0,5 medido en 10 años tiene un intervalo de confianza del 95 % de aproximadamente…", o: ["0,45–0,55", "−0,16 a 1,16", "0–0,5"], c: 1, e: "Error típico ≈ 0,34: casi no informa." },
    { p: "¿Por qué los activos ilíquidos suelen mostrar Sharpe altos?", o: ["Porque son mejores", "Porque sus rentabilidades se suavizan y parecen menos volátiles", "Por los impuestos"], c: 1, e: "Getmansky, Lo y Makarov (2004)." },
    { p: "El Sharpe declarado de Fairfield Sentry (Madoff) era…", o: ["0,51", "1,0", "2,75"], c: 2, e: "Con una peor caída del −0,64 %: demasiado perfecto para ser real." }
  ],
  lecturas: [
    { t: "The Statistics of Sharpe Ratios", a: "Andrew Lo, Financial Analysts Journal, 2002", n: "Por qué el ratio es tan impreciso." },
    { t: "The Sharpe Ratio", a: "William Sharpe, Journal of Portfolio Management, 1994", n: "El autor explica su ratio y sus usos." },
    { t: "Nadie me escuchaba (No One Would Listen)", a: "Harry Markopolos", n: "Cómo detectó el fraude de Madoff con números." },
    { t: "An Econometric Model of Serial Correlation and Illiquidity in Hedge Fund Returns", a: "Getmansky, Lo y Makarov, Journal of Financial Economics, 2004", n: "Técnico." }
  ]
});


/* ---- l04.js ---- */
LECCIONES.push({
  id: "b2-l4", num: "2.4",
  titulo: "Diversificación: la matemática del único almuerzo gratis",
  resumen: "Mezclar activos que no se mueven igual reduce el riesgo sin reducir la rentabilidad esperada. La fórmula de la varianza de una cartera muestra hasta dónde: el riesgo propio de cada empresa se diluye, el riesgo común a todas no. Además, una cartera diversificada y rebalanceada crece más que la media de sus partes, porque reduce el lastre de la volatilidad.",
  esencial: `
Harry Markowitz, padre de la teoría de carteras, llamó a la diversificación **el único almuerzo gratis** de las finanzas: es la única forma de reducir el riesgo sin renunciar a rentabilidad esperada.

**Por qué funciona.** Si tienes dos activos que no se mueven exactamente igual, cuando uno cae el otro a veces no cae tanto, o incluso sube. Las sorpresas se compensan en parte. Cuanto menos se parecen sus movimientos (menor **correlación**), más se compensan.

**Dos tipos de riesgo**
- **Riesgo específico** (o idiosincrático): el que afecta a una sola empresa o emisor. Un fraude, un producto que fracasa, un juicio. Se diluye al tener muchas.
- **Riesgo sistemático** (o de mercado): el que afecta a todos a la vez. Una recesión, una subida de tipos, una pandemia. No se diluye por mucho que diversifiques dentro de la bolsa.

El mercado **no paga** por asumir riesgo específico, porque cualquiera puede eliminarlo gratis diversificando (lección 2.7). Concentrarse en pocas empresas es asumir un riesgo extra sin rentabilidad esperada extra.

**¿Cuántas acciones hacen falta?** Con unas 30 empresas de sectores distintos se elimina la mayor parte del riesgo específico **medido como volatilidad**. Pero recuerda la lección 1.3: la rentabilidad de la bolsa la generan unas pocas empresas extraordinarias. Para no quedarte fuera de ellas, cuantas más, mejor; un fondo indexado global tiene miles.

**Diversificar de verdad** no es tener muchos productos, sino tener cosas que se comportan distinto. Diez fondos de bolsa estadounidense grande son, en la práctica, uno solo. Veinte acciones de bancos españoles, también.

**El caso extremo**: trabajar en una empresa y tener los ahorros en acciones de esa misma empresa. Si quiebra, pierdes el sueldo y los ahorros a la vez. Les pasó a los empleados de Enron en 2001.
`,
  entender: `
#### La fórmula de la varianza de una cartera
Para dos activos con pesos w₁ y w₂, volatilidades σ₁ y σ₂ y correlación ρ:

$$ σp² = w₁²·σ₁² + w₂²·σ₂² + 2·w₁·w₂·ρ·σ₁·σ₂

El último término es el que hace la magia: si ρ < 1, la volatilidad de la cartera es **menor que la media ponderada** de las volatilidades.

Cartera 50/50 de un activo con volatilidad del 20 % y otro del 10 %:

| Correlación | Volatilidad de la cartera |
|---|---|
| +1 | 15,0 % (sin diversificación) |
| +0,3 | 12,4 % |
| 0 | 11,2 % |
| −0,5 | 8,7 % |
| −1 | 5,0 % |

La rentabilidad esperada es la misma en todas las filas (la media ponderada); lo único que cambia es el riesgo.

#### Muchas acciones: el suelo del riesgo de mercado
Con N acciones en pesos iguales, todas con volatilidad σ y la misma correlación ρ entre ellas:

$$ σp² = σ² · ( ρ + (1 − ρ) / N )

Con σ = 35 % (una acción típica) y ρ = 0,25:

| Número de acciones | Volatilidad de la cartera |
|---|---|
| 1 | 35,0 % |
| 5 | 22,1 % |
| 10 | 20,0 % |
| 30 | 18,4 % |
| 100 | 17,8 % |
| Infinitas | 17,5 % (= σ·√ρ) |

Con 30 acciones ya estás a menos de un punto del suelo. Ese suelo es el riesgo sistemático: con 30 acciones, el **91 %** de la varianza que queda es de mercado.

#### La diversificación más importante es entre familias de activos
Dentro de la bolsa, la correlación entre empresas suele estar entre 0,2 y 0,5, y entre bolsas de países desarrollados entre 0,6 y 0,9. La mayor reducción de riesgo viene de combinar **familias** distintas (acciones con bonos de calidad, liquidez, algo de oro), cuyas correlaciones pueden ser bajas o negativas… aunque no siempre (lección 2.5).

#### Contar «apuestas», no productos
Una forma rápida de detectar falsa diversificación: mira el solapamiento de las 10 primeras posiciones de tus fondos. Si dos fondos «distintos» comparten la mitad de sus principales empresas, no diversifican entre sí.
`,
  fondo: `
#### 1. Cuántas acciones: de Evans y Archer a Bessembinder
- **Evans y Archer (1968)**: con 10 acciones se conseguía casi toda la reducción de volatilidad.
- **Statman (1987)**: comparando el beneficio de diversificar con el coste de comprar más acciones, salían al menos 30–40.
- **Campbell, Lettau, Malkiel y Xu (2001)**: el riesgo específico de las empresas estadounidenses había aumentado mucho desde los años sesenta, mientras el de mercado no; hacían falta unas 50 acciones para el mismo efecto.
- **Bessembinder (2018) y la lección 1.3**: si la riqueza la crean unas pocas empresas, el problema de tener pocas no es solo la volatilidad, sino la **mediana**: lo más probable es quedarse fuera de las ganadoras y obtener menos que el índice. La volatilidad se diluye con 30; el riesgo de perderse las grandes ganadoras, solo con miles.

#### 2. El rendimiento de la diversificación
Recuerda la lección 0.4: la rentabilidad compuesta (geométrica) es aproximadamente la media aritmética menos la mitad de la varianza (g ≈ μ − σ² / 2). Si diversificas reduces σ sin tocar μ, así que **la rentabilidad compuesta sube**.

Para una cartera que se rebalancea a pesos fijos, la diferencia entre su rentabilidad compuesta y la media ponderada de las rentabilidades compuestas de sus componentes es aproximadamente:

$$ rendimiento de la diversificación ≈ ½ · ( Σ wᵢ·σᵢ² − σp² )

Booth y Fama (1992) lo formalizaron, y Robert Fernholz lo desarrolló dentro de su «teoría estocástica de carteras». Ejemplo: dos activos independientes, cada uno con media aritmética del 8 % y volatilidad del 30 %. Cada uno compone a ≈ 8 − 4,5 = 3,5 %. La cartera 50/50 rebalanceada tiene volatilidad 21,2 % y compone a ≈ 8 − 2,25 = 5,75 %: **2,25 puntos más al año** sin cambiar la rentabilidad esperada de nada. Con una simulación de 20.000 trayectorias a 30 años, la diferencia mediana es de unos 1,9 puntos (la aproximación es algo optimista con volatilidades tan altas). Parte de lo que se llama «bonus del rebalanceo» es exactamente esto.

#### 3. Diversificación y capital humano
Tu trabajo también es un activo: el valor de tus sueldos futuros (lección 0.9). Si tu sueldo depende de un sector, invertir en ese mismo sector concentra el riesgo. Lo lógico es lo contrario: un funcionario tiene un «bono» enorme en su capital humano y puede llevar más acciones; un empleado de banca, mejor no sobreponderar bancos. Los estudios sobre empleados que invierten en su propia empresa (Benartzi, 2001, entre otros) muestran que lo hacen por familiaridad y confianza, no por un análisis de riesgo.

#### 4. Diversificar no es un seguro contra todo
La diversificación reduce el riesgo **promedio**, pero en las grandes crisis las correlaciones suben (lección 2.5) y casi todo cae a la vez. Protege mucho frente a desastres individuales (una empresa, un sector, un país) y algo menos frente a un desastre general. Para eso están la liquidez y los bonos de alta calidad, y la decisión del reparto entre activos (lección 0.8).

#### 5. La medida del número efectivo de apuestas
Igual que el número efectivo de empresas de un índice (1 / Σ wᵢ², lección 1.3), Attilio Meucci propuso medir cuántas fuentes de riesgo **independientes** hay de verdad en una cartera. Una cartera 60/40 clásica tiene dos activos, pero en riesgo se parece mucho a una sola apuesta: la bolsa aporta alrededor del 90 % de su volatilidad (lección 2.10).
`,
  caso: {
    titulo: "Enron, 2001: el sueldo y los ahorros en la misma cesta",
    md: `
A finales del año 2000, el plan de pensiones de empresa (un *401(k)*) de los empleados de Enron tenía **2.100 millones de dólares**. De ellos, unos **1.300 millones, el 62 %**, estaban invertidos en acciones de la propia Enron. La empresa hacía sus aportaciones en sus propias acciones e impedía venderlas antes de los 50 años, y muchos empleados, animados por años de subidas y por los mensajes de la dirección, metían allí también su propio dinero.

En 2001 salieron a la luz las irregularidades contables, la acción se desplomó y en diciembre Enron se declaró en quiebra. Según estimaciones citadas en el Senado de EE. UU., unos 15.000 trabajadores perdieron alrededor de 1.300 millones de dólares de sus ahorros para la jubilación. Muchos perdieron a la vez el empleo. Para colmo, el plan estuvo bloqueado al menos dos semanas por un cambio de gestor justo mientras la acción caía.

> Lo que enseña: el riesgo específico no se paga y puede ser total. Y el peor riesgo específico es el que está correlacionado con tu sueldo: si tu empresa va mal, necesitarás tus ahorros justo cuando valen menos.
`
  },
  ejercicios: [
    {
      t: "Dos activos y cinco correlaciones",
      p: `
Combinas al 50 % un activo con volatilidad del 20 % y otro del 10 %. Calcula la volatilidad de la cartera si la correlación es +1, +0,3, 0, −0,5 y −1. ¿Cambia la rentabilidad esperada?
`,
      s: `
1. σp² = 0,25 × 0,04 + 0,25 × 0,01 + 2 × 0,25 × ρ × 0,2 × 0,1 = 0,0125 + 0,01·ρ.
2. **ρ = +1**: √0,0225 = **15,0 %**. **ρ = 0,3**: √0,0155 = **12,4 %**. **ρ = 0**: √0,0125 = **11,2 %**. **ρ = −0,5**: √0,0075 = **8,7 %**. **ρ = −1**: √0,0025 = **5,0 %**.
3. La rentabilidad esperada es la misma en todos los casos: la media de las dos. Solo cambia el riesgo.
`
    },
    {
      t: "¿Cuántas acciones?",
      p: `
Las acciones de un mercado tienen una volatilidad media del 35 % y una correlación media de 0,25. Calcula la volatilidad de una cartera equiponderada de 1, 10, 30 y 100 acciones, y el límite con infinitas. Con 30, ¿qué parte de la varianza es riesgo de mercado?
`,
      s: `
1. σp = 35 % × √(0,25 + 0,75 / N).
2. **N = 1**: 35,0 %. **N = 10**: 35 × √0,325 = **20,0 %**. **N = 30**: 35 × √0,275 = **18,4 %**. **N = 100**: **17,8 %**.
3. **Límite**: 35 × √0,25 = **17,5 %**.
4. **Parte sistemática con 30**: 0,25 / 0,275 = **91 %**.
5. Pasar de 30 a 100 acciones apenas reduce la volatilidad, pero sí aumenta la probabilidad de tener dentro a las pocas grandes ganadoras (lección 1.3).
`
    },
    {
      t: "El rendimiento de la diversificación",
      p: `
Dos activos independientes tienen cada uno una media aritmética del 8 % y una volatilidad del 30 %. Estima con la aproximación g ≈ μ − σ² / 2 la rentabilidad compuesta de cada uno y la de una cartera 50/50 rebalanceada cada año. ¿De dónde sale la diferencia?
`,
      s: `
1. **Cada activo**: 8 % − 0,30² / 2 = 8 % − 4,5 % = **3,5 %** compuesto.
2. **Volatilidad de la cartera**: √(0,25 × 0,09 + 0,25 × 0,09) = √0,045 = **21,2 %**.
3. **Cartera**: 8 % − 0,045 / 2 = 8 % − 2,25 % = **5,75 %** compuesto.
4. **Diferencia**: ≈ **2,25 puntos al año** con la aproximación (unos 1,9 en una simulación). Sale de reducir la varianza sin cambiar la media: el rebalanceo vende lo que ha subido y compra lo que ha bajado, y así mantiene la volatilidad baja.
`
    }
  ],
  errores: [
    "Creer que tener muchos fondos es estar diversificado aunque todos inviertan en lo mismo.",
    "Concentrarse en pocas acciones esperando más rentabilidad: el riesgo específico no se paga.",
    "Invertir los ahorros en la empresa o el sector de tu trabajo.",
    "Pensar que la diversificación evita las caídas en una crisis general.",
    "No rebalancear y dejar que la cartera se concentre sola en lo que más ha subido."
  ],
  test: [
    { p: "¿Qué riesgo elimina la diversificación entre muchas acciones?", o: ["El sistemático", "El específico de cada empresa", "Los dos"], c: 1, e: "El riesgo de mercado es común a todas y no se diluye." },
    { p: "Con 50 % en un activo de σ 20 % y 50 % en otro de σ 10 %, correlación 0, la volatilidad de la cartera es…", o: ["15 %", "11,2 %", "5 %"], c: 1, e: "√(0,01 + 0,0025) = 11,2 %." },
    { p: "Con σ = 35 % y ρ = 0,25, el límite de volatilidad con infinitas acciones es…", o: ["0 %", "17,5 %", "35 %"], c: 1, e: "σ·√ρ = 35 % × 0,5." },
    { p: "¿Qué porcentaje del plan de pensiones de Enron estaba en acciones de Enron?", o: ["Un 10 %", "Un 62 %", "Un 95 %"], c: 1, e: "1.300 de 2.100 millones de dólares." },
    { p: "¿Por qué una cartera diversificada y rebalanceada compone más que la media de sus partes?", o: ["Por los dividendos", "Porque reduce la varianza sin reducir la media, y la rentabilidad compuesta ≈ μ − σ²/2", "Por los impuestos"], c: 1, e: "Es el rendimiento de la diversificación (Booth y Fama, 1992)." }
  ],
  lecturas: [
    { t: "Portfolio Selection", a: "Harry Markowitz, Journal of Finance, 1952", n: "El artículo fundacional. Sorprendentemente corto." },
    { t: "Have Individual Stocks Become More Volatile?", a: "Campbell, Lettau, Malkiel y Xu, Journal of Finance, 2001" },
    { t: "Diversification Returns and Asset Contributions", a: "David Booth y Eugene Fama, Financial Analysts Journal, 1992" },
    { t: "Informe del Senado de EE. UU. sobre Enron y los planes 401(k)", a: "Senate Hearing 107-464, 2002", n: "Contexto del caso." }
  ]
});


/* ---- l05.js ---- */
LECCIONES.push({
  id: "b2-l5", num: "2.5",
  titulo: "Correlación: por qué cambia y cuándo falla",
  resumen: "Toda la diversificación depende de la correlación, y la correlación no es una constante: se mide con mucho error, sube en las crisis y cambia de signo según el régimen de inflación. Entre 2000 y 2020 bolsa y bonos se compensaban; desde 2022, con inflación alta, tienden a caer juntos. Saber por qué ocurre es saber cuándo puedes contar con tus bonos.",
  esencial: `
La **correlación** va de −1 a +1 e indica si dos activos tienden a moverse en la misma dirección (+), en direcciones opuestas (−) o sin relación (0). La lección 2.4 mostró que cuanto menor es, más reduce el riesgo una cartera mezclada.

**El problema: la correlación cambia**
1. **Sube en las crisis.** En los pánicos casi todos los activos de riesgo caen a la vez: acciones de todos los países, bonos de empresas, materias primas. La diversificación funciona peor justo cuando más falta hace.
2. **Depende del tipo de shock.** Cuando el problema es de **crecimiento** (recesión, crisis financiera), la bolsa cae y los bonos del Estado suben porque se esperan bajadas de tipos: correlación negativa, los bonos te protegen. Cuando el problema es de **inflación**, los bancos centrales suben tipos y caen las dos cosas: correlación positiva, los bonos no te protegen.
3. **Se mide con mucho error.** Con cinco años de datos mensuales, una correlación estimada de 0,3 puede ser en realidad cualquier cosa entre 0,05 y 0,51.

**Lo que pasó**
- De 2000 a 2020, con inflación baja, bolsa y bonos del Estado tuvieron correlación negativa casi siempre. La cartera 60/40 funcionaba de maravilla.
- En **2022**, con la inflación disparada, cayeron los dos: una cartera 60/40 estadounidense perdió en torno a un **16 %**, uno de sus peores años en un siglo.
- En **2026**, con la crisis energética por la guerra en Irán y la inflación otra vez al alza, bolsa y bonos estadounidenses se han movido en la misma dirección en **tres de cada cuatro sesiones**, según eToro.

**Qué hacer**: no dar por hecho que los bonos siempre protegen. Tener también algo de liquidez (que no cae con la inflación, aunque la pierde frente a ella), bonos cortos y ligados a la inflación, y aceptar que en algunos años no habrá dónde esconderse.
`,
  entender: `
#### La correlación de la cartera 60/40 cambia su riesgo
Acciones con volatilidad del 16 % y bonos con volatilidad del 7 %, 60/40:

| Correlación bolsa–bonos | Volatilidad de la cartera |
|---|---|
| −0,3 (régimen 2000–2020) | 9,2 % |
| 0 | 10,0 % |
| +0,5 (régimen de inflación) | 11,3 % |

La misma cartera, con los mismos activos, es un 23 % más volátil en un régimen que en otro. Y lo importante no es la media, sino qué pasa en los meses malos:

| Escenario de un año malo | Acciones | Bonos | Cartera 60/40 |
|---|---|---|---|
| Crisis de crecimiento | −20 % | +5 % | **−10 %** |
| Crisis de inflación | −20 % | −12 % | **−16,8 %** |

#### Por qué cambia el signo: la intuición
El precio de una acción descuenta beneficios futuros con un tipo de interés (lección 1.2); el de un bono, pagos fijos con el mismo tipo. Los dos dependen del tipo, pero la acción además depende del crecimiento.
- Si lo que se mueve es sobre todo el **crecimiento esperado**: peor crecimiento → menos beneficios (la bolsa cae) y bajadas de tipos (los bonos suben). Correlación negativa.
- Si lo que se mueve es sobre todo la **inflación y los tipos**: más inflación → tipos más altos → caen los dos. Correlación positiva.

Por eso la correlación bolsa–bonos fue positiva durante buena parte de los años 70, 80 y 90, negativa entre 2000 y 2020 y ha vuelto a ser positiva desde 2021–2022. Morningstar calcula que, desde 1960, la correlación media ha sido de apenas **0,08**, y que las correlaciones a tres años fueron sistemáticamente negativas (o casi cero) entre noviembre de 2000 y 2020. Ese periodo, que muchos inversores tomaron como «normal», fue la excepción.

#### Diversificar entre países: menos de lo que parece
- Las bolsas de los países desarrollados tienen correlaciones altas entre sí (habitualmente de 0,6 a 0,9) y más altas en las caídas.
- Aun así, diversificar entre países protege de lo peor: el riesgo de que **tu** país tenga décadas malas (Japón desde 1990, España de 2007 a 2025 en precio).
- El **sesgo local** (*home bias*): French y Poterba (1991) mostraron que los inversores tienen muchísimo más en su propio país de lo que justificaría su peso en el mundo. España pesa menos del 1 % de la bolsa mundial.
`,
  fondo: `
#### 1. El error de medir correlaciones
El error típico de una correlación estimada con n observaciones es aproximadamente (1 − ρ²) / √n. Un intervalo más preciso usa la transformación de Fisher, z = atanh(ρ), cuyo error típico es 1 / √(n − 3):

| Datos | Correlación medida | Intervalo al 95 % |
|---|---|---|
| 36 meses | 0,3 | de 0,00 a 0,60 (aprox.) |
| 60 meses | 0,3 | de 0,05 a 0,51 (Fisher) |
| 120 meses | 0,3 | de 0,14 a 0,46 (aprox.) |

Con los datos que tiene un inversor normal, las correlaciones son muy imprecisas. Además, la correlación mide solo la relación **lineal media**; dos activos pueden tener correlación baja en general y moverse juntos en los extremos (lo que la estadística llama **dependencia en las colas**, que se modela con cópulas).

#### 2. ¿Suben las correlaciones en las crisis o lo parece?
Longin y Solnik (2001), con la teoría de valores extremos, encontraron que la correlación entre bolsas internacionales sube en los mercados bajistas, no en los alcistas. Ang y Chen (2002) encontraron lo mismo entre acciones estadounidenses: la correlación con el mercado es mayor en las caídas.

Pero hay una trampa estadística: Forbes y Rigobon (2002) mostraron que, cuando la volatilidad sube, la correlación medida sube **mecánicamente** aunque la relación de fondo no cambie. Si la correlación «normal» es 0,4 y la volatilidad del mercado se multiplica por 2, la correlación condicionada que se mide pasa a ≈ 0,66; si se multiplica por 3, a ≈ 0,79. Su conclusión, «no hay contagio, solo interdependencia», es un debate todavía abierto. Para el inversor, las dos lecturas llevan a lo mismo: **en las crisis, cuenta con correlaciones altas**.

#### 3. Los determinantes de la correlación bolsa–bonos
La literatura (Campbell, Sunderam y Viceira, entre otros) relaciona el signo de la correlación con:
- **El nivel y la incertidumbre de la inflación**: varios estudios sitúan el umbral en una inflación subyacente persistente por encima del 2,5–3 %. Por encima, la correlación tiende a ser positiva.
- **La credibilidad del banco central**: si el mercado confía en que la inflación volverá al objetivo, los bonos recuperan su papel de refugio.
- **El tipo de shocks dominantes**: de demanda (correlación negativa) o de oferta (positiva).
- **La política fiscal**: con déficits altos, los bonos pueden caer por exceso de oferta en momentos de tensión.

#### 4. La consecuencia para la frontera eficiente
Con correlación negativa, añadir bonos a una cartera de acciones reduce mucho el riesgo; con correlación positiva, la «frontera eficiente» se aplana: los bonos siguen diversificando algo, pero menos. Gestoras como Janus Henderson o J.P. Morgan sostienen en 2026 que la correlación positiva puede ser más persistente de lo que se pensaba y recomiendan buscar otros diversificadores. Otras gestoras esperan que vuelva a ser negativa a largo plazo, cuando la inflación se modere. Es una de las grandes preguntas abiertas para los próximos años (bloque 9).

#### 5. La correlación no es la única medida de diversificación
Dos activos con correlación cero pueden caer juntos en el peor día. Y un activo con correlación positiva media puede protegerte en las crisis si su relación cambia justo entonces (el oro en algunos pánicos). Lo que importa es el comportamiento **condicionado a los escenarios malos**. Por eso conviene complementar las correlaciones con **escenarios de estrés**: qué haría tu cartera en 2008, en 2020, en 2022.
`,
  caso: {
    titulo: "2022 y 2026: cuando los bonos dejan de proteger",
    md: `
**2022.** Con la inflación en máximos de 40 años y la Reserva Federal subiendo tipos a toda velocidad:
- El índice de bonos estadounidenses Bloomberg US Aggregate perdió alrededor de un **13 %**, su peor año desde que existe (1976); antes, su peor año había sido 1994, con −2,9 %.
- El bono del Tesoro a 10 años cayó un 17,8 %, su peor año registrado.
- Una cartera 60/40 estadounidense perdió en torno a un **16 %** según J.P. Morgan, uno de sus peores años desde los años treinta. Una 40/60 perdió casi lo mismo: con los dos activos cayendo, cambiar el reparto apenas ayudaba.

Compáralo con 2008: la bolsa cayó un 37 %, pero el bono a 10 años subió un 20 %, y la 60/40 se dejó un 14 %. La caída de la bolsa fue mucho mayor; la protección, también.

**2026.** Con la guerra en Irán disparando el precio de la energía, la correlación ha vuelto a ser positiva: según eToro, bolsa y bonos del Tesoro estadounidense se han movido juntos en tres de cada cuatro sesiones del año. J.P. Morgan, en sus previsiones a largo plazo publicadas en octubre, advierte de que las correlaciones más altas entre acciones y bonos obligan a diversificar más allá de la cartera 60/40.

> Lo que enseña: los bonos del Estado son un gran seguro contra recesiones y crisis financieras, y uno malo contra la inflación. Antes de contar con ellos, pregúntate de qué tipo es el riesgo que temes.
`
  },
  ejercicios: [
    {
      t: "El error de una correlación",
      p: `
Calculas con 60 meses de datos que la correlación entre dos fondos es 0,3. Usa la transformación de Fisher para obtener un intervalo de confianza del 95 %. ¿Podrías descartar que la correlación real sea 0? ¿Y que sea 0,5?
`,
      s: `
1. **Transformación**: z = atanh(0,3) = **0,310**. Error típico: 1 / √(60 − 3) = **0,132**.
2. **Intervalo en z**: 0,310 ± 1,96 × 0,132 = de 0,050 a 0,569.
3. **Volviendo a correlaciones** (tanh): de **0,05 a 0,51**.
4. Con ese dato no puedes descartar ni una correlación casi nula ni una de 0,5. Para decisiones de cartera, usa correlaciones redondas y prudentes, no la cifra exacta de un periodo.
`
    },
    {
      t: "La misma 60/40 en dos regímenes",
      p: `
Acciones con volatilidad del 16 % y bonos del 7 %. Calcula la volatilidad de una cartera 60/40 con correlación −0,3 y con +0,5. Después, calcula el resultado de la cartera en un año en que la bolsa cae un 20 % si los bonos suben un 5 % o si caen un 12 %.
`,
      s: `
1. **Base**: 0,36 × 0,0256 + 0,16 × 0,0049 = 0,009216 + 0,000784 = 0,0100. Término cruzado: 2 × 0,6 × 0,4 × ρ × 0,16 × 0,07 = 0,005376·ρ.
2. **ρ = −0,3**: √(0,0100 − 0,0016) = **9,2 %**. **ρ = +0,5**: √(0,0100 + 0,0027) = **11,3 %**.
3. **Bonos +5 %**: 0,6 × (−20 %) + 0,4 × 5 % = **−10 %**.
4. **Bonos −12 %**: 0,6 × (−20 %) + 0,4 × (−12 %) = **−16,8 %**.
5. La parte de bonos pasa de amortiguar a sumar pérdidas. 2022 se pareció al segundo caso.
`
    },
    {
      t: "La correlación que sube sola",
      p: `
Según Forbes y Rigobon, si la correlación normal entre dos mercados es ρ y la varianza del mercado de origen se multiplica por (1 + δ), la correlación medida en ese periodo es ρ·√(1 + δ) / √(1 + δ·ρ²). Con ρ = 0,4, calcula la correlación medida si la volatilidad se duplica y si se triplica.
`,
      s: `
1. **Volatilidad ×2** → varianza ×4 → δ = 3. Correlación: 0,4 × √4 / √(1 + 3 × 0,16) = 0,8 / √1,48 = **0,66**.
2. **Volatilidad ×3** → varianza ×9 → δ = 8. Correlación: 0,4 × 3 / √(1 + 8 × 0,16) = 1,2 / √2,28 = **0,79**.
3. Sin que cambie la relación de fondo, la correlación medida en la crisis casi se duplica. Venga de un contagio real o de este efecto estadístico, en la práctica tu cartera sufre igual.
`
    }
  ],
  errores: [
    "Suponer que la correlación de los últimos años se mantendrá siempre.",
    "Creer que los bonos del Estado protegen de cualquier caída de la bolsa.",
    "Confundir tener fondos de muchos países con estar muy diversificado: las bolsas desarrolladas se mueven bastante juntas.",
    "Calcular correlaciones con pocos años y tomarlas como exactas.",
    "Concentrar la cartera en el propio país por familiaridad (sesgo local)."
  ],
  test: [
    { p: "¿Cuándo suelen caer a la vez bolsa y bonos del Estado?", o: ["En las recesiones con inflación baja", "En los episodios de inflación alta y subidas de tipos", "Nunca"], c: 1, e: "Con shocks de inflación, la correlación tiende a ser positiva." },
    { p: "En 2022, una cartera 60/40 estadounidense perdió aproximadamente…", o: ["Un 3 %", "Un 16 %", "Un 40 %"], c: 1, e: "Uno de sus peores años en un siglo, porque bonos y bolsa cayeron a la vez." },
    { p: "Con 60 meses de datos, una correlación medida de 0,3 tiene un intervalo del 95 % de aproximadamente…", o: ["0,28–0,32", "0,05–0,51", "−0,9 a 0,9"], c: 1, e: "Transformación de Fisher: las correlaciones se miden con mucho error." },
    { p: "¿Qué señalaron Forbes y Rigobon (2002)?", o: ["Que la correlación medida sube mecánicamente cuando sube la volatilidad", "Que las bolsas no están correlacionadas", "Que el oro siempre protege"], c: 0, e: "«No hay contagio, solo interdependencia»: un debate abierto." },
    { p: "Desde 1960, según Morningstar, la correlación media entre acciones y bonos ha sido…", o: ["De −0,5", "De 0,08", "De 0,8"], c: 1, e: "El periodo 2000–2020, con correlación negativa, fue la excepción." }
  ],
  lecturas: [
    { t: "Extreme Correlation of International Equity Markets", a: "François Longin y Bruno Solnik, Journal of Finance, 2001" },
    { t: "No Contagion, Only Interdependence", a: "Kristin Forbes y Roberto Rigobon, Journal of Finance, 2002" },
    { t: "Inflation Bets or Deflation Hedges? The Changing Risks of Nominal Bonds", a: "Campbell, Sunderam y Viceira, Critical Finance Review, 2017", n: "Por qué cambia el signo de la correlación bolsa–bonos." },
    { t: "Panorama de la diversificación 2026", a: "Morningstar", n: "Datos actualizados de correlaciones entre activos." }
  ]
});


/* ---- l06.js ---- */
LECCIONES.push({
  id: "b2-l6", num: "2.6",
  titulo: "Markowitz y la frontera eficiente",
  resumen: "Markowitz convirtió la intuición de no poner todos los huevos en la misma cesta en un problema matemático: para cada nivel de riesgo, buscar la cartera con más rentabilidad esperada. El resultado es la frontera eficiente y, añadiendo un activo sin riesgo, una única cartera óptima de activos con riesgo. La teoría es preciosa; su uso directo, peligroso, porque las rentabilidades esperadas se estiman con muchísimo error.",
  esencial: `
En 1952, Harry Markowitz (Nobel en 1990) propuso mirar una cartera con solo dos números: su **rentabilidad esperada** y su **volatilidad**. Combinando activos en distintas proporciones se obtienen muchas carteras posibles; de todas ellas, las que dan **la máxima rentabilidad para cada nivel de riesgo** forman la **frontera eficiente**. Cualquier cartera por debajo de la frontera es mejorable: hay otra con el mismo riesgo y más rentabilidad, o con la misma rentabilidad y menos riesgo.

**Tres ideas que deja Markowitz**
1. Un activo no se juzga solo, sino por lo que aporta a la cartera. Un activo arriesgado puede **reducir** el riesgo total si se mueve distinto del resto.
2. No hay una cartera óptima para todo el mundo, sino una **frontera**: cada persona elige su punto según cuánto riesgo puede y quiere asumir (lección 0.8).
3. Si además existe un activo sin riesgo (Letras), James Tobin (1958) mostró que **todo el mundo debería tener la misma mezcla de activos con riesgo** y ajustar su riesgo solo con cuánta liquidez añade. Es la base de la gestión indexada (bloque 3).

**El gran problema: los datos de entrada.** La frontera necesita rentabilidades esperadas, volatilidades y correlaciones del **futuro**. Las volatilidades y correlaciones se estiman razonablemente; las rentabilidades esperadas, fatal. Para conocer la rentabilidad media de la bolsa con un margen de ±1 punto harían falta casi mil años de datos. Un optimizador con datos malos produce carteras extremas y absurdas: los profesionales lo llaman un «maximizador de errores».

**En la práctica**: la teoría sirve para entender por qué diversificar y cómo pensar el riesgo de la cartera; para fijar pesos concretos funcionan mejor reglas sencillas y robustas (el mercado, pesos iguales o un reparto acciones/bonos según tu perfil). El propio Markowitz contó que, para su plan de jubilación, repartió el dinero a medias entre acciones y bonos para minimizar su arrepentimiento futuro.
`,
  entender: `
#### Construir una frontera con números de hoy
En octubre de 2026, J.P. Morgan publicó sus previsiones a 10–15 años: un **7,5 %** anual para la bolsa grande estadounidense y un **4,6 %** para los bonos del Tesoro de plazo medio. Usémoslas con unas volatilidades orientativas (16 % y 5 %), una correlación de 0,2 y un tipo sin riesgo del 3 %:

| % en acciones | Rentabilidad esperada | Volatilidad | Sharpe |
|---|---|---|---|
| 0 % | 4,60 % | 5,0 % | 0,32 |
| 20 % | 5,18 % | 5,6 % | **0,39** |
| 40 % | 5,76 % | 7,6 % | 0,36 |
| 60 % | 6,34 % | 10,2 % | 0,33 |
| 80 % | 6,92 % | 13,0 % | 0,30 |
| 100 % | 7,50 % | 16,0 % | 0,28 |

- La **cartera de mínima varianza** tiene solo un 3,6 % en acciones: volatilidad del 4,97 %, por debajo de la de los bonos solos.
- La de **máximo Sharpe** (cartera tangente) tiene un **20,5 %** en acciones.

#### La línea del mercado de capitales
Si combinas la cartera tangente con liquidez (o te endeudas para comprar más), te mueves por una recta que sale del tipo sin riesgo:

$$ rentabilidad = rf + Sharpe de la tangente × volatilidad elegida

Con Sharpe 0,39: para una volatilidad del 10,2 % (la de la 60/40), la rentabilidad sería 3 % + 0,389 × 10,2 % = **6,97 %**, frente al 6,34 % de la 60/40. Es decir, **con estos datos**, apalancar una cartera muy cargada de bonos da más rentabilidad por el mismo riesgo que subir el peso de la bolsa. Esta es exactamente la lógica de la «paridad de riesgo» (lección 2.10), y también de algunas anomalías (lección 2.7).

#### Lo sensible que es al dato de rentabilidad
| Rentabilidad esperada de la bolsa | % de acciones en la cartera tangente |
|---|---|
| 6,5 % | 14,9 % |
| 7,5 % | 20,5 % |
| 8,5 % | 25,8 % |

Cambiar un punto la previsión cambia en más de 5 puntos el peso óptimo; con más activos, los cambios son muchísimo mayores, y los pesos saltan de un extremo a otro.
`,
  fondo: `
#### 1. La formulación
Para n activos con vector de rentabilidades esperadas μ, matriz de covarianzas Σ y pesos w que suman 1, Markowitz plantea:

$$ minimizar  wᵀ·Σ·w   sujeto a   wᵀ·μ = objetivo   y   wᵀ·1 = 1

La solución sin restricciones de signo tiene forma cerrada; con prohibición de posiciones cortas se resuelve numéricamente (programación cuadrática). Con un activo sin riesgo, la cartera tangente es proporcional a **Σ⁻¹·(μ − rf)**: la inversa de la matriz de covarianzas multiplicando las rentabilidades extra. Ahí está el problema: invertir una matriz grande y mal estimada amplifica los errores.

Para dos activos, el peso de la cartera de mínima varianza es:

$$ w₁ = (σ₂² − ρ·σ₁·σ₂) / (σ₁² + σ₂² − 2·ρ·σ₁·σ₂)

#### 2. Por qué las rentabilidades esperadas son tan difíciles de estimar
Robert Merton (1980) mostró que la volatilidad se estima mejor cuanto más frecuentes son los datos, pero la **media no**: solo mejora con más años. Con volatilidad del 16 %, el error típico de la media estimada con T años es 16 % / √T:
- para ±1 punto con un 95 % de confianza: (1,96 × 16 / 1)² ≈ **983 años**;
- para ±2 puntos: ≈ **246 años**.

Chopra y Ziemba (1993) cuantificaron que, para el optimizador, los errores en las medias pesan unas diez veces más que los errores en las varianzas, y estas unas dos veces más que los errores en las covarianzas.

#### 3. El optimizador como maximizador de errores
Richard Michaud (1989) lo bautizó así: el algoritmo sobrepondera justo los activos cuya rentabilidad se ha sobreestimado y cuya volatilidad se ha subestimado, porque parecen los mejores. Resultado: carteras concentradas, inestables y que en la práctica rinden peor de lo que prometen. Soluciones propuestas:
- **Black y Litterman (1992)**: partir de las rentabilidades que hacen óptima la cartera de mercado (las que «implica» el equilibrio) y solo desviarse en la medida de la confianza en tus opiniones.
- **Reducir el ruido** (*shrinkage*): Ledoit y Wolf (2004) mezclan la matriz estimada con una estructura más simple.
- **Restricciones**: límites de peso mínimo y máximo por activo.
- **Remuestreo**: Michaud promedia fronteras calculadas sobre muchos datos simulados.

#### 4. ¿Bate la optimización a repartir a partes iguales?
DeMiguel, Garlappi y Uppal (2009) compararon 14 modelos de optimización con la regla ingenua de **pesos iguales (1/N)** en siete conjuntos de datos. Ninguno la batió de forma consistente fuera de la muestra en Sharpe. Calcularon que, para que la optimización compensara con 25 activos, harían falta unos **3.000 meses** (250 años) de datos. No significa que 1/N sea óptimo, sino que el error de estimación se come la ventaja teórica.

#### 5. Lo que queda en pie
- **La separación de Tobin**: tiene sentido una cartera de riesgo común muy diversificada (el mercado) y ajustar el riesgo con el reparto entre ella y activos seguros.
- **Pensar en contribuciones al riesgo**, no en pesos (lección 2.10).
- **El marco media–varianza** es incompleto (ignora asimetrías y colas, lección 2.2) y estático (un solo periodo), pero sigue siendo el idioma común de la gestión de carteras. Su extensión natural es el CAPM (lección 2.7).
`,
  caso: {
    titulo: "Las previsiones de J.P. Morgan para 2027–2041",
    md: `
J.P. Morgan Asset Management publica cada año sus previsiones a largo plazo (*Long-Term Capital Market Assumptions*), con rentabilidades esperadas, volatilidades y correlaciones para más de 200 activos. Muchos inversores institucionales las usan como datos de entrada para su optimización. La edición publicada el 19 de octubre de 2026 prevé, a 10–15 años y en dólares:

| Activo | Rentabilidad anual esperada |
|---|---|
| Cartera 60/40 global | **7,0 %** (frente al 6,4 % de la edición anterior) |
| Bolsa grande de EE. UU. | 7,5 % (desde 6,7 %) |
| Bonos del Tesoro a plazo medio | 4,6 % |
| Bonos globales agregados | 5,3 %, la cifra más alta en dos décadas |
| *High yield* estadounidense | 6,7 % |
| Cartera 60/40 con un 30 % en alternativos | 7,5 %, con un Sharpe un 21 % mayor |

El informe advierte de que unas correlaciones más altas entre acciones y bonos obligan a diversificar más allá de la cartera clásica, y de riesgos como que la inversión en inteligencia artificial no produzca las ganancias de productividad esperadas.

Fíjate en el cambio de un año a otro: la previsión para la bolsa estadounidense subió 0,8 puntos. Con el ejemplo de este capítulo, eso cambia el peso óptimo de acciones varios puntos. Si se reoptimizara la cartera cada año con cada nueva previsión, se compraría y vendería mucho por cambios que están muy por debajo del margen de error.

> Lo que enseña: las previsiones de las grandes gestoras son útiles como orden de magnitud y como referencia de lo que piensa el mercado, pero usarlas como datos exactos en un optimizador es tomarse demasiado en serio cifras que nadie puede estimar con precisión.
`
  },
  ejercicios: [
    {
      t: "La cartera de mínima varianza",
      p: `
Acciones: volatilidad del 16 %. Bonos: 5 %. Correlación: 0,2. Calcula el peso en acciones de la cartera de mínima varianza y su volatilidad. ¿Por qué es menor que la de los bonos solos?
`,
      s: `
1. Covarianza: 0,2 × 0,16 × 0,05 = 0,0016.
2. **Peso en acciones**: (0,05² − 0,0016) / (0,16² + 0,05² − 2 × 0,0016) = (0,0025 − 0,0016) / (0,0256 + 0,0025 − 0,0032) = 0,0009 / 0,0249 = **3,6 %**.
3. **Volatilidad**: con 3,6 % en acciones y 96,4 % en bonos, ≈ **4,97 %**.
4. Es menor que el 5 % de los bonos porque una pequeña dosis de un activo poco correlacionado reduce el riesgo total aunque ese activo sea mucho más volátil. Es la diversificación en estado puro.
`
    },
    {
      t: "Apalancar o subir la bolsa",
      p: `
Con los datos del apartado «Entenderlo» (acciones 7,5 % y 16 %; bonos 4,6 % y 5 %; correlación 0,2; tipo sin riesgo 3 %), la cartera tangente tiene un 20,5 % en acciones, una rentabilidad del 5,19 % y una volatilidad del 5,63 %. Un inversor quiere una volatilidad del 10,2 %. Compara la 60/40 con la cartera tangente apalancada.
`,
      s: `
1. **60/40**: rentabilidad 0,6 × 7,5 + 0,4 × 4,6 = **6,34 %**, volatilidad **10,2 %**, Sharpe 0,33.
2. **Sharpe de la tangente**: (5,19 − 3) / 5,63 = **0,389**.
3. **Apalancamiento necesario**: 10,2 / 5,63 = **1,81 veces**: por cada 100 €, 181 € en la cartera tangente con 81 € prestados al 3 %.
4. **Rentabilidad**: 3 % + 0,389 × 10,2 % = **6,97 %**, unos 0,6 puntos más que la 60/40 con el mismo riesgo.
5. Pero exige poder endeudarse al tipo sin riesgo y soportar el riesgo de que los bonos caigan (como en 2022). Por eso la mayoría de inversores, que no se apalancan, acaban con más bolsa que la que recomendaría la teoría.
`
    },
    {
      t: "¿Cuántos años de datos?",
      p: `
La bolsa tiene una volatilidad anual del 16 %. ¿Cuántos años de datos necesitas para estimar su rentabilidad media con un margen de ±1 punto (95 % de confianza)? ¿Y de ±2 puntos? ¿Qué implica para usar la rentabilidad histórica en un optimizador?
`,
      s: `
1. El error típico de la media con T años es σ / √T. Queremos 1,96 × 16 % / √T = 1 % → √T = 31,4 → **T ≈ 983 años**.
2. Para ±2 puntos: (1,96 × 16 / 2)² ≈ **246 años**.
3. Ningún mercado tiene esos datos en condiciones comparables. Cualquier rentabilidad esperada que metas en un optimizador tiene un margen de error de varios puntos, más que la diferencia entre la mayoría de activos. Mejor partir del equilibrio (Black-Litterman) o de reglas robustas.
`
    }
  ],
  errores: [
    "Meter rentabilidades históricas en un optimizador y fiarse de los pesos que salen.",
    "Reoptimizar la cartera cada vez que cambian las previsiones.",
    "Juzgar un activo por su riesgo aislado y no por lo que aporta a la cartera.",
    "Olvidar que la frontera eficiente depende de correlaciones que cambian (lección 2.5).",
    "Creer que la cartera teóricamente óptima es alcanzable sin apalancamiento."
  ],
  test: [
    { p: "¿Qué es la frontera eficiente?", o: ["Las carteras con máxima rentabilidad para cada nivel de riesgo", "Las carteras sin riesgo", "Las carteras más diversificadas por número de activos"], c: 0, e: "Cualquier cartera por debajo es mejorable." },
    { p: "¿Qué mostró Tobin (1958) al añadir un activo sin riesgo?", o: ["Que cada inversor necesita una cartera de riesgo distinta", "Que todos deberían tener la misma cartera de riesgo y ajustar con liquidez", "Que no hay que tener bonos"], c: 1, e: "Es el teorema de separación, base de la indexación." },
    { p: "¿Por qué se dice que un optimizador es un «maximizador de errores»?", o: ["Porque es lento", "Porque sobrepondera los activos cuya rentabilidad se ha sobreestimado", "Porque no usa correlaciones"], c: 1, e: "Michaud (1989): concentra justo donde más se equivoca." },
    { p: "Para estimar la rentabilidad media de la bolsa con ±1 punto (95 %) harían falta unos…", o: ["30 años", "100 años", "980 años"], c: 2, e: "(1,96 × 16)² ≈ 983." },
    { p: "DeMiguel, Garlappi y Uppal (2009) encontraron que…", o: ["La optimización siempre gana", "Ningún modelo batía de forma consistente a la regla de pesos iguales", "Los pesos iguales siempre pierden"], c: 1, e: "El error de estimación se come la ventaja teórica." }
  ],
  lecturas: [
    { t: "Portfolio Selection", a: "Harry Markowitz, Journal of Finance, 1952" },
    { t: "Optimal Versus Naive Diversification: How Inefficient Is the 1/N Portfolio Strategy?", a: "DeMiguel, Garlappi y Uppal, Review of Financial Studies, 2009" },
    { t: "Global Portfolio Optimization", a: "Fischer Black y Robert Litterman, Financial Analysts Journal, 1992" },
    { t: "Long-Term Capital Market Assumptions 2027", a: "J.P. Morgan Asset Management", n: "Previsiones a 10–15 años, con resumen público." }
  ]
});


/* ---- l07.js ---- */
LECCIONES.push({
  id: "b2-l7", num: "2.7",
  titulo: "CAPM y beta: qué riesgo paga el mercado",
  resumen: "Si todo el mundo diversifica, el riesgo propio de cada empresa desaparece y solo queda el riesgo de mercado. El CAPM concluye que la rentabilidad esperada de un activo depende únicamente de su beta: cuánto se mueve con el mercado. Es la idea más influyente de las finanzas y, a la vez, una que los datos no confirman bien: las acciones de beta baja han rendido más de lo que el modelo predice.",
  esencial: `
**La beta** mide cuánto se mueve un activo cuando se mueve el mercado:
- **Beta 1**: se mueve como el mercado. Si la bolsa cae un 10 %, cae de media un 10 %.
- **Beta 1,5**: amplifica. Si la bolsa cae un 10 %, cae de media un 15 %. Suelen ser tecnológicas, semiconductores, pequeñas empresas cíclicas.
- **Beta 0,5**: amortigua. Eléctricas, alimentación, productos de consumo básico.
- **Beta 0 o negativa**: no se mueve con la bolsa o va al revés (letras, a veces el oro o los bonos del Estado).

**El CAPM** (modelo de valoración de activos de capital), desarrollado por William Sharpe (1964), John Lintner y otros, parte de la lección 2.4: si los inversores diversifican, el riesgo específico de cada empresa se diluye y **el mercado solo paga por el riesgo que no se puede diversificar**, el de mercado. Su fórmula:

$$ rentabilidad esperada = tipo sin riesgo + beta × prima de mercado

Con un tipo sin riesgo del 3 % y una prima de mercado del 4,5 %, una acción de beta 0,6 debería rendir un 5,7 %; una de beta 1,6, un 10,2 %.

**Para qué sirve en la práctica**
- Para entender el riesgo de una acción o un fondo: ¿cuánto de su movimiento es simplemente «mercado»?
- Para calcular el **alfa** de un gestor: lo que rinde por encima de lo que «tocaba» por su beta. Un fondo que gana más que el índice solo porque tiene beta 1,3 no tiene mérito: ha asumido más riesgo de mercado.
- Para estimar el coste del capital de una empresa al valorarla (bloque 4).

**Su gran problema**: los datos no lo confirman bien. Las acciones de beta alta **no** han rendido tanto más como predice el modelo, y las de beta baja han rendido más. Es la llamada **anomalía de baja volatilidad**, una de las más estudiadas.
`,
  entender: `
#### Calcular una beta
La beta es la pendiente de una regresión de las rentabilidades del activo sobre las del mercado:

$$ β = covarianza(activo, mercado) / varianza(mercado) = ρ · σ activo / σ mercado

Una acción con volatilidad del 40 % y correlación de 0,7 con un mercado de volatilidad del 16 % tiene beta 0,7 × 40 / 16 = **1,75**. Su **R²** (la parte de su varianza explicada por el mercado) es 0,7² = **49 %**; el otro 51 % es riesgo específico, una volatilidad propia de unos 28,6 % al año que la diversificación elimina.

#### Beta y volatilidad no son lo mismo
- Una minera de oro puede tener una volatilidad del 45 % y una beta de 0,5: se mueve mucho, pero por su cuenta.
- Un fondo indexado al S&P 500 tiene volatilidad del 16 % y beta 1 frente a ese índice.
- Para un activo que va a ser una parte pequeña de una cartera diversificada, importa su beta; si es toda tu cartera, importa su volatilidad.

#### La línea del mercado de valores
El CAPM dibuja una recta: rentabilidad esperada en el eje vertical, beta en el horizontal. Con tipo sin riesgo del 3 % y prima del 4,5 %:

| Beta | Rentabilidad esperada según el CAPM |
|---|---|
| 0 | 3,0 % |
| 0,6 | 5,7 % |
| 1,0 | 7,5 % |
| 1,6 | 10,2 % |

Un activo por encima de la recta tiene **alfa positivo** (rinde más de lo que justifica su riesgo de mercado); por debajo, negativo.

#### Descomponer la rentabilidad de un fondo
Un fondo ganó un 12 % con beta 1,2 un año en que el mercado ganó un 10 % y las Letras un 3 %:
- Lo que «tocaba»: 3 % + 1,2 × (10 % − 3 %) = **11,4 %**.
- **Alfa**: 12 % − 11,4 % = **+0,6 puntos**.

Dos tercios de la ventaja aparente sobre el índice (2 puntos) se explican por haber asumido más riesgo de mercado.
`,
  fondo: `
#### 1. De Markowitz al CAPM
Si todos los inversores usan el marco media–varianza, tienen las mismas previsiones y pueden prestar y pedir prestado al tipo sin riesgo, todos tienen la misma cartera tangente (Tobin, lección 2.6). En equilibrio, esa cartera tiene que ser **la cartera de mercado** (todos los activos, ponderados por su valor). De ahí, Sharpe (1964), Lintner (1965) y Mossin (1966), con aportaciones previas de Treynor, dedujeron la relación lineal entre rentabilidad esperada y beta. Sharpe recibió el Nobel en 1990 junto a Markowitz y Merton Miller.

La intuición: lo que un activo aporta al riesgo de la cartera de mercado es su covarianza con ella, y eso es lo que hay que compensar. El riesgo que no se mueve con el mercado se diversifica y, por tanto, no se paga.

#### 2. Lo que dicen los datos
- **Black, Jensen y Scholes (1972)** y **Fama y MacBeth (1973)**: la relación entre beta y rentabilidad era positiva, pero **demasiado plana**: las acciones de beta baja rendían más y las de beta alta menos de lo previsto.
- **Fama y French (1992)**: en los datos de 1963–1990, una vez tenidos en cuenta el tamaño y la ratio valor contable/precio, la beta **no explicaba** las diferencias de rentabilidad entre acciones. «La beta ha muerto», tituló la prensa.
- **Anomalía de baja volatilidad**: Haugen y Heins (1975) ya lo vieron, y Baker, Bradley y Wurgler (2011) lo documentaron de nuevo: las carteras de acciones menos volátiles han tenido rentabilidades parecidas o mayores que las más volátiles, con mucho menos riesgo.

#### 3. Por qué podría pasar: restricciones al apalancamiento
Frazzini y Pedersen (2014) propusieron una explicación elegante, conectada con la lección 2.6: muchos inversores (particulares, fondos de pensiones, fondos de inversión) **no pueden o no quieren endeudarse**. Si quieren más rentabilidad, en vez de apalancar una cartera eficiente, compran acciones de beta alta. Esa demanda extra encarece las acciones de beta alta y abarata las de beta baja, aplanando la recta. Construyeron un factor «apostar contra la beta» (*betting against beta*: comprar beta baja apalancada y vender beta alta) que ha tenido rentabilidades positivas en muchos mercados y clases de activos. Otras explicaciones son de comportamiento: la preferencia por las acciones tipo «lotería» (con pequeñas probabilidades de enormes subidas) y el exceso de confianza.

#### 4. La crítica de Roll (1977)
Richard Roll señaló que el CAPM no se puede contrastar de verdad: la «cartera de mercado» teórica incluye **todos** los activos (inmuebles, capital humano, empresas no cotizadas…), y en los estudios se usa un índice bursátil como aproximación. Si el índice no es eficiente en media–varianza, los resultados no dicen nada sobre el modelo. Es un recordatorio de que «el mercado» es más grande que la bolsa.

#### 5. Estimar la beta: más difícil de lo que parece
- Cambia según el periodo, la frecuencia de los datos y el índice de referencia.
- Tiende a volver hacia 1 con el tiempo. Marshall Blume (1971) propuso ajustarla: β ajustada ≈ 0,67 × β estimada + 0,33. Una beta medida de 1,75 se ajusta a ≈ **1,50**.
- En empresas poco líquidas, la beta con datos diarios se subestima (sus precios reaccionan con retraso). Se corrige con datos semanales o mensuales.

#### 6. Entonces, ¿sirve o no?
El CAPM falla como descripción precisa de las rentabilidades, pero su idea central sigue siendo correcta y útil: **el riesgo diversificable no se paga**, y hay que distinguir la rentabilidad que viene de asumir riesgo de mercado de la que viene de la habilidad. Los modelos de factores (lección 2.8) son su generalización.
`,
  caso: {
    titulo: "5 de noviembre de 2026: la beta en un solo día",
    md: `
El 5 de noviembre de 2026, dos días después de las elecciones de mitad de mandato en EE. UU., el S&P 500 cayó un **4,4 %**, su peor día desde abril de 2025, arrastrado por las acciones ligadas a la inversión en inteligencia artificial. Cómo cayó cada sector, según los fondos cotizados sectoriales:

| Fondo sectorial | Variación del día | Cociente con el S&P 500 |
|---|---|---|
| Semiconductores (SMH) | −11,2 % | 2,5 |
| Tecnología (XLK) | −8,0 % | 1,8 |
| S&P 500 | −4,4 % | 1,0 |
| Industriales (XLI) | −4,1 % | 0,9 |
| Consumo básico (XLP) | −0,8 % | 0,2 |
| Eléctricas y servicios públicos (XLU) | −0,7 % | 0,2 |

Nvidia cerró ese día con una caída del 9,3 % y más de un 25 % por debajo de su máximo del 6 de octubre. El Nasdaq entró en corrección (más de un 10 % por debajo de su récord).

Un solo día no sirve para estimar una beta (hace falta una regresión con muchos datos), pero el patrón es el que el concepto describe: los activos que más dependen del ciclo y de las expectativas amplifican los movimientos del mercado; los defensivos los amortiguan.

> Lo que enseña: conocer la beta de lo que tienes te dice cuánto vas a sufrir en una caída del mercado. Una cartera concentrada en semiconductores no es «la bolsa»: es la bolsa multiplicada por 2 o 3 en los días malos.
`
  },
  ejercicios: [
    {
      t: "Rentabilidad esperada según el CAPM",
      p: `
Con un tipo sin riesgo del 3 % y una prima de mercado del 4,5 %, calcula la rentabilidad esperada según el CAPM de una eléctrica con beta 0,6, de un fondo indexado con beta 1 y de una tecnológica con beta 1,6. Si la tecnológica cotiza a un precio que implica una rentabilidad esperada del 8 %, ¿qué dice el modelo?
`,
      s: `
1. **Eléctrica**: 3 % + 0,6 × 4,5 % = **5,7 %**.
2. **Indexado**: 3 % + 1 × 4,5 % = **7,5 %**.
3. **Tecnológica**: 3 % + 1,6 × 4,5 % = **10,2 %**.
4. Si su precio implica solo un 8 %, estaría **por debajo** de la línea: alfa esperado de −2,2 puntos. Según el CAPM, estaría cara para su riesgo de mercado. La evidencia sobre la beta (apartado «A fondo») sugiere que los inversores sí aceptan sistemáticamente rentabilidades menores en las acciones de beta alta.
`
    },
    {
      t: "Beta, R² y riesgo específico",
      p: `
Una acción tiene una volatilidad del 40 % y una correlación de 0,7 con un mercado de volatilidad del 16 %. Calcula su beta, qué parte de su varianza explica el mercado, su volatilidad específica y su beta ajustada según Blume.
`,
      s: `
1. **Beta**: 0,7 × 40 / 16 = **1,75**.
2. **R²**: 0,7² = **49 %** de la varianza es de mercado.
3. **Volatilidad específica**: 40 % × √(1 − 0,49) = **28,6 %**. Es el riesgo que se diversifica al tener muchas acciones.
4. **Beta ajustada**: 0,67 × 1,75 + 0,33 = **1,50**.
`
    },
    {
      t: "¿Tiene alfa este fondo?",
      p: `
Un fondo ganó el año pasado un 12 %. El índice ganó un 10 % y las Letras un 3 %. La beta del fondo frente al índice es 1,2. Calcula su alfa. Si el fondo cobra un 1,8 % y su alternativa indexada un 0,2 %, ¿le ha compensado al partícipe?
`,
      s: `
1. **Rentabilidad que tocaba por su beta**: 3 % + 1,2 × (10 % − 3 %) = **11,4 %**.
2. **Alfa**: 12 % − 11,4 % = **+0,6 puntos** (ya descontados sus costes, si el 12 % es neto).
3. Una alternativa indexada con beta 1,2 (por ejemplo, un indexado con algo de apalancamiento o una mezcla más agresiva) habría dado ≈ 11,4 % − 0,2 % = 11,2 %. El fondo gana por 0,8 puntos ese año.
4. Pero un año no prueba nada (lección 2.3): con un error de seguimiento típico del 4–6 %, ese alfa es indistinguible del azar.
`
    }
  ],
  errores: [
    "Atribuir al talento del gestor una rentabilidad que se explica por una beta alta.",
    "Confundir volatilidad con beta.",
    "Pensar que las acciones de beta alta rinden más a largo plazo: la evidencia dice que no tanto como predice el CAPM.",
    "Calcular una beta con pocos datos o con un índice que no representa bien el mercado del activo.",
    "Creer que una cartera de tecnológicas es «la bolsa»: su beta puede ser de 1,5 a 2,5."
  ],
  test: [
    { p: "Una acción con beta 1,5, si el mercado cae un 10 %…", o: ["Cae de media un 15 %", "Cae de media un 5 %", "Sube un 15 %"], c: 0, e: "La beta mide la sensibilidad al mercado." },
    { p: "Según el CAPM, ¿qué riesgo se paga?", o: ["El total", "Solo el sistemático (de mercado)", "Solo el específico"], c: 1, e: "El específico se diversifica gratis, así que no se remunera." },
    { p: "Con rf 3 %, prima de mercado 4,5 % y beta 1,6, el CAPM predice…", o: ["7,5 %", "10,2 %", "4,5 %"], c: 1, e: "3 % + 1,6 × 4,5 %." },
    { p: "¿Qué explicación dieron Frazzini y Pedersen (2014) a la anomalía de baja beta?", o: ["Errores contables", "Muchos inversores no pueden apalancarse y compran acciones de beta alta para buscar rentabilidad", "Los impuestos"], c: 1, e: "Esa demanda encarece la beta alta y abarata la baja." },
    { p: "El 5 de noviembre de 2026, con el S&P 500 a −4,4 %, el fondo de semiconductores SMH cayó…", o: ["Un 0,8 %", "Un 4,1 %", "Un 11,2 %"], c: 2, e: "Unas 2,5 veces el mercado; el consumo básico, solo un 0,8 %." }
  ],
  lecturas: [
    { t: "Capital Asset Prices: A Theory of Market Equilibrium under Conditions of Risk", a: "William Sharpe, Journal of Finance, 1964" },
    { t: "Betting Against Beta", a: "Andrea Frazzini y Lasse Heje Pedersen, Journal of Financial Economics, 2014" },
    { t: "Benchmarks as Limits to Arbitrage: Understanding the Low-Volatility Anomaly", a: "Baker, Bradley y Wurgler, Financial Analysts Journal, 2011" },
    { t: "The Capital Asset Pricing Model: Theory and Evidence", a: "Eugene Fama y Kenneth French, Journal of Economic Perspectives, 2004", n: "Repaso legible de por qué el CAPM falla empíricamente." }
  ]
});


/* ---- l08.js ---- */
LECCIONES.push({
  id: "b2-l8", num: "2.8",
  titulo: "Factores: más allá del mercado",
  resumen: "Además del riesgo de mercado, unas pocas características (tamaño, valor, rentabilidad, inversión, momento, baja volatilidad) han explicado durante décadas por qué unas acciones rinden más que otras. Se discute si son primas por riesgo, errores de los inversores o casualidades estadísticas. Lo seguro es que pueden pasar diez años sin funcionar y que, una vez publicados, suelen rendir bastante menos.",
  esencial: `
El CAPM (lección 2.7) dice que solo la beta explica la rentabilidad. Los datos dicen que hay más cosas. A esas características que explican sistemáticamente diferencias de rentabilidad se les llama **factores**:

| Factor | Qué compra | Idea |
|---|---|---|
| **Mercado** | Bolsa frente a liquidez | La prima de riesgo de las acciones |
| **Tamaño** | Empresas pequeñas frente a grandes | Más riesgo, menos seguimiento |
| **Valor** | Empresas baratas frente a caras (por valor contable, beneficios, flujo de caja) | Se paga poco por ellas por algún motivo |
| **Rentabilidad o calidad** | Empresas muy rentables frente a poco rentables | El mercado infravalora la persistencia de la calidad |
| **Inversión** | Empresas que invierten con prudencia frente a las que crecen a golpe de inversión | Las que más invierten suelen rendir menos después |
| **Momento** | Lo que más ha subido en el último año frente a lo que más ha bajado | Las tendencias persisten a corto plazo |
| **Baja volatilidad** | Acciones estables frente a volátiles | La anomalía de la lección 2.7 |

**Tres explicaciones posibles**, que no se excluyen:
1. **Riesgo**: son primas por asumir riesgos que duelen en los malos momentos (las empresas baratas suelen estar en apuros y caen más en recesiones).
2. **Comportamiento**: los inversores sobrerreaccionan, extrapolan o prefieren las historias de moda, y los precios se equivocan de forma predecible.
3. **Minería de datos**: con miles de investigadores probando variables, algunas «funcionan» por casualidad.

**Lo práctico**
- Hay fondos indexados y ETF de factores (valor, pequeñas, calidad, momento, mínima volatilidad), a veces llamados *smart beta*.
- Un factor puede **no funcionar durante una década**: el valor quedó por detrás del crecimiento casi todo el periodo 2010–2020 y luego tuvo años excelentes, como **2025**, cuando batió al mercado por más de 15 puntos en Europa.
- Si inviertes en factores, que sea con poco coste, muy diversificado, y con la paciencia de mantenerlo cuando lleve años yendo peor que el índice.

Para las *small caps*, la conclusión más útil: el tamaño por sí solo aporta poco; lo que ha funcionado son las pequeñas **rentables y baratas** (lección 1.3 y bloque 4).
`,
  entender: `
#### Del modelo de un factor a los de cinco
- **CAPM**: rentabilidad extra = beta × prima de mercado.
- **Fama y French, tres factores (1993)**: añaden **tamaño** (SMB: pequeñas menos grandes) y **valor** (HML: valor contable/precio alto menos bajo).
- **Carhart (1997)**: añade **momento** (ganadoras de los últimos 12 meses menos perdedoras).
- **Fama y French, cinco factores (2015)**: añaden **rentabilidad** (RMW: robustas menos débiles) e **inversión** (CMA: conservadoras menos agresivas). Con ellos, el valor queda en parte explicado por los otros dos.

La ecuación de un modelo de factores:

$$ R − rf = α + β·(Rm − rf) + s·SMB + h·HML + r·RMW + c·CMA + ε

Los coeficientes (s, h, r, c) son las **exposiciones** o cargas del fondo a cada factor; α es lo que queda sin explicar.

#### Para qué sirve: radiografiar un fondo
Un fondo «de valor de pequeñas compañías» ganó un 9 % con Letras al 3 %. Su regresión da: beta 1,0, carga de tamaño 0,4, carga de valor 0,5. Si ese año las primas fueron 5 % (mercado), 1 % (tamaño) y 2 % (valor):

| Fuente | Aportación |
|---|---|
| Tipo sin riesgo | 3,0 % |
| Mercado: 1,0 × 5 % | 5,0 % |
| Tamaño: 0,4 × 1 % | 0,4 % |
| Valor: 0,5 × 2 % | 1,0 % |
| **Explicado por factores** | **9,4 %** |
| **Alfa** | **−0,4 puntos** |

El gestor no ha aportado nada que no se pudiera conseguir con fondos de factores baratos. Así se distingue el talento de la exposición a estilos.

#### Lo que cuesta mantener un factor
Si un factor tiene una prima de 3 puntos al año y una volatilidad (frente al mercado) del 10 %, la probabilidad de que vaya peor que el mercado durante 10 años seguidos es de en torno a un **17 %**, y a 20 años de un **9 %**. Diez años es más de lo que aguanta la mayoría de inversores… y de gestores.
`,
  fondo: `
#### 1. El zoo de los factores
John Cochrane habló en 2011 de un «zoo de factores». Harvey, Liu y Zhu (2016) contaron **316 factores** publicados en revistas académicas y argumentaron que, con tantos intentos, el listón estadístico habitual (t > 2) es demasiado bajo: propusieron exigir t > 3. Con ese listón, muchos factores desaparecen. Es el mismo problema que el de un inversor que prueba muchas estrategias con datos pasados: alguna sale bien por pura suerte (**sobreajuste**). Hou, Xue y Zhang (2020) intentaron replicar 452 anomalías y la mayoría no superaba un listón exigente.

Un cálculo que ayuda a entenderlo: un factor con una prima real del 3 % anual y una volatilidad del 10 % tiene, con 20 años de datos, un estadístico t = 3 / (10 / √20) ≈ **1,34**: no significativo. Para llegar a t = 3 harían falta **100 años**. Los factores que se consideran sólidos (mercado, valor, momento) se apoyan en datos de casi un siglo y de muchos países y activos.

#### 2. ¿Qué pasa cuando se publica un factor?
McLean y Pontiff (2016) estudiaron 97 anomalías: su rentabilidad era un **26 % menor** fuera del periodo estudiado (lo que se atribuye al sobreajuste) y un **58 % menor** tras la publicación (sobreajuste más inversores que la explotan). Una prima del 6 % en el artículo se convierte, de media, en algo más de un 2,5 % después. Y a eso hay que restar los costes de llevarla a la práctica.

#### 3. Riesgo o comportamiento: el debate del valor
- **Interpretación de riesgo** (Fama y French): las empresas baratas suelen estar en apuros financieros; caen más en las crisis, justo cuando el dinero vale más. La prima compensa ese riesgo.
- **Interpretación de comportamiento** (Lakonishok, Shleifer y Vishny, 1994): los inversores extrapolan demasiado el crecimiento pasado; pagan de más por las empresas de moda y de menos por las aburridas. Cuando la realidad se impone, las baratas sorprenden al alza.
- **El valor después de 2007**: tuvo una larga racha mala, sobre todo en EE. UU. Explicaciones: los activos intangibles (marcas, software, I+D) no aparecen en el valor contable, que es la medida clásica; los tipos de interés casi a cero favorecieron a las empresas cuyo valor está muy lejos en el futuro; y la diferencia de valoración entre caras y baratas se estiró hasta extremos (Arnott, Harvey, Kalesnik y Linnainmaa, 2021, en un artículo titulado, en traducción libre, «Los rumores sobre la muerte del valor pueden ser muy exagerados»).

#### 4. Momento: la anomalía más difícil de explicar como riesgo
Jegadeesh y Titman (1993) documentaron que las acciones que más han subido en 3–12 meses siguen batiendo a las que más han bajado durante los meses siguientes. Asness, Moskowitz y Pedersen (2013) lo encontraron en bolsas, bonos, divisas y materias primas de todo el mundo, y además una correlación negativa entre valor y momento, lo que hace muy eficaz combinarlos. Su punto débil: sufre **desplomes** bruscos cuando el mercado da un giro, como en 2009, cuando las perdedoras rebotaron con fuerza.

#### 5. Factores en la práctica
- La prima teórica de un factor se calcula con carteras «largo-corto» (comprar las mejores, vender las peores), sin costes. Un fondo que solo compra (*long only*) captura una parte.
- Los factores tienen rotación y, por tanto, costes; el momento, sobre todo.
- Las cargas a factores de un fondo cambian con el tiempo y conviene revisarlas.
- Para un inversor particular, la decisión importante sigue siendo el reparto entre activos y los costes; los factores son, como mucho, una inclinación moderada y a muy largo plazo.
`,
  caso: {
    titulo: "2025: el año en que volvió el valor",
    md: `
Durante buena parte de 2010–2020, invertir en empresas baratas (valor) fue una mala decisión frente a las de crecimiento: las grandes tecnológicas estadounidenses dominaron la década. Muchos fondos de valor perdieron partícipes y algunos gestores famosos tiraron la toalla.

En 2025 la situación se dio la vuelta, especialmente fuera de EE. UU. Según el resumen de factores de WisdomTree con datos de MSCI:
- El **valor batió al mercado por dos dígitos en las cuatro regiones** analizadas (EE. UU., países desarrollados, Europa y emergentes).
- En Europa, el factor valor superó al índice en **15,3 puntos**; en los emergentes, en **21,6**.
- El empuje vino de bancos, empresas cíclicas, defensa, industriales y acciones de alto dividendo. El crecimiento, en cambio, quedó por detrás por dos dígitos en Europa y emergentes.

En España se vio con claridad: la banca subió en torno a un 100 % de media en 2025 y el Banco Santander, un **125 %**, lo que ayudó al IBEX 35 a superar su máximo de 2007 (lección 2.1).

> Lo que enseña: los factores no fallan de forma permanente, pero pueden pasar muchos años sin funcionar. Quien abandonó el valor en 2020 tras una década mala no estaba en 2025. La prima, si existe, es para quien la mantiene.
`
  },
  ejercicios: [
    {
      t: "Radiografía de un fondo con factores",
      p: `
Un fondo ganó un 9 % con Letras al 3 %. Su regresión de factores da beta 1,0, carga de tamaño 0,4 y carga de valor 0,5. Las primas del año fueron: mercado 5 %, tamaño 1 %, valor 2 %. ¿Cuánto se explica por los factores y cuál es su alfa?
`,
      s: `
1. **Explicado**: 3 % + 1,0 × 5 % + 0,4 × 1 % + 0,5 × 2 % = 3 + 5 + 0,4 + 1,0 = **9,4 %**.
2. **Alfa**: 9 % − 9,4 % = **−0,4 puntos**.
3. El fondo ha rendido lo que tocaba por sus estilos, menos algo. Con fondos indexados de mercado, pequeñas y valor se habría obtenido lo mismo, probablemente con menos coste.
`
    },
    {
      t: "¿Cuántos años para fiarse de un factor?",
      p: `
Un factor tiene una prima de 3 puntos al año sobre el mercado y una volatilidad relativa del 10 %. Calcula su estadístico t con 20 años de datos y los años necesarios para que t sea 2 y 3. ¿Qué probabilidad hay de que vaya peor que el mercado durante 10 años?
`,
      s: `
1. **t con 20 años**: 3 / (10 / √20) = **1,34**.
2. **Años para t = 2**: (2 × 10 / 3)² = **44 años**. Para t = 3: (3 × 10 / 3)² = **100 años**.
3. **Probabilidad de ir peor 10 años** (rentabilidad relativa acumulada negativa, aproximación normal): Φ(−3 × 10 / (10 × √10)) = Φ(−0,95) ≈ **17 %**. A 20 años, Φ(−1,34) ≈ **9 %**.
4. Aunque el factor exista, hay una probabilidad nada despreciable de una década perdida.
`
    },
    {
      t: "La prima después de publicarse",
      p: `
Un artículo académico muestra que una estrategia ganó un 6 % anual sobre el mercado entre 1970 y 2010. Según McLean y Pontiff, ¿qué prima cabe esperar tras su publicación? Si llevarla a la práctica cuesta un 1 % anual en comisiones y costes de negociación, ¿qué queda?
`,
      s: `
1. **Tras la publicación** (−58 % de media): 6 % × 0,42 = **2,5 %**.
2. **Neto de costes**: 2,5 % − 1 % = **1,5 %**.
3. Una cuarta parte de lo que prometía el artículo, y con años de rentabilidad relativa negativa por el camino. Desconfía de las estrategias cuyos resultados vienen solo de pruebas con datos pasados.
`
    }
  ],
  errores: [
    "Elegir un fondo de factores por sus resultados recientes y venderlo tras unos años malos.",
    "Creer que una estrategia que funcionó en una prueba con datos pasados funcionará igual en el futuro.",
    "Confundir alfa con exposición a factores: muchos «buenos gestores» solo tienen sesgo de valor o de pequeñas.",
    "Pagar comisiones de gestión activa por exposiciones que se compran baratas en un indexado.",
    "Pensar que «pequeña» equivale a «mejor»: el tamaño sin calidad ha aportado poco."
  ],
  test: [
    { p: "¿Qué factores añadió el modelo de cinco factores de Fama y French (2015) al de tres?", o: ["Momento y baja volatilidad", "Rentabilidad e inversión", "Liquidez y dividendo"], c: 1, e: "RMW (robustas menos débiles) y CMA (conservadoras menos agresivas)." },
    { p: "Según McLean y Pontiff (2016), tras su publicación las anomalías rinden de media…", o: ["Igual", "Un 58 % menos", "El doble"], c: 1, e: "Parte por sobreajuste y parte porque los inversores las explotan." },
    { p: "¿Qué propusieron Harvey, Liu y Zhu (2016)?", o: ["Exigir un estadístico t mayor que 3 a los nuevos factores", "Eliminar el CAPM", "Invertir solo en momento"], c: 0, e: "Con cientos de factores probados, el listón de t > 2 es demasiado bajo." },
    { p: "En 2025, el factor valor en Europa batió al mercado en aproximadamente…", o: ["1 punto", "15 puntos", "50 puntos"], c: 1, e: "+15,3 puntos según WisdomTree, con la banca a la cabeza." },
    { p: "¿Qué característica hace atractivo combinar valor y momento?", o: ["Que tienen correlación negativa entre sí", "Que tienen la misma prima", "Que no tienen costes"], c: 0, e: "Asness, Moskowitz y Pedersen (2013)." }
  ],
  lecturas: [
    { t: "Common Risk Factors in the Returns on Stocks and Bonds", a: "Eugene Fama y Kenneth French, Journal of Financial Economics, 1993" },
    { t: "…and the Cross-Section of Expected Returns", a: "Harvey, Liu y Zhu, Review of Financial Studies, 2016", n: "El zoo de factores y el listón estadístico." },
    { t: "Does Academic Research Destroy Stock Return Predictability?", a: "David McLean y Jeffrey Pontiff, Journal of Finance, 2016" },
    { t: "Value and Momentum Everywhere", a: "Asness, Moskowitz y Pedersen, Journal of Finance, 2013" },
    { t: "Biblioteca de datos de Kenneth French", a: "Dartmouth College", n: "Series gratuitas de todos los factores desde 1926." }
  ]
});


/* ---- l09.js ---- */
LECCIONES.push({
  id: "b2-l9", num: "2.9",
  titulo: "Los riesgos que no salen en la volatilidad",
  resumen: "Una cartera puede tener poca volatilidad y estar llena de riesgos: que la inflación se coma su valor, que el tipo de cambio borre la ganancia, que no puedas vender cuando lo necesitas, que quiebre quien custodia tu dinero o que el modelo con el que la construiste esté mal. Conocerlos y ponerles nombre es el primer paso para no sufrirlos sin darte cuenta.",
  esencial: `
La volatilidad mide cuánto se mueve el precio. Pero hay riesgos que no se ven en ese número:

1. **Inflación**: los activos «seguros» en euros (depósitos, cuentas, bonos) pierden poder adquisitivo si la inflación supera su rentabilidad. Un depósito al 2 % con la inflación española al 4,9 % pierde un 2,8 % real al año; en 10 años, casi una cuarta parte de su poder de compra.
2. **Divisa**: si inviertes en activos en dólares, tu resultado en euros depende también del dólar. En 2025 el S&P 500 ganó un 17,9 % con dividendos, pero el euro se apreció un 13,4 % frente al dólar y la ganancia en euros se quedó en torno a un **4 %**.
3. **Liquidez**: no poder vender cuando lo necesitas, o solo con un descuento grande. Inmuebles, fondos inmobiliarios, capital riesgo, bonos poco negociados, acciones muy pequeñas.
4. **Contraparte y custodia**: que quiebre quien te debe algo o guarda tus activos (un banco con depósitos por encima de la garantía, un *exchange* de cripto, el emisor de un producto estructurado o de un ETN).
5. **Concentración**: demasiado en una empresa, un sector, un país o un inmueble (lección 2.4).
6. **Longevidad y secuencia**: vivir más de lo previsto, o que las caídas lleguen justo al empezar a retirar (lecciones 0.7 y 0.9).
7. **Apalancamiento**: la deuda convierte caídas temporales en ventas forzosas.
8. **Modelo**: que tus supuestos (correlaciones, rentabilidades, «esto nunca cae a la vez») estén equivocados.
9. **Comportamiento**: tú mismo vendiendo en el peor momento. Suele ser el más caro de todos (bloque 6).
10. **Regulatorio y fiscal**: cambios de impuestos o de normas que afectan a un producto.

**La idea práctica**: para cada parte de tu cartera, pregúntate «¿qué tendría que pasar para que esto me hiciera perder mucho dinero o no pudiera usarlo?». Si la respuesta es algo que no tiene que ver con la volatilidad, ese es el riesgo que tienes que vigilar.
`,
  entender: `
#### El riesgo de divisa, con números
La rentabilidad en euros de un activo en dólares es:

$$ (1 + R en euros) = (1 + R en dólares) × (tipo EUR/USD inicial / tipo EUR/USD final)

| Año | Activo en dólares | Euro frente al dólar | Resultado en euros |
|---|---|---|---|
| 2025 | S&P 500 +17,9 % | De 1,036 a 1,174 (+13,4 %) | ≈ **+4,0 %** |
| 2026 (hasta el 1 de octubre) | — | De 1,174 a 1,128 (−4,0 %) | El dólar suma unos 4 puntos |

El tipo de cambio euro/dólar tiene una volatilidad de en torno al 7–9 % anual: comparable a la de una cartera de bonos y más de la mitad de la de la bolsa.

#### ¿Cubrir la divisa? Depende del activo
- **Bonos extranjeros**: casi siempre conviene cubrir. Un bono con volatilidad del 5 % y una divisa con volatilidad del 8 % (independientes) dan una volatilidad conjunta de **9,4 %**: la divisa domina y convierte un activo estabilizador en uno arriesgado.
- **Acciones extranjeras**: el efecto es menor. Bolsa al 16 % y divisa al 8 % dan un 17,9 % si son independientes, y un **15,6 %** con correlación −0,3. El dólar ha tendido a subir en los pánicos, lo que amortigua las caídas de la bolsa para un inversor en euros (en 2022 el MSCI World cayó un 18,1 % en dólares y solo un 12,8 % en euros).
- **El coste de cubrir**: aproximadamente la diferencia de tipos de interés entre las dos monedas. Si los tipos a corto del dólar están 1,5 puntos por encima de los del euro, cubrir cuesta unos 1,5 puntos al año (paridad cubierta de intereses, en el apartado «A fondo»).

#### El riesgo de liquidez
| Activo | Tiempo para vender | Riesgo |
|---|---|---|
| Fondo indexado de bolsa | 1–3 días | Muy bajo |
| ETF grande | Segundos | Muy bajo (lección 1.7) |
| Bono corporativo pequeño | Días o semanas | Descuento en crisis |
| Fondo inmobiliario no cotizado | Puede suspender reembolsos | Alto |
| Vivienda | Meses | Alto, con costes del 5–10 % |
| Capital riesgo | Años | Muy alto |

El problema más peligroso es el **desajuste de liquidez**: un vehículo que promete reembolsos diarios pero invierte en activos que tardan meses en venderse. Funciona hasta que muchos partícipes quieren salir a la vez.
`,
  fondo: `
#### 1. La paridad cubierta de intereses y el coste de la cobertura
Un tipo de cambio a plazo (*forward*) está determinado por arbitraje:

$$ F = S × (1 + i dólar) / (1 + i euro)   (en dólares por euro, a un año)

Si cubres una inversión en dólares, vendes dólares a plazo a ese precio. Cuando los tipos del dólar son mayores que los del euro, el euro a plazo es más caro que al contado, y el inversor europeo que cubre «pierde» la diferencia de tipos. No es una comisión: es el diferencial de tipos que dejas de cobrar por estar en dólares. Cuando los tipos del euro son mayores, cubrir da una pequeña ganancia.

#### 2. ¿Cuánto cubrir? La evidencia
Campbell, Serfaty-de Medeiros y Viceira (2010) analizaron qué divisas reducen el riesgo de una cartera global de acciones. Encontraron que el **dólar, el euro y el franco suizo** tienden a apreciarse cuando la bolsa mundial cae, mientras que divisas como el dólar australiano o el canadiense tienden a caer con ella. Implicación: para un inversor en euros con acciones mundiales, mantener parte de la exposición al dólar sin cubrir puede **reducir** el riesgo de la cartera. Para los bonos, la recomendación general es cubrir. Muchos profesionales usan coberturas parciales (por ejemplo, del 50 %) para no tener que acertar.

A muy largo plazo, la teoría de la paridad del poder adquisitivo dice que los tipos de cambio tienden a compensar las diferencias de inflación, pero los desvíos duran años: la vida media de esos desvíos se ha estimado en 3–5 años (el «enigma» de Rogoff, 1996).

#### 3. Riesgo de liquidez: Woodford y los fondos inmobiliarios
- **Reino Unido, julio de 2016**: tras el voto del Brexit, varios grandes fondos inmobiliarios abiertos suspendieron los reembolsos porque no podían vender edificios al ritmo de las salidas.
- **Woodford Equity Income, junio de 2019**: un fondo muy popular que prometía liquidez diaria había acumulado acciones pequeñas y no cotizadas. Al aumentar los reembolsos, suspendió las salidas y acabó liquidándose; sus partícipes tardaron años en recuperar parte de su dinero.
- **España, 2008–2010**: varios fondos de inversión inmobiliaria suspendieron reembolsos y acabaron liquidando sus carteras con pérdidas.

En todos los casos, la volatilidad publicada del fondo era baja hasta el día de la suspensión (rentabilidades suavizadas, lección 2.3).

#### 4. Riesgo de modelo: Long-Term Capital Management (1998)
LTCM era un *hedge fund* fundado por operadores de primer nivel y con dos futuros premios Nobel, Robert Merton y Myron Scholes, en su equipo. Sus modelos explotaban pequeñas diferencias de precio entre activos parecidos y, para que fueran rentables, usaba un apalancamiento enorme (del orden de 25 veces su capital, sin contar derivados). Los modelos suponían correlaciones estables y que los diferenciales volverían a su nivel normal. En agosto de 1998, tras el impago de Rusia, los inversores huyeron a la vez hacia los activos más seguros y líquidos: los diferenciales se ampliaron en lugar de cerrarse y las posiciones «independientes» resultaron estar todas correlacionadas. En pocas semanas perdió la mayor parte de su capital, unos 4.600 millones de dólares, y la Reserva Federal de Nueva York coordinó un rescate por un consorcio de 14 bancos para evitar un colapso en cadena.

La lección que suele extraerse (Lowenstein la contó en *Cuando los genios fracasan*) combina tres riesgos de esta lección: modelo, liquidez y apalancamiento. El mercado puede mantenerse irracional más tiempo del que tú puedes mantenerte solvente.

#### 5. Riesgo de inflación: los activos «seguros» no lo son en términos reales
Para un horizonte largo, el activo sin riesgo no es la liquidez, sino un bono **ligado a la inflación** con el plazo de tu necesidad (Campbell y Viceira, 2002). La liquidez es segura en euros a corto plazo, pero su rentabilidad real a largo plazo es incierta: depende de los tipos que se vayan pagando y de la inflación. Es la misma idea que separaba el riesgo nominal del real en la lección 1.1.
`,
  caso: {
    titulo: "El dólar en 2025: un buen año de bolsa que casi no se notó en euros",
    md: `
En 2025 el S&P 500 encadenó su tercer año de subidas: un **16,4 %** en precio y un **17,9 %** con dividendos, en dólares. Pero el dólar tuvo su peor año desde 2017, y el euro se apreció un **13,4 %** hasta unos 1,174 dólares. Para un inversor europeo:
- Rentabilidad en euros: 1,179 × (1,036 / 1,174) − 1 ≈ **+4,0 %** con dividendos, y ≈ +2,6 % en precio.
- Durante buena parte del año, los fondos indexados al S&P 500 en euros sin cobertura mostraban pérdidas aunque el índice subía en dólares. Las versiones con cobertura (*hedged*) recogieron casi toda la subida del índice, menos el coste de cubrir.
- A la vez, las bolsas europeas y emergentes batieron a la estadounidense en dólares: el MSCI World subió un 21,1 % frente al 17,3 % de las acciones estadounidenses.

En 2026 el movimiento ha ido al revés: hasta el 1 de octubre, el euro había perdido en torno a un 4 % frente al dólar (1,128), lo que ha sumado rentabilidad a las inversiones en dólares de los europeos.

> Lo que enseña: invertir fuera del euro añade un riesgo que no está en la ficha del índice. No es necesariamente malo (diversifica y a veces protege), pero hay que saber que está ahí y decidir conscientemente si se cubre o no.
`
  },
  ejercicios: [
    {
      t: "El S&P 500 en euros",
      p: `
En 2025 el S&P 500 dio un 17,9 % con dividendos en dólares y el euro se apreció un 13,4 % frente al dólar, terminando en 1,1743. ¿A cuánto cotizaba el euro a principio de año? ¿Qué rentabilidad obtuvo un inversor en euros sin cobertura? ¿Y uno con cobertura, si cubrir costó un 1,5 %?
`,
      s: `
1. **Tipo inicial**: 1,1743 / 1,134 = **1,0355** dólares por euro.
2. **Sin cobertura**: 1,179 × 1,0355 / 1,1743 − 1 = **+4,0 %**. El dólar perdió un 11,8 % frente al euro (1 / 1,134 − 1).
3. **Con cobertura**: ≈ 17,9 % − 1,5 % = **+16,4 %**.
4. Un año así inclina a cubrir; en 2022 o en 2026, cuando el dólar subió, habría sido al revés. Elegir cada año es apostar por la divisa.
`
    },
    {
      t: "Cubrir bonos y acciones",
      p: `
Un fondo de bonos extranjeros tiene una volatilidad local del 5 % y uno de acciones extranjeras del 16 %. La divisa tiene una volatilidad del 8 %. Calcula la volatilidad en euros sin cubrir de cada uno, suponiendo correlación 0 con la divisa, y la de las acciones con correlación −0,3.
`,
      s: `
1. **Bonos sin cubrir**: √(5² + 8²) = √89 = **9,4 %**: casi el doble del riesgo del bono.
2. **Acciones sin cubrir (ρ = 0)**: √(16² + 8²) = √320 = **17,9 %**.
3. **Acciones sin cubrir (ρ = −0,3)**: √(256 + 64 + 2 × (−0,3) × 16 × 8) = √243,2 = **15,6 %**: menos que cubiertas (16 %).
4. Por eso la regla general es cubrir los bonos y decidir caso a caso (o a medias) en las acciones.
`
    },
    {
      t: "La erosión de la inflación",
      p: `
Tienes 20.000 € en una cuenta al 2 % anual. Si la inflación se mantuviera en el 4,9 %, ¿qué rentabilidad real obtendrías cada año? ¿Cuánto poder adquisitivo habrías perdido en 10 años? ¿Y después de pagar un 19 % de impuestos sobre los intereses?
`,
      s: `
1. **Real anual**: 1,02 / 1,049 − 1 = **−2,8 %**.
2. **A 10 años**: (1,02 / 1,049)¹⁰ − 1 = **−24,4 %**: tus 20.000 € comprarían lo que hoy 15.110 €.
3. **Con impuestos**: rentabilidad neta 2 % × 0,81 = 1,62 %. Real: 1,0162 / 1,049 − 1 = −3,1 % al año; a 10 años, −27,2 %.
4. La cuenta no ha tenido ni un día de volatilidad y ha perdido más de una cuarta parte de su valor real. Por eso la liquidez es para el colchón, no para el largo plazo.
`
    }
  ],
  errores: [
    "Pensar que un ETF de acciones extranjeras que cotiza en euros no tiene riesgo de divisa (lección 1.7).",
    "Tener bonos extranjeros sin cubrir la divisa: el tipo de cambio domina su riesgo.",
    "Fiarse de un fondo que promete liquidez diaria e invierte en activos que no se venden rápido.",
    "Llamar «seguro» a lo que no se mueve aunque pierda poder adquisitivo.",
    "Usar apalancamiento confiando en modelos que suponen que las correlaciones no cambian."
  ],
  test: [
    { p: "En 2025, un inversor en euros en el S&P 500 sin cobertura ganó aproximadamente…", o: ["Un 17,9 %", "Un 4 %", "Un −13 %"], c: 1, e: "El euro subió un 13,4 % frente al dólar." },
    { p: "¿Qué determina principalmente el coste de cubrir la divisa?", o: ["La comisión del fondo", "La diferencia de tipos de interés entre las dos monedas", "La volatilidad de la bolsa"], c: 1, e: "Paridad cubierta de intereses." },
    { p: "¿Por qué suele recomendarse cubrir la divisa en los bonos extranjeros?", o: ["Porque la volatilidad de la divisa es mayor que la del bono y domina su riesgo", "Porque es gratis", "Porque los bonos no tienen riesgo"], c: 0, e: "√(5² + 8²) ≈ 9,4 % frente al 5 % del bono." },
    { p: "¿Qué tienen en común Woodford (2019) y los fondos inmobiliarios británicos de 2016?", o: ["Fraude", "Desajuste de liquidez: prometían reembolsos rápidos con activos difíciles de vender", "Apalancamiento con derivados"], c: 1, e: "Suspendieron reembolsos cuando muchos partícipes quisieron salir." },
    { p: "¿Qué riesgos combinó el caso de LTCM en 1998?", o: ["Solo el de divisa", "Modelo, liquidez y apalancamiento", "Inflación y longevidad"], c: 1, e: "Correlaciones que cambiaron en la crisis y deuda de unas 25 veces el capital." }
  ],
  lecturas: [
    { t: "Cuando los genios fracasan (When Genius Failed)", a: "Roger Lowenstein", n: "La historia de LTCM. Se lee como una novela." },
    { t: "Global Currency Hedging", a: "Campbell, Serfaty-de Medeiros y Viceira, Journal of Finance, 2010" },
    { t: "Strategic Asset Allocation", a: "John Campbell y Luis Viceira, Oxford University Press, 2002", n: "El activo sin riesgo a largo plazo y la cobertura de inflación. Avanzado." },
    { t: "Guías de la CNMV sobre liquidez de los fondos", a: "cnmv.es", n: "Qué son las suspensiones de reembolsos y los mecanismos de gestión de liquidez." }
  ]
});


/* ---- l10.js ---- */
LECCIONES.push({
  id: "b2-l10", num: "2.10",
  titulo: "Gestionar el riesgo de tu cartera",
  resumen: "En una cartera 60/40, la bolsa aporta alrededor del 90 % del riesgo aunque sea el 60 % del dinero. Pensar en contribuciones al riesgo, y no solo en pesos, cambia cómo se construye una cartera. Las herramientas útiles para un particular son sencillas: decidir cuánta caída puedes soportar, repartir en consecuencia, rebalancear con reglas y no usar deuda. Las sofisticadas, como la paridad de riesgo, también fallan.",
  esencial: `
**Peso no es riesgo.** En una cartera con un 60 % en acciones y un 40 % en bonos, casi todo el riesgo viene de las acciones, porque son mucho más volátiles. Con valores típicos, la bolsa aporta en torno al **90 %** de la volatilidad. Tu cartera «equilibrada» es, en riesgo, casi una cartera de bolsa.

**La herramienta más útil: tu presupuesto de caída.** Pregúntate qué caída de la cartera completa podrías aguantar sin vender ni perder el sueño (lección 0.8). Si la bolsa puede caer un 50 % en una crisis grande y los bonos un 5 %, el peso de bolsa que respeta ese presupuesto es:

$$ % en bolsa ≈ (caída tolerable − caída de los bonos) / (caída de la bolsa − caída de los bonos)

| Caída máxima que aguantas | % en bolsa (aprox.) |
|---|---|
| −10 % | 11 % |
| −20 % | 33 % |
| −30 % | 56 % |

**Rebalancear.** Con el tiempo, lo que sube pesa más y la cartera se vuelve más arriesgada sin que lo decidas. Rebalancear es volver a los pesos objetivo: vender algo de lo que ha subido y comprar lo que ha bajado. Dos formas:
- **Por calendario**: una vez al año.
- **Por bandas**: cuando un activo se separa más de, por ejemplo, 5 puntos de su peso objetivo.

En España, hazlo con **traspasos entre fondos** para no pagar impuestos (lección 1.6), o dirigiendo las aportaciones nuevas hacia lo que se ha quedado atrás.

**Lo que no funciona tan bien como parece**
- **Órdenes de pérdida máxima** (*stop-loss*) en una cartera diversificada: suelen venderte tras la caída y dejarte fuera del rebote.
- **Estrategias que prometen todo tiempo**: la «paridad de riesgo», que reparte el riesgo a partes iguales, perdió en 2022 tanto o más que una cartera convencional.
- **Apalancarse** para «optimizar»: convierte cualquier error de modelo en una pérdida grande.
`,
  entender: `
#### Contribuciones al riesgo: la cuenta
La contribución de cada activo a la volatilidad de la cartera es su peso por su covarianza con la cartera, dividido por la volatilidad de la cartera. Las contribuciones suman el total:

$$ contribución de i = wᵢ · (Σ·w)ᵢ / σp

Con acciones al 16 %, bonos al 6 % y correlación de 0,2:

| Cartera | Volatilidad | Riesgo que aporta la bolsa | Riesgo que aportan los bonos |
|---|---|---|---|
| 60/40 | 10,4 % | **90 %** | 10 % |
| 40/60 | 7,9 % | 72 % | 28 % |
| 27/73 (paridad de riesgo) | 6,8 % | 50 % | 50 % |

#### La paridad de riesgo
La idea (popularizada por el fondo All Weather de Bridgewater, creado en 1996) es repartir el **riesgo**, no el dinero. Con dos activos y la misma correlación, eso equivale a ponderar por la inversa de la volatilidad: 6 / (16 + 6) = **27 %** en acciones.

El problema: esa cartera rinde poco (con previsiones del 7,5 % para la bolsa y del 4,6 % para los bonos, un 5,4 %). Para llevarla al riesgo de una 60/40 (10,4 %) hay que **apalancarla** unas 1,53 veces. Si te financias al 3 %, la rentabilidad esperada sube al **6,7 %**, frente al 6,3 % de la 60/40 con la misma volatilidad. Es la misma lógica de la lección 2.6: la cartera más eficiente está cargada de bonos y hay que apalancarla.

¿Dónde está la trampa? En la hipótesis de que bonos y acciones no caen a la vez. En 2022 cayeron juntos, y una cartera con bonos apalancados lo pagó caro.

#### Rebalancear: cuánto y cuándo
- **Disciplina**: el rebalanceo es la forma sistemática de «comprar barato y vender caro», sin opinar sobre el mercado.
- **Bandas mejor que fechas**: rebalancear solo cuando hay desviaciones grandes ahorra costes e impuestos y deja correr algo las tendencias. Una regla habitual: actuar si un activo se desvía más de 5 puntos absolutos o un 25 % de su peso objetivo.
- **Usa los flujos**: aportaciones, dividendos y retiradas sirven para rebalancear sin vender.

#### Lo que aguanta la cartera en escenarios de estrés
Antes de fijar el reparto, pasa tu cartera por crisis reales:

| Escenario | Bolsa | Bonos del Estado | 60/40 |
|---|---|---|---|
| 2008 (crisis financiera, EE. UU.) | −37 % | +20 % (10 años) | −14 % |
| 2022 (inflación, EE. UU.) | −18 % | −13 % (agregado) | −16 % |

La cartera debe ser soportable en los dos tipos de crisis, no solo en la que más recuerdas.
`,
  fondo: `
#### 1. Presupuesto de riesgo y paridad de riesgo
La contribución de cada activo al riesgo sale de descomponer la volatilidad, que es una función homogénea de grado 1 de los pesos (teorema de Euler):

$$ σp = Σ wᵢ · ∂σp/∂wᵢ

Una cartera de **paridad de riesgo** iguala esas contribuciones. Asness, Frazzini y Pedersen (2012) la justificaron con la misma idea que la anomalía de baja beta (lección 2.7): como muchos inversores no se apalancan, los activos de poco riesgo (bonos) ofrecen más rentabilidad por unidad de riesgo, y una cartera equilibrada en riesgo y apalancada debería tener mejor Sharpe que una cartera cargada de bolsa. Con datos de varias décadas, encontraron que así había sido.

Las críticas: buena parte de su éxito histórico coincide con la caída de los tipos de interés desde 1981, que hizo subir mucho los bonos; necesita financiación barata; y depende de que las correlaciones se mantengan.

#### 2. Gestionar la volatilidad: *volatility targeting*
Moreira y Muir (2017) mostraron que reducir la exposición a la bolsa cuando su volatilidad reciente es alta, y aumentarla cuando es baja, mejoraba el Sharpe histórico. La lógica: la volatilidad se agrupa (lección 2.2) y no viene acompañada de más rentabilidad esperada en proporción. Cederburg y otros (2020) mostraron que, aplicado de forma realista y fuera de la muestra, el beneficio era mucho menos sólido. Para un particular, la versión sensata es más modesta: no aumentar el riesgo cuando todo está tranquilo, porque es cuando más se subestima.

#### 3. Seguros de cartera y *stop-loss*
- **El seguro de cartera de los años 80** (estrategias dinámicas que vendían futuros cuando la bolsa caía para replicar una opción de venta) se señala como uno de los amplificadores del lunes negro de 1987: muchos vendían a la vez, de forma automática.
- **Los *stop-loss***: Kaminski y Lo (2014) mostraron que pueden añadir valor cuando las rentabilidades tienen inercia (momento) y restan cuando el mercado tiende a recuperarse (reversión a la media), como suele pasar en las bolsas diversificadas tras las grandes caídas. Para acciones individuales con tesis de inversión, una caída fuerte es una señal para revisar la tesis (el semáforo de venta de tu consola, bloque 10), no un disparador automático.
- **Comprar opciones de venta** (lección 1.10) protege, pero su coste continuado se come buena parte de la rentabilidad esperada.

#### 4. El criterio de Kelly y el apalancamiento óptimo
El criterio de Kelly (lección 0.6) dice que la fracción que maximiza el crecimiento a largo plazo en un activo arriesgado es aproximadamente (μ − rf) / σ². Con prima del 4,5 % y volatilidad del 16 %, sale un 176 % en bolsa: apalancarse. Casi nadie lo sigue, con razón: Kelly supone que conoces exactamente μ y σ (y las estimas con mucho error, lección 2.6), produce caídas enormes por el camino y solo maximiza el crecimiento a muy largo plazo. La práctica profesional usa, como mucho, «medio Kelly» o menos. Para un particular, la conclusión útil es la contraria: **el error de estimación es una razón para no apalancarse**.

#### 5. Un marco para tu cartera
1. **Colchón y deudas** fuera de la cartera de riesgo (lecciones 0.5 y 0.6).
2. **Presupuesto de caída** → reparto entre bolsa y renta fija/liquidez.
3. **Dentro de la bolsa**: diversificación amplia, global, barata (bloque 3); inclinaciones a factores, moderadas (lección 2.8).
4. **Dentro de la renta fija**: duración acorde con el horizonte y calidad alta; algo ligado a la inflación (lecciones 1.4 y 1.5).
5. **Divisa**: cubrir bonos; decidir en acciones (lección 2.9).
6. **Reglas escritas** de rebalanceo y de venta, decididas en frío.
`,
  caso: {
    titulo: "2022: el año en que la paridad de riesgo no fue «para todo tiempo»",
    md: `
La paridad de riesgo prometía funcionar en cualquier entorno económico: crecimiento o recesión, inflación o deflación. Su fondo emblema, el All Weather de Bridgewater, apuntaba a una volatilidad del 10 %.

En 2022, con la inflación disparada y los tipos subiendo a toda velocidad, bonos y acciones cayeron juntos. Una estrategia que tiene muchos bonos y los apalanca para equilibrar el riesgo lo sufrió más:
- La versión más popular del **All Weather** (objetivo de volatilidad del 10 %) perdió un **22 %**, según documentos presentados a un fondo de pensiones de Indiana; más que en 2008.
- El fondo cotizado **RPAR Risk Parity** cayó un **22,8 %**, frente al **16 %** de una cartera mixta convencional (el ETF AOR).
- No todas fallaron igual: el fondo multiactivo de AQR perdió en torno a un 10 %. Las que tenían más materias primas y bonos ligados a la inflación aguantaron mejor.

Con una cuenta sencilla se ve por qué: una paridad de riesgo con un 27 % en acciones, apalancada 1,53 veces, con la bolsa a −18 %, los bonos a −13 % y un coste de financiación del 1,5 %, habría perdido en torno a un **23 %**.

Después de 2022, inversores institucionales sacaron miles de millones de estos fondos. Bridgewater reconoció que el All Weather había quedado por debajo de sus rentabilidades esperadas.

> Lo que enseña: ninguna construcción de cartera elimina el riesgo; solo lo cambia de sitio. La paridad de riesgo cambió riesgo de bolsa por riesgo de tipos de interés y de apalancamiento, y en 2022 llegó justo ese riesgo.
`
  },
  ejercicios: [
    {
      t: "¿Cuánto riesgo aporta cada parte?",
      p: `
Una cartera 60/40 tiene acciones con volatilidad del 16 % y bonos con volatilidad del 6 %, con correlación 0,2. Calcula la volatilidad de la cartera y qué porcentaje del riesgo aporta cada activo.
`,
      s: `
1. **Covarianza**: 0,2 × 0,16 × 0,06 = 0,00192.
2. **Varianza**: 0,36 × 0,0256 + 0,16 × 0,0036 + 2 × 0,6 × 0,4 × 0,00192 = 0,009216 + 0,000576 + 0,000922 = 0,010714. **Volatilidad**: **10,35 %**.
3. **Aportación de la bolsa**: 0,6 × (0,6 × 0,0256 + 0,4 × 0,00192) = 0,6 × 0,016128 = 0,009677 → 0,009677 / 0,010714 = **90 %**.
4. **Aportación de los bonos**: 0,4 × (0,4 × 0,0036 + 0,6 × 0,00192) = 0,001037 → **10 %**.
5. El 40 % del dinero aporta el 10 % del riesgo.
`
    },
    {
      t: "Paridad de riesgo con números",
      p: `
Con los datos anteriores, y rentabilidades esperadas del 7,5 % (acciones) y del 4,6 % (bonos), calcula los pesos de una cartera de paridad de riesgo, su rentabilidad y su volatilidad. ¿Cuánto hay que apalancarla para que tenga la volatilidad de la 60/40, y qué rentabilidad tendría si te financias al 3 %?
`,
      s: `
1. **Pesos** (inversa de la volatilidad): acciones 6 / 22 = **27,3 %**; bonos **72,7 %**. Cada uno aporta el 50 % del riesgo.
2. **Rentabilidad**: 0,273 × 7,5 + 0,727 × 4,6 = **5,39 %**. **Volatilidad**: **6,76 %**.
3. **Apalancamiento**: 10,35 / 6,76 = **1,53 veces**.
4. **Rentabilidad apalancada**: 3 % + 1,53 × (5,39 % − 3 %) = **6,66 %**, frente al 6,34 % de la 60/40.
5. Gana 0,3 puntos esperados con el mismo riesgo… si la correlación se porta bien y la financiación es barata.
`
    },
    {
      t: "Tu presupuesto de caída",
      p: `
En una crisis grave supones que la bolsa puede caer un 50 % y tu renta fija un 5 %. ¿Qué peso de bolsa te permite no perder más de un 20 % en la cartera total? ¿Y si la renta fija cayera también un 13 %, como en 2022, y la bolsa un 25 %?
`,
      s: `
1. **Escenario 1**: w × (−50 %) + (1 − w) × (−5 %) = −20 % → 45 w = 15 → **w = 33 %**.
2. **Escenario 2**: w × (−25 %) + (1 − w) × (−13 %) = −20 % → 12 w = 7 → **w = 58 %**.
3. El escenario 1 (crisis tipo 2008, con la bolsa hundida) es el que manda: con un 33 % en bolsa también cumples el segundo (0,33 × −25 % + 0,67 × −13 % = −17 %).
4. Calcula tu reparto para el peor escenario plausible de cada tipo y quédate con el más prudente.
`
    }
  ],
  errores: [
    "Pensar que una cartera 60/40 tiene el riesgo repartido a partes casi iguales.",
    "No rebalancear nunca, o rebalancear tan a menudo que los costes y los impuestos se coman el beneficio.",
    "Poner stop-loss automáticos en una cartera diversificada y quedarse fuera de los rebotes.",
    "Comprar estrategias «para todo tiempo» sin entender qué riesgo concentran.",
    "Apalancarse porque un modelo dice que es óptimo."
  ],
  test: [
    { p: "En una cartera 60/40 típica, la bolsa aporta aproximadamente…", o: ["El 60 % del riesgo", "El 90 % del riesgo", "El 40 % del riesgo"], c: 1, e: "Es mucho más volátil que los bonos." },
    { p: "Con dos activos, una cartera de paridad de riesgo pondera…", o: ["A partes iguales en dinero", "Por la inversa de la volatilidad", "Por capitalización"], c: 1, e: "Así cada uno aporta el mismo riesgo (con correlación común)." },
    { p: "Si aguantas una caída del 20 %, con la bolsa a −50 % y los bonos a −5 %, tu peso en bolsa debería rondar…", o: ["El 20 %", "El 33 %", "El 60 %"], c: 1, e: "(20 − 5) / (50 − 5) ≈ 33 %." },
    { p: "En 2022 el fondo All Weather de Bridgewater (objetivo del 10 % de volatilidad) perdió aproximadamente…", o: ["Un 2 %", "Un 22 %", "Un 50 %"], c: 1, e: "Bonos y acciones cayeron juntos y sus bonos estaban apalancados." },
    { p: "Según Kaminski y Lo (2014), los stop-loss añaden valor sobre todo cuando…", o: ["Las rentabilidades tienen inercia", "El mercado tiende a recuperarse tras caer", "Siempre"], c: 0, e: "En bolsas diversificadas, que tienden a recuperarse, suelen restar." }
  ],
  lecturas: [
    { t: "Leverage Aversion and Risk Parity", a: "Asness, Frazzini y Pedersen, Financial Analysts Journal, 2012" },
    { t: "Volatility-Managed Portfolios", a: "Alan Moreira y Tyler Muir, Journal of Finance, 2017" },
    { t: "When Do Stop-Loss Rules Stop Losses?", a: "Kathryn Kaminski y Andrew Lo, Journal of Financial Markets, 2014" },
    { t: "Principios (Principles)", a: "Ray Dalio", n: "El fundador de Bridgewater explica su forma de pensar, incluida la diversificación de riesgos. Léelo con espíritu crítico." }
  ]
});


var META = {
  id: 2,
  titulo: "Riesgo y rentabilidad",
  intro: `
El bloque 1 recorrió los activos uno a uno. Este bloque trata de cómo se combinan: qué es de verdad el **riesgo** (y por qué no es lo mismo que la volatilidad), cómo se **mide** sin engañarse con la campana de Gauss, cómo se juzga la **rentabilidad ajustada al riesgo**, por qué **diversificar** funciona y cuándo falla, y las grandes teorías que lo ordenan todo: **Markowitz**, el **CAPM** y los **factores**. Termina con los riesgos que no salen en la volatilidad y con herramientas concretas para gestionar el riesgo de tu cartera.

La idea que recorre el bloque: **el riesgo que importa es acabar con menos de lo que necesitas**. La volatilidad es solo una forma de medirlo, y la diversificación, el reparto entre activos y no verse obligado a vender son las formas de controlarlo. Los modelos ayudan a pensar, pero se alimentan de datos que nadie conoce con precisión.
`,
  foto: {
    titulo: "La foto del momento",
    fecha: "13 nov 2026",
    md: `
| Indicador | Dato | Comentario |
|---|---|---|
| VIX (volatilidad esperada del S&P 500) | 28,18 al cierre del 5 de noviembre | Subió un 69,7 % en un día desde 16,61: la tercera mayor subida porcentual desde 1990 |
| S&P 500 el 5 de noviembre | −4,4 % (7.353,73) | Peor día desde abril de 2025; un 5,9 % por debajo de su récord del 6 de octubre |
| Nasdaq | En corrección | Más de un 10 % por debajo de su récord del 6 de octubre |
| Semiconductores frente a consumo básico (5 nov) | −11,2 % frente a −0,8 % | La beta, en un solo día |
| IBEX 35 | 18.652,9 a cierre de octubre | Superó los 20.000 en agosto; batió el récord de 2007 en octubre de 2025, casi 18 años después |
| Correlación bolsa–bonos (EE. UU.) | Positiva en 3 de cada 4 sesiones de 2026 | Los bonos protegen menos con la inflación al alza |
| Previsión de una cartera 60/40 a 10–15 años | 7,0 % anual en dólares | J.P. Morgan, octubre de 2026 (6,4 % un año antes) |
| Euro/dólar | ≈ 1,13 (1 de octubre) | −4 % en 2026, tras subir un 13,4 % en 2025 |
| Factor valor en 2025 | +15,3 puntos sobre el mercado en Europa | Tras una década mala, el mejor año en mucho tiempo |
`
  },
  glosario: [
    { t: "Riesgo", d: "Posibilidad de que el resultado sea peor de lo necesario: perder dinero de forma permanente o no alcanzar un objetivo. La volatilidad es solo una forma de medirlo." },
    { t: "Incertidumbre (Knight)", d: "Situación en la que ni siquiera se conocen las probabilidades, a diferencia del riesgo, en el que sí." },
    { t: "Pérdida permanente", d: "Pérdida que no se recupera: por quiebra, por haber pagado demasiado o por vender en el peor momento." },
    { t: "Riesgo de déficit (shortfall)", d: "Probabilidad de que la cartera quede por debajo de una cifra objetivo." },
    { t: "Criterio de Roy (safety first)", d: "Elegir la cartera que minimiza la probabilidad de quedar por debajo de un mínimo: maximizar (μ − r_min) / σ." },
    { t: "Volatilidad", d: "Desviación típica de las rentabilidades, normalmente anualizada." },
    { t: "Anualizar", d: "Pasar una medida de un periodo a un año. La volatilidad se multiplica por la raíz del número de periodos (√252 días, √12 meses)." },
    { t: "Caída máxima (drawdown)", d: "Mayor pérdida desde un máximo hasta el mínimo siguiente." },
    { t: "Tiempo bajo el agua", d: "Tiempo que tarda una inversión en recuperar su máximo anterior." },
    { t: "VaR (valor en riesgo)", d: "Pérdida que solo se supera con una probabilidad dada (por ejemplo, el 5 %) en un periodo." },
    { t: "Pérdida esperada en la cola (expected shortfall)", d: "Pérdida media en los peores casos, más allá del VaR. Es una medida de riesgo coherente." },
    { t: "Semidesviación", d: "Volatilidad calculada solo con las rentabilidades por debajo de un umbral." },
    { t: "Colas gruesas", d: "Distribución con muchos más sucesos extremos que la normal." },
    { t: "Curtosis", d: "Medida del grosor de las colas de una distribución. La normal tiene 3." },
    { t: "Asimetría (skewness)", d: "Si las sorpresas grandes suelen ser a la baja (negativa) o al alza (positiva)." },
    { t: "GARCH", d: "Modelo en el que la volatilidad de mañana depende de la de hoy y del último movimiento. Recoge que la volatilidad se agrupa." },
    { t: "VIX", d: "Volatilidad implícita a 30 días del S&P 500, calculada con precios de opciones. «Índice del miedo»." },
    { t: "Volatilidad implícita / realizada", d: "La que descuentan los precios de las opciones frente a la que ocurre de verdad." },
    { t: "Ratio de Sharpe", d: "(Rentabilidad − tipo sin riesgo) / volatilidad. Rentabilidad extra por unidad de riesgo total." },
    { t: "Ratio de Sortino", d: "Como el de Sharpe, pero dividiendo solo por la semidesviación." },
    { t: "Ratio de Calmar", d: "Rentabilidad anual entre la caída máxima." },
    { t: "Ratio de Treynor", d: "Rentabilidad extra dividida por la beta." },
    { t: "Ratio de información", d: "Rentabilidad sobre el índice dividida por el error de seguimiento. Mide la consistencia de un gestor activo." },
    { t: "Alfa", d: "Rentabilidad por encima de la que corresponde al riesgo de mercado (o a los factores) asumido." },
    { t: "Rentabilidades suavizadas", d: "Rentabilidades de activos poco líquidos que reflejan valoraciones antiguas; subestiman la volatilidad real." },
    { t: "Riesgo específico (idiosincrático)", d: "El que afecta a una sola empresa o emisor. Se elimina diversificando." },
    { t: "Riesgo sistemático (de mercado)", d: "El que afecta a todos los activos a la vez. No se diversifica dentro de la bolsa." },
    { t: "Varianza de una cartera", d: "σp² = Σ Σ wᵢ wⱼ σᵢ σⱼ ρᵢⱼ. Depende de los pesos, las volatilidades y las correlaciones." },
    { t: "Rendimiento de la diversificación", d: "Rentabilidad compuesta extra de una cartera rebalanceada frente a la media de sus componentes: ≈ ½ (Σ wᵢσᵢ² − σp²)." },
    { t: "Rebalanceo", d: "Volver periódicamente a los pesos objetivo vendiendo lo que ha subido y comprando lo que ha bajado." },
    { t: "Capital humano", d: "Valor actual de tus ingresos futuros por trabajo. Conviene que tu cartera no esté correlacionada con él." },
    { t: "Correlación condicionada", d: "Correlación medida en un subconjunto de datos (por ejemplo, en las crisis). Sube mecánicamente cuando sube la volatilidad." },
    { t: "Dependencia en las colas", d: "Tendencia de dos activos a moverse juntos en los extremos, aunque su correlación media sea baja." },
    { t: "Transformación de Fisher", d: "z = atanh(ρ). Permite calcular intervalos de confianza para una correlación." },
    { t: "Sesgo local (home bias)", d: "Tendencia a invertir mucho más en el propio país de lo que justifica su peso en el mundo." },
    { t: "Prueba de estrés", d: "Calcular qué haría una cartera en escenarios de crisis concretos." },
    { t: "Frontera eficiente", d: "Conjunto de carteras con la máxima rentabilidad esperada para cada nivel de riesgo." },
    { t: "Cartera de mínima varianza", d: "La cartera de la frontera con menos volatilidad posible." },
    { t: "Cartera tangente", d: "La cartera de activos con riesgo con mayor ratio de Sharpe." },
    { t: "Línea del mercado de capitales", d: "Combinaciones de la cartera tangente con el activo sin riesgo." },
    { t: "Separación de Tobin", d: "Con un activo sin riesgo, todos los inversores deberían tener la misma cartera de riesgo y ajustar con liquidez." },
    { t: "Error de estimación", d: "Diferencia entre un parámetro estimado con datos (media, volatilidad, correlación) y su valor real." },
    { t: "Maximizador de errores", d: "Crítica de Michaud: un optimizador sobrepondera los activos cuya rentabilidad se ha sobreestimado." },
    { t: "Black-Litterman", d: "Método que parte de las rentabilidades implícitas en la cartera de mercado y solo se desvía según la confianza en las opiniones propias." },
    { t: "Cartera 1/N", d: "Reparto a partes iguales entre N activos. Difícil de batir fuera de la muestra." },
    { t: "Beta", d: "Sensibilidad de un activo a los movimientos del mercado: covarianza con el mercado entre varianza del mercado." },
    { t: "R²", d: "Parte de la varianza de un activo explicada por el mercado (o por los factores)." },
    { t: "CAPM", d: "Modelo según el cual la rentabilidad esperada es el tipo sin riesgo más la beta por la prima de mercado." },
    { t: "Prima de mercado", d: "Rentabilidad esperada de la bolsa por encima del activo sin riesgo." },
    { t: "Línea del mercado de valores", d: "Recta que relaciona beta y rentabilidad esperada en el CAPM." },
    { t: "Anomalía de baja volatilidad", d: "Las acciones poco volátiles (o de beta baja) han rendido más de lo que predice el CAPM." },
    { t: "Betting against beta", d: "Estrategia que compra beta baja apalancada y vende beta alta (Frazzini y Pedersen, 2014)." },
    { t: "Crítica de Roll", d: "El CAPM no se puede contrastar porque la verdadera cartera de mercado no es observable." },
    { t: "Beta ajustada (Blume)", d: "Beta corregida hacia 1: ≈ 0,67 × beta estimada + 0,33." },
    { t: "Factor", d: "Característica que explica sistemáticamente diferencias de rentabilidad entre activos." },
    { t: "Tamaño (SMB)", d: "Factor que compra empresas pequeñas y vende grandes." },
    { t: "Valor (HML)", d: "Factor que compra empresas baratas respecto a sus fundamentales y vende caras." },
    { t: "Rentabilidad (RMW)", d: "Factor que compra empresas de rentabilidad robusta y vende las de rentabilidad débil." },
    { t: "Inversión (CMA)", d: "Factor que compra empresas que invierten con prudencia y vende las que invierten agresivamente." },
    { t: "Momento", d: "Factor que compra lo que más ha subido en los últimos 3–12 meses y vende lo que más ha bajado." },
    { t: "Smart beta", d: "Fondos indexados que siguen índices construidos con factores en lugar de por capitalización." },
    { t: "Zoo de factores", d: "Cientos de factores publicados, muchos de ellos fruto de la minería de datos." },
    { t: "Sobreajuste", d: "Ajustar una estrategia a los datos pasados hasta que funciona por casualidad." },
    { t: "Riesgo de divisa", d: "Variación de la rentabilidad en tu moneda por los cambios en el tipo de cambio." },
    { t: "Cobertura de divisa", d: "Neutralizar el tipo de cambio con contratos a plazo. Su coste es aproximadamente la diferencia de tipos de interés." },
    { t: "Paridad cubierta de intereses", d: "Relación de arbitraje entre el tipo de cambio al contado, el tipo a plazo y los tipos de interés de las dos monedas." },
    { t: "Riesgo de liquidez", d: "No poder vender cuando se necesita, o solo con un gran descuento." },
    { t: "Desajuste de liquidez", d: "Vehículo que promete reembolsos rápidos pero invierte en activos difíciles de vender." },
    { t: "Riesgo de contraparte", d: "Que no pague quien te debe algo o custodia tus activos." },
    { t: "Riesgo de modelo", d: "Que los supuestos del modelo con el que decides sean erróneos." },
    { t: "Contribución al riesgo", d: "Parte de la volatilidad de la cartera que aporta cada activo: wᵢ · (Σw)ᵢ / σp." },
    { t: "Paridad de riesgo", d: "Cartera en la que cada activo aporta el mismo riesgo. Suele requerir apalancamiento." },
    { t: "Volatility targeting", d: "Ajustar la exposición para mantener una volatilidad objetivo: menos riesgo cuando la volatilidad reciente es alta." },
    { t: "Presupuesto de caída", d: "Caída máxima de la cartera que estás dispuesto a soportar; determina el reparto entre activos." },
    { t: "Stop-loss", d: "Orden de venta automática si el precio cae por debajo de un nivel." }
  ],
  fuentes: [
    { t: "Rankia: 18 años para recuperar el máximo del IBEX 35", u: "https://www.rankia.com/blog/bolsa-al-dia/7534472-maximo-historico-ibex-35-18-anos-para-recuperar-record-2007-por-que-dividendos-fueron-muchos-menos", n: "Fechas y niveles del IBEX, también con dividendos" },
    { t: "Ara: el IBEX supera los máximos de 2007", u: "https://es.ara.cat/economia/mercados/bolsa-espanola-punto-superar-maximos-historicos-2007_1_5542283.html" },
    { t: "Valencia Plaza: el mínimo del IBEX de julio de 2012", u: "https://valenciaplaza.com/valenciaplaza/el-ibex-35-cumple-seis-anos-desde-sus-minimos-historicos-recuperando-casi-dos-tercios-de-su-valor" },
    { t: "Forbes Argentina: el VIX sube un 70 % (6 nov 2026)", u: "https://www.forbesargentina.com/money/el-indice-miedo-wall-street-acaba-saltar-70-significa-n101956" },
    { t: "The Trading Tools: VIX a 28,18 el 5 de noviembre de 2026", u: "https://www.thetrading.tools/chart-of-the-day/2026-11-05-vix-up-70-percent-in-a-day" },
    { t: "Doveinvestire: comparación de las grandes subidas del VIX", u: "https://www.doveinvestire.com/analisi-dei-mercati/vix-balzo-volatilita-wall-street/" },
    { t: "InvestingLive: cierre del 5 de noviembre de 2026", u: "https://investinglive.com/es/acciones/nasdaq-100-sufre-el-peor-dia-desde-2020/" },
    { t: "SimianX: la caída del 5 de noviembre de 2026 por sectores", u: "https://www.simianx.ai/es/stories/stock-market-drop-after-the-2026-midterms-what-comes-next" },
    { t: "Within Nigeria: Nvidia y el Nasdaq el 5 de noviembre", u: "https://www.withinnigeria.com/2026/11/06/dow-jones-stock-markets-today-dow-sheds-1833-points-as-ai-rout-sends-nasdaq-crashing-5-5/" },
    { t: "Expansión: el VIX en 60 en abril de 2025", u: "https://expansion.mx/mercados/2025/04/10/bumeran-de-mercados-por-giro-de-trump-redefine-volatilidad" },
    { t: "Admiral Markets: la caída de dos días de abril de 2025", u: "https://admiralmarkets.com/es/analytics/traders-blog/lunes-de-locura-en-wall-street" },
    { t: "Bloomberg Línea: volatilidad de abril de 2025", u: "https://www.bloomberglinea.com/mercados/brutal-caida-de-las-acciones-revela-los-peligros-de-las-fluctuaciones-arancelarias-de-trump/" },
    { t: "Documento comercial de Fairfield Sentry (archivo del administrador concursal de Madoff)", u: "https://www.madofftrustee.com/images/upload/11-02910_Merrill_Lynch_Suisse_Longstaff_Declaration_in_Support_of_Trustee_Opp_to_MTD_Exh29_123-0029.pdf" },
    { t: "Institutional Investor: Madoff Tops Charts; Skeptics Ask How", u: "https://www.institutionalinvestor.com/article/2btfiztik5irvfgl2bzsw/home/madoff-scheme-had-early-skeptics" },
    { t: "Risk.net: el análisis de Markopolos", u: "https://www.risk.net/asset-management/hedge-funds/1506469/madoff-fallout" },
    { t: "CNN Money: los empleados de Enron demandan (2001)", u: "https://money.cnn.com/2001/11/26/401k/q_retire_enron_re/" },
    { t: "Senadora Collins: protección de los planes de pensiones tras Enron", u: "https://www.collins.senate.gov/newsroom/safeguarding-employee-pension-plans" },
    { t: "Senado de EE. UU.: audiencia sobre Enron y los 401(k)", u: "https://www.govinfo.gov/content/pkg/CHRG-107shrg77706/html/CHRG-107shrg77706.htm" },
    { t: "Morningstar: diversificación en épocas de inflación (2026)", u: "https://global.morningstar.com/es/mercados/cmo-funciona-la-diversificacin-de-cartera-en-pocas-de-inflacin" },
    { t: "Finect: bonos y bolsa se mueven juntos en 3 de cada 4 sesiones de 2026", u: "https://www.finect.com/usuario/mariarefojos/articulos/bonos-y-bolsa-se-mueven-juntos-en-3-de-cada-4-sesiones-de-2026-que-significa-para-tu-cartera" },
    { t: "Janus Henderson: correlación acciones–bonos (2026)", u: "https://www.janushenderson.com/es-es/advisor/article/diversified-alternatives-how-resilient-is-your-portfolio-really/" },
    { t: "Yahoo Finance: la cartera 60/40 en 2022 (J.P. Morgan)", u: "https://news.yahoo.com/why-traditional-wisdom-mixing-stocks-140050559.html" },
    { t: "Yahoo Finance: el peor año de los bonos (2022)", u: "https://news.yahoo.com/why-ordinary-investors-got-hit-so-hard-in-2022-morning-brief-110004332.html" },
    { t: "Motley Fool: 2022, el peor año del 60/40 desde 1937", u: "https://www.fool.com/investing/2023/01/26/2022-was-the-worst-year-since-1937-for-this-invest" },
    { t: "Grimes & Co.: 60/40 frente a 40/60 en 2022", u: "https://www.grimesco.com/?p=1333" },
    { t: "J.P. Morgan: Long-Term Capital Market Assumptions 2027", u: "https://am.jpmorgan.com/us/en/asset-management/institutional/about-us/media/press-releases/jp-morgan-releases-2027-long-term-capital-market-assumptions/" },
    { t: "Funds Society: previsiones de J.P. Morgan por activo", u: "https://www.fundssociety.com/en/news/mercados/j-p-morgan-projects-a-7-0-annual-return-for-a-60-40-investment-portfolio-over-10-15-years/" },
    { t: "WealthBriefing: bonos globales en la LTCMA 2027", u: "https://www.wealthbriefing.com/html/printarticle.php?id=209133" },
    { t: "WisdomTree: los factores en 2025", u: "https://www.wisdomtree.com/ch/fr/insights/blog/looking-back-at-equity-factors-in-q4-2025-with-wisdomtree/pdf" },
    { t: "Forbes España: la banca española en 2025", u: "https://forbes.es/?p=851874", n: "Incluye la apreciación del euro en 2025" },
    { t: "Bloomberg Línea: el S&P 500 en 2025 (17,9 % con dividendos)", u: "https://www.bloomberglinea.com/mercados/las-7-magnificas-representaron-menos-del-50-del-alza-del-sp-500-en-2025/?outputType=amp" },
    { t: "Bloomberg Línea: el S&P 500 sube un 16,39 % en 2025", u: "https://www.bloomberglinea.com/mercados/sp-500-sumo-tres-anos-al-alza-la-lista-de-las-acciones-que-mas-cayeron-y-subieron-en-2025/" },
    { t: "Bloomberg Línea: cotización EUR/USD a 1 de octubre de 2026", u: "https://www.bloomberglinea.com/quote/EURUSD:CUR/" },
    { t: "Fisher Investments: el MSCI World en dólares y euros", u: "https://www.estrategiasdeinversion.com/analisis/bolsa-y-mercados/informes/perspectiva-y-opinion-de-fisher-investments-espana-n-902327" },
    { t: "Advisor Perspectives: el All Weather perdió un 22 % en 2022", u: "https://www.advisorperspectives.com/articles/2024/04/24/ray-dalios-famous-trade-sputtering-investors-bailing" },
    { t: "ETF.com: paridad de riesgo frente a 60/40 en 2022", u: "https://www.etf.com/sections/news/risk-parity-fails-keep-pace-6040-model" }
  ]
};

META.lecciones=LECCIONES;
CURSO.registrar(META);
})();
