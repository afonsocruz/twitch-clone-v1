import {ReactFlvPlayer} from 'react-flv-player'

export default function Streaming() {
    return (
        <ReactFlvPlayer
          url = "http://localhost:8000/live/KqLpzMfwsSUKpk8RZuQXBnY7ppK2.flv"
          isMuted={false}
        />
    )
}