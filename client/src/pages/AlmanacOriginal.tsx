import AlmanacLayout, { Section } from "@/components/AlmanacLayout";
import { SeasonIntro, RecipeCard, ArticleBlock, ActivityBlock } from "@/components/ContentBlocks";

const SPRING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/DFVUKAcoDGjab34rQHvoTT/season-spring-e9b6hvSmPFkV5rjTqmVeSp.webp";
const FALL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/DFVUKAcoDGjab34rQHvoTT/season-fall-3RuscjoYkzESmg6xFMkiBJ.webp";
const MONSOON_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/DFVUKAcoDGjab34rQHvoTT/season-monsoon-UnyKj49oPXMMejfrGeiCV5.webp";
const WINTER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/DFVUKAcoDGjab34rQHvoTT/season-winter-fpj96QYnLQ3yciFtg4Qfbd.webp";
const DRYSUMMER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/DFVUKAcoDGjab34rQHvoTT/season-drysummer-AjYHyLGSnqJbfwhfMSQyhG.webp";

const sections: Section[] = [
  { id: "intro", title: "Introduction", icon: "📖" },
  { id: "oodham", title: "O'odham Calendar", icon: "🗓️" },
  { id: "monsoon", title: "Monsoon", icon: "⛈️" },
  { id: "fall", title: "Fall", icon: "🍂" },
  { id: "winter", title: "Winter", icon: "❄️" },
  { id: "spring", title: "Spring", icon: "🌸" },
  { id: "dry-summer", title: "Dry Summer", icon: "☀️" },
];

