const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/toporasca/upload"
const CLOUDINARY_UPLOAD_PRESET = "ub4dd39l";

const imgPreview = document.getElementById("img-preview");
const videoPreview = document.querySelector("video");
const fileUpload = document.getElementById("file-upload");

fileUpload.addEventListener("change", e => {
    var file = event.target.files[0];
    console.log(file);
    let formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
    
    axios({
        url: CLOUDINARY_URL,
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        data: formData
    }).then(res => {
        if(file.type === "image/png") {
            imgPreview.src = res.data.secure_url;
        }
        if(file.type === "image/jpeg") {
            imgPreview.src = res.data.secure_url;
        }
        if(file.type === "image/gif") {
            imgPreview.src = res.data.secure_url;
        }
        console.log(res);
        if(file.type === "video/mp4") {
            videoPreview.src = res.data.secure_url;
        }
    }).catch(err => {
        console.log(err);
    });
});
