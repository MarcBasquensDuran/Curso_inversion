/* Bloque 3. Generado a partir de src/b3/ */
(function(){
var LECCIONES=[];

/* ---- l01.js ---- */
LECCIONES.push({
  id: "b3-l1", num: "3.1",
  titulo: "La idea: comprar todo el mercado",
  resumen: "Un fondo indexado no intenta elegir las mejores empresas: las compra todas, en la proporción en que pesan en el mercado, y cobra muy poco por hacerlo. La idea nació en los años setenta entre académicos y fue recibida con burlas. Hoy la mitad del dinero de los fondos estadounidenses está en productos indexados, porque, después de costes, el inversor medio que indexa gana al inversor medio que no lo hace.",
  esencial: `
**Qué es un fondo indexado.** Un fondo que copia un índice: si el índice MSCI World tiene un 5 % en Nvidia y un 0,1 % en Iberdrola, el fondo tiene lo mismo. No hay un gestor que decida qué comprar; hay un equipo que se asegura de que la copia sea fiel y barata.

**Por qué funciona.** No porque los gestores sean torpes, sino por tres razones que se refuerzan:
1. **Aritmética**: el conjunto de todos los inversores *es* el mercado. Antes de costes, la media de los que intentan batirlo obtiene la rentabilidad del mercado; después de costes, menos. Quien indexa obtiene la del mercado menos un coste mínimo (lección 1.6).
2. **Costes**: un indexado global cuesta en España un 0,12 % al año; un fondo activo de bolsa, a menudo un 1,5–2 %. A 30 años, esa diferencia se come más de un tercio del resultado (lección 3.2).
3. **Diversificación**: tener miles de empresas garantiza tener dentro a las pocas extraordinarias que generan casi toda la rentabilidad (lección 1.3).

**Lo que no es.** Indexar no es «invertir sin riesgo»: tienes todo el riesgo del mercado, incluidas sus caídas del 50 %. Tampoco es «no hacer nada»: hay que decidir el reparto entre bolsa y renta fija, elegir índices y productos, aportar con disciplina y, sobre todo, no venderlo todo en una crisis.

**Un poco de historia.**
- 1973: Burton Malkiel publica *Un paseo aleatorio por Wall Street* y propone un fondo que compre el mercado.
- 1974: el Nobel Paul Samuelson pide en un artículo que alguien lance un fondo así.
- 1976: John Bogle lanza en Vanguard el primer fondo indexado para particulares, sobre el S&P 500. Quería captar 150 millones de dólares y consiguió 11,3. Lo llamaron «la locura de Bogle».
- Hoy, los fondos indexados y ETF tienen más patrimonio que los activos en EE. UU., y en Europa reciben casi el doble de dinero nuevo.

**La apuesta de Buffett** (caso real) resume la idea: un fondo indexado barato contra una selección de gestores profesionales escogidos por expertos. Ganó el fondo barato, y por mucho.
`,
  entender: `
#### Cómo copia un fondo el índice
| Método | Cómo funciona | Ventajas | Inconvenientes |
|---|---|---|---|
| **Réplica física completa** | Compra todas las acciones del índice en su peso | Máxima fidelidad | Caro en índices con miles de valores pequeños |
| **Réplica por muestreo** | Compra una muestra representativa | Más barato en índices enormes | Pequeñas desviaciones |
| **Réplica sintética** | Un banco paga la rentabilidad del índice mediante un contrato (*swap*) | Muy preciso; en algunos índices, ventajas fiscales | Riesgo de contraparte, limitado por normativa |

Muchos fondos además **prestan valores** a otros inversores a cambio de una comisión, que se suma a la rentabilidad y compensa parte de sus costes. Es una fuente de pequeño riesgo (que el prestatario no devuelva), mitigada con garantías.

#### Qué mide la calidad de un indexado
- **Gastos corrientes (TER)**: lo que cobra cada año.
- **Diferencia de seguimiento** (*tracking difference*): cuánto rinde menos (o más) que el índice en un año. Es el coste real; puede ser menor que el TER gracias al préstamo de valores o a ventajas fiscales en los dividendos.
- **Error de seguimiento** (*tracking error*): la volatilidad de esa diferencia. Mide la fidelidad.
- **Tamaño y gestora**: fondos grandes de gestoras grandes tienden a ser más baratos y estables.

#### Pasivo no significa inmóvil
El índice cambia: entran y salen empresas, se ajustan pesos por ampliaciones y recompras, se revisa cada trimestre. Un fondo de capitalización bursátil, sin embargo, apenas tiene que operar: si una acción sube, su peso en el índice y en el fondo sube solo. Por eso su **rotación** es bajísima, y con ella sus costes ocultos de negociación.

#### Activo y pasivo: una frontera difusa
- **Indexado puro**: copia un índice de mercado por capitalización.
- **Factorial o *smart beta***: copia un índice construido con reglas (valor, calidad, baja volatilidad…; lección 2.8). Es pasivo en la ejecución, activo en la elección.
- **Activo «encubierto»** (*closet indexer*): cobra como activo pero su cartera se parece mucho al índice (lección 1.6).
- **Activo de verdad**: carteras muy distintas del índice, con alto *active share*.
`,
  fondo: `
#### 1. El argumento de Samuelson y Malkiel
El argumento académico de los setenta descansaba en la **hipótesis del mercado eficiente** (Fama, 1970; lección 1.2): si los precios incorporan rápidamente la información pública, es muy difícil batir al mercado de forma sistemática, y lo racional para la mayoría es comprarlo entero al menor coste. Samuelson escribió en 1974 «Un desafío al juicio» (*Challenge to Judgment*), donde pedía a los gestores pruebas de que batían al mercado y proponía, si no las había, crear un fondo que replicara el S&P 500. Bogle citó ese artículo como inspiración directa.

El argumento no necesita que el mercado sea perfectamente eficiente. Basta con la aritmética de Sharpe (1991): la rentabilidad media de los gestores activos, antes de costes, es la del mercado, y después de costes, menor. Incluso si hubiera muchas ineficiencias, alguien tendría que estar al otro lado perdiendo.

#### 2. Los primeros fondos
- **1971**: Wells Fargo crea un fondo indexado para el plan de pensiones de la fabricante de maletas Samsonite, inicialmente con pesos iguales sobre unas 1.500 acciones de la bolsa de Nueva York. Las operaciones necesarias para mantener los pesos iguales hicieron que se pasara a ponderar por capitalización.
- **1976**: Vanguard lanza el First Index Investment Trust, sobre el S&P 500, para particulares. Su colocación fue un fracaso comercial. Un competidor hizo circular un cartel que decía que el indexado era «antiamericano», y el presidente de Fidelity declaró que no creía que la gran mayoría de inversores se conformara con resultados medios.
- **1993**: nace el primer ETF estadounidense (SPY), que permite comprar el índice en bolsa como una acción.

#### 3. Por qué la capitalización bursátil
Ponderar por capitalización tiene propiedades únicas:
- Es la **única cartera que todos los inversores pueden tener a la vez** (lo que se llama consistencia macroeconómica): es, literalmente, la suma de lo que poseen todos. Cualquier otra ponderación exige que alguien tenga lo contrario.
- **Se rebalancea sola**: si una acción sube un 10 %, su peso sube en la misma proporción en el índice y en el fondo, sin operar.
- Es la cartera de equilibrio del **CAPM** (lección 2.7) y la cartera tangente común de la separación de Tobin (lección 2.6).

Su inconveniente, que veremos en las lecciones 3.4 y 3.10: pesa más lo que más ha subido, también cuando ha subido demasiado.

#### 4. ¿Qué rentabilidad ofrece un indexado?
Exactamente la del índice menos la diferencia de seguimiento. Es decir: **no promete nada sobre el mercado**, solo que no lo harás peor que él por más de unas décimas. Si la bolsa rinde un 7 % real a largo plazo (lección 1.1), un indexado barato dará un 6,8–6,9 %. Si la próxima década es mala (lección 1.3, previsiones con CAPE alto), también lo será para el indexado. Lo que elimina es el riesgo de **quedarte por debajo del mercado** por elegir mal.

#### 5. Lo que dice la evidencia, en una frase
Las fichas de resultados de S&P (SPIVA) y Morningstar, actualizadas cada seis meses, muestran lo mismo desde hace más de veinte años en casi todos los mercados y categorías: a 10 años, la gran mayoría de fondos activos queda por debajo de su índice, y los que lo baten en un periodo raramente lo repiten en el siguiente. Las lecciones 3.2 y 3.3 lo analizan en detalle.
`,
  caso: {
    titulo: "La apuesta de Buffett contra los hedge funds",
    md: `
En 2007, Warren Buffett ofreció apostar a cualquier gestor que, en los diez años siguientes y después de comisiones, un fondo indexado al S&P 500 batiría a una cesta de *hedge funds* elegida por su rival. Aceptó Ted Seides, de Protégé Partners, que eligió cinco fondos de *hedge funds* (cada uno, a su vez, una selección de decenas de gestores). Buffett eligió la clase Admiral del Vanguard 500 Index Fund, con un coste del 0,04 % anual. La apuesta, de un millón de dólares, iría a una entidad benéfica.

Lo que pasó:
- **2008** fue el único año en que ganaron los *hedge funds*: el S&P 500 cayó un **37 %** y la cesta de Protégé un **23,9 %**. Parecía que la gestión profesional demostraba su valor.
- A partir de 2009 el índice ganó todos los años. En los **nueve primeros años**, el fondo indexado acumuló un **85,4 %** (un 7,1 % anual) frente a un **22 %** de media de los fondos de Protégé (2,2 % anual). El mejor de los cinco llevaba un 62,8 % y el peor, un 2,9 %.
- Seides dio por perdida la apuesta antes del final. En 2017 el S&P 500 subió más de un 19 % más.
- Girls Inc. de Omaha recibió unos **2,27 millones de dólares** (la apuesta se había invertido y también se revalorizó).

¿Por qué perdieron los *hedge funds*? No por falta de talento: por **costes**. Con la estructura típica del sector (un 2 % fijo más un 20 % de los beneficios) y una segunda capa de comisiones del fondo de fondos, necesitaban batir al mercado en varios puntos al año solo para empatar. Y una cesta de cinco fondos de fondos tenía dentro cientos de gestores: en conjunto, se parecía mucho al mercado, pero con unos costes enormes.

> Lo que enseña: los costes son lo único seguro en la rentabilidad de un fondo. Seleccionar gestores que superen sus propios costes es posible, pero hacerlo de antemano y de forma sostenida es muchísimo más difícil de lo que parece. El propio Buffett ha dejado escrito que, cuando muera, la mayor parte del dinero destinado a su viuda debe invertirse en un indexado al S&P 500.
`
  },
  ejercicios: [
    {
      t: "Los números de la apuesta",
      p: `
En los nueve primeros años de la apuesta, el indexado acumuló un 85,4 % y la cesta de Protégé un 22 %. Calcula la rentabilidad anual de cada uno. En 2008 el índice cayó un 37 % y la cesta un 23,9 %: ¿cuánto tenía que subir cada uno después para recuperarse?
`,
      s: `
1. **Indexado**: 1,854^(1/9) − 1 = **7,1 %** anual.
2. **Protégé**: 1,22^(1/9) − 1 = **2,2 %** anual.
3. **Recuperar el −37 %**: 1 / 0,63 − 1 = **+58,7 %**. **El −23,9 %**: 1 / 0,761 − 1 = **+31,4 %**.
4. Los *hedge funds* necesitaban mucho menos para recuperarse, pero subían mucho menos: la menor caída no compensó una década de costes altos y exposición reducida al mercado.
`
    },
    {
      t: "¿Por qué la capitalización no obliga a operar?",
      p: `
Un índice tiene dos acciones: A vale 600 millones y B 400 millones. Un fondo indexado de 1 millón tiene 600.000 € en A y 400.000 € en B. A sube un 20 % y B baja un 10 %. Calcula los nuevos pesos del índice y los del fondo. ¿Tiene que comprar o vender algo?
`,
      s: `
1. **Índice**: A = 720 millones, B = 360 millones. Total 1.080. Pesos: A **66,7 %**, B **33,3 %**.
2. **Fondo**: A = 720.000 €, B = 360.000 €. Total 1.080.000 €. Pesos: A **66,7 %**, B **33,3 %**.
3. Coinciden sin hacer nada. Los precios ajustan solos los pesos. Solo hay que operar cuando cambia la composición del índice (altas, bajas, ampliaciones, recompras) o cuando entran y salen partícipes. Por eso los indexados por capitalización tienen tan poca rotación.
`
    },
    {
      t: "Qué rentabilidad puedes esperar de un indexado",
      p: `
Un índice de bolsa mundial rinde un 7 % anual durante 20 años. Tu fondo indexado tiene un TER del 0,12 % y una diferencia de seguimiento del 0,08 % (rinde 0,08 puntos menos que el índice cada año). ¿Cuánto vale al final una inversión de 10.000 €? ¿Y si el índice rinde solo un 3 %?
`,
      s: `
1. **Rentabilidad del fondo**: 7 % − 0,08 % = **6,92 %**. Valor: 10.000 × 1,0692²⁰ = **38.122 €** (el índice daría 38.697 €).
2. **Con un índice al 3 %**: 2,92 % → 10.000 × 1,0292²⁰ = **17.783 €**.
3. El indexado te garantiza (casi) la rentabilidad del mercado, sea buena o mala. No elimina el riesgo del mercado: elimina el riesgo de quedarte por debajo de él.
`
    }
  ],
  errores: [
    "Creer que indexar significa no asumir riesgo.",
    "Pensar que un fondo indexado «no tiene gestión»: hay que elegir índice, producto y reparto.",
    "Comparar indexados solo por el TER sin mirar la diferencia de seguimiento.",
    "Comprar un fondo activo que cobra como activo y copia el índice.",
    "Esperar del indexado más de lo que da el mercado: si la bolsa va mal, irá mal."
  ],
  test: [
    { p: "¿Quién lanzó en 1976 el primer fondo indexado para particulares?", o: ["Warren Buffett", "John Bogle, en Vanguard", "Paul Samuelson"], c: 1, e: "Quería 150 millones de dólares y captó 11,3: «la locura de Bogle»." },
    { p: "¿Por qué un indexado por capitalización apenas tiene que operar?", o: ["Porque no admite nuevos partícipes", "Porque los cambios de precio ajustan solos los pesos", "Porque solo invierte una vez al año"], c: 1, e: "Si una acción sube, su peso sube igual en el índice y en el fondo." },
    { p: "¿Qué mide la diferencia de seguimiento (tracking difference)?", o: ["La volatilidad del fondo", "Cuánto rinde el fondo por debajo o por encima del índice", "El número de empresas"], c: 1, e: "Es el coste real de la réplica; el error de seguimiento es su volatilidad." },
    { p: "En la apuesta de Buffett, ¿en qué año ganaron los hedge funds?", o: ["2008", "2013", "Ninguno"], c: 0, e: "Cayeron un 23,9 % frente al −37 % del índice; luego perdieron todos los años." },
    { p: "¿Qué ventaja única tiene ponderar por capitalización?", o: ["Siempre bate al mercado", "Es la única cartera que todos los inversores pueden tener a la vez", "Evita las burbujas"], c: 1, e: "Es la suma de lo que poseen todos: consistencia macroeconómica." }
  ],
  lecturas: [
    { t: "El pequeño libro para invertir con sentido común", a: "John C. Bogle", n: "La defensa de la indexación por su creador. Breve y claro." },
    { t: "Un paseo aleatorio por Wall Street", a: "Burton Malkiel", n: "El clásico de 1973, actualizado muchas veces." },
    { t: "Challenge to Judgment", a: "Paul Samuelson, Journal of Portfolio Management, 1974", n: "El artículo que inspiró a Bogle." },
    { t: "Trillions", a: "Robin Wigglesworth", n: "La historia de la indexación, de Wells Fargo a BlackRock. Muy ameno." },
    { t: "Carta a los accionistas de Berkshire Hathaway de 2017", a: "Warren Buffett", n: "Su resumen de la apuesta, con todas las cifras." }
  ]
});


/* ---- l02.js ---- */
LECCIONES.push({
  id: "b3-l2", num: "3.2",
  titulo: "El peso de los costes",
  resumen: "La rentabilidad del mercado es incierta; los costes, seguros. Una diferencia de 1,7 puntos al año entre un indexado y un fondo activo se come más de un tercio del resultado a 30 años. Los datos europeos son contundentes: a 10 años, más del 97 % de los fondos activos de bolsa global en euros quedaron por debajo de su índice. La explicación principal no es la falta de talento, sino lo que cobran.",
  esencial: `
**El principio.** John Bogle lo resumía así: en inversión, **recibes lo que no pagas**. Cada euro que se lleva el fondo en comisiones sale de tu rentabilidad, todos los años, compuesto.

**Cuánto cuesta un fondo en España.**
| Tipo de fondo | Gastos corrientes típicos |
|---|---|
| Indexado a la bolsa mundial | 0,12–0,30 % |
| ETF del S&P 500 | 0,07 % |
| Fondo activo de bolsa vendido por un banco | 1,5–2 % |
| Algunos fondos activos con comisión de éxito | Hasta un 2 % más un porcentaje de los beneficios |

**El efecto a largo plazo.** 10.000 € a 30 años con una bolsa que rinde un 7 % antes de costes:
| Coste anual | Valor final |
|---|---|
| 0,12 % | 73.603 € |
| 0,50 % | 66.144 € |
| 1,00 % | 57.435 € |
| 1,80 % | 45.759 € |

Pagar un 1,8 % en lugar de un 0,12 % te deja con un **38 % menos**. Si aportas 300 € al mes durante 30 años, la diferencia es de unos **90.000 €**, casi lo mismo que todo lo que has aportado (108.000 €).

**Lo que dicen los datos.** Según el último informe SPIVA de S&P sobre fondos europeos (junio de 2026), a 10 años quedaron por debajo de su índice:
- el **97,7 %** de los fondos activos de bolsa global en euros;
- el **97,6 %** de los de bolsa española;
- el **69,5 %** de los de bonos corporativos en euros.

Además, casi la mitad de los fondos de bolsa española que existían hace diez años ya no existen: se cerraron o se fusionaron, casi siempre por malos resultados.

**Qué hacer**: mira siempre el coste total antes de invertir. Para la parte de bolsa de tu cartera, un indexado barato es la opción por defecto; un fondo activo tiene que darte una razón muy buena para pagar diez veces más.
`,
  entender: `
#### Por qué los costes pesan tanto
Porque se cobran **sobre el patrimonio**, no sobre la ganancia. Un 1,8 % anual parece poco, pero si la bolsa rinde un 7 %, es más de una cuarta parte de la rentabilidad esperada cada año. Y si la rentabilidad real (descontada la inflación) es del 4–5 %, el fondo se queda con casi la mitad.

$$ valor final ∝ (1 + r − c)ᵀ   →   pérdida relativa = 1 − ((1 + r − c₁) / (1 + r − c₂))ᵀ

#### Los costes que no salen en el TER
- **Costes de negociación**: comprar y vender acciones tiene un coste (horquillas, impacto en el precio). Un fondo activo que rota su cartera al 100 % al año puede pagar varias décimas extra que no aparecen en los gastos corrientes. Un indexado por capitalización rota muy poco.
- **Comisiones de suscripción y reembolso**: poco habituales hoy, pero existen.
- **Comisión de éxito**: un porcentaje de los beneficios por encima de un objetivo. Cobra en los años buenos y no devuelve en los malos.
- **Custodia y comercialización**: en algunas plataformas, el banco cobra aparte por guardar los valores.
- **Retenciones en dividendos**: dependen del domicilio del fondo (lección 1.7).
- **Liquidez**: el dinero que el fondo mantiene sin invertir para atender reembolsos también resta en mercados alcistas.

#### ¿Cuánto tiene que batir un gestor para compensar?
Si un indexado cuesta un 0,12 % y el fondo activo un 1,8 %, el gestor necesita batir al índice en **1,68 puntos al año antes de costes**, todos los años, solo para empatar. Con una diferencia de seguimiento típica del 4–6 % frente al índice, y sin habilidad, la probabilidad de quedar por delante del indexado a 10 años es de apenas un **12–21 %** (y eso suponiendo que el fondo sobreviva).

#### El coste también decide entre fondos activos
Morningstar encuentra en Estados Unidos que, a 10 años (hasta junio de 2026), el **33 %** de los fondos activos más baratos de su categoría batieron al indexado medio, frente a solo el **20 %** de los más caros. Si eliges un fondo activo, que sea barato: es el único predictor de éxito que funciona de forma consistente.
`,
  fondo: `
#### 1. La aritmética de Sharpe, otra vez y con más detalle
William Sharpe (1991) mostró que, **antes de costes**, la rentabilidad media del dinero gestionado activamente es exactamente la del mercado (porque activos más pasivos suman el mercado, y los pasivos tienen la del mercado). **Después de costes**, la media de los activos es menor que la de los pasivos en lo que cuesta de más la gestión activa. Si el mercado rinde un 8 %, los indexados cuestan un 0,1 % y los activos un 1,5 % de media, los indexados darán un 7,9 % y la media de los activos un 6,5 %.

Dos matices importantes que se han discutido después:
- **Pedersen (2018)** señaló que la aritmética supone que «el mercado» no cambia: en la realidad hay salidas a bolsa, ampliaciones y cambios de índice, y los pasivos tienen que operar con los activos. Eso deja un pequeño margen para que la gestión activa, en conjunto, añada algo de valor. El margen es menor que los costes típicos.
- La aritmética habla de la **media ponderada por patrimonio**. Puede haber gestores que ganen siempre, si hay otros (por ejemplo, particulares que operan solos) que pierden siempre.

#### 2. ¿Cuánto cuesta la búsqueda de rentabilidad extra?
Kenneth French (2008), en su discurso como presidente de la American Finance Association, calculó cuánto gastaban los inversores estadounidenses en intentar batir al mercado (comisiones de fondos, costes de negociación, sueldos de gestores…) entre 1980 y 2006: de media, un **0,67 % del valor total de la bolsa cada año**. Como el conjunto no puede batirse a sí mismo, eso es lo que la sociedad pagaba cada año por la gestión activa. Su conclusión: un inversor típico podría aumentar su rentabilidad en esa cantidad simplemente cambiándose a un indexado.

El argumento a favor de ese gasto es que la gestión activa **hace que los precios sean correctos** (lección 3.5). La pregunta es si hace falta pagar tanto para ello.

#### 3. El sesgo de supervivencia
Si comparas los fondos que existen hoy con su índice, ignoras los que se cerraron, que casi siempre lo hacían peor. Los informes SPIVA corrigen este sesgo incluyendo los fondos desaparecidos. En Europa, solo sobrevivió a 10 años el **63 %** de los fondos de bolsa global en euros y el **51 %** de los de bolsa española. Las gestoras tienden a cerrar o fusionar los fondos malos y a lanzar fondos nuevos de lo que está de moda, con lo que su gama siempre parece buena.

#### 4. ¿Por qué hay categorías donde la gestión activa funciona mejor?
- **Renta fija**: los índices incluyen bonos poco líquidos que los fondos no pueden comprar a esos precios, y los gestores pueden cobrar menos y tomar algo más de riesgo de crédito. Por eso las tasas de fracaso son menores (69,5 % a 10 años en bonos corporativos en euros frente a más del 95 % en bolsa).
- **Mercados emergentes**: más ineficiencias y costes de réplica más altos para los indexados (87,7 % de fracaso a 10 años en los fondos en euros).
- **Sesgos de estilo**: en años en que las empresas pequeñas o el valor van bien, los gestores, que tienden a sobreponderarlos, mejoran (lección 2.8). No es habilidad, sino exposición a factores.

#### 5. La industria responde
La presión de los indexados ha bajado los costes en todo el sector. En Estados Unidos, Vanguard rebajó a principios de 2026 las comisiones de alrededor del 10 % de sus 11,5 billones de dólares en fondos. En Europa, la gestión activa sigue dominando el patrimonio en bolsa (unos 4,1 billones de euros frente a 3,4 en pasivos), pero el dinero nuevo va mayoritariamente a los pasivos: en el primer trimestre de 2026, 120.000 millones de euros frente a 64.100.
`,
  caso: {
    titulo: "SPIVA Europa, junio de 2026: los fondos frente a sus índices",
    md: `
S&P Dow Jones Indices publica cada seis meses su informe SPIVA, que compara los fondos activos con su índice de referencia incluyendo los fondos que han desaparecido. Los datos de los fondos europeos en euros a 30 de junio de 2026:

| Categoría (fondos en euros) | % que quedó por debajo del índice: 1 año | 3 años | 5 años | 10 años |
|---|---|---|---|---|
| Bolsa global | 72,2 % | 89,3 % | 94,5 % | **97,7 %** |
| Bolsa europea | 87,4 % | 89,2 % | 94,2 % | **96,6 %** |
| Bolsa de la zona euro | 83,2 % | 91,8 % | 90,9 % | **97,0 %** |
| Bolsa de EE. UU. | 69,5 % | 86,7 % | 96,5 % | **97,0 %** |
| Bolsa española | 98,0 % | 98,4 % | 98,7 % | **97,6 %** |
| Bolsa emergente | 39,1 % | 65,9 % | 73,7 % | **87,7 %** |

Y la supervivencia a 10 años: el 63,5 % de los fondos de bolsa global y solo el **50,6 %** de los de bolsa española.

El caso español es especialmente llamativo. En el primer semestre de 2026, el 98 % de los fondos de bolsa española quedó por detrás de su índice. Parte se explica por la composición del índice, muy concentrado en grandes bancos que subieron con fuerza en 2025 (lección 2.8) y que muchos fondos tenían por debajo de su peso. Pero a 10 años el resultado es casi idéntico: con muy pocas excepciones, los fondos de bolsa española no han batido a su índice.

> Lo que enseña: elegir un fondo activo es apostar a estar en el 2–3 % que bate al índice durante una década. Es posible, pero las probabilidades de partida son muy malas, y la principal razón son los costes.
`
  },
  ejercicios: [
    {
      t: "El coste de un 1,8 % frente a un 0,12 %",
      p: `
Aportas 300 € al mes durante 30 años. La bolsa rinde un 7 % anual antes de costes. Compara el resultado con un indexado al 0,12 % y con un fondo activo al 1,8 % (supón que el fondo activo rinde lo mismo que el índice antes de costes). ¿Cuánto pierdes y qué parte de lo aportado representa?
`,
      s: `
1. **Rentabilidades netas**: 6,88 % y 5,20 %, capitalizando mes a mes.
2. **Indexado**: ≈ **343.173 €**. **Activo**: ≈ **253.405 €**.
3. **Diferencia**: ≈ **89.768 €**, un **26 %** del resultado del indexado.
4. **Aportado**: 300 × 360 = 108.000 €. Lo que pierdes en costes es el 83 % de todo lo que has aportado.
5. Con una inversión única la pérdida relativa es aún mayor (38 %), porque todo el dinero paga costes durante los 30 años.
`
    },
    {
      t: "¿Qué probabilidad tiene un gestor sin habilidad?",
      p: `
Un fondo activo cuesta 1,5 puntos más que un indexado. No tiene habilidad: antes de costes, su rentabilidad respecto al índice es aleatoria, con media 0 y una volatilidad (error de seguimiento) del 4 % anual. ¿Qué probabilidad tiene de batir al indexado tras 10 años? ¿Y con un error de seguimiento del 6 %?
`,
      s: `
1. **Diferencia acumulada esperada** a 10 años: −1,5 × 10 = −15 puntos.
2. **Volatilidad acumulada**: 4 × √10 = 12,6 puntos.
3. **Probabilidad**: Φ(−15 / 12,6) = Φ(−1,19) ≈ **11,8 %**.
4. **Con un 6 %**: Φ(−15 / 19,0) = Φ(−0,79) ≈ **21,5 %**.
5. Cuanto más se separa del índice, más probable es que gane por suerte… y que pierda por mucho. Un fondo «indexado encubierto» con poco error de seguimiento casi nunca gana: solo cobra más.
`
    },
    {
      t: "La aritmética de Sharpe",
      p: `
El mercado rinde un 8 %. El 50 % del dinero está en indexados que cuestan un 0,1 % y el 50 % en fondos activos que cuestan, de media, un 1,5 %. ¿Qué rentabilidad media obtiene cada grupo? Si un gestor activo concreto obtiene un 9 % neto, ¿qué tiene que estar pasando en el resto de activos?
`,
      s: `
1. **Indexados**: 8 % − 0,1 % = **7,9 %**.
2. **Activos (antes de costes)**: la media tiene que ser el 8 %, porque activos e indexados juntos son el mercado. **Después de costes**: 8 % − 1,5 % = **6,5 %** de media.
3. Si un gestor obtiene un 9 % neto (10,5 % bruto), otros gestores activos (o particulares) tienen que obtener menos del 8 % bruto para que la media siga siendo un 8 %. Las ganancias de unos son exactamente las pérdidas relativas de otros.
`
    }
  ],
  errores: [
    "Fijarse en la rentabilidad pasada de un fondo y no en lo que cobra.",
    "Pensar que una comisión del 1,5 % es pequeña porque «es solo un uno y pico».",
    "Comparar con los fondos que existen hoy y olvidar los que se cerraron.",
    "No mirar los costes fuera del TER: comisión de éxito, custodia, comercialización.",
    "Elegir un fondo activo caro de tu banco por comodidad."
  ],
  test: [
    { p: "Según SPIVA (junio de 2026), ¿qué porcentaje de fondos activos de bolsa global en euros quedó por debajo de su índice a 10 años?", o: ["Un 52 %", "Un 75 %", "Un 97,7 %"], c: 2, e: "Y solo sobrevivió el 63 % de los fondos de la categoría." },
    { p: "10.000 € a 30 años al 7 % bruto: ¿cuánto menos acumulas con un coste del 1,8 % que con uno del 0,12 %?", o: ["Un 5 %", "Un 18 %", "Un 38 %"], c: 2, e: "45.759 € frente a 73.603 €." },
    { p: "¿Qué calculó Kenneth French (2008)?", o: ["Que los fondos activos baten al mercado", "Que los inversores estadounidenses gastaban un 0,67 % anual del valor de la bolsa en intentar batirla", "Que los indexados son caros"], c: 1, e: "Un coste que el conjunto de inversores no puede recuperar." },
    { p: "¿Por qué la gestión activa funciona algo mejor en renta fija?", o: ["Porque los bonos no tienen riesgo", "Porque los índices incluyen bonos poco líquidos y los gestores pueden cobrar menos y tomar más crédito", "Porque no hay índices de bonos"], c: 1, e: "Aun así, el 69,5 % de los fondos de bonos corporativos en euros falló a 10 años." },
    { p: "Según Morningstar, ¿qué característica predice mejor el éxito de un fondo activo?", o: ["Su rentabilidad del último año", "Su bajo coste", "Su número de estrellas"], c: 1, e: "33 % de éxito en los más baratos frente a 20 % en los más caros." }
  ],
  lecturas: [
    { t: "The Arithmetic of Active Management", a: "William Sharpe, Financial Analysts Journal, 1991", n: "Dos páginas que todo inversor debería leer." },
    { t: "The Cost of Active Investing", a: "Kenneth French, Journal of Finance, 2008" },
    { t: "Sharpening the Arithmetic of Active Management", a: "Lasse Heje Pedersen, Financial Analysts Journal, 2018", n: "El matiz a Sharpe." },
    { t: "Informes SPIVA Europe", a: "S&P Dow Jones Indices", n: "Gratuitos y actualizados cada seis meses." },
    { t: "Simulador de costes de fondos", a: "CNMV, cnmv.es", n: "Calcula el efecto de las comisiones en tu caso." }
  ]
});


/* ---- l03.js ---- */
LECCIONES.push({
  id: "b3-l3", num: "3.3",
  titulo: "¿Y si elijo a los gestores buenos?",
  resumen: "La objeción natural a la indexación es: «vale, la media pierde, pero yo elegiré a los que ganan». El problema es que los buenos resultados pasados predicen muy poco los futuros, que la suerte produce muchos campeones aparentes y que, cuando un gestor demuestra talento, el dinero que le llega acaba con su ventaja. Y los inversores suelen llegar justo después de los mejores años.",
  esencial: `
**El problema de la persistencia.** Si los buenos gestores lo fueran por talento, los que destacan en un periodo deberían seguir destacando en el siguiente. Los estudios muestran que **casi no ocurre**: de los fondos que están en el mejor cuarto de su categoría durante cinco años, la proporción que sigue ahí los cinco siguientes es más o menos la que cabría esperar por azar. Lo único que persiste de forma clara es lo malo: los fondos caros y con malos resultados tienden a seguir siéndolo.

**La suerte produce campeones.** Imagina 1.000 fondos sin ningún talento, cada uno con un 50 % de probabilidades de batir al índice cada año. Por pura suerte, unos **31** lo batirán cinco años seguidos. Con costes (probabilidad del 40 %), unos 10. Esos diez aparecerán en todos los rankings y en la prensa como «los mejores gestores», y nada garantiza que lo sigan siendo.

**El talento existe, pero se paga.** Los estudios más rigurosos encuentran que hay una pequeña minoría de gestores con habilidad real antes de costes. El problema es que:
- es muy difícil identificarlos **de antemano**;
- cuando se identifican, les llega mucho dinero, y gestionar más dinero hace más difícil batir al mercado;
- y suben sus comisiones, o las de los productos que los comercializan.

**El inversor llega tarde.** Los fondos con resultados espectaculares reciben el dinero **después** de sus mejores años. Por eso muchos partícipes pierden dinero en fondos que, sobre el papel, han ganado. El caso del ARK Innovation (caso real) es el ejemplo más claro de la última década.

**Qué hacer**: si quieres fondos activos, que sean una parte minoritaria de tu cartera, con costes bajos, gestores con una filosofía clara que entiendas y el horizonte de muchos años para juzgarlos. Nunca elijas un fondo por su rentabilidad del último año o de los tres últimos.
`,
  entender: `
#### Lo que dicen los datos de persistencia
- **Carhart (1997)**: la persistencia de los fondos estadounidenses se explicaba casi entera por el momento (lección 2.8) y por los costes. Una vez descontados, no quedaba talento persistente, salvo en los peores fondos, que seguían siendo malos.
- **Informes de persistencia de S&P** (*Persistence Scorecard*): una y otra vez, menos fondos de los que esperarías por azar se mantienen en el cuartil superior varios periodos seguidos.
- **Morningstar (barómetro de junio de 2026)**: solo el **25 %** de los fondos activos estadounidenses sobrevivió y batió a su alternativa pasiva media en los 10 años anteriores.

#### Cuántos campeones fabrica el azar
Con 1.000 fondos sin talento:
| Probabilidad de batir al índice cada año | Fondos que lo baten 5 años seguidos | 10 años seguidos |
|---|---|---|
| 50 % (sin costes) | 31 | 1 |
| 40 % (con costes) | 10 | 0,1 |

Por azar, la probabilidad de que un fondo que estuvo en el mejor cuarto de su categoría vuelva a estarlo dos periodos más es 0,25 × 0,25 = **6,25 %**. Si observas algo parecido en los datos, no has demostrado talento.

#### Las trampas de los rankings
- **Sesgo de supervivencia**: los rankings solo muestran los fondos vivos (lección 3.2).
- **Fondos incubados**: algunas gestoras lanzan varios fondos pequeños, cierran los que van mal y comercializan los que han tenido suerte, ya con un historial atractivo.
- **Elección del periodo**: «el mejor fondo a 5 años» cambia mucho según el día en que se mida.
- **Comparar con el índice equivocado**: un fondo de pequeñas compañías comparado con el S&P 500 parece genial en los años buenos de las pequeñas y nefasto en los malos.
- **Estilos de moda**: muchos «gestores estrella» tienen en realidad una apuesta muy concentrada en un estilo (crecimiento tecnológico, valor, pequeñas) que funciona hasta que deja de hacerlo.

#### Si aun así eliges un fondo activo
Señales que, según la evidencia, ayudan algo:
- **Costes bajos** (la más sólida).
- **Gestor que invierte su propio dinero en el fondo**.
- **Alto *active share*** (cartera muy distinta del índice) **con costes moderados**.
- **Patrimonio razonable** para su estrategia (lo pequeño en exceso es frágil; lo grande en exceso, poco ágil).
- **Proceso estable** y explicable que no cambie con cada moda.
`,
  fondo: `
#### 1. Suerte frente a habilidad: el problema estadístico
Con miles de fondos, algunos tendrán resultados extraordinarios por azar. La pregunta correcta no es si hay fondos con alfa estadísticamente significativo, sino **si hay más de los que el azar produciría**.

- **Barras, Scaillet y Wermers (2010)** aplicaron una técnica estadística muy usada en genética, la tasa de falsos descubrimientos, a fondos estadounidenses de 1975 a 2006. Concluyeron que, después de costes, alrededor del **75 %** tenía un alfa nulo, el **24 %** negativo (gestores «sin habilidad») y solo en torno al **0,6 %** positivo, una proporción indistinguible de cero. Antes de costes había más habilidad, que se iba en comisiones.
- **Fama y French (2010)**, con simulaciones (*bootstrap*), llegaron a una conclusión parecida: en conjunto, los resultados netos de los fondos son peores que los que habría producido el azar con alfa cero. Hay algo de talento antes de costes en los extremos, pero no lo suficiente para cubrir lo que cobran.

#### 2. El modelo de Berk y Green (2004)
Berk y Green propusieron una explicación elegante de por qué los buenos gestores no siguen ganando: el talento existe y los inversores lo buscan racionalmente, mirando los resultados pasados. Cuando un gestor destaca, le llega dinero; con más dinero, sus ideas pierden eficacia (rendimientos decrecientes) y sus costes de negociación suben, hasta que su alfa neto para el partícipe vuelve a ser cero. El gestor captura su talento en forma de comisiones sobre un patrimonio mayor. Es una visión menos pesimista del talento, pero con la misma conclusión práctica: **el partícipe no debe esperar batir al mercado** comprando a los gestores con buenos resultados pasados.

#### 3. El dinero persigue la rentabilidad (y llega tarde)
Sirri y Tufano (1998) documentaron que los flujos de dinero hacia los fondos responden con fuerza a los buenos resultados recientes y poco a los malos: el dinero entra en los ganadores, pero tarda en salir de los perdedores. Frazzini y Lamont (2008) lo llamaron el **dinero tonto** (*dumb money*): en conjunto, los inversores trasladan su dinero hacia fondos y estilos que después rinden peor. La consecuencia es la diferencia entre la rentabilidad del fondo y la del partícipe (rentabilidad ponderada por el dinero, lección 0.4), que se analiza a fondo en la lección 3.9.

#### 4. La gestión activa como industria
Los fondos activos no desaparecen porque cumplen funciones que el partícipe valora (un gestor al que poner cara, la esperanza de batir al mercado, la comercialización en la red bancaria) y porque las gestoras ganan mucho más con ellos. En España, buena parte de la comisión de gestión de los fondos activos se ha usado tradicionalmente para pagar a la red que los comercializa (las llamadas retrocesiones), un incentivo que la normativa europea MiFID II ha intentado limitar. Pregunta siempre quién cobra y por qué te recomiendan un fondo.

#### 5. ¿Hay espacio para la gestión activa?
Sí, con matices: mercados menos eficientes (pequeñas compañías, emergentes, deuda poco líquida), gestores con estrategias de muy largo plazo y costes razonables, o inversores con una ventaja real (tiempo, conocimiento de un sector, paciencia que el mercado no tiene). El bloque 7 estudia a los grandes inversores que han batido al mercado durante décadas. Lo que muestra este bloque es que **esa es la excepción y que identificarla de antemano es muy difícil**.
`,
  caso: {
    titulo: "ARK Innovation: un fondo que ganó y unos partícipes que perdieron",
    md: `
El ARK Innovation ETF (ARKK), gestionado por Cathie Wood, invierte en empresas de «innovación disruptiva»: Tesla, genómica, pagos digitales, robótica. Tras subir un 35,7 % en 2019, en **2020 ganó un 152,5 %** y su gestora se convirtió en una celebridad.

Lo que siguió es el patrón clásico:
- En 2021 entraron unos **20.600 millones de dólares** de dinero nuevo, según Morningstar, casi todo después de la gran subida.
- Entre 2021 y 2022 el fondo perdió más de dos tercios de su valor desde el máximo, al caer las acciones de crecimiento con la subida de tipos.
- Según Morningstar, la familia de fondos ARK fue la que **más riqueza destruyó** de toda la industria estadounidense en los 10 años hasta 2023: unos **14.300 millones de dólares**, más del doble que la siguiente. El propio ARKK destruyó unos 7.100 millones.

La paradoja: el fondo, desde su lanzamiento a finales de 2014, tenía una rentabilidad anualizada positiva (un 9,59 % hasta la fecha del análisis de Morningstar), por encima de la media de su categoría. Pero la mayoría de partícipes compró **después** de la subida de 2020. Ponderando por el dinero que había en cada momento, la rentabilidad del partícipe medio era claramente **negativa**. En los cinco años analizados, la rentabilidad ponderada por el dinero quedaba más de 25 puntos por debajo de la rentabilidad publicada del fondo.

> Lo que enseña: elegir un gestor por su resultado reciente es comprar después de la subida. Incluso cuando el fondo «gana», el inversor medio puede perder. Un indexado aburrido al que se aporta cada mes evita las dos trampas: la del gestor y la del propio inversor.
`
  },
  ejercicios: [
    {
      t: "Cuántos campeones fabrica la suerte",
      p: `
Hay 1.000 fondos sin ningún talento. Cada año, cada uno tiene una probabilidad del 40 % de batir a su índice (por los costes). ¿Cuántos lo baten 5 años seguidos? ¿Y 10? Si la prensa publica «los 10 fondos que han batido al mercado cinco años seguidos», ¿qué puedes concluir?
`,
      s: `
1. **5 años**: 1.000 × 0,4⁵ = **10,2 fondos**.
2. **10 años**: 1.000 × 0,4¹⁰ = **0,1 fondos** (lo más probable es que ninguno).
3. Que existan 10 fondos con cinco años seguidos de éxito es **exactamente lo que el azar produciría** aunque ninguno tuviera talento. Para concluir que hay talento, tendrías que ver muchos más de los esperados, o el mismo resultado en un periodo posterior que no hayas usado para elegirlos.
`
    },
    {
      t: "Rentabilidad del fondo y del partícipe",
      p: `
Un fondo sube un 50 % el primer año y cae un 20 % el segundo. Un inversor mete 1.000 € al principio y, entusiasmado, 9.000 € más al final del primer año. Calcula la rentabilidad anual del fondo (ponderada por el tiempo) y la del inversor (ponderada por el dinero). ¿Y si hubiera hecho lo contrario: meter 10.000 € y sacar 9.000 € al final del primer año?
`,
      s: `
1. **Rentabilidad del fondo**: √(1,5 × 0,8) − 1 = **+9,5 %** anual.
2. **Inversor que añade tras la subida**: tras el primer año tiene 1.500 + 9.000 = 10.500 €; tras el segundo, 8.400 €. Ha puesto 10.000 € y tiene 8.400 €. Su TIR: −1.000 − 9.000 / (1 + r) + 8.400 / (1 + r)² = 0 → **r ≈ −14,7 %** anual.
3. **Inversor que saca tras la subida**: tras el primer año tiene 15.000 − 9.000 = 6.000 €; tras el segundo, 4.800 €. TIR: **≈ +27,6 %** anual.
4. Mismo fondo, mismos dos años: el resultado del inversor depende de cuándo mete y saca el dinero. El dinero suele llegar después de las subidas, como en el primer caso.
`
    },
    {
      t: "El modelo de Berk y Green en números",
      p: `
Un gestor con talento genera un alfa bruto de 50 millones de euros al año, sea cual sea el tamaño del fondo (sus buenas ideas no crecen con el dinero). Cobra un 1 % anual. Calcula el alfa neto para los partícipes si gestiona 1.000, 3.000 y 5.000 millones. ¿Hasta qué tamaño crecerá el fondo si los inversores entran mientras el alfa neto sea positivo?
`,
      s: `
1. **Alfa bruto en porcentaje**: 50 / 1.000 = 5 %; 50 / 3.000 = 1,67 %; 50 / 5.000 = 1 %.
2. **Alfa neto (menos el 1 %)**: **+4 %**, **+0,67 %** y **0 %**.
3. Los inversores seguirán entrando hasta los **5.000 millones**, donde el alfa neto es cero. El gestor cobra entonces 50 millones al año: se ha quedado con todo su talento.
4. Por eso, aunque el talento exista, el partícipe que llega cuando el gestor ya es famoso no debería esperar batir al mercado.
`
    }
  ],
  errores: [
    "Elegir un fondo por su rentabilidad de 1 o 3 años.",
    "Creer que un ranking de «mejores fondos» identifica talento y no suerte.",
    "Entrar en un fondo después de su gran año.",
    "Ignorar que el patrimonio creciente de un fondo de éxito dificulta que siga batiendo al mercado.",
    "Comprar el fondo que te recomienda tu banco sin preguntar qué cobra quien lo recomienda."
  ],
  test: [
    { p: "Con 1.000 fondos sin talento y un 50 % de probabilidad anual de batir al índice, ¿cuántos lo baten 5 años seguidos?", o: ["Ninguno", "Unos 31", "Unos 500"], c: 1, e: "1.000 × 0,5⁵ ≈ 31: campeones por azar." },
    { p: "Según Barras, Scaillet y Wermers (2010), ¿qué proporción de fondos tenía alfa positivo después de costes?", o: ["En torno al 0,6 %, indistinguible de cero", "Un 25 %", "Un 50 %"], c: 0, e: "Un 75 % tenía alfa nulo y un 24 % negativo." },
    { p: "¿Qué explica el modelo de Berk y Green (2004)?", o: ["Que no existe el talento", "Que el dinero que llega a los buenos gestores acaba con su alfa neto", "Que los fondos pequeños siempre ganan"], c: 1, e: "El gestor se queda con su talento en forma de comisiones sobre más patrimonio." },
    { p: "¿Cuánto ganó el ARK Innovation en 2020?", o: ["Un 15 %", "Un 152,5 %", "Un 300 %"], c: 1, e: "Y en 2021 recibió 20.600 millones de dólares, justo antes de desplomarse." },
    { p: "¿Qué predictor de éxito de un fondo activo funciona mejor según la evidencia?", o: ["La rentabilidad reciente", "Los costes bajos", "La fama del gestor"], c: 1, e: "Es el más consistente en todos los estudios." }
  ],
  lecturas: [
    { t: "On Persistence in Mutual Fund Performance", a: "Mark Carhart, Journal of Finance, 1997" },
    { t: "False Discoveries in Mutual Fund Performance", a: "Barras, Scaillet y Wermers, Journal of Finance, 2010", n: "Técnico pero muy influyente." },
    { t: "Luck versus Skill in the Cross-Section of Mutual Fund Returns", a: "Eugene Fama y Kenneth French, Journal of Finance, 2010" },
    { t: "Mutual Fund Flows and Performance in Rational Markets", a: "Jonathan Berk y Richard Green, Journal of Political Economy, 2004" },
    { t: "Why ARKK Investors Are Still Underwater", a: "Amy Arnott, Morningstar", n: "El cálculo de la rentabilidad del partícipe." }
  ]
});


/* ---- l04.js ---- */
LECCIONES.push({
  id: "b3-l4", num: "3.4",
  titulo: "Qué índice: el mundo, Estados Unidos o algo distinto",
  resumen: "No todos los índices son «el mercado». El MSCI World solo tiene países desarrollados; el ACWI añade los emergentes; los índices «all cap» añaden las pequeñas. Todos ponderan por capitalización, y hoy eso significa un 70 % en Estados Unidos y más de una cuarta parte en diez empresas. Elegir índice es elegir cuánta concentración aceptas y en qué mundo crees que vivirás.",
  esencial: `
**Los índices más usados**
| Índice | Qué incluye | Para qué sirve |
|---|---|---|
| **MSCI World** | Grandes y medianas empresas de 23 países desarrollados (más de 1.300) | El indexado global más popular en España |
| **MSCI ACWI / FTSE All-World** | Lo anterior más los países emergentes | El «mercado mundial» completo de grandes y medianas |
| **MSCI ACWI IMI / FTSE Global All Cap** | Además, las empresas pequeñas | La versión más completa |
| **S&P 500** | Las 500 mayores empresas de EE. UU. | Solo Estados Unidos |
| **MSCI Emerging Markets** | Emergentes (China, India, Taiwán, Corea…) | Complemento al MSCI World |
| **Stoxx Europe 600 / MSCI Europe** | Europa desarrollada | Para sobreponderar Europa |

**Cómo pesa cada empresa.** Casi todos ponderan por **capitalización ajustada por capital flotante**: cuánto valen en bolsa las acciones que se pueden comprar de verdad. Por eso pesan más las empresas grandes y los países con bolsas grandes.

**El mundo de hoy, en un índice**
- Estados Unidos es el **70,6 %** del MSCI World (agosto de 2026); Japón, el 5,7 %; Reino Unido, el 3,5 %.
- Las diez mayores empresas son **más de una cuarta parte** del índice, cuatro veces más que hace quince años, y casi todas son estadounidenses y ligadas a la tecnología.
- En el S&P 500, las diez mayores son **casi el 40 %**, la mayor concentración desde mediados de los años sesenta.

Es decir: un indexado «mundial» hoy es, sobre todo, una apuesta por las grandes empresas tecnológicas estadounidenses.

**Cómo elegir, en la práctica**
- Si quieres **una sola pieza**: un fondo del mundo entero (ACWI o FTSE All-World) o la combinación MSCI World + algo de emergentes (lección 3.6).
- Si te preocupa la concentración en Estados Unidos: puedes añadir algo de Europa o de emergentes, o usar un índice de pesos iguales, sabiendo que te separas del mercado y que eso es una apuesta.
- Evita los índices estrechos como núcleo de la cartera (un solo país, un sector, un tema): son apuestas, no el mercado.
`,
  entender: `
#### Capital flotante, revisiones y umbrales
- **Capital flotante**: si un Estado o una familia controla el 50 % de una empresa y no lo vende, solo cuenta el otro 50 %. Por eso Inditex o algunas empresas chinas pesan menos de lo que su valor total sugiere.
- **Revisiones**: MSCI revisa los índices cada trimestre (con una revisión más amplia dos veces al año). Las empresas entran y salen según su tamaño, con márgenes para evitar entradas y salidas constantes.
- **Clasificación de países**: que un país sea «desarrollado» o «emergente» lo deciden los proveedores de índices con criterios de tamaño, accesibilidad y apertura. Corea del Sur, por ejemplo, sigue siendo emergente para MSCI. Un cambio de categoría mueve miles de millones.

#### Índices con y sin dividendos
- **Precio**: no incluye dividendos (el IBEX 35 que dan las noticias).
- **Neto** (*net return*): incluye dividendos descontando las retenciones típicas. Es el que siguen los fondos de acumulación.
- **Bruto** (*gross return*): dividendos sin retenciones. Es el más alto.

Al comparar tu fondo, usa el índice neto.

#### Cuánto Estados Unidos hay en tu cartera
| Cartera de bolsa | Peso en EE. UU. |
|---|---|
| 100 % MSCI World | 70,6 % |
| 90 % MSCI World + 10 % emergentes | ≈ 63,5 % |
| 80 % MSCI World + 20 % emergentes | ≈ 56,5 % |
| 100 % S&P 500 | 100 % |

#### Concentración: el número efectivo de empresas
Recuerda la lección 1.3: el **número efectivo** de un índice es 1 / Σ wᵢ². Un índice de 1.500 empresas cuyas diez mayores pesan un 29,5 % y el resto se reparte a partes iguales se comporta, en diversificación, como uno de unas **96** empresas iguales. MSCI calcula que el número efectivo de su índice mundial ha ido bajando a medida que el mercado se concentraba.

#### Estados Unidos frente al resto del mundo
| Periodo | Quién ganó |
|---|---|
| 1999–2009 | El resto del mundo, por unos 4 puntos al año |
| 2010–2024 | Estados Unidos, durante quince años seguidos (un récord) |
| 2025 | El resto del mundo (lección 2.9) |

Las previsiones a 10 años de Vanguard para 2026 dan más rentabilidad esperada fuera de EE. UU. (4,9–6,9 % anual) que dentro (3,5–5,5 %), por valoración. Son previsiones con mucha incertidumbre (lección 2.6), pero recuerdan que el peso actual de EE. UU. refleja tanto beneficios como precios altos.
`,
  fondo: `
#### 1. Por qué el índice de capitalización es «el mercado»
Como vimos en la lección 3.1, la cartera ponderada por capitalización es la única que todos pueden tener a la vez. Cualquier alternativa (pesos iguales, por PIB, por factores) exige que **otros inversores** tengan la cartera opuesta. Por eso, para quien no tiene una opinión informada, el índice de capitalización es la posición neutral. Que el 70 % esté en EE. UU. no es una decisión de MSCI: es el reflejo de cuánto valen en bolsa las empresas estadounidenses frente a las demás.

#### 2. Las críticas a la ponderación por capitalización
- **Sobrepondera lo caro**: si una acción está sobrevalorada, pesa de más; si está infravalorada, de menos. Robert Arnott y otros (2005) argumentaron que eso cuesta rentabilidad y propusieron los índices **fundamentales**, ponderados por ventas, beneficios o dividendos. La evidencia posterior muestra que gran parte de su ventaja se explica por la exposición al factor valor (lección 2.8).
- **Concentración**: el riesgo de una cartera ponderada por capitalización depende cada vez más de unas pocas empresas y de un solo país. MSCI ha publicado recientemente que las diez mayores aportan al riesgo del índice más de lo que pesan, y que su contribución a los beneficios es menor que su peso.
- **Pesos por país desligados de la economía**: Estados Unidos es en torno a una cuarta parte del PIB mundial, pero el 70 % del MSCI World. MSCI ha estudiado ponderar los países por PIB o por ventas y encuentra que mejora la diversificación, aunque supone apostar contra los países más caros.

#### 3. La paradoja de los índices de pesos iguales
Un S&P 500 de pesos iguales tiene más peso en empresas pequeñas y en valor, y obliga a rebalancear cada trimestre (vender lo que sube). A largo plazo ha tendido a rendir algo más que el S&P 500 ponderado, con más volatilidad; en épocas de dominio de las grandes, como 2023–2024, bastante menos. No es «el mercado», sino una inclinación a factores con más costes de rotación.

#### 4. La influencia de los proveedores de índices
Con billones de dólares replicando sus índices, MSCI, FTSE Russell y S&P tienen un poder enorme: deciden qué es un país emergente, cuándo entra una empresa o cómo se trata a un sector. La inclusión de las acciones chinas de clase A en el índice de emergentes de MSCI, en varias fases desde 2018, movió decenas de miles de millones. Para el inversor indexado, la consecuencia es que su cartera depende de **reglas de un tercero**, que conviene conocer.

#### 5. ¿Pequeñas compañías? ¿Emergentes?
- Las **pequeñas compañías** son en torno al 10–15 % del mercado mundial. Añadirlas (índices *IMI* o *all cap*) aumenta la diversificación sin cambiar mucho el comportamiento.
- Los **emergentes** son en torno al 10 % del ACWI. Tienen más riesgo político, de divisa y de gobierno corporativo, y en las décadas recientes han rendido menos que los desarrollados. Excluirlos es una apuesta; sobreponderarlos, también. Seguir su peso de mercado es lo neutral.
`,
  caso: {
    titulo: "¿Cuánto Estados Unidos hay en tu fondo «mundial»?",
    md: `
Datos del MSCI World en 2026:
- **Por países (agosto de 2026)**: Estados Unidos **70,6 %**, Japón 5,7 %, Reino Unido 3,5 %. Los cinco primeros países suman el 86 % del índice; los diez primeros, el 94,6 %.
- **Por empresas**: las diez mayores son **más de una cuarta parte** del índice, cuatro veces más que hace quince años. Solo Nvidia y Apple ya superaban hace poco más de una décima parte del MSCI World. En el índice sin Estados Unidos (MSCI World ex USA), las diez mayores pesan solo en torno al **12–13 %**, con empresas como ASML, HSBC o Roche.
- **Por sectores**: la tecnología de la información, por sí sola, es más de una cuarta parte del índice.

Compáralo con el pasado: a finales de los años ochenta, **Japón llegó a ser en torno al 40 % del MSCI World** (lección 3.10), y Estados Unidos, menos de un tercio de la bolsa mundial.

> Lo que enseña: el índice mundial no es un reparto equilibrado del mundo, sino una foto de qué empresas valen más **hoy**. Eso es una ventaja (no apuestas contra nadie) y un riesgo (si los que más pesan caen, el índice cae con ellos). Conócelo antes de elegir.
`
  },
  ejercicios: [
    {
      t: "Tu exposición a Estados Unidos",
      p: `
Tu cartera de bolsa es un 85 % MSCI World y un 15 % MSCI Emerging Markets. Si EE. UU. pesa un 70,6 % del MSCI World y nada en emergentes, ¿qué parte de tu bolsa está en EE. UU.? Si la bolsa es el 70 % de tu cartera total, ¿qué parte de todo tu dinero está en empresas estadounidenses?
`,
      s: `
1. **Peso en EE. UU. dentro de la bolsa**: 0,85 × 70,6 % = **60,0 %**.
2. **Sobre toda la cartera**: 0,70 × 60,0 % = **42,0 %**.
3. Aunque tengas un «fondo mundial», casi la mitad de tu dinero depende de una sola economía y, dentro de ella, de un puñado de empresas. Es una decisión válida, pero tiene que ser consciente.
`
    },
    {
      t: "El número efectivo de un índice concentrado",
      p: `
Un índice de 1.500 empresas tiene sus diez mayores con pesos del 5; 4,5; 4; 3,5; 3; 2,5; 2; 2; 1,5 y 1,5 %. El resto (70,5 %) se reparte a partes iguales entre las otras 1.490. Calcula su número efectivo de empresas.
`,
      s: `
1. **Suma de cuadrados de las diez mayores**: 0,05² + 0,045² + 0,04² + 0,035² + 0,03² + 0,025² + 0,02² + 0,02² + 0,015² + 0,015² = 0,010125.
2. **Resto**: cada una pesa 0,705 / 1.490 = 0,000473; suma de cuadrados: 1.490 × 0,000473² ≈ 0,000334.
3. **Número efectivo**: 1 / (0,010125 + 0,000334) ≈ **96**.
4. Un índice de 1.500 empresas se comporta, en diversificación, como uno de menos de 100 iguales. Las diez grandes dominan.
`
    },
    {
      t: "Precio frente a rentabilidad neta",
      p: `
Un índice sube un 5 % en precio en un año y sus empresas pagan un 2,5 % de dividendo, sobre el que se retiene de media un 15 %. ¿Cuánto sube el índice neto? ¿Y el bruto? Si tu fondo de acumulación ha ganado un 7,0 %, ¿qué diferencia de seguimiento tiene frente al neto?
`,
      s: `
1. **Neto**: 5 % + 2,5 % × 0,85 ≈ **7,1 %**.
2. **Bruto**: 5 % + 2,5 % = **7,5 %**.
3. **Diferencia de seguimiento frente al neto**: 7,0 % − 7,1 % ≈ **−0,1 puntos**, en línea con un fondo barato.
4. Si comparas tu fondo con el índice de precio, parecerá que lo bate; si lo comparas con el bruto, que pierde. El índice neto es la referencia justa.
`
    }
  ],
  errores: [
    "Creer que el MSCI World es «todo el mundo»: no incluye emergentes ni pequeñas compañías.",
    "No saber cuánto pesa Estados Unidos (y unas pocas empresas) en tu fondo global.",
    "Comparar tu fondo con un índice de precio y pensar que lo bate.",
    "Usar como núcleo de la cartera un índice de un solo país, sector o tema.",
    "Cambiar de índice cada vez que el último ganador cambia."
  ],
  test: [
    { p: "¿Qué peso tenía Estados Unidos en el MSCI World en agosto de 2026?", o: ["Un 40 %", "Un 55 %", "Un 70,6 %"], c: 2, e: "Japón, el segundo país, solo un 5,7 %." },
    { p: "¿Qué añade el MSCI ACWI al MSCI World?", o: ["Las empresas pequeñas", "Los países emergentes", "Los bonos"], c: 1, e: "Los índices IMI o all cap añaden además las pequeñas." },
    { p: "¿Qué índice de rentabilidad debes usar para comparar un fondo de acumulación?", o: ["El de precio", "El neto, con dividendos tras retenciones", "Cualquiera"], c: 1, e: "Es lo que puede conseguir de verdad un fondo." },
    { p: "Un índice ponderado por capitalización…", o: ["Tiene más peso en las empresas que más valen en bolsa", "Pesa igual todas las empresas", "Pondera por PIB"], c: 0, e: "Ajustado además por el capital flotante." },
    { p: "¿Cuánto llegó a pesar Japón en el MSCI World a finales de los ochenta?", o: ["Un 5 %", "En torno al 40 %", "Un 70 %"], c: 1, e: "Hoy, en torno al 5–6 %." }
  ],
  lecturas: [
    { t: "Metodología de índices de MSCI (MSCI Global Investable Market Indexes Methodology)", a: "msci.com", n: "Cómo se construyen los índices. Técnico pero claro." },
    { t: "Fundamental Indexation", a: "Arnott, Hsu y Moore, Financial Analysts Journal, 2005" },
    { t: "Managing Benchmark Concentration", a: "MSCI, 2026", n: "La concentración del índice mundial y cómo gestionarla." },
    { t: "Global Investment Returns Yearbook", a: "Dimson, Marsh y Staunton (UBS)", n: "La evolución del peso de cada país en la bolsa mundial desde 1900." }
  ]
});


/* ---- l05.js ---- */
LECCIONES.push({
  id: "b3-l5", num: "3.5",
  titulo: "Si todos indexan, ¿quién pone los precios?",
  resumen: "La indexación funciona porque otros intentan batir al mercado y, al hacerlo, llevan los precios a su valor. Ya hay más dinero indexado que activo en los fondos estadounidenses, y eso tiene efectos: compras automáticas cuando una empresa entra en un índice, más sensibilidad de los precios a los flujos y mucho poder de voto en pocas manos. No hay evidencia de que haya roto el mercado, pero el debate es real.",
  esencial: `
**La paradoja.** Si todo el mundo comprara fondos indexados, nadie analizaría empresas, los precios dejarían de reflejar su valor y volvería a merecer la pena analizarlas. Por eso la indexación nunca puede ser el 100 % del mercado: depende de que una parte de los inversores intente batirlo. Los economistas Grossman y Stiglitz (1980) mostraron que el mercado se equilibra en un punto en el que hay **justo los suficientes** inversores activos para que el beneficio de investigar compense su coste.

**Dónde estamos.**
- En Estados Unidos, los fondos indexados y ETF superaron en patrimonio a los fondos activos a finales de **2023** (13,29 frente a 13,23 billones de dólares). A finales de 2025 eran en torno al **55 %** del patrimonio de los fondos a largo plazo. En 2010 eran el 19 %.
- En Europa, en los fondos de bolsa, los activos todavía tienen más patrimonio (unos 4,1 billones de euros frente a 3,4), pero el dinero nuevo va mayoritariamente a los pasivos.
- Y los fondos no son todo el mercado: hay inversores institucionales, particulares que compran acciones directamente, fondos de pensiones, *hedge funds*… La mayor parte de la negociación diaria sigue siendo activa.

**Efectos visibles de tanto dinero indexado**
1. **Entrar en un índice importa**: cuando una empresa entra en el S&P 500, los fondos indexados tienen que comprarla en una fecha concreta. Pasó con Tesla en 2020 (caso real).
2. **Los flujos mueven los precios**: el dinero que entra en indexados compra todo el mercado a la vez, sin mirar el precio.
3. **Poder de voto concentrado**: unas pocas gestoras (BlackRock, Vanguard, State Street) son de los mayores accionistas de casi todas las grandes empresas.

**Lo que significa para ti**: nada que cambie la recomendación. Mientras haya muchos inversores activos compitiendo (y los hay), los precios seguirán siendo razonablemente eficientes y el indexado seguirá siendo la forma más barata de obtener la rentabilidad del mercado. Pero conviene saber que la indexación tiene efectos sobre el propio mercado.
`,
  entender: `
#### El equilibrio de Grossman y Stiglitz, con números
Supón que hay inversores «ruidosos» (que operan por impulsos y pierden frente al mercado) con el 10 % del dinero, y que pierden un 1 % al año. Eso crea una bolsa de ganancias del 0,1 % del mercado al año para quien investiga. Los gestores activos se la reparten, y cada euro activo paga un 0,25 % en costes de análisis:

$$ alfa bruto por euro activo = 0,1 % / cuota activa   →   equilibrio cuando = coste (0,25 %)

- Equilibrio: cuota activa = 0,1 / 0,25 = **40 %**.
- Si el análisis se abarata (0,2 %): la cuota activa sube al **50 %**.
- Si los inversores ruidosos se reducen a la mitad: la cuota activa baja al **20 %**.

El modelo es muy simplificado, pero recoge la idea: **la cuota de indexación se autorregula**. Si sube demasiado, los precios se vuelven menos eficientes, aparecen oportunidades y vuelve a compensar ser activo.

#### El efecto índice
Andrei Shleifer (1986) observó que las acciones subían de forma significativa al anunciarse su entrada en el S&P 500, sin ninguna noticia sobre la empresa. Era una prueba de que la demanda de acciones no es infinitamente elástica: comprar mucho de algo sube su precio. Estudios más recientes, como el de Greenwood y Sammon, encuentran que ese efecto **se ha ido reduciendo** con los años, porque los operadores se anticipan y porque los cambios de índice son más previsibles.

#### Los mercados son menos elásticos de lo que se creía
Gabaix y Koijen (2021) estimaron que, en el mercado de acciones estadounidense en su conjunto, **cada dólar que entra en bolsa (y no sale de otra acción) eleva su valor total en unos 5 dólares**. La razón: la mayoría de inversores institucionales tiene mandatos fijos (por ejemplo, un 60 % en acciones) y no vende cuando la bolsa sube. Si es así, los flujos hacia indexados, que compran sin mirar el precio, pueden influir en el nivel de la bolsa más de lo que suponen los modelos clásicos.

#### Quién vota en las juntas
Los grandes gestores de fondos indexados están entre los mayores accionistas de casi todas las grandes empresas, y votan en sus juntas. Eso ha generado dos preocupaciones: una concentración de poder en pocas manos y la posibilidad de que la propiedad común de empresas competidoras reduzca la competencia (Azar, Schmalz y Tecu, 2018, lo estudiaron en las aerolíneas; su conclusión está muy discutida). La respuesta de la industria ha sido ofrecer a los partícipes la opción de elegir la política de voto.
`,
  fondo: `
#### 1. Grossman y Stiglitz (1980): la imposibilidad de un mercado perfectamente eficiente
Si los precios reflejaran toda la información, nadie tendría incentivo para obtenerla (cuesta dinero y no da ventaja). Pero si nadie la obtuviera, los precios no la reflejarían. El equilibrio es un mercado **casi** eficiente, con el grado justo de ineficiencia para pagar el coste de quienes la corrigen. Fama dijo de su propia hipótesis que es un modelo útil, no una descripción literal. La indexación es la estrategia del inversor que acepta ese equilibrio y renuncia a competir por las pequeñas ineficiencias que quedan.

#### 2. ¿La indexación hace los precios menos eficientes?
La evidencia es mixta:
- Algunos estudios encuentran que las acciones con más propiedad pasiva incorporan más tarde la información de sus resultados (Sammon, entre otros) y se mueven más juntas (más correlación entre acciones del mismo índice).
- Otros encuentran que la indexación reduce los costes de negociación y no empeora la eficiencia de forma apreciable, porque la parte del mercado que fija precios (las operaciones marginales) sigue siendo activa.
- El crecimiento de los inversores activos más sofisticados (*hedge funds*, fondos cuantitativos) compensa en parte la salida de los gestores tradicionales.

Hoy no hay pruebas de que el mercado haya dejado de funcionar. Lo que sí parece claro es que la **dinámica** ha cambiado: más correlación entre acciones de un mismo índice y precios más sensibles a los grandes flujos.

#### 3. El argumento de la «burbuja pasiva»
En 2019, el inversor Michael Burry (famoso por anticipar la crisis de las hipotecas) comparó los fondos indexados con los productos hipotecarios de 2008: se compran sin analizar lo que hay dentro, y las acciones pequeñas de los índices tienen poca liquidez. Si todo el mundo intentara salir a la vez, el ajuste sería brusco. Los contraargumentos: los índices por capitalización tienen la mayor parte de su peso en las acciones más líquidas del mundo, los indexados no usan apalancamiento ni prometen nada más que la rentabilidad del mercado, y las ventas masivas de indexados en crisis anteriores (2020, 2022) no causaron colapsos. El debate se retoma en la lección 3.10.

#### 4. Los índices como bien común
Los indexados se «aprovechan» del trabajo de los activos (que pagan por fijar los precios) sin pagar por él. Algunos economistas lo llaman el problema del **gorrón** (*free rider*). Es un argumento a favor de que la sociedad necesita gestión activa, no de que **tú** debas pagarla: ya hay de sobra, y quien la ejerce bien obtiene su recompensa (lección 3.3).

#### 5. Lo que cambia para el inversor indexado
- Los fondos que replican índices muy conocidos (S&P 500) pagan un pequeño coste cuando compran en la fecha exacta de los cambios, que los operadores anticipan. Algunos índices y fondos suavizan esto con reglas de transición.
- Los índices menos conocidos o con reglas muy mecánicas pueden ser objeto de anticipación más fácilmente.
- La concentración por capitalización (lección 3.4) se ve reforzada si los flujos pasivos empujan las mayores empresas, aunque la evidencia de este mecanismo es limitada.
`,
  caso: {
    titulo: "Tesla entra en el S&P 500 (diciembre de 2020)",
    md: `
El 16 de noviembre de 2020, S&P Dow Jones Indices anunció que Tesla entraría en el S&P 500 antes de la apertura del **21 de diciembre**. Era la empresa más grande jamás añadida al índice, con un valor de mercado superior a los 500.000 millones de dólares, y entraría directamente como una de las diez mayores.

- **El anuncio**: la acción subió alrededor de un 10 % en la sesión siguiente. Los inversores sabían que los fondos indexados al S&P 500, y los gestores activos que lo usan como referencia, tendrían que comprarla.
- **La magnitud**: según Reuters, los fondos indexados al S&P 500 tendrían que vender unos 51.000 millones de dólares de otras acciones del índice para hacer sitio a Tesla. Se calculaba que en torno al 17 % del valor del S&P 500 estaba en fondos indexados. S&P lo describió como una de las mayores operaciones de recomposición de su historia.
- **El día antes**: el viernes 18 de diciembre se negociaron más de **150.000 millones de dólares** en acciones de Tesla, mientras los gestores pasivos compraban al cierre. La acción acumulaba una subida del **731 %** en el año.
- **El día de la inclusión**: Tesla cayó un **6,3 %** antes de la apertura.

Los analistas lo resumieron con una frase repetida desde los años ochenta: el precio sube después del anuncio y antes de la inclusión; tras la inclusión, el precedente de subidas es muy limitado.

> Lo que enseña: los fondos indexados compran «a cualquier precio» en la fecha fijada, y los operadores rápidos se anticipan. Para el inversor indexado el coste es pequeño, pero es una muestra de que la indexación no es invisible para el mercado.
`
  },
  ejercicios: [
    {
      t: "El equilibrio entre activos y pasivos",
      p: `
En un mercado, los inversores «ruidosos» tienen el 10 % del dinero y pierden un 1 % anual frente al mercado. Los gestores activos se reparten esa ganancia y pagan un 0,25 % al año en análisis. ¿Qué cuota de mercado activa es sostenible? ¿Cómo cambia si el análisis cuesta un 0,2 %? ¿Y si los inversores ruidosos se reducen al 5 %?
`,
      s: `
1. **Bolsa de ganancias**: 10 % × 1 % = **0,1 %** del mercado al año.
2. **Equilibrio**: 0,1 % / cuota activa = 0,25 % → cuota activa = **40 %** (pasiva, 60 %).
3. **Análisis al 0,2 %**: 0,1 / 0,2 = **50 %** activo.
4. **Ruidosos al 5 %**: bolsa de 0,05 % → 0,05 / 0,25 = **20 %** activo.
5. La cuota pasiva sostenible depende de cuánto «dinero tonto» hay en el mercado y de lo que cuesta analizar. Si la indexación crece demasiado, aparecen oportunidades y vuelve la gestión activa.
`
    },
    {
      t: "Las compras forzadas de una inclusión",
      p: `
Supón que una empresa con una capitalización ajustada por capital flotante de 600.000 millones de dólares entra en un índice en el que el 17 % del valor está en fondos indexados. ¿Cuánto tienen que comprar esos fondos? Si el resto de inversores tiene que vender esa cantidad de la empresa nueva y el mercado es poco elástico, ¿qué ocurre con el precio antes de la fecha?
`,
      s: `
1. **Compras de los indexados**: 17 % × 600.000 = **102.000 millones de dólares**, en una fecha conocida.
2. Los indexados tienen que comprar y otros inversores tienen que venderles. Si la demanda de los vendedores es poco elástica, el precio debe subir para convencerlos.
3. Como la fecha es pública, los operadores compran antes (tras el anuncio) para vender a los indexados el día de la inclusión. Por eso las subidas se concentran entre el anuncio y la inclusión, y el día de la inclusión a menudo el precio cae.
`
    },
    {
      t: "Mercados poco elásticos",
      p: `
Según Gabaix y Koijen, cada dólar que entra en el mercado de acciones en su conjunto aumenta su valor en unos 5 dólares. Si los inversores europeos pasan 100.000 millones de euros de bonos a fondos indexados de bolsa en un año, ¿cuánto podría subir el valor del mercado? Si ese mercado vale 20 billones, ¿qué subida porcentual supone?
`,
      s: `
1. **Aumento de valor**: 5 × 100.000 = **500.000 millones de euros**.
2. **En porcentaje**: 0,5 / 20 = **2,5 %**.
3. Si el multiplicador fuera el que suponen los modelos tradicionales (cercano a cero, porque otros venderían al subir el precio), el efecto sería despreciable. La estimación de Gabaix y Koijen sugiere que los flujos importan, y que una salida masiva de los indexados también tendría efecto en sentido contrario. Es una estimación discutida y con mucho margen de error.
`
    }
  ],
  errores: [
    "Creer que la indexación funciona porque los mercados son perfectamente eficientes: funciona porque otros pagan por hacerlos casi eficientes.",
    "Pensar que, como hay mucho dinero indexado, el mercado ya no fija precios.",
    "Comprar una acción porque va a entrar en un índice, cuando el anuncio ya es público.",
    "Ignorar que tu gestora vota en tu nombre en las juntas de las empresas.",
    "Creer que, si todos indexan, la indexación dejará de funcionar mañana: el equilibrio se autorregula."
  ],
  test: [
    { p: "¿Qué mostraron Grossman y Stiglitz (1980)?", o: ["Que los mercados son perfectamente eficientes", "Que un mercado perfectamente eficiente es imposible, porque nadie pagaría por analizar", "Que la indexación es ilegal"], c: 1, e: "El equilibrio deja el grado justo de ineficiencia para pagar el análisis." },
    { p: "¿Cuándo superaron los indexados y ETF a los fondos activos en patrimonio en EE. UU.?", o: ["En 2010", "A finales de 2023", "Todavía no"], c: 1, e: "13,29 frente a 13,23 billones de dólares; en torno al 55 % a finales de 2025." },
    { p: "¿Qué es el «efecto índice»?", o: ["La subida de una acción al anunciarse su entrada en un índice", "La caída de los índices en diciembre", "El coste de un fondo indexado"], c: 0, e: "Shleifer (1986). Se ha reducido con los años." },
    { p: "Según Gabaix y Koijen (2021), un dólar que entra en el mercado de acciones en su conjunto aumenta su valor en unos…", o: ["0 dólares", "1 dólar", "5 dólares"], c: 2, e: "La hipótesis de los mercados inelásticos." },
    { p: "El día antes de entrar Tesla en el S&P 500 se negociaron acciones de Tesla por más de…", o: ["1.000 millones de dólares", "15.000 millones", "150.000 millones"], c: 2, e: "Los indexados compraban al cierre del 18 de diciembre de 2020." }
  ],
  lecturas: [
    { t: "On the Impossibility of Informationally Efficient Markets", a: "Sanford Grossman y Joseph Stiglitz, American Economic Review, 1980" },
    { t: "Do Demand Curves for Stocks Slope Down?", a: "Andrei Shleifer, Journal of Finance, 1986", n: "El efecto índice." },
    { t: "In Search of the Origins of Financial Fluctuations: The Inelastic Markets Hypothesis", a: "Xavier Gabaix y Ralph Koijen, 2021" },
    { t: "Trillions", a: "Robin Wigglesworth", n: "Los últimos capítulos tratan los efectos de la indexación sobre el mercado." }
  ]
});


/* ---- l06.js ---- */
LECCIONES.push({
  id: "b3-l6", num: "3.6",
  titulo: "Construir tu cartera indexada",
  resumen: "Una buena cartera indexada cabe en dos o tres fondos: bolsa mundial, quizá algo de emergentes y una parte de renta fija o monetario según el riesgo que puedas soportar. La decisión que más pesa no es qué fondo, sino el reparto entre bolsa y renta fija. Con fondos disponibles en España, una cartera así cuesta en torno a un 0,13–0,15 % anual.",
  esencial: `
**Lo que más importa: el reparto.** La decisión de cuánto dinero va a bolsa y cuánto a renta fija o liquidez explica la mayor parte de cómo se comportará tu cartera. Elegir entre dos indexados del MSCI World casi no cambia nada; pasar de un 40 % a un 80 % de bolsa lo cambia todo. Ese reparto sale de tu situación (bloque 0) y de la caída que puedes soportar (lección 2.10).

**Las piezas**
1. **Bolsa mundial**: un indexado al MSCI World (o al mundo entero, ACWI). Es el núcleo.
2. **Emergentes** (opcional): un indexado al MSCI Emerging Markets, en torno al 10 % de la parte de bolsa, para completar el mundo.
3. **Renta fija**: un indexado de bonos (del Estado de la zona euro o globales con la divisa cubierta), con un plazo acorde a tu horizonte (lección 1.4).
4. **Liquidez**: un fondo monetario o una cuenta para el colchón y para lo que vayas a necesitar en pocos años.

**Fondos disponibles en España (TER de 2026)**
| Pieza | Ejemplos | Gastos corrientes |
|---|---|---|
| Bolsa desarrollada | Fidelity MSCI World Index, iShares Developed World Index | 0,12 % |
| | Vanguard Global Stock Index | 0,18 % |
| Bolsa EE. UU. | Vanguard U.S. 500 Stock Index | 0,10 % |
| Emergentes | iShares Core MSCI EM IMI | 0,18 % |
| | Vanguard Emerging Markets Stock Index | 0,23 % |
| Monetario | AXA Trésor Court Terme | 0,06 % |

**Tres carteras de ejemplo**
| Perfil | Bolsa mundial | Emergentes | Renta fija / monetario | Caída aproximada en una crisis grave |
|---|---|---|---|---|
| Prudente | 30 % | 5 % | 65 % | En torno a −20 % |
| Equilibrada | 50 % | 10 % | 40 % | En torno a −32 % |
| Dinámica | 80 % | 10 % | 10 % | En torno a −45 % |

**Tres reglas**
- **Pocos fondos**: dos o tres bastan. Más fondos de bolsa casi siempre significa lo mismo repetido.
- **Fondos traspasables**: en España, los fondos de inversión se pueden traspasar sin pagar impuestos; los ETF, no (lección 1.7). Para rebalancear, los fondos son más cómodos.
- **Revisión anual**: una vez al año, comprueba si el reparto se ha desviado y corrígelo (lección 2.10).
`,
  entender: `
#### Cómo decidir el reparto
Usa el presupuesto de caída de la lección 2.10: con una bolsa que puede caer un 50 % y una renta fija que puede caer un 5 %, el peso de bolsa que respeta una caída máxima tolerable C es aproximadamente (C − 5) / 45.

| Caída máxima que aguantas sin vender | % en bolsa |
|---|---|
| −15 % | 22 % |
| −25 % | 44 % |
| −35 % | 67 % |
| −45 % | 89 % |

Luego ajusta según tu horizonte (lección 0.7): el dinero que necesitarás en menos de 3–5 años no debería estar en bolsa, sea cual sea tu tolerancia.

#### ¿Qué renta fija?
| Opción | Ventaja | Inconveniente |
|---|---|---|
| Monetario | Casi sin riesgo de precio; sigue a los tipos del BCE | Rentabilidad real baja; no sube cuando la bolsa cae |
| Bonos del Estado zona euro (corto plazo) | Poca volatilidad | Poca protección en crisis |
| Bonos del Estado zona euro (todos los plazos) | Suben en las recesiones | Caen con la inflación (2022) |
| Bonos globales agregados, divisa cubierta | Muy diversificados | Incluyen bonos de empresa; coste de cubrir |
| Bonos ligados a la inflación | Protegen de la inflación | Mercado pequeño, pocos fondos baratos |

Una regla sencilla: que el **plazo medio** (duración) de tus bonos no sea mucho mayor que el horizonte en que podrías necesitar ese dinero. Y cubre siempre la divisa en los bonos (lección 2.9).

#### ¿Cuánto en España o en Europa?
España es menos del 1 % de la bolsa mundial. Sobreponderarla es una apuesta (y aumenta tu concentración en el país de tu sueldo y tu vivienda, lección 2.4). Si quieres reducir el peso de Estados Unidos, la forma más neutral es añadir emergentes y Europa en proporciones moderadas, sabiendo que es una inclinación, no el mercado.

#### Coste total de la cartera
El coste es la media ponderada de los gastos corrientes. Para la equilibrada (50 % MSCI World al 0,12 %, 10 % emergentes al 0,18 % y 40 % renta fija a un 0,15 % orientativo): 0,5 × 0,12 + 0,1 × 0,18 + 0,4 × 0,15 = **0,138 %** anual. Sobre 50.000 €, unos **69 € al año**, frente a unos 900 € con fondos activos al 1,8 %.
`,
  fondo: `
#### 1. ¿Cuánto explica el reparto de activos?
Brinson, Hood y Beebower (1986) analizaron 91 grandes planes de pensiones estadounidenses y encontraron que la política de reparto entre activos explicaba en torno al **90 % de la variación** de sus rentabilidades **a lo largo del tiempo**; la selección de valores y el momento de entrada, muy poco. Ibbotson y Kaplan (2000) precisaron qué significa: el reparto explica casi todo cuánto sube y baja una cartera en el tiempo, pero solo una parte de las **diferencias** entre carteras distintas. En la práctica, para un inversor que indexa, el reparto es prácticamente la única decisión que queda.

#### 2. Carteras de referencia y su lógica
- **La cartera de tres fondos** (popular entre los seguidores de Bogle): bolsa nacional, bolsa internacional y bonos. Para un inversor español, «nacional» se sustituye por un fondo mundial.
- **Los fondos de ciclo de vida** (*target date*): un solo fondo que reduce la bolsa automáticamente a medida que se acerca una fecha objetivo. Siguen la lógica del capital humano (lección 0.9). En España hay pocos indexados de este tipo, pero los roboadvisores (lección 3.8) hacen algo parecido según el perfil.
- **La cartera de Swensen** (gestor de la fundación de Yale) para particulares: seis piezas indexadas con más peso fuera del país de origen, inmobiliario cotizado y bonos ligados a la inflación. Más compleja y con apuestas propias.
- **La cartera permanente de Harry Browne**: 25 % en bolsa, bonos largos, oro y liquidez. Pensada para cualquier entorno, con menos rentabilidad esperada (algo parecido a la paridad de riesgo de la lección 2.10, sin apalancamiento).

Ninguna es «la correcta». Todas comparten lo esencial: diversificar mucho, costes bajos, reglas claras y no tocarlas por impulsos.

#### 3. Detalles que importan en España
- **Traspasos**: entre fondos de inversión (no entre ETF) no se tributa hasta reembolsar (lección 1.6). Permite rebalancear sin impuestos, aunque el dinero pasa unos días fuera del mercado. Algunas plataformas permiten traspasos el mismo día entre fondos de la misma gestora.
- **Clases de participaciones**: el mismo fondo puede tener varias clases con TER distintos según el importe mínimo o el canal. Compara la clase que de verdad puedes comprar.
- **Acumulación frente a distribución**: los fondos de acumulación reinvierten los dividendos y evitan tributar por ellos cada año. Para la fase de ahorro, son los más eficientes.
- **Domicilio del fondo**: los fondos irlandeses suelen soportar menos retención sobre los dividendos estadounidenses (lección 1.7).

#### 4. Cuánto diversificar dentro de la bolsa
Con un indexado mundial ya tienes más de 1.300 empresas de 23 países. Añadir fondos sectoriales, temáticos o de un país concreto **concentra** en vez de diversificar. Si quieres apuestas, que sean un satélite pequeño (por ejemplo, menos del 10 % de la cartera), separado del núcleo indexado y con reglas propias. Tu consola de inversión es el lugar para gestionarlas (bloque 10).

#### 5. Escalones de liquidez
Una estructura habitual combina el reparto con el horizonte de uso del dinero:
1. Colchón (3–6 meses de gastos) en cuenta o monetario.
2. Gastos previstos en 1–5 años en monetario o bonos cortos.
3. El resto, en la cartera indexada según tu presupuesto de caída.

Así una caída de la bolsa nunca te obliga a vender acciones para pagar algo que ya sabías que ibas a pagar (lección 2.1).
`,
  caso: {
    titulo: "Tres carteras indexadas con fondos que se pueden comprar en España",
    md: `
Con datos de gastos corrientes de 2026 publicados por Rankia y Finect, estas serían tres carteras sencillas. La renta fija se representa con un indexado de bonos de coste orientativo del 0,15 % (o un monetario como el AXA Trésor Court Terme, con un TER del 0,06 %).

| Cartera | Composición | Coste anual ponderado |
|---|---|---|
| Prudente | 30 % Fidelity MSCI World (0,12 %) + 5 % emergentes (0,18 %) + 65 % renta fija (0,15 %) | ≈ **0,14 %** |
| Equilibrada | 50 % + 10 % + 40 % | ≈ **0,14 %** |
| Dinámica | 80 % + 10 % + 10 % | ≈ **0,13 %** |

Comparativas de la propia industria recuerdan que, en el MSCI World, la diferencia entre el fondo más barato (0,12 %) y otros populares (0,18 % o 0,30 %) es de décimas: pequeña, pero sin ninguna contrapartida, porque replican el mismo índice. Algunas plataformas compensan un TER algo mayor con ventajas operativas, como traspasos en el mismo día entre fondos de la misma gestora.

En comparación, los fondos más vendidos en España siguen siendo mayoritariamente fondos de renta fija a corto plazo y monetarios gestionados de forma activa por los grandes bancos. Ninguno de los diez fondos españoles con más patrimonio superó el 5 % de rentabilidad en 2025.

> Lo que enseña: una cartera bien diversificada y muy barata está al alcance de cualquiera con dos o tres fondos. La parte difícil no es construirla, sino elegir bien el reparto y mantenerlo.
`
  },
  ejercicios: [
    {
      t: "El coste de tu cartera",
      p: `
Tu cartera es un 50 % de un indexado MSCI World (TER 0,12 %), un 10 % de emergentes (0,18 %) y un 40 % de un indexado de bonos (0,15 %). Calcula el coste anual ponderado y cuánto pagas al año sobre 50.000 €. Compáralo con fondos activos al 1,8 %.
`,
      s: `
1. **Coste ponderado**: 0,5 × 0,12 + 0,1 × 0,18 + 0,4 × 0,15 = 0,060 + 0,018 + 0,060 = **0,138 %**.
2. **En euros**: 50.000 × 0,00138 = **69 € al año**.
3. **Con fondos activos al 1,8 %**: **900 € al año**. Trece veces más.
`
    },
    {
      t: "Del presupuesto de caída al reparto",
      p: `
Puedes soportar una caída del 25 % de tu cartera sin vender. Supones que en una crisis grave la bolsa cae un 50 % y tu renta fija un 5 %. ¿Qué peso de bolsa deberías tener? Si además vas a necesitar 20.000 € para la entrada de una casa dentro de dos años, ¿dónde los pondrías?
`,
      s: `
1. **Peso de bolsa**: w × (−50 %) + (1 − w) × (−5 %) = −25 % → 45 w = 20 → **w ≈ 44 %**.
2. **Los 20.000 € de la entrada** van **fuera** de la cartera, en un monetario o una cuenta: con dos años de horizonte no deben estar en bolsa (lección 0.7), aunque tu tolerancia lo permitiera.
3. El resto de la cartera, un 44 % en bolsa y un 56 % en renta fija, revisándolo cuando cambie tu situación.
`
    },
    {
      t: "Rebalancear con traspasos",
      p: `
Tienes 100.000 € en una cartera 60/40: 60.000 en un indexado de bolsa y 40.000 en uno de bonos. En un año la bolsa sube un 20 % y los bonos caen un 2 %. ¿Qué peso tiene ahora la bolsa? ¿Cuánto debes traspasar y en qué dirección para volver al 60/40?
`,
      s: `
1. **Nuevos valores**: bolsa 72.000 €, bonos 39.200 €. Total **111.200 €**.
2. **Peso de bolsa**: 72.000 / 111.200 = **64,7 %**.
3. **Objetivo**: 60 % de 111.200 = 66.720 € en bolsa.
4. **Traspaso**: 72.000 − 66.720 = **5.280 €** del fondo de bolsa al de bonos.
5. Con un traspaso entre fondos no tributas. Si tienes regla de bandas de 5 puntos (lección 2.10), con 4,7 puntos de desviación aún no harías nada; dirigir las nuevas aportaciones a los bonos sería suficiente.
`
    }
  ],
  errores: [
    "Dedicar horas a elegir entre dos indexados del mismo índice y minutos a decidir el reparto.",
    "Acumular muchos fondos de bolsa que replican, en la práctica, lo mismo.",
    "Usar bonos largos para dinero que necesitarás en pocos años.",
    "No cubrir la divisa en la renta fija extranjera.",
    "Mezclar en la misma cartera el colchón y la inversión a largo plazo."
  ],
  test: [
    { p: "¿Qué decisión explica la mayor parte del comportamiento de una cartera indexada?", o: ["El fondo concreto elegido", "El reparto entre bolsa y renta fija", "La gestora"], c: 1, e: "Brinson, Hood y Beebower (1986): en torno al 90 % de la variación en el tiempo." },
    { p: "¿Por qué en España suelen preferirse fondos indexados a ETF para el núcleo?", o: ["Porque son más baratos siempre", "Porque se pueden traspasar sin tributar", "Porque tienen más empresas"], c: 1, e: "Facilita rebalancear y cambiar de fondo sin impuestos." },
    { p: "Con una caída tolerable del 25 %, bolsa a −50 % y renta fija a −5 %, el peso de bolsa ronda…", o: ["El 25 %", "El 44 %", "El 70 %"], c: 1, e: "(25 − 5) / 45 ≈ 44 %." },
    { p: "¿Qué coste ronda una cartera equilibrada de indexados en España?", o: ["0,14 %", "0,8 %", "1,8 %"], c: 0, e: "Con un MSCI World al 0,12 %, emergentes al 0,18 % y bonos a un 0,15 %." },
    { p: "¿Qué deberías hacer con el dinero que necesitarás en dos años?", o: ["Ponerlo en bolsa si toleras el riesgo", "Dejarlo fuera de la cartera de bolsa, en monetario o cuenta", "Ponerlo en bonos a 30 años"], c: 1, e: "El horizonte manda sobre la tolerancia." }
  ],
  lecturas: [
    { t: "Determinants of Portfolio Performance", a: "Brinson, Hood y Beebower, Financial Analysts Journal, 1986" },
    { t: "Does Asset Allocation Policy Explain 40, 90, or 100 Percent of Performance?", a: "Roger Ibbotson y Paul Kaplan, Financial Analysts Journal, 2000" },
    { t: "Unconventional Success", a: "David Swensen", n: "Cómo construir una cartera indexada para particulares, según el gestor de Yale." },
    { t: "The Four Pillars of Investing", a: "William Bernstein", n: "Teoría, historia, psicología y negocio de la inversión. Muy recomendable." },
    { t: "Foro y wiki de Bogleheads", a: "bogleheads.org (en inglés)", n: "Comunidad práctica de inversores indexados." }
  ]
});


/* ---- l07.js ---- */
LECCIONES.push({
  id: "b3-l7", num: "3.7",
  titulo: "Cuándo invertir: de golpe, poco a poco o esperando",
  resumen: "Si tienes una cantidad grande, invertirla de golpe ha ganado a repartirla en varios meses en dos de cada tres casos, porque la bolsa sube más a menudo de lo que baja. Repartirla reduce el arrepentimiento si llega una caída, a cambio de una pequeña pérdida esperada. Esperar a «un buen momento» es lo peor: exige acertar demasiadas veces. Y aportar cada mes del sueldo no es una estrategia que haya que decidir: es simplemente invertir cuando tienes el dinero.",
  esencial: `
**Tres situaciones distintas**
1. **Ahorras cada mes de tu sueldo**: invierte cada mes, de forma automática. Es la forma natural de invertir y no hay nada que decidir.
2. **Tienes una cantidad grande de golpe** (una herencia, la venta de un piso, un bonus): puedes invertirla toda ya o repartirla en varios meses.
3. **Tienes el dinero, pero esperas a que «baje la bolsa»**: es intentar adivinar el mercado, y casi nunca sale bien.

**Lo que dicen los datos para la cantidad grande.** Vanguard comparó, con datos del MSCI World y de bonos de 1976 a 2022, invertir todo de golpe frente a repartirlo en varios meses:
- Invertir de golpe ganó en el **68 %** de los casos.
- Repartirlo ganó a quedarse en liquidez en el **69 %** de los casos.
- La ventaja media de invertir de golpe fue de entre **1,2 y 2,2 puntos**, más cuanto más bolsa tiene la cartera.
- Repartir ganó en los peores momentos: en el 25 % de los años con peores rentabilidades.

**Por qué gana invertir de golpe**: la bolsa sube más años de los que baja. El dinero que espera fuera, de media, se pierde parte de esa subida.

**Por qué mucha gente prefiere repartir**: si inviertes 100.000 € y al mes siguiente la bolsa cae un 20 %, el disgusto (y la tentación de vender) es enorme. Repartirlo en unos meses reduce ese arrepentimiento. Es una decisión psicológica razonable, siempre que:
- el plan sea **corto** (3–6 meses, no dos años);
- esté **escrito y automatizado** (mismas cantidades, mismas fechas);
- no se convierta en «esperar a que baje».

**Esperar al buen momento**: para que salir y entrar del mercado mejore el resultado hay que acertar muchas más veces de las que se falla, en la salida y en la entrada. Los mejores días de la bolsa suelen llegar en medio de las crisis, justo cuando el que espera está fuera.
`,
  entender: `
#### Aportaciones periódicas y precio medio
Si inviertes una cantidad fija cada mes, compras más participaciones cuando el precio está bajo y menos cuando está alto. Tu coste medio por participación es la **media armónica** de los precios, que siempre es menor o igual que la media normal.

| Mes | Precio | Inviertes | Participaciones |
|---|---|---|---|
| 1 | 10 € | 400 € | 40,0 |
| 2 | 8 € | 400 € | 50,0 |
| 3 | 12 € | 400 € | 33,3 |
| **Total** | media 10 € | 1.200 € | **123,3** |

Coste medio: 1.200 / 123,3 = **9,73 €**, por debajo de la media de precios (10 €). Esto se vende a veces como una ventaja mágica de las aportaciones periódicas. No lo es: compara solo con comprar al precio **medio**, no con comprar todo el primer día. Si la bolsa sube de forma sostenida, comprar todo al principio suele ser mejor.

#### El coste esperado de repartir
Un modelo sencillo: si repartes una cantidad en N meses iguales, el dinero pasa de media (N − 1) / 2 meses fuera de la bolsa. Con una prima de la bolsa sobre la liquidez del 4 % anual:

| Meses de reparto | Coste esperado aproximado |
|---|---|
| 3 | 0,33 % |
| 6 | 0,83 % |
| 12 | 1,83 % |

Sobre 100.000 € repartidos en un año, unos **1.800 €** esperados: el precio de un seguro contra el arrepentimiento.

#### Intentar adivinar el mercado
Para mejorar el resultado entrando y saliendo hay que acertar con frecuencia, porque cada fallo tiene un coste asimétrico: perderse una subida fuerte es más caro que evitarse una caída moderada. William Sharpe (1975) calculó que, con los datos del mercado estadounidense, un gestor que decidiera cada año entre bolsa y liquidez necesitaba **acertar en torno al 74 % de las veces** para batir a quien simplemente se quedaba invertido, teniendo en cuenta los costes. Casi nadie lo consigue de forma sostenida.

#### Variantes
- **Aportar más cuando cae** (*value averaging*, Edleson, 1988): ajustar la aportación para que la cartera siga una senda de crecimiento fijada. Compra más en las caídas, pero exige tener liquidez disponible y disciplina.
- **Reglas de rebalanceo** (lección 2.10): son la forma más sencilla de «comprar cuando cae» sin predecir nada.
`,
  fondo: `
#### 1. La teoría: el reparto en el tiempo no es óptimo
George Constantinides (1979) demostró que, para un inversor racional que maximiza su utilidad, repartir una cantidad en el tiempo según un calendario fijo es **subóptimo**: si la cartera final que quieres tiene un 60 % en bolsa, tenerla desde hoy domina a llegar a ella poco a poco. Repartir solo tiene sentido si cambia la información o tus circunstancias, y en ese caso tu plan no debería ser un calendario fijo.

#### 2. La explicación conductual
Meir Statman (1995) explicó por qué, aun así, es tan popular: combina tres sesgos que la teoría clásica no recoge:
- **Aversión al arrepentimiento**: duele más una pérdida que se habría evitado esperando que una ganancia que se habría logrado invirtiendo antes.
- **Contabilidad mental** (lección 0.10): cada aportación se vive como una decisión pequeña, no como una gran apuesta.
- **Autocontrol**: un plan automático evita decidir en caliente.

Para muchas personas, el pequeño coste esperado de repartir compra algo que sí tiene valor: la probabilidad de **mantener** el plan cuando llegue una caída. Lo peor no es invertir de golpe ni repartir: es vender en la primera caída fuerte (lección 3.9).

#### 3. El estudio de Vanguard en detalle
El estudio de 2023 («Cost averaging: invest now or temporarily hold your cash?») comparó estrategias con tres carteras (100 % bolsa, 60/40 y 40/60), datos del MSCI World y del índice de bonos agregado estadounidense desde 1976, y también simulaciones a futuro. Además de la ventaja media de invertir de golpe (de 1,2 a 2,2 puntos según el reparto), mostró que:
- en los escenarios malos (el 5 % peor), repartir dejaba más dinero tras un año;
- cuanto más largo es el periodo de reparto, mayor es el coste esperado;
- repartir siempre fue mejor que quedarse en liquidez esperando.

#### 4. ¿Y si las valoraciones son altas?
Un argumento habitual para esperar es que la bolsa está cara (CAPE alto, lección 1.3). Es cierto que las valoraciones altas predicen, con mucho ruido, rentabilidades menores a 10 años. Pero predicen muy mal el **momento**: el mercado puede seguir caro años, y la rentabilidad esperada a 10 años más baja suele seguir siendo mayor que la de la liquidez. Si las valoraciones te preocupan, la forma coherente de actuar es ajustar moderadamente el **reparto** (bloque 9, parte B), no quedarte fuera esperando una caída.

#### 5. Aportaciones periódicas y rentabilidad del partícipe
Cuando inviertes cada mes, tu rentabilidad (ponderada por el dinero) no coincide con la del fondo: el dinero que aportas tarde se beneficia menos de las subidas tempranas. Morningstar advierte que incluso prácticas sensatas como invertir cada mes o rebalancear abren una diferencia entre la rentabilidad del partícipe y la del fondo, sin que sea un error. No confundas esa diferencia con haber invertido mal (lección 3.9).
`,
  caso: {
    titulo: "Vanguard: ¿invertir ya o repartir en el tiempo? (1976–2022)",
    md: `
Vanguard publicó en febrero de 2023 un estudio para responder a la pregunta que más le hacen sus clientes con dinero en efectivo: ¿invierto todo hoy o lo voy metiendo poco a poco?

Usó el índice mundial MSCI World y el índice de bonos agregado estadounidense desde 1976, y comparó tres opciones para una cantidad de 100.000 dólares, midiendo el resultado tras un año:

| Comparación | Gana… | En qué % de los casos |
|---|---|---|
| Invertir de golpe frente a repartir | Invertir de golpe | **68 %** |
| Invertir de golpe frente a quedarse en liquidez | Invertir de golpe | **70 %** |
| Repartir frente a quedarse en liquidez | Repartir | **69 %** |

- La ventaja media de invertir de golpe frente a repartir fue de un **2,2 %** de patrimonio en una cartera 100 % bolsa y de un **1,2 %** en una 40/60.
- En el 25 % de los años con peores rentabilidades, repartir fue mejor.
- La conclusión de Vanguard: invertir de golpe es la opción con más rentabilidad esperada; repartir es una opción razonable para quien teme arrepentirse, y en cualquier caso **mucho mejor que quedarse fuera**.

> Lo que enseña: lo que más cuesta no es elegir entre invertir de golpe o en unos meses, sino quedarse esperando. Si tienes miedo, reparte en un plazo corto y automático; si no, invierte ya.
`
  },
  ejercicios: [
    {
      t: "El precio medio de las aportaciones",
      p: `
Inviertes 400 € al mes durante tres meses en un fondo cuyo valor liquidativo es 10, 8 y 12 €. ¿Cuántas participaciones tienes y a qué coste medio? Si al final el fondo vale 12 €, compara con haber invertido los 1.200 € el primer mes.
`,
      s: `
1. **Participaciones**: 40 + 50 + 33,3 = **123,3**.
2. **Coste medio**: 1.200 / 123,3 = **9,73 €** (media armónica de los precios), por debajo de la media simple (10 €).
3. **Valor final repartiendo**: 123,3 × 12 = **1.480 €**.
4. **De golpe el primer mes**: 120 participaciones × 12 = **1.440 €**.
5. Aquí gana repartir porque la bolsa cayó en el segundo mes. Si los precios hubieran sido 10, 11 y 12, ganaría invertir de golpe. Históricamente, el segundo patrón es más frecuente.
`
    },
    {
      t: "Lo que cuesta repartir un año",
      p: `
Recibes 100.000 € y decides invertirlos en 12 aportaciones mensuales iguales. Si la bolsa rinde de media un 4 % anual más que la liquidez, ¿cuánto tiempo pasa de media tu dinero fuera del mercado y qué coste esperado tiene? ¿Y si lo repartes en 3 meses?
`,
      s: `
1. **Tiempo medio fuera** con 12 aportaciones: (12 − 1) / 2 = **5,5 meses**.
2. **Coste esperado**: 4 % × 5,5 / 12 = **1,83 %** → unos **1.833 €**.
3. **Con 3 aportaciones**: (3 − 1) / 2 = 1 mes fuera → 4 % / 12 = **0,33 %** → unos **333 €**.
4. Si repartir es lo que te permite invertir con tranquilidad, hazlo en pocos meses: tienes casi todo el beneficio psicológico con una fracción del coste.
`
    },
    {
      t: "¿Cuánto hay que acertar para salir y entrar?",
      p: `
La bolsa tiene un 70 % de años buenos (+15 %) y un 30 % de años malos (−15 %). La liquidez rinde un 3 %. Un inversor predice cada año si será bueno o malo y acierta con probabilidad a; si predice malo, se queda en liquidez. ¿Qué rentabilidad esperada tiene quedarse siempre invertido? ¿Qué acierto necesita el que entra y sale para igualarlo?
`,
      s: `
1. **Quedarse invertido**: 0,7 × 15 % + 0,3 × (−15 %) = **6 %**.
2. **El que entra y sale**: en años buenos gana 15 % si acierta y 3 % si falla; en años malos, 3 % si acierta y −15 % si falla.
   - E = 0,7 × [15a + 3(1 − a)] + 0,3 × [3a − 15(1 − a)] = 0,7 × (3 + 12a) + 0,3 × (−15 + 18a) = −2,4 + 13,8a.
3. **Igualar el 6 %**: −2,4 + 13,8a = 6 → **a ≈ 61 %**.
4. Y eso sin costes ni impuestos por vender, ni la dificultad real de acertar tanto la salida como la vuelta. Con los datos reales y costes, Sharpe (1975) calculó en torno al 74 %.
`
    }
  ],
  errores: [
    "Quedarse en liquidez esperando a que la bolsa baje.",
    "Repartir una cantidad grande durante años, como si cada mes fuera una decisión nueva.",
    "Creer que las aportaciones periódicas «ganan siempre» por comprar a precio medio.",
    "Interrumpir las aportaciones automáticas cuando la bolsa cae, justo cuando más compran.",
    "Invertir de golpe una cantidad que no podrías ver caer un 30 % sin vender."
  ],
  test: [
    { p: "Según Vanguard (1976–2022), invertir de golpe ganó a repartir en…", o: ["El 32 % de los casos", "El 68 % de los casos", "El 100 % de los casos"], c: 1, e: "Porque la bolsa sube más años de los que baja." },
    { p: "Repartir la inversión en el tiempo frente a quedarse en liquidez ganó en…", o: ["El 69 % de los casos", "El 20 % de los casos", "Nunca"], c: 0, e: "Repartir es peor que invertir de golpe, pero mucho mejor que esperar." },
    { p: "Con aportaciones fijas, tu coste medio por participación es…", o: ["La media simple de los precios", "La media armónica, igual o menor que la simple", "Siempre el precio más bajo"], c: 1, e: "Compras más cuando el precio es bajo." },
    { p: "¿Qué demostró Constantinides (1979)?", o: ["Que repartir siempre gana", "Que repartir según un calendario fijo es subóptimo para un inversor racional", "Que no hay que invertir en bolsa"], c: 1, e: "Su popularidad se explica por razones conductuales (Statman, 1995)." },
    { p: "Según Sharpe (1975), ¿cuánto debía acertar quien entraba y salía del mercado para batir a quien se quedaba invertido?", o: ["Un 50 %", "En torno al 74 %", "Un 95 %"], c: 1, e: "Con los datos reales y los costes de operar." }
  ],
  lecturas: [
    { t: "Cost averaging: Invest now or temporarily hold your cash?", a: "Vanguard, 2023", n: "El estudio del caso real. Gratuito." },
    { t: "A Behavioral Framework for Dollar-Cost Averaging", a: "Meir Statman, Journal of Portfolio Management, 1995" },
    { t: "Likely Gains from Market Timing", a: "William Sharpe, Financial Analysts Journal, 1975" },
    { t: "Value Averaging", a: "Michael Edleson", n: "La variante que ajusta las aportaciones." }
  ]
});


/* ---- l08.js ---- */
LECCIONES.push({
  id: "b3-l8", num: "3.8",
  titulo: "Hacerlo tú o delegarlo: fondos, roboadvisors y bancos",
  resumen: "Una cartera indexada se puede montar uno mismo por un 0,12–0,15 % anual, delegar en un roboadvisor por un 0,4–0,6 % o contratar la «gestión automatizada» de un banco por cerca de un 1 %. La diferencia a 25 años se cuenta en decenas de miles de euros. Pero lo que más vale de delegar no es la gestión, sino que te ayude a no tocar la cartera en los malos momentos. Si eres capaz de eso por tu cuenta, hazlo tú.",
  esencial: `
**Tres formas de tener una cartera indexada**
| Opción | Qué haces tú | Coste total aproximado |
|---|---|---|
| **Hazlo tú** con fondos indexados en una plataforma | Elegir fondos, decidir el reparto, aportar y rebalancear | 0,12–0,20 % |
| **Roboadvisor** (Indexa Capital, MyInvestor, Finizens…) | Un cuestionario y aportar | 0,4–0,65 % |
| **Gestión automatizada de un banco** | Un cuestionario y aportar | 0,9–1,1 % |
| Fondos activos del banco | Nada… | 1,5–2 % |

**Qué hace un roboadvisor**: te asigna una cartera de fondos indexados según tu perfil de riesgo, invierte tus aportaciones, rebalancea automáticamente mediante traspasos (sin impuestos) y te muestra la evolución. No elige acciones ni predice el mercado.

**Cuánto cuesta cada opción a largo plazo.** 50.000 € a 25 años, con una cartera que rinde un 6 % antes de costes:
| Opción | Coste | Valor final |
|---|---|---|
| Hazlo tú | 0,15 % | 207.129 € |
| Roboadvisor barato | 0,43 % | 193.858 € |
| Roboadvisor medio | 0,50 % | 190.670 € |
| Gestión automatizada de banco | 1,00 % | 169.318 € |
| Fondos activos | 1,80 % | 139.850 € |

**Cómo decidir**
- Si te ves capaz de **mantener el plan sin tocarlo** en una caída del 30 %, de rebalancear una vez al año y de no cambiar de estrategia por lo que leas, hazlo tú: ahorras unos 16.000 € frente a un roboadvisor en el ejemplo.
- Si sabes que en una crisis te pondrías nervioso, o que nunca te acordarás de rebalancear, un roboadvisor barato puede valer lo que cuesta. Lo que pagas es, sobre todo, **disciplina automatizada**.
- La gestión automatizada de los grandes bancos suele costar el doble que un roboadvisor independiente por un servicio muy parecido. Compara siempre el coste total (gestión, custodia y fondos).
`,
  entender: `
#### El coste total, desglosado
El coste de un roboadvisor tiene tres capas:
1. **Comisión de gestión** del roboadvisor (baja con el patrimonio).
2. **Custodia**: lo que cobra el banco que guarda los fondos.
3. **Gastos corrientes de los fondos** (TER).

Un ejemplo publicado por Finect para la cartera clásica de Indexa Capital: 0,15 % de gestión + 0,15 % de custodia + 0,147 % de los fondos = **0,447 %** total. Con importes menores, el total ronda el 0,5–0,6 %; con patrimonios muy grandes, la comisión de gestión baja hasta un 0,08 %.

Comparativa de costes totales en 2026 (Rankia, cartera de unos 10.000 €):
| Servicio | Gestión + custodia | Fondos | Total aproximado |
|---|---|---|---|
| MyInvestor (carteras indexadas) | 0,30 % | 0,13 % | **0,43 %** |
| Indexa Capital | 0,38 % | 0,10 % | **0,57 %** |
| Finizens | 0,41 % | 0,14 % | **0,65 %** |
| CaixaBank Smart Money | 0,73 % | 0,20–0,33 % | **0,93–1,06 %** |

#### Lo que te ahorras haciéndolo tú
Sin comisión de gestión ni custodia (muchas plataformas no cobran custodia de fondos), pagas solo el TER de los fondos: 0,12–0,20 %. A cambio:
- decides el reparto (con las herramientas de las lecciones 2.10 y 3.6);
- rebalanceas tú, con traspasos;
- gestionas los cambios de perfil con la edad;
- y, sobre todo, eres tu propio freno en las crisis.

#### Planes de pensiones indexados
Algunos roboadvisores y plataformas ofrecen planes de pensiones indexados con costes de en torno al 0,3–0,4 %, muy por debajo de los planes tradicionales de los bancos. El plan de pensiones tiene una lógica fiscal propia (deducción al aportar, tributación como rendimiento del trabajo al cobrar) que se estudia en el bloque 8. Si usas un plan, que sea indexado y barato.

#### Fondos o ETF para hacerlo tú
Para el núcleo de la cartera en España, los fondos indexados son más prácticos por los traspasos sin impuestos. Los ETF son útiles si inviertes desde un bróker que no ofrece fondos, si quieres índices que solo existen como ETF o si no te importa no poder traspasar (lección 1.7).
`,
  fondo: `
#### 1. ¿Cuánto vale el asesoramiento?
Vanguard publica desde 2001 un estudio llamado *Advisor's Alpha* en el que estima que un buen asesor puede añadir en torno a **un 3 % anual** de rentabilidad neta a sus clientes. La cifra es muy discutida y Vanguard advierte que no es constante: se concentra en pocos momentos. La mayor parte de ese valor no viene de elegir inversiones, sino de:
- **acompañamiento conductual** (evitar que el cliente venda en las caídas o persiga lo que más ha subido): el componente más grande de su estimación;
- reparto adecuado de activos y rebalanceo;
- uso de vehículos fiscalmente eficientes;
- costes bajos.

Es decir: el valor de delegar está en **lo que te impide hacer**. Un roboadvisor automatiza parte de eso (rebalanceo, fiscalidad, costes), pero no puede sujetarte la mano: si en una crisis vendes desde la app, el roboadvisor no lo impide.

#### 2. La evidencia sobre asesores tradicionales
Estudios con datos reales de clientes de asesores (por ejemplo, Foerster, Linnainmaa, Melzer y Previtero, 2017, con datos canadienses) encuentran que muchos asesores tradicionales aplican sus propias preferencias a todos sus clientes sin adaptarlas, recomiendan carteras caras y con más rotación, y que el valor neto para el cliente, una vez pagadas las comisiones, a menudo es negativo. Los conflictos de interés (cobrar retrocesiones de los fondos que recomiendan, lección 3.3) explican parte de ello. La normativa europea MiFID II distingue entre asesoramiento **independiente** (que no puede quedarse retrocesiones) y **no independiente**. Pregunta siempre cuál es el tuyo.

#### 3. Qué mirar en un roboadvisor
- **Coste total** (gestión + custodia + fondos), no solo la comisión de gestión.
- **Fondos subyacentes**: indexados de bajo coste de gestoras grandes, no fondos propios caros.
- **Rebalanceo**: con qué reglas y con qué frecuencia.
- **Fiscalidad**: si usa fondos traspasables y cómo gestiona las ventas.
- **Transparencia**: si publica la rentabilidad real de sus carteras, neta de costes, comparada con su referencia.
- **Solidez**: supervisión de la CNMV, banco custodio, y el hecho de que, si el roboadvisor desaparece, tus fondos están a tu nombre en el custodio.

Indexa Capital, el mayor roboadvisor independiente de España, gestionaba unos **5.760 millones de euros** de más de **162.000 clientes** en julio de 2026, según Finect.

#### 4. La conducta, de nuevo
Hay un argumento a favor de los roboadvisores que no aparece en las tablas de costes: **la fricción**. Un sistema que invierte automáticamente cada mes, que rebalancea sin preguntarte y que muestra la evolución sin mucho ruido reduce las ocasiones en que tomas decisiones malas. Al revés, una aplicación de bróker que te muestra el precio de todo segundo a segundo las multiplica. La lección 3.9 desarrolla esta idea.
`,
  caso: {
    titulo: "Lo que cuesta que te lo hagan (España, 2026)",
    md: `
Las comparativas publicadas en 2026 por Rankia y Finect permiten poner números a las opciones de gestión indexada delegada en España:

- **MyInvestor**: carteras indexadas con un coste total de en torno al **0,43 %**.
- **Indexa Capital**: en torno al **0,45–0,57 %** según el importe, bajando la comisión de gestión hasta el 0,08 % en patrimonios muy altos. Es el mayor del sector: 5.760 millones de euros y 162.000 clientes en julio de 2026. Su plan de pensiones indexado cuesta un 0,403 % (0,355 % de gestión y 0,048 % de custodia).
- **Finizens**: en torno al **0,29–0,65 %**, con una rebaja anual por antigüedad.
- **CaixaBank Smart Money**, la gestión automatizada del mayor banco español y una de las de más patrimonio del país: una comisión del **0,73 %** sea cual sea el importe, más el coste de los fondos propios de CaixaBank AM (0,20–0,33 %), en total en torno al **0,93–1,06 %**.

Frente a todo ello, montarlo uno mismo con fondos indexados al MSCI World desde un 0,12 % en una plataforma sin custodia.

Con 50.000 € a 25 años y un 6 % bruto, la diferencia entre la opción de banco (≈1 %) y un roboadvisor independiente (≈0,5 %) es de unos **21.000 €**; entre el roboadvisor y hacerlo uno mismo (≈0,15 %), de unos **16.000 €**.

> Lo que enseña: la gestión indexada delegada es mucho más barata que los fondos activos tradicionales, pero no todas las opciones cuestan lo mismo. Paga por disciplina si la necesitas; no pagues el doble por la misma disciplina.
`
  },
  ejercicios: [
    {
      t: "Tres opciones a 25 años",
      p: `
Tienes 50.000 € y no vas a aportar más. Tu cartera rinde un 6 % anual antes de costes. Compara el valor a 25 años de hacerlo tú (0,15 %), con un roboadvisor (0,50 %) y con la gestión automatizada de un banco (1,00 %). ¿Cuánto te cuesta, en euros, cada escalón?
`,
      s: `
1. **Hazlo tú**: 50.000 × 1,0585²⁵ ≈ **207.130 €**.
2. **Roboadvisor**: 50.000 × 1,055²⁵ ≈ **190.670 €**.
3. **Banco**: 50.000 × 1,05²⁵ ≈ **169.318 €**.
4. **Escalones**: de hacerlo tú al roboadvisor, ≈ **16.460 €**; del roboadvisor al banco, ≈ **21.350 €**.
5. Si el roboadvisor evita que vendas una sola vez en una crisis, puede compensar de sobra su coste. El banco difícilmente compensa la diferencia con un roboadvisor.
`
    },
    {
      t: "Desglosar el coste de un roboadvisor",
      p: `
Un roboadvisor cobra un 0,15 % de gestión y el banco custodio un 0,15 %. Los fondos de tu cartera tienen estos TER: 60 % en un fondo al 0,10 %, 30 % en uno al 0,20 % y 10 % en uno al 0,25 %. ¿Cuál es tu coste total? ¿Cuánto pagas al año por 40.000 €?
`,
      s: `
1. **TER ponderado de los fondos**: 0,6 × 0,10 + 0,3 × 0,20 + 0,1 × 0,25 = 0,060 + 0,060 + 0,025 = **0,145 %**.
2. **Coste total**: 0,15 + 0,15 + 0,145 = **0,445 %**.
3. **En euros**: 40.000 × 0,00445 = **178 € al año**.
4. Haciéndolo tú con los mismos fondos y sin custodia pagarías 58 € al año. La diferencia (120 €) es lo que cuesta la automatización.
`
    },
    {
      t: "¿Cuánto vale no vender en una crisis?",
      p: `
Tienes 100.000 € en una cartera 60/40. Llega una crisis y la cartera cae un 25 %. Escenario A: vendes todo en el mínimo y vuelves a invertir dos años después, cuando la cartera ya se ha recuperado al nivel inicial, perdiéndote esa recuperación. Escenario B: no haces nada. ¿Cuánto tienes en cada caso tras los dos años? ¿Cuántos años de comisión de un roboadvisor al 0,5 % equivale la diferencia?
`,
      s: `
1. **Tras la caída**: 75.000 €.
2. **Escenario A**: vendes con 75.000 € y vuelves a entrar con 75.000 € (suponiendo que la liquidez no rinde). Tienes **75.000 €**.
3. **Escenario B**: la cartera se recupera a **100.000 €**.
4. **Diferencia**: **25.000 €**.
5. **Comisión de un roboadvisor sobre 100.000 €**: 500 € al año. La diferencia equivale a **50 años** de comisiones. Si delegar evita un solo error así, compensa de largo. Si no lo evita (porque igualmente venderías), no.
`
    }
  ],
  errores: [
    "Comparar roboadvisores solo por la comisión de gestión y olvidar la custodia y los fondos.",
    "Contratar la «gestión automatizada» del banco sin comparar con alternativas que cuestan la mitad.",
    "Pensar que un roboadvisor te protege de vender en una crisis: puedes hacerlo desde la app igual.",
    "Hacerlo uno mismo y no rebalancear nunca o cambiar la cartera con cada noticia.",
    "Pagar a un asesor sin saber si es independiente o cobra retrocesiones de lo que te recomienda."
  ],
  test: [
    { p: "¿Qué coste total aproximado tiene un roboadvisor independiente en España?", o: ["0,05 %", "0,4–0,65 %", "1,5–2 %"], c: 1, e: "Gestión, custodia y fondos sumados." },
    { p: "¿De dónde viene, según Vanguard, la mayor parte del valor de un buen asesor?", o: ["De elegir acciones", "Del acompañamiento conductual: evitar errores del cliente", "De predecir el mercado"], c: 1, e: "Su estudio Advisor's Alpha estima en torno a un 3 % anual, una cifra muy discutida." },
    { p: "Con 50.000 € a 25 años al 6 % bruto, ¿cuánto cuesta un roboadvisor al 0,5 % frente a hacerlo tú al 0,15 %?", o: ["Unos 1.600 €", "Unos 16.000 €", "Unos 60.000 €"], c: 1, e: "207.130 € frente a 190.670 €." },
    { p: "¿Qué distingue el asesoramiento independiente según MiFID II?", o: ["Que es gratuito", "Que no puede quedarse retrocesiones de los productos que recomienda", "Que solo recomienda indexados"], c: 1, e: "El no independiente sí puede cobrarlas, y debe informarte." },
    { p: "¿Cuál es el coste total aproximado de CaixaBank Smart Money según Rankia (2026)?", o: ["0,43 %", "0,57 %", "0,93–1,06 %"], c: 2, e: "0,73 % de gestión más el coste de fondos propios." }
  ],
  lecturas: [
    { t: "Vanguard's Advisor's Alpha", a: "Vanguard", n: "La estimación del valor del asesoramiento, con sus componentes." },
    { t: "Retail Financial Advice: Does One Size Fit All?", a: "Foerster, Linnainmaa, Melzer y Previtero, Journal of Finance, 2017" },
    { t: "Guía de la CNMV sobre el asesoramiento financiero", a: "cnmv.es", n: "Qué es independiente, qué no y qué te deben informar." },
    { t: "Comparativas de roboadvisores", a: "Finect y Rankia", n: "Actualizadas varias veces al año; comprueba siempre los costes en la web de cada entidad." }
  ]
});


/* ---- l09.js ---- */
LECCIONES.push({
  id: "b3-l9", num: "3.9",
  titulo: "El inversor es el riesgo: la brecha de comportamiento",
  resumen: "Los fondos ganan una cosa y sus inversores, otra menor, porque compran después de las subidas y venden después de las caídas. Morningstar estima esa brecha en 1,2 puntos al año en Estados Unidos. Una cartera indexada solo funciona si se mantiene, y mantenerla es más difícil de lo que parece. Por eso conviene diseñar la cartera y las reglas para el inversor que serás en una crisis, no para el que eres hoy.",
  esencial: `
**La brecha.** La rentabilidad que publica un fondo supone que alguien invirtió el primer día y no tocó nada. La de sus partícipes depende de cuándo metieron y sacaron dinero. Morningstar, en su estudio de 2026 (10 años hasta diciembre de 2025):
- Los fondos y ETF estadounidenses rindieron un **9,9 %** anual.
- El dinero de sus inversores, ponderado por cuándo estuvo dentro, un **8,7 %**.
- La diferencia, **1,2 puntos al año**, equivale a perder alrededor del **12 %** de la rentabilidad.

**Dónde es mayor**
- En los fondos **más volátiles**: −2,1 puntos en el quinto más volátil frente a −0,4 en el más estable.
- En productos de moda (cripto, apalancados, temáticos).
- Curiosamente, poco relacionada con las comisiones: −1,0 puntos en los más baratos frente a −1,2 en los más caros.

**Por qué ocurre**
- **Perseguir la rentabilidad**: comprar lo que más ha subido.
- **Vender por miedo**: salir tras una caída y volver cuando ya ha subido.
- **Operar demasiado**: cambiar de fondos, de estrategia, de índice.
- **Mirar demasiado**: si consultas tu cartera cada día, verás pérdidas casi la mitad de los días; si la miras una vez al año, uno de cada tres años; a 10 años, menos de una vez de cada diez.

**Cómo protegerte**
1. **Escribe tu plan**: reparto, aportaciones, cuándo rebalanceas y qué harás si la bolsa cae un 30 %. Decídelo en frío.
2. **Automatiza**: aportaciones periódicas y, si puedes, rebalanceo automático.
3. **Mira poco**: una revisión al trimestre o al año es suficiente.
4. **Elige un riesgo que puedas soportar de verdad**: es mejor una cartera 50/50 que mantienes que una 90/10 que vendes en pánico.
5. **Separa la parte «de jugar»**: si te apetece elegir acciones o probar ideas, que sea una parte pequeña y aparte (tu consola de inversión), sin tocar el núcleo indexado.

**Un matiz**: hay investigadores que creen que la medida de Morningstar exagera el daño de los malos momentos de entrada, y que la pérdida real por mala sincronización es mucho menor. Pero nadie discute que vender en pánico tras una gran caída es caro.
`,
  entender: `
#### Rentabilidad del fondo y rentabilidad del inversor
- **Rentabilidad ponderada por el tiempo** (la del fondo): encadena las rentabilidades de cada periodo sin importar cuánto dinero había.
- **Rentabilidad ponderada por el dinero** (la del inversor): es la TIR de todos los flujos (aportaciones y retiradas). Da más peso a los periodos en que había más dinero (lección 0.4).

Si el dinero entra antes de los años malos y sale antes de los buenos, la segunda queda muy por debajo de la primera. La lección 3.3 lo ilustraba con el ARK Innovation.

#### La frecuencia con que ves pérdidas
Con una cartera de bolsa con rentabilidad esperada del 7 % y volatilidad del 16 % (aproximación normal):
| Si miras cada… | Probabilidad de ver una pérdida |
|---|---|
| Día | 48,9 % |
| Semana | 47,6 % |
| Mes | 45,0 % |
| Año | 33,1 % |
| 5 años | 16,4 % |
| 10 años | 8,3 % |

Como las pérdidas duelen más del doble que las ganancias equivalentes (aversión a las pérdidas, lección 0.8), quien mira a diario vive su inversión como una sucesión de disgustos, aunque a largo plazo le vaya bien. Benartzi y Thaler (1995) llamaron a esto **aversión miope a las pérdidas** y lo propusieron como explicación de por qué la prima de la bolsa es tan alta.

#### El coste de salir y volver
Si vendes tras una caída del 30 % y vuelves a entrar cuando el mercado ha rebotado un 40 % desde el mínimo, tienes para siempre un **29 % menos** de participaciones que si no hubieras hecho nada. Puede parecer que «solo» te perdiste un rebote, pero lo pierdes para todos los años siguientes.

#### Herramientas para un inversor humano
- **Declaración de política de inversión** (*investment policy statement*): un documento de una página con tus objetivos, el reparto, las reglas de rebalanceo y lo que **no** harás. Los inversores institucionales la tienen; tú también deberías.
- **Reglas de venta escritas** para las inversiones activas: el semáforo de tu consola (tesis rota, valoración cara) es exactamente esto (bloque 10).
- **Automatización por defecto**: lo que pasa sin decidir (aportar, rebalancear) suele salir mejor que lo que exige decidir cada vez.
`,
  fondo: `
#### 1. La evidencia de los errores de los particulares
- **Barber y Odean (2000)**, con datos de 66.000 cuentas de un bróker estadounidense entre 1991 y 1996: la quinta parte de los inversores que más operaban obtuvo un **11,4 %** anual, frente al **17,9 %** del mercado. Cuanto más se operaba, peor era el resultado. El título del artículo lo resume: «Operar es peligroso para tu riqueza».
- **Barber y Odean (2001)**: los hombres operaban un 45 % más que las mujeres y obtenían peores resultados netos; lo atribuyeron al **exceso de confianza**.
- **Odean (1998)**: los inversores venden antes las acciones que han subido que las que han bajado (**efecto disposición**), lo contrario de lo que aconsejan la fiscalidad y el momento.

#### 2. La brecha también existe a nivel de mercado
Ilia Dichev (2007) calculó la rentabilidad ponderada por el dinero de mercados enteros (no de fondos), teniendo en cuenta cuándo entraba y salía capital (salidas a bolsa, ampliaciones, recompras, dividendos). En la bolsa estadounidense entre 1926 y 2002, la rentabilidad ponderada por el dinero fue en torno a **1,3 puntos anuales menor** que la publicada; en otros mercados, más. El dinero llega a las bolsas cuando están caras.

#### 3. La crítica a la medida de Morningstar
Un estudio reciente de la Universidad de Arkansas sostiene que la brecha de Morningstar no mide solo la mala sincronización, sino también un efecto estadístico ligado a que el dinero entra después de buenos resultados pasados. Con su método alternativo, la pérdida de riqueza atribuible a la mala sincronización sería de solo **en torno a 0,1 puntos al año**. El debate sigue abierto. Lo que sí es indiscutible son los casos extremos: quien vende en el mínimo de una crisis y vuelve años después pierde mucho, como en el ejercicio 3.

#### 4. Por qué la indexación ayuda (y por qué no basta)
La indexación elimina muchas decisiones (qué acción, qué gestor, cuándo cambiar de fondo), y con ellas muchas ocasiones de equivocarse. Morningstar encuentra brechas menores en los fondos mixtos que rebalancean solos y en las categorías estables. Pero un indexado de bolsa al 100 % sigue cayendo un 50 % en las crisis, y la decisión de no vender la tienes que tomar tú. Por eso el diseño de la cartera debe partir de tu comportamiento probable, no de tu tolerancia teórica.

#### 5. La psicología se estudia a fondo en el bloque 6
Aquí basta con la idea práctica: una estrategia mediocre que mantienes vence a una estrategia óptima que abandonas. La rentabilidad de la indexación no está en el índice que eliges, sino en los años que aguantas sin tocarlo.
`,
  caso: {
    titulo: "Mind the Gap 2026: lo que se pierde por el camino",
    md: `
Morningstar publica cada año su estudio *Mind the Gap*, que compara la rentabilidad total de los fondos con la que obtiene el dinero de sus inversores. La edición de 2026 analiza los fondos y ETF estadounidenses en los 10 años hasta el 31 de diciembre de 2025:

- **Rentabilidad de los fondos**: 9,9 % anual. **Rentabilidad del dinero invertido**: **8,7 %**. Brecha: **1,2 puntos al año**, en línea con las de los periodos de diez años terminados entre 2021 y 2024.
- **Volatilidad**: la brecha fue de −0,4 puntos en los fondos menos volátiles y de −2,1 en los más volátiles.
- **Costes**: −1,0 puntos en los fondos más baratos y −1,2 en los más caros. Las comisiones influyen poco en la brecha; la volatilidad, mucho.
- **ETF frente a fondos tradicionales**: los ETF tuvieron mejores rentabilidades, pero brechas mayores, porque son más fáciles de comprar y vender.
- **Criptomonedas**: los ETF de cripto tuvieron la mayor brecha: el dinero entró tras las grandes subidas del bitcoin y salió en las caídas posteriores.
- Los fondos con resultados más «programados», como los mixtos que rebalancean solos, mostraron brechas pequeñas.

> Lo que enseña: el mayor riesgo de una cartera indexada no está en el índice, sino en quien la gestiona. Diseña la cartera para que sea fácil de mantener: poca volatilidad para tu tolerancia real, pocas decisiones y reglas escritas.
`
  },
  ejercicios: [
    {
      t: "1,2 puntos al año durante 10 años",
      p: `
Un fondo rinde un 9,9 % anual durante 10 años y su inversor medio obtiene un 8,7 %. Sobre 100.000 €, ¿cuánto acumula cada uno? ¿Qué porcentaje de la rentabilidad se pierde?
`,
      s: `
1. **Fondo**: 100.000 × 1,099¹⁰ ≈ **257.026 €**.
2. **Inversor medio**: 100.000 × 1,087¹⁰ ≈ **230.301 €**.
3. **Diferencia**: ≈ **26.725 €**.
4. **En rentabilidad anual**: 8,7 / 9,9 = 0,879 → se pierde un **12 %** de la rentabilidad.
`
    },
    {
      t: "Mirar la cartera cada día",
      p: `
Tu cartera de bolsa tiene una rentabilidad esperada del 7 % anual y una volatilidad del 16 %. Con una aproximación normal, calcula la probabilidad de ver una pérdida si miras cada día (252 sesiones), cada mes, cada año y cada 10 años.
`,
      s: `
1. **Día**: media 0,07/252 = 0,028 %; desviación 0,16/√252 = 1,008 %. P = Φ(−0,028) ≈ **48,9 %**.
2. **Mes**: media 0,583 %; desviación 4,62 %. P = Φ(−0,126) ≈ **45,0 %**.
3. **Año**: P = Φ(−0,07/0,16) = Φ(−0,44) ≈ **33,1 %**.
4. **10 años**: P = Φ(−0,7/0,506) = Φ(−1,38) ≈ **8,3 %**.
5. Si miras cada día, casi la mitad de los días verás números rojos. Mirar menos no cambia la rentabilidad, pero cambia mucho cómo la vives, y con ello la probabilidad de cometer errores.
`
    },
    {
      t: "Vender en la caída y volver tarde",
      p: `
Tu cartera vale 100 y cae un 30 %. Vendes en el mínimo (70). El mercado rebota un 40 % desde el mínimo y entonces vuelves a invertir lo que tienes. ¿Qué proporción de las participaciones originales tienes ahora? Si después el mercado sube un 50 %, ¿cuánto tienes tú y cuánto quien no vendió?
`,
      s: `
1. **El mercado tras el rebote**: 70 × 1,4 = **98**.
2. **Tus participaciones**: compras con 70 lo que vale 98 → tienes 70 / 98 = **71,4 %** de las originales.
3. **Tras subir otro 50 %**: quien no vendió tiene 98 × 1,5 = **147**; tú, 70 × 1,5 = **105**.
4. Has perdido para siempre casi un 29 % de tu patrimonio respecto al que no vendió, aunque «solo» te perdiste un rebote.
`
    }
  ],
  errores: [
    "Diseñar la cartera para la tolerancia al riesgo que crees tener, no para la que mostrarás en una crisis.",
    "Mirar la cartera a diario.",
    "Cambiar de fondo o de índice tras un año malo.",
    "Vender en las caídas «hasta que se aclare el panorama».",
    "Mezclar la parte de inversión a largo plazo con la de especulación."
  ],
  test: [
    { p: "Según Morningstar (2026), ¿cuánto rindió de menos el dinero de los inversores frente a sus fondos al año?", o: ["0,1 puntos", "1,2 puntos", "5 puntos"], c: 1, e: "8,7 % frente a 9,9 % en los 10 años hasta 2025." },
    { p: "¿En qué fondos es mayor la brecha?", o: ["En los más caros", "En los más volátiles", "En los monetarios"], c: 1, e: "−2,1 puntos en los más volátiles frente a −0,4 en los más estables." },
    { p: "Con una bolsa al 7 % y volatilidad del 16 %, si miras tu cartera cada día verás pérdidas aproximadamente…", o: ["El 10 % de los días", "El 49 % de los días", "Nunca"], c: 1, e: "A 10 años, solo en torno al 8 % de las veces." },
    { p: "¿Qué encontraron Barber y Odean (2000)?", o: ["Que los que más operaban obtenían mucho menos que el mercado", "Que operar mucho mejora los resultados", "Que los particulares baten a los fondos"], c: 0, e: "11,4 % frente al 17,9 % del mercado." },
    { p: "Vendes tras una caída del 30 % y vuelves tras un rebote del 40 % desde el mínimo. ¿Qué parte de tus participaciones conservas?", o: ["El 100 %", "Alrededor del 71 %", "El 50 %"], c: 1, e: "70 / 98." }
  ],
  lecturas: [
    { t: "Mind the Gap 2026", a: "Morningstar", n: "El estudio anual sobre la rentabilidad de los inversores. Gratuito." },
    { t: "Trading Is Hazardous to Your Wealth", a: "Brad Barber y Terrance Odean, Journal of Finance, 2000" },
    { t: "What Are Stock Investors' Actual Historical Returns?", a: "Ilia Dichev, American Economic Review, 2007" },
    { t: "Myopic Loss Aversion and the Equity Premium Puzzle", a: "Shlomo Benartzi y Richard Thaler, Quarterly Journal of Economics, 1995" },
    { t: "The Psychology of Money", a: "Morgan Housel", n: "Comportamiento y dinero, contado con historias. Muy ameno." }
  ]
});


/* ---- l10.js ---- */
LECCIONES.push({
  id: "b3-l10", num: "3.10",
  titulo: "Críticas y límites de la indexación",
  resumen: "Indexar por capitalización significa comprar más de lo que más ha subido, también cuando ha subido demasiado. Le pasó al inversor global con Japón en 1989 y podría pasarle hoy con Estados Unidos. La indexación tampoco evita las décadas malas ni elimina el riesgo de mercado. Aun así, ninguna de las críticas ha producido una alternativa que funcione mejor de forma fiable. Lo sensato es conocer los límites y, si acaso, hacer ajustes moderados.",
  esencial: `
**Las críticas más serias**
1. **Compra lo caro**: el índice pesa más lo que más ha subido. Si una región o un sector está en burbuja, el indexado tiene más. A finales de los ochenta, **Japón llegó a ser en torno al 40 % del MSCI World**; hoy Estados Unidos es más del 70 %.
2. **No evita las décadas malas**: si el mercado rinde poco durante 10 o 20 años, el indexado también. El Nikkei tardó **34 años** en recuperar su máximo de 1989, y el IBEX, 18 (lección 2.1).
3. **Concentración**: diez empresas son más de una cuarta parte del índice mundial (lección 3.4).
4. **«Burbuja pasiva»**: si demasiado dinero compra sin analizar, los precios podrían desviarse y el ajuste ser brusco (lección 3.5).
5. **Rentabilidades futuras más bajas**: con valoraciones altas, las previsiones a 10 años para la bolsa estadounidense son modestas (Vanguard: 3,5–5,5 % anual en 2026; lección 1.3).

**Las respuestas**
- El índice **se corrige solo**: Japón pasó del 40 % al 5–6 % del MSCI World sin que nadie tuviera que decidir venderlo. El inversor global sufrió la caída, pero mucho menos que quien solo tenía Japón, y siguió beneficiándose del resto del mundo.
- Las alternativas (pesos iguales, por PIB, por factores) **son apuestas**: a veces ganan y a veces pierden, y casi siempre cuestan más.
- La concentración actual refleja en buena parte **beneficios reales** de las grandes empresas, no solo precios.
- Ninguna alternativa ha batido de forma fiable a un indexado mundial barato **después de costes**.

**Qué hacer con estas críticas**
- **Diversifica de verdad**: bolsa mundial (incluidos emergentes), no un solo país.
- **No uses solo bolsa**: la renta fija y la liquidez son tu defensa contra las décadas malas de la bolsa.
- Si te preocupa la concentración, haz **ajustes moderados** (algo más de Europa o emergentes, un pequeño porcentaje en pesos iguales o en valor), sabiendo que son apuestas.
- Revisa tus expectativas: un indexado da la rentabilidad del mercado, que puede ser baja durante años.
`,
  entender: `
#### Japón 1989: la lección de la ponderación por capitalización
- A finales de 1989, la bolsa japonesa era la más valiosa del mundo; Estados Unidos era apenas un 29 % de la capitalización mundial.
- En siete meses (diciembre de 1989 a septiembre de 1990), la bolsa japonesa cayó un **45 %**; no tocó fondo hasta 2003, con una caída total del 69 %.
- Un inversor global (MSCI World) perdió un **29 %** en 1990, sobre todo por el peso de Japón.
- A largo plazo, sin embargo, el inversor global salió muy por delante: en los 40 años analizados por justETF, en términos reales y en yenes, el MSCI World rindió un **7,6 %** anual frente a un **3,8 %** de Japón. Multiplicó su dinero real por **18,7** frente a **4,4**.

#### Lo que pasaría hoy con una caída concentrada
Con Estados Unidos al 70,6 % del MSCI World:
| Escenario | EE. UU. | Resto | MSCI World |
|---|---|---|---|
| Caída general | −30 % | −30 % | −30 % |
| Caída concentrada en EE. UU. | −30 % | −10 % | **−24,1 %** |
| Mismo escenario, con 50 % EE. UU. | −30 % | −10 % | −20,0 % |

Reducir el peso de EE. UU. amortigua una caída concentrada allí, y pierde rentabilidad si EE. UU. sigue liderando. No hay una respuesta gratuita.

#### Alternativas a la capitalización
| Alternativa | Qué hace | Coste o riesgo |
|---|---|---|
| Pesos iguales | Igual peso a cada empresa | Más pequeñas y valor; más rotación |
| Ponderación por PIB | Peso de cada país según su economía | Apuesta contra los países más caros |
| Índices fundamentales | Pesos por ventas, beneficios o dividendos | En la práctica, una inclinación a valor |
| Excluir EE. UU. o tecnología | Diversifica fuera de lo concentrado | Apuesta directa |
| Topes de peso por empresa o país | Limitan la concentración | Se separan del mercado |

Todas pueden tener sentido como **inclinaciones moderadas** dentro de una cartera indexada, nunca como sustituto de entender que el mercado ponderado es el punto neutral.
`,
  fondo: `
#### 1. ¿Es la ponderación por capitalización ineficiente?
Si los precios tienen errores aleatorios alrededor del valor verdadero, una cartera ponderada por precio tiene, por construcción, más peso en las acciones sobrevaloradas y menos en las infravaloradas. Hsu (2006) y Arnott, Hsu y Moore (2005) argumentaron que eso le cuesta rentabilidad frente a carteras ponderadas por fundamentales. La réplica (Perold, 2007, entre otros) es que ese argumento supone conocer qué precios están equivocados, algo que nadie sabe de antemano. Y la evidencia empírica de los índices fundamentales muestra que su ventaja se explica casi por completo por la exposición a valor y pequeñas (lección 2.8), con años muy largos de rentabilidad inferior.

#### 2. El argumento de la burbuja pasiva, examinado
Las preocupaciones de Michael Burry en 2019 (lección 3.5) apuntaban sobre todo a la **liquidez** de las acciones pequeñas que los índices incluyen. La pandemia de 2020 y el año 2022 pusieron a prueba esa idea con grandes salidas de fondos y no se produjo el colapso de liquidez que temía. Pero el riesgo de fondo, que los flujos pasivos amplifiquen los movimientos del mercado en una dirección y en otra (lección 3.5, mercados inelásticos), no está resuelto.

#### 3. El argumento de las rentabilidades bajas
Con valoraciones altas, las previsiones de largo plazo para la bolsa estadounidense son menores que su historia (Vanguard: 3,5–5,5 % anual a 10 años, frente a 4,9–6,9 % fuera de EE. UU.). Esto no es una crítica a la indexación en sí (afectaría igual a los fondos activos), sino un recordatorio de que **el indexado no garantiza la rentabilidad histórica**. Las implicaciones prácticas son de reparto: ahorrar más, no contar con un 10 % anual y quizá diversificar más geográficamente.

#### 4. Gobierno corporativo y concentración de poder
Tres gestoras (BlackRock, Vanguard, State Street) son, en conjunto, el mayor accionista de la mayoría de las grandes empresas estadounidenses. Bebchuk y Hirst (2019) argumentan que tienen incentivos para ser accionistas demasiado pasivos (no les compensa gastar en supervisar) y demasiado complacientes con la dirección de las empresas. Otros señalan el riesgo contrario: que usen su poder de voto con fines propios. Las propuestas incluyen dar a los partícipes la elección de la política de voto, algo que las grandes gestoras ya ofrecen en parte.

#### 5. Lo que queda en pie
Tras cincuenta años de críticas, el núcleo del argumento sigue intacto: **en conjunto, los inversores no pueden batirse a sí mismos, y los costes deciden quién obtiene más de la rentabilidad del mercado**. La indexación por capitalización tiene límites reales, pero la mayoría de sus alternativas son formas de gestión activa con nombre nuevo, con sus propios costes y riesgos. Lo que la evidencia sugiere es un núcleo indexado global, barato y bien diversificado, complementado (si se quiere) con inclinaciones moderadas y conscientes, y con un reparto entre bolsa y renta fija que te permita aguantar las décadas malas.
`,
  caso: {
    titulo: "Japón 1989: cuando el índice mundial estaba lleno de burbuja",
    md: `
A finales de los años ochenta, Japón vivía una de las mayores burbujas de la historia: se decía que el terreno del Palacio Imperial de Tokio valía más que todo el inmobiliario de California, y 13 de las 20 empresas más valiosas del mundo eran japonesas. El índice Nikkei 225 había pasado de unos 7.000 puntos en 1980 a casi **39.000** en diciembre de 1989.

Para el inversor indexado global, la consecuencia era clara: **Japón llegó a pesar en torno al 40 % del MSCI World**. Quien compraba «el mundo» compraba, en gran parte, la burbuja japonesa.

Lo que ocurrió:
- El Banco de Japón subió los tipos desde el 2,5 % hasta en torno al 6 % en 1990.
- La bolsa japonesa cayó un 45 % en siete meses y siguió bajando: el mínimo llegó en 2003, un 69 % por debajo del máximo.
- El inversor global perdió un **29 %** en 1990, sobre todo por Japón.
- El Nikkei no superó su máximo de 1989 hasta **febrero de 2024**, 34 años después.
- Japón pesa hoy en torno al **5–6 %** del índice mundial.

Pero mira el largo plazo, según justETF (rentabilidad real anual en yenes, con dividendos):
| Plazo | MSCI World | Japón |
|---|---|---|
| 30 años | 9,1 % | 3,6 % |
| 40 años | 7,6 % | 3,8 % |

El inversor global, pese a haber tenido el 40 % en Japón en el peor momento, multiplicó su dinero real por más de cuatro veces lo que lo hizo quien solo tenía Japón.

> Lo que enseña: la ponderación por capitalización te expone a las burbujas, pero la diversificación global limita su daño y el índice se corrige solo. El riesgo de verdad no es el índice mundial: es apostar todo a un país, por grande o prometedor que parezca. Hoy, la pregunta incómoda es si el 70 % de Estados Unidos es reflejo de su fortaleza o el «Japón» de esta época. Nadie lo sabe, y por eso se diversifica.
`
  },
  ejercicios: [
    {
      t: "El MSCI World de 1990",
      p: `
En 1990 Japón pesa el 40 % del MSCI World. La bolsa japonesa cae un 40 % y el resto del mundo un 20 %. ¿Cuánto cae el índice? ¿Y una cartera 100 % japonesa? ¿Y una que excluyera Japón?
`,
      s: `
1. **MSCI World**: 0,4 × (−40 %) + 0,6 × (−20 %) = −16 % − 12 % = **−28 %**.
2. **Solo Japón**: **−40 %**.
3. **Sin Japón**: **−20 %**.
4. El índice global sufrió por su gran peso en Japón, pero bastante menos que quien había apostado todo a Japón.
`
    },
    {
      t: "Una caída concentrada en Estados Unidos",
      p: `
Hoy Estados Unidos pesa un 70,6 % del MSCI World. Imagina que las acciones estadounidenses caen un 30 % y el resto un 10 %. ¿Cuánto cae el índice? ¿Y una cartera con un 50 % en EE. UU.? Si el escenario fuera el contrario (EE. UU. +20 %, resto +5 %), ¿qué cartera ganaría más?
`,
      s: `
1. **MSCI World**: 0,706 × (−30 %) + 0,294 × (−10 %) = −21,2 % − 2,9 % = **−24,1 %**.
2. **50 % EE. UU.**: 0,5 × (−30 %) + 0,5 × (−10 %) = **−20,0 %**.
3. **Escenario contrario**: MSCI World = 0,706 × 20 + 0,294 × 5 = **+15,6 %**; 50 % EE. UU. = 0,5 × 20 + 0,5 × 5 = **+12,5 %**.
4. Reducir el peso de EE. UU. protege si allí está el problema y cuesta si EE. UU. sigue liderando. Es una apuesta en ambos sentidos.
`
    },
    {
      t: "40 años de diversificación",
      p: `
Según justETF, en 40 años el MSCI World rindió un 7,6 % real anual en yenes y Japón un 3,8 %. ¿Por cuánto multiplicó su dinero real cada inversor? ¿Qué te dice sobre el riesgo de concentrarse en un solo país, por atractivo que parezca?
`,
      s: `
1. **MSCI World**: 1,076⁴⁰ ≈ **18,7 veces**.
2. **Japón**: 1,038⁴⁰ ≈ **4,4 veces**.
3. El inversor global, que también tenía mucho Japón en 1989, multiplicó su dinero real por más de cuatro veces más que el inversor solo en Japón.
4. Ningún país, ni siquiera el mayor del mundo en un momento dado, garantiza buenos resultados durante décadas. Diversificar globalmente es la forma de no depender de acertar cuál será.
`
    }
  ],
  errores: [
    "Pensar que «indexado» significa «a salvo de burbujas».",
    "Sustituir el índice mundial por un solo país porque «siempre ha ido mejor».",
    "Abandonar la indexación tras una década mala del mercado, cuando cualquier alternativa también la habría sufrido.",
    "Adoptar índices alternativos sin entender que son apuestas de factor con más costes.",
    "Esperar del indexado la rentabilidad histórica cuando las valoraciones de partida son altas."
  ],
  test: [
    { p: "¿Cuánto llegó a pesar Japón en el MSCI World a finales de los ochenta?", o: ["Un 10 %", "En torno al 40 %", "Un 70 %"], c: 1, e: "Hoy pesa en torno al 5–6 %." },
    { p: "¿Cuánto tardó el Nikkei en superar su máximo de 1989?", o: ["5 años", "18 años", "34 años"], c: 2, e: "Lo superó en febrero de 2024." },
    { p: "Con EE. UU. al 70,6 % del MSCI World, si EE. UU. cae un 30 % y el resto un 10 %, el índice cae…", o: ["Un 10 %", "Un 24,1 %", "Un 30 %"], c: 1, e: "0,706 × 30 + 0,294 × 10." },
    { p: "¿Qué explica la mayor parte de la ventaja histórica de los índices fundamentales?", o: ["La habilidad de sus creadores", "Su exposición a valor y empresas pequeñas", "Sus menores costes"], c: 1, e: "Son, en la práctica, inclinaciones a factores." },
    { p: "¿Cuál es la conclusión práctica de las críticas a la indexación?", o: ["Abandonarla", "Mantener un núcleo indexado global y, si acaso, hacer ajustes moderados y conscientes", "Invertir solo en EE. UU."], c: 1, e: "Ninguna alternativa ha batido de forma fiable a un indexado global barato después de costes." }
  ],
  lecturas: [
    { t: "Japan: the ultimate stock market crash", a: "justETF", n: "El caso japonés con datos y gráficos." },
    { t: "Fundamental Indexation: Heralding a New Era in Investing or Beating a Dead Horse?", a: "André Perold, Financial Analysts Journal, 2007", n: "La réplica a los índices fundamentales." },
    { t: "Index Funds and the Future of Corporate Governance", a: "Lucian Bebchuk y Scott Hirst, Columbia Law Review, 2019" },
    { t: "The Bogleheads' Guide to Investing", a: "Larimore, Lindauer y LeBoeuf", n: "Defensa práctica de la indexación, con respuesta a sus críticas." }
  ]
});


var META = {
  id: 3,
  titulo: "Inversión indexada",
  intro: `
Los bloques 1 y 2 explicaron qué activos hay y cómo se combinan. Este bloque trata de la forma más sencilla y barata de tenerlos: **comprar el mercado entero con fondos indexados**. Empieza por la idea y su historia, sigue con por qué funciona (la aritmética y los costes), por qué es tan difícil elegir a los gestores que baten al mercado, qué índice elegir y qué efectos tiene la indexación sobre el propio mercado. Después baja a la práctica: cómo construir la cartera con fondos disponibles en España, cuándo invertir, si hacerlo uno mismo o delegarlo y cómo evitar el mayor riesgo de todos, que eres tú. Termina con las críticas serias a la indexación y lo que queda en pie tras ellas.

La idea que recorre el bloque: **la rentabilidad del mercado es incierta, los costes son seguros y el comportamiento lo decide casi todo**. Un indexado no te promete batir al mercado; te garantiza no quedarte muy por debajo de él, siempre que lo mantengas.
`,
  foto: {
    titulo: "La foto del momento",
    fecha: "13 nov 2026",
    md: `
| Indicador | Dato | Comentario |
|---|---|---|
| Peso de EE. UU. en el MSCI World | 70,6 % (agosto de 2026) | Japón 5,7 %, Reino Unido 3,5 % |
| Peso de las 10 mayores empresas | Más del 25 % del MSCI World; casi el 40 % del S&P 500 | La mayor concentración del S&P 500 desde mediados de los sesenta |
| Fondos activos de bolsa global en euros por debajo de su índice a 10 años | 97,7 % | SPIVA Europa, junio de 2026 |
| Fondos de bolsa española por debajo de su índice | 98 % en el primer semestre de 2026; 97,6 % a 10 años | Solo sobrevivió el 50,6 % en 10 años |
| Cuota pasiva en los fondos de EE. UU. | En torno al 55 % (finales de 2025) | Superó a la activa a finales de 2023 |
| Europa: bolsa activa frente a pasiva | 4,1 frente a 3,4 billones de euros | Pero los pasivos captaron casi el doble de dinero nuevo en el primer trimestre de 2026 |
| Brecha entre la rentabilidad de los fondos y la de sus inversores (EE. UU.) | 1,2 puntos al año | Morningstar, Mind the Gap 2026 |
| Indexado al MSCI World más barato en España | 0,12 % de gastos corrientes | Fidelity e iShares |
| Mayor roboadvisor español | 5.760 millones de euros, 162.000 clientes | Indexa Capital, julio de 2026 |
`
  },
  glosario: [
    { t: "Fondo indexado", d: "Fondo que copia la composición de un índice en lugar de elegir valores." },
    { t: "Gestión pasiva", d: "Estrategia de replicar un índice al menor coste, sin intentar batirlo." },
    { t: "Gestión activa", d: "Estrategia que intenta batir a un índice eligiendo valores o momentos." },
    { t: "Réplica física", d: "El fondo compra las acciones del índice (todas o una muestra)." },
    { t: "Réplica sintética", d: "El fondo obtiene la rentabilidad del índice mediante un contrato (swap) con un banco." },
    { t: "Préstamo de valores", d: "El fondo presta acciones a cambio de una comisión, con garantías, para compensar costes." },
    { t: "Diferencia de seguimiento (tracking difference)", d: "Cuánto rinde un fondo por debajo o por encima de su índice en un periodo. Es su coste real." },
    { t: "Error de seguimiento (tracking error)", d: "Volatilidad de la diferencia entre el fondo y su índice. Mide la fidelidad." },
    { t: "Rotación", d: "Porcentaje de la cartera que se compra y vende en un año. Genera costes no incluidos en el TER." },
    { t: "Closet indexer (indexado encubierto)", d: "Fondo que cobra como activo pero tiene una cartera casi igual a su índice." },
    { t: "Aritmética de la gestión activa", d: "Argumento de Sharpe (1991): antes de costes, la media activa es el mercado; después de costes, menos." },
    { t: "Hipótesis del mercado eficiente", d: "Los precios incorporan la información disponible, lo que hace muy difícil batir al mercado de forma sistemática." },
    { t: "SPIVA", d: "Informes de S&P que comparan los fondos activos con sus índices, incluidos los fondos desaparecidos." },
    { t: "Sesgo de supervivencia", d: "Error de comparar solo con los fondos que siguen existiendo, ignorando los cerrados." },
    { t: "Comisión de éxito", d: "Porcentaje de los beneficios que cobra un fondo por encima de un objetivo." },
    { t: "Retrocesión", d: "Parte de la comisión de un fondo que la gestora paga al banco o distribuidor que lo vende." },
    { t: "Persistencia", d: "Tendencia de un fondo a repetir sus buenos (o malos) resultados." },
    { t: "Tasa de falsos descubrimientos", d: "Técnica estadística para estimar cuántos resultados aparentemente buenos se deben al azar." },
    { t: "Fondos incubados", d: "Fondos lanzados en pequeño, de los que solo se comercializan los que tienen suerte." },
    { t: "Modelo de Berk y Green", d: "El dinero que llega a los gestores con talento hace crecer el fondo hasta eliminar su alfa neto." },
    { t: "Rentabilidad ponderada por el tiempo", d: "Rentabilidad del fondo, independiente de cuándo entra o sale el dinero." },
    { t: "Rentabilidad ponderada por el dinero", d: "Rentabilidad del inversor (TIR), que depende de cuándo aportó y retiró." },
    { t: "Capitalización ajustada por capital flotante", d: "Valor en bolsa de las acciones que se pueden comprar realmente, excluyendo participaciones estables." },
    { t: "MSCI World", d: "Índice de grandes y medianas empresas de 23 países desarrollados." },
    { t: "MSCI ACWI", d: "MSCI World más los países emergentes." },
    { t: "Índice IMI / all cap", d: "Índice que incluye también las empresas pequeñas." },
    { t: "Índice de precio / neto / bruto", d: "Sin dividendos / con dividendos tras retenciones / con dividendos íntegros." },
    { t: "Número efectivo de empresas", d: "1 / Σ wᵢ²: cuántas empresas iguales darían la misma concentración." },
    { t: "Pesos iguales (equal weight)", d: "Índice que da el mismo peso a cada empresa. Implica una inclinación a pequeñas y valor." },
    { t: "Ponderación por PIB", d: "Pesar cada país según el tamaño de su economía, no de su bolsa." },
    { t: "Índice fundamental", d: "Índice ponderado por ventas, beneficios o dividendos." },
    { t: "Proveedor de índices", d: "Empresa que diseña y calcula índices (MSCI, FTSE Russell, S&P)." },
    { t: "Consistencia macroeconómica", d: "Propiedad de la cartera de mercado: es la única que todos los inversores pueden tener a la vez." },
    { t: "Paradoja de Grossman y Stiglitz", d: "Un mercado perfectamente eficiente es imposible, porque nadie pagaría por analizar." },
    { t: "Efecto índice", d: "Subida de una acción al anunciarse su entrada en un índice." },
    { t: "Hipótesis de los mercados inelásticos", d: "Gabaix y Koijen: los flujos hacia la bolsa tienen un efecto multiplicador sobre su valor." },
    { t: "Propiedad común", d: "Situación en que los mismos grandes gestores son accionistas de empresas competidoras." },
    { t: "Free rider (gorrón)", d: "Quien se beneficia del trabajo de otros sin pagarlo; se dice de los indexados respecto a los activos." },
    { t: "Reparto de activos (asset allocation)", d: "División de la cartera entre bolsa, renta fija y liquidez. La decisión más importante." },
    { t: "Cartera de tres fondos", d: "Cartera indexada clásica: bolsa nacional, bolsa internacional y bonos." },
    { t: "Fondo de ciclo de vida (target date)", d: "Fondo que reduce la bolsa automáticamente al acercarse una fecha objetivo." },
    { t: "Cartera permanente", d: "Cartera de Harry Browne: 25 % en bolsa, bonos largos, oro y liquidez." },
    { t: "Traspaso", d: "Paso de dinero entre fondos de inversión sin tributar en España." },
    { t: "Clase de participación", d: "Versión de un mismo fondo con distinto coste, mínimo o canal de venta." },
    { t: "Fondo de acumulación", d: "Fondo que reinvierte los dividendos en lugar de repartirlos." },
    { t: "Núcleo y satélite", d: "Cartera con un núcleo indexado y una parte pequeña de apuestas separada." },
    { t: "Escalones de liquidez", d: "Separar el dinero según cuándo se va a necesitar: colchón, medio plazo, largo plazo." },
    { t: "Inversión de golpe (lump sum)", d: "Invertir toda una cantidad de una vez." },
    { t: "Promediar el coste (cost averaging)", d: "Repartir una cantidad en varias aportaciones iguales en el tiempo." },
    { t: "Media armónica", d: "Coste medio de las aportaciones fijas: siempre igual o menor que la media simple de precios." },
    { t: "Market timing", d: "Intentar entrar y salir del mercado en los momentos adecuados." },
    { t: "Value averaging", d: "Ajustar las aportaciones para que la cartera siga una senda de crecimiento fijada." },
    { t: "Aversión al arrepentimiento", d: "Tendencia a evitar decisiones que podríamos lamentar después." },
    { t: "Roboadvisor", d: "Gestor automatizado que invierte en carteras de fondos indexados según un perfil de riesgo." },
    { t: "Custodia", d: "Servicio de guardar los valores o fondos, a veces con comisión propia." },
    { t: "Coste total", d: "Suma de comisión de gestión, custodia y gastos de los fondos." },
    { t: "Asesoramiento independiente", d: "Según MiFID II, el que no puede quedarse retrocesiones de los productos que recomienda." },
    { t: "Advisor's Alpha", d: "Estimación de Vanguard del valor que añade un buen asesor, sobre todo por evitar errores de conducta." },
    { t: "Brecha de comportamiento", d: "Diferencia entre la rentabilidad de un fondo y la de sus inversores." },
    { t: "Aversión miope a las pérdidas", d: "Mirar las inversiones con mucha frecuencia y sufrir de más por pérdidas temporales." },
    { t: "Efecto disposición", d: "Tendencia a vender antes lo que ha subido que lo que ha bajado." },
    { t: "Exceso de confianza", d: "Sobrestimar la propia habilidad; lleva a operar demasiado." },
    { t: "Declaración de política de inversión", d: "Documento con objetivos, reparto y reglas de la cartera, decidido en frío." },
    { t: "Burbuja pasiva", d: "Hipótesis de que el exceso de inversión indexada distorsiona los precios y hará el ajuste más brusco." },
    { t: "Concentración del índice", d: "Peso de las mayores empresas o países en un índice." }
  ],
  fuentes: [
    { t: "S&P Dow Jones Indices: SPIVA Europe Mid-Year 2026", u: "https://www.spglobal.com/spdji/en/documents/spiva/spiva-europe-mid-year-2026.pdf" },
    { t: "S&P Dow Jones Indices: SPIVA Europe Year-End 2025", u: "https://www.spglobal.com/spdji/en/spiva/article/spiva-europe-year-end-2025/" },
    { t: "S&P Dow Jones Indices: SPIVA U.S. Mid-Year 2026", u: "https://www.spglobal.com/spdji/en/documents/spiva/spiva-us-mid-year-2026.pdf" },
    { t: "Morningstar: Active vs. Passive Barometer (2026)", u: "https://www.morningstar.com/business/insights/blog/active-vs-passive-investing" },
    { t: "Funds Society: barómetro activo/pasivo de Morningstar, junio de 2026", u: "https://www.fundssociety.com/en/?p=307620" },
    { t: "Morningstar: tendencias del sector de gestión (2026)", u: "https://www.morningstar.com/business/insights/blog/asset-management-industry-trends?con=15949" },
    { t: "Walnut: estadísticas de inversión pasiva y activa (2026)", u: "https://walnutinvest.com/stats/passive-vs-active-investing-statistics" },
    { t: "Morningstar: Mind the Gap 2026", u: "https://www.morningstar.com/en-us/business/insights/research/mind-the-gap" },
    { t: "Morningstar Australia: resumen de Mind the Gap 2026", u: "https://www.morningstar.com.au/insights/funds/KUFWIAUIQRE5PL4PJUSO6DAP3E/are-you-one-investors-that-left-money-table" },
    { t: "Advisor Perspectives: volatilidad y brecha del inversor", u: "https://www.advisorperspectives.com/commentaries/2026/08/21/what-advisors-can-learn-from-the-investor-return-gap" },
    { t: "Advisor Perspectives: costes y brecha (Mind the Gap 2026)", u: "https://www.advisorperspectives.com/commentaries/2026/08/07/mind-the-gap-etf-investors-missed-3-8-trillion" },
    { t: "Universidad de Arkansas: crítica a la medida de la brecha", u: "https://walton.uark.edu/insights/posts/do_investors_really_lose_fund_returns_to_bad_timing.php" },
    { t: "GuruFocus: resultado de la apuesta de Buffett", u: "https://www.gurufocus.com/news/622985" },
    { t: "Motley Fool: la apuesta de Buffett año a año", u: "https://www.fool.com/retirement/2018/01/08/warren-buffett-just-won-a-10-year-million-dollar-b.aspx" },
    { t: "EBC: la apuesta de Buffett y 2008", u: "https://www.ebc.com/es/forex/la-historia-del-millon-de-dolares-de-buffett" },
    { t: "AlphaMaven / Institutional Investor: Protégé paga la apuesta", u: "https://www.alpha-maven.com/news/hedge-fund/protege-partners-pays-up-in-buffett-bet-institutionalinvestorcom" },
    { t: "Morningstar: los fondos que más riqueza destruyeron", u: "https://www.morningstar.com/funds/these-15-funds-cost-investors-billions-over-past-decade" },
    { t: "The Wealth Advisor: ARK, la familia que más riqueza destruyó", u: "https://www.thewealthadvisor.com/article/morningstar-calls-cathie-wood-worst-wealth-destroyer" },
    { t: "Morningstar: por qué los partícipes de ARKK siguen perdiendo", u: "https://sg.morningstar.com/sg/news/236131/why-arkk-investors-are-still-underwater.aspx" },
    { t: "Yahoo Finance: los flujos hacia ARK en 2021", u: "https://news.yahoo.com/cathie-wood-ark-invest-billion-dollar-losses-193437144.html" },
    { t: "Daily Maverick: pesos por país del MSCI World (agosto de 2026)", u: "https://www.dailymaverick.co.za/article/2026-08-26-just-how-top-heavy-are-global-equity-indices-today/" },
    { t: "MSCI: gestionar la concentración del índice", u: "https://www.msci.com/research-and-insights/blog-post/managing-benchmark-concentration-a-framework-for-asset-allocators" },
    { t: "MSCI: ponderación económica de países", u: "https://www.msci.com/research-and-insights/blog-post/economic-weighting-an-alternative-approach-to-country-allocation" },
    { t: "S&P DJI: Bajo la sombra de los gigantes (concentración del S&P 500)", u: "https://www.spglobal.com/spdji/es/documents/research/research-in-the-shadows-of-giants-es.pdf" },
    { t: "MarketScreener: Wall Street frente al resto del mundo", u: "https://es.marketscreener.com/noticias/batiburrillo-wall-street-contra-el-resto-del-mundo-ce7f5cd8da8bf027" },
    { t: "AJ Bell: concentración del MSCI World", u: "https://www.ajbell.co.uk/news/rise-us-dominance-and-risk-concentration" },
    { t: "If You Spent: EE. UU. frente al resto y previsiones de Vanguard", u: "https://news.ifyouspent.com/es/news/why-your-portfolio-is-us-heavy" },
    { t: "Eco3min: el peso de EE. UU. en la bolsa mundial", u: "https://eco3min.fr/en/us-share-world-equity-market-history/" },
    { t: "justETF: el crash japonés", u: "https://www.justetf.com/en-be/academy/japan-stock-market-crash.html" },
    { t: "Capital Group: Japón en el MSCI World", u: "https://meetings.capitalgroup.com/advisor/insights/articles/japan-stock-market-rally.html" },
    { t: "Vested Finance: la burbuja japonesa", u: "https://vestedfinance.com/in/globed/understanding-us-stocks/understanding-us-stock-market/the-world-almost-had-a-different-leader/" },
    { t: "Diario Financiero (Bloomberg): Tesla entra en el S&P 500", u: "https://www.df.cl/empresas/multinacionales/tesla-ingresa-al-s-p-500-con-mal-pie-y-registra-caida-en-operaciones" },
    { t: "Electrive: anuncio de la entrada de Tesla", u: "https://www.electrive.com/es/2020/11/17/tesla-se-incorporara-a-la-bolsa-sp-500-en-diciembre" },
    { t: "Expansión: Tesla entra con todas sus acciones", u: "https://expansion.mx/mercados/2020/12/01/tesla-entrara-todas-acciones-indice-sp-afectara-mercado" },
    { t: "MarketBeat: propiedad pasiva del S&P 500 en 2020", u: "https://www.marketbeat.com/articles/wall-street-braces-for-trading-surge-as-tesla-enters-sp-500-2020-12-17" },
    { t: "Vanguard: Cost averaging: Invest now or temporarily hold your cash? (2023)", u: "https://corporate.vanguard.com/content/dam/corp/research/pdf/cost_averaging_invest_now_or_temporarily_hold_your_cash.pdf" },
    { t: "SmartAsset: resumen del estudio de Vanguard", u: "https://smartasset.com/investing/lump-sum-investing-research" },
    { t: "Rankia: mejores fondos indexados Vanguard en España (2026)", u: "https://www.rankia.com/blog/fondos-inversion/5049699-mejores-fondos-indexados-vanguard" },
    { t: "Finect: fondos indexados al MSCI World (2026)", u: "https://www.finect.com/usuario/davidcarmona/articulos/3-fondos-como-el-fidelity-msci-world-que-ganan-hasta-un-12-a-5-anos" },
    { t: "Bankkers: fondos indexados en España (2026)", u: "https://bankkers.com/inversion/indexados/" },
    { t: "Rankia: fondos monetarios 2026", u: "https://www.rankia.com/blog/fondos-inversion/filtrar/fondos-de-inversion" },
    { t: "Finect: los diez mayores fondos españoles en 2025", u: "https://www.finect.com/usuario/avillanuevae/articulos/ninguno-de-los-10-fondos-espanoles-con-mas-patrimonio-superan-el-5-de-rentabilidad-en-2025" },
    { t: "Finect: comparativa de roboadvisores (2026)", u: "https://www.finect.com/roboadvisors" },
    { t: "Rankia: CaixaBank Smart Money, costes frente a roboadvisores", u: "https://www.rankia.com/blog/etf/5476613-caixabank-smart-money-analisis-opinion" },
    { t: "Rankia: mejores roboadvisores 2026", u: "https://rankia.com/blog/fondos-inversion/4328390-mejores-robo-advisors-espana" },
    { t: "Finect: planes de pensiones indexados de roboadvisores", u: "https://www.finect.com/usuario/Kaloxa/articulos/planes-pensiones-roboadvisors-cuales-mas-baratos" },
    { t: "Bolsamanía: la CNMV y los costes de los fondos europeos", u: "https://www.bolsamania.com/noticias/mercados/economiafinanzas--buenaventura-avisa-de-que-los-fondos-europeos-tienen-un-problema-de-costes-frente-a-los-de-eeuu--18232060.html" }
  ]
};

META.lecciones=LECCIONES;
CURSO.registrar(META);
})();
