
const Results = (props: any) => {
    const answers = props.props;
    return (
        <>
            <div>
            <table className="table-auto">
                <thead className="bg-pink-500 ">
                <tr>
                <th className='px-auto py-3'>Question</th>
                <th className='px-auto py-3'>Correct Answer</th>
                <th className='px-auto py-3'>Your Answer</th>
                </tr>
                </thead>
                    <tbody>
                        {
                            answers.map((ele: any, index: number) => {
                                return (
                                    <tr className='cursor-pointer border-b border-gray-200' key={index}>
                                    <td  className="px-2 py-4 border-r">{ele.question }</td>
                                    <td  className="px-2 py-4 border-r">{ele.correctAnswer}</td>
                                    {ele.correct === true ?
                                        <td  className="px-auto py-4 pl-2">✅</td>
                                        :
                                        <td  className="px-auto py-4 pl-2">❌</td>}
                                </tr>
                                            )
                    })}
                    </tbody>
            </table>
    </div></>
    )
}

export default Results;