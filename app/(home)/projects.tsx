import {docs, external, github, maven, modrinth, Project} from "@/app/(home)/project";
import Image from "next/image";

export const projects: Project[] = [
  {
    name: "ClickVillagers",
    image: "/icons/clickvillagers.webp",
    modrinthSlug: "clickvillagers",
    curseforgeId: 1162587,
    description:
      "A simple Fabric mod/Spigot plugin that makes handling villagers a lot easier.",
    links: [
      modrinth("https://modrinth.com/plugin/clickvillagers"),
      github("https://github.com/Clickism/ClickVillagers"),
    ],
  },
  {
    name: "ClickMobs",
    image: "/icons/clickmobs.webp",
    modrinthSlug: "clickmobs",
    curseforgeId: 1179556,
    description:
      "A simple Fabric mod/Spigot plugin that allows you to pick up any mob into your inventory.",
    links: [
      modrinth("https://modrinth.com/plugin/clickmobs"),
      github("https://github.com/Clickism/ClickMobs"),
    ],
  },
  {
    name: "ClickSigns",
    image: "/icons/clicksigns.webp",
    modrinthSlug: "clicksigns",
    curseforgeId: 1161795,
    description:
      "An innovative Fabric mod that lets you create custom highway and street signs.",
    links: [
      modrinth("https://modrinth.com/mod/clicksigns"),
      github("https://github.com/Clickism/ClickSigns"),
      docs("/docs/clicksigns"),
    ],
  },
  {
    name: "Amazeing",
    label:
      <div className="w-27.5 h-8 relative">
        <Image
          src="/icons/amazeing_logo.png"
          alt="Amazeing"
          fill
          sizes="100px"
          className="object-contain"
          style={{imageRendering: 'pixelated'}}
        />
      </div>,
    description:
      "Amazeing is an educational project consisting of maze-solving challenges that are solved using an assembly-like language.",
    links: [
      external("https://amazeing.clickism.de", 'Play Amazeing'),
      github("https://github.com/Clickism/amazeing")
    ],
  },
  {
    name: "Configured",
    image: "/icons/configured.webp",
    description:
      "A format-independent Java library for generating versioned, documented configuration files from code.",
    links: [
      maven(
        "https://central.sonatype.com/artifact/de.clickism/configured-core",
      ),
      github("https://github.com/Clickism/Configured"),
      docs("/docs/configured"),
    ],
  },
  {
    name: "ClickUI",
    image: "/icons/clickuisign.png",
    description: "A modern, declarative, reactive, client-side UI framework for Minecraft inspired by React.",
    links: [
      github("https://github.com/Clickism/ClickUI"),
      docs("/docs/clickui")
    ]
  },
  {
    name: "ClickShop",
    image: "/icons/clickshop.webp",
    modrinthSlug: "clickshop",
    description: "An innovative, highly customizable Spigot shop plugin.",
    links: [
      modrinth("https://modrinth.com/clickshop"),
      github("https://github.com/Clickism/ClickShop"),
    ],
  },
  {
    name: "Modrinth Update Checker",
    image: "/icons/modrinth_update_checker.webp",
    description:
      "A single-class Java library for checking newer project versions using the Modrinth API.",
    links: [
      maven(
        "https://central.sonatype.com/artifact/de.clickism/modrinth-update-checker",
      ),
      github("https://github.com/Clickism/ModrinthUpdateChecker"),
    ],
  },
  {
    name: "ClickAuth",
    image: "/icons/clickauth.webp",
    modrinthSlug: "clickauth",
    description: "A simple offline authentication plugin that actually works.",
    links: [
      modrinth("https://modrinth.com/clickauth"),
      github("https://github.com/Clickism/ClickAuth"),
    ],
  },
];
