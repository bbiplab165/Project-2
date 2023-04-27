import React from 'react';

const Tweet = ({ name, tweet, time, date, likes, retweets, reply, mentions, tweet_media_type }) => {
    return (
        <div className="tweet">
            <div className="tweet-header">
                <span className="name">{name}</span>
                <span className="time">{time}</span>
            </div>
            <div className="tweet-content">
                <p>{tweet}</p>
            </div>
            <div className="tweet-footer">
                <span className="date">{date}</span>
                <span className="likes">{likes} Likes</span>
                <span className="retweets">{retweets} Retweets</span>
                <span className="reply">{reply} Replies</span>
                <span className="mentions">{mentions}</span>
                <span className="media-type">{tweet_media_type}</span>
            </div>
        </div>
    );
};

export default Tweet;
