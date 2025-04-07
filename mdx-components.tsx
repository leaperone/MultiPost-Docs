import defaultMdxComponents from 'fumadocs-ui/mdx';
import { openapi } from '@/lib/source';
import type { MDXComponents } from 'mdx/types';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
    APIPage: openapi.APIPage,
  };
}
