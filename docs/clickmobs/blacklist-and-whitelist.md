---
sidebar_position: 2
---
# Blacklist and Whitelist
ClickMobs uses a blacklist and a whitelist that allow you to customize which mobs you can pick up and which you cannot.

You can edit the blacklist/whitelist in the `config.yml` file for ClickMobs.

If you haven't read the [Configuration](configuration.md) section, I recommend you do so first
as it explains how to find and edit the configuration file.

## Blacklist
You can use the blacklist to disable picking up certain mobs.

The default blacklist is:
```yaml
blacklisted_mobs:
- ?hostile
- wither
- ender_dragon
```

**FAQ:**
If you want to enable picking up hostile mobs, you can simply remove the `?hostile` line:
```yaml
blacklisted_mobs:
- wither
- ender_dragon
```

*The `?hostile` is a tag, and targets all hostile mobs. 
We will look into tags in closer detail in the [Tags](tags.md) section.*

If you want to disable picking up a specific mob, you can add it to the blacklist
using its full entity name:
```yaml
blacklisted_mobs:
- cow
- pig
- sheep
- wither
- ender_dragon
```

For *Fabric*, if there is no namespace given, it will default to `minecraft:`.
If you want to target a mob that is added by a mod, you can use the full name with the namespace:
```yaml
blacklisted_mobs:
- pets:cat
- dragons:fire_dragon
```

## Whitelist
The whitelist works in a very similar way to the blacklist, but instead of disabling picking up certain mobs, 
it enables picking up mobs.

**The whitelist has precedence over the blacklist:** 
If a mob is blacklisted **and** whitelisted, it can be picked up.

The default whitelist is:
```yaml
whitelisted_mobs:
- cow
- pig
- sheep
```

You can add mobs to the whitelist using their full entity name:
```yaml
whitelisted_mobs:
- zombie
- skeleton
- cow
- pig
- sheep
```

**Tip:** You can utilize the whitelist and blacklist together to enable/disable picking up of mobs in fine detail!

i.E: Disable picking up all hostile mobs except zombies and skeletons:
```yaml
whitelisted_mobs:
- zombie
- skeleton

blacklisted_mobs:
- ?hostile
```
