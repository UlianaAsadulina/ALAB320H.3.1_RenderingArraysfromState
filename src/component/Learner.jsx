import Score from "./Score";

function Learner (props) {
    const studentScores = props.scores;
    console.log(studentScores);
    return (
        <div>
            <p>
                <bold>Name:</bold> {props.name} 
            </p>
            <p>
                <bold>Bio:</bold>  {props.bio}
            </p>
            <h3>Scores :</h3>
            {studentScores.map ((studentScore) => <Score date={studentScore.date} score={studentScore.score} /> )}

        </div>
    )
}

export default Learner;
