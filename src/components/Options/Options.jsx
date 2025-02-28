import css from './Options.module.css'

export default function Options({ onUpdateFeedback }) { 
    return (
        <>
            <button onClick={()=> onUpdateFeedback('good')}>Good</button>
            <button onClick={()=> onUpdateFeedback('neutral')}>Neutral</button>
            <button onClick={()=> onUpdateFeedback('bad')}>Bad</button>
        </>
    );
};