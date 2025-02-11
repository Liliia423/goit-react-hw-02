import { useState } from 'react';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

function App() {
    const [feedback, setFeedback] = useState({
        good: 0,
        neutral: 0,
        bad: 0,
    });

    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

    return (
        <>
            <Description />
            <Options setFeedback={setFeedback} totalFeedback={totalFeedback} />
            {totalFeedback > 0 ? <Feedback feedback={feedback} /> : <Notification />}
        </>
    );
}

export default App;
