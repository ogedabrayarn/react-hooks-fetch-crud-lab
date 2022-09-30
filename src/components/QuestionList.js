import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions,handeDelete}) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <QuestionItem key={question.id} question={question} handleDelete={handeDelete}/>
        ))}

      </ul>
    </section>
  );
}

export default QuestionList;