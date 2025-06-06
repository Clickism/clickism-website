---
sidebar_position: 2
---
# Template Guide
> This is a work in progress guide, some information could be incomplete or slighly wrong, we ask that you
> tell us if there is anything wrong or missing.

This guide assumes that you are familiar with creating your
own [Minecraft resource pack](https://minecraft.fandom.com/wiki/Tutorials/Creating_a_resource_pack).

This guide:

- Provides a basic resource pack example with templates
- Covers basic understanding of sign templates
- Suggests tools to ease development

This guide does not:

- Covers how to design your signs

## Suggested tooling

Any kind of pixel editor, examples can be:

- [paint.net](https://www.getpaint.net)
- [Aseprite](https://www.aseprite.org)

It is heavily recommended but not required to have a sort of text editor that allows you to edit `.json` file, such as:

- [Visual Studio Code](https://code.visualstudio.com)
- [Sublime Text](https://www.sublimetext.com)

## Getting started

### Resource packs

Resource packs are used to tell ClickSigns two things:

- They provide information of your signs (from now on templates)
- They store the textures for the templates

### Textures

Textures are simple images that we use to represent the actual signs, for any coordinate or number in ClickSigns keep in
mind that they are calculated based on a grid of 16x16.

### Example Resource Pack Structure

This [template](todo: add a template) has a basic example showcases most of the features that the mods provides and can
serve as a base. We will be using this example for the rest of the guide.

> The direct examples display additional comments `//` which are not valid `json`, do not use these examples without
> removing said comments.

```text
├── assets
|   ├── my-resource-pack
|   |   ├── sign_templates
|   |   |   ├── 1x1_simple.json
|   |   |   ├── 1x1_simple_with_arrows.json
|   |   ├── textures
|   |   |   ├── 1x1_simple.png
|   |   |   ├── 1x1_simple_with_arrows.png
|   |   |   ├── backs
|   |   |   |   └── 1x1_generic_back.png
└── pack.mcmeta
```

### Understanding template files

Template files are `json` files that tells ClickSigns:

- What the sign is called
- Who made it (useful on collaborative packs)
- Where to get their textures (in theory, you could use other resource packs)
- If the sign can be [text written over it ](#writable)
    - Where it can be written
    - How the text looks
- If the sign has [variants](#variants) (IE: direction arrows, colors, or different designs)

Below there is an example of a basic sign `1x1_simple.json`:

```json
{
  "width": 1,
  "height": 1,
  "id": "1x1_stop_sign",
  "name": "Stop Sign", // This name is what will be displayed on the sign list
  "pack": {
    "id": "my-resource-pack", // Id of the mod
    "name": "My resource pack" // Fancy name to display
  },
  "variants": [
    {
      // This can be anything, if you add more variants
      // then use these names to provide a better meaing
      "name": "Universal",
      "front": "1x1_stop_sign.png",
      "back": "backs/1x1_hexagonal.png"
    }
  ]
}
```

This sign displays a simple texture when placed, with no text or complex behavior

> Note that the textures are expected to be located in the resource pack described on `pack.id` on the path
`my-resource-pack/textures`. Failing to follow this could cause your textures to not load.

### Templates

To achieve dynamic variants we use text templating, which is a fancy word to indicate that some of the texts in the file
are dynamically replaced when the files are read, to our previous sign in order to add some arrows

```json
{
  "width": 1,
  "height": 1,
  // With template generator, we can now add multiple
  // variants which they require their unique id
  "id": "2x1_arrow_{direction}", // Note the brackets {}
  "name": "Simple",
  "pack": {
    "id": "my-resource-pack",
    "name": "My resource pack"
  },
  "templateGenerator": {
    // We use directions to add arrows
    "directions": [
      {
        "direction": "left",
        "arrows": ["L"]
      },
      {
        "direction": "right",
        "arrows": ["R"]
      }
    ]
  }
}
```

#### Template tokens:

As we saw in the previous example there were some modifications to the `id` field, which now includes the `{direction}`
text, this is a `token`, which is a value that can be replaced by ClickSigns when reading your templates

##### Built-in tokens

| Name        | Description                                                                                                                                         |
|-------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| `direction` | Only available when defining the direction list on `templateGenerator.directions`, the text is replaced with the value in `direction`: (IE: `left`) |

###### Custom tokens

You can define your own custom tokens so you can reduce repetition at `templateGenerator.replace`, these are not dynamic
and are meant to use as shorthands

```json
{
  //... rest of your fields
  "templateGenerator": {
    "replace": {
      "root": "deep/nested/texture/name/why/tho"
    }
  },
  // And can be later referenced
  "variants": [
    {
      "name": "Green",
      // Will turn into "deep/nested/texture/name/why/tho/front.png"
      "front": "{root}/front.png",
      // Will turn into "deep/nested/texture/name/why/tho/back.png"
      "back": "{root}/back.png"
    }
  ]
}
```

### Writable

Another powerful feature of ClickSigns is the ability to write on your signs

```json
{
  // ... rest of your template
  "textPositions": [
    {
      "x": 2,
      "y": 10,
      "maxWidth": 33,
      "scale": 1,
      "colorIndex": 0,
      "textAlignment": "CENTER"
    }
  ]
}
```

> See [TextPositions Reference](references.md#textposition) for a more detailed explanation

#### Variants

Variants can be used for to provide the same sign in different visual styles, colors or shapes, it's up to you to define
the logic behind the visual variants

```json
{
  // ... rest of your template
  "variants": [
    {
      "name": "Green",
      "front": "sign_green.png",
      "back": "sign_back.png",
      "colors": [32768]
    },
    {
      "name": "Brown",
      "front": "sign_brown.png",
      "back": "sign_back.png",
      "colors": [5917243]
    }
  ]
}
```
