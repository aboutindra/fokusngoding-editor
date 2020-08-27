import Style from '../styles/Output.module.css';

function p(){
  console.log("Button Trigger")
}

const Output = (Props) => {
  console.log("Ini Props : ",Props)
  if(Props.code != ''){
    return (
      <div className={Style.card}>
        <div className={Style.cardBody}>
          <div className={Style.topBar}>
            <a className={Style.itemBar} onClick={p}>Output</a>
            <a className={Style.itemBar} onClick={p}>Test Unit</a>
            <a className={Style.itemBar} onClick={p}>Custom Test</a>
          </div>
          <div className={Style.outputBody}>
            <h4> {Props.code} </h4>
          </div>
        </div>
      </div>
    );
  }else{
    return (
      <div className={Style.card}>
        <div className={Style.cardBody}>
          <div className={Style.topBar}>
            <a className={Style.itemBar} onClick={p}>Output</a>
            <a className={Style.itemBar} onClick={p}>Test Unit</a>
            <a className={Style.itemBar} onClick={p}>Custom Test</a>
          </div>
          <div className={Style.outputBody}>
            <h4> ⠀ </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Output;