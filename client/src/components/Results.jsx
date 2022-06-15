import { useNavigate } from "react-router-dom";
import "./style.css"

const Results = (props) => {
    const navigate = useNavigate();
  
    return (
      <div className="EndScreen">
        <div className="endscreen-title-container">
          <div>
          <br></br>
            <h2 className="endscreenScore">{props.score} Points!</h2>
          </div>
          <div>
            <h1 className="title-endscreen">You've made it!</h1>
          </div>
        </div>
  
        <div className="button-endscreen">
          <button
            onClick={() => navigate("/")}
            className="endbtn leaderboard"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  };
  
  export default Results;