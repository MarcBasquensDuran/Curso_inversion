/* Bloque 5. Generado a partir de src/b5/ */
(function(){
var LECCIONES=[];

/* ---- l01.js ---- */
LECCIONES.push({
  id: "b5-l1", num: "5.1",
  titulo: "La economía en un mapa: PIB, crecimiento y por qué la bolsa no es la economía",
  resumen: "El PIB mide lo que produce un país en un año. Se puede descomponer en consumo, inversión, gasto público y exportaciones netas, y su crecimiento real depende a largo plazo de cuánta gente trabaja y de lo productiva que es. Pero el crecimiento de un país no se traslada a sus acciones: en 19 países durante más de un siglo, los que más crecieron no dieron más rentabilidad en bolsa. Lo que paga al accionista es el beneficio por acción y el precio al que lo compra.",
  esencial: `
**Qué es el PIB.** El producto interior bruto es el valor de todos los bienes y servicios finales que produce un país en un periodo. Se puede medir de tres formas que deben dar lo mismo: lo que se **produce**, lo que se **gasta** y lo que se **ingresa** (salarios más beneficios más impuestos). La más útil para un inversor es la del gasto:

$$ PIB = C + I + G + (X − M)

| Componente | Qué es | Peso típico en España |
|---|---|---|
| **C**, consumo privado | Lo que gastan los hogares | En torno al 55 % |
| **I**, inversión | Máquinas, edificios, viviendas, software, existencias | En torno al 20 % |
| **G**, gasto público | Sueldos públicos y compras del Estado (no pensiones ni subsidios, que son transferencias) | En torno al 20 % |
| **X − M**, exportaciones netas | Lo que se vende fuera menos lo que se compra fuera | Entre el 0 y el 5 % |

**Nominal y real.** El PIB **nominal** se mide a precios de cada año; el **real**, a precios constantes. Si el PIB nominal crece un 6 % y los precios un 4 %, el crecimiento real es de en torno al 2 %. Las noticias casi siempre hablan del real.

**El crecimiento a largo plazo** depende de dos cosas: cuántas horas se trabajan (población, empleo) y cuánto se produce por hora (**productividad**). La economía no crece siempre al mismo ritmo: hay años por encima de su **potencial** y años por debajo. La diferencia se llama **brecha de producción** y es lo que vigilan los bancos centrales (lección 5.3).

**La bolsa no es la economía.** Parece lógico invertir en los países que más van a crecer. Los datos dicen lo contrario: en estudios con 16 y 19 países durante más de cien años, la correlación entre el crecimiento económico de un país y la rentabilidad real de su bolsa fue **negativa**, en torno a −0,4. Tres razones:

1. **El crecimiento se espera y se paga.** Si todo el mundo sabe que un país crecerá, sus acciones ya cotizan caras.
2. **El crecimiento no es de los accionistas actuales.** Buena parte lo generan empresas nuevas o ampliaciones de capital, que diluyen a los accionistas existentes.
3. **Las empresas cotizadas no son el país.** Las empresas del IBEX obtienen más de la mitad de sus ingresos fuera de España; las del S&P 500, en torno al 40 % fuera de Estados Unidos.

**Para el inversor**: la macro importa porque mueve los tipos de interés, la inflación y los beneficios a corto plazo, y porque cambia el precio que el mercado paga por ellos. No sirve para elegir países «que crecerán».
`,
  entender: `
#### Las tres formas de medir el PIB
Imagina una economía con un solo agricultor que vende trigo por 100 a un panadero, que hace pan y lo vende por 250.

- **Por la producción** (valor añadido): el agricultor añade 100; el panadero, 150. Total: 250.
- **Por el gasto**: los consumidores gastan 250 en pan. El trigo no se suma aparte porque es un bien intermedio; contarlo sería contar dos veces.
- **Por la renta**: los 250 se reparten entre salarios, beneficios e impuestos.

Las tres medidas cuadran por construcción, aunque en la práctica las estadísticas tienen una pequeña «discrepancia estadística».

#### Qué no mide el PIB
- **Lo que no pasa por el mercado**: el trabajo doméstico o el voluntariado.
- **La distribución**: un PIB que crece puede ir a unos pocos.
- **El desgaste del capital**: si un país tala sus bosques para venderlos, el PIB sube aunque el país sea más pobre.
- **La calidad**: un móvil de 2026 cuesta parecido a uno de 2016 y hace muchísimo más. Los estadísticos intentan ajustarlo, pero es difícil.

Para un inversor, nada de esto invalida el PIB: es la medida más completa de la actividad económica, y la que mueve los mercados cuando se publica.

#### PIB per cápita
Para comparar el nivel de vida se divide el PIB entre la población. Un país cuyo PIB real crece un 2 % y su población un 0,8 % solo mejora su nivel de vida en torno a un 1,1 %. España ha crecido en los últimos años más que la media de la zona euro, pero en buena parte por el aumento de población (inmigración), no por mayor productividad.

#### Cómo se publica y cómo reacciona el mercado
En España, el INE publica una estimación avance del PIB trimestral unas cuatro semanas después de acabar el trimestre, y la revisa después. En Estados Unidos, el BEA publica tres estimaciones sucesivas, y los datos se expresan **anualizados**: un crecimiento trimestral del 0,8 % se publica como un 3,2 % (aproximadamente, 0,8 × 4). En Europa se publica la tasa trimestral sin anualizar. Al comparar países hay que fijarse en este detalle.

Al mercado no le mueve el dato, sino la **sorpresa**: la diferencia entre el dato y lo que esperaban los analistas. Un PIB que crece un 3 % puede hacer caer la bolsa si se esperaba un 4 %, o si hace temer que el banco central suba los tipos.

#### Por qué un país rico puede dar mala bolsa y uno pobre buena
La rentabilidad de una acción depende de su dividendo inicial, del crecimiento del **beneficio por acción** y del cambio en el múltiplo que paga el mercado (lección 1.3). El PIB solo influye en el segundo término, y de forma imperfecta:

$$ rentabilidad ≈ rentabilidad por dividendo + crecimiento del BPA + cambio de valoración

China es el ejemplo de manual: entre 1993 y 2011 creció en torno a un 9 % anual y sus acciones perdieron en torno a un 5,5 % anual (Ritter, 2012). Sus empresas emitían acciones sin parar, muchas eran públicas y no se gestionaban para el accionista, y se compraban a valoraciones altas.
`,
  fondo: `
#### 1. La dilución: por qué el beneficio por acción crece menos que el PIB
William Bernstein y Robert Arnott (2003) calcularon que, en Estados Unidos, el beneficio por acción de las empresas existentes ha crecido históricamente unos **2 puntos al año menos** que la economía. La razón: buena parte del crecimiento la capturan empresas que todavía no cotizan, o se financia emitiendo acciones nuevas. Lo llamaron el «2 % de dilución».

Si el PIB real crece un 3 % y la dilución es del 2 %, el beneficio por acción real crece un 1 %. En 50 años, la economía se multiplica por 4,4 y el beneficio por acción por 1,6.

#### 2. Las cifras de Ritter
Jay Ritter (2005) estudió 16 países entre 1900 y 2002 con los datos de Dimson, Marsh y Staunton: la correlación entre el crecimiento del PIB real per cápita y la rentabilidad real de la bolsa fue de **−0,37**. En una actualización (2012), con 19 países entre 1900 y 2011, la correlación fue de **−0,39** en moneda local. En los mercados emergentes entre 1988 y 2011, de −0,41. Dimson, Marsh y Staunton encontraron resultados parecidos para periodos más cortos: −0,27 entre 1900 y 1950 y −0,03 entre 1951 y 2000.

Una correlación negativa no significa que crecer sea malo para la bolsa: significa que **el crecimiento conocido no es una ventaja**, porque está en el precio. Lo que sí mueve las bolsas son las **sorpresas** de crecimiento, que por definición no se pueden prever.

#### 3. La brecha de producción y la ley de Okun
El **PIB potencial** es lo que una economía puede producir con un uso normal de sus recursos, sin generar inflación. No se observa: se estima, y las estimaciones cambian mucho. La **brecha de producción** es:

$$ brecha = (PIB real − PIB potencial) / PIB potencial

Una brecha positiva (la economía produce más de lo «normal») suele traer presión sobre los precios; una negativa, paro y poca inflación.

La **ley de Okun** relaciona la brecha con el paro: en Estados Unidos, cada punto de brecha negativa se asocia con un aumento del paro de en torno a medio punto. En España, con un mercado laboral históricamente más volátil, la relación ha sido mayor (el paro llegó al 26 % en 2013). Es una regularidad estadística, no una ley física.

#### 4. Indicadores de alta frecuencia
El PIB se publica tarde y una vez por trimestre. Por eso se siguen indicadores más rápidos:
- **PMI** (índice de gestores de compras): encuestas mensuales a empresas. Por encima de 50 indica expansión (lección 5.5).
- **Afiliación a la Seguridad Social** en España, mensual; **nóminas no agrícolas** en Estados Unidos, también mensual.
- **Ventas minoristas, producción industrial, confianza del consumidor**.
- **Nowcasts**: modelos que estiman el PIB del trimestre en curso con todos esos datos, como el GDPNow de la Reserva Federal de Atlanta.

#### 5. Por qué la macro sí importa al inversor
Aunque el crecimiento a largo plazo no sirva para elegir países, la macro afecta a la cartera por tres vías que estudia este bloque:
1. **Los tipos de interés**, que fijan la tasa con la que se descuentan todos los flujos (lección 5.4).
2. **La inflación**, que decide qué activos protegen el poder de compra (lecciones 5.2 y 5.9).
3. **El ciclo**, que mueve los beneficios y el apetito por el riesgo (lección 5.5).
`,
  caso: {
    titulo: "Crecer no basta: los datos de Ritter y el caso de China",
    md: `
**La pregunta.** Si en los próximos 20 años la India crece al 6 % y Europa al 1 %, ¿no es obvio que hay que invertir en la India?

**Lo que dicen más de cien años de datos.** Jay Ritter, profesor de la Universidad de Florida, cruzó el crecimiento del PIB real per cápita de 16 países entre 1900 y 2002 con la rentabilidad real de sus bolsas. Si crecer ayudara, la correlación sería positiva. Fue de **−0,37**. Al ampliar el estudio a 19 países y hasta 2011, la correlación fue de −0,39; en los mercados emergentes entre 1988 y 2011, de −0,41.

**Por qué ocurre.** Ritter lo explica con dos argumentos:
1. El crecimiento económico viene sobre todo de **más capital y más trabajo**, y el capital se paga: las empresas lo financian emitiendo acciones y deuda. Las acciones nuevas diluyen a las viejas.
2. El progreso técnico tiende a beneficiar a los **consumidores y trabajadores** más que a los accionistas, porque la competencia reduce los márgenes.

**China, el ejemplo extremo.** En la actualización de Ritter (2012), entre 1993 y 2011 la economía china creció en torno a un **9 % anual** y su bolsa dio una rentabilidad de en torno a un **−5,5 % anual**. Y en el periodo 1970–2011, con todos los países, la correlación entre crecimiento y rentabilidad fue prácticamente cero. Las causas encajan con lo que predice Ritter: emisiones continuas de acciones, empresas con objetivos políticos además de económicos, y valoraciones que ya descontaban el crecimiento.

**El caso contrario.** Estados Unidos creció en el siglo XX a un ritmo moderado, pero sus empresas, muy rentables y orientadas al accionista, dieron una de las mejores bolsas del mundo.

**Lección para la cartera.** Invertir en un país por su crecimiento esperado es apostar por algo que ya está en el precio. La diversificación global (bloque 3) sigue siendo la mejor respuesta a «¿qué país crecerá más?».
`
  },
  ejercicios: [
    {
      t: "Nominal, real y per cápita",
      p: `
El PIB nominal de un país crece un 6 % en un año, su deflactor (el índice de precios del PIB) sube un 4 % y su población crece un 0,8 %. Calcula el crecimiento real y el crecimiento real per cápita, con la fórmula exacta.
`,
      s: `
1. **Crecimiento real**: 1,06 / 1,04 − 1 = **1,92 %** (la aproximación 6 − 4 = 2 % es casi igual).
2. **Per cápita**: 1,06 / 1,04 / 1,008 − 1 = **1,11 %**.
3. Casi la mitad del crecimiento real se debe a que hay más gente; el nivel de vida medio mejora bastante menos de lo que sugiere el titular.
`
    },
    {
      t: "La dilución en 50 años",
      p: `
Una economía crece un 3 % real anual durante 50 años. Si el beneficio por acción de las empresas cotizadas crece 2 puntos menos al año por la dilución, ¿cuánto se multiplica cada uno? ¿Cuántas veces más crece la economía que el BPA?
`,
      s: `
1. **Economía**: 1,03⁵⁰ = **4,38** veces.
2. **BPA**: 1,01⁵⁰ = **1,64** veces.
3. **Cociente**: 4,38 / 1,64 = **2,67**. La economía crece casi tres veces más que el beneficio que le corresponde al accionista actual.
`
    },
    {
      t: "Brecha de producción y paro",
      p: `
El PIB real de un país es de 1.000 y se estima que su potencial es de 1.020. Usando una ley de Okun en la que el paro sube medio punto por cada punto de brecha negativa, ¿cuánto estará el paro por encima de su nivel «normal»? Comenta por qué el resultado es incierto.
`,
      s: `
1. **Brecha**: 1.000 / 1.020 − 1 = **−1,96 %**.
2. **Paro por encima de lo normal**: 0,5 × 1,96 ≈ **0,98 puntos**.
3. **Incertidumbre**: el PIB potencial no se observa; si en vez de 1.020 fuera 1.005, la brecha sería de solo −0,5 % y el diagnóstico cambiaría. Los bancos centrales revisan estas estimaciones a menudo.
`
    }
  ],
  errores: [
    "Invertir en un país porque «va a crecer mucho», sin preguntar qué precio se paga por ese crecimiento.",
    "Confundir el PIB nominal con el real, o el crecimiento anualizado de Estados Unidos con el trimestral de Europa.",
    "Creer que la bolsa de un país refleja su economía, cuando sus empresas pueden vender sobre todo fuera.",
    "Reaccionar al dato del PIB en vez de a la sorpresa frente a lo esperado.",
    "Olvidar que el crecimiento total puede venir de más población y no de más productividad."
  ],
  test: [
    { p: "¿Qué componentes forman el PIB por el lado del gasto?", o: ["Salarios, beneficios e impuestos", "Consumo, inversión, gasto público y exportaciones netas", "Agricultura, industria y servicios"], c: 1, e: "PIB = C + I + G + (X − M)." },
    { p: "Si el PIB nominal crece un 5 % y los precios un 3 %, el crecimiento real es de aproximadamente…", o: ["Un 8 %", "Un 2 %", "Un 1,7 %"], c: 1, e: "Exactamente 1,05 / 1,03 − 1 = 1,94 %." },
    { p: "¿Qué correlación encontró Ritter entre crecimiento económico y rentabilidad real de la bolsa en 19 países entre 1900 y 2011?", o: ["En torno a +0,6", "En torno a 0", "En torno a −0,4"], c: 2, e: "−0,39 en moneda local." },
    { p: "¿Por qué el beneficio por acción crece menos que la economía?", o: ["Por la dilución: el crecimiento lo capturan empresas nuevas o se financia con acciones nuevas", "Porque los impuestos suben siempre", "Porque las empresas no reinvierten"], c: 0, e: "Bernstein y Arnott estimaron unos 2 puntos anuales de dilución en Estados Unidos." },
    { p: "Una brecha de producción positiva suele asociarse con…", o: ["Más paro y menos inflación", "Presión al alza sobre los precios", "Caída del PIB"], c: 1, e: "La economía produce por encima de su capacidad normal." }
  ],
  lecturas: [
    { t: "Economic Growth and Equity Returns", a: "Jay Ritter, Pacific-Basin Finance Journal, 2005", n: "El estudio clave de esta lección. Corto y legible." },
    { t: "Is There a Relationship between Economic Growth and Stock Market Returns?", a: "Jay Ritter, 2012", n: "La actualización con 19 países." },
    { t: "Earnings Growth: The Two Percent Dilution", a: "William Bernstein y Robert Arnott, Financial Analysts Journal, 2003" },
    { t: "Triumph of the Optimists", a: "Elroy Dimson, Paul Marsh y Mike Staunton", n: "Ciento y pico años de rentabilidades por país." },
    { t: "Macroeconomía", a: "Olivier Blanchard", n: "El manual de referencia si quieres ir a fondo; hay edición en español." }
  ]
});


/* ---- l02.js ---- */
LECCIONES.push({
  id: "b5-l2", num: "5.2",
  titulo: "Inflación: qué es, de dónde viene y a quién perjudica",
  resumen: "La inflación es la subida general de los precios. Se mide con el IPC y se distingue entre la general y la subyacente, que excluye energía y alimentos frescos. Puede venir de un exceso de demanda, de un choque de costes como el petróleo o de las expectativas. Perjudica a quien tiene dinero en efectivo o bonos a tipo fijo y favorece a los deudores. En 2026, el cierre del estrecho de Ormuz devolvió la inflación de la zona euro al 4 % y la de España al 4,9 %.",
  esencial: `
**Qué es.** La inflación es el aumento **generalizado y sostenido** de los precios. Que suba la gasolina no es inflación por sí solo; que suban a la vez la gasolina, el alquiler, los sueldos y el menú del día, sí.

**Cómo se mide.** Con el **índice de precios de consumo (IPC)**: el precio de una cesta de bienes y servicios que representa el gasto de un hogar medio. En la zona euro se usa el **IPCA** (armonizado), comparable entre países. La tasa que se publica es la variación **interanual**: cuánto ha subido la cesta respecto al mismo mes del año anterior.

| Medida | Qué incluye | Para qué sirve |
|---|---|---|
| **General** | Toda la cesta | Lo que pierde tu dinero |
| **Subyacente** | Sin energía ni alimentos frescos (o sin alimentos, según la definición) | La tendencia de fondo, que es lo que mira el banco central |

**De dónde viene.**
1. **Exceso de demanda**: se quiere comprar más de lo que la economía puede producir (brecha positiva, lección 5.1).
2. **Choque de costes**: sube algo que lo encarece todo, como el petróleo. Es lo que pasó en 2022 y otra vez en 2026.
3. **Expectativas**: si todos esperan un 5 %, los sindicatos piden un 5 % y las empresas suben precios un 5 %. La inflación esperada tiende a cumplirse.

**La ecuación de Fisher.** El tipo de interés que importa es el **real**, el que queda después de la inflación:

$$ tipo real ≈ tipo nominal − inflación

Un depósito al 3 % con una inflación del 4,9 % pierde poder de compra: su rentabilidad real es de en torno a −1,8 %.

**A quién perjudica.**
- **Pierden**: el efectivo, los depósitos y los bonos a tipo fijo, los pensionistas y asalariados si sus ingresos no se actualizan.
- **Ganan**: los **deudores** a tipo fijo (la deuda pesa menos en términos reales) y los Estados endeudados.
- **Depende**: las acciones protegen a largo plazo, porque las empresas suben precios, pero sufren cuando la inflación es alta e inesperada (lección 5.9).

**El objetivo de los bancos centrales** es una inflación del **2 %**: lo bastante baja para no distorsionar decisiones y lo bastante alta para evitar la deflación.

**La foto de octubre de 2026**: inflación del 4,0 % en la zona euro (subyacente 2,5 %), del 4,9 % en España (subyacente 3,1 %) y del 3,7 % en Estados Unidos (septiembre). La diferencia entre general y subyacente dice que el problema es, sobre todo, la **energía**.
`,
  entender: `
#### Cómo se construye el IPC
El INE en España (y Eurostat para el IPCA) encuesta a los hogares para saber en qué gastan, y fija **ponderaciones**: si los hogares dedican un 10 % de su gasto a energía, la energía pesa un 10 % en la cesta. Cada mes, miles de agentes registran más de 200.000 precios. La inflación general es la media ponderada de las subidas.

Una consecuencia importante: **tu inflación no es la media**. Quien no tiene coche y vive de alquiler soporta una inflación distinta de la de un jubilado con casa pagada que conduce mucho.

#### General frente a subyacente: el ejemplo de octubre de 2026
En la zona euro, la energía se encareció un **20,8 %** interanual y aportó unos **2 puntos** de los 4,0 de inflación general. El resto de la cesta subió en torno a un 2,2 %. La subyacente, sin energía ni alimentos, estaba en el 2,5 %. Lectura: la inflación es alta, pero el problema está concentrado en la energía.

El banco central mira la subyacente porque la energía es volátil: si el petróleo vuelve a bajar, la inflación general cae sola. Lo que le preocupa es que el choque se **contagie**: que las empresas trasladen el coste del transporte a todo y que los salarios se indexen. Son los llamados **efectos de segunda ronda**.

#### Los efectos base
La inflación interanual compara con el mismo mes del año anterior. Si el petróleo se disparó en marzo de 2026, en marzo de 2027 la comparación será con un mes caro, y la inflación bajará aunque los precios no bajen. Por eso los analistas también miran la **variación mensual anualizada**: en Estados Unidos, la inflación de octubre de 2026 subió un 0,4 % respecto a septiembre, lo que anualizado son casi 5 puntos.

#### La curva de Phillips
En 1958, William Phillips observó que en el Reino Unido, cuando el paro era bajo, los salarios subían más. Durante los años sesenta se interpretó como un menú: un poco más de inflación a cambio de menos paro. Milton Friedman (1968) y Edmund Phelps explicaron por qué no funciona a largo plazo: si el banco central intenta mantener el paro por debajo de su nivel natural con inflación, la gente acaba esperando esa inflación, la incorpora a sus salarios y precios, y el resultado es **más inflación con el mismo paro**. Los años setenta les dieron la razón: inflación y paro altos a la vez, la **estanflación**.

#### Inflación, deflación y desinflación
- **Inflación**: los precios suben.
- **Desinflación**: los precios siguen subiendo, pero menos (de un 10 % a un 4 %). Los precios no vuelven atrás.
- **Deflación**: los precios bajan. Parece buena, pero es peligrosa: si espero que algo sea más barato mañana, retraso la compra; las deudas pesan más en términos reales. Japón la sufrió durante gran parte de 1998–2013.

#### Por qué la inflación perjudica a los bonos más que a nada
Un bono a 10 años que paga un 3 % fijo promete euros nominales. Si la inflación sube al 5 %, cada cupón compra menos, y el precio del bono cae porque los nuevos bonos pagarán más (lección 5.4). Las acciones pueden adaptarse: las empresas suben precios. Los bonos, no.
`,
  fondo: `
#### 1. La inflación como fenómeno monetario
Friedman resumió la tradición monetarista en una frase: «la inflación es siempre y en todas partes un fenómeno monetario». La base es la **ecuación cuantitativa**:

$$ M × V = P × Y

donde M es la cantidad de dinero, V la velocidad a la que circula, P el nivel de precios e Y la producción real. Si V es estable, crecer el dinero más que la producción genera inflación. La ecuación funciona bien en hiperinflaciones (Alemania 1923, Zimbabue 2008, Venezuela) y a muy largo plazo, pero mal a corto: entre 2009 y 2019 los bancos centrales crearon mucho dinero con la expansión cuantitativa (lección 5.3) y la inflación siguió baja, porque la velocidad cayó. En 2020–2021, la combinación de dinero nuevo con **transferencias directas a hogares** sí acabó en inflación.

#### 2. Expectativas ancladas
Hoy se considera que el factor decisivo son las **expectativas**. Si los agentes creen que el banco central llevará la inflación al 2 %, un choque temporal se queda en eso. Si dejan de creerlo, la inflación se instala. Se miden con encuestas (a consumidores, a empresas, a analistas) y con los mercados.

**El *breakeven* de inflación.** Hay bonos ligados a la inflación (los TIPS en Estados Unidos, los bonos ligados al IPCA de Francia, Italia, Alemania o España) que pagan un tipo real más la inflación. La diferencia entre la rentabilidad de un bono nominal y la de uno ligado del mismo plazo es la **inflación que descuenta el mercado**:

$$ breakeven ≈ rentabilidad nominal − rentabilidad real

Si un bono nominal a 10 años rinde un 3,3 % y el ligado un 1,2 %, el mercado espera en torno a un 2,1 % de inflación media. Si la inflación resulta mayor, gana el ligado; si menor, el nominal.

#### 3. La espiral precios-salarios
Cuando la inflación supera a los salarios, los trabajadores pierden poder de compra y piden subidas. Si las empresas las trasladan a los precios, se forma una espiral. En la España de los años setenta, con salarios indexados, la inflación superó el 20 % (en torno al 26 % en 1977), y solo bajó tras los Pactos de la Moncloa, que fijaron las subidas salariales según la inflación **prevista**, no la pasada.

En octubre de 2026, los salarios en Estados Unidos subían un 3,1 % interanual frente a una inflación del 3,7 %: los trabajadores perdían poder de compra, pero no había espiral. Es el escenario que los bancos centrales intentan mantener.

#### 4. Problemas de medición
- **Vivienda en propiedad**: el IPCA europeo no incluye el coste de vivir en una casa propia; el IPC de Estados Unidos sí lo incluye mediante el «alquiler equivalente», que pesa en torno a un cuarto de la cesta. Por eso las inflaciones de ambos lados no son del todo comparables.
- **Calidad y sustitución**: si sube la carne y la gente compra pollo, la cesta fija sobrestima la inflación real.
- **Datos que faltan**: el cierre del Gobierno estadounidense de 2025 dejó sin recoger los precios de octubre de 2025. Por eso, en noviembre de 2026, la oficina estadística no pudo publicar la tasa interanual de octubre de 2026, solo la mensual.

#### 5. Los años setenta y la credibilidad
En Estados Unidos, la inflación llegó al **14,8 %** en marzo de 1980. Paul Volcker, presidente de la Reserva Federal, subió los tipos hasta cerca del **20 %** en 1981 y provocó dos recesiones. La inflación bajó por debajo del 4 % en 1983. Desde entonces, los bancos centrales consideran la credibilidad su principal activo: el coste de recuperar el control es tan alto que prefieren actuar pronto. Esa memoria explica las subidas de tipos de 2026 (lección 5.3).
`,
  caso: {
    titulo: "El choque de Ormuz de 2026: cuando la inflación vuelve por la energía",
    md: `
**El detonante.** El 28 de febrero de 2026, Estados Unidos e Israel atacaron Irán. Irán respondió cerrando el **estrecho de Ormuz**, por el que antes de la guerra pasaba en torno a una quinta parte del petróleo y del gas natural licuado del mundo. Se describió como la mayor crisis de suministro de petróleo de la historia.

**El precio.** El Brent pasó de unos 72 dólares a finales de febrero a más de 100 en marzo y tocó en torno a **126 dólares** a finales de abril. Hubo un acuerdo de paz preliminar en junio, pero las hostilidades se reanudaron en julio. En octubre, el Brent seguía por encima de 110 dólares; bajó hacia 93 tras las elecciones legislativas de Estados Unidos del 3 de noviembre.

**La inflación.**

| | Inflación general | Subyacente | Comentario |
|---|---|---|---|
| Zona euro (octubre de 2026) | **4,0 %** | 2,5 % | Máximo en más de tres años; energía +20,8 % |
| España (octubre de 2026) | **4,9 %** | 3,1 % | Por encima de la media europea |
| Estados Unidos (septiembre de 2026) | **3,7 %** | 2,6 % | Gasolina +34 % interanual |

**Lo que muestra el caso.**
1. **El choque es de costes, no de demanda.** La diferencia entre la general y la subyacente (1,5 puntos en la zona euro) es casi toda energía.
2. **Los bancos centrales no pueden producir petróleo.** Subir los tipos no abre Ormuz. Su objetivo es evitar los efectos de segunda ronda: que la energía cara se convierta en salarios y precios más altos de forma permanente.
3. **España sufre más.** Su inflación subyacente (3,1 %) es más alta que la europea: la economía española crece más deprisa y tiene más presión de demanda interna.
4. **El recuerdo de 2022 pesa.** En 2021 el BCE y la Reserva Federal dijeron que la inflación sería «transitoria» y llegaron tarde; la inflación de la zona euro alcanzó el 10,6 % en octubre de 2022. En 2026 reaccionaron antes, subiendo tipos en verano (lección 5.3).

**Para el inversor.** Un depósito al 2 % en España en octubre de 2026 perdía casi 3 puntos de poder de compra al año. Las empresas energéticas y los activos reales lo hicieron mejor que los bonos. Y quien tenía una hipoteca variable vio subir el euríbor (lección 5.4).
`
  },
  ejercicios: [
    {
      t: "El depósito que pierde dinero",
      p: `
Tienes un depósito al 3 % y la inflación es del 4,9 %. Calcula tu rentabilidad real exacta. Si además pagas un 19 % de impuestos sobre los intereses, ¿cuál es tu rentabilidad real después de impuestos?
`,
      s: `
1. **Real antes de impuestos**: 1,03 / 1,049 − 1 = **−1,81 %**.
2. **Interés neto**: 3 % × (1 − 0,19) = 2,43 %.
3. **Real después de impuestos**: 1,0243 / 1,049 − 1 = **−2,35 %**.
4. Hacienda cobra sobre el interés nominal, aunque en términos reales estés perdiendo: la inflación aumenta el tipo efectivo del impuesto.
`
    },
    {
      t: "Lo que se come la inflación en 20 años",
      p: `
¿Cuánto poder de compra tendrán 1.000 € dentro de 20 años si la inflación media es del 2 %, del 3 % y del 4,9 %? ¿En cuántos años se reduce a la mitad con una inflación del 3,5 %?
`,
      s: `
1. **Al 2 %**: 1.000 / 1,02²⁰ = **673 €**.
2. **Al 3 %**: 1.000 / 1,03²⁰ = **554 €**.
3. **Al 4,9 %**: 1.000 / 1,049²⁰ = **384 €**.
4. **A la mitad al 3,5 %**: regla del 70 → 70 / 3,5 = **20 años** (exacto: ln 2 / ln 1,035 = 20,1).
`
    },
    {
      t: "Cuánto aporta la energía",
      p: `
En octubre de 2026, la energía pesaba en torno a un 9,5 % de la cesta de la zona euro y subió un 20,8 %. La inflación general fue del 4,0 %. ¿Cuántos puntos aportó la energía? ¿Cuánto subió de media el resto de la cesta?
`,
      s: `
1. **Aportación**: 0,095 × 20,8 = **1,98 puntos**.
2. **Resto de la cesta**: (4,0 − 1,98) / (1 − 0,095) = **2,24 %**.
3. Sin la energía, la inflación estaría ligeramente por encima del objetivo del 2 %. Por eso el BCE subió poco los tipos: su preocupación es el contagio, no el nivel actual.
`
    }
  ],
  errores: [
    "Mirar la rentabilidad nominal de un depósito o bono sin restarle la inflación.",
    "Confundir desinflación (los precios suben menos) con deflación (los precios bajan).",
    "Creer que la inflación general alta implica que el banco central subirá mucho los tipos, sin mirar la subyacente.",
    "Olvidar los efectos base al interpretar la tasa interanual.",
    "Pensar que «tu» inflación es la del IPC: depende de en qué gastas."
  ],
  test: [
    { p: "¿Qué excluye la inflación subyacente?", o: ["La vivienda", "La energía y los alimentos frescos (o todos los alimentos)", "Los servicios"], c: 1, e: "Son los componentes más volátiles." },
    { p: "Un bono rinde un 4 % y la inflación es del 5 %. Su rentabilidad real aproximada es…", o: ["+9 %", "−1 %", "+1 %"], c: 1, e: "Fisher: real ≈ nominal − inflación." },
    { p: "¿Quién gana con una inflación inesperada?", o: ["Quien tiene depósitos", "Quien tiene deuda a tipo fijo", "Quien tiene bonos a tipo fijo"], c: 1, e: "La deuda pesa menos en términos reales." },
    { p: "¿Qué mide el *breakeven* de inflación?", o: ["La inflación pasada", "La inflación que descuenta el mercado, como diferencia entre la rentabilidad de un bono nominal y la de uno ligado a la inflación", "El objetivo del banco central"], c: 1, e: "Si la inflación resulta mayor, gana el bono ligado." },
    { p: "¿Cuál fue la inflación de España en octubre de 2026?", o: ["2,5 %", "4,0 %", "4,9 %"], c: 2, e: "Con una subyacente del 3,1 %." }
  ],
  lecturas: [
    { t: "The Role of Monetary Policy", a: "Milton Friedman, American Economic Review, 1968", n: "El discurso que desmontó la curva de Phillips como menú." },
    { t: "Monetary History of the United States", a: "Milton Friedman y Anna Schwartz", n: "Clásico; denso." },
    { t: "Por qué sube y baja la inflación (artículos divulgativos)", a: "Banco Central Europeo y Banco de España", n: "Sus webs tienen explicaciones breves y gratuitas, en español." },
    { t: "The Great Inflation and Its Aftermath", a: "Robert Samuelson", n: "La historia de los años setenta y Volcker, para el gran público." }
  ]
});


/* ---- l03.js ---- */
LECCIONES.push({
  id: "b5-l3", num: "5.3",
  titulo: "Bancos centrales: qué hacen, cómo deciden y cómo llega al mercado",
  resumen: "El BCE y la Reserva Federal fijan el precio del dinero a corto plazo para mantener la inflación cerca del 2 %. Deciden mirando la inflación, el empleo y las expectativas, y su forma de pensar se resume en la regla de Taylor. Sus decisiones llegan a la economía con uno o dos años de retraso, pero a los mercados en segundos, porque estos descuentan lo que esperan que hagan. En 2026 ambos volvieron a subir tipos por el choque energético: el BCE hasta el 2,50 % y la Fed hasta el 3,75–4,00 %.",
  esencial: `
**Qué hacen.** Un banco central controla el **tipo de interés a muy corto plazo**: el precio al que los bancos se prestan dinero de un día para otro. A partir de ahí, ese precio se transmite a las hipotecas, los préstamos, los depósitos, los bonos y, en último término, a las valoraciones de todos los activos.

**Los mandatos.**

| | Banco Central Europeo (BCE) | Reserva Federal (Fed) |
|---|---|---|
| Objetivo | Estabilidad de precios: inflación del **2 %** a medio plazo, simétrico | **Doble mandato**: estabilidad de precios (2 %) y máximo empleo |
| Tipo de referencia | **Facilidad de depósito** (lo que paga a los bancos por su dinero) | **Fed funds** (en una horquilla de 0,25 puntos) |
| Nivel en noviembre de 2026 | **2,50 %** | **3,75–4,00 %** |
| Quién decide | Consejo de Gobierno: 6 miembros del Comité Ejecutivo y 21 gobernadores nacionales | FOMC: 7 gobernadores y 5 presidentes de Reservas regionales con voto |

**Cómo deciden.** Miran sobre todo la **inflación subyacente**, las **expectativas** de inflación, el **mercado laboral** y el **crecimiento**. Si la inflación amenaza con quedarse por encima del 2 %, suben los tipos para enfriar la demanda; si la economía se debilita y la inflación baja, los recortan.

**La regla de Taylor** (1993) resume esa lógica en una fórmula:

$$ tipo = tipo neutral real + inflación + 0,5 × (inflación − 2 %) + 0,5 × brecha de producción

No es un mandato, sino una referencia: si el tipo real está muy por debajo de lo que dice la regla, el banco central es **laxo**; si está por encima, es **restrictivo**.

**Las herramientas.**
1. **Tipos oficiales**: la principal.
2. **Comunicación** (*forward guidance*): decir lo que harán. Mueve los tipos a largo plazo sin tocar los cortos.
3. **Balance**: comprar bonos (**expansión cuantitativa**, QE) para bajar los tipos a largo plazo, o dejarlos vencer sin reinvertir (**endurecimiento cuantitativo**, QT).

**Por qué importa al inversor.** El tipo del banco central es el suelo de todas las rentabilidades: si el depósito sin riesgo paga un 4 %, ningún activo con riesgo puede ofrecer poco más que eso. Cuando los tipos suben, los precios de los bonos y las acciones de larga duración bajan (lección 5.4).

**El mercado se adelanta.** Lo que mueve los precios no es la decisión, sino la **sorpresa** frente a lo esperado. A mediados de noviembre de 2026, el mercado daba en torno a un 80 % de probabilidad a que el BCE subiera al 2,75 % en diciembre. Si sube, apenas pasará nada; si no sube, los bonos subirán.
`,
  entender: `
#### El pasillo del BCE
El BCE tiene tres tipos:

| Tipo | Qué es | Nivel (noviembre de 2026) |
|---|---|---|
| **Facilidad marginal de crédito** | Lo que cobra si un banco le pide dinero a un día | 2,90 % |
| **Operaciones principales de financiación** | Lo que cobra en sus préstamos semanales | 2,65 % |
| **Facilidad de depósito** | Lo que paga a los bancos por dejarle dinero | **2,50 %** |

Desde 2008 hay tanto exceso de liquidez en el sistema que los bancos se prestan entre sí a tipos muy cercanos al de depósito. Por eso hoy el **tipo de depósito** es el que manda: el **€STR**, el tipo interbancario a un día, cotiza unas centésimas por debajo.

#### Cómo se transmite una subida de tipos
1. **Mercados**: suben al instante los tipos a corto plazo, el euríbor y, en parte, los bonos a largo. Bajan los precios de bonos y acciones. Normalmente se aprecia la divisa.
2. **Crédito**: los bancos encarecen préstamos e hipotecas. Las hipotecas variables (mayoritarias en el stock español) se encarecen en la siguiente revisión.
3. **Gasto**: hogares y empresas piden menos préstamos, consumen e invierten menos. Ahorrar se vuelve más atractivo.
4. **Empleo y salarios**: con menos demanda, las empresas contratan menos.
5. **Inflación**: con menos demanda y una divisa más fuerte, los precios suben menos.

El proceso completo tarda entre **12 y 24 meses**. Milton Friedman lo llamó retardos «largos y variables». Por eso los bancos centrales tienen que decidir mirando hacia delante, con la inflación prevista, no con la actual.

#### La regla de Taylor aplicada a noviembre de 2026
Suponiendo un tipo neutral real del 1 % para ambos:

| | Inflación usada | Brecha | Tipo según Taylor | Tipo real |
|---|---|---|---|---|
| Zona euro, general | 4,0 % | −0,5 % | **5,75 %** | 2,50 % |
| Zona euro, subyacente | 2,5 % | −0,5 % | **3,50 %** | 2,50 % |
| Estados Unidos, general | 3,7 % | 0 | **5,55 %** | 3,75–4,00 % |
| Estados Unidos, subyacente | 2,6 % | 0 | **3,90 %** | 3,75–4,00 % |

Lectura: con la subyacente, la Fed está casi exactamente donde dice la regla y el BCE un punto por debajo. Con la general, ambos están muy por debajo. Ese es el debate de 2026: si el choque de la energía es temporal (mirar la subyacente) o se está contagiando (mirar la general).

#### La expansión cuantitativa
Cuando los tipos llegaron a cero en 2009 (Fed) y 2014–2015 (BCE), los bancos centrales empezaron a **comprar bonos** con dinero que creaban. Así bajaban los tipos a largo plazo, empujaban a los inversores hacia activos con más riesgo y, en la zona euro, reducían las primas de riesgo de los países del sur. El balance del BCE pasó de unos 2 billones de euros a casi 9 billones en 2022. Desde 2022 lo está reduciendo (QT), y eso añade presión al alza sobre los tipos a largo.

#### Leer las expectativas del mercado
Los futuros sobre el tipo a un día permiten calcular qué espera el mercado. Si el BCE está en el 2,50 %, la próxima decisión solo puede ser mantener o subir 0,25, y el mercado descuenta un 2,70 % para después de la reunión:

$$ probabilidad de subida = (2,70 − 2,50) / 0,25 = 80 %

Herramientas públicas como el *FedWatch* de CME hacen este cálculo para la Fed.
`,
  fondo: `
#### 1. El tipo neutral (r*)
El **tipo de interés natural o neutral** es el tipo real que ni estimula ni frena la economía. No se observa; se estima con modelos, como el de Laubach y Williams. Antes de 2008 se situaba en torno al 2 % real en Estados Unidos; tras la crisis cayó hacia el 0,5 %, por el envejecimiento, el exceso de ahorro mundial y la baja productividad. Desde 2023 muchos economistas creen que ha vuelto a subir, por la inversión en energía e inteligencia artificial y los grandes déficits públicos. Si el neutral es más alto de lo que se pensaba, los tipos actuales son menos restrictivos de lo que parecen.

Para el inversor, el r* es crucial: fija el suelo de la tasa de descuento a largo plazo. Un r* del 0,5 % justifica valoraciones mucho más altas que uno del 1,5 % (lección 5.4).

#### 2. Por qué los bancos centrales son independientes
Un Gobierno tiene la tentación de bajar los tipos antes de unas elecciones: crece la economía a corto plazo y la inflación llega después. Sabiéndolo, los agentes esperan más inflación y la generan. La solución, desde los años noventa, es la independencia: banqueros centrales con mandatos largos que no dependen del ciclo electoral. Los estudios muestran que los países con bancos centrales más independientes tienen menos inflación sin menos crecimiento.

Esa independencia está bajo presión en varios países. En Estados Unidos, el presidente Trump criticó repetidamente a la Fed por no bajar los tipos en 2025, y en 2026 Kevin Warsh sustituyó a Jerome Powell como presidente. Para el mercado, la señal importante fue que la Fed **subió** los tipos en septiembre de 2026 por unanimidad (12–0) pese a la presión política. En octubre mantuvo los tipos con dos votos discrepantes que pedían subirlos.

#### 3. El BCE y la fragmentación
El BCE tiene un problema que la Fed no tiene: fija un único tipo para 21 países (Bulgaria entró en el euro en enero de 2026) con 21 deudas públicas distintas. Si los inversores temen por un país, su prima de riesgo sube y la política monetaria deja de llegar igual a todos (**fragmentación**). Por eso en 2022 creó el **TPI** (instrumento para la protección de la transmisión), que le permite comprar bonos de un país concreto si su prima sube sin justificación. Nunca se ha usado, pero su existencia contiene las primas. En octubre de 2026, el diferencial de Francia con Alemania superaba los 160 puntos básicos, el mayor desde 2011 (lección 5.7).

#### 4. Los retardos y el riesgo de pasarse
Como la política monetaria tarda 1–2 años, el banco central conduce mirando por el retrovisor. Dos errores clásicos:
- **Llegar tarde**: en 2021 el BCE y la Fed llamaron «transitoria» a la inflación y empezaron a subir en 2022, con la inflación ya por encima del 8 %. Tuvieron que subir mucho y deprisa.
- **Pasarse**: subir tanto que, cuando el efecto llega, la economía ya se estaba enfriando sola. Es lo que provoca muchas recesiones.

#### 5. La comunicación como herramienta
Los bancos centrales publican sus previsiones y, la Fed, el **dot plot**: dónde cree cada miembro del FOMC que estarán los tipos en los próximos años. Las conferencias de prensa se analizan palabra por palabra. Un cambio de «vigilaremos» a «estamos preparados para actuar» puede mover los bonos más que una subida. El anuncio de Christine Lagarde de que dejará la presidencia del BCE a principios de febrero de 2027, casi nueve meses antes del fin de su mandato (el 7 de febrero de 2027 en lugar del 31 de octubre), abre la pregunta de quién la sustituirá y con qué inclinación.
`,
  caso: {
    titulo: "2026: los bancos centrales vuelven a subir",
    md: `
**El punto de partida.** A finales de 2025, el BCE tenía el tipo de depósito en el 2,00 %, tras ocho bajadas desde 2024, y la Fed lo había bajado al 3,50–3,75 %. El mercado esperaba más recortes en 2026.

**El giro.** La guerra con Irán y el cierre de Ormuz desde el 28 de febrero de 2026 dispararon la energía. En pocas semanas, los futuros dejaron de descontar recortes en Estados Unidos. Los bancos centrales se enfrentaron al dilema clásico de un choque de costes: **subir tipos** frena una economía ya golpeada por la energía cara; **no subirlos** arriesga que la inflación se contagie.

**Las decisiones.**

| Fecha | BCE | Fed |
|---|---|---|
| Junio de 2026 | Sube 0,25 (11 de junio) → depósito 2,25 % | Mantiene |
| Julio | Mantiene | Mantiene (9–3; tres presidentes regionales querían subir) |
| 10 de septiembre | Sube 0,25 → **2,50 %** | — |
| 16 de septiembre | — | Sube 0,25 → **3,75–4,00 %** (primera subida desde 2023; 12–0) |
| 28–29 de octubre | Mantiene (por unanimidad, tras debatir una subida) | Mantiene (10–2; Cook y Hammack querían subir) |
| Diciembre | Reunión el 17; el mercado da ~80 % a una subida al 2,75 % | Reunión el 8–9 |

**Lo que se ve en el caso.**
1. **Reaccionaron antes que en 2021–2022.** La inflación general de la zona euro estaba en el 4 % y subieron. En 2021 esperaron hasta ver más del 8 %. La memoria de aquel error pesó.
2. **Subieron poco.** Con la subyacente en el 2,5 %, la regla de Taylor no pedía grandes subidas. Fueron movimientos de seguro contra el contagio.
3. **El mercado se movió antes.** El bono alemán a 10 años llegó al 3,55–3,57 % a mediados de septiembre, su nivel más alto desde 2009; el estadounidense superó el 5 %, máximos desde 2007. Los tipos largos subieron más que los oficiales porque el mercado descontaba más subidas y más inflación (lección 5.4).
4. **La política importa.** La Fed subió con un nuevo presidente y bajo presión política para bajar tipos. Su credibilidad salió reforzada a ojos del mercado.

**Para tu cartera.** Las decisiones de los bancos centrales no se pueden anticipar mejor que el mercado. Lo útil es entender **qué descuenta** el mercado (los futuros lo dicen) y qué pasaría con tus activos si la realidad se aleja de eso.
`
  },
  ejercicios: [
    {
      t: "La regla de Taylor para la zona euro",
      p: `
Supón un tipo neutral real del 1 %, una inflación general del 4,0 %, una subyacente del 2,5 % y una brecha de producción del −0,5 %. Calcula el tipo que recomienda la regla de Taylor con cada inflación y compáralo con el 2,50 % del BCE.
`,
      s: `
1. **Con la general**: 1 + 4,0 + 0,5 × (4,0 − 2) + 0,5 × (−0,5) = **5,75 %**.
2. **Con la subyacente**: 1 + 2,5 + 0,5 × 0,5 + 0,5 × (−0,5) = **3,50 %**.
3. El BCE está entre 1 y 3,25 puntos por debajo. Su apuesta implícita es que el choque energético es temporal; si se contagia, tendrá que subir más.
`
    },
    {
      t: "El tipo real de cada banco central",
      p: `
El BCE tiene el depósito en el 2,50 % y se espera una inflación del 2,5 % a un año. La Fed tiene una horquilla del 3,75–4,00 % y se espera una inflación del 3 %. Calcula el tipo real aproximado de cada uno. Con un tipo neutral real del 1 %, ¿cuál es más restrictivo?
`,
      s: `
1. **BCE**: 2,50 − 2,5 = **0 %** real.
2. **Fed**: 3,875 (punto medio) − 3,0 = **0,875 %** real.
3. Con un neutral del 1 %, los dos son ligeramente **laxos**; la Fed está casi en el neutral y el BCE un punto por debajo.
`
    },
    {
      t: "Leer la probabilidad que descuenta el mercado",
      p: `
El BCE tiene el depósito en el 2,50 % y solo puede mantenerlo o subirlo 0,25 puntos en la próxima reunión. Los futuros descuentan un tipo del 2,70 % tras la reunión. ¿Qué probabilidad de subida implica? Si el BCE no sube, ¿qué esperas que pase con el precio de los bonos?
`,
      s: `
1. **Probabilidad**: (2,70 − 2,50) / 0,25 = **80 %**.
2. **Si no sube**: los tipos a corto bajarán unos 0,20 puntos hasta el 2,50 %, y los bonos subirán de precio, sobre todo los de plazo corto. También se debilitaría el euro.
3. Lo relevante no es la decisión en sí, sino la diferencia con lo descontado.
`
    }
  ],
  errores: [
    "Comprar o vender por una decisión de tipos que el mercado ya había descontado.",
    "Olvidar que la política monetaria tarda uno o dos años en notarse en la economía.",
    "Confundir el tipo de depósito del BCE con el euríbor o con el tipo de las hipotecas.",
    "Creer que un banco central puede resolver un choque de oferta como el del petróleo.",
    "Dar por sentado que los bancos centrales siempre bajarán los tipos cuando caiga la bolsa."
  ],
  test: [
    { p: "¿Qué mandato tiene la Reserva Federal?", o: ["Solo la estabilidad de precios", "Estabilidad de precios y máximo empleo", "Estabilidad del dólar"], c: 1, e: "Es el doble mandato; el BCE tiene un mandato principal de precios." },
    { p: "¿Cuál es el tipo de referencia que de verdad manda hoy en la zona euro?", o: ["El de la facilidad de depósito", "El de la facilidad marginal de crédito", "El euríbor a 12 meses"], c: 0, e: "Con exceso de liquidez, el interbancario cotiza cerca del depósito." },
    { p: "Según la regla de Taylor, si la inflación sube un punto el banco central debería subir los tipos…", o: ["Medio punto", "Un punto", "Un punto y medio"], c: 2, e: "Un punto por el término de inflación y medio por la desviación: el tipo real sube." },
    { p: "¿Qué es la expansión cuantitativa?", o: ["Subir los tipos rápidamente", "Comprar bonos con dinero nuevo para bajar los tipos a largo plazo", "Aumentar el gasto público"], c: 1, e: "Se usó mucho cuando los tipos estaban en cero." },
    { p: "¿A qué nivel subió la Fed su horquilla en septiembre de 2026?", o: ["3,50–3,75 %", "3,75–4,00 %", "4,25–4,50 %"], c: 1, e: "Primera subida desde 2023, por unanimidad." }
  ],
  lecturas: [
    { t: "Discretion versus Policy Rules in Practice", a: "John Taylor, 1993", n: "El artículo original de la regla de Taylor." },
    { t: "The Courage to Act", a: "Ben Bernanke", n: "La crisis de 2008 contada por el presidente de la Fed." },
    { t: "21st Century Monetary Policy", a: "Ben Bernanke, 2022", n: "La mejor explicación de QE, tipos cero y comunicación." },
    { t: "La política monetaria del BCE (web)", a: "Banco Central Europeo", n: "Explicaciones oficiales y las conferencias de prensa con sus transcripciones." },
    { t: "CME FedWatch Tool", a: "CME Group", n: "Probabilidades de las decisiones de la Fed según los futuros." }
  ]
});


/* ---- l04.js ---- */
LECCIONES.push({
  id: "b5-l4", num: "5.4",
  titulo: "Tipos de interés: la fuerza de gravedad de las valoraciones",
  resumen: "Los tipos de interés a largo plazo son la tasa con la que el mercado descuenta todos los flujos futuros. Cuando suben, bajan los precios de los bonos y de las acciones, y más los de las que esperan sus beneficios más lejos. Los tipos largos dependen de los tipos oficiales esperados, de la inflación esperada y de una prima por plazo. En 2026, el bono alemán tocó su máximo desde 2009 y el euríbor subió un punto en un año, lo que encareció en unos 85 € al mes una hipoteca típica.",
  esencial: `
**Por qué los tipos lo mueven todo.** El valor de cualquier activo es el valor presente de lo que va a pagar (lecciones 1.2 y 4.8). Si los tipos suben, cada euro futuro vale menos hoy. Warren Buffett lo comparó con la gravedad: los tipos de interés son para los precios de los activos lo que la gravedad para la manzana.

**La curva de tipos.** Es la rentabilidad de la deuda pública a distintos plazos. Normalmente tiene **pendiente positiva**: se paga más por prestar a 10 años que a 2, para compensar la incertidumbre. Cuando se **invierte** (el corto paga más que el largo), el mercado espera bajadas de tipos, a menudo porque teme una recesión (lección 5.5).

**De qué depende el tipo a 10 años.**

$$ tipo a 10 años ≈ media esperada del tipo oficial durante 10 años + prima por plazo

Y, visto de otra forma, ≈ **tipo real + inflación esperada** (Fisher). Por eso el tipo largo sube si el mercado espera más subidas del banco central, más inflación o simplemente exige más por el riesgo de prestar a largo (por ejemplo, por los déficits públicos).

**Bonos: precio y tipos van al revés.** Si compras un bono que paga un 3 % y los nuevos pagan un 3,55 %, el tuyo vale menos. Cuánto menos lo mide la **duración**: un bono a 10 años con duración de 8,6 pierde en torno a un **8,6 % por cada punto** que suben los tipos.

**Las acciones también tienen duración.** Con el modelo de Gordon, P = D / (r − g), la sensibilidad del precio a la tasa de descuento es aproximadamente 1 / (r − g). Una empresa de crecimiento con r − g = 2 % tiene una duración de 50 años; una de valor con r − g = 6 %, de unos 17. Por eso en 2022, cuando los tipos subieron con fuerza, las tecnológicas de crecimiento cayeron mucho más que los bancos o las energéticas.

**El euríbor y tu hipoteca.** El **euríbor a 12 meses** es el tipo al que los bancos se prestan a un año. Refleja los tipos actuales del BCE y los esperados para los próximos doce meses. En octubre de 2026 estaba en el **3,239 %**, frente al 2,187 % un año antes: una hipoteca variable de 150.000 € a 25 años con un diferencial de 0,8 puntos pasa de unos 710 € a unos 795 € al mes en su siguiente revisión.

**Las cifras de 2026.**

| Indicador | Nivel | Contexto |
|---|---|---|
| Bono alemán a 10 años | 3,55–3,57 % (septiembre); ~3,3 % (noviembre) | Máximo desde 2009 |
| Bono español a 10 años | 4,14 % (28 de septiembre) | Máximo desde enero de 2014 |
| Bono estadounidense a 10 años | Por encima del 5 % (septiembre y octubre) | Máximos desde 2007 |
| Euríbor a 12 meses | 3,239 % (octubre) | +1,05 puntos en un año |
`,
  entender: `
#### Un bono paso a paso
Un bono alemán a 10 años con un cupón del 3 % y un nominal de 100 promete pagar 3 cada año y 100 al final. Si el mercado exige un 2,7 %, su precio es la suma descontada de esos pagos: **102,60**. Si el mercado pasa a exigir un 3,55 % (lo que ocurrió con el bono alemán entre febrero y septiembre de 2026), el precio cae a **95,44**: una pérdida del **7,0 %**, más de dos años de cupones.

La duración modificada de ese bono es 8,57, así que la regla aproximada predice −8,57 × 0,85 = −7,3 %. La diferencia con el −7,0 % real es la **convexidad**: la relación entre precio y tipo es curva, y las pérdidas por subidas son algo menores de lo que dice la línea recta (y las ganancias por bajadas, algo mayores).

#### La rentabilidad esperada de un bono es su TIR
Si compras un bono y lo mantienes hasta el vencimiento, tu rentabilidad (sin impago) es la **TIR** del momento de la compra, pase lo que pase con los tipos. Las caídas de precio son pérdidas solo si vendes antes. Para un fondo de bonos, que vende y compra continuamente, la regla práctica es: si los tipos suben de golpe, pierdes a corto plazo, pero a partir de ahí reinviertes a tipos más altos, y si tu horizonte es mayor que la duración del fondo, acabas ganando más.

#### Tipos reales: el dato importante
El tipo real a 10 años de Estados Unidos se puede leer directamente en los bonos ligados a la inflación (TIPS). Pasó de en torno a **−1 %** en 2021 a más de **2 %** en 2023 y ha seguido en niveles parecidos o superiores. Ese salto de tres puntos explica buena parte de la caída de las valoraciones de 2022: un activo que no da rentas, como el oro o una empresa sin beneficios, deja de ser atractivo cuando el bono sin riesgo da un 2 % por encima de la inflación.

#### La prima de riesgo de los países
La **prima de riesgo** española es la diferencia entre la rentabilidad del bono español a 10 años y la del alemán. Mide lo que exige el mercado por el riesgo adicional de España. En 2026 promedió unos **46 puntos básicos** (0,46 %), con un mínimo de 36 en enero, el menor desde 2008; muy lejos de los 636 de julio de 2012 (lección 5.7). El Real Instituto Elcano señala que buena parte de ese estrechamiento se debe a que el bono alemán paga más, no a que España pague menos. Pero ojo: una prima baja no significa que España se financie barata. A finales de septiembre de 2026 el bono español rindió un 4,14 %, el máximo desde enero de 2014; la prima era baja porque el bono alemán también rendía mucho.

#### Hipotecas: fija, variable o mixta
- **Variable**: se revisa cada 6 o 12 meses con el euríbor más un diferencial. Barata cuando los tipos bajan, cara cuando suben.
- **Fija**: el tipo no cambia. Pagas una especie de seguro contra subidas.
- **Mixta**: fija unos años y luego variable.

Elegir entre ellas es apostar contra la curva: el tipo fijo que ofrece el banco ya incorpora las subidas o bajadas que espera el mercado. Solo ganas con la variable si el euríbor resulta **menor de lo que descontaba** el mercado al firmar.
`,
  fondo: `
#### 1. La prima por plazo
La prima por plazo es lo que se paga de más por prestar a 10 años en vez de renovar un préstamo a un día durante 10 años. No se observa; se estima con modelos (los más usados son los de la Reserva Federal de Nueva York, el ACM). Fue **negativa** durante buena parte de 2015–2021, cuando los bancos centrales compraban bonos y la inflación era baja y predecible. Desde 2022 ha vuelto a terreno positivo por tres razones:
1. **Incertidumbre sobre la inflación**: después de 2022 y 2026, nadie da por segura una inflación del 2 %.
2. **Oferta de deuda**: los déficits de Estados Unidos (entre el 6 y el 8 % del PIB según la estimación) y de varios países europeos obligan a emitir mucho.
3. **Endurecimiento cuantitativo**: los bancos centrales ya no compran; venden o dejan vencer.

#### 2. La duración de una acción, formalmente
Con Gordon, P = D / (r − g). Derivando respecto a r:

$$ (dP / dr) × (1 / P) = −1 / (r − g)

Si r − g = 4 %, una subida de r de un punto reduce el precio en torno a un 25 % (con la fórmula exacta, de 100 a 80: −20 %). Para una empresa de crecimiento con r − g = 2 %, la caída exacta es del 33 %; para una de valor con r − g = 6 %, del 14 %.

Esto explica por qué las acciones de crecimiento se comportan como bonos de muy larga duración, y por qué los ciclos de tipos coinciden con los cambios de liderazgo entre crecimiento y valor (lección 2.8).

#### 3. El «modelo de la Fed» y la prima de riesgo de las acciones
Una comparación muy popular enfrenta la **rentabilidad del beneficio** de la bolsa (el inverso del PER) con la del bono a 10 años. Con el S&P 500 a un PER adelantado de 17,7, la rentabilidad del beneficio es del 5,6 %; frente a un bono al 5 %, el «colchón» es de solo 0,6 puntos, el menor en décadas.

La comparación tiene un defecto: mezcla una rentabilidad **real** (los beneficios crecen con la inflación) con una **nominal** (el bono no). Es más correcto comparar con el tipo **real**: si el TIPS rinde en torno a un 2,5 %, la prima de las acciones sería de en torno a 3 puntos. Cliff Asness (2003) mostró que el modelo de la Fed predice mal la rentabilidad futura. Aun así, captura algo cierto: cuando los bonos pagan mucho, las acciones tienen que ofrecer más para competir.

#### 4. Tipos, divisa y flujos internacionales
Cuando una zona tiene tipos más altos, atrae capital y su divisa suele apreciarse a corto plazo (lección 5.8). En 2026, con la Fed en el 3,75–4,00 % y el BCE en el 2,50 %, el diferencial favorecía al dólar: el euro bajó desde 1,17 hasta en torno a 1,115 dólares.

#### 5. Bonos frente a depósitos con tipos altos
Con el depósito del BCE en el 2,50 % y el bono alemán a 10 años en torno al 3,3 %, la curva europea tiene una pendiente positiva de unos 0,8 puntos. Mantener liquidez en una cuenta remunerada da algo menos, pero sin riesgo de tipos. Comprar bonos largos da algo más y una cobertura parcial si la economía se frena y los tipos bajan. Esa elección es la base de la parte de renta fija de tu cartera (lecciones 1.4 y 3.6).
`,
  caso: {
    titulo: "El verano de 2026: el bono alemán en máximos de 2009 y el euríbor al alza",
    md: `
**Qué pasó.** Con el choque energético y las subidas de tipos (lecciones 5.2 y 5.3), los tipos a largo plazo europeos subieron con fuerza en verano.

| Indicador | Antes | Máximo de 2026 | Comentario |
|---|---|---|---|
| Bono alemán a 10 años | 2,85 % al cierre de 2025; 2,73 % el 20 de febrero | **3,55–3,57 %** a mediados de septiembre | Máximo desde junio de 2009 |
| Bono español a 10 años | 3,24 % en septiembre de 2025 | **4,14 %** el 28 de septiembre | Máximo desde enero de 2014 |
| Bono francés a 10 años | | **Por encima del 5 %** en octubre | Diferencial con Alemania ~161 pb |
| Euríbor a 12 meses | 2,187 % (octubre de 2025) | 3,247 % (septiembre de 2026) | 3,239 % en octubre |
| Bono estadounidense a 10 años | | **Por encima del 5 %** (5,04 % el 15 de septiembre) | Máximo desde 2007 |

**Las consecuencias.**
1. **Los bonos perdieron dinero.** Un bono alemán a 10 años comprado justo antes de la guerra perdió en torno a un 7 % de precio en siete meses. Los fondos de renta fija larga tuvieron otro mal año, como en 2022.
2. **Las hipotecas se encarecieron.** Una hipoteca variable de 150.000 € a 25 años con euríbor + 0,8 pasó de unos 710 € a unos 795 € al mes: **más de 1.000 € al año**. Quien había firmado una fija en 2024–2025 se ahorró ese golpe.
3. **La prima de riesgo española no subió.** Promedió unos 46 puntos básicos en 2026, en parte porque el bono alemán pagaba más. El problema estuvo en Francia, por sus déficits.
4. **Tras el máximo, los tipos bajaron.** A principios de noviembre el bono alemán había vuelto a la zona del 3,25–3,33 %, con el Brent más bajo tras las elecciones estadounidenses. Quien compró bonos en el pico de septiembre ganó en dos meses más de un año de cupones.

**La lección.** Los tipos largos son el precio más importante de la economía para un inversor. No se pueden prever, pero sí se puede saber cuánto te afectan: la **duración** de tus bonos, de tus acciones de crecimiento y de tu hipoteca.
`
  },
  ejercicios: [
    {
      t: "Lo que sube la hipoteca",
      p: `
Te quedan 150.000 € de hipoteca a 25 años, a euríbor + 0,8 puntos con revisión anual. Calcula la cuota mensual con un euríbor del 2,187 % y con uno del 3,239 %. ¿Cuánto más pagas al año?
`,
      s: `
1. **Fórmula**: cuota = P × i / (1 − (1 + i)^(−n)), con i el tipo mensual y n = 300 meses.
2. **Con 2,187 %**: tipo 2,987 % → i = 0,2489 % → cuota = **710,30 €**.
3. **Con 3,239 %**: tipo 4,039 % → i = 0,3366 % → cuota = **794,99 €**.
4. **Diferencia**: **84,69 € al mes**, **1.016 € al año**.
`
    },
    {
      t: "Cuánto pierde un bono cuando suben los tipos",
      p: `
Tienes un bono a 10 años con cupón anual del 3 %. Calcula su precio con una TIR del 2,7 % y del 3,55 %, la pérdida, y compárala con la aproximación por duración modificada.
`,
      s: `
1. **Precio al 2,7 %**: **102,60**.
2. **Precio al 3,55 %**: **95,44**.
3. **Pérdida exacta**: 95,44 / 102,60 − 1 = **−6,98 %**.
4. **Duración modificada** a 2,7 %: 8,57 → aproximación: −8,57 × 0,85 = **−7,29 %**.
5. La aproximación exagera algo la pérdida; la diferencia es la convexidad.
`
    },
    {
      t: "La duración de una acción de crecimiento",
      p: `
Con el modelo de Gordon, compara tres acciones cuyo precio hoy es 100 y la tasa de descuento del 8 %: una de crecimiento (dividendo 2, g = 6 %), una media (dividendo 4, g = 4 %) y una de valor (dividendo 6, g = 2 %). ¿Cuánto cae cada una si la tasa de descuento sube al 9 %?
`,
      s: `
1. **Crecimiento**: 2 / (0,09 − 0,06) = 66,7 → **−33 %**.
2. **Media**: 4 / (0,09 − 0,04) = 80 → **−20 %**.
3. **Valor**: 6 / (0,09 − 0,02) = 85,7 → **−14 %**.
4. La de crecimiento cae más del doble que la de valor por la misma subida de tipos: sus flujos están más lejos en el tiempo.
`
    }
  ],
  errores: [
    "Pensar que una prima de riesgo baja significa que el país se financia barato.",
    "Comprar un fondo de bonos largos sin saber su duración ni cuánto perdería si suben los tipos.",
    "Elegir hipoteca variable porque «los tipos van a bajar», sin comparar con lo que ya descuenta el tipo fijo.",
    "Ignorar que las acciones de crecimiento son muy sensibles a los tipos, más que muchos bonos.",
    "Comparar la rentabilidad del beneficio de la bolsa con el tipo nominal del bono sin pensar en la inflación."
  ],
  test: [
    { p: "Si los tipos suben un punto, un bono con duración modificada de 7 pierde aproximadamente…", o: ["Un 1 %", "Un 7 %", "Un 14 %"], c: 1, e: "Pérdida ≈ duración × variación del tipo." },
    { p: "¿Qué acciones son más sensibles a los tipos de interés?", o: ["Las de valor con mucho dividendo", "Las de crecimiento con beneficios lejanos", "Todas igual"], c: 1, e: "Su duración, 1/(r − g), es mayor." },
    { p: "¿Qué refleja el euríbor a 12 meses?", o: ["El tipo fijo de las hipotecas", "Los tipos del BCE actuales y los esperados para el próximo año", "La inflación"], c: 1, e: "Es un tipo interbancario a un año." },
    { p: "¿En qué nivel tocó máximos el bono alemán a 10 años en septiembre de 2026?", o: ["2,5 %", "3,55 %", "5 %"], c: 1, e: "El más alto desde 2009." },
    { p: "Si mantienes un bono hasta el vencimiento y no impaga, ¿qué rentabilidad obtienes?", o: ["La TIR del momento en que lo compraste", "El cupón más la variación de los tipos", "Depende de los tipos al vencimiento"], c: 0, e: "Las caídas de precio intermedias solo son pérdidas si vendes." }
  ],
  lecturas: [
    { t: "Fight the Fed Model", a: "Cliff Asness, Journal of Portfolio Management, 2003", n: "Por qué comparar el PER con el bono engaña." },
    { t: "Expected Returns", a: "Antti Ilmanen", n: "El capítulo de la prima por plazo es la mejor referencia." },
    { t: "Treasury Term Premia (ACM)", a: "Reserva Federal de Nueva York", n: "Los datos de la prima por plazo, actualizados." },
    { t: "Euríbor, histórico mensual", a: "Banco de España", n: "La serie oficial de los tipos de referencia hipotecarios." }
  ]
});


/* ---- l05.js ---- */
LECCIONES.push({
  id: "b5-l5", num: "5.5",
  titulo: "El ciclo económico y sus señales: expansión, recesión y los indicadores que las anticipan",
  resumen: "La economía alterna expansiones largas y recesiones cortas. Hay indicadores que suelen anticiparlas, como la curva de tipos, los PMI o la regla de Sahm, pero ninguno es infalible: la curva estadounidense estuvo invertida más de dos años entre 2022 y 2024 y la recesión no llegó. La bolsa se adelanta a la economía: suele caer antes de la recesión y subir antes de que acabe. Por eso usar el ciclo para entrar y salir del mercado funciona mucho peor de lo que parece.",
  esencial: `
**Las fases.** La economía no crece en línea recta:

| Fase | Qué pasa | Qué suelen hacer los activos |
|---|---|---|
| **Expansión temprana** | La economía sale de la recesión; tipos bajos | Las acciones suben con fuerza, sobre todo pequeñas y cíclicas |
| **Expansión madura** | Paro bajo, empresas a plena capacidad, inflación al alza | Suben los tipos; las acciones suben menos; materias primas al alza |
| **Desaceleración** | El banco central ya ha subido; el crédito se encarece | Las acciones defensivas aguantan mejor; los bonos empiezan a subir |
| **Recesión** | Cae el PIB, sube el paro | Las acciones caen y los bonos de calidad suben… pero la bolsa suele tocar fondo **antes** de que acabe |

**Cuánto dura cada fase.** En Estados Unidos, desde 1945, las expansiones han durado de media unos **cinco años** y las recesiones unos **diez meses**. El crecimiento es la norma; las recesiones, la excepción.

**Qué es una recesión.** La definición popular es «dos trimestres seguidos de caída del PIB». En Estados Unidos, la fecha oficial la fija un comité del NBER (Oficina Nacional de Investigación Económica) mirando el empleo, la renta, el consumo y la producción, y lo anuncia con muchos meses de retraso.

**Las tres señales más seguidas.**
1. **La curva de tipos**: si el bono a 10 años rinde menos que el de 2 años (curva **invertida**), el mercado espera bajadas de tipos. Ha precedido a casi todas las recesiones estadounidenses desde los años setenta.
2. **Los PMI**: encuestas mensuales a directores de compras. Por encima de 50, la actividad crece; por debajo, se contrae. Se publican antes que ningún otro dato.
3. **La regla de Sahm**: si la media de tres meses del paro sube **medio punto** por encima de su mínimo de los últimos doce meses, la economía suele estar ya en recesión.

**Ninguna es infalible.** La curva estadounidense estuvo invertida desde julio de 2022 hasta finales de agosto de 2024, la inversión más larga de la historia, y la regla de Sahm se activó en agosto de 2024. No hubo recesión.

**La bolsa se adelanta.** Las acciones descuentan el futuro: suelen caer antes de que empiece la recesión y tocar fondo cuando las noticias todavía son malas. Si esperas a «que se aclare el panorama», sueles volver tarde.

**En noviembre de 2026**: Estados Unidos crecía al 3,4 % anualizado (tercer trimestre), creaba 165.000 empleos en octubre y tenía un paro del 4,1 %. España tenía un paro del 10,18 % con récord de ocupados. Ninguna señal clásica de recesión, aunque con la inflación energética comiendo salarios reales.
`,
  entender: `
#### Indicadores adelantados, coincidentes y retrasados
| Tipo | Ejemplos | Para qué sirven |
|---|---|---|
| **Adelantados** | Curva de tipos, PMI de nuevos pedidos, permisos de construcción, peticiones de subsidio de paro, confianza, diferenciales de crédito, la propia bolsa | Anticipar giros |
| **Coincidentes** | Producción industrial, empleo, ventas | Confirmar dónde estamos |
| **Retrasados** | Paro de larga duración, inflación subyacente, morosidad | Confirmar que el giro ya ocurrió |

Un error frecuente es reaccionar a los retrasados. Cuando el paro alcanza su máximo, la recesión suele haber terminado y la bolsa lleva meses subiendo.

#### Cómo se calcula un PMI
Se pregunta a cientos de empresas si una variable (producción, pedidos, empleo, plazos de entrega, existencias) está mejor, igual o peor que el mes anterior. El índice es:

$$ PMI = % que dice «mejor» + 0,5 × % que dice «igual»

Si el 40 % dice «mejor», el 35 % «igual» y el 25 % «peor», el PMI es 57,5: la mayoría ve mejora. Un PMI de 50 significa que tantos mejoran como empeoran. Es un índice de **difusión**: dice cuántas empresas mejoran, no cuánto.

#### Por qué la curva invertida anticipa recesiones
Hay dos explicaciones complementarias:
1. **Expectativas**: si el mercado cree que el banco central tendrá que bajar los tipos porque la economía se frenará, los tipos largos caen por debajo de los cortos.
2. **Crédito**: los bancos se financian a corto y prestan a largo. Con la curva invertida, prestar deja de ser rentable y el crédito se restringe, lo que frena la economía.

En 2022–2024 fallaron las dos: la economía estadounidense resistió gracias al ahorro acumulado en la pandemia, a que muchas empresas y hogares tenían deuda a tipo fijo contratada antes de las subidas y al fuerte gasto público. Y la prima por plazo, que había sido negativa, distorsionaba la señal.

#### Los diferenciales de crédito
El diferencial entre los bonos de empresas de alto rendimiento (*high yield*) y la deuda pública mide el miedo a los impagos (lección 1.5). Se dispara en las recesiones: superó los 20 puntos porcentuales a finales de 2008 y los 10 en marzo de 2020. Es uno de los indicadores más rápidos, porque cotiza cada día.

#### Rotación sectorial
Una idea popular es cambiar de sectores según la fase del ciclo: cíclicos (industriales, materiales, consumo discrecional, bancos) al salir de la recesión; defensivos (eléctricas, alimentación, salud) al final del ciclo. Funciona sobre el papel con el diario del lunes; en la práctica exige saber en qué fase estás **antes que el mercado**, y la evidencia de que los inversores lo consigan es pobre.
`,
  fondo: `
#### 1. La regla de Sahm, con detalle
Claudia Sahm, economista de la Reserva Federal, la propuso en 2019 como disparador automático de ayudas a las familias. Se calcula así:
1. La media móvil de tres meses de la tasa de paro.
2. Su mínimo en los doce meses anteriores.
3. Si la diferencia supera **0,50 puntos**, se activa.

Desde 1970 se había activado en todas las recesiones estadounidenses, y siempre al principio. En agosto de 2024 se activó sin recesión. La propia Sahm explicó que el paro subía por un aumento de la **población activa** (inmigración y reincorporaciones) más que por despidos, y dijo que la regla estaba «para romperse». Lo importante: el paro sube cuando hay despidos, pero también cuando entra más gente a buscar empleo. Solo lo primero es recesivo.

#### 2. La curva como clasificador: un ejercicio bayesiano
Supón que la probabilidad de que empiece una recesión en los próximos 12 meses es del 15 % (la frecuencia histórica aproximada), que la curva se invierte antes del 90 % de las recesiones y que también se invierte en el 20 % de los periodos sin recesión. Si ves la curva invertida:

$$ P(recesión | invertida) = 0,9 × 0,15 / (0,9 × 0,15 + 0,2 × 0,85) ≈ 44 %

Una señal «que nunca falla» sube la probabilidad del 15 % al 44 %: menos de la mitad. Si los falsos positivos fueran del 40 %, se quedaría en el 28 %. Con pocas recesiones en la muestra (unas ocho desde 1970), el porcentaje de acierto histórico es muy incierto.

#### 3. Las recesiones y la bolsa
Algunas regularidades estadounidenses desde la Segunda Guerra Mundial:
- La bolsa suele empezar a caer **antes** de la recesión, aunque el desfase varía mucho.
- Las caídas en recesión han sido típicamente del 20–35 %, frente a caídas menores (correcciones del 10–20 %) sin recesión.
- El mínimo de la bolsa suele llegar en mitad de la recesión, con el paro todavía subiendo.
- El NBER anuncia el inicio de las recesiones entre 4 y 21 meses tarde. En marzo de 2009, cuando la bolsa tocó fondo, todavía no se sabía cuándo acabaría la recesión.

Esto tiene una consecuencia práctica: **vender cuando la recesión es evidente y comprar cuando se anuncia su fin suele ser vender barato y comprar caro**.

#### 4. El ciclo del crédito y el de las empresas
Por debajo del ciclo económico hay otros:
- **Ciclo del crédito**: los bancos prestan con alegría en las expansiones y cortan el crédito en las crisis. Hyman Minsky describió cómo la estabilidad genera inestabilidad: los buenos años animan a endeudarse más, hasta que la deuda se vuelve insostenible.
- **Ciclo de existencias**: las empresas acumulan inventario cuando esperan demanda y lo liquidan cuando no, amplificando las oscilaciones de la industria.
- **Ciclo inmobiliario**: más largo y profundo; España lo vivió entre 1997 y 2013.

#### 5. Las señales en noviembre de 2026
| Indicador | Situación | Lectura |
|---|---|---|
| Curva 10 años – 2 años (EE. UU.) | Positiva | Sin señal de recesión |
| Nóminas (octubre) | +165.000 | Empleo sólido |
| Paro (EE. UU.) | 4,1 % (entre 4,1 y 4,3 % desde marzo) | Regla de Sahm lejos de activarse |
| Salarios frente a inflación | +3,1 % frente a +3,7 % | Pérdida de poder de compra: riesgo para el consumo |
| PIB del tercer trimestre (EE. UU.) | +3,4 % anualizado | Muy apoyado en la inversión en IA (lección 5.6) |
| España: EPA del tercer trimestre | Paro 10,18 %, 22,85 millones de ocupados (récord) | Expansión |

El riesgo no estaba en los indicadores clásicos, sino en la energía y en la concentración del crecimiento en la inversión en inteligencia artificial.
`,
  caso: {
    titulo: "2022–2024: la recesión que todos esperaban y nunca llegó",
    md: `
**Las señales.** En 2022 se juntaron casi todas las alarmas clásicas:
- La curva estadounidense de 10 años menos 2 años se **invirtió el 5 de julio de 2022** y siguió invertida hasta finales de agosto de 2024: unos **784 días**, la inversión más larga de la historia (el récord anterior, de 1978–1979, rondaba los 624 días). A principios de julio de 2023 llegó a −1,08 puntos, la inversión más profunda desde 1981.
- La Fed subió los tipos del 0 al 5,25–5,50 % en año y medio, el ciclo más rápido en cuatro décadas.
- El índice de indicadores adelantados del Conference Board cayó durante muchos meses seguidos.
- En octubre de 2022, el modelo de Bloomberg Economics daba un **100 %** de probabilidad de recesión en Estados Unidos en los 12 meses siguientes; la encuesta de economistas del *Wall Street Journal*, un 63 %.

**Lo que pasó.** La economía estadounidense creció en 2023 y en 2024. El paro, que estaba en el 3,5 %, subió suavemente hasta en torno al 4,3 % en el verano de 2024 y activó la regla de Sahm en agosto. Tampoco entonces hubo recesión.

**Por qué fallaron las señales.**
1. **Ahorro acumulado**: los hogares tenían el ahorro de la pandemia.
2. **Deuda a tipo fijo**: muchas hipotecas y deudas de empresas estaban fijadas a tipos bajos de 2020–2021, así que las subidas tardaron en notarse.
3. **Gasto público y transición energética**: grandes programas de inversión pública.
4. **Inmigración**: más trabajadores permitieron crecer sin recalentar el mercado laboral, y explican por qué el paro subió sin despidos masivos.

**Lo que hizo la bolsa.** El S&P 500 tocó fondo en octubre de 2022, justo cuando la probabilidad de recesión estaba en su máximo. Subió más de un 24 % en 2023 y más de un 23 % en 2024. Quien vendió esperando la recesión se perdió una de las mejores rachas de la década.

**La lección.** Los indicadores del ciclo son útiles para entender la economía y para ajustar riesgos (por ejemplo, no endeudarse cuando la curva se invierte), pero muy poco fiables para entrar y salir del mercado. Lo veremos con más datos en la lección 5.10.
`
  },
  ejercicios: [
    {
      t: "Calcular la regla de Sahm",
      p: `
La tasa de paro mensual de un país durante 15 meses es: 3,5; 3,6; 3,5; 3,6; 3,7; 3,6; 3,7; 3,8; 3,9; 4,0; 4,1; 4,1; 4,2; 4,3; 4,4. Calcula la media móvil de tres meses y averigua en qué mes se activa la regla de Sahm.
`,
      s: `
1. **Medias de tres meses** (desde el tercer mes): 3,533; 3,567; 3,600; 3,633; 3,667; 3,700; 3,800; 3,900; 4,000; **4,067**; 4,133; 4,200; 4,300.
2. **Mínimo previo**: 3,533 (la primera media).
3. **Diferencias**: 0,47 con la media de 4,000 (mes 11) → no se activa; **0,53** con la de 4,067 (mes 12) → **se activa en el mes 12**.
4. El paro ha subido 0,6 puntos en un año de forma gradual; la regla convierte esa subida en una señal binaria.
`
    },
    {
      t: "Leer un PMI",
      p: `
En una encuesta, el 40 % de las empresas dice que sus nuevos pedidos han mejorado, el 35 % que siguen igual y el 25 % que han empeorado. Calcula el índice de difusión. ¿Significa que los pedidos han crecido un 7,5 %?
`,
      s: `
1. **PMI** = 40 + 0,5 × 35 = **57,5**.
2. **No**: significa que más empresas mejoran que empeoran (40 % frente a 25 %), no cuánto crecen los pedidos. Podrían crecer muy poco en muchas empresas.
3. Por eso un PMI alto no garantiza un crecimiento del PIB alto, aunque ambos suelen moverse juntos.
`
    },
    {
      t: "Cuánto vale una señal que «nunca falla»",
      p: `
La probabilidad de que empiece una recesión en 12 meses es del 15 %. La curva se invierte antes del 90 % de las recesiones y en el 20 % de los periodos sin recesión. Calcula la probabilidad de recesión si la curva está invertida. Repite con un 40 % de falsos positivos.
`,
      s: `
1. **Con 20 % de falsos positivos**: 0,9 × 0,15 / (0,9 × 0,15 + 0,2 × 0,85) = 0,135 / 0,305 = **44 %**.
2. **Con 40 %**: 0,135 / (0,135 + 0,34) = **28 %**.
3. Incluso una señal muy sensible deja la recesión como un escenario más probable que antes, pero no como el más probable. Actuar como si fuera segura es un error de probabilidad base.
`
    }
  ],
  errores: [
    "Vender todo cuando se invierte la curva o se activa una señal de recesión, como si fuera segura.",
    "Esperar a que el paro deje de subir para volver a invertir: la bolsa suele haber subido mucho antes.",
    "Confundir un PMI por encima de 50 con un crecimiento fuerte, o uno por debajo con una recesión.",
    "Creer que la rotación sectorial según el ciclo es fácil porque funciona en los gráficos del pasado.",
    "Ignorar por qué sube el paro: no es lo mismo más despidos que más gente buscando trabajo."
  ],
  test: [
    { p: "¿Qué significa una curva de tipos invertida?", o: ["Que el bono a 10 años rinde menos que el de 2 años", "Que los tipos están bajando", "Que la inflación es negativa"], c: 0, e: "Suele indicar que el mercado espera bajadas de tipos." },
    { p: "Un PMI de 48 indica que…", o: ["El PIB cae un 2 %", "Más empresas empeoran que mejoran", "La economía está en recesión"], c: 1, e: "Es un índice de difusión; 50 es la frontera." },
    { p: "¿Cuándo se activa la regla de Sahm?", o: ["Cuando el paro supera el 5 %", "Cuando la media de tres meses del paro sube 0,5 puntos sobre su mínimo de los 12 meses anteriores", "Cuando el PIB cae dos trimestres"], c: 1, e: "Se activó en agosto de 2024 sin recesión." },
    { p: "¿Cuánto duró la inversión de la curva estadounidense de 2022–2024?", o: ["Unos 3 meses", "Más de dos años", "Sigue invertida"], c: 1, e: "Unos 784 días, la más larga registrada." },
    { p: "¿Cuándo suele tocar fondo la bolsa en una recesión?", o: ["Cuando el paro alcanza su máximo", "Antes de que termine la recesión, con las noticias aún malas", "Un año después de terminar"], c: 1, e: "Descuenta la recuperación por adelantado." }
  ],
  lecturas: [
    { t: "Business Cycle Dating (web)", a: "NBER", n: "Las fechas oficiales de las recesiones estadounidenses y cómo se deciden." },
    { t: "Direct Stimulus Payments to Individuals", a: "Claudia Sahm, Hamilton Project, 2019", n: "El artículo original de la regla de Sahm." },
    { t: "The Yield Curve as a Leading Indicator", a: "Arturo Estrella y Frederic Mishkin, Reserva Federal de Nueva York", n: "El estudio clásico; la Fed de Nueva York publica la probabilidad mensual." },
    { t: "Stabilizing an Unstable Economy", a: "Hyman Minsky", n: "La teoría de cómo la estabilidad engendra crisis." },
    { t: "Mastering the Market Cycle", a: "Howard Marks", n: "El ciclo visto por un inversor; muy legible." }
  ]
});


/* ---- l06.js ---- */
LECCIONES.push({
  id: "b5-l6", num: "5.6",
  titulo: "Crecimiento a largo plazo: productividad, demografía e inteligencia artificial",
  resumen: "A largo plazo, una economía solo puede crecer si trabaja más gente o si cada hora de trabajo produce más. La demografía empuja hacia abajo en casi todos los países ricos, así que el crecimiento futuro depende de la productividad. En 2026, la inversión en inteligencia artificial explicaba en torno a un tercio del crecimiento de Estados Unidos, aunque sus efectos sobre la productividad todavía son inciertos. Para el inversor, esto define el crecimiento posible de los beneficios y el riesgo de pagar demasiado por una promesa.",
  esencial: `
**La fórmula del crecimiento.** El PIB es el número de horas trabajadas por lo que se produce en cada hora:

$$ crecimiento del PIB ≈ crecimiento de las horas trabajadas + crecimiento de la productividad por hora

Y la productividad, a su vez, crece por dos vías: **más capital por trabajador** (máquinas, ordenadores, infraestructuras) y **mejor tecnología y organización** (lo que los economistas llaman productividad total de los factores, PTF).

**La demografía empuja hacia abajo.** En casi todos los países ricos la población envejece: hay menos personas en edad de trabajar por cada jubilado. En España, los mayores de 65 años son en torno a un 20 % de la población y las proyecciones del INE los sitúan cerca de un 30 % a mediados de siglo. Sin inmigración, la población activa española se reduciría. Con ella, España ha superado los 49 millones de habitantes y ha crecido por encima de la media europea.

**La productividad es lo que decide.** Si las horas trabajadas no crecen, el nivel de vida solo puede mejorar con más productividad. Pequeñas diferencias se acumulan: crecer un 2,5 % per cápita en vez de un 1,5 % durante 30 años deja a un país un **34 % más rico**.

**La inteligencia artificial**, la gran apuesta de esta década, tiene dos efectos distintos que conviene separar:
1. **La inversión**: construir centros de datos, chips y redes eléctricas suma PIB ya. En el tercer trimestre de 2026, la inversión en equipos de procesamiento de información y software aportó **1,09 puntos** de los 3,4 de crecimiento anualizado de Estados Unidos (sumando las contribuciones que publica la BEA): casi **un tercio**.
2. **La productividad**: que la IA haga más productivos a los trabajadores de todos los sectores. Esto es lo que de verdad cambiaría el crecimiento a largo plazo, y todavía no se ve con claridad en las estadísticas.

**Las previsiones del FMI (octubre de 2026)**: crecimiento mundial del 3,1 % en 2026, del 2,5 % en España (1,8 % en 2027) y del 1,1 % en la zona euro.

**Para el inversor.** El crecimiento a largo plazo de la economía es el techo aproximado del crecimiento de los beneficios agregados (lección 5.1). Si la IA eleva la productividad, los beneficios crecerán más. Si no lo hace, la inversión masiva actual tendrá rentabilidades decepcionantes, como pasó con la fibra óptica en el año 2000.
`,
  entender: `
#### La contabilidad del crecimiento
Robert Solow (premio Nobel en 1987) propuso descomponer el crecimiento en sus fuentes. Con una función de producción en la que el capital recibe una parte α de la renta (en torno a un tercio) y el trabajo el resto:

$$ g(PIB) = g(PTF) + α × g(capital) + (1 − α) × g(trabajo)

Con α = 0,35, un capital que crece un 3 %, un trabajo que crece un 0,5 % y una PTF del 1 %: 1 + 0,35 × 3 + 0,65 × 0,5 = **2,4 %**. Solow descubrió que la mayor parte del crecimiento histórico de Estados Unidos **no** se explicaba por más capital ni más trabajo, sino por el «residuo»: la PTF, es decir, el progreso técnico.

#### La paradoja de Solow
En 1987, el propio Solow escribió que «se ve la era de los ordenadores en todas partes menos en las estadísticas de productividad». La productividad estadounidense creció poco entre 1973 y 1995 pese a la difusión de los ordenadores. Luego, entre 1995 y 2004, se aceleró con fuerza: hacía falta reorganizar las empresas alrededor de la nueva tecnología.

Paul David (1990) encontró lo mismo con la **electricidad**: las fábricas tardaron unos 40 años en aprovecharla, porque primero se limitaron a cambiar la máquina de vapor por un motor eléctrico, y solo después rediseñaron las plantas. Si la IA sigue ese patrón, sus efectos sobre la productividad llegarán más tarde que la inversión.

#### El caso español
España tiene un problema conocido de productividad: su productividad por hora apenas ha crecido en las dos últimas décadas en comparación con la de Estados Unidos o el norte de Europa. Las causas que más se citan: empresas pequeñas (el tamaño medio es de los más bajos de Europa), mucho peso de sectores de baja productividad como la hostelería o la construcción, poca inversión en I+D y un mercado laboral con mucha temporalidad durante años.

El crecimiento reciente de España, por encima del 2 % anual, se ha apoyado mucho en el **aumento de la población y el empleo**, el turismo y los fondos europeos, más que en la productividad. Es crecimiento real, pero el PIB per cápita mejora menos que el total.

#### Demografía y mercados
El envejecimiento afecta a los mercados por varias vías:
- **Menos crecimiento potencial** y, por tanto, menos crecimiento de los beneficios agregados.
- **Más ahorro y luego menos**: entre los 40 y los 65 años se ahorra mucho; al jubilarse se desahorra. Algunos economistas lo relacionan con los tipos bajos de 2010–2020 y predicen tipos más altos cuando los jubilados vendan activos.
- **Más presión sobre las cuentas públicas**: pensiones y sanidad (lección 5.7).
- **Escasez de trabajadores**: puede elevar los salarios y la inflación, y favorecer la automatización.
`,
  fondo: `
#### 1. Cuánto aporta la IA al crecimiento de 2026
Varias estimaciones coinciden en que la inversión ligada a la IA es una parte desproporcionada del crecimiento estadounidense reciente:

| Medida | Estimación |
|---|---|
| Tercer trimestre de 2026, sumando las contribuciones de la BEA (Oficina de Análisis Económico) | Equipos de procesamiento de información (0,86) y software (0,23): **1,09 puntos** de un crecimiento del 3,4 % anualizado |
| Mismo cálculo, cuatro trimestres hasta septiembre de 2026 | En torno al **45 %** del crecimiento |
| ING, segundo trimestre de 2026 | Entre el 36 % y el 50 % del crecimiento interanual |

La BEA no publica una categoría de «inteligencia artificial»: estas partidas son una aproximación que incluye gasto no relacionado con la IA y deja fuera parte del que sí lo está (por ejemplo, la construcción de centros de datos).

Sin esa inversión, el crecimiento del tercer trimestre habría sido de en torno al **2,3 %**: sólido, pero lejos del 3,4 %. Hay un matiz técnico importante: muchos de esos equipos (chips, servidores) se **importan**, así que una parte de la inversión se compensa con más importaciones. En el tercer trimestre, las exportaciones netas **restaron 3,3 puntos** al crecimiento, en parte por la compra de equipos para centros de datos. La aportación neta de la IA al PIB es menor de lo que sugiere la cifra bruta.

#### 2. ¿Burbuja de inversión o revolución?
Dos lecturas razonables de los mismos datos:

**La optimista.** La IA es una tecnología de propósito general, como la electricidad o internet. Las grandes empresas tecnológicas la financian con su enorme caja libre, no con deuda, y la demanda de capacidad de cálculo supera a la oferta. Los primeros estudios de productividad en tareas concretas (atención al cliente, programación, redacción) muestran mejoras significativas.

**La prudente.** Los ciclos de inversión en infraestructura suelen pasarse de frenada: en 1999–2000 se instaló tanta fibra óptica que gran parte quedó sin usar durante años, y los inversores en telecomunicaciones perdieron mucho aunque internet transformara la economía. Que una tecnología cambie el mundo no significa que quienes la financian ganen dinero (lección 5.1: el crecimiento no es siempre del accionista).

Para el inversor, la pregunta clave no es si la IA es importante, sino **cuánto descuenta ya el precio** (lección 4.8: DCF inverso).

#### 3. Convergencia y trampas
Los países pobres pueden crecer deprisa copiando tecnología (convergencia), pero no todos lo consiguen. Las instituciones (seguridad jurídica, educación, competencia) explican gran parte de la diferencia. Daron Acemoglu, Simon Johnson y James Robinson recibieron el Nobel de Economía en 2024 por documentarlo. Para el inversor, la conclusión es la de la lección 5.1: el crecimiento potencial de un país emergente no garantiza buena bolsa, pero las instituciones débiles sí aumentan el riesgo de perder.

#### 4. Crecimiento y tipos de interés a largo plazo
En la teoría clásica, el tipo de interés real neutral (lección 5.3) está ligado al crecimiento potencial: una economía que crece más ofrece más oportunidades de inversión y exige tipos más altos. Si la IA eleva el crecimiento, es razonable esperar tipos reales más altos, lo que pesa sobre las valoraciones de los activos de larga duración. Es una de las razones por las que el boom de la IA y los tipos altos han convivido en 2025–2026.

#### 5. Lo que importa para tu cartera
- El crecimiento real de los beneficios agregados a largo plazo ronda el crecimiento real de la economía mundial menos la dilución: unos pocos puntos al año. Previsiones que exigen mucho más para muchas empresas a la vez son sospechosas.
- La demografía hace probable un crecimiento europeo bajo; no es razón para evitar Europa si el precio lo descuenta, pero sí para no asumir lo contrario.
- La concentración del crecimiento estadounidense en la inversión en IA también es una **concentración de riesgo** en los índices (lección 3.4: el peso de las grandes tecnológicas en los índices).
`,
  caso: {
    titulo: "Estados Unidos en 2026: una economía impulsada por los centros de datos",
    md: `
**El dato.** El PIB estadounidense creció un **3,4 % anualizado** en el tercer trimestre de 2026. De esos 3,4 puntos, la inversión en equipos de procesamiento de información y software aportó **1,09**: en torno a un **32 %**. ING estimó que, en el segundo trimestre, la inversión en IA y tecnología explicaba entre el 36 % y el 50 % del crecimiento interanual.

**Por qué es llamativo.** Esa partida representa una parte pequeña del PIB total, pero crece a ritmos muy altos: las grandes tecnológicas gastan cientos de miles de millones de dólares al año en centros de datos. Y el gasto arrastra a otros sectores: construcción, energía eléctrica, refrigeración, redes.

**Lo que no dice el dato.**
1. **No es productividad todavía.** Construir un centro de datos suma PIB aunque no haga a nadie más productivo. Ese efecto, si llega, llegará después.
2. **Parte se importa.** Muchos chips y servidores vienen de Taiwán, Corea o México; su aportación neta al PIB estadounidense es menor.
3. **Es concentrado.** Un puñado de empresas decide la mayor parte de ese gasto. Si recortan su inversión, el crecimiento de Estados Unidos lo notará.

**El contraste con Europa.** El FMI prevé que la zona euro crezca un 1,1 % en 2026, con el choque energético pesando más que en Estados Unidos (que es exportador neto de energía) y sin un boom de inversión tecnológica comparable. España, al 2,5 %, es la excepción por su demografía, el turismo y los fondos europeos.

**La lección para el inversor.** La IA puede ser la tecnología más importante de la década y, aun así, dar malas rentabilidades a quien pague demasiado por ella. Lo que mueve la cartera es la diferencia entre lo que pase y lo que el precio ya descuenta. Y conviene saber cuánto de tu cartera depende de que este ciclo de inversión continúe: en un índice mundial, mucho más de lo que parece.
`
  },
  ejercicios: [
    {
      t: "La contabilidad del crecimiento",
      p: `
En una economía, el capital crece un 3 % anual, las horas trabajadas un 0,5 % y la productividad total de los factores un 1 %. Con una participación del capital del 35 %, ¿cuánto crece el PIB? Si por el envejecimiento las horas pasan a caer un 0,3 % y nada más cambia, ¿cuánto crecerá?
`,
      s: `
1. **Caso base**: 1 + 0,35 × 3 + 0,65 × 0,5 = 1 + 1,05 + 0,325 = **2,375 %**.
2. **Con las horas cayendo**: 1 + 1,05 + 0,65 × (−0,3) = **1,855 %**.
3. El envejecimiento resta medio punto al crecimiento. Para compensarlo haría falta que la PTF creciera un 1,5 %, una mejora que pocas economías ricas han sostenido en las últimas décadas.
`
    },
    {
      t: "Un punto de diferencia durante 30 años",
      p: `
Dos países tienen hoy el mismo PIB per cápita. Uno crece un 1,5 % anual y el otro un 2,5 %. ¿Cuánto más rico es el segundo al cabo de 30 años? ¿En cuántos años duplica cada uno su renta?
`,
      s: `
1. **Primero**: 1,015³⁰ = **1,563**.
2. **Segundo**: 1,025³⁰ = **2,098**.
3. **Diferencia**: 2,098 / 1,563 − 1 = **34 %** más rico.
4. **Duplicar** (regla del 70): 70 / 1,5 ≈ **47 años** frente a 70 / 2,5 = **28 años**.
`
    },
    {
      t: "Cuánto del crecimiento es inversión en IA",
      p: `
El PIB de Estados Unidos creció un 3,4 % anualizado en un trimestre y la inversión en equipos de información y software aportó 1,09 puntos. ¿Qué porcentaje del crecimiento explica? ¿Cuánto habría crecido sin ella? Si la mitad de esa inversión fuera en equipos importados y las importaciones restaran en la misma cuantía, ¿cuál sería la aportación neta?
`,
      s: `
1. **Porcentaje**: 1,09 / 3,4 = **32 %**.
2. **Sin esa inversión**: 3,4 − 1,09 = **2,31 %**.
3. **Aportación neta** si la mitad se compensa con importaciones: 1,09 × 0,5 ≈ **0,55 puntos**, en torno a un 16 % del crecimiento.
4. La cifra bruta exagera el efecto en la economía doméstica, aunque sigue siendo muy relevante.
`
    }
  ],
  errores: [
    "Confundir la inversión en una nueva tecnología con su efecto sobre la productividad.",
    "Pensar que una tecnología transformadora garantiza buenas rentabilidades a quien invierte en ella.",
    "Olvidar que parte del crecimiento de un país puede venir solo de más población.",
    "Extrapolar el crecimiento de un boom de inversión como si fuera permanente.",
    "Ignorar el efecto del envejecimiento en el crecimiento potencial y en las cuentas públicas."
  ],
  test: [
    { p: "A largo plazo, el PIB solo puede crecer si…", o: ["Suben los precios", "Se trabajan más horas o cada hora produce más", "Bajan los tipos de interés"], c: 1, e: "PIB = horas × productividad por hora." },
    { p: "¿Qué es la «paradoja de Solow»?", o: ["Que los ordenadores tardaron en notarse en la productividad", "Que más ahorro reduce el crecimiento", "Que la inflación sube con el paro"], c: 0, e: "La productividad se aceleró una década después de la difusión de los ordenadores." },
    { p: "¿Cuánto aportó la inversión en equipos de información y software al crecimiento de EE. UU. en el tercer trimestre de 2026?", o: ["Unos 0,1 puntos", "Unos 1,1 puntos de 3,4", "Todo el crecimiento"], c: 1, e: "Alrededor de un 32 %." },
    { p: "¿Cuánto prevé el FMI que crezca España en 2026?", o: ["1,1 %", "2,5 %", "3,1 %"], c: 1, e: "Por encima de la zona euro (1,1 %)." },
    { p: "Si una economía crece un 2 % en lugar de un 1 % durante 35 años, su PIB al final es…", o: ["Un 35 % mayor", "Aproximadamente el doble que al principio frente a 1,4 veces", "Igual"], c: 1, e: "1,02³⁵ ≈ 2,0 y 1,01³⁵ ≈ 1,42." }
  ],
  lecturas: [
    { t: "The Rise and Fall of American Growth", a: "Robert Gordon", n: "Por qué el crecimiento de 1870–1970 fue excepcional." },
    { t: "Por qué fracasan los países", a: "Daron Acemoglu y James Robinson", n: "El papel de las instituciones." },
    { t: "The Dynamo and the Computer", a: "Paul David, American Economic Review, 1990", n: "La electricidad y el retraso en la productividad." },
    { t: "Power and Prediction", a: "Ajay Agrawal, Joshua Gans y Avi Goldfarb", n: "Cómo y cuándo la IA cambia la productividad." },
    { t: "World Economic Outlook (octubre de 2026)", a: "FMI", n: "Las previsiones por país." }
  ]
});


/* ---- l07.js ---- */
LECCIONES.push({
  id: "b5-l7", num: "5.7",
  titulo: "Política fiscal y deuda pública: cuándo preocupa y por qué importa al inversor",
  resumen: "Los Estados gastan, recaudan y se endeudan. Lo que decide si una deuda pública es sostenible no es solo su tamaño, sino la diferencia entre el tipo de interés que paga y el crecimiento nominal de la economía, y el saldo primario. España, con una deuda del 101 % del PIB, la reduce porque crece más de lo que paga; Francia, con un déficit de casi el 5 %, la aumenta. Cuando los mercados dudan, la prima de riesgo se dispara, como en 2012, y arrastra a bancos, bolsas y economía.",
  esencial: `
**Los conceptos básicos.**

| Concepto | Qué es |
|---|---|
| **Déficit público** | Lo que gasta el Estado por encima de lo que ingresa en un año (en % del PIB) |
| **Saldo primario** | El saldo **sin contar los intereses** de la deuda. Mide si el Estado gasta más de lo que ingresa en sus políticas |
| **Deuda pública** | Lo acumulado de todos los déficits pasados (en % del PIB) |
| **Estabilizadores automáticos** | En una recesión, se recauda menos y se paga más en subsidios sin que nadie lo decida: el déficit sube solo y amortigua la caída |

**Cuándo crece la deuda.** La ratio deuda/PIB sube si el Estado tiene déficit primario o si los intereses que paga superan el crecimiento nominal de la economía:

$$ Δ deuda ≈ (r − g) / (1 + g) × deuda − saldo primario

donde **r** es el tipo de interés medio que paga el Estado (no el de mercado de hoy, sino el de toda su deuda viva) y **g** el crecimiento **nominal** del PIB (real más inflación).

**La clave es r − g.**
- Si **g > r** (la economía crece más de lo que cuesta la deuda), la ratio baja sola aunque el Estado tenga un pequeño déficit primario.
- Si **r > g**, la deuda crece sola: hace falta superávit primario solo para mantenerla estable.

**España en 2026.** Deuda del **101,4 %** del PIB (segundo trimestre), un déficit en torno al 2–2,5 % y unos intereses de alrededor del 2,4 % del PIB: el saldo primario está casi en equilibrio. Con un crecimiento nominal del 5 % (real 2,5 % más inflación) y un coste medio de la deuda del 2,4 %, la ratio baja unos 2,5 puntos al año. El Gobierno prevé cerrar 2026 por debajo del 100 % (99,3 %).

**El contraste.** Francia tiene una deuda del 117,6 %, un déficit en torno al 5 % y un saldo primario negativo de casi 3 puntos: su deuda crece en torno a 2 puntos al año. En octubre de 2026 su bono a 10 años superó el 5 % y su diferencial con Alemania, en torno a 160 puntos básicos, el mayor desde 2011.

**Por qué importa al inversor.**
1. **Fija la prima de riesgo del país**, y con ella el coste de financiación de bancos y empresas.
2. **Bancos y Estado van de la mano**: los bancos tienen mucha deuda de su país; si esta cae, los bancos sufren (el «bucle diabólico» de 2010–2012).
3. **Afecta a los tipos a largo plazo y a la inflación** (lección 5.4).
4. **Anticipa impuestos**: una deuda alta hoy son impuestos más altos o gasto más bajo mañana.
`,
  entender: `
#### De dónde sale la fórmula
Llama D a la deuda, Y al PIB nominal y d = D / Y. Cada año, la deuda crece por los intereses (r × D) y por el déficit primario; el PIB crece a la tasa g. La ratio del año siguiente es:

$$ d(t+1) = d(t) × (1 + r) / (1 + g) − saldo primario

Restando d(t) a ambos lados sale la fórmula del esencial. La intuición: la deuda es un numerador que crece al tipo r y el PIB un denominador que crece al tipo g.

#### Los números de España
- **2007**: deuda en torno al 36 % del PIB y superávit público. España parecía un modelo de disciplina fiscal.
- **2008–2013**: la burbuja inmobiliaria estalla, la recaudación se hunde, el paro sube al 26 % y hay que rescatar a las cajas. La deuda se dispara hasta superar el 100 % en 2014.
- **2020**: la pandemia la lleva al 120 %.
- **2021–2026**: con crecimiento nominal alto (inflación más crecimiento real) y tipos medios todavía bajos, la ratio baja hacia el 100 %.

Lección: la deuda pública no la disparan solo los Gobiernos manirrotos; también las crisis, que convierten deudas privadas en públicas.

#### Por qué la deuda pública no es como la de una familia
- **El Estado no se jubila**: puede refinanciar su deuda indefinidamente si el mercado confía.
- **Cobra impuestos**: su «sueldo» crece con la economía y la inflación.
- **Si emite en su propia moneda y tiene banco central**, no puede quebrar técnicamente en esa moneda. Por eso Japón tiene una deuda de más del 230 % del PIB y tipos bajos.
- **Los países del euro no imprimen su moneda**: su situación se parece más a la de una empresa o una región. Por eso en 2010–2012 Grecia, Irlanda, Portugal y España sufrieron crisis de deuda con niveles de deuda menores que los de Japón.

#### El multiplicador fiscal
Cuánto cambia el PIB por cada euro de gasto público adicional. Los estudios dan rangos amplios: menos de 0,5 cuando la economía está a plena capacidad y el banco central sube tipos para compensar; más de 1 en recesiones profundas con tipos en cero. Por eso la austeridad en plena recesión (2010–2013) fue tan costosa en el sur de Europa: el PIB caía tanto que la ratio deuda/PIB subía pese a los recortes.

#### La regla fiscal europea
El Pacto de Estabilidad fija, como referencia, un déficit máximo del 3 % y una deuda del 60 %. La reforma de 2024 dio más flexibilidad: cada país negocia una senda de gasto a 4–7 años. Francia está en procedimiento de déficit excesivo. España salió de él tras bajar del 3 %.
`,
  fondo: `
#### 1. Reinhart, Rogoff y el umbral del 90 %
En 2010, Carmen Reinhart y Kenneth Rogoff publicaron que los países con deuda superior al 90 % del PIB crecían mucho menos. El artículo influyó en las políticas de austeridad. En 2013, Thomas Herndon, Michael Ash y Robert Pollin replicaron los datos y encontraron un error en la hoja de cálculo y decisiones de ponderación discutibles: la caída de crecimiento por encima del 90 % era mucho menor y no había un umbral claro. Además, la causalidad puede ir al revés: el bajo crecimiento eleva la deuda.

Su libro *This Time Is Different* (2009), con ocho siglos de crisis financieras, sigue siendo una referencia útil. Su mensaje central aguanta: las crisis de deuda se repiten y cada generación cree que esta vez es diferente.

#### 2. Dominancia fiscal
Hay **dominancia fiscal** cuando el banco central no puede subir los tipos lo necesario para controlar la inflación porque eso haría insostenible la deuda del Estado. Entonces la inflación se convierte en la vía de escape: reduce el valor real de la deuda. Es el riesgo que más preocupa a los inversores en bonos con deudas altas y déficits persistentes, y una de las razones del aumento de la prima por plazo (lección 5.4).

#### 3. La paradoja de r < g
Olivier Blanchard dedicó su discurso como presidente de la Asociación Americana de Economía (2019) a una observación: durante gran parte de la historia de Estados Unidos, el tipo de la deuda pública ha sido menor que el crecimiento nominal. Si es así, la deuda es menos costosa de lo que parece. Pero r − g no es fijo: puede cambiar de signo deprisa si suben los tipos o cae el crecimiento, y entonces una deuda alta se vuelve peligrosa. En 2026, con los tipos largos en máximos de una década en Europa y Estados Unidos, el margen entre r y g se ha estrechado.

Un detalle importante: el **r** que importa es el coste medio de toda la deuda viva, que cambia despacio porque la deuda se refinancia poco a poco (la vida media de la deuda española ronda los ocho años). Una subida de los tipos de mercado tarda años en trasladarse por completo al coste medio.

#### 4. La crisis del euro y el «haré lo que sea necesario»
En julio de 2012, la prima de riesgo española llegó a **636 puntos básicos** (el 24 de julio) y el bono a 10 años al 7,5 %. Los inversores temían que España necesitara un rescate completo o incluso saliera del euro. El 26 de julio, Mario Draghi, presidente del BCE, dijo en Londres que el BCE haría «lo que sea necesario» para preservar el euro. Después anunció el programa OMT de compra de bonos, que nunca llegó a usarse. La prima bajó a la mitad en pocos meses.

Lección para el inversor: en una unión monetaria, el riesgo de un país depende tanto de sus cuentas como de la disposición del banco central a respaldarlo. El TPI de 2022 (lección 5.3) es el heredero de aquel compromiso.

#### 5. Lo que mirar de un país
| Indicador | Por qué |
|---|---|
| Saldo primario | Si el Estado gasta más de lo que ingresa sin contar intereses |
| r − g | Si la deuda se reduce sola o crece sola |
| Vida media de la deuda | Cuánto tardan en notarse las subidas de tipos |
| Quién tiene la deuda | Inversores nacionales y banco central son más estables que extranjeros |
| Moneda de la deuda | Endeudarse en moneda extranjera ha sido la causa de la mayoría de las quiebras de emergentes |
| Calendario político | Las crisis fiscales suelen estallar en torno a elecciones o presupuestos fallidos |

#### 6. La deuda en el resto de la zona euro (primer trimestre de 2026)
Grecia 143,5 %, Italia 138,9 %, Francia 117,6 %, España en torno al 101–102 %. Grecia, con la mayor deuda, paga menos prima que Francia: casi toda su deuda está en manos de organismos europeos a tipos bajos y muy largo plazo, y tiene superávit primario. El nivel de deuda, solo, dice poco.
`,
  caso: {
    titulo: "España y Francia en 2026: dos trayectorias de deuda",
    md: `
**Dos países, dos tendencias.**

| | España | Francia |
|---|---|---|
| Deuda pública | 101,4 % (2.º trimestre de 2026) | 117,6 % (1.er trimestre de 2026) |
| Déficit | ~2–2,5 % | ~5 % |
| Saldo primario (aprox.) | Casi en equilibrio | Déficit de ~2,8 % |
| Crecimiento real previsto 2026 (FMI) | 2,5 % | 0,4 % |
| Bono a 10 años | 4,14 % (máximo del 28 de septiembre) | Por encima del 5 % (octubre), máximo desde 2002 |
| Diferencial con Alemania | 46 pb de media en 2026 (mínimo de 36 en enero) | 76 pb de media en 2026; ~160 pb en octubre, máximo desde 2011 |

**España: reducir la deuda creciendo.** La deuda española baja porque su PIB nominal crece en torno a un 5 % y su deuda le cuesta de media en torno a un 2,4 %. Pero las nuevas emisiones ya cuestan en torno a un 3 %, según la AIReF: el coste medio subirá poco a poco. No hace falta superávit: basta con no tener déficit primario. El riesgo es que se dé la vuelta: con los tipos de mercado en el 4 %, la deuda que se refinancia cada año es más cara, y si el crecimiento se frena, la ratio dejaría de bajar.

**Francia: la deuda que crece sola.** Con un déficit primario de casi 3 puntos y un crecimiento nominal de en torno al 3 %, la deuda francesa sube unos 2 puntos al año aunque los tipos medios sigan bajos. La inestabilidad política, con dificultades para aprobar presupuestos, hace que los inversores duden de que vaya a corregirse.

**Lo que dicen los mercados.** España se financia hoy más barata que Francia, algo impensable hace una década, y esa diferencia refleja trayectorias, no niveles. Los mercados no castigan tener mucha deuda, sino **no tener un plan creíble para dejar de aumentarla**.

**Para tu cartera.** Si tienes fondos de bonos europeos, una parte importante es deuda francesa e italiana. Si tienes acciones de bancos de un país, tu inversión depende de la salud de su Estado. Y el bono español a 10 años en el 4 % paga, por primera vez desde 2014, una rentabilidad claramente superior a la inflación esperada a largo plazo.
`
  },
  ejercicios: [
    {
      t: "La deuda española que baja sola",
      p: `
España tiene una deuda del 101,4 % del PIB, un saldo primario de 0, un coste medio de la deuda del 2,4 % y un crecimiento nominal del 5 %. ¿Cuánto baja la ratio en un año? ¿Y si el coste sube al 3 %, el crecimiento nominal baja al 4 % y hay un déficit primario del 0,2 %?
`,
      s: `
1. **Caso base**: (0,024 − 0,05) / 1,05 × 101,4 − 0 = **−2,51 puntos** → 98,9 %. Del orden de lo que prevén el Gobierno y el Banco de España para el cierre de 2026.
2. **Escenario peor**: (0,03 − 0,04) / 1,04 × 101,4 + 0,2 = −0,975 + 0,2 = **−0,78 puntos**.
3. La deuda sigue bajando, pero a menos de un tercio de velocidad. El margen depende de que el crecimiento nominal siga superando al coste medio.
`
    },
    {
      t: "Un país en apuros",
      p: `
Un país tiene una deuda del 120 % del PIB, paga un 5 % de media, su PIB nominal crece un 3 % y tiene un déficit primario del 1 %. ¿Cuánto sube su deuda en un año? ¿Qué saldo primario necesita para estabilizarla?
`,
      s: `
1. **Variación**: (0,05 − 0,03) / 1,03 × 120 + 1 = 2,33 + 1 = **+3,33 puntos**.
2. **Saldo primario para estabilizar**: (0,05 − 0,03) / 1,03 × 120 = **+2,33 %** de superávit primario.
3. Pasar de un déficit primario del 1 % a un superávit del 2,3 % exige un ajuste de más de 3 puntos del PIB, lo que en plena debilidad económica puede empeorar el crecimiento y la propia ratio.
`
    },
    {
      t: "La trayectoria de Francia",
      p: `
Francia tiene una deuda del 117,6 %, un coste medio del 2,3 %, un crecimiento nominal del 3 % y un déficit primario del 2,8 %. ¿Cuánto sube la deuda en un año? Si el coste medio subiera al 3,5 %, ¿qué saldo primario estabilizaría la deuda?
`,
      s: `
1. **Variación**: (0,023 − 0,03) / 1,03 × 117,6 + 2,8 = −0,80 + 2,8 = **+2,0 puntos**.
2. **Saldo para estabilizar con r = 3,5 %**: (0,035 − 0,03) / 1,03 × 117,6 = **+0,57 %** de superávit primario.
3. Pasar de −2,8 % a +0,6 % es un ajuste de 3,4 puntos del PIB, más de 100.000 millones de euros al año. De ahí las dudas del mercado.
`
    }
  ],
  errores: [
    "Juzgar la deuda de un país solo por su nivel, sin mirar r − g, el saldo primario y quién la tiene.",
    "Pensar que una prima de riesgo baja garantiza que no habrá problemas fiscales.",
    "Comparar la deuda de un país del euro con la de Japón o Estados Unidos, que emiten en su propia moneda.",
    "Creer que el coste de la deuda sube en cuanto suben los tipos de mercado: tarda años, según la vida media.",
    "Olvidar que tener bancos o bonos de un país es una apuesta indirecta por su solvencia."
  ],
  test: [
    { p: "¿Qué es el saldo primario?", o: ["El saldo público sin contar los intereses de la deuda", "El déficit de las comunidades autónomas", "El saldo de la balanza comercial"], c: 0, e: "Mide si el Estado gasta más de lo que ingresa en sus políticas." },
    { p: "Si el tipo medio de la deuda es menor que el crecimiento nominal…", o: ["La deuda crece sola", "La ratio deuda/PIB tiende a bajar si no hay déficit primario", "El país está en recesión"], c: 1, e: "Es la clave de la dinámica r − g." },
    { p: "¿Cuál era la deuda pública española en el segundo trimestre de 2026?", o: ["En torno al 60 %", "En torno al 101 %", "En torno al 140 %"], c: 1, e: "101,4 % del PIB." },
    { p: "¿Qué frase de Draghi en julio de 2012 marcó el fin de la crisis de la prima de riesgo?", o: ["«Los tipos subirán»", "«Haremos lo que sea necesario»", "«La inflación es transitoria»"], c: 1, e: "El BCE se comprometió a sostener el euro." },
    { p: "¿Por qué Japón puede tener una deuda superior al 230 % del PIB con tipos bajos?", o: ["Porque no tiene déficit", "Porque emite en su propia moneda, con su banco central, y la deuda está en manos nacionales", "Porque la ha condonado"], c: 1, e: "Los países del euro no tienen esa opción." }
  ],
  lecturas: [
    { t: "This Time Is Different", a: "Carmen Reinhart y Kenneth Rogoff", n: "Ocho siglos de crisis financieras y de deuda." },
    { t: "Does High Public Debt Consistently Stifle Economic Growth?", a: "Herndon, Ash y Pollin, 2013", n: "La crítica que corrigió el umbral del 90 %." },
    { t: "Public Debt and Low Interest Rates", a: "Olivier Blanchard, American Economic Review, 2019", n: "La lógica de r − g." },
    { t: "Informe trimestral de la economía española", a: "Banco de España", n: "Previsiones de deuda y déficit para España." },
    { t: "Deuda pública por países (Eurostat)", a: "Eurostat", n: "Los datos trimestrales oficiales." }
  ]
});


/* ---- l08.js ---- */
LECCIONES.push({
  id: "b5-l8", num: "5.8",
  titulo: "Divisas: qué mueve el euro y el dólar y cómo afectan a tu cartera",
  resumen: "Si inviertes fuera de la zona euro, tu rentabilidad depende también de la divisa. A corto plazo, el tipo de cambio lo mueven los diferenciales de tipos de interés, el crecimiento y el miedo; a largo plazo tiende, muy despacio, hacia la paridad de poder adquisitivo. Nadie lo predice bien. En 2025 la caída del dólar se comió casi toda la subida de la bolsa estadounidense para un europeo; en 2026 ocurrió lo contrario. Cubrir la divisa cuesta, aproximadamente, la diferencia de tipos de interés.",
  esencial: `
**Cómo se lee.** El **EUR/USD** indica cuántos dólares vale un euro. Si pasa de 1,17 a 1,115, el euro se ha **depreciado** (vale menos dólares) y el dólar se ha **apreciado**. Para un inversor europeo con activos en dólares, eso es una ganancia.

**Tu rentabilidad en euros.** Si compras un activo en dólares:

$$ rentabilidad en euros = (1 + rentabilidad en dólares) × (EUR/USD inicial / EUR/USD final) − 1

Si el S&P 500 sube un 10 % y el euro pasa de 1,17 a 1,115, ganas un **15,4 %** en euros. Si el euro sube en vez de bajar, ganarás menos que el índice.

**Qué mueve las divisas.**

| Plazo | Factor | Efecto típico |
|---|---|---|
| Días–meses | **Diferencial de tipos de interés** | La divisa con tipos más altos atrae capital y se aprecia |
| Días–meses | **Aversión al riesgo** | En las crisis se compran dólares, francos suizos y yenes |
| Meses–años | **Crecimiento relativo y flujos de inversión** | El país que crece más y atrae inversión tiende a apreciarse |
| Años | **Balanza por cuenta corriente** | Déficits persistentes debilitan la divisa |
| Décadas | **Paridad de poder adquisitivo** | Los precios de los mismos bienes tienden a igualarse |

**Nadie lo predice.** Desde el estudio de Meese y Rogoff (1983), se sabe que los modelos económicos predicen el tipo de cambio a uno o dos años peor que suponer que no se moverá. La divisa es, para un inversor, una fuente de **volatilidad** más que de rentabilidad esperada.

**Cubrir o no cubrir.** Un fondo «cubierto» (*hedged*) neutraliza el efecto de la divisa usando contratos a plazo. Cuesta, aproximadamente, la **diferencia de tipos de interés** entre las dos zonas: con la Fed en el 3,75–4,00 % y el BCE en el 2,50 %, cubrir dólares cuesta a un europeo en torno a **1,4 puntos al año**.

**La regla práctica más aceptada:**
- **Renta fija extranjera: cubierta.** La volatilidad de la divisa puede ser mayor que la del propio bono y le quita su papel estabilizador.
- **Acciones: normalmente sin cubrir.** A largo plazo la divisa añade poca volatilidad a una cartera de acciones global y a veces la reduce, porque el dólar suele subir cuando caen las bolsas.

**La foto de noviembre de 2026**: el euro en torno a **1,115 dólares**, cerca de su mínimo en 17 meses, tras haber tocado 1,208 en el último año. El diferencial de tipos y el choque energético (Europa importa energía; Estados Unidos la exporta) han favorecido al dólar.
`,
  entender: `
#### 2025 y 2026: dos años, dos efectos opuestos
| Año | EUR/USD | Efecto para un europeo con acciones estadounidenses |
|---|---|---|
| 2025 | De 1,035 a 1,174 (el euro sube un 13,4 %) | El S&P 500 subió en dólares, pero en euros la ganancia casi desapareció (lección 2.9) |
| 2026 (hasta noviembre) | De 1,174 a ~1,115 (el euro baja un 5 %) | El S&P 500 subía en torno a un 7,4 % en dólares (a 5 de noviembre) y un **13 %** en euros |

Muchos inversores europeos atribuyeron sus buenos o malos resultados a sus fondos, cuando una parte importante era simplemente la divisa.

#### La paridad de poder adquisitivo
Si una cesta de bienes cuesta 6 dólares en Estados Unidos y 5,50 euros en la zona euro, el tipo de cambio que igualaría los precios es 6 / 5,5 = **1,091** dólares por euro. Si el mercado cotiza a 1,115, el euro está un **2,2 %** caro según esa cesta. *The Economist* publica desde 1986 el **índice Big Mac**, una versión informal de este cálculo.

La PPA funciona mal a corto plazo: las desviaciones duran años. Los estudios académicos estiman que la mitad de una desviación tarda en corregirse entre tres y cinco años. Sirve para saber si una divisa está muy cara o muy barata, no para predecir el próximo año.

#### Por qué el dólar sube en las crisis
El dólar es la moneda de reserva mundial: la mayoría del comercio internacional, de la deuda de los emergentes y de las reservas de los bancos centrales está en dólares. En una crisis, todo el mundo necesita dólares para pagar deudas o refugiarse, y el dólar se aprecia aunque la crisis venga de Estados Unidos (ocurrió en 2008). Para un europeo, eso hace que las acciones estadounidenses sin cubrir caigan menos en euros que en dólares en las crisis: la divisa actúa como un seguro parcial.

La excepción reciente fue abril de 2025: con los aranceles anunciados por Estados Unidos, cayeron a la vez la bolsa estadounidense y el dólar. Muchos se preguntaron si el dólar estaba perdiendo su papel de refugio. En 2026, con la guerra de Irán, volvió a comportarse como tal.

#### Cómo funciona la cobertura
Un fondo cubierto vende dólares **a plazo**: se compromete hoy a cambiarlos por euros dentro de un mes o un año a un precio fijado (el *forward*). Ese precio no es una previsión, sino un cálculo de arbitraje:

$$ forward = contado × (1 + tipo en dólares) / (1 + tipo en euros)

Con el contado a 1,115, el tipo en dólares al 3,9 % y en euros al 2,5 %, el forward a un año es 1,1302. Vender dólares a plazo a 1,1302 en vez de a 1,115 supone recibir un 1,35 % menos euros: ese es el coste de la cobertura. A cambio, el fondo cubierto gana, en euros, el tipo europeo más la rentabilidad del activo por encima del tipo estadounidense.
`,
  fondo: `
#### 1. La paridad de intereses y el enigma de la prima a plazo
La **paridad cubierta** (la fórmula del forward) se cumple casi siempre, porque si no hubiera arbitraje sin riesgo. La **paridad descubierta** dice algo más: que la divisa con tipos más altos debería **depreciarse** en promedio en la misma cuantía, de modo que invertir en una u otra diera lo mismo.

Eugene Fama (1984) mostró que en los datos ocurre lo contrario: las divisas con tipos altos tienden a **apreciarse**, o a depreciarse menos de lo que dice la teoría. Es el **enigma de la prima a plazo**, y es la base del ***carry trade***: endeudarse en la divisa con tipos bajos e invertir en la de tipos altos.

#### 2. El carry trade y sus caídas
El carry gana poco a poco y pierde de golpe. Ejemplo histórico: durante años los inversores se endeudaron en yenes (tipos cercanos a cero) para invertir en dólares australianos o neozelandeses (tipos del 6–8 %). En el otoño de 2008, al estallar la crisis, todos deshicieron la operación a la vez: el yen se apreció con fuerza y el dólar australiano cayó más de un tercio frente al dólar estadounidense en pocos meses. En agosto de 2024 hubo un episodio parecido, más breve, cuando el Banco de Japón subió tipos y el yen se disparó.

Un carry con un 1,4 % de diferencial gana ese 1,4 % si la divisa no se mueve, pero una apreciación del 5 % de la divisa de financiación lo convierte en una pérdida del 3,8 %. Es la estructura de rentabilidad de «recoger monedas delante de una apisonadora».

#### 3. Cubrir las acciones: qué dicen los estudios
Para una cartera de acciones mundiales vista desde la zona euro:
- La volatilidad a largo plazo con y sin cobertura es parecida; a veces menor sin cubrir, por la correlación negativa del dólar con las bolsas en las crisis.
- La rentabilidad esperada de cubrir es aproximadamente el diferencial de tipos, que puede ser positivo o negativo según la época. Hoy, cubrir dólares **cuesta** a un europeo; durante 2015–2021, con tipos europeos negativos y estadounidenses positivos, también costaba.
- La cobertura tiene costes operativos adicionales y puede generar diferencias de seguimiento.

Por eso la mayoría de los fondos indexados de acciones globales que se venden en España no están cubiertos, mientras que los de renta fija global suelen estarlo (lección 3.6).

#### 4. Divisas de los países emergentes
Las divisas emergentes amplifican los ciclos: se aprecian cuando el apetito por el riesgo es alto y se desploman en las crisis. Muchos países han sufrido crisis por endeudarse en dólares: cuando su moneda cae, su deuda se dispara en moneda local. Al invertir en emergentes, la divisa puede pesar tanto como la bolsa.

#### 5. Lo que mirar si tienes activos en dólares
- **Cuánto de tu cartera está en dólares**: con un fondo MSCI World, más del 70 %, y si tienes acciones estadounidenses sueltas, más.
- **No confundir la divisa del fondo con la de los activos**: un fondo en euros que invierte en el S&P 500 sin cubrir sigue expuesto al dólar. Lo que cuenta es la divisa de las empresas, no la del fondo.
- **No intentar adivinar el dólar**: si la exposición te quita el sueño, es mejor reducirla con una parte cubierta que entrar y salir según las previsiones.
`,
  caso: {
    titulo: "El dólar en 2025 y 2026: el mismo índice, dos experiencias",
    md: `
**2025: el año en que el dólar se comió la bolsa.** El S&P 500 subió en dólares, pero el euro pasó de 1,035 a 1,174 dólares: un **13,4 %** más. Con dividendos, el índice ganó casi un 18 % en dólares y solo en torno a un 4 % en euros para un inversor europeo sin cubrir (lección 2.9). Las causas que se citaron: los aranceles de abril, las dudas sobre la independencia de la Fed y sobre la sostenibilidad fiscal de Estados Unidos, y el plan de gasto en defensa e infraestructuras de Alemania.

**2026: la vuelta.** Con la guerra de Irán, el cierre de Ormuz y un choque energético que golpea más a Europa (importadora de energía) que a Estados Unidos (exportador neto), y con la Fed subiendo tipos hasta el 3,75–4,00 %, el euro bajó de 1,174 a en torno a **1,115** a principios de noviembre, cerca de su mínimo en 17 meses.

| Activo (enero–noviembre de 2026) | En dólares | En euros |
|---|---|---|
| S&P 500 (precio, a 5 de noviembre) | +7,4 % | **≈ +13 %** |
| Oro (de 4.319 a ~4.080 $/onza) | **−5,5 %** | **−0,5 %** |

**Lo que muestra el caso.**
1. **La divisa puede pesar tanto como el activo.** En 2025 restó más de 10 puntos a un europeo; en 2026 sumó más de 5.
2. **No se pudo prever.** A finales de 2025 el consenso esperaba que el dólar siguiera debilitándose. La guerra lo cambió todo.
3. **El dólar volvió a ser refugio.** En la crisis de 2026 hizo lo que se espera de él, a diferencia de abril de 2025.
4. **Un fondo cubierto habría dado otra historia.** En 2025 habría protegido al europeo; en 2026 le habría quitado la ganancia por divisa y le habría costado en torno a 1,4 puntos de diferencial.

**La lección.** Elige una política de divisa (por ejemplo, acciones sin cubrir y bonos cubiertos) y mantenla, en lugar de cubrir o descubrir según la última noticia.
`
  },
  ejercicios: [
    {
      t: "Rentabilidad en euros de un activo en dólares",
      p: `
El S&P 500 sube un 10 % en dólares en un año. El euro pasa de 1,17 a 1,115 dólares. ¿Cuál es tu rentabilidad en euros? ¿Y si el euro hubiera pasado de 1,035 a 1,174, como en 2025?
`,
      s: `
1. **Euro de 1,17 a 1,115**: 1,10 × (1,17 / 1,115) − 1 = **+15,4 %**.
2. **Euro de 1,035 a 1,174**: 1,10 × (1,035 / 1,174) − 1 = 1,10 × 0,8816 − 1 = **−3,0 %**.
3. El mismo 10 % del índice puede ser un 15 % o una pérdida según la divisa.
`
    },
    {
      t: "El coste de cubrir el dólar",
      p: `
El EUR/USD está en 1,115. El tipo a un año es del 3,9 % en dólares y del 2,5 % en euros. Calcula el forward a un año y el coste (o ganancia) para un europeo que cubre una inversión en dólares. ¿Qué rentabilidad en euros obtiene si invierte en un depósito en dólares y lo cubre?
`,
      s: `
1. **Forward**: 1,115 × 1,039 / 1,025 = **1,1302**.
2. **Coste de cubrir**: 1,115 / 1,1302 − 1 = **−1,35 %**.
3. **Depósito en dólares cubierto**: 1,039 × 1,115 / 1,1302 − 1 = **2,5 %**: exactamente el tipo en euros.
4. Cubrir la divisa elimina la ventaja del tipo más alto. No hay almuerzo gratis: si quieres el 3,9 %, asumes el riesgo del dólar.
`
    },
    {
      t: "Una cesta y la paridad de poder adquisitivo",
      p: `
Una cesta cuesta 6,00 dólares en Estados Unidos y 5,50 euros en la zona euro. ¿Qué tipo de cambio iguala su precio? Si el mercado cotiza a 1,115, ¿está el euro caro o barato y cuánto? ¿Qué harías con esa información?
`,
      s: `
1. **Tipo de PPA**: 6,00 / 5,50 = **1,091** dólares por euro.
2. **Desviación**: 1,115 / 1,091 − 1 = **+2,2 %**: el euro está algo **caro**.
3. **Qué hacer**: casi nada. Una desviación del 2 % está muy dentro de lo normal y la PPA tarda años en corregir. Solo desviaciones del 20–30 % tienen algún valor predictivo, y a plazos largos.
`
    }
  ],
  errores: [
    "Atribuir al gestor del fondo una ganancia o pérdida que se debe a la divisa.",
    "Creer que un fondo denominado en euros no tiene riesgo de dólar porque cotiza en euros.",
    "Cubrir o descubrir la divisa según la previsión del momento.",
    "Comprar la divisa con tipos más altos pensando que es una ganancia sin riesgo.",
    "Tener bonos extranjeros sin cubrir y esperar que estabilicen la cartera."
  ],
  test: [
    { p: "Si el EUR/USD pasa de 1,10 a 1,20, para un europeo con acciones estadounidenses…", o: ["Gana por la divisa", "Pierde por la divisa", "No le afecta"], c: 1, e: "El euro se aprecia: sus dólares valen menos euros." },
    { p: "¿Cuánto cuesta aproximadamente cubrir el dólar para un europeo?", o: ["Nada", "La diferencia entre los tipos de interés en dólares y en euros", "Un 5 % fijo"], c: 1, e: "Se deriva de la paridad cubierta de intereses." },
    { p: "¿Qué encontró Fama (1984) sobre las divisas con tipos altos?", o: ["Que se deprecian exactamente lo que dice la teoría", "Que tienden a depreciarse menos o incluso apreciarse", "Que siempre se devalúan"], c: 1, e: "Es el enigma de la prima a plazo, base del carry trade." },
    { p: "¿Qué suele recomendarse para la renta fija extranjera?", o: ["Cubrir la divisa", "No cubrirla nunca", "Venderla"], c: 0, e: "Sin cubrir, la divisa puede añadir más volatilidad que el propio bono." },
    { p: "¿En torno a qué nivel estaba el EUR/USD a principios de noviembre de 2026?", o: ["1,03", "1,115", "1,20"], c: 1, e: "Cerca de su mínimo en 17 meses." }
  ],
  lecturas: [
    { t: "Forward and Spot Exchange Rates", a: "Eugene Fama, Journal of Monetary Economics, 1984", n: "El enigma de la prima a plazo." },
    { t: "Empirical Exchange Rate Models of the Seventies", a: "Richard Meese y Kenneth Rogoff, 1983", n: "Por qué es tan difícil predecir divisas." },
    { t: "The Big Mac Index", a: "The Economist", n: "Actualizado dos veces al año; buena intuición de la PPA." },
    { t: "Currency Hedging for International Portfolios", a: "Vanguard", n: "Análisis práctico de cuándo cubrir." }
  ]
});


/* ---- l09.js ---- */
LECCIONES.push({
  id: "b5-l9", num: "5.9",
  titulo: "Macro y activos: qué funciona en cada entorno de crecimiento e inflación",
  resumen: "Cada activo tiene un entorno macro favorito. Las acciones prosperan con crecimiento e inflación moderada; los bonos, con desaceleración e inflación baja; las materias primas, con inflación alta. El entorno más difícil es la estanflación: en los ocho episodios de inflación alta de EE. UU. desde 1926, las acciones perdieron un 7 % real anual y los bonos un 5 %. Como no se sabe qué entorno vendrá, la mejor defensa es una cartera que no dependa de uno solo, no intentar adivinarlo.",
  esencial: `
**Los cuatro entornos.** Una forma útil de pensar la macro es cruzar dos preguntas: ¿el crecimiento es mayor o menor de lo esperado? ¿Y la inflación?

| | **Inflación baja o bajando** | **Inflación alta o subiendo** |
|---|---|---|
| **Crecimiento alto** | **Expansión ideal**: acciones (sobre todo de crecimiento), crédito | **Reflación**: acciones cíclicas y de valor, materias primas, bonos ligados a la inflación |
| **Crecimiento bajo** | **Desaceleración o recesión**: bonos del Estado, liquidez, oro | **Estanflación**: materias primas, oro y poco más; acciones y bonos sufren a la vez |

**Lo que dicen los datos.** Un estudio de Man Group y la Universidad de Duke (Neville, Draaisma, Funnell, Harvey y Van Hemert, 2021) identificó **ocho episodios de inflación alta** en Estados Unidos entre 1926 y 2020. En ellos, en términos reales y anualizados:

| Activo | En inflación alta | Comentario |
|---|---|---|
| Acciones estadounidenses | **−7 %** | |
| Bono del Tesoro a 10 años | **−5 %** | |
| Materias primas | **+14 %** | Positivas en los ocho episodios |
| Vivienda | −2 % | |
| Seguimiento de tendencias | +25 % | Estrategia que compra lo que sube y vende lo que baja |

**La lección de 2022.** La inflación sorprendió al alza y los bancos centrales subieron tipos deprisa. Las acciones cayeron más de un 18 % y los bonos agregados un 13 %, su peor año desde 1976. La clásica cartera 60/40 perdió en torno a un **16 %**, uno de sus peores años en medio siglo. Los bonos, que debían proteger, cayeron a la vez que las acciones (lección 2.5).

**La correlación depende de la inflación.** Con inflación baja y estable (2000–2020), las acciones y los bonos se movieron en direcciones opuestas: cuando la economía se frenaba, las acciones caían y los bonos subían. Con inflación alta, ambos dependen de lo mismo (los tipos) y caen juntos.

**El oro no es un seguro perfecto.** En 2026, en plena guerra y con inflación al alza, el oro cayó en torno a un **30 %** desde su récord de enero, porque subieron los tipos reales y el dólar. Lo que mueve el oro a corto plazo es más el tipo de interés real que la inflación (lección 1.8).

**La conclusión práctica.** No sabes qué entorno vendrá. Por eso conviene que la cartera tenga algo que funcione en cada uno: acciones para el crecimiento, bonos para la recesión y, si quieres más protección frente a la inflación, algo de bonos ligados a la inflación, materias primas u oro.
`,
  entender: `
#### Por qué cada activo prefiere un entorno
- **Acciones**: son derechos sobre beneficios futuros. Les va bien cuando los beneficios crecen y los tipos son estables. La inflación moderada no les hace daño (las empresas suben precios), pero la inflación alta e inesperada sube los tipos y comprime los múltiplos (lección 5.4).
- **Bonos nominales**: prometen pagos fijos. Les va bien cuando la inflación baja y los tipos caen, típicamente en recesiones. Les va mal con inflación.
- **Bonos ligados a la inflación**: protegen de la inflación **realizada**, pero no de la subida de tipos reales: en 2022 también cayeron.
- **Materias primas**: la inflación muchas veces **es** su subida (petróleo, alimentos). Por eso son la cobertura más directa. A cambio, a largo plazo su rentabilidad real ha sido baja y muy volátil.
- **Oro**: no da rentas. Compite con los bonos sin riesgo: si el tipo real sube, mantener oro cuesta más. Le va bien con tipos reales bajos o negativos, crisis de confianza y compras de bancos centrales.
- **Inmuebles**: protegen de la inflación a largo plazo (los alquileres se actualizan), pero son sensibles a los tipos, como los bonos largos.

#### La cartera 60/40 en 2022
| | Rentabilidad nominal en 2022 |
|---|---|
| S&P 500 | ≈ −18 % |
| Bonos agregados de EE. UU. | ≈ −13 % |
| Cartera 60/40 | 0,6 × (−18,1) + 0,4 × (−13,0) ≈ **−16 %** |
| Inflación estadounidense (diciembre) | 6,5 % |
| Cartera 60/40 en términos reales | ≈ **−21 %** |

#### Lo que dicen los datos de los factores en inflación
El estudio de Neville y coautores encontró también diferencias entre los factores de bolsa durante los episodios de inflación (rentabilidad real anual de cada factor): el **momentum** dio en torno a +8 % (frente a +4 % en tiempos normales), la **calidad** +3 %, el **valor** −1 % y el factor **tamaño** (pequeñas menos grandes) en torno a −4 %, frente a +1 % en tiempos normales. Las empresas pequeñas, con más deuda a tipo variable y menos poder de fijación de precios, sufren más cuando la inflación sorprende. Es un dato relevante si tu cartera se centra en pequeñas compañías.

#### El seguimiento de tendencias
Las estrategias de seguimiento de tendencias (*trend following* o CTA) compran futuros de lo que sube y venden de lo que baja, en bonos, divisas, materias primas y bolsas. En 2022 ganaron mucho: vendían bonos que caían y compraban materias primas que subían. Son de las pocas estrategias con un historial positivo en estanflación, pero tienen años malos largos en mercados sin tendencia y comisiones altas. Para un inversor particular, son difíciles de replicar con fondos baratos.
`,
  fondo: `
#### 1. La correlación acciones-bonos, con números
La correlación entre las rentabilidades de las acciones y de los bonos del Tesoro estadounidense fue **positiva** durante gran parte de 1970–1999, con inflación alta y variable, y **negativa** en 2000–2021, con inflación baja y anclada. Desde 2022 ha vuelto a ser positiva en muchos periodos.

La razón: cuando la incertidumbre dominante es la **inflación**, una sorpresa al alza sube los tipos y hunde a la vez bonos y acciones. Cuando la incertidumbre dominante es el **crecimiento**, una sorpresa a la baja hunde las acciones y sube los bonos (porque se esperan bajadas de tipos). Saber qué incertidumbre domina es saber si tus bonos te protegerán.

#### 2. La cartera «para todo tiempo»
Ray Dalio y Bridgewater diseñaron la cartera *All Weather* con la idea de repartir el **riesgo** (no el dinero) a partes iguales entre los cuatro entornos. Como los bonos son menos volátiles que las acciones, una cartera así tiene mucho peso en bonos, a menudo apalancados. La lección 2.10 vio que en 2022 lo pasó mal: dependía de que los bonos protegieran, y con inflación alta no lo hicieron.

Una versión simplificada para un particular: no se trata de copiar la cartera, sino de preguntarse **qué pasaría con tu cartera en cada uno de los cuatro cuadrantes** y si puedes vivir con el peor.

#### 3. Las expectativas importan más que el nivel
Lo que mueve los precios no es que la inflación sea alta, sino que sea **más alta de lo esperado**. Los mercados ya descuentan la inflación esperada en los tipos (Fisher) y en los precios de las materias primas. Por eso el «cuadrante» relevante es el de las **sorpresas**: un 4 % de inflación puede ser una buena noticia si se esperaba un 5 %.

Esto tiene una implicación incómoda: para posicionarse por régimen hay que prever las sorpresas mejor que el consenso, lo que es tan difícil como predecir la macro (lección 5.10). La alternativa robusta es la **diversificación entre regímenes**.

#### 4. La paradoja del oro en 2026
| Fecha | Precio del oro (dólares/onza) |
|---|---|
| Cierre de 2025 | 4.319 (tras subir un 64,6 % en 2025) |
| 29 de enero de 2026 | **5.595**, récord histórico |
| 28 de febrero | Empieza la guerra de Irán |
| Finales de marzo | En torno a 4.100–4.400 |
| 30 de octubre | En torno a **3.870–3.900**, mínimo en un año (−30 % desde el récord) |
| 6–9 de noviembre | En torno a 4.065–4.095 |

¿Por qué cayó el «refugio» en plena guerra? Tres razones:
1. **Los tipos reales subieron**: el mercado pasó de esperar recortes de la Fed a esperar subidas, y las acabó viendo. Mantener oro dejó de compensar frente al bono.
2. **El dólar se apreció**: el oro cotiza en dólares y tiende a caer cuando el dólar sube.
3. **Venía de una subida enorme**: muchos inversores tenían ganancias que realizar y vendieron oro para cubrir pérdidas en otros activos.

Los bancos centrales, en cambio, siguieron comprando: **321,2 toneladas** en el tercer trimestre de 2026. Es el comprador que sostiene el suelo del oro desde 2022.

#### 5. Cuánto pesa la macro en la elección de activos
Para un inversor a largo plazo, la macro sirve sobre todo para dos cosas:
1. **Decidir la composición estratégica**: incluir activos que funcionen en distintos entornos (bonos para recesión, algo de protección real frente a inflación), en lugar de una cartera optimizada para el entorno de los últimos diez años.
2. **Entender lo que pasa**: cuando tu cartera cae, saber si es porque el entorno castiga a tus activos (y es esperable) o porque algo se ha roto.

No sirve, en cambio, para cambiar de golpe la cartera cada vez que cambian las previsiones.
`,
  caso: {
    titulo: "2022 y 2026: dos choques de inflación y cómo respondió cada activo",
    md: `
**2022.** Tras la pandemia y con la invasión de Ucrania, la inflación estadounidense llegó al 9,1 % y la de la zona euro al 10,6 %. Los bancos centrales subieron tipos al ritmo más rápido en cuatro décadas.

| Activo | 2022 |
|---|---|
| S&P 500 | ≈ −18 % |
| Bonos agregados de EE. UU. | ≈ −13 % (el peor año desde 1976) |
| Cartera 60/40 | ≈ −16 % |
| Materias primas | Fuerte subida, sobre todo energía |
| Oro | Prácticamente plano en dólares |
| Seguimiento de tendencias | Uno de sus mejores años |

**2026.** El choque fue más estrecho: energía, por el cierre de Ormuz. Los bancos centrales subieron poco (lección 5.3), y la bolsa estadounidense siguió subiendo apoyada en los beneficios y la inversión en IA (lecciones 4.7 y 5.6).

| Activo | 2026 (hasta principios de noviembre) |
|---|---|
| Brent | De ~72 $ a máximos de ~126 $ en abril; ~93 $ en noviembre |
| Bono alemán a 10 años | Rentabilidad de 2,85 % a 3,57 % (septiembre); pérdidas de precio |
| S&P 500 (precio) | ≈ +7,4 % en dólares (a 5 de noviembre) |
| Oro | ≈ −5,5 % en dólares, tras caer un 30 % desde el récord de enero |

**Lo que enseñan los dos episodios.**
1. **Ninguna inflación es igual.** En 2022, la inflación era general y los bancos centrales estaban muy por detrás; en 2026, concentrada en la energía y con bancos centrales que reaccionaron antes.
2. **Las materias primas fueron la protección más directa** en ambos casos, como predice el estudio de Neville y coautores.
3. **Los bonos nominales largos sufrieron** en ambos.
4. **El oro no protegió en ninguno de los dos años** frente a la inflación del momento, porque los tipos reales subían. Su papel es más bien de seguro frente a crisis de confianza en el sistema y a tipos reales negativos.
5. **Las acciones se comportaron de forma distinta**: en 2022 cayeron por la subida de tipos; en 2026 subieron porque los beneficios crecían más que los tipos.

**Para tu cartera.** La pregunta útil no es «¿qué viene?», sino «¿qué pasa con mi cartera si viene cada cosa?». Si la respuesta a «estanflación» es «pierdo un 25 % real y no tengo nada que me proteja», quizá convenga una parte pequeña en activos reales.
`
  },
  ejercicios: [
    {
      t: "La 60/40 en 2022, nominal y real",
      p: `
En 2022 el S&P 500 cayó un 18,1 % y los bonos agregados estadounidenses un 13,0 %. La inflación (diciembre sobre diciembre) fue del 6,5 %. Calcula la rentabilidad nominal y real de una cartera 60/40 rebalanceada a principio de año.
`,
      s: `
1. **Nominal**: 0,6 × (−18,1) + 0,4 × (−13,0) = **−16,1 %**.
2. **Real**: (1 − 0,161) / 1,065 − 1 = **−21,2 %**.
3. En poder de compra, la cartera «prudente» perdió más de una quinta parte en un año.
`
    },
    {
      t: "Dos carteras en cuatro entornos",
      p: `
Supón (cifras ilustrativas, no previsiones) estas rentabilidades anuales por entorno: acciones +18 / −15 / −15 / +12; bonos +3 / −8 / +12 / 0; oro 0 / +20 / +10 / +10; materias primas +5 / +30 / −20 / +25, para crecimiento, estanflación, recesión y reflación, con probabilidades del 50 %, 20 %, 20 % y 10 %. Compara una cartera 60/40 con otra 50/30/10/10 (acciones/bonos/oro/materias primas): rentabilidad en cada entorno, esperada y peor caso.
`,
      s: `
1. **60/40**: crecimiento +12,0; estanflación −12,2; recesión −4,2; reflación +7,2. **Esperada**: 0,5 × 12 + 0,2 × (−12,2) + 0,2 × (−4,2) + 0,1 × 7,2 = **+3,44 %**. Peor caso: **−12,2 %**.
2. **50/30/10/10**: crecimiento +10,4; estanflación −4,9; recesión −4,9; reflación +9,5. **Esperada**: **+4,19 %**. Peor caso: **−4,9 %**.
3. Con estos supuestos, la cartera diversificada gana menos en el mejor entorno, pero mucho menos en el peor. El resultado depende por completo de las cifras supuestas: el ejercicio sirve para pensar en escenarios, no para elegir pesos.
`
    },
    {
      t: "Lo que cuesta recuperar una caída",
      p: `
El oro tocó 5.595 dólares el 29 de enero de 2026 y en torno a 3.900 el 30 de octubre. ¿Cuánto cayó? ¿Cuánto tendría que subir desde 3.900 para volver al récord? ¿Y desde los 4.080 de principios de noviembre?
`,
      s: `
1. **Caída**: 3.900 / 5.595 − 1 = **−30,3 %**.
2. **Subida necesaria desde 3.900**: 5.595 / 3.900 − 1 = **+43,5 %**.
3. **Desde 4.080**: 5.595 / 4.080 − 1 = **+37,1 %**.
4. La asimetría de las caídas (lección 2.2) también afecta a los activos refugio.
`
    }
  ],
  errores: [
    "Construir la cartera solo para el entorno de los últimos diez años.",
    "Dar por hecho que los bonos siempre protegen cuando caen las acciones.",
    "Comprar oro como cobertura de la inflación sin entender que lo mueven los tipos reales y el dólar.",
    "Cambiar la cartera de golpe según la previsión del próximo régimen.",
    "Olvidar que lo que mueve los precios son las sorpresas, no los niveles de inflación o crecimiento."
  ],
  test: [
    { p: "¿Qué entorno es el peor para una cartera de acciones y bonos nominales?", o: ["Crecimiento alto con inflación baja", "Estanflación", "Recesión con inflación baja"], c: 1, e: "Ambos activos caen a la vez." },
    { p: "Según Neville y coautores, ¿qué activo tuvo rentabilidad real positiva en los ocho episodios de inflación alta en EE. UU.?", o: ["Las acciones", "El bono a 10 años", "Las materias primas"], c: 2, e: "Con una media de +14 % real anual." },
    { p: "¿Por qué la correlación entre acciones y bonos se vuelve positiva con inflación alta?", o: ["Porque ambos dependen sobre todo de los tipos de interés", "Porque los bancos centrales compran ambos", "Por casualidad"], c: 0, e: "Una sorpresa de inflación sube los tipos y hunde los dos." },
    { p: "¿Por qué cayó el oro en 2026 pese a la guerra?", o: ["Porque bajaron los tipos", "Por la subida de los tipos reales y del dólar, tras una subida enorme", "Porque los bancos centrales vendieron"], c: 1, e: "Los bancos centrales, de hecho, siguieron comprando." },
    { p: "¿Cuánto perdió aproximadamente una cartera 60/40 estadounidense en 2022?", o: ["Un 5 %", "Un 16 %", "Un 35 %"], c: 1, e: "Uno de sus peores años en medio siglo." }
  ],
  lecturas: [
    { t: "The Best Strategies for Inflationary Times", a: "Neville, Draaisma, Funnell, Harvey y Van Hemert, 2021", n: "Gratuito en SSRN. La base de esta lección." },
    { t: "The All Weather Story", a: "Bridgewater Associates", n: "La lógica de repartir el riesgo entre entornos." },
    { t: "Expected Returns", a: "Antti Ilmanen", n: "Capítulos sobre regímenes macro y activos." },
    { t: "The Golden Dilemma", a: "Claude Erb y Campbell Harvey, Financial Analysts Journal, 2013", n: "Qué protege el oro y qué no." },
    { t: "Gold Demand Trends", a: "World Gold Council", n: "Datos trimestrales de compras de bancos centrales." }
  ]
});


/* ---- l10.js ---- */
LECCIONES.push({
  id: "b5-l10", num: "5.10",
  titulo: "Predecir la macro: por qué casi nadie acierta y qué hacer en su lugar",
  resumen: "Los economistas profesionales casi nunca anticipan las recesiones: de 153 recesiones en 63 países entre 1992 y 2014, el consenso solo había previsto 5 en abril del año anterior. Y aunque acertaras la macro, la reacción del mercado podría ser la contraria: en 2020, con la mayor caída del PIB en décadas, la bolsa estadounidense marcó máximos en agosto. La macro sirve para entender los riesgos y diseñar una cartera robusta, no para entrar y salir del mercado.",
  esencial: `
**El historial de los pronosticadores.** Zidong An, João Tovar Jalles y Prakash Loungani (2018), del FMI, estudiaron las previsiones de consenso de crecimiento en 63 países entre 1992 y 2014. Hubo **153 recesiones**. En abril del año anterior, el consenso solo había anticipado **5**. Y, una vez dentro de la recesión, los pronosticadores infravaloraron su magnitud hasta casi final de año.

**Y cuando todos la ven venir, no llega.** En octubre de 2022, el modelo de Bloomberg Economics daba un **100 %** de probabilidad de recesión en Estados Unidos en los 12 meses siguientes, y la encuesta del *Wall Street Journal* un 63 %. La economía creció en 2023 y 2024 (lección 5.5).

**Los bancos centrales tampoco aciertan sus propios tipos.** En diciembre de 2021, la mediana de los miembros de la Fed preveía que los tipos acabarían 2022 en torno al **0,9 %**. Terminaron en el **4,25–4,50 %**.

**Por qué es tan difícil.**
1. **La economía es un sistema complejo** con millones de decisiones que reaccionan a las propias previsiones.
2. **Los grandes giros vienen de sucesos imprevisibles**: una pandemia, una guerra, el cierre de un estrecho.
3. **Los datos llegan tarde y se revisan**: a menudo no se sabe que hubo recesión hasta meses después.

**Aunque aciertes la macro, puedes fallar en el mercado.** El mercado descuenta el futuro y reacciona a las **sorpresas** frente a lo esperado, no a los datos. En 2020, el PIB estadounidense se desplomó y el paro llegó al 14,7 %, y la bolsa tocó fondo el 23 de marzo y marcó un máximo histórico en agosto.

**Cuánto hay que acertar para que compense.** Si en los años buenos la bolsa sube un 18 % y en los malos cae un 12 %, con un 70 % de años buenos y la liquidez al 3 %, un inversor que entra y sale necesita acertar al menos el **70 %** de las veces solo para empatar con quien se queda quieto, sin contar costes ni impuestos.

**Qué hacer en su lugar.**
1. **Diseñar la cartera para varios entornos** (lección 5.9), no para uno.
2. **Rebalancear con reglas**: vender lo que ha subido y comprar lo que ha bajado según bandas fijadas de antemano.
3. **Usar la macro para gestionar riesgos concretos**: no firmar una hipoteca variable al límite cuando los tipos están subiendo, mantener un colchón de liquidez, no endeudarse para invertir.
4. **Ajustes pequeños y graduales**, si los haces, y por escrito, para poder evaluarlos después. Es lo que el bloque 9 convertirá en tu mapa de decisiones.
`,
  flujo: {
    pasos: [
      { q: "¿Tus objetivos, tu horizonte y tu necesidad de liquidez siguen siendo los mismos?", d: "Las noticias macro no cambian tus objetivos; tu vida, sí (bloque 0).", no: "Revisa primero tu plan: la cartera se decide por tu situación, no por el titular." },
      { q: "¿Tu cartera estaba diseñada para aguantar este entorno?", d: "Repasa qué tienes para recesión, para inflación y para crecimiento (lección 5.9).", no: "Corrígelo con calma y por etapas, como un cambio estratégico, no como una apuesta." },
      { q: "¿La noticia ya está en los precios?", d: "Si está en todos los periódicos y los futuros la descuentan, el mercado ya la conoce (lección 5.3).", no: "Rara vez sabes algo que el mercado no sepa. Si crees que sí, escribe por qué y limita el tamaño (fondo de esta lección)." },
      { q: "¿Algún activo se ha salido de sus bandas de rebalanceo?", d: "Por ejemplo, ±5 puntos sobre el peso objetivo (lección 2.10).", no: "No hagas nada: es la decisión más rentable la mayoría de las veces." }
    ],
    fin: { t: "Rebalancea según tus reglas y apunta la decisión", d: "Vende lo que ha subido por encima de su banda y compra lo que ha bajado. Anota qué hiciste y por qué en tu consola, para revisarlo después (bloques 9 y 10)." }
  },
  entender: `
#### Por qué fallan las previsiones de recesión
Las recesiones son sucesos poco frecuentes y casi siempre los desencadena algo que no está en los modelos: una crisis financiera (2008), una pandemia (2020), un choque petrolero (1973, 1979, 1990). Los modelos de previsión se basan en relaciones del pasado y tienden a predecir que el año próximo se parecerá al actual. Además, hay un incentivo profesional: equivocarse con el consenso cuesta menos que equivocarse solo.

#### La paradoja de 2020
| Dato | Valor |
|---|---|
| Caída del PIB de EE. UU., segundo trimestre de 2020 | La mayor desde que hay registros trimestrales (en torno a −30 % anualizado) |
| Paro de EE. UU., abril de 2020 | **14,7 %** |
| Mínimo del S&P 500 | **23 de marzo de 2020** (−34 % desde el máximo de febrero) |
| Nuevo máximo histórico | **Agosto de 2020** |
| S&P 500 en 2020 | ≈ +16 % |

Alguien que en febrero de 2020 hubiera sabido con certeza que vendría una pandemia y la mayor caída del PIB en generaciones habría vendido acciones. Habría acertado la macro y probablemente habría perdido la recuperación: casi nadie recompró en marzo, cuando las noticias eran peores.

#### La matemática del market timing
Supón que la bolsa sube un 18 % en los años buenos (70 % de las veces) y cae un 12 % en los malos (30 %), y que la liquidez da un 3 %. Quedarse invertido rinde de media 0,7 × 18 + 0,3 × (−12) = **9 %**. Un inversor que acierta con probabilidad *a* en ambos tipos de año obtiene:

$$ E = 0,7 × [a × 18 + (1 − a) × 3] + 0,3 × [a × 3 + (1 − a) × (−12)]

| Acierto | Rentabilidad media |
|---|---|
| 50 % | 6,0 % |
| 60 % | 7,5 % |
| **70 %** | **9,0 %** (empate) |
| 80 % | 10,5 % |

Con estos supuestos, por debajo del 70 % de acierto se pierde frente a quedarse quieto. William Sharpe (1975) llegó a una conclusión parecida con datos reales: un gestor que cambiara entre acciones y liquidez necesitaba acertar en torno a tres de cada cuatro años para compensar. Y en la práctica hay que sumar costes, impuestos al vender con plusvalías y el riesgo de no volver a entrar.

#### Por qué el consenso tiene incentivos para no arriesgar
Un economista de un banco que prevé una recesión que no llega pierde credibilidad; uno que no la prevé, como casi nadie la prevé, apenas paga coste. El resultado son previsiones que se agrupan cerca del consenso y del año anterior. Para un inversor, la previsión de consenso es útil para una cosa: saber **qué descuenta el mercado**, porque lo que mueve los precios es la diferencia con eso.
`,
  fondo: `
#### 1. Calibración: cómo evaluar a un pronosticador
Philip Tetlock estudió durante veinte años más de 28.000 predicciones de expertos políticos y económicos. Sus conclusiones (*Expert Political Judgment*, 2005, y *Superforecasting*, 2015, con Dan Gardner):
- La mayoría de los expertos predecían poco mejor que el azar a varios años vista.
- Los peores eran los «erizos», con una gran teoría que lo explica todo; los mejores, los «zorros», que combinan muchas fuentes y cambian de opinión con los datos.
- Un grupo pequeño de **superpronosticadores** sí acertaba de forma consistente a plazos cortos (meses), con probabilidades bien calibradas y actualizaciones frecuentes.

Una herramienta para medirlo es la **puntuación de Brier**: el error cuadrático entre la probabilidad prevista y lo que ocurrió (1 si ocurrió, 0 si no). Cuanto más baja, mejor. Quien dijo en octubre de 2022 un 100 % de recesión obtuvo una puntuación de 1 (la peor posible); quien dijo un 63 %, de 0,40; quien se limitó a la frecuencia histórica del 15 %, de 0,02. Con una sola observación no se puede juzgar a nadie, pero el ejemplo muestra el valor de partir de la **probabilidad base**.

#### 2. Lo que la macro sí puede decirte
- **Escenarios y vulnerabilidades**: si los tipos suben 2 puntos, ¿qué pasa con tu hipoteca, tus bonos y tus acciones de crecimiento? Eso se puede calcular (lección 5.4) sin predecir nada.
- **Valoraciones a largo plazo**: con tipos reales altos, los múltiplos de las acciones tienen menos recorrido al alza. Los indicadores de valoración, como el CAPE (lección 1.3), tienen algo de capacidad para explicar la rentabilidad a 10 años, aunque casi ninguna a uno.
- **Riesgos de cola**: una inversión de la curva no predice la recesión, pero sí indica que los riesgos son mayores de lo normal.

#### 3. El coste de equivocarse con la macro
Muchos inversores famosos han perdido fortunas por apuestas macro correctas pero a destiempo. El dicho atribuido a Keynes resume el problema: el mercado puede seguir siendo irracional más tiempo del que tú puedes seguir siendo solvente. Los fondos *global macro*, que se dedican profesionalmente a esto, tienen en conjunto un historial irregular, con buenos años en crisis (2008, 2022) y largos periodos mediocres.

#### 4. Una disciplina para ajustes tácticos (si los haces)
Si decides que quieres hacer algún ajuste basado en la macro, unas reglas para limitar el daño:
1. **Tamaño limitado**: por ejemplo, desviarse como máximo ±5–10 puntos de la cartera estratégica.
2. **Por escrito y con fecha**: qué ves, qué haces, qué te haría deshacerlo y cuándo lo revisarás.
3. **Regla de salida**: un plazo o un nivel en el que el ajuste se deshace aunque no hayas «acertado».
4. **Evaluación**: al cabo de unos años, compara el resultado con el de no haber hecho nada. La mayoría de la gente descubre que los ajustes no aportaron.

Ese registro es parte de tu consola de inversión. En el bloque 9 se convierte en un mapa de decisiones en tres partes: tu situación, el entorno y la foto de 2026–2031.

#### 5. Resumen del bloque
| Idea | Lección |
|---|---|
| El crecimiento de un país no predice su bolsa | 5.1 |
| La inflación decide qué activos protegen y cuáles no | 5.2 y 5.9 |
| Los bancos centrales fijan el suelo de todas las rentabilidades | 5.3 |
| Los tipos largos son la gravedad de las valoraciones | 5.4 |
| Las señales del ciclo informan, pero fallan a menudo | 5.5 |
| El crecimiento a largo plazo depende de productividad y demografía | 5.6 |
| La deuda pública preocupa cuando r > g y no hay plan | 5.7 |
| La divisa puede pesar tanto como el activo | 5.8 |
| Nadie predice bien la macro: diseña para varios entornos | 5.10 |
`,
  caso: {
    titulo: "Octubre de 2022: el 100 % de probabilidad de una recesión que no llegó",
    md: `
**El contexto.** En octubre de 2022, la inflación estadounidense superaba el 8 %, la Fed subía los tipos 0,75 puntos en cada reunión, la curva estaba invertida y el S&P 500 caía un 25 % desde su máximo. Todo apuntaba a una recesión.

**Las previsiones.**
- El modelo de **Bloomberg Economics** calculó una probabilidad del **100 %** de recesión en Estados Unidos en los 12 meses siguientes.
- La encuesta de economistas del ***Wall Street Journal*** la situó en el **63 %**, uno de los niveles más altos de su historia fuera de una recesión.
- Muchas gestoras recomendaban reducir el peso en acciones.

**Lo que pasó.**
- **No hubo recesión.** El PIB estadounidense creció en 2023 y en 2024. El paro siguió por debajo del 4,5 %.
- **La bolsa tocó fondo el 12 de octubre de 2022**, prácticamente el mismo mes en que la probabilidad de recesión estaba en su máximo.
- El S&P 500 subió más de un 24 % en 2023 y más de un 23 % en 2024.

**Por qué no es un caso aislado.** El estudio de An, Jalles y Loungani mostró que, en 63 países y durante dos décadas, el consenso no previó casi ninguna recesión. 2022 mostró el error contrario: prever con convicción una recesión que no llegó. Los dos errores tienen la misma raíz: la economía es muy difícil de predecir, y el mercado, que agrega la información de todos, ya refleja lo que sabe el consenso.

**Y en 2026.** A finales de 2025, nadie incluía en su escenario central una guerra con Irán y el cierre del estrecho de Ormuz. Las previsiones de bajadas de tipos para 2026 se convirtieron en subidas en pocas semanas. La foto de este bloque (noviembre de 2026) también quedará superada: úsala para entender el presente, no para adivinar el futuro.

**La lección.** Quien mantuvo su cartera diversificada y rebalanceó cuando las acciones cayeron (comprando más en 2022) obtuvo mejores resultados que quien actuó según las previsiones. La macro es imprescindible para entender lo que pasa y para dimensionar los riesgos; es una mala brújula para el *timing*.
`
  },
  ejercicios: [
    {
      t: "El acierto necesario para el market timing",
      p: `
La bolsa sube un 18 % en los años buenos (70 % de las veces) y cae un 12 % en los malos; la liquidez da un 3 %. Calcula la rentabilidad media de quedarse invertido y la de un inversor que acierta el tipo de año con probabilidad a = 0,6 y a = 0,8. ¿Con qué acierto empata?
`,
      s: `
1. **Quedarse invertido**: 0,7 × 18 + 0,3 × (−12) = **9,0 %**.
2. **a = 0,6**: 0,7 × (0,6 × 18 + 0,4 × 3) + 0,3 × (0,6 × 3 + 0,4 × (−12)) = 0,7 × 12 + 0,3 × (−3) = **7,5 %**.
3. **a = 0,8**: años buenos 0,8 × 18 + 0,2 × 3 = 15; años malos 0,8 × 3 + 0,2 × (−12) = 0 → 0,7 × 15 + 0,3 × 0 = **10,5 %**.
4. **Empate**: E(a) es lineal; resolviendo E(a) = 9 sale **a = 0,70**. Hay que acertar 7 de cada 10 años solo para igualar, antes de costes e impuestos.
`
    },
    {
      t: "¿Cuándo compensa vender ante una recesión?",
      p: `
Si no hay recesión, las acciones darán un 9 % el próximo año; si la hay, −20 %. La liquidez da un 3 %. ¿A partir de qué probabilidad de recesión compensa vender, suponiendo (con optimismo) que la bolsa todavía no ha caído y que sabrás cuándo volver a entrar? Compárala con la probabilidad del 28–44 % del ejercicio bayesiano de la lección 5.5.
`,
      s: `
1. **Punto de equilibrio**: p × (−20) + (1 − p) × 9 = 3 → 9 − 29p = 3 → **p ≈ 20,7 %**.
2. Con una señal que deja la probabilidad en el 28–44 %, vender parecería compensar sobre el papel.
3. Pero el supuesto es muy optimista: en la práctica la bolsa suele haber caído ya cuando la señal es clara, el −20 % puede ser menor y casi nadie vuelve a entrar en el momento correcto. Sumando esos efectos y los impuestos, la ventaja desaparece con facilidad.
`
    },
    {
      t: "La puntuación de Brier",
      p: `
En octubre de 2022, tres pronosticadores dieron una probabilidad de recesión en EE. UU. en 12 meses del 100 %, del 63 % y del 15 % (la frecuencia histórica). No hubo recesión. Calcula la puntuación de Brier de cada uno (error cuadrático; 0 es perfecto). ¿Qué limita la conclusión?
`,
      s: `
1. **100 %**: (1 − 0)² = **1,00**.
2. **63 %**: 0,63² = **0,40**.
3. **15 %**: 0,15² = **0,02**.
4. **Límite**: es una sola observación. Con una muestra de muchos años, el que siempre dice 15 % nunca aporta información útil: la calibración se juzga en muchas predicciones. Pero el ejemplo muestra el valor de anclarse en la probabilidad base.
`
    }
  ],
  errores: [
    "Vender o comprar por la previsión macro de un experto, como si fuera información que el mercado no tiene.",
    "Confundir acertar la macro con acertar el mercado.",
    "Recordar las predicciones acertadas y olvidar las falladas, propias o ajenas.",
    "Hacer ajustes tácticos sin tamaño máximo, sin escribirlos y sin evaluarlos después.",
    "Usar la foto macro del momento como si fuera una previsión del futuro."
  ],
  test: [
    { p: "Según An, Jalles y Loungani, ¿cuántas de 153 recesiones había previsto el consenso en abril del año anterior?", o: ["5", "50", "120"], c: 0, e: "Entre 1992 y 2014, en 63 países." },
    { p: "¿Qué probabilidad de recesión dio el modelo de Bloomberg Economics en octubre de 2022?", o: ["30 %", "63 %", "100 %"], c: 2, e: "La economía estadounidense creció en 2023 y 2024." },
    { p: "En 2020, ¿cuándo marcó el S&P 500 un nuevo máximo histórico?", o: ["En agosto de 2020, con el paro todavía muy alto", "En 2022", "Cuando se aprobó la vacuna"], c: 0, e: "Tras el mínimo del 23 de marzo." },
    { p: "Con los supuestos de la lección, ¿qué acierto necesita un *market timer* para empatar con quien se queda quieto?", o: ["Más del 50 %", "En torno al 70 %", "El 100 %"], c: 1, e: "Y antes de costes e impuestos." },
    { p: "¿Para qué sirve sobre todo la macro al inversor a largo plazo?", o: ["Para entrar y salir del mercado", "Para entender los riesgos y diseñar una cartera robusta a distintos entornos", "Para nada"], c: 1, e: "Escenarios, vulnerabilidades y composición estratégica." }
  ],
  lecturas: [
    { t: "How Well Do Economists Forecast Recessions?", a: "Zidong An, João Tovar Jalles y Prakash Loungani, FMI (documento de trabajo 18/39), 2018", n: "Los 153 casos de esta lección." },
    { t: "Superforecasting", a: "Philip Tetlock y Dan Gardner", n: "Cómo pronostican los que aciertan; muy recomendable." },
    { t: "Likely Gains from Market Timing", a: "William Sharpe, Financial Analysts Journal, 1975", n: "El cálculo original del acierto necesario." },
    { t: "The Signal and the Noise", a: "Nate Silver", n: "Por qué la mayoría de las predicciones fallan, con un capítulo sobre economía." },
    { t: "Mastering the Market Cycle", a: "Howard Marks", n: "Cómo pensar en el ciclo sin pretender predecirlo." }
  ]
});


var META = {
  id: 5,
  titulo: "Macro para inversores",
  intro: `
Los bloques 1 a 4 trataron de los activos, del riesgo, de la cartera indexada y del análisis de empresas. Este bloque trata del **entorno** en el que viven todos ellos: el crecimiento, la inflación, los bancos centrales, los tipos de interés, el ciclo, la deuda pública y las divisas. Empieza por cómo se mide la economía y por qué su crecimiento no se traslada a la bolsa; sigue con la inflación y los bancos centrales que la combaten; dedica una lección a los tipos de interés, la variable macro que más mueve las valoraciones; repasa el ciclo y sus señales, el crecimiento a largo plazo con la inteligencia artificial como protagonista, la deuda pública y las divisas; y termina con qué activos funcionan en cada entorno y con lo difícil que es predecir la macro.

La idea que recorre el bloque: **la macro sirve para entender los riesgos de tu cartera y diseñarla para varios escenarios, no para adivinar el siguiente movimiento del mercado**. Todas las lecciones usan los datos de 2026 (la guerra de Irán y el cierre de Ormuz, el regreso de la inflación energética y de las subidas de tipos), que son el mejor laboratorio disponible. Pero envejecerán pronto: por eso cada lección separa lo que es permanente (los mecanismos) de lo que es una foto (las cifras).

Este bloque prepara el **mapa de decisiones** del bloque 9, donde el entorno macro será una de las tres partes, junto con tu situación personal y la foto de 2026–2031.
`,
  foto: {
    titulo: "La foto del momento",
    fecha: "14 nov 2026",
    md: `
| Indicador | Dato | Comentario |
|---|---|---|
| Tipo de depósito del BCE | 2,50 % | Subidas en junio y septiembre de 2026; el mercado da ~80 % a una subida al 2,75 % el 17 de diciembre |
| Tipos de la Reserva Federal | 3,75–4,00 % | Subida el 16 de septiembre (12–0); mantenidos el 28 de octubre (10–2, dos votos para subir) |
| Inflación de la zona euro (octubre) | 4,0 % (subyacente 2,5 %) | Energía +20,8 % interanual; máximo en más de tres años |
| Inflación de España (octubre) | 4,9 % (subyacente 3,1 %) | Tres meses seguidos por encima del 4 % |
| Inflación de EE. UU. (septiembre) | 3,7 % (subyacente 2,6 %) | Gasolina +34 % interanual |
| Brent | ~93 $ en noviembre | ~72 $ antes de la guerra; máximo de ~126 $ el 30 de abril |
| Oro | ~4.065–4.095 $/onza (6–9 de noviembre) | Récord de 5.595 $ el 29 de enero; mínimo anual de ~3.870–3.900 $ el 30 de octubre |
| EUR/USD | ~1,115 | Mínimo de 17 meses el 28–29 de octubre (1,111) |
| Bono alemán a 10 años | ~3,3 % | Máximo de 3,57 % en septiembre, el mayor desde 2009 |
| Bono español a 10 años | En torno al 3,8–4 % | Máximo de 4,14 % el 28 de septiembre, el mayor desde enero de 2014; prima media de 2026: 46 pb |
| Bono estadounidense a 10 años | ~5 % | 5,03 % el 28 de octubre; máximos desde 2007 |
| Bono francés a 10 años | Por encima del 5 % en octubre (máximo desde 2002) | Diferencial con Alemania de ~160 pb en octubre, máximo desde 2011 |
| Euríbor a 12 meses (octubre) | 3,239 % | 2,187 % un año antes: +1,05 puntos |
| Paro | España 10,18 % (EPA, 3.er trimestre); EE. UU. 4,1 % (octubre) | España: 22,85 millones de ocupados, récord. EE. UU.: +165.000 empleos en octubre |
| PIB de EE. UU. (3.er trimestre) | +3,4 % anualizado | ~1,1 puntos de equipos de información y software |
| Deuda pública de España | 101,4 % del PIB (2.º trimestre) | El Gobierno prevé 99,3 % al cierre de 2026 |
| Previsiones del FMI para 2026 (octubre) | Mundo 3,1 %; España 2,5 %; zona euro 1,1 % | Inflación mundial 4,7 %; petróleo supuesto: 96 $ en 2026 y 87 $ en 2027 |

**Cómo leer esta tabla.** Es una foto de un año excepcional, con un choque energético en curso. Sirve para entender los ejemplos de las lecciones, no para decidir la cartera: dentro de unos meses muchas cifras habrán cambiado, y la lección 5.10 explica por qué intentar adivinar hacia dónde es un mal negocio.
`
  },
  glosario: [
    { t: "PIB (producto interior bruto)", d: "Valor de todos los bienes y servicios finales producidos en un país en un periodo." },
    { t: "PIB nominal", d: "PIB medido a precios de cada año; incluye el efecto de la inflación." },
    { t: "PIB real", d: "PIB medido a precios constantes; refleja solo el aumento de la producción." },
    { t: "PIB per cápita", d: "PIB dividido entre la población; aproxima el nivel de vida medio." },
    { t: "Deflactor del PIB", d: "Índice de precios de todo lo que se produce en un país; convierte el PIB nominal en real." },
    { t: "PIB potencial", d: "Lo que una economía puede producir con un uso normal de sus recursos, sin generar inflación. Se estima, no se observa." },
    { t: "Brecha de producción", d: "Diferencia porcentual entre el PIB real y el potencial." },
    { t: "Ley de Okun", d: "Regularidad que relaciona la brecha de producción con el paro: en EE. UU., unos 0,5 puntos de paro por punto de brecha." },
    { t: "Crecimiento anualizado", d: "Tasa trimestral expresada como si se repitiera durante un año; es como publica el PIB Estados Unidos." },
    { t: "Nowcast", d: "Estimación del PIB del trimestre en curso con indicadores de alta frecuencia." },
    { t: "Dilución", d: "Reducción de la participación de los accionistas existentes cuando se emiten acciones nuevas; hace que el BPA crezca menos que la economía." },
    { t: "Inflación", d: "Aumento generalizado y sostenido de los precios." },
    { t: "IPC", d: "Índice de precios de consumo: precio de una cesta representativa del gasto de los hogares." },
    { t: "IPCA", d: "IPC armonizado, comparable entre países de la UE; el que usa el BCE." },
    { t: "Inflación subyacente", d: "Inflación sin los componentes más volátiles (energía y alimentos frescos, o todos los alimentos según la definición)." },
    { t: "Efecto base", d: "Cambio en la tasa interanual causado por lo que ocurrió hace doce meses, no por lo que ocurre ahora." },
    { t: "Desinflación", d: "Bajada de la tasa de inflación con precios que siguen subiendo, pero menos." },
    { t: "Deflación", d: "Caída generalizada de los precios." },
    { t: "Estanflación", d: "Combinación de estancamiento económico, paro alto e inflación alta." },
    { t: "Efectos de segunda ronda", d: "Contagio de un choque de precios (por ejemplo, de la energía) a salarios y al resto de precios." },
    { t: "Curva de Phillips", d: "Relación inversa entre paro e inflación a corto plazo; no se puede explotar de forma permanente." },
    { t: "Ecuación de Fisher", d: "Tipo nominal ≈ tipo real + inflación esperada." },
    { t: "Tipo de interés real", d: "Tipo nominal menos inflación; lo que gana o pierde de verdad un ahorrador." },
    { t: "Breakeven de inflación", d: "Diferencia entre la rentabilidad de un bono nominal y la de uno ligado a la inflación del mismo plazo; la inflación que descuenta el mercado." },
    { t: "TIPS", d: "Bonos del Tesoro de EE. UU. ligados a la inflación." },
    { t: "Ecuación cuantitativa", d: "M × V = P × Y: dinero por velocidad de circulación igual a precios por producción real." },
    { t: "Mandato dual", d: "Objetivo de la Fed: estabilidad de precios y máximo empleo." },
    { t: "Facilidad de depósito", d: "Tipo que paga el BCE a los bancos por sus depósitos a un día; hoy es su tipo de referencia." },
    { t: "€STR", d: "Tipo interbancario a un día de la zona euro; cotiza muy cerca de la facilidad de depósito." },
    { t: "Fed funds", d: "Tipo de los préstamos a un día entre bancos estadounidenses; la Fed lo fija en una horquilla." },
    { t: "FOMC", d: "Comité de Mercado Abierto de la Fed, que decide los tipos; 12 miembros con voto." },
    { t: "Regla de Taylor", d: "Fórmula que recomienda el tipo oficial según la inflación y la brecha de producción." },
    { t: "Tipo neutral (r*)", d: "Tipo real que ni estimula ni frena la economía; no se observa y se estima con modelos." },
    { t: "Forward guidance", d: "Comunicación del banco central sobre sus decisiones futuras para influir en los tipos a largo plazo." },
    { t: "Expansión cuantitativa (QE)", d: "Compra de bonos por el banco central con dinero nuevo para bajar los tipos a largo plazo." },
    { t: "Endurecimiento cuantitativo (QT)", d: "Reducción del balance del banco central, vendiendo bonos o dejándolos vencer." },
    { t: "Dot plot", d: "Gráfico de la Fed con la previsión de tipos de cada miembro del FOMC." },
    { t: "TPI", d: "Instrumento del BCE (2022) para comprar deuda de un país si su prima sube sin justificación." },
    { t: "Independencia del banco central", d: "Capacidad de decidir los tipos sin depender del Gobierno; reduce la inflación a largo plazo." },
    { t: "Curva de tipos", d: "Rentabilidad de la deuda pública a distintos plazos." },
    { t: "Curva invertida", d: "Situación en la que los tipos cortos superan a los largos; suele anticipar bajadas de tipos y, a veces, recesiones." },
    { t: "Prima por plazo", d: "Rentabilidad adicional que se exige por prestar a largo plazo en lugar de renovar préstamos a corto." },
    { t: "Duración modificada", d: "Pérdida porcentual aproximada del precio de un bono por cada punto que suben los tipos." },
    { t: "Convexidad", d: "Curvatura de la relación entre precio y tipo; hace que las pérdidas por subidas sean algo menores que lo que dice la duración." },
    { t: "Duración de una acción", d: "Sensibilidad del precio de una acción a la tasa de descuento; con Gordon, aproximadamente 1/(r − g)." },
    { t: "Euríbor", d: "Tipo al que los bancos de la zona euro se prestan a plazo; el de 12 meses es la referencia de las hipotecas variables." },
    { t: "Prima de riesgo (de un país)", d: "Diferencia entre la rentabilidad del bono a 10 años de un país y la del alemán." },
    { t: "Modelo de la Fed", d: "Comparación de la rentabilidad del beneficio de la bolsa con la del bono a 10 años; útil como intuición, pobre como predictor." },
    { t: "Ciclo económico", d: "Alternancia de expansiones y recesiones de la actividad." },
    { t: "Recesión", d: "Caída significativa y generalizada de la actividad; en EE. UU. la fecha la fija el NBER." },
    { t: "NBER", d: "Oficina Nacional de Investigación Económica de EE. UU.; data oficialmente las recesiones." },
    { t: "Indicador adelantado", d: "Variable que suele cambiar antes que la economía: curva de tipos, PMI de pedidos, permisos de construcción." },
    { t: "PMI", d: "Índice de gestores de compras; índice de difusión mensual en el que 50 separa expansión de contracción." },
    { t: "Índice de difusión", d: "Mide cuántos encuestados mejoran frente a cuántos empeoran, no la magnitud del cambio." },
    { t: "Regla de Sahm", d: "Señal de recesión cuando la media de 3 meses del paro sube 0,5 puntos sobre su mínimo de los 12 meses anteriores." },
    { t: "Diferencial de crédito", d: "Rentabilidad adicional de la deuda de empresas sobre la pública; mide el miedo a los impagos." },
    { t: "Rotación sectorial", d: "Estrategia de cambiar de sectores según la fase del ciclo." },
    { t: "Productividad", d: "Producción por hora trabajada (o por trabajador)." },
    { t: "Productividad total de los factores (PTF)", d: "Parte del crecimiento que no se explica por más capital ni más trabajo; aproxima el progreso técnico." },
    { t: "Contabilidad del crecimiento", d: "Descomposición del crecimiento en aportaciones del capital, el trabajo y la PTF." },
    { t: "Paradoja de Solow", d: "Observación de que los ordenadores tardaron en reflejarse en las estadísticas de productividad." },
    { t: "Tecnología de propósito general", d: "Tecnología que transforma muchos sectores a la vez, como la electricidad, internet o la IA." },
    { t: "Déficit público", d: "Exceso de gasto público sobre ingresos en un año, en % del PIB." },
    { t: "Saldo primario", d: "Saldo público sin contar los intereses de la deuda." },
    { t: "Deuda pública", d: "Acumulado de los déficits pasados, en % del PIB." },
    { t: "Estabilizadores automáticos", d: "Aumento automático del déficit en las recesiones (menos impuestos, más subsidios) que amortigua la caída." },
    { t: "Dinámica r − g", d: "La ratio de deuda baja sola si el coste medio de la deuda (r) es menor que el crecimiento nominal (g)." },
    { t: "Multiplicador fiscal", d: "Variación del PIB por cada euro de gasto público adicional." },
    { t: "Dominancia fiscal", d: "Situación en la que el banco central no puede subir tipos lo necesario por el coste para el Estado." },
    { t: "Vida media de la deuda", d: "Plazo medio hasta el vencimiento de la deuda viva; en España ronda los ocho años." },
    { t: "Bucle diabólico", d: "Dependencia mutua entre bancos y Estado: si cae la deuda pública, sufren los bancos que la tienen, y viceversa." },
    { t: "EUR/USD", d: "Dólares que vale un euro." },
    { t: "Paridad de poder adquisitivo (PPA)", d: "Tipo de cambio que igualaría el precio de una misma cesta en dos países; atrae al tipo de cambio muy a largo plazo." },
    { t: "Forward (tipo a plazo)", d: "Tipo de cambio fijado hoy para una operación futura; se calcula con el contado y los tipos de interés de ambas divisas." },
    { t: "Paridad cubierta de intereses", d: "Relación de arbitraje que fija el forward a partir del diferencial de tipos." },
    { t: "Paridad descubierta de intereses", d: "Hipótesis de que la divisa con tipos altos se deprecia en la misma cuantía; los datos la contradicen." },
    { t: "Carry trade", d: "Endeudarse en una divisa con tipos bajos e invertir en otra con tipos altos." },
    { t: "Cobertura de divisa (hedged)", d: "Neutralización del efecto del tipo de cambio mediante contratos a plazo; cuesta aproximadamente el diferencial de tipos." },
    { t: "Régimen macro", d: "Combinación de crecimiento e inflación (altos o bajos) que condiciona qué activos funcionan." },
    { t: "Cartera 60/40", d: "60 % acciones y 40 % bonos; la cartera equilibrada clásica." },
    { t: "Seguimiento de tendencias (trend following)", d: "Estrategia que compra lo que sube y vende lo que baja en muchos mercados de futuros." },
    { t: "All Weather", d: "Cartera de Bridgewater que reparte el riesgo entre los cuatro entornos de crecimiento e inflación." },
    { t: "Puntuación de Brier", d: "Error cuadrático medio entre probabilidades previstas y resultados; mide la calidad de un pronosticador." },
    { t: "Market timing", d: "Entrar y salir del mercado según las previsiones." }
  ],
  fuentes: [
    { t: "CaixaBank Research: la energía lleva la inflación de la eurozona al 4,0 % (octubre de 2026)", u: "https://www.caixabankresearch.com/ca/publicacions/notas-breves-actualidad-economica-y-financiera/internacional/energia-lleva-inflacion" },
    { t: "Finanzas Digital: Eurostat, inflación de la zona euro del 4 % y energía +20,8 %", u: "https://finanzasdigital.com/inflacion-anual-eurozona-se-situa-en-4-por-ciento-octubre-eurostat/" },
    { t: "INE: indicador adelantado del IPC, octubre de 2026", u: "https://www.ine.es/dyngs/Prensa/adIPC1026.htm" },
    { t: "Vozpópuli: el IPC se mantiene en el 4,9 % y la subyacente en el 3,1 %", u: "https://www.vozpopuli.com/economia/macroeconomia/la-inflacion-se-dispara-de-nuevo-hasta-el-49-en-octubre-pese-a-las-ayudas-de-los-carburantes.html" },
    { t: "BLS: IPC de Estados Unidos, septiembre de 2026", u: "https://www.bls.gov/cpi/news.htm" },
    { t: "Securities.io: detalle del IPC de septiembre de 2026 (gasolina +34,2 %)", u: "https://www.securities.io/u-s-cpi-rises-0-6-in-september-as-gasoline-lifts-annual-rate-to-3-7/" },
    { t: "BCE: decisiones de política monetaria del 10 de septiembre de 2026", u: "https://www.ecb.europa.eu/press/pr/date/2026/html/ecb.mp260910~314e508016.es.html" },
    { t: "Rankia: calendario de decisiones del BCE en 2026", u: "https://www.rankia.com/blog/mejores-hipotecas/7420195-bce-mantiene-tipos-euribor" },
    { t: "Euronews: la Fed sube tipos por primera vez desde 2023 (16 de septiembre de 2026)", u: "https://www.euronews.com/2026/09/16/fed-raises-rates-for-the-first-time-since-2023-in-unanimous-vote-defying-trump" },
    { t: "Bloomberg (vía CPA Practice Advisor): la subida de la Fed y los votos discrepantes de julio", u: "https://cpapracticeadvisor.com/2026/09/16/federal-reserve-raises-interest-rates-for-first-time-since-2023/190284" },
    { t: "WealthManagement: la Fed mantiene tipos en octubre (10–2)", u: "https://www.wealthmanagement.com/fixed-income/fed-holds-rates-says-more-data-will-help-next-decision" },
    { t: "StockAnalysis: el bono a 10 años de EE. UU. cierra en el 5,03 % (28 de octubre de 2026)", u: "https://stockanalysis.com/news/fed-holds-rates-steady-oct-2026/" },
    { t: "RankiaPro: Lagarde dejará el BCE el 7 de febrero de 2027", u: "https://rankiapro.com/es/noticias/lagarde-dimite-bce" },
    { t: "Trading Economics: el euro en mínimos de 17 meses (29 de octubre de 2026)", u: "https://tradingeconomics.com/euro-area/currency/news/596340" },
    { t: "Hipotecas.me: euríbor de octubre de 2026 (3,239 %)", u: "https://www.hipotecas.me/euribor-hoy/euribor-octubre-2026" },
    { t: "Trading Economics: el bono alemán en máximos desde 2009 (septiembre de 2026)", u: "https://es.tradingeconomics.com/germany/government-bond-yield/news/584936" },
    { t: "Trading Economics: el bono español en el 4,14 %, máximo desde 2014", u: "https://tradingeconomics.com/spain/government-bond-yield/news/587219" },
    { t: "Bankinter: la subida de las rentabilidades de los bonos por países", u: "https://www.bankinter.com/blog/economia/rentabilidad-bonos-paises-subidas" },
    { t: "Trading Economics: el bono francés supera el 5 % (octubre de 2026)", u: "https://tradingeconomics.com/france/government-bond-yield/news/593806" },
    { t: "Real Instituto Elcano: prima de riesgo, ¿sigue siendo Alemania una buena referencia?", u: "https://www.realinstitutoelcano.org/comentarios/prima-de-riesgo-sigue-siendo-alemania-una-buena-referencia/" },
    { t: "elDiario.es: la prima de riesgo ya no es lo que era (media de 2026)", u: "https://www.eldiario.es/economia/prima-riesgo-no_129_13527839.html" },
    { t: "Banco de España: deuda de las AAPP en el segundo trimestre de 2026", u: "https://www.bde.es/wbe/es/noticias-eventos/actualidad-banco-espana/deuda-aapp-2026t2.html" },
    { t: "Artículo14: deuda pública y coste de las nuevas emisiones según la AIReF", u: "https://www.articulo14.es/economia/espana-se-consolida-como-el-quinto-pais-de-la-ue-con-mayor-peso-de-la-deuda-cada-espanol-debe-35-400-euros-20261022.html" },
    { t: "Demócrata: previsión del Gobierno de deuda del 99,3 % en 2026", u: "https://www.democrata.es/economia/la-deuda-publica-baja-al-101-4-del-pib-pero-alcanza-un-maximo-de-1-763-billones-en-el-segundo-trimestre/" },
    { t: "Euronews: el FMI prevé un crecimiento mundial del 3,1 % en 2026", u: "https://es.euronews.com/2026/10/13/el-fmi-preve-un-crecimiento-mundial-del-31-en-2026-y-del-11-en-la-eurozona" },
    { t: "Artículo14: el FMI eleva al 2,5 % el crecimiento de España y al 3,7 % su inflación", u: "https://www.articulo14.es/economia/el-fmi-eleva-al-25-su-prevision-de-crecimiento-para-espana-en-2026-y-al-37-la-de-inflacion-20261013.html" },
    { t: "O Povo: tabla de previsiones del FMI por países (octubre de 2026)", u: "https://www.opovo.com.br/noticias/mundo/2026/10/13/as-previsoes-economicas-do-fmi.html" },
    { t: "Economipedia: EPA del tercer trimestre de 2026", u: "https://economipedia.com/actualidad/record-empleo-sube-paro-espana-epa" },
    { t: "IndustryWeek: informe de empleo de EE. UU. de octubre de 2026", u: "https://www.industryweek.com/talent/news/55417255/october-jobs-report-us-adds-165000-jobs-as-unemployment-falls-slightly-to-41" },
    { t: "BabyPips: salarios frente a inflación en octubre de 2026", u: "https://www.babypips.com/news/headline-us-jobs-report-october-2026-payrolls-beat-fed" },
    { t: "PBS / AP: el PIB de EE. UU. crece un 3,4 % en el tercer trimestre de 2026", u: "https://pbs.org/newshour/economy/u-s-economy-grows-at-brisk-3-4-pace-in-third-quarter-on-strong-consumer-spending-and-ai-investment" },
    { t: "FourWeekMBA: contribución de equipos de información y software al PIB", u: "https://fourweekmba.com/ai-us-data-center-spending-hits-record-83b-pace-gdp-up-3-4/" },
    { t: "Bloomberg (vía Staffing Industry): las exportaciones netas restan 3,3 puntos", u: "https://www.staffingindustry.com/news/global-daily-news/us-economy-hits-year-high-on-strong-spending-investment" },
    { t: "Bloomberg Línea: la AIE y la mayor crisis petrolera de la historia", u: "https://www.bloomberglinea.com/mercados/la-guerra-con-iran-provoca-la-mayor-crisis-petrolera-de-la-historia-aie/" },
    { t: "Plano Informativo: oro, plata, WTI y Brent en 2026", u: "https://planoinformativo.com/1151835/sufren-descalabro-metales-preciosos" },
    { t: "Euronews: el oro y la plata se hunden tras el récord de enero", u: "https://es.euronews.com/2026/03/23/oro-plata-se-hunden-luego-se-recuperan-tras-declaracion-de-trump-sobre-iran" },
    { t: "Bloomberg Línea: el oro de máximos a su desplome en 2026", u: "https://www.bloomberglinea.com/latinoamerica/argentina/asi-se-movio-el-precio-del-oro-desde-maximos-hasta-su-desplome-en-marzo-de-2026/" },
    { t: "World Gold Council: compras de los bancos centrales en el tercer trimestre de 2026", u: "https://www.gold.org/goldhub/research/gold-demand-trends/gold-demand-trends-q3-2026/central-banks" },
    { t: "Jay Ritter: Economic Growth and Equity Returns (2005)", u: "https://site.warrington.ufl.edu/ritter/files/2015/04/Economic-growth-and-equity-returns-2005.pdf" },
    { t: "Evidence Investor: resumen de Ritter (2012) y otros estudios sobre crecimiento y bolsa", u: "https://www.evidenceinvestor.com/post/is-there-a-link-between-gdp-growth-and-emerging-market-returns" },
    { t: "Neville y coautores: The Best Strategies for Inflationary Times (SSRN)", u: "https://ssrn.com/abstract=3813202" },
    { t: "Man Group: el seguimiento de tendencias en entornos inflacionistas", u: "https://www.man.com/insights/trend-following-in-inflationary-environments" },
    { t: "FMI: How Well Do Economists Forecast Recessions? (2018)", u: "https://www.imf.org/en/publications/wp/issues/2018/03/05/how-well-do-economists-forecast-recessions-45672" },
    { t: "BNN Bloomberg: 5 de 153 recesiones previstas por el consenso", u: "https://www.bnnbloomberg.ca/why-are-economists-so-bad-at-forecasting-recessions-1.1250945" },
    { t: "The National: el modelo de Bloomberg da un 100 % de recesión (octubre de 2022)", u: "https://www.thenationalnews.com/business/economy/2022/10/18/us-recession-likely-within-next-12-months-latest-forecasts-show" },
    { t: "S&P Global: la inversión más larga de la curva y su mínimo de −108 pb", u: "https://www.spglobal.com/market-intelligence/en/news-insights/articles/2024/8/key-portion-of-yield-curve-near-inversion-end-with-another-still-deeply-negative-82817957" },
    { t: "Kamakura: 537 sesiones de curva 2–10 años invertida", u: "https://www.kamakuraco.com/?p=13280" }
  ]
};

META.lecciones=LECCIONES;
CURSO.registrar(META);
})();
