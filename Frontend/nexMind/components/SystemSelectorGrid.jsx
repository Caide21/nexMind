import ScrollCard from './Control_Components/ScrollCard';

export default function SystemSelectorGrid({ systems }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
      {systems.map((system) => (
        <ScrollCard
          key={system.id}
          emoji={system.emoji}
          title={system.title}
          description={system.description}
          link={system.comingSoon ? null : system.href}
          comingSoon={system.comingSoon}
        />
      ))}
    </div>
  );
}
