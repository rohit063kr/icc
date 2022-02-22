import "../firebase/index";
import {
  getStorage,
  getDownloadURL,
  ref as sRef,
  uploadBytesResumable,
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-storage.js";

const useUploadFile = function () {
  const uploadFile = function (img) {
    return new Promise(function (resolve, reject) {
      const storage = getStorage();
      const storageRef = sRef(storage, `images/${img.name}`);
      const metadata = {
        contentType: img.type,
      };

      const uploadImg = uploadBytesResumable(storageRef, img, metadata);
      uploadImg.on(
        "state-changed",
        (snapshot) => {},
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadImg.snapshot.ref).then((url) => {
            resolve(url);
          });
        }
      );
    });
  };

  return { uploadFile };
};

export default useUploadFile;
