
import Style from '../styles/Editor.module.css';
import ReactAce from 'react-ace';
import {useEffect, useState} from 'react';
import Output from "./output";
import useWindowDimension from "../hooks/useWindowDimension";
import axios from 'axios';

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

const CodeEditor = () => {
  const [code, setCode] = useState("Your output..");
  const [output, setOutput] = useState("Your output..");
  const { height, width } = useWindowDimension();

  useEffect( () => {
    const delayDebounceFn = setTimeout(async() => {
      console.log(code)
      // Send Axios request here

      if(code !== 'Your output..'){
        let data = await axios.post('http://localhost:4000/api/v1/compiler/javascript/run', { 'code' : code })
        setOutput(data.data)
      }

    }, 1000)

    return () => clearTimeout(delayDebounceFn)
  }, [code])

  return(
    <div className={Style.container}>
      <ReactAce
          width={width - (width * 17.5/100)}
          height={height - (height * 25/100)}
          placeholder="function p(){ console.log('Test' } p()"
          mode="javascript"
          theme="monokai"
          onChange={(e) => setCode(e)}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{ $blockScrolling: false }}
          showPrintMargin={false}
          newLineMode={true}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true
          }}
          fontSize={20}
      />
      <Output code={output}/>
    </div>
  )
}

export default CodeEditor;