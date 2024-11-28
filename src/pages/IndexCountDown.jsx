import { useEffect, useState } from 'react';
import CountDown from '../components/CountDown';


function IndexCountDown  (){
  const [data, setData] = useState(null);


  useEffect(() => {
    fetch("https://christmascountdown.live/api/timeleft/total")
    .then((response) => {return response.json()})
    .then((responseData) => { setData(responseData.results);
    });
}, []);


return (
    <>
    <CountDown
    dataList = {data}/>
    </>

);
    


};

export default IndexCountDown;