import css from './Options.module.css'

export default function Options({ onUpdateFeedback,total,onResetFeedback }) { 
    return (
        <>
            <button onClick={()=> onUpdateFeedback('good')} className={css.button}>Good</button>
            <button onClick={()=> onUpdateFeedback('neutral')}  className={css.button}>Neutral</button>
            <button onClick={() => onUpdateFeedback('bad')} className={css.button}>Bad</button>
            {total > 0 && <button onClick={onResetFeedback} className={css.button}>Reset</button> }
        </>
    );
};