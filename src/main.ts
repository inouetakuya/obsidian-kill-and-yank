import { Editor, EditorPosition, MarkdownView, Plugin } from 'obsidian'
import { EditorView } from '@codemirror/view'

export default class KillAndYankPlugin extends Plugin {
  private mark: EditorPosition | null = null

  private isComposing(view: MarkdownView): boolean {
    // @ts-expect-error TS2339: Property 'cm' does not exist on type 'Editor'
    const editorView = view.editor.cm as EditorView
    return editorView.composing
  }

  async onload() {
    this.addCommand({
      id: 'kill-line',
      name: 'Kill line (Cut from the cursor position to the end of the line)',
      hotkeys: [{ modifiers: ['Ctrl'], key: 'k' }],
      editorCallback: (editor: Editor, view: MarkdownView) => {
        if (this.isComposing(view)) return

        const position: EditorPosition = editor.getCursor()
        const line: string = editor.getLine(position.line)

        const textToBeRetained = line.slice(0, position.ch)
        const textToBeCut = line.slice(position.ch)

        navigator.clipboard.writeText(textToBeCut)

        editor.setLine(position.line, textToBeRetained)
        editor.setCursor(position, position.ch)
      },
    })

    this.addCommand({
      id: 'kill-region',
      name: 'Kill region (Cut the selection)',
      hotkeys: [{ modifiers: ['Ctrl'], key: 'w' }],
      editorCallback: (editor: Editor, view: MarkdownView) => {
        if (this.isComposing(view)) return

        if (this.mark) {
          editor.setSelection(this.mark, editor.getCursor())
          this.mark = null
        }
        navigator.clipboard.writeText(editor.getSelection())
        editor.replaceSelection('')
      },
    })

    this.addCommand({
      id: 'yank',
      name: 'Yank (Paste)',
      hotkeys: [{ modifiers: ['Ctrl'], key: 'y' }],
      editorCallback: (editor: Editor, view: MarkdownView) => {
        if (this.isComposing(view)) return

        navigator.clipboard.readText().then((text) => {
          editor.replaceSelection(text)
        })
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
        } else {
          this.mark = editor.getCursor()
        }
      },
    })
  }

  onunload() {}
}
