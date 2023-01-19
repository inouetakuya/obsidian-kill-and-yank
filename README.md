# Obsidian Kill and Yank

Obsidian plugin to enable kill and yank (like Emacs) in the editor. 

Obsidian https://obsidian.md

## Usage

### Kill

Cut from the cursor position to the end of the line.

default: `Control + k`

### Yank

Paste kill ring.

default: `Control + y`

## Note

This plugin enables kill and yank in the editor, but does not enables kill and yank in the title.

If you wish to continue to use kill and yank in the title, change the default key mappings.

## Development

### Setup

```shell
yarn install
```

### Format

```shell
yarn format:check
yarn format:fix
```

### Lint

```shell
yarn lint
yarn lint:fix
```

### Build

```shell
yarn build
```

### Manually installing this plugin

Copy over `main.js`, `styles.css`, `manifest.json` to your vault `VaultFolder/.obsidian/plugins/obsidian-kill-and-yank/`.
