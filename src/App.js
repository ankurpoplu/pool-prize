import './App.css';
import CurrentPoolPrize from "../src/components/CurrentPoolprize"
import ProgressBar from './components/ProgressBar';

function App() {
  const classes = {
    app: {
      backgroundColor: "#3a3743",
      width: "100vw",
      height: "100vh",
      display: "flex",
    },
    box: {
      height: "90%",
      flexBasis: "8%",
      backgroundColor: "#1f2937",
      borderRadius: "20px",
      marginTop: "4.5%",
      marginRight: "2%"
    },
    leftSide: {
      display: "flex",
      flexBasis: "35%%",
      flexDirection: "column"
    },
    rightSide: {
      flexBasis: "50%",
      marginLeft:"5%",
      marginTop:"25%"
    },
    heading: {
      color: "white",
      fontSize: "70px",
      marginTop:"45%"
    }
  }
  return (
    <div className='App' style={classes.app}>
      <div style={classes.box}></div>
      <div style={classes.leftSide}>
        <h1 style={classes.heading} >BATTLE PASS</h1>
        <div>
          <CurrentPoolPrize />
        </div>
      </div>
      <div style={classes.rightSide}>
        <ProgressBar bgcolor="orange" progress='30'  height={30}/>
      </div>
    </div>
  );
}

export default App;
