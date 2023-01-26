import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import MusicPlayer from '@/components/MusicPlayer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pest EPK App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <div>
          <Nav />
          <Hero />
          <About />
          <MusicPlayer />
        </div>
      </main>
    </>
  );
}
