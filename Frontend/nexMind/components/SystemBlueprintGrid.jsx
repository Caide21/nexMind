// components/SystemBlueprintGrid.jsx

import { useEffect, useState } from 'react';
import ScrollCard from './Control_Components/ScrollCard';

export default function SystemBlueprintGrid({ system }) {
  const [blueprints, setBlueprints] = useState([]);

  useEffect(() => {
    async function loadBlueprints() {
      const urls = [
        `/data/blueprints/systems/${system}/blueprint-1.json`,
        `/data/blueprints/systems/${system}/blueprint-2.json`,
      ];

      try {
        const loaded = await Promise.all(
          urls.map((url) =>
            fetch(url).then((res) => (res.ok ? res.json() : null)).catch(() => null)
          )
        );
        setBlueprints(loaded.filter((bp) => bp !== null));
      } catch (err) {
        console.error('Failed to load blueprints:', err);
        setBlueprints([]);
      }
    }

    if (system) loadBlueprints();
  }, [system]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {blueprints.map((bp, i) => (
        <ScrollCard
          key={i}
          emoji={bp.emoji}
          title={bp.title}
          description={bp.description}
          link={`/codex/${system}/${bp.slug}`}
        />
      ))}
    </div>
  );
}
