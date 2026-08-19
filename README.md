# Obsidian Kill and Yank

Obsidian plugin to enable kill and yank (like Emacs) in the editor. 

Obsidian https://obsidian.md

## Usage

### Kill line

Cut from the cursor position to the end of the line.

default: `Control + k`

### Kill region

Cut the selection.

default: `Control + w`

### Yank

Paste kill ring.

default: `Control + y`

### Set mark

Toggle the start position of the selection.

default: `Control + Space`

## Note

This plugin enables kill and yank in the editor, but does not enable kill and yank in the title.

If you wish to continue to use kill and yank in the title, change the default key mappings.

## Development

This project uses pnpm. The required version is pinned in the `packageManager` field of `package.json` and in `mise.toml`.

### Setup

```shell
pnpm install
```

### Format

```shell
pnpm format:check
pnpm format:fix
```

### Lint

```shell
pnpm lint
pnpm lint:fix
```

### Build

```shell
pnpm build
```

### Release

`main` is protected and only accepts changes through a pull request, so the version bump goes through one as well. The release tag is created afterwards, on the merge commit.

Create a branch:

```shell
git switch --create bump-up-to-1.3.0
```

Bump the version:

```shell
pnpm version minor --no-git-tag-version
```

`patch`, `minor`, `major` and an explicit version number such as `1.3.0` are all accepted.

This runs `version-bump.mjs` through the `version` lifecycle script, which writes the new version into `manifest.json` and `versions.json`. `--no-git-tag-version` skips the commit and the tag that `pnpm version` would otherwise create, because the tag has to point at the merge commit on `main`.

Commit the change and open a pull request:

```shell
git add manifest.json versions.json package.json
```

```shell
git commit --message "1.3.0"
```

```shell
git push --set-upstream origin bump-up-to-1.3.0
```

```shell
gh pr create --title "1.3.0" --body "" --assignee "@me"
```

Merge the pull request with a merge commit once CI passes. Do not squash it, so that the history stays accurate.

Tag the merge commit on `main` and push the tag to trigger the release workflow:

```shell
git switch main
```

```shell
git pull
```

```shell
git tag --annotate 1.3.0 --message "1.3.0"
```

```shell
git push origin 1.3.0
```

The tag must match the version in `manifest.json` exactly, with no `v` prefix. Both the release workflow and the Obsidian community plugin flow rely on this.

The workflow publishes the release straight away, without a draft step. Anyone who installed the plugin from the community plugin list receives the update as soon as it is published.

### Manually installing this plugin

Copy over `main.js` and `manifest.json` to your vault `VaultFolder/.obsidian/plugins/kill-and-yank/`.
