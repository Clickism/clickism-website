---
sidebar_position: 4
---
# Advanced Tags
This page gives additional information and examples about more advanced tags, like `?customdata`.

## ?customdata
The `?customdata` tag will only select mobs that have the given custom data entries in their _persistent data container_.
- _A persistent data container is a dedicated area in the entity's NBT data, that plugins can use to store their custom data on a mob.
It is used to implement custom mobs or custom functionality and is used even by ClickMobs itself._

The `?customdata` tag has the following signature:
- `?customdata(entry1, entry2, ...)` : Will only select mobs that have **any** of the given custom data entries in their persistent data container.

Where an entry can be in two different forms:

1. **Key entry:** `namespace:key` - Will select mobs that have the given namespaced key in their persistent data container. 
   - i.E: `?customdata(clickmobs:type)` will select all mobs that have the key `clickmobs:type` in their persistent data container.
2. **Key-value entry:** `namespace:key=type[value]` - Will select mobs that have the given namespaced key **and** value in their persistent data container.
   - `type` corresponds to `PersistentDataType` in the Bukkit API. It can be lower or upper case. The following types are supported:
     - `string`, `int` or `integer`, `long`, `double`, `boolean` or `bool`, `byte`, `float`, `short`
   - _Knowing which type to use might require some internal knowledge of the plugin that handles the custom data._

### Example
Example blacklist:
```yaml
blacklisted_mobs:
- ?customdata(clickmobs:type)
- ?customdata(clickmobs:type=string[zombie])
- ?customdata(animals:pet=bool[true])
- ?customdata(fighters:level=int[5])
- ?customdata(animals:type=string[dog])
- ?customdata(creatures:type, creatures:level=int[10])
```
Behavior of the blacklist:
- `?customdata(clickmobs:type)`
  - Selects all mobs that have the key *clickmobs:type* in their pdc.
- `?customdata(clickmobs:type=string[zombie])`
  - Selects all mobs that have the key *clickmobs:type* with the value *zombie* in their pdc.
- `?customdata(animals:pet=bool[true])`
  - Selects all mobs that have the key *animals:pet* with the value *true* in their pdc.
- `?customdata(fighters:level=int[5])`
  - Selects all mobs that have the key *fighters:level* with the value *5* in their pdc.
- `?customdata(animals:type=string[dog])`
  - Selects all mobs that have the key *animals:type* with the value *dog* in their pdc.
- `?customdata(creatures:type, creatures:level=int[10])`
    - Selects all mobs that have the key *creatures:type* with any value or have the key *creatures:level* with the value *10* in their pdc.

