import React, { useEffect, useRef, useState } from 'react';
import jsQR from 'jsqr';
import './index.scss';
import { useNavigate } from 'react-router-dom';

function isURL(string) {
  try {
    new URL(string);
  } catch (e) {
    return false;
  }

  return true;
}

function RouteCustomerIndex() {
  const canvasRef = useRef(null);
  const [isRecording, setIsRecording] = useState(false);
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const video = document.createElement('video');
    let frameRequest;

    const update = () => {
      const { current: canvas } = canvasRef;
      const ctx = canvas.getContext('2d');

      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

      const code = jsQR(imageData.data, canvas.width, canvas.height);
      if (code) {
        setData(code.data);
      }

      frameRequest = requestAnimationFrame(update);
    };

    const handleStream = (stream) => {
      setIsRecording(true);

      video.srcObject = stream;
      video.play();
      update();
    };

    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(handleStream)
        .catch((err) => {
          console.log('error', err);
          setIsRecording(false);
        });
    }

    return () => {
      video.remove();
      cancelAnimationFrame(frameRequest);
    }
  }, []);

  useEffect(() => {
    if (data && isURL(data)) {
      const url = new URL(data);
      const pathnames = url.pathname.split('/');
      if (pathnames.length === 3) {
        navigate(url.pathname);
      }
    }
  }, [data, navigate]);

  return (
    <div className="route-customer">
      {
        !isRecording && "Please allow the camera permission to scan the QR Code"
      }

      <div className="scanner">
        <div className="square"></div>
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
};

export default RouteCustomerIndex;
