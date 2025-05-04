// ===== 📄 pages/codex/system-1/[slug].js =====

import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from '@/components/PageShell';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import SectionHeading from '@/components/Control_Components/SectionHeading';

export default function BlueprintPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [blueprint, setBlueprint] = useState(null);

  useEffect(() => {
    if (!slug) return;

    fetch(`/data/blueprints/systems/system-1/${slug}.json`)
      .then((res) => {
        if (!res.ok) throw new Error('Blueprint not found');
        return res.json();
      })
      .then((data) => setBlueprint(data))
      .catch((err) => console.error('Error loading blueprint:', err));
  }, [slug]);

  if (!blueprint) return null;

  return (
    <Layout>
      <Head>
        <title>{blueprint.title}</title>
      </Head>

      <main className="max-w-3xl mx-auto px-6 py-20">
        {/* 🔮 Symbolic Header */}

        <SectionHeading
          title={`🧩 ${blueprint.title}`}
          description="Install this blueprint to expand your cognitive interface — from symbolic prompts to AI-powered rituals."
        />

        {/* 🧠 Hero */}
        <div className="text-center mb-12">
          <div className="text-4xl mb-4">{blueprint.emoji}</div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-3 theme-heading">{blueprint.title}</h1>
          <p className="text-base sm:text-lg max-w-xl mx-auto theme-muted">{blueprint.description}</p>
        </div>

        {/* 🧬 Neural Glyph */}
        {blueprint.neural_glyph && (
          <div className="theme-glyph px-6 py-4 mb-10 rounded">
            <h2 className="font-semibold mb-1">{blueprint.neural_glyph.title}</h2>
            <p className="text-sm leading-relaxed">{blueprint.neural_glyph.body}</p>
          </div>
        )}

        {/* 📜 Sections */}
        {blueprint.sections && blueprint.sections.map((section, idx) => (
          <div key={idx} className="mb-10">
            <h3 className="text-lg font-semibold mb-2 theme-heading">{section.heading}</h3>
            <div className="whitespace-pre-wrap text-sm leading-relaxed theme-text">{section.body}</div>
          </div>
        ))}

        {/* ✅ Completion Criteria */}
        {blueprint.completion_criteria && (
          <div className="theme-success px-6 py-4 rounded">
            <h4 className="font-semibold mb-2">Completion Criteria</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              {blueprint.completion_criteria.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* 🔙 Return */}
        <p className="text-center text-xs mt-16 text-pink-400">
          <Link href="/codex/system-1">← Return to System 1 Blueprints</Link>
        </p>
      </main>
    </Layout>
  );
}
