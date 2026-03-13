import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

export function SeasonIntro({
  id,
  title,
  titleEs,
  description,
  descriptionEs,
  image,
  color,
}: {
  id: string;
  title: string;
  titleEs?: string;
  description: string;
  descriptionEs?: string;
  image: string;
  color: string;
}) {
  return (
    <motion.section id={id} className="scroll-mt-32 mb-12" {...fadeUp}>
      <div className="relative rounded-2xl overflow-hidden">
        <img src={image} alt={title} className="w-full h-48 md:h-64 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className={`absolute inset-0 ${color} flex items-end`}>
          <div className="p-6 md:p-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-1" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6), 0 1px 3px rgba(0,0,0,0.4)' }}>
              {title}
            </h2>
            {titleEs && (
              <p className="font-handwritten text-white/80 text-lg" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>{titleEs}</p>
            )}
          </div>
        </div>
      </div>
      <div className="mt-6 space-y-4">
        <p className="text-foreground/90 leading-relaxed text-base">{description}</p>
        {descriptionEs && (
          <details className="group">
            <summary className="cursor-pointer text-sm font-medium text-terracotta hover:text-terracotta/80 transition-colors">
              Ver en Español
            </summary>
            <p className="mt-2 text-foreground/70 leading-relaxed text-sm italic">{descriptionEs}</p>
          </details>
        )}
      </div>
    </motion.section>
  );
}

