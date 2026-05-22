# Quorix UI Production Release Checklist

Use this checklist before publishing a new `@quorix/ui` version to npm and pushing the release to GitHub.

## 1. Local Verification

```powershell
npm ci
npm run verify
npm pack --dry-run
```

`npm run verify` runs TypeScript checking, CSS/JS/type builds, package smoke checks, and static quality checks for the public docs and package metadata.

## 2. Confirm Package Version

```powershell
npm view @quorix/ui version
npm view @quorix/ui@2.1.8 version
```

If `2.1.8` already exists on npm, bump before publishing:

```powershell
npm version patch --no-git-tag-version
npm run verify
npm pack --dry-run
```

## 3. Publish To NPM

```powershell
npm login
npm publish --access public
npm view @quorix/ui version
npm view @quorix/ui dist-tags
```

NPM publication automatically makes the package available through common npm CDNs such as unpkg and jsDelivr.

## 4. Verify CDN Artifacts

Replace `2.1.8` if the release version changed.

```powershell
$version = "2.1.8"
Invoke-WebRequest -Uri "https://unpkg.com/@quorix/ui@$version/dist/quorix.min.css" -UseBasicParsing
Invoke-WebRequest -Uri "https://unpkg.com/@quorix/ui@$version/dist/quorix.min.js" -UseBasicParsing
Invoke-WebRequest -Uri "https://cdn.jsdelivr.net/npm/@quorix/ui@$version/dist/quorix.min.css" -UseBasicParsing
Invoke-WebRequest -Uri "https://cdn.jsdelivr.net/npm/@quorix/ui@$version/dist/quorix.min.js" -UseBasicParsing
```

## 5. Push To GitHub

```powershell
git status --short
git add README.md README.vi.md RELEASE.md package.json package-lock.json tsconfig.json scripts js css docs dist
git commit -m "Harden Quorix UI package quality and accessibility"
git tag -a v2.1.8 -m "v2.1.8"
git push origin main
git push origin v2.1.8
```

If the npm version changed during step 2, use the new version in the tag name and message.
