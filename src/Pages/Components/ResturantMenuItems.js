import React from 'react';
import ResturentMenu from './ResturentMenu';
const ResturentData = [
    {
        id: "1",
        name: 'Demo1',
        comapny: 'chilox',
        remaining: '2 days remaining',
        img: "https://static.hungrynaki.com/hungrynaki-v4/deals/january_2022/deal_banner_1642431811248.jpeg",
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png',
        company: "KFC Bangladesh",
        price: 100,
        time: '20:47 min'
    }
    , {
        id: "1",
        name: 'Demo1',
        comapny: 'chilox',
        remaining: '2 days remaining',
        img: 'https://static.hungrynaki.com/hungrynaki-v4/deals/january_2022/deal_banner_1641990600264.jpeg'
        ,
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png',
        company: "KFC Bangladesh",
        price: 100,
        time: '20:47 min'
    }
    , {
        id: "1",
        name: 'Demo1',
        comapny: 'chilox',
        remaining: '2 days remaining',
        img: 'https://static.hungrynaki.com/hungrynaki-v4/deals/january_2022/deal_banner_1641990811040.jpeg',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png',
        company: "KFC Bangladesh",
        price: 100,
        time: '20:47 min'
    }
    , {
        id: "1",
        name: 'Demo1',
        comapny: 'chilox',
        remaining: '2 days remaining',
        img: 'https://static.hungrynaki.com/hungrynaki-v4/deals/january_2022/deal_banner_1641990811040.jpeg',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png',
        company: "KFC Bangladesh",
        price: 100,
        time: '20:47 min'
    }
    , {
        id: "1",
        name: 'Demo1',
        comapny: 'chilox',
        remaining: '2 days remaining',
        img: 'https://static.hungrynaki.com/hungrynaki-v4/deals/january_2022/deal_banner_1641876917161.jpeg',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png',
        company: "KFC Bangladesh",
        price: 100,
        time: '20:47 min'
    }
    , {
        id: "1",
        name: 'Demo1',
        comapny: 'chilox',
        remaining: '2 days remaining',
        img: 'https://static.hungrynaki.com/hungrynaki-v4/deals/january_2022/deal_banner_1641812541490.jpeg',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png',
        company: "KFC Bangladesh",
        price: 100,
        time: '20:47 min'
    }
    , {
        id: "1",
        name: 'Demo1',
        comapny: 'chilox',
        remaining: '2 days remaining',
        img: 'https://static.hungrynaki.com/hungrynaki-v4/deals/january_2022/deal_banner_1641901205427.jpeg',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png',
        company: "KFC Bangladesh",
        price: 100,
        time: '20:47 min'
    }
    , {
        id: "1",
        name: 'Demo1',
        comapny: 'chilox',
        remaining: '2 days remaining',
        img: 'https://static.hungrynaki.com/hungrynaki-v4/deals/january_2022/deal_banner_1641704378700.jpeg',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png',
        company: "KFC Bangladesh",
        price: 100,
        time: '20:47 min'
    }
    , {
        id: "1",
        name: 'Demo1',
        comapny: 'chilox',
        remaining: '2 days remaining',
        img: 'https://static.hungrynaki.com/hungrynaki-v4/deals/january_2022/deal_banner_1641442276306.jpeg',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png',
        company: "KFC Bangladesh",
        price: 100,
        time: '20:47 min'
    }
    , {
        id: "1",
        name: 'Demo1',
        comapny: 'chilox',
        remaining: '2 days remaining',
        img: "https://static.hungrynaki.com/hungrynaki-v4/deals/january_2022/deal_banner_1641441899974.jpeg",
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png',
        company: "KFC Bangladesh",
        price: 100,
        time: '20:47 min'
    }
    , {
        id: "1",
        name: 'Demo1',
        comapny: 'chilox',
        remaining: '2 days remaining',
        img: "https://static.hungrynaki.com/hungrynaki-v4/deals/january_2022/deal_banner_1642431811248.jpeg",
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png',
        company: "KFC Bangladesh",
        price: 100,
        time: '20:47 min'
    }
    , {
        id: "1",
        name: 'Demo1',
        comapny: 'chilox',
        remaining: '2 days remaining',
        img: 'https://static.hungrynaki.com/hungrynaki-v4/deals/january_2022/deal_banner_1641990600264.jpeg'
        ,
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png',
        company: "KFC Bangladesh",
        price: 100,
        time: '20:47 min'
    }
    , {
        id: "1",
        name: 'Demo1',
        comapny: 'chilox',
        remaining: '2 days remaining',
        img: 'https://static.hungrynaki.com/hungrynaki-v4/deals/january_2022/deal_banner_1641990811040.jpeg',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png',
        company: "KFC Bangladesh",
        price: 100,
        time: '20:47 min'
    }
    , {
        id: "1",
        name: 'Demo1',
        comapny: 'chilox',
        remaining: '2 days remaining',
        img: 'https://static.hungrynaki.com/hungrynaki-v4/deals/january_2022/deal_banner_1641990811040.jpeg',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png',
        company: "KFC Bangladesh",
        price: 100,
        time: '20:47 min'
    }
    , {
        id: "1",
        name: 'Demo1',
        comapny: 'chilox',
        remaining: '2 days remaining',
        img: 'https://static.hungrynaki.com/hungrynaki-v4/deals/january_2022/deal_banner_1641876917161.jpeg',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png',
        company: "KFC Bangladesh",
        price: 100,
        time: '20:47 min'
    }
    , {
        id: "1",
        name: 'Demo1',
        comapny: 'chilox',
        remaining: '2 days remaining',
        img: 'https://static.hungrynaki.com/hungrynaki-v4/deals/january_2022/deal_banner_1641812541490.jpeg',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png',
        company: "KFC Bangladesh",
        price: 100,
        time: '20:47 min'
    }
    , {
        id: "1",
        name: 'Demo1',
        comapny: 'chilox',
        remaining: '2 days remaining',
        img: 'https://static.hungrynaki.com/hungrynaki-v4/deals/january_2022/deal_banner_1641901205427.jpeg',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png',
        company: "KFC Bangladesh",
        price: 100,
        time: '20:47 min'
    }
    , {
        id: "1",
        name: 'Demo1',
        comapny: 'chilox',
        remaining: '2 days remaining',
        img: 'https://static.hungrynaki.com/hungrynaki-v4/deals/january_2022/deal_banner_1641704378700.jpeg',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png',
        company: "KFC Bangladesh",
        price: 100,
        time: '20:47 min'
    }
]

