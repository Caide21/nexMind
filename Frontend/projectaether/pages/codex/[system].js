// pages/codex/[system].js

import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from '@/components/PageShell';
import SystemBlueprintGrid from '@/components/SystemBlueprintGrid';
import SectionHeading from '@/components/Control_Components/SectionHeading';

export default function SystemPage() {
  const router = useRouter();
  const { system } = router.query;

  // Safely extract system number
  const systemNumber = system?.split('-')[1] || '❓';

  return (
    <Layout>
      <Head>
        <title>{`System ${systemNumber} | NexMind Codex`}</title>
      </Head>

      <main className="max-w-5xl mx-auto px-6 py-20">
        <SectionHeading emoji="📘">
          System {systemNumber}: Foundations of Intelligent Collaboration
        </SectionHeading>

        <p className="text-base text-center theme-muted mb-8">
          These blueprints help you craft intelligent interfaces with AI — from sharpened prompts to self-adaptive thought structures.
        </p>

        {/* ✅ Pass system to BlueprintGrid */}
        {system && <SystemBlueprintGrid system={system} />}
      </main>
    </Layout>
  );
}
