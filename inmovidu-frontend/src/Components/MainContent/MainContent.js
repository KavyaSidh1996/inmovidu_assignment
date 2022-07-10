import image from "../MainContent/images.jfif"
import "../MainContent/MainContent.css"
export default function MainContent(){
    return(
        <section className="MainContent">
            <div className="row gy-5">
                <div className="col-xl-6 col-12">
                    <div className="Image">
                        <img src={image}/>
                    </div>
                </div>
                <div className="col-xl-6 col-12">
                    <p>
                    Lorem ipsum dolor sit amet. Qui odio delectus ut voluptatem minus et nisi tempora ut incidunt recusandae. Hic laboriosam corporis nobis mollitia ex animi minima sed corporis necessitatibus et voluptatem incidunt. Culpa explicabo in eveniet natus sit voluptate architecto.</p>

                    <p>Et expedita quibusdam qui vero suscipit qui quasi voluptas vel sint veniam cum error consequatur cum veritatis atque ab amet nemo. Qui natus voluptatem vel illum Quis ut nostrum quia id omnis nihil et totam ducimus hic molestiae exercitationem.</p>

                    <p>Qui reprehenderit velit est quia dolorem eum tempore earum et omnis laboriosam. Ut omnis officiis in natus illum ut velit doloremque id praesentium reprehenderit et consequatur magni. At omnis unde qui fugiat debitis et dolor modi.
                    </p>
                </div>
            </div>
        </section>
    )
}