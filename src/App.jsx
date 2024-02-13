import Header from './components/Header';
import Question from './components/Question';
import Summary from './components/Summary';
import {useEffect, useContext} from 'react';
import {AppContext} from './store/app-context';

function App() {

    const {answeredQuestions, totalQuestions} = useContext(AppContext);

    return (
        <div>
            {answeredQuestions.length === totalQuestions ?
                <Summary />
            :
                <>
                    <Header />
                    <Question />
                </>
            }    
        </div>
    );
}

export default App;
