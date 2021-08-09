import Link from "next/link";
import Layout from "../components/Layout";
import Hero from "@comps/Hero";
import Services from "@comps/Services";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Hero />
    <Services />
  </Layout>
);

export default IndexPage;
