// import React from "react";
// import { Field } from 'redux-form';
// import { LOCATION_OPTIONS } from "../../../config/locations";
// /*
// For default Input attributes, you only need to set the Input type prop,
// then you pass the normal attributes you would pass to that HTML element
//
//  */
// const Input = props => {
//   let inputElement = null;
//   let fieldElement = null;
//   let inputClassName = `input field-element__input-field--${props.inputType}`;
//   let inputStyleLayout = {
//     gridArea: props.gridAreaLocation
//   };
//
//   switch (props.inputType) {
//     case "input":
//       /*
//       Expect to get the attributes you want to set on an Input as props
//       for the Input wrapper.
//
//       This allows you to distribute the props on the Input element
//        */
//       inputElement = (
//         <input
//           className={inputClassName}
//           {...props.fieldConfig}
//           onChange={props.changed}
//         />
//       );
//
//       break;
//     case "select":
//       inputElement = (
//         <React.Fragment>
//           <select
//             value={props.value}
//             className={inputClassName}
//             onChange={props.changed}
//           >
//             <option value="" selected="selected">
//               State
//             </option>
//             {props.fieldConfig.options.map(option => (
//               <option
//                 key={option.abbreviation}
//                 value={option.name}
//                 title={option.abbreviation}
//                 data-descr={option.name}
//               >
//                 {option.name}
//               </option>
//             ))}
//           </select>
//         </React.Fragment>
//       );
//       break;
//     default:
//       inputElement = (
//         <input
//           className={inputClassName}
//           {...props.fieldConfig}
//           value={props.value}
//           onChange={props.changed}
//         />
//       );
//   }
//
//   fieldElement = (
//     <Field {...props.fieldConfig} type={props.inputType} component={inputElement}/>
//   );
//
//   if (props.label !== null) {
//     return (
//       <React.Fragment>
//         <div
//           className={"field field-element field-element-" + props.id}
//           style={inputStyleLayout}
//         >
//           <label>{props.label}</label>
//           {fieldElement}
//         </div>
//       </React.Fragment>
//     );
//   } else {
//     return (
//       <React.Fragment>
//         <div
//           className={"field field-element field-element-" + props.id}
//           style={inputStyleLayout}
//         >
//           {fieldElement}
//         </div>
//       </React.Fragment>
//     );
//   }
// };
//
// export default Input;
