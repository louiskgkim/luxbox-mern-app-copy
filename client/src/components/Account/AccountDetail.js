const AccountDetail = (props) => {
    return (
        <div className="account-detail-wrapper">
            <div className="outlined-box">
                <div className="outlined-box-header">
                    <h3>Personal information</h3>
                </div>
                <div className="outlined-box-body">
                    <p>{props.user.firstName} {props.user.lastName}</p>
                    <p>{props.user.email}</p>
                </div>
                <div className="outlined-box-footer">
                    <p>Edit</p>
                </div>
            </div>
            <div className="outlined-box">
                <div className="outlined-box-header">
                    <h3>Password Settings</h3>
                </div>
                <div className="outlined-box-body">
                    <p>Change your password</p>
                </div>
                <div className="outlined-box-footer">
                    <p>Edit</p>
                </div>
            </div>
        </div>
    );
};

export default AccountDetail;