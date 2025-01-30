// ---------------- read file------------------
const fs = require('fs');
fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
    console.error('Error reading file:', err);
    } else {
    console.log('File contents:', data);
    }
});

//_----------------write file----------------
fs.writeFile('output.txt', 'This is some sample data.', (err) => {
    if (err) {
    console.error('Error writing file:', err);
    } else {
    console.log('Data written to output.txt');
    }
    });

// ----------------- Operating system Information ----------------
const os = require('os');
console.log('Operating system platform:', os.platform());
console.log('Hostname:', os.hostname());
console.log('Hostname:', os.cpus());

// ----------------- OPerating system Information ussing fs ------------------
const hostname = os.hostname();
const platform = os.platform();
const cpus = os.cpus();

console.log('Hostname:', hostname);
console.log('Platform:', platform);
console.log('CPU Cores:', cpus.length);


const fileInfo = `
Hostname: ${hostname}
Platform: ${platform}
CPU Cores: ${cpus.length}
`;

fs.writeFile('os_info.txt', fileInfo, (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log('Information written to os_info.txt file.');
});

// ------------------Syronous function ---------------

try {
    const data = fs.readFileSync('sample.txt', 'utf8');
    console.log('File contents (Synchronous Read):', data);
  } catch (err) {
    console.error('Error reading file:', err);
  }

  const info = `Hostname: ${os.hostname()}\nPlatform: ${os.platform()}`;

// -----------write and read file-----------------
try {
  fs.writeFileSync('system_info.txt', info);
  console.log('System information has been written to system_info.txt');
} catch (err) {
  console.error('Error writing system information:', err);
}

try {
    fs.writeFileSync('output.txt', 'This is some sample data (Synchronous Write).');
    console.log('Data written to output.txt (Synchronous Write)');
  } catch (err) {
    console.error('Error writing file:', err);
  }

// ---------------Sychronous function to write and read file of os ----------------
const info1 = `Hostname: ${os.hostname()}\nPlatform: ${os.platform()}`;

// Write the information to a file
try {
  fs.writeFileSync('system_info.txt', info1);
  console.log('System information has been written to system_info.txt');
} catch (err) {
  console.error('Error writing system information:', err);
}

