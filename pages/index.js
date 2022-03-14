import Head from "next/head";
import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import AboutSection from "../components/AboutSection";
import Photos from "../components/Photos";
import TestimonialSection from "../components/TestimonialSection";
import ContactSection from "../components/ContactSection";
import Prefooter from "../components/Prefooter";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Head>
        <title>Template 1.0</title>
        <meta name='description' content='This is the first template' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Hero />
      <ServicesSection />
      <AboutSection />
      <Photos />
      <TestimonialSection />
      <ContactSection />
      <Prefooter text='Satisfaction Guaranteed!' />
    </>
  );
}
