import React from 'react';

const LoactionModal = () => {
    return (
        <div style={{ width: '180%' }}>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <button type="button" class="btn-close text-end m-3" data-bs-dismiss="modal" aria-label="Close"></button>

                        <div class="P-1 p-md-5 modal-body" style={{ height: '80vh', }}>
                            <h2 class="fw-bold fd-primary-text ">Choose Your Location</h2>
                            <div class="position-relative mt-5">
                                <input class="location-search-field " type="text" placeholder="Enter Your Location Name. Eg. Gulshan 1" />
                                <button class="location-search-btn">
                                    <span class="d-block d-md-none">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ fontSize: '18px' }}>
                                            <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
                                        </svg>
                                    </span>
                                    <span class="d-none d-md-block">Find Food</span>
                                </button>
                            </div>
                            <div className="py-3">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.216377487616!2d90.38051881506607!3d23.73966218459471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7db3123bb%3A0x33f738dc3ddbe79f!2sDhaka+City+College!5e0!3m2!1sen!2sbd!4v1517767338067"
                                    title='location ' width="100%" height="250px" frameborder="0" style={{ border: 0 }} allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default LoactionModal;