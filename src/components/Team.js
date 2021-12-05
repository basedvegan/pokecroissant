import React from 'react'





// const handleRemoveItem = (e) => {

//     const name = e.target.getAttribute("src")
//     //  setArr(arr.filter(img => img.name !== name));
//      console.log(name)
// //      if(arr.includes(name)){
// //         arr.splice(arr.indexOf(name), 1);  //deleting
// //     }else{
// // console.log("nope")
// //     }
// //     console.log(arr);

//    };



export default function Team({props}) {

    return (
        <div>
            <img className="team-img" alt= "" src={props}></img>           
        </div>
    )
}
