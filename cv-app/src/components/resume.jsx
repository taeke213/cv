export function Resume({educationdata,experiencedata,generaldata}){
    return(
        <div className="resumediv">
            <div className="resume">
                <h1>Resume of {`${generaldata.firstname} ${generaldata.lastname}`}</h1>
                    <div className="data">
                        <div className="personaldata">
                            <h3>Personal data</h3>
                            <div>
                                <p>first name: {generaldata.firstname}</p>
                                <p>last name: {generaldata.lastname}</p>
                                <p>email: {generaldata.email}</p>
                                <p>phonenumber: {generaldata.phonenumber}</p>
                            </div>
                        </div>
                        <div className="educationdata">
                            <h3>Education</h3>
                            {Object.keys(educationdata).map((x) => (
                                <div>
                                    <div className="p1">title of study: {educationdata[x].titleofstudy}</div>
                                    <div className="p2">school: {educationdata[x].schoolname}</div>
                                    <div className="p3">date of study: {educationdata[x].dateofstudy}</div>
                                </div>
                            ))}
                        </div>
                        <div className="experiencedata">
                            <h3>Experience</h3>
                            {Object.keys(experiencedata).map((x) => (
                                <div>
                                    <p>position: {experiencedata[x].position}</p>
                                    <p>company: {experiencedata[x].company}</p>
                                    <p>date of work: {experiencedata[x].dateofwork}</p>
                                </div>
                            ))}
                        </div>
                    </div>
            </div>
        </div>
    )
}