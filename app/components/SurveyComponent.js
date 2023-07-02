import React from "react";
import { Survey, Model } from "survey-react";

const surveyJSON = {
  title: "Customer Satisfaction Survey",
  pages: [
    {
      questions: [
        {
          type: "rating",
          name: "satisfaction",
          title: "How satisfied are you with our services?",
          mininumRateDescription: "Not Satisfied",
          maximumRateDescription: "Very Satisfied",
        },
        {
          type: "comment",
          name: "comments",
          title: "Any additional comments or feedback?",
        },
      ],
    },
  ],
};

const SurveyComponent = () => {
  const onCompleteSurvey = (survey, options) => {
    // Handle survey completion, e.g., submit the survey data to your server
    console.log("Survey results:", survey.data);
  };

  return <Survey model={new Model(surveyJSON)} onComplete={onCompleteSurvey} />;
};

export default SurveyComponent;
