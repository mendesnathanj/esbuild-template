import linaria from '@linaria/esbuild';
import esbuildServe from "esbuild-serve";

const prod = process.env.NODE_ENV === 'production';

esbuildServe(
  {
    chunkNames: 'chunks/[name]-[hash]',
    logLevel: "info",
    entryPoints: [
      'src/entries/customer.tsx',
      'src/entries/admin.tsx',
    ],
    entryNames: '[dir]/[name]-[hash]',
    bundle: true,
    write: true,
    format: 'esm',
    outdir: 'public',
    define: {
      'process.env.NODE_ENV': '"development"',
      'process.env.DEBUG': 'false',
    },
    plugins: [
      linaria.default({
        sourceMap: prod,
      })
    ],
    splitting: true,
  },
  {
    root: 'public',
    port: 4000,
  },
);
