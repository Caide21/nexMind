import { useRouter } from 'next/router';

export default function ScrollCard({
  emoji,
  title,
  description,
  symbolicTags = [],
  link,
  comingSoon = false,
}) {
  const router = useRouter();

  const handleClick = () => {
    if (!comingSoon && link) {
      router.push(link);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`theme-scroll-card relative group overflow-hidden rounded-xl shadow-md transition-all duration-300 ${
        comingSoon ? 'opacity-60 pointer-events-none' : 'cursor-pointer enchant-card'
      }`}
    >
      {/* 🌫️ Enchant Background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="w-full h-full animate-pulse-slow pointer-events-none select-none bg-gradient-to-br from-purple-300/20 via-blue-400/10 to-indigo-300/20 rounded-xl blur-md" />
      </div>

      {/* 🛠️ Main Content */}
      <div className="relative z-10 p-4 space-y-2">
        <div className="text-4xl">{emoji}</div>
        <div className="text-lg font-semibold theme-heading">{title}</div>
        <p className="text-sm theme-muted">{description}</p>

        {symbolicTags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {symbolicTags.map((tag, i) => (
              <span
                key={i}
                className="text-xs bg-purple-900/30 text-purple-300 px-2 py-0.5 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {!comingSoon ? (
          <button className="install-button block w-fit mt-2 px-3 py-1 rounded-md relative overflow-hidden text-sm">
            <span className="relative z-10 group-hover:animate-ripple-text">
              → Install {title}
            </span>
          </button>
        ) : (
          <p className="text-xs text-purple-400 italic mt-1">
            ↗ Coming Soon. Track Evolution?
          </p>
        )}
      </div>

      {/* 🚫 Coming Soon Overlay */}
      {comingSoon && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 text-purple-200 text-sm font-medium rounded-xl backdrop-blur-sm">
          ↗ Coming Soon. Track Evolution?
        </div>
      )}
    </div>
  );
}
