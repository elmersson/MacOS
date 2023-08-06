import localFont from 'next/font/local';

export const SFPRO = localFont({
    src: [
      {
        path: './sf-pro-text-regular-webfont.woff2',
        weight: '400',
        style: 'normal',
      },
      {
        path: './sf-pro-text-semibold.woff2',
        weight: '600',
        style: 'normal'
      }
    ],
  })