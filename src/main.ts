import { Editor, EditorPosition, MarkdownView, Plugin } from 'obsidian'

export default class KillAndYankPlugin extends Plugin {
  private editor: Editor
  private killRing: string
  private mark: EditorPosition | null = null

  async onload() {
    this.addCommand({
      id: 'kill-line',
      name: 'Kill line (Cut from the cursor position to the end of the line)',
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
      id: 'kill-region',
      name: 'Kill region (Cut the selection)',
      hotkeys: [{ modifiers: ['Ctrl'], key: 'w' }],
      editorCallback: (editor: Editor, view: MarkdownView) => {
        this.killRing = editor.getSelection()
        editor.replaceSelection('')
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

    this.addCommand({
      id: 'set-mark',
      name: 'Set mark (Toggle the start position of the selection)',
      hotkeys: [{ modifiers: ['Ctrl'], key: ' ' }],
      editorCallback: (editor: Editor, view: MarkdownView) => {
        if (this.mark) {
          editor.setSelection(this.mark, editor.getCursor())
          this.mark = null
          return
        }
        this.mark = editor.getCursor()
      },
    })
  }

  onunload() {}
}
