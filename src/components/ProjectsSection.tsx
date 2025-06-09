import type {ReactNode} from 'react';
import Heading from '@theme/Heading';
import Link from "@docusaurus/Link";
import styles from "./ProjectsSection.module.css"
import clsx from "clsx";
import {MdOutlineLibraryBooks} from "react-icons/md";
import LinkIcon from "@site/src/components/LinkIcon";

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
      {type: 'DOCS', href: '/docs/clickmobs/getting-started'}
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
      {type: 'DOCS', href: '/docs/configured/getting-started'}
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
      {type: 'DOCS', href: '/docs/clicksigns/getting-started'}
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
    title: 'ClickAuth',
    img: require('@site/static/img/projects/clickauth.webp').default,
    description: (
      <>
        A simple offline authentication plugin that actually works.
      </>
    ),
    links: [
      {type: 'MODRINTH', href: 'https://modrinth.com/mod/clickauth'},
      {type: 'GITHUB', href: 'https://github.com/Clickism/ClickAuth'},
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

function ExternalLink(props: { link: ExternalLink }) {
  const link = props.link;
  return (
    <Link className={clsx('button', styles.buttonSecondary,
      (link.type === 'MODRINTH' && styles.modrinthLink),
      (link.type === 'MAVEN' && styles.mavenLink),
      (link.type === 'GITHUB' && styles.githubLink),
    )}
          href={link.href}>
      {link.type === 'GITHUB' && 'GitHub'}
      {link.type === 'MODRINTH' && 'Modrinth'}
      {link.type === 'DOCS' && 'Docs '}
      {link.type === 'DOCS' && <MdOutlineLibraryBooks/>}
      {link.type === 'MAVEN' && 'Maven'}
      {link.type !== 'DOCS' && <LinkIcon/>}
    </Link>
  )
}

function Feature({title, img, description, links}: FeatureItem) {
  return (
    <div className={styles.feature}>
      <img className={styles.featureIcon} role="img" src={img} alt="project icon"/>
      <Heading as="h3" className={styles.header}>{title}</Heading>
      <p>{description}</p>
      <div className={styles.externalLinks}>
        {links.map(link => (
          <ExternalLink link={link} key={link.href}/>
        ))}
      </div>
    </div>
  )
}

export default function ProjectsSection(): ReactNode {
  return (
    <div className={styles.features}>
      <div className={styles.textContainer}>
        <Heading as="h1">My Projects</Heading>
        <p>
          Here are some of my projects that I have worked on.
          You can find more on my <Link href='https://github.com/Clickism'>GitHub.</Link>
        </p>
      </div>
      <div className={styles.container}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </div>
  );
}
