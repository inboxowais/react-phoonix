// import React from 'react';
// import ImageUploading from 'react-images-uploading';
// import { Button } from '@material-ui/core';
// export function ImageUpload(props) {
//     // const [images, setImages] = React.useState([]);
//     const maxNumber = 1;
//     const { images } = props;

//     return (
//         <div className="App">
//             <ImageUploading
//                 multiple
//                 value={images}
//                 onChange={props.onChangeImage}
//                 maxNumber={maxNumber}
//                 dataURLKey="data_url"
//             >
//                 {({
//                     imageList,
//                     onImageUpload,
//                     onImageRemoveAll,
//                     onImageUpdate,
//                     onImageRemove,
//                     isDragging,
//                     dragProps,
//                 }) => (
//                     // write your building UI
//                     <div className="upload__image-wrapper">
//                         <Button
//                             style={isDragging ? { color: 'red' } : undefined}
//                             onClick={onImageUpload}
//                             {...dragProps}
//                             variant="contained" classes={{ root: "greenBtn" }} className="py-2">
//                             Upload
//                         </Button>

//                         &nbsp;
//                         {imageList.map((image, index) => (
//                             <div key={index} className="image-item">
//                                 <img src={image['data_url']} alt="" width="100" />
//                                 <div className="image-item__btn-wrapper d-flex pt-2" >
//                                     <Button className="mr-2" onClick={() => onImageUpdate(index)} variant="contained" color="primary">Update</Button>
//                                     <Button onClick={() => onImageRemove(index)} variant="contained" color="primary">Remove</Button>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </ImageUploading>
//         </div>
//     );
// }
import React from "react";
import { Upload } from 'antd'
// import './styles.css'
import Button from '@material-ui/core/Button'
export default function ImageUpload({ label, classes, setImage, image }) {

    const dummyRequest = ({ _, onSuccess }) => {
        setTimeout(() => { onSuccess('ok') }, 0)
    }

    const beforeUpload = (file) => {
        // extract file type
        const fileType = file.type.toLowerCase()

        // allowed types
        const allowedTypes = ['image/png', 'image/jpeg', 'image/gif']

        if (!allowedTypes.includes(fileType)) {
            //notification.open({ message: `Invalid file type selected. Allowed file types are ${allowedTypes.join(', ')}.` })
            return false
        } else {
            return true
        }
    }

    const fileSelected = (e) => {
        // extract selected file
        const file = e.file.originFileObj

        // if file not available return
        if (!file) return

        // set state with seleted file
        setImage(file)
        //setImageUrl(file.name)
    }
    return (
        <div className="cst-textinput cst-text-width">
            <Button className="py-0 m-0" variant="contained" classes={{ root: "greenBtn" }}>
                <Upload className="pt-3" dummyRequest={dummyRequest} showUploadList={false} beforeUpload={beforeUpload} onChange={(e) => fileSelected(e)}><p style={{ marginTop: 0 }}>{image ? 'selected' : 'Image'}</p></Upload>
            </Button>

        </div>
    );
}





// import React from "react";
// import { Upload, message, Button } from 'antd';
// import { UploadOutlined } from '@ant-design/icons';
// export default function ImageUpload({ label, classes, setImage, image }) {
//     const props = {
//         name: 'file',
//         action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
//         headers: {
//             authorization: 'authorization-text',
//         },
//         onChange(info) {
//             if (info.file.status !== 'uploading') {
//                 console.log(info.file, info.fileList);
//             }
//             if (info.file.status === 'done') {
//                 message.success(`${info.file.name} file uploaded successfully`);
//             } else if (info.file.status === 'error') {
//                 message.error(`${info.file.name} file upload failed.`);
//             }
//         },
//     };


//     return (
//         <div className="cst-textinput cst-text-width">
//             <Upload {...props}>
//                 <Button icon={<UploadOutlined />}>Click to Upload</Button>
//             </Upload>,
//         </div>
//     );
// }