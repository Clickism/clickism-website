import {Project} from "@/app/(home)/project";

export const projects: Project[] = [
  {
    name: 'ClickVillagers',
    image: '/icons/clickvillagers.webp',
    modrinth: 'clickvillagers',
    description:
      'A simple Fabric mod/Spigot plugin that makes handling villagers a lot easier.',
    links: [
      {
        type: 'MODRINTH',
        href: 'https://modrinth.com/plugin/clickvillagers',
      },
      {
        type: 'GITHUB',
        href: 'https://github.com/Clickism/ClickVillagers',
      },
    ],
  },
  {
    name: 'ClickMobs',
    image: '/icons/clickmobs.webp',
    modrinth: 'clickmobs',
    description:
      'A simple Fabric mod/Spigot plugin that allows you to pick up any mob into your inventory.',
    links: [
      {
        type: 'MODRINTH',
        href: 'https://modrinth.com/plugin/clickmobs',
      },
      {
        type: 'GITHUB',
        href: 'https://github.com/Clickism/ClickMobs',
      },
      {
        type: 'DOCS',
        href: '/docs/clickmobs',
      },
    ],
  },
  {
    name: 'Configured',
    image: '/icons/configured.webp',
    description:
      'A format-independent Java library for generating versioned, documented configuration files from code.',
    links: [
      {
        type: 'MAVEN',
        href: 'https://central.sonatype.com/artifact/de.clickism/configured-core',
      },
      {
        type: 'GITHUB',
        href: 'https://github.com/Clickism/Configured',
      },
      {
        type: 'DOCS',
        href: '/docs/configured',
      },
    ],
  },
  {
    name: 'ClickShop',
    image: '/icons/clickshop.webp',
    modrinth: 'clickshop',
    description:
      'An innovative, highly customizable Spigot shop plugin.',
    links: [
      {
        type: 'MODRINTH',
        href: 'https://modrinth.com/plugin/clickshop',
      },
      {
        type: 'GITHUB',
        href: 'https://github.com/Clickism/ClickShop',
      },
    ],
  },
  {
    name: 'ClickSigns',
    image: '/icons/clicksigns.webp',
    modrinth: 'clicksigns',
    description:
      'An innovative Fabric mod that lets you create custom highway and street signs.',
    links: [
      {
        type: 'MODRINTH',
        href: 'https://modrinth.com/mod/clicksigns',
      },
      {
        type: 'GITHUB',
        href: 'https://github.com/Clickism/ClickSigns',
      },
      {
        type: 'DOCS',
        href: '/docs/clicksigns',
      },
    ],
  },
  {
    name: 'Modrinth Update Checker',
    image: '/icons/modrinth_update_checker.webp',
    description:
      'A single-class Java library for checking newer project versions using the Modrinth API.',
    links: [
      {
        type: 'MAVEN',
        href: 'https://central.sonatype.com/artifact/de.clickism/modrinth-update-checker',
      },
      {
        type: 'GITHUB',
        href: 'https://github.com/Clickism/ModrinthUpdateChecker',
      },
    ],
  },
  {
    name: 'ClickAuth',
    image: '/icons/clickauth.webp',
    modrinth: 'clickauth',
    description:
      'A simple offline authentication plugin that actually works.',
    links: [
      {
        type: 'MODRINTH',
        href: 'https://modrinth.com/mod/clickauth',
      },
      {
        type: 'GITHUB',
        href: 'https://github.com/Clickism/ClickAuth',
      },
    ],
  },
  {
    name: 'Variant Brush',
    image: '/icons/variantbrush.webp',
    modrinth: 'variant-brush',
    description:
      'A simple Fabric mod/Spigot plugin for changing farm animal variants with a brush.',
    links: [
      {
        type: 'MODRINTH',
        href: 'https://modrinth.com/plugin/variant-brush',
      },
      {
        type: 'GITHUB',
        href: 'https://github.com/Clickism/VariantBrush',
      },
    ],
  },
];
