/* Bloque 4. Generado a partir de src/b4/ */
(function(){
var LECCIONES=[];

/* ---- l01.js ---- */
LECCIONES.push({
  id: "b4-l1", num: "4.1",
  titulo: "Analizar empresas: para qué sirve y por qué es tan difícil",
  resumen: "Analizar una empresa es estimar cuánto vale a partir de su negocio y sus cuentas, y compararlo con lo que pide la bolsa. Es posible y puede ser rentable, pero el punto de partida es duro: la mayoría de las acciones individuales rinden menos que las letras del Tesoro y un 4 % de ellas explica toda la riqueza creada por la bolsa estadounidense. Por eso, si eliges acciones, hazlo con método, con poco peso y sin dejar de diversificar.",
  esencial: `
**Qué es el análisis fundamental.** Comprar una acción es comprar una parte de un negocio (lección 1.2). Analizarla es responder, por este orden, a cuatro preguntas:
1. **¿Qué hace la empresa y cómo gana dinero?** Quién le paga, por qué y cuánto le cuesta servirle.
2. **¿Lo hace bien?** Lo dicen sus cuentas: ventas, márgenes, deuda y, sobre todo, caja (lecciones 4.2 a 4.5).
3. **¿Puede seguir haciéndolo?** Depende de sus ventajas frente a la competencia (lección 4.6).
4. **¿Cuánto pagas por ello?** Una gran empresa comprada demasiado cara es una mala inversión (lecciones 4.7 y 4.8).

Si después de todo eso el precio queda claramente por debajo de lo que estimas que vale, tienes un **margen de seguridad**: la idea central de Benjamin Graham, que estudiaremos en el bloque 7.

**Dónde está la información.** Todo lo que necesitas es público y gratuito:
- **CNMV** (cnmv.es): cuentas anuales auditadas, informes semestrales y comunicaciones de las empresas españolas.
- **Web de relaciones con inversores** de cada empresa: presentaciones de resultados, informe anual y grabaciones de las conferencias con analistas.
- **EDGAR** (sec.gov) para empresas estadounidenses: informes anuales (10-K) y trimestrales (10-Q).

**Por qué es difícil.** Hendrik Bessembinder estudió todas las acciones de la bolsa estadounidense desde 1926 (unas 26.000) y encontró que:
- el **57 %** rindió menos en toda su vida en bolsa que las letras del Tesoro a un mes;
- un **4 %** de las empresas explica **toda** la riqueza neta creada por la bolsa; el 96 % restante, en conjunto, igualó a las letras.

La bolsa sube porque unas pocas empresas suben muchísimo. Con pocas acciones, lo más probable es que no tengas ninguna de esas pocas.

**Qué hacer con eso**
- Mantén un **núcleo indexado** (bloque 3) y deja las acciones individuales como **satélite** pequeño.
- Si eliges acciones, ten varias, analízalas con método y escribe por qué las compras.
- **Deja correr a las ganadoras** mientras la tesis siga en pie: son las que pagan los errores.
`,
  entender: `
#### Asimetría: por qué la mayoría de acciones pierde aunque la bolsa gane
La rentabilidad de una acción a largo plazo se parece a una distribución **logarítmico-normal**: lo máximo que puedes perder es el 100 %, pero lo que puedes ganar no tiene techo. Con mucha volatilidad, la media se aleja mucho de la mediana.

$$ mediana de la riqueza tras T años = exp(m·T)   con   m = ln(1 + μ) − σ² / 2

Una acción típica con una rentabilidad esperada del 8 % anual y una volatilidad del 45 % tiene m ≈ −2,4 % anual. En 20 años:
| | Valor de 1 € |
|---|---|
| Media | 4,66 € |
| Mediana | 0,62 € |
| Probabilidad de batir a letras al 3 % | ≈ 30 % |
| Probabilidad de perder dinero | ≈ 60 % |

La media es alta porque unas pocas acciones multiplican su valor muchas veces. Un índice que las tiene todas captura esa media; una cartera de cinco acciones, lo más probable es que se quede cerca de la mediana.

#### Las ventajas que puedes tener (y las que no)
| Tipo de ventaja | ¿La tiene un particular? |
|---|---|
| **Informativa**: saber algo que el mercado no sabe | Prácticamente no, y usar información privilegiada es delito |
| **Analítica**: interpretar mejor la información pública | Posible, con mucho trabajo y en pocos sectores |
| **Conductual**: aguantar más plazo, no vender por pánico | Sí: es la más realista |
| **Estructural**: invertir donde los grandes no pueden | Sí: en empresas pequeñas, poco seguidas por analistas (lección 4.10) |

#### Qué hay en las cuentas anuales
1. **Informe de gestión**: lo que la dirección cuenta del negocio, riesgos y estrategia.
2. **Estados financieros**: cuenta de resultados, balance, estado de flujos de efectivo y cambios en el patrimonio.
3. **Memoria (notas)**: el detalle. Aquí están la deuda por vencimientos, los arrendamientos, las operaciones con partes vinculadas y los litigios. Muchas señales de alarma se esconden en las notas, no en los titulares.
4. **Informe del auditor**: si tiene **salvedades** o «párrafos de énfasis», léelos con atención.

#### Cuánto tiempo lleva
Un primer análisis serio de una empresa nueva puede llevar entre 10 y 30 horas: leer dos o tres informes anuales, las últimas presentaciones y alguna conferencia de resultados. Después, seguirla cuesta unas horas por trimestre. Por eso pocas personas pueden seguir bien más de 10–20 empresas.
`,
  fondo: `
#### 1. Tres formas de analizar acciones
- **Análisis fundamental**: estima el valor a partir del negocio y sus flujos de caja. Es el objeto de este bloque.
- **Análisis técnico**: busca patrones en los precios y volúmenes. La evidencia de que funcione de forma sostenida, una vez descontados costes, es muy débil.
- **Análisis cuantitativo**: aplica reglas sistemáticas sobre muchas acciones (los factores de la lección 2.8). Es fundamental en sus datos, pero estadístico en su método.

#### 2. Graham y el señor Mercado
Benjamin Graham (*El inversor inteligente*, 1949) describió el mercado como un socio de humor cambiante que cada día te ofrece comprar o vender su parte a un precio distinto. No tienes que hacerle caso: solo aprovecharlo cuando su precio sea absurdo. De ahí sale el **margen de seguridad**: comprar solo cuando el precio esté bastante por debajo del valor estimado, para que los errores de estimación (que los habrá) no te cuesten dinero.

#### 3. Bessembinder: los datos completos
- **EE. UU., 1926–2016**: de unas 26.000 acciones, 1.092 (el 4,3 %) generaron los 35 billones de dólares de riqueza creada por encima de las letras del Tesoro. Solo 90 empresas (menos del 0,4 %) aportaron más de la mitad. El 57,4 % tuvo una rentabilidad de toda su vida en bolsa inferior a la de las letras.
- **Mundo, 1990–2020**: con unas 64.000 empresas de más de 40 países, la concentración es aún mayor: en torno a un **2,4 %** explica toda la riqueza neta creada; casi el 58 % destruyó riqueza.

La explicación es la **asimetría positiva** (*skewness*) de las rentabilidades compuestas: cuanto más volátil es una acción y más largo el plazo, más se aleja su mediana de su media.

#### 4. Consecuencias para construir una cartera de acciones
- Una cartera **muy concentrada** tiene alta probabilidad de quedarse por debajo del índice, aunque su rentabilidad esperada sea parecida. No es que elegir sea inútil: es que la distribución juega en contra.
- Diversificar no solo reduce la volatilidad (lección 2.4): también **aumenta la probabilidad** de tener alguna de las grandes ganadoras.
- Vender pronto las ganadoras para «asegurar beneficios» corta precisamente la cola derecha que hace rentable a la bolsa. El sesgo contrario, mantener las perdedoras esperando recuperar, se llama **efecto disposición** (lección 3.9).

#### 5. ¿Tiene sentido entonces analizar empresas?
Sí, con tres condiciones:
1. **Un tamaño acotado**: que tu satélite sea lo bastante pequeño para que un error no comprometa tus objetivos.
2. **Un método escrito**: preguntas fijas, cifras clave y una tesis que puedas comprobar después.
3. **Medir el resultado** frente al índice que tendrías en su lugar, incluyendo costes, impuestos y tu tiempo.

Además, entender cómo funcionan las empresas te ayuda a todo lo demás: a no asustarte con una noticia, a entender qué hay dentro de tu fondo indexado y a leer la macro del bloque 5.
`,
  caso: {
    titulo: "Bessembinder: el 4 % que hace subir la bolsa",
    md: `
En 2018, Hendrik Bessembinder, profesor de la Universidad Estatal de Arizona, publicó en el *Journal of Financial Economics* un artículo de título aparentemente inocente: «¿Baten las acciones a las letras del Tesoro?». La respuesta sorprendió a casi todo el mundo.

Analizó la rentabilidad de toda la vida en bolsa de cada acción estadounidense desde 1926 hasta 2016:
- **El 57,4 %** de las acciones tuvo una rentabilidad, con dividendos incluidos, **inferior a la de las letras del Tesoro a un mes**. Más de la mitad, de hecho, perdió dinero.
- **1.092 empresas (el 4,3 %)** explican toda la riqueza neta creada por la bolsa: unos 35 billones de dólares por encima de lo que habrían dado las letras.
- **90 empresas** aportan más de la mitad. Entre las mayores creadoras de riqueza estaban Apple, ExxonMobil, Microsoft, Alphabet o Amazon.

Él mismo cuenta que estuvo a punto de no publicarlo porque creía que todo el mundo ya lo sabía. Sus actualizaciones posteriores, con datos hasta 2019, 2022 y del resto del mundo, confirmaron el resultado: en los mercados internacionales la concentración es incluso mayor.

> Lo que enseña: la bolsa en conjunto es una gran inversión, pero una acción cualquiera no. Si eliges acciones, la diversificación y la paciencia con las ganadoras importan tanto como el análisis. Y para la mayoría del patrimonio, el índice que contiene a todas las ganadoras sigue siendo difícil de batir.
`
  },
  ejercicios: [
    {
      t: "La mediana de una acción volátil",
      p: `
Una acción tiene una rentabilidad esperada del 8 % anual y una volatilidad del 45 %. Suponiendo que sus rentabilidades logarítmicas son normales, calcula la mediana de lo que vale 1 € dentro de 20 años y la probabilidad de que bata a unas letras al 3 % anual.
`,
      s: `
1. **Deriva logarítmica**: m = ln(1,08) − 0,45² / 2 = 0,0770 − 0,1013 = **−0,0243** (−2,4 % anual).
2. **Mediana a 20 años**: exp(−0,0243 × 20) = **0,62 €**. La media, en cambio, es 1,08²⁰ = **4,66 €**.
3. **Umbral de las letras**: 1,03²⁰ = 1,806 → ln = 0,591.
4. **Probabilidad**: z = (0,591 − (−0,486)) / (0,45 × √20) = 1,077 / 2,012 = 0,535 → P(batir) = 1 − Φ(0,535) ≈ **30 %**.
5. Con una sola acción así, lo más probable es quedar por debajo de las letras, aunque la media sea muy buena.
`
    },
    {
      t: "Dejar correr a las ganadoras",
      p: `
Compras 20 acciones con el mismo importe. A los 10 años, una vale 20 veces lo invertido, cuatro se han duplicado, diez valen lo mismo y cinco han quebrado. ¿Por cuánto se ha multiplicado la cartera y qué rentabilidad anual supone? ¿Y si hubieras vendido la gran ganadora cuando se duplicó?
`,
      s: `
1. **Valor final**: (20 + 4 × 2 + 10 × 1 + 5 × 0) / 20 = 38 / 20 = **1,9 veces**.
2. **Rentabilidad anual**: 1,9^(1/10) − 1 ≈ **6,6 %**.
3. **Vendiendo la ganadora al duplicarse**: (2 + 8 + 10 + 0) / 20 = **1,0 veces**: diez años sin ganar nada.
4. Una sola acción explica toda la diferencia. Es la asimetría de Bessembinder a pequeña escala.
`
    },
    {
      t: "Lo que cuesta un satélite que lo hace mal (o bien)",
      p: `
Tienes 100.000 € a 20 años: un 90 % en un indexado que rinde un 7 % anual y un 10 % en acciones elegidas por ti. Calcula el valor final si tus acciones rinden 5 puntos menos que el índice y si rinden 5 puntos más, y compáralo con todo indexado.
`,
      s: `
1. **Todo indexado**: 100.000 × 1,07²⁰ ≈ **386.968 €**.
2. **Satélite 5 puntos peor**: rentabilidad total 0,9 × 7 % + 0,1 × 2 % = 6,5 % → 100.000 × 1,065²⁰ ≈ **352.365 €**.
3. **Satélite 5 puntos mejor**: 0,9 × 7 % + 0,1 × 12 % = 7,5 % → ≈ **424.785 €**.
4. Con un satélite del 10 %, ni el acierto ni el error cambian tu vida, pero sí aprendes. Ese es el tamaño razonable mientras no tengas un historial propio que lo justifique.
`
    }
  ],
  errores: [
    "Concentrar gran parte del patrimonio en cinco o seis acciones porque «las conoces bien».",
    "Vender las acciones que suben para «asegurar beneficios» y mantener las que caen esperando recuperar.",
    "Comprar por una noticia, un vídeo o una recomendación sin haber leído las cuentas.",
    "Leer solo los titulares de resultados y no la memoria, donde están los detalles importantes.",
    "No comparar nunca el resultado de tus acciones con el del índice que podrías haber tenido."
  ],
  test: [
    { p: "Según Bessembinder, ¿qué proporción de las acciones estadounidenses (1926–2016) rindió menos que las letras del Tesoro?", o: ["En torno al 10 %", "En torno al 57 %", "En torno al 90 %"], c: 1, e: "El 57,4 %, con dividendos incluidos." },
    { p: "¿Qué porcentaje de empresas explica toda la riqueza neta creada por la bolsa estadounidense desde 1926?", o: ["Un 4 %", "Un 25 %", "Un 50 %"], c: 0, e: "1.092 empresas de unas 26.000." },
    { p: "¿Por qué la mediana de una acción muy volátil puede ser negativa aunque su media sea positiva?", o: ["Por los costes", "Por la asimetría de las rentabilidades compuestas: la volatilidad resta σ²/2 a la deriva", "Porque los datos son erróneos"], c: 1, e: "m = ln(1 + μ) − σ²/2." },
    { p: "¿Qué ventaja es la más realista para un inversor particular?", o: ["La informativa", "La conductual y la estructural", "La de velocidad"], c: 1, e: "Paciencia y empresas pequeñas que los grandes no pueden comprar." },
    { p: "¿Dónde se publican las cuentas anuales de las empresas cotizadas españolas?", o: ["En la CNMV y en sus webs de inversores", "Solo en la prensa", "No son públicas"], c: 0, e: "Y en EDGAR (SEC) para las estadounidenses." }
  ],
  lecturas: [
    { t: "El inversor inteligente", a: "Benjamin Graham", n: "El clásico del análisis fundamental. Mejor la edición comentada por Jason Zweig." },
    { t: "Do Stocks Outperform Treasury Bills?", a: "Hendrik Bessembinder, Journal of Financial Economics, 2018", n: "Gratuito en SSRN." },
    { t: "Un paso por delante de Wall Street", a: "Peter Lynch", n: "Cómo un particular puede encontrar buenas empresas. Ameno y práctico." },
    { t: "The Little Book of Valuation", a: "Aswath Damodaran", n: "La valoración explicada en corto por el profesor de referencia." },
    { t: "Valuation: Measuring and Managing the Value of Companies", a: "Koller, Goedhart y Wessels (McKinsey)", n: "El manual profesional. Para profundizar en las lecciones 4.5 y 4.8." }
  ]
});


/* ---- l02.js ---- */
LECCIONES.push({
  id: "b4-l2", num: "4.2",
  titulo: "La cuenta de resultados: de las ventas al beneficio por acción",
  resumen: "La cuenta de resultados cuenta, escalón a escalón, cuánto vende una empresa y cuánto se le queda. Cada margen responde a una pregunta distinta: el bruto, a cuánto vale lo que vende; el operativo, a lo eficiente que es; el neto, a lo que queda para el accionista. Inditex lo resume bien: de cada 100 € que vendió en 2025 se quedó 58 de margen bruto, 20 de resultado operativo y casi 16 de beneficio.",
  esencial: `
**La escalera de la cuenta de resultados**
| Escalón | Qué resta | Qué te dice |
|---|---|---|
| **Ventas** (cifra de negocio) | — | Cuánto factura |
| − Coste de lo vendido → **Margen bruto** | Lo que cuesta fabricar o comprar lo que vende | Cuánto vale su producto por encima de su coste |
| − Gastos de explotación → **EBITDA** | Personal, logística, marketing… | Lo que genera la operación antes de amortizar |
| − Amortizaciones → **EBIT** (resultado de explotación) | El desgaste de lo invertido | El beneficio del negocio en sí |
| ± Resultado financiero → **BAI** | Intereses de la deuda e ingresos de la caja | Cuánto pesa la financiación |
| − Impuestos (y minoritarios) → **Beneficio neto** | | Lo que es de los accionistas |
| ÷ Número de acciones → **BPA** | | El beneficio que corresponde a cada acción |

**Inditex en 2025** (ejercicio cerrado el 31 de enero de 2026), en millones de euros:
| Partida | Importe | Sobre ventas |
|---|---|---|
| Ventas | 39.864 | 100 % |
| Margen bruto | 23.222 | 58,3 % |
| EBITDA | 11.267 | 28,3 % |
| EBIT | 7.997 | 20,1 % |
| Beneficio neto | 6.220 | 15,6 % |

**Tres hábitos para leerla bien**
1. **Mira márgenes, no solo cifras**: que las ventas suban un 10 % no dice nada si el margen cae.
2. **Mira la tendencia**: cinco o diez años dicen más que uno. Un margen estable y alto es señal de una buena posición competitiva (lección 4.6).
3. **Separa lo recurrente de lo extraordinario**: ventas de activos, multas o reestructuraciones distorsionan un año. Las empresas publican cifras «ajustadas»; úsalas con cuidado y compara siempre con las oficiales.

**El beneficio no es caja.** La cuenta de resultados reconoce ventas y gastos cuando se producen, no cuando se cobran o se pagan. Por eso siempre hay que contrastarla con el estado de flujos de efectivo (lección 4.4).
`,
  entender: `
#### Qué mide cada margen
- **Margen bruto**: poder de precio y estructura del negocio. El software puede superar el 70 %; un supermercado ronda el 25 %. Compara dentro del mismo sector.
- **Margen EBITDA**: útil para comparar empresas con distinta política de amortización o deuda, pero engaña en negocios que necesitan invertir mucho, porque ignora el coste de reponer lo que se desgasta.
- **Margen EBIT**: el más fiable para comparar la rentabilidad del negocio.
- **Margen neto**: lo que queda tras intereses e impuestos. Puede ser alto por tener poca deuda o bajo por tener mucha, con el mismo negocio debajo.

#### El apalancamiento operativo
Si una empresa tiene muchos **costes fijos**, sus beneficios suben (y bajan) más deprisa que sus ventas. Se mide con el **grado de apalancamiento operativo**:

$$ GAO = variación % del EBIT / variación % de las ventas

Inditex en 2025: ventas +3,2 % y gastos de explotación +2,8 %, con un EBIT que subió un 5,9 %. GAO ≈ 5,9 / 3,2 ≈ **1,8**. Una empresa con un GAO de 4 ganaría un 40 % más si sus ventas suben un 10 %, y perdería un 40 % si bajan un 10 %.

#### Crecimiento: de dónde viene
Las ventas pueden crecer por tres razones muy distintas:
- **Orgánico**: más clientes, más precio o más volumen. Es el que importa.
- **Divisas**: Inditex creció un 3,2 % en euros, pero un **7 % a tipo de cambio constante**; la diferencia la explicó la fortaleza del euro.
- **Compras de otras empresas**: crecer comprando no es lo mismo que crecer vendiendo más (lección 4.9).

#### El efecto de la norma de arrendamientos (NIIF 16)
Desde 2019, los alquileres a largo plazo se contabilizan como un activo (derecho de uso) y una deuda. El alquiler **desaparece de los gastos de explotación** y se convierte en amortización e intereses. Resultado: el EBITDA de las empresas con muchas tiendas o aviones alquilados sube mucho sin que cambie nada en el negocio. Por eso Inditex informa también de sus flujos «ajustados por los pagos de arrendamientos». Al comparar EBITDA entre empresas o con años anteriores a 2019, comprueba cómo tratan los alquileres.

#### BPA básico, diluido y recompras
- El **BPA diluido** cuenta también las acciones que se emitirán por opciones sobre acciones, convertibles, etc. Es el que debes usar.
- Si una empresa recompra un 5 % de sus acciones, su BPA sube un 5,3 % aunque el beneficio no cambie. Si emite acciones, baja. Mira siempre si el BPA crece porque crece el negocio o porque cambia el número de acciones.
`,
  fondo: `
#### 1. El principio de devengo y por qué existe
La contabilidad registra los hechos económicos cuando ocurren (**devengo**), no cuando se mueve el dinero. Así, una máquina que dura diez años se reparte en diez años de amortización, y una venta a crédito cuenta como venta aunque se cobre en 90 días. Es más informativo que una contabilidad de caja, pero obliga a hacer **estimaciones** (vida útil, cobros dudosos, provisiones) que la dirección puede inclinar a su favor. Ahí empieza el análisis de la calidad del beneficio (lección 4.4).

#### 2. Reconocimiento de ingresos (NIIF 15)
La norma establece cinco pasos para reconocer una venta: identificar el contrato, las obligaciones, el precio, repartir el precio entre obligaciones y reconocer el ingreso cuando cada obligación se cumple. En negocios de suscripción, licencias o proyectos largos, el momento en que se reconoce el ingreso es una decisión con margen de interpretación. Muchos fraudes empiezan por adelantar ingresos.

#### 3. Medidas alternativas de rendimiento
EBITDA ajustado, beneficio subyacente, «caja generada»… No están definidas por las normas contables. Desde 2016, las directrices de ESMA obligan a las empresas europeas a **definirlas y conciliarlas** con las cifras oficiales. Usa esa conciliación: si los «ajustes» se repiten todos los años, no son extraordinarios. Warren Buffett y Charlie Munger criticaron durante décadas el uso del EBITDA como si las amortizaciones no fueran un coste real.

#### 4. Apalancamiento operativo, con su fórmula
Si las ventas son V, los costes variables son una fracción v de las ventas y los fijos son F:

$$ EBIT = V·(1 − v) − F      GAO = V·(1 − v) / EBIT = margen de contribución / EBIT

Cuanto más cerca está una empresa de su punto muerto (EBIT pequeño frente al margen de contribución), mayor es su GAO y más volátil su beneficio. Las aerolíneas, las acerías o los fabricantes de semiconductores tienen GAO altos; las empresas de servicios con costes variables, bajos. Es una de las razones por las que el beneficio de las empresas cíclicas se desploma en las recesiones (bloque 5).

#### 5. Costes que no salen como gasto (o casi)
- **Remuneración en acciones**: muchas tecnológicas pagan a sus empleados con acciones. Es un coste real (diluye al accionista), aunque las cifras ajustadas lo excluyan.
- **I+D capitalizada**: algunas empresas registran parte de su I+D como activo y la amortizan, lo que mejora el resultado presente.
- **Intereses capitalizados**: los intereses de financiar una obra pueden sumarse al coste del activo en lugar de restar del beneficio.

Ninguna de estas prácticas es ilegal; todas cambian la foto. Compara siempre empresas con criterios homogéneos.
`,
  caso: {
    titulo: "Inditex 2025 en una página",
    md: `
Inditex presentó el 11 de marzo de 2026 los resultados de su ejercicio 2025 (de febrero de 2025 a enero de 2026), el cuarto récord consecutivo:

| Partida (millones de €) | 2025 | Variación | Sobre ventas |
|---|---|---|---|
| Ventas | 39.864 | +3,2 % (+7 % a tipo de cambio constante) | 100 % |
| Margen bruto | 23.222 | +3,9 % | 58,3 % |
| EBITDA | 11.267 | +5,0 % | 28,3 % |
| EBIT | 7.997 | +5,9 % | 20,1 % |
| Beneficio antes de impuestos | 8.020 | +5,8 % | 20,1 % |
| Beneficio neto | 6.220 | +6,0 % | 15,6 % |

Detalles que se leen entre líneas:
- Los **gastos de explotación crecieron un 2,8 %**, menos que las ventas: esa diferencia, multiplicada por el apalancamiento operativo, explica que el EBIT creciera casi el doble que las ventas.
- El **beneficio antes de impuestos supera al EBIT**: Inditex no tiene deuda financiera neta y su caja (10.958 millones) le genera ingresos financieros.
- El **efecto divisa** restó casi cuatro puntos al crecimiento: en moneda local, el negocio creció más del doble de lo que dice la cifra en euros.
- Con unas 3.115 millones de acciones, el **BPA ronda los 2,00 €**. El dividendo propuesto, 1,75 € (un 60 % ordinario más un extra), supone repartir en torno al 88 % del beneficio.
- **Zara** (con Zara Home) vendió 28.051 millones, un 70 % del total, pero solo creció un 1 %; las marcas más pequeñas crecieron más.

> Lo que enseña: los titulares hablan del beneficio récord, pero la información útil está en los márgenes, en qué parte del crecimiento viene de las divisas y en qué marca crece. Una cuenta de resultados se lee de arriba abajo y comparando con años anteriores.
`
  },
  ejercicios: [
    {
      t: "Los márgenes de Inditex",
      p: `
Con los datos de Inditex 2025 (ventas 39.864; margen bruto 23.222; EBITDA 11.267; EBIT 7.997; beneficio antes de impuestos 8.020; beneficio neto 6.220, en millones de €), calcula cada margen sobre ventas y cuánto se fue en impuestos y minoritarios.
`,
      s: `
1. **Margen bruto**: 23.222 / 39.864 = **58,3 %**.
2. **Margen EBITDA**: 11.267 / 39.864 = **28,3 %**.
3. **Margen EBIT**: 7.997 / 39.864 = **20,1 %**.
4. **Margen neto**: 6.220 / 39.864 = **15,6 %**.
5. **Impuestos y minoritarios**: 8.020 − 6.220 = **1.800 millones**, un 22,4 % del beneficio antes de impuestos.
`
    },
    {
      t: "El apalancamiento operativo",
      p: `
Una empresa vende 100, sus costes variables son el 60 % de las ventas y sus costes fijos, 30. ¿Cuál es su EBIT? ¿Qué pasa con el EBIT si las ventas suben un 10 %? ¿Y si bajan un 10 %? Calcula su grado de apalancamiento operativo.
`,
      s: `
1. **EBIT inicial**: 100 − 60 − 30 = **10**.
2. **Ventas +10 %**: 110 − 66 − 30 = **14** → EBIT **+40 %**.
3. **Ventas −10 %**: 90 − 54 − 30 = **6** → EBIT **−40 %**.
4. **GAO** = 40 % / 10 % = **4**, igual al margen de contribución (40) dividido por el EBIT (10).
5. Una empresa así es una apuesta amplificada sobre sus ventas. En una recesión que recorte las ventas un 25 %, su EBIT desaparecería.
`
    },
    {
      t: "BPA que crece sin que crezca el negocio",
      p: `
Una empresa gana 500 millones y tiene 100 millones de acciones. Un año después gana lo mismo, pero ha recomprado 5 millones de acciones. ¿Cuánto ha crecido su BPA? ¿Y si en lugar de recomprar hubiera emitido 5 millones de acciones nuevas para pagar a sus directivos?
`,
      s: `
1. **BPA inicial**: 500 / 100 = **5,00**.
2. **Tras la recompra**: 500 / 95 = **5,26** → **+5,3 %** sin que el negocio haya crecido.
3. **Tras emitir**: 500 / 105 = **4,76** → **−4,8 %**.
4. Al comparar el crecimiento del BPA entre empresas, separa siempre el crecimiento del beneficio del cambio en el número de acciones.
`
    }
  ],
  errores: [
    "Fijarse solo en el beneficio neto y no en los márgenes ni en su tendencia.",
    "Aceptar las cifras «ajustadas» sin mirar qué ajustan ni si los ajustes se repiten cada año.",
    "Comparar el EBITDA de una empresa que alquila sus tiendas con el de otra que las posee sin tener en cuenta la NIIF 16.",
    "Confundir crecimiento por divisas o por compras de empresas con crecimiento orgánico.",
    "Celebrar un BPA creciente que solo se debe a recomprar acciones."
  ],
  test: [
    { p: "¿Qué se obtiene al restar las amortizaciones al EBITDA?", o: ["El beneficio neto", "El EBIT o resultado de explotación", "El margen bruto"], c: 1, e: "El EBIT mide el beneficio del negocio antes de la financiación y los impuestos." },
    { p: "¿Cuál fue el margen EBIT de Inditex en 2025?", o: ["En torno al 8 %", "En torno al 20 %", "En torno al 58 %"], c: 1, e: "7.997 / 39.864 ≈ 20,1 %. El 58 % es el margen bruto." },
    { p: "Una empresa con un grado de apalancamiento operativo de 3 ve subir sus ventas un 5 %. Su EBIT sube aproximadamente…", o: ["Un 5 %", "Un 15 %", "Un 3 %"], c: 1, e: "GAO × variación de ventas = 3 × 5 %." },
    { p: "¿Qué hizo la NIIF 16 con el EBITDA de las empresas que alquilan mucho?", o: ["Lo redujo", "Lo aumentó, porque el alquiler pasa a ser amortización e intereses", "No lo cambió"], c: 1, e: "Por eso conviene mirar flujos ajustados por pagos de arrendamientos." },
    { p: "¿Qué BPA conviene usar?", o: ["El básico", "El diluido", "El ajustado por la empresa"], c: 1, e: "Incluye las acciones que se emitirán por opciones y convertibles." }
  ],
  lecturas: [
    { t: "Cómo leer los estados financieros (guías del inversor)", a: "CNMV, cnmv.es", n: "Guías gratuitas y en español." },
    { t: "Financial Statements", a: "Thomas Ittelson", n: "La explicación más clara de cómo se conectan los tres estados financieros." },
    { t: "Financial Shenanigans", a: "Howard Schilit, Jeremy Perler y Yoni Engelhart", n: "Cómo se manipulan los ingresos y los beneficios, con casos reales." },
    { t: "Informe anual de Inditex 2025", a: "inditex.com, relaciones con inversores", n: "Un buen ejemplo para practicar la lectura de cuentas." }
  ]
});


/* ---- l03.js ---- */
LECCIONES.push({
  id: "b4-l3", num: "4.3",
  titulo: "El balance: lo que la empresa tiene, lo que debe y cuánto aguanta",
  resumen: "El balance es una foto de lo que la empresa tiene (activo) y de cómo lo ha financiado (deuda y patrimonio). Para el inversor, la pregunta clave es si la empresa puede sobrevivir a un mal año sin depender de los bancos. La deuda neta sobre EBITDA y la cobertura de intereses lo resumen; las notas de la memoria cuentan el resto. Inditex tiene casi 11.000 millones de caja neta; Grifols, una deuda de más de cuatro veces su EBITDA.",
  esencial: `
**La ecuación del balance**

$$ Activo = Pasivo (deudas) + Patrimonio neto (lo de los accionistas)

| Activo: lo que tiene | Pasivo y patrimonio: cómo lo paga |
|---|---|
| **No corriente**: edificios, máquinas, marcas, fondo de comercio, derechos de uso de locales alquilados | **Patrimonio neto**: capital aportado y beneficios no repartidos |
| **Corriente**: existencias, lo que le deben los clientes, caja | **Deuda financiera**: préstamos y bonos, a largo y corto plazo |
| | **Otros pasivos**: proveedores, arrendamientos, impuestos, provisiones |

**Las tres cifras que más importan**
1. **Deuda neta** = deuda financiera − caja. Si es negativa, la empresa tiene **caja neta**.
2. **Deuda neta / EBITDA**: cuántos años de resultado operativo harían falta para pagar la deuda. Como referencia general (varía por sector):
   - menos de 1: muy holgada;
   - 1–2,5: cómoda;
   - 2,5–4: exigente;
   - más de 4: alta; la empresa depende de que los bancos y los mercados la sigan financiando.
3. **Cobertura de intereses** = EBIT / gastos financieros. Por debajo de 3, una mala racha o una subida de tipos puede ponerla en apuros.

**Por qué importa tanto la deuda**
- La deuda **amplifica**: con deuda, un buen año es mejor para el accionista, pero un mal año puede ser el último.
- La deuda tiene **fecha**: si vence en un mal momento y no se puede refinanciar, la empresa puede tener que vender activos o ampliar capital a precios de saldo.
- Las acciones de empresas muy endeudadas parecen **baratas** (PER bajo) precisamente por ese riesgo (lección 4.7).

**Dos ejemplos españoles de 2026**: Inditex cerró su ejercicio 2025 con **10.958 millones de caja neta**; Grifols, con una deuda neta de unas **4,2 veces su EBITDA**, muy por encima de su objetivo de bajarla de 3,5 veces.
`,
  entender: `
#### Partidas que conviene mirar con lupa
- **Fondo de comercio** (*goodwill*): lo pagado en compras de empresas por encima de su valor contable. No se amortiza, pero se **deteriora** si la compra sale mal. Un fondo de comercio enorme respecto al patrimonio indica una empresa construida a base de adquisiciones.
- **Existencias y clientes**: si crecen mucho más deprisa que las ventas, algo no cuadra (lección 4.4).
- **Arrendamientos**: tras la NIIF 16 son deuda en el balance. Algunas empresas dan la deuda neta con y sin ellos; para comparar, usa el mismo criterio.
- **Provisiones y litigios**: lo que podría costar en el futuro, explicado en las notas.

#### El fondo de maniobra y el ciclo de caja
El **fondo de maniobra** es el activo corriente menos el pasivo corriente. Más útil es el **ciclo de conversión de caja**:

$$ ciclo de caja = días de existencias + días de cobro − días de pago

Un minorista que vende al contado (cobra casi al momento), rota rápido el inventario y paga a sus proveedores a 120 días puede tener un ciclo **negativo**: sus proveedores le financian el crecimiento. Es una ventaja enorme, característica de cadenas como Inditex o los grandes supermercados.

#### Valor contable y valor de mercado
El patrimonio neto es el **valor contable**. Las empresas con activos intangibles valiosos (marcas, software, patentes generadas internamente) valen en bolsa muchas veces su valor contable, porque esos activos no aparecen en el balance. En bancos y aseguradoras, en cambio, el valor contable es una referencia central (lección 4.7).

#### Dos ratios de deuda para una misma empresa
La deuda neta y el EBITDA se pueden definir de varias maneras. Los contratos de préstamo suelen usar un EBITDA «ajustado» más generoso que el publicado. Grifols, en el tercer trimestre de 2026: con el EBITDA según su contrato de crédito (1.935 millones), su apalancamiento era de **3,98 veces**; con el EBITDA publicado (1.692 millones) y la deuda del balance, de **5,2 veces**. Ambas cifras son ciertas; para analizar, usa la más prudente.

#### Lo que no está en el balance
Garantías a terceros, operaciones con sociedades vinculadas, ventas de facturas (*factoring*) sin recurso o compromisos de compra. Están en las notas. Muchas crisis empiezan por ahí.
`,
  fondo: `
#### 1. Modigliani y Miller: ¿importa cómo se financia una empresa?
Franco Modigliani y Merton Miller demostraron en 1958 que, sin impuestos, sin costes de quiebra y con mercados perfectos, el valor de una empresa **no depende** de cuánta deuda tenga: la deuda solo reparte el mismo pastel entre acreedores y accionistas, y el accionista exige más rentabilidad cuanto más endeudada está la empresa. En el mundo real:
- los **intereses desgravan** del impuesto de sociedades, lo que favorece algo de deuda;
- los **costes de dificultades financieras** (clientes y proveedores que huyen, ventas forzadas, quiebra) penalizan el exceso de deuda.

La **teoría del equilibrio** (*trade-off*) dice que existe un nivel de deuda razonable que depende de la estabilidad del negocio: mucha deuda es tolerable en una autopista con ingresos predecibles y peligrosa en una empresa cíclica.

#### 2. El Z de Altman: predecir quiebras con cinco ratios
Edward Altman (1968) combinó cinco ratios contables para estimar la probabilidad de quiebra de empresas industriales:

$$ Z = 1,2·X1 + 1,4·X2 + 3,3·X3 + 0,6·X4 + 1,0·X5

- X1 = fondo de maniobra / activo total
- X2 = beneficios retenidos / activo total
- X3 = EBIT / activo total
- X4 = valor en bolsa del patrimonio / pasivo total
- X5 = ventas / activo total

Por encima de 2,99, zona segura; entre 1,81 y 2,99, zona gris; por debajo de 1,81, riesgo alto. Se diseñó para industriales estadounidenses y no sirve para bancos; para otros sectores existen versiones adaptadas. Más que una sentencia, es una **alarma** que obliga a mirar más a fondo.

#### 3. El muro de vencimientos y los tipos variables
Una empresa con deuda a tipo variable sufre de inmediato las subidas de tipos (bloque 5). Una con deuda a tipo fijo lo nota al refinanciar. Mira en las notas:
- el **calendario de vencimientos**: cuánta deuda vence en cada año;
- la **proporción a tipo variable** y las coberturas;
- las **cláusulas** (*covenants*): ratios que, si se incumplen, permiten a los bancos exigir el pago anticipado.

#### 4. Calificación crediticia
Las agencias (S&P, Moody's, Fitch) califican la deuda de las empresas. Por debajo de BBB− (o Baa3) se considera **alto rendimiento** (*high yield*): más rentabilidad y más riesgo de impago (lección 1.5). Una bajada a ese escalón puede encarecer mucho la financiación y obligar a algunos fondos a vender. Grifols, por ejemplo, tenía en 2026 una calificación BB− de S&P, tras subirla dos escalones en 18 meses.

#### 5. Fondo de comercio y deterioros
En las cuentas consolidadas de las cotizadas europeas, que siguen las NIIF desde 2005, el fondo de comercio no se amortiza: se revisa cada año y se **deteriora** si las previsiones de la empresa comprada empeoran. Los deterioros suelen llegar tarde y de golpe, y confirman lo que el mercado ya había descontado. Un fondo de comercio que supera al patrimonio neto significa que, si las compras se revelan malas, el valor contable podría desaparecer.
`,
  caso: {
    titulo: "Grifols: cuando la deuda manda sobre el negocio (2024–2026)",
    md: `
Grifols, líder mundial en medicamentos derivados del plasma, llevaba años creciendo a base de adquisiciones financiadas con deuda. El 9 de enero de 2024, el fondo bajista **Gotham City Research** publicó un informe en el que acusaba a la empresa de presentar un apalancamiento de unas 6 veces el EBITDA cuando, según sus cálculos, estaría entre 10 y 13 veces, y cuestionaba sus operaciones con **Scranton**, una sociedad vinculada a la familia fundadora.

- Ese día, las acciones de clase A cayeron un **25,9 %**, hasta 10,55 €. La víspera cotizaban a 14,24 €.
- Grifols negó las acusaciones y demandó a Gotham. La **CNMV** revisó sus cuentas y encontró «deficiencias relevantes» en los desgloses y notas explicativas, aunque no respaldó las acusaciones más graves.
- La empresa vendió activos (un 20 % de la china Shanghai RAAS a Haier, por unos 1.600 millones de dólares) y refinanció su deuda.

Dos años y medio después, el negocio funciona, pero la deuda sigue mandando:
- Primer semestre de 2026: beneficio neto de **227 millones** (+28,7 %) y margen EBITDA ajustado del 23,9 %.
- Deuda neta: en torno a **4,2 veces** el EBITDA, frente a un objetivo de menos de 3,5. Según su contrato de crédito, 3,98 veces en septiembre de 2026; con el EBITDA publicado, 5,2.
- Calificación de S&P: **BB−**, en el escalón de alto rendimiento.
- En agosto de 2026 cotizaba en torno a **10 €**, con un PER estimado de 9,2 veces y un valor de empresa de 7,6 veces el EBITDA según Bankinter: barata en apariencia, con una prima de riesgo por la deuda.

> Lo que enseña: un buen negocio con demasiada deuda es una inversión frágil. Las señales estaban en el balance y en las notas (operaciones vinculadas, definiciones generosas de EBITDA) antes del informe de Gotham. Un múltiplo bajo no es una ganga si lo explica la deuda.
`
  },
  ejercicios: [
    {
      t: "Deuda neta, cobertura y subida de tipos",
      p: `
Una empresa tiene un EBITDA de 400, un EBIT de 250, una deuda financiera de 1.500 a tipo variable, una caja de 300 y unos gastos financieros de 60. Calcula su deuda neta / EBITDA y su cobertura de intereses. ¿Qué ocurre con la cobertura si los tipos suben 3 puntos?
`,
      s: `
1. **Deuda neta**: 1.500 − 300 = 1.200 → deuda neta / EBITDA = 1.200 / 400 = **3,0 veces**.
2. **Cobertura**: 250 / 60 = **4,2 veces**.
3. **Con tipos +3 puntos**: intereses = 60 + 1.500 × 3 % = **105** → cobertura = 250 / 105 = **2,4 veces**.
4. Sin que el negocio cambie, la empresa pasa de cómoda a vulnerable. Si además su EBIT cayera en una recesión, podría incumplir sus contratos de deuda.
`
    },
    {
      t: "El Z de Altman de dos empresas",
      p: `
Dos empresas industriales tienen un activo total de 1.600 y unas ventas de 1.500. La primera: fondo de maniobra 150, beneficios retenidos 300, EBIT 120, valor en bolsa 900, pasivo total 1.100. La segunda: fondo de maniobra −50, beneficios retenidos 20, EBIT 30, valor en bolsa 250, pasivo total 1.450. Calcula su Z.
`,
      s: `
1. **Primera**: X1 = 0,094; X2 = 0,188; X3 = 0,075; X4 = 0,818; X5 = 0,938.
   Z = 1,2 × 0,094 + 1,4 × 0,188 + 3,3 × 0,075 + 0,6 × 0,818 + 0,938 ≈ **2,05**: zona gris.
2. **Segunda**: X1 = −0,031; X2 = 0,013; X3 = 0,019; X4 = 0,172; X5 = 0,938.
   Z ≈ **1,08**: zona de riesgo alto.
3. La segunda depende casi por completo de que sus acreedores sigan confiando. No es una sentencia de quiebra, pero sí una razón para exigir mucho más margen de seguridad o descartarla.
`
    },
    {
      t: "Un ciclo de caja negativo",
      p: `
Un minorista vende 10.000 al año con un coste de lo vendido de 4.200. Tiene existencias para 90 días, cobra a sus clientes en 5 días y paga a sus proveedores a 120 días. Calcula su ciclo de caja y cuánto dinero tiene inmovilizado en existencias y clientes frente a lo que le financian los proveedores.
`,
      s: `
1. **Ciclo de caja**: 90 + 5 − 120 = **−25 días**.
2. **Existencias**: 4.200 × 90 / 365 ≈ **1.036**.
3. **Clientes**: 10.000 × 5 / 365 ≈ **137**.
4. **Proveedores**: 4.200 × 120 / 365 ≈ **1.381**.
5. Los proveedores financian unos 208 más de lo que la empresa tiene inmovilizado. Cuanto más crece, más caja recibe por adelantado. Es una de las razones de la enorme generación de caja de los grandes minoristas.
`
    }
  ],
  errores: [
    "Mirar la deuda total sin restar la caja, o la caja sin mirar cuándo vence la deuda.",
    "Aceptar sin más la definición de EBITDA «ajustado» que usa la empresa para su ratio de deuda.",
    "Ignorar los arrendamientos al comparar la deuda de empresas que alquilan con las que compran.",
    "No leer las notas sobre operaciones vinculadas, garantías y litigios.",
    "Comprar una acción con PER bajo sin preguntar si lo explica la deuda."
  ],
  test: [
    { p: "¿Qué es la deuda neta?", o: ["La deuda financiera menos la caja", "Todo el pasivo", "La deuda a largo plazo"], c: 0, e: "Si es negativa, la empresa tiene caja neta, como Inditex." },
    { p: "Una deuda neta de 4,5 veces el EBITDA es, en general…", o: ["Muy holgada", "Cómoda", "Alta: la empresa depende de poder refinanciarse"], c: 2, e: "Aunque el umbral depende de lo estable que sea el negocio." },
    { p: "¿Qué indica un ciclo de conversión de caja negativo?", o: ["Que la empresa pierde dinero", "Que sus proveedores le financian el circulante", "Que tiene mucha deuda"], c: 1, e: "Cobra antes de pagar." },
    { p: "Según Modigliani y Miller (1958), sin impuestos ni costes de quiebra, el valor de la empresa…", o: ["Sube con la deuda", "No depende de la deuda", "Baja con la deuda"], c: 1, e: "En la práctica, impuestos y costes de dificultades financieras hacen que sí importe." },
    { p: "¿Cuánto cayeron las acciones A de Grifols el día del informe de Gotham (9 de enero de 2024)?", o: ["Un 5 %", "Un 25,9 %", "Un 60 %"], c: 1, e: "Hasta 10,55 €. En 2026 seguía cotizando en torno a 10 €." }
  ],
  lecturas: [
    { t: "Financial Ratios, Discriminant Analysis and the Prediction of Corporate Bankruptcy", a: "Edward Altman, Journal of Finance, 1968" },
    { t: "The Cost of Capital, Corporation Finance and the Theory of Investment", a: "Modigliani y Miller, American Economic Review, 1958" },
    { t: "Corporate Finance", a: "Berk y DeMarzo", n: "Manual de finanzas corporativas: estructura de capital, deuda y valoración." },
    { t: "Informes trimestrales de Grifols (2026)", a: "grifols.com y sec.gov", n: "Comparar las dos definiciones de apalancamiento es un buen ejercicio." }
  ]
});


/* ---- l04.js ---- */
LECCIONES.push({
  id: "b4-l4", num: "4.4",
  titulo: "El flujo de caja y la calidad del beneficio",
  resumen: "El beneficio depende de estimaciones; la caja, mucho menos. El estado de flujos de efectivo muestra cuánto dinero genera de verdad el negocio, cuánto tiene que reinvertir y qué hace con el resto. Cuando el beneficio crece y la caja no, hay que averiguar por qué. El caso Wirecard, el mayor fraude contable de la Alemania de posguerra, tenía muchas de las señales de alarma a la vista.",
  esencial: `
**Los tres bloques del estado de flujos de efectivo**
| Bloque | Qué recoge | Señal buena |
|---|---|---|
| **Explotación** (FCO) | La caja que genera el negocio: beneficio + amortizaciones ± cambios en existencias, clientes y proveedores | Similar o mayor que el beneficio neto, año tras año |
| **Inversión** | Compra de activos (*capex*), adquisiciones, ventas de activos | Capex razonable para mantener y hacer crecer el negocio |
| **Financiación** | Deuda pedida y devuelta, dividendos, recompras, ampliaciones | Retribuir al accionista sin endeudarse para ello |

**La cifra clave: el flujo de caja libre (FCL)**

$$ flujo de caja libre = flujo de caja de explotación − inversión en activos (capex)

Es el dinero que queda para pagar deuda, dividendos y recompras o para comprar otras empresas. Es la base de la valoración (lección 4.8).

**La conversión de caja.** Divide el flujo de caja libre entre el beneficio neto. Por encima del 80–100 % de forma sostenida, el beneficio es de buena calidad. Si durante varios años la caja se queda muy por debajo del beneficio, algo falla: o la empresa necesita invertir mucho para crecer (y entonces su beneficio vale menos de lo que parece), o el beneficio está inflado.

**Señales de alarma en la calidad del beneficio**
1. El beneficio crece, pero el flujo de caja de explotación no.
2. Los saldos de **clientes** o **existencias** crecen mucho más que las ventas.
3. Cambios frecuentes de auditor, de director financiero o de criterios contables.
4. Mucho negocio a través de **socios, filiales opacas o partes vinculadas**.
5. Una empresa que responde a las críticas atacando a quien las hace, en lugar de aportar pruebas.

Ninguna prueba un fraude por sí sola, pero varias juntas son motivo para no invertir. En una cartera diversificada, renunciar a una empresa dudosa cuesta poco; equivocarse con un fraude puede costarlo todo.
`,
  entender: `
#### Del beneficio a la caja, paso a paso
| Concepto | Signo | Por qué |
|---|---|---|
| Beneficio neto | + | Punto de partida |
| Amortizaciones y deterioros | + | Son gasto contable, pero no salida de dinero |
| Aumento de clientes | − | Has vendido, pero aún no has cobrado |
| Aumento de existencias | − | Has pagado mercancía que aún no has vendido |
| Aumento de proveedores | + | Has recibido mercancía que aún no has pagado |
| **= Flujo de caja de explotación** | | |
| − Capex | − | Lo que reinviertes para seguir funcionando y crecer |
| **= Flujo de caja libre** | | |

#### Capex de mantenimiento y de crecimiento
No todo el capex es igual. El de **mantenimiento** es necesario para que el negocio siga como está; el de **crecimiento**, para que sea más grande. Las empresas rara vez los separan. Una aproximación habitual: el capex de mantenimiento se parece a las amortizaciones. Warren Buffett llamó **beneficios del propietario** (*owner earnings*, carta a los accionistas de 1986) a:

$$ beneficios del propietario = beneficio + amortizaciones − capex de mantenimiento

Es lo que el dueño podría retirar sin que el negocio se deteriore.

#### Tres trampas habituales
- **Arrendamientos**: tras la NIIF 16, los pagos de alquileres aparecen como financiación, no como explotación. El flujo de caja libre «sale» más alto. Réstalos para comparar (lo que Inditex llama fondos «ajustados por pagos de arrendamientos»).
- **Remuneración en acciones**: no sale caja, así que el flujo de explotación la suma. Pero es un coste real: se paga diluyendo al accionista o recomprando acciones.
- **Circulante estirado**: retrasar pagos a proveedores o vender facturas de clientes al cierre del año infla el flujo de explotación un año, pero no se puede repetir indefinidamente.

#### Un indicador sencillo: los días de cobro
$$ días de cobro = saldo de clientes / ventas × 365

Si una empresa pasa de cobrar en 60 días a cobrar en 110 sin que haya cambiado su negocio, o sus clientes pagan peor o las ventas no son tan reales como parecen. Es la primera cifra que miran los analistas que buscan fraudes.
`,
  fondo: `
#### 1. La anomalía de los ajustes por devengo (Sloan, 1996)
Richard Sloan dividió el beneficio en dos partes: la que es caja y la que son **ajustes por devengo** (beneficio − flujo de caja de explotación). Encontró que la parte de caja es mucho más persistente y que los inversores no lo tienen en cuenta: las empresas con muchos ajustes por devengo positivos rendían después mucho menos que las que tenían pocos. Una cartera larga en las de menos ajustes y corta en las de más obtuvo en torno a un **10 % anual** en su muestra (1962–1991). La anomalía se ha debilitado desde que se publicó, pero la idea sigue siendo útil:

$$ ratio de ajustes = (beneficio neto − flujo de caja de explotación) / activo total medio

Un ratio alto y creciente es una señal de alarma.

#### 2. El M de Beneish: detectar manipulación
Messod Beneish (1999) construyó un modelo con ocho ratios (crecimiento de los días de cobro, deterioro del margen bruto, calidad de los activos, crecimiento de ventas, ritmo de amortización, gastos generales, ajustes por devengo y apalancamiento) que estima la probabilidad de que una empresa manipule sus beneficios. Un grupo de estudiantes de la Universidad de Cornell lo aplicó a Enron en 1998, tres años antes de su quiebra, y concluyó que su beneficio probablemente estaba manipulado. Como el Z de Altman, es una alarma, no una prueba.

#### 3. El F de Piotroski: calidad entre las empresas baratas
Joseph Piotroski (2000) puntuó de 0 a 9 a las empresas baratas por valor contable con nueve señales sencillas: beneficio positivo, flujo de explotación positivo, rentabilidad creciente, flujo mayor que beneficio, menos deuda, más liquidez, sin ampliaciones de capital, margen creciente y rotación creciente. Las de puntuación alta batieron a las de puntuación baja por unos **23 puntos anuales** entre 1976 y 1996. La idea encaja con la lección 2.8: el valor funciona mejor combinado con calidad.

#### 4. Por qué existen los fraudes y quién los descubre
Los fraudes contables suelen nacer de la presión por cumplir expectativas de crecimiento: primero se adelanta un ingreso, después se tapa el hueco con otro. Los estudios sobre fraudes en EE. UU. (Dyck, Morse y Zingales, 2010) encontraron que los descubren sobre todo empleados, periodistas, reguladores sectoriales y vendedores en corto, más que los auditores. Para el inversor:
- un informe de un **vendedor en corto** no es necesariamente cierto (tiene interés en que la acción caiga), pero merece una respuesta con datos;
- una empresa que **persigue a periodistas y críticos** en lugar de abrir sus cuentas suele tener algo que ocultar.

#### 5. El papel del auditor y sus límites
El auditor comprueba que las cuentas siguen las normas y que no hay errores materiales, con muestras y pruebas razonables. No garantiza que no haya fraude, sobre todo si hay connivencia de la dirección y documentos falsificados. Una **opinión con salvedades**, un cambio de auditor sin explicación o la incapacidad de verificar saldos de caja son señales graves.
`,
  caso: {
    titulo: "Wirecard: 1.900 millones de euros que no existían",
    md: `
Wirecard, una empresa alemana de pagos electrónicos, era a finales de 2018 la gran promesa tecnológica europea. En septiembre de ese año entró en el DAX, el índice de las mayores empresas alemanas, desplazando al Commerzbank. Su acción había llegado a unos **191 €** y la empresa valía en torno a **24.000 millones**.

Las señales estaban ahí:
- Desde **2015**, el *Financial Times* (con el periodista Dan McCrum) publicaba artículos que cuestionaban sus cuentas. En 2016, un informe anónimo de vendedores en corto (Zatarra) la acusó de irregularidades.
- En **enero de 2019**, el FT reveló una investigación interna en Singapur sobre contratos falsificados y movimientos circulares de dinero. La policía de Singapur registró sus oficinas.
- En **febrero de 2019**, el supervisor alemán (BaFin) **prohibió durante dos meses las ventas en corto** sobre Wirecard y denunció a los periodistas por manipulación del mercado.
- El FT informó después de que buena parte del negocio y del beneficio venía de **socios externos opacos** en Asia. Una auditoría especial de KPMG, en abril de 2020, no pudo verificar esos ingresos.

El 18 de junio de 2020, su auditor, EY, se negó a firmar las cuentas: no podía confirmar **1.900 millones de euros** que supuestamente estaban en cuentas fiduciarias de dos bancos filipinos, en torno a una cuarta parte del balance. La acción cayó un 62 % ese día y se hundió por debajo de 2 € en pocas jornadas. El 25 de junio, Wirecard se convirtió en la **primera empresa del DAX en declararse insolvente**. Según la Fiscalía, los bancos perdieron en torno a 3.100 millones en préstamos y bonos.

Su consejero delegado, Markus Braun, está en prisión preventiva desde julio de 2020 y lleva en juicio desde diciembre de 2022, con cerca de 300 sesiones; en noviembre de 2026 el proceso estaba en su fase final, con una pena prevista de más de diez años según los tribunales que han revisado su prisión. Su número dos, Jan Marsalek, sigue huido.

> Lo que enseña: la caja que no se puede ver, los beneficios que vienen de terceros opacos y una empresa que ataca a sus críticos son señales que no conviene ignorar. Ni la entrada en el DAX, ni la firma de un gran auditor, ni el respaldo del supervisor sustituyen a tu propio análisis. Y nunca concentres tanto en una acción que un fraude pueda hundir tu patrimonio.
`
  },
  ejercicios: [
    {
      t: "Del beneficio al flujo de caja libre",
      p: `
Una empresa gana 300. Sus amortizaciones son 120. Durante el año, su saldo de clientes sube 90, sus existencias suben 40 y lo que debe a proveedores sube 20. Invierte 150 en activos. Calcula su flujo de caja de explotación, su flujo de caja libre y su conversión de caja.
`,
      s: `
1. **Flujo de explotación**: 300 + 120 − 90 − 40 + 20 = **310**.
2. **Flujo de caja libre**: 310 − 150 = **160**.
3. **Conversión**: 160 / 300 = **53 %**.
4. Casi la mitad del beneficio no se ha convertido en caja disponible, sobre todo por el aumento de clientes. Si se repite varios años, hay que entender por qué.
`
    },
    {
      t: "Dos empresas con el mismo beneficio",
      p: `
Dos empresas ganan 300 cada una y tienen un activo medio de 3.000. La primera genera un flujo de caja de explotación de 420; la segunda, de 150. Calcula el ratio de ajustes por devengo de cada una. ¿Cuál tiene un beneficio de más calidad según Sloan?
`,
      s: `
1. **Primera**: (300 − 420) / 3.000 = **−4 %**: genera más caja que beneficio.
2. **Segunda**: (300 − 150) / 3.000 = **+5 %**: la mitad de su beneficio son ajustes contables.
3. Según Sloan (1996), la primera tiene un beneficio más persistente y, históricamente, las empresas como la segunda han rendido peor después. Antes de invertir en la segunda, averigua qué partidas explican la diferencia.
`
    },
    {
      t: "Los días de cobro se disparan",
      p: `
Una empresa tenía un saldo de clientes de 1.000 con unas ventas de 6.000. Un año después, sus ventas son 8.000 y su saldo de clientes, 2.400. Calcula los días de cobro de cada año y cuánta caja está «atrapada» por encima de lo normal.
`,
      s: `
1. **Año 1**: 1.000 / 6.000 × 365 ≈ **61 días**.
2. **Año 2**: 2.400 / 8.000 × 365 ≈ **110 días**.
3. **Saldo normal con 61 días**: 8.000 × 1.000 / 6.000 ≈ 1.333 → caja atrapada ≈ 2.400 − 1.333 = **1.067**.
4. Las ventas crecen un 33 %, pero los cobros pendientes se multiplican por 2,4. O la empresa está dando mucho crédito para vender más, o parte de esas ventas no se cobrarán nunca.
`
    }
  ],
  errores: [
    "Analizar solo la cuenta de resultados y no el estado de flujos de efectivo.",
    "Usar el flujo de caja de explotación como si fuera caja libre, olvidando el capex.",
    "No restar los pagos de arrendamientos ni la remuneración en acciones al comparar flujos.",
    "Descartar sin leerlo un informe crítico de un vendedor en corto, o creerlo sin comprobarlo.",
    "Confiar en que un gran auditor o la pertenencia a un índice garantizan que las cuentas son ciertas."
  ],
  test: [
    { p: "¿Cómo se calcula el flujo de caja libre?", o: ["Beneficio neto + amortizaciones", "Flujo de caja de explotación − capex", "EBITDA − impuestos"], c: 1, e: "Es el dinero disponible para deuda, dividendos, recompras o compras de empresas." },
    { p: "Si el saldo de clientes crece mucho más que las ventas, es una señal de…", o: ["Buena gestión", "Posible deterioro de la calidad del beneficio", "Mayor eficiencia"], c: 1, e: "Ventas que no se cobran o ventas adelantadas." },
    { p: "¿Qué encontró Sloan (1996)?", o: ["Que la parte de caja del beneficio es más persistente que los ajustes por devengo", "Que el beneficio y la caja son lo mismo", "Que los ajustes por devengo predicen subidas"], c: 0, e: "Las empresas con muchos ajustes rindieron peor después." },
    { p: "¿Qué no pudo confirmar EY en junio de 2020 en Wirecard?", o: ["Sus ventas en Alemania", "1.900 millones de euros en cuentas fiduciarias en Filipinas", "Su deuda bancaria"], c: 1, e: "En torno a una cuarta parte de su balance." },
    { p: "¿Qué son los «beneficios del propietario» de Buffett?", o: ["El dividendo", "Beneficio + amortizaciones − capex de mantenimiento", "El EBITDA"], c: 1, e: "Lo que se podría retirar sin deteriorar el negocio." }
  ],
  lecturas: [
    { t: "Money Men", a: "Dan McCrum", n: "El periodista del FT cuenta cómo destapó el caso Wirecard. Se lee como una novela." },
    { t: "Do Stock Prices Fully Reflect Information in Accruals and Cash Flows about Future Earnings?", a: "Richard Sloan, The Accounting Review, 1996" },
    { t: "The Detection of Earnings Manipulation", a: "Messod Beneish, Financial Analysts Journal, 1999" },
    { t: "Value Investing: The Use of Historical Financial Statement Information to Separate Winners from Losers", a: "Joseph Piotroski, Journal of Accounting Research, 2000" },
    { t: "Financial Shenanigans", a: "Schilit, Perler y Engelhart", n: "Catálogo de trucos contables y cómo detectarlos." }
  ]
});


/* ---- l05.js ---- */
LECCIONES.push({
  id: "b4-l5", num: "4.5",
  titulo: "Rentabilidad del capital: ROE, ROIC y crecimiento que crea valor",
  resumen: "Lo importante de una empresa no es cuánto gana, sino cuánto gana con el dinero que necesita para ganarlo. Esa es la rentabilidad del capital invertido (ROIC). Si supera al coste de ese capital, crecer crea valor; si no, crecer lo destruye. Inditex, con una rentabilidad del capital empleado del 40 %, gana más de cinco veces más que H&M vendiendo menos del doble.",
  esencial: `
**Tres rentabilidades**
| Ratio | Fórmula | Qué mide |
|---|---|---|
| **ROE** (rentabilidad del patrimonio) | Beneficio neto / patrimonio neto | Lo que gana el accionista con su dinero |
| **ROA** (rentabilidad del activo) | Beneficio neto / activo total | Lo eficiente que es con todo lo que tiene |
| **ROIC** (rentabilidad del capital invertido) | Beneficio operativo después de impuestos / capital invertido | Lo que gana el **negocio** con el capital que necesita, sin depender de cómo se financia |

El **capital invertido** es lo que la empresa necesita para operar: activos fijos más circulante, menos lo que financian los proveedores. Equivale aproximadamente a patrimonio neto + deuda neta.

**La regla de oro.** Una empresa **crea valor** cuando su ROIC supera su **coste del capital** (lo que exigen accionistas y acreedores, en torno a un 7–10 % en empresas cotizadas típicas; lección 4.8). Si lo supera de forma sostenida, cada euro que reinvierte vale más de un euro. Si no lo supera, cada euro reinvertido vale menos de un euro, por mucho que crezcan las ventas.

**El crecimiento no siempre es bueno.** Para crecer, una empresa tiene que reinvertir. El crecimiento que puede lograr depende de cuánto reinvierte y de lo rentable que es:

$$ crecimiento ≈ ROIC × tasa de reinversión

Una empresa con un ROIC del 25 % que reinvierte el 40 % de su beneficio operativo puede crecer en torno a un 10 % al año. Otra con un ROIC del 10 % y la misma reinversión, solo un 4 %.

**Por qué el ROE puede engañar.** El ROE sube con la deuda (como en la lección 4.3: la deuda amplifica). Una empresa mediocre muy endeudada puede tener un ROE del 20 %. El ROIC no se deja engañar por la financiación; por eso es el ratio favorito de los analistas.

**Inditex frente a H&M (2025)**: con unas ventas de 39.864 millones frente a unos 21.600, Inditex obtuvo un margen operativo del 20,1 % frente al 8,1 % de H&M y un beneficio neto más de cinco veces mayor. Su rentabilidad del capital empleado fue del **40 %**.
`,
  entender: `
#### La descomposición DuPont
El ROE se puede descomponer en tres palancas:

$$ ROE = (beneficio / ventas) × (ventas / activo) × (activo / patrimonio) = margen × rotación × apalancamiento

| Empresa | Margen | Rotación | Apalancamiento | ROE |
|---|---|---|---|---|
| A: marca fuerte, poca deuda | 15 % | 1,2 | 1,5 | **27 %** |
| B: margen bajo, mucha deuda | 5 % | 1,5 | 2,5 | **18,75 %** |

Las dos tienen ROE altos, pero por razones distintas: A por su negocio, B en buena parte por su deuda. Ante una caída de ventas, B sufrirá mucho más.

#### Cómo calcular el ROIC
1. **NOPAT** (beneficio operativo después de impuestos) = EBIT × (1 − tipo impositivo).
2. **Capital invertido** = patrimonio neto + deuda financiera neta (+ arrendamientos, si se incluyen en la deuda), o, desde el activo: inmovilizado + fondo de maniobra operativo.
3. **ROIC** = NOPAT / capital invertido medio del año.

Inditex publica una medida parecida, la **rentabilidad del capital empleado** (ROCE): beneficio antes de impuestos entre patrimonio más deuda neta medios. En 2025 fue del 40 %, igual que en 2024.

#### Cuándo crece el valor y cuándo no
Una empresa con un NOPAT de 100 y un coste del capital del 8 % crece un 4 % anual para siempre. Su valor depende de lo rentable que sea ese crecimiento:

$$ valor = NOPAT × (1 − g / ROIC) / (WACC − g)

| ROIC | Reinversión necesaria (g / ROIC) | Valor |
|---|---|---|
| 20 % | 20 % del NOPAT | **2.000** |
| 8 % (igual al coste) | 50 % | **1.250** (lo mismo que sin crecer: 100 / 0,08) |
| 6 % | 67 % | **833**: crecer destruye valor |

Esta es una de las ideas más importantes de todo el bloque: **una empresa que crece con un ROIC inferior a su coste de capital vale menos cuanto más crece**.

#### ¿Qué ROIC es bueno?
- Por debajo del 8 %: el negocio probablemente no cubre su coste de capital.
- 10–15 %: bueno.
- Por encima del 20 % de forma sostenida: excepcional, y casi siempre indica una ventaja competitiva (lección 4.6).
`,
  fondo: `
#### 1. La lógica económica: rentabilidades que se igualan
En competencia perfecta, si un negocio da un ROIC muy alto, atrae competidores hasta que su rentabilidad baja a su coste de capital. Por eso la mayoría de los ROIC altos **revierten a la media** con el tiempo. Los estudios de McKinsey (Koller, Goedhart y Wessels) y de Michael Mauboussin muestran que esa reversión existe, pero que es **lenta y desigual**: las empresas con ventajas reales mantienen ROIC altos durante décadas. Encontrar esas empresas, antes de que el mercado pague plenamente por ellas, es el objetivo del análisis.

#### 2. ROIC con y sin fondo de comercio
Si una empresa compra otra pagando mucho más de su valor contable, el fondo de comercio aumenta el capital invertido. Por eso conviene mirar dos ROIC:
- **Sin fondo de comercio**: mide la calidad del negocio operativo.
- **Con fondo de comercio**: mide si la dirección ha creado valor al pagar lo que pagó por las compras.

Una empresa puede tener un negocio excelente (ROIC sin fondo de comercio del 30 %) y una dirección que destruye valor comprando caro (ROIC con fondo de comercio del 6 %).

#### 3. Cuando la contabilidad infravalora el capital
Las normas contables tratan la I+D y gran parte del marketing como **gasto**, no como inversión. En empresas de software, farmacéuticas o de marcas de consumo, el capital invertido real es mayor que el contable y el ROIC publicado está **inflado**. Baruch Lev y Feng Gu (*The End of Accounting*, 2016) argumentan que por eso la contabilidad explica cada vez peor el valor de las empresas. Una corrección habitual: capitalizar la I+D y amortizarla en 3–5 años al calcular el ROIC.

#### 4. Rentabilidad bruta y el factor calidad
Robert Novy-Marx (2013) mostró que la **rentabilidad bruta** (margen bruto / activo total) predice las rentabilidades futuras de las acciones casi tanto como el valor, y que ambas se complementan: las empresas rentables y baratas son las que mejor se han comportado. Es la base del factor **rentabilidad** o **calidad** de la lección 2.8.

#### 5. El crecimiento, con más detalle
La relación g = ROIC × tasa de reinversión es una identidad contable a largo plazo: lo que no reinviertes, no crece. Implica que:
- una empresa con ROIC alto puede crecer **repartiendo mucho**: Inditex reparte en torno al 60 % de su beneficio en dividendo ordinario y aun así crece;
- una empresa con ROIC bajo que promete crecer mucho necesitará **financiación externa** (deuda o ampliaciones de capital);
- en la valoración (lección 4.8), suponer un crecimiento alto con una reinversión baja es un error de coherencia frecuente.
`,
  caso: {
    titulo: "Inditex frente a H&M: el mismo sector, dos rentabilidades",
    md: `
Inditex y H&M son los dos mayores grupos de moda del mundo cotizados en Europa. Sus resultados de 2025 muestran lo distinto que puede ser el mismo negocio:

| | Inditex (feb. 2025–ene. 2026) | H&M (dic. 2024–nov. 2025) |
|---|---|---|
| Ventas | 39.864 M€ | 228.285 M SEK (≈ 21.600 M€) |
| Margen bruto | 58,3 % | 53,4 % |
| Margen operativo | 20,1 % | 8,1 % |
| Beneficio neto | 6.220 M€ (15,6 % de las ventas) | 12.085 M SEK (≈ 5,3 % de las ventas) |
| Situación financiera | 10.958 M€ de caja neta | Objetivo de deuda neta de 1–2 veces el EBITDA |

- Inditex vende algo menos del doble que H&M, pero gana **más de cinco veces** más (unos 6.220 frente a unos 1.140 millones de euros).
- La diferencia en el margen bruto es de solo cinco puntos. La gran diferencia está **debajo**: Inditex convierte en resultado operativo una parte mucho mayor de cada euro vendido. Su modelo de producción cercana, que fabrica en pequeñas tandas y repone según lo que se vende, reduce las rebajas y las existencias que no salen.
- Inditex obtuvo una **rentabilidad del capital empleado del 40 %**, estable respecto a 2024. Con esa rentabilidad puede invertir 2.300 millones al año en tiendas y tecnología y, aun así, repartir la mayor parte de su beneficio.
- H&M mejoró en 2025: su margen operativo pasó del 7,4 % al 8,1 %, y del 7,4 % al 10,7 % en el último trimestre, gracias a mejores márgenes y a reducir existencias un 12 %.

> Lo que enseña: dos empresas del mismo sector pueden tener rentabilidades muy distintas por su modelo de negocio, y esa diferencia, si dura, justifica valoraciones muy distintas. La pregunta del inversor no es «¿cuál es más barata?», sino «¿qué rentabilidad del capital es sostenible en cada una y cuánto estoy pagando por ella?».
`
  },
  ejercicios: [
    {
      t: "Descomponer el ROE",
      p: `
La empresa A tiene un margen neto del 15 %, una rotación del activo de 1,2 y un apalancamiento (activo / patrimonio) de 1,5. La empresa B, un margen del 5 %, una rotación de 1,5 y un apalancamiento de 2,5. Calcula su ROE. Si las ventas de ambas bajan un 20 % y su margen se reduce a la mitad, ¿qué empresa corre más peligro?
`,
      s: `
1. **ROE de A**: 0,15 × 1,2 × 1,5 = **27 %**.
2. **ROE de B**: 0,05 × 1,5 × 2,5 = **18,75 %**.
3. **Con el margen a la mitad**: A pasa a un 7,5 % de margen; B, a un 2,5 %. Con unos intereses fijos sobre su deuda, el beneficio de B se acercaría a cero o a pérdidas, mientras A seguiría siendo rentable.
4. El ROE de B depende de su deuda; el de A, de su negocio. A la hora de invertir, el ROIC y la deuda dicen más que el ROE solo.
`
    },
    {
      t: "Crecer con poco o mucho ROIC",
      p: `
Una empresa tiene un NOPAT de 100 y un coste del capital del 8 %, y va a crecer un 4 % anual para siempre. Calcula su valor si su ROIC es del 20 %, del 8 % y del 6 %, y qué parte del NOPAT tiene que reinvertir en cada caso.
`,
      s: `
1. **ROIC 20 %**: reinversión = 4 / 20 = 20 % → valor = 100 × 0,80 / (0,08 − 0,04) = **2.000**.
2. **ROIC 8 %**: reinversión = 50 % → valor = 100 × 0,50 / 0,04 = **1.250**. Igual que sin crecer (100 / 0,08 = 1.250).
3. **ROIC 6 %**: reinversión = 67 % → valor = 100 × 0,333 / 0,04 = **833**.
4. El mismo crecimiento vale más del doble o destruye un tercio del valor según la rentabilidad con que se consigue.
`
    },
    {
      t: "¿Cuánto puede crecer sin pedir dinero?",
      p: `
Dos empresas reinvierten el 40 % de su beneficio operativo después de impuestos y reparten el resto. La primera tiene un ROIC del 25 %; la segunda, del 10 %. ¿A qué ritmo puede crecer cada una sin endeudarse ni ampliar capital? Si la segunda promete crecer un 10 % anual, ¿qué tendría que hacer?
`,
      s: `
1. **Primera**: 25 % × 0,40 = **10 % anual**.
2. **Segunda**: 10 % × 0,40 = **4 % anual**.
3. **Para crecer un 10 % con un ROIC del 10 %**, la segunda tendría que reinvertir el **100 %** de su beneficio: no podría repartir nada, o tendría que endeudarse o emitir acciones.
4. Cuando una previsión de crecimiento no cuadra con la rentabilidad y la reinversión, alguna de las tres cifras es irreal.
`
    }
  ],
  errores: [
    "Valorar el crecimiento de las ventas sin preguntar con qué rentabilidad se consigue.",
    "Fiarse de un ROE alto sin mirar cuánto se debe a la deuda.",
    "Calcular el ROIC con el fondo de comercio o sin él sin saber qué se está midiendo.",
    "Suponer que un ROIC excepcional durará para siempre sin preguntar qué lo protege.",
    "Olvidar que en empresas de software, farmacia o marcas el capital contable infravalora la inversión real."
  ],
  test: [
    { p: "¿Cuándo crea valor una empresa al reinvertir?", o: ["Cuando crecen sus ventas", "Cuando su ROIC supera su coste del capital", "Cuando sube su BPA"], c: 1, e: "Si el ROIC es menor que el coste del capital, crecer destruye valor." },
    { p: "¿Qué tres factores componen el ROE según DuPont?", o: ["Margen, rotación y apalancamiento", "Ventas, costes e impuestos", "Precio, beneficio y dividendo"], c: 0, e: "ROE = margen × rotación × apalancamiento." },
    { p: "Una empresa con ROIC del 20 % que reinvierte el 50 % de su NOPAT puede crecer en torno a…", o: ["Un 5 %", "Un 10 %", "Un 20 %"], c: 1, e: "g ≈ ROIC × tasa de reinversión = 20 % × 0,5." },
    { p: "¿Cuál fue la rentabilidad del capital empleado de Inditex en 2025?", o: ["Un 8 %", "Un 20 %", "Un 40 %"], c: 2, e: "Igual que en 2024." },
    { p: "¿Por qué el ROIC publicado de una empresa de software puede estar inflado?", o: ["Porque no paga impuestos", "Porque su I+D se contabiliza como gasto y no como inversión", "Porque no tiene deuda"], c: 1, e: "Su capital invertido real es mayor que el contable." }
  ],
  lecturas: [
    { t: "Valuation: Measuring and Managing the Value of Companies", a: "Koller, Goedhart y Wessels (McKinsey)", n: "Los capítulos sobre ROIC y crecimiento son la referencia." },
    { t: "The Other Side of Value: The Gross Profitability Premium", a: "Robert Novy-Marx, Journal of Financial Economics, 2013" },
    { t: "The End of Accounting", a: "Baruch Lev y Feng Gu", n: "Por qué la contabilidad explica cada vez peor el valor de las empresas intangibles." },
    { t: "Return on Invested Capital: How to Calculate ROIC and Handle Common Issues", a: "Michael Mauboussin y Dan Callahan, Morgan Stanley", n: "Gratuito. Muy práctico." }
  ]
});


/* ---- l06.js ---- */
LECCIONES.push({
  id: "b4-l6", num: "4.6",
  titulo: "Ventajas competitivas: por qué unas empresas ganan durante décadas",
  resumen: "Una rentabilidad alta atrae competidores que tarde o temprano la reducen, salvo que algo lo impida. Ese «algo» es la ventaja competitiva o foso: marcas, costes de cambio, efecto red, ventaja en costes o tamaño. Se reconoce en los números (rentabilidad alta y estable durante muchos años) y se valora por cuánto puede durar. Nokia la perdió en seis años; ASML lleva más de una década siendo el único fabricante de las máquinas sin las que no se hacen los chips más avanzados.",
  esencial: `
**La idea.** En un mercado abierto, si un negocio gana mucho, otros lo copian hasta que la rentabilidad se iguala a la de cualquier otro negocio. Las empresas que mantienen rentabilidades altas durante décadas tienen algo que frena a sus competidores. Warren Buffett lo llamó **foso** (*moat*), como el que protege un castillo.

**Las cinco fuentes de ventaja** (según la clasificación que usa Morningstar)
| Fuente | Qué es | Ejemplos |
|---|---|---|
| **Activos intangibles** | Marcas, patentes, licencias que permiten cobrar más o impiden competir | Marcas de lujo, farmacéuticas con patentes |
| **Costes de cambio** | Al cliente le cuesta mucho (dinero, tiempo, riesgo) cambiar de proveedor | Software de gestión empresarial, bancos |
| **Efecto red** | El producto vale más cuantos más lo usan | Redes de pago con tarjeta, mercados de valores, redes sociales |
| **Ventaja en costes** | Produce más barato por escala, procesos o ubicación | Grandes minoristas, algunas materias primas |
| **Escala eficiente** | El mercado solo da para uno o pocos operadores | Aeropuertos, oleoductos, infraestructuras |

**Cómo reconocerla en los números**
1. **ROIC** por encima del coste del capital durante **diez años o más**, incluidas las recesiones (lección 4.5).
2. **Márgenes brutos estables o crecientes**: señal de poder de precio.
3. **Cuota de mercado** estable o creciente sin destruir márgenes.
4. Capacidad de **subir precios** por encima de la inflación sin perder clientes.

**Lo que no es una ventaja**: un buen producto que cualquiera puede copiar, un gran crecimiento sin rentabilidad, un buen equipo directivo por sí solo o estar en un sector de moda.

**Las ventajas se erosionan.** La tecnología, la regulación o los cambios de hábitos pueden destruir un foso en pocos años. La pregunta del inversor no es solo si la empresa tiene una ventaja hoy, sino **si la tendrá dentro de diez años**, porque eso es lo que paga en el precio.
`,
  entender: `
#### Una prueba sencilla: ¿qué pasa si sube los precios?
El poder de precio es la señal más clara de una ventaja. Una empresa con un margen bruto del 50 % sube sus precios un 5 %:
| Escenario | Volumen | Margen bruto (sobre el inicial) |
|---|---|---|
| Con ventaja: casi nadie se va | −1 % | **+8,9 %** |
| Sin ventaja: los clientes se van | −10 % | **−1 %** |

Una pequeña subida de precio que los clientes aceptan es casi beneficio puro.

#### Ejemplos de cada ventaja
- **Intangibles**: las grandes marcas de lujo pueden subir precios cada año; una patente farmacéutica protege un medicamento durante unos 20 años desde su solicitud.
- **Costes de cambio**: una empresa que gestiona su contabilidad, nóminas y almacenes con un programa no lo cambia por un 10 % de ahorro: el riesgo de que algo falle es mucho mayor.
- **Efecto red**: Visa y Mastercard. Los comercios las aceptan porque los clientes las tienen, y los clientes las tienen porque los comercios las aceptan.
- **Ventaja en costes**: Inditex produce cerca de sus mercados en pequeñas tandas, lo que le permite reponer en semanas lo que se vende y rebajar menos.
- **Escala eficiente**: Aena gestiona los aeropuertos españoles; nadie construirá un segundo aeropuerto en Madrid para competir.

#### Las cinco fuerzas de Porter
Michael Porter (1979) propuso analizar la rentabilidad de un sector con cinco fuerzas:
1. **Rivalidad** entre competidores actuales.
2. **Amenaza de nuevos entrantes**.
3. **Amenaza de productos sustitutivos**.
4. **Poder de negociación de los clientes**.
5. **Poder de negociación de los proveedores**.

Un sector con poca rivalidad, barreras de entrada altas, sin sustitutos y con clientes y proveedores débiles será rentable. Uno con todas las fuerzas en contra (como las aerolíneas) tiende a ganar poco, aunque sus empresas estén bien gestionadas.

#### Señales de que una ventaja se erosiona
- Márgenes que bajan año tras año aunque crezcan las ventas.
- Un competidor nuevo que crece mucho con un producto «peor pero más barato».
- La empresa empieza a comprar crecimiento con adquisiciones caras.
- La dirección habla más del pasado que del futuro.
`,
  fondo: `
#### 1. Greenwald y Kahn: solo hay tres barreras reales
Bruce Greenwald y Judd Kahn (*Competition Demystified*, 2005) sostienen que la mayoría de las supuestas ventajas no lo son y que solo hay tres tipos reales:
- **Cautividad del cliente**: hábito, costes de cambio o costes de búsqueda.
- **Ventajas de costes** basadas en tecnología propia o acceso exclusivo a recursos.
- **Economías de escala combinadas con cautividad del cliente**: la más duradera. La escala sola se puede copiar; la escala con clientes cautivos, no.

Su consejo práctico: las ventajas son casi siempre **locales** (en un mercado geográfico o un nicho). Las empresas que salen a competir en mercados donde no tienen esa posición suelen destruir valor.

#### 2. Christensen y la innovación disruptiva
Clayton Christensen (*El dilema del innovador*, 1997) explicó por qué empresas líderes y bien gestionadas pierden su posición: escuchan a sus mejores clientes y mejoran sus productos para ellos, mientras un competidor entra por abajo con un producto más simple y barato que al principio parece irrelevante. Cuando ese producto mejora lo suficiente, se queda con el mercado. La lección para el inversor: una ventaja basada en la tecnología actual es más frágil de lo que parece en los números de hoy.

#### 3. El periodo de ventaja competitiva
Michael Mauboussin y Alfred Rappaport definieron el **periodo de ventaja competitiva**: los años durante los que una empresa obtendrá un ROIC superior a su coste del capital. El valor de una empresa se puede descomponer en:

$$ valor = capital invertido + valor actual de los rendimientos extraordinarios durante el periodo de ventaja

Con un capital de 1.000, un ROIC del 25 % y un coste del 8 %, el rendimiento extraordinario es de 170 al año:
| Años de ventaja | Valor |
|---|---|
| 5 | 1.679 |
| 10 | 2.141 |
| 20 | 2.669 |
| Para siempre | 3.125 |

La diferencia entre 5 y 20 años de ventaja es de más de un 50 % en el valor. Por eso el mercado paga tanto por las ventajas duraderas y castiga tanto la señal de que se acaban.

#### 4. Schumpeter y la destrucción creativa
Joseph Schumpeter (*Capitalismo, socialismo y democracia*, 1942) describió el capitalismo como un proceso de **destrucción creativa**: las innovaciones destruyen las posiciones establecidas. Las ventajas competitivas son temporales por naturaleza; las mejores duran décadas, pero ninguna es eterna. De las empresas que formaban el S&P 500 hace cincuenta años, la gran mayoría ya no está en el índice.

#### 5. La dirección y la asignación de capital
Una ventaja competitiva genera caja. Qué se hace con ella (reinvertir en el negocio, comprar empresas, recomprar acciones, pagar dividendos) decide si el accionista se beneficia (lección 4.9). Una buena ventaja en manos de una dirección que la dilapida en adquisiciones caras puede no crear valor para el accionista.
`,
  caso: {
    titulo: "ASML y Nokia: un foso que se ensancha y otro que se seca",
    md: `
**Nokia (2007–2013).** En 2007, Nokia era el mayor fabricante de móviles del mundo y controlaba casi la mitad del mercado de los primeros teléfonos inteligentes. Tenía escala, marca, red de distribución y miles de patentes. En junio de ese año, Apple lanzó el iPhone; poco después llegó Android.
- Nokia apostó por su propio sistema y luego por Windows Phone, mientras el mercado se iba a iOS y Android. El efecto red estaba ahora en los **sistemas operativos y sus tiendas de aplicaciones**, no en los fabricantes.
- Entre el lanzamiento del iPhone y septiembre de 2013, Nokia perdió en torno al **85 % de su valor en bolsa**. Ese mes anunció la venta de su negocio de móviles a Microsoft por **5.440 millones de euros**. Su cuota en el tercer trimestre de 2013 había caído al 13,8 %.

**ASML (2025).** La empresa neerlandesa es el **único fabricante del mundo** de máquinas de litografía ultravioleta extrema (EUV), imprescindibles para fabricar los chips más avanzados. En 2025:
- Ventas de **32.700 millones** de euros, margen bruto del **52,8 %** y beneficio neto de **9.600 millones**.
- Invirtió **4.700 millones en I+D**, más de lo que factura la mayoría de sus posibles competidores.
- Acabó el año con una cartera de pedidos de **38.800 millones**.

Su foso combina tecnología propia acumulada durante décadas, una cadena de proveedores única, escala (solo hay unos pocos clientes que pueden pagar sus máquinas, y todos dependen de ella) y costes de cambio altísimos. Su riesgo principal no es un competidor, sino la **geopolítica**: las restricciones a la exportación a China.

> Lo que enseña: las ventajas competitivas cambian de sitio cuando cambia la tecnología. La de Nokia estaba en fabricar teléfonos y se trasladó al software; la de ASML depende de seguir siendo imprescindible en cada nueva generación de chips. Analizar una ventaja es preguntarse dónde estará el valor dentro de diez años, no solo dónde está hoy.
`
  },
  ejercicios: [
    {
      t: "La prueba del poder de precio",
      p: `
Una empresa con un margen bruto del 50 % sube sus precios un 5 %. Calcula cuánto cambia su margen bruto en euros si pierde un 1 % del volumen y si pierde un 10 %.
`,
      s: `
1. **Punto de partida** (por cada 1 € de ventas): ingresos 1,00; costes 0,50; margen 0,50.
2. **Pierde un 1 %**: ingresos 1,05 × 0,99 = 1,0395; costes 0,50 × 0,99 = 0,495; margen = **0,5445** → **+8,9 %**.
3. **Pierde un 10 %**: ingresos 1,05 × 0,90 = 0,945; costes 0,45; margen = **0,495** → **−1 %**.
4. La misma subida de precio es casi beneficio puro para quien tiene ventaja y una pérdida para quien no la tiene. Preguntar «¿qué pasaría si subieran los precios?» es una buena prueba del foso.
`
    },
    {
      t: "¿Qué empresa tiene foso?",
      p: `
Estos son los ROIC (%) de dos empresas en los últimos diez años. A: 24, 26, 25, 27, 26, 28, 27, 26, 27, 28. B: 35, 12, 30, 5, 28, −4, 22, 18, 9, 25. Calcula la media y la desviación típica de cada una. ¿Cuál muestra señales más claras de ventaja competitiva?
`,
      s: `
1. **A**: media **26,4 %**, desviación típica **1,2 puntos**.
2. **B**: media **18,0 %**, desviación típica **11,7 puntos**.
3. A gana mucho y de forma muy estable: es lo que se espera de un negocio protegido. B tiene años brillantes y años desastrosos: parece un negocio cíclico o expuesto a la competencia.
4. Un ROIC alto en un año no dice mucho; un ROIC alto y estable durante un ciclo completo, sí.
`
    },
    {
      t: "Cuánto vale que la ventaja dure",
      p: `
Una empresa tiene un capital invertido de 1.000, un ROIC del 25 % y un coste del capital del 8 %. Calcula su valor si la ventaja dura 5, 10 o 20 años (después, su ROIC iguala al coste del capital), usando valor = capital + valor actual de los rendimientos extraordinarios.
`,
      s: `
1. **Rendimiento extraordinario anual**: (25 % − 8 %) × 1.000 = **170**.
2. **5 años**: 170 × [1 − 1,08⁻⁵] / 0,08 = 170 × 3,993 ≈ 679 → valor ≈ **1.679**.
3. **10 años**: 170 × 6,710 ≈ 1.141 → ≈ **2.141**.
4. **20 años**: 170 × 9,818 ≈ 1.669 → ≈ **2.669**.
5. Pasar de una ventaja de 5 a una de 20 años vale un 59 % más. Cualquier señal de que la ventaja se acorta puede hundir el precio aunque los resultados del año sean buenos.
`
    }
  ],
  errores: [
    "Confundir un buen producto o un crecimiento rápido con una ventaja competitiva.",
    "Juzgar una ventaja por un año de resultados en lugar de por un ciclo completo.",
    "Suponer que una ventaja basada en la tecnología de hoy durará para siempre.",
    "Ignorar la estructura del sector: en un sector con todas las fuerzas en contra, casi nadie gana mucho.",
    "Pagar cualquier precio por una empresa con foso: la ventaja ya puede estar más que descontada."
  ],
  test: [
    { p: "¿Qué es el efecto red?", o: ["Que la empresa tenga muchas tiendas", "Que el producto valga más cuantos más lo usan", "Que tenga muchos proveedores"], c: 1, e: "Redes de pago, mercados, plataformas." },
    { p: "¿Qué dato muestra mejor una ventaja competitiva?", o: ["Un año de crecimiento récord", "Un ROIC superior al coste del capital durante muchos años", "Una gran campaña de publicidad"], c: 1, e: "Incluidas las recesiones." },
    { p: "Según Christensen, ¿por qué pierden su posición muchas empresas líderes?", o: ["Por mala gestión evidente", "Por mejorar para sus mejores clientes mientras un rival entra por abajo con algo más simple y barato", "Por los impuestos"], c: 1, e: "Es la innovación disruptiva." },
    { p: "¿Por cuánto vendió Nokia su negocio de móviles a Microsoft en 2013?", o: ["5.440 millones de euros", "54.000 millones", "544 millones"], c: 0, e: "Tras perder en torno al 85 % de su valor en bolsa desde 2007." },
    { p: "¿Cuál es el principal riesgo del foso de ASML?", o: ["Un competidor con mejor tecnología", "La geopolítica y las restricciones a la exportación", "La falta de pedidos"], c: 1, e: "Es el único fabricante de máquinas EUV." }
  ],
  lecturas: [
    { t: "The Five Competitive Forces That Shape Strategy", a: "Michael Porter, Harvard Business Review, 2008", n: "Versión actualizada de su artículo de 1979." },
    { t: "Competition Demystified", a: "Bruce Greenwald y Judd Kahn", n: "Las barreras de entrada explicadas sin humo." },
    { t: "El dilema del innovador", a: "Clayton Christensen", n: "Por qué fracasan las empresas líderes." },
    { t: "Measuring the Moat", a: "Michael Mauboussin y Dan Callahan", n: "Guía completa y gratuita para analizar ventajas competitivas." },
    { t: "The Little Book That Builds Wealth", a: "Pat Dorsey", n: "Las fuentes de ventaja según Morningstar, en formato breve." }
  ]
});


/* ---- l07.js ---- */
LECCIONES.push({
  id: "b4-l7", num: "4.7",
  titulo: "Valorar con múltiplos: PER, EV/EBITDA y compañía",
  resumen: "Un múltiplo compara el precio con alguna magnitud del negocio: beneficio, EBITDA, ventas, caja o valor contable. Es rápido y útil para comparar, pero esconde supuestos sobre crecimiento, rentabilidad y riesgo. Un PER bajo puede ser una ganga o una trampa; uno alto, una burbuja o una empresa excepcional. En 2026, el PER del S&P 500 bajó de 22 a menos de 18 sin que la bolsa cayera: lo que subió fue el beneficio esperado.",
  esencial: `
**Los múltiplos más usados**
| Múltiplo | Fórmula | Para qué sirve | Cuidado con |
|---|---|---|---|
| **PER** | Precio / BPA (o capitalización / beneficio neto) | El más conocido. Cuántos años de beneficio pagas | No sirve con pérdidas; engaña en cíclicas y con mucha deuda |
| **EV/EBITDA** | Valor de empresa / EBITDA | Comparar empresas con distinta deuda | Ignora el capex y los arrendamientos |
| **EV/EBIT** | Valor de empresa / EBIT | Como el anterior, pero restando amortizaciones | Mejor para negocios intensivos en capital |
| **Rentabilidad por flujo de caja libre** | Flujo de caja libre / capitalización | Cuánta caja te «da» cada euro invertido | Un año puntual puede engañar |
| **P/VC** | Capitalización / patrimonio neto | Bancos, aseguradoras, empresas de activos | Inútil en empresas de intangibles |
| **EV/ventas** | Valor de empresa / ventas | Empresas aún sin beneficios | Ventas sin margen no valen nada |

**El valor de empresa (EV)** es lo que costaría comprar el negocio entero, deuda incluida:

$$ EV = capitalización bursátil + deuda neta (+ minoritarios)

Inditex, en marzo de 2026: capitalización ≈ 163.500 millones, caja neta 10.958 → EV ≈ **152.500 millones**: unas **13,5 veces** su EBITDA y unas **19 veces** su EBIT. Su PER rondaba las **26 veces**.

**Con qué comparar un múltiplo**
1. Con **su propia historia**: ¿cotiza por encima o por debajo de lo habitual? ¿Ha cambiado algo?
2. Con **empresas parecidas**: mismo sector, tamaño y crecimiento.
3. Con **el mercado**: ¿cuánta prima o descuento hay, y está justificado?

**Un múltiplo no es barato ni caro por sí solo.** Un PER de 10 puede ser caro si el beneficio va a caer a la mitad; uno de 30 puede ser barato si el beneficio va a triplicarse. El múltiplo «justo» depende de tres cosas: **crecimiento, rentabilidad del capital y riesgo**. Una empresa con ROIC alto, que crece y con poca deuda merece un múltiplo mayor que otra que crece poco, gana poco y debe mucho.

**PER pasado y PER adelantado.** El PER **pasado** usa el beneficio de los últimos doce meses; el **adelantado** (*forward*), el que esperan los analistas para los próximos doce. El segundo dice más del futuro, pero depende de previsiones que suelen ser optimistas.
`,
  entender: `
#### El mismo EBITDA, distintas deudas
| | Empresa A | Empresa B |
|---|---|---|
| Capitalización | 1.000 | 600 |
| Deuda neta | −100 (caja) | 500 |
| EV | 900 | 1.100 |
| EBITDA | 100 | 100 |
| **EV/EBITDA** | **9,0** | **11,0** |
| Beneficio neto (EBIT 70, impuestos 25 %) | 54,75 | 33,75 |
| **PER** | **18,3** | **17,8** |

Por PER, B parece algo más barata. Por EV/EBITDA, que tiene en cuenta la deuda, es bastante más cara. Para comparar negocios, usa el valor de empresa.

#### El PER «justificado»
A partir del modelo de Gordon (lecciones 0.2 y 1.2), si una empresa reparte una parte del beneficio y crece a un ritmo constante g, con una rentabilidad exigida r:

$$ PER adelantado = payout / (r − g)      con   payout = 1 − g / ROE

| ROE | Crecimiento | Rentabilidad exigida | Payout | PER justificado |
|---|---|---|---|---|
| 20 % | 5 % | 9 % | 75 % | **18,8** |
| 10 % | 5 % | 9 % | 50 % | **12,5** |
| 20 % | 2 % | 9 % | 90 % | **12,9** |

El mismo crecimiento vale mucho más cuando se consigue con una rentabilidad alta (lección 4.5).

#### La trampa de las cíclicas
En las empresas cíclicas (acero, automóviles, materias primas, construcción), el beneficio es máximo justo antes de una recesión. En ese momento el PER parece bajísimo y es cuando más riesgo hay. Al revés, en el fondo del ciclo, con beneficios deprimidos, el PER parece altísimo y suele ser el mejor momento para comprar. Una acción a 100 € con un BPA de 10 en la cima tiene un PER de 10; si el BPA cae a 4 en la recesión, el PER sube a 25 sin que cambie el precio. Para las cíclicas, usa beneficios **medios del ciclo** o múltiplos sobre activos.

#### La coherencia entre numerador y denominador
- Si el denominador es para todos los financiadores (EBITDA, EBIT, ventas), el numerador debe ser el **valor de empresa**.
- Si es solo para el accionista (beneficio neto, dividendo), el numerador es la **capitalización**.
- Si el EBITDA incluye el efecto de la NIIF 16 (sin alquileres), el EV debería incluir la **deuda por arrendamientos**. Mezclar criterios hace parecer baratas a las empresas que alquilan mucho.
`,
  fondo: `
#### 1. De dónde salen los múltiplos «justos»
Todo múltiplo es un DCF simplificado (lección 4.8). Del modelo de crecimiento constante se derivan:
- **PER** = payout / (r − g), con payout = 1 − g/ROE.
- **P/VC** = (ROE − g) / (r − g). Un banco con un ROE del 15 %, un crecimiento del 3 % y un coste del capital del 11 % «merece» 1,5 veces su valor contable; con un ROE del 8 %, solo 0,63. Por eso los bancos que ganan menos que su coste del capital cotizan por debajo de su valor contable durante años.
- **EV/EBIT** = (1 − t) × (1 − g/ROIC) / (WACC − g).

Leer un múltiplo es preguntarse qué combinación de crecimiento, rentabilidad y riesgo está descontando el mercado.

#### 2. El PEG de Peter Lynch
Lynch popularizó el **PEG** = PER / crecimiento esperado del beneficio (en %). Un PEG cercano a 1 le parecía razonable; por debajo, atractivo. Es útil como filtro, pero tiene trampas: ignora la rentabilidad del capital, el riesgo y cuánto durará el crecimiento, y el crecimiento esperado suele ser demasiado optimista.

#### 3. El CAPE: el PER del mercado a largo plazo
Robert Shiller propuso el PER ajustado al ciclo (lección 1.3): precio entre el beneficio real medio de diez años. Predice, con mucho ruido, las rentabilidades a diez años del mercado en su conjunto. Para empresas individuales es menos útil, porque su negocio puede cambiar mucho en diez años.

#### 4. La valoración relativa y sus límites
Aswath Damodaran distingue entre **valor** (lo que se deriva de los flujos de caja) y **precio** (lo que el mercado paga, influido por el ánimo y los flujos de dinero). Los múltiplos comparados con otras empresas miden precio, no valor: si todo el sector está caro, una empresa «barata frente a sus comparables» puede seguir estando cara. Fue el error de quienes compraban tecnológicas en 1999 porque cotizaban con descuento frente a otras tecnológicas.

#### 5. Trampas de valor
Una **trampa de valor** es una acción con múltiplos bajos que siguen bajos o empeoran porque el negocio se deteriora. Señales:
- beneficio en declive estructural (tecnología, regulación, competencia);
- mucha deuda (lección 4.3);
- caja que no acompaña al beneficio (lección 4.4);
- una dirección que no reparte, sino que invierte en proyectos de baja rentabilidad.

La investigación sobre el factor valor (lección 2.8) muestra que comprar barato funciona mejor cuando se exige además **calidad**: rentabilidad, caja y poca deuda.
`,
  caso: {
    titulo: "2026: la bolsa estadounidense se abarata sin bajar",
    md: `
FactSet publica cada semana el PER adelantado del S&P 500: el precio del índice dividido entre el beneficio por acción que esperan los analistas para los doce meses siguientes.

- El **31 de diciembre de 2025**, ese PER era de **22,0**, muy por encima de sus medias históricas.
- El **5 de noviembre de 2026**, era de **17,7** (índice en 7.353,73 puntos y beneficio esperado de 415,82 dólares por acción): el más bajo desde noviembre de 2023.
- ¿Qué había pasado? El índice había **subido un 7,4 %** en el año, pero la previsión de beneficios había subido un **33,6 %**. El PER bajó porque creció la «E», no porque cayera la «P».
- El PER de 17,7 estaba por debajo de las medias de 5 años (19,8) y 10 años (19,1), pero aún por encima de las de 15, 20 y 25 años (17,6; 16,5 y 16,4).
- El sector de **tecnología** cotizaba a 17,3 veces, por debajo de su media de 25 años (20,0) y en su nivel más bajo desde marzo de 2020.

Ese mismo día, el Nasdaq cayó un 5,5 % y Nvidia un 9,3 % por las restricciones de exportación a China. Es la otra cara del PER adelantado: si las previsiones de beneficio fallan, el «PER barato» deja de serlo de golpe.

> Lo que enseña: un múltiplo bajo puede significar que el precio ha caído o que se espera que el beneficio suba mucho. En el segundo caso, la pregunta clave es si esas previsiones son realistas. Mira siempre de dónde viene el cambio del múltiplo y cuánto depende de beneficios que aún no existen.
`
  },
  ejercicios: [
    {
      t: "PER y EV/EBITDA con deuda",
      p: `
Dos empresas tienen un EBITDA de 100 y un EBIT de 70, y pagan un 25 % de impuestos. A vale en bolsa 1.000 y tiene 100 de caja neta que le rinde un 3 %. B vale 600 y tiene una deuda neta de 500 al 5 %. Calcula el EV/EBITDA y el PER de cada una. ¿Cuál es más barata?
`,
      s: `
1. **EV**: A = 1.000 − 100 = **900**; B = 600 + 500 = **1.100**.
2. **EV/EBITDA**: A = **9,0**; B = **11,0**.
3. **Beneficio neto**: A = (70 + 3) × 0,75 = 54,75; B = (70 − 25) × 0,75 = 33,75.
4. **PER**: A = 1.000 / 54,75 = **18,3**; B = 600 / 33,75 = **17,8**.
5. Por PER, B parece algo más barata, pero por el negocio entero (EV/EBITDA) es un 22 % más cara y además tiene el riesgo de su deuda. Para comparar negocios, el valor de empresa es la medida correcta.
`
    },
    {
      t: "El PER que justifican la rentabilidad y el crecimiento",
      p: `
Usa PER adelantado = (1 − g/ROE) / (r − g) para calcular el PER justificado de tres empresas con una rentabilidad exigida del 9 %: (a) ROE 20 %, crecimiento 5 %; (b) ROE 10 %, crecimiento 5 %; (c) ROE 20 %, crecimiento 2 %.
`,
      s: `
1. **(a)**: payout = 1 − 5/20 = 0,75 → PER = 0,75 / 0,04 = **18,8**.
2. **(b)**: payout = 1 − 5/10 = 0,50 → PER = 0,50 / 0,04 = **12,5**.
3. **(c)**: payout = 1 − 2/20 = 0,90 → PER = 0,90 / 0,07 = **12,9**.
4. (a) y (b) crecen igual, pero (a) necesita reinvertir la mitad para lograrlo y puede repartir más. Por eso merece un PER un 50 % mayor.
`
    },
    {
      t: "La trampa de la cíclica",
      p: `
Una acería cotiza a 100 €. En la cima del ciclo gana 10 € por acción; en la recesión siguiente su BPA cae a 4 €. Calcula su PER en cada momento sin que cambie el precio. ¿Qué PER usarías para decidir y por qué?
`,
      s: `
1. **En la cima**: 100 / 10 = **PER 10**. Parece barata.
2. **En la recesión**: 100 / 4 = **PER 25**. Parece cara.
3. **Beneficio medio del ciclo**: si es de unos 7 €, el PER normalizado es 100 / 7 ≈ **14**.
4. En las cíclicas, el PER bajo suele llegar en el peor momento para comprar, y el alto, en el mejor. Usa beneficios medios de un ciclo completo.
`
    }
  ],
  errores: [
    "Comprar porque el PER es bajo sin preguntar por qué lo es.",
    "Comparar el PER de empresas con niveles de deuda muy distintos.",
    "Usar el PER de una cíclica en la cima del ciclo.",
    "Mezclar EBITDA sin alquileres con un valor de empresa sin deuda por arrendamientos.",
    "Pensar que una acción es barata porque cotiza con descuento frente a un sector que está caro en conjunto."
  ],
  test: [
    { p: "¿Cómo se calcula el valor de empresa (EV)?", o: ["Capitalización − deuda neta", "Capitalización + deuda neta", "Patrimonio neto + deuda"], c: 1, e: "Es lo que costaría comprar el negocio entero, deuda incluida." },
    { p: "¿Qué múltiplo es más adecuado para comparar empresas con niveles de deuda muy distintos?", o: ["El PER", "El EV/EBITDA o EV/EBIT", "La rentabilidad por dividendo"], c: 1, e: "Porque el EV incluye la deuda." },
    { p: "¿Por qué bajó el PER adelantado del S&P 500 de 22 a 17,7 en 2026?", o: ["Porque la bolsa cayó un 20 %", "Porque el beneficio esperado subió mucho más que el precio", "Porque cambió la fórmula"], c: 1, e: "Precio +7,4 %, beneficio esperado +33,6 %." },
    { p: "En una empresa cíclica, un PER muy bajo suele aparecer…", o: ["En el fondo del ciclo", "En la cima del ciclo, cuando el beneficio es máximo", "Nunca"], c: 1, e: "Por eso conviene usar beneficios medios del ciclo." },
    { p: "Un banco con un ROE del 8 % y un coste del capital del 11 % suele cotizar…", o: ["Por encima de su valor contable", "Por debajo de su valor contable", "Exactamente a su valor contable"], c: 1, e: "P/VC = (ROE − g) / (r − g) < 1 cuando el ROE es menor que r." }
  ],
  lecturas: [
    { t: "Investment Valuation (capítulos de valoración relativa)", a: "Aswath Damodaran", n: "Cómo derivar y usar bien los múltiplos." },
    { t: "Un paso por delante de Wall Street", a: "Peter Lynch", n: "El PEG y la clasificación de empresas por tipo." },
    { t: "Earnings Insight", a: "FactSet (semanal, gratuito)", n: "PER adelantado del S&P 500 por sectores y sus medias históricas." },
    { t: "Damodaran Online: múltiplos por sector", a: "pages.stern.nyu.edu/~adamodar", n: "Tablas gratuitas con los múltiplos medios de cada sector en EE. UU., Europa y el mundo." }
  ]
});


/* ---- l08.js ---- */
LECCIONES.push({
  id: "b4-l8", num: "4.8",
  titulo: "Descontar flujos de caja: el valor intrínseco y el DCF inverso",
  resumen: "Una empresa vale lo que valen hoy todos los flujos de caja libre que generará en el futuro. El descuento de flujos (DCF) hace ese cálculo de forma explícita: previsión de flujos, valor terminal y tasa de descuento. Su resultado es muy sensible a los supuestos, así que su mejor uso para un particular es al revés: partir del precio y preguntarse qué crecimiento está descontando. Nvidia, en noviembre de 2026, necesitaba crecer en torno a un 12 % anual en caja durante diez años para justificar sus 4,4 billones de dólares.",
  esencial: `
**La idea (lección 0.2).** Un euro dentro de diez años vale menos que un euro hoy. El valor de una empresa es la suma de todo el flujo de caja libre que generará, traído a valor de hoy con una tasa que refleje su riesgo.

**Los cuatro pasos de un DCF**
1. **Prever el flujo de caja libre** durante 5–10 años: ventas, márgenes, impuestos e inversión necesaria (lecciones 4.2 a 4.5).
2. **Calcular un valor terminal** para todo lo que viene después, suponiendo un crecimiento estable y modesto (2–3 % anual, nunca por encima del crecimiento a largo plazo de la economía).
3. **Descontar** todo al **coste medio ponderado del capital** (WACC): lo que exigen accionistas y acreedores.
4. **Restar la deuda neta** y dividir entre el número de acciones para obtener el valor por acción.

**Un ejemplo sencillo.** Flujo de caja libre actual de 100, crecimiento del 10 % durante cinco años y del 3 % después, WACC del 9 %:
- Valor actual de los cinco primeros años: **514**.
- Valor actual del valor terminal: **1.797**.
- Valor de la empresa: **2.311**. El **78 %** viene del valor terminal.

**La gran trampa: la sensibilidad.** Cambiando un punto la tasa de descuento o el crecimiento terminal, el valor de ese ejemplo va de unos 1.800 a casi 3.400. Un DCF no da «el» valor de una empresa: da un rango, y ese rango depende de supuestos que nadie conoce con certeza.

**Cómo usarlo sin engañarte**
- Haz **escenarios** (pesimista, base y optimista) en lugar de un único número.
- Pide un **margen de seguridad**: compra solo si el precio está claramente por debajo del valor del escenario base.
- Usa el **DCF inverso**: en lugar de estimar el valor, calcula qué crecimiento hace falta para justificar el precio actual y pregúntate si es razonable. Es más honesto y requiere menos supuestos.
`,
  entender: `
#### El coste del capital (WACC)
$$ WACC = E/V × ke + D/V × kd × (1 − t)

- **ke**, coste de los fondos propios, con el CAPM (lección 2.7): ke = rf + β × prima de riesgo. Con el bono estadounidense a 10 años en torno al 4,5 % y la prima de riesgo implícita que calcula Aswath Damodaran en torno al 4,2 % (2026), una empresa con beta 1,1 tendría ke = 4,5 % + 1,1 × 4,2 % ≈ **9,1 %**.
- **kd**, coste de la deuda: lo que paga por ella, que desgrava (1 − t).
- Con un 80 % de fondos propios y un 20 % de deuda al 5,5 % con un impuesto del 25 %: WACC = 0,8 × 9,1 % + 0,2 × 5,5 % × 0,75 ≈ **8,1 %**.

En euros, con tipos más bajos, el coste del capital suele ser algo menor. Como referencia práctica, muchas empresas cotizadas grandes tienen un WACC entre el 7 % y el 10 %; las pequeñas o arriesgadas, más.

#### El valor terminal (modelo de Gordon)
$$ valor terminal en el año N = FCL(N + 1) / (WACC − g)

Debe ser coherente con la lección 4.5: crecer un 3 % para siempre exige reinvertir g / ROIC del beneficio operativo. Si supones crecimiento sin reinversión, inflas el valor.

#### Tabla de sensibilidad del ejemplo
Valor de la empresa según la tasa de descuento (filas) y el crecimiento terminal (columnas):
| WACC | g = 2 % | g = 3 % | g = 4 % |
|---|---|---|---|
| 8 % | 2.392 | 2.786 | 3.378 |
| 9 % | 2.039 | **2.311** | 2.691 |
| 10 % | 1.775 | 1.971 | 2.233 |

Un punto más de WACC resta en torno a un 15 %; un punto más de crecimiento terminal suma en torno a un 13–21 %.

#### El DCF inverso, paso a paso
1. Toma el **precio** (o el valor de empresa) actual.
2. Fija la tasa de descuento y el crecimiento terminal.
3. Busca qué **crecimiento de los flujos** en los próximos años hace que el DCF dé exactamente el precio.
4. Compara ese crecimiento con la historia de la empresa, su sector y lo que es posible para una empresa de su tamaño.

Michael Mauboussin y Alfred Rappaport lo llamaron **invertir según expectativas**: no tienes que acertar el valor exacto, solo decidir si las expectativas del precio son demasiado altas o demasiado bajas.
`,
  fondo: `
#### 1. Un poco de historia
John Burr Williams formuló en 1938 (*The Theory of Investment Value*) la idea de que el valor de una acción es el valor actual de sus dividendos futuros. Myron Gordon y Eli Shapiro la simplificaron para el caso de crecimiento constante en 1956. En los años ochenta, con Alfred Rappaport y los manuales de McKinsey, el descuento de flujos de caja libre se convirtió en el método de referencia en las finanzas corporativas.

#### 2. Flujo para la empresa y flujo para el accionista
- **Flujo de caja libre para la empresa (FCFF)**: NOPAT − inversión neta (capex − amortizaciones + aumento del circulante). Se descuenta al **WACC** y da el valor de empresa; después se resta la deuda neta.
- **Flujo de caja libre para el accionista (FCFE)**: FCFF − intereses × (1 − t) + deuda nueva neta. Se descuenta al **coste de los fondos propios** y da directamente el valor de las acciones.

Bien hechos, los dos métodos dan el mismo resultado. Lo que no se puede hacer es mezclarlos: descontar flujos para el accionista al WACC, o flujos de la empresa al coste de los fondos propios.

#### 3. Coherencia entre crecimiento, rentabilidad y reinversión
El error más frecuente en los DCF es suponer a la vez crecimiento alto, márgenes crecientes y poca inversión. La identidad de la lección 4.5 ayuda a evitarlo:

$$ FCL = NOPAT × (1 − g / ROIC)

Con un ROIC del 15 % y un crecimiento del 3 %, el flujo libre es el 80 % del NOPAT. Si en tu modelo es el 100 % con un crecimiento del 8 %, estás suponiendo un ROIC infinito.

#### 4. Escenarios y simulaciones
En lugar de un solo valor, se puede asignar una probabilidad a cada escenario o hacer una **simulación de Montecarlo**, dando a cada supuesto (crecimiento, margen, WACC) una distribución y calculando miles de valores. El resultado es una **distribución del valor**: más honesto, aunque la calidad del resultado depende de la de las distribuciones que pongas.

#### 5. Opciones reales
Algunas empresas valen más que sus flujos esperados porque tienen **opciones**: entrar en un mercado nuevo, ampliar una mina si sube el precio del cobre, abandonar un proyecto que sale mal. La teoría de opciones (lección 1.10) permite valorarlas. Es útil en farmacéuticas en fase de ensayos, recursos naturales y tecnológicas jóvenes, pero también es la excusa favorita para justificar cualquier precio.

#### 6. Valor terminal y crecimiento a largo plazo
Ninguna empresa puede crecer para siempre más deprisa que la economía: acabaría siendo mayor que ella. Por eso el crecimiento terminal debe estar por debajo del crecimiento nominal a largo plazo del PIB (en torno al 3–4 % en economías desarrolladas) y, preferiblemente, por debajo del tipo libre de riesgo a largo plazo. Si el valor terminal supone más del 80 % del valor total, el resultado depende casi por completo de lo que pase después de tu horizonte de previsión: refuerza el margen de seguridad.
`,
  caso: {
    titulo: "Nvidia en noviembre de 2026: ¿qué crecimiento descuenta su precio?",
    md: `
Nvidia, el gran fabricante de chips para inteligencia artificial, fue en octubre de 2025 la primera empresa de la historia en superar los **5 billones** de dólares de valor en bolsa. Un año después:
- Su ejercicio fiscal 2026 (cerrado en enero de 2026) se saldó con unas ventas de **215.900 millones** (+65 %), un beneficio neto de más de 115.000 millones y un flujo de caja libre de **96.600 millones**.
- En el segundo trimestre del ejercicio 2027 (agosto de 2026) vendió 96.200 millones, más del doble que un año antes.
- El 5 de noviembre de 2026 cayó un **9,3 %** en un día, en plena venta de semiconductores y con noticias de que los clientes chinos solo recibirían una mínima parte de los chips encargados. El 10 de noviembre cotizaba a unos 180 dólares: **4,4 billones** de valor en bolsa.
- Su flujo de caja libre de los últimos doce meses rondaba los **127.000 millones**: una rentabilidad por flujo de caja libre del **2,9 %**.

**El DCF inverso.** Supongamos que su flujo de caja libre crece a un ritmo constante durante diez años y después un 3 % anual para siempre, y que la caja neta es pequeña frente a su valor. ¿Qué crecimiento justifica los 4,4 billones?
| Tasa de descuento | Crecimiento anual necesario 10 años | Flujo de caja libre en el año 10 |
|---|---|---|
| 8 % | 9,6 % | ≈ 317.000 millones |
| 9 % | **12,2 %** | ≈ 401.000 millones |
| 10 % | 14,5 % | ≈ 494.000 millones |

Si su flujo de caja no creciera nada en diez años, con una tasa del 9 %, valdría en torno a **1,7 billones**: menos de la mitad del precio.

¿Es razonable un crecimiento del 12 % anual durante una década para una empresa que ya ingresa más de 200.000 millones? Depende de cuánto dure el gasto en inteligencia artificial, de si sus clientes desarrollan sus propios chips y de cuánto margen pueda mantener. El DCF inverso no responde a esas preguntas, pero dice con claridad **cuáles son**.

> Lo que enseña: el precio de una acción siempre lleva dentro unas expectativas. Calcularlas es más útil que intentar estimar un valor exacto, sobre todo en empresas de crecimiento rápido, en las que pequeños cambios de supuestos mueven el valor de forma enorme.
`
  },
  ejercicios: [
    {
      t: "Un DCF de dos etapas",
      p: `
Una empresa genera hoy un flujo de caja libre de 100. Crecerá un 10 % anual durante cinco años y un 3 % anual después. Su WACC es del 9 %, tiene una deuda neta de 300 y 50 acciones. Calcula su valor de empresa, su valor por acción y qué parte del valor viene del valor terminal.
`,
      s: `
1. **Flujos de los años 1 a 5**: 110; 121; 133,1; 146,4; 161,1.
2. **Su valor actual** (descontando al 9 %): ≈ **513,9**.
3. **Valor terminal en el año 5**: 161,1 × 1,03 / (0,09 − 0,03) ≈ **2.764,7** → valor actual = 2.764,7 / 1,09⁵ ≈ **1.796,9**.
4. **Valor de empresa**: 513,9 + 1.796,9 ≈ **2.310,8**. El valor terminal es el **78 %**.
5. **Valor de las acciones**: 2.310,8 − 300 = 2.010,8 → **40,2 € por acción**.
`
    },
    {
      t: "El coste del capital",
      p: `
Una empresa tiene una beta de 1,1, un 80 % de fondos propios y un 20 % de deuda, que le cuesta un 5,5 %. El tipo libre de riesgo es del 4,5 %, la prima de riesgo del mercado del 4,2 % y el impuesto de sociedades del 25 %. Calcula su coste de los fondos propios y su WACC.
`,
      s: `
1. **Coste de los fondos propios** (CAPM): 4,5 % + 1,1 × 4,2 % = **9,12 %**.
2. **Coste de la deuda después de impuestos**: 5,5 % × (1 − 0,25) = 4,125 %.
3. **WACC**: 0,8 × 9,12 % + 0,2 × 4,125 % ≈ **8,1 %**.
4. Con este WACC, el valor del ejercicio anterior estaría entre la fila del 8 % y la del 9 % de la tabla de sensibilidad: de nuevo, un rango.
`
    },
    {
      t: "El crecimiento que descuenta el precio",
      p: `
Una acción cotiza a 300 € y su flujo de caja libre por acción es de 10 €. Con una rentabilidad exigida del 9 % y suponiendo un crecimiento constante para siempre, ¿qué crecimiento está descontando el mercado? Usa P = FCL × (1 + g) / (r − g).
`,
      s: `
1. **Despejando g**: g = (r × P − FCL) / (P + FCL).
2. **Sustituyendo**: g = (0,09 × 300 − 10) / (300 + 10) = 17 / 310 ≈ **5,5 %** anual para siempre.
3. Es un crecimiento alto para una perpetuidad (por encima del crecimiento nominal de la economía a largo plazo). O la empresa crecerá mucho más durante unos años y luego se moderará, o el precio es exigente. Ahora la pregunta es concreta y se puede discutir.
`
    }
  ],
  errores: [
    "Tratar el resultado de un DCF como un número exacto en lugar de un rango.",
    "Suponer un crecimiento terminal superior al de la economía a largo plazo.",
    "Proyectar crecimiento alto sin la reinversión necesaria para conseguirlo.",
    "Descontar flujos para el accionista al WACC o flujos de la empresa al coste de los fondos propios.",
    "Ajustar los supuestos hasta que el valor sale por encima del precio porque ya quieres comprar."
  ],
  test: [
    { p: "¿Qué parte del valor suele venir del valor terminal en un DCF a cinco años?", o: ["Menos del 10 %", "En torno al 20 %", "Con frecuencia más del 60–70 %"], c: 2, e: "En el ejemplo de la lección, el 78 %." },
    { p: "¿Qué hace un DCF inverso?", o: ["Calcula el valor exacto", "Calcula qué crecimiento justifica el precio actual", "Descuenta los dividendos pasados"], c: 1, e: "Mauboussin y Rappaport lo llamaron invertir según expectativas." },
    { p: "Si sube la tasa de descuento, el valor de la empresa…", o: ["Sube", "Baja", "No cambia"], c: 1, e: "Los flujos futuros valen menos hoy." },
    { p: "¿Qué crecimiento anual de su flujo de caja durante diez años descontaba Nvidia en noviembre de 2026, con una tasa del 9 %?", o: ["En torno al 3 %", "En torno al 12 %", "En torno al 40 %"], c: 1, e: "Pasar de unos 127.000 a unos 400.000 millones de flujo libre en diez años." },
    { p: "¿Por qué el crecimiento terminal no debe superar al de la economía?", o: ["Por normas contables", "Porque la empresa acabaría siendo mayor que la economía", "Porque lo prohíbe la CNMV"], c: 1, e: "En perpetuidad, ninguna empresa puede crecer más que la economía." }
  ],
  lecturas: [
    { t: "Expectations Investing", a: "Michael Mauboussin y Alfred Rappaport (edición revisada, 2021)", n: "El método del DCF inverso, explicado paso a paso." },
    { t: "The Theory of Investment Value", a: "John Burr Williams, 1938", n: "El origen de la idea del valor actual de los flujos." },
    { t: "Investment Valuation", a: "Aswath Damodaran", n: "El manual completo de valoración. Su web tiene hojas de cálculo gratuitas." },
    { t: "Narrative and Numbers", a: "Aswath Damodaran", n: "Cómo convertir una historia sobre una empresa en supuestos de valoración, y al revés." }
  ]
});


/* ---- l09.js ---- */
LECCIONES.push({
  id: "b4-l9", num: "4.9",
  titulo: "Asignación de capital: dividendos, recompras, deuda y adquisiciones",
  resumen: "Una empresa que genera caja tiene que decidir qué hace con ella: reinvertir, comprar otras empresas, pagar deuda, repartir dividendos o recomprar acciones. Esa decisión, la asignación del capital, determina cuánto del éxito del negocio llega al accionista. Un dividendo que no cubre el flujo de caja libre acaba recortándose, como le pasó a Telefónica en 2025; una recompra solo crea valor si se hace por debajo de lo que vale la empresa.",
  esencial: `
**Las cinco salidas de la caja**
| Uso | Cuándo tiene sentido | Riesgo |
|---|---|---|
| **Reinvertir** en el negocio (capex, I+D, tiendas) | Si el ROIC de esa inversión supera al coste del capital (lección 4.5) | Invertir en proyectos mediocres por crecer |
| **Comprar empresas** | Si se paga menos de lo que vale lo comprado, sinergias incluidas | Pagar de más; la mayoría de las grandes compras destruyen valor para el comprador |
| **Pagar deuda** | Si la deuda es alta o cara | Pocos; reduce riesgo |
| **Dividendos** | Si no hay inversiones mejores y la caja es recurrente | Prometer más de lo que el negocio puede pagar |
| **Recomprar acciones** | Si la acción cotiza por debajo de su valor | Recomprar caro o solo para compensar la emisión de acciones a directivos |

**El orden lógico**: primero, invertir en el negocio todo lo que rinda más que el coste del capital; después, mantener una deuda prudente; lo que sobre, devolverlo a los accionistas.

**Cómo saber si un dividendo es sostenible**
- **Payout sobre beneficio**: dividendo / beneficio neto. Por encima del 70–80 % deja poco margen, salvo en negocios muy estables.
- **Payout sobre flujo de caja libre**: dividendo / flujo de caja libre. **Es el más importante.** Si supera el 100 % varios años, el dividendo se está pagando con deuda o con venta de activos.
- **Historia**: las empresas recortan el dividendo a regañadientes. Un recorte es casi siempre una señal de que la caja no da para más.

**Recompras: no todas son iguales.** Una recompra reduce el número de acciones y aumenta el beneficio por acción (lección 4.2). Pero solo **crea valor** para los accionistas que se quedan si la empresa compra **por debajo** del valor real de sus acciones. Recomprar caro transfiere valor a los que venden.

**Dimensiones en 2025–2026**: las empresas del S&P 500 recompraron acciones por un récord de **1,02 billones de dólares** en los doce meses hasta septiembre de 2025 y, con los dividendos, devolvieron **1,685 billones**. ASML anunció recompras de hasta 12.000 millones de euros hasta 2028; Inditex propuso un dividendo de 1,75 € por acción; Telefónica, en cambio, recortó el suyo a la mitad.
`,
  entender: `
#### Dividendo o recompra: en teoría, lo mismo
Una empresa vale 1.000, tiene 100 acciones (10 € cada una) y le sobran 100 de caja.
- **Dividendo de 1 € por acción**: la empresa pasa a valer 900; cada acción, 9 €. El accionista tiene 9 € en acciones y 1 € en efectivo: **10 €**.
- **Recompra de 10 acciones a 10 €**: la empresa vale 900 y quedan 90 acciones: **10 €** cada una. El que vendió tiene 10 € en efectivo; el que no vendió, una acción de 10 €.

Sin impuestos ni errores de precio, da igual. En la práctica, cambian tres cosas:
1. **Impuestos**: en España, el dividendo tributa cada año en la base del ahorro; la recompra solo genera impuesto a quien vende (bloque 8).
2. **Flexibilidad**: el dividendo se percibe como un compromiso; la recompra se puede parar sin escándalo.
3. **Precio**: una recompra a precio alto destruye valor para quien se queda; una a precio bajo lo crea.

#### Recomprar barato o caro
Una empresa cuyas acciones valen de verdad 60 € dedica 500 a recomprar.
| Precio de recompra | Acciones compradas (de 100) | Valor por acción de las que quedan |
|---|---|---|
| 50 € | 10 | **61,1 €** |
| 75 € | 6,7 | **58,9 €** |

Recomprar a 50 € suma valor a quien se queda; a 75 € se lo resta. Mira también si las recompras solo compensan las acciones que la empresa entrega a sus directivos: entonces no reducen el número de acciones, solo convierten caja en remuneración.

#### Adquisiciones: por qué suelen salir mal
- **La maldición del ganador**: en una subasta gana quien más paga, y a menudo paga demasiado.
- **Sinergias optimistas**: se prometen ahorros que tardan más y cuestan más de lo previsto.
- **Intereses de la dirección**: dirigir una empresa más grande da más poder y suele dar más sueldo.

Las compras pequeñas, de negocios cercanos al propio y pagadas con caja, suelen salir mejor que las grandes, en sectores nuevos y pagadas con acciones.

#### Señales de buena asignación de capital
- La dirección explica con números qué rentabilidad espera de cada uso de la caja.
- Recompra cuando la acción está baja y la para cuando está alta.
- Las compras de empresas se miden después, y la empresa reconoce los errores.
- La remuneración de los directivos depende del ROIC o del flujo de caja por acción, no solo del tamaño o del BPA.
`,
  fondo: `
#### 1. Miller y Modigliani (1961): la irrelevancia del dividendo
Igual que con la deuda (lección 4.3), Miller y Modigliani demostraron que, en mercados perfectos y sin impuestos, la política de dividendos no cambia el valor de la empresa: lo que importa es cuánta caja genera y en qué la invierte. El accionista que quiere ingresos puede vender acciones (un «dividendo casero»); el que no los quiere, reinvertir el dividendo. Las diferencias reales vienen de los impuestos, los costes de transacción, la información que transmite el dividendo y los incentivos de la dirección.

#### 2. Lintner (1956): los dividendos se suavizan
John Lintner entrevistó a directivos de grandes empresas estadounidenses y encontró que fijan un **objetivo de payout a largo plazo** y ajustan el dividendo despacio hacia él, evitando a toda costa recortarlo. Consecuencia: el dividendo es mucho más estable que el beneficio, y un **recorte** transmite una información muy negativa: la dirección cree que la caja no se recuperará pronto. Por eso las acciones caen tanto con los recortes.

#### 3. Jensen (1986): el problema del flujo de caja libre
Michael Jensen argumentó que las empresas con mucha caja y pocas oportunidades rentables tienden a malgastarla en proyectos y adquisiciones que no crean valor, porque a la dirección le interesa gestionar más recursos. La deuda y los dividendos **disciplinan** a la dirección: le quitan caja que podría malgastar. Es una razón para desconfiar de las empresas maduras que acumulan caja sin un plan.

#### 4. La evidencia sobre adquisiciones y recompras
- Moeller, Schlingemann y Stulz (2005) calcularon que los accionistas de las empresas compradoras en EE. UU. perdieron en torno a **240.000 millones de dólares** en el anuncio de sus compras entre 1998 y 2001, concentrados en unas pocas operaciones enormes.
- Ikenberry, Lakonishok y Vermaelen (1995) encontraron que las empresas que anunciaban recompras rendían en los cuatro años siguientes en torno a un **12 %** más que empresas comparables, y mucho más las que estaban baratas por valor contable: el mercado infravaloraba la señal de que la dirección creía que su acción estaba barata.
- El debate sobre si las recompras masivas restan inversión (William Lazonick) o simplemente devuelven caja que no tiene mejor uso (Jesse Fried y Charles Wang) sigue abierto.

#### 5. Los grandes asignadores de capital
William Thorndike (*The Outsiders*, 2012) estudió a ocho directivos que multiplicaron el valor de sus empresas muy por encima del mercado, como Henry Singleton (Teledyne) o Warren Buffett (Berkshire Hathaway). Tenían en común: pensar en **flujo de caja por acción**, no en tamaño; recomprar acciones de forma agresiva cuando estaban baratas y emitirlas cuando estaban caras; descentralizar la gestión y centralizar las decisiones de capital; y no pagar dividendos cuando podían reinvertir mejor. Volveremos a Buffett en el bloque 7.
`,
  caso: {
    titulo: "Telefónica recorta el dividendo a la mitad (noviembre de 2025)",
    md: `
Durante años, Telefónica fue para muchos inversores españoles sinónimo de dividendo. El 4 de noviembre de 2025, su presidente, Marc Murtra, presentó el plan estratégico *Transform & Grow* (2026–2030):
- El dividendo de 2025 se mantenía en **0,30 €** por acción, pagado en dos tramos (diciembre de 2025 y junio de 2026).
- El de 2026 se **reducía a la mitad**, a **0,15 €**, pagadero en junio de 2027.
- Para 2027 y 2028, el dividendo quedaba ligado a un **40–60 % del flujo de caja libre**.
- La empresa preveía crecer en ingresos solo un 1,5–2,5 % anual hasta 2028, y presentó al mismo tiempo unas pérdidas de 1.080 millones en los nueve primeros meses de 2025, por la salida de varios países latinoamericanos.

La reacción: la acción cayó casi un **13 %** ese día, su peor sesión desde marzo de 2020, y cerca de un 16 % en dos días.

¿Por qué recortar? Con unos 5.670 millones de acciones, un dividendo de 0,30 € cuesta en torno a **1.700 millones** al año. Según los análisis publicados, el flujo de caja libre de 2025 apenas lo cubría, tras años de deuda elevada, inversiones en redes y ventas de activos. Pagar más de lo que genera el negocio solo se puede hacer durante un tiempo, endeudándose o vendiendo activos.

> Lo que enseña: la rentabilidad por dividendo alta no es un regalo; es un precio bajo que a menudo anticipa un recorte. La prueba de un dividendo es su cobertura con flujo de caja libre, año tras año, no su historial. Y cuando el mercado lo intuye, el recorte llega con la acción ya castigada.
`
  },
  ejercicios: [
    {
      t: "¿Está cubierto el dividendo?",
      p: `
Una empresa reparte 1.700 millones al año en dividendos. Su flujo de caja libre ha sido de 1.800 millones este año y se espera que baje a 1.500 el próximo. Calcula el payout sobre flujo de caja libre en ambos casos. ¿Qué opciones tiene la empresa si quiere mantener el dividendo?
`,
      s: `
1. **Este año**: 1.700 / 1.800 = **94 %**: cubierto, pero sin margen para reducir deuda o invertir más.
2. **El próximo año**: 1.700 / 1.500 = **113 %**: el dividendo supera la caja que genera.
3. **Opciones para mantenerlo**: endeudarse, vender activos o pagar parte en acciones (lo que diluye). Ninguna es sostenible varios años.
4. Un payout sobre flujo de caja libre cercano o superior al 100 % es la señal más fiable de que un dividendo puede recortarse.
`
    },
    {
      t: "Recomprar por debajo y por encima del valor",
      p: `
Una empresa tiene 100 acciones y vale en total 6.000 (60 € por acción), incluidos 500 de caja. Dedica esos 500 a recomprar acciones. Calcula el valor por acción de las que quedan si recompra a 50 € y si recompra a 75 €.
`,
      s: `
1. **Valor tras gastar la caja**: 6.000 − 500 = 5.500 en ambos casos.
2. **A 50 €**: compra 500 / 50 = 10 acciones → quedan 90 → 5.500 / 90 = **61,1 €** por acción.
3. **A 75 €**: compra 500 / 75 = 6,67 acciones → quedan 93,33 → 5.500 / 93,33 = **58,9 €** por acción.
4. La misma recompra crea un 1,9 % de valor para quien se queda o le quita un 1,8 %, según el precio. El BPA sube en los dos casos: por eso el BPA no basta para juzgar una recompra.
`
    },
    {
      t: "Dividendo o recompra en un mundo sin impuestos",
      p: `
Una empresa vale 1.000, tiene 100 acciones y 100 de caja que no necesita. Compara la situación de un accionista con una acción si (a) reparte 1 € por acción de dividendo o (b) recompra 10 acciones a su precio. ¿Qué cambia al introducir impuestos?
`,
      s: `
1. **(a) Dividendo**: la empresa pasa a valer 900 → 9 € por acción. El accionista tiene 9 € en acciones + 1 € en efectivo = **10 €**.
2. **(b) Recompra**: la empresa vale 900 con 90 acciones → **10 €** por acción. Quien no vende tiene una acción de 10 €.
3. **Sin impuestos**, es lo mismo (Miller y Modigliani, 1961).
4. **Con impuestos**: con el dividendo, todos los accionistas pagan impuesto ese año sobre 1 €. Con la recompra, solo paga quien vende, y solo por su ganancia. Para el que acumula a largo plazo, la recompra es más eficiente fiscalmente (bloque 8).
`
    }
  ],
  errores: [
    "Elegir acciones por su rentabilidad por dividendo sin comprobar si el flujo de caja libre la cubre.",
    "Celebrar cualquier recompra sin mirar a qué precio se hace ni si solo compensa la dilución.",
    "Aplaudir una gran adquisición por las sinergias anunciadas, sin esperar a ver los resultados.",
    "Ignorar en qué se basa la remuneración de la dirección.",
    "Pensar que un dividendo que se ha pagado veinte años no se puede recortar."
  ],
  test: [
    { p: "¿Qué indicador es más fiable para juzgar si un dividendo es sostenible?", o: ["El payout sobre beneficio", "El payout sobre flujo de caja libre", "La rentabilidad por dividendo"], c: 1, e: "Si supera el 100 % varios años, se paga con deuda o ventas de activos." },
    { p: "¿Cuándo crea valor una recompra de acciones para los accionistas que se quedan?", o: ["Siempre", "Cuando se hace por debajo del valor real de la acción", "Cuando sube el BPA"], c: 1, e: "El BPA sube siempre; el valor, solo si se compra barato." },
    { p: "¿Qué encontró Lintner (1956) sobre los dividendos?", o: ["Que las empresas los cambian cada año con el beneficio", "Que se suavizan y se evita recortarlos", "Que no importan"], c: 1, e: "Por eso un recorte es una señal tan negativa." },
    { p: "¿Cuánto cayó Telefónica el día que anunció el recorte de su dividendo?", o: ["En torno a un 2 %", "Casi un 13 %", "Un 50 %"], c: 1, e: "Su peor sesión desde marzo de 2020." },
    { p: "Según Jensen (1986), ¿qué problema tienen las empresas con mucha caja y pocas oportunidades?", o: ["Pagan demasiados impuestos", "Tienden a malgastarla en proyectos y compras que no crean valor", "No pueden endeudarse"], c: 1, e: "La deuda y los dividendos disciplinan a la dirección." }
  ],
  lecturas: [
    { t: "The Outsiders", a: "William Thorndike", n: "Ocho directivos que hicieron de la asignación de capital su ventaja." },
    { t: "Cartas a los accionistas de Berkshire Hathaway", a: "Warren Buffett, berkshirehathaway.com", n: "Gratuitas. Las de 1984, 1999 y 2011 hablan de recompras." },
    { t: "Agency Costs of Free Cash Flow, Corporate Finance, and Takeovers", a: "Michael Jensen, American Economic Review, 1986" },
    { t: "Capital Allocation: Evidence, Analytical Methods, and Assessment Guidance", a: "Michael Mauboussin y Dan Callahan", n: "Guía gratuita y muy completa." }
  ]
});


/* ---- l10.js ---- */
LECCIONES.push({
  id: "b4-l10", num: "4.10",
  titulo: "Pequeñas compañías y tu proceso de análisis",
  resumen: "Las empresas pequeñas son el terreno donde un particular tiene más opciones de ventaja: hay menos analistas, los grandes fondos no pueden entrar y algunas crecen durante décadas. Pero también son más volátiles, menos líquidas y, cada vez más, no ganan dinero: en torno al 40 % del Russell 2000 tiene pérdidas. Para invertir en ellas hace falta un proceso: filtros de calidad, deuda baja, una tesis escrita y reglas de venta decididas de antemano.",
  esencial: `
**Qué son.** No hay una definición única. En EE. UU., el índice de referencia es el **Russell 2000**: unas 2.000 empresas con valores en bolsa de entre unos cientos de millones y unos pocos miles de millones de dólares. En Europa, se suele hablar de pequeñas por debajo de 2.000–5.000 millones de euros. En España, muchas cotizan en el Mercado Continuo fuera del IBEX 35 y en BME Growth.

**Por qué pueden ser una oportunidad**
- **Menos cobertura**: muchas tienen pocos o ningún analista siguiéndolas, así que los precios pueden ser menos eficientes.
- **Los grandes no pueden entrar**: un fondo de miles de millones no puede comprar una posición relevante en una empresa de 200 millones. Tú sí.
- **Recorrido**: las grandes ganadoras de Bessembinder (lección 4.1) casi siempre empezaron siendo pequeñas.

**Por qué son más difíciles**
- **Más volatilidad** y caídas más profundas en las crisis.
- **Menos liquidez**: diferencias entre precio de compra y de venta mayores, sobre todo en las más pequeñas.
- **Más dependencia de la financiación**: muchas no generan caja y necesitan ampliar capital o endeudarse, a menudo a tipo variable.
- **Peor calidad media**: en torno al **40 %** de las empresas del Russell 2000 no tenía beneficios en 2026, frente al 17 % de hace dos décadas.

**¿Han rendido más?** El famoso «efecto tamaño» (Banz, 1981) se debilitó mucho después de publicarse. Entre 1997 y 2026, el Russell 2000 rindió de media un 7,2 % anual, unos 0,8 puntos menos que el S&P 500. Lo que sí ha funcionado son las pequeñas **de calidad**: rentables, con caja y poca deuda (lección 2.8).

**Reglas prácticas para tu satélite**
1. Aplica **filtros de calidad** antes de enamorarte de una historia: caja libre, ROIC, deuda.
2. Limita el peso: por ejemplo, ninguna posición por encima del 2–5 % del total y un satélite que no supere el 10–20 %.
3. Escribe tu **tesis** y tus **reglas de venta** antes de comprar.
4. Revisa cada resultado frente a la tesis, no frente al precio.
`,
  flujo: {
    pasos: [
      { q: "¿Entiendes en una frase cómo gana dinero?", d: "Quién le paga, por qué y por qué a ella y no a otra.", no: "Descártala o estudia antes el sector." },
      { q: "¿Ha generado caja libre y un ROIC superior al 10 % en la mayoría de los últimos 5–10 años?", d: "Lecciones 4.4 y 4.5.", no: "Solo si hay una razón clara y temporal; si no, descártala." },
      { q: "¿Deuda neta / EBITDA por debajo de 2 y sin vencimientos que la ahoguen?", d: "Lección 4.3.", no: "Descártala o exige un margen de seguridad mucho mayor." },
      { q: "¿Tiene una ventaja competitiva que pueda durar?", d: "Lección 4.6.", no: "Es un negocio normal: solo a precio de ganga." },
      { q: "¿La dirección está alineada y las cuentas son limpias?", d: "Participación propia, asignación de capital razonable, sin señales de alarma (lecciones 4.4 y 4.9).", no: "Descártala: el riesgo no compensa." },
      { q: "¿El precio descuenta expectativas razonables con margen de seguridad?", d: "DCF inverso y múltiplos frente a su historia y comparables (lecciones 4.7 y 4.8).", no: "A tu lista de seguimiento, con el precio al que comprarías." }
    ],
    fin: { t: "Compra con un peso acotado y una tesis escrita", d: "Anota por qué compras, qué esperas que pase y qué te haría vender: el semáforo de tu consola (bloque 10)." }
  },
  entender: `
#### El coste de operar con pequeñas
En una gran empresa, la diferencia entre el mejor precio de compra y el de venta (*spread*) puede ser del 0,01–0,05 %. En una pequeña poco negociada, del 1–3 %. Comprar y vender una posición de 3.000 € con un spread del 1,2 % y 2 € de comisión en cada operación cuesta en torno a **40 €**, un **1,3 %**, solo en entrar y salir. Usa órdenes limitadas, no compres de golpe posiciones grandes frente al volumen diario y evita operar a menudo.

#### Cómo buscar candidatas
Un buscador de acciones (los hay gratuitos en muchas webs y brókeres) permite filtrar miles de empresas en minutos. Un filtro razonable para empezar:
| Criterio | Umbral orientativo |
|---|---|
| ROIC (o ROE sin mucha deuda) | > 10–12 % de media en 5 años |
| Flujo de caja libre | Positivo en al menos 4 de los últimos 5 años |
| Deuda neta / EBITDA | < 2 |
| Crecimiento de ventas | Positivo a 5 años |
| Participación de los directivos | Significativa |
| Valoración | EV/EBIT o PER razonables frente a su historia |

El filtro no elige por ti: reduce la lista a unas pocas decenas que merece la pena leer.

#### Qué leer de una pequeña
- **El informe anual completo**, incluidas las notas: en las pequeñas, una sola cliente o un solo contrato pueden ser la mitad del negocio.
- **Las operaciones con partes vinculadas**: es más frecuente que el fundador tenga negocios cruzados con la empresa.
- **El historial de ampliaciones de capital**: una pequeña que amplía capital cada año diluye a sus accionistas.
- **Quién más es accionista**: fundadores con mucho capital propio y fondos especializados son buena señal; una base accionarial muy especulativa, no.

#### La tesis escrita
Una tesis útil cabe en media página:
1. **Qué compro y por qué está barato**: qué cree el mercado y por qué crees que se equivoca.
2. **Qué tiene que pasar** y en qué plazo: cifras concretas que puedas comprobar (márgenes, ventas, deuda).
3. **Qué me haría vender**: tesis rota (no se cumple lo que esperabas), valoración exigente o una oportunidad claramente mejor.

Revisarla después de cada resultado te protege de los dos errores más caros: aferrarte a una tesis rota y vender una ganadora solo porque ha subido (lección 4.1).
`,
  fondo: `
#### 1. Auge y declive del efecto tamaño
Rolf Banz (1981) encontró que las empresas pequeñas de la bolsa estadounidense habían rendido más de lo que justificaba su beta entre 1936 y 1975. Fama y French (1992) lo incorporaron a su modelo de tres factores (lección 2.8). Pero, poco después de publicarse, la prima prácticamente desapareció en EE. UU.: G. William Schwert (2003) lo citó como ejemplo de anomalía que se debilita cuando se conoce. Además, buena parte del efecto se concentraba en las microempresas, enero y empresas difíciles de negociar.

#### 2. «El tamaño importa si controlas la basura»
Asness, Frazzini, Israel, Moskowitz y Pedersen (2018) mostraron que el efecto tamaño **reaparece con fuerza** cuando se controla por calidad: las pequeñas de mala calidad (sin beneficios, mucha deuda, beneficios volátiles) son tantas y rinden tan mal que tapan el buen comportamiento de las pequeñas de calidad. Con ese control, la prima del tamaño es más estable en el tiempo, en distintos países y no depende de las microempresas. Es exactamente lo que hace un buen filtro de calidad.

#### 3. Las microempresas y las anomalías
Hou, Xue y Zhang (2020) intentaron replicar 452 anomalías publicadas y encontraron que la mayoría desaparece cuando se reduce el peso de las **microempresas**, que son muchas, pequeñas y caras de negociar. Lección para el particular: muchas estrategias que «funcionan» en los artículos no sobreviven a los costes de operar con las empresas más pequeñas.

#### 4. Las acciones lotería y las salidas a bolsa
- Bali, Cakici y Whitelaw (2011) encontraron que las acciones con subidas diarias extremas en el mes anterior (las que parecen un billete de lotería) rinden peor después: los inversores pagan de más por la posibilidad de un gran premio. Es un sesgo muy presente en las pequeñas de moda.
- Jay Ritter (1991) mostró que las empresas que salen a bolsa rinden, en los tres a cinco años siguientes, menos que empresas comparables. Las salidas a bolsa se concentran en momentos de entusiasmo y precios altos.

#### 5. Cuántas acciones tener
La lección 2.4 mostró que con 20–30 acciones se elimina gran parte del riesgo específico medido por la volatilidad. Pero, por la asimetría de Bessembinder, con pocas acciones la probabilidad de no tener ninguna gran ganadora es alta. Para un satélite de pequeñas compañías, 10–20 posiciones bien estudiadas es un compromiso razonable entre diversificación y capacidad de seguirlas. Una alternativa sencilla para la parte que no puedas analizar: un fondo indexado de pequeñas compañías o, mejor, de pequeñas con sesgo de calidad o valor.

#### 6. Los gestores activos de pequeñas
Las pequeñas son el segmento donde más se defiende la gestión activa por la menor eficiencia de los precios. Aun así, los datos SPIVA (lección 3.2) muestran que la mayoría de los fondos activos de pequeñas compañías también se queda por debajo de su índice a largo plazo. Y hay periodos especialmente duros: en la subida que empezó en abril de 2025, el gestor medio de pequeñas estadounidenses llegó a quedarse más de 10 puntos por detrás del Russell 2000, según la consultora Marquette, porque la impulsaron sobre todo empresas sin beneficios que los gestores evitaban.
`,
  caso: {
    titulo: "2026: las pequeñas vuelven, pero no todas son iguales",
    md: `
Tras casi cinco años de quedarse atrás (entre 2021 y 2025, el S&P 500 batió al Russell 2000 en torno a un 50 %), las pequeñas compañías estadounidenses protagonizaron en 2026 su mejor año en décadas:
- Hasta finales de junio, el Russell 2000 subía en torno a un **20 %**, unos 11 puntos más que el S&P 500: la mayor ventaja anual desde 2003.
- Entraban con una valoración muy baja frente a las grandes: el mayor descuento en unos veinte años según varios análisis.
- Las bajadas de tipos ayudaban más a las pequeñas, muchas de ellas con deuda a tipo variable.

Pero la letra pequeña importaba:
- En torno al **40 %** de las empresas del índice no tenía beneficios, frente al 17 % de hace veinte años.
- Las empresas del Russell 2000 **sin beneficios** subían en torno a un **45 %** en 2026 hasta julio, frente a un 18 % de las rentables. Desde mediados de 2025, las primeras se habían más que duplicado, impulsadas por la expectativa de beneficiarse de la inteligencia artificial.
- Mientras tanto, las previsiones de beneficio del Russell 2000 **bajaron un 7 %** entre enero y mayo, mientras las del S&P 500 subían un 8 %.

A largo plazo, la foto es más modesta: entre 1997 y 2026, el Russell 2000 rindió de media un 7,2 % anual, unos 0,8 puntos menos que el S&P 500.

> Lo que enseña: «comprar pequeñas» no es una estrategia: el índice de pequeñas incluye muchas empresas que no ganan dinero, y sus rachas pueden estar impulsadas por la especulación. La ventaja está en seleccionar pequeñas de calidad y mantenerlas con disciplina, o en usar fondos que filtren por calidad. Un año brillante del índice no cambia esa lección.
`
  },
  ejercicios: [
    {
      t: "Lo que cuesta entrar y salir",
      p: `
Compras 3.000 € de una pequeña compañía cuyo spread es del 1,2 % y pagas 2 € de comisión al comprar y otros 2 € al vender. ¿Cuánto te cuesta la operación completa? Si la posición rinde un 8 % anual y la mantienes un año, ¿qué parte de la rentabilidad se va en costes? ¿Y si la mantienes cinco años?
`,
      s: `
1. **Coste del spread**: 3.000 × 1,2 % = 36 €. **Comisiones**: 4 €. **Total**: **40 €**, un **1,3 %**.
2. **Rentabilidad de un año**: 3.000 × 8 % = 240 € → los costes se llevan en torno a **1/6** de la ganancia.
3. **Cinco años**: la ganancia acumulada ronda 3.000 × (1,08⁵ − 1) ≈ 1.408 € → los 40 € son menos del **3 %** de ella.
4. En las pequeñas, operar poco y mantener mucho tiempo es casi obligatorio.
`
    },
    {
      t: "El tamaño de cada posición",
      p: `
Tienes 100.000 € y decides que tu satélite de acciones pequeñas sea el 15 %, repartido en seis posiciones iguales. ¿Cuánto pones en cada una? ¿Cuánto pierde tu patrimonio total si una quiebra? ¿Y cuánto gana si otra se multiplica por cinco?
`,
      s: `
1. **Cada posición**: 15.000 / 6 = **2.500 €** (2,5 % del total).
2. **Si una quiebra**: pierdes 2.500 € → **−2,5 %** del patrimonio. Doloroso, pero no grave.
3. **Si otra se multiplica por cinco**: ganas 4 × 2.500 = 10.000 € → **+10 %** del patrimonio.
4. Con este tamaño, la asimetría juega a tu favor: los errores están acotados y los aciertos pueden pesar mucho. Por eso conviene no vender pronto las ganadoras, salvo que la posición crezca tanto que su riesgo te incomode.
`
    },
    {
      t: "Aplicar el filtro de calidad",
      p: `
Tienes cinco candidatas. A: ROIC 18 %, deuda neta / EBITDA 0,5, caja libre positiva, PER 14. B: ROIC 6 %, deuda 3,5, caja libre negativa, PER 8. C: ROIC 22 %, deuda 1,2, caja libre positiva, PER 30. D: ROIC 15 %, deuda 1,8, caja libre positiva, PER 11. E: ROIC 9 %, deuda 4,5, caja libre positiva, PER 6. Aplica los filtros ROIC > 10 %, deuda < 2 y caja libre positiva. ¿Cuáles pasan y en qué orden las estudiarías?
`,
      s: `
1. **Pasan los tres filtros**: A, C y D.
2. **No pasan**: B (falla los tres) y E (ROIC bajo y mucha deuda), aunque sean las más «baratas» por PER: probablemente son trampas de valor (lección 4.7).
3. **Orden de estudio**: D y A primero, porque combinan calidad y un precio moderado; C después, porque es la de más calidad, pero su PER de 30 exige comprobar con un DCF inverso si su crecimiento lo justifica.
4. El filtro no decide la compra: decide en qué empresas merece la pena invertir horas de lectura.
`
    }
  ],
  errores: [
    "Comprar pequeñas por la historia que cuentan, sin comprobar caja, rentabilidad y deuda.",
    "Confundir el índice de pequeñas, lleno de empresas sin beneficios, con pequeñas de calidad.",
    "Usar órdenes a mercado en valores poco líquidos.",
    "Poner demasiado peso en una sola pequeña porque «esta vez es distinta».",
    "Comprar sin haber escrito qué te haría vender."
  ],
  test: [
    { p: "¿Qué porcentaje de las empresas del Russell 2000 no tenía beneficios en 2026?", o: ["En torno al 5 %", "En torno al 40 %", "En torno al 80 %"], c: 1, e: "Frente al 17 % de hace dos décadas." },
    { p: "Según Asness y otros (2018), el efecto tamaño reaparece cuando…", o: ["Se invierte solo en enero", "Se controla por la calidad de las empresas", "Se usa apalancamiento"], c: 1, e: "Las pequeñas de mala calidad tapan el buen comportamiento de las de calidad." },
    { p: "¿Por qué un particular puede tener ventaja en empresas pequeñas?", o: ["Porque tiene información privilegiada", "Porque hay menos analistas y los grandes fondos no pueden entrar", "Porque no pagan impuestos"], c: 1, e: "Es una ventaja estructural." },
    { p: "Entre 1997 y 2026, ¿cómo rindió el Russell 2000 frente al S&P 500?", o: ["Unos 3 puntos más al año", "Unos 0,8 puntos menos al año", "Exactamente igual"], c: 1, e: "Un 7,2 % anual de media." },
    { p: "¿Qué debe incluir una tesis de inversión escrita?", o: ["Solo el precio objetivo", "Por qué está barata, qué tiene que pasar y qué te haría vender", "La opinión de los analistas"], c: 1, e: "Es la base del semáforo de venta de tu consola." }
  ],
  lecturas: [
    { t: "Size Matters, If You Control Your Junk", a: "Asness, Frazzini, Israel, Moskowitz y Pedersen, Journal of Financial Economics, 2018" },
    { t: "The Relationship between Return and Market Value of Common Stocks", a: "Rolf Banz, Journal of Financial Economics, 1981" },
    { t: "Un paso por delante de Wall Street", a: "Peter Lynch", n: "Las pequeñas empresas desde la experiencia de uno de los mejores gestores de la historia." },
    { t: "100 to 1 in the Stock Market", a: "Thomas Phelps", n: "Estudio clásico (1972) de las acciones que se multiplicaron por cien. Paciencia y crecimiento." },
    { t: "The Most Important Thing", a: "Howard Marks", n: "Riesgo, precio y psicología, contados por uno de los grandes inversores (bloque 7)." }
  ]
});


var META = {
  id: 4,
  titulo: "Analizar empresas",
  intro: `
El bloque 3 defendió que el núcleo de la cartera sea indexado. Este bloque trata de la otra parte: **cómo analizar una empresa concreta** para decidir si comprar sus acciones. Empieza por lo que dicen los datos sobre elegir acciones (es posible, pero la estadística juega en contra) y sigue el orden en que trabaja un analista: la cuenta de resultados, el balance y la deuda, el flujo de caja y la calidad del beneficio, la rentabilidad del capital, las ventajas competitivas, la valoración por múltiplos y por descuento de flujos, y qué hace la empresa con la caja que genera. Termina con las empresas pequeñas, donde un particular tiene más opciones de ventaja, y con un proceso completo para analizarlas.

La idea que recorre el bloque: **una buena inversión es un buen negocio comprado a un precio razonable**. Hace falta saber leer las dos cosas: el negocio, en las cuentas, y las expectativas, en el precio. Todo lo que aprendas aquí es la base del semáforo de venta de tu consola (bloque 10).
`,
  foto: {
    titulo: "La foto del momento",
    fecha: "13 nov 2026",
    md: `
| Indicador | Dato | Comentario |
|---|---|---|
| PER adelantado del S&P 500 | 17,7 (5 de noviembre de 2026) | 22,0 a principio de año; medias de 5 y 10 años: 19,8 y 19,1 |
| Variación en 2026 del precio y del beneficio esperado del S&P 500 | Precio +7,4 %; beneficio esperado a 12 meses +33,6 % | El PER baja porque sube la «E» |
| PER adelantado del sector tecnológico | 17,3 | Mínimo desde marzo de 2020; media de 25 años: 20,0 |
| Prima de riesgo de la bolsa estadounidense (Damodaran) | En torno al 4,2 % | Con el bono a 10 años de EE. UU. en torno al 4,5–4,7 % (julio de 2026) |
| Russell 2000 frente al S&P 500 en 2026 | +20 % frente a +9 % hasta junio | La mayor ventaja de las pequeñas desde 2003 |
| Empresas del Russell 2000 sin beneficios | En torno al 40 % | 17 % hace dos décadas |
| Recompras de las empresas del S&P 500 | 1,02 billones de dólares (12 meses hasta septiembre de 2025) | Récord; 1,685 billones con los dividendos |
| Inditex (ejercicio 2025) | Beneficio de 6.220 M€; caja neta de 10.958 M€; PER ≈ 26 | Rentabilidad del capital empleado del 40 % |
| Grifols (2026) | Deuda neta ≈ 4,2 veces el EBITDA; PER estimado ≈ 9 | Objetivo: menos de 3,5 veces |
| Nvidia (10 de noviembre de 2026) | 4,4 billones de dólares; rentabilidad por flujo de caja libre ≈ 2,9 % | Descuenta en torno a un 12 % de crecimiento anual de caja durante 10 años |
`
  },
  glosario: [
    { t: "Análisis fundamental", d: "Estimar el valor de una empresa a partir de su negocio, sus cuentas y sus perspectivas, y compararlo con su precio." },
    { t: "Margen de seguridad", d: "Diferencia entre el valor estimado y el precio pagado, que protege de los errores de estimación (Graham)." },
    { t: "Asimetría (skewness) de las rentabilidades", d: "Pocas acciones ganan muchísimo y muchas pierden: la media supera con creces a la mediana." },
    { t: "Núcleo y satélite", d: "Cartera con un núcleo indexado y una parte pequeña de inversiones elegidas por uno mismo." },
    { t: "Cuentas anuales", d: "Estados financieros auditados con su memoria y el informe de gestión. Se publican en la CNMV." },
    { t: "Memoria (notas)", d: "Parte de las cuentas que detalla las partidas: deuda, arrendamientos, partes vinculadas, litigios." },
    { t: "Informe de auditoría", d: "Opinión de un auditor independiente sobre si las cuentas reflejan la imagen fiel. Puede tener salvedades." },
    { t: "Cuenta de resultados", d: "Estado que muestra ventas, gastos y beneficio de un periodo." },
    { t: "Margen bruto", d: "Ventas menos coste de lo vendido. Indica cuánto vale el producto por encima de su coste." },
    { t: "EBITDA", d: "Resultado operativo antes de amortizaciones, intereses e impuestos." },
    { t: "EBIT", d: "Resultado de explotación: EBITDA menos amortizaciones." },
    { t: "BAI", d: "Beneficio antes de impuestos: EBIT más el resultado financiero." },
    { t: "Beneficio neto atribuido", d: "Beneficio que corresponde a los accionistas de la sociedad dominante, tras impuestos y minoritarios." },
    { t: "BPA diluido", d: "Beneficio por acción contando las acciones que se emitirán por opciones y convertibles." },
    { t: "Crecimiento orgánico", d: "Crecimiento sin efectos de divisas ni de compras de empresas." },
    { t: "Apalancamiento operativo", d: "Sensibilidad del beneficio a las ventas por el peso de los costes fijos. GAO = variación del EBIT / variación de las ventas." },
    { t: "Devengo", d: "Principio contable que registra ingresos y gastos cuando ocurren, no cuando se cobran o pagan." },
    { t: "NIIF 16", d: "Norma contable que lleva los arrendamientos al balance y saca el alquiler del EBITDA." },
    { t: "Medidas alternativas de rendimiento", d: "Cifras no definidas por las normas contables (EBITDA ajustado, beneficio subyacente). Deben conciliarse con las oficiales." },
    { t: "Balance", d: "Foto de lo que la empresa tiene (activo) y cómo lo financia (pasivo y patrimonio neto)." },
    { t: "Patrimonio neto", d: "Parte del activo que pertenece a los accionistas: activo menos pasivo." },
    { t: "Fondo de comercio", d: "Lo pagado en una adquisición por encima del valor contable de lo comprado." },
    { t: "Deterioro", d: "Reducción contable del valor de un activo cuando sus perspectivas empeoran." },
    { t: "Deuda neta", d: "Deuda financiera menos caja. Si es negativa, la empresa tiene caja neta." },
    { t: "Deuda neta / EBITDA", d: "Años de resultado operativo necesarios para pagar la deuda. Medida habitual de apalancamiento." },
    { t: "Cobertura de intereses", d: "EBIT dividido entre los gastos financieros." },
    { t: "Fondo de maniobra", d: "Activo corriente menos pasivo corriente." },
    { t: "Ciclo de conversión de caja", d: "Días de existencias + días de cobro − días de pago." },
    { t: "Covenant", d: "Cláusula de un préstamo que obliga a mantener ciertos ratios; su incumplimiento permite exigir el pago." },
    { t: "Z de Altman", d: "Combinación de cinco ratios que estima el riesgo de quiebra de una empresa industrial." },
    { t: "Alto rendimiento (high yield)", d: "Deuda con calificación inferior a BBB−: más rentabilidad y más riesgo de impago." },
    { t: "Estado de flujos de efectivo", d: "Muestra la caja generada por la explotación, la inversión y la financiación." },
    { t: "Flujo de caja de explotación (FCO)", d: "Caja que genera el negocio, tras ajustar el beneficio por partidas que no son caja y por el circulante." },
    { t: "Capex", d: "Inversión en activos fijos. Puede ser de mantenimiento o de crecimiento." },
    { t: "Flujo de caja libre (FCL)", d: "Flujo de caja de explotación menos capex." },
    { t: "Conversión de caja", d: "Flujo de caja libre dividido entre beneficio neto." },
    { t: "Beneficios del propietario (owner earnings)", d: "Beneficio + amortizaciones − capex de mantenimiento (Buffett, 1986)." },
    { t: "Ajustes por devengo (accruals)", d: "Diferencia entre beneficio y flujo de caja de explotación. Muy altos, señal de menor calidad (Sloan, 1996)." },
    { t: "M de Beneish", d: "Modelo de ocho ratios que estima la probabilidad de manipulación del beneficio." },
    { t: "F de Piotroski", d: "Puntuación de 0 a 9 con señales de solidez financiera; útil para separar las baratas buenas de las malas." },
    { t: "Días de cobro", d: "Saldo de clientes / ventas × 365." },
    { t: "Vendedor en corto", d: "Inversor que gana si la acción cae; algunos publican informes críticos sobre empresas." },
    { t: "ROE", d: "Rentabilidad del patrimonio: beneficio neto / patrimonio neto." },
    { t: "ROA", d: "Rentabilidad del activo: beneficio neto / activo total." },
    { t: "ROIC", d: "Rentabilidad del capital invertido: NOPAT / capital invertido. No depende de la financiación." },
    { t: "NOPAT", d: "Beneficio operativo después de impuestos: EBIT × (1 − t)." },
    { t: "ROCE", d: "Rentabilidad del capital empleado. Inditex la define como BAI / (patrimonio + deuda neta) medios." },
    { t: "Descomposición DuPont", d: "ROE = margen × rotación del activo × apalancamiento." },
    { t: "Tasa de reinversión", d: "Parte del NOPAT que se reinvierte. Crecimiento ≈ ROIC × tasa de reinversión." },
    { t: "Ventaja competitiva (foso)", d: "Lo que impide que los competidores reduzcan la rentabilidad de una empresa." },
    { t: "Costes de cambio", d: "Lo que le cuesta a un cliente cambiar de proveedor." },
    { t: "Efecto red", d: "El producto vale más cuantos más lo usan." },
    { t: "Escala eficiente", d: "Mercado que solo da para uno o pocos operadores rentables." },
    { t: "Cinco fuerzas de Porter", d: "Rivalidad, nuevos entrantes, sustitutivos, poder de clientes y de proveedores." },
    { t: "Innovación disruptiva", d: "Producto más simple y barato que entra por abajo y acaba desplazando al líder (Christensen)." },
    { t: "Periodo de ventaja competitiva", d: "Años durante los que una empresa obtendrá un ROIC superior a su coste del capital." },
    { t: "PER", d: "Precio / beneficio por acción. Pasado (12 meses anteriores) o adelantado (12 siguientes)." },
    { t: "Valor de empresa (EV)", d: "Capitalización + deuda neta (+ minoritarios): lo que costaría el negocio entero." },
    { t: "EV/EBITDA y EV/EBIT", d: "Múltiplos del negocio completo, útiles para comparar empresas con distinta deuda." },
    { t: "Rentabilidad por flujo de caja libre", d: "Flujo de caja libre / capitalización." },
    { t: "P/VC", d: "Capitalización / patrimonio neto. Referencia en bancos y aseguradoras." },
    { t: "PEG", d: "PER dividido entre el crecimiento esperado del beneficio (Lynch)." },
    { t: "PER justificado", d: "PER coherente con la rentabilidad, el crecimiento y el riesgo: payout / (r − g)." },
    { t: "Trampa de valor", d: "Acción barata por múltiplos que sigue barata porque el negocio se deteriora." },
    { t: "Descuento de flujos (DCF)", d: "Valoración como suma del valor actual de los flujos de caja libre futuros." },
    { t: "WACC", d: "Coste medio ponderado del capital: lo que exigen accionistas y acreedores." },
    { t: "Valor terminal", d: "Valor de los flujos posteriores al periodo de previsión, normalmente con el modelo de Gordon." },
    { t: "DCF inverso", d: "Calcular qué crecimiento justifica el precio actual." },
    { t: "Opciones reales", d: "Valor de poder ampliar, retrasar o abandonar proyectos según evolucionen las cosas." },
    { t: "Asignación de capital", d: "Decisión sobre qué hacer con la caja: reinvertir, comprar, pagar deuda, dividendos o recompras." },
    { t: "Payout", d: "Parte del beneficio (o del flujo de caja libre) que se reparte como dividendo." },
    { t: "Recompra de acciones", d: "Compra de acciones propias por la empresa, que reduce el número de acciones." },
    { t: "Maldición del ganador", d: "En una subasta, quien gana tiende a haber pagado de más." },
    { t: "Russell 2000", d: "Índice de unas 2.000 empresas pequeñas estadounidenses." },
    { t: "Efecto tamaño", d: "Mayor rentabilidad histórica de las empresas pequeñas (Banz, 1981); hoy, sobre todo de las de calidad." },
    { t: "Spread", d: "Diferencia entre el mejor precio de compra y el de venta de un valor." },
    { t: "Tesis de inversión", d: "Por qué compras, qué tiene que pasar y qué te haría vender, escrito antes de comprar." }
  ],
  fuentes: [
    { t: "Bessembinder: Do Stocks Outperform Treasury Bills? (Journal of Financial Economics, 2018)", u: "https://econpapers.repec.org/RePEc:eee:jfinec:v:129:y:2018:i:3:p:440-457" },
    { t: "W. P. Carey School (ASU): resumen del estudio de Bessembinder", u: "https://knowledge.wpcarey.asu.edu/sites/default/files/do-stocks-outperform-treasury-bills.pdf" },
    { t: "Morningstar Australia: solo el 2,4 % de las empresas crea toda la riqueza (datos globales)", u: "https://www.morningstar.com.au/stocks/only-2-4-of-companies-deliver-all-net-shareholder-wealth" },
    { t: "Inditex: resultados consolidados del ejercicio 2025", u: "https://www.inditex.com/itxcomweb/es/es/prensa/detalle-noticias/b870d5ec-6b7e-491d-b38e-340cd69036df/resultados-consolidados-ejercicio-2025" },
    { t: "Forbes España: Inditex, beneficio récord de 6.220 millones", u: "https://forbes.es/economia/887848/inditex-logra-beneficio-record-de-6-220-millones-en-2025-un-6-mas-con-ventas-de-39-864-millones-32/" },
    { t: "Bolsamanía: capitalización de Inditex tras sus resultados", u: "https://www.bolsamania.com/noticias_print/mercados/economiabolsa--inditex-cierra-con-una-capitalizacion-cercana-a-los-163500-millones-tras-anunciar-resultados-record--22010718.html" },
    { t: "Estrategias de Inversión: dividendo de Inditex de 1,75 €", u: "https://www.estrategiasdeinversion.com/actualidad/noticias/bolsa-espana/inditex-beneficio-record-de-6220-millones-y-eleva-n-897733" },
    { t: "The Objective: rentabilidad del capital empleado de Inditex por cadenas (2025)", u: "https://theobjective.com/economia/2026-03-12/stradivarius-oysho-lideran-rentabilidad-inditex-mientras-zara-mantiene-cola/" },
    { t: "Modaes: Zara crece un 1 % en 2025", u: "https://www.modaes.com/empresas/zara-crece-solo-un-1-en-2025-pero-rebasa-los-28000-millones-de-ventas" },
    { t: "H&M: informe anual 2025", u: "https://hmgroup.com/news/h-m-hennes-mauritz-ab-full-year-report-2025/" },
    { t: "Inderes: resumen del informe anual de H&M 2025", u: "https://www.inderes.fi/releases/h-and-m-hennes-and-mauritz-ab-full-year-report-2025" },
    { t: "Grifols: resultados del tercer trimestre de 2026 (formulario 6-K, SEC)", u: "https://www.sec.gov/Archives/edgar/data/0001438569/000110465926121154/tm2628724d1_6k.htm" },
    { t: "Merca2: Grifols en el primer semestre de 2026", u: "https://www.merca2.es/2026/07/29/grifols-beneficio-semestre-2026-2426401/" },
    { t: "Capitalbolsa / Bankinter: la deuda frena la valoración de Grifols", u: "https://www.bolsamania.com/capitalbolsa/noticias/empresas/grifols-crece-mas-que-sus-rivales-pero-la-deuda-sigue-frenando-su-valoracion--23173077.html" },
    { t: "El Cronista: línea de crédito y calificación de Grifols", u: "https://www.cronista.com/espana/economia-finanzas/grifols-duplica-su-linea-de-credito-revolving-alcanza-los-2000-millones-de-dolares-con-el-respaldo-de-la-banca-internacional" },
    { t: "Valencia Plaza: Grifols un año después de Gotham", u: "https://valenciaplaza.com/valenciaplaza/grifols-un-ano-despues-cotizacion-sigue-34-por-debajo-tras-gotham-opa-brookfield" },
    { t: "The Objective: la CNMV y las cuentas de Grifols", u: "https://theobjective.com/economia/2025-01-09/grifols-caida-bolsa-aniversario-ataque-gotham/" },
    { t: "Finect: el informe de Gotham City sobre Grifols", u: "https://www.finect.com/usuario/avillanuevae/articulos/grifols-se-desploma-un-30-en-bolsa-tras-el-informe-de-gotham-city-sus-acciones-valen-cero" },
    { t: "Irish Times: el juicio a Markus Braun (Wirecard)", u: "https://www.irishtimes.com/business/2022/12/08/wirecards-former-ceo-markus-braun-appears-in-court-for-historic-trial" },
    { t: "Financial Times (vía GMT Research): cronología de Wirecard", u: "https://cdn.gmtresearch.com/public-ckfinder/hall-of-shame/Wirecard%20AG/Financial%20Times_Wirecard%20-%20the%20timeline_Jun25-2020.pdf" },
    { t: "Wikipedia: Wirecard (prohibición de ventas en corto y denuncias)", u: "https://en.wikipedia.org/wiki/Wirecard" },
    { t: "Handelsblatt: Braun, ante una pena de más de diez años", u: "https://www.handelsblatt.com/finanzen/banken-versicherungen/wirecard-markus-braun-muss-mit-haftstrafe-von-mehr-als-zehn-jahren-rechnen/100189925.html" },
    { t: "ZDF: el juicio de Wirecard llega a su fin (noviembre de 2026)", u: "https://www.zdfheute.de/wirtschaft/wirecard-prozess-braun-betrug-100.html" },
    { t: "Yahoo News: daños de Wirecard a los bancos según la Fiscalía", u: "https://news.yahoo.com/ex-wirecard-boss-trial-fraud-094556294.html" },
    { t: "ASML: resultados de 2025 (vía Dukascopy)", u: "https://www.dukascopy.com/swiss/spanish/marketwatch/market-news/Expert-Commentary/154194" },
    { t: "Público: la venta de Nokia a Microsoft", u: "https://www.publico.es/actualidad/venta-nokia-microsoft-pone-era-telefonia-movil.html" },
    { t: "Público: Nokia perdió el 85 % de su valor desde el iPhone", u: "https://www.publico.es/actualidad/venta-nokia-microsoft-pone-telefonia.html" },
    { t: "BioBioChile: la caída de Nokia", u: "https://www.biobiochile.cl/noticias/2013/11/02/la-historia-de-la-estrepitosa-caida-de-nokia.shtml" },
    { t: "FactSet: el PER adelantado del S&P 500, en mínimos de tres años (noviembre de 2026)", u: "https://insight.factset.com/lowest-forward-12-month-p/e-ratio-for-the-sp-500-in-more-than-3-years" },
    { t: "FactSet: Earnings Insight, 6 de noviembre de 2026", u: "https://advantage.factset.com/hubfs/Website/Resources%20Section/Research%20Desk/Earnings%20Insight/EarningsInsight_110626A.pdf" },
    { t: "Damodaran: la prima de riesgo de la bolsa en 2026", u: "https://aswathdamodaran.blogspot.com/2026/03/the-price-of-risk-equity-risk-premium.html" },
    { t: "Stocktwits: Damodaran, prima de riesgo y bono a 10 años (julio de 2026)", u: "https://stocktwits.com/news-articles/markets/equity/s-and-p-500-held-flat-last-month-despite-surging-10-y-treasury-yields-wall-street-s-dean-of-valuation-says-risk-math-hasn-t-changed/cZoT3EWRJ5z" },
    { t: "Trefis: cotización, valor y flujo de caja de Nvidia (noviembre de 2026)", u: "https://www.trefis.com/data/companies/nvda?from=INTC-2026-05-22" },
    { t: "Rallies.ai: resultados de Nvidia del ejercicio fiscal 2026", u: "https://rallies.ai/news/nvidia-posts-2159b-revenue-and-966b-fcf-as-nio-moves-to-in-house-chips" },
    { t: "Zacks: Nvidia supera los 5 billones de dólares (octubre de 2025)", u: "https://www.zacks.com/stock/news/2783266/nvidia-hits-5t-market-cap-mark-can-the-stock-sustain-momentum" },
    { t: "S&P Dow Jones Indices: recompras del S&P 500 en el tercer trimestre de 2025", u: "https://press.spglobal.com/2025-12-18-S-P-500-Q3-2025-Buybacks-Post-Modest-6-2-Gain-to-249-0-Billion-After-Declining-20-1-Amidst-Uncertainty-in-Q2-Q4-2025-Expenditures-Expected-to-Post-Similar-Growth,-As-2025-Anticipates-a-Record-1-Trillion?asPDF=1" },
    { t: "Estrategias de Inversión: Telefónica recorta el dividendo a 0,15 €", u: "https://www.estrategiasdeinversion.com/actualidad/noticias/bolsa-espana/murtra-telefonica-justifica-el-recorte-del-dividendo-n-860615" },
    { t: "Vozpópuli: Telefónica cae casi un 13 %, su peor sesión en cinco años", u: "https://www.vozpopuli.com/economia/empresas/telefonica-se-desploma-un-13-en-bolsa-la-mayor-caida-encincoanos.html" },
    { t: "Bloomberg Línea: Telefónica cae casi un 16 % en dos días", u: "https://www.bloomberglinea.com/mercados/telefonica-cae-casi-16-en-dos-dias-y-se-hunde-en-el-ibex-35-estas-son-las-razones/" },
    { t: "Merca2: el dividendo de Telefónica y su flujo de caja (junio de 2026)", u: "https://www.merca2.es/2026/06/14/sostenibilidad-dividendo-telefonica-850-millones-2397176/" },
    { t: "Benzinga (vía Webull): las pequeñas baten al S&P 500 por el mayor margen desde 2003", u: "https://www.webull.ca/news-detail/15141657699738624" },
    { t: "24/7 Wall St.: el Russell 2000 y las empresas sin beneficios (julio de 2026)", u: "https://247wallst.com/investing/2026/07/16/the-russell-2000-is-having-its-best-year-in-23-years-heres-why-small-caps-are-winning-again/" },
    { t: "IBTimes / Morningstar: el 40 % del Russell 2000 no tiene beneficios", u: "https://www.ibtimes.co.uk/russell-2000-small-cap-earnings-challenges-1800815" },
    { t: "MarketScreener: rentabilidad a largo plazo del Russell 2000", u: "https://hk.marketscreener.com/news/russell-2000-small-caps-big-impact-ce7f58dbdd8af721" },
    { t: "MarketWatch (vía Morningstar): el mayor descuento de las pequeñas en 20 años", u: "https://www.morningstar.com/news/marketwatch/20260114144/four-reasons-to-buy-this-overlooked-group-of-stocks-early-in-2026" },
    { t: "Marquette Associates: los gestores de pequeñas frente al Russell 2000", u: "https://www.marquetteassociates.com/no-small-headwind-small-cap/" }
  ]
};

META.lecciones=LECCIONES;
CURSO.registrar(META);
})();
