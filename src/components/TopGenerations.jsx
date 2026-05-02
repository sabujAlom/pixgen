import PhotoCard from "./PhotoCard";

const TopGenerations = async() => {
    const res = await fetch("https://pixgen-two-plum.vercel.app/data.json")
    const photos =await res.json()
    const topPhotos = photos.slice(0, 8)
    console.log(topPhotos)

    return (
        <>
            
            <h1 className="text-2xl font-bold">Top Generations</h1>
            <div className="grid grid-cols-4">
                {topPhotos.map(photo=><PhotoCard key={photo.id} photo={photo}/>)}
            </div>
        </>
    );
};

export default TopGenerations;