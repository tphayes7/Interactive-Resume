//This program generates a react component for the message box.

function MessageBox ({boxData, setBoxData}) {
    //Reset the boxData if the box is closed.
    const closeBox = () => {
        setBoxData({});
    }

    if (boxData.divId) {
        return (
            <div className="message-box">
                <div className="message-box-header">
                    <h2>{boxData.title}</h2>
                    <button type="button" onClick={closeBox}>X</button>
                </div>
                <div className="message-box-body">
                    {boxData.data}
                </div>
            </div>
        )
    }
}

export default MessageBox;