---
sidebar_position: 3
---
# Localization 🌍

Localization is a powerful feature of Configured that allows you to manage translations
and internationalization in a simple way.

It is based on **enums**, which makes it easy to work with and allows you to avoid common pitfalls
like mistyped keys or missing translations. Thanks to enums, you will also catch errors in compile-time
and have **autocompletion** in your IDE.

It also comes with **annotation** based parameter support, which allows you to pass parameters
to your translations, making it easy to create dynamic messages.

You can define a localization enum by implementing the `LocalizationKey` interface:

```java
enum Message implements LocalizationKey {
    USER_NOT_FOUND,
    CONFIGURATION_ERROR,
    INVALID_INPUT,
    OPERATION_SUCCESS,
    OPERATION_FAILED,
}
```

You can then create a `Localization` instance like this:

```java
public static final Localization LOCALIZATION =
        Localization.of(lang -> lang + ".json") // Format inferred from the file extension
                .resourceProvider(Main.class, lang -> "/" + lang + ".json")
                .fallbackLanguage("en_US")
                .version(1)
                .load();
```

And receive translations like this:

```java
public static void main(String[] args) {
    LOCALIZATION.get(Message.USER_NOT_FOUND); // Returns the translation for USER_NOT_FOUND
    LOCALIZATION.get(Message.INVALID_INPUT); // Returns the translation for INVALID_INPUT
}
```

The `resourceProvider` method lets you "deploy" your localization files directly from the classpath,
(i.E. from the `resources/` folder, as done here), making it easy to bundle localization files
with your application.

In this example, the localization file `en_US.json` will be loaded from the classpath's
`resources/` directory, and it will be used as the fallback language, and be copied as
`en_US.json` in the working directory.

## Parameterized Translations

Parameterized translations allow you to create dynamic messages by passing parameters
to your translations. You can use the `@Parameters(...)` annotation to define parameters in
your translations:

```java
enum Message implements LocalizationKey {
    @Parameters("username")
    USER_NOT_FOUND,
    CONFIGURATION_ERROR,
    INVALID_INPUT,
    @Parameters({"player", "action"})
    OPERATION_SUCCESS,
    @Parameters({"reason", "details"})
    OPERATION_FAILED,
}
```

You can then pass parameters to your translations like this, in the **exact order** they were
declared in the annotation. This allows you to easily pass parameters to your translations without
worrying about the parameter name or key:

```java
LOCALIZATION.get(Message.USER_NOT_FOUND, "Clickism");
LOCALIZATION.get(Message.OPERATION_SUCCESS, "Clickism", "Creating a new config");
LOCALIZATION.get(Message.OPERATION_FAILED, "Invalid data", "Data does not match expected format");
```

This will return the translation for `USER_NOT_FOUND` with the placeholder `{username}` replaced
with `"Clickism"`.

And for `OPERATION_SUCCESS` with the placeholders `{player}`
and `{action}` replaced with `"Clickism"` and `"created a new config"`, respectively.

And for `OPERATION_FAILED` with the placeholders `{reason}` and `{details}`
replaced with `"Invalid data"` and `"Data does not match expected format"`, respectively.

i.E, for a given localization file:

```json
{
  "user_not_found": "User {username} not found.",
  "operation_success": "{player} successfully performed an operation: {action}.",
  "operation_failed": "Operation failed, reason: {reason}, details: {details}."
}
```
This will return the following messages:

```
User Clickism not found.
Clickism successfully performed an operation: Creating a new config.
Operation failed, reason: Invalid data, details: Data does not match expected format.
```
