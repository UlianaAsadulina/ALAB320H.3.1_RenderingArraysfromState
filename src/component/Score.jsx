function Score(props) {
    console.log(props);
    return (
         <p> 
                <bold> Date: </bold> {props.date}
                <bold> Score: </bold> {props.score}
            </p>
    )
      
           
       
    
}

export default Score;