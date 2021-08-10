import Link from "next/link";
import Layout from "../components/Layout";
import Hero from "@comps/Hero";
import Services from "@comps/Services";
import Destinations from "@comps/Destinations";
import BookTrip from "@comps/BookTrip";
import Testimonials from "@comps/Testimonials";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Hero />
    <Services />
    <Destinations />
    <BookTrip />
    <Testimonials />
  </Layout>
);

export default IndexPage;
