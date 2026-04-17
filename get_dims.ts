import https from 'https';

const url = 'https://www.dropbox.com/scl/fi/q303ib81dl4i8ubvxewou/IMG_9084.jpg?rlkey=vjox3y9ik54fzw8iqqm5v1ifk&st=l8d8cq4b&raw=1';

https.get(url, (res) => {
  let data = Buffer.alloc(0);
  res.on('data', (chunk) => {
    data = Buffer.concat([data, chunk]);
    // JPEG SOF0 marker is 0xFF 0xC0
    // We need to find the SOF marker to get dimensions
    if (data.length > 1024) { // Usually enough to find headers
      for (let i = 0; i < data.length - 8; i++) {
        if (data[i] === 0xFF && (data[i+1] === 0xC0 || data[i+1] === 0xC2)) {
          const height = data.readUInt16BE(i + 5);
          const width = data.readUInt16BE(i + 7);
          console.log(`Dimensions: ${width}x${height}`);
          process.exit(0);
        }
      }
    }
  });
  res.on('end', () => {
    console.log('Could not find dimensions in the first chunk.');
    process.exit(1);
  });
}).on('error', (e) => {
  console.error(e);
  process.exit(1);
});
