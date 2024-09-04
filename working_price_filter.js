import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

function Productexplore() {
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState('paper');
    const [selectedPriceRange, setSelectedPriceRange] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const descriptionElementRef = useRef(null);

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handlePriceFilter = (range) => {
        setSelectedPriceRange(range);
    };

    useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    const Filterscatogeries = [
        {
            name: "Product 1",
            rs: "₹ 1000",
            price: 1000,
            discount: "18% off",
            image: "./image/productarriaval.jpeg"
        },
        {
            name: "Product 2",
            rs: "₹ 1500",
            price: 1500,
            discount: "10% off",
            image: "./image/productarriaval.jpeg"
        },
        {
            name: "Product 3",
            rs: "₹ 2500",
            price: 2500,
            discount: "20% off",
            image: "./image/productarriaval.jpeg"
        },
        {
            name: "Product 4",
            rs: "₹ 3500",
            price: 3500,
            discount: "15% off",
            image: "./image/productarriaval.jpeg"
        },
        {
            name: "Product 5",
            rs: "₹ 4500",
            price: 4500,
            discount: "25% off",
            image: "./image/productarriaval.jpeg"
        },
    ];

    useEffect(() => {
        if (selectedPriceRange) {
            const filtered = Filterscatogeries.filter(product => {
                return product.price >= selectedPriceRange[0] && product.price <= selectedPriceRange[1];
            });
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts(Filterscatogeries);
        }
    }, [selectedPriceRange]);

    return (
        <main className='poppins'>
            <section>
                <div className='poppins py-3 pb-md-5 pb-4 '>
                    <div className='container'>
                        <div className='d-flex align-items-center'>
                            <Link to="/" className='link text-2121'><h6 className='m-0  fw-normal'>Home</h6></Link>
                            <i className="fa-solid fa-angle-right py-1 px-3 fs-18 text-2121"></i>
                            <Link to="/Desktop" className='link text-2121'><h6 className='m-0  fw-normal'>Cooker</h6></Link>
                            <i className="fa-solid fa-angle-right py-1 px-3 fs-18 text-2121"></i>
                            <Link className='link text-2121'><h6 className='m-0  fw-normal'>Cooker</h6></Link>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='container'>
                    <div className='row'>
                        <div className='d-md-none d-block pb-2'>
                            <React.Fragment>
                                <Button className='text-start btn bg-da44 ' onClick={handleClickOpen('paper')}>Filters<i className="ps-2 align-middle fa-solid fa-filter"></i></Button>
                                <Dialog
                                    open={open}
                                    onClose={handleClose}
                                    scroll={scroll}
                                    aria-labelledby="scroll-dialog-title"
                                    aria-describedby="scroll-dialog-description"
                                >
                                    <DialogContent dividers={scroll === 'paper'}>
                                        <DialogContentText
                                            id="scroll-dialog-description"
                                            ref={descriptionElementRef}
                                            tabIndex={-1}
                                        >
                                            <div className='poppins'>
                                                <h5 className='fw-bold fs-5 pb-md-0 pb-3'>Filters<i className="ps-2 align-middle fa-solid fa-filter"></i></h5>
                                                <div className='border border-1 border-black rounded-3 py-3'>
                                                    <div className='bg-da4 mx-1 rounded-3'>
                                                        <h6 className='fw-bold fs-18px-in-filter-title text-white py-2 mb-3 ps-5'>Price</h6>
                                                    </div>
                                                    <div className='ps-lg-5 ps-3 d-flex align-items-center'>
                                                        <input type='radio' name='price' className='ms-1 me-0' onChange={() => handlePriceFilter([1000, 2000])} />
                                                        <label className='fw-normal text-2121 ps-3'>₹ 1000 to ₹ 2000</label>
                                                    </div>
                                                    <div className='ps-lg-5 ps-3 d-flex align-items-center pt-3'>
                                                        <input type='radio' name='price' className='ms-1 me-0' onChange={() => handlePriceFilter([2001, 3000])} />
                                                        <label className='fw-normal text-2121 ps-3'>₹ 2001 to ₹ 3000</label>
                                                    </div>
                                                    <div className='ps-lg-5 ps-3 d-flex align-items-center pt-3'>
                                                        <input type='radio' name='price' className='ms-1 me-0' onChange={() => handlePriceFilter([3001, 4000])} />
                                                        <label className='fw-normal text-2121 ps-3'>₹ 3001 to ₹ 4000</label>
                                                    </div>
                                                    <div className='ps-lg-5 ps-3 d-flex align-items-center pt-3'>
                                                        <input type='radio' name='price' className='ms-1 me-0' onChange={() => handlePriceFilter([4001, 5000])} />
                                                        <label className='fw-normal text-2121 ps-3'>₹ 4001 to ₹ 5000</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleClose}>Cancel</Button>
                                        <Button onClick={handleClose}>Apply</Button>
                                    </DialogActions>
                                </Dialog>
                            </React.Fragment>
                        </div>

                        <div className='col-md-4 d-md-block d-none'>
                            <div>
                                <h5 className='fw-bold fs-5'>Filters<i className="ps-2 align-middle fa-solid fa-filter"></i></h5>
                                <div className='border border-1 border-black rounded-3 py-3'>
                                    <div className='bg-da4 mx-1 rounded-3'>
                                        <h6 className='fw-bold fs-18 text-white py-2 mb-3 ps-5'>Price</h6>
                                    </div>
                                    <div className='ps-lg-5 ps-3 d-flex align-items-center'>
                                        <input type='radio' name='price' className='ms-1 me-0' onChange={() => handlePriceFilter([1000, 2000])} />
                                        <label className='fw-normal text-2121 ps-3'>₹ 1000 to ₹ 2000</label>
                                    </div>
                                    <div className='ps-lg-5 ps-3 d-flex align-items-center pt-3'>
                                        <input type='radio' name='price' className='ms-1 me-0' onChange={() => handlePriceFilter([2001, 3000])} />
                                        <label className='fw-normal text-2121 ps-3'>₹ 2001 to ₹ 3000</label>
                                    </div>
                                    <div className='ps-lg-5 ps-3 d-flex align-items-center pt-3'>
                                        <input type='radio' name='price' className='ms-1 me-0' onChange={() => handlePriceFilter([3001, 4000])} />
                                        <label className='fw-normal text-2121 ps-3'>₹ 3001 to ₹ 4000</label>
                                    </div>
                                    <div className='ps-lg-5 ps-3 d-flex align-items-center pt-3'>
                                        <input type='radio' name='price' className='ms-1 me-0' onChange={() => handlePriceFilter([4001, 5000])} />
                                        <label className='fw-normal text-2121 ps-3'>₹ 4001 to ₹ 5000</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-8'>
                            <div className='row'>
                                {filteredProducts.length > 0 ? (
                                    filteredProducts.map((product, index) => (
                                        <div className='col-md-4 mb-4' key={index}>
                                            <div className='card'>
                                                <img src={product.image} className='card-img-top' alt={product.name} />
                                                <div className='card-body'>
                                                    <h5 className='card-title'>{product.name}</h5>
                                                    <p className='card-text'>{product.rs}</p>
                                                    <p className='card-text'>{product.discount}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p>No products found in this price range.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Productexplore;
