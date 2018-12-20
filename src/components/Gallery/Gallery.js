import React from 'react';

import './Gallery.css';

export const propsGallery = {
  id: "lightbox",
  lightboxId: "#lightbox",
  title: 'House Gallery',
  images:
    [
      {
        lightboxId: "#lightbox",
        src: "https://a0.muscache.com/im/pictures/7e70d72f-546e-431c-93c8-e0061aeda369.jpg?aki_policy=x_large"
      },
      {
        lightboxId: "#lightbox",
        src: "https://a0.muscache.com/im/pictures/dfb792cb-77ff-4e83-9a66-49314726d946.jpg?aki_policy=x_large"
      },
      {
        lightboxId: "#lightbox",
        src: "https://a0.muscache.com/im/pictures/78a0aa61-f9dd-4b48-9bba-191cec4118bd.jpg?aki_policy=x_large"
      },
      {
        lightboxId: "#lightbox",
        src: "https://a0.muscache.com/im/pictures/bb0b2c0a-05ff-4e6e-a11b-5795e46acc06.jpg?aki_policy=x_large"
      },
      {
        lightboxId: "#lightbox",
        src: "https://a0.muscache.com/im/pictures/e3199fd4-248a-43ec-bf59-3f7d1718c8c9.jpg?aki_policy=x_large"
      },
      {
        lightboxId: "#lightbox",
        src: "https://a0.muscache.com/im/pictures/026959fb-cb15-4e09-8d75-c285aa32caa2.jpg?aki_policy=x_large"
      },
      {
        lightboxId: "#lightbox",
        src: "https://a0.muscache.com/im/pictures/248fc3cb-bbd8-4d34-9dcf-6b20d96f436e.jpg?aki_policy=x_large"
      },
      {
        lightboxId: "#lightbox",
        src: "https://a0.muscache.com/im/pictures/1eff9439-1f24-4ab5-84fd-50bf66f4265f.jpg?aki_policy=x_large"
      },
      {
        lightboxId: "#lightbox",
        src: "https://a0.muscache.com/im/pictures/35ef4540-9a52-436d-8921-9391efe64a19.jpg?aki_policy=x_large"
      }
    ]
}

export const GetImages = ({images}) => {
  const imageList = images.map((img, i) => {
    const key = Math.random()
      return  <div key={key} className="col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                <a href={img.lightboxId} data-slide-to={i}><img src={img.src} className="gallery-img img-fluid my-2" alt="Ocean Tigers Dive House"/></a>
              </div> 
  })
    return imageList
}

export const GetCarouselIndicators = ({images}) => {
  const imageList = images.map((img, i) => {
    const key = Math.random()
      return  <li key={key} data-target={img.lightboxId} data-slide-to={i}></li> 
  })
    return imageList
}

export const GetCarouselItems = ({images}) => {
  const imageList = images.map(img => {
    const key = Math.random()
      return  <div key={key} className="carousel-item"><img src={img.src} className="w-100" alt="Ocean Tigers Dive House"/></div> 
  })
    return imageList
}

const Gallery = props => (
  <div>
    <div className="container-fluid">
      <h3 className="font-weight-bold">{props.title}</h3>
      <hr />
      <div className="row">
        <GetImages {...props} />
        <div className="modal fade" id="modal" tabIndex="-1" role="dialog" aria-labelledby="Lightbox Gallery by Bootstrap 4" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <div id={props.id} className="carousel " data-ride="carousel" data-interval="5000" data-keyboard="true">
                  <ol className="carousel-indicators">
                    <GetCarouselIndicators {...props} />
                  </ol>
                  <div className="carousel-inner">
                    <GetCarouselItems {...props} />
                  </div>  
                  <a className="carousel-control-prev" href={props.lightboxId} role="button" data-slide="prev"><span className="carousel-control-prev-icon" aria-hidden="true"></span><span className="sr-only">Previous</span></a>
                  <a className="carousel-control-next" href={props.lightboxId} role="button" data-slide="next"><span className="carousel-control-next-icon" aria-hidden="true"></span><span className="sr-only">Next</span></a>
                </div>
                <a className="carousel-control-prev" href={props.lightboxId} role="button" data-slide="prev"><span className="carousel-control-prev-icon" aria-hidden="true"></span><span className="sr-only">Previous</span></a>
                <a className="carousel-control-next" href={props.lightboxId} role="button" data-slide="next"><span className="carousel-control-next-icon" aria-hidden="true"></span><span className="sr-only">Next</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Gallery;