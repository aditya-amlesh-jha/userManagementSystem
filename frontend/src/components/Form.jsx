import "../css/form.css"

const Form = ({ handleSubmit, name, email, setName, setEmail }) => {
    return (<>
        <div className="row mt-5">
            <div className="col-lg-6 col-md-9 col-sm-11 mx-auto bg-white p-5 rounded">
                <form>
                    <div className="mb-3">
                        <label htmlFor="name-input" className="form-label">Name<span className="text-danger">*</span></label>
                        <input type="text" onChange={(e) => { setName(e.target.value) }} className="form-control" value={name} id="name-input" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email-input" className="form-label">Email<span className="text-danger">*</span></label>
                        <input type="text" onChange={(e) => { setEmail(e.target.value) }} className="form-control" value={email} id="email-input" />
                    </div>
                    <button onClick={(e) => { handleSubmit(e) }} className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </>);
}

export default Form;