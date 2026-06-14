const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        if (isDirectory) {
            walkDir(dirPath, callback);
        } else {
            callback(dirPath);
        }
    });
}

const targetDirs = [
    path.join(__dirname, 'src', 'components'),
    path.join(__dirname, 'src', 'utils'),
    path.join(__dirname, 'src')
];

let filesToProcess = [];

targetDirs.forEach(d => {
    if (fs.existsSync(d) && fs.statSync(d).isDirectory()) {
        fs.readdirSync(d).forEach(f => {
            let fullPath = path.join(d, f);
            if (!fs.statSync(fullPath).isDirectory() && f.endsWith('.js')) {
                if (!filesToProcess.includes(fullPath)) {
                    filesToProcess.push(fullPath);
                }
            }
        });
    }
});

filesToProcess.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // 1. Reduce font sizes
    content = content.replace(/fontSize:\s*['"](\d+(?:\.\d+)?)vw['"]/g, (match, size) => {
        let newSize = parseFloat(size) * 0.75; // Reduce by 25%
        return `fontSize: "${newSize}vw"`;
    });

    // 2. Change colors to gold (#B8860B)
    content = content.replace(/color:\s*['"](?:black|Black)['"]/g, 'color: "#B8860B"');

    // 3. Special fix for App.js backgroundImage
    if (file.endsWith('App.js') || file.endsWith('AppTemp.js')) {
        content = content.replace(/backgroundImage:\s*`url\(\$\{removeWM_clinic1\}\)`/, '/* User requested to comment out photos: backgroundImage: `url(${removeWM_clinic1})` */');
    }

    // 4. Comment out img tags except in BeforeAfterUtils.js
    if (!file.endsWith('BeforeAfterUtils.js')) {
        const imgRegex = /<img\b[^>]*?(?:>.*?<\/img>|\/?>)/gs;
        content = content.replace(imgRegex, (match) => {
            if (match.includes('User requested to comment out')) return match;
            return `{/* User requested to comment out photos\n${match}\n*/}`;
        });
    }

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Updated', file);
    }
});
