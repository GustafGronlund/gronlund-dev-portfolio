import dynamic from "next/dynamic";

export const ClockComponent = dynamic(() => import("react-live-clock"), {
  ssr: false,
});

const DynamicClock = () => {
  return (
    <ClockComponent
      className="font-mono text-xs mix-blend-difference"
      format={"HH:mm:ss"}
      ticking={true}
      timezone={"Europe/Paris"}
    />
  );
};
