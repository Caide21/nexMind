import ScrollCard from './Control_Components/ScrollCard';

const features = [
  {
    emoji: '🧠',
    title: 'Sharpen Interaction',
    description: 'Outthink generic AI users. Engineer prompts that act like intelligent agents — recursive, adaptive, and precise.',
    href: '/codex'
  },
  {
    emoji: '⚙️',
    title: 'Build Thinking Systems',
    description: "Don't just automate. Architect scalable intelligence frameworks that grow with your team, your clients, or your mind.",
    href: '/codex/system-1'
  },
  {
    emoji: '🚀',
    title: 'Scale with AI',
    description: "While others chase outputs, you'll design AI that thinks with you — compounding speed, insight, and execution.",
    href: '/codex/system-2'
  }
];

export default function WhatWeDoGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
      {features.map((feature, idx) => (
        <ScrollCard
          key={idx}
          emoji={feature.emoji}
          title={feature.title}
          description={feature.description}
          link={feature.href}
        />
      ))}
    </div>
  );
}