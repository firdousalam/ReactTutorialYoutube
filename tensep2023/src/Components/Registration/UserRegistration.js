function  Registration(){
    const onSubmit= () =>{

    }
    return (
        <>
            <div className="container mt-3">
                <h2>Registration</h2>
                <form action="{onSubmit}">
                    <div className="mb-3 mt-3">
                        <label htmlFor="email">Email:</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )

}
export default Registration