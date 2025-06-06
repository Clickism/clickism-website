---
sidebar_position: 2
---
# Tags (Predicates)
You can use tags to blacklist/whitelist mobs with certain properties.
Combining tags alongside negating them gives you a powerful filtering tool, to only
blacklist/whitelist mobs you
want.

_Note: Tags behave the same way on Fabric and Paper/Spigot._

**Available tags:**

`?all, ?hostile, ?baby, ?tamed, ?nametagged, ?silent, ?mob`

### Using Tags
To use tags, add them as a line to your blacklist/whitelist. i.E:
```yaml
blacklisted_mobs:
- ?hostile
- ?nametagged
- cow
```
### Negating Tags
You can negate tags by putting `not` before them. i.E:
```yaml
- not ?hostile
- not ?baby
```
This will only negate the tag right after it.

### Combining Tags
You can combine tags by putting them after each other, the mob will then only be selected if it fulfills all tags. i.E:
```yaml
- ?namettaged ?hostile
- ?baby not ?hostile
```

### Passing Arguments to Tags
Some tags (i.E. `?nametagged` and `?mob` can take argument(s). i.E:
```yaml
- ?nametagged(Can't pick me up!)
- ?mob(creeper, zombie)
```
You can find more details about which arguments they take in the next section.

## Tag Behavior

`?all` : Will select all mobs.

`?hostile` : Will only select hostile mobs.

`?baby` : Will only select baby mobs.

`?tamed` : Will only select tamed mobs (i.E: wolves and cats that have an owner).

`?nametagged` : Will only select mobs that have a custom name (are nametagged).

`?nametagged(name)` : Will only select mobs that have a custom name, that matches the argument `name`.

`?silent`: Will only select mobs that are silent.

`?mob(type1, type2,...)` : Will only select mobs that are of one of the given types. Powerful when combined with other tags.

`?leashed` : Will only select mobs that are leashed.

## Examples
```yaml
- ?mob(cow, pig, sheep) ?baby ?nametagged(Cute!) # Will only select baby cows, pigs and sheep that are named "Cute!".
- ?nametagged(Locked) # Will select all mobs that are named "Locked"
- ?hostile not ?baby # Will select hostile mobs that are not babies.
- ?mob(wolf) ?tamed # Will select tamed wolves.
- not ?hostile ?silent # Will select passive and silent mobs.
- ?mob(creeper, zombie, skeleton) # Will only select creepers, zombies, and skeletons.
- ?mob(chicken) ?leashed # Will only select chickens that are leashed.
```
If you want to allow only whitelisted mobs, blacklist all mobs.
```yaml
whitelisted_mobs:
- cow
- pig
- sheep

blacklisted_mobs:
- ?all
```
