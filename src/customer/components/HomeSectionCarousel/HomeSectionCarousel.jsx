import React from 'react';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';

const HomeSectionCarousel = ({data, sectionName}) => {
    const [activeIndex, setActiveIndex] = React.useState(0);

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const slidePrev = () => setActiveIndex(activeIndex - 1)
    const slideNext = () => setActiveIndex(activeIndex + 1)
    const syncActiveIndex = ({ item }) => setActiveIndex(item)
    const items = [1, 1, 1, 1, 1, 1, 1, 1, 1].map((item) => <HomeSectionCard />)

    return (
        <div className='border'>
            <h2 className='text-2xl font-extrabold text-gray-800 px-5'>{sectionName}</h2>
            <div className='relative p-5'>

                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    infinite
                    responsive={responsive}
                    disableDotsControls
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}

                />

                {activeIndex !== items.length - 5 && <Button
                    variant='contained'
                    className='z-50 bg-white'
                    onClick={slideNext}
                    sx={{ position: 'absolute', top: '8rem', right: '0rem', transform: 'translateX(50%) rotate(90deg)', bgcolor: 'white', }}
                    aria-label='next'
                >
                    <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
                </Button>}
                
                { activeIndex !== 0 && <Button
                    variant='contained'
                    className='z-50 bg-white'
                    onClick={slidePrev}
                    sx={{ position: 'absolute', top: '8rem', left: '-4.5rem', transform: 'translateX(50%) rotate(-90deg)', bgcolor: 'white' }}
                    aria-label='next'
                >
                    <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
                </Button>}
            </div>
        </div>
    )
}

export default HomeSectionCarousel