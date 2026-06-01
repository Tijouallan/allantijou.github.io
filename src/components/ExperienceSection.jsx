import ExperienceMissionCard from "./ExperienceMissionCard";

export default function ExperienceSection({ experience }) {
  return (
    <section id="experience" className="scroll-mt-8 space-y-6">
      <header>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          Missions réalisées
        </h2>
        <p className="mt-2 text-sm text-muted">
          Contexte métier, problématiques adressées et solutions livrées — au-delà
          du format CV classique.
        </p>
      </header>

      <div className="space-y-4">
        {experience.map((mission) => (
          <ExperienceMissionCard key={mission.id} mission={mission} />
        ))}
      </div>
    </section>
  );
}
