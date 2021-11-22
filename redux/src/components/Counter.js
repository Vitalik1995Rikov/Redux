import { connect } from "react-redux";
import {inc, dec, rnd} from "../actions";

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
    return {
        inc: () => dispatch(inc()),
        dec: () => dispatch(dec()),
        rnd: () => {
            const value = Math.floor(Math.random() * 10);
            dispatch(rnd(value));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);