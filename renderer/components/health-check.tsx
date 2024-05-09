"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Calendar } from "./ui/calendar";
import { Button } from "./ui/button";

export default function HealthCheck() {
  const [data, setData] = useState(null);
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  useEffect(() => {
    const data = (async () => {
      const response = await axios.get("/api/health-check");

      console.log("response", response);
      setData(response.data);
    })();
  }, []);

  return (
    <>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <Button onClick={() => console.log("ldsjflksjdlfjskdl")}>test</Button>
    </>
  );
}
