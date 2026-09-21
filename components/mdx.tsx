import defaultMdxComponents from "fumadocs-ui/mdx";
import type {MDXComponents} from "mdx/types";
import {Callout} from "fumadocs-ui/components/callout";

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    ...components,
    blockquote: (props) => (
      <Callout>{props.children}</Callout>
    )
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
