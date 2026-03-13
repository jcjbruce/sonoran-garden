import AlmanacLayout, { Section } from "@/components/AlmanacLayout";
import { SeasonIntro, RecipeCard, ArticleBlock, ActivityBlock } from "@/components/ContentBlocks";

const FALL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/DFVUKAcoDGjab34rQHvoTT/season-fall-3RuscjoYkzESmg6xFMkiBJ.webp";
const MONSOON_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/DFVUKAcoDGjab34rQHvoTT/season-monsoon-UnyKj49oPXMMejfrGeiCV5.webp";
const WINTER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/DFVUKAcoDGjab34rQHvoTT/season-winter-fpj96QYnLQ3yciFtg4Qfbd.webp";
const SPRING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/DFVUKAcoDGjab34rQHvoTT/season-spring-e9b6hvSmPFkV5rjTqmVeSp.webp";
const DRYSUMMER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/DFVUKAcoDGjab34rQHvoTT/season-drysummer-AjYHyLGSnqJbfwhfMSQyhG.webp";

const sections: Section[] = [
  { id: "intro", title: "Introduction", icon: "📖" },
  { id: "monsoon", title: "Monsoon", icon: "⛈️" },
  { id: "dry-fall", title: "Dry Fall", icon: "🍂" },
  { id: "winter-rains", title: "Winter Rains", icon: "❄️" },
  { id: "spring-bloom", title: "Spring Bloom", icon: "🌸" },
  { id: "dry-summer", title: "Dry Summer", icon: "☀️" },
  { id: "seed-banking", title: "Seed Banking", icon: "🌱" },
  { id: "chinese-chorizo", title: "Chinese Chorizo", icon: "🥘" },
  { id: "tamarindo", title: "Tamarindo", icon: "🍬" },
  { id: "12-years", title: "12 Years Later", icon: "🌳" },
];

