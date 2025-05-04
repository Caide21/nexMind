import Head from "next/head";
import Layout from "@/components/PageShell";
import WhatWeDoGrid from "@/components/WhatWeDoGrid";
import SectionHeading from "@/components/Control_Components/SectionHeading";
import NavigationLink from "@/components/Control_Components/NavigationLink";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>NexMind – Codex Zero</title>
        <meta name="description" content="Master AI Collaboration" />
      </Head>

      <main className="max-w-5xl mx-auto px-6 py-20 text-center">
        <div className="text-4xl font-bold mb-4">🚀 Master AI Collaboration.<br />Build Systems, Not Just Prompts.</div>
        <p className="theme-muted max-w-xl mx-auto mb-12">
          Optimize your thinking, workflows, and results with Codex Zero — your launchpad for intelligent AI collaboration.
        </p>

        <NavigationLink href="/codex" label="Enter Codex Zero →" className="mb-16 symbolic-hover" />

        <SectionHeading title="What We Do" />
        <WhatWeDoGrid />
      </main>
    </Layout>
  );
}
