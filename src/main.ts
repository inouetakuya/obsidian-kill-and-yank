import { Editor, EditorPosition, MarkdownView, Plugin } from 'obsidian'

export default class KillAndYankPlugin extends Plugin {
  private killRing: string

  async onload() {
    this.addCommand({
      id: 'kill',
      name: 'Kill (Cut from the cursor position to the end of the line)',
      hotkeys: [{ modifiers: ['Ctrl'], key: 'k' }],
      editorCallback: (editor: Editor, view: MarkdownView) => {
        const position: EditorPosition = editor.getCursor()
        const line: string = editor.getLine(position.line)

        const textToBeRetained = line.slice(0, position.ch)
        const textToBeCut = line.slice(position.ch)

        this.killRing = textToBeCut

        editor.setLine(position.line, textToBeRetained)
        editor.setCursor(position, position.ch)
      },
    })

    this.addCommand({
      id: 'yank',
      name: 'Yank (Paste)',
      hotkeys: [{ modifiers: ['Ctrl'], key: 'y' }],
      editorCallback: (editor: Editor, view: MarkdownView) => {
        editor.replaceSelection(this.killRing)
      },
    })
  }

  onunload() {}
}
