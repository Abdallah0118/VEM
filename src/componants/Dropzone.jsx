import {useDropzone} from 'react-dropzone' ; 
  import Dropzone from 'react-dropzone';
// function Dropzone({ open }) {
//   const { getRootProps, getInputProps } = useDropzone({});
//   return (
//     <div {...getRootProps({ className: "dropzone" })}>
//       <input className="input-zone" {...getInputProps()} />
//       <div className="text-center">
//         <p className="dropzone-content">
//           Drag’n’drop some files here, or click to select files
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Dropzone;

function Dropzone() {
<Dropzone onDrop={acceptedFiles => setSelectedFile(acceptedFiles[0])}>
{({getRootProps, getInputProps}) => (
<section className="" >
  <div {...getRootProps()}>
  <input {...getInputProps()} />
  <p className="text-center">Drag  drop some files here, or click to select files</p>
  </div>
</section>
   )}
</Dropzone>
}
export default Dropzone;