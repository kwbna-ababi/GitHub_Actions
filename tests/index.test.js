const http = require('http');

test('Server responds with Hello, World!', (done) => {
  const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/',
    method: 'GET',
  };

  const req = http.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      expect(data.trim()).toBe('Hello, World!');
      done();
    });
  });

  req.on('error', (error) => {
    done(error);
  });

  req.end();
});
