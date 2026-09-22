import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { Callout } from "fumadocs-ui/components/callout";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import {
  File as FumaFile,
  FileProps,
  Files as FumaFiles,
  Folder as FumaFolder,
} from "fumadocs-ui/components/files";
import { Braces } from "lucide-react";

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

export function File(props: FileProps) {
  const icons: Record<string, React.ReactNode> = {
    json: <Braces />,
    mcmeta: <Braces />,
  };
  const extension = props.name.split(".").pop()?.toLowerCase();
  if (extension && extension in icons) {
    return <FumaFile {...props} {...{ icon: icons[extension] }} />;
  }
  return <FumaFile {...props} {...{}} />;
}

export const Folder = FumaFolder;
export const Files = FumaFiles;
