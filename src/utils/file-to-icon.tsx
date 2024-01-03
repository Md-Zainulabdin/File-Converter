// imports
import {
    BsFillImageFill,
    BsFileEarmarkTextFill,
    BsFillCameraVideoFill,
  } from 'react-icons/bs';
  import { FaFileAudio } from 'react-icons/fa';
  import { FiFileText  } from 'react-icons/fi';
  import { LuFileImage ,LuFileAudio , LuFileVideo  } from "react-icons/lu";
  
  export default function fileToIcon(file_type: any): any {
    if (file_type.includes('video')) return <LuFileVideo />;
    if (file_type.includes('audio')) return <LuFileAudio  />;
    if (file_type.includes('text')) return <BsFileEarmarkTextFill />;
    if (file_type.includes('image')) return <LuFileImage />;
    else return <FiFileText />;
  }