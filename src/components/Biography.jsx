import React from 'react'

const Biography = ({ imageUrl }) => {
    return (
        <div className='container biography'>
            <div className="banner">
                <img src={imageUrl} alt="aboutImg" />
            </div>
            <div className="banner">
                <p>Biography</p>
                <h3>Who we Are</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed exercitationem quas incidunt molestias assumenda quam similique nulla minus dolore dignissimos, omnis, alias voluptates sit reprehenderit. Placeat porro id reiciendis, voluptas hic impedit architecto aliquam nobis? Voluptatum accusantium tenetur, temporibus, illo, quidem numquam possimus iure repellat vel illum commodi quia ipsam.
                </p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, rerum consectetur? Accusantium, dicta. Repellendus iste ad non dicta unde debitis, quia corrupti nulla et animi?</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi tempore earum officiis?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit omnis vitae et sint quos tempora.</p>
                <p>Lorem ipsum dolor sit.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, sequi? Officiis sunt quo facilis? Blanditiis, sit praesentium sapiente odit culpa rem dolor, officia exercitationem dolore vitae, laudantium harum. Id corporis iusto voluptatibus ipsum eius?</p>
            </div>
        </div>
    )
}

export default Biography