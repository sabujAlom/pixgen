import { Card } from '@heroui/react';
import Image from 'next/image';

import React from 'react';
import { BiDownload } from 'react-icons/bi';
import { FaHeart } from 'react-icons/fa';

const PhotoCard = ({photo}) => {
    console.log(photo)
    return (
        <Card className='border'>
            <div>
                <Image src={photo.imageUrl}
                height={200}
                width={200}
                alt='photo.title'
                />
            </div>
            <div>
                <h2 className='font-medium'>{photo.title}</h2>
            </div>
            <div className='flex items-center gap-2'>
                <p><FaHeart/></p>
                <p>{photo.likes}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p><BiDownload/></p>
                <p>{photo.downloads}</p>
            </div>
        </Card>
    );
};

export default PhotoCard;