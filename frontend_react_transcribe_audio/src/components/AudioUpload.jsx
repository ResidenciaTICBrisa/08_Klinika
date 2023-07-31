import { useState, useRef } from "react";
import { FaMicrophone } from 'react-icons/fa';
import Markdown from "markdown-to-jsx";

const AudioUpload = () => {
  const [recording, setRecording] = useState(false);
  const [transcript, setTranscript] = useState(null);
  const [inputText, setInputText] = useState('');
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const recognitionRef = useRef(null);

  const handleToggleRecordingAndUpload = async () => {
    if (!recording) {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert("Your browser does not support recording audio.");
        return;
      }

      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        mediaRecorderRef.current = new MediaRecorder(stream);

        mediaRecorderRef.current.ondataavailable = (event) => {
          if (event.data.size > 0) {
            audioChunksRef.current.push(event.data);
          }
        };

        mediaRecorderRef.current.onstop = () => {
          const audioBlob = new Blob(audioChunksRef.current, {
            type: "audio/wav",
          });
          handleUpload(audioBlob);
        };

        setRecording(true);
        mediaRecorderRef.current.start();

        recognitionRef.current = new window.webkitSpeechRecognition();
        recognitionRef.current.continuous = true;
        recognitionRef.current.onresult = handleSpeechRecognitionResult;
        recognitionRef.current.start();
      } catch (error) {
        console.error("Error accessing microphone:", error);
        alert("Error accessing the microphone.");
      }
    }
  };

  const handleSpeechRecognitionResult = (event) => {
    const result = event.results[event.results.length - 1];
    if (result.isFinal) {
      mediaRecorderRef.current.stop();
      recognitionRef.current.stop();
      setRecording(false);
    }
  };

  const handleUpload = async (selectedFile) => {
    if (!selectedFile) {
      alert("Please record an audio first.");
      return;
    }

    const formData = new FormData();
    formData.append("audio_file", selectedFile, "recorded_audio.wav");

    try {
      const response = await fetch("http://0.0.0.0/upload/audio/", {
        method: "POST",
        body: formData,
      });

      const reader = response.body.getReader();
      const initialData = [];
      const processStream = async ({ done, value }) => {
        if (done) {
          return;
        }

        const chunk = new TextDecoder("utf-8").decode(value);
        setTranscript((prevData) => [...prevData, chunk]);
        return reader.read().then(processStream);
      };

      setTranscript(initialData);
      reader.read().then(processStream);
    } catch (error) {
      console.error("Error occurred:", error);
      alert("An error occurred while uploading the audio.");
    }
  };

  const handleUploadText = async () => {
    try {
      const response = await fetch('http://0.0.0.0/upload/text/', {
        method: "POST",
        body: JSON.stringify({ text: inputText }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const reader = response.body.getReader();
      const initialData = [];
      const processStream = async ({ done, value }) => {
        if (done) {
          return;
        }

        const chunk = new TextDecoder("utf-8").decode(value);
        setTranscript((prevData) => [...prevData, chunk]);
        return reader.read().then(processStream);
      };

      setTranscript(initialData);
      reader.read().then(processStream);
    } catch (error) {
      console.error('Error uploading text:', error);
    }
  };

  return (
    <>
      <div>
        <textarea
          rows={5}
          cols={50}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </div>
      <button onClick={handleUploadText}>Enviar</button>
      <button onClick={handleToggleRecordingAndUpload}><FaMicrophone /></button>

      {transcript && (
        <div>
          <h2>Resposta:</h2>
          <Markdown>{transcript.join("")}</Markdown>
        </div>
      )}
    </>
  );
};

export default AudioUpload;
