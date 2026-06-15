import os
import re

dir_path = r'e:\ClinicWebsite_Django\clinicwebsite\frontend\src'

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Generic replace of #B8860B to #0A2342
    content = content.replace('#B8860B', '#0A2342')
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

for root, _, files in os.walk(dir_path):
    for file in files:
        if file.endswith(('.js', '.css')):
            process_file(os.path.join(root, file))
print('Done!')
