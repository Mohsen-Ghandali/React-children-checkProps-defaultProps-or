const Person = (props) => {
    const { firstName, lastName, age, clickHandler, children } = props
    return (
        <>
            <h1>{firstName || "max"}</h1>
            <h1>{lastName || "Müller"}</h1>
            <h1>{age || 25}</h1>
            <button onClick={clickHandler}>clickMe</button>
            {children}
            <hr />
        </>
    );
};

Person.defaultProps = {
    clickHandler: function () { console.log("test"); }
}
export default Person;