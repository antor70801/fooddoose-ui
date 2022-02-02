import React from 'react';
import { Link } from 'react-router-dom';
import resturentImg from '../../images/resturant.jpg';
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

const AllResturent = () => {
    return (
        <div>
            <div style={{ paddingTop: '85px' }}>
                <div className='container'>
                    <div class="card text-white custom_box_shadow">
                        <img src={resturentImg} class="card-img img-fluid" alt="..." />
                    </div>
                    <div className='pt-5'>
                        <div className='row gy-4'>
                            {
                                ResturentData.map(data => <div className="col-12 col-lg-3 col-md-3 col-sm-6" >
                                    <div className=''>
                                        <div className='custom_card p-2'>
                                            <div className="food_img">
                                                <img className='img-fluid' src={data.img} alt="" />
                                            </div>
                                            <div className='d-flex align-items-center mx-3 pb-2 mt-2 justify-content-between border-bottom'>
                                                <div><img width='40' src={data.logo} alt="" /></div>
                                                <div className='Sfood_title'>
                                                    <h6><span>
                                                        {data.comapny}
                                                    </span></h6>
                                                </div>
                                            </div>
                                            <div className='d-flex p-3 justify-content-between'>
                                                <div>
                                                    <small> Total Item: {data.price}</small>
                                                </div>
                                                <div className='Sfood_title'>
                                                    <span>{data.time}</span>
                                                </div>
                                                <div>
                                                    <span ><i class="far fa-star text-warning"></i>/5</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-end">
                        <li class="page-item disabled">
                            <Link class="page-link" to="/">Previous</Link>
                        </li>
                        <li class="page-item"><Link class="page-link" to="/">1</Link></li>
                        <li class="page-item"><Link class="page-link" to="/">2</Link></li>
                        <li class="page-item"><Link class="page-link" to="/">3</Link></li>
                        <li class="page-item">
                            <Link class="page-link" to="#">Next</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

    );
};

export default AllResturent;