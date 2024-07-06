import { loginRequest } from "./redux/actions";
import { connect } from "react-redux";

function App(props) {
  const login = () => {
    props.loginRequest({ username: "oguzkaan", password: "112" });
  };
  return (
    <div className="App">

    </div>
  );
}

const mapStateToProps = (state) => ({
  ...state,
});
const mapDispatchToProps = (dispatch) => ({
  loginRequest: (body) => dispatch(loginRequest(body)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
