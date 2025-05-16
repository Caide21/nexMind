import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from '@/components/PageShell';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import SectionHeading from '@/components/Control_Components/SectionHeading';

export default function BlueprintPage() {
  const router = useRouter();
  const { slug, system } = router.query;
  const [blueprint, setBlueprint] = useState(null);

  useEffect(() => {
    if (!slug || !system) return;

    fetch(`/data/blueprints/systems/${system}/${slug}.json`)
      .then((res) => {
        if (!res.ok) throw new Error('Blueprint not found');
        return res.json();
      })
      .then((data) => setBlueprint(data))
      .catch((err) => console.error('Error loading blueprint:', err));
  }, [slug, system]);

  if (!blueprint) return null;

  const isRitual = blueprint.flow && blueprint.amplification;

  return (
    <Layout>
      <Head>
        <title>{blueprint.title}</title>
      </Head>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-20">
        <SectionHeading emoji={blueprint.emoji || '🧩'}>
          {blueprint.title}
        </SectionHeading>

        {blueprint.summary && (
          <p className="text-sm sm:text-base text-center theme-muted mb-8">
            {blueprint.summary}
          </p>
        )}

        {isRitual ? (
          <>
            <div className="text-center mb-12 px-4">
              <div className="text-3xl sm:text-4xl mb-4">{blueprint.emoji}</div>
              <h1 className="text-xl sm:text-2xl font-bold mb-3 theme-heading">{blueprint.title}</h1>
              <p className="text-sm sm:text-base max-w-xl mx-auto theme-muted">{blueprint.description}</p>
            </div>

            {blueprint.flow && (
              <div className="space-y-6 mb-12 px-4">
                {Object.entries(blueprint.flow).map(([label, text], idx) => (
                  <div key={idx} className="border-l-4 border-purple-500 pl-4">
                    <h3 className="font-semibold text-sm mb-1">{label}</h3>
                    <p className="text-sm theme-muted">{text}</p>
                  </div>
                ))}
              </div>
            )}

            {blueprint.optional_recast && (
              <div className="mt-6 mb-6 px-4 py-3 text-sm rounded-md bg-purple-100/10 text-purple-300 border border-purple-500/40">
                🔄 Optional Recast: {blueprint.optional_recast}
              </div>
            )}

            {blueprint.absence_response && (
              <div className="text-sm italic text-theme-muted mb-6 px-4">
                🕳 Absence Reflection: {blueprint.absence_response}
              </div>
            )}

            {blueprint.notes && (
              <div className="mt-8 space-y-2 mb-12 px-4">
                <h3 className="font-semibold text-lg theme-heading">📝 Notes</h3>
                <ul className="list-disc list-inside text-sm text-theme-muted">
                  {blueprint.notes.map((n, i) => (
                    <li key={i}>{n}</li>
                  ))}
                </ul>
              </div>
            )}

            {blueprint.amplification && (
              <details className="border-t border-purple-600 pt-4 mt-6 text-sm text-theme-muted px-4">
                <summary className="cursor-pointer font-semibold text-purple-300 mb-2">
                  🔮 Amplification Details
                </summary>
                <div className="mt-2 space-y-2">
                  <p><strong>Theme:</strong> {blueprint.amplification.intent?.theme}</p>
                  <p><strong>Loop Type:</strong> {blueprint.amplification.intent?.loop_type}</p>
                  <p><strong>Desired Shift:</strong> {blueprint.amplification.intent?.desired_shift}</p>
                  <p><strong>Tags:</strong> {blueprint.amplification.symbolic_tags?.join(', ')}</p>
                  <p><strong>Miss Response:</strong> {blueprint.amplification.miss_response}</p>
                  <p><strong>Evolves Into:</strong> {blueprint.amplification.evolves_into?.join(' → ')}</p>
                </div>
              </details>
            )}
          </>
        ) : (
          <>
            {blueprint.neural_glyph && (
              <div className="theme-glyph px-4 py-4 mb-10 rounded">
                <h2 className="font-semibold mb-1">{blueprint.neural_glyph.title}</h2>
                <p className="text-sm leading-relaxed">{blueprint.neural_glyph.body}</p>
              </div>
            )}

            {blueprint.sections?.map((section, idx) => (
              <div key={idx} className="mb-10 px-4">
                <h3 className="text-base sm:text-lg font-semibold mb-2 theme-heading">{section.heading}</h3>
                <div className="whitespace-pre-wrap text-sm leading-relaxed theme-text">{section.body}</div>
              </div>
            ))}

            {blueprint.completion_criteria && (
              <div className="theme-success px-4 py-4 rounded">
                <h4 className="font-semibold mb-2">Completion Criteria</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {blueprint.completion_criteria.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}

        {/* 🔙 Return */}
        <p className="text-center text-xs mt-16 text-pink-400 px-4">
          <Link href={`/codex/${system}`}>← Return to {system} Blueprints</Link>
        </p>
      </main>
    </Layout>
  );
}
