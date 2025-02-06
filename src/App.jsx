import { useState } from 'react'
import Learner from "./component/Learner"
import './App.css'


// The following requirements must be met for this lab to be considered successful:

// 1. The layout and styling of the site is left up to your discretion. There are no layout or styling requirements, 
//    but you should always make sure your web applications are neat, sensible, and provide a good user experience.
// 2. Use the provided array of "learner" data below to initialize state as an object with a learners key in the <App> component.
// 3. Code the <App> component to display a <Learner> component for each learner object in the learners array being held in state.
// 4. Code the <Learner> component so that it:
//    - Renders the learners's name & bio properties.
//    - Renders a <Score> component for each score object in the learner's scores property.
// 5. Code the <Score> component so that it renders the score object's date & score properties.

function App() {
  
  let initialLearners = [
    {
      name: 'Cait Yomorta',
      bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus placeat nostrum explicabo? Voluptatibus expedita saepe officia optio, commodi totam ratione laudantium ipsum porro molestias, quasi nulla minus vitae laboriosam corrupti Delectus inventore explicabo est odit incidunt rem a recusandae eum pariatur. Aperiam doloremque blanditiis harum voluptate animi fugit beatae asperiores quo, dignissimos sed illum veniam eum accusantium nulla quod voluptatum',
      scores: [
        {
          date: '2018-02-08',
          score: 77
        },
        {
          date: '2018-04-22',
          score: 92
        },
        {
          date: '2018-09-15',
          score: 68
        }
      ]
    },
    {
      name: 'Holly Baird',
      bio: 'Eum molestiae explicabo deserunt, maiores quod eaque omnis tenetur vero ducimus, magnam autem! Quia facere quaerat eum repudiandae dolorum eligendi iure quae. Eos id possimus accusantium, earum animi modi hic.',
      scores: [
        {
          date: '2018-12-14',
          score: 88
        },
        {
          date: '2019-01-09',
          score: 79
        },
        {
          date: '2019-02-23',
          score: 91
        },
        {
          date: '2019-03-01',
          score: 95
        }
      ]
    },
    {
      name: 'Wes Mungia',
      bio: 'Repudiandae veritatis recusandae quidem tenetur impedit, numquam incidunt enim, adipisci id cupiditate asperiores nam perferendis. Facere odit laborum ipsum autem repellendus natus eius doloremque ullam perferendis. Enim repellendus ut veniam?',
      scores: [
        {
          date: '2018-10-11',
          score: 62
        },
        {
          date: '2018-11-24',
          score: 74
        },
        {
          date: '2018-12-19',
          score: 85
        }
      ]
    }
  ];

  const [learners, setLearnerData] = useState(initialLearners);
  console.log(learners);

  

  



  return (
    <>
      <h1>ALAB 320H.3.1 - Rendering Arrays from State</h1>
      {learners.map((learner, index) => (
        <>
          <h2>Learner {index+1} </h2>         
          <Learner 
              name={learner.name} 
              bio={learner.bio} 
              scores={learner.scores} 
          />
        </>
        ))
      }

    </>
  )
}

export default App
