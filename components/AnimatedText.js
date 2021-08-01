import React from "react";

/**
 * 
 * @param {any} children  text to animate
 * @param {number} fs font-size of the text
 * @param {string} color  color of the text animated
 * @returns 
 */
const SpanLetter = ({ children, color, fs }) => {
  const [loadingAnim, setLoading] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => setLoading(true), 100);
  }, []);
  return (
    <>
      <span className={"none " + (loadingAnim ? "anim" : "")}>{children}</span>
      <style jsx>{`
        .none {
          font-size: 0px;
          transition: all 0.1s linear;
        }

        .anim {
          ${fs ? "font-size:" + fs + "em;" : "font-size: 1.1em;"}
          color: ${color || "initial"};
        }
      `}</style>
    </>
  );
};


/**
 * 
 * @param {any} children  text to animate
 * @param {string} primaryText text not animated
 * @param {number} fs font-size of the text
 * @param {string} color  color of the text animated
 * @returns 
 */
const AnimLetter = ({ children, primaryText, color, fs }) => {
  const [text, setText] = React.useState([]);
  React.useEffect(() => {
    let i = 0;
    let j = 0;
    let k = 0;
    let text = children[j];
    let tempArray = [];
    const interval = setInterval(() => {
      if (i < text.length) {
        tempArray.push(
          <SpanLetter color={color} fs={fs} key={text[i] + Math.random() * 100}>
            {text[i]}
          </SpanLetter>
        );
        setText([...tempArray]);
        i++;
      } else {
        if (k < 10) {
          k++;
          return;
        }
        i = 0;
        j < children.length - 1 ? j++ : (j = 0);
        k = 0;
        text = children[j];
        tempArray = [];
        setText([...tempArray]);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <span className="primaryText">{primaryText}{" "}</span>
      {text}
      <style jsx>{`
        .primaryText {
          ${fs ? "font-size:" + fs + "em;" : "font-size: 1.1em;"}
        }
      `}</style>
    </>
  );
};

export default AnimLetter;
