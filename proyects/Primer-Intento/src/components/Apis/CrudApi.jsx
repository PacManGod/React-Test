const CrudApi = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        setData(data);
        setLoading(false);
        };
        fetchData();
    }, []);
    return (
        <div>
        {loading ? (
            <div>Loading...</div>
        ) : (
            <ul>
            {data.map((item) => (
                <li key={item.id}>{item.title}</li>
            ))}
            </ul>
        )}
        </div>
    );
    };
