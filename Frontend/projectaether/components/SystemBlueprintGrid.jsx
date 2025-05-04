import ScrollCard from '@/components/Control_Components/ScrollCard';

export default function SystemBlueprintGrid({ blueprints = [] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {blueprints.map((bp, i) => (
        <ScrollCard
          key={i}
          emoji={bp.emoji}
          title={bp.title}
          description={bp.description}
          link={`/codex/system-1/${bp.slug}`} // 🔗 generate from slug
          comingSoon={bp.comingSoon}
        />
      ))}
    </div>
  );
}
