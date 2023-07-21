"use client"

import { useAddEventListener } from "@/hooks/use-add-event-listener/use-add-event-listener.hook";
import { useEffect, useRef, useState } from "react";

export default function Page() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [timestamp, setTimestamp] = useState<number>();

  useAddEventListener({
    targetElementRef: buttonRef,
    eventName: `click`,
    eventListener(event) {
      console.log('@@click.event', event);
      console.log('@timestamp', timestamp);
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimestamp(Date.now());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <button ref={buttonRef} className="border border-slate-500 px-6 py-2 cursor-pointer">
        test
      </button>
    </div>
  );
}
