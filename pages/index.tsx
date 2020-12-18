import Link from 'next/link';

const Index = () => (
    <div>
        <h1>Technical-Assignment</h1>
        <p>welcome</p>
        <ul>
            <li>
                <Link href={`/assignment-1`}>
                    <a>Assignment1</a>
                </Link>
            </li>
            <li>
                <Link href={`/assignment-2`}>
                    <a>Assignment2</a>
                </Link>
            </li>
        </ul>
    </div>
)

export default Index;