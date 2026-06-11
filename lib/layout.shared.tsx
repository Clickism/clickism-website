import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';
import { customIcons } from './icons';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          {customIcons.clickism}
          {appName}
        </>
      ),
    },
    links: [
      {
        text: 'Documentation',
        url: '/docs',
        on: 'nav',
      },
      {
        type: 'icon',
        icon: customIcons.discord,
        external: true,
        url: 'https://discord.gg/zUetzp3Gzk',
        text: 'Discord',
        label: 'Discord',
        on: 'all',
      }
    ],
    githubUrl: `https://github.com/${gitConfig.user}`,

  };
}