const ResturantMenuItems = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-2 col-lg-2 col-0 ">
                    <div className="mt-5">
                        <ResturentMenu></ResturentMenu>
                    </div>

                </div>
                <div className="col-md-10 col-lg-10">
                    <div>
                        <div className='d-flex border-top border-bottom py-3 flex-md-row flex-column my-3 justify-content-between align-items-center'>
                            <span className='food_title'>Nearby Popular Resturent</span>
                            <div className="food_search">
                                <input type="text" placeholder='Search Pupular Resturent' name="search-food" id="" />
                            </div>
                        </div>

                        <div>
                            <div className='row gy-4'>
                                {
                                    ResturentData.map(data => <div className="col-12 col-lg-4 col-md-4 col-sm-6" >
                                        <div className=''>
                                            <div className='custom_card p-2'>
                                                <div className="">
                                                    <img className='img-fluid rounded' src={data.img} alt="" />
                                                </div>
                                                <div className='d-flex align-items-center mx-3 pb-2 mt-2 justify-content-between border-bottom'>
                                                    <div><img width='40' src={data.logo} alt="" /></div>
                                                    <div className='Sfood_title'>
                                                        <h6><span>
                                                            {data.comapny}
                                                        </span></h6>
                                                    </div>
                                                </div>
                                                <div className='d-flex p-5 justify-content-evenly'>
                                                    <div>
                                                        <small> <i class="far fa-heart"></i> {data.price}</small>
                                                    </div>

                                                    <div className='d-flex '>
                                                        <span className=''>{data.price }&nbsp; </span>
                                                        <div>
                                                            <i class="far fs-3 fw-lighter text-warning fa-plus-square"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>)
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ResturantMenuItems;