import GetData from './GetData';
import GetImage from './GetImage';


export default function Events(getEventInfos) {
  let eventDetails = []
  function getEventDetails(e){
    eventDetails = e
    GetImage((e) => { getEventMedia(e) })
  }
  function getEventMedia(e) {
    const eventId = eventDetails?.map((x)=>{
      const eventids = x?.id
      const photos = e?.find((x)=>{return x.photos}).photos
      const poster = e?.find((x)=>{return x.poster}).poster
      const posterId = poster?.filter((x)=>{
        return x[eventids] 
      })
      const photosId = photos?.filter((x)=>{
        return x[eventids] 
      })
      const filteredPoster = posterId?.map((e) =>{
        return Object?.values(e)[0]
      })[0]
      const filteredPhotos = photosId?.map((e) =>{
        return Object?.values(e)[0]
      })
      return x && Object?.assign(x, {poster: filteredPoster}, {photos: filteredPhotos});
    })
    getEventInfos(eventId)
  }
  GetData((e) => { getEventDetails(e)})


}


