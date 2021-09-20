import { useEffect, useState } from "react";

import { CryptoCard } from "../CryptoCard";
import { config } from "../../config";

export const CryptoList: React.FC = () => {
  const API_KEY = config.API_KEY;

  console.log(API_KEY);

  const url = `https://api.lunarcrush.com/v2?data=meta&key=${API_KEY}`;

  const [cryptoCurrency, setCryptoCurrency] = useState([]);

  useEffect(() => {
    const fetchCryptoCurrency = async () => {
      try {
        const response = await fetch(url);
        const cryptoData = await response.json();
        console.log(cryptoData.data);
        setCryptoCurrency(cryptoData.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCryptoCurrency();
  }, []);

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridAutoRows: "auto",
          gap: "1rem",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        {Array.isArray(cryptoCurrency) &&
          cryptoCurrency.length &&
          cryptoCurrency.map((crypto: any) => {
            return (
              <CryptoCard
                name={crypto.name}
                symbol={crypto.symbol}
                key={crypto.id}
              />
            );
          })}
      </div>
    </>
  );
};
