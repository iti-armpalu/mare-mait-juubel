'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin, Clock, Calendar } from "lucide-react";

// const fadeUp = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
// };

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.8, ease: "easeOut" as const },
  }),
};

// const fadeUp = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
// };

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6 text-center">
      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <motion.p
          className="invitation-label mb-16 md:mb-20"
          initial={{ opacity: 0, letterSpacing: '0.2em' }}
          animate={{ opacity: 1, letterSpacing: '0.12em' }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Kutse
        </motion.p>

        <div className="relative flex items-center justify-center">
          {/* Floral wreath */}
          <motion.div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 md:h-[820px] md:w-[820px] lg:h-[820px] lg:w-[820px]"
            initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
          >
            <Image
              src="/hero-floral.png"
              alt=""
              fill
              priority
              className="object-contain"
            />
          </motion.div>

          {/* Text card */}
          <div className="relative z-10 max-w-xl px-14 py-20 md:px-16 md:py-28">
            <motion.h1
              className="invitation-heading mb-4 text-foreground"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              Tähistame koos!
            </motion.h1>

            <motion.div
              className="gold-divider my-6"
              initial={{ opacity: 0, scaleX: 0.7 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            />

            <motion.p
              className="invitation-subheading mb-2"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
            >
              Mait 70. ja Mare 65. sünnipäev
            </motion.p>

            <motion.p
              className="invitation-body mt-6 text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.9 }}
            >
              Kutsume Teid osa saama
              <br />
              meie ühisest juubelipeost
            </motion.p>
          </div>
        </div>

        <motion.div
          className="mt-28"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.7 }}
        >
          <span className="invitation-label inline-block border-b border-primary pb-1">
            Loe edasi ↓
          </span>
        </motion.div>
      </motion.div>
    </section>
  )
}

const GreetingSection = () => {
  return (
    <section className="invitation-section">
      <motion.div
        className="max-w-xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUp}
      >
        <p className="invitation-label mb-4">Paar sõna</p>

        <h2 className="invitation-heading text-foreground mb-8">
          Kallid sõbrad ja pere
        </h2>

        <div className="gold-divider mb-8" />

        <p className="invitation-body text-muted-foreground leading-loose">
          Aastad on kinkinud meile rohkelt ilusaid hetki,
          mida soovime teiega jagada. Oleks suur rõõm,
          kui saaksite meiega koos seda erilist päeva tähistada.
        </p>

        <p className="invitation-body text-muted-foreground leading-loose mt-6">
          Teie kohalolek on kõige ilusam kingitus.
        </p>

        <p className="mt-10 font-serif text-lg italic text-foreground">
          Soojade tervitustega,
          <br />
          Mait ja Mare
        </p>
      </motion.div>
    </section>
  );
};

const DetailsSection = () => {
  return (
    <section id="details" className="invitation-section bg-card">
      <div className="max-w-2xl mx-auto text-center">
        <motion.p
          className="invitation-label mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          custom={0}
        >
          Millal ja kus
        </motion.p>

        <motion.h2
          className="invitation-heading text-foreground mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          custom={1}
        >
          Sündmuse info
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-3">
          <motion.div
            className="flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
          >
            <Calendar className="w-6 h-6 text-primary mb-3" strokeWidth={1.5} />
            <p className="invitation-label mb-2">Kuupäev</p>
            <p className="invitation-body text-foreground font-medium">
              20. juuni 2026
            </p>
            <p className="text-sm text-muted-foreground mt-1">Laupäev</p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={3}
          >
            <Clock className="w-6 h-6 text-primary mb-3" strokeWidth={1.5} />
            <p className="invitation-label mb-2">Kellaaeg</p>
            <p className="invitation-body text-foreground font-medium">
              Kell 18:00
            </p>
            <p className="text-sm text-muted-foreground mt-1">Kogunemine alates 15:00</p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={4}
          >
            <MapPin className="w-6 h-6 text-primary mb-3" strokeWidth={1.5} />
            <p className="invitation-label mb-2">Asukoht</p>
            <p className="invitation-body text-foreground font-medium">
              Uueda Puhkekeskus
            </p>
            <p className="text-sm text-muted-foreground mt-1">Nurme, Tori vald</p>
            <p className="text-sm text-muted-foreground">Pärnu maakond</p>
          </motion.div>
        </div>

        <motion.div
          className="mt-14 p-6 rounded-lg bg-muted/50 border border-border"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={5}
        >
          <p className="invitation-body text-muted-foreground text-sm md:text-base">
            Täpsem info kohalesaamise, parkimise ja majutuse kohta lisandub peagi.
          </p>
        </motion.div>

      </div>
    </section>
  );
};



const RSVPSection = () => {

  return (
    <section id="rsvp" className="invitation-section bg-card">
      <motion.div
        className="max-w-md mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUp}
      >
        <p className="invitation-label mb-4">Palun anna teada</p>
        <h2 className="invitation-heading text-foreground mb-4">RSVP</h2>
        <p className="invitation-body text-muted-foreground mb-10">
          Palun anna oma tulekust teada hiljemalt 1. juuniks emaili teel:{" "}
          <a href="mailto:pidu@email.ee" className="text-primary underline">
              mait.armpalu@mail.ee
            </a>
        </p>
      </motion.div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-10 text-center bg-card">
      <p className="text-sm text-muted-foreground font-sans">
        Tehtud hoole ja armastusega ♥
      </p>
    </footer>
  );
};




export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <HeroSection />
      <GreetingSection />
      <DetailsSection />
      <RSVPSection />
      <Footer />
    </main>
  )
}