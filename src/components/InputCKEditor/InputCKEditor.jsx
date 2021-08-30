import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function InputCKEditor({setDescription}) {
  console.log(setDescription)

  return (
    <CKEditor
      editor={ClassicEditor}
      config={{
        toolbar: [
          "undo",
          "redo",
          "Italic",
          "Bold",
          "numberedList",
          "bulletedList",
          "link",
        ],
      }}
      data="<p></p>"
      onReady={(editor) => {
        console.log("Editor is ready to use!", editor);
      }}
      onChange={(event, editor) => {
        const data = editor.getData();
        // 
        console.log({ event, editor, data });
      }}
      onBlur={(event, editor) => {
        setDescription(editor.getData());
      }}
      onFocus={(event, editor) => {
        console.log("Focus.", editor);
      }}
    />
  );
}
