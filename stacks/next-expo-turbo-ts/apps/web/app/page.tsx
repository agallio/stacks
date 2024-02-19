"use client";

import { Button } from "@repo/ui/src";

export default function Web() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-xl">Web</h1>
      <Button onClick={() => console.log("Pressed!")} text="Boop" />
    </div>
  );
}
