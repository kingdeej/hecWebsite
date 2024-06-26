import { storage } from "../../firebase/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import SendEvent from "./SendEvent";

export default function sendImage(id, posterInfo, photosInfo, videoInfo, objData, getId, setLoading) {
  const sendImage = async () => {
    let poster = {}
    let photos = []
    let video = {}
    //sendlfyers
    const sendPoster = () => {
      sendVideo()
      const imagePosterRef = ref(
        storage,
        `eventFlyers/${id}/poster-${posterInfo?.photoName + id}`
      );
      try {
        uploadBytes(imagePosterRef, posterInfo?.eventPhotos)
          .then((response) => {
            getDownloadURL(imagePosterRef)
            .then((url)=>{
              poster = {'poster': url}
              sendVideo()
            })
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    };

    //send Videos
    const sendVideo = () => {
      if (!videoInfo?.photoName) {
        sendPhotos()
      }else{
        const videoRef = ref(
          storage,
          `eventFlyers/${id}/video-${videoInfo?.photoName + id}`
        );
        try {
          uploadBytes(videoRef, videoInfo?.eventPhotos)
          .then((response) => {
            getDownloadURL(videoRef)
            .then((url)=>{
              video = {'video': url}
              sendPhotos()
            })
          })
            .catch((error) => {
              console.log(error);
            });
        } catch (error) {
          console.log(error);
        }    
      
      }
    };

    //send photos
    const sendPhotos = () => {
      if (photosInfo?.photoName.length === 0) {
        const getObj = {...poster, ...video, ...objData}
        SendEvent(getObj, getId, setLoading)
      }else{
        photosInfo?.photoName.map((x, key) => {
          const imagePhotosRef = ref(
            storage,
            `eventFlyers/${id}/photos-${photosInfo?.photoName[key] + id}`
            );
            try {
              uploadBytes(imagePhotosRef, photosInfo?.eventPhotos[key])
              .then((response) => {
                getDownloadURL(imagePhotosRef)
                .then((url)=>{
                  photos = [...photos, url]
                  console.log(url);
                })
              })
              .catch((error) => {
                console.log(error);
              });
            } catch (error) {
              console.log(error);
            }
          });
        }
        const newObj = {...poster, ...video, ...objData, 'photos': photos, }
        SendEvent(newObj, getId, setLoading)
    };
    sendPoster()
  };

  sendImage();
}
