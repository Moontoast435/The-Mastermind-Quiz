import React from "react";
import { WaitingRoom } from "../../components";
import "./lobbyPage.css";
import { useNavigate } from "react-router-dom";
import { FiChevronsLeft } from "react-icons/fi";

const Lobby = () => {
    const navigate = useNavigate();

    const backBtn = () => {
        navigate(-1);
    };
    return (
        <div role="Lobby" className="lobby">
            <button id="backBtn" onClick={backBtn}>
                <span className="backIco">
                    <FiChevronsLeft />
                </span>{" "}
                Go Back
            </button>
            <WaitingRoom />
        </div>
    );
};

export default Lobby;
