import Layout from '@/components/PageShell';
import SectionHeading from '@/components/Control_Components/SectionHeading';
import SystemSelectorGrid from '@/components/SystemSelectorGrid';
import systemIndex from '@/data/system-index';

export default function CodexPage() {
  return (
    <Layout>
      <section className="px-4 py-10 sm:py-20 max-w-5xl mx-auto text-center">
        <h1 className="text-2xl sm:text-4xl font-bold mb-4">
          🧠 Choose a Cognitive System
        </h1>
        <p className="theme-muted text-sm sm:text-lg mb-10">
          Each System contains installable blueprints designed to upgrade your thinking and workflows through AI.
        </p>
        <SystemSelectorGrid systems={systemIndex} />
      </section>
    </Layout>
  );
}
