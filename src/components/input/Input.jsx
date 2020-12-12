import React from 'react'
import './Input.scss'

const Input = ({ img, nama, jabatan, btnUpdate, btnDelete }) => {
    return (
        <>
            <div className="kolum-input">
                <div className="avatar kolumGroup">
                    <img src={img} alt="" className="avatar" />
                </div>
                <div className="nama kolumGroup">
                    <p className="nama-org">
                        {nama}
                    </p>
                </div>
                <div className="jabatan kolumGroup">
                    <p className="jabatan-org">
                        {jabatan}
                    </p>
                </div>
                <div className="update-input kolumGroup">
                    <button className="btn-update btnGroup"
                        onClick={btnUpdate}
                    >
                        Update
                        </button>
                </div>
                <div className="delete-input kolumGroup">
                    <button className="btn-delete btnGroup"
                        onClick={btnDelete}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </>
    )
}

export default Input