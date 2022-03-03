function Goal(props) {
    const isGoal = props.isGoal;
    return (
        <>
            {isGoal ? <MadeGoal /> : <MissedGoal />}
        </>
    )
    }

function MissedGoal() {
    return <h4>You missed it!!</h4>
}

function MadeGoal () {
    return <h4>Goal!</h4>
}

export default Goal;