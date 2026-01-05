# Recréation d'un site web avec approche Mobile-First (240 points)

## Mise en situation

Vous êtes développeur web freelance. L'entreprise **NewHorizon** vous contacte en urgence : leur site web a complètement crashé suite à un problème technique majeur, et toutes les données ont été perdues. Le site est actuellement inaccessible, ce qui impacte gravement leur activité en ligne.

Heureusement, ils ont retrouvé une capture d'écran de l'ancienne version desktop de leur site. Votre mission est de recréer entièrement ce site web, mais cette fois-ci en adoptant une approche moderne et pérenne.

## Votre mission

Recréer le site web de l'entreprise à partir de la capture d'écran fournie, en appliquant une méthodologie **mobile-first** et en modernisant l'expérience utilisateur.

## Contexte et contraintes

### Ce que vous avez
- Une capture d'écran de l'ancien site (version desktop uniquement)
- Liberté créative pour améliorer l'UX/UI
- Possibilité d'optimiser la structure et le contenu

![capture du site détruit](/img/web_site.png)

### Ce que vous devez créer
- Une version **mobile** (conception prioritaire)
- Une version **desktop** (adaptation depuis le mobile)

### Contraintes techniques
- **Approche obligatoire :** Mobile-First Design
- **Technologies :** HTML5, CSS3 (Flexbox/Grid), JavaScript optionnel
- **Responsive :** 2 breakpoints minimum (mobile, desktop)
- **Respect du contenu :** Conserver les informations essentielles de l'original
- **Modernisation :** Améliorer l'UX/UI par rapport à l'ancienne version

## Livrables attendus

1. **Code source complet** (HTML, CSS, assets)
2. **Site responsive fonctionnel** avec 2 versions :
   - Mobile (320px - 768px)
   - Desktop (1024px+)
3. **Document de conception** expliquant :
   - Votre analyse de l'ancien site
   - Les améliorations apportées
   - Vos choix de design mobile-first

## Méthodologie Mobile-First : Rappels

### Qu'est-ce que le Mobile-First ?

Le **Mobile-First** est une approche de conception web où l'on commence par créer l'expérience mobile avant de l'adapter aux écrans plus grands. Cette méthode présente plusieurs avantages :

- **Priorisation du contenu** : focus sur l'essentiel
- **Performance optimale** : chargement plus rapide
- **Accessibilité accrue** : navigation simplifiée
- **Future-proof** : adapté à l'usage mobile croissant

### Principes clés du Mobile-First

1. **Contenu d'abord** : Identifier les informations essentielles
2. **Navigation simplifiée** : Menu hamburger, hiérarchie claire
3. **Touch-friendly** : Boutons et liens assez grands (min 44x44px)
4. **Images adaptatives** : Responsive images et optimisation
5. **Performance** : Temps de chargement minimal

### Progression CSS Mobile-First

```css
/* Base : Mobile (par défaut) */
.container {
  width: 100%;
  padding: 20px;
}

/* Desktop : à partir de 1024px */
@media (min-width: 1024px) {
  .container {
    width: 1000px;
  }
}
```

## Étapes du projet

### Phase 1 : Analyse 

**Questions à vous poser :**

- Quelle est la hiérarchie de l'information ?
- Quels éléments sont essentiels pour la version mobile ?
- Qu'est-ce qui peut être simplifié ou réorganisé ?
- Comment améliorer l'expérience utilisateur ?

### Phase 2 : Planification Mobile-First

**Créez vos wireframes :**
1. **Wireframe mobile** (conception prioritaire)
   - Structure simplifiée
   - Navigation adaptée au tactile
   - Hiérarchie de contenu claire
   
2. **Wireframe desktop** (expansion complète)
   - Layout multi-colonnes
   - Navigation étendue

### Phase 3 : Développement Mobile 

**Commencez par la version mobile :**

1. Structure HTML sémantique
2. Stylisation CSS pour mobile
3. Navigation responsive (menu hamburger)
4. Images optimisées et responsive
5. Formulaires adaptés au mobile
6. Tests sur plusieurs tailles d'écran mobile

### Phase 4 : Adaptation Desktop
**Expansion vers le desktop :**

- Layout multi-colonnes complet
- Navigation horizontale traditionnelle
- Optimisation des espacements
- Effets hover et interactions avancées
- Comparaison avec la capture d'écran originale

