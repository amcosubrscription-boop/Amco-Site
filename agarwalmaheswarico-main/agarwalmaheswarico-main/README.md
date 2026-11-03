# Agarwal Maheswari & Co. — Bootstrap website

Complete static project: 34 full HTML pages, Bootstrap 5.3.3, custom CSS, vanilla JavaScript, and a separate images folder.

## Files

- index.html: home page
- about.html, services.html, team.html, blog.html, contact.html: main pages
- services/: six service detail pages
- team/: eleven individual profile pages
- blog/: eleven archived article pages
- css/bootstrap.min.css: local Bootstrap stylesheet
- css/style.css: editable site styles and responsive layouts
- js/bootstrap.bundle.min.js: local Bootstrap JavaScript bundle
- js/main.js: blog search
- images/: all logos, portraits and image assets

Every HTML page contains its text and layout directly. There is no JSON content loader, framework, npm installation or build step. Bootstrap controls the responsive grid and mobile navigation. All internal file and image paths are relative, so index.html can be opened directly after extraction. Google Fonts requires an internet connection; system fonts are the fallback.

## GitHub and Cloudflare Pages

Upload the files and folders inside this project to your GitHub repository root (index.html must be at the root).
In Cloudflare Pages, connect this repository. Choose Framework preset: None. Leave Build command empty. Set Build output directory to . (the repository root). Deploy.

## Editing

Edit page text directly in the corresponding .html file. Edit design in css/style.css. Replace images in images/ and keep the same filename, or update the img src path in the HTML. The header and footer are present in each page; update their copies when changing navigation or shared details.

## Content notes

Some portraits were digitally edited for professional presentation. Confirm the likeness of these portraits. Blog content is an archived collection from 2020. Two source entries contained no readable article body; these pages retain the available material and links to the original entries.
