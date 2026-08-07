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

Bump the version:

```shell
pnpm version patch --tag-version-prefix ""
```

`patch`, `minor`, `major` and an explicit version number such as `1.3.0` are all accepted.

This runs `version-bump.mjs` through the `version` lifecycle script, which writes the new version into `manifest.json` and `versions.json`, then creates a commit and a tag.

`--tag-version-prefix ""` is required. pnpm prefixes tags with `v` by default, while the release workflow and the Obsidian community plugin flow expect the tag to match the version in `manifest.json` exactly (for example `1.2.0`).

Then push the commit and the tag to trigger the release workflow:

```shell
git push
git push --tags
```

### Manually installing this plugin

Copy over `main.js` and `manifest.json` to your vault `VaultFolder/.obsidian/plugins/kill-and-yank/`.
