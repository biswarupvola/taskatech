import { useState,useEffect } from "react";
import FileUpload from "react-material-file-upload";
import Grid from '@mui/material/Grid';

export function FileUploader(props) {
  const [files, setFiles] = useState(props.file ? new File([props.file.name], props.file.name, props.file) : []);

  useEffect(()=>{
    let filesSet = props.file ? [new File([props.file.name], props.file.name, props.file)] : [];
    setFiles(filesSet)
  },[props])

  const handleFileInput = (type,val) =>{
    if(val){
          let fileObject = {
            path:val.path,
            lastModified:val.lastModified,
            //lastModifiedDate:val.lastModifiedDate,
            name:val.name,
            size:val.size,
            type:val.type
      }
      props.handleFile(type,fileObject);
    }else{
      props.handleFile(type,"");
      setFiles([])
    }
  }


  return (
    <Grid className={props.className} xs={12} md={5.88} item>
      <FileUpload 
        value={files} 
        onChange={(files)=>{handleFileInput(props.type,files[0])}} 
        buttonText = {"Upload "+ props.text}
      />
    </Grid>
  );
}