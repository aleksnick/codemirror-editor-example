import { EditorState, EditorView, basicSetup } from "@codemirror/basic-setup"
import { html } from "@codemirror/lang-html"
import doc from './html';

let myView = new EditorView({
  state: EditorState.create({
    doc,
    extensions: [basicSetup, html()]
  }),
  parent: document.getElementById("container")
});

window.myView = myView;
