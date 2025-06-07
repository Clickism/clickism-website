---
sidebar_position: 1
title: Adding to Your Project
---
# Adding to Your Project 📦
Configured is available on **Maven Central**, so you can easily add it to your project
using Maven or Gradle.

Configured is divided into multiple modules:
- `configured-core`: The core configuration library.
- `configured-localization`: The localization library built on top of Configured.

And each data format has its own module:
- `configured-yaml`: The YAML data format module.
- `configured-json`: The JSON data format module.

Make sure to include the modules you need in your project:
```kotlin
repositories {
    mavenCentral()
}

dependencies {
    implementation("de.clickism:configured-core:0.2.3") // Required
    implementation("de.clickism:configured-yaml:0.2.3")
    implementation("de.clickism:configured-json:0.2.3")
    implementation("de.clickism:configured-localization:0.2.3")
}
```