export default function AlmanacOriginal() {
  return (
    <AlmanacLayout
      title="The Sonoran Desert School Gardener's Almanac"
      subtitle="The foundational guide connecting students to the five seasons of the Sonoran Desert through gardening, recipes, and cultural knowledge."
      year="2020–21 Edition"
      heroImage={SPRING_IMG}
      heroGradient="bg-gradient-to-t from-mesquite/80 via-mesquite/30 to-transparent"
      sections={sections}
    >
      {/* Introduction */}
      <ArticleBlock
        id="intro"
        title="Acknowledgment of the Land"
        author="Jesús M. García, Research Associate, Arizona-Sonora Desert Museum"
        content={`The Sonoran Desert covers a large area in the southwest U.S. and northwest México. It is a land of extreme temperatures: high evaporation, low rainfall, and little water. It can be too hot, too cold, too wet, and too dry! These extremes make living here a unique experience.

It is a harsh environment, but these conditions have created one of the most biodiverse landscapes in the world. It has also been home to native people for thousands of years. Humans are an important part of this diversity; inhabitants of the Tucson Basin have cultivated and domesticated crops for at least 4,000 years. If you are currently residing in the Tucson Basin, you are sitting on the ancestral lands of the O'odham people. This acknowledgement calls us to recognize and honor the people who have cared for the land through generations, and learn how to be better stewards of the places we inhabit.

Over the last few centuries, people from around the world have made the Sonoran Desert their home, bringing with them new foods, technologies, and traditions further enriching this complex environment. As we move forward into an uncertain future, let's celebrate this diversity; let's allow our unique natural and cultural heritage to teach us how to live in harmony with our land.`}
      />

      {/* O'odham Calendar */}
      <ArticleBlock
        id="oodham"
        title="O'odham Calendars"
        author="Nacho Littleagle Flores, Tohono O'odham Tribal Member"
        content={`There is not just one traditional O'odham Calendar. Different O'odham communities each have calendars serving different purposes; there are medicinal calendars and ceremonial calendars. The O'odham calendar at Manzo Elementary School is an agricultural calendar, and the nearby O'odham village of Chuk-son was an agricultural community on the Santa Cruz River.

The modern O'odham Calendar uses Gregorian Calendar months, but due to climate change, the months no longer align with the O'odham traditional calendar. O'odham New Year falls during Summer Solstice with the Wine Festival and welcomes in the Monsoon Season. Because of global warming, monsoon rains don't always come. There are shorter winters and longer summers. Historically, harvesting native foods in the fall happened for more than a month. Now it is much shorter.

The traditional O'odham calendar lets the O'odham people know what to do throughout year. If you're a potter you know when to get your clay; if you're a basket weaver you know when to harvest yucca leaves and bear grass. The calendar helps maintain culture, identity, language, and the O'odham creation story.`}
      />

      {/* Monsoon Season */}
      <SeasonIntro
        id="monsoon"
        title="Monsoon Season"
        description="Local indigenous people use the dramatic monsoon to mark the beginning of the year, a season that accompanies a change in wind direction that moves warm tropical air to the Sonoran desert region. Typically spanning July through September, the summer monsoon rains bring up to half of Arizona's yearly rainfall and are a welcome respite from the dry heat of early summer. Brief, intense storms move quickly over the landscape, often flooding roads and filling creeks and rivers. The rains bring a second wildflower bloom and a second breeding season for many desert animals. Butterflies emerge with the rains, and both amphibians and reptiles are active, particularly on rainy evenings. Prickly pear fruit begins to ripen in August. Bats move south following the agave bloom, and bird migrations reach their peak in September."
        image={MONSOON_IMG}
        color="bg-gradient-to-t from-mesquite/70 via-transparent to-transparent"
      />

      <ArticleBlock
        id="water-harvesting"
        title="Water Harvesting"
        author="Amy Flores & Mark Reynolds"
        content={`One not-so-new technique we cherish during the monsoon is rainwater harvesting. Before municipal water was readily available to residents, native people used rainwater and earthworks to water their gardens. The Tohono O'odham people traditionally utilized ak-chin farming, a method that involved directing rainwater down hillsides into irrigation channels and earthen basins for storage, channeling surface runoff into the root zone of trees, and growing crops on flood plains.

There are many factors to consider when building a large sustainable rain garden and the learning can be extremely rich for students. However, rainwater harvesting can be as simple as knowing how much rainwater your area gets and using it wisely. You can start by simply digging a shallow basin around a fruit tree or a swale, or gradual ditch, to divert water to your plants.

There are two types of rainwater harvesting: active and passive. Active rainwater systems actively collect, filter, store and reuse water, such as a cistern or collection tank. Passive harvesting systems allow rainwater to be naturally absorbed into the land using berms and basins.

Through carefully derived mathematical formulas, we can calculate how much water can be collected in a year:
Collection Area (ft²) × Annual Rainfall (ft) × 7.48 (gal/ft³) = Annual Water Budget (gal)

Once you know how much water you can collect in a year (your annual water budget), you need to know the annual water demands of each plant you want to grow. For example, an orange tree in Tucson needs about 7,000 gallons a year.`}
      />

      <RecipeCard
        id="garden-pickles"
        title="Garden Pickles"
        intro="Fermentation is a great way to preserve the flavors grown in your garden and introduce healthy gut bacteria to your digestive system! Lacto-fermented pickles rely on naturally occurring lactobacillus bacteria to ferment, or pickle, the cucumbers."
        ingredients={[
          "3 tablespoons kosher salt (iodine-free)",
          "1 quart water, filtered",
          "1 cup radish wedges",
          "1 cup carrots, coined",
          "1 cup cucumbers, coined",
          "½ cup onion wedges",
          "1 clove garlic, peeled",
          "1 bay leaf",
          "½ teaspoon coriander seeds",
          "¼ teaspoon black peppercorns",
          "1–2 grape leaves (optional, to help keep pickles crisp)",
        ]}
        steps={[
          "Combine the filtered water and salt and stir to dissolve.",
          "Pack the remaining items in a sterilized quart jar. Pour the salt water over the vegetables and leave 1–1½\" of headspace, making sure items are completely submerged.",
          "Cover the jar tightly and let it stand at room temperature. Check pickles daily to release any gasses built up and for best flavor, let rest for 3–6 days.",
          "Transfer pickles to the refrigerator once they've reached their desired flavor. Fermented pickles can last up to three months or sometimes longer if refrigerated.",
        ]}
      />

      <RecipeCard
        id="aguas-frescas"
        title="Aguas Frescas & Infused Waters"
        ingredients={[
          "4 cups water",
          "4 cups chopped fruit (watermelon, cantaloupe, pineapple, papaya, strawberries, oranges, peaches, mangoes, or any combination)",
          "¼ cup herbs (basil or mint)",
          "Ice cubes",
          "Lemon or lime wedges (optional)",
        ]}
        steps={[
          "Puree the fruit in a blender.",
          "You can either serve immediately, or pour the mixture through a fine-mesh strainer, mashing with a whisk or wooden spoon to eliminate any pulp.",
          "Taste and add lemon or lime juice. Serve over ice, with a lemon or lime wedge, if desired.",
        ]}
      />

      {/* Fall Season */}
      <SeasonIntro
        id="fall"
        title="Fall Harvest"
        description="Fall in southern Arizona lasts from late September through November and is characterized by warm days and cool nights. Though it is generally a dry season, unseasonable rains sometimes fall in October, and by November, snow has typically fallen at high elevations. If there is enough rain, winter annuals begin to grow and many desert plants produce fruit, including barrel cactus, hackberries, and wolfberries, providing food for overwintering birds. Reptiles become fairly inactive over this period, and wintering hawks arrive. Fall is an ideal time to turn over warm weather gardens and plant cool season crops such as winter greens, root vegetables, garlic, onions, and broccoli before the first frost arrives."
        image={FALL_IMG}
        color="bg-gradient-to-t from-mesquite/70 via-transparent to-transparent"
      />

      <RecipeCard
        id="solar-oven-seeds"
        title="Solar Oven Seeds"
        ingredients={[
          "2 lbs sunflower seeds, rinsed and free of debris",
          "2 cups kosher salt",
          "1 gallon filtered water",
        ]}
        steps={[
          "Dissolve salt in water to create a brine.",
          "Using a large container, place seeds in brine and soak for 12–24 hours. Place a plate on top to ensure seeds are completely submerged.",
          "Drain and remove the seeds, and lay them out on clean, dry towels to remove excess moisture. Do not rinse or remove the brine.",
          "Evenly cover cookie sheets with the seeds and place in the solar oven at 300 degrees for 30–45 minutes until seeds are crisp. This can also be completed in a conventional oven.",
        ]}
      />

      <ArticleBlock
        id="marigold"
        title="Marigold Galore"
        author="Isabel Kelsey"
        content={`Marigolds are native to Mexico and were first cultivated by the Aztecs to produce flowers that bloom in many brilliant colors of gold, yellow, orange, red and mahogany. They are easy to care for, like full sun, and not too rich soil. A school garden favorite, marigolds persist through the summer heat and even act as pest deterrents in the garden.

Marigolds play a central role in Día de Los Muertos, one of the most important Mexican national holidays, now celebrated throughout Latin America and the US. Día de Los Muertos merges Aztec rituals and Catholicism celebrating the return of the deceased. Although it is an important and solemn event, it is not a time for sadness but rejoicing the return of loved ones. The deceased are honored with food and flowers prepared by their family. Relatives spread the cempasúchil (marigold) around the ofrenda, or altar, to guide souls to the banquet that awaits them.`}
      />

      {/* Winter Season */}
      <SeasonIntro
        id="winter"
        title="Winter Rest"
        description="Winter lasts from December through early February. Temperatures drop, and gentle winter rains occur intermittently, driving the spring wildflower bloom. Days are mild, and by later in February, temperatures may warm to spring-like conditions. Higher elevations experience frequent below-freezing temperatures and snow. During the winter, some desert plants, such as mistletoe, netleaf hackberry, and Christmas cholla boast ripening fruit, which provide food for mammals and wintering birds. Many desert birds enter mating season, including curve-billed thrashers, mockingbirds, cactus wrens and various hummingbirds."
        image={WINTER_IMG}
        color="bg-gradient-to-t from-mesquite/70 via-transparent to-transparent"
      />

      <RecipeCard
        id="pesto"
        title="Pesto"
        ingredients={[
          "2 cups of fragrant greens",
          "3 large cloves of garlic, diced",
          "Zest and juice of 1 lemon",
          "¼ to ⅓ cup extra virgin olive oil",
          "¼ teaspoon fresh ground black pepper",
          "¾ teaspoon sea salt",
          "Optional: ¾ cup parmesan cheese",
          "Optional: ¾ cup nuts (any kind)",
        ]}
        steps={[
          "Add the fresh basil, diced garlic, lemon zest, and parmesan cheese to the bowl of a large food processor. Process at medium speed until it starts to resemble a paste, about 60–90 seconds.",
          "Add half of the fresh lemon juice and ¼ cup olive oil. Process until the mixture is evenly combined. Taste and add more lemon juice based on your personal preference.",
          "Add the salt and pepper. Process, taste, and add more if desired.",
          "Add the pesto to a jar, seal, and refrigerate.",
        ]}
      />

      <ActivityBlock
        id="phenology-mandalas"
        title="Phenology Mandalas"
        intro="The mandala is an ancient symbol used in Buddhist and Hindu tradition that often represents the universe, wholeness, and the interconnectedness of all things. Mandalas are circular designs that have repeating colors, shapes, and patterns radiating from the center. The shape of a mandala lends itself beautifully to the study of life cycles among plants and animals, known as phenology."
        steps={[
          "Find a plant that is displaying multiple phenophases at once. For example, Palmer's mallow has flower buds, open flowers, fruits, and dry seed pods all at the same time much of the year.",
          "Collect a sample or observe each phenophase (a flower bud, an open flower, etc.) and draw. These drawings symbolize each phenophase.",
          "On a blank mandala template or on a paper with concentric circles traced with pencil, draw the phenophase symbols arranged throughout the circles and sections of your mandala, so that it tells the story of a complete life cycle.",
        ]}
      />

      {/* Spring Season */}
      <SeasonIntro
        id="spring"
        title="Spring Bloom"
        description="From late February through April, southern Arizona is alive with spring. Days are sunny and mild and the nights are cool. It rains only rarely, and the warming temperatures mean that the snow at elevation begins to melt, filling creeks and creating short-lived waterfalls and pools. Early spring is wildflower season, with dozens of species bursting into bloom. Shrubs bloom too, and are joined in April by legume trees – palo verde, mesquite, acacia – and cacti, including prickly pear, cholla, and hedgehog. The dominant bloom color in April is yellow, which accounts for the Tohono O'odham name of Uam Masad."
        image={SPRING_IMG}
        color="bg-gradient-to-t from-mesquite/70 via-transparent to-transparent"
      />

      <RecipeCard
        id="lettuce-wraps"
        title="Lettuce Wraps & Salad Dressings"
        intro="Dressings and dips are a great way to dress up all of the greens and root vegetables that come out of the winter garden."
        ingredients={[
          "1 cup olive oil",
          "¼ cup balsamic vinegar",
          "¼ cup brown mustard",
          "1 teaspoon honey",
          "1 teaspoon salt",
        ]}
        steps={[
          "Whisk all ingredients together until emulsified.",
          "Taste and adjust seasoning as desired.",
          "Use as a dressing for lettuce wraps or garden salads.",
        ]}
      />

      <ArticleBlock
        id="soil-compost"
        title="Soil & Compost 101"
        content={`Composting is the process of breaking down organic material by organisms, such as soil microbes or earthworms. Decomposition can be accomplished in various ways, but we commonly recommend a compost pile or worm bin! Worm bins are a good beginner option because they are contained and compost quickly, while compost piles require you to maintain a fine balance between greens (fresh waste materials high in nitrogen), and browns (dead, dry material that provides carbon).

Your compost pile should have about 30 times the amount of browns that it does greens, by weight. You can achieve this by adding dry mulch and alternating layers of organic materials of different-sized particles. Remember to add water to your compost to encourage decomposition!

Carbon + Nitrogen + Water + Air = Decomposition`}
      />

      {/* Dry Summer Season */}
      <SeasonIntro
        id="dry-summer"
        title="Dry Summer"
        description="The months of May and June in southern Arizona are known as dry summer or foresummer. During this time, the area experiences high temperatures and very low humidity. In most years it does not rain. The first day over 100°F usually happens in May, and June boasts many hot days past this threshold. While most desert plants and animals tend to lie low during this time, saguaro cacti begin fruiting and ironwood trees come into bloom. Yuccas may also bloom, while seedpods ripen on legume trees. Nectar-feeding bats migrate from Mexico, and Gila monster eggs hatch. The trills of cicadas are a familiar sound that signals the beginning of the driest season."
        image={DRYSUMMER_IMG}
        color="bg-gradient-to-t from-mesquite/70 via-transparent to-transparent"
      />

      <RecipeCard
        id="calabacitas"
        title="Calabacitas"
        author="David Solorzano, Executive Chef, Penca"
        ingredients={[
          "2–3 tablespoons olive oil",
          "2 yellow squash, large, diced",
          "2 zucchini, large, diced",
          "¼ cup red onion, diced",
          "2 cloves garlic, minced",
          "1 cob corn",
          "¼ cup shredded Oaxaca or Monterey Jack cheese",
          "¼ cup cilantro, chopped",
          "1 lime",
          "Salt to taste",
        ]}
        steps={[
          "Heat olive oil in a medium size pan, and cook squash, zucchini, onion, garlic, and corn kernels until slightly caramelized, about 5–7 minutes.",
          "Season with salt, remove from heat, and fold in Oaxaca or Monterey Jack cheese.",
          "Garnish with cilantro and season with lime juice.",
        ]}
      />

      <ArticleBlock
        id="saguaro-season"
        title="Saguaro Season"
        author="Tanisha Tucker & Maria Francisco, Tohono O'odham Tribal Members"
        content={`When cicadas pierce the air and the summer heat reaches its peak is when the saguaro takes the stage.

For Tucker and Francisco, the harvest is an important cultural link to the past. They hope to have others learn about the harvest and encourage Tohono O'odham youth to understand the need for it to continue. "Being in the process or cycle of the harvest gives you respect," says Francisco. "Trust [the saguaros]; they've been here a long time."`}
      />

      <ArticleBlock
        id="microgreens"
        title="Microgreens & Sprouts"
        content="Microgreens and sprouts are an easy, cost-effective and fast way to grow plants you can eat in your home or classroom, despite the heat outdoors! For the purpose of eating, we highly recommend microgreens, as they are not quite as tricky as sprouts."
      />
    </AlmanacLayout>
  );
}
