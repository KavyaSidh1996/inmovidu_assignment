import React,{useState} from 'react'
import "../Cards/Cards.css";
import cardImage from "../MainContent/images.jfif"
import API from '../Routes/api'
import Swal from 'sweetalert2';

export default function Cards(){
    const [data,setData]=useState([]);
    const handleDataChange = async(e) =>{
        setData({
          ...data,
          [e.target.name]:e.target.value,
        })
        
        console.log(data);
      }
      const handleSubmit = async()=>{
        console.log(data);
        API.post('save',data).then(res=>{
            console.log(res)
          if(res){
              Swal.fire({
                  title: "Success",
                  text: "User Registered Successfully",
                  icon: 'success',
                  confirmButtonText: 'OK'
              }).then((result) => {
                window.location.reload()
              })
          }
        });
      }
    return(
        <section className="Cards">
            <div className="row gy-5">
                <div className="col-xl-3 col-md-6 col-12">
                    <div className="card">
                        <img src={cardImage} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Technology</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet. Qui odio delectus ut voluptatem minus et nisi tempora ut incidunt recusandae.</p>
                            <a href="#" className="btn">View More</a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6 col-12">
                    <div className="card">
                        <img src={cardImage} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Technology</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet. Qui odio delectus ut voluptatem minus et nisi tempora ut incidunt recusandae.</p>
                            <a href="#" className="btn">View More</a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6 col-12">
                    <div className="card">
                        <img src={cardImage} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Technology</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet. Qui odio delectus ut voluptatem minus et nisi tempora ut incidunt recusandae.</p>
                            <a href="#" className="btn">View More</a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6 col-12">
                    <div className="card">
                        <img src={cardImage} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Technology</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet. Qui odio delectus ut voluptatem minus et nisi tempora ut incidunt recusandae.</p>
                            <a href="#" className="btn">View More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="register btn ">REGISTER NOW</button>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Registration Form</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3 text-start">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-control"  name="name" onChange={handleDataChange}/>
                            </div>
                            <div className="mb-3 text-start">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" name="email" onChange={handleDataChange}/>
                            </div>
                            <div className="mb-3 text-start">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control"  name="password" onChange={handleDataChange}/>
                            </div>
                            <div className="mb-3 text-start">
                                <label className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" name="password_confirmation" onChange={handleDataChange}/>
                            </div>
                            <div>
                                <button type="button" className="btn text-center" onClick={handleSubmit}>Submit</button>
                            </div>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}