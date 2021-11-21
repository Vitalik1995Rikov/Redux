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

export default Counter;