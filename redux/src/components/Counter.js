import { connect } from "react-redux";
import * as actions from "../actions";
import { bindActionCreators } from "redux";

const Counter = ({counter, inc, dec, rnd}) => {
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={dec}>DEC</button>
            <button onClick={inc}>INC</button>
            <button onClick={rnd}>RND</button>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        counter: state.value
    }
}

const mapDispatchToProps = (dispatch) => {
    const {inc, dec, rnd} = bindActionCreators(actions, dispatch);
    return {
        inc,
        dec,
        rnd: () => {
            const value = Math.floor(Math.random() * 10);
            rnd(value);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);