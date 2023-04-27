import React, { useEffect, useState } from 'react';

const Avatar = () => {
    const [avatarUrl, setAvatarUrl] = useState('');

    useEffect(() => {
        fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(data => {
                const user = data.results[0];
                const avatar = user.picture.large;
                console.log(user)
                setAvatarUrl(avatar);
            })
            .catch(error => {
                console.log('Error fetching avatar:', error);
            });
    }, []);

    return (
        <img src={avatarUrl} className="avatar" alt="avatar" />
    );
};

export default Avatar;