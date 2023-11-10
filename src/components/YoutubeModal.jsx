import React from "react";
import Modal from "react-modal";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useSelector } from "react-redux";
import YouTube from "react-youtube";

export default function YoutubeModal({ isModalOpen, setModalOpen }) {
  const { youtubeId } = useSelector((state) => state.movie.movieDetail);
  const customStyle = {
    content: {
      backgroundColor: "#fff",
    },
  };
  const opts = {
    height: "750",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <Modal
      isOpen={isModalOpen}
      style={customStyle}
      contentLabel="Youtube Modal"
    >
      <button onClick={() => setModalOpen(false)}>
        <AiOutlineCloseCircle className="text-3xl" />
      </button>
      <YouTube videoId={youtubeId} opts={opts} />
    </Modal>
  );
}
