import css from './Feedback.module.css'

export default function Feedback({good,neutral,bad,total, positive}) {
    return (
        <div className={css.container}>
            <p className={css.feedback}>Good : {good} </p>
            <p className={css.feedback}>Neutral : {neutral}</p>
            <p className={css.feedback}>Bad : {bad} </p>
            <p className={css.feedback}>Total : {total}</p>
            <p className={css.feedback}>Positive : {positive}%</p>
        </div>
    );
 };