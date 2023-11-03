import { useState, useEffect } from "react";

function FetchData() {
  const [btcData, setBtcData] = useState(null);

  //  Change URL to see conditional render
  useEffect(() => {
    fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
      .then((response) => response.json())
      .then((jsonData) => setBtcData(jsonData.bpi.USD))
      .catch((error) => console.log(error));
  }, []);

  console.log(btcData);

  return !btcData ? (
    <h1>Data pending...</h1>
  ) : (
    <>
      <h1>Current BTC/USD data</h1>
      <p>Code: {btcData.code}</p>
      <p>Symbol: {btcData.symbol}</p>
      <p>Rate: {btcData.rate}</p>
      <p>Description: {btcData.description}</p>
      <p>Rate Float: {btcData.rate_float}</p>
    </>
  );
}

function BitCoinData() {
  return (
    <>
      <FetchData />
    </>
  );
}
export default BitCoinData;
