# Museum Zone - Static Website

This is the static website for Museum Zone, a luxury retail and wholesale destination in Dubai.
Developed by mohammed Ansaf.

## Project Structure

- `/public`: Contains all the deployable website files (HTML, built CSS, images).
- `/src`: Contains the source Tailwind CSS file (`input.css`).
- `package.json`: Lists project dependencies and scripts.
- `package-lock.json`: Ensures consistent dependency installation.
- `tailwind.config.js`: Tailwind CSS configuration.
- `postcss.config.js`: PostCSS configuration (used by Tailwind).

## Prerequisites for Development/Modifications

- Node.js 
- npm 

## Setup for Development

1.  Ensure Node.js and npm are installed.
2.  Navigate to the project's root directory in a terminal.
3.  Install project dependencies:
    ```bash
    npm install
    ```
    This will create a `node_modules` folder (which is not included in this deliverable but can be regenerated with this command).

## Development Scripts

-   To watch for changes in `src/input.css` and automatically rebuild `public/css/style.css` for live development:
    ```bash
    npm run watch
    ```
-   To build and minify the CSS for production:
    ```bash
    npm run build
    ```
    This command generates/updates `public/css/style.css`.

## Viewing Locally

After running `npm run watch` or `npm run build`, open the `public/index.html` file in a web browser.

## Deployment Instructions

**The files to deploy to the web server are located exclusively within the `/public` folder.**

Upload the *entire contents* of the `/public` folder to the web server's root directory (or the appropriate subdirectory for the website). This includes:

-   `public/index.html`
-   `public/css/style.css`
-   `public/images/` (and all images within)
-   Any other files or folders you might add inside `/public` in the future.

**Do NOT upload the following to the web server (these are for development only):**
-   `node_modules/` (if generated locally)
-   `src/`
-   `package.json`
-   `package-lock.json`
-   `tailwind.config.js`
-   `postcss.config.js`
-   `.gitignore`
-   `README.md`
-   `LICENSE` (unless required by company policy to be on the server)

## Technologies Used

-   HTML5
-   Tailwind CSS v3.4.17 (or your version)
-   JavaScript (for client-side interactions and WOW.js animations)
-   PostCSS & Autoprefixer

---
Date of Handover: [Date]
Developer: [Your Name]
Contact: [Your Email or Phone, if appropriate]