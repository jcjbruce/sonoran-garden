import AlmanacLayout, { Section } from "@/components/AlmanacLayout";
import { SeasonIntro, RecipeCard, ArticleBlock, ActivityBlock } from "@/components/ContentBlocks";

const FALL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/DFVUKAcoDGjab34rQHvoTT/season-fall-3RuscjoYkzESmg6xFMkiBJ.webp";
const MONSOON_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/DFVUKAcoDGjab34rQHvoTT/season-monsoon-UnyKj49oPXMMejfrGeiCV5.webp";
const WINTER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/DFVUKAcoDGjab34rQHvoTT/season-winter-fpj96QYnLQ3yciFtg4Qfbd.webp";
const SPRING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/DFVUKAcoDGjab34rQHvoTT/season-spring-e9b6hvSmPFkV5rjTqmVeSp.webp";
const DRYSUMMER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/DFVUKAcoDGjab34rQHvoTT/season-drysummer-AjYHyLGSnqJbfwhfMSQyhG.webp";

const sections: Section[] = [
  { id: "intro", title: "Introduction", icon: "📖" },
  { id: "fall-harvest", title: "Fall Harvest", icon: "🍂" },
  { id: "curanderismo", title: "Curanderismo", icon: "🌿" },
  { id: "winter-rest", title: "Winter Rest", icon: "❄️" },
  { id: "moon-gardening", title: "Moon Gardening", icon: "🌙" },
  { id: "spring-bloom", title: "Spring Bloom", icon: "🌸" },
  { id: "flower-anatomy", title: "Flower Anatomy", icon: "🌻" },
  { id: "dry-summer", title: "Dry Summer", icon: "☀️" },
  { id: "agrivoltaics", title: "Agrivoltaics", icon: "⚡" },
  { id: "monsoon", title: "Monsoon", icon: "⛈️" },
  { id: "cilantro", title: "Love Letter to Cilantro", icon: "💚" },
];

