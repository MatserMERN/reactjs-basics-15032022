// import Greet from './1.components/1.function/Greet';
// import { Named as Scott } from './1.components/1.function/Named';
// import NamedOne from './1.components/1.function/NamedOne';
// import Welcome from './1.components/2.class/Welcome';
// import { WelcomeOne } from './1.components/2.class/WelcomeOne';
// import Hello from './2.jsx/Hello';
// import Greeting from './3.props/Greeting';
import Welcome from './3.props/Welcome';
import WelcomeOne from './3.props/WelcomeOne';
import Counter from './4.state/Counter';
import Message from './4.state/Message';
import Person from './4.state/Person';
import ClassClick from './5.event-handling/ClassClick';
import FunctionClick from './5.event-handling/FunctionClick';

function App() {
  return (
    <div className="App">
      <FunctionClick /> <br />
      <ClassClick />
      {/* <Person /> */}
      <Message />
      {/* <Counter /> */}
      {/* <WelcomeOne name="Scott" skill="Great Boss" />
      <WelcomeOne name="Adam" skill="Business Analyst" />
      <WelcomeOne name="Tuan" skill="Tech Boss" /> */}
      {/* <Welcome name="Scott" skill="Great Boss" />
      <Welcome name="Adam" skill="Business Analyst" />
      <Welcome name="Tuan" skill="Tech Boss" /> */}
      {/* <Greeting uniqueId={1} 
                name="Scott" 
                user={{firstName: 'Scott', lastName:'Desatnick'}}  
                callMe ={function(){return 'Did you call me ?'}}
                skillSet = {["ReactJS", "Angular", "VueJS"]}
                isAdmin = {true}
                >
                  <h1>Hello This is child of Greeting</h1>
      </Greeting> */}
      {/* <Greeting name="Adam"/>
      <Greeting name="Tuan" /> */}
      {/* <Hello /> */}
      {/* <Scott /> */}
      {/* <Greet />
      <Named />
      <NamedOne />
      <Welcome />
      <WelcomeOne /> */}
    </div>
  );
}

export default App;
