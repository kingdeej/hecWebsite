import React from "react";
import { storage } from "../firebase/firebase";
import { ref, uploadBytes } from "firebase/storage";

export default function sendImage(id, posterInfo, photosInfo) {
  const sendImage = async () => {
    //sendlfyers
    const sendPoster = () => {
      const imagePosterRef = ref(
        storage,
        `eventFlyers/${id}/poster/${posterInfo.photoName + id}`
      );
      try {
        uploadBytes(imagePosterRef, posterInfo.eventPhotos)
          .then((response) => {
            sendPhotos();
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    };
    //send photos
    const sendPhotos = () => {
      console.log(photosInfo.photoName);
      photosInfo.photoName.map((x, key) => {
        const imagePhotosRef = ref(
          storage,
          `eventFlyers/${id}/photos/${photosInfo.photoName[key] + id}`
        );
        try {
          uploadBytes(imagePhotosRef, photosInfo.eventPhotos)
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
            });
        } catch (error) {
          console.log(error);
        }
      });
    };

    sendPoster();
  };

  sendImage();
}