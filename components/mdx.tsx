import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { Callout } from "fumadocs-ui/components/callout";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    ...components,
    img: (props) => (
      <ImageZoom
        {...(props as any)}
        className="rounded-2xl border border-white/20"
        rmiz={{
          canSwipeToUnzoom: true,
        }}
      />
    ),
    blockquote: (props) => <Callout>{props.children}</Callout>,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
