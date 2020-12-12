import Axios from 'axios'
import React, { useContext, useState } from 'react'
import { InputDataContext } from '../../../config/InputData'
import Input from '../../input/Input'
import './InputData.scss'

const InputData = () => {

    const [getData, setGetData] = useContext(InputDataContext)

    const [postData, setPostData] = useState({
        post: {
            id: '',
            image: null,
            nama: '',
            jabatan: ''
        }
    })

    const [isUpdate, setIsUpdate] = useState(false)

    const handleChangeText = (e) => {
        const newPostData = { ...postData.post }
        const timeStamp = new Date().getTime()
        newPostData[e.target.name] = e.target.value
        if (!isUpdate) {
            newPostData['id'] = timeStamp
        }
        setPostData({
            post: newPostData
        })
    }

    const postDataInput = (e) => {
        e.preventDefault()
        const alertConfirm = window.confirm('Data Sudah Benar?')
        if (alertConfirm === true) {
            Axios.post(`http://localhost:3005/pegawai`, postData.post)
                .then(result => {
                    alert('data berhasil di tambahkan!')
                })
                .catch(err => {
                    alert(err, 'terjadi kesalahan (error code : 404!)')
                    console.log(err, postData)
                })
        }
    }

    const handleUpdate = (data) => {
        setPostData({
            post: data
        })
        setIsUpdate(true)
    }

    const handleSubmit = (e) => {
        const id = postData.post.id
        if (isUpdate) {
            const alertConfirm = window.confirm('Simpan Perubahan?')
            if (alertConfirm === true) {
                Axios.put(`http://localhost:3005/pegawai/${id}`, postData.post)
                    .then(res => {
                        alert('data berhasil di rubah')
                        console.log(res)
                    })
                    .catch(err => {
                        alert('data gagal di update (error code: 404)')
                    })
            }
        } else {
            e.preventDefault()
            const alertConfirm = window.confirm('Tambahkan Data?')
            if (alertConfirm === true) {
                Axios.post(`http://localhost:3005/pegawai`, postData.post)
                    .then(result => {
                        alert('data berhasil di tambahkan!')
                    })
                    .catch(err => {
                        alert(err, 'terjadi kesalahan (error code : 404!)')
                        console.log(err, postData)
                    })
            }
        }
    }

    const handleDelete = (id) => {
        const confirmAlert = window.confirm('Hapus Data?')
        if (confirmAlert === true) {
            Axios.delete(`http://localhost:3005/pegawai/${id}`)
                .then(res => {
                    alert('data berhasil terhapus!!')
                })
                .catch(err => {
                    alert('terjadi kesalahan (error code : 404!)', err)
                })
        }
    }

    return (
        <>
            <div className="wrapp-inputData">
                <form onSubmit={handleSubmit} className="form-input">
                    <p className="title">
                        Form Input
                    </p>
                    <input type="file" accept={'image/*'} name={'image'} className="input-text" />
                    <input type="text" id='nama' name={'nama'} className="input-text" placeholder={'masukkan nama'} value={postData.post.nama}
                        onChange={handleChangeText}
                    />
                    <input type="text" id='jabatan' name={'jabatan'} className="input-text" placeholder={'masukkan jabatan'} value={postData.post.jabatan}
                        onChange={handleChangeText}
                    />
                    <button className="btn-simpan" onClick={handleSubmit}>
                        Simpan
                    </button>
                </form>
                <div className="wrapp-kolum-input">
                    <p className="title-input">
                        Hasil Input
                    </p>
                    {getData.map(e => {
                        return (
                            <Input
                                key={e.id}
                                img={e.image}
                                nama={e.nama}
                                jabatan={e.jabatan}
                                btnUpdate={() => handleUpdate(e)}
                                btnDelete={() => handleDelete(e.id)}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default InputData