import type {ReactNode} from 'react';
import Heading from '@theme/Heading';
import Link from "@docusaurus/Link";
import styles from "./ProjectsSection.module.css"
import clsx from "clsx";
import {MdOutlineLibraryBooks} from "react-icons/md";

type ExternalLink = {
  type: 'MODRINTH' | 'GITHUB' | 'DOCS' | 'MAVEN';
  href: string;
};

type FeatureItem = {
  title: string;
  img: string;
  description: ReactNode;
  links: ExternalLink[];
};

const FeatureList: FeatureItem[] = [
  {
    title: 'ClickVillagers',
    img: require('@site/static/img/projects/clickvillagers.webp').default,
    description: (
      <>
        A simple Fabric mod/Spigot plugin that makes handling villagers a lot easier.
      </>
    ),
    links: [
      {type: 'MODRINTH', href: 'https://modrinth.com/plugin/clickvillagers'},
      {type: 'GITHUB', href: 'https://github.com/Clickism/ClickVillagers'},
    ]
  },
  {
    title: 'ClickMobs',
    img: require('@site/static/img/projects/clickmobs.webp').default,
    description: (
      <>
        A simple Fabric mod/Spigot plugin that allows you to pick up any mob into your inventory.
      </>
    ),
    links: [
      {type: 'MODRINTH', href: 'https://modrinth.com/plugin/clickmobs'},
      {type: 'GITHUB', href: 'https://github.com/Clickism/ClickMobs'},
      {type: 'DOCS', href: '/docs/clickmobs/intro'}
    ]
  },
  {
    title: 'Configured',
    img: require('@site/static/img/projects/configured.webp').default,
    description: (
      <>
        Format-independent Java library for generating versioned, documented configuration files from code.
      </>
    ),
    links: [
      {type: 'MAVEN', href: 'https://central.sonatype.com/artifact/de.clickism/configured-core'},
      {type: 'GITHUB', href: 'https://github.com/Clickism/Configured'},
      {type: 'DOCS', href: '/docs/configured/intro'}
    ]
  },
  {
    title: 'ClickShop',
    img: require('@site/static/img/projects/clickshop.webp').default,
    description: (
      <>
        An innovative, highly customizable Spigot shop plugin.
      </>
    ),
    links: [
      {type: 'MODRINTH', href: 'https://modrinth.com/plugin/clickshop'},
      {type: 'GITHUB', href: 'https://github.com/Clickism/ClickShop'},
    ]
  },
  {
    title: 'ClickSigns',
    img: require('@site/static/img/projects/clicksigns.webp').default,
    description: (
      <>
        An innovative Fabric mod that lets you create custom highway & street signs!
      </>
    ),
    links: [
      {type: 'MODRINTH', href: 'https://modrinth.com/mod/clicksigns'},
      {type: 'GITHUB', href: 'https://github.com/Clickism/ClickSigns'},
      {type: 'DOCS', href: '/docs/clicksigns/intro'}
    ]
  },
  {
    title: 'Modrinth Update Checker',
    img: require('@site/static/img/projects/modrinth_update_checker.webp').default,
    description: (
      <>
        Single class Java library to check for newer versions of projects on Modrinth using the Modrinth API.
      </>
    ),
    links: [
      {type: 'MAVEN', href: 'https://central.sonatype.com/artifact/de.clickism/modrinth-update-checker'},
      {type: 'GITHUB', href: 'https://github.com/Clickism/ModrinthUpdateChecker'},
    ]
  },
  {
    title: 'Variant Brush',
    img: require('@site/static/img/projects/variantbrush.webp').default,
    description: (
      <>
        A simple Fabric mod/Spigot plugin to easily change farm animal variants using a brush.
      </>
    ),
    links: [
      {type: 'MODRINTH', href: 'https://modrinth.com/plugin/variant-brush'},
      {type: 'GITHUB', href: 'https://github.com/Clickism/VariantBrush'},
    ]
  },
];

function ExternalLinks(props: { links: ExternalLink[] }) {
  return (
    <div className={styles.externalLinks}>
      {props.links.map(link => (
        <Link className={clsx('button', styles.buttonSecondary,
          (link.type === 'MODRINTH' && styles.modrinthLink),
          (link.type === 'MAVEN' && styles.mavenLink),
          (link.type === 'GITHUB' && styles.githubLink),
        )}
              key={link.href} href={link.href}>
          {link.type === 'GITHUB' && 'GitHub'}
          {link.type === 'MODRINTH' && 'Modrinth'}
          {link.type === 'DOCS' && 'Docs '}
          {link.type === 'DOCS' && <MdOutlineLibraryBooks/>}
          {link.type === 'MAVEN' && 'Maven'}
          {link.type !== 'DOCS' &&
            <svg width="13.5" height="13.5" aria-hidden="true" className="iconExternalLink_nPIU">
              <use href="#theme-svg-external-link"></use>
            </svg>
          }
        </Link>
      ))}
    </div>
  )
}

function Feature({title, img, description, links}: FeatureItem) {
  return (
    <div className={styles.feature}>
      <img className={styles.featureIcon} role="img" src={img} alt="project icon"/>
      <Heading as="h3" className={styles.header}>{title}</Heading>
      <p>{description}</p>
      <ExternalLinks links={links}/>
    </div>
  )
}

export default function ProjectsSection(): ReactNode {
  return (
    <div className={styles.features}>
      <div className={styles.textContainer}>
        <Heading as="h1">My Projects</Heading>
      </div>
      <div className={styles.container}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </div>
  );
}
