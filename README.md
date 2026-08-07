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

Update `manifest.json` and `versions.json` with the new version, then push a git tag to trigger the release workflow.

Tags are named without the `v` prefix, matching the version in `manifest.json` (for example `1.2.0`).

### Manually installing this plugin

Copy over `main.js`, `styles.css`, `manifest.json` to your vault `VaultFolder/.obsidian/plugins/kill-and-yank/`.