## Checklist complète du projet

### ANALYSE ET PLANIFICATION

#### Analyse de l'existant
- [ ] Capture d'écran analysée et annotée
- [ ] Liste de tous les éléments de contenu créée
- [ ] Structure de navigation identifiée
- [ ] Palette de couleurs extraite
- [ ] Typographie analysée (tailles, familles)
- [ ] Points d'amélioration identifiés

#### Conception Mobile-First
- [ ] Wireframe mobile créé
- [ ] Wireframe tablette créé
- [ ] Wireframe desktop créé
- [ ] Hiérarchie de contenu définie
- [ ] Navigation mobile planifiée
- [ ] Points de rupture (breakpoints) déterminés

### DÉVELOPPEMENT MOBILE (BASE)

#### CSS Mobile-First
- [ ] CSS écrit d'abord pour mobile (sans media queries)
- [ ] Reset ou normalize CSS appliqué
- [ ] Box-sizing: border-box défini
- [ ] Unités relatives utilisées (rem, em, %, vw)
- [ ] Flexbox ou Grid pour le layout mobile

#### Navigation mobile
- [ ] Menu hamburger fonctionnel (si nécessaire)
- [ ] Navigation accessible au tactile
- [ ] Menu fermable facilement
- [ ] Indicateur de page active (si applicable)

#### Contenu mobile
- [ ] Contenu essentiel priorisé
- [ ] Texte lisible (min 16px pour le corps)
- [ ] Paragraphes courts et aérés
- [ ] Formulaires simplifiés pour mobile

#### Images mobile
- [ ] Images responsive (max-width: 100%)
- [ ] Images optimisées (poids réduit)

### RESPONSIVE DESIGN

#### Breakpoints (Media Queries)
- [ ] Mobile (base) : < 768px (pas de media query)
- [ ] Tablette : @media (min-width: 768px)
- [ ] Desktop : @media (min-width: 1024px)
- [ ] Breakpoints supplémentaires si nécessaire
- [ ] Transitions fluides entre les breakpoints

#### Adaptation desktop (1024px+)
- [ ] Layout multi-colonnes fonctionnel
- [ ] Navigation horizontale complète
- [ ] Largeur maximale définie (max-width)
- [ ] Contenu centré si nécessaire
- [ ] Effets hover sur les éléments interactifs

### DESIGN ET UX

#### Fidélité et modernisation
- [ ] Contenu de l'original conservé
- [ ] Structure générale respectée
- [ ] Améliorations UX justifiées dans le document

#### Identité visuelle
- [ ] Palette de couleurs cohérente
- [ ] Typographie lisible et hiérarchisée
- [ ] Espacement cohérent (système d'espacement)

#### Accessibilité
- [ ] Textes alternatifs descriptifs
- [ ] Structure de heading logique

#### Performance
- [ ] Temps de chargement rapide (< 3 secondes)
- [ ] Optimisation pour mobile (prioritaire)

### QUALITÉ DU CODE

#### HTML
- [ ] Code indenté et bien formaté
- [ ] Commentaires pour sections importantes
- [ ] Pas de balises obsolètes

#### CSS
- [ ] Code organisé par sections
- [ ] Pas de code redondant
- [ ] Media queries bien structurées (mobile-first)
- [ ] Commentaires pour sections complexes
- [ ] Validation CSS sans erreurs

#### JavaScript (si utilisé)
- [ ] Code propre et commenté
- [ ] Pas d'erreurs dans la console
- [ ] Fonctionnalités non-bloquantes
- [ ] Progressive enhancement appliqué

### DOCUMENTATION

#### Document de conception
- [ ] Analyse de l'ancien site rédigée
- [ ] Choix de design expliqués
- [ ] Améliorations UX justifiées
- [ ] Approche mobile-first documentée
- [ ] Difficultés rencontrées mentionnées
- [ ] Solutions apportées expliquées

### LIVRAISON

#### Fichiers
- [ ] Tous les fichiers HTML/CSS/JS présents
- [ ] Dossier assets organisé (images, fonts)
- [ ] Pas de fichiers inutiles
- [ ] Structure de dossiers logique
- [ ] Fichiers nommés clairement

#### Fonctionnement
- [ ] Site entièrement fonctionnel
- [ ] Images chargent correctement
- [ ] Navigation fluide
- [ ] Pas d'erreurs console
