import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Title } from "./Title";
import "./home.scss";

const titleText = {
  first: "Hi!",
  second: "I'm Stoyan",
};

const loadedAlready = true;

export const HomePage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState(titleText.first);
  const changeTitleHandler = () => {
    setTimeout(() => {
      setTitle((prev) => (prev = titleText.second));
    }, 2500);
  };
  return (
    <div>
      <main onLoad={changeTitleHandler} className="home">
        <section className="saluting">
          <Title text={title} />
          <div className="description">
            <hr />
            <p>
              A Soft<span className="bended">ware Be</span>nder
            </p>
          </div>
        </section>
        <section className="avatar">
          <img
            src="https://scontent.fsof9-1.fna.fbcdn.net/v/t1.6435-9/118120159_1719707804849243_4087392996556298391_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=GBqELuYY0ykAX_HFgeW&_nc_ht=scontent.fsof9-1.fna&oh=00_AfBRXDTH2IKJywvoDZ-DtxypOkvuHzICtMz9PtpeZ5ld7w&oe=65312BEE"
            alt="A close up of a person"
          />
        </section>
        <section
          onClick={() => navigate("projects")}
          tabIndex={0}
          className="show-projects"
        >
          <p>Look at my work</p>
          <span className="show-projects__first-blinking-arrow"></span>
          <span className="show-projects__second-blinking-arrow"></span>
        </section>
      </main>
    </div>
  );
};
