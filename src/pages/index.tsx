import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

export default function Home(): JSX.Element {
  const logoUrl = useBaseUrl('/img/uiux_abstract_logo.png');

	const projectsUrl = useBaseUrl('/docs/projects/intro');
	const aboutUrl = useBaseUrl('/docs/about');
  return (
    <main className={styles.page}>
      <div className={styles.container}>

        {/* Logo */}
        <img
          src={logoUrl}
          alt="UI/UX Projects logo"
          className={styles.logo}
        />

        {/* Titre */}
        <h1 className={styles.title}>
          Curated UI/UX Projects
          <span className={styles.subtitle}>
            Open-source & Inspirational
          </span>
        </h1>

        {/* Tagline */}
        <p className={styles.tagline}>
          Une collection soigneusement sélectionnée des meilleurs projets open-source en UI/UX design.
          Découvrez des bibliothèques de composants, outils de design, prototypes interactifs et ressources
          qui inspirent les designers et développeurs modernes.
        </p>

        {/* Cartes */}
        <div className={styles.cards}>
          <div className={styles.card}>
            <h3>Inspiration quotidienne</h3>
            <p>
              Explorez des projets comme Penpot, shadcn/ui, Uiverse ou Aceternity UI pour booster
              votre créativité et trouver des patterns innovants.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Open-source & gratuit</h3>
            <p>
              Tous les projets listés sont open-source, contribuables et utilisables librement
              dans vos applications web, mobile ou desktop.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Qualité curatée</h3>
            <p>
              Sélection manuelle basée sur l'innovation, l'accessibilité, la popularité
              et l'impact dans la communauté design.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <a href={projectsUrl} className={styles.secondaryButton}>
            Découvrir les projets
          </a>
          <a href={aboutUrl} className={styles.secondaryButton}>
            En savoir plus
          </a>
        </div>

        {/* Footer */}
        <footer className={styles.footer}>
          Une ressource pour les designers et développeurs passionnés par des interfaces
          belles, accessibles et évolutives.
        </footer>
      </div>
    </main>
  );
}
