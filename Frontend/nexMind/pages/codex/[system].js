import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ScrollCard from '@/components/Control_Components/ScrollCard';
import PageShell from '@/components/PageShell';

export default function SystemBlueprintsPage() {
  const router = useRouter();
  const { system } = router.query;

  const [blueprints, setBlueprints] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!system) return;

    const loadBlueprints = async () => {
      try {
        const manifestName = `blueprint-manifest-${system}.json`;
        const res = await fetch(`/data/blueprints/systems/${system}/${manifestName}`);
        let data = await res.json();
        console.log("💠 Blueprints:", data);

        // Push "Final" quest to the end
        data.sort((a, b) => {
          const isFinalA = a.title.toLowerCase().includes('final');
          const isFinalB = b.title.toLowerCase().includes('final');
          if (isFinalA && !isFinalB) return 1;
          if (!isFinalA && isFinalB) return -1;
          return 0;
        });

        setBlueprints(data);
        setLoaded(true);
      } catch (err) {
        console.error('Failed to load blueprints:', err);
        setBlueprints([]);
        setLoaded(true);
      }
    };

    loadBlueprints();
  }, [system]);

  return (
    <PageShell>
      <div className="flex flex-col items-center text-center mt-6 sm:mt-10 px-4">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          System {system?.split('-')[1]}: Foundations of Intelligent Collaboration
        </h1>
        <p className="text-sm sm:text-base text-theme-muted mb-8 max-w-xl">
          These blueprints help you craft intelligent interfaces with AI — from sharpened prompts to self-adaptive thought structures.
        </p>

        {loaded ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
            {blueprints.map(bp => (
              <ScrollCard
                key={bp.slug}
                title={bp.title}
                emoji={bp.emoji || '📜'}
                description={bp.summary || ''}
                link={`/codex/${system}/${bp.slug}`}
              />
            ))}
          </div>
        ) : (
          <p className="text-theme-muted text-sm">Loading scrolls...</p>
        )}
      </div>
    </PageShell>
  );
}
