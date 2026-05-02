

const PhotoDetilsPage = async({params}) => {
    const {id} = await params;
     const res = await fetch('https://pixgen-two-plum.vercel.app/data.json');
    const photos = await res.json()
     const photo = photos.find(p=> p.id == id)
     
    return (
        <div>
            <h1>{photo?.title}</h1>
            <p>{photo.prompt}</p>
            <p>{photo.id}</p>
        </div>
    );
};

export default PhotoDetilsPage;