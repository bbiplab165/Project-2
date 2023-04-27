import React, { useEffect, useState } from 'react';
import Tweet from './Tweet';

const TweetList = () => {
    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        fetch('../../MOCK_DATA.json')
            .then(response => response.json())
            .then(data => {
                setTweets(data);
            })
            .catch(error => {
                console.log('Error fetching tweets:', error);
            });
    }, []);

    return (
        <div className="tweet-list">
            {tweets.map((tweet,index) => (
                <Tweet key={index} {...tweet} />
            ))}
        </div>
    );
};

export default TweetList;
