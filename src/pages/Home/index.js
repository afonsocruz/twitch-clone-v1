import VideoSlider from '../../components/VideoSlider';

import { useEffect } from 'react';
import { useUser } from '../../context/user';


import { VideoData } from '../../data/VideoData';


export default function Home() {

    const { user } = useUser();

    useEffect(() => {
        console.log(user);
    }, [user])

    return (
        <div className="isUserAbleToSeeStreaming">
            {
                user != null ? (
                    <>
                        <VideoSlider slides={VideoData} />
                    </>
                ) :
                (
                    <>
                        <p>Sorry you need to login first!</p>
                    </>
                )
            }
        </div>
    )
}