import { connect } from "react-redux";
import SpecialInput from "../components/SpecialCreation/SpecialInput/SpecialInput.jsx";
import incrementStat from "../store/actions/incrementAction";
import decrementStat from "../store/actions/decrementAction";
import saveCharacter from "../store/actions/saveCharacterAction";

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (id) => dispatch(incrementStat(id)),
    decrement: (id) => dispatch(decrementStat(id)),
    saveStats: () => dispatch(saveCharacter()),
  };
};

const SpecialInputConnected = connect(null, mapDispatchToProps)(SpecialInput);

export default SpecialInputConnected;