export function RecipeCard({
  id,
  title,
  titleEs,
  author,
  intro,
  introEs,
  ingredients,
  ingredientsEs,
  steps,
  stepsEs,
}: {
  id: string;
  title: string;
  titleEs?: string;
  author?: string;
  intro?: string;
  introEs?: string;
  ingredients: string[];
  ingredientsEs?: string[];
  steps: string[];
  stepsEs?: string[];
}) {
  return (
    <motion.div id={id} className="scroll-mt-32 recipe-card p-6 md:p-8 mb-8" {...fadeUp}>
      <div className="mb-4">
        <h3 className="font-display text-xl md:text-2xl font-bold text-mesquite">{title}</h3>
        {titleEs && <p className="font-handwritten text-terracotta/70 text-base">{titleEs}</p>}
        {author && <p className="text-sm text-muted-foreground mt-1">By {author}</p>}
      </div>
      {intro && <p className="text-foreground/80 leading-relaxed mb-4 text-sm">{intro}</p>}
      {introEs && (
        <details className="mb-4 group">
          <summary className="cursor-pointer text-xs font-medium text-terracotta">Ver en Español</summary>
          <p className="mt-1 text-foreground/60 text-sm italic">{introEs}</p>
        </details>
      )}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-display font-semibold text-sm uppercase tracking-wide text-saguaro mb-3">
            Ingredients
          </h4>
          <ul className="space-y-1.5">
            {ingredients.map((item, i) => (
              <li key={i} className="text-sm text-foreground/80 flex items-start gap-2">
                <span className="text-terracotta mt-1">•</span>
                {item}
              </li>
            ))}
          </ul>
          {ingredientsEs && ingredientsEs.length > 0 && (
            <details className="mt-3 group">
              <summary className="cursor-pointer text-xs font-medium text-terracotta">Ingredientes en Español</summary>
              <ul className="mt-2 space-y-1">
                {ingredientsEs.map((item, i) => (
                  <li key={i} className="text-xs text-foreground/60 italic flex items-start gap-2">
                    <span className="text-terracotta/50 mt-0.5">•</span>{item}
                  </li>
                ))}
              </ul>
            </details>
          )}
        </div>
        <div>
          <h4 className="font-display font-semibold text-sm uppercase tracking-wide text-saguaro mb-3">
            Steps
          </h4>
          <ol className="space-y-2">
            {steps.map((step, i) => (
              <li key={i} className="text-sm text-foreground/80 flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-terracotta/10 text-terracotta text-xs font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          {stepsEs && stepsEs.length > 0 && (
            <details className="mt-3 group">
              <summary className="cursor-pointer text-xs font-medium text-terracotta">Pasos en Español</summary>
              <ol className="mt-2 space-y-1.5">
                {stepsEs.map((step, i) => (
                  <li key={i} className="text-xs text-foreground/60 italic flex items-start gap-2">
                    <span className="text-terracotta/50 font-bold">{i + 1}.</span>{step}
                  </li>
                ))}
              </ol>
            </details>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function ArticleBlock({
  id,
  title,
  titleEs,
  author,
  content,
  contentEs,
}: {
  id: string;
  title: string;
  titleEs?: string;
  author?: string;
  content: string;
  contentEs?: string;
}) {
  return (
    <motion.div id={id} className="scroll-mt-32 mb-8 p-6 md:p-8 bg-card rounded-2xl border border-border" {...fadeUp}>
      <h3 className="font-display text-xl md:text-2xl font-bold text-mesquite mb-1">{title}</h3>
      {titleEs && <p className="font-handwritten text-terracotta/70 text-base mb-2">{titleEs}</p>}
      {author && <p className="text-sm text-muted-foreground mb-4">By {author}</p>}
      <div className="prose prose-sm max-w-none text-foreground/80 leading-relaxed whitespace-pre-line">
        {content}
      </div>
      {contentEs && (
        <details className="mt-4 group">
          <summary className="cursor-pointer text-sm font-medium text-terracotta">Ver en Español</summary>
          <div className="mt-2 text-foreground/60 text-sm italic leading-relaxed whitespace-pre-line">
            {contentEs}
          </div>
        </details>
      )}
    </motion.div>
  );
}

export function ActivityBlock({
  id,
  title,
  titleEs,
  author,
  materials,
  materialsEs,
  steps,
  stepsEs,
  intro,
  introEs,
}: {
  id: string;
  title: string;
  titleEs?: string;
  author?: string;
  materials?: string[];
  materialsEs?: string[];
  steps: string[];
  stepsEs?: string[];
  intro?: string;
  introEs?: string;
}) {
  return (
    <motion.div id={id} className="scroll-mt-32 mb-8 p-6 md:p-8 bg-saguaro/5 rounded-2xl border border-saguaro/20" {...fadeUp}>
      <div className="inline-block bg-saguaro/10 text-saguaro text-xs font-semibold px-2.5 py-1 rounded-full mb-3">
        Activity
      </div>
      <h3 className="font-display text-xl md:text-2xl font-bold text-mesquite mb-1">{title}</h3>
      {titleEs && <p className="font-handwritten text-saguaro/70 text-base mb-2">{titleEs}</p>}
      {author && <p className="text-sm text-muted-foreground mb-4">By {author}</p>}
      {intro && <p className="text-sm text-foreground/80 leading-relaxed mb-4">{intro}</p>}
      {introEs && (
        <details className="mb-4 group">
          <summary className="cursor-pointer text-xs font-medium text-terracotta">Ver en Español</summary>
          <p className="mt-1 text-foreground/60 text-sm italic">{introEs}</p>
        </details>
      )}
      {materials && materials.length > 0 && (
        <div className="mb-4">
          <h4 className="font-display font-semibold text-sm uppercase tracking-wide text-saguaro mb-2">Materials</h4>
          <ul className="space-y-1">
            {materials.map((m, i) => (
              <li key={i} className="text-sm text-foreground/80 flex items-start gap-2">
                <span className="text-saguaro">•</span>{m}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div>
        <h4 className="font-display font-semibold text-sm uppercase tracking-wide text-saguaro mb-2">Steps</h4>
        <ol className="space-y-2">
          {steps.map((step, i) => (
            <li key={i} className="text-sm text-foreground/80 flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-saguaro/10 text-saguaro text-xs font-bold flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </motion.div>
  );
}

export function PlantingGuide({
  id,
  title,
  items,
}: {
  id: string;
  title: string;
  items: { plant: string; when: string; notes: string }[];
}) {
  return (
    <motion.div id={id} className="scroll-mt-32 mb-8" {...fadeUp}>
      <h3 className="font-display text-xl font-bold text-mesquite mb-4">{title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 pr-4 font-display font-semibold text-saguaro">Plant</th>
              <th className="text-left py-2 pr-4 font-display font-semibold text-saguaro">When</th>
              <th className="text-left py-2 font-display font-semibold text-saguaro">Notes</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => (
              <tr key={i} className="border-b border-border/50">
                <td className="py-2 pr-4 font-medium">{item.plant}</td>
                <td className="py-2 pr-4 text-foreground/70">{item.when}</td>
                <td className="py-2 text-foreground/70">{item.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

export function IllustrationKey({
  id,
  gardenItems,
  desertItems,
  animals,
}: {
  id?: string;
  gardenItems: string[];
  desertItems: string[];
  animals: string[];
}) {
  return (
    <motion.div id={id} className="scroll-mt-32 mb-6 p-4 bg-desert-gold/10 rounded-xl border border-desert-gold/20" {...fadeUp}>
      <h4 className="font-display font-semibold text-sm text-desert-gold mb-2">Illustration Key</h4>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-foreground/70">
        <div>
          <span className="font-semibold text-saguaro block mb-1">In Your Garden:</span>
          {gardenItems.map((item, i) => <span key={i} className="block">{i + 1}. {item}</span>)}
        </div>
        <div>
          <span className="font-semibold text-saguaro block mb-1">In the Desert:</span>
          {desertItems.map((item, i) => <span key={i} className="block">{gardenItems.length + i + 1}. {item}</span>)}
        </div>
        <div>
          <span className="font-semibold text-saguaro block mb-1">Animals:</span>
          {animals.map((item, i) => <span key={i} className="block">{gardenItems.length + desertItems.length + i + 1}. {item}</span>)}
        </div>
      </div>
    </motion.div>
  );
}
