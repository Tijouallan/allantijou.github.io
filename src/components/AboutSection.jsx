import Card from "./Card";

export default function AboutSection({ about }) {
  const blocks = [
    { title: "My story", content: about.story },
    { title: "What motivates me", content: about.motivation },
    { title: "What I enjoy building", content: about.enjoy },
  ];

  return (
    <section id="home" className="scroll-mt-8 space-y-6">
      <header>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          About me
        </h2>
        <p className="mt-2 text-sm text-muted">
          Background, motivation, and what I bring to a team.
        </p>
      </header>

      <Card className="space-y-8">
        {blocks.map(({ title, content }) => (
          <div key={title}>
            <h3 className="mb-2 text-sm font-semibold text-foreground">{title}</h3>
            <p className="text-sm leading-relaxed text-muted">{content}</p>
          </div>
        ))}
      </Card>
    </section>
  );
}
