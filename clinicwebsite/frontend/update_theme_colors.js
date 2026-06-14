const fs = require('fs');
const path = require('path');

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
            if (!fs.statSync(fullPath).isDirectory() && (f.endsWith('.js') || f.endsWith('.css'))) {
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

    if (file.endsWith('.js')) {
        // Replace blue and grey background colors
        content = content.replace(/backgroundColor:\s*['"]\s*#03396c\s*['"]/g, 'backgroundColor: "white"');
        content = content.replace(/backgroundColor:\s*['"]rgba\(0,\s*28,\s*40,\s*0\.38\)['"]/g, 'backgroundColor: "white"');
        content = content.replace(/backgroundColor:\s*['"]rgba\(0,0,0,0\.5\)['"]/g, 'backgroundColor: "white"');
        content = content.replace(/backgroundColor:\s*['"]rgba\(0,0,0,0\.38\)['"]/g, 'backgroundColor: "white"');
        
        // Replace text-white class with nothing
        content = content.replace(/className=['"]([^'"]*)text-white([^'"]*)['"]/g, (match, p1, p2) => {
            let newClass = (p1 + p2).trim();
            if (newClass === '') return '';
            return `className="${newClass}"`;
        });
        
        // Replace color: "white" with gold (except in text shadow or anything that isn't a simple property)
        content = content.replace(/color:\s*['"]white['"]/g, 'color: "#B8860B"');

        // Some places might have textShadow that makes things look grey, let's remove it
        content = content.replace(/textShadow:\s*['"][^'"]*['"]/g, 'textShadow: "none"');
    } else if (file.endsWith('.css')) {
        // App.css and index.css
        content = content.replace(/#282c34/g, 'white');
        content = content.replace(/#212121/g, '#B8860B');
        content = content.replace(/color:\s*(?:white|#fff|#ffffff)/gi, 'color: #B8860B');
        content = content.replace(/linear-gradient\([^)]+\)/g, 'white');
        content = content.replace(/#616161/g, '#B8860B');
    }

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Updated', file);
    }
});
