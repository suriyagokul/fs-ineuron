import React from "react";

export default function Card({ logo, list: { skills }, data }) {
  console.log(logo, skills);
  return (
    <div>
      <p className="font-bold">{logo}</p>
      <div>{skills.first}</div>
      {data.news?.map((item) => (
        // <p>{JSON.stringify(item)}</p>
        <section style={{ display: "flex" }}>
          <p style={{ marginRight: "4px" }}>{item.title}</p>
          <p style={{ backgroundColor: "yellow" }}>{item.longURL}</p>
        </section>
      ))}
    </div>
  );
}
