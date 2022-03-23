import esbuildServe from "esbuild-serve";

esbuildServe(
  {
    logLevel: "info",
    entryPoints: ["src/index.tsx"],
    bundle: true,
    outfile: "public/bundle.js",
    define: {
      'process.env.NODE_ENV': '"development"',
      'process.env.DEBUG': 'false',
    },
  },
  {
    root: 'public',
    port: 4000,
  },
);
