import GetData from './GetData';


export default function Events(getEventInfos) {
  const getEventInfo = () => {
    GetData((e) => { getEventInfos(e)})
  }
  getEventInfo()
}