export default function Almanac2024() {
  return (
    <AlmanacLayout
      title="2024–25 Sonoran Desert School Gardeners' Almanac"
      subtitle="Featuring soil blocks, health benefits of local food, bichicoris, quince recipes, bottle trees, cacti propagation, Chinese chorizo history, and tamarindo — all in English and Spanish."
      year="2024–25 Edition"
      heroImage={DRYSUMMER_IMG}
      heroGradient="bg-gradient-to-t from-mesquite/80 via-mesquite/30 to-transparent"
      sections={sections}
    >
      {/* Introduction */}
      <ArticleBlock
        id="intro"
        title="Welcome to the 2024–25 Almanac"
        titleEs="Bienvenidos al Almanaque 2024–25"
        content={`The Sonoran Desert School Gardeners’ Almanac is a love letter to the desert, its people, and its food heritage. In the pages that follow, you’ll see an outpouring of love from big learners to little learners, an embrace of the splendor of place, an abiding kinship with the natural world, and reverence for the power of cultural heritage in everyday life.

The Almanac is grounded in these 5 enduring understandings:
1. Knowledge and expertise lives and breathes in our communities
2. Plants and people thrive when rooted
3. Reflected cultural identity and lived experience cultivates learning
4. Local knowledge is the best knowledge
5. Attunement to natural cycles grows resilient people and plants

This almanac was created by the School Garden Workshop (SGW) at the University of Arizona in partnership with Sprouts Healthy Communities Foundation.`}
        contentEs={`El Almanaque de Jardineros Escolares del Desierto de Sonora es una carta de amor al desierto, su gente y su herencia alimentaria. En las páginas siguientes, verá una efusión de amor desde los más grandes aprendices hasta los más pequeños.

El Almanaque se basa en estos cinco cimientos duraderos:
1. El conocimiento y la experiencia viven y respiran en nuestras comunidades
2. Las plantas y las personas prosperan cuando toman raíces
3. La identidad cultural reflejada y la experiencia vivida cultivan el aprendizaje
4. El conocimiento local es el mejor conocimiento
5. La sintonía con los ciclos naturales genera personas y plantas resilientes`}
      />

      <ArticleBlock
        id="soil-blocks"
        title="Soil Blocks"
        titleEs="Bloques de Tierra"
        author="Kelly Rushford"
        content={`When you plant a seed, it is safest to grow it in a greenhouse or indoors. Seeds and seedlings are vulnerable, and in the garden there is always danger of bad weather and foragers, such as birds and squirrels.

One way to grow seeds in a controlled environment is to use a soil blocker. Soil blockers can be expensive, but you can make your own from an ice tray or muffin tin.

How to use soil blocks:
1. Use potting soil, or a soil mix of your choice
2. Pack the soil tightly into the compartments of the soil blocker
3. Flip the soil blocker over onto a tray
4. Lift the soil blocker to release your soil blocks
5. Gently plant a seed in the center of each soil block
6. Water soil blocks from the bottom by filling the tray

You can form soil blocks instantly, and they can be arranged in rows and columns called a grid. Grids are helpful for tracking and labeling seeds, as well as for visualizing fractions and percentages. If you arrange blocks in groups of 100, you can easily calculate germination rates.`}
        contentEs={`Cuando se siembra una semilla, lo más seguro es cultivarla en un invernadero o en el interior. Las semillas y las plántulas son vulnerables, y en el jardín siempre existe el peligro del mal tiempo y de los recolectores, como pájaros y ardillas.

Una forma de cultivar semillas en un ambiente controlado es utilizar un bloqueador de tierra. Los bloqueadores de tierra pueden ser costosos, pero pueden hacer sus propios con una bandeja para hielo o un molde para mantecadas.

Puede formar bloques de tierra al instante y están predispuestos en filas y columnas llamadas cuadrículas. Las cuadrículas son útiles para rastrear y etiquetar semillas, así como para visualizar fracciones y porcentajes.`}
      />

      <ArticleBlock
        id="local-food"
        title="The Health Benefits of Local Food"
        titleEs="Los Beneficios para la Salud de la Comida Local"
        author="Amita Nathwani"
        content={`When we choose local food, we get more nutrients and better flavors. Unlike foods that travel a long way to reach us, local crops are picked when they’re rich in vitamins, minerals, and antioxidants.

Local food is in sync with seasons, providing what our bodies need — heartier root veggies for winter warmth and refreshing cucumbers for summer cooling. Eating with the seasons also helps us connect with nature and the land.

Eating locally also reduces our carbon footprint, as food doesn’t have to travel far. When we support local farmers, we strengthen our community’s economy and preserve green spaces.`}
        contentEs={`Cuando elegimos comida local, obtenemos más nutrientes y mejores sabores. A diferencia de los alimentos que viajan un camino muy largo para llegar a nosotros, los cultivos locales se cosechan cuando son ricos en vitaminas, minerales y antioxidantes.

La comida local se sincroniza con las estaciones y proporciona lo que nuestro cuerpo necesita. Comer localmente también reduce nuestra huella de carbono, ya que los alimentos no tienen que viajar lejos. Cuando apoyamos a los agricultores locales, fortalecemos nuestra economía comunitaria y preservamos los espacios verdes.`}
      />

      {/* Monsoon */}
      <SeasonIntro
        id="monsoon"
        title="Monsoon"
        titleEs="Monzón"
        description="For local Indigenous people, the monsoon marks the new year. The monsoon brings a change in wind direction that moves tropical air to our region. From July through September, the monsoon brings up to half of Arizona's yearly rainfall and is a welcome respite from the dry heat of summer. Storms move quickly over the landscape, often flooding roads and filling creeks and rivers. Rains bring a summer wildflower bloom and a summer breeding season for many desert animals. Butterflies emerge with the rains, and both amphibians and reptiles are active on rainy evenings. Prickly pear fruit ripens in August, and bats move south following the agave bloom."
        descriptionEs="Para los indígenas locales, el monzón marca el año nuevo. El monzón trae un cambio en la dirección del viento que mueve aire tropical a nuestra región. De julio a septiembre, el monzón aporta hasta la mitad de las precipitaciones anuales de Arizona y es un bienvenido respiro del calor seco del verano."
        image={MONSOON_IMG}
        color="bg-gradient-to-t from-mesquite/70 via-transparent to-transparent"
      />

      <ArticleBlock
        id="nuu-ndiava"
        title="Nuu Ndiava — The Place Where Guaje Grows"
        titleEs="Nuu Ndiava — El Lugar donde Crece el Guaje"
        author="Jessica Ramirez Perrea"
        content={`My grandmother, Luciana, transmitted her love through her cooking. Her small adobe kitchen in Yojo Yavi, Oaxaca holds the delicious smells that filled the air and the memories of her strong, aged hands as they peeled guaje seeds from their pods to prepare salsa. Like in Oaxaca, the Sonoran Desert is abundant in guaje, the “miracle tree,” connecting us across landscapes and bridging distant lands with shared flavors and traditions.

The guaje tree (leucaena leucocephala) is native to the Americas; it is a tree that thrives in rocky soils with minimal water. It got its nickname because it can be used for many things, like animal feed, reducing erosion, and improving soil conditions. The guaje tree is available year-round and it is fast growing, producing many pods that have medicinal and culinary uses. The seeds and leaves are used in traditional medicine to treat stomach illnesses and rheumatism.`}
        contentEs={`Mi abuela, Luciana, transmitía su amor a través de su cocina. Su pequeña cocina de adobe en Yojo Yavi, Oaxaca, guarda los deliciosos olores que llenaban el aire y los recuerdos de sus manos fuertes y envejecidas mientras pelaba las semillas de guaje de sus vainas para preparar salsa.

El árbol de guaje (leucaena leucocephala) es originario de América, es un árbol que prospera en suelos pobres y rocosos con un mínimo de agua. Al guaje se le apodó el “árbol milagroso”, ya que puede usarse como forraje para animales, reducir la erosión y mejorar las condiciones del suelo.`}
      />

      <RecipeCard
        id="guaje-salsa"
        title="Salsa de Guaje"
        author="Jessica Ramirez Perrea"
        ingredients={[
          "½ cup guaje seeds",
          "4-5 serrano or jalapeño peppers",
          "6 tomatillos",
          "Salt",
          "Water",
        ]}
        ingredientsEs={[
          "½ taza de semillas de guaje",
          "4-5 chiles serranos o jalapeños",
          "6 tomatillos",
          "Sal",
          "Agua",
        ]}
        steps={[
          "Roast the peppers and tomatillos. Remove the roasted skin.",
          "Grind roasted peppers in a molcajete and add salt to your liking.",
          "Add and grind the tomatillos.",
          "Remove guaje seeds from the pods.",
          "Add the guaje seeds to the molcajete and grind lightly. Add water to achieve desired consistency.",
          "Can be served with carne asada, eggs, and tortillas (serves 6-8 people).",
        ]}
        stepsEs={[
          "Ase los chiles y los tomatillos. Retire la piel asada.",
          "Muela los chiles asados en un molcajete y agrega sal a tu gusto.",
          "Agregue y muele los tomatillos.",
          "Retire las semillas de guaje de las vainas.",
          "Agregue las semillas de guaje al molcajete y muela ligeramente. Agregue agua hasta lograr la consistencia deseada.",
          "Se puede servir con carne asada, huevos y tortillas (para 6-8 personas).",
        ]}
      />

      <RecipeCard
        id="chiltepin-salsa"
        title="Nana’s Chiltepin Salsa"
        titleEs="Salsa Chiltepín de Nana"
        author="Marisela Campillo"
        intro="Chiltepin is one of the oldest domesticated chili peppers, with its origins tracing back to Mexico, Central America, and parts of the southwestern United States. Indigenous peoples have cultivated the plant for thousands of years. This is a cherished family recipe. Passed down from my grandmother, this salsa is a testament to our heritage and the flavors of my homeland."
        introEs="El chiltepín es uno de los chiles domesticados más antiguos, y sus orígenes se pueden rastrear en México, América Central y partes del suroeste de los Estados Unidos. Este es una receta familiar muy apreciada."
        ingredients={[
          "1 can of whole peeled tomatoes (or 3-4 boiled tomatoes)",
          "¼ of a white onion",
          "1 handful of cilantro",
          "1 tsp of oregano",
          "2-3 fresh garlic cloves",
          "1-2 tablespoons of salt (can also use garlic salt)",
          "8-10 chiltepines (fewer for mild, more for spicier)",
        ]}
        ingredientsEs={[
          "1 lata de tomates enteros pelados (o 3-4 tomates cocidos)",
          "¼ de cebolla blanca",
          "1 puñado de cilantro",
          "1 cucharadita de orégano",
          "2-3 dientes de ajo frescos",
          "1-2 cucharadas de sal (también puedes usar sal de ajo)",
          "8-10 chiltepínes (menos para suave, más para picante)",
        ]}
        steps={[
          "Combine all ingredients in a food processor.",
          "Blend until desired consistency is reached.",
          "Enjoy with your favorite dishes!",
        ]}
        stepsEs={[
          "Combine todos los ingredientes en un procesador de alimentos.",
          "Licúe hasta lograr la consistencia deseada.",
          "¡Disfruta con tus platos favoritos!",
        ]}
      />

      <RecipeCard
        id="pumpkin-atole"
        title="Pumpkin Atole"
        titleEs="Atole de Calabaza"
        author="Julián Barceló"
        intro="Last year, we planted pumpkin seeds and all of them were eaten by squirrels. We were going to buy pumpkins from the store to make atole, an ancestral drink from Southern Mexico thickened by corn masa, but we got lucky. A student, Charlotte, brought pumpkin seeds home and planted them at her grandma's house, turning her entire yard into a pumpkin patch!"
        introEs="El año pasado sembramos semillas de calabaza y las ardillas se las comieron todas. Íbamos a comprar calabazas en la tienda para hacer atole, una bebida ancestral del sur de México espesada con masa de maíz, pero tuvimos suerte. Una estudiante, Charlotte, trajo semillas de calabaza a casa y las sembró en la casa de su abuela, ¡convirtiendo todo su jardín en un huerto de calabazas!"
        ingredients={[
          "4 cups of water",
          "2 cups of cooked pumpkin",
          "¼ cup of corn masa",
          "2 cinnamon sticks",
          "2 cloves",
          "1 can of evaporated milk",
          "½ cup of brown sugar",
          "½ cup of sugar",
          "Milk to taste",
        ]}
        ingredientsEs={[
          "4 tazas de agua",
          "2 tazas de calabaza cocida",
          "¼ taza de masa de maíz",
          "2 palitos de canela",
          "2 clavos de olor",
          "1 lata de leche evaporada",
          "½ taza de azúcar moreno",
          "½ taza de azúcar",
          "Leche al gusto",
        ]}
        steps={[
          "Boil the water with the cinnamon and cloves.",
          "Mix in the cooked pumpkin, masa, and evaporated milk.",
          "Add the sugar and milk, stirring occasionally, and let boil for 25 minutes.",
          "Add milk depending on your taste.",
          "How to plant pumpkin: Plant 2-3 pumpkin seeds 4 feet apart in April or May to have pumpkins by fall!",
        ]}
        stepsEs={[
          "Hervir el agua con la canela y el clavo.",
          "Agregue la calabaza cocida, la masa y la leche evaporada.",
          "Agrega el azúcar y la leche, revolviendo ocasionalmente, y deja hervir durante 25 minutos.",
          "Agregue leche según tu gusto.",
          "Cómo plantar calabaza: ¡Siembre de 2 a 3 semillas de calabaza a 4 pies de distancia en abril o mayo para tener calabazas en el otoño!",
        ]}
      />

      {/* Dry Fall */}
      <SeasonIntro
        id="dry-fall"
        title="Dry Fall"
        titleEs="Otoño Seco"
        description="Fall in the Sonoran Desert lasts from late September through November and is characterized by warm days and cool nights. Though it is generally a dry season, unseasonable rains sometimes occur in October, and by November, snow has typically fallen at high elevations. If there is enough rain, winter annuals begin to grow and desert plants produce fruit, including barrel cactus, hackberries, and wolfberries, providing food for overwintering birds. Fall is an ideal time to plant cool season crops such as winter greens, root vegetables, cilantro, and fava beans."
        descriptionEs="El otoño en el desierto de Sonora dura desde finales de septiembre hasta noviembre y se caracteriza por días cálidos y noches frescas. El otoño es una época ideal para sembrar cultivos para la estación invernal como hortalizas, tubérculos, cilantro y habas."
        image={FALL_IMG}
        color="bg-gradient-to-t from-mesquite/70 via-transparent to-transparent"
      />

      <ActivityBlock
        id="monarchs"
        title="Monarchs de Muertos"
        titleEs="Monarcas de Muertos"
        author="Elsmarie DeMars"
        intro="The Monarch butterfly migrates 3,000 miles from Canada to the Oyamel fir trees of Michoacan, Mexico, arriving during Dia de Los Muertos. The Indigenous people believe the butterflies carry upon their backs the souls of the departed. Let’s make a small skeleton riding on butterfly wings to honor someone who has passed."
        introEs="La mariposa monarca migra 3000 millas desde Canadá hasta los árboles de abeto de Oyamel en Michoacán, México, y llegan durante el Día de Los Muertos. Los indígenas creen que las mariposas llevan sobre sus espaldas las almas de los difuntos."
        materials={[
          "Two sheets of black construction paper",
          "A traceable wing pattern",
          "White colored pencil",
          "White Crayola Model Magic",
          "Orange tissue paper",
          "Glue stick",
          "Scissors",
          "Permanent marker",
        ]}
        materialsEs={[
          "Dos hojas de cartulina negra",
          "Un patrón de alas rastreable",
          "Lápiz de color blanco",
          "Crayola Blanca Modelo Mágico",
          "Papel de seda naranja",
          "Barra de pegamento",
          "Tijeras",
          "Marcador",
        ]}
        steps={[
          "Fold the construction paper in half. Using your white pencil, trace the wing pattern.",
          "Cut the wing and the negative spaces out with the paper folded so when unfolded, you will have two identically patterned wings. This will become the top wing layer.",
          "Repeat to make a bottom wing layer.",
          "Glue orange tissue paper between the two layers.",
          "Study a skeleton and make a likeness using the Model Magic. Let it dry.",
          "Using a sharpie, add details to the skeleton such as eye sockets, ribs, etc.",
          "Glue the skeleton onto the center of the wings.",
        ]}
        stepsEs={[
          "Doble la cartulina por la mitad. Usando tu lápiz blanco, trace el patrón de las alas.",
          "Corte el ala y los espacios negativos con el papel doblado para que cuando despliegue, tendrá dos alas con diseños idénticos.",
          "Repita para hacer una capa de ala inferior.",
          "Pegue papel de seda naranja entre las dos capas.",
          "Estudie un esqueleto y haga una imagen usando Model Magic. Déjelo secar.",
          "Usando un marcador, agregue detalles al esqueleto como cuencas de los ojos, costillas, etc.",
          "Pegue el esqueleto en el centro de las alas.",
        ]}
      />

      <ArticleBlock
        id="bichicoris"
        title="Bichicoris"
        titleEs="Bichicoris"
        author="Jesús García"
        content={`Bichicoris is an Indigenous way of preserving squash that has been practiced throughout the Sonoran Desert and all over Mexico for thousands of years. The word bichicori comes from the Spanish word bichi, which means “naked” — because the squash is peeled. Bichicoris are made from native squash called “cushaw,” also known in the O’odham language as Ha:l (pronounced hod), and known in Spanish as calabaza arota or sehualca. It sweetens as it dries, and can be served in savory dishes or desserts.

How to make bichicoris:
1. Peel the skin off the squash with a machete, and leave it in the sun for 1-2 days to soften until it is partially dry.
2. Remove the center of the squash and the seeds. You can replant the seeds, or eat them like pepitas!
3. Cut the squash into a spiral shape, creating a long rope about 1 inch thick.
4. Let the rope squash hang outside to dry for 4-5 days.
5. To eat, rehydrate the squash with warm water. Use in soups or stews, or turn into a dessert by adding piloncillo, cloves, anise, and cinnamon.`}
        contentEs={`Bichicoris es una forma indígena de conservar la calabaza que se ha practicado en todo el desierto de Sonora y en todo México durante miles de años. La palabra bichicori viene de la palabra en español bichi, que significa “desnuda” porque la calabaza está pelada. Los bichicoris se elaboran con una calabaza indígena llamada “cushaw”, también conocida en el idioma O’odham como Ha:l (pronunciado hod).

Cómo hacer bichicoris:
1. Quite la piel de la calabaza con un machete y déjala al sol durante 1 o 2 días para que se ablande.
2. Retire el centro de la calabaza y las semillas. ¡Puede volver a sembrar las semillas o comerlas como pepitas!
3. Corte la calabaza en forma de espiral, creando una cuerda larga de aproximadamente 1 pulgada de grosor.
4. Deje que la calabaza cuerda cuelgue afuera para que se seque durante 4 a 5 días.
5. Para comer, rehidratar la calabaza con agua tibia. Úselo en sopas y guisos, o conviértalo en postre agregando piloncillo, clavo, anís y canela.`}
      />

      <ArticleBlock
        id="quince"
        title="Quince"
        titleEs="Membrillo"
        author="Jared Hoyos Acuña"
        content={`Quince fruit comes from a tree and is usually harvested in the Fall between October and November. These trees are adapted to the Sonoran Desert and are found in backyards all over Arizona and Sonora. Quince is part of traditional Sonoran gastronomy.

Quince Hot Sauce: Peel the skin off the quince and split it in half. Remove the seeds, then boil the quince. Place the pieces into a blender and blend with garlic, chiltepin, chile de árbol, and oregano.

Quince Paste (Dulce de Membrillo): Peel the skin off the quince and split it in half. Remove the seeds, then boil the quince. Cut into small pieces and blend with sugar. Place in the oven at 350°F for 15 minutes. Let it cool, and enjoy!`}
        contentEs={`Membrillo es una fruta que viene de un árbol y es cosechada usualmente en el otoño durante Octubre-Noviembre. Estos árboles adaptaron muy bien al Desierto Sonorense y están encontrados en las casas de familias por todo Arizona y Sonora.

Salsa de Membrillo: Pelar el membrillo y lo partes por la mitad. Coces el membrillo y le quitas la semilla. Licuas los pedazos del membrillo junto con ajo, chiltepín, chile de árbol, y orégano.

Dulce de Membrillo: Pelas el membrillo y luego lo coces. Licuas los pedazos del membrillo junto con azúcar. Lo pones en la estufa a 350°F por 15 minutos. ¡Dejas que se enfríe y disfrutas!`}
      />

      {/* Winter Rains */}
      <SeasonIntro
        id="winter-rains"
        title="Winter Rains"
        titleEs="Lluvia de Invierno"
        description="Winter happens December through February. Temperatures drop, and gentle rains occur, driving the spring wildflower bloom. Days are mild, and by late February, temperatures warm to spring-like conditions. During winter, desert plants such as mistletoe, netleaf hackberry, and Christmas cholla boast ripening fruit. Desert birds enter mating season. Depending on winter rains, spring bloom may begin in late February, with Mexican gold poppies, lupines, and owl clover the first species to emerge."
        descriptionEs="El invierno ocurre de diciembre a febrero. Las temperaturas bajan y se producen lluvias suaves que impulsan la floración de las flores silvestres de primavera. Los días son templados y, a finales de febrero, las temperaturas alcanzan condiciones similares a las de la primavera."
        image={WINTER_IMG}
        color="bg-gradient-to-t from-mesquite/70 via-transparent to-transparent"
      />

      <ArticleBlock
        id="penstemon"
        title="Penstemon for All the Abandoned Spaces"
        titleEs="Penstemon para Todos los Espacios Abandonados"
        author="Logan Phillips"
        content={`small city spaces everywhere
wait to wild again / find a
place with winter sun, summer
afternoon shade / east side
of building, under south side
of mesquite, near where
rain pools / scatter seeds
on loosened earth, among
pebbles, oct.-dec. when rain
is forecast / penstemon parryi
& eatonii’s friends: desert
marigold, bluebells, poppies
/ these seeds need to feel
the cold, the wet, the rough
to know: here. this little land
is longing / make a circle
of stones, make art to say
here. this earth is tended, no
stomping, scraping or poison,
please / pull most seedlings
so the ones left have room
/ pull over a hose if no rain
/ slow deep soaks are better
than shallow brief sprays /
after rodeo break watch how
flower stalks shoot up / faster
even than a kid grows / fuchsia
nectar towers / hummingbird
drinking fountains`}
        contentEs={`pequeños espacios urbanos en
todas partes esperan a ser salvaje
de nuevo / encontrar un lugar con
sol de invierno, sombra de tarde de
verano / al lado este del edificio,
debajo del lado sur del mezquite,
cerca de donde se acumula la
lluvia / esparcir semillas en la tierra
suelta, entre guijarros, de octubre
a diciembre. cuando se pronostica
lluvia / penstemon parryi y eatoni
amigos de: caléndula del desierto,
campanillas, amapolas / estas
semillas necesitan sentir el frío, la
humedad, lo áspero para saber: aquí.
esta pequeña tierra está anhelando /
haciendo un círculo de piedras,
hacer arte para decir aquí. esta tierra
está cuidada, no pisotear, raspar
ni envenenar, por favor / saque la
mayoría de las plántulas para que
las que queden tengan espacio /
coloque una manguera si no llueve /
los remojos lentos y profundos son
mejores que los rociados breves y
poco profundos / después de la pausa
del rodeo observe cómo los tallos de
las flores se disparan / más rápido
incluso de lo que crece un niño /
torres de néctar fucsia / bebederos
para colibríes`}
      />

      <RecipeCard
        id="empanadas"
        title="School Garden Empanadas"
        titleEs="Empanadas del Jardín"
        author="Leti and Arlette Sesma"
        intro="School garden empanadas can be sweet, sour, or savory! Consider using pumpkins, figs, or carrots."
        introEs="¡Las empanadas de la huerta escolar pueden ser dulces, ácidas o saladas! Considere usar calabazas, higos o zanahorias."
        ingredients={[
          "Filling: 1 pumpkin (about 4 pounds), 4 cones of piloncillo, 1 tsp ground cloves",
          "Dough: 7 cups flour, 2½ cups shortening, 1½ cups sugar, 3 tbsp baking powder, 3 tbsp vanilla extract, 2 eggs, 1 cup evaporated milk",
        ]}
        ingredientsEs={[
          "Relleno: 1 calabaza (aprox. 4 libras), 4 piloncillo, 1 cucharadita de clavo molido",
          "Masa: 2 libras de harina, ½ kilo de manteca, 1½ tazas de azúcar, 3 cucharadas de polvo de hornear, 3 cucharadas de extracto de vainilla, 2 huevos, 1 taza de leche evaporada",
        ]}
        steps={[
          "Remove pumpkin seeds and slice into quarters. Add pumpkin to a large pot, cover with water, and cook until tender.",
          "Remove skin and place in a saucepan with piloncillo and clove. Cook for about one hour, stirring occasionally until the sugar melts, and cool.",
          "In a large bowl, combine dough ingredients and mix to form dough.",
          "Tear a golf-ball sized piece of dough, roll, and press into a 4-inch disc.",
          "Once the filling is cooled, place a spoonful onto the disc. Fold the dough over filling for a half-circle, and press the edges to seal using your fingers or a fork.",
          "Optional: Brush milk over the empanadas before cooking.",
          "Bake at 350°F for 15 minutes or until golden brown.",
        ]}
        stepsEs={[
          "Retire las semillas de la calabaza y córtalas en cuartos. Pon la calabaza en una olla grande y cubrelos con agua. Hervir hasta que esté tierna.",
          "Retire la piel y colóquela en una cacerola. Añade el piloncillo y el clavo. Cocine durante aproximadamente una hora.",
          "En un tazón grande, combina los ingredientes para formar la masa.",
          "Tome una bola de masa y presione en un disco de 4 pulgadas de diámetro.",
          "Coloca una cucharada del relleno enfriada en el centro del disco de masa. Doblar la masa sobre el relleno para crear una forma de medio círculo.",
          "Opcionalmente, cepille la leche evaporada encima de las empanadas antes de cocinar.",
          "Precaliente el horno a 350°F. Hornee durante 15 minutos o hasta que estén doradas.",
        ]}
      />

      <RecipeCard
        id="colorful-pasta"
        title="Colorful Pasta"
        titleEs="Pastas Coloridas"
        author="Becky Yim"
        intro="So many cultures have noodles as a staple. I LOVE making all sorts of dough! It starts as ingredients, becomes a shaggy mess, and ends up smooth as an earlobe! Green pasta: Spinach, kale, or glean greens. Pink/red pasta: Beets or peppers."
        introEs="Muchas culturas tienen los fideos como alimento básico. ¡ME ENCANTA hacer todo tipo de masa! Pasta verde: espinacas, col rizado o verduras verdes. Pasta rosada/roja: Remolacha o pimiento."
        ingredients={[
          "6 ounces vegetables (more for deeper color)",
          "3 cups all-purpose flour",
          "2 eggs",
          "1 egg yolk",
          "½ teaspoon olive oil",
          "1 teaspoon salt",
        ]}
        ingredientsEs={[
          "6 onzas de vegetales (más para un color más intenso)",
          "3 tazas de harina para uso general",
          "2 huevos",
          "1 yema de huevo",
          "½ cucharadita de aceite de oliva",
          "1 cucharadita de sal",
        ]}
        steps={[
          "Blanch/Puree Vegetables: Bring water to a simmer, submerge the vegetables for 30 seconds, then immediately plunge into ice water. Blend with 2 tablespoons of water until smooth.",
          "In a bowl, mix flour and salt. Make a well in the center.",
          "Add the eggs, oil, and puree to the well. Use a fork to mix flour into the center a bit at a time.",
          "Knead until incorporated. If the dough is dry, add water 1 teaspoon at a time.",
          "Wrap in plastic and let sit for 20 minutes.",
          "Form your pasta into a fun shape!",
          "Cook your pasta in boiling water for 45 seconds, drain, and enjoy with your favorite sauce and toppings.",
        ]}
        stepsEs={[
          "Blanquear/hacer puré de verduras: Hierva el agua a fuego lento, sumerja las verduras durante 30 segundos y luego sumerja inmediatamente en agua helada. Licue con 2 cucharadas de agua.",
          "En un sartén, mezcle la harina y la sal. Haga un hueco en el centro.",
          "Agregue los huevos, el aceite y el puré al pozo. Use un tenedor para mezclar la harina en el centro poco a poco.",
          "Amase hasta que se incorpore. Si la masa está seca, agregue agua 1 cucharadita a la vez.",
          "Envuelva en plástico y deje reposar durante 20 minutos.",
          "¡Dele a tu pasta una forma divertida!",
          "Cocine la pasta en agua hirviendo durante 45 segundos, escúrrala y disfrútela con su salsa y aderezos favoritos.",
        ]}
      />

      {/* Spring Bloom */}
      <SeasonIntro
        id="spring-bloom"
        title="Spring Bloom"
        titleEs="Flor de Primavera"
        description="From late February through April, the Sonoran Desert is alive with spring. Days are sunny and mild and nights are cool. Early spring is wildflower season. Shrubs bloom too, and are joined in April by legume trees — palo verde, mesquite, acacia — and cacti. The dominant bloom color in April is yellow, called Uam Masad or ‘Yellow Month’ in Tohono O’odham. Many animals breed in the spring. Warm-weather crops can be planted, including chiltepin, beans, corn, cucumbers, tomatoes, eggplants, squash, and melons."
        descriptionEs="Desde finales de febrero hasta abril, el desierto de Sonora está lleno de primavera. Los días son soleados y templados y las noches frescas. El color de floración dominante en abril es el amarillo, que en Tohono O’odham se llama Uam Masad — ‘Mes Amarillo.’"
        image={SPRING_IMG}
        color="bg-gradient-to-t from-mesquite/70 via-transparent to-transparent"
      />

      <ArticleBlock
        id="spring-sidewalk"
        title="Spring on the Sidewalk"
        titleEs="Banqueta Primaveral"
        author="Josh Tashoff"
        content={`The last drops of rain
have fallen from Pacific storms,
tumbled onto my rooftop
and soaked into the waiting Earth below
I begin to walk
immersed in the senses
of an emergent spring
The cracked concrete of the sidewalk
turned to a radiant garden
bursting with bermuda grass and pepperweed
I munch a bitter leaf of mustard
interrupting a busy mind
The clouds part
my street is bathed in brilliance
I continue past rainbows of globe mallows
orange, pink, and white flowers
yearning for sunlight
New warmth attracts other travelers
graceful swallowtail butterflies
lumbering carpenter bees
awoken to find a cornucopia of nectar
By now the sun has baked away
the last puddles of winter rain
I hurry to my neighborhood wash
greeted by cold sand
the embrace of shade
I sit under a towering mesquite
thankful for my time
on the sidewalk,
on the street,
in spring.`}
        contentEs={`Las últimas gotas de lluvia
han caído de las tormentas del Pacífico,
Cayó sobre mi tejado
y ha empapado la Tierra que espera debajo
Empiezo a caminar
sumergido en los sentidos
de un manantial emergente
La banqueta de acera agrietada
convertida en un jardín radiante
repleta de bermuda y pepperweed
Mastico una hoja amarga de mostaza
interrumpiendo una mente ocupada
Las nubes se parten
Mi calle está bañada de brillo
Continúo pasando por arcoíris de malvas
flores naranjas, rosas y blancas
anhelando la luz del sol
La nueva calidez atrae a otros viajeros
elegantes, mariposas cola de golondrina,
abejas carpinteras pesadas
Desperté para encontrar una cornucopia de néctar
Ahora el sol se ha quemado
los últimos charcos de lluvia invernal
Me apresuro al arroyo de mi barrio
bienvenido por arena fría
el abrazo de la sombra
Me siento bajo un altísimo mezquite
agradecido por mi tiempo
en la acera,
en la calle,
en primavera.`}
      />

      <ArticleBlock
        id="bottle-trees"
        title="Bottle Trees"
        titleEs="Árboles de Botella"
        author="Stephanie Daniel"
        content={`The bottle tree has a rich history in Black culture and holds spiritual and aesthetic significance. It originated in the 9th century in the Congo, Central Africa. In the 17th century, enslaved Africans brought the bottle tree tradition to America, where vibrant blue bottles were hung upside down on trees as a talisman to ward off evil spirits.

Legend says that the spirits are attracted to the colorful bottles in the sun and become dazzled by them. The color of the bottle on the tree represents a long and proud tradition of trapping and keeping evil things, including the blues, away.

As you stroll through Mission Garden, you will come across a bottle tree in the Africa in the Americas Garden, designed and built by Diane Hopkins out of bottles found during the garden’s redevelopment.

Make Your Own Bottle Tree:
Materials: A rock, scissors, wire, colorful beads.
Steps:
1. Cut ten pieces of wire one foot long.
2. Wrap the wires around the rock, and twist them together to form a trunk.
3. Bend the wire into branch shapes.
4. String colorful beads onto each branch, and fold the ends of the wire to prevent the beads from falling off.`}
        contentEs={`El árbol botella tiene una rica historia en la cultura Africana y tiene un significado espiritual y estético. Se originó en el siglo IX en el Congo, África Central. En el siglo XVII, los africanos esclavizados trajeron la tradición del árbol de botellas a Estados Unidos, donde se colgaban botellas de color azul vibrante boca abajo en los árboles como talismán para protegerse de los espíritus malignos.

La leyenda dice que los espíritus se sienten atraídos por las botellas de colores al sol y quedan deslumbrados por ellas.`}
      />

      <ArticleBlock
        id="propagating"
        title="Propagating Cacti and Agave"
        titleEs="Propagando Cactus y Agave"
        author="Adela Antoinette"
        content={`As a plant lover, I find that propagation — the process of growing a new plant from a seed or a cutting — is a very fun and rewarding challenge. It is easy to propagate cacti and agave, and you can fill your garden with new plants for free!

How to propagate:
1. Cut a piece of cactus or agave from a healthy plant. Make sure the cutting is at least 4 inches long.
2. Let the cutting dry for a few days until the cut end is calloused.
3. Plant the cutting in a pot with well-draining soil.
4. Water the cutting once a week, or when the soil is dry to the touch.
5. Place the pot in a sunny spot.
6. Be patient! It can take a few months for the cutting to root and start growing.`}
        contentEs={`Como amante de las plantas, encuentro que la propagación — el proceso de cultivar una nueva planta a partir de una semilla o un esqueje — es un desafío muy divertido y gratificante. Es fácil propagar cactus y agave, y puedes llenar tu jardín con plantas nuevas ¡gratis!

Cómo propagar:
1. Corte un trozo de cactus o agave de una planta sana. Asegúrese de que el esqueje tenga al menos 4 pulgadas de largo.
2. Deje que el esqueje se seque durante unos días hasta que el extremo cortado esté calloso.
3. Plante el esqueje en una maceta con buen drenaje.
4. Riegue el esqueje una vez por semana o cuando la tierra esté seca al tacto.
5. Coloque la maceta en un lugar soleado.
6. ¡Ten paciencia! El esqueje puede tardar unos meses en echar raíces.`}
      />

      {/* Dry Summer */}
      <SeasonIntro
        id="dry-summer"
        title="Dry Summer"
        titleEs="Verano Seco"
        description="Summer in the Sonoran Desert is hot and dry. From May through June, there is little to no rain, and temperatures can exceed 100°F. Many plants go dormant, and animals are less active, seeking refuge from the heat. Saguaro cacti bloom in May, and their fruit ripens in June. Mesquite and palo verde trees also produce fruit in the summer. Summer is a time to prepare for the monsoon season."
        descriptionEs="El verano en el desierto de Sonora es cálido y seco. De mayo a junio, llueve poco o nada y las temperaturas pueden superar los 100°F. Los cactus saguaro florecen en mayo y sus frutos maduran en junio. El verano es una época para prepararse para la temporada de monzones."
        image={DRYSUMMER_IMG}
        color="bg-gradient-to-t from-mesquite/70 via-transparent to-transparent"
      />

      <ArticleBlock
        id="seed-banking"
        title="Seed Banking"
        titleEs="Banco de Semillas"
        author="Elizabeth Rivera"
        content={`In my family, we save seeds from the best of our harvest to plant next year. We save seeds from the chiles with the most flavor, the tomatoes that are the juiciest, and the beans that are the most tender. By saving seeds, we are able to create varieties of plants that are perfectly suited to our climate and our taste. We are also able to save money and share seeds with our friends and neighbors.

How to save seeds:
1. Choose a healthy plant that has produced a good crop.
2. Let the fruit or vegetable ripen on the plant.
3. Remove the seeds from the fruit or vegetable.
4. Clean the seeds and let them dry completely.
5. Store the seeds in a cool, dark place.`}
        contentEs={`En mi familia, guardamos semillas de lo mejor de nuestra cosecha para plantar el próximo año. Guardamos semillas de los chiles con más sabor, los tomates más jugosos y los frijoles que son más tiernos. Al guardar semillas, podemos crear variedades de plantas que se adaptan a nuestro clima y a nuestro gusto. También podemos ahorrar dinero y compartir semillas con nuestros amigos y vecinos.

Cómo guardar semillas:
1. Elija una planta sana que haya producido una buena cosecha.
2. Deje que la fruta o verdura madure en la planta.
3. Retire las semillas de la fruta o verdura.
4. Limpie las semillas y déjelas secar completamente.
5. Guarde las semillas en un lugar fresco y oscuro.`}
      />

      <ArticleBlock
        id="chinese-chorizo"
        title="Journey Through Time with Chinese Chorizo"
        titleEs="Un Viaje a Través del Tiempo con el Chorizo Chino"
        author="Feng-Feng Yeh"
        content={`Travel back to 1880 when Tucson was a new city. Many Chinese immigrants, building the Southern Pacific Railroad, stayed to form a community with Mexican and Indigenous neighbors. They built over 100 Chinese grocery stores by 1940 that provided daily food! A favorite was Chinese chorizo. Meat scraps, Mexican spices, and chiles, created a meaningful dish for the community. It represented community care in the barrio, especially during difficult times.

Big stores started replacing the Chinese grocery stores around 1970 and Chinese chorizo became just a memory.

Today, we honor the past with the Chinese Chorizo Festival, making Chinese chorizo to strengthen our bonds and build a shared future.

Create a map with your favorite food or school garden plant, tracing its memory to the past, present, and future!`}
        contentEs={`Viaje al año 1880, cuando Tucson era una ciudad nueva. Muchos inmigrantes chinos, que construyeron el Ferrocarril del Pacífico Sur, se quedaron para formar una comunidad con vecinos mexicanos e indígenas. ¡Construyeron más de 100 tiendas de comestibles chinas en 1940 que proporcionaban comida diaria! Un favorito era el chorizo chino.

Las grandes tiendas comenzaron a reemplazar a las tiendas de comestibles chinas alrededor de 1970 y el chorizo chino se convirtió en solo un recuerdo.

Hoy honramos el pasado con el Festival del Chorizo Chino, elaborando chorizo chino para fortalecer nuestros vínculos y construir un futuro compartido.`}
      />

      <ArticleBlock
        id="tamarindo"
        title="Tamarindo"
        titleEs="Tamarindo"
        author="Alana Solis"
        content={`Tamarindo is a sweet-sour fruit used in foods, beverages, and traditional medicines. But to our family, it is much more than that. My fondest memory is watching my Tia Licha make chamoy during the summers of my childhood. I stood in the kitchen in the house on our small rancho in Hermosillo and I watched my Tia peel the shell and deseed the Tamarindo. She would then soak the Tamarindo in warm water to soften it. Next would come the mashing to turn the Tamarindo bean into a paste. I admired her as she brought out the olla, her hands covered in chamoy while she heated it, and added the Tamarindo. Once the Tamarindo was simmering, she would add two kinds of sugars and ground-up chili spices. My Tia’s chamoy was the perfect blend of sweetness, acidity, and spice.`}
        contentEs={`El tamarindo es una fruta agridulce que se utiliza en alimentos, bebidas y medicinas tradicionales. Pero para nuestra familia es mucho más que eso. Mi recuerdo más preciado es ver a mi Tía Licha hacer chamoy durante los veranos de mi infancia. Me paraba en la cocina de la casa de nuestro pequeño rancho en Hermosillo y veía a mi tía pelar la cáscara y quitarle las semillas al tamarindo. Luego remojaba el tamarindo en agua tibia para ablandarlo. Después seguía el machacado para convertir el frijol de tamarindo en una pasta. La admiraba mientras sacaba la olla, con las manos cubiertas de chamoy mientras la calentaba, y le agregaba el tamarindo. El chamoy de mi tía era la combinación perfecta de dulzura, acidez y especias.`}
      />

      <ArticleBlock
        id="12-years"
        title="12 Years Later…"
        titleEs="12 Años Después…"
        author="Araceli Fuentes & Javier Carlos"
        content={`Since the Manzo Elementary school garden broke ground in 2009, students who participated in its early days are now returning to the garden as University of Arizona School Garden Workshop interns. One of these students, Araceli Fuentes, interviewed a current Manzo student, Javier, about the transformative power of school gardens.

“Growing up at Manzo since preschool, I have always loved the garden and being able to be in nature. It has made me feel so relieved and distracted from what goes on around me. I love to help kids who are just like me, or new to the garden, making sure they know how to take care of it. Being in this school has made me want to grow up to be a gardener and work at a school because it helps me… it helps us. I love Manzo and coming to school every day.” — Javier

From young to old,
From then to now,
We are nature, and nature is us.
Coming together to save ourselves,
And save what feeds us.
Never lose connection to nature.
That is losing connection to yourself.`}
        contentEs={`Desde que se inició la construcción del jardín en la escuela primaria Manzo en 2009, los estudiantes que participaron en sus inicios ahora están regresando al jardín como internos del Taller de Jardines Escolares de la Universidad de Arizona.

“Al crecer en Manzo desde preescolar, siempre me ha encantado el jardín y poder estar en la naturaleza. Me ha hecho sentir muy aliviado y distraído de lo que sucede a mi alrededor. Me encanta ayudar a niños como yo o nuevos en el jardín, asegurándose que sepan cómo cuidarlo. Estar en esta escuela me ha hecho querer ser jardinero y trabajar en una escuela porque me ayuda… nos ayuda. Amo a Manzo y amo venir a la escuela todos los días.” — Javier

De joven a viejo,
Desde entonces hasta ahora,
Somos naturaleza y la naturaleza somos nosotros.
Uniéndonos para salvarnos a nosotros mismos,
Y salvar lo que nos alimenta.
Nunca pierdas la conexión con la naturaleza.
Eso es perder la conexión contigo mismo.`}
      />
    </AlmanacLayout>
  );
}
