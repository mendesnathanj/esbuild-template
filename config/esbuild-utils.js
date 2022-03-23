import fs from 'fs';

export const removeFiles = (esbuildResult, dir) => {
  const outputtedFiles = Object.keys(esbuildResult.metafile.outputs).map(file => file.replace(`${dir}/`, ''));

  fs.readdir(dir, (err, files) => {
    const htmlRegex = /.*\.html/g;

    files.forEach(file => {
      if (file.match(htmlRegex) || outputtedFiles.includes(file)) return;

      console.log(`Removing ${file}...`);
      fs.unlink(`${dir}/${file}`, (e) => { if (e) { console.log(e) } });
    });
  });
};
