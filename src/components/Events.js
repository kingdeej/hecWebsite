import GetData from './events/GetData';
  
export default function Events(getEventInfos) {
  const getEventInfo = () => {
    GetData((e) => { getEventInfos(e)})
  }
  getEventInfo()
}


