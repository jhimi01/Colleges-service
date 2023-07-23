import React from 'react';

const Gallery = () => {

  // const images = [
  //   "https://i.ibb.co/xYhs4fh/gra.jpg",
  //   "https://i.ibb.co/GpwQjbF/gra2.jpg",
  //   "https://i.ibb.co/XVsvzcN/gra3.jpg",
  //   "https://i.ibb.co/TqyF0DD/gra4.jpg",
  //   "https://i.ibb.co/yS9878f/gra5.jpg",
  //   "https://i.ibb.co/82LRPNX/gra6.jpg",
  //   "https://i.ibb.co/Pwh6gsn/gra7.jpg",
  //   "https://i.ibb.co/hxNdRjp/gra8.jpg",
  //   "https://i.ibb.co/r3Jbptb/gra9.jpg"
  // ]
  const images = [
    {
      src: 'https://i.ibb.co/xYhs4fh/gra.jpg',
      alt: 'Image 1',
      title: 'GreenLand University',
      description: 'Graduation is the successful completion of a course of study at a university, college, or school, for which you receive a degree or diploma.',
      graduateYear: '10.02.20018'
    },
    {
      src: 'https://i.ibb.co/GpwQjbF/gra2.jpg',
      alt: 'Image 2',
      title: 'Justom University',
      description: 'Graduation is the successful completion of a course of study at a university, college, or school, for which you receive a degree or diploma.',
      graduateYear: '10.02.2022'
    },
    {
      src: 'https://i.ibb.co/XVsvzcN/gra3.jpg',
      alt: 'Image 3',
      title: 'degrees of freedom University',
      description: 'Graduation is the successful completion of a course of study at a university, college, or school, for which you receive a degree or diploma.',
      graduateYear: '10.02.2020'
    },
    {
      src: 'https://i.ibb.co/TqyF0DD/gra4.jpg',
      alt: 'Image 4',
      title: 'norvel University',
      description: 'Graduation is the successful completion of a course of study at a university, college, or school, for which you receive a degree or diploma.',
      graduateYear: '10.02.2021'
    },
    {
      src: 'https://i.ibb.co/yS9878f/gra5.jpg',
      alt: 'Image 5',
      title: 'nortem University',
      description: 'Graduation is the successful completion of a course of study at a university, college, or school, for which you receive a degree or diploma.',
      graduateYear: '10.02.2006'
    },
    {
      src: 'https://i.ibb.co/82LRPNX/gra6.jpg',
      alt: 'Image 6',
      title: 'Palex University',
      description: 'Graduation is the successful completion of a course of study at a university, college, or school, for which you receive a degree or diploma.',
      graduateYear: '10.02.2004'
    },
    {
      src: 'https://i.ibb.co/Pwh6gsn/gra7.jpg',
      alt: 'Image 7',
      title: 'TESTING University',
      description: 'Graduation is the successful completion of a course of study at a university, college, or school, for which you receive a degree or diploma.',
      graduateYear: '10.02.2009'
    },
    {
      src: 'https://i.ibb.co/hxNdRjp/gra8.jpg',
      alt: 'Image 8',
      title: 'standard University',
      description: 'Graduation is the successful completion of a course of study at a university, college, or school, for which you receive a degree or diploma.',
      graduateYear: '10.02.2007'
    },
    {
      src: 'https://i.ibb.co/r3Jbptb/gra9.jpg',
      alt: 'Image 9',
      title: 'Moon University',
      description: 'Graduation is the successful completion of a course of study at a university, college, or school, for which you receive a degree or diploma.',
      graduateYear: '10.02.2005'
    },
  ];

    return (
<div className='lg:w-11/12 mx-auto my-20'>
<h1 className='text-4xl font-semibold text-center my-5'>Graduation Gallery</h1>
<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 ">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative cursor-pointer"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-100">
            <h2 className="text-white text-2xl mb-2 uppercase">{image.title}</h2>
            <p className="text-white text-base text-center">{image.description}</p>
            <p className="text-white text-base text-center">Graduation Year : {image.graduateYear}</p>
          </div>
        </div>
      ))}
    </div>
</div>
    );
};

export default Gallery;