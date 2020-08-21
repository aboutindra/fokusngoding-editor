
import ReactAce from 'react-ace';

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools"

// class CodeEditor extends Component {
//   constructor() {
//     super();
//     this.onChange = this.onChange.bind(this);
//   }
//   onChange(newValue, e) {
//     console.log(newValue, e);
//
//     const editor = this.ace.editor; // The editor object is from Ace's API
//     console.log(editor.getValue()); // Outputs the value of the editor
//   }
//   render() {
//     return (
//       <ReactAce
//         mode="javascript"
//         theme="eclipse"
//         setReadOnly={false}
//         onChange={this.onChange}
//         style={{ height: '400px' }}
//         ref={instance => { this.ace = instance; }} // Let's put things into scope
//       />
//     );
//   }
// }
function onChange(newValue) {
  console.log("change", newValue);
}
const CodeEditor = () => {
  return(
    <ReactAce
        mode="javascript"
        theme="monokai"
        onChange={onChange}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true
        }}
        fontSize={18}
    />
  )
}

export default CodeEditor;