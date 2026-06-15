import os
import re

dir_path = r'e:\ClinicWebsite_Django\clinicwebsite\frontend\src'

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Colors to gold
    content = content.replace('color: "black"', 'color: "#B8860B"')
    content = content.replace('color: "Black"', 'color: "#B8860B"')
    content = content.replace('color="black"', 'color="#B8860B"')
    content = content.replace('color: "white"', 'color: "#B8860B"')
    content = content.replace('color: "#fff"', 'color: "#B8860B"')
    content = content.replace('textDecorationColor: "silver"', 'textDecorationColor: "#B8860B"')
    
    # 2. Backgrounds to shades of white
    content = content.replace('backgroundColor: "black"', 'backgroundColor: "#f9f9f9"')
    content = content.replace('backgroundColor: "rgba(0, 28, 40, 0.67)"', 'backgroundColor: "#f0f0f0"')
    content = content.replace('backgroundColor: "rgba(0,0,0,0.5)"', 'backgroundColor: "#fdfdfd"')
    content = content.replace('backgroundColor: theme.palette.common.black', 'backgroundColor: "#fafafa"')
    
    # 3. Borders or demarcations
    content = content.replace('borderColor: "black"', 'borderColor: "#eaeaea"')
    
    # 4. Remove backgroundImage
    content = re.sub(r'backgroundImage:\s*`url\([^)]+\)`', 'backgroundColor: "#fcfcfc"', content)
    content = re.sub(r'backgroundImage:\s*`url\([^)]+\)`', 'backgroundColor: "#fcfcfc"', content)

    # 5. Comment out JSX img tags
    # Replace <img ... /> with {/* <img ... /> */} if not already commented out
    # Only if it's not already preceded by {/*
    content = re.sub(r'(?<!\{\/\*\s)(<img[^>]+>)', r'{/* \1 */}', content)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

for root, _, files in os.walk(dir_path):
    for file in files:
        if file.endswith('.js'):
            process_file(os.path.join(root, file))
print('Done!')
