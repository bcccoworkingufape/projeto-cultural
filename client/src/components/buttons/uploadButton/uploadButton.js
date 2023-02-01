import "./uploadButton.scss";
import "../../../stylesheets/_fonts.scss";
import upload_svg from "../../../assets/images/upload.svg";

const UploadButton = (props) =>{
    return(
        <button type="button" className="uploadButton font-button-20-ubuntu">Upload<img className="bg-transparent m-2" alt="" src={upload_svg} height="17px" width="14px"/></button>
    );
}

export default UploadButton;
