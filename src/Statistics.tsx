import { useEffect, useState } from "react";
import { Body, Nav } from "./App";
import Stat from "./Stat";

type Data = {
  title: string;
  number: number;
}[][];

export const Statistics = () => {
  const [data, setData] = useState<Data>([]);

  useEffect(() => {
    fetch("https://songs-backend-cp2s.onrender.com/api/v1/songs/count/stat")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <>
      {/* {data[1].forEach((value) => console.log(value))} */}
      {console.log(data)}
      <Nav>
        <h1 style={{ textAlign: "center" }}>Statistics</h1>
      </Nav>
      <h2 style={{ textAlign: "center", margin: "2rem 0" }}>Main Stat</h2>
      <Body
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        {data[0]?.map((value) => (
          <Stat key={value.title} {...value} />
        ))}
      </Body>
      <h2 style={{ textAlign: "center", margin: "2rem 0" }}>Genre Stat</h2>
      <Body
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        {data[1]?.map((value) => (
          <Stat key={value.title} {...value} />
        ))}
      </Body>
      <h2 style={{ textAlign: "center", margin: "2rem 0" }}>Album Stat</h2>
      <Body
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        {data[2]?.map((value) => (
          <Stat key={value.title} {...value} />
        ))}
      </Body>
    </>
  );
};
