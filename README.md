# Tongex Web - GitHub Pages Deployment

This is a Flutter web build ready for deployment to GitHub Pages.

## Deployment Instructions

### Option 1: Manual Deployment (Simple)

1. **Initialize Git repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create a GitHub repository**:
   - Go to https://github.com/new
   - Create a new repository (e.g., `tongex_web`)
   - **Don't** initialize with README, .gitignore, or license

3. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/tongex_web.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **Branch: main** (or `gh-pages` if you use that branch)
   - Click **Save**
   - Your site will be available at: `https://YOUR_USERNAME.github.io/tongex_web/`

### Option 2: Automated Deployment with GitHub Actions (Recommended)

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically deploys your site whenever you push to the `main` branch.

1. Follow steps 1-3 from Option 1 above
2. The workflow will automatically deploy your site
3. Enable GitHub Pages in Settings → Pages (select "Deploy from a branch" → "gh-pages" branch → "/ (root)")

### Important Notes

⚠️ **Base href configuration**: The `index.html` file currently has `<base href="/tongex/">` configured (line 17). 

- If your repository is named `tongex_web`, you should update this to `/tongex_web/`
- If your repository is named `tongex`, keep it as `/tongex/`
- If deploying to the root domain (username.github.io), set base href to `/`

After updating the base href, rebuild your Flutter web app with:
```bash
flutter build web --base-href /your-repo-name/
```

Or manually edit `index.html` and change line 17 accordingly.

