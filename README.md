# COMP3104 DevOps

[![CI](https://github.com/Nousheen83/COMP3104---DevOps/actions/workflows/ci.yml/badge.svg)](https://github.com/Nousheen83/COMP3104---DevOps/actions/workflows/ci.yml)

Student Information System by Nousheen Perween (101523808).

## Lab 06: Static hosting with GitHub Pages

Site URL: https://Nousheen83.github.io/COMP3104---DevOps/

### Run locally

```sh
npm ci
npm start
```

### Build for GitHub Pages

```sh
npm run build
```

The production files are written to `build/`. The `homepage` setting makes asset
URLs use the repository path. The `postbuild` script copies `index.html` to
`404.html` so GitHub Pages can serve the app for unknown paths while retaining
the normal homepage. Unlike the handout's `mv` command, this keeps both files.
GitHub Pages still returns HTTP 404 for fallback requests.

### Travis CI pipeline

`.travis.yml` uses the stable Node.js runtime, caches `node_modules`, installs
locked dependencies with `npm ci`, installs Yarn, and runs `yarn build` (including
the `postbuild` lifecycle script). Pull requests targeting `main` are built;
a successful push or merge to `main` deploys the `build/` directory to `gh-pages`.
`skip_cleanup: true` preserves the build output for the deployment provider.
The branch is `main`, matching this repository rather than the handout's `master`.

External account setup required before automatic deployment:

1. Enable this repository in Travis CI and grant its GitHub integration access.
2. In Travis repository settings, add a secret environment variable named
   `github_token` containing a GitHub token with permission to push to this
   repository. Disable displaying its value in build logs. Never commit the token.
3. Open a pull request from the lab branch into `main` and check the Travis build.
4. Merge the pull request after the build succeeds; check the deployment log and
   confirm that Travis created or updated `gh-pages`.
5. In GitHub **Settings > Pages**, select **Deploy from a branch**, choose
   **gh-pages**, select **/ (root)**, and save.
6. Open the site URL above and check that adding a student works.

A manual deployment is also available with `npm run deploy`; its `predeploy`
script builds the app first. This does not replace the lab's Travis build evidence.

### Submission evidence

Keep the pull request URL, a successful Travis build/deployment log, the Pages
settings showing `gh-pages`, and a screenshot of the published app displaying
the student name and ID. The lab handout does not specify a separate report format.
