/* Bloque 1. Generado a partir de src/b1/ */
(function(){
var LECCIONES=[];

/* ---- l01.js ---- */
LECCIONES.push({
  id: "b1-l1", num: "1.1",
  titulo: "El mapa de los activos",
  resumen: "Casi todo lo que se puede comprar para invertir es una de tres cosas: ser dueño de algo (acciones, inmuebles), prestar dinero a alguien (bonos, depósitos) o poseer algo que no produce nada (oro, cripto). Cada familia tiene una fuente de rentabilidad distinta, un riesgo distinto y un comportamiento distinto ante la inflación y los tipos.",
  esencial: `
Un **activo financiero** es un derecho sobre algo de valor. Antes de mirar productos concretos, conviene saber **qué derecho estás comprando**, porque de ahí sale de dónde viene la rentabilidad y qué puede salir mal.

**Las tres grandes familias**

1. **Propiedad** (acciones, inmuebles, empresas privadas). Compras una parte de algo que produce: beneficios, alquileres. Tu rentabilidad depende de cuánto produzca y de cuánto pague el siguiente comprador. Es la familia que más ha rendido a largo plazo y la que más cae en las crisis.
2. **Deuda** (bonos, letras, depósitos, cuentas remuneradas). Prestas dinero a cambio de un interés pactado. Rentabilidad más baja y previsible; el riesgo es que no te devuelvan (crédito), que suban los tipos (precio) o que la inflación se coma el interés.
3. **Activos sin flujos** (oro, materias primas, cripto, arte). No producen nada: su rentabilidad depende solo de que otro pague más por ellos en el futuro. Pueden diversificar, pero no tienen un «valor por rendimiento» que sirva de ancla.

**Los vehículos no son activos.** Un fondo de inversión, un ETF o un plan de pensiones son **envoltorios**: cajas que contienen acciones, bonos o lo que sea. Primero se decide qué activos; después, con qué envoltorio (lecciones 1.6 y 1.7).

**Lo que dice la historia**: según el anuario de Dimson, Marsh y Staunton (UBS, 2026), 1 dólar invertido en 1900 se había convertido a final de 2025 en **124.854 dólares en acciones**, 284 en bonos largos y 69 en letras del Tesoro. Acciones, un 9,8 % anual; bonos, un 4,6 %; letras, un 3,4 %, con una inflación media del 2,9 %. A cambio, las acciones han tenido caídas del 40–50 % y los bonos, largos periodos de pérdidas reales.
`,
  entender: `
### Una tabla para orientarse
| Familia | Ejemplos | De dónde sale la rentabilidad | Riesgo principal | Con inflación alta |
|---|---|---|---|---|
| Propiedad cotizada | Acciones, fondos y ETFs de bolsa, SOCIMIs | Beneficios y su crecimiento; cambios de valoración | Caídas fuertes y largas; empresas que quiebran | A largo plazo resiste; a corto suele caer |
| Propiedad no cotizada | Vivienda, local, empresa propia | Alquileres o beneficios; revalorización | Iliquidez, concentración, gastos | Resiste bastante (rentas indexadas) |
| Deuda pública | Letras, bonos del Estado | Intereses | Subidas de tipos, inflación | Sufre (salvo bonos ligados a la inflación) |
| Deuda privada | Bonos de empresas | Intereses más altos | Impago, subidas de tipos | Sufre |
| Liquidez | Depósitos, cuentas, monetarios | Tipo de interés a corto | Inflación | Depende de que suban los tipos |
| Sin flujos | Oro, materias primas, cripto | Lo que pague el siguiente comprador | Volatilidad extrema, ausencia de ancla | Materias primas: sí; oro: a muy largo plazo |

### Riesgo y rentabilidad: la relación básica
Los activos con más riesgo **tienen que** ofrecer más rentabilidad esperada; si no, nadie los compraría. Esa rentabilidad extra se llama **prima de riesgo**. Pero ojo con la lógica inversa: más riesgo no garantiza más rentabilidad, solo la hace **esperable** si el riesgo es de los que el mercado paga. Hay riesgos que no se pagan (concentrarse en una sola empresa, por ejemplo), y lo verás en el bloque 2.

### La foto de hoy
| Activo | Dato (noviembre de 2026) |
|---|---|
| Letras del Tesoro a 12 meses | 3,068 % (subasta del 3 de noviembre) |
| Bono alemán a 10 años | ≈ 3,3 % |
| Bono español a 10 años | ≈ 4,0 % (septiembre) |
| Fondos de inversión en España | 479.234 millones de euros (octubre) |
| Peso de las 10 mayores empresas en el S&P 500 | 39,1 % (septiembre) |
| Oro | ≈ 4.100 $/onza (máximo de 5.594 $ en enero) |
| Bitcoin | ≈ 75.700 $ (−27 % en un año) |
| Vivienda en alquiler, rentabilidad bruta | 6,5 % según idealista; 3,0 % según el Banco de España |

La diferencia entre las dos cifras de vivienda ya es una lección (1.8): según cómo se mida, el mismo activo parece el doble de rentable.

### Activos y vehículos
| Vehículo | Qué es | Lección |
|---|---|---|
| Acción individual | Una sola empresa | 1.2 y 1.3 |
| Bono individual o letra | Un solo préstamo | 1.4 y 1.5 |
| Fondo de inversión | Cesta gestionada; en España, traspasable sin impuestos | 1.6 |
| ETF | Cesta que cotiza en bolsa como una acción | 1.7 |
| Derivado | Contrato cuyo valor depende de otro activo | 1.10 |
`,
  fondo: `
### 1. Qué hace que algo tenga valor
Un activo financiero vale el **valor presente de los flujos que dará** (lección 0.2). Para las tres familias:
- **Propiedad**: flujos inciertos y crecientes (dividendos, alquileres). Su valor depende de esos flujos y del tipo de descuento. Modelo de Gordon: P = D / (k − g).
- **Deuda**: flujos fijos y conocidos (cupones y devolución). Su valor depende casi solo del tipo de descuento y de la probabilidad de cobrar.
- **Sin flujos**: no hay nada que descontar. Su precio depende de la oferta y la demanda futuras. Keynes lo comparó con un **concurso de belleza** en el que no se elige la cara más bonita, sino la que se cree que elegirán los demás. No significa que no puedan subir, sino que no hay un «precio justo» calculable.

### 2. La prima de riesgo de las acciones y su debate
Los números de Dimson, Marsh y Staunton muestran que las acciones han rendido a largo plazo entre 3 y 6 puntos anuales más que las letras, en términos reales, en los países con datos desde 1900 (por ejemplo, 3,9 puntos en España y 6,4 en EE. UU.). ¿Por qué?
- **Explicación de riesgo**: las acciones caen justo en los malos momentos (recesiones, paro), cuando el dinero vale más. Hay que pagar por soportar eso.
- **El enigma**: Mehra y Prescott (1985) mostraron que esa prima es demasiado grande para lo que predicen los modelos clásicos (lección 0.8).
- **Sesgo de supervivencia**: los mercados que desaparecieron (Rusia en 1917, China en 1949) no están en todas las series. Eso infla algo la prima medida.
- **¿Se repetirá?** Hay quien argumenta que parte de la prima histórica vino de que las valoraciones subieron a lo largo del siglo XX, algo que no puede repetirse indefinidamente. Es la razón por la que en el bloque 4 se construye la rentabilidad esperada desde las valoraciones actuales.

### 3. Correlación: la razón de mezclar familias
Lo interesante de tener activos distintos no es solo su rentabilidad, sino que **no se mueven igual**. La **correlación** mide de −1 a +1 cuánto se mueven juntos.
- Bonos del Estado y bolsa: durante 2000–2020 tuvieron correlación negativa en muchas crisis (los bonos subían cuando la bolsa caía). En 2022, con inflación, cayeron los dos a la vez: la correlación cambia según el régimen de inflación. Es un tema central de los bloques 2 y 9.
- Oro y bolsa: correlación baja, a veces negativa en pánicos.
- Cripto y bolsa tecnológica: correlación positiva en los últimos años, más alta en caídas.

### 4. Activos reales frente a activos nominales
- **Nominales**: prometen una cantidad fija de euros (bonos, depósitos). La inflación inesperada los daña.
- **Reales**: su valor se mueve con los precios (acciones, inmuebles, materias primas, bonos ligados a la inflación). Protegen mejor a largo plazo, aunque no a corto.

Con la inflación en el 4,9 % en España y el 4,0 % en la zona euro, esta distinción pesa mucho más que hace cinco años.
`,
  caso: {
    titulo: "126 años de tres activos",
    md: `
Según el anuario 2026 de Dimson, Marsh y Staunton para UBS, 1 dólar invertido en 1900:

| Activo | Valor nominal a final de 2025 | Rentabilidad anual |
|---|---|---|
| Acciones | 124.854 $ | 9,8 % |
| Bonos a largo plazo | 284 $ | 4,6 % |
| Letras del Tesoro | 69 $ | 3,4 % |
| Inflación (EE. UU.) | 1 $ de 1900 equivale a 38 $ | 2,9 % |

En términos reales, la diferencia entre acciones y letras es enorme, y se repite en los 21 países con datos continuos. El precio: varias caídas de más del 50 % en el camino y periodos de más de una década sin ganar nada.

> Lo que enseña: el activo más rentable a largo plazo es también el que más paciencia exige. Las otras familias sirven para que puedas mantener esa paciencia.
`
  },
  ejercicios: [
    {
      t: "Rentabilidades anuales a partir de multiplicadores",
      p: `
Con los datos del caso real (1900–2025, 126 años), calcula la rentabilidad anual de bonos y letras, y su rentabilidad real aproximada con una inflación del 2,9 %.
`,
      s: `
1. **Bonos**: 284^(1/126) − 1 = e^(ln 284 / 126) − 1 = e^(5,649 / 126) − 1 = **4,6 %**. Real: 1,046 / 1,029 − 1 ≈ **1,6 %**.
2. **Letras**: 69^(1/126) − 1 = e^(4,234 / 126) − 1 = **3,4 %**. Real: 1,034 / 1,029 − 1 ≈ **0,5 %**.
3. **Acciones**, para comparar: 9,8 % nominal, ≈ 6,6 % real.
4. Lección: casi toda la ventaja de las acciones sobre la liquidez es la prima de riesgo, unos 6 puntos reales al año. A 126 años, convierte 1 dólar en miles frente a menos de 2 en letras, en términos reales.
`
    },
    {
      t: "Clasificar por el derecho que compras",
      p: `
Clasifica en propiedad, deuda o sin flujos: (a) una acción de Iberdrola; (b) una Letra del Tesoro; (c) un ETF del MSCI World; (d) un lingote de oro; (e) una SOCIMI cotizada; (f) un depósito; (g) un bitcoin; (h) un fondo de bonos corporativos.
`,
      s: `
1. **Propiedad**: (a) acción de Iberdrola; (c) ETF del MSCI World (es un envoltorio, pero dentro hay acciones); (e) SOCIMI (propiedad de inmuebles a través de una empresa).
2. **Deuda**: (b) Letra; (f) depósito (prestas al banco); (h) fondo de bonos (envoltorio con deuda dentro).
3. **Sin flujos**: (d) oro; (g) bitcoin.
4. Fíjate en que (c) y (h) son vehículos: lo que importa para el riesgo es lo que llevan dentro.
`
    }
  ],
  errores: [
    "Confundir el vehículo (fondo, ETF) con el activo que contiene.",
    "Pensar que más riesgo garantiza más rentabilidad: solo la hace esperable si es un riesgo que el mercado paga.",
    "Comparar rentabilidades nominales de activos de épocas o países distintos.",
    "Creer que la correlación entre activos es fija: en 2022 bonos y acciones cayeron a la vez.",
    "Valorar un activo sin flujos como si los tuviera."
  ],
  test: [
    { p: "¿Qué derecho compras con un bono?", o: ["Una parte de la empresa", "Un préstamo: te deben intereses y la devolución", "Nada, solo el precio"], c: 1, e: "El bonista es acreedor, no dueño." },
    { p: "¿Qué es un ETF?", o: ["Un tipo de activo, como las acciones", "Un vehículo que contiene activos", "Un derivado"], c: 1, e: "El riesgo depende de lo que lleva dentro." },
    { p: "Entre 1900 y 2025, ¿qué rentabilidad anual nominal dieron las letras del Tesoro?", o: ["Un 0,5 %", "Un 3,4 %", "Un 9,8 %"], c: 1, e: "Un 3,4 % nominal, apenas un 0,5 % real." },
    { p: "¿Por qué el oro no tiene un «precio justo» calculable por descuento de flujos?", o: ["Porque es muy volátil", "Porque no produce flujos que descontar", "Porque cotiza en dólares"], c: 1, e: "Su precio depende solo de oferta y demanda futuras." },
    { p: "¿Qué ocurrió con la correlación entre bonos y bolsa en 2022?", o: ["Fue muy negativa", "Cayeron los dos a la vez", "Subieron los dos"], c: 1, e: "Con inflación alta, la diversificación entre bonos y bolsa falló." }
  ],
  lecturas: [
    { t: "Global Investment Returns Yearbook 2026 (resumen público)", a: "Dimson, Marsh y Staunton para UBS" },
    { t: "Un paseo aleatorio por Wall Street", a: "Burton Malkiel", n: "Visión general de todos los activos. Muy legible." },
    { t: "Teoría general del empleo, el interés y el dinero, capítulo 12", a: "John Maynard Keynes, 1936", n: "El concurso de belleza." }
  ]
});


/* ---- l02.js ---- */
LECCIONES.push({
  id: "b1-l2", num: "1.2",
  titulo: "Acciones: qué compras y cómo se forma su precio",
  resumen: "Una acción es una parte de una empresa: te da derecho a una porción de sus beneficios futuros, después de que cobren todos los demás. Su precio refleja lo que el mercado espera de esos beneficios y el tipo con el que los descuenta. Por eso se mueve tanto: pequeños cambios en las expectativas cambian mucho el valor.",
  esencial: `
Al comprar una **acción** te conviertes en copropietario de una empresa. Eso te da:
- **Derecho a los beneficios**: la empresa puede repartirlos como **dividendos**, recomprar sus propias acciones o reinvertirlos para crecer.
- **Derecho a voto** en la junta de accionistas.
- **Responsabilidad limitada**: como mucho pierdes lo que pusiste; no respondes de las deudas de la empresa.
- **Derecho residual**: cobras **lo que sobra** después de pagar a empleados, proveedores, Hacienda, bancos y bonistas. Si va bien, todo lo que sobra es tuyo; si va mal, eres el último en cobrar y puedes quedarte sin nada.

**¿Qué mueve el precio?** Dos cosas: lo que el mercado espera que la empresa gane en el futuro y el tipo de interés con el que se descuentan esas ganancias (lección 0.2). Las noticias mueven el precio solo en la medida en que cambian esas expectativas. Por eso una empresa puede presentar buenos resultados y caer: el mercado ya esperaba más.

**Los números básicos**
- **Capitalización**: precio × número de acciones. Lo que vale la empresa en bolsa.
- **BPA**: beneficio por acción.
- **PER**: precio / BPA. Cuántos años de beneficio actual pagas. Un PER de 20 equivale a una **rentabilidad por beneficio** del 5 % (1 / 20).
- **Rentabilidad por dividendo**: dividendo anual / precio.

**Tipos de acciones**: grandes y pequeñas (*large caps* y *small caps*), de crecimiento y de valor, por sectores (bancos, energía, tecnología…) y por países. Cada grupo se comporta de forma diferente según el momento del ciclo; lo verás en los bloques 2, 4 y 5.
`,
  entender: `
### Dividendos, recompras y reinversión
Una empresa que gana dinero puede:
1. **Pagar dividendos**: dinero en tu cuenta. En España, tributa en la base del ahorro al cobrarlo.
2. **Recomprar acciones**: compra sus propias acciones y las amortiza. Cada accionista que queda tiene una porción mayor. Si una empresa recompra el 5 % de sus acciones, el beneficio por acción sube un 5,26 % aunque el beneficio total no cambie. No tributa hasta que vendes.
3. **Reinvertir**: si cada euro reinvertido rinde más de lo que exigen los accionistas, crea valor. Si rinde menos, lo destruye (aunque haga crecer la empresa).

### Cómo se compra y se vende
En bolsa hay un **libro de órdenes**: quién quiere comprar y a qué precio máximo (**demanda**, *bid*) y quién quiere vender y a qué precio mínimo (**oferta**, *ask*). La diferencia entre el mejor precio de compra y el mejor de venta es la **horquilla** (*spread*), un coste oculto de cada operación.

| Empresa | Mejor compra | Mejor venta | Horquilla |
|---|---|---|---|
| Gran empresa muy negociada | 30,00 € | 30,01 € | 0,03 % |
| Pequeña empresa poco negociada | 4,95 € | 5,05 € | 2,0 % |

Por eso en las *small caps* conviene usar **órdenes limitadas** (fijas el precio máximo que pagas) y no **órdenes a mercado** (aceptas el precio que haya).

### Ampliaciones, diluciones y *splits*
- **Ampliación de capital**: la empresa emite acciones nuevas. Si no acudes, tu porcentaje baja (**dilución**). Hecha para invertir bien, puede crear valor; hecha para tapar pérdidas, suele ser mala señal.
- ***Split***: dividir cada acción en varias. No cambia nada del valor; solo el precio unitario.

### Lo que no es una acción
- El precio de una acción no es «caro» o «barato» por sí mismo: 500 € puede ser barato y 2 € caro. Lo que importa es el precio **en relación con lo que la empresa gana y ganará**.
- Una buena empresa no siempre es una buena inversión: depende del precio que pagas. Es la idea central del bloque 4.
`,
  fondo: `
### 1. El PER que «justifica» el modelo de Gordon
Si una empresa reparte una fracción b de su beneficio (*payout*), crece a un ritmo g para siempre y los accionistas exigen una rentabilidad k, el modelo de Gordon (lección 0.2) da:

$$ P = D / (k − g) = b · BPA / (k − g)   ⟹   PER = b / (k − g)

Con un *payout* del 50 % y k = 8 %:

| Crecimiento g | PER implícito |
|---|---|
| 3 % | 10 |
| 4 % | 12,5 |
| 5 % | 16,7 |
| 6 % | 25 |

Un punto más de crecimiento esperado puede subir el PER un 50 %. Y si k sube un punto (por ejemplo, porque suben los tipos), con g = 4 % el PER pasa de 12,5 a 10. Las acciones son activos de **duración larga**: su valor depende mucho de flujos lejanos, por eso son tan sensibles a cambios pequeños en las expectativas y en los tipos.

### 2. ¿Es eficiente el precio? La hipótesis de los mercados eficientes
Eugene Fama (1970) distinguió tres versiones:
- **Débil**: los precios pasados no permiten predecir los futuros (el análisis técnico no da ventaja sistemática).
- **Semifuerte**: los precios incorporan rápidamente toda la información pública (analizar balances públicos no da ventaja sistemática).
- **Fuerte**: incorporan incluso la información privada.

La evidencia apoya bastante las versiones débil y semifuerte en las grandes empresas, con anomalías documentadas (lo verás en los bloques 2 y 4). Grossman y Stiglitz (1980) señalaron la paradoja: si los precios fueran perfectamente eficientes, nadie tendría incentivo para analizar, y entonces dejarían de serlo. Hay un equilibrio en el que analizar compensa justo lo que cuesta. Es más probable encontrar ineficiencias donde hay menos analistas: empresas pequeñas, poco seguidas o poco líquidas.

### 3. La acción como opción: Merton (1974)
Como el accionista cobra lo que sobra tras pagar la deuda y su pérdida está limitada, su posición equivale a una **opción de compra** sobre los activos de la empresa con precio de ejercicio igual a la deuda. Consecuencias:
- En empresas muy endeudadas, la acción se comporta como una opción: vale algo aunque la empresa valga menos que su deuda, porque podría recuperarse.
- Los accionistas de empresas en apuros tienen incentivos a asumir más riesgo (más volatilidad sube el valor de la opción), a costa de los acreedores.
- Este modelo es la base de muchas medidas profesionales de riesgo de crédito (lección 1.5).

### 4. El problema de agencia
Jensen y Meckling (1976) formalizaron el conflicto entre los accionistas (dueños) y los directivos (que deciden). Los directivos pueden preferir crecer por crecer, cobrar más o evitar riesgos que los accionistas querrían asumir. El gobierno corporativo (consejeros independientes, retribución ligada a resultados a largo plazo, voto de los accionistas) intenta alinear intereses. Para el inversor, la **asignación de capital** de la dirección (dividendos, recompras, adquisiciones, deuda) es una de las cosas que más valor crea o destruye a largo plazo. Bloque 4.
`,
  caso: {
    titulo: "Banco Popular, 2017: el último en cobrar",
    md: `
En junio de 2017, la autoridad europea de resolución intervino el Banco Popular por falta de liquidez y lo vendió al Banco Santander por **1 euro**. Las acciones quedaron amortizadas: sus dueños perdieron toda la inversión. También perdieron su dinero los tenedores de algunos instrumentos de deuda subordinada. Los depositantes, en cambio, no perdieron nada.

Un año antes, en 2016, el banco había hecho una ampliación de capital a la que acudieron muchos pequeños inversores.

> Lo que enseña: el accionista es el dueño, y por eso es el último en cobrar. Su pérdida está limitada a lo invertido, pero puede ser del 100 %. Es la razón de diversificar entre muchas empresas: el riesgo de una sola puede llegar a cero.
`
  },
  ejercicios: [
    {
      t: "Los números básicos de una acción",
      p: `
Una empresa tiene 1.000 millones de acciones que cotizan a 30 €. Este año ha ganado 2.000 millones y reparte 1.200 millones en dividendos. Calcula la capitalización, el BPA, el PER, la rentabilidad por beneficio, la rentabilidad por dividendo y el *payout*.
`,
      s: `
1. **Capitalización**: 1.000 M × 30 € = **30.000 millones**.
2. **BPA**: 2.000 M / 1.000 M = **2 €**.
3. **PER**: 30 / 2 = **15**.
4. **Rentabilidad por beneficio**: 2 / 30 = **6,7 %**.
5. **Dividendo por acción**: 1,20 €. **Rentabilidad por dividendo**: 1,20 / 30 = **4 %**.
6. **Payout**: 1.200 / 2.000 = **60 %**.
`
    },
    {
      t: "El efecto de una recompra",
      p: `
La empresa anterior dedica sus 1.200 millones a recomprar acciones a 30 € en lugar de pagar dividendos. Si el beneficio del año siguiente vuelve a ser 2.000 millones, ¿cuánto sube el BPA?
`,
      s: `
1. Acciones recompradas: 1.200 M / 30 € = 40 millones (el 4 %).
2. Acciones restantes: 960 millones.
3. Nuevo BPA: 2.000 / 960 = **2,083 €**, un **4,2 % más** con el mismo beneficio total.
4. Para el accionista, en un mundo sin impuestos ni costes, dividendo y recompra son equivalentes: o cobras 1,20 € por acción o tu porción de la empresa crece un 4,2 %. La diferencia en España es fiscal: el dividendo tributa al cobrarlo y la recompra no tributa hasta que vendes.
`
    },
    {
      t: "Sensibilidad del PER",
      p: `
Con el modelo de Gordon, una empresa reparte el 50 % de su beneficio, crece un 4 % y los accionistas exigen un 8 %. ¿Qué PER le corresponde? ¿Qué pasa si la rentabilidad exigida sube al 9 % por una subida de tipos? ¿Y si además el mercado rebaja el crecimiento esperado al 3 %?
`,
      s: `
1. **Inicial**: PER = 0,5 / (0,08 − 0,04) = **12,5**.
2. **k = 9 %**: PER = 0,5 / (0,09 − 0,04) = **10**. El precio cae un **20 %** sin que cambien los beneficios.
3. **k = 9 % y g = 3 %**: PER = 0,5 / (0,09 − 0,03) = **8,3**. Caída acumulada del **33 %**.
4. Así se explican caídas fuertes de bolsa en años en que los beneficios apenas cambian: el mercado reajusta tipos y expectativas.
`
    }
  ],
  errores: [
    "Pensar que una acción de 2 € es más barata que una de 200 €.",
    "Confundir buena empresa con buena inversión: el precio pagado lo decide.",
    "Usar órdenes a mercado en valores poco líquidos.",
    "Creer que los dividendos son un regalo: el precio de la acción baja en la misma cantidad cuando se pagan.",
    "Acudir a una ampliación de capital sin entender para qué es."
  ],
  test: [
    { p: "Si una empresa quiebra, ¿quién cobra último?", o: ["Los bonistas", "Los accionistas", "Los proveedores"], c: 1, e: "El accionista tiene un derecho residual: cobra lo que sobra." },
    { p: "Un PER de 25 equivale a una rentabilidad por beneficio de…", o: ["25 %", "4 %", "2,5 %"], c: 1, e: "1 / 25 = 4 %." },
    { p: "Una empresa recompra el 5 % de sus acciones. Con el mismo beneficio, el BPA…", o: ["No cambia", "Sube un 5,26 %", "Sube un 5 %"], c: 1, e: "1 / 0,95 − 1 = 5,26 %." },
    { p: "Según Gordon, con payout 50 % y k = 8 %, si g pasa del 4 % al 5 %, el PER…", o: ["Sube de 12,5 a 16,7", "Sube de 12,5 a 13", "No cambia"], c: 0, e: "PER = b / (k − g): un punto de crecimiento pesa mucho." },
    { p: "¿Por qué Merton describe la acción como una opción?", o: ["Porque cotiza en un mercado de opciones", "Porque el accionista cobra lo que sobra tras la deuda y su pérdida está limitada", "Porque paga dividendos"], c: 1, e: "Equivale a una opción de compra sobre los activos con precio de ejercicio igual a la deuda." }
  ],
  lecturas: [
    { t: "Efficient Capital Markets: A Review of Theory and Empirical Work", a: "Eugene Fama, Journal of Finance, 1970" },
    { t: "On the Pricing of Corporate Debt", a: "Robert Merton, Journal of Finance, 1974", n: "Técnico." },
    { t: "Los ensayos de Warren Buffett", a: "Lawrence Cunningham (ed.)", n: "Las cartas de Buffett ordenadas por temas: dividendos, recompras, asignación de capital." }
  ]
});


/* ---- l03.js ---- */
LECCIONES.push({
  id: "b1-l3", num: "1.3",
  titulo: "Acciones: de dónde sale la rentabilidad",
  resumen: "La rentabilidad de la bolsa tiene tres piezas: dividendos, crecimiento de los beneficios y cambios en lo que el mercado paga por ellos. A largo plazo dominan las dos primeras; a corto, la tercera. Y está muy concentrada: la mayoría de las acciones rinden menos que una letra del Tesoro, y unas pocas generan toda la riqueza. Por eso los índices y la diversificación funcionan.",
  esencial: `
**Las tres piezas de la rentabilidad** (John Bogle la explicaba así):

$$ rentabilidad ≈ rentabilidad por dividendo + crecimiento del beneficio + cambio de valoración

- **Dividendo**: lo que te pagan cada año. Hoy, en un índice mundial, en torno al 1,5–2 %.
- **Crecimiento**: cuánto crecen los beneficios por acción. A largo plazo, algo parecido al crecimiento nominal de la economía.
- **Cambio de valoración**: si el mercado pasa a pagar más (o menos) por cada euro de beneficio. Es la pieza que domina a corto plazo y la única que no puede crecer para siempre.

**Los índices.** Un índice bursátil es una cesta de referencia: el **MSCI World** (grandes y medianas empresas de 23 países desarrollados), el **S&P 500** (500 grandes de EE. UU.), el **Euro Stoxx 50** o el **IBEX 35**. Casi todos ponderan por **capitalización**: cuanto más vale una empresa, más pesa. Hoy las 10 mayores del S&P 500 suman un **39 %** del índice, un nivel récord.

**El dato que cambia cómo miras la bolsa.** El profesor Hendrik Bessembinder estudió todas las acciones de EE. UU. desde 1926: **el 58 % rindió menos que las letras del Tesoro** a lo largo de su vida, y apenas **el 4 % de las empresas generó toda la riqueza** neta del mercado. La bolsa en conjunto sube porque unas pocas empresas suben muchísimo.

**Consecuencias prácticas**
- Con pocas acciones elegidas, lo más probable es quedarse fuera de esas pocas ganadoras.
- Un índice amplio las tiene siempre dentro, sin necesidad de adivinarlas.
- Si eliges acciones individuales (como en small caps), la diversificación y el tamaño de cada posición importan tanto como la elección.
`,
  entender: `
### La descomposición en números
Una bolsa con un 1,5 % de rentabilidad por dividendo y beneficios que crecen un 5 % al año rendiría un 6,5 % anual si el PER no cambiara. Pero si en 10 años el PER pasa de 25 a 20:

$$ cambio de valoración anual = (20 / 25)^(1/10) − 1 = −2,2 %

La rentabilidad total sería de un **4,3 %** anual. Si el PER subiera de 25 a 30, sería de un **8,3 %**. A 10 años, el punto de partida de la valoración pesa mucho; a 30 años, mucho menos.

### Índice de precios frente a índice con dividendos
- **Índice de precios**: solo recoge la cotización. El IBEX 35 que dan las noticias es de precios.
- **Índice de rentabilidad total** (o con dividendos netos o brutos): incluye los dividendos reinvertidos. Es el que debes comparar con tu fondo.

Con un 2 % anual de subida de precios y un 4 % de dividendo, en 10 años el índice de precios sube un 22 % y el de rentabilidad total, un 79 %. Comparar un fondo con el índice de precios hace que parezca mejor de lo que es.

### Cómo se pondera un índice
| Método | Cómo funciona | Ventaja | Inconveniente |
|---|---|---|---|
| Por capitalización | Cada empresa pesa según su valor en bolsa | Barato de replicar, refleja el mercado real | Concentra en las más caras y grandes |
| Equiponderado | Todas pesan lo mismo | Más diversificado | Más rotación y costes; más peso en pequeñas |
| Por fundamentales | Pesa según ventas, beneficios o dividendos | Menos dependiente del precio | Se aleja del mercado |

### La concentración de hoy
| | Peso de las 10 mayores en el S&P 500 |
|---|---|
| 1990–2015 | En torno al 18–23 % |
| Pico de 2000 (burbuja puntocom) | ≈ 27 % |
| Final de 2025 | 40,7 % (récord) |
| Septiembre de 2026 | 39,1 %; la mayor, un 8,4 % |

Esas 10 empresas aportan en torno al 32 % de los beneficios del índice, menos que su peso. Es decir, el mercado paga más por ellas que por el resto. Puede estar justificado si sus beneficios crecen más; si no, es un riesgo de concentración. Y como las empresas de EE. UU. son la gran mayoría del MSCI World, esa concentración también está en los fondos mundiales.
`,
  fondo: `
### 1. Por qué la acción típica pierde y el índice gana: asimetría
Supón que cada acción individual tiene una rentabilidad media aritmética del 10 % anual con una volatilidad del 50 % (habitual en empresas individuales, sobre todo pequeñas). Con la fórmula de la lección 0.4:

$$ mediana anual ≈ e^(ln 1,10 − 0,5² / 2) − 1 = −2,9 %

La acción **típica pierde dinero** aunque la media sea +10 %. Con el modelo lognormal, a 30 años:
- el **63 %** de las acciones acabaría por debajo de lo invertido;
- solo un **26 %** batiría a una letra al 3 %;
- la media de la cesta se multiplica por 17, gracias a unas pocas que se multiplican por cientos.

En una simulación de 100.000 acciones con esos parámetros, el **0,35 %** de las acciones genera la mitad de toda la riqueza. Es exactamente el patrón que Bessembinder encontró en los datos reales: 86 empresas explican la mitad de la riqueza creada en EE. UU. desde 1926, y un estudio posterior con 64.000 empresas de 43 países encontró que solo el **2,4 %** generó toda la riqueza neta en 30 años.

La conclusión matemática es potente: con volatilidad alta, **diversificar no solo reduce el riesgo, sino que aumenta la rentabilidad típica**, porque asegura tener dentro las pocas ganadoras extremas.

### 2. La identidad de Campbell y Shiller
Partiendo de que la rentabilidad es dividendo más subida de precio, Campbell y Shiller (1988) mostraron que la rentabilidad por dividendo (o su inversa, la valoración) contiene información sobre la rentabilidad futura a largo plazo: cuando las acciones están caras respecto a sus dividendos o beneficios, la rentabilidad de los 10 años siguientes tiende a ser menor. Robert Shiller popularizó el **CAPE** (PER ajustado al ciclo: precio entre la media de 10 años de beneficios reales). Importa: el CAPE predice mal el año que viene y bastante mejor la década siguiente. Bloques 4 y 9.

### 3. Los factores: por qué unas acciones rinden más que otras
Fama y French (1992, 1993) mostraron que, además del riesgo de mercado, dos características explicaban diferencias sistemáticas de rentabilidad:
- **Tamaño**: las empresas pequeñas rendían más (de media, con mucho ruido y largas temporadas de peor comportamiento).
- **Valor**: las empresas baratas respecto a sus fundamentales rendían más que las caras.

Después se añadieron **rentabilidad** (empresas muy rentables), **inversión** (empresas que invierten de forma conservadora) y **momento** (lo que ha subido en el último año tiende a seguir subiendo a corto plazo, Jegadeesh y Titman, 1993). El debate sigue abierto: ¿son primas por riesgo, errores de comportamiento o hallazgos que desaparecen al publicarse? Para las *small caps*, la evidencia reciente apunta a que el tamaño por sí solo no basta: las pequeñas **rentables y baratas** son las que han rendido más; las pequeñas sin beneficios, mucho menos. Bloque 2 y bloque 4.

### 4. Concentración y riesgo: el número efectivo de empresas
Una forma de medir la diversificación real de un índice es el **número efectivo** de empresas: 1 / Σ wᵢ², donde wᵢ es el peso de cada una. Un índice de 500 empresas con pesos iguales tendría 500; con los pesos actuales del S&P 500, el número efectivo es bastante menor (del orden de pocas decenas), porque las mayores pesan muchísimo. «Tengo 500 empresas» no significa «tengo 500 apuestas iguales».
`,
  caso: {
    titulo: "El S&P 500 de 2026: 500 empresas, diez que mandan",
    md: `
Según S&P Dow Jones Indices, a 30 de septiembre de 2026 el S&P 500 tenía 503 componentes; la mayor empresa pesaba un **8,4 %** y las 10 mayores, un **39,1 %**. A final de 2025 llegaron al **40,7 %**, récord histórico, frente a un pico de en torno al 27 % en la burbuja puntocom de 2000. Las 10 mayores aportaban en torno al **32 %** de los beneficios del índice.

Para un inversor en un fondo indexado al S&P 500, casi 40 céntimos de cada euro están en 10 empresas, la mayoría tecnológicas y ligadas a la inteligencia artificial. No es un problema en sí mismo (son empresas muy rentables), pero sí un riesgo que conviene conocer: si esas 10 cayeran un 30 % y el resto no se moviera, el índice caería casi un 12 %.

> Lo que enseña: un índice ponderado por capitalización diversifica, pero refleja lo que el mercado valora hoy, incluidas sus euforias. Saber qué hay dentro es parte de saber qué riesgo tienes.
`
  },
  ejercicios: [
    {
      t: "La descomposición de Bogle",
      p: `
Un índice tiene una rentabilidad por dividendo del 1,2 % y se espera que sus beneficios crezcan un 6 % anual durante 10 años. Hoy cotiza a un PER de 30. Calcula la rentabilidad anual esperada si el PER (a) se mantiene; (b) baja a 22 en 10 años.
`,
      s: `
1. **(a)** Sin cambio de valoración: 1,2 % + 6 % = **7,2 %** anual.
2. **(b)** Cambio de valoración: (22 / 30)^(1/10) − 1 = −3,1 % anual. Total: 1,2 + 6 − 3,1 = **4,1 %** anual.
3. Con las mismas empresas y los mismos beneficios, la rentabilidad cae a algo más de la mitad solo por la valoración de partida. Por eso, cuando el mercado está caro, conviene esperar rentabilidades más modestas, sin que eso signifique que vaya a caer.
`
    },
    {
      t: "Índice de precios o con dividendos",
      p: `
Durante 10 años, el precio de un índice sube un 2 % anual y reparte un 4 % de dividendo cada año. Un fondo que lo sigue, con dividendos reinvertidos y un 0,3 % de costes, ha ganado un 70 % en ese periodo. ¿Lo ha hecho bien?
`,
      s: `
1. **Índice de precios**: 1,02¹⁰ = 1,219 → +21,9 %.
2. **Índice de rentabilidad total**: 1,06¹⁰ = 1,791 → +79,1 %.
3. Contra el índice de precios, el fondo parece brillante (+70 % frente a +22 %). Contra el de rentabilidad total, se queda casi 10 puntos por detrás, algo más de lo que explica su coste (1,057¹⁰ = 1,74 → +74 %).
4. Compara siempre con el índice de rentabilidad total.
`
    },
    {
      t: "Riesgo de concentración",
      p: `
Las 10 mayores empresas pesan un 39,1 % de un índice. Calcula cuánto cae el índice si (a) esas 10 caen un 30 % y el resto se queda igual; (b) el resto sube un 10 % a la vez.
`,
      s: `
1. **(a)** 0,391 × (−30 %) = **−11,7 %**.
2. **(b)** 0,391 × (−30 %) + 0,609 × 10 % = −11,7 % + 6,1 % = **−5,6 %**.
3. Aunque 490 empresas suban un 10 %, el índice cae. Así de concentrado está el resultado.
`
    }
  ],
  errores: [
    "Comparar tu fondo con un índice de precios (sin dividendos).",
    "Creer que la mayoría de las acciones bate a la liquidez: la mayoría no lo hace; el índice sí.",
    "Pensar que «500 empresas» significa 500 apuestas del mismo tamaño.",
    "Extrapolar a 10 años la rentabilidad de una década en la que el PER subió mucho.",
    "Tener pocas acciones individuales y esperar la rentabilidad del índice."
  ],
  test: [
    { p: "Según Bessembinder, ¿qué porcentaje de acciones de EE. UU. rindió menos que las letras del Tesoro en su vida?", o: ["En torno al 10 %", "En torno al 58 %", "En torno al 90 %"], c: 1, e: "Y solo un 4 % de las empresas generó toda la riqueza neta." },
    { p: "¿Qué pieza de la rentabilidad domina a corto plazo?", o: ["El dividendo", "El crecimiento del beneficio", "El cambio de valoración"], c: 2, e: "A corto plazo el PER se mueve mucho más que los beneficios." },
    { p: "Una acción con media aritmética del 10 % y volatilidad del 50 %. ¿Su rentabilidad mediana?", o: ["+10 %", "Alrededor del −3 %", "+5 %"], c: 1, e: "e^(ln 1,10 − 0,125) − 1 ≈ −2,9 %: la típica pierde." },
    { p: "El IBEX 35 que dan las noticias…", o: ["Incluye dividendos", "Es un índice de precios, sin dividendos", "Está ponderado por igual"], c: 1, e: "Para comparar un fondo, usa la versión con dividendos." },
    { p: "¿Qué factor de Fama y French se refiere a empresas baratas respecto a sus fundamentales?", o: ["Tamaño", "Valor", "Momento"], c: 1, e: "Valor: las baratas han tendido a rendir más que las caras a largo plazo." }
  ],
  lecturas: [
    { t: "Do Stocks Outperform Treasury Bills?", a: "Hendrik Bessembinder, Journal of Financial Economics, 2018", n: "Gratis en SSRN." },
    { t: "El pequeño libro para invertir con sentido común", a: "John C. Bogle", n: "La descomposición de la rentabilidad, explicada por su autor." },
    { t: "Exuberancia irracional", a: "Robert Shiller", n: "El CAPE y las burbujas." },
    { t: "The Cross-Section of Expected Stock Returns", a: "Eugene Fama y Kenneth French, Journal of Finance, 1992" }
  ]
});


/* ---- l04.js ---- */
LECCIONES.push({
  id: "b1-l4", num: "1.4",
  titulo: "Bonos: precio, rentabilidad y curva de tipos",
  resumen: "Un bono es un préstamo con condiciones fijadas: cupón, plazo y devolución. Si lo mantienes hasta el vencimiento y el emisor paga, sabes de antemano lo que ganarás. Si lo vendes antes, su precio depende de los tipos de interés: suben los tipos, baja el precio, y más cuanto más largo es el bono. La curva de tipos resume lo que el mercado paga a cada plazo.",
  esencial: `
Un **bono** es un préstamo que haces a un Estado o a una empresa. Sus piezas:
- **Nominal**: lo que te devolverán al final (por ejemplo, 1.000 €).
- **Cupón**: el interés anual fijo sobre el nominal (por ejemplo, un 3 %: 30 € al año).
- **Vencimiento**: cuándo te devuelven el nominal.
- **Emisor**: quién te lo debe. De él depende el riesgo de impago (lección 1.5).

Las **Letras del Tesoro** son bonos cortos (3 a 12 meses) sin cupón: las compras por debajo de 1.000 € y te devuelven 1.000 €. La diferencia es tu interés. En la subasta del 3 de noviembre de 2026, las letras a 12 meses dieron un **3,068 %**, el nivel más alto desde julio de 2024.

**La regla de oro: precio y tipos se mueven al revés.** Si compras un bono al 3 % y luego el mercado ofrece un 4 % por bonos parecidos, nadie te pagará el precio completo por el tuyo: su precio cae hasta que rinda lo mismo que los nuevos. Cuanto más largo es el bono, más cae (lección 0.2, duración).

**Dos formas de tener un bono**
- **Hasta el vencimiento**: si el emisor paga, ganas exactamente la **TIR** (tasa interna de rentabilidad) con la que compraste, pase lo que pase con los tipos entretanto.
- **Vendiendo antes** (o a través de un fondo, que siempre está comprando y vendiendo): ganas o pierdes según se muevan los tipos.

**La curva de tipos** muestra lo que rinde la deuda de un mismo emisor a cada plazo. Normalmente sube con el plazo (prestar a 10 años exige más que a 1 año). Hoy en España: letras a 3 meses al 2,7 %, a 12 meses al 3,1 % y bono a 10 años en torno al 4 %. Cuando la curva se **invierte** (los plazos cortos rinden más que los largos), históricamente ha anticipado recesiones.
`,
  entender: `
### El precio de un bono
El precio es el valor presente de sus pagos (lección 0.2), descontados a la rentabilidad que exige hoy el mercado (y):

$$ P = Σ C / (1 + y)ᵗ + N / (1 + y)ⁿ

Un bono a 10 años con cupón del 3 % (nominal 100):

| Rentabilidad exigida | Precio |
|---|---|
| 2 % | 108,98 |
| 3 % | 100,00 |
| 4 % | 91,89 |
| 5 % | 84,56 |

Si la rentabilidad exigida coincide con el cupón, el bono cotiza a la par (100). Si es mayor, por debajo; si es menor, por encima.

### El plazo multiplica la sensibilidad
Mismo cupón (3 %), rentabilidad exigida que pasa del 3 % al 4 %:

| Plazo | Precio nuevo | Duración modificada |
|---|---|---|
| 2 años | 98,11 (−1,9 %) | 1,9 |
| 10 años | 91,89 (−8,1 %) | 8,5 |
| 30 años | 82,71 (−17,3 %) | 19,6 |

### Cupón, rentabilidad corriente y TIR: tres cifras distintas
Un bono con cupón del 2 %, a 8 años, que cotiza a 92:
- **Cupón**: 2 % sobre el nominal.
- **Rentabilidad corriente**: cupón / precio = 2 / 92 = 2,17 %.
- **TIR**: el tipo que iguala el precio con todos los pagos futuros = **3,15 %**. Incluye la ganancia de comprar a 92 y cobrar 100 al final.

La que sirve para comparar es la **TIR**.

### Comprar Letras y bonos del Estado
- Directamente en el Tesoro Público (cuenta directa, sin comisiones de custodia), en subastas.
- A través de un banco o bróker, en subasta o en el mercado secundario.
- En las letras, el precio sale de: precio = 100 / (1 + i · días / 360). A 364 días y un 3,068 %, cuestan 96,99 € por cada 100 € de nominal.
- Los intereses tributan en la base del ahorro (lección 0.4).

### La curva de tipos hoy
| Plazo | España | Alemania |
|---|---|---|
| 3 meses (letras) | 2,665 % | |
| 6 meses | 2,845 % | |
| 12 meses | 3,068 % | |
| 2 años | | ≈ 3,0 % |
| 10 años | ≈ 4,0 % (sept.) | ≈ 3,3 % |

La curva tiene pendiente positiva. La diferencia entre el bono español y el alemán a 10 años es la **prima de riesgo** de España (lección 1.5).
`,
  fondo: `
### 1. La TIR como tasa interna de rentabilidad y su supuesto oculto
La TIR de un bono es exactamente la TIR de la lección 0.2 aplicada a sus flujos. Supone que los cupones se reinvierten a la misma TIR. Si los tipos bajan, reinviertes a menos y tu rentabilidad final queda algo por debajo de la TIR inicial; si suben, algo por encima. Para un bono **cupón cero** (como las letras) no hay cupones que reinvertir: la TIR es exactamente lo que ganarás si lo mantienes.

### 2. Tipos al contado, implícitos y la teoría de las expectativas
La TIR de cada bono mezcla todos sus flujos. Los profesionales separan la curva en **tipos al contado** (*spot*), uno para cada plazo, como si cada pago fuera un cupón cero. De ellos salen los **tipos implícitos** (*forward*): el tipo para un periodo futuro que está «escondido» en la curva actual.

$$ (1 + s₂)² = (1 + s₁) · (1 + f₁,₂)

Si el tipo a 1 año es del 3 % y el de 2 años del 3,4 %, el tipo implícito a 1 año dentro de 1 año es 1,034² / 1,03 − 1 = **3,80 %**.

Tres teorías intentan explicar la forma de la curva:
- **Expectativas**: los tipos largos son la media de los tipos cortos esperados. Una curva con pendiente positiva anticipa subidas de tipos.
- **Preferencia por la liquidez / prima por plazo**: prestar a largo tiene más riesgo, así que se exige una **prima por plazo** además de las expectativas. Explica que la curva suela tener pendiente positiva incluso sin subidas esperadas.
- **Mercados segmentados**: distintos inversores (bancos en el corto, aseguradoras y fondos de pensiones en el largo) tienen preferencias de plazo, y la oferta y la demanda en cada tramo pesan.

La evidencia sugiere que las tres tienen algo de razón y que la prima por plazo varía mucho en el tiempo: fue negativa durante los años de compras masivas de bonos de los bancos centrales y ha vuelto a ser positiva.

### 3. La curva invertida como señal
Campbell Harvey (1986) y Estrella y Mishkin (1996) mostraron que la pendiente de la curva (diferencia entre el tipo a 10 años y el de 3 meses o 2 años) es uno de los mejores predictores de recesión en EE. UU. a 12–18 meses vista. La lógica: el banco central sube los tipos cortos para frenar la economía y el mercado espera que acabe bajándolos. Es una señal con retrasos variables y algún falso positivo (la inversión de 2022–2023 en EE. UU. no fue seguida de una recesión inmediata). Bloque 5.

### 4. Rentabilidad de un bono en un periodo y la duración como horizonte de equilibrio
Si compras a la par un bono a 10 años con cupón del 4 % y al año siguiente la rentabilidad exigida sube al 5 %, tu rentabilidad en ese año es el cupón más el cambio de precio del bono (que ahora es a 9 años): (92,89 + 4) / 100 − 1 = **−3,1 %**. Si baja al 3 %, **+11,8 %**.

Un resultado útil: para una cartera de bonos que se reinvierte, la **duración** es aproximadamente el plazo a partir del cual una subida de tipos deja de perjudicarte. A corto plazo, el precio cae; después, reinviertes los cupones y los vencimientos a tipos más altos y recuperas. Por eso un fondo de renta fija con duración 5 encaja con un horizonte de unos 5 años o más.

### 5. Convexidad
La relación precio-rentabilidad es curva. Con la misma variación de tipos, el bono sube más cuando los tipos bajan que lo que cae cuando suben (108,98 frente a 91,89 en la tabla de un bono a 10 años). Esa **convexidad** es una propiedad favorable para el tenedor y es mayor cuanto más largo es el bono y menor su cupón.
`,
  caso: {
    titulo: "De tipos negativos a máximos de 15 años",
    md: `
Durante buena parte de 2019–2021 (y en momentos de 2016), el bono alemán a 10 años rindió por debajo de cero: quien lo compraba aceptaba recibir menos de lo que prestaba. Los bonos largos emitidos en esa época tenían cupones mínimos y duraciones enormes.

Cuando la inflación y los tipos subieron a partir de 2022, sus precios se desplomaron, como predice la duración. En 2026, con la inflación de nuevo al alza, el Bund ha superado el 3 % por primera vez en más de 15 años y cotizaba en torno al **3,3 %** a principios de noviembre. Las letras españolas a 12 meses están en su nivel más alto desde julio de 2024.

> Lo que enseña: para quien compra hoy, unos tipos más altos son una buena noticia (mejor rentabilidad futura). Para quien ya tenía bonos largos comprados con tipos bajos, son pérdidas de precio. El mismo movimiento, dos efectos opuestos según cuándo entraste.
`
  },
  ejercicios: [
    {
      t: "Comprar una Letra del Tesoro",
      p: `
Compras 1.000 € nominales de Letras a 12 meses (364 días) al 3,068 %. ¿Cuánto pagas? ¿Cuánto ganas antes y después de la retención del 19 %? ¿Qué rentabilidad neta obtienes?
`,
      s: `
1. **Precio**: 1.000 / (1 + 0,03068 × 364 / 360) = 1.000 / 1,03102 = **969,91 €**.
2. **Ganancia bruta**: 1.000 − 969,91 = **30,09 €**.
3. **Retención** (19 %): 5,72 €. **Ganancia neta**: 24,37 €.
4. **Rentabilidad neta**: 24,37 / 969,91 = **2,51 %**. Con la inflación al 4,9 %, real negativa.
`
    },
    {
      t: "Precio y TIR",
      p: `
Un bono a 8 años con cupón del 2 % cotiza a 92. Calcula su rentabilidad corriente y explica por qué su TIR (3,15 %) es mayor. ¿Qué pasa con su precio si la TIR exigida sube al 4 %?
`,
      s: `
1. **Rentabilidad corriente**: 2 / 92 = **2,17 %**.
2. La TIR suma, además del cupón, la ganancia de comprar a 92 y cobrar 100 al vencimiento: 8 € repartidos en 8 años, que con el descuento correspondiente añaden casi un punto anual.
3. **Precio con TIR del 4 %**: 2 × (1 − 1,04⁻⁸) / 0,04 + 100 / 1,04⁸ = 13,47 + 73,07 = **86,53**. Cae un 6 %.
`
    },
    {
      t: "Lo que esconde la curva",
      p: `
El tipo a 1 año es del 3,0 % y el tipo a 2 años, del 3,4 %. ¿Qué tipo a 1 año dentro de un año está implícito en la curva? Si crees que dentro de un año el tipo a 1 año estará en el 3,2 %, ¿qué te conviene más: un bono a 2 años o dos letras de 1 año seguidas?
`,
      s: `
1. **Implícito**: 1,034² / 1,03 − 1 = **3,80 %**.
2. **Dos letras seguidas** con tu previsión: 1,03 × 1,032 = 1,0630 → 6,30 % en dos años.
3. **Bono a 2 años**: 1,034² = 1,0692 → 6,92 %.
4. Si aciertas, el bono a 2 años es mejor. Las dos letras solo ganarían si el tipo dentro de un año superara el 3,80 %. Así se usa la curva: comparas tu previsión con la del mercado.
`
    }
  ],
  errores: [
    "Pensar que un bono del Estado no puede perder valor: si suben los tipos y lo vendes antes, pierdes.",
    "Confundir cupón con rentabilidad: la que cuenta es la TIR.",
    "Creer que un fondo de bonos se comporta como un bono hasta el vencimiento: el fondo nunca «vence».",
    "Comprar bonos largos esperando que no se muevan: su duración los hace casi tan volátiles como la bolsa en algunos años.",
    "Leer una curva invertida como una fecha exacta de recesión."
  ],
  test: [
    { p: "Si los tipos del mercado suben, el precio de los bonos ya emitidos…", o: ["Sube", "Baja", "No cambia"], c: 1, e: "Tienen que rendir lo mismo que los nuevos, así que su precio cae." },
    { p: "¿Qué bono pierde más con una subida de tipos de un punto?", o: ["Uno a 2 años", "Uno a 10 años", "Uno a 30 años"], c: 2, e: "Más plazo, más duración, más sensibilidad: −17 % frente a −2 %." },
    { p: "Un bono a 8 años, cupón del 2 %, cotiza a 92. ¿Qué cifra sirve para compararlo con otros?", o: ["El cupón del 2 %", "La rentabilidad corriente del 2,17 %", "La TIR del 3,15 %"], c: 2, e: "La TIR incluye la ganancia de comprar por debajo de 100." },
    { p: "Si mantienes una letra hasta el vencimiento y el Estado paga…", o: ["Ganas exactamente la TIR de compra", "Depende de los tipos", "Puedes perder"], c: 0, e: "Un cupón cero mantenido a vencimiento no tiene riesgo de reinversión ni de precio." },
    { p: "¿Qué ha anticipado históricamente una curva de tipos invertida?", o: ["Inflación alta", "Recesiones", "Subidas de bolsa"], c: 1, e: "Con retrasos variables y algún falso positivo." }
  ],
  lecturas: [
    { t: "Bond Markets, Analysis and Strategies", a: "Frank Fabozzi", n: "El manual de referencia de renta fija." },
    { t: "The Yield Curve as a Predictor of U.S. Recessions", a: "Arturo Estrella y Frederic Mishkin, Federal Reserve Bank of New York, 1996", n: "Corto y legible." },
    { t: "Tesoro Público: cómo comprar Letras, Bonos y Obligaciones", a: "tesoro.es", n: "Guía oficial para particulares." }
  ]
});


/* ---- l05.js ---- */
LECCIONES.push({
  id: "b1-l5", num: "1.5",
  titulo: "Bonos: riesgo de crédito, inflación y tipos de deuda",
  resumen: "Además del riesgo de tipos, un bono tiene riesgo de crédito: que el emisor no pague. El mercado lo cobra con un diferencial sobre la deuda más segura. No toda la deuda es igual: hay bonos garantizados, senior, subordinados, híbridos, ligados a la inflación… Regla de oro: si un bono paga mucho más que el Estado, hay un motivo.",
  esencial: `
**El riesgo de crédito** es la posibilidad de que el emisor no pague los cupones o el nominal. Se mide con:
- **Calificaciones (ratings)**: S&P, Moody's y Fitch ordenan a los emisores de AAA (máxima solvencia) hacia abajo. De **BBB−** hacia arriba se llama **grado de inversión**; por debajo, **alto rendimiento** o *high yield* (antes, «bonos basura»).
- **Diferencial** (*spread*): lo que paga un bono por encima de la deuda más segura del mismo plazo. La **prima de riesgo** de España es el diferencial de su bono a 10 años sobre el alemán: en 2026 ha promediado unos **46 puntos básicos** (0,46 puntos), frente a más de 600 en 2012.

**La escalera de cobro.** Si una empresa quiebra, se paga por orden: primero la deuda garantizada, después la deuda *senior*, después la subordinada, después los híbridos y, al final, los accionistas. Cuanto más abajo estás, más cobras de interés y más puedes perder.

**Tipos de deuda que verás**
- **Deuda pública**: Letras, Bonos y Obligaciones del Estado. El riesgo de crédito de España hoy es bajo; el de tipos, no.
- **Bonos corporativos**: de grado de inversión o de alto rendimiento.
- **Bonos ligados a la inflación** (en España, Obligaciones €i): el nominal se ajusta con la inflación. Protegen el poder de compra.
- **Convertibles**: bonos que pueden convertirse en acciones.
- **Subordinados, híbridos y CoCos** (bonos contingentes convertibles, o AT1, de los bancos): pagan mucho porque en una crisis pueden convertirse en acciones o desaparecer.

> Si un producto de deuda te ofrece bastante más que el Estado al mismo plazo, pregúntate quién pierde primero si las cosas van mal. En España, las **participaciones preferentes** vendidas a pequeños ahorradores antes de 2012 son el recuerdo de lo que pasa cuando no se hace esa pregunta.
`,
  entender: `
### Pérdida esperada: la cuenta básica
$$ pérdida esperada anual ≈ probabilidad de impago (PD) × pérdida si hay impago (1 − recuperación)

En el *high yield*, la tasa de impago de los últimos 12 meses estaba en el **3,3–3,8 %** a principios de 2026 (según S&P y Moody's) y la recuperación histórica de la deuda *senior* no garantizada ronda el **40 %**. Pérdida esperada: 3,8 % × 0,61 ≈ **2,3 %** anual. El diferencial del *high yield* europeo estaba en el **3,4 %** a finales de marzo de 2026: el inversor cobraba alrededor de 1,1 puntos por encima de la pérdida esperada.

### Probabilidades acumuladas
Una probabilidad anual pequeña se acumula con el plazo:

| Impago anual | A 5 años |
|---|---|
| 0,2 % (grado de inversión medio, orientativo) | ≈ 1 % |
| 1 % | ≈ 4,9 % |
| 3,5 % (alto rendimiento, orientativo) | ≈ 16,3 % |

### Diversificar en crédito es obligatorio
En acciones, una empresa que se dispara compensa muchas que pierden. En bonos no: lo máximo que ganas es el cupón y el nominal, y lo máximo que pierdes es casi todo. La distribución es **asimétrica hacia abajo**. Por eso, salvo deuda pública de calidad, los bonos individuales tienen sentido solo con muchos emisores, y para un particular suele ser más práctico un fondo.

### Bonos ligados a la inflación
- El nominal (y por tanto los cupones) se ajusta cada año con la inflación.
- Su rentabilidad se expresa en términos **reales**.
- **Inflación implícita** (*breakeven*): la que hace igual de rentable el bono normal y el ligado. Si el bono normal da un 3,3 % y el ligado un 1,1 % real, el mercado descuenta una inflación media de **2,18 %**. Si crees que será mayor, el ligado es mejor compra.

### Cómo elegir renta fija (anticipo del bloque 3)
Dos preguntas, siempre por separado:
1. **¿Cuánta duración?** (riesgo de tipos). Encaja con tu horizonte.
2. **¿Cuánto riesgo de crédito?** Para estabilizar una cartera con bolsa, la deuda pública y la de alta calidad funcionan mejor; el *high yield* se parece mucho a la bolsa en las crisis.
`,
  fondo: `
### 1. De qué está hecho un diferencial
El diferencial de crédito no es solo pérdida esperada. Tiene tres capas:
- **Pérdida esperada** (probabilidad × severidad).
- **Prima de riesgo**: los impagos llegan juntos y en recesiones, cuando el dinero vale más (igual que la prima de las acciones).
- **Prima de liquidez**: muchos bonos corporativos se negocian poco y venderlos en una crisis cuesta.

Huang y Huang (2012) mostraron que, en los bonos de grado de inversión, la pérdida esperada explica solo una pequeña parte del diferencial: es el **enigma del diferencial de crédito**. En el *high yield*, la pérdida esperada pesa más. Consecuencia práctica: los bonos de calidad media pagan un diferencial que «sobra» frente a sus impagos, pero lo pagan porque fallan justo cuando más duele.

### 2. El modelo de Merton aplicado al crédito
En la lección 1.2 viste que la acción es una opción de compra sobre los activos de la empresa. El bono es, por simetría, un bono sin riesgo **menos** una opción de venta: el bonista cobra seguro salvo que los activos valgan menos que la deuda, en cuyo caso se queda con lo que haya. De ahí sale la **distancia al impago**: cuántas desviaciones típicas les separan los activos de la deuda. Es la base de modelos de riesgo de crédito usados por bancos y agencias.

### 3. La jerarquía y el rescate interno (bail-in)
Desde la directiva europea de resolución bancaria (2014), las pérdidas de un banco en apuros recaen primero sobre accionistas y acreedores, antes que sobre los contribuyentes. Por eso los instrumentos **AT1** pagan cupones altos: pueden convertirse en acciones o amortizarse si el capital del banco cae por debajo de un umbral.

**Credit Suisse, marzo de 2023.** En la operación de rescate y venta del banco a UBS, el regulador suizo amortizó a cero unos 16.000 millones de francos de bonos AT1, mientras los accionistas recibieron algo en la venta. Fue legal según los términos de esos bonos y la normativa suiza, pero invirtió la jerarquía que el mercado daba por hecha, y provocó una fuerte caída de todo el mercado de AT1. Las autoridades europeas aclararon que en la UE se respetaría el orden: primero accionistas, después AT1.

**Banco Popular, junio de 2017** (lección 1.2): sus accionistas y los tenedores de deuda subordinada lo perdieron todo en la resolución.

### 4. Las preferentes en España
Antes de 2012, muchas cajas y bancos colocaron **participaciones preferentes** y deuda subordinada perpetua entre clientes minoristas como si fueran depósitos. Eran instrumentos de capital, sin vencimiento, sin garantía de depósitos y con pérdidas posibles. Con la crisis bancaria, cientos de miles de ahorradores sufrieron grandes pérdidas; después hubo arbitrajes y sentencias por mala comercialización. Es el ejemplo español de por qué hay que entender en qué peldaño de la escalera de cobro está lo que compras.

### 5. Los ratings: útiles, no infalibles
Las agencias de calificación tienen buenas series históricas de impagos por rating, pero fallaron estrepitosamente con los productos estructurados hipotecarios antes de 2008: muchos tenían AAA y acabaron con grandes pérdidas. Además, cobran del emisor que califican (conflicto de interés) y suelen rebajar las notas tarde. Úsalos como un dato, no como un sustituto de entender lo que compras.

### 6. Bonos ligados a la inflación: el detalle
- Su rentabilidad real está fijada; la nominal depende de la inflación que ocurra.
- Protegen bien contra la inflación **inesperada**, pero siguen teniendo riesgo de tipos **reales**: si el tipo real sube, su precio cae (en 2022, muchos bajaron a pesar de la inflación, porque los tipos reales pasaron de muy negativos a positivos).
- La inflación implícita incluye una pequeña prima de riesgo de inflación y efectos de liquidez, así que no es una previsión pura.
`,
  caso: {
    titulo: "La prima de riesgo de España: de 600 a menos de 50",
    md: `
En la crisis de deuda de 2012, el bono español a 10 años llegó a rendir alrededor del **7,5 %**, con una prima de riesgo frente al alemán de unos **600 puntos básicos**. El mercado dudaba de que España pudiera pagar o seguir en el euro. Quien compró entonces obtuvo una rentabilidad extraordinaria cuando la prima bajó; quien tuvo que vender, grandes pérdidas.

En 2026, la prima de riesgo ha promediado unos **46 puntos básicos**, lejos de los 15 de antes de 2008 pero también por debajo de las de Francia e Italia (alrededor de 76 y 78). En noviembre de 2025 llegó a bajar de 50 por primera vez desde 2009.

> Lo que enseña: el riesgo de crédito de un Estado no es cero ni fijo. Cambia con su deuda, su crecimiento y la confianza del mercado, y cuando cambia, mueve el precio de toda su deuda.
`
  },
  ejercicios: [
    {
      t: "¿Compensa el diferencial?",
      p: `
Un bono corporativo a 5 años rinde un 4,5 %. El bono del Estado al mismo plazo rinde un 3,0 %. Si en caso de impago recuperarías un 40 %, ¿qué probabilidad de impago anual hace que los dos te den lo mismo de media? ¿Y la probabilidad acumulada a 5 años?
`,
      s: `
1. Diferencial: 4,5 % − 3,0 % = 1,5 puntos.
2. Pérdida si hay impago: 1 − 0,40 = 60 %.
3. Probabilidad de equilibrio: 1,5 % / 0,60 = **2,5 % anual**.
4. Acumulada a 5 años: 1 − (1 − 0,025)⁵ = **11,9 %**.
5. Si crees que el riesgo real es menor, el corporativo compensa de media. Pero recuerda que el diferencial también paga por el riesgo de que los impagos lleguen todos juntos en una recesión.
`
    },
    {
      t: "Nominal o ligado a la inflación",
      p: `
Un bono del Estado a 10 años rinde un 3,3 % y uno ligado a la inflación del mismo plazo, un 1,1 % real. ¿Qué inflación media descuenta el mercado? ¿Cuál comprarías si esperas una inflación media del 4 %? ¿Y del 1,5 %?
`,
      s: `
1. **Inflación implícita**: 1,033 / 1,011 − 1 = **2,18 %**.
2. Con un **4 %** de inflación, el ligado rendiría en nominal 1,011 × 1,04 − 1 ≈ 5,1 %, frente al 3,3 % del normal: **mejor el ligado**.
3. Con un **1,5 %**, el ligado rendiría ≈ 2,6 %: **mejor el normal**.
4. Comprar el ligado es una apuesta a que la inflación supere la implícita, o un seguro contra ese escenario.
`
    },
    {
      t: "Pérdida esperada de una cartera de alto rendimiento",
      p: `
Un fondo de *high yield* tiene una TIR del 6,5 % con el bono del Estado al 3,0 %. Si la tasa de impago anual es del 3,8 % y la recuperación del 39 %, ¿qué rentabilidad esperada tiene después de impagos? ¿Qué pasa en una recesión con una tasa de impago del 10 % y recuperación del 30 %?
`,
      s: `
1. **Pérdida esperada normal**: 3,8 % × 0,61 = 2,3 %. Rentabilidad esperada: 6,5 − 2,3 ≈ **4,2 %**, algo más que el Estado.
2. **Recesión**: 10 % × 0,70 = 7,0 % de pérdida. Rentabilidad: 6,5 − 7,0 = **−0,5 %**, y además el precio de los bonos caería al ampliarse los diferenciales.
3. Por eso el *high yield* se comporta como la bolsa en las crisis y no estabiliza una cartera.
`
    }
  ],
  errores: [
    "Fijarse solo en el cupón y no en quién paga ni en qué orden cobras.",
    "Comprar productos híbridos o subordinados como si fueran depósitos.",
    "Pensar que el *high yield* protege en las crisis como los bonos del Estado.",
    "Comprar pocos bonos corporativos individuales: la asimetría exige diversificar.",
    "Creer que un rating AAA es una garantía."
  ],
  test: [
    { p: "¿Desde qué rating se habla de «grado de inversión»?", o: ["Desde AAA", "Desde BBB− hacia arriba", "Desde BB hacia arriba"], c: 1, e: "Por debajo de BBB− es alto rendimiento." },
    { p: "Probabilidad de impago anual del 3,5 %. ¿Probabilidad acumulada a 5 años?", o: ["17,5 %", "≈ 16,3 %", "3,5 %"], c: 1, e: "1 − 0,965⁵ ≈ 16,3 %." },
    { p: "¿Qué ocurrió con los bonos AT1 de Credit Suisse en 2023?", o: ["Se convirtieron en bonos del Estado", "Se amortizaron a cero mientras los accionistas recibían algo", "Pagaron un cupón extra"], c: 1, e: "Unos 16.000 millones de francos, en contra de la jerarquía que el mercado daba por hecha." },
    { p: "Bono normal al 3,3 % y ligado a la inflación al 1,1 % real. ¿Inflación implícita?", o: ["≈ 2,2 %", "4,4 %", "1,1 %"], c: 0, e: "1,033 / 1,011 − 1 ≈ 2,18 %." },
    { p: "¿Por qué hay que diversificar mucho en bonos corporativos?", o: ["Por los impuestos", "Porque la ganancia máxima es limitada y la pérdida puede ser casi total", "Porque cotizan poco"], c: 1, e: "La distribución es asimétrica hacia abajo." }
  ],
  lecturas: [
    { t: "How Much of the Corporate-Treasury Yield Spread Is Due to Credit Risk?", a: "Jing-Zhi Huang y Ming Huang, Review of Asset Pricing Studies, 2012" },
    { t: "Informe sobre la comercialización de participaciones preferentes", a: "CNMV y Banco de España", n: "Contexto de lo ocurrido en España." },
    { t: "European High Yield and Leveraged Loan Report", a: "AFME, trimestral", n: "Datos actualizados de impagos y diferenciales en Europa." }
  ]
});


/* ---- l06.js ---- */
LECCIONES.push({
  id: "b1-l6", num: "1.6",
  titulo: "Fondos de inversión",
  resumen: "Un fondo es un patrimonio común que una gestora invierte por cuenta de muchos partícipes. Te da diversificación con poco dinero y, en España, una ventaja fiscal clave: puedes cambiar de fondo sin pagar impuestos. Lo que más decide su resultado no es la habilidad del gestor, sino sus costes: la mayoría de los fondos activos no bate a su índice a largo plazo.",
  esencial: `
Un **fondo de inversión** junta el dinero de muchas personas (los **partícipes**) y lo invierte según una política definida (bolsa mundial, bonos a corto plazo, etc.). Las piezas:
- **Gestora**: decide qué comprar y vender.
- **Depositaria**: custodia los activos y vigila a la gestora.
- **Valor liquidativo**: el precio de cada participación, calculado una vez al día.
- **Supervisión**: en España, la CNMV.

**Tu dinero está separado** del de la gestora: si la gestora quiebra, los activos del fondo siguen siendo de los partícipes. No hay garantía de que el fondo no pierda valor, pero sí de que nadie se queda con lo que es tuyo.

**Tipos principales**: monetarios, renta fija (por plazo y calidad), mixtos, renta variable (por zona, sector o estilo), **indexados** (copian un índice), de **rentabilidad objetivo** y garantizados.

**Costes**: el dato clave es el **coste total anual** (TER o gastos corrientes): comisión de gestión + depósito + otros gastos. Puede ir del 0,1 % en un indexado barato a más del 2 % en un fondo activo de banca. Puede haber también comisiones de suscripción o reembolso.

**La ventaja española: el traspaso.** En España puedes pasar el dinero de un fondo a otro **sin pagar impuestos** por las ganancias acumuladas; solo tributas cuando reembolsas de verdad (lecciones 0.3 y 0.4). Los ETFs no tienen esta ventaja (lección 1.7).

**Activos contra indexados.** Según el informe SPIVA de S&P, en Europa el **81,8 %** de los fondos activos de renta variable quedó por detrás de su índice en 2025, y el **97 %** en los últimos 10 años. Hay buenos gestores, pero encontrarlos por adelantado es muy difícil, y los costes juegan siempre en contra.
`,
  entender: `
### Cómo se calcula el valor liquidativo
$$ valor liquidativo = (valor de los activos − gastos y pasivos) / número de participaciones

Un fondo con 125 millones en activos, 0,5 millones de gastos pendientes y 10 millones de participaciones tiene un valor liquidativo de **12,45 €**. Cuando suscribes, compras participaciones a ese precio (el del día de la orden, que conocerás después); cuando reembolsas, las vendes.

### Leer la ficha de un fondo
| Dato | Qué mirar |
|---|---|
| ISIN | El código que identifica la clase concreta |
| Categoría e índice de referencia | Con qué se compara |
| Gastos corrientes (TER) | El coste anual. Compara con alternativas indexadas |
| Comisiones de suscripción y reembolso | Idealmente, cero |
| Indicador de riesgo (1 a 7) | Del documento de datos fundamentales; resume volatilidad y crédito |
| Clase | Acumulación (reinvierte) o distribución (reparte); clases «limpias» sin retrocesiones |
| Patrimonio y antigüedad | Fondos muy pequeños o nuevos tienen más riesgo de cerrar |
| Rentabilidad frente a su índice | A 5 y 10 años, con el índice de rentabilidad total |

### El peso de los costes
50.000 € durante 20 años con un mercado que da un 6 % bruto:

| Coste anual | Capital final |
|---|---|
| 0,2 % | 154.413 € |
| 1,5 % | 120.586 € |

**33.827 € de diferencia**: más de dos tercios de lo invertido, solo por costes.

### Los fondos de rentabilidad objetivo
Han sido de los más vendidos en 2025 y 2026 (en octubre de 2026 captaron 877 millones). Compran una cartera de bonos con vencimiento parecido al del fondo y aspiran a una rentabilidad aproximada si mantienes hasta la fecha. Son razonables si encaja el plazo, pero:
- la rentabilidad no está garantizada (impagos);
- salir antes puede costar comisiones y pérdidas de precio;
- conviene comparar su TIR neta de costes con la de letras o bonos del Estado al mismo plazo.

### El mercado español en cifras
En octubre de 2026, los fondos de inversión en España gestionaban **479.234 millones de euros**, con unos **27,7 millones** de cuentas de partícipes. La rentabilidad media en lo que va de año era del 3,9 %.
`,
  fondo: `
### 1. La aritmética de la gestión activa (Sharpe, 1991)
William Sharpe demostró algo casi tautológico, pero devastador:
1. El mercado es la suma de todos los inversores. Los indexados obtienen la rentabilidad del mercado (antes de costes).
2. Por tanto, el resto (los activos) **en conjunto** también obtiene la rentabilidad del mercado antes de costes.
3. Como los activos cobran más, **la media de los activos, después de costes, rinde menos que la media de los indexados**.

No dice que ningún gestor pueda batir al mercado, sino que en conjunto no pueden, y que el que gana lo hace a costa de otro que pierde.

### 2. ¿Persiste el éxito?
Si los buenos resultados se debieran a la habilidad, deberían repetirse. Los informes de persistencia de S&P muestran que pocos fondos del primer cuartil siguen en él años después, en proporciones cercanas al azar. Mark Carhart (1997) encontró que la poca persistencia que existía se explicaba sobre todo por el **momento** de las acciones que tenían y por los **costes**: los fondos caros persistían… en ser malos.

### 3. Habilidad que existe pero no se aprovecha: Berk y Green (2004)
Una explicación elegante: puede haber gestores con habilidad, pero cuando un fondo lo hace bien recibe mucho dinero, y con más dinero la estrategia rinde menos (más difícil mover grandes cantidades en buenas ideas). El exceso de rentabilidad acaba en manos del gestor (más comisiones totales) y no del partícipe. En equilibrio, el partícipe medio obtiene lo mismo que con un indexado, o menos.

### 4. Sesgo de supervivencia y fondos que desaparecen
Las bases de datos de fondos tienden a mostrar los que siguen vivos. Los que lo hicieron mal se fusionan o cierran y desaparecen de las estadísticas. SPIVA corrige ese sesgo: una parte importante de los fondos de renta variable europeos no sobrevive 10 años.

### 5. Los falsos activos: *closet indexing*
Cremers y Petajisto (2009) propusieron el ***active share***: qué porcentaje de la cartera de un fondo difiere de su índice. Muchos fondos que cobran como activos tienen carteras casi iguales a su índice: es imposible que lo batan después de costes. Si pagas gestión activa, al menos que sea activa.

### 6. El traspaso: un diferimiento fiscal que vale dinero
Con el traspaso no se pagan impuestos al cambiar de fondo, lo que permite rebalancear o cambiar de gestora sin perder capital por el camino. Es el mecanismo de la lección 0.3 (diferir impuestos) aplicado a la práctica. El bloque 8 detalla las reglas: traspasos entre fondos españoles y extranjeros registrados en la CNMV con un mínimo de partícipes, criterio FIFO, etc.
`,
  caso: {
    titulo: "2025: la bolsa española sube un 58 % y casi todos los fondos se quedan atrás",
    md: `
En 2025 el índice amplio de la bolsa española de S&P subió un **58,4 %** en euros. Según la OCU, con datos de SPIVA, el **96 %** de los fondos activos de bolsa española quedó por debajo de ese índice. A escala europea, el 81,8 % de los fondos activos de renta variable lo hizo peor que su índice en 2025, y el **97 %** en los 10 años hasta diciembre de 2025.

Parte de la explicación del caso español es que el listón fue altísimo, pero el patrón se repite año tras año en casi todas las categorías.

> Lo que enseña: elegir un fondo activo es apostar a que encontrarás uno de los pocos que baten al índice de forma persistente. Los datos dicen que es posible, pero poco probable. Por eso el núcleo de muchas carteras son fondos indexados baratos (bloque 3).
`
  },
  ejercicios: [
    {
      t: "Valor liquidativo y participaciones",
      p: `
Un fondo tiene 125 millones en activos, 0,5 millones en gastos pendientes de pago y 10 millones de participaciones. Inviertes 5.000 €. ¿Cuántas participaciones recibes? Si al año el valor liquidativo es 13,20 €, ¿cuánto has ganado?
`,
      s: `
1. **Valor liquidativo**: (125 − 0,5) / 10 = **12,45 €**.
2. **Participaciones**: 5.000 / 12,45 = **401,6**.
3. **Valor al año**: 401,6 × 13,20 = 5.301 €. Ganancia: **301 €** (un 6,0 %), ya descontados los costes del fondo, que se restan del valor liquidativo cada día.
`
    },
    {
      t: "Traspasar o reembolsar",
      p: `
Tienes 60.000 € en un fondo en el que aportaste 40.000 €. Quieres cambiar a otro fondo y mantener 10 años más al 6 % anual. Compara traspasar (sin impuestos ahora) con reembolsar, pagar impuestos y reinvertir. Usa la escala del ahorro de 2026 y calcula el resultado neto final de cada opción.
`,
      s: `
1. **Reembolsar ahora**: ganancia 20.000 €. Impuesto: 6.000 × 19 % + 14.000 × 21 % = **4.080 €**. Reinviertes 55.920 €. A los 10 años: 100.144 €. Ganancia sobre lo reinvertido: 44.224 €, impuesto 9.167 €. **Neto: 90.977 €**.
2. **Traspasar**: siguen trabajando los 60.000 €. A los 10 años: 107.451 €. Ganancia total sobre lo aportado: 67.451 €, impuesto 14.394 €. **Neto: 93.057 €**.
3. El traspaso deja **2.080 € más** con la misma rentabilidad. Y la ventaja crece con más años y más cambios de fondo.
`
    },
    {
      t: "¿Cuánto tiene que ganar un fondo caro?",
      p: `
Un fondo activo cobra un 1,8 % anual y su alternativa indexada un 0,2 %. Si el mercado da un 7 % bruto, ¿qué rentabilidad bruta necesita el gestor para empatar con el indexado? ¿Qué probabilidad hay, según SPIVA, de que lo consiga durante 10 años en renta variable europea?
`,
      s: `
1. El indexado da 7 % − 0,2 % = 6,8 % neto.
2. El activo necesita 6,8 % + 1,8 % = **8,6 % bruto**: batir al mercado en 1,6 puntos al año antes de costes.
3. Según SPIVA (10 años hasta 2025), el **97 %** de los fondos activos de renta variable europeos no batió a su índice después de costes. La probabilidad histórica de elegir uno que lo consiga ha sido de en torno a 3 de cada 100.
`
    }
  ],
  errores: [
    "Mirar la rentabilidad pasada y no los costes, que son lo más predecible.",
    "Comparar un fondo con el índice de precios en lugar del de rentabilidad total.",
    "Reembolsar para cambiar de fondo en lugar de traspasar.",
    "Pagar gestión activa por un fondo que en la práctica copia su índice.",
    "Comprar un fondo de rentabilidad objetivo sin la intención de mantenerlo hasta su fecha."
  ],
  test: [
    { p: "Si la gestora de tu fondo quiebra, ¿qué pasa con tu dinero?", o: ["Lo pierdes", "Sigue siendo de los partícipes: el patrimonio está separado", "Lo cubre el fondo de garantía de depósitos"], c: 1, e: "La depositaria custodia los activos, que no son de la gestora." },
    { p: "¿Qué permite el traspaso entre fondos en España?", o: ["No pagar comisiones", "Cambiar de fondo sin tributar por las ganancias acumuladas", "Cobrar dividendos sin impuestos"], c: 1, e: "Tributas solo cuando reembolsas de verdad." },
    { p: "Según SPIVA, ¿qué porcentaje de fondos activos de renta variable europeos quedó por detrás de su índice en 10 años hasta 2025?", o: ["En torno al 50 %", "En torno al 75 %", "En torno al 97 %"], c: 2, e: "Y un 81,8 % solo en 2025." },
    { p: "¿Qué demostró Sharpe en «The Arithmetic of Active Management»?", o: ["Que ningún gestor puede batir al mercado", "Que, después de costes, la media de los gestores activos rinde menos que la de los indexados", "Que los fondos activos son mejores en crisis"], c: 1, e: "Es pura aritmética: antes de costes empatan; después, pierden." },
    { p: "¿Qué mide el active share?", o: ["La rentabilidad extra del fondo", "Cuánto difiere la cartera del fondo de su índice", "La rotación de la cartera"], c: 1, e: "Un active share bajo con comisiones altas es mala combinación." }
  ],
  lecturas: [
    { t: "The Arithmetic of Active Management", a: "William Sharpe, Financial Analysts Journal, 1991", n: "Tres páginas. Imprescindible." },
    { t: "SPIVA Europe Scorecard", a: "S&P Dow Jones Indices, semestral" },
    { t: "On Persistence in Mutual Fund Performance", a: "Mark Carhart, Journal of Finance, 1997" },
    { t: "Mutual Fund Flows and Performance in Rational Markets", a: "Jonathan Berk y Richard Green, Journal of Political Economy, 2004" }
  ]
});


/* ---- l07.js ---- */
LECCIONES.push({
  id: "b1-l7", num: "1.7",
  titulo: "ETFs: fondos que cotizan como acciones",
  resumen: "Un ETF es un fondo, casi siempre indexado, que se compra y se vende en bolsa durante la sesión. Es barato, transparente y flexible. En España tiene una desventaja frente a los fondos: no se puede traspasar sin pagar impuestos. Para elegir uno importan el índice, el coste total, el domicilio, la réplica y si reparte o acumula dividendos.",
  esencial: `
Un **ETF** (*exchange-traded fund*) es un fondo de inversión que **cotiza en bolsa**: lo compras y lo vendes a través de un bróker, a lo largo del día, al precio de mercado, como una acción. La mayoría replica un índice (MSCI World, S&P 500, bonos del Estado…).

**Ventajas**
- **Costes bajos**: muchos ETF de índices amplios cuestan entre el 0,05 % y el 0,25 % anual.
- **Transparencia**: publican su cartera a diario.
- **Flexibilidad**: precio en tiempo real, órdenes limitadas, gran variedad.

**Inconvenientes en España**
- **No son traspasables**: si vendes un ETF para comprar otro, tributas por la ganancia. Los fondos indexados sí permiten traspasar sin impuestos (lección 1.6).
- **Costes de compraventa**: comisión del bróker y horquilla en cada operación.
- **Tentación de operar**: que se puedan vender en un segundo no significa que convenga.

**Cuatro decisiones al elegir uno**
1. **El índice**: qué contiene y cómo pondera. Es lo más importante.
2. **El coste total**: gastos corrientes (TER) más la diferencia real con el índice.
3. **Acumulación o distribución**: el de acumulación reinvierte los dividendos dentro (no tributas hasta vender); el de distribución te los paga (tributas cada año).
4. **El domicilio**: para un inversor europeo, los ETF domiciliados en **Irlanda** suelen soportar menos retención sobre los dividendos de empresas de EE. UU. que los de otros países.

**ETF frente a fondo indexado**: para aportar periódicamente durante años y poder rebalancear sin impuestos, el fondo indexado suele encajar mejor en España. El ETF compensa cuando el índice que quieres solo existe en ETF, cuando su coste es claramente menor o cuando no piensas cambiar de producto.
`,
  entender: `
### El coste total de un ETF
| Coste | Qué es | Orden de magnitud |
|---|---|---|
| Gastos corrientes (TER) | Gestión y funcionamiento | 0,05–0,25 % anual en índices amplios |
| Diferencia de seguimiento | Lo que el ETF rinde de menos (o de más) que su índice, de verdad | Puede ser menor que el TER (préstamo de valores, fiscalidad) o mayor |
| Horquilla | Diferencia entre precio de compra y de venta | 0,02–0,10 % en ETF grandes; más en pequeños |
| Comisión del bróker | Por operación | De 0 € a varios euros |

**Ojo con las comisiones fijas pequeñas**: comprar 200 € al mes con 1 € de comisión supone un **0,5 %** en cada compra, más del doble del TER de un ETF barato. Usa planes de inversión sin comisión o compra con menos frecuencia.

### Diferencia de seguimiento frente a error de seguimiento
- **Diferencia de seguimiento** (*tracking difference*): la rentabilidad del ETF menos la del índice en un periodo. Si el índice da un 7,2 % y el ETF un 7,05 %, la diferencia es −0,15 %. Es el coste real.
- **Error de seguimiento** (*tracking error*): la volatilidad de esa diferencia. Mide si el ETF se separa del índice de forma irregular.

### La divisa: un error muy frecuente
Un ETF del S&P 500 que cotiza en euros **sigue teniendo riesgo de dólar**: sus empresas valen en dólares y el ETF solo traduce ese valor a euros. La divisa de cotización no cambia el riesgo; lo cambia la **divisa de los activos** o que el ETF tenga **cobertura** (*hedged*), que tiene un coste.

### Retenciones según el domicilio
Los dividendos de empresas de EE. UU. sufren una retención en origen. Por los convenios fiscales, un ETF irlandés suele soportar un **15 %** y uno de otros domicilios puede soportar un **30 %**. Con una rentabilidad por dividendo del 1,3 %, la diferencia es de unos 0,2 puntos al año. A 30 años, sobre 10.000 € al 7 %, son unos 4.000 € menos.

### Réplica física o sintética
- **Física**: el ETF compra las acciones del índice (todas o una muestra representativa).
- **Sintética**: compra otra cesta y firma un contrato (*swap*) con un banco que le paga la rentabilidad del índice. Tiene riesgo de contraparte, limitado por la normativa europea (UCITS). A veces es más eficiente en índices con retenciones altas.

Ambas son legítimas; la física es más sencilla de entender.
`,
  fondo: `
### 1. El mecanismo de creación y reembolso
Lo que mantiene el precio de un ETF pegado al valor de su cartera es un mecanismo de arbitraje:
- Unos intermediarios autorizados (*authorized participants*, normalmente grandes bancos y creadores de mercado) pueden **crear** participaciones nuevas entregando a la gestora la cesta de acciones del índice, o **reembolsarlas** recibiendo la cesta.
- Si el ETF cotiza **por encima** del valor de su cartera, compran las acciones, crean participaciones y las venden caras. Su venta baja el precio.
- Si cotiza **por debajo**, compran participaciones baratas, las reembolsan a cambio de las acciones y venden las acciones. Su compra sube el precio.

Mientras los subyacentes cotizan con liquidez, el precio del ETF se mantiene muy cerca de su valor liquidativo indicativo (iNAV). La liquidez real de un ETF depende más de la liquidez de lo que tiene dentro que de su volumen diario en bolsa.

### 2. Cuando el mecanismo se tensa
En momentos de pánico, si los activos de dentro se negocian poco (bonos corporativos, por ejemplo), el ETF puede cotizar con **descuento** frente al último valor de su cartera. Hay un debate interesante: ¿el ETF estaba «roto» o era su precio el más realista, porque los bonos de dentro no se estaban negociando y su valor publicado estaba desfasado? Muchos analistas defienden lo segundo: el ETF funcionó como mecanismo de descubrimiento de precio.

### 3. Préstamo de valores
Muchos ETF prestan parte de sus acciones a otros inversores (por ejemplo, para ventas en corto) a cambio de una comisión y una garantía. Ese ingreso explica que algunos ETF tengan una diferencia de seguimiento menor que su TER. El riesgo es que el prestatario no devuelva y la garantía no baste; la normativa exige garantías por encima del valor prestado.

### 4. ¿La indexación distorsiona los mercados?
Con una parte creciente del dinero en fondos indexados, hay preguntas legítimas:
- Si nadie analiza, ¿quién fija el precio? (Grossman y Stiglitz otra vez, lección 1.2). Hoy los indexados siguen siendo una parte minoritaria de la negociación diaria; los precios los siguen formando los activos.
- **Efectos de inclusión**: cuando una empresa entra en un índice importante, los indexados tienen que comprarla; ese efecto se ha reducido con los años, pero existe.
- **Concentración**: los índices por capitalización compran más de lo que más ha subido (lección 1.3). No es un problema de los ETF, sino del método de ponderación.

### 5. ETF, ETC y ETN: no es lo mismo
- **ETF (UCITS)**: un fondo, con patrimonio separado.
- **ETC y ETN**: títulos de deuda de un emisor que prometen pagar la rentabilidad de algo (una materia prima, una criptomoneda). Pueden estar respaldados por el activo físico, pero jurídicamente son deuda: tienen riesgo del emisor. En Europa, la mayoría de productos cotizados de materias primas individuales y de criptomonedas son ETC o ETN, no ETF (lecciones 1.8 y 1.9).
`,
  caso: {
    titulo: "Fondo indexado o ETF del mismo índice, en España",
    md: `
Un inversor quiere aportar 300 € al mes durante 25 años a la bolsa mundial y, dentro de 15 años, empezar a pasar parte a renta fija. Tiene dos opciones con el mismo índice y costes parecidos:

| | Fondo indexado | ETF de acumulación (irlandés) |
|---|---|---|
| Coste anual | ≈ 0,10–0,20 % | ≈ 0,20 % |
| Aportaciones periódicas | Sin comisión en la mayoría de plataformas | Gratis en algunos brókeres con planes; si no, comisión por compra |
| Cambiar a renta fija dentro de 15 años | **Traspaso sin impuestos** | Hay que vender y tributar por la ganancia |
| Precio | Uno al día | En tiempo real |

Para este perfil, el fondo indexado suele ser la opción más eficiente en España por el traspaso. Si el índice deseado solo existiera en ETF, o si el inversor nunca pensara cambiar de producto, el ETF sería igual de válido.

> Lo que enseña: el mejor vehículo depende de la fiscalidad de tu país y de cómo vas a usarlo, no solo del coste anual.
`
  },
  ejercicios: [
    {
      t: "El coste de las comisiones pequeñas",
      p: `
Compras 200 € al mes de un ETF con un TER del 0,20 %, pagando 1 € de comisión por compra. ¿Qué porcentaje supone la comisión en cada compra? Durante el primer año, con un saldo medio de unos 1.200 €, ¿qué coste total aproximado soportas?
`,
      s: `
1. **Comisión por compra**: 1 / 200 = **0,5 %**.
2. **Comisiones del primer año**: 12 €. Sobre un saldo medio de 1.200 €, un **1 %**.
3. **TER**: 0,20 % sobre el saldo medio, unos 2,40 €.
4. **Total del primer año**: ≈ 14,40 € sobre 1.200 € de saldo medio, un **1,2 %**. Seis veces el TER. Con el tiempo pesa menos (el saldo crece), pero cada compra sigue costando un 0,5 %. Solución: plan sin comisiones o compras trimestrales.
`
    },
    {
      t: "El domicilio sí importa",
      p: `
Dos ETF replican el mismo índice de EE. UU., con una rentabilidad por dividendo del 1,3 %. Uno soporta un 15 % de retención en origen y el otro un 30 %. ¿Cuánto rinde de menos cada año el segundo? Sobre 10.000 € durante 30 años al 7 %, ¿cuánto supone?
`,
      s: `
1. Retención del primero: 1,3 % × 15 % = 0,195 %. Del segundo: 1,3 % × 30 % = 0,39 %. Diferencia: **0,195 puntos al año**.
2. Primero: 10.000 × 1,07³⁰ ≈ 76.100 €. Segundo: 10.000 × 1,068³⁰ ≈ 72.100 €.
3. Unos **4.000 € menos** por un detalle que no aparece en el TER.
`
    },
    {
      t: "La divisa que no ves",
      p: `
Un ETF del S&P 500 cotiza en euros, sin cobertura de divisa. En un año, el S&P 500 sube un 12 % en dólares y el euro pasa de 1,08 a 1,17 dólares. ¿Cuánto gana el ETF en euros? ¿Y una versión con cobertura (*hedged*), con un coste de cobertura del 1 %?
`,
      s: `
1. **Sin cobertura**: el dólar se deprecia un 7,7 % frente al euro (lección 0.4). Rentabilidad en euros: 1,12 × 0,923 − 1 ≈ **+3,4 %**.
2. **Con cobertura**: elimina el efecto divisa, con un coste. ≈ 12 % − 1 % = **+11 %**.
3. Que el ETF cotice en euros no quitaba el riesgo de dólar. Solo la cobertura lo hace, y tiene un precio que en otros años juega en contra.
`
    }
  ],
  errores: [
    "Pensar que un ETF que cotiza en euros no tiene riesgo de divisa.",
    "Comprar y vender ETF con frecuencia porque «es fácil».",
    "Fijarse solo en el TER e ignorar comisiones, horquilla y diferencia de seguimiento.",
    "Confundir un ETC o ETN con un ETF: los primeros tienen riesgo del emisor.",
    "Olvidar que en España vender un ETF para comprar otro tributa."
  ],
  test: [
    { p: "¿Qué ventaja fiscal tiene un fondo indexado frente a un ETF en España?", o: ["Paga menos impuestos por dividendos", "Se puede traspasar a otro fondo sin tributar", "No tributa nunca"], c: 1, e: "Los ETF no son traspasables: vender para cambiar tributa." },
    { p: "¿Qué mantiene el precio de un ETF cerca del valor de su cartera?", o: ["La CNMV", "El arbitraje de creación y reembolso de los intermediarios autorizados", "El volumen de negociación"], c: 1, e: "Si se separan, alguien gana arbitrando y los vuelve a juntar." },
    { p: "Un ETF del S&P 500 cotiza en euros y no tiene cobertura. ¿Tiene riesgo de dólar?", o: ["No, cotiza en euros", "Sí, sus activos valen en dólares", "Solo si lo compras en EE. UU."], c: 1, e: "La divisa que importa es la de los activos." },
    { p: "¿Qué es la diferencia de seguimiento?", o: ["La volatilidad de la diferencia con el índice", "Lo que el ETF rinde de más o de menos que su índice", "La horquilla"], c: 1, e: "Es el coste real. El error de seguimiento es su volatilidad." },
    { p: "Jurídicamente, un ETC de oro o un ETN de bitcoin es…", o: ["Un fondo con patrimonio separado", "Un título de deuda del emisor", "Una acción"], c: 1, e: "Por eso tiene riesgo del emisor, aunque esté respaldado." }
  ],
  lecturas: [
    { t: "The ETF Book", a: "Richard Ferri" },
    { t: "Documentos de datos fundamentales y folletos", a: "Gestoras de ETF", n: "Para cada ETF: índice, réplica, domicilio, préstamo de valores y diferencia de seguimiento." },
    { t: "Guías de la CNMV sobre fondos y ETF", a: "cnmv.es", n: "Explicaciones oficiales para inversores." }
  ]
});


/* ---- l08.js ---- */
LECCIONES.push({
  id: "b1-l8", num: "1.8",
  titulo: "Activos reales: inmuebles, materias primas y oro",
  resumen: "Los activos reales protegen mejor frente a la inflación a largo plazo, pero cada uno tiene su trampa. La vivienda parece más rentable de lo que es si se mira la rentabilidad bruta. Las materias primas se invierten con futuros, y su rentabilidad depende tanto de cómo se renuevan como del precio. El oro no produce nada: conserva valor a muy largo plazo, pero puede caer un 30 % en meses.",
  esencial: `
**Vivienda para alquilar**
- La **rentabilidad bruta** (alquiler anual / precio) es la que se publica: un **6,5 %** de media en España en el segundo trimestre de 2026, según idealista. El Banco de España, con otra metodología, la situaba en un **3,0 %** a final de 2025, por debajo del bono a 10 años.
- La **rentabilidad neta** descuenta comunidad, IBI, seguro, mantenimiento, meses vacíos, impuestos de compra e IRPF. Suele quedarse en la mitad de la bruta o menos.
- Ventajas: protege frente a la inflación (los alquileres suben con los precios) y permite apalancarse con hipoteca. Inconvenientes: poca liquidez, mucha concentración (un solo inmueble), gastos de entrada y salida altos, gestión y riesgo de impago.
- Alternativa cotizada: **SOCIMIs** (en otros países, REITs), empresas de inmuebles en alquiler que cotizan en bolsa y deben repartir la mayor parte de sus beneficios.

**Materias primas** (petróleo, metales, agricultura)
- Casi nunca se compra el barril: se invierte con **futuros**, contratos de compra a una fecha. Al vencer hay que renovarlos, y eso tiene un coste o un beneficio según la forma de la curva de futuros.
- Pueden proteger frente a choques de inflación de oferta (como los de 2022 y 2026), pero a largo plazo su rentabilidad ha sido modesta y muy volátil.

**Oro**
- No produce nada: su precio depende de la oferta y la demanda (bancos centrales, joyería, inversores).
- A muy largo plazo ha conservado poder adquisitivo: un **1,3 %** real anual desde 1900. A corto plazo puede ser muy volátil: en 2026 marcó un máximo de **5.594 dólares** la onza el 29 de enero y cayó a **3.869** el 30 de octubre, un **31 %** menos.
- Suele ir bien en pánicos financieros y cuando bajan los tipos reales; mal cuando suben.
`,
  entender: `
### De la rentabilidad bruta a la neta: un piso de 200.000 €
| Concepto | Importe anual |
|---|---|
| Alquiler (1.000 €/mes) | 12.000 € |
| Rentabilidad bruta | **6,0 %** |
| Comunidad (90 €/mes) | −1.080 € |
| IBI | −400 € |
| Seguro | −250 € |
| Meses vacíos e impagos (5 % del alquiler) | −600 € |
| Mantenimiento y reparaciones (1 % del valor) | −2.000 € |
| Rendimiento antes de impuestos | 7.670 € |
| Rentabilidad neta sobre el precio | **3,8 %** |
| Sobre el coste total (precio + 10 % de impuestos y gastos de compra) | **3,5 %** |

Después habría que restar el IRPF del rendimiento del alquiler (con reducciones según el caso; bloque 8). A cambio, el piso puede revalorizarse con la inflación.

### Por qué las cifras de rentabilidad bruta difieren tanto
- idealista divide **alquileres pedidos** entre **precios pedidos** en sus anuncios.
- El Banco de España usa otras fuentes de precios y rentas.
- Una misma vivienda puede parecer un 6,5 % o un 3 % según de dónde salgan los datos. Para tu caso, usa precio real y alquiler real.
- Hay mucha dispersión: en el segundo trimestre de 2026, idealista situaba a Madrid en el 4,7 % y a Barcelona en el 5,2 %, frente a más del 7 % en ciudades como Jaén, Murcia, Huelva o Lleida.

### El mercado de vivienda en 2026
- El precio de la vivienda usada subió un **15,8 %** interanual hasta junio, máximo de la serie de idealista.
- El BCE estima que la vivienda en España podría estar, de media, un **16,8 %** por encima de su valor de equilibrio.
- El Banco de España cifra el déficit estructural de viviendas en unas **700.000**.

Precios en máximos, rentabilidades por alquiler bajando y escasez de oferta: un mercado con argumentos en las dos direcciones.

### Cómo rinden los futuros de materias primas
$$ rentabilidad del futuro ≈ cambio del precio al contado + rendimiento de la renovación + interés de la garantía

- **Contango** (futuros más caros cuanto más lejanos): al renovar compras caro y pierdes. Si el futuro a 1 mes vale 70 y el de 2 meses 72, y el precio al contado no cambia, cada renovación cuesta un 2,8 %.
- **Backwardation** (futuros más baratos cuanto más lejanos): al renovar ganas.

Por eso un fondo de petróleo puede perder dinero aunque el petróleo no baje.

### El oro como cobertura: matices
Según el anuario de Dimson, Marsh y Staunton (UBS, 2026), el oro tuvo rentabilidad negativa en **13 de los 28 años** en que la inflación de EE. UU. superó el 3 %. Protege a muy largo plazo y a veces en pánicos, pero no es una cobertura fiable año a año.
`,
  fondo: `
### 1. Cuánto debería rentar una vivienda: el coste de uso
James Poterba (1984) formalizó la relación entre el precio de una vivienda y su alquiler. En equilibrio, alquilar y comprar deberían costar parecido:

$$ alquiler ≈ precio × (tipo de interés + impuestos + depreciación + mantenimiento − revalorización esperada)

Si los compradores esperan que la vivienda suba mucho, aceptan rentabilidades por alquiler bajas. Cuando esas expectativas se corrigen, el precio debe caer o el alquiler subir. Es la lógica de la **ratio precio/alquiler**, el «PER» de la vivienda. Con tipos que suben y expectativas altas, el equilibrio se tensa.

### 2. La vivienda no es un mercado eficiente
Karl Case y Robert Shiller mostraron que los precios de la vivienda tienen **inercia**: tras años de subidas tienden a seguir subiendo, y tras años de bajadas, a seguir bajando, al revés que las acciones a corto plazo. Hay costes de transacción altos, poca información, compradores no profesionales y fuertes expectativas extrapoladas. La experiencia española posterior a 2007 (años de caídas de precios y de actividad) es un ejemplo de manual.

### 3. Apalancamiento inmobiliario
Con hipoteca, la rentabilidad sobre tu dinero se multiplica en ambos sentidos (lección 0.6). En el ejemplo del piso de 200.000 €, comprado con 60.000 € propios (incluidos gastos) y una hipoteca de 160.000 € al 3,2 % a 25 años:
- La cuota es de unos 775 €/mes (9.306 € al año), mayor que el rendimiento neto del alquiler (7.670 €): **flujo de caja negativo** de unos 1.600 € al año.
- Económicamente, restando solo los intereses del primer año (unos 5.060 €), el rendimiento sobre tu capital es de un **4,4 %** antes de impuestos, más la revalorización (o menos la depreciación).
- Si el precio sube un 10 %, ganas 20.000 € sobre 60.000 € (+33 %). Si baja un 10 %, pierdes un 33 %.

### 4. La prima de las materias primas
Gorton y Rouwenhorst (2006) encontraron que una cartera diversificada de futuros de materias primas tuvo una rentabilidad parecida a la de la bolsa entre 1959 y 2004, con correlación negativa con ella y positiva con la inflación inesperada. Erb y Harvey (2006) matizaron que gran parte de esa rentabilidad venía del rendimiento de la renovación y del rebalanceo, no de que las materias primas subieran de forma sostenida, y que esos rendimientos no son estables. Desde entonces, la experiencia ha sido mucho más pobre.

**El caso extremo: 20 de abril de 2020.** El futuro de petróleo WTI para mayo cerró a **−37,63 dólares** el barril: con los depósitos llenos por la pandemia, quien tenía el contrato a punto de vencer pagaba para que alguien se quedara el petróleo. Varios productos cotizados que invertían en esos futuros sufrieron pérdidas enormes.

### 5. El dilema del oro
Erb y Harvey (*The Golden Dilemma*, 2013) mostraron que el precio real del oro tiende a revertir a largo plazo: cuando su precio real es históricamente alto, su rentabilidad real posterior tiende a ser baja. También documentaron su relación con los tipos reales: el oro no da intereses, así que su coste de oportunidad sube cuando suben los tipos reales. En los últimos años, la demanda de los bancos centrales ha sido un factor nuevo y potente, que hace que esa relación se haya debilitado.
`,
  caso: {
    titulo: "El oro en 2026: del récord a −31 % en nueve meses",
    md: `
- **29 de enero de 2026**: máximo histórico de **5.594 dólares** la onza, tras un 2025 de subidas excepcionales.
- **30 de octubre de 2026**: mínimo de **3.869 dólares**, el más bajo en un año. Caída del 31 % desde el máximo.
- **Principios de noviembre**: recuperación hasta el entorno de **4.065–4.130 dólares**, con un dólar más débil tras las elecciones de mitad de mandato en EE. UU.
- Goldman Sachs rebajó su previsión para final de 2026 de 4.650 a 4.150 dólares, por una Reserva Federal más dura de lo esperado.

Para recuperar el máximo desde el mínimo de octubre haría falta una subida del 45 %.

> Lo que enseña: el oro diversifica, pero no es un refugio estable. Su volatilidad en 2026 ha sido comparable a la de la bolsa. Tiene sentido como una parte pequeña de la cartera, no como el lugar donde guardar el dinero seguro.
`
  },
  ejercicios: [
    {
      t: "Rentabilidad neta de un piso",
      p: `
Un piso cuesta 150.000 € más un 10 % de impuestos y gastos de compra. Se alquila por 850 € al mes. Gastos anuales: comunidad 900 €, IBI 350 €, seguro 200 €, mantenimiento 1 % del precio, vacíos e impagos 5 % del alquiler. Calcula la rentabilidad bruta y la neta antes de IRPF sobre el coste total.
`,
      s: `
1. **Alquiler anual**: 850 × 12 = 10.200 €. **Bruta**: 10.200 / 150.000 = **6,8 %**.
2. **Gastos**: 900 + 350 + 200 + 1.500 + 510 = 3.460 €.
3. **Rendimiento neto**: 10.200 − 3.460 = 6.740 €.
4. **Coste total**: 165.000 €. **Neta**: 6.740 / 165.000 = **4,1 %**, antes de IRPF.
5. Comparación: el bono español a 10 años rendía en torno al 4 % sin gestión, sin concentración y con liquidez diaria. La vivienda añade la posible revalorización y la protección frente a la inflación; también el riesgo y el trabajo.
`
    },
    {
      t: "El coste del contango",
      p: `
Un fondo de petróleo mantiene futuros a 1 mes y los renueva cada mes. El futuro que vence cuesta 70 $ y el siguiente 72 $. Si la curva tiene esa forma todo el año y el precio al contado no cambia, ¿cuánto pierde el fondo en un año por la renovación?
`,
      s: `
1. En cada renovación vendes a 70 y compras a 72: con el mismo dinero tienes 70 / 72 = 0,972 contratos. Pérdida del 2,8 % por renovación.
2. En un año, 12 renovaciones: 0,972¹² = 0,713 → **−28,7 %**, sin que el petróleo baje.
3. En backwardation el efecto es el contrario. Por eso, en materias primas, lo que compras no es el precio de hoy, sino la curva de futuros.
`
    },
    {
      t: "Comprar con hipoteca",
      p: `
El piso de 200.000 € del apartado «Entenderlo» se compra con 60.000 € propios (40.000 € de entrada y 20.000 € de gastos) y una hipoteca de 160.000 € al 3,2 % a 25 años. El rendimiento neto antes de impuestos es de 7.670 € al año. ¿Cuál es el flujo de caja anual? ¿Qué rentabilidad obtienes sobre tu dinero si el piso sube un 10 % el primer año? ¿Y si baja un 10 %?
`,
      s: `
1. **Cuota**: 160.000 · 0,002667 / (1 − 1,002667⁻³⁰⁰) ≈ 775 €/mes = **9.306 € al año**.
2. **Flujo de caja**: 7.670 − 9.306 = **−1.636 €**: tienes que poner dinero cada año, aunque una parte de la cuota es amortización (ahorro).
3. **Rendimiento económico del año** (rendimiento neto menos intereses, unos 5.060 €): 2.610 €.
4. **Piso +10 %** (+20.000 €): (2.610 + 20.000) / 60.000 = **+37,7 %**.
5. **Piso −10 %**: (2.610 − 20.000) / 60.000 = **−29,0 %**.
6. El apalancamiento convierte una inversión de rendimiento modesto en una muy sensible al precio del inmueble.
`
    }
  ],
  errores: [
    "Comparar la rentabilidad bruta de un piso con la neta de otra inversión.",
    "Olvidar impuestos de compra, vacíos, reparaciones e IRPF.",
    "Creer que un fondo de materias primas sigue el precio al contado.",
    "Tratar el oro como un activo sin riesgo.",
    "Concentrar casi todo el patrimonio en un solo inmueble sin ser consciente del riesgo."
  ],
  test: [
    { p: "La rentabilidad bruta de la vivienda en alquiler en el 2.º trimestre de 2026, según idealista, fue…", o: ["Un 3,0 %", "Un 6,5 %", "Un 10 %"], c: 1, e: "El Banco de España, con otra metodología, daba un 3,0 % a final de 2025." },
    { p: "¿Qué es el contango?", o: ["Futuros más baratos cuanto más lejanos", "Futuros más caros cuanto más lejanos, lo que hace perder al renovar", "Un tipo de oro"], c: 1, e: "Renovar implica vender barato y comprar caro." },
    { p: "Desde 1900, el oro ha dado una rentabilidad real anual de aproximadamente…", o: ["Un 1,3 %", "Un 5 %", "Un 0 %"], c: 0, e: "Conserva valor a muy largo plazo, sin producir nada." },
    { p: "¿Qué pasó el 20 de abril de 2020 con el futuro de petróleo WTI?", o: ["Marcó un récord al alza", "Cerró en precio negativo: −37,63 $", "Dejó de cotizar"], c: 1, e: "Con los depósitos llenos, quien tenía el contrato pagaba por deshacerse del petróleo." },
    { p: "Según el modelo del coste de uso, si los compradores esperan grandes revalorizaciones, la rentabilidad por alquiler…", o: ["Sube", "Baja", "No cambia"], c: 1, e: "Aceptan cobrar menos alquiler a cambio de la subida esperada." }
  ],
  lecturas: [
    { t: "Tax Subsidies to Owner-Occupied Housing: An Asset-Market Approach", a: "James Poterba, Quarterly Journal of Economics, 1984" },
    { t: "Facts and Fantasies about Commodity Futures", a: "Gary Gorton y Geert Rouwenhorst, Financial Analysts Journal, 2006" },
    { t: "The Golden Dilemma", a: "Claude Erb y Campbell Harvey, Financial Analysts Journal, 2013" },
    { t: "Informes de rentabilidad de la vivienda", a: "idealista y Banco de España", n: "Compara metodologías antes de comparar cifras." }
  ]
});


/* ---- l09.js ---- */
LECCIONES.push({
  id: "b1-l9", num: "1.9",
  titulo: "Criptoactivos",
  resumen: "Bitcoin y el resto de criptoactivos son registros digitales descentralizados con oferta limitada o programada. No producen flujos, así que su precio depende solo de la demanda futura: por eso su volatilidad es extrema y sus caídas del 75–85 % se han repetido. Si se incluyen en una cartera, que sea con un peso pequeño, entendiendo la custodia y la fiscalidad.",
  esencial: `
**Qué es bitcoin.** Un sistema de dinero digital sin emisor central. Las transacciones se anotan en un registro público compartido (la **cadena de bloques** o *blockchain*), que mantienen miles de ordenadores. Las reglas fijan que nunca habrá más de **21 millones** de bitcoins; la emisión nueva se reduce a la mitad cada unos 4 años (*halving*).

**Otros criptoactivos**
- **Ethereum**: una plataforma para programas que se ejecutan en la cadena (*contratos inteligentes*).
- **Stablecoins**: tokens que intentan valer siempre 1 dólar o 1 euro, respaldados (en teoría) por reservas.
- Miles de tokens más, la mayoría sin uso real y con riesgo de desaparecer.

**De dónde viene su precio.** Un criptoactivo no paga dividendos ni intereses. Su precio depende de cuánta gente quiera tenerlo en el futuro: como reserva de valor («oro digital»), como medio de pago o como apuesta. No hay un valor por flujos que sirva de ancla (lección 1.1).

**Volatilidad.** Bitcoin cotizaba en torno a **103.000 dólares** a principios de noviembre de 2025, bajó a la zona de los **60.000** en junio de 2026 y está en torno a **75.700** en noviembre de 2026: un **−27 %** en un año. En su historia ha caído más de un **75 %** desde máximos al menos dos veces (2018 y 2022).

**Riesgos que no son de precio**
- **Custodia**: si un *exchange* quiebra o lo hackean, puedes perder lo que tenías allí (FTX, 2022).
- **Fraude**: proyectos falsos, estafas por redes sociales.
- **Regulación**: en la UE rige el reglamento **MiCA**, que exige autorización a los proveedores. Comprueba que tu plataforma la tenga.

**Fiscalidad en España**: las ganancias tributan en la base del ahorro, **también al cambiar una cripto por otra** (no solo al pasar a euros). Si tienes más de 50.000 € en criptoactivos custodiados en el extranjero, hay obligación de informar (modelo 721).

**Peso en cartera**: por su volatilidad, un 5 % en bitcoin puede aportar en torno a un **14 %** del riesgo total de una cartera mixta. Si se incluye, que sea una parte pequeña, decidida de antemano, y como satélite (lección 0.10).
`,
  entender: `
### Cómo se compra y se guarda
| Forma | Cómo funciona | Riesgo principal |
|---|---|---|
| *Exchange* (custodia de la plataforma) | Compras en una web o app; ellos guardan las claves | Quiebra, hackeo o congelación de la plataforma |
| Autocustodia (cartera propia) | Tú guardas las claves privadas (en un dispositivo o en papel) | Perder las claves = perder todo; errores al enviar |
| Producto cotizado (ETN o ETC en Europa) | Un título que replica el precio, comprado en tu bróker | Riesgo del emisor; costes; no tienes el activo directamente |
| ETF al contado (en EE. UU.) | Fondos aprobados desde enero de 2024 | No suelen estar disponibles para minoristas europeos |

La frase del sector es «*not your keys, not your coins*»: si no controlas las claves, en realidad tienes un derecho frente a una empresa.

### Cuánto riesgo añade un poco de cripto
Cartera de ejemplo: 60 % acciones (volatilidad 16 %), 35 % bonos (6 %) y 5 % bitcoin (60 %), con correlación 0,3 entre bitcoin y acciones.

| | Volatilidad de la cartera | Aportación de bitcoin al riesgo |
|---|---|---|
| Sin bitcoin (63 % / 37 %) | 10,3 % | — |
| Con 5 % de bitcoin | 11,1 % | **≈ 14 %** del riesgo total |

Un 5 % del dinero se convierte en un 14 % del riesgo. Si el peso sube por revalorización, el riesgo sube más deprisa: conviene rebalancear.

### El comportamiento cuesta todavía más
El estudio *Mind the Gap* de Morningstar señala que los inversores en fondos de bitcoin tendieron a meter dinero **después** de fuertes subidas y a sacarlo **durante** las caídas. Con la volatilidad de la cripto, ese patrón amplía mucho la brecha entre lo que rinde el producto y lo que gana el inversor (lección 0.8).

### Fiscalidad práctica en España
- Cada venta o intercambio genera una ganancia o pérdida: precio de transmisión menos precio de adquisición (criterio FIFO).
- Cambiar BTC por ETH, o por una *stablecoin*, es una transmisión: tributa aunque no hayas tocado euros.
- Las pérdidas pueden compensarse con ganancias de la base del ahorro, con límites (bloque 8).
- Modelo 721: declaración informativa de criptomonedas custodiadas en el extranjero por encima de 50.000 € a final de año.
`,
  fondo: `
### 1. ¿Cómo se valora algo que no produce flujos?
Hay varias propuestas, ninguna aceptada por consenso:
- **Reserva de valor / oro digital**: si bitcoin capturara una parte del papel del oro como reserva, su valor sería una fracción del valor total del oro. Es un argumento de cuota de mercado, no de flujos.
- **Efecto red (ley de Metcalfe)**: el valor de una red crecería con el cuadrado de sus usuarios. Hay estudios que encuentran relación entre usuarios activos y capitalización, pero la causalidad es discutible.
- **Ecuación cuantitativa** (lección 0.1): si un token sirve como medio de pago, su valor depende del volumen de transacciones que soporta y de la velocidad con que circula: M = P·Y / V. Con velocidades altas, el valor necesario es bajo.
- **Escasez programada** (*stock-to-flow*): relaciona el precio con la ratio entre lo que existe y la nueva emisión. Muy popular hasta 2021 y muy criticado después: sus predicciones fallaron por mucho.
- **Valor intrínseco nulo**: posición de algunos economistas y bancos centrales. Sin flujos ni respaldo, el precio se sostiene solo por la creencia de que otros comprarán.

Lo honesto es reconocer que el rango de valores «justos» es enorme, y que la volatilidad es la consecuencia lógica.

### 2. *Proof of work*, *halving* y seguridad
Bitcoin usa **prueba de trabajo**: los mineros compiten resolviendo un problema computacional; el ganador añade el bloque y cobra la recompensa. La seguridad depende del coste de ese trabajo (atacar la red exigiría controlar la mayoría del poder de cómputo). Cada 210.000 bloques (unos 4 años) la recompensa se divide por dos; el último *halving* fue en abril de 2024. Con el tiempo, la seguridad tendrá que pagarse cada vez más con comisiones de transacción, una pregunta abierta. Ethereum pasó en septiembre de 2022 a **prueba de participación** (*proof of stake*), que reduce mucho el consumo de energía.

### 3. Dos colapsos de 2022 que conviene conocer
- **Terra/Luna (mayo de 2022)**: una *stablecoin* «algorítmica» que mantenía su paridad con el dólar mediante un mecanismo de creación y destrucción de otro token, sin reservas reales. Cuando la confianza falló, entró en espiral y ambos tokens perdieron casi todo su valor en días.
- **FTX (noviembre de 2022)**: uno de los mayores *exchanges* del mundo quebró al descubrirse que usaba fondos de clientes para otras operaciones. Su fundador fue condenado en EE. UU. en 2023. Los clientes con dinero en la plataforma quedaron atrapados durante años.

Las dos historias son el riesgo de **custodia** y de **contraparte**, no del precio de bitcoin.

### 4. Correlación: ¿oro digital o tecnológica apalancada?
La narrativa de «oro digital» sugeriría que bitcoin sube en las crisis. En la práctica, en los últimos años su correlación con la bolsa tecnológica ha sido positiva, y más alta en las caídas: en junio de 2026 cayó por debajo de 60.000 dólares arrastrado por el Nasdaq. Como diversificador en los momentos malos, ha funcionado peor que los bonos del Estado o el oro.

### 5. Regulación europea: MiCA
El reglamento europeo de mercados de criptoactivos (MiCA) se aplica plenamente desde el 30 de diciembre de 2024 (las normas de *stablecoins*, desde junio de 2024). Exige autorización a los proveedores de servicios, reglas de custodia separada de los fondos de clientes, información a los inversores y requisitos de reservas a los emisores de *stablecoins*. Reduce algunos riesgos de plataforma; no reduce el riesgo de precio.
`,
  caso: {
    titulo: "Bitcoin, noviembre de 2025 a noviembre de 2026",
    md: `
- **7 de noviembre de 2025**: en torno a **103.000 dólares**.
- **Junio de 2026**: cae por debajo de **60.000 dólares**, arrastrado por la caída de las tecnológicas.
- **Octubre de 2026**: se habla de un posible hackeo a Binance y el precio cae un 4 % en un día.
- **6–7 de noviembre de 2026**: en torno a **75.700 dólares** (unos 67.600 euros), con salidas de los fondos cotizados, miedo a subidas de tipos y un dato de inflación en EE. UU. por delante.

En un año, un **−27 %**, con un tramo intermedio del −40 %.

> Lo que enseña: incluso en un año sin colapsos como los de 2022, bitcoin se mueve como la bolsa más arriesgada. Su lugar razonable en una cartera es pequeño y con reglas de rebalanceo decididas antes.
`
  },
  ejercicios: [
    {
      t: "Recuperarse de una caída del 77 %",
      p: `
En 2022 bitcoin cayó alrededor de un 77 % desde su máximo. ¿Cuánto tenía que subir después para volver al máximo? Si subiera un 40 % anual, ¿cuántos años tardaría?
`,
      s: `
1. Subida necesaria: 1 / (1 − 0,77) − 1 = 1 / 0,23 − 1 = **+335 %**.
2. Años al 40 %: ln(1 / 0,23) / ln(1,40) = 1,470 / 0,336 = **4,4 años**.
3. Con la volatilidad de la cripto, esa recuperación puede ocurrir mucho más rápido o no ocurrir: la media no describe el camino.
`
    },
    {
      t: "Cuánto pesa el 5 % de bitcoin",
      p: `
Con la cartera del apartado «Entenderlo» (60 % acciones, 35 % bonos, 5 % bitcoin), bitcoin sube un 150 % en un año y el resto no se mueve. ¿Qué peso tiene ahora bitcoin? ¿Qué harías con una regla de rebalanceo del 5 %?
`,
      s: `
1. Valores tras el año (sobre 100): acciones 60, bonos 35, bitcoin 5 × 2,5 = 12,5. Total: 107,5.
2. Peso de bitcoin: 12,5 / 107,5 = **11,6 %**. Su aportación al riesgo sería de bastante más de un tercio del total.
3. Con la regla del 5 %: vender bitcoin hasta 0,05 × 107,5 = 5,4 y repartir 7,1 entre acciones y bonos. Vendes caro lo que ha subido y mantienes el riesgo que elegiste. Es el rebalanceo (bloque 3), y en cripto tributa.
`
    },
    {
      t: "Tributar sin pasar a euros",
      p: `
Compraste 1 BTC por 30.000 €. Cuando vale 60.000 €, lo cambias por ETH sin pasar por euros. ¿Tienes que tributar? ¿Cuánto, con la escala del ahorro de 2026 y sin otras ganancias?
`,
      s: `
1. Sí: el intercambio es una transmisión. Ganancia: 60.000 − 30.000 = **30.000 €**.
2. Impuesto: 6.000 × 19 % + 24.000 × 21 % = 1.140 + 5.040 = **6.180 €**.
3. Y tu coste de adquisición del ETH pasa a ser 60.000 €. Si después el ETH cae y no lo vendes, ya has pagado el impuesto de una ganancia que se ha evaporado. Cada intercambio es un evento fiscal.
`
    }
  ],
  errores: [
    "Invertir en cripto dinero que no puedes permitirte perder en su mayor parte.",
    "Dejar todo en un *exchange* sin entender el riesgo de custodia.",
    "Creer que cambiar una cripto por otra no tributa.",
    "Confundir una *stablecoin* con un depósito garantizado.",
    "Dejar que el peso de la cripto crezca sin rebalancear."
  ],
  test: [
    { p: "¿Cuántos bitcoins existirán como máximo?", o: ["21 millones", "100 millones", "No hay límite"], c: 0, e: "Y la emisión nueva se reduce a la mitad cada unos 4 años." },
    { p: "En España, cambiar BTC por ETH…", o: ["No tributa hasta pasar a euros", "Tributa como transmisión", "Está exento"], c: 1, e: "Cada intercambio genera ganancia o pérdida patrimonial." },
    { p: "¿Qué riesgo materializó la quiebra de FTX?", o: ["Riesgo de precio", "Riesgo de custodia y de contraparte", "Riesgo de tipos"], c: 1, e: "Los clientes perdieron acceso a sus fondos por la plataforma, no por el precio." },
    { p: "Un 5 % de bitcoin en una cartera 60/35 aporta, en el ejemplo, en torno a…", o: ["El 5 % del riesgo", "El 14 % del riesgo", "El 50 % del riesgo"], c: 1, e: "Por su volatilidad del 60 % y su correlación con las acciones." },
    { p: "¿Qué hizo caer a Terra/Luna en 2022?", o: ["Un hackeo", "Una stablecoin algorítmica sin reservas reales que entró en espiral", "Una prohibición regulatoria"], c: 1, e: "Cuando la confianza falló, el mecanismo no tenía respaldo." }
  ],
  lecturas: [
    { t: "Bitcoin: A Peer-to-Peer Electronic Cash System", a: "Satoshi Nakamoto, 2008", n: "El documento original. Nueve páginas." },
    { t: "The Bitcoin Standard", a: "Saifedean Ammous", n: "La defensa como reserva de valor. Léelo con espíritu crítico." },
    { t: "Reglamento MiCA (UE) 2023/1114 y guías de la CNMV sobre criptoactivos", a: "Unión Europea y CNMV" },
    { t: "Información sobre la fiscalidad de las criptomonedas y el modelo 721", a: "Agencia Tributaria" }
  ]
});


/* ---- l10.js ---- */
LECCIONES.push({
  id: "b1-l10", num: "1.10",
  titulo: "Derivados y productos complejos",
  resumen: "Un derivado es un contrato cuyo valor depende de otro activo: futuros, opciones, CFDs, warrants, productos estructurados. Sirven para cubrir riesgos o para apostar con apalancamiento. Para un inversor particular, la regla práctica es sencilla: si no sabes dibujar lo que ganas y pierdes en cada escenario, no lo compres. Con CFDs, la mayoría de las cuentas minoristas pierde dinero.",
  esencial: `
Un **derivado** no es un activo en sí: es un contrato cuyo valor **deriva** del precio de otra cosa (una acción, un índice, el petróleo, un tipo de interés…).

**Los principales**
- **Futuros**: compromiso de comprar o vender algo a un precio y una fecha. Se deposita solo una garantía, así que hay **apalancamiento**.
- **Opciones**: el **derecho**, no la obligación, de comprar (*call*) o vender (*put*) a un precio fijado. Se paga una **prima**. El comprador arriesga como mucho la prima; el vendedor puede perder mucho más.
- **CFDs** (contratos por diferencias): apuestas apalancadas sobre el precio de algo, contra el bróker. Según la autoridad europea de valores (ESMA), entre el **74 % y el 89 %** de las cuentas minoristas perdían dinero con ellos; por eso desde 2018 están limitados en la UE.
- **Warrants y turbos**: opciones o productos apalancados emitidos por bancos, cotizados en bolsa.
- **Productos estructurados**: combinaciones de un bono y derivados que ofrecen, por ejemplo, un «cupón alto» con capital en riesgo si un índice cae por debajo de una barrera.

**Para qué sirven**
- **Cubrir**: una aerolínea fija el precio del combustible; un exportador, el del dólar; un inversor protege su cartera comprando *puts*.
- **Especular**: apostar con poco dinero a un movimiento, con apalancamiento.

**Por qué conviene tener cuidado**
1. El apalancamiento multiplica las pérdidas (lección 0.6).
2. Muchos tienen costes implícitos que no se ven (en el precio de la opción o del estructurado).
3. El tiempo juega en contra del comprador de opciones: si no pasa nada, la prima se pierde.
4. Su perfil de ganancias y pérdidas no es lineal y es fácil malinterpretarlo.

Los bancos y brókeres deben hacerte un **test de conveniencia** antes de venderte productos complejos. Si te advierte de que no son adecuados para ti, tómatelo en serio.
`,
  entender: `
### Futuros: el apalancamiento y la liquidación diaria
Un futuro sobre un índice puede controlar 20.000 € con 1.000 € de garantía. Cada día se liquidan las ganancias y pérdidas: si el índice cae, el bróker resta la pérdida de tu garantía y, si baja de cierto nivel, te pide más dinero o cierra la posición. Una caída del 5 % del índice es una pérdida del 100 % de la garantía.

### Opciones: el perfil de resultados
*Call* con precio de ejercicio 100 y prima de 5; *put* con precio de ejercicio 100 y prima de 4. Resultado al vencimiento por cada acción, según dónde acabe la cotización:

| Precio final | Comprar la acción a 100 | Comprar la *call* | Comprar la *put* |
|---|---|---|---|
| 80 | −20 | −5 | +16 |
| 90 | −10 | −5 | +6 |
| 100 | 0 | −5 | −4 |
| 105 | +5 | 0 | −4 |
| 110 | +10 | +5 | −4 |
| 120 | +20 | +15 | −4 |

- La *call* limita la pérdida a la prima, pero necesita que la acción suba más de 5 € solo para empatar.
- La *put* funciona como un **seguro**: si la acción cae, compensa; si no, pagas la prima.

### CFDs: las reglas europeas
Desde 2018, en la UE, los CFDs para minoristas tienen:
- límites de apalancamiento (por ejemplo, 30:1 en las grandes divisas, 20:1 en los principales índices, 2:1 en criptoactivos);
- cierre automático de posiciones cuando la garantía cae a la mitad;
- protección frente a saldo negativo (no puedes perder más de lo depositado);
- aviso obligatorio del porcentaje de clientes que pierden dinero.

### Productos estructurados: cómo leerlos
Un ejemplo típico de banca: «cupón del 8 % anual mientras el IBEX no caiga más de un 40 %; si cae más, recibes el valor del índice». Por dentro suele ser:
- un **bono** del banco emisor (riesgo de crédito del banco);
- **más una opción vendida** por ti al banco (una *put* con barrera): cobras la prima como «cupón» a cambio de asumir las caídas grandes.

El cupón alto es la prima de un seguro que tú le vendes al banco. Si llega la caída grande, pierdes mucho; si no, cobras un cupón que, una vez descontados los márgenes, suele valer menos de lo que parece.
`,
  fondo: `
### 1. Cuánto vale una opción: Black, Scholes y Merton (1973)
El modelo de Black-Scholes calcula el precio de una opción europea a partir de cinco datos: precio del activo (S), precio de ejercicio (K), tiempo hasta el vencimiento (T), tipo sin riesgo (r) y **volatilidad** (σ). La idea clave: combinando la opción con el activo en las proporciones adecuadas se puede construir una cartera sin riesgo, así que el precio de la opción no depende de la rentabilidad esperada del activo, sino de su volatilidad. Por eso se dice que **en las opciones se compra y se vende volatilidad**. Scholes y Merton recibieron el Nobel en 1997 (Black había fallecido).

Lo que sube el precio de una *call*: más volatilidad, más plazo, un activo más caro respecto al precio de ejercicio y, en menor medida, tipos más altos.

### 2. Paridad *put-call*
Sin necesidad de ningún modelo, por arbitraje:

$$ C − P = S − K / (1 + r)ᵀ

Si una acción vale 100, el precio de ejercicio es 100, el tipo un 3 % y la *call* a un año vale 8, la *put* a un año debe valer 8 − 100 + 97,09 = **5,09**. Si cotizara a otro precio, habría un beneficio sin riesgo. Muestra que *calls*, *puts*, acciones y bonos son piezas intercambiables: un estructurado no es más que una combinación de ellas.

### 3. La prima de riesgo de la volatilidad
De media, la volatilidad **implícita** en el precio de las opciones es mayor que la volatilidad que luego se produce. Quien **vende** opciones (por ejemplo, con estrategias de venta de *calls* cubiertas o de *puts*) cobra esa diferencia la mayor parte del tiempo. El precio: pérdidas grandes y concentradas cuando llega un movimiento extremo. Se describe como «recoger monedas delante de una apisonadora». Muchos productos que prometen ingresos altos y estables venden volatilidad sin decirlo con esas palabras.

### 4. Los estructurados, a examen
Varios estudios académicos han encontrado que los productos estructurados vendidos a minoristas tienen un **sobreprecio** medio de varios puntos porcentuales respecto al valor teórico de sus componentes. Henderson y Pearson (2011), por ejemplo, estimaron un sobreprecio cercano al 8 % en un tipo de producto popular en EE. UU., hasta el punto de que su rentabilidad esperada era inferior a la del activo sin riesgo. La complejidad facilita que el margen no se vea.

### 5. Cobertura con *puts*: el coste del seguro
Comprar *puts* sobre tu cartera limita las caídas, pero cuesta: una protección anual contra caídas de más del 10 % en un índice puede costar varios puntos porcentuales al año, según la volatilidad. Mantenerla siempre se come buena parte de la rentabilidad esperada de la bolsa. Para la mayoría de inversores, la forma más barata de limitar caídas es la que viste en el bloque 0: el reparto entre activos y el colchón.
`,
  caso: {
    titulo: "Febrero de 2018: el producto que vendía volatilidad",
    md: `
Durante años, un producto cotizado en EE. UU. que apostaba contra la volatilidad del mercado (vendía, en la práctica, futuros sobre el índice de volatilidad VIX) dio rentabilidades espectaculares: la bolsa estaba tranquila y la «prima de volatilidad» se cobraba mes tras mes. Atrajo a muchos inversores particulares.

El 5 de febrero de 2018, el VIX se disparó en una sola sesión. El producto perdió más del 90 % de su valor de un día para otro y el emisor anunció su liquidación. Años de ganancias estables desaparecieron en horas.

> Lo que enseña: los ingresos altos y regulares suelen ser la prima de un seguro que alguien te paga por asumir un riesgo raro y grande. Antes de comprar algo que «rinde todos los meses», pregunta qué pasa en el peor día.
`
  },
  ejercicios: [
    {
      t: "Acción o call",
      p: `
Una acción cotiza a 100 €. Puedes comprar 100 acciones (10.000 €) o 100 *calls* con precio de ejercicio 100 y prima de 5 € (500 €), a un año. Calcula tu resultado en euros y en porcentaje sobre lo invertido si al vencimiento la acción vale 90, 105 o 120.
`,
      s: `
| Precio final | Acciones: € | Acciones: % | *Calls*: € | *Calls*: % |
|---|---|---|---|---|
| 90 | −1.000 | −10 % | −500 | −100 % |
| 105 | +500 | +5 % | 0 | 0 % |
| 120 | +2.000 | +20 % | +1.500 | +300 % |

Con la *call* arriesgas menos euros, pero en porcentaje lo pierdes todo si la acción no sube lo suficiente. Necesitas que suba más de un 5 % para no perder. Es apalancamiento con pérdida limitada a la prima.
`
    },
    {
      t: "Apalancamiento en un CFD",
      p: `
Abres un CFD sobre un índice con 1.000 € de garantía y un apalancamiento de 20:1. ¿Qué exposición tienes? ¿Qué pasa si el índice cae un 2,5 %? ¿Y un 5 %?
`,
      s: `
1. **Exposición**: 1.000 × 20 = **20.000 €**.
2. **Caída del 2,5 %**: pérdida de 500 € = el **50 %** de tu garantía. Con las reglas europeas, al llegar a ese nivel el bróker cierra la posición.
3. **Caída del 5 %**: pérdida de 1.000 € = el **100 %**.
4. Un movimiento que en un fondo indexado sería un mal día te deja sin nada. Por eso la mayoría de las cuentas de CFDs pierden.
`
    },
    {
      t: "Paridad put-call",
      p: `
Una acción vale 100 €, el tipo sin riesgo a un año es del 3 % y una *call* a un año con precio de ejercicio 100 cuesta 8 €. ¿Cuánto debería costar la *put* con el mismo precio de ejercicio y plazo? Si cotizara a 7 €, ¿qué harías?
`,
      s: `
1. Paridad: C − P = S − K / (1 + r) → P = C − S + K / (1 + r) = 8 − 100 + 100 / 1,03 = 8 − 100 + 97,09 = **5,09 €**.
2. Si la *put* cuesta 7 €, está **cara** frente a la *call*. La cartera «comprar *call* + vender *put* + depositar 97,09 €» replica la acción. Vender la *put* cara, comprar la *call* y vender la acción (o pedirla prestada) deja un beneficio de 7 − 5,09 = 1,91 € sin riesgo.
3. En la práctica, los arbitrajistas profesionales hacen esto al instante y la paridad se cumple casi siempre. Lo útil para ti: cualquier producto con opciones se puede descomponer en piezas conocidas y valorar.
`
    }
  ],
  errores: [
    "Comprar un producto cuyo resultado no sabes dibujar en cada escenario.",
    "Usar CFDs o futuros con dinero que no puedes perder entero.",
    "Ver un «cupón alto» sin preguntar qué riesgo estás vendiendo a cambio.",
    "Comprar opciones esperando ganar si «no pasa nada»: el tiempo juega en contra del comprador.",
    "Ignorar el riesgo de crédito del banco que emite un estructurado o un warrant."
  ],
  test: [
    { p: "¿Cuánto puede perder como máximo el comprador de una opción?", o: ["La prima pagada", "Todo el valor del activo", "Sin límite"], c: 0, e: "El vendedor de la opción es quien asume pérdidas potencialmente grandes." },
    { p: "Según la ESMA, ¿qué porcentaje de cuentas minoristas perdía dinero con CFDs?", o: ["Entre el 10 % y el 20 %", "Entre el 74 % y el 89 %", "Un 50 %"], c: 1, e: "Por eso desde 2018 están limitados en la UE." },
    { p: "Un estructurado con «cupón del 8 % salvo que el índice caiga más de un 40 %» suele ser por dentro…", o: ["Un depósito garantizado", "Un bono del banco más una opción de venta vendida por ti", "Un fondo indexado"], c: 1, e: "El cupón es la prima del seguro que tú vendes al banco." },
    { p: "En Black-Scholes, ¿qué dato determina sobre todo el precio de la opción y no se observa directamente?", o: ["El precio de ejercicio", "La volatilidad", "El tipo de interés"], c: 1, e: "Por eso se dice que en las opciones se negocia volatilidad." },
    { p: "¿Qué le pasó al producto que vendía volatilidad el 5 de febrero de 2018?", o: ["Ganó un 90 %", "Perdió más del 90 % en un día y se liquidó", "No se movió"], c: 1, e: "Años de ganancias estables desaparecieron en horas." }
  ],
  lecturas: [
    { t: "Options, Futures, and Other Derivatives", a: "John Hull", n: "El manual de referencia. Avanzado." },
    { t: "The Pricing of Options and Corporate Liabilities", a: "Fischer Black y Myron Scholes, Journal of Political Economy, 1973" },
    { t: "The Dark Side of Financial Innovation", a: "Brian Henderson y Neil Pearson, Journal of Financial Economics, 2011", n: "Sobre el sobreprecio de los estructurados." },
    { t: "Advertencias y guías sobre productos complejos", a: "CNMV", n: "Incluye el listado de entidades no autorizadas." }
  ]
});


var META = {
  id: 1,
  titulo: "Los activos",
  intro: `
Antes de decidir cuánto poner en cada sitio, hay que saber qué es cada sitio. Este bloque recorre todo lo que se puede comprar para invertir: **acciones** (qué derecho compras, de dónde sale su rentabilidad y por qué está tan concentrada), **bonos** (precio, tipos, curva, riesgo de crédito y tipos de deuda), los **vehículos** que los contienen (fondos y ETFs, con su fiscalidad en España), los **activos reales** (vivienda, materias primas y oro), los **criptoactivos** y los **derivados**.

La idea que recorre el bloque: casi todo es **propiedad**, **deuda** o algo **sin flujos**, y cada familia tiene su propia fuente de rentabilidad y su propia forma de fallar. Los vehículos son envoltorios: primero se decide el activo y después el envoltorio.
`,
  foto: {
    titulo: "La foto del momento",
    fecha: "13 nov 2026",
    md: `
| Activo | Dato | Comentario |
|---|---|---|
| Letras del Tesoro a 12 meses | 3,068 % | Máximo desde julio de 2024 (subasta del 3 de noviembre) |
| Letras a 3 y 6 meses | 2,665 % y 2,845 % | Curva corta con pendiente positiva |
| Bono alemán a 2 y 10 años | ≈ 3,0 % y 3,3 % | El Bund, en máximos de unos 15 años |
| Bono español a 10 años | ≈ 4,0 % (septiembre) | Prima de riesgo media de 2026: unos 46 puntos básicos |
| *High yield* europeo | Diferencial ≈ 3,4 %; impagos 3,3–3,8 % | Datos de finales del primer trimestre |
| S&P 500 | Las 10 mayores, 39,1 % del índice | Récord de 40,7 % a final de 2025 |
| Fondos de inversión en España | 479.234 millones de euros | Octubre de 2026 |
| Vivienda en alquiler | Rentabilidad bruta del 6,5 % (idealista) o del 3,0 % (Banco de España) | Según la metodología |
| Oro | ≈ 4.100 $/onza | Máximo de 5.594 $ el 29 de enero; −31 % hasta octubre |
| Bitcoin | ≈ 75.700 $ | −27 % en un año |
`
  },
  glosario: [
    { t: "Activo financiero", d: "Derecho sobre algo de valor: una parte de una empresa, un préstamo, un contrato." },
    { t: "Prima de riesgo", d: "Rentabilidad extra que se exige por asumir un riesgo. También, en deuda pública, el diferencial de un país frente a Alemania." },
    { t: "Correlación", d: "Medida, de −1 a +1, de cuánto se mueven juntos dos activos." },
    { t: "Activo nominal", d: "Promete una cantidad fija de dinero (bonos, depósitos). La inflación inesperada lo daña." },
    { t: "Activo real", d: "Su valor se mueve con los precios (acciones, inmuebles, materias primas)." },
    { t: "Acción", d: "Parte del capital de una empresa: derecho residual a sus beneficios, voto y responsabilidad limitada." },
    { t: "Capitalización", d: "Precio de la acción por número de acciones: lo que vale la empresa en bolsa." },
    { t: "BPA", d: "Beneficio por acción." },
    { t: "PER", d: "Precio entre beneficio por acción. Su inversa es la rentabilidad por beneficio." },
    { t: "Rentabilidad por dividendo", d: "Dividendo anual entre precio." },
    { t: "Payout", d: "Porcentaje del beneficio que se reparte como dividendo." },
    { t: "Recompra de acciones", d: "La empresa compra y amortiza sus acciones; aumenta la porción de cada accionista." },
    { t: "Horquilla (spread)", d: "Diferencia entre el mejor precio de compra y el de venta. Coste oculto de operar." },
    { t: "Orden limitada", d: "Orden con un precio máximo de compra o mínimo de venta." },
    { t: "Dilución", d: "Pérdida de porcentaje de propiedad al emitirse acciones nuevas." },
    { t: "Hipótesis de los mercados eficientes", d: "Fama (1970): los precios incorporan la información disponible, en versiones débil, semifuerte y fuerte." },
    { t: "Problema de agencia", d: "Conflicto de intereses entre accionistas y directivos." },
    { t: "Índice ponderado por capitalización", d: "Cada empresa pesa según su valor en bolsa." },
    { t: "Índice de rentabilidad total", d: "Índice que incluye los dividendos reinvertidos." },
    { t: "Asimetría (skewness)", d: "Distribución con pocos resultados extremos que tiran de la media. Explica que la acción típica rinda menos que la media." },
    { t: "CAPE", d: "PER ajustado al ciclo: precio entre la media de 10 años de beneficios reales (Shiller)." },
    { t: "Factores", d: "Características que explican diferencias de rentabilidad: tamaño, valor, momento, rentabilidad, inversión." },
    { t: "Número efectivo de empresas", d: "1 / Σ peso²: cuántas empresas iguales equivaldrían a la diversificación real de un índice." },
    { t: "Bono", d: "Préstamo con cupón, nominal, vencimiento y emisor definidos." },
    { t: "Cupón", d: "Interés anual fijo de un bono sobre su nominal." },
    { t: "Letras del Tesoro", d: "Deuda pública a 3–12 meses, emitida al descuento, sin cupón." },
    { t: "TIR de un bono", d: "Rentabilidad anual si se mantiene hasta el vencimiento y el emisor paga." },
    { t: "Rentabilidad corriente", d: "Cupón entre precio." },
    { t: "Curva de tipos", d: "Rentabilidad de la deuda de un emisor a cada plazo." },
    { t: "Curva invertida", d: "Los plazos cortos rinden más que los largos. Históricamente ha anticipado recesiones." },
    { t: "Tipo implícito (forward)", d: "Tipo futuro que se deduce de la curva actual." },
    { t: "Prima por plazo", d: "Rentabilidad extra que se exige por prestar a más largo plazo." },
    { t: "Riesgo de crédito", d: "Posibilidad de que el emisor no pague." },
    { t: "Rating", d: "Calificación de solvencia de un emisor (de AAA hacia abajo)." },
    { t: "Grado de inversión", d: "Rating de BBB− o superior." },
    { t: "High yield", d: "Deuda con rating inferior a BBB−; paga más y tiene más riesgo de impago." },
    { t: "Diferencial (spread) de crédito", d: "Rentabilidad extra de un bono sobre la deuda más segura del mismo plazo." },
    { t: "Pérdida esperada", d: "Probabilidad de impago × pérdida si hay impago." },
    { t: "Subordinación", d: "Lugar en la escalera de cobro. Cuanto más subordinada, más riesgo." },
    { t: "AT1 / CoCos", d: "Bonos bancarios que pueden convertirse en acciones o amortizarse si el capital del banco cae." },
    { t: "Participaciones preferentes", d: "Instrumentos híbridos perpetuos, sin garantía. En España se vendieron a minoristas antes de 2012." },
    { t: "Bono ligado a la inflación", d: "Bono cuyo nominal se ajusta con la inflación. En España, Obligaciones €i." },
    { t: "Fondo de inversión", d: "Patrimonio común gestionado por una gestora, custodiado por una depositaria, con valor liquidativo diario." },
    { t: "Valor liquidativo", d: "Precio de una participación: (activos − pasivos) / participaciones." },
    { t: "Gastos corrientes (TER)", d: "Coste anual total de un fondo o ETF." },
    { t: "Traspaso", d: "Cambio de fondo sin tributar por las ganancias acumuladas, propio de la normativa española." },
    { t: "Fondo de rentabilidad objetivo", d: "Fondo de bonos con fecha de vencimiento que aspira a una rentabilidad aproximada si se mantiene hasta ella." },
    { t: "SPIVA", d: "Informe de S&P que compara fondos activos con sus índices." },
    { t: "Active share", d: "Porcentaje de la cartera de un fondo que difiere de su índice." },
    { t: "ETF", d: "Fondo, casi siempre indexado, que cotiza en bolsa durante la sesión." },
    { t: "Diferencia de seguimiento", d: "Lo que un ETF o fondo indexado rinde de más o de menos que su índice." },
    { t: "Error de seguimiento", d: "Volatilidad de la diferencia entre el fondo y su índice." },
    { t: "Réplica física / sintética", d: "Comprar los valores del índice o replicar su rentabilidad mediante un swap." },
    { t: "Acumulación / distribución", d: "Reinvertir los dividendos dentro del fondo o repartirlos." },
    { t: "Creación y reembolso", d: "Mecanismo de arbitraje que mantiene el precio de un ETF cerca del valor de su cartera." },
    { t: "ETC / ETN", d: "Títulos de deuda cotizados que replican un activo; tienen riesgo del emisor." },
    { t: "Cobertura de divisa (hedged)", d: "Versión de un fondo que neutraliza el efecto del tipo de cambio, con un coste." },
    { t: "Rentabilidad bruta / neta de un inmueble", d: "Alquiler entre precio, antes o después de gastos e impuestos." },
    { t: "SOCIMI / REIT", d: "Empresa cotizada de inmuebles en alquiler obligada a repartir la mayor parte de sus beneficios." },
    { t: "Ratio precio/alquiler", d: "Años de alquiler que cuesta comprar la vivienda; el «PER» inmobiliario." },
    { t: "Futuro", d: "Contrato para comprar o vender algo a un precio y una fecha, con garantía y liquidación diaria." },
    { t: "Contango / backwardation", d: "Futuros más caros (o más baratos) cuanto más lejanos. Determinan si renovar cuesta o rinde." },
    { t: "Criptoactivo", d: "Activo digital registrado en una cadena de bloques descentralizada." },
    { t: "Blockchain", d: "Registro público compartido de transacciones, mantenido por muchos ordenadores." },
    { t: "Stablecoin", d: "Token que intenta mantener un valor fijo frente a una moneda." },
    { t: "Autocustodia", d: "Guardar uno mismo las claves privadas de sus criptoactivos." },
    { t: "Halving", d: "Reducción a la mitad de la emisión nueva de bitcoin, cada 210.000 bloques." },
    { t: "MiCA", d: "Reglamento europeo de mercados de criptoactivos, plenamente aplicable desde el 30 de diciembre de 2024." },
    { t: "Modelo 721", d: "Declaración informativa de criptomonedas custodiadas en el extranjero por encima de 50.000 €." },
    { t: "Derivado", d: "Contrato cuyo valor depende del precio de otro activo." },
    { t: "Opción call / put", d: "Derecho a comprar (call) o vender (put) a un precio fijado, a cambio de una prima." },
    { t: "CFD", d: "Contrato por diferencias: apuesta apalancada sobre el precio de un activo." },
    { t: "Producto estructurado", d: "Combinación de un bono y derivados con un perfil de pago definido." },
    { t: "Paridad put-call", d: "C − P = S − K / (1 + r)ᵀ: relación de arbitraje entre opciones, activo y bono." },
    { t: "Volatilidad implícita", d: "Volatilidad que se deduce del precio de las opciones." },
    { t: "Test de conveniencia", d: "Evaluación obligatoria antes de vender productos complejos a un minorista." }
  ],
  fuentes: [
    { t: "UBS: Global Investment Returns Yearbook 2026", u: "https://www.ubs.com/global/en/media/display-page-ndp/en-20260303-global-investment-returns-yearbook-2026.html", n: "Rentabilidades desde 1900; oro" },
    { t: "Ara: la bolsa española desde 1900", u: "https://en.ara.cat/economy/in-the-long-run-the-stock-market-always-wins_1_5671860.html" },
    { t: "PWL Capital: resumen del anuario 2026", u: "https://parkyndoyonlarochelle.pwlcapital.com/?p=15032" },
    { t: "Raisin: subasta de Letras a 6 y 12 meses, noviembre de 2026", u: "https://www.raisin.com/es-es/noticias/letras-tesoro-6-12-meses-rentabilidad-noviembre/" },
    { t: "Raisin: Letras a 3 y 9 meses, noviembre de 2026", u: "https://www.raisin.com/es-es/noticias/rentabilidad-letras-3-9-meses-noviembre-2026/" },
    { t: "Banco de España: resultado de la subasta de Letras de octubre de 2026", u: "https://www.bde.es/f/webbe/INF/MenuHorizontal/entidades-profesionales/mercadeuda/subastas/LETRAS6y12meses202611.pdf" },
    { t: "Finimize: rentabilidades del Bund a 2 y 10 años", u: "https://finimize.com/content/oils-bounce-pushed-german-bond-yields-off-a-two-month-low" },
    { t: "Rankia: el Bund en máximos de 15 años", u: "https://www.rankia.com/blog/dollar-wave/7348451-bund-maximos-15-anos-estamos-repeticion-2022" },
    { t: "Bankinter: rentabilidad de los bonos a 10 años", u: "https://www.bankinter.com/blog/economia/rentabilidad-bonos-paises-subidas" },
    { t: "elDiario.es: la prima de riesgo en 2026", u: "https://www.eldiario.es/economia/prima-riesgo-no_129_13527839.html" },
    { t: "Finect: la prima de riesgo en 2012", u: "https://www.finect.com/usuario/sonIA/articulos/insolito-el-bono-espanol-a-10-anos-mas-barato-que-el-frances-por-primera-vez-desde-2008" },
    { t: "AFME: European High Yield Report, Q1 2026", u: "https://www.afme.eu/publications/data-research/european-high-yield-leveraged-loan-and-private-credit-report-q1-2026/" },
    { t: "Análisis de diferenciales y recuperaciones del high yield (2026)", u: "https://ferrante-website.pages.dev/insights/high-yield-credit-spreads-cycle-low-2026-default-divergence/" },
    { t: "Concentración del S&P 500 (datos de S&P DJI a 30-09-2026)", u: "https://www.kucoin.com/blog/ae-nvidia-apple-and-microsoft-sp500-concentration" },
    { t: "RBC Wealth Management: The Great Narrowing", u: "https://www.rbcwealthmanagement.com/en-eu/insights/the-great-narrowing-sp-500-concentration" },
    { t: "Bessembinder: Do Stocks Outperform Treasury Bills? (resumen ASU)", u: "https://knowledge.wpcarey.asu.edu/sites/default/files/do-stocks-outperform-treasury-bills.pdf" },
    { t: "Morningstar: solo el 2,4 % de las empresas crea toda la riqueza (estudio global)", u: "https://www.morningstar.com.au/stocks/only-2-4-of-companies-deliver-all-net-shareholder-wealth" },
    { t: "Inverco vía Finect: patrimonio de los fondos en octubre de 2026", u: "https://www.finect.com/usuario/eduardogarcia/articulos/el-patrimonio-de-los-fondos-en-espana-se-situa-en-479234-millones-en-octubre-y-recupera-el-crecimiento" },
    { t: "Inverco: informe de febrero de 2026", u: "https://www.inverco.es/wp-content/uploads/2026/03/2602_Febrero-2026.pdf", n: "Cuentas de partícipes" },
    { t: "Indexology (S&P): SPIVA Europe Year-End 2025", u: "https://www.indexologyblog.com/tag/spiva-europe/" },
    { t: "OCU: gestión activa o pasiva (2026)", u: "https://www.ocu.org/inversiones/invertir/fondos/articulos/2026/05/gestion-activa-vs-pasiva-fondos" },
    { t: "Infobae / idealista: rentabilidad bruta de la vivienda, 2.º trimestre de 2026", u: "https://www.infobae.com/america/agencias/2026/07/06/la-rentabilidad-bruta-de-comprar-vivienda-para-alquilar-baja-del-72-al-65-en-un-ano-segun-idealista/" },
    { t: "Vozpópuli: rentabilidad del alquiler según el Banco de España", u: "https://www.vozpopuli.com/economia/inmobiliario/la-rentabilidad-del-alquiler-cae-a-su-nivel-mas-bajo-en-15-anos-y-ya-rinde-menos-que-los-bonos-del-estado.html" },
    { t: "idealista: rentabilidad por capitales", u: "https://www.idealista.com/news/etiquetas/rentabilidad-oficinas" },
    { t: "Vozpópuli: precio de la vivienda usada, junio de 2026", u: "https://www.vozpopuli.com/indux/?p=4295" },
    { t: "Reporte Minero: el oro en 2026", u: "https://reporteminero.cl/noticia/noticias/2026/11/oro-volatilidad-corto-plazo-demanda-largo-plazo-2026" },
    { t: "La República / Reuters: el oro, 5 y 6 de noviembre de 2026", u: "https://www.larepublica.co/finanzas/precio-del-oro-hoy-6-de-noviembre-de-2026-4519005" },
    { t: "Cryptoticker: bitcoin a 6–7 de noviembre de 2026", u: "https://cryptoticker.io/es/precio-bitcoin-informe-empleo-media-100-dias/" },
    { t: "La Nación: bitcoin a 7 de noviembre de 2025", u: "https://www.lanacion.com.ar/economia/IA/bitcoin-hoy-la-cotizacion-al-7-de-noviembre-nid07112025/" },
    { t: "CriptoNoticias: bitcoin cae por debajo de 60.000 $ (junio de 2026)", u: "https://www.criptonoticias.com/mercados/precio-bitcoin-cae-arrastrado-nasdaq-mercado-tradicional/" },
    { t: "Advisor Perspectives: Mind the Gap y los fondos de bitcoin", u: "https://www.advisorperspectives.com/commentaries/2026/08/21/what-advisors-can-learn-from-the-investor-return-gap" }
  ]
};

META.lecciones=LECCIONES;
CURSO.registrar(META);
})();
