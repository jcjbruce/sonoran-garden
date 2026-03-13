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
  { id: "chiltepin", title: "Chiltepin", icon: "🌶️" },
  { id: "seed-saving", title: "Seed Saving", icon: "🌱" },
  { id: "winter-rest", title: "Winter Rest", icon: "❄️" },
  { id: "tepary-beans", title: "Tepary Beans", icon: "🫘" },
  { id: "spring-bloom", title: "Spring Bloom", icon: "🌸" },
  { id: "three-sisters", title: "Three Sisters", icon: "🌽" },
  { id: "dry-summer", title: "Dry Summer", icon: "☀️" },
  { id: "mesquite", title: "Mesquite", icon: "🌳" },
  { id: "monsoon", title: "Monsoon", icon: "⛈️" },
  { id: "saguaro", title: "Saguaro Harvest", icon: "🌵" },
];

export default function Almanac2022() {
  return (
    <AlmanacLayout
      title="2021–22 Sonoran Desert School Gardener's Almanac"
      subtitle="An expanded bilingual edition featuring Indigenous food traditions, rainwater harvesting, seed saving, and deeper connections to Tohono O'odham, Yaqui, and Mexican heritage."
      year="2021–22 Edition"
      heroImage={FALL_IMG}
      heroGradient="bg-gradient-to-t from-mesquite/80 via-mesquite/30 to-transparent"
      sections={sections}
    >
      {/* Introduction */}
      <ArticleBlock
        id="intro"
        title="A Love Letter to the Sonoran Desert"
        titleEs="Una Carta de Amor al Desierto de Sonora"
        content={`The 2021–22 Sonoran Desert School Gardener's Almanac is a love letter to the Sonoran Desert, its people, and its food heritage. In the pages that follow, you will find recipes, stories, and activities for the classroom and garden organized by the five seasons of the Sonoran Desert.

This almanac was created by the School Garden Workshop (SGW) at the University of Arizona in partnership with Sprouts Healthy Communities Foundation and Tucson Unified School District. SGW supports school gardens in the Tucson area, providing resources, training, and support to teachers and students.

The Sonoran Desert is the most biodiverse desert in North America. It is home to the iconic saguaro cactus and a rich tapestry of Indigenous, Mexican, and multicultural food traditions. This almanac celebrates that diversity and invites you to connect with the land through gardening, cooking, and cultural exploration.`}
        contentEs={`El Almanaque del Jardinero Escolar del Desierto de Sonora 2021–22 es una carta de amor al Desierto de Sonora, su gente y su patrimonio alimentario. En las siguientes páginas, encontrará recetas, historias y actividades para el aula y el jardín organizadas por las cinco estaciones del Desierto de Sonora.

Este almanaque fue creado por el Taller de Jardines Escolares (SGW) de la Universidad de Arizona en asociación con la Fundación Sprouts Healthy Communities y el Distrito Escolar Unificado de Tucson.`}
      />

      {/* Fall Harvest */}
      <SeasonIntro
        id="fall-harvest"
        title="Fall Harvest"
        titleEs="Cosecha de Otoño"
        description="Fall in the Sonoran Desert lasts from late September through November. Warm days and cool nights characterize this season. Though generally dry, unseasonable rains sometimes fall in October. Many desert plants produce fruit, including barrel cactus, hackberries, and wolfberries. Fall is an ideal time to plant cool season crops such as winter greens, root vegetables, garlic, onions, and broccoli."
        descriptionEs="El otoño en el Desierto de Sonora dura desde finales de septiembre hasta noviembre. Los días cálidos y las noches frescas caracterizan esta temporada. Muchas plantas del desierto producen frutos, incluyendo cactus de barril, almeces y wolfberries."
        image={FALL_IMG}
        color="bg-gradient-to-t from-mesquite/70 via-transparent to-transparent"
      />

      <ArticleBlock
        id="chiltepin"
        title="Chiltepin: The Mother of All Peppers"
        titleEs="Chiltepín: La Madre de Todos los Chiles"
        author="Jesús García"
        content={`The chiltepin is the only wild chile pepper native to the United States. These tiny, round, red peppers pack an intense heat that fades quickly. They grow wild in the canyons and arroyos of the Sonoran Desert, sheltered under nurse trees like hackberry and desert willow.

For thousands of years, the Tohono O'odham and other Indigenous peoples have harvested wild chiltepines. The peppers are a cornerstone of Sonoran cuisine, used in salsas, cheese, soups, and as a table condiment. Chiltepin bushes are perennial and can live for decades, producing fruit each fall after the monsoon rains.

Growing chiltepines in a school garden connects students to one of the oldest food traditions in North America. They prefer partial shade, well-drained soil, and moderate water — conditions that mimic their natural habitat under nurse trees.`}
        contentEs={`El chiltepín es el único chile silvestre nativo de los Estados Unidos. Estos pequeños pimientos rojos y redondos tienen un calor intenso que se desvanece rápidamente. Crecen silvestres en los cañones y arroyos del Desierto de Sonora, protegidos bajo árboles nodriza.

Durante miles de años, los tohono o'odham y otros pueblos indígenas han cosechado chiltepines silvestres. Los pimientos son una piedra angular de la cocina sonorense.`}
      />

      <RecipeCard
        id="chiltepin-salsa"
        title="Chiltepin Salsa"
        titleEs="Salsa de Chiltepín"
        ingredients={[
          "1 tablespoon dried chiltepines (or to taste)",
          "4 medium tomatoes, roasted",
          "2 cloves garlic, roasted",
          "¼ cup onion, diced",
          "Salt to taste",
          "Water as needed",
        ]}
        ingredientsEs={[
          "1 cucharada de chiltepines secos (o al gusto)",
          "4 tomates medianos, asados",
          "2 dientes de ajo, asados",
          "¼ taza de cebolla, picada",
          "Sal al gusto",
          "Agua según sea necesario",
        ]}
        steps={[
          "Roast tomatoes and garlic under a broiler or on a comal until charred.",
          "Blend roasted tomatoes, garlic, chiltepines, and onion in a blender or molcajete.",
          "Add water to reach desired consistency.",
          "Season with salt to taste.",
        ]}
        stepsEs={[
          "Ase los tomates y el ajo bajo un asador o en un comal hasta que estén carbonizados.",
          "Mezcle los tomates asados, el ajo, los chiltepines y la cebolla en una licuadora o molcajete.",
          "Agregue agua hasta alcanzar la consistencia deseada.",
          "Sazone con sal al gusto.",
        ]}
      />

      <ActivityBlock
        id="seed-saving"
        title="Seed Saving"
        titleEs="Guardar Semillas"
        intro="Seed saving is one of the oldest agricultural practices in the world. By saving seeds from your best plants, you can grow varieties that are adapted to your specific garden conditions. The Sonoran Desert has a rich tradition of seed saving, with Indigenous communities maintaining seed varieties for thousands of years."
        introEs="Guardar semillas es una de las prácticas agrícolas más antiguas del mundo. Al guardar semillas de sus mejores plantas, puede cultivar variedades adaptadas a las condiciones específicas de su jardín."
        steps={[
          "Choose healthy, vigorous plants to save seeds from.",
          "Allow fruits or seed pods to fully mature on the plant before harvesting.",
          "Remove seeds from the fruit or pod and clean them thoroughly.",
          "Dry seeds completely in a cool, shaded area for 1-2 weeks.",
          "Store dried seeds in labeled envelopes or jars in a cool, dry place.",
          "Test germination before planting by sprouting a few seeds on a damp paper towel.",
        ]}
        stepsEs={[
          "Elija plantas saludables y vigorosas para guardar semillas.",
          "Permita que las frutas o vainas de semillas maduren completamente en la planta antes de cosechar.",
          "Retire las semillas de la fruta o vaina y límpielas bien.",
          "Seque las semillas completamente en un área fresca y sombreada durante 1-2 semanas.",
          "Almacene las semillas secas en sobres o frascos etiquetados en un lugar fresco y seco.",
          "Pruebe la germinación antes de plantar brotando algunas semillas en una toalla de papel húmeda.",
        ]}
      />

      {/* Winter Rest */}
      <SeasonIntro
        id="winter-rest"
        title="Winter Rest"
        titleEs="Descanso de Invierno"
        description="Winter in the Sonoran Desert lasts from December through early February. Temperatures drop, and gentle winter rains occur intermittently, driving the spring wildflower bloom. Days are mild, and by later in February, temperatures may warm to spring-like conditions. Some desert plants like mistletoe, netleaf hackberry, and Christmas cholla boast ripening fruit. Many desert birds enter mating season."
        descriptionEs="El invierno en el Desierto de Sonora dura desde diciembre hasta principios de febrero. Las temperaturas bajan y las suaves lluvias de invierno ocurren de forma intermitente, impulsando la floración primaveral de flores silvestres."
        image={WINTER_IMG}
        color="bg-gradient-to-t from-mesquite/70 via-transparent to-transparent"
      />

      <ArticleBlock
        id="tepary-beans"
        title="Tepary Beans: An Ancient Desert Crop"
        titleEs="Frijoles Tepary: Un Cultivo Antiguo del Desierto"
        content={`Tepary beans are one of the most drought-tolerant crops in the world, having been cultivated in the Sonoran Desert for over 4,000 years. These small, nutrient-dense beans come in white, brown, black, and speckled varieties. They were a staple food of the Tohono O'odham and other Indigenous peoples of the region.

Tepary beans are remarkably adapted to desert conditions. They can produce a crop with as little as one or two good rains, making them ideal for dryland farming. They are also highly nutritious, with more protein and fiber than common beans, and have a low glycemic index that may help manage diabetes — a significant health concern in Indigenous communities.

Today, organizations like Native Seeds/SEARCH in Tucson work to preserve and distribute traditional tepary bean varieties, ensuring that this ancient crop continues to nourish desert communities.`}
        contentEs={`Los frijoles tepary son uno de los cultivos más tolerantes a la sequía del mundo, habiendo sido cultivados en el Desierto de Sonora durante más de 4,000 años. Estos pequeños frijoles ricos en nutrientes vienen en variedades blancas, marrones, negras y moteadas.`}
      />

      <RecipeCard
        id="tepary-soup"
        title="Tepary Bean Soup"
        titleEs="Sopa de Frijol Tepary"
        ingredients={[
          "1 cup dried tepary beans, soaked overnight",
          "6 cups water or broth",
          "1 onion, diced",
          "2 cloves garlic, minced",
          "1 teaspoon cumin",
          "Salt and pepper to taste",
          "Optional: diced green chiles, cilantro",
        ]}
        steps={[
          "Soak tepary beans overnight in water. Drain and rinse.",
          "In a large pot, sauté onion and garlic until soft.",
          "Add beans and water or broth. Bring to a boil.",
          "Reduce heat and simmer for 2-3 hours until beans are tender.",
          "Season with cumin, salt, pepper, and optional green chiles.",
          "Serve topped with fresh cilantro.",
        ]}
      />

      {/* Spring Bloom */}
      <SeasonIntro
        id="spring-bloom"
        title="Spring Bloom"
        titleEs="Flor de Primavera"
        description="From late February through April, the Sonoran Desert is alive with spring. Days are sunny and mild and the nights are cool. Early spring is wildflower season. Shrubs bloom too, and are joined in April by legume trees and cacti. The dominant bloom color in April is yellow, called Uam Masad or 'Yellow Month' in Tohono O'odham. Many animals breed in the spring. Warm-weather crops can be planted including peppers, beans, corn, cucumbers, tomatoes, eggplants, squash, and melons."
        descriptionEs="Desde finales de febrero hasta abril, el desierto de Sonora está repleto de primavera. Los días son soleados y templados y las noches son frescas. El comienzo de la primavera es la temporada de flores silvestres."
        image={SPRING_IMG}
        color="bg-gradient-to-t from-mesquite/70 via-transparent to-transparent"
      />

      <ArticleBlock
        id="three-sisters"
        title="The Three Sisters: Corn, Beans, and Squash"
        titleEs="Las Tres Hermanas: Maíz, Frijoles y Calabaza"
        content={`The Three Sisters — corn, beans, and squash — is one of the most well-known examples of companion planting in the Americas. This agricultural technique has been practiced by Indigenous peoples for thousands of years.

The three crops work together in a symbiotic relationship: corn provides a structure for beans to climb; beans fix nitrogen in the soil, fertilizing the corn and squash; and squash spreads along the ground, shading the soil to retain moisture and suppress weeds. Together, they also provide a nutritionally complete diet.

In the Sonoran Desert, the Three Sisters have been grown for millennia. The Tohono O'odham traditionally planted these crops during the monsoon season, using floodwater farming techniques. Today, school gardens across Tucson continue this tradition, teaching students about Indigenous agriculture, ecology, and nutrition.`}
        contentEs={`Las Tres Hermanas — maíz, frijoles y calabaza — es uno de los ejemplos más conocidos de siembra complementaria en las Américas. Esta técnica agrícola ha sido practicada por pueblos indígenas durante miles de años.`}
      />

      {/* Dry Summer */}
      <SeasonIntro
        id="dry-summer"
        title="Dry Summer"
        titleEs="Verano Seco"
        description="The months of May and June in the Sonoran Desert are known as dry summer. The first day over 100°F usually happens in May, and June boasts many days over 100. Saguaro cacti begin fruiting and ironwood trees come into bloom. Nectar-feeding bats migrate from Mexico. Gila monster eggs hatch and several snake species either lay eggs or give birth. The trills of cicadas signal the beginning of the driest season."
        descriptionEs="Los meses de mayo y junio en el desierto de Sonora se conocen como verano seco y en la mayoría de los años no llueve."
        image={DRYSUMMER_IMG}
        color="bg-gradient-to-t from-mesquite/70 via-transparent to-transparent"
      />

      <ArticleBlock
        id="mesquite"
        title="Mesquite: The Tree of Life"
        titleEs="Mezquite: El Árbol de la Vida"
        content={`Mesquite trees are one of the most important plants in the Sonoran Desert ecosystem. For thousands of years, Indigenous peoples have relied on mesquite as a food source, building material, medicine, and fuel. The sweet, protein-rich pods can be ground into flour for making bread, pancakes, and other foods.

Mesquite flour is naturally sweet, gluten-free, and high in protein, fiber, and minerals. It has a rich, molasses-like flavor that pairs well with chocolate, cinnamon, and vanilla. Mesquite pods ripen in late spring and early summer, and can be harvested from the ground after they fall naturally from the tree.

In school gardens, mesquite trees provide valuable shade, fix nitrogen in the soil, and serve as nurse trees for other plants. They also attract pollinators and provide food for wildlife. Teaching students about mesquite connects them to one of the oldest food traditions in the Sonoran Desert.`}
        contentEs={`Los árboles de mezquite son una de las plantas más importantes en el ecosistema del Desierto de Sonora. Durante miles de años, los pueblos indígenas han dependido del mezquite como fuente de alimento, material de construcción, medicina y combustible.`}
      />

      <RecipeCard
        id="mesquite-pancakes"
        title="Mesquite Pancakes"
        titleEs="Panqueques de Mezquite"
        ingredients={[
          "1 cup all-purpose flour",
          "¼ cup mesquite flour",
          "2 tablespoons sugar",
          "1 tablespoon baking powder",
          "½ teaspoon salt",
          "1 egg",
          "1 cup milk",
          "2 tablespoons melted butter",
          "1 teaspoon vanilla extract",
        ]}
        steps={[
          "Mix dry ingredients (flours, sugar, baking powder, salt) in a bowl.",
          "In a separate bowl, whisk egg, milk, melted butter, and vanilla.",
          "Pour wet ingredients into dry and stir until just combined (lumps are okay).",
          "Heat a griddle or pan over medium heat and lightly grease.",
          "Pour ¼ cup batter per pancake. Cook until bubbles form on surface, then flip.",
          "Cook until golden brown on both sides. Serve with honey or prickly pear syrup.",
        ]}
      />

      {/* Monsoon */}
      <SeasonIntro
        id="monsoon"
        title="Monsoon Season"
        titleEs="Temporada de Monzón"
        description="The monsoon typically spans July through September. A change in wind direction moves warm tropical air to the Sonoran Desert region, bringing up to half of Arizona's yearly rainfall. Brief, intense storms move quickly over the landscape, often flooding roads and filling creeks and rivers. The rains bring a second wildflower bloom and a second breeding season for many desert animals. Prickly pear fruit begins to ripen in August."
        descriptionEs="El monzón generalmente abarca de julio a septiembre. Un cambio en la dirección del viento mueve aire tropical cálido a la región del Desierto de Sonora, trayendo hasta la mitad de la lluvia anual de Arizona."
        image={MONSOON_IMG}
        color="bg-gradient-to-t from-mesquite/70 via-transparent to-transparent"
      />

      <ArticleBlock
        id="saguaro"
        title="Saguaro Fruit Harvest"
        titleEs="Cosecha de Fruta de Saguaro"
        author="Tohono O'odham Cultural Tradition"
        content={`The saguaro fruit harvest is one of the most sacred traditions of the Tohono O'odham people. Each June, as the saguaro cacti produce their ruby-red fruit at the tops of their arms, families gather to harvest using long poles made from saguaro ribs called kuipad.

The harvest marks the beginning of the Tohono O'odham New Year and the start of the monsoon season. The fruit is used to make syrup, jam, and a ceremonial wine called nawait, which is consumed during the rain ceremony to bring the monsoon rains.

The saguaro is a keystone species in the Sonoran Desert, providing food and shelter for dozens of animal species. A single saguaro can produce thousands of seeds in its fruit, though only a tiny fraction will survive to become mature cacti. Saguaros grow incredibly slowly — it can take 10 years to reach just a few inches tall, and they don't produce their first flowers until they are 35-65 years old.`}
        contentEs={`La cosecha de fruta de saguaro es una de las tradiciones más sagradas del pueblo Tohono O'odham. Cada junio, cuando los cactus saguaro producen su fruta rojo rubí en la parte superior de sus brazos, las familias se reúnen para cosechar usando largos postes hechos de costillas de saguaro llamados kuipad.`}
      />

      <RecipeCard
        id="prickly-pear"
        title="Prickly Pear Agua Fresca"
        titleEs="Agua Fresca de Tuna"
        ingredients={[
          "6 prickly pear fruits (tunas), peeled",
          "4 cups water",
          "Juice of 2 limes",
          "¼ cup sugar or honey (to taste)",
          "Ice",
        ]}
        steps={[
          "Carefully peel the prickly pear fruits (use tongs and gloves to avoid spines).",
          "Blend the peeled fruit with 2 cups of water until smooth.",
          "Strain through a fine-mesh sieve to remove seeds.",
          "Add remaining water, lime juice, and sweetener. Stir well.",
          "Serve over ice. Garnish with lime slices.",
        ]}
      />
    </AlmanacLayout>
  );
}
