import {useState} from "react";
function Asd() {

    // const asd = [2, 4, 6, 8];
    // const sdf = 5;
    // const [qwe, wer] = useState(asd)
    // const ewq = () => wer([sdf, ...qwe])
    // return(
    //     <div>
    //         <h1>{qwe}</h1>
    //         <button onClick={ewq}>BUTTON</button>
    //     </div>
    // )

    // const [ewq, wer] = useState([321, 432, 543, 654, 765])
    // const tre = (ytr, uyt) => {
    //     const poi = ewq.map(iuy => iuy === ytr ? uyt : iuy)
    //     wer(poi)
    // }
    // return(
    //     <div>
    //         <ul>
    //             {ewq.map(oiu => <li>{oiu}</li>)}
    //         </ul>
    //         <button onClick={() => tre(543, 999)}>BUTTON</button>
    //     </div>
    // )

    // const [qwe, wer] = useState({ert: 2});
    // return (
    //     <div>
    //         <button onClick={() => wer({...qwe, ert: qwe.ert + 1})}>
    //             Lvp
    //         </button>
    //
    //         <h1>{qwe.ert}</h1>
    //
    //         <button onClick={() => wer({...qwe, ert: qwe.ert - 2})}>
    //             Poi
    //         </button>
    //     </div>
    // )

    const qwe = 10;
    const [rew, ert] = useState(qwe)
    const asd = () => ert(rew + 5)
    return(
        <div>
            <h1>{rew}</h1>
            <button onClick={asd}>BUTTON</button>
        </div>
    )

    // const [qwe, wer] = useState([123, 234, 345, 456, 567])
    // const ert = (rty) => {
    //     const tyu = qwe.filter(yui => yui !== rty)
    //     wer(tyu)
    // }
    // return(
    //     <div>
    //         <ul>
    //             {qwe.map(uio => <li>{uio}</li>)}
    //         </ul>
    //         <button onClick={() => ert(345)}>BUTTON</button>
    //     </div>
    // )
}

export default Asd;
