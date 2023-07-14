import React from 'react'
import S1 from '../../assests/images.png'
const Media = () => {
  return (
    <div class="container mb-5">
        <h2 class="py-3 text-center">Media Object</h2>
        <div class="row py-5">
            {/* <div class="col-4">
                <div class="media">
                    <img src={S1} alt="" class="mr-3"/>
                    <div class="media-body">
                        <h5 class="mt-0">Deepak Kumar</h5>
                        <p>lorem fndj hfjdks hfjdksnjfd hjfkdsncxmjfkd jkdsjjnmnm nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn nnnnddddddddddddd</p>
                    </div>
                </div>
            </div> */}
            <div class="col-md-2">
                <img src={S1} alt="" />
            </div>
            <div class="col-md-8 mt-5">
            <h5 >Deepak Kumar</h5>
            <p>lorem fndj hfjdks hfjdksnjfd hjfkdsncxmjfkd jkdsjjnmnm nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn nnnnddddddddddddd</p>
            </div>
        </div>
    </div>
  )
}

export default Media