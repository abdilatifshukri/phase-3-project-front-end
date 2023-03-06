import React from "react";
import { NavLink } from "react-router-dom";
import './style/homepage.css';

function HomePage() {
  return (
    <div id="homepageDiv">

      <div className="twitter-header">
        <NavLink className="homepageLinks" to="/login">
          LOG IN
        </NavLink>
        <NavLink className="homepageLinks" to="/signup">
          SIGN UP
        </NavLink>
      </div>

      <div className="twitter-content">
        <h1
          style={{
            textAlign: "left",
            padding: "0px 10px 10px 10px",
            fontSize: "4vw",
            fontFamily: "fantasy",
            width: "40%",
            color: "#1DA1F2",
            marginBottom: "20px",
            fontWeight: "800",
          }}
        >
          TASK MANAGER
        </h1>

        <div className="insideHomePage">
          <div className="missionDiv">
            <p className="missionLi">
              <b className="missionLi">Increased productivity:  </b>
              Task managers can help users stay organized and focused by providing a clear list of tasks that need to be completed. This can help prevent distractions and reduce procrastination, ultimately leading to increased productivity.
            </p>
            <p className="missionLi">
              <b className="missionLi">Better time management: </b>
              Task managers can also help users manage their time more effectively. By assigning due dates to tasks and prioritizing them accordingly, users can better plan their day and ensure they meet deadlines.
            </p>
            <p className="missionLi">
              <b className="missionLi">Reduced stress:  </b>
              Finally, using a task manager app can help reduce stress and increase overall well-being. By keeping track of tasks and feeling a sense of accomplishment as they are completed, users can feel more in control of their day and less overwhelmed by their responsibilities.


            </p>
          </div>

          <div className="testimonials">
            <h3 className="testimonials-title">Reviews</h3>
            <p className="testimonials-quote">
            Asana has been a lifesaver for me and my team. We can easily assign tasks to each other, set deadlines, and keep track of progress. The ability to have discussions and comments on tasks is also really helpful. Asana has definitely improved our productivity and communication
              <br />
              <span className="testimonials-author">Sarah, Asana user</span>{" "}
            </p>

            <p className="testimonials-quote">
              I've been using Todoist for a few months now and it's been a game changer. It's helped me stay organized and on top of my tasks. I love that I can prioritize and categorize my tasks, set due dates, and even add sub-tasks. It's made my life so much easier
              <br />
              <span className="testimonials-author"> John, Todoist user</span>{" "}
            </p>

            <p className="testimonials-quote">
            I've been using Trello for personal projects and it's been amazing. I love the visual aspect of it with the boards and cards. It helps me see everything in one place and keep track of what needs to be done. Plus, the ability to add attachments and checklists is super helpful
              <br />
              <span className="testimonials-author">    Mark, Trello user.

</span>{" "}
            </p>
          </div>

          <small>
            <b className="patent"> &#169; AbdiLatif Arab</b>
          </small>{" "}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
