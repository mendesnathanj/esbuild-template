import serve from 'create-serve';
import chokidar from 'chokidar';

serve.start({
  port: 3000,
  root: '.',
  live: true,
});

chokidar.watch(['./public/admin.html', './public/index.html']).on('change', () => {
  serve.update();
});
