//in development

import React, { useEffect } from "react";

const TwitterFeedWidget = ({
  username,
  tweetLimit = 3,
}: {
  username: string;
  tweetLimit?: number;
}) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.setAttribute("charset", "utf-8");
    document.body.appendChild(script);
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-[5%]">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="px-6 py-8">
          <h2 className="text-lg font-bold text-primary-darker mb-2">
            Tweet Feed
          </h2>
          <a
            className="twitter-timeline"
            href={`https://twitter.com/${username}?ref_src=twsrc%5Etfw`}
            data-tweet-limit={tweetLimit}
          >
            Tweets by @{username}
          </a>
        </div>
      </div>
    </div>
  );
};

export default TwitterFeedWidget;
