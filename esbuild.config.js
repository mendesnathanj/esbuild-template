import linaria from '@linaria/esbuild';
import { htmlPlugin } from '@craftamap/esbuild-plugin-html';
import esbuild from 'esbuild';
import { removeFiles } from './config/esbuild-utils.js';

const prod = process.env.NODE_ENV === 'production';

const htmlPluginOptions = {
  files: [
    {
      entryPoints: [
        'src/entries/customer.tsx',
      ],
      filename: 'index.html',
      htmlTemplate: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>
            <body>
                <div id="root">
                </div>
            </body>
            </html>
          `,
    },
    {
      entryPoints: [
        'src/entries/admin.tsx',
      ],
      filename: 'admin.html',
      title: 'Admin',
      htmlTemplate: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>
            <body>
                <div id="root">
                </div>
            </body>
            </html>
          `,
    },
  ]
};

const esbuildOptions = {
  logLevel: "info",
  entryPoints: [
    'src/entries/customer.tsx',
    'src/entries/admin.tsx',
  ],
  entryNames: '[dir]/[name]-[hash]',
  bundle: true,
  write: true,
  metafile: true,
  format: 'esm',
  outdir: 'public',
  define: {
    'process.env.NODE_ENV': '"development"',
    'process.env.DEBUG': 'false',
  },
  banner: { js: ' (() => new EventSource("/esbuild").onmessage = () => location.reload())();' },
  watch: {
    onRebuild(error, result) {
      if (error) return;

      removeFiles(result, 'public');
    },
  },
  plugins: [
    linaria.default({
      sourceMap: prod,
    }),
    htmlPlugin(htmlPluginOptions),
  ],
};

esbuild.build(esbuildOptions).catch(() => process.exit(1));

