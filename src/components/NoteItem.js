import React from 'react'

const NoteItem = (props) => {
    const { note } = props;
    return (
        <div className='col-md-3'>
            
            <div className="card my-3" >
                    <div className="card-body">
                        <h5 className="card-title"> {note.title}</h5>
                        <p className="card-text">{note.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores deleniti aliquid repellendus similique molestias modi maiores! Quidem commodi natus qui necessitatibus ducimus error, ut inventore ullam voluptates quia, dignissimos laboriosam, fugiat optio velit doloremque pariatur.</p>
                        
                    </div>
            </div>
        </div>
    )
}

export default NoteItem
