// export default function triggers(){
//     return (
//         <>
//             <div className="card">
//         <h2>{questions[currentCard].question}</h2>
//         <input
//           type={questions[currentCard].type}
//           value={answers[currentCard] || ''}
//           onChange={handleInputChange}
//         />
//         <div className="nav-buttons">
//           {currentCard > 0 && (
//             <button onClick={handlePrevCard}>Previous</button>
//           )}
//           {currentCard < questions.length - 1 ? (
//             <button onClick={handleNextCard}>Next</button>
//           ) : (
//             <button onClick={handleSubmit}>Submit</button>
//           )}
//         </div>
//       </div>
//         </>
//     )
// }