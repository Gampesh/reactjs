import Goal from "./Goal";
function Football () {
    const shoot = (msg, event) => {
        alert(msg + " <=> "+ event.type);
    }
    return <div>
        <p>** This is FootBall Component **</p>
        <button onClick={(event) => shoot("Goal!", event)} >Hit It!!</button>
        <p>** Goal Component ** </p>
        <Goal isGoal={true}></Goal>
        <Goal isGoal={false}></Goal>
        <p>** Goal Component Ends here ** </p>

        <p>** Football Component Ends here ** </p>

    </div>;
}

export default Football;