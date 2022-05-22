
import Card from 'react-bootstrap/Card'

function Results(props) {
    return (
        <div className={`boxShadow px-5 bg-light w-100 mx-md-5 container border-10 mx-auto ${props.prompt.length > 0 ? 'w-100' : 'd-none'}`} style={{ width: '50%', height: '80vh', overflowY: 'scroll' }}>
            {props.prompt.map((inp, idx) => {
                return (
                    <>
                        <Card className="my-4 p-3 text-left backdrop boxShadow border-10" style={{ width: '100%', margin: 'auto' }}>
                            <Card.Body>
                                <Card.Title as='h2' className=" text-secondary font-weight-bold cursive">Your Code:</Card.Title>
                                <Card.Text className="bg-dark border-10 text-left" >
                                    <pre className='pre-scrollable text-white p-3' ><code style={{ whiteSpace: 'pre-line' }} > {inp}</code></pre>
                                </Card.Text>
                                <hr className='' />
                                <Card.Title as='h2' className=" accentText font-weight-bold cursive ">Analysis:</Card.Title>
                                <Card.Text >
                                    <pre className="wrap font-weight-bold h6" style={{ fontFamily: 'dosis', textAlign: 'start' }}>
                                        {`1${props.answer[idx]}`}
                                    </pre>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <hr className='accent' />
                    </>
                )
            })}
        </div>
    )
}

export default Results