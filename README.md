# resume_hugo_static

A Hugo-based static resume website scaffolded with the Blowfish theme included in `themes/blowfish`.

This repository contains a ready-to-run Hugo site for hosting a personal resume/portfolio as a static website.

Key locations
- Site content: `content/` (edit your pages and resume data here)
- Configuration: `config/_default/hugo.toml` and other files under `config/`
- Theme: `themes/blowfish`

Quick start (local preview)

Prerequisites
- Install Hugo (recommend the latest Hugo extended release).

Preview locally

```bash
# run a local dev server with draft content enabled
hugo server -D
```

Open http://localhost:1313/ in your browser to view the site.

Build (generate static site)

```bash
# generate the site in the `public/` folder
hugo -D
```

Deployment

- Deploy the contents of the `public/` folder to any static hosting (Netlify, GitHub Pages, AWS S3 + CloudFront, Vercel).
- If using Netlify or Vercel, you can connect the repository and add a build command: `hugo -D` and set the publish directory to `public`.

Customization

- Edit your site content in `content/` (for example `content/about/_index.md`).
- Configure site-wide settings in `config/_default/hugo.toml` and the files under `config/`.
- Swap or update the theme in `themes/blowfish` or replace it with another Hugo theme.

Notes & tips

- Keep an eye on `themes/blowfish/README.md` and its config examples for theme-specific parameters.
- When changing templates or assets, restart `hugo server` to pick up changes.

Credits

- Theme: Blowfish (included under `themes/blowfish`). See the theme directory for license and attribution.

Contact

If you want help customizing the site or deploying it, open an issue or reach out to the repository owner.
