import VideoSlider from '../../components/VideoSlider';
import { VideoData } from '../../data/VideoData';


export default function Home() {

    return (
        <>
            <VideoSlider slides={VideoData} />
        </>
    )
    
}