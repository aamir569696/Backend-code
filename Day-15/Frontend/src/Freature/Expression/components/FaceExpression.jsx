import { useEffect, useRef, useState } from "react";
import { init,detect } from "../utils/Utils";

export default function FaceExpression() {
  const videoRef = useRef(null);
  const [expression, setExpression] = useState("Detecting...");
    let faceLandmarker;



  useEffect(() => {

    init(videoRef,setExpression);

    return () => {
      if (videoRef.current?.srcObject) {
        videoRef.current.srcObject
          .getTracks()
          .forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 20,
        marginTop: 20,
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        width={640}
        height={400}
      />

      <h1>{expression}</h1>
<button className="expression-btn">Detect Expression</button>
    </div>
  );
}