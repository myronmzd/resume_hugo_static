# Resume_hugo_static

A Hugo-based static resume website powered by the **Blowfish** theme. This repository generates a professional personal resume, project showcase, and skills portfolio as a static HTML site deployable to any static hosting platform.

This project uses **GitHub Actions** to automatically build the Hugo site and create artifacts of the `/public` folder for seamless deployment to another repository or team.

## Table of Contents

1. [Key Locations](#key-locations)
2. [Prerequisites](#prerequisites)
3. [Hugo Commands & Workflow](#hugo-commands--workflow)
4. [Blowfish Theme Configuration](#blowfish-theme-configuration)
5. [GitHub Actions - Build & Artifact Creation](#github-actions---build--artifact-creation)
6. [Deployment](#deployment)
7. [Customization](#customization)

---

## Key Locations

- **Site content:** `ResWebsite/content/` — Edit your pages and resume data here
- **Configuration:** `ResWebsite/config/_default/` — Hugo and theme settings
- **Theme:** `ResWebsite/themes/blowfish/` — Blowfish theme (included locally)
- **Generated site:** `ResWebsite/public/` — Build output (static HTML, CSS, JS)
- **GitHub Actions:** `.github/workflows/copy-public.yml` — CI/CD pipeline for artifact creation

---

## Prerequisites

- **Hugo** (recommend latest extended release)
  - Download from: https://gohugo.io/installation/
  - Verify installation: `hugo version`
- **Git** for version control
- **GitHub** account (for Actions workflow)

---

## Hugo Commands & Workflow

### Local Development

**Start local development server** (with draft content enabled):
```bash
cd ResWebsite
hugo server -D
```
- Opens: http://localhost:1313/
- Live reload enabled (browser auto-refreshes on content changes)
- `-D` flag includes draft content for testing
- **Note:** Template/CSS changes require server restart (not just browser refresh)

**Available flags:**
- `-D` / `--buildDrafts` — Include draft content
- `-F` / `--buildFuture` — Include future-dated content
- `-w` / `--watch` — Watch file system for changes (on by default)
- `--logLevel debug` — Verbose logging for debugging

### Building the Static Site

**Production build** (excludes draft content):
```bash
cd ResWebsite
hugo
```

**Development/Draft build** (includes draft content):
```bash
cd ResWebsite
hugo -D
```

**Build with specific environment:**
```bash
cd ResWebsite
HUGO_ENV=production hugo
```

**Output:** Both commands generate the complete static site in `ResWebsite/public/`

**Build outputs include:**
- `index.html` — Homepage
- `about/`, `project/`, `skills/` — Section pages
- `css/` — Compiled stylesheets
- `js/` — JavaScript bundles
- `sitemap.xml` — SEO sitemap
- `robots.txt` — Search engine directives

---

## Blowfish Theme Configuration

The Blowfish theme is highly parameterized, allowing extensive customization through configuration files without modifying template code.

### Key Configuration Files

#### 1. **`config/_default/hugo.toml`** — Core Hugo Settings

Key parameters:
```toml
# Theme selection
theme = "blowfish"

# Site URL (critical for static generation)
baseURL = "https://myronmzd.com/"

# Default language
defaultContentLanguage = "en"

# Enable SEO features
enableRobotsTXT = true
enableEmoji = true

# Analytics (optional)
# googleAnalytics = "G-XXXXXXXXX"

# Build behavior
buildDrafts = false      # Don't include draft content
buildFuture = false      # Don't include future-dated content
summaryLength = 0        # Disable auto-summary generation

# Pagination
[pagination]
  pagerSize = 100

# Output formats
[outputs]
  home = ["HTML", "RSS", "JSON"]
```

**Important:** `baseURL` must match your actual deployment domain for correct relative links.

#### 2. **`config/_default/params.toml`** — Blowfish Theme Parameters

**Appearance Settings:**
```toml
# Color scheme: bluesky, darkly, hemingway, congo, etc.
colorScheme = "bluesky"

# Light/dark mode
defaultAppearance = "dark"    # light or dark
autoSwitchAppearance = true   # Auto-switch based on system preference
```

**Header Layout:**
```toml
[header]
  layout = "fixed-fill-blur"  # Options: basic, fixed, fixed-fill, fixed-gradient, fixed-fill-blur
```

**Footer Configuration:**
```toml
[footer]
  showMenu = true
  showCopyright = true
  showThemeAttribution = true
  showAppearanceSwitcher = true
  showScrollToTop = true
```

**Homepage Layout:**
```toml
[homepage]
  layout = "profile"          # Options: page, profile, hero, card, background, custom
  showRecent = true           # Display recent projects
  showRecentItems = 3         # Number of recent items to show
  showMoreLink = true         # Link to full project list
  showMoreLinkDest = "/project/"
```

**Author Information:**
```toml
[author]
  name = "Myron"
  headline = "Cloud & DevOps Engineer | AWS Solutions Architect"
  bio = "Building scalable cloud infrastructure and DevOps solutions..."
```

**Article Display Options:**
```toml
[article]
  showDate = true
  showAuthor = true
  showDateUpdated = false
  showHero = false
```

**Accessibility & Features:**
```toml
enableA11y = true              # Accessibility features
enableSearch = true            # Site-wide search
enableCodeCopy = true          # Copy button in code blocks
enableStructuredBreadcrumbs = false
```

### Common Customizations

**Change color scheme to Emerald:**
```toml
colorScheme = "emerald"
```

**Switch homepage to Hero layout:**
```toml
[homepage]
  layout = "hero"
  homepageImage = "hero-image.jpg"
```

**Disable dark mode toggle:**
```toml
[footer]
  showAppearanceSwitcher = false
```

**Reference:** Full Blowfish documentation: https://blowfish.page/docs/configuration/

---

## GitHub Actions - Build & Artifact Creation

This repository uses GitHub Actions to automatically build the Hugo site and create artifacts of the `/public` folder for deployment to another repository or team.

### Workflow File: `.github/workflows/copy-public.yml`

The workflow runs on every push to the `main` branch:

```yaml
name: Copy Hugo public folder to Artifacts

on:
  push:
    branches:
      - main

jobs:
  sync-public:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Hugo repo
        uses: actions/checkout@v4

      - name: Install Hugo
        uses: peaceiris/actions-hugo@v3
        with:
          hugo-version: latest
          extended: true

      - name: Build Hugo site
        working-directory: ResWebsite
        run:  |
          pwd
          ls -la
          hugo

      - name: Upload public folder as artifact
        uses: actions/upload-artifact@v4
        with:
          name: hugo-public
          path: ResWebsite/public/
```

### How It Works

1. **Trigger:** Workflow runs automatically on `push` to `main` branch
2. **Environment:** Ubuntu latest runner (`runs-on: ubuntu-latest`)
3. **Steps:**
   - **Checkout:** Clones your repository code
   - **Install Hugo:** Uses `peaceiris/actions-hugo@v3` to install Hugo extended
   - **Build Site:** Runs `hugo` command in `ResWebsite/` directory
   - **Create Artifact:** Uploads entire `ResWebsite/public/` folder as a GitHub artifact

### Accessing the Artifact

After workflow completes:

1. Go to your GitHub repository
2. Click **Actions** tab
3. Select the latest workflow run
4. Scroll to **Artifacts** section
5. Download **hugo-public** ZIP file

The artifact contains the complete static site ready for deployment.

### Deploying the Artifact to Another Repository

**Option 1: Manual Download & Push**

```bash
# Download artifact from GitHub Actions
# Extract hugo-public.zip

# Clone your deployment repository
git clone https://github.com/your-username/deployment-repo.git
cd deployment-repo

# Copy the public folder contents
cp -r /path/to/hugo-public/* .

# Push to deployment repo
git add .
git commit -m "Update from Hugo build"
git push origin main
```

**Option 2: Advanced GitHub Actions - Cross-Repo Deployment**

Create `.github/workflows/deploy-artifact.yml` to automatically push artifact to another repo:

```yaml
name: Deploy Artifact to Deployment Repo

on:
  workflow_run:
    workflows: ["Copy Hugo public folder to Artifacts"]
    types:
      - completed

jobs:
  deploy:
    if: ${{ github.event.workflow_run.conclusion == 'success' }}
    runs-on: ubuntu-latest

    steps:
      - name: Download artifact
        uses: actions/github-script@v7
        with:
          script: |
            let allArtifacts = await github.rest.actions.listWorkflowRunArtifacts({
               owner: context.repo.owner,
               repo: context.repo.repo,
               run_id: context.payload.workflow_run.id,
            });
            let matchArtifact = allArtifacts.data.artifacts.filter((artifact) => {
              return artifact.name == "hugo-public"
            })[0];
            let download = await github.rest.actions.downloadArtifact({
               owner: context.repo.owner,
               repo: context.repo.repo,
               artifact_id: matchArtifact.id,
               archive_format: 'zip',
            });
            let fs = require('fs');
            fs.writeFileSync(`${process.env.GITHUB_WORKSPACE}/artifact.zip`, Buffer.from(download.data));

      - name: Extract artifact
        run: unzip artifact.zip

      - name: Checkout deployment repo
        uses: actions/checkout@v4
        with:
          repository: your-username/deployment-repo
          token: ${{ secrets.DEPLOYMENT_REPO_TOKEN }}

      - name: Copy files and push
        run: |
          cp -r hugo-public/* .
          git config user.name "GitHub Actions"
          git config user.email "actions@github.com"
          git add .
          git commit -m "Update from Hugo build $(date)"
          git push origin main
```

### Setting Up ARTIFACT_TOKEN (for Cross-Repo Deployment)

If deploying to another repository, you need a Personal Access Token (PAT):

**Step 1: Create Personal Access Token**

1. Go to GitHub Settings → **Developer settings** → **Personal access tokens** → **Tokens (classic)**
2. Click **Generate new token (classic)**
3. Give it a name: `DEPLOYMENT_REPO_TOKEN`
4. Select required scopes:
   - ✅ `repo` (full control of private repositories)
   - ✅ `workflow` (update GitHub Actions workflows)
5. Click **Generate token**
6. **Copy the token immediately** (you won't see it again)

**Step 2: Add Token to Repository Secrets**

1. Go to your Hugo repository
2. Settings → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Name: `DEPLOYMENT_REPO_TOKEN`
5. Value: Paste the token you copied
6. Click **Add secret**

**Step 3: Use Token in Workflow**

In your deployment workflow file, reference it as:
```yaml
token: ${{ secrets.DEPLOYMENT_REPO_TOKEN }}
```

**Security Best Practices:**

- ⚠️ **Never** hardcode tokens in workflow files
- ⚠️ **Never** commit tokens to version control
- 🔄 Rotate tokens periodically
- 🔐 Use fine-grained tokens when available (GitHub recommends over classic PATs)
- 🚫 Delete tokens when no longer needed

---


### Option 2: Deploy Artifact to Another Repository

Use the artifact created by GitHub Actions (see [GitHub Actions section](#github-actions---build--artifact-creation) above).

---

## Customization

### Editing Content

Edit files in `ResWebsite/content/`:

- `content/about/_index.md` — About section
- `content/project/_index.md` — Projects section
- `content/skills/_index.md` — Skills section

**Example:** Add a new project:
```markdown
---
title: "My Project"
draft: false
---

Project description and details here.
```

### Changing Theme Configuration

Edit `ResWebsite/config/_default/params.toml` to:
- Change color scheme
- Adjust layout styles
- Modify author information
- Toggle features (search, comments, etc.)

See [Blowfish Theme Configuration](#blowfish-theme-configuration) section above for details.

### Tips & Best Practices

- Keep an eye on [Blowfish documentation](https://blowfish.page/docs/) for latest features
- **Template changes require `hugo server` restart** (browser refresh alone won't pick up CSS/JS changes)
- Test locally with `hugo server -D` before pushing to main
- Always commit `ResWebsite/public/` to `.gitignore` if managing your own deployments (GitHub Actions handles this)
- Use descriptive commit messages for tracking theme updates

### Theme Reference

- **Blowfish GitHub:** https://github.com/nunocoracao/blowfish
- **Blowfish Docs:** https://blowfish.page/docs/
- **Hugo Docs:** https://gohugo.io/documentation/

---

## Troubleshooting

**Server won't start:**
```bash
# Make sure you're in the correct directory
cd ResWebsite
hugo server -D
```

**Changes not appearing:**
- Restart `hugo server` if you modified templates or CSS
- Clear browser cache or use Ctrl+Shift+R (hard refresh)

**Build fails:**
- Check Hugo version: `hugo version`
- Verify all config files have valid TOML syntax
- Check GitHub Actions logs for build errors

---

## Credits

- **Theme:** [Blowfish](https://blowfish.page/) by Nuno Coração
- **Static Site Generator:** [Hugo](https://gohugo.io/)

---

## License & Contact

For customization help or questions about deployment, open an issue or contact the repository owner.

