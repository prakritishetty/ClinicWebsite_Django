import os
import re

dir_path = r'e:\ClinicWebsite_Django\clinicwebsite\frontend\src'

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Old gold color: #B8860B
    # New premium dark blue text: #0A2342
    # New premium rich blue backgrounds/borders: #173A5E

    # 1. Colors to dark blue
    content = content.replace('color: "black"', 'color: "#0A2342"')
    content = content.replace('color: "Black"', 'color: "#0A2342"')
    content = content.replace('color="black"', 'color="#0A2342"')
    content = content.replace('color: "white"', 'color: "#0A2342"')
    content = content.replace('color: "#fff"', 'color: "#0A2342"')
    content = content.replace('color: "#B8860B"', 'color: "#0A2342"')
    content = content.replace('textDecorationColor: "silver"', 'textDecorationColor: "#0A2342"')
    content = content.replace('textDecorationColor: "black"', 'textDecoration: "none"')
    
    # 2. Backgrounds to shades of white
    content = content.replace('backgroundColor: "black"', 'backgroundColor: "#f9f9f9"')
    content = content.replace('backgroundColor: "rgba(0, 28, 40, 0.67)"', 'backgroundColor: "#f0f0f0"')
    content = content.replace('backgroundColor: "rgba(0,0,0,0.5)"', 'backgroundColor: "#fdfdfd"')
    content = content.replace('backgroundColor: theme.palette.common.black', 'backgroundColor: "#fafafa"')
    
    # Remove gray button backgrounds in Footer/Navbar
    content = content.replace('color="light"', '')
    content = content.replace('backgroundColor: this.state.isOpenDoctorLogin\n                //   ? "lightslategrey"\n                //   : "rgba(0, 28, 40, 0.38)",', '')
    
    # 3. Borders or demarcations
    content = content.replace('borderColor: "black"', 'borderColor: "#173A5E"')
    content = content.replace('borderColor: "white"', 'borderColor: "#173A5E"')
    
    # 4. Remove backgroundImage
    content = re.sub(r'backgroundImage:\s*`url\([^)]+\)`', 'backgroundColor: "#fcfcfc"', content)

    # 5. Comment out JSX img tags
    content = re.sub(r'(?<!\{\/\*\s)(<img[^>]+>)', r'{/* \1 */}', content)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

for root, _, files in os.walk(dir_path):
    for file in files:
        if file.endswith('.js'):
            process_file(os.path.join(root, file))
print('Done!')
