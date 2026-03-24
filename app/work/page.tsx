import { Container } from '@/components/container';
import { PageHeading } from '@/components/page-heading';
import { WorkCard } from '@/components/work-card';
import { caseStudies } from '@/content/work';

export default function WorkPage() {
  return (
    <Container>
      <main>
        <PageHeading
          title="Work"
          description="A selection of product case studies where I led strategy, drove execution, and delivered measurable results."
        />
        <section className="grid gap-6">
          {caseStudies.map((item) => (
            <WorkCard key={item.slug} item={item} />
          ))}
        </section>
      </main>
    </Container>
  );
}
