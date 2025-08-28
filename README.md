# CTRL+ALT+DEFEND — Podcast Website (GitHub Pages / Jekyll)

Production-ready static site for the podcast **CTRL+ALT+DEFEND**.

## Quick Start
1. Create a new GitHub repo and upload this folder (or extract and push the ZIP).
2. In GitHub, open **Settings → Pages** and choose to build from the `main` branch (root).
3. (Optional) Add a custom domain via a `CNAME` file.

## Monthly Episode Updates (one-file workflow)
1. Upload your MP3 to your host/CDN and copy the URL.
2. Duplicate `/_episodes/_TEMPLATE.md` and rename as `YYYY-MM-DD-ep-XX-title.md`.
3. Fill in front matter fields (`title`, `date`, `episode_number`, `summary`, `duration`, `audio.mp3_url`, `filesize_bytes`, etc.).
4. Commit to `main`. GitHub Pages rebuilds automatically.
5. Your podcast RSS is available at **/podcast.xml** — submit this to Apple/Spotify once live.

## Developer Notes
- Built with Jekyll using **no non-whitelisted plugins**.
- Client-side search powered by Lunr.js (CDN) using `/episodes.json` data.
- Accessibility: semantic HTML5, skip links, focus states, alt text, color contrast (WCAG AA).
- Edit colors/branding in `/assets/css/styles.css` and `_config.yml`.

## Troubleshooting
- If GitHub Pages fails to build, check `_config.yml` for YAML issues.
- Ensure all episode front matter has valid YAML and required `audio` fields.
