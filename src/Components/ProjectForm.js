import React from "react";

function ProjectForm({ handleSubmit, header, value, setValue, setShowModal, confirmButtonText }){
    return(
        <form onSubmit={handleSubmit} className="ProjectForm">
            <h3>
                {header}
            </h3>
            <input 
            type="text"
            placeholder="project name"
            autoFocus
            value={value}
            onChange={(e) => setValue(e.target.value)}
            />
            <button className="cancel" role="button" onClick={() => setShowModal(false)}>
               Cancel
            </button>
            <button className="confirm">
                {confirmButtonText}
            </button>
        </form>
    )
}
export default ProjectForm