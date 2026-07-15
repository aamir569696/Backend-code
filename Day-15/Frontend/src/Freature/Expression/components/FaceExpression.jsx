import { useEffect, useRef, useState } from "react";
import {
  FilesetResolver,
  FaceLandmarker,
} from "@mediapipe/tasks-vision";

export default function FaceExpression() {
  const videoRef = useRef(null);
  const [expression, setExpression] = useState("Detecting...");

  useEffect(() => {
    let faceLandmarker;

    async function init() {
      const vision = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
      );

      faceLandmarker = await FaceLandmarker.createFromOptions(vision, {
        baseOptions: {
          modelAssetPath:
            "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task",
        },
        runningMode: "VIDEO",
        numFaces: 1,
        outputFaceBlendshapes: true,
      });

      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      videoRef.current.srcObject = stream;

      videoRef.current.onloadeddata = () => {
        detect();
      };
    }

    function detect() {
      if (!videoRef.current || !faceLandmarker) {
        requestAnimationFrame(detect);
        return;
      }

      const now = performance.now();

      const results = faceLandmarker.detectForVideo(
        videoRef.current,
        now
      );

      if (
        results.faceBlendshapes &&
        results.faceBlendshapes.length > 0
      ) {
        const shapes = results.faceBlendshapes[0].categories;

        const score = (name) =>
          shapes.find((s) => s.categoryName === name)?.score || 0;

        const smile =
          (score("mouthSmileLeft") +
            score("mouthSmileRight")) /
          2;

        const jawOpen = score("jawOpen");

        const blink =
          (score("eyeBlinkLeft") +
            score("eyeBlinkRight")) /
          2;

        let exp = "Neutral 😐";

        if (smile > 0.6) exp = "Happy 😊";
        else if (jawOpen > 0.6) exp = "Surprised 😮";
        else if (blink > 0.2) exp = "Eyes Closed 😴";
        else exp="Neutral";

        setExpression(exp);
      }

      requestAnimationFrame(detect);
    }
    console.log(("eyeBlinkLeft"));
    

    init();

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
        height={480}
      />

      <h1>{expression}</h1>
    </div>
  );
}