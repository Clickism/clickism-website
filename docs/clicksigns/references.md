# References

### Template

| Name        | Type                               | Description                                                            |
|-------------|------------------------------------|------------------------------------------------------------------------|
| `width`     | `Integer`                          | Width in minecraft blocks                                              |
| `height`    | `Integer`                          | Height in minecraft blocks                                             |
| `id`        | `String`                           | Unique identifier, see [id](#id)                                       |
| `name`      | `String`                           | Name of the sign                                                       |
| `pack`      | `Object`                           | Information about the resourcepack                                     |
| `pack.id`   | `String`                           | Id of the resource pack                                                |
| `pack.name` | `String`                           | Name of the resource pack                                              |
| `category`  | `"TEMPLATE" \| "PART" \| "CUSTOM"` | TODO: Describe this.<br/> Defaults to `"CUSTOM"`                       |
| `author`    | `String`                           | Author of the sign                                                     |
| `variant`   | `List<Variant>`                    | Requires at least 1 item<br/>List of variants, see [Variant](#variant) |

### TextPosition

| Name         | Type                        | Description                                                          |
|--------------|-----------------------------|----------------------------------------------------------------------|
| `x`          | `Float`                     |                                                                      |
| `y`          | `Float`                     |                                                                      |
| `maxWidth`   | `Integer`                   | Maximum width of a text field.                                       |
| `colorIndex` | `Integer`                   | Index of the `"colors"` field in variants. It must be within bounds. |
| `scale`      | `Float`                     | Scale of the written text, default: 1.0                              |
| `alignment`  | `"LEFT", "CENTER", "RIGHT"` | Optional. Text alignment across the field<br/>Defaults to `"LEFT"`   |

### Variant

| Name     | Type            | Description                                                                                                                                                                                                       |
|----------|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `name`   | `String`        | Name of the texture variant                                                                                                                                                                                       |
| `front`  | `String`        | Location within the resource pack of the front texture                                                                                                                                                            |
| `back`   | `String`        | Location within the resource pack of the back texture                                                                                                                                                             |
| `colors` | `List<Integer>` | Each entry is a decimal representation of a color, these can be referenced by `textPositions` to set the text's color.<br/>See https://convertingcolors.com for a quick conversion of common formats into decimal |
