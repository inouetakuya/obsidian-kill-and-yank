import { Editor, MarkdownView, Plugin } from 'obsidian'

// Remember to rename these classes and interfaces!

export default class MyPlugin extends Plugin {
  async onload() {
    // This adds an editor command that can perform some operation on the current editor instance
    this.addCommand({
      id: 'sample-editor-command',
      name: 'Sample editor command',
      editorCallback: (editor: Editor, view: MarkdownView) => {
        console.log(editor.getSelection())
        editor.replaceSelection('Sample Editor Command')
      },
    })
  }

  onunload() {}
}
