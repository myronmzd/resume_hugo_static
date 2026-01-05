# Copilot Instructions for resume_hugo_static

## Project Overview
This is a **Hugo-based static resume/portfolio website** powered by the [Blowfish](https://blowfish.page/) theme. The site generates a personal resume, project showcase, and skills portfolio as a static HTML site deployable to any static hosting platform (Netlify, GitHub Pages, Vercel, AWS S3).

**Key constraint:** The site uses a highly customized theme configuration. All visual/behavioral changes should preserve compatibility with Blowfish unless explicitly updating theme files.

## Architecture & Directory Structure

### Content Layer (`content/`)
- **Markdown-based content** - All user-facing content (About, Projects, Skills) lives as `.md` files with YAML frontmatter
- **Section structure** - Each top-level section (about, project, skills) has an `_index.md` that defines the section page
- **Theme reference**: Edit sections → Theme renders via partials in `themes/blowfish/layouts/`

### Configuration Layer (`config/_default/`)
- **hugo.toml** - Core Hugo settings (theme, baseURL, pagination, analytics hooks)
- **params.toml** - Blowfish-specific theme parameters (color scheme, header layout, homepage behavior)
- **menus.en.toml** - Navigation menu items (currently: About, Projects, Skills with weight-based ordering)
- **markup.toml** - Markdown rendering rules
- **languages.en.toml** - i18n translations

**Critical pattern:** Configuration changes in `params.toml` control theme appearance without modifying template files. Always check theme docs at https://blowfish.page/docs/configuration/ before editing.

### Layouts Layer (`layouts/`)
- **Minimal custom overrides** - Only contains `_default/baseof.html` which extends the theme base
- **HTML structure** - Uses Tailwind CSS classes (emerald color scheme, dark mode support)
- **Scroll animation** - Custom `scroll.css` imported in baseof.html for animated elements

### Theme Layer (`themes/blowfish/`)
- **Included theme** - Blowfish theme bundled in this directory, not pulled as external dependency
- **Partials** - Theme renders via partials like `header/fixed-fill-blur.html`, `footer.html` etc. controlled by params.toml
- **Static assets** - Pre-built CSS/JS bundles in `public/` are output artifacts, not sources

### Build Output (`public/`)
- **Generated HTML/assets** - Complete static site output from `hugo build` command
- **Deployment target** - These files are deployed to hosting; do not edit directly in source control (regenerate via Hugo)

## Development Workflow

### Local Preview
```bash
# From ResWebsite/ directory
hugo server -D
```
- Opens http://localhost:1313/ with live reload
- `-D` flag includes draft content for testing
- **Template changes require server restart** (assets/CSS are cached)

### Build Static Site
```bash
# From ResWebsite/ directory
hugo -D  # includes drafts
hugo     # production build (excludes drafts)
```
- Outputs optimized site to `public/`
- Always regenerate before deployment

### Deployment
- Deploy `public/` folder contents to static hosting
- For Netlify/Vercel: Connect repo + set build command to `hugo -D` with publish dir = `public`
- Pre-built `public/` folder is included but regenerate before pushing to production

## Content & Customization Patterns

### Adding/Editing Resume Sections
1. **Edit content markdown** - Modify `content/about/_index.md`, `content/project/_index.md`, etc.
2. **Frontmatter matters** - YAML metadata (title, draft status) controls rendering
3. **Markdown support** - All standard markdown + emoji support (enabled in hugo.toml)

### Configuring Theme Appearance
1. **Color scheme** - Edit `colorScheme` in `params.toml` (currently: emerald)
2. **Layout options** - Change `header.layout` (currently: fixed-fill-blur) or `homepage.layout` (currently: profile)
3. **Author details** - `[author]` section in `params.toml` (name, headline, bio)
4. **Menu navigation** - Edit `menus.en.toml` (weight controls order; lower = first)

**Example:** To change the homepage layout from profile to hero, update `params.toml`:
```toml
[homepage]
  layout = "hero"  # changed from "profile"
  homepageImage = "hero-image.jpg"
```

### Adding New Sections
1. Create `content/newsection/_index.md` with frontmatter
2. Add menu entry to `menus.en.toml` with pageRef pointing to section
3. Theme auto-discovers and renders the section

## Critical Developer Patterns

### Don't Edit These Directly
- **`public/` folder** - Regenerate via Hugo, don't commit changes
- **Theme files in `themes/blowfish/`** - Only customize via `params.toml` unless making permanent theme fork
- **CSS/JS bundles** - Pre-generated in public/css/ and public/js/, rebuild via Hugo

### Must Know
- **Blowfish design philosophy** - Highly parameterized theme that handles most customization via config, not template overrides
- **Hugo build caching** - Changes to static assets (css/) or template partials need server restart, not browser refresh
- **YAML frontmatter** - Content metadata controls visibility, ordering, and rendering behavior
- **Weight-based ordering** - Menu items and content sections ordered by `weight` parameter (lower values first)

## External Dependencies & References
- **Hugo version** - Recommend latest extended release (handles Sass, image processing)
- **Blowfish theme** - Docs: https://blowfish.page/docs/
- **Blowfish config reference** - https://blowfish.page/docs/configuration/
- **Tailwind CSS** - Theme uses Tailwind for styling (version pinned in theme)

## Deployment & CI/CD Notes
- No build script exists in repo; deployment platforms (Netlify, Vercel) run `hugo -D` directly
- `public/` folder can be regenerated anytime via local `hugo` command
- No environment-specific config needed; theme auto-adapts to baseURL setting
