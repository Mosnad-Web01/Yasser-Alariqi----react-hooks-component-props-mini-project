import React from 'react';

function Article({ title, date = "January 1, 1970"  , preview, minutes }) {
  function getReadingTimeEmojis(minutes) {
    let emoji = "☕️"; 
    let count = Math.ceil(minutes / 5); 

    if (minutes >= 30) {
      emoji = "🍱";
      count = Math.ceil(minutes / 10);
    }

    return emoji.repeat(count);
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <small>
        {getReadingTimeEmojis(minutes)} {minutes} min read
      </small>
    </article>
  );
}

export default Article;