export default function Almanac2023() {
  return (
    <AlmanacLayout
      title="2023–24 Sonoran Desert School Gardener's Almanac"
      subtitle="Featuring moon gardening practices, curanderismo healing traditions, flower anatomy, agrivoltaics, and a love letter to cilantro — all in English and Spanish."
      year="2023–24 Edition"
      heroImage={MONSOON_IMG}
      heroGradient="bg-gradient-to-t from-mesquite/80 via-mesquite/30 to-transparent"
      sections={sections}
    >
      {/* Introduction */}
      <ArticleBlock
        id="intro"
        title="Welcome to the 2023–24 Almanac"
        titleEs="Bienvenidos al Almanaque 2023–24"
        content={`The 2023–24 Sonoran Desert School Gardener's Almanac is a love letter to the Sonoran Desert, its people, and its food heritage. In the pages that follow, you'll see an outpouring of love from big learners to little learners, an embrace of the quiet splendor of place, an abiding sense of kinship with the natural world, and reverence for the power of cultural heritage in everyday life.

Passion in community members activates inspiration in K-12 learners. The almanac is also a handbook celebrating cycles. Cycles of the moon intersect with cycles of Sonoran Desert seasons. Local knowledge holders pass on heritage to learners who themselves become knowledge holders, and the cycle continues. School gardens do much more than grow food. School gardens grow love of place and establish connections between past, present and a promising future.

This almanac was created by the School Garden Workshop (SGW) at the University of Arizona in partnership with Sprouts Healthy Communities Foundation and Tucson Unified School District.`}
        contentEs={`El Almanaque del desierto de Sonora para Jardineros Escolares 2023–24 es una carta de amor al Desierto de Sonora, a su gente y su herencia alimentaria. En las páginas que siguen, verá una efusión de amor desde los más grandes hasta los más pequeños aprendices. Verá un estrecho abrazo del esplendor tranquilo del lugar, un sentido permanente de parentesco con el mundo natural y reverencia por el poder del patrimonio cultural en la vida diaria.

La pasión en los miembros de la comunidad activa la inspiración en los estudiantes de K-12. El almanaque es también un manual que celebra los ciclos. Los ciclos de la luna se cruzan con los ciclos de las estaciones del desierto de Sonora.`}
      />

      <ArticleBlock
        id="land-acknowledgement"
        title="Land Acknowledgement"
        titleEs="Reconocimiento a la Tierra"
        author="Native American Advancement Foundation"
        content={`Our Elders impress upon us the duty of maintaining our himdag, and our inherent rights as O'odham. We remain today because of our ancestors' perseverance, because they protected our traditional ceremonies and traditional ways of life. This includes our relationship with the land. One Elder wisely cautioned, "if we don't return to these ways, our ways, we will be lost..."

As Tohono O'odham, we walk in two worlds. The world of our ancestors, and the world of today. Our goal is to walk through these worlds while holding fast to our himdag (a guiding life principle that all is connected, all is sacred). Himdag certainly applies to humankind as interconnected individuals, but it also extends to all that is, has been, and will be. Himdag is our ancestors, still with us. When applied, this O'odham principle has universal benefits.

All is connected.`}
        contentEs={`Nuestros Mayores nos imponen el deber de mantener nuestro himdag y nuestros derechos inherentes como O'odham. Permanecemos hoy gracias a la perseverancia de nuestros antepasados, porque protegieron nuestras ceremonias y formas de vida tradicionales. Esto incluye nuestra relación con la tierra.

Por ser Tohono O'odham, caminamos por dos mundos. El mundo de nuestros antepasados, y el mundo de hoy. Nuestro objetivo es caminar a través de estos mundos mientras nos aferramos a nuestro himdag (un principio que guía la vida de que todo está conectado, todo es sagrado).

Todo está conectado.`}
      />

      {/* Monsoon */}
      <SeasonIntro
        id="monsoon"
        title="Monsoon Season"
        titleEs="Temporada de Monzón"
        description="For local Indigenous people, the monsoon marks the new year. The monsoon brings a change in wind direction that moves tropical air to our region. From July through September, the monsoon brings up to half of Arizona's yearly rainfall and is a welcome respite from the dry heat of summer. Storms move quickly over the landscape, often flooding roads and filling creeks and rivers. Rains bring a summer wildflower bloom and a summer breeding season for many desert animals."
        descriptionEs="Para los indígenas locales, el monzón marca el año nuevo. El monzón acompaña un cambio en la dirección del viento que mueve aire tropical a nuestra región. Abarcando de julio a septiembre, el monzón provee hasta la mitad de la precipitación anual de Arizona y es un respiro esperado del calor seco del verano."
        image={MONSOON_IMG}
        color="bg-gradient-to-t from-mesquite/70 via-transparent to-transparent"
      />

      <ArticleBlock
        id="squash-blossom"
        title="Squash Blossom"
        titleEs="Flor de Calabaza"
        author="Carlotta Flores"
        content={`Squash produce both male and female flowers, but only the female flowers produce fruit. If you want your squash to grow fruit, harvest only male blossoms, which can be eaten hot or cold.

One easy recipe is a fresh relish of finely chopped squash blossoms, nasturtiums and marigolds. Add this salsa to your favorite dish, such as cheese stuffed quesadillas topped with toasted pepitas.

Squash blossoms are also great for cooking because their petals are similar in strength to grape leaves, making them perfect for stuffing with soft cheese. Stuffed blossoms can be served as a float on a cream soup such as cream of artichoke or a cream of squash soup, instead of bread croutons. For stuffing, 1/4 teaspoon cheese per blossom is ample. Be careful not to overstuff and tear the petals. For frying, use approximately 1 egg as a light batter for every two blossoms. Fry with a little olive oil in a seasoned pan. Squash blossoms can be refrigerated for up to six hours; longer than that, they will start to deteriorate.`}
        contentEs={`Las calabazas producen flores masculinas y femeninas, pero solo las flores femeninas producen frutos. Si desea que su calabaza produzca frutos, cosechar solo flores masculinas, que se pueden comer calientes o frías.

Una receta de flor de calabaza que es fácil y refrescante lleva flores capuchinas y caléndulas finamente picadas. Agregue esta salsa a su plato favorito, como las quesadillas rellenas de queso cubiertas con pepitas tostadas.

Las flores de calabaza también son excelentes para cocinar porque sus pétalos son igual de resistentes que las hojas de parra, lo que las hace perfectas para rellenar con queso blando.`}
      />

      <ArticleBlock
        id="monsoon-poem"
        title="Monsoon Boom"
        titleEs="El Auge del Monzón"
        author="Isaac Silva"
        content={`The hot morning light brings the next day.
It calls to me, my heart hears it.
Asking only for respect, it welcomes me.
Weeklong storms pouring life,
Flash floods dispersing it.
Colossal saguaros blanket the world green.
Heat rising, the sun is always there.
I sip my water in a small canyon painted with pastel oranges, reds, and purples.
A mule deer drinking from a big puddle up ahead.
Locking eyes, we understand its rarity.
The beauty of the day blossoming,
Like the fruit on the nopales.
A horned lizard snacks on the abundance of ants.
Armored with spikes, it stands with pride.
In the distant skies, the evening rains are brewing.
Hours drift on by,
Rolling dark clouds and the orchestra of thunder signal that it's time to go.
Grass tall, I can hear cicadas ringing all around.
I listen closely and a specific sound rattles my eardrum, a western diamondback.
To the west the sun sets,
Lighting the heavens on fire.
Neon oranges and pinks, soft purples and periwinkle blue.
To the east monsoon showers prepare.
Cosmic purples and deep blues surround the heavy gray approaching.
A sky conceived in dreams.
It called to me, my heart heard it.
Asking only for respect, it welcomed me.
Sharing a period of prosperity.`}
        contentEs={`La cálida luz de la mañana brinda un nuevo día.
Me llama, mi corazón lo escucha.
Pido solo respeto y me da la bienvenida.
Las tormentas semanales derraman vida y los chubascos la dispersan.
Los colosales saguaros cubren el mundo de verde.
El calor creciente, el sol siempre presente.
Bebo agua en un pequeño cañón pintado de colores pasteles — naranja, rojo y morado.
Un venado bura bebe de un gran charco más adelante.
Nos detenemos, un momento silencioso.
Nuestras miradas se enlazan y entendemos la rareza del agua.
La hermosura del día floreciendo, como la fruta en los nopales.
Una lagartija cornuda se come las abundantes hormigas.
Armado con púas, se yergue con orgullo.
En los cielos distantes, las lluvias de la tarde se avecinan.
Las horas pasan.
Las nubes oscuras y la orquesta de truenos señalan que es hora de irse.
Un cielo concebido en sueños.
Me llamó, mi corazón lo escuchó.
Pidiendo solo respeto, me dio la bienvenida.
Compartir un período de prosperidad.`}
      />

      {/* Fall Harvest */}
      <SeasonIntro
        id="fall-harvest"
        title="Dry Fall"
        titleEs="Otoño Seco"
        description="Fall in the Sonoran Desert lasts from late September through November and is characterized by warm days and cool nights. Though it is generally a dry season, unseasonable rains sometimes fall in October. If there is enough rain, winter annuals begin to grow and desert plants produce fruit, including barrel cactus, hackberries, and wolfberries, providing food for overwintering birds. Fall is an ideal time to plant cool season crops such as winter greens, root vegetables, cilantro, and fava beans."
        descriptionEs="El otoño en el desierto de Sonora dura desde finales de septiembre hasta noviembre y se caracteriza por días cálidos y noches frescas. Aunque generalmente es una estación seca, a veces caen lluvias fuera de temporada en el mes de octubre. El otoño es un momento ideal para plantar cultivos de invernales, como verduras de invierno, tubérculos, cilantro y habas."
        image={FALL_IMG}
        color="bg-gradient-to-t from-mesquite/70 via-transparent to-transparent"
      />

      <RecipeCard
        id="marigold-tortillas"
        title="Pressed Marigold Corn Tortillas"
        titleEs="Tortillas de Cempasúchil"
        author="Inspired by April Valencia (Masa Memory)"
        intro="A beautiful and delicious way to incorporate garden-grown marigolds into a traditional staple. The marigold petals are pressed into the tortilla dough, creating a stunning visual effect."
        introEs="Una forma hermosa y deliciosa de incorporar cempasúchiles cultivados en el jardín en un alimento tradicional."
        ingredients={[
          "2 cups masa harina",
          "1/2 tsp salt",
          "1 pinch of your favorite spice (cinnamon is great!)",
          "1 1/2 cups warm water",
          "2 marigold flowers — petals only",
          "1 large bowl",
          "1 tortilla press or flat skillet",
          "1 sandwich bag — cut on 2 sides",
        ]}
        ingredientsEs={[
          "2 tazas de masa harina",
          "1/2 cucharadita de sal",
          "1 pizca de su condimento favorito (¡la canela es genial!)",
          "1 1/2 taza de agua tibia",
          "2 flores de caléndula — solo pétalos",
          "1 tazón grande",
          "1 prensa para tortillas o sartén plano",
          "1 bolsa de sándwich — cortada en 2 lados",
        ]}
        steps={[
          "In large bowl, mix masa harina, salt, and pinch of spice.",
          "Add 1 cup water to mixture, then mix with hands.",
          "Slowly add last 1/2 cup water to mixture while gently kneading. The dough ball should not stick to your fingers.",
          "Separate and roll dough into golf ball sized balls, set aside in a bowl and cover with a clean cloth.",
          "Place a dough ball inside the sandwich bag. Center dough on the tortilla press and press gently.",
          "Lift the press and peel back one side of the sandwich bag. Add a few marigold petals, replace the sandwich bag and press again.",
          "Cook over medium/high heat on a flat comal (or skillet) on one side for 10 seconds, then flip and cook on each side for 1 minute or until your tortilla puffs up and has brown spots on both sides.",
          "Eat warm and repeat! Cover tortillas with a clean cloth to keep warm longer.",
        ]}
        stepsEs={[
          "En un tazón grande, mezcle la masa harina, la sal y una pizca de condimento favorito.",
          "Agregue 1 taza de agua a la mezcla, luego mezcle con las manos.",
          "Lentamente, agregue la última taza de agua a la mezcla, simultáneamente, amase suavemente.",
          "Separe y enrolle la masa en bolas del tamaño de una pelota de golf, reserve en un tazón y cubra con un paño limpio.",
          "Coloque una bola de masa dentro de la bolsa de sándwich. Centre la masa en la prensa para tortillas y presione suavemente.",
          "Levante la prensa y retire de la bolsa de sándwich. Agregue algunos pétalos de cempasúchil, vuelva a colocar la bolsa de sándwich y presione nuevamente.",
          "Cocine a fuego medio/alto en un comal plano por un lado durante 10 segundos. Enseguida voltee y cocine por cada lado durante 1 minuto o hasta que la tortilla se infle.",
          "¡Coma caliente y repita! Cubra las tortillas con un paño limpio para mantenerlas calientes por más tiempo.",
        ]}
      />

      <ArticleBlock
        id="curanderismo"
        title="Remedios — Curanderismo Healing Traditions"
        titleEs="Remedios"
        author="Artemisa Aguilar"
        content={`Curanderismo is a traditional healing practice with deep roots in Mexican and Indigenous cultures. Artemisa Aguilar comes from a long line of healers, or curanderas, and shares these traditions passed down from her ancestors.

Eclipses: A person who is pregnant should avoid going outside when there is a lunar or solar eclipse, for the health of the baby. The person can also wear the color red and safety pins in the shape of a cross for further protection.

Herbs:
• Moss Rose (Amor de un Rato) — For fevers, add pork lard to the leaf and apply to the forehead. The leaf will turn black when it has absorbed the fever.
• Lizard Tail (Yerba Mansa) — For infections, burns or wounds, use as an antibiotic. Combine 3 leaves, coriander seeds and 2 cups of boiling water and clean the wound.
• Common Rue (Ruda) — For ear aches, add leaves to cotton, form into a ball and apply to the affected ear. You can also add a little Vicks.

Teas (add to boiling water, steep, and drink):
• Chamomile — Can help with sleep, anxiety and menstrual cramps. Add 1 bag or teaspoon to a cup of boiling water.
• Star Anise — Use for gas and stomach aches. Add 2-3 stars to a cup of boiling water and steep for 5 minutes.
• Mint (Yerba Buena) — Use for stomach aches and digestion. Drink no more than 2 cups per day.
• Thai Basil — Use for bad breath.
• Linden Flower or Siete Azahares — For insomnia and to calm anxiety. Drink before going to sleep.

Other advice: When it's cold outside, never leave the house with wet hair or bare feet, or you risk getting a cold.`}
        contentEs={`El curanderismo es una práctica de sanación tradicional con profundas raíces en las culturas mexicanas e indígenas.

Eclipses: Una persona que está embarazada debe evitar salir a la calle cuando hay un eclipse lunar o solar por la salud del bebé.

Hierbas:
• Amor de un Rato — Para las fiebres, agregar manteca de cerdo a la hoja y aplicar en la frente.
• Yerba Mansa — Para infecciones o heridas, combine las hojas y las semillas de cilantro y limpie la herida.
• Ruda — Para dolores de oído, agregar al algodón con un poco de Vicks y aplicar en la oreja.

Los Tés (añada al agua hirviendo, deje reposar y tome):
• Manzanilla — Puede ayudar con el sueño, ansiedad, y calambres menstruales.
• Anís de Estrella — Se usa por el gaso o dolor de estómago.
• Yerba Buena — Se usa para dolor de estómago y digestión. No más de 2 tazas por día.
• Albahaca Tailandesa — Utilizado para el mal aliento.
• Tila o Siete Azahares — Para calmar la ansiedad o ayudar a dormir.`}
      />

      {/* Winter Rest */}
      <SeasonIntro
        id="winter-rest"
        title="Winter Rains"
        titleEs="Lluvia de Invierno"
        description="Winter happens December through February. Temperatures drop, and gentle rains occur, driving the spring wildflower bloom. Days are mild, and by late February, temperatures warm to spring-like conditions. During winter, desert plants such as mistletoe, netleaf hackberry, and Christmas cholla boast ripening fruit. Desert birds enter mating season. Depending on winter rains, the spring bloom may begin in late February."
        descriptionEs="El invierno dura desde diciembre hasta febrero. Las temperaturas descienden y las suaves lluvias ocurren, lo que hace que florezcan las flores silvestres de primavera. Los días son templados y, a fines de febrero, las temperaturas pueden calentarse hasta alcanzar condiciones similares a las de la primavera."
        image={WINTER_IMG}
        color="bg-gradient-to-t from-mesquite/70 via-transparent to-transparent"
      />

      <ArticleBlock
        id="moon-gardening"
        title="Moon Gardening"
        titleEs="Jardinería Lunar"
        author="Alex Jimenez"
        content={`Indigenous groups across the globe recognize the moon in the movement of water above and below ground, and in the fertility cycles of humans and animals.

New Moon Phase: Soil moisture increases as the moon's light increases. Sow seeds; the moon's light encourages germination. Sow leafy plants and plants with seeds on the outside of the fruit such as broccoli.

1st Quarter Phase: Moonlight increases. Plant energy is focused on leaf growth. Plants sown in the prior quarter have germinated and are putting energy into the leaves. Sow plants with seeds inside of the fruit like squash. Increasing moonlight will encourage germination. Plant annuals.

Full Moon Phase: Full moon draws moisture up into the soil. As the moon wanes, plant root energy moves downward to the roots. This is a good time to plant bulbs and perennials.

3rd Quarter Phase: Moonlight is decreasing; water draws down into the soil along with nutrients inside the plant. Plants are focused on growing roots, tubers and bulbs at this time. This is a great time to fertilize, transplant, prune, or harvest as the plant is focused underground.`}
        contentEs={`Grupos indígenas de todo el mundo reconocen el poder de la luna en el movimiento del agua tanto por encima como por debajo del suelo, y en los ciclos de fertilidad de humanos y animales.

Fase de Luna Nueva: La humedad del suelo es alta y la luz de la luna crece diariamente. Este es un momento óptimo para sembrar semillas ya que la luz de la luna favorece la germinación.

Fase del Primer Cuarto: La luz de la luna continúa creciendo. La energía de la planta se concentra en el crecimiento de las hojas.

Fase de Luna Llena: La luna ha alcanzado su plenitud y ha absorbido humedad en el suelo. A medida que la luna comienza a reducir, siembre hortalizas de raíz.

Fase del Tercer Cuarto: La luz de la luna está disminuyendo; el agua se introduce en el suelo junto con los nutrientes dentro de la planta. Este es un buen momento para fertilizar, trasplantar, podar o cosechar.`}
      />

      <ArticleBlock
        id="longevity-spinach"
        title="Longevity Spinach"
        titleEs="Espinacas de Longevidad"
        author="Sidney Engs"
        content={`You probably know spinach, but have you ever heard of Longevity Spinach? Longevity Spinach is a light green, fast-growing, perennial, tropical, semi-succulent plant native to West Africa.

Together with many others, Sidney Engs is involved in a project years in the making: the Africa in the Americas Garden at Mission Garden. They planted Longevity Spinach because of its ability to grow in the Sonoran Desert climate and its beneficial medicinal qualities for ailments that affect the African American community at a higher rate than others. Longevity Spinach may lower blood sugar and blood pressure, and reduce inflammation.

Sidney's interest in this plant is its wonderful flavor. The plant has a grassy and earthy quality with no bitter aftertaste. She thinks it tastes like the color green, enjoys its medicinal benefits and a connection to a food that people like her have consumed for centuries.

Cuttings: New plants are started by placing cuttings in a jar or vase of water. When roots appear, put the plant in a container of potting soil. When the plant is four to six inches tall, transplant it to your garden.`}
        contentEs={`Es posible que conozca las espinacas, pero ¿alguna vez ha escuchado hablar de las espinacas de longevidad? Es una planta semisuculenta, tropical, perenne, de crecimiento rápido, de color verde claro y originaria de África Occidental.

En colaboración con otros, Sidney Engs está involucrada en un proyecto que lleva varios años en su desarrollo: el Jardín de África de las Américas localizado en el Jardín Misión, en Tucson. Engs y sus compañeros, han sembrado espinacas de longevidad debido a su capacidad para crecer en el clima del desierto de Sonora.

El interés de Sidney en esta planta es por su maravilloso sabor. La planta tiene una calidad herbácea y terrosa sin regusto amargo.`}
      />

      <RecipeCard
        id="fava-bean-stew"
        title="Fava Bean Stew"
        titleEs="Estofado de Habas"
        author="Maria Celis"
        ingredients={[
          "1 lb dried fava beans",
          "1 onion, chopped",
          "3 tbsp olive oil",
          "3 celery stalks, diced",
          "3 carrots, diced",
          "6 cups water",
          "2 vegetable bouillon cubes",
          "3 tbsp tomato paste",
          "Salt and pepper to taste",
          "Toppings: sour cream, fresh cilantro, lime",
        ]}
        ingredientsEs={[
          "1 libra de habas secas",
          "1 cebolla picada",
          "3 cucharadas de aceite de oliva",
          "3 tallos de apio, cortados en cubitos",
          "3 zanahorias, cortadas en cubitos",
          "6 tazas de agua",
          "2 cubos de caldo de verduras",
          "3 cucharadas de pasta de tomate",
          "Sal y pimienta al gusto",
          "Cobertura: crema agria, cilantro fresco, limón verde",
        ]}
        steps={[
          "Soak fava beans in water overnight. Drain and rinse before proceeding and set aside.",
          "Heat olive oil in a large pot over medium heat. Add chopped onion and sauté for about 3 minutes or until translucent. Add celery and carrots and sauté for another 7-10 minutes or until they soften.",
          "Add fava beans to the sautéed vegetables along with 6 cups water, bringing to a boil over high heat.",
          "Add 2 vegetable bouillon cubes and reduce heat to medium-low. Cover and cook, stirring occasionally, until tender — about 50-60 minutes. Add water if it evaporates.",
          "Add 3 tablespoons tomato paste, salt and pepper to taste. Cook about 20 more minutes until flavors meld and the beans are tender and break up into a thick stew.",
          "Serve in a bowl with sour cream, fresh cilantro, and a lime wedge.",
        ]}
        stepsEs={[
          "Remoje las habas en agua durante la noche. Escurra y enjuague antes de continuar y reservar.",
          "Caliente el aceite de oliva en una olla grande a fuego medio. Agregue la cebolla picada y saltee durante unos 3 minutos. Agregue el apio y las zanahorias y saltee durante otros 7-10 minutos.",
          "Agregue las habas a las verduras salteadas junto con 6 tazas de agua y hierva a fuego alto.",
          "Agregue 2 cubos de caldo de verduras y reduzca el fuego a medio-bajo. Tape y cocine, revolviendo ocasionalmente, hasta que estén tiernas, unos 50-60 minutos.",
          "Agregue 3 cucharadas de pasta de tomate, sal y pimienta al gusto. Cocine unos 20 minutos más hasta que los sabores se mezclen.",
          "Sirva en un tazón con crema agria, cilantro fresco y una rodaja de limón.",
        ]}
      />

      <ArticleBlock
        id="cilantro"
        title="A Love Letter to Cilantro"
        titleEs="Una Carta de Amor Para Cilantro"
        author="Selene Leyva"
        content={`Maybe it's the delicacy of your greenery, or the way your bouquet fills my kitchen's vacancy. Maybe it's because you are edible from root to flower or maybe it's your ability to lure useful insects as your superpower. But, maybe it's simply because you beautify everything you touch, and your touch provides my body nourishment.

While I do love you for that, it's the presence of your strong aroma that awakens a collection of memories. You are the Winter day that accompanies my mother's warm soup. You are the ingredient that unites my loved ones in celebrations and sorrows. You are the garnish to my treasured cuisine and the garnish to my soul's wellbeing.

With love,
Selene

Plant Fact: When cilantro starts to bolt (producing flowers and seeds) it quickly loses flavor. But don't worry! The seeds, coriander, can be used as a spice either whole or ground into powder.

How to Grow Cilantro:
1. Plant seeds 1/4 inch deep in well-drained soil, mid-September to late-October, in an area that receives partial sun.
2. Keep the soil moist until the seedlings are established, spaced about 4 inches apart and then provide regular water.
3. Harvest about a 1/4 to a 1/3 of the largest outer leaves for a cut-and-come-again crop!`}
        contentEs={`Probablemente sea la delicadeza de tu verdor, o la forma en que tu ramo llena el vacío de mi cocina. Tal vez sea porque eres comestible desde la raíz hasta la flor. Quizás por tu habilidad para atraer insectos como tu superpoder. Es simplemente porque embelleces todo lo que tocas, y tus caricias nutre mi cuerpo.

Si bien te amo por esas razones, aún más es la presencia de tu fuerte aroma lo que despierta una colección de recuerdos. Eres el día de invierno que acompaña la sopa calentita de mi madre. Eres el ingrediente que une a mis seres queridos en las celebraciones y las penas. Eres el adorno de mi preciada cocina y la guarnición del bienestar de mi alma.

Con Amor,
Selene`}
      />

      {/* Spring Bloom */}
      <SeasonIntro
        id="spring-bloom"
        title="Spring Bloom"
        titleEs="Flor de Primavera"
        description="From late February through April, the Sonoran Desert is alive with spring. Days are sunny and mild and the nights are cool. Early spring is wildflower season. Shrubs bloom too, and are joined in April by legume trees — palo verde, mesquite, acacia — and cacti. The dominant bloom color in April is yellow, called Uam Masad or 'Yellow Month' in Tohono O'odham. Many animals breed in the spring. Warm-weather crops can be planted including chiltepin, beans, corn, cucumbers, tomatoes, eggplants, squash, and melons."
        descriptionEs="Desde finales de febrero hasta abril, el desierto de Sonora está repleto de primavera. Los días son soleados y templados y las noches son frescas. El comienzo de la primavera es la temporada de flores silvestres. El color dominante de la floración en abril es el amarillo, lo que explica el nombre Tohono O'odham de Uam Masad: 'Mes amarillo.'"
        image={SPRING_IMG}
        color="bg-gradient-to-t from-mesquite/70 via-transparent to-transparent"
      />

      <ArticleBlock
        id="flower-anatomy"
        title="Flower Anatomy"
        titleEs="La Anatomía de Una Flor"
        author="Amy Flores"
        content={`Do you know that when a flower blooms, it is calling? It is calling out, yet its voice is silent. We cannot hear it; but it is very loud. It is the voice of color and of scent. Insects can understand this.

The flower is saying, "Come to me, come and visit me."

Flowers are intricate and complicated beings. Flowers need pollinators for reproduction. Flowers come in many different forms and colors, and have specialized parts that each do a job.

The corolla is the crown of petals.

The calyx protects the flower when it is very young. It is made of a ring of green, leaf-like petals that enclose the bud called sepals.

The part of the flower that catches the pollen is the pistil, and it is the seed-bearing, female part. It has a stigma (that catches the pollen) and is often sticky. The stigma is held up by the style, a tube that pollen travels through to get to the ovary (where fertilization takes place and where the seeds form).

The male parts or stamens produce pollen. They have anthers at the top of a long filament. In spring, when the pollen is ripe, the pollen sacs split open and release the fine powder into the air.

Imagine a palo verde tree or desert willow flower calling out to you. Can you observe and identify all of its parts?`}
        contentEs={`¿Sabía usted que cuando una flor brota, está clamando? Está clamando, pero su voz es silenciosa. No podemos escucharla; pero es muy bulliciosa. Es la voz del color y del olor. Los insectos entienden esto.

La flor está diciendo: "Ven a mí, ven a visitarme."

Las flores son seres intrincados, complicados y necesitan polinizadores para reproducirse. Las flores vienen en muchas formas y colores diferentes, y tienen partes especializadas que hacen un trabajo específico.

La corola es la corona de pétalos. El cáliz protege a la flor cuando es muy joven. La parte de la flor que atrapa el polen es el pistilo, y es la parte femenina que lleva la semilla. Las partes masculinas o estambres producen polen.`}
      />

      <RecipeCard
        id="sunflower-scones"
        title="Sunflower Scones"
        titleEs="Panecillos de Girasol"
        author="Adia Jamille"
        intro="Did you know sunflowers are made up of thousands of tiny flowers? Also, different sunflowers taste differently. Mexican sunflowers are great for cooking because they taste like fall spices. All sunflowers are entirely edible plants!"
        introEs="¿Sabía que los girasoles están formados por miles de flores pequeñas? Además, todos los girasoles tienen un sabor diferente. ¡Todos los girasoles son plantas completamente comestibles!"
        ingredients={[
          "1 cup sunflower flour",
          "1 1/2 cups flour",
          "1 tbsp baking powder",
          "3 tbsp sugar",
          "1/2 tsp salt",
          "1 tsp cardamom",
          "1/2 tsp ginger",
          "Zest of one lemon",
          "6 tbsp butter",
          "1 tsp vanilla",
          "1/4 cup sunflower tea, cooled",
          "2 tbsp petals",
          "1/4 cup dried berries (your choice)",
          "Glaze: 2 tbsp lemon juice, 2 tbsp sunflower tea, splash of vanilla, 1/4 tsp cardamom, 1 1/2 cups powdered sugar",
        ]}
        ingredientsEs={[
          "1 taza de harina de girasol",
          "1 1/2 tazas de harina",
          "1 cucharada de polvo de hornear",
          "3 cucharadas de azúcar",
          "1/2 cucharadita de sal",
          "1 cucharadita de cardamomo",
          "1/2 cucharadita de jengibre",
          "Ralladura de un limón",
          "6 cucharadas de mantequilla",
          "1 cucharadita de vainilla",
          "1/4 taza de té de girasol, enfriado",
          "2 cucharadas de pétalos",
          "1/4 taza cerezas (a tu gusto)",
          "Glaseado: 2 cucharadas de jugo de limón, 2 cucharadas de té de girasol, gotas de vainilla, 1/4 cucharadita de cardamomo, 1 1/2 tazas de azúcar en polvo",
        ]}
        steps={[
          "Preheat oven to 400° Fahrenheit.",
          "Combine flours, baking powder, sugar, salt, spices, and zest in a bowl.",
          "Cut in butter with pastry cutter or fork.",
          "Mix in tea and vanilla until just combined.",
          "Knead in fruit and petals until evenly spread throughout dough.",
          "Form into a ball. Flatten until about 9 inches wide.",
          "Cut into 6-8 wedges.",
          "Bake for about 20 minutes or until golden brown.",
          "Meanwhile, mix the glaze. Place all ingredients in a bowl and mix well until combined thoroughly.",
          "When scones are done cooking, allow to cool on a rack for 10 minutes.",
          "Drizzle glaze over scones. Enjoy!",
        ]}
        stepsEs={[
          "Precaliente el horno a 400° Fahrenheit.",
          "Combine las harinas, el polvo de hornear, el azúcar, la sal, los condimentos y la ralladura en un tazón.",
          "Corte la mantequilla con un cortador de masa o un tenedor.",
          "Mezcle el té y la vainilla hasta que se combinen.",
          "Amase la fruta y los pétalos hasta que se distribuyan uniformemente en la masa.",
          "Forme una bola. Aplane hasta aproximadamente 9 pulgadas de ancho.",
          "Cortar en 6-8 gajos.",
          "Hornee durante unos 20 minutos o hasta que estén doradas.",
          "Mientras tanto, mezcle el glaseado. Coloque todos los ingredientes en un tazón y mezcle bien.",
          "Cuando los panecillos terminen de cocinarse, déjelos enfriar en una bandeja durante 10 minutos.",
          "Rocíe el glaseado sobre los panecillos. ¡Disfrute!",
        ]}
      />

      <ArticleBlock
        id="sacred-ceremony"
        title="Planting Is A Sacred Ceremony"
        titleEs="El Sembrar Es Una Ceremonia Sagrada"
        author="Norma Gonzalez"
        content={`Gardening is the pathway to Indigenous ways of knowing, where the concept of interdependence with creation is understood. When students engage in planting, they learn about building relationships with all creation as they interact with the seeds, soil, precious water, the sun and all the little bugs that make the gardens their home. As Indigenous people, our identity is rooted in the relationship we have with the land.

Moreover, for Indigenous people, gardening is a ceremonial event. Ceremony is when we gather in community and collectively engage in building relationships as we focus our intentions; thus, planting is a ceremony.

Our ancestors taught us that the relationship we establish with Mother Earth is reciprocal. Mother Earth loves us unconditionally and provides us with food to nourish our bodies, air to breathe to keep us alive, water to drink, sunshine to feel the warmth and shelter to protect us.

While engaged in the ceremony of planting/gardening, students focus all their intentions of love on the seeds before they place the seeds in the Earth. During a corn planting ceremony, each student takes their turn to plant their corn seeds. Every student waits patiently with their seeds in their hands, focusing their intentions on all the people that they love.

To protect the gardens and all the students' planted intentions, a sikuli, also known as a God's eye, is created and placed in the middle of the garden. The sikuli is created with the colors of the cosmos: red, orange, yellow and blue.

Thank you Mother Earth for all you do for us.`}
        contentEs={`Los jardines son el camino hacia las formas de sabiduría indígenas, donde se entiende el concepto de interdependencia y la creación. Cuando los estudiantes siembran, aprenden a establecer relaciones con toda la creación al interactuar con las semillas, la tierra, la preciada agua, el sol y todos los pequeños bichos que hacen de los jardines su hogar.

Además, para los pueblos indígenas, la jardinería es un evento ceremonial. La ceremonia es cuando nos reunimos en comunidad y participamos colectivamente en la construcción de relaciones mientras enfocamos nuestras intenciones; por lo tanto, plantar es una ceremonia.

Nuestros ancestros nos enseñaron que la relación que establecemos con la Madre Tierra es recíproca. La Madre Tierra nos ama incondicionalmente y nos brinda alimento para nutrir nuestro cuerpo.

Para proteger los jardines y todas las intenciones sembradas de los estudiantes, se crea un sikuli, también conocido como ojo de Dios, y se coloca en el medio del jardín. El sikuli está creado con los colores del cosmos: rojo, naranja, amarillo y azul.

Gracias Madre Tierra por todo lo que haces por nosotros.`}
      />

      {/* Dry Summer */}
      <SeasonIntro
        id="dry-summer"
        title="Dry Summer"
        titleEs="Verano Seco"
        description="The months of May and June in the Sonoran Desert are known as dry summer, and in most years it does not rain. The first day over 100°F usually happens in May, and June boasts many days over 100. Saguaro cacti begin fruiting and ironwood trees come into bloom. Nectar-feeding bats migrate from Mexico. The trills of cicadas signal the beginning of the driest season."
        descriptionEs="Los meses de mayo y junio en el desierto de Sonora se conocen como verano seco y en la mayoría de los años no llueve. Los cactus Saguaro comienzan a dar frutos y los árboles de palo fierro florecen."
        image={DRYSUMMER_IMG}
        color="bg-gradient-to-t from-mesquite/70 via-transparent to-transparent"
      />

      <ArticleBlock
        id="agrivoltaics"
        title="Nurse Trees and Agrivoltaics"
        titleEs="Árboles Nodriza y Agrovoltaicos"
        author="Carly Pierson & Caleb Ortega"
        content={`The Sonoran Desert is a harsh environment for life. To survive, native plants have evolved tactics to help conserve water and reduce sun exposure. Plants tend to huddle under the shade of a larger, heartier "nurse tree." In fact, the iconic saguaro cactus relies on nurse trees for protection in the early years of growth. Nurse trees create a microclimate more hospitable to life by providing shade and acting as a wind barrier. The shade reduces water loss in the understory below and lowers temperature by filtering the incoming sunlight.

Much like the saguaro, adapted to start its life under the shade, people are looking for creative ways to adapt to climate change. Agrivoltaics, or farming under solar panels, is a way to grow food and produce energy, while using less water and the same amount of land.

Just like nurse trees, the microclimate created by a solar panel overstory protects crops from excessive sunlight and hot or cold temperature extremes. This means less water needed for crop irrigation, increased crop production in some plants, and extended growing seasons. In addition, plant transpiration cools the solar cells above, making their energy production more efficient.

How can you use shade to benefit the plants in your garden? Think about planting trees on the west side of your garden for afternoon shade. Potted plants can be moved from sun to shade based on seasons, and brought inside on cold nights.`}
        contentEs={`El desierto de Sonora es un ambiente arduo para la vida. Para sobrevivir, las plantas nativas han desarrollado tácticas para ayudar a conservar el agua y reducir la exposición al sol. Las plantas tienden a acurrucarse bajo la sombra de un "árbol nodriza" más grande y vigoroso.

Al igual que el saguaro, adaptado para comenzar su vida bajo la sombra, la gente busca formas creativas de adaptarse al cambio climático. La agrovoltaica, o la agricultura bajo paneles solares, es una forma de cultivar alimentos y producir energía, utilizando menos agua y la misma cantidad de tierra.

Al igual que los árboles nodriza, el microclima creado por un techo de paneles solares protege los cultivos de la luz solar excesiva y de las temperaturas extremas.`}
      />

      <ActivityBlock
        id="sun-prints"
        title="Sonoran Desert Sun Prints"
        titleEs="Impresiones del Sol del Desierto de Sonora"
        author="Brit Palomarez"
        materials={[
          "Construction paper (darker colors are best)",
          "Plant parts",
          "Clear tape",
        ]}
        materialsEs={[
          "Papel cartoncillo (los colores más oscuros son los mejores)",
          "Partes de plantas",
          "Cinta adhesiva transparente",
        ]}
        steps={[
          "Collect as many different plant parts as you can from your surroundings, being mindful not to disturb any insects or animals in the process.",
          "Assemble the plant parts on top of a piece of construction paper. Find different kinds of plants and even layer them.",
          "Once assembled, tape down the plant parts with clear tape.",
          "Place in a sunny location, on a sidewalk or in a window, for as long as you like and until the desired fading has been achieved.",
          "Carefully remove the tape and plant parts.",
        ]}
        stepsEs={[
          "Recoja variedad de partes de plantas de su medio ambiente, teniendo cuidado de no molestar a ningún insecto o animal.",
          "Ensamble las partes de la planta sobre un pedazo de papel cartoncillo.",
          "Una vez ensambladas, pegue las partes de la planta con cinta adhesiva transparente.",
          "Colóquelo en un lugar soleado, en la banqueta o en una ventana, durante el tiempo que desee.",
          "Retire con cuidado la cinta y las partes de la planta.",
        ]}
        intro="Students can write any special observations they made about the plants they collected on the back of their print or right next to it! The finished print can be used as wrapping paper, an envelope, or frame it as art."
        introEs="¡Los estudiantes pueden escribir cualquier observación especial que hayan hecho sobre las plantas que recolectaron en el reverso de su impresión o justo al lado!"
      />

      <ArticleBlock
        id="vermicomposting"
        title="Vermicomposting"
        titleEs="Vermicompostaje"
        author="Pilar Muller"
        content={`A worm bin is a great way to learn the science and benefits of composting, is more space effective, and is a great biology lesson all in one!

Location: The bin can be carried and stored indoors! If outdoors is preferred, choose a shady, cool spot.

Materials and Instructions: You will need 2 nesting containers. Containers can vary in size from a small tote to a five-gallon bucket or larger. Poke holes for drainage in the bottom of container 1: this bin is where soil, worms, food scraps, and water will be added. Place container 1 inside of container 2. Container 2 will catch drainage — worm tea, yum! Worm tea can be used to water your garden beds for added nutrients.

Maintenance: Make sure worms and the soil are always moist. Collect apple cores, avocado peels, and other nitrogen rich scraps for worm food. Add food scraps as needed. If something does not decompose for 2 weeks, decrease what you add.`}
        contentEs={`Un recipiente de lombrices es una excelente manera para el aprendizaje de las ciencias naturales y los beneficios del compostaje. Además es más eficiente utilizando el espacio y es una buena lección de biología, ¡todo en uno!

Ubicación: El recipiente puede transportarse y almacenarse en el interior. Si prefiere estar al aire libre, elija un lugar sombreado y fresco.

Materiales e instrucciones: Necesitará 2 recipientes anidados. Haz agujeros para el drenaje en el fondo del contenedor 1. Coloque el recipiente 1 dentro del recipiente 2. El recipiente 2 atrapará el escurrimiento: té de gusanos, ¡mmm!

Mantenimiento: Asegúrese de que las lombrices y el suelo estén siempre húmedos. Recolecta corazones de manzana, cáscaras de aguacate y otros desechos ricos en nitrógeno para alimentar a las lombrices.`}
      />

      <RecipeCard
        id="hielitos"
        title="Hielitos de Ciruela"
        titleEs="Hielitos de Ciruela"
        author="Melissa Espindola & Sofia Velasquez"
        intro="Known as bolis in Colombia, charamuscas in El Salvador, geladinho in Brazil, and crème in Senegal, Mexican hielitos are a refreshing dessert made from fruit, flowers, or cookies infused in water or milk and frozen in plastic bags. This low-cost summer treat is often a source of income for women in these countries."
        introEs="En Colombia se conocen como bolis, charamuscas en El Salvador, geladinho en Brasil y crème en Senegal, los hielitos mexicanos son un postre refrescante hecho de frutas, flores o galletas infundidas en agua o leche y congeladas en bolsas de plástico."
        ingredients={[
          "6 cups water for boiling",
          "2 cups ciruelas (pitted prunes)",
          "1 cup sugar",
          "8 tbsp powdered milk",
          "2 cups water to dissolve powdered milk",
          "1 tbsp vanilla extract",
          "1/4 tbsp salt",
          "Small plastic bags",
        ]}
        ingredientsEs={[
          "6 tazas de agua para hervir",
          "2 tazas de ciruelas pasas sin hueso",
          "1 taza de azúcar",
          "8 cucharadas de leche en polvo",
          "2 tazas de agua para disolver la leche en polvo",
          "1 cucharada de extracto de vainilla",
          "1/4 cucharada de sal",
          "Bolsas de plástico pequeñas",
        ]}
        steps={[
          "Boil the ciruelas with water in low heat. Do not strain or drain the water.",
          "Once the prunes are soft, turn off the heat. Then, add the sugar.",
          "Allow the mixture to rest for about 15 minutes.",
          "Blend the mixture until smooth.",
          "In a separate bowl, dissolve the powdered milk in 2 cups of water. Add vanilla and salt.",
          "Combine the prune mixture with the milk mixture.",
          "Pour into small plastic bags and freeze.",
          "Enjoy as a refreshing summer treat!",
        ]}
        stepsEs={[
          "Hierva las ciruelas con agua a fuego lento. No cuele ni escurra el agua.",
          "Una vez que las ciruelas estén blandas, apague el fuego. Luego, agregue el azúcar.",
          "Permita que la mezcla repose durante unos 15 minutos.",
          "Licúe la mezcla hasta que quede suave.",
          "En un tazón aparte, disuelva la leche en polvo en 2 tazas de agua. Agregue la vainilla y la sal.",
          "Combine la mezcla de ciruelas con la mezcla de leche.",
          "Vierta en bolsas de plástico pequeñas y congele.",
          "¡Disfrute como un refrescante postre de verano!",
        ]}
      />

      <ArticleBlock
        id="dried-figs"
        title="Dried Figs"
        titleEs="Higos Secos"
        author="Brit Palomarez & Tomas Angulo"
        content={`1. Look for figs that are large, soft, and free of bird or bug bites.
2. Wash and spread out the figs on mesh drying trays. Put the drying trays in the sunniest and windiest place available. Cover them with cheesecloth or another thin mesh to prevent bugs. Tip! Put each leg of your drying table in water to stop ants from climbing up to taste the figs.
3. Every day, check your figs and turn them over. This is important to ensure all sides of the fruit are evenly dried and do not rot.
4. After a week of being exposed to the full sunshine and wind, the figs will be completely dried and ready to be stored.

Blanch your dried figs for a fudgier fig!
Supplies: 1 gallon water, 3 oz sea salt
Steps: Bring water and sea salt to a boil. Gently add dried figs to the pot of boiling water. Blanch for 15 seconds and then remove with a large strainer. Place blanched figs on drying trays to dry completely for a few hours. They are now ready to enjoy!

Dried figs can be stored for up to 3 months or frozen to make them last!`}
        contentEs={`1. Busque higos que sean grandes, suaves y sin picaduras de pájaros o insectos.
2. Lave y extienda los higos en bandejas forradas de malla para secar los higos. Coloque las bandejas en un lugar soleado y aireado. Cubra la bandeja con una gasa u otra malla delgada para evitar bichos. ¡Consejo! Ponga cada pata de la mesa en agua para evitar que las hormigas suban.
3. Revise los higos y voltee a diario. Esto es importante para garantizar que todos los lados de la fruta se sequen uniformemente y no se pudran.
4. Después de una semana de estar expuestos a pleno sol y aire, los higos estarán completamente secos y listos para ser almacenados.

¡Escaldar los higos secos para obtener un higo más dulce!
¡Los higos secos se pueden almacenar hasta 3 meses o congelar para que duren!`}
      />

      <ArticleBlock
        id="tree-pruning"
        title="Tree Pruning"
        titleEs="Poda de Árboles"
        author="Moses Thompson"
        content={`Most pruning is done for the welfare of people not the welfare of the tree, so prune with caution! In the school garden setting, we prune to clear walkways and prevent eye pokers. Prune so students and teachers can gather in the shade. For the health of the tree, prune broken branches and branches that are crossed and rubbing. Pruning can also be done to keep fruit trees short and harvestable.

Making cuts:
• Prune branches back to the main stem, never cut mid-branch.
• Cut right at the top of the branch collar, at the same angle as the branch collar. The branch collar is the thicker bark where the branch and the stem meet.
• For heavier branches, first cut mid-branch to relieve the weight, so the bark doesn't rip at your collar cut. With the weight removed, make your final cut at the branch collar.`}
        contentEs={`La razón principal de la poda de árboles es para el bienestar de la gente, no de los árboles. ¡Así que pode con cuidado! En los jardines escolares, podamos para despejar el camino y evitar picarnos los ojos. Pode los árboles para que los estudiantes y maestros puedan reunirse en la sombra.

Haciendo El Corte:
• Poda las ramas hasta el tallo principal, nunca corte a media rama.
• Corte arriba del cuello de la rama y al mismo ángulo que el cuello.
• Para ramas más pesadas, primero corte a media rama para aliviar el peso.`}
      />
    </AlmanacLayout>
  );
}
