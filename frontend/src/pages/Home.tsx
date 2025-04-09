import { useParams } from "react-router"

export default function Home() {
    const params = useParams();

    return (
        <div>
            Welcome Home!
        </div>
    )
}